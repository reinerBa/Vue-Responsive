import { V as VuePrism } from "./vendor.5582453e.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var render$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "demoOne" }, [_c("h1", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "xl"], expression: "['hidden-all','xl']" }] }, [_vm._v("A Vue.js responsivity plugin")]), _c("h2", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "lg"], expression: "['hidden-all','lg']" }] }, [_vm._v("A Vue.js responsivity plugin")]), _c("h3", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "md"], expression: "['hidden-all','md']" }] }, [_vm._v("A Vue.js responsivity plugin")]), _c("h4", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "sm"], expression: "['hidden-all','sm']" }] }, [_vm._v("A Vue.js responsivity plugin")]), _c("h5", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "xs"], expression: "['hidden-all','xs']" }] }, [_vm._v("A Vue.js responsivity plugin")]), _c("h1", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "xl"], expression: "['hidden-all','xl']" }] }, [_vm._v("extra large")]), _c("h2", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "lg"], expression: "['hidden-all','lg']" }] }, [_vm._v("large")]), _c("h3", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "md"], expression: "['hidden-all','md']" }] }, [_vm._v("medium")]), _c("h4", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "sm"], expression: "['hidden-all','sm']" }] }, [_vm._v("small")]), _c("h5", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "xs"], expression: "['hidden-all','xs']" }] }, [_vm._v("extra small")]), _vm._m(0), _c("h4", [_vm._v(" The sourcecode of the two lines above: ")]), _c("pre", { staticClass: "language-html" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.code) } })])]);
};
var staticRenderFns$8 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", { staticStyle: { "margin": "15px auto", "border-spacing": "0" } }, [_c("tr", [_c("th", [_vm._v("v-responsive=")]), _c("th", [_vm._v("XS")]), _c("th", [_vm._v("SM")]), _c("th", [_vm._v("MD")]), _c("th", [_vm._v("LG")]), _c("th", [_vm._v("XL")])]), _c("tr", [_c("td", [_vm._v("['hidden-all', 'xs', 'xl']")]), _c("td", [_vm._v(".")]), _c("td"), _c("td"), _c("td"), _c("td", [_vm._v(".")])]), _c("tr", [_c("td", [_vm._v("['hidden-xs']")]), _c("td"), _c("td", [_vm._v(".")]), _c("td", [_vm._v(".")]), _c("td", [_vm._v(".")]), _c("td", [_vm._v(".")])]), _c("tr", [_c("td", [_vm._v("['hidden-xs', 'hidden-sm']")]), _c("td"), _c("td"), _c("td", [_vm._v(".")]), _c("td", [_vm._v(".")]), _c("td", [_vm._v(".")])]), _c("tr", [_c("td", [_vm._v("['hidden-all', 'lg', 'xl']")]), _c("td"), _c("td"), _c("td"), _c("td", [_vm._v(".")]), _c("td", [_vm._v(".")])]), _c("tr", [_c("td", [_vm._v("['hidden-all', 'xl']")]), _c("td"), _c("td"), _c("td"), _c("td"), _c("td", [_vm._v(".")])]), _c("tr", [_c("td", [_vm._v("['hidden-all', 'xs', 'md', 'xl']")]), _c("td", [_vm._v(".")]), _c("td"), _c("td", [_vm._v(".")]), _c("td"), _c("td", [_vm._v(".")])])]);
}];
var DemoOne_vue_vue_type_style_index_0_scoped_true_lang = "";
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const __vue2_script$8 = {
  name: "DemoOne",
  data() {
    return {
      code: `<h1 v-responsive="['hidden-all','xl']">A Vue.js responsivity plugin</h1>
<h2 v-responsive="['hidden-all','lg']">A Vue.js responsivity plugin</h2>
<h3 v-responsive="['hidden-all','md']">A Vue.js responsivity plugin</h3>
<h4 v-responsive="['hidden-all','sm']">A Vue.js responsivity plugin</h4>
<h5 v-responsive="['hidden-all','xs']">A Vue.js responsivity plugin</h5>

<h1 v-responsive="['hidden-all','xl']">extra large</h1>
<h2 v-responsive="['hidden-all','lg']">large</h2>
<h3 v-responsive="['hidden-all','md']">medium</h3>
<h4 v-responsive="['hidden-all','sm']">small</h4>
<h5 v-responsive="['hidden-all','xs']">extra small</h5>`
    };
  }
};
const __cssModules$8 = {};
var __component__$8 = /* @__PURE__ */ normalizeComponent(__vue2_script$8, render$8, staticRenderFns$8, false, __vue2_injectStyles$8, "46488d3e", null, null);
function __vue2_injectStyles$8(context) {
  for (let o in __cssModules$8) {
    this[o] = __cssModules$8[o];
  }
}
var DemoOne = /* @__PURE__ */ function() {
  return __component__$8.exports;
}();
var render$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "demoTwo" }, [_c("div", [_c("p", { directives: [{ name: "responsive", rawName: "v-responsive", value: "hidden-xs", expression: "'hidden-xs'" }] }, [_vm._v("I am hidden on extra small device screens")]), _c("p", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-sm", "hidden-xs"], expression: "['hidden-sm', 'hidden-xs']" }] }, [_vm._v("I am hidden on small device screens")]), _c("p", { directives: [{ name: "responsive", rawName: "v-responsive", value: _vm.respObj, expression: "respObj" }] }, [_vm._v("This elements visibility is controlled by an object")])]), _c("pre", { staticClass: "language-html" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.codeHtml) } })]), _c("pre", { staticClass: "language-js" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.codeJs) } })])]);
};
var staticRenderFns$7 = [];
var DemoTwo_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$7 = {
  name: "DemoTwo",
  data() {
    return {
      respObj: { "hidden-md": true, "hidden-lg": true, "hidden-xl": true },
      codeHtml: `<p v-responsive="'hidden-xs'">I am hidden on extra small device screens</p>
<p v-responsive="['hidden-sm', 'hidden-xs']">I am hidden on small device screens</p>
<span v-responsive="respObj">This elements visibility is controlled by an object</span>`,
      codeJs: `data () { return {
  respObj: { "hidden-md": true, "hidden-lg": true, "hidden-xl": true },
`
    };
  }
};
const __cssModules$7 = {};
var __component__$7 = /* @__PURE__ */ normalizeComponent(__vue2_script$7, render$7, staticRenderFns$7, false, __vue2_injectStyles$7, "5c23a6f4", null, null);
function __vue2_injectStyles$7(context) {
  for (let o in __cssModules$7) {
    this[o] = __cssModules$7[o];
  }
}
var DemoTwo = /* @__PURE__ */ function() {
  return __component__$7.exports;
}();
var render$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "demoThree" }, [_c("h4", { staticClass: "title" }, [_vm._v("This example shows how easy you can use the Breakpoints of Bootstrap 3, which are different of the default Bootstrap 4 breakpoints")]), _c("p", { directives: [{ name: "responsive", rawName: "v-responsive:bs3", value: ["hidden-all", "xs"], expression: "['hidden-all','xs']", arg: "bs3" }] }, [_vm._v("Extra small"), _c("br"), _c("img", { attrs: { "src": "http://lorempixel.com/360/240/animals" } })]), _c("p", { directives: [{ name: "responsive", rawName: "v-responsive:bs3", value: ["hidden-all", "sm"], expression: "['hidden-all','sm']", arg: "bs3" }] }, [_vm._v("Small "), _c("br"), _c("img", { attrs: { "src": "http://lorempixel.com/540/360/animals" } })]), _c("p", { directives: [{ name: "responsive", rawName: "v-responsive:bs3", value: ["hidden-all", "md"], expression: "['hidden-all','md']", arg: "bs3" }] }, [_vm._v("Middle"), _c("br"), _c("img", { attrs: { "src": "http://lorempixel.com/720/360/animals" } })]), _c("p", { directives: [{ name: "responsive", rawName: "v-responsive:bs3", value: ["hidden-all", "lg"], expression: "['hidden-all','lg']", arg: "bs3" }] }, [_vm._v("Large "), _c("br"), _c("img", { attrs: { "src": "http://lorempixel.com/780/360/animals" } })]), _c("h4", [_vm._v(" The sourcecode of the lines above: ")]), _c("pre", { staticClass: "language-html" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.code) } })])]);
};
var staticRenderFns$6 = [];
var DemoThree_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$6 = {
  name: "DemoThree",
  data() {
    return {
      code: `<p v-responsive:bs3="['hidden-all','xs']"> Extra small <img src=".../360/240/animals" /></p>
<p v-responsive:bs3="['hidden-all','sm']"> Small <img src=".../540/360/animals" /></p>
<p v-responsive:bs3="['hidden-all','md']"> Middle <img src=".../720/360/animals" /></p>
<p v-responsive:bs3="['hidden-all','lg']"> Large <img src=".../780/360/animals" /></p>
`
    };
  }
};
const __cssModules$6 = {};
var __component__$6 = /* @__PURE__ */ normalizeComponent(__vue2_script$6, render$6, staticRenderFns$6, false, __vue2_injectStyles$6, "7313f052", null, null);
function __vue2_injectStyles$6(context) {
  for (let o in __cssModules$6) {
    this[o] = __cssModules$6[o];
  }
}
var DemoThree = /* @__PURE__ */ function() {
  return __component__$6.exports;
}();
var render$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "demoFour" }, [_vm._m(0), _c("pre", { directives: [{ name: "responsive", rawName: "v-responsive.lg.xl", modifiers: { "lg": true, "xl": true } }], staticClass: "language-html" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.panels[0]) } })]), _c("pre", { directives: [{ name: "responsive", rawName: "v-responsive.md", modifiers: { "md": true } }], staticClass: "language-html" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.panels[1]) } })]), _c("pre", { directives: [{ name: "responsive", rawName: "v-responsive.sm.xs", modifiers: { "sm": true, "xs": true } }], staticClass: "language-html" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.panels[2]) } })]), _c("pre", { directives: [{ name: "responsive", rawName: "v-responsive.lg.md.sm", modifiers: { "lg": true, "md": true, "sm": true } }], staticClass: "language-html" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.panels[3]) } })])]);
};
var staticRenderFns$5 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("p", [_vm._v(" Just use "), _c("strong", [_vm._v("v-responsive")]), _vm._v(" + "), _c("strong", [_vm._v("[xs, sm, md, lg, xl]")]), _vm._v(" to make elements visible on specific breakpoints and hide them on all others. ")]);
}];
var DemoFour_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$5 = {
  name: "DemoFour",
  data() {
    return {
      panels: [
        `<span v-responsive.lg.xl>
  1. large and extra-large
</span>`,
        `<span v-responsive.md>
  2. medium
</span>`,
        `<span v-responsive.sm.xs>
  3. small and extra-small
</span>`,
        `<span v-responsive.lg.md.sm>
  4. large + medium + small
</span>`
      ]
    };
  }
};
const __cssModules$5 = {};
var __component__$5 = /* @__PURE__ */ normalizeComponent(__vue2_script$5, render$5, staticRenderFns$5, false, __vue2_injectStyles$5, "f98d1a6c", null, null);
function __vue2_injectStyles$5(context) {
  for (let o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
var DemoFour = /* @__PURE__ */ function() {
  return __component__$5.exports;
}();
var render$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "demoFive" }, [_c("pre", { directives: [{ name: "responsive", rawName: "v-responsive", value: -543, expression: "-543" }], staticClass: "language-html demo-block" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.text1) } })]), _c("pre", { directives: [{ name: "responsive", rawName: "v-responsive", value: -1024, expression: "-1024" }], staticClass: "language-html demo-block" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.text2) } })]), _c("pre", { directives: [{ name: "responsive", rawName: "v-responsive", value: -1440, expression: "+1024 && -1440" }], staticClass: "language-html demo-block" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.text3) } })]), _c("pre", { directives: [{ name: "responsive", rawName: "v-responsive", value: 1440, expression: "+1440" }], staticClass: "language-html demo-block" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.text4) } })]), _c("pre", { directives: [{ name: "responsive", rawName: "v-responsive", value: 992, expression: "992" }], staticClass: "language-html demo-block" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.text5) } })])]);
};
var staticRenderFns$4 = [];
var DemoFive_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$4 = {
  name: "DemoFive",
  data() {
    return {
      text1: `<span v-responsive="-543">
  Visible@ <543px
</span>`,
      text2: `<span v-responsive="-1024">
  Visible@ <1024px
</span>`,
      text3: `<span v-responsive="+1024 && -1440">
  Visible@ >=1024 and <1440px
</span>`,
      text4: `<span v-responsive="+1440">
  Visible@ >=1440px
</span>`,
      text5: `<span v-responsive="992">
  Visible@ >=992px
</span>`
    };
  }
};
const __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent(__vue2_script$4, render$4, staticRenderFns$4, false, __vue2_injectStyles$4, "42ef45ee", null, null);
function __vue2_injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
var DemoFive = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "demoSix" }, [_c("h4", [_vm._v("This example shows how you can use classes instead of only hide/show elements")]), _c("p", [_vm._v(' Just add "v-responsive.class" into an element and it will always have class on it, consisting of the prefix of the choosen set of breakpoints and the current breakpoint. Bootstrap 4 and a middle size Scren will add the class "bs4-md". ')]), _c("div", { staticClass: "ul" }, _vm._l(_vm.panels, function(p2, idx) {
    return _c("div", { directives: [{ name: "responsive", rawName: "v-responsive.class", modifiers: { "class": true } }], key: idx }, [_c("span", [_vm._v("A responsive panel")])]);
  }), 0), _c("br"), _c("span", [_vm._v("The template code")]), _c("pre", { staticClass: "language-html" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.codeHtml) } })]), _c("span", [_vm._v("The style code")]), _c("pre", { staticClass: "language-css" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.codeStyle) } })])]);
};
var staticRenderFns$3 = [];
var DemoSix_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$3 = {
  name: "DemoSix",
  data() {
    return {
      codeHtml: `<div v-for="(p, idx) in panels" v-responsive.class>
  <span>A responsive panel</span>
</div>`,
      codeStyle: `.bs4-lg, .bs4-xl {
  color: darkblue;
  width: 33%;
}
.bs4-xl {
  width: 25%
}
.bs4-md {
  color: green;
  width: 50%;
}
.bs4-sm, .bs4-xs {
  color: red;
  font-weight: bold;
  width: 100%;
}
`,
      panels: "0000000".split("0")
    };
  }
};
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(__vue2_script$3, render$3, staticRenderFns$3, false, __vue2_injectStyles$3, "7d57b4ce", null, null);
function __vue2_injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
var DemoSix = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "routes" }, [_c("div", { staticClass: "header" }, _vm._l(_vm.routes, function(r, idx) {
    return !r.hide ? _c("span", { key: idx }, [_c("label", { class: { marked: _vm.marked === r.component }, attrs: { "for": "route" + idx } }, [_vm._v(_vm._s(r.title))]), _c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.marked, expression: "marked" }], attrs: { "id": "route" + idx, "name": "route", "type": "radio" }, domProps: { "value": r.component, "checked": _vm._q(_vm.marked, r.component) }, on: { "change": function($event) {
      _vm.marked = r.component;
    } } })]) : _vm._e();
  }), 0), _c("div", [_c(_vm.marked, { tag: "component" })], 1)]);
};
var staticRenderFns$2 = [];
var Routes_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$2 = {
  name: "Routes",
  components: { DemoOne, DemoTwo, DemoThree, DemoFour, DemoFive, DemoSix },
  data() {
    return {
      marked: "demoFour",
      routes: [
        {
          component: "demoOne",
          title: "Overview"
        },
        {
          component: "demoTwo",
          title: "Formats"
        },
        {
          component: "demoThree",
          title: "Bootstrap 3"
        },
        {
          component: "demoFour",
          title: "Tokens"
        },
        {
          component: "demoFive",
          title: "Numbers",
          hide: true
        },
        {
          component: "demoSix",
          title: "Classes",
          hide: 0
        }
      ]
    };
  },
  mounted() {
    let lastVisited = window.location.hash.substr(1);
    if (lastVisited && this.routes.find((e) => e.component === lastVisited))
      this.marked = lastVisited;
    else
      window.location.hash = "#" + this.marked;
  },
  watch: {
    marked(newVal) {
      window.location.hash = "#" + newVal;
    }
  }
};
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(__vue2_script$2, render$2, staticRenderFns$2, false, __vue2_injectStyles$2, "308776dc", null, null);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
var Routes = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "topInfo" }, [_c("div", { attrs: { "id": "topInfo" } }, [_c("i", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "xs"], expression: "['hidden-all','xs']" }] }, [_vm._v("Extra small")]), _c("i", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "sm"], expression: "['hidden-all','sm']" }] }, [_vm._v("Small ")]), _c("i", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "md"], expression: "['hidden-all','md']" }] }, [_vm._v("Middle")]), _c("i", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "lg"], expression: "['hidden-all','lg']" }] }, [_vm._v("Large ")]), _c("i", { directives: [{ name: "responsive", rawName: "v-responsive", value: ["hidden-all", "xl"], expression: "['hidden-all','xl']" }] }, [_vm._v("Extra large")])]), _c("div", { staticClass: "source-toggle" }, [_c("label", [_c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.showSource, expression: "showSource" }], attrs: { "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.showSource) ? _vm._i(_vm.showSource, null) > -1 : _vm.showSource }, on: { "change": function($event) {
    var $$a = _vm.showSource, $$el = $event.target, $$c = $$el.checked ? true : false;
    if (Array.isArray($$a)) {
      var $$v = null, $$i = _vm._i($$a, $$v);
      if ($$el.checked) {
        $$i < 0 && (_vm.showSource = $$a.concat([$$v]));
      } else {
        $$i > -1 && (_vm.showSource = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
      }
    } else {
      _vm.showSource = $$c;
    }
  } } }), _vm._v("Show Sourcecode")]), _c("pre", { directives: [{ name: "show", rawName: "v-show", value: _vm.showSource, expression: "showSource" }], staticClass: "language-js" }, [_c("code", { domProps: { "textContent": _vm._s(_vm.code) } }), _vm._v("\n")])])]);
};
var staticRenderFns$1 = [];
var TopInfo_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1 = {
  name: "TopInfo",
  data() {
    return {
      showSource: false,
      code: `<i v-responsive="['hidden-all','xs']">Extra small</i>
<i v-responsive="['hidden-all','sm']">Small </i>
<i v-responsive="['hidden-all','md']">Middle</i>
<i v-responsive="['hidden-all','lg']">Large </i>
<i v-responsive="['hidden-all','xl']">Extra large</i>`
    };
  }
};
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$1, render$1, staticRenderFns$1, false, __vue2_injectStyles$1, "4013c930", null, null);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var TopInfo = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { attrs: { "id": "app" } }, [_c("routes"), _c("top-info"), _vm._m(0)], 1);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("footer", [_vm._v(" This is a demonstration site for the Open-Source plugin "), _c("a", { attrs: { "href": "https://github.com/reinerBa/Vue-Responsive" } }, [_vm._v("vue-responsive")]), _vm._v(" hosted at Github.com ")]);
}];
var App_vue_vue_type_style_index_0_lang = "";
const __vue2_script = {
  name: "App",
  components: {
    Routes,
    TopInfo
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var App = /* @__PURE__ */ function() {
  return __component__.exports;
}();
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
};
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
};
const self = {
  idIncrement: 1,
  resizeListeners: null,
  init: false,
  _rPermissions: {
    bs4: bootstrap4Breakpoints,
    bs3: bootstrap3Breakpoints
  },
  allProperties: {}
};
var vueResponsive = {
  bind: function(el, binding, vnode) {
    var componentHasDefault = !!self._rPermissions.default;
    let useClass = !!binding.modifiers.class;
    if (!self.init) {
      for (let i in vnode.context.$data) {
        if (i.indexOf("responsiveMarks$$") === 0) {
          var name = String(i).replace("responsiveMarks$$", "").toLowerCase();
          self._rPermissions[name] = {};
          for (let ii in vnode.context.$data[i])
            self._rPermissions[name][ii] = vnode.context.$data[i][ii];
        }
        if (i === "responsiveDefault$$")
          componentHasDefault = vnode.context.$data[i];
      }
      self._rPermissions.undefined = componentHasDefault ? self._rPermissions[componentHasDefault] : self._rPermissions.bs4;
      self.init++;
    }
    var validInputs = ["hidden-all"];
    let validPositiv = [];
    let choosenBPointsName = componentHasDefault ? self._rPermissions.defaultName : binding.arg || "bs4";
    for (let key2 in self._rPermissions[binding.arg]) {
      validInputs.push(key2);
      validPositiv.push(key2);
      validInputs.push("hidden-" + key2);
    }
    if (!self.resizeListeners) {
      self.resizeListeners = {};
      window.addEventListener("resize", function() {
        for (let i in self.resizeListeners)
          if (!isNaN(i))
            self.resizeListeners[i]();
      });
    }
    if (el.style.display)
      el.dataset.initialDisplay = el.style.display ? el.style.display : getComputedStyle(el, null).display;
    let preParams = [];
    let modifiers = window.Object.keys(binding.modifiers);
    if (useClass)
      ;
    else if (modifiers.some((k) => ~validPositiv.indexOf(k.replace(/\+|-/g, "")))) {
      modifiers.forEach((m) => {
      });
      preParams.push(...modifiers);
      preParams.push("hidden-all");
      preParams.sort();
    } else if (Array.isArray(binding.value) || typeof binding.expression === "string" && binding.expression.match(/[*]/)) {
      if (Array.isArray(binding.value)) {
        preParams = binding.value;
      } else {
        var stringArray = binding.expression.replace(/'/g, '"');
        preParams = JSON.parse(stringArray);
      }
      preParams.sort();
    } else if (binding.value instanceof Object) {
      for (let i in binding.value) {
        if (binding.value[i])
          preParams.push(i);
      }
    } else if (typeof binding.value === "string" || typeof binding.expression === "string") {
      var val = binding.value || binding.expression.replace(/'"/g, "");
      preParams = new Array(val);
      preParams.sort();
    } else {
      return;
    }
    let rId = String(self.idIncrement++);
    el.dataset.responsives = rId;
    var rPermissions = { lastBp: "", bpSet: choosenBPointsName, useClass };
    let hiddenAllIndex = preParams.indexOf("hidden-all");
    if (~hiddenAllIndex) {
      preParams.splice(hiddenAllIndex, 1);
      for (let i in self._rPermissions[binding.arg])
        rPermissions[i] = 0;
    } else {
      for (let k in self._rPermissions[binding.arg])
        rPermissions[k] = 1;
    }
    for (let i = 0; i < preParams.length; i++) {
      let item = preParams[i];
      if (!~validInputs.indexOf(item))
        continue;
      if (item.indexOf("hidden") === 0) {
        var key = item.split("-")[1];
        rPermissions[key] = 0;
      } else {
        rPermissions[item] = 1;
      }
    }
    self.allProperties[rId] = rPermissions;
  },
  inserted: function(el, binding, vnode) {
    if (el.dataset.responsives == null)
      return;
    let resizeListenerId = el.dataset.responsives;
    function checkDisplay() {
      var myPermissions = self.allProperties[resizeListenerId];
      var curWidth = window.innerWidth;
      var initial = el.dataset.initialDisplay ? el.dataset.initialDisplay : "";
      var parameters = self._rPermissions[binding.arg];
      for (let i in parameters) {
        if (curWidth >= parameters[i].min && curWidth <= parameters[i].max) {
          if (myPermissions.lastBp !== i) {
            if (self.allProperties[resizeListenerId].useClass) {
              el.classList.add(myPermissions.bpSet + "-" + i);
              el.classList.remove(myPermissions.bpSet + "-" + myPermissions.lastBp);
            } else {
              if (myPermissions[i])
                el.style.display = initial;
              else
                el.style.setProperty("display", "none", "important");
            }
            self.allProperties[resizeListenerId].lastBp = i;
          }
          break;
        }
      }
    }
    checkDisplay();
    self.resizeListeners[resizeListenerId] = checkDisplay;
  },
  unbind: function(el, binding, vnode) {
    let resizeListenerId = el.dataset.responsives;
    delete self.resizeListeners[resizeListenerId];
  }
};
vueResponsive.install = function(Vue2, options) {
  if (typeof options === "object" && options.breakpoints) {
    self._rPermissions.default = options.breakpoints;
  }
  Vue2.directive("responsive", vueResponsive);
};
try {
  var notGlobal = false;
  var currScriptFn = document.currentScript;
  currScriptFn = currScriptFn || function() {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1];
  }();
  notGlobal = Boolean(currScriptFn.getAttribute("notGlobal"));
  if (!notGlobal && typeof window !== "undefined" && typeof window.Vue === "function")
    window.Vue.use(vueResponsive);
} catch (idk) {
  console.error(idk);
}
var prism = "";
let Vue = window.Vue;
Vue.use(VuePrism);
Vue.use(vueResponsive);
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App)
}).$mount("#app");
