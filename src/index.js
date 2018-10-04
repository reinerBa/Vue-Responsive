// For Bootstrap 4
const bootstrap4Breakpoints = {
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
const bootstrap3Breakpoints = {
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

const self = {
  idIncrement: 1,
  resizeListeners: null,
  init: false,
  _rPermissions: {
    bs4: bootstrap4Breakpoints,
    bs3: bootstrap3Breakpoints
  },
  allProperties: {} // id: {lastBp:'', pointsName: '', dataset: {}}
}

var vueResponsive = {
  bind: function (el, binding, vnode) {
    // Bootstrap 4 Repsonsive Utils default
    var componentHasDefault = !!self._rPermissions.default
    let useClass = !!binding.modifiers.class
    if (!self.init) {
      for (let i in vnode.context.$data) {
        if (i.indexOf('responsiveMarks$$') === 0) {
          var name = String(i).replace('responsiveMarks$$', '').toLowerCase()
          self._rPermissions[name] = {}

          for (let ii in vnode.context.$data[i]) self._rPermissions[name][ii] = vnode.context.$data[i][ii]
        }
        if (i === 'responsiveDefault$$') componentHasDefault = vnode.context.$data[i]
      }
      // Set bs4 as default if not default is explicitly set
      self._rPermissions.undefined = componentHasDefault ? self._rPermissions[componentHasDefault] : self._rPermissions.bs4
      self.init++
    }
    var validInputs = ['hidden-all']
    let validPositiv = []
    let choosenBPointsName = componentHasDefault ? self._rPermissions.defaultName : (binding.arg || 'bs4')
    for (let key in self._rPermissions[binding.arg]) {
      validInputs.push(key)
      validPositiv.push(key)
      validInputs.push(`hidden-${key}`)
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
    if (useClass);
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
    var rPermissions = { lastBp: '', bpSet: choosenBPointsName, useClass }

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

  /**
   * Is callend when the element is inserted into the DOM
   *
   * @param  {object} el      html element
   * @param  {object} binding the parameters of the mixin
   * @param  {object} vnode   the virtual html elment
   */
  inserted: function (el, binding, vnode) {
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

  /**
   * Is called when the html element is removed from DOM
   *
   * @param  {object} el      html element
   * @param  {object} binding the parameters of the mixin
   * @param  {object} vnode   the virtual html elment
   */
  unbind: function (el, binding, vnode) {
    let resizeListenerId = el.dataset.responsives
    delete self.resizeListeners[resizeListenerId]
  }
}

/**
 * Install vue-responsive globally to Vue.js
 *
 * @param  {object} Vue     the constructor of the framework
 * @param  {object} options parameter to modify the behavior of the plugin
 * @return {void}         returns nothing
 */
vueResponsive.install = function (Vue, options) {
  if (typeof (options) === 'object' && options.breakpoints) {
    self._rPermissions.default = options.breakpoints
  }
  Vue.directive('responsive', vueResponsive)
}

// https://babeljs.io/docs/plugins/transform-es2015-modules-umd/
export {vueResponsive}
export default vueResponsive

// Check if the directive should be used globally
try {
  var notGlobal = false
  var currScriptFn = document.currentScript
  currScriptFn = currScriptFn || (function () {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  })()
  notGlobal = Boolean(currScriptFn.getAttribute('notGlobal'))
  if (!notGlobal && typeof window !== 'undefined' && typeof window.Vue === 'function') window.Vue.use(vueResponsive)
} catch (idk) { console.error(idk) }
