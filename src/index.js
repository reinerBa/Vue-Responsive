// For Bootstrap 4
const bootstrap4Breakpoints = {
  xs: {
    class: false,
    min: -1,
    max: 543
  },
  sm: {
    class: false,
    min: 544,
    max: 767
  },
  md: {
    class: false,
    min: 768,
    max: 991
  },
  lg: {
    class: false,
    min: 992,
    max: 1199
  },
  xl: {
    class: false,
    min: 1200,
    max: Infinity
  }
}

// For Bootstrap 3
const bootstrap3Breakpoints = {
  xs: {
    class: false,
    min: -1,
    max: 767
  },
  sm: {
    class: false,
    min: 768,
    max: 991
  },
  md: {
    class: false,
    min: 992,
    max: 1199
  },
  lg: {
    class: false,
    min: 1200,
    max: Infinity
  }
}

function shortIntoBreakpoint (str, rValue) {
  // is positive ?
  let numValue = Number(str)
  if (numValue > 0) rValue.min = numValue
  else rValue.max = -numValue
}

function isShortSyntax (binding) {
  var isShort = typeof (binding.value) === 'number' || (typeof (binding.expression) === 'string' &&
    (binding.expression.indexOf('+') === 0 || binding.expression.indexOf('-') === 0 || !isNaN(binding.expression[0])))

  if (!isShort) return false
  var rValue = {}
  if (~binding.expression.indexOf('&&')) { // is range?
    binding.expression.split('&&').map(e => e.trim()).forEach(e => shortIntoBreakpoint(e, rValue))
  } else {
    shortIntoBreakpoint(binding.expression.trim(), rValue)
  }
  return rValue
}
const self = {
  idIncrement: 1,
  resizeListeners: null,
  init: false,
  _rPermissions: {
    bs4: bootstrap4Breakpoints,
    bs3: bootstrap3Breakpoints
  }
}

var vueResponsive = {
  bind: function (el, binding, vnode) {
    var isShort = isShortSyntax(binding)
    console.log(isShort)
    // Bootstrap 4 Repsonsive Utils default
    var componentHasDefault = !!self._rPermissions.default
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
    for (let key in self._rPermissions[binding.arg]) {
      validInputs.push(key)
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
    let modifiers = Object.keys(binding.modifiers)
    if (modifiers.some(k => ~validInputs.indexOf(k))) {
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
    var rPermissions = { rId: String(self.idIncrement++) }

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

    // save the settings for this element in it's dataset
    el.dataset.responsives = window.JSON.stringify(rPermissions)
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

    /**
     * This function checks the current breakpoint constraints for this element
     */
    function checkDisplay () {
      var myPermissions = JSON.parse(el.dataset.responsives)
      var curWidth = window.innerWidth
      var initial = el.dataset.initialDisplay ? el.dataset.initialDisplay : ''
      var parameters = self._rPermissions[binding.arg]
      for (let i in parameters) {
        if (curWidth >= parameters[i].min && curWidth <= parameters[i].max) {
          el.style.display = myPermissions[i] ? initial : 'none'
          break
        }
      }
    }
    checkDisplay()

    var resizeListenerId = JSON.parse(el.dataset.responsives).rId
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
    var resizeListenerId = JSON.parse(el.dataset.responsives).rId
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
