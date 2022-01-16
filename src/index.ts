import { App } from '@vue/runtime-core';
//import Positions from './defaults/positions.js'
import createDirective from './directive'
import OptionsForVueResponsive from './Interfaces/OptionsForVueResponsive';
import vueDirective from './Interfaces/vueDirective.js';
import { vueResponsive as version2 } from './vue2/Vue-Responsive'

const VueResponsivePlugin = {
  install(app: App, options: OptionsForVueResponsive) {
    if (!options) {
      options = { setClasses: true, default: 'bs5' }
    }

    if( app.version.startsWith("2.")) {
      // @ts-ignore
      version2.install(app, options)
      return;
    } else if( app.version.startsWith("3.") ) {
      var vueResponsiveDirective: vueDirective = createDirective(options)
      app.directive('responsive', vueResponsiveDirective)
    } else {
      throw Error("vue version 1 is no longer supported, please use an old version")
    }

//    const Toast = new T(options);
//    app.component('toasted', ToastComponent);
//    app.config.globalProperties.$toasted = Toast;
//    app.provide(VueToastedSymbol, Toast);
  }
}

export default VueResponsivePlugin