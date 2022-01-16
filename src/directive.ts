import { DirectiveBinding, VNode, Directive, RendererNode, RendererElement } from '@vue/runtime-core'
import vueDirective from './Interfaces/vueDirective'
import { VueElement } from '@vue/runtime-dom'
import { bootstrap3Breakpoints, bootstrap4Breakpoints, bootstrap5Breakpoints } from './defaults/defaultBreakpoints'
import Permission from './Interfaces/permission'
import internalConfigStore from './Interfaces/userConfigStore'
import OptionsForVueResponsive from './Interfaces/OptionsForVueResponsive'
import { getBreakpointSet, resolveBreakpoints } from './helpers/resolveBreakpoints'

const vueResponsiveDirective: (globalOptions: OptionsForVueResponsive) => vueDirective = (globalOptions: OptionsForVueResponsive = {setClasses: true, default: 'bs5'}) => {
    
    const additionalBreakpoints =  resolveBreakpoints(globalOptions.breakpoints)
    
    const self: internalConfigStore = {
        idIncrement: 1,
        resizeListeners: null,
        init: false,
        _rPermissions: {
            bs5: bootstrap5Breakpoints,
            bs4: bootstrap4Breakpoints,
            bs3: bootstrap3Breakpoints
        },
        allProperties: { lastBp:'', useClass: globalOptions.setClasses, bpSet: choosenBreakpoints }
    }
    const defaultBreakpoints = getBreakpointSet(globalOptions.default)
    var initialised: boolean = false

    return {
        created: function (el: VueElement, binding: DirectiveBinding<any>, vNode: VNode<RendererNode, RendererElement, { [key: string]: any }>): void {
        },
        beforeMount: function (el: VueElement, binding: DirectiveBinding<any>, vNode: VNode<RendererNode, RendererElement, { [key: string]: any }>): void {
        
        // Bootstrap 4 Repsonsive Utils default
        var componentHasDefault = !!self._rPermissions.default
        let useClass = !!binding.modifiers.class
        if (!initialised) {
            for (let i in vNode.context.$data) {
                if (i.indexOf('responsiveMarks$$') === 0) {
                var name = String(i).replace('responsiveMarks$$', '').toLowerCase()
                self._rPermissions[name] = {}

                for (let ii in vNode.context.$data[i]) self._rPermissions[name][ii] = vNode.context.$data[i][ii]
                }
            }
            // Set bs4 as default if not default is explicitly set
            self._rPermissions.undefined = componentHasDefault ? self._rPermissions[componentHasDefault] : self._rPermissions.bs4
            initialised = true
        }
        var validInputs = ['hidden-all']
        let validPositiv = []
        let choosenBPointsName = componentHasDefault ? self._rPermissions.defaultName : (binding.arg || 'bs4')
        for (let key in self._rPermissions[binding.arg]) {
        validInputs.push(key)
        validPositiv.push(key)
        validInputs.push('hidden-' + key)
        }

        // if this is the first element with this directive that gets bound add the resize listener
        if (!self.resizeListeners) {
        self.resizeListeners = {}

        // adds a single resize listener for all elements
        window.addEventListener('resize', function () {
            // calls the checkDisplay function for all elements that are active in the DOM and use this directive
            for (let i in self.resizeListeners) if (!isNaN(i)) self.resizeListeners[i]()
        })
        }

        // if the element has a user defined css-value, save it!
        if (el.style.display) el.dataset.initialDisplay = el.style.display ? el.style.display : getComputedStyle(el, null).display

        let preParams = []

        // need a case for the short syntax
        // are the modifiers decisive?
        let modifiers = window.Object.keys(binding.modifiers)
        if (useClass) {}
        else if (modifiers.some(k => ~validPositiv.indexOf(k.replace(/\+|-/g, '')))) {
        modifiers.forEach(m => {
            // if (/^(\+|-)|(\+|-)$/g.test(modifiers))
        })
        preParams.push(...modifiers)
        preParams.push('hidden-all')
        preParams.sort()
        } else if (Array.isArray(binding.value) || (typeof binding.expression === 'string' && binding.expression.match(/[*]/))) {
        if (Array.isArray(binding.value)) {
            preParams = binding.value
        } else {
            var stringArray = binding.expression.replace(/'/g, '"')
            preParams = JSON.parse(stringArray)
        }
        preParams.sort()
        } else if (binding.value instanceof Object) {
        for (let i in binding.value) {
            if (binding.value[i]) preParams.push(i)
        }
        } else if (typeof binding.value === 'string' || typeof binding.expression === 'string') { // a single parameter
        var val = binding.value || binding.expression.replace(/'"/g, '')
        preParams = new Array(val)
        preParams.sort()
        } else {
        return // no parameter given, no work :/
        }
        // init the permission object with an id
        let rId = String(self.idIncrement++)

        // save the settings for this element in it's dataset
        el.dataset.responsives = rId
        var rPermissions: Permission = { lastBp: '', bpSet: choosenBPointsName, useClass }

        let hiddenAllIndex = preParams.indexOf('hidden-all')
        if (~hiddenAllIndex) {
        preParams.splice(hiddenAllIndex, 1)
        // disallow all breakpoints as initial value
        for (let i in self._rPermissions[binding.arg]) rPermissions[i] = 0
        } else {
        // allow all breakpoints as initial value
        for (let k in self._rPermissions[binding.arg]) rPermissions[k] = 1
        }

        for (let i = 0; i < preParams.length; i++) {
        let item = preParams[i]
        if (!~validInputs.indexOf(item)) continue
        if (item.indexOf('hidden') === 0) { // hidden-..
            var key = item.split('-')[1]
            rPermissions[key] = 0 // show = false
        } else {
            rPermissions[item] = 1 // show = true
        }
        }

        self.allProperties[rId] = rPermissions  
        },
        mounted: function (el: VueElement, binding: DirectiveBinding<any>, vNode: VNode<RendererNode, RendererElement, { [key: string]: any }>): void {
            
        if (el.dataset.responsives == null) return
        // todo: throw error if isNaN
        let resizeListenerId = el.dataset.responsives

        /**
         * This function checks the current breakpoint constraints for this element
         */
        function checkDisplay () {
        var myPermissions = self.allProperties[resizeListenerId] // JSON.parse(el.dataset.responsives)
        var curWidth = window.innerWidth
        var initial = el.dataset.initialDisplay ? el.dataset.initialDisplay : ''
        var parameters = self._rPermissions[binding.arg]
        for (let i in parameters) {
            if (curWidth >= parameters[i].min && curWidth <= parameters[i].max) {
            if (myPermissions.lastBp !== i) {
                if (self.allProperties[resizeListenerId].useClass) {
                el.classList.add(myPermissions.bpSet + '-' + i)
                el.classList.remove(myPermissions.bpSet + '-' + myPermissions.lastBp)
                } else {
                el.style.display = myPermissions[i] ? initial : 'none'
                }

                self.allProperties[resizeListenerId].lastBp = i
            }
            break
            }
        }
        }
        checkDisplay()
        self.resizeListeners[resizeListenerId] = checkDisplay
        },

        unmounted: function (el: VueElement, binding: DirectiveBinding<any>, vNode: VNode<RendererNode, RendererElement, { [key: string]: any }>): void {
            let resizeListenerId = el.dataset.responsives
            delete self.resizeListeners[resizeListenerId]
        },

        beforeUpdate: function (el: VueElement, binding: DirectiveBinding<any>, vNode: VNode<RendererNode, RendererElement, { [key: string]: any }>, prevNode: VNode<RendererNode, RendererElement, { [key: string]: any }>): void {
        },
        updated: function (el: VueElement, binding: DirectiveBinding<any>, vNode: VNode<RendererNode, RendererElement, { [key: string]: any }>, prevNode: VNode<RendererNode, RendererElement, { [key: string]: any }>): void {
        },
        beforeUnmount: function (el: VueElement, binding: DirectiveBinding<any>, vNode: VNode<RendererNode, RendererElement, { [key: string]: any }>): void {
        }
    }
}

export default vueResponsiveDirective
