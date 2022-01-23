import { Directive, DirectiveBinding, VNode, VueElement } from "vue"

// For Bootstrap 4
const bootstrap4Breakpoints: breakpointSet = {
//  name: 'bs4',
  xs: {
    min: -1,
    max: 543
  },
  sm: {
    min: 544,
    max: 767
  },
  md: {
    min: 768,
    max: 991
  },
  lg: {
    min: 992,
    max: 1199
  },
  xl: {
    min: 1200,
    max: Infinity
  }
}

// For Bootstrap 3
const bootstrap3Breakpoints: breakpointSet = {
//  name: 'bs3',
  xs: {
    min: -1,
    max: 767
  },
  sm: {
    min: 768,
    max: 991
  },
  md: {
    min: 992,
    max: 1199
  },
  lg: {
    min: 1200,
    max: Infinity
  }
}

export interface breakpointRange {
  min: number
  max: number
}
export interface breakpointSet {
  xs?: breakpointRange
  sm?: breakpointRange
  md?: breakpointRange
  lg?: breakpointRange
  xl?: breakpointRange
  xxl?: breakpointRange
  [key: string]: breakpointRange | undefined
}
export interface choosenPermissions {
  lastBp: string
  bpSet: string
  useClass: boolean
}
export interface vueResponsiveOptions {
  breakpoints: breakpointSet | Array<breakpointSet>
}

interface bpList {
  default: Object | null
  bs4: Object
  bs3: Object
}
interface options {
  breakpoints: Map<string, breakpointSet>
  idIncrement: number
  resizeListeners: Array<ResizeListener>
  init: boolean
  allProperties: Map<number, choosenPermissions>
  choosenBpSet: breakpointSet | undefined
}
interface ResizeListener {
  id: string
  checkDisplay: Function
}

const self: options = {
  breakpoints: new Map<string, breakpointSet>(),
  idIncrement: 1,
  resizeListeners: [],
  init: false,
  choosenBpSet: undefined,
 /* _rPermissions: {
    bs4: bootstrap4Breakpoints,
    bs3: bootstrap3Breakpoints,
    default: undefined
  },
*/  allProperties: new Map<number, choosenPermissions>() // id: {lastBp:'', pointsName: '', dataset: {}}
}

var vueResponsive : Directive = {
  created(el: VueElement, binding: DirectiveBinding, vNode: VNode) {

    if (!self.init) {
      self.breakpoints.set('bs3', bootstrap3Breakpoints)
      self.breakpoints.set('bs4', bootstrap4Breakpoints)

      if (!self.choosenBpSet) {
        self.choosenBpSet = bootstrap4Breakpoints
      }
      if (binding.arg && self.breakpoints.has(binding.arg)) {
        self.choosenBpSet = self.breakpoints.get(binding.arg)
      }
      // Bootstrap 4 Repsonsive Utils default
//      var componentHasDefault: boolean = !!self._rPermissions.default      // @deprecated feature! Insert with create function
/*      for (let i in vNode.context.$data) {  
        if (i.indexOf('responsiveMarks$$') === 0) {
          var name = String(i).replace('responsiveMarks$$', '').toLowerCase()
          self._rPermissions[name] = {}

          for (let ii in vNode.context.$data[i]) self._rPermissions[name][ii] = vNode.context.$data[i][ii]
        }
        if (i === 'responsiveDefault$$') componentHasDefault = vNode.context.$data[i]
      } */
      // Set bs4 as default if not default is explicitly set
//      self._rPermissions.undefined = componentHasDefault ? self._rPermissions[componentHasDefault] : self._rPermissions.bs4

      // adds a single resize listener for all elements
      window.addEventListener('resize', () => {
        // calls the checkDisplay function for all elements that are active in the DOM and use this directive
        self.resizeListeners.forEach((rl: ResizeListener) => rl.checkDisplay())
//        for (let i in self.resizeListeners) if (!isNaN(i)) self.resizeListeners[i]()
      })
    self.init = true
    }
  },
  beforeMount (el: VueElement, binding: DirectiveBinding, vNode: VNode) {

    let useClass = !!binding.modifiers.class

    var validInputs = ['hidden-all']
    let validPositiv: string[] = []
//    let choosenBPointsName: choosenPermissions = componentHasDefault ? self._rPermissions.defaultName : (binding.arg || 'bs4')
    for (let key in self.choosenBpSet /* _rPermissions[binding.arg] */) {
      validInputs.push(key)
      validPositiv.push(key)
      validInputs.push('hidden-' + key)
    }

    // if this is the first element with this directive that gets bound add the resize listener
    //if (!self.resizeListeners) {
      //self.resizeListeners = {}
  

    // if the element has a user defined css-value, save it!
    if (el.style.display) el.dataset.initialDisplay = el.style.display ? el.style.display : getComputedStyle(el, null).display

    let preParams = []

    // need a case for the short syntax
    // are the modifiers decisive?
    let modifiers = window.Object.keys(binding.modifiers)
    let includesPlusMinus = modifiers.some((k: string) => {
      let plusMinusRegex = /\+|-/g
      let cmpEl = k.replace(plusMinusRegex, '')
      let includesElement: boolean = validPositiv.includes(cmpEl)
      return includesElement
    })

    if (useClass){}
    else if (includesPlusMinus) {
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
    let rId = self.idIncrement++

    // save the settings for this element in it's dataset
    el.dataset.responsives = String(rId)
    var rPermissions: choosenPermissions = { lastBp: '', bpSet: self.choosenBpSet!.name, useClass }

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

    self.allProperties.set(rId, rPermissions)
  },

  /**
   * Is callend when the element is inserted into the DOM
   *
   * @param  {object} el      html element
   * @param  {object} binding the parameters of the mixin
   * @param  {object} vnode   the virtual html elment
   */
   mounted (el: VueElement, binding: DirectiveBinding, vNode: VNode) {
    if (el.dataset.responsives == null) return
    // todo: throw error if isNaN
    let resizeListenerId: number = Number.parseInt( el.dataset.responsives )
    
    var myPermissions = self.allProperties.get(resizeListenerId) // JSON.parse(el.dataset.responsives)
    /**
     * This function checks the current breakpoint constraints for this element
     */
    function checkDisplay () {
      var curWidth = window.innerWidth
      var initial = el.dataset.initialDisplay ? el.dataset.initialDisplay : ''
      var parameters: breakpointSet = self._rPermissions[binding.arg]
      for (let i in parameters) {
        if (curWidth >= parameters[i].min && curWidth <= parameters[i].max) {
          if (myPermissions!.lastBp !== i) {
            if (self.allProperties.get(resizeListenerId)!.useClass) {
              el.classList.add(myPermissions!.bpSet + '-' + i)
              el.classList.remove(myPermissions!.bpSet + '-' + myPermissions!.lastBp)
            } else {
              el.style.display = myPermissions[i] ? initial : 'none !important'
            }

            self.allProperties.get(resizeListenerId)!.lastBp = i
          }
          break
        }
      }
    }
    checkDisplay()
    self.resizeListeners.push({id: resizeListenerId, checkDisplay})
//    self.resizeListeners[resizeListenerId] = checkDisplay
  },

  /**
   * Is called when the html element is removed from DOM
   *
   * @param  {object} el      html element
   * @param  {object} binding the parameters of the mixin
   * @param  {object} vnode   the virtual html elment
   */
   unmounted (el: VueElement, binding: DirectiveBinding, vNode: VNode) {
    let resizeListenerId = el.dataset.responsives
    let idx = self.resizeListeners.findIndex(rl => rl.id === resizeListenerId)
    self.resizeListeners.splice(idx, 1)
    //delete self.resizeListeners[resizeListenerId]
  }
}

/**
 * Install vue-responsive globally to Vue.js
 *
 * @param  {object} Vue     the constructor of the framework
 * @param  {object} options parameter to modify the behavior of the plugin
 * @return {void}         returns nothing
 *
vueResponsive.install = function (Vue, options) {
  if (typeof (options) === 'object' && options.breakpoints) {
    self._rPermissions.default = options.breakpoints
  }
  Vue.directive('responsive', vueResponsive)
}*/

// https://babeljs.io/docs/plugins/transform-es2015-modules-umd/
export {vueResponsive}
export default vueResponsive

export function fromSettings (settings: vueResponsiveOptions) : Directive{
//  self._rPermissions.default = settings.breakpoints

  if(settings.breakpoints) {
    if (Array.isArray(settings.breakpoints)) {
      for(let el of settings.breakpoints) {
        self.breakpoints.set(el.name, el)
      }
    } else {
      self.choosenBpSet = settings.breakpoints
      self.choosenBpSet.name = self.choosenBpSet.name ?? 'custom' 
      self.breakpoints.set(self.choosenBpSet?.name, self.choosenBpSet)
    }
  }

  return vueResponsive
}