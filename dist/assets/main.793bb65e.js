import{V}from"./vendor.5582453e.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const v of i.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&o(v)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}};L();var E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"demoOne"},[s("h1",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","xl"],expression:"['hidden-all','xl']"}]},[e._v("A Vue.js responsivity plugin")]),s("h2",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","lg"],expression:"['hidden-all','lg']"}]},[e._v("A Vue.js responsivity plugin")]),s("h3",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","md"],expression:"['hidden-all','md']"}]},[e._v("A Vue.js responsivity plugin")]),s("h4",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","sm"],expression:"['hidden-all','sm']"}]},[e._v("A Vue.js responsivity plugin")]),s("h5",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","xs"],expression:"['hidden-all','xs']"}]},[e._v("A Vue.js responsivity plugin")]),s("h1",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","xl"],expression:"['hidden-all','xl']"}]},[e._v("extra large")]),s("h2",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","lg"],expression:"['hidden-all','lg']"}]},[e._v("large")]),s("h3",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","md"],expression:"['hidden-all','md']"}]},[e._v("medium")]),s("h4",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","sm"],expression:"['hidden-all','sm']"}]},[e._v("small")]),s("h5",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","xs"],expression:"['hidden-all','xs']"}]},[e._v("extra small")]),e._m(0),s("h4",[e._v(" The sourcecode of the two lines above: ")]),s("pre",{staticClass:"language-html"},[s("code",{domProps:{textContent:e._s(e.code)}})])])},F=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",{staticStyle:{margin:"15px auto","border-spacing":"0"}},[s("tr",[s("th",[e._v("v-responsive=")]),s("th",[e._v("XS")]),s("th",[e._v("SM")]),s("th",[e._v("MD")]),s("th",[e._v("LG")]),s("th",[e._v("XL")])]),s("tr",[s("td",[e._v("['hidden-all', 'xs', 'xl']")]),s("td",[e._v(".")]),s("td"),s("td"),s("td"),s("td",[e._v(".")])]),s("tr",[s("td",[e._v("['hidden-xs']")]),s("td"),s("td",[e._v(".")]),s("td",[e._v(".")]),s("td",[e._v(".")]),s("td",[e._v(".")])]),s("tr",[s("td",[e._v("['hidden-xs', 'hidden-sm']")]),s("td"),s("td"),s("td",[e._v(".")]),s("td",[e._v(".")]),s("td",[e._v(".")])]),s("tr",[s("td",[e._v("['hidden-all', 'lg', 'xl']")]),s("td"),s("td"),s("td"),s("td",[e._v(".")]),s("td",[e._v(".")])]),s("tr",[s("td",[e._v("['hidden-all', 'xl']")]),s("td"),s("td"),s("td"),s("td"),s("td",[e._v(".")])]),s("tr",[s("td",[e._v("['hidden-all', 'xs', 'md', 'xl']")]),s("td",[e._v(".")]),s("td"),s("td",[e._v(".")]),s("td"),s("td",[e._v(".")])])])}];function m(e,t,s,o,n,i,v,c){var l=typeof e=="function"?e.options:e;t&&(l.render=t,l.staticRenderFns=s,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i);var r;if(v?(r=function(p){p=p||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!p&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(p=__VUE_SSR_CONTEXT__),n&&n.call(this,p),p&&p._registeredComponents&&p._registeredComponents.add(v)},l._ssrRegister=r):n&&(r=c?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),r)if(l.functional){l._injectStyles=r;var h=l.render;l.render=function(x,u){return r.call(u),h(x,u)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,r):[r]}return{exports:e,options:l}}const I={name:"DemoOne",data(){return{code:`<h1 v-responsive="['hidden-all','xl']">A Vue.js responsivity plugin</h1>
<h2 v-responsive="['hidden-all','lg']">A Vue.js responsivity plugin</h2>
<h3 v-responsive="['hidden-all','md']">A Vue.js responsivity plugin</h3>
<h4 v-responsive="['hidden-all','sm']">A Vue.js responsivity plugin</h4>
<h5 v-responsive="['hidden-all','xs']">A Vue.js responsivity plugin</h5>

<h1 v-responsive="['hidden-all','xl']">extra large</h1>
<h2 v-responsive="['hidden-all','lg']">large</h2>
<h3 v-responsive="['hidden-all','md']">medium</h3>
<h4 v-responsive="['hidden-all','sm']">small</h4>
<h5 v-responsive="['hidden-all','xs']">extra small</h5>`}}},b={};var R=m(I,E,F,!1,M,"46488d3e",null,null);function M(e){for(let t in b)this[t]=b[t]}var B=function(){return R.exports}(),z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"demoTwo"},[s("div",[s("p",{directives:[{name:"responsive",rawName:"v-responsive",value:"hidden-xs",expression:"'hidden-xs'"}]},[e._v("I am hidden on extra small device screens")]),s("p",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-sm","hidden-xs"],expression:"['hidden-sm', 'hidden-xs']"}]},[e._v("I am hidden on small device screens")]),s("p",{directives:[{name:"responsive",rawName:"v-responsive",value:e.respObj,expression:"respObj"}]},[e._v("This elements visibility is controlled by an object")])]),s("pre",{staticClass:"language-html"},[s("code",{domProps:{textContent:e._s(e.codeHtml)}})]),s("pre",{staticClass:"language-js"},[s("code",{domProps:{textContent:e._s(e.codeJs)}})])])},H=[];const J={name:"DemoTwo",data(){return{respObj:{"hidden-md":!0,"hidden-lg":!0,"hidden-xl":!0},codeHtml:`<p v-responsive="'hidden-xs'">I am hidden on extra small device screens</p>
<p v-responsive="['hidden-sm', 'hidden-xs']">I am hidden on small device screens</p>
<span v-responsive="respObj">This elements visibility is controlled by an object</span>`,codeJs:`data () { return {
  respObj: { "hidden-md": true, "hidden-lg": true, "hidden-xl": true },
`}}},C={};var X=m(J,z,H,!1,W,"5c23a6f4",null,null);function W(e){for(let t in C)this[t]=C[t]}var q=function(){return X.exports}(),G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"demoThree"},[s("h4",{staticClass:"title"},[e._v("This example shows how easy you can use the Breakpoints of Bootstrap 3, which are different of the default Bootstrap 4 breakpoints")]),s("p",{directives:[{name:"responsive",rawName:"v-responsive:bs3",value:["hidden-all","xs"],expression:"['hidden-all','xs']",arg:"bs3"}]},[e._v("Extra small"),s("br"),s("img",{attrs:{src:"http://lorempixel.com/360/240/animals"}})]),s("p",{directives:[{name:"responsive",rawName:"v-responsive:bs3",value:["hidden-all","sm"],expression:"['hidden-all','sm']",arg:"bs3"}]},[e._v("Small "),s("br"),s("img",{attrs:{src:"http://lorempixel.com/540/360/animals"}})]),s("p",{directives:[{name:"responsive",rawName:"v-responsive:bs3",value:["hidden-all","md"],expression:"['hidden-all','md']",arg:"bs3"}]},[e._v("Middle"),s("br"),s("img",{attrs:{src:"http://lorempixel.com/720/360/animals"}})]),s("p",{directives:[{name:"responsive",rawName:"v-responsive:bs3",value:["hidden-all","lg"],expression:"['hidden-all','lg']",arg:"bs3"}]},[e._v("Large "),s("br"),s("img",{attrs:{src:"http://lorempixel.com/780/360/animals"}})]),s("h4",[e._v(" The sourcecode of the lines above: ")]),s("pre",{staticClass:"language-html"},[s("code",{domProps:{textContent:e._s(e.code)}})])])},U=[];const K={name:"DemoThree",data(){return{code:`<p v-responsive:bs3="['hidden-all','xs']"> Extra small <img src=".../360/240/animals" /></p>
<p v-responsive:bs3="['hidden-all','sm']"> Small <img src=".../540/360/animals" /></p>
<p v-responsive:bs3="['hidden-all','md']"> Middle <img src=".../720/360/animals" /></p>
<p v-responsive:bs3="['hidden-all','lg']"> Large <img src=".../780/360/animals" /></p>
`}}},S={};var Q=m(K,G,U,!1,Y,"7313f052",null,null);function Y(e){for(let t in S)this[t]=S[t]}var Z=function(){return Q.exports}(),ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"demoFour"},[e._m(0),s("pre",{directives:[{name:"responsive",rawName:"v-responsive.lg.xl",modifiers:{lg:!0,xl:!0}}],staticClass:"language-html"},[s("code",{domProps:{textContent:e._s(e.panels[0])}})]),s("pre",{directives:[{name:"responsive",rawName:"v-responsive.md",modifiers:{md:!0}}],staticClass:"language-html"},[s("code",{domProps:{textContent:e._s(e.panels[1])}})]),s("pre",{directives:[{name:"responsive",rawName:"v-responsive.sm.xs",modifiers:{sm:!0,xs:!0}}],staticClass:"language-html"},[s("code",{domProps:{textContent:e._s(e.panels[2])}})]),s("pre",{directives:[{name:"responsive",rawName:"v-responsive.lg.md.sm",modifiers:{lg:!0,md:!0,sm:!0}}],staticClass:"language-html"},[s("code",{domProps:{textContent:e._s(e.panels[3])}})])])},se=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" Just use "),s("strong",[e._v("v-responsive")]),e._v(" + "),s("strong",[e._v("[xs, sm, md, lg, xl]")]),e._v(" to make elements visible on specific breakpoints and hide them on all others. ")])}];const te={name:"DemoFour",data(){return{panels:[`<span v-responsive.lg.xl>
  1. large and extra-large
</span>`,`<span v-responsive.md>
  2. medium
</span>`,`<span v-responsive.sm.xs>
  3. small and extra-small
</span>`,`<span v-responsive.lg.md.sm>
  4. large + medium + small
</span>`]}}},N={};var ne=m(te,ee,se,!1,re,"f98d1a6c",null,null);function re(e){for(let t in N)this[t]=N[t]}var ie=function(){return ne.exports}(),ae=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"demoFive"},[s("pre",{directives:[{name:"responsive",rawName:"v-responsive",value:-543,expression:"-543"}],staticClass:"language-html demo-block"},[s("code",{domProps:{textContent:e._s(e.text1)}})]),s("pre",{directives:[{name:"responsive",rawName:"v-responsive",value:-1024,expression:"-1024"}],staticClass:"language-html demo-block"},[s("code",{domProps:{textContent:e._s(e.text2)}})]),s("pre",{directives:[{name:"responsive",rawName:"v-responsive",value:-1440,expression:"+1024 && -1440"}],staticClass:"language-html demo-block"},[s("code",{domProps:{textContent:e._s(e.text3)}})]),s("pre",{directives:[{name:"responsive",rawName:"v-responsive",value:1440,expression:"+1440"}],staticClass:"language-html demo-block"},[s("code",{domProps:{textContent:e._s(e.text4)}})]),s("pre",{directives:[{name:"responsive",rawName:"v-responsive",value:992,expression:"992"}],staticClass:"language-html demo-block"},[s("code",{domProps:{textContent:e._s(e.text5)}})])])},oe=[];const le={name:"DemoFive",data(){return{text1:`<span v-responsive="-543">
  Visible@ <543px
</span>`,text2:`<span v-responsive="-1024">
  Visible@ <1024px
</span>`,text3:`<span v-responsive="+1024 && -1440">
  Visible@ >=1024 and <1440px
</span>`,text4:`<span v-responsive="+1440">
  Visible@ >=1440px
</span>`,text5:`<span v-responsive="992">
  Visible@ >=992px
</span>`}}},P={};var de=m(le,ae,oe,!1,ve,"42ef45ee",null,null);function ve(e){for(let t in P)this[t]=P[t]}var pe=function(){return de.exports}(),ce=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"demoSix"},[s("h4",[e._v("This example shows how you can use classes instead of only hide/show elements")]),s("p",[e._v(' Just add "v-responsive.class" into an element and it will always have class on it, consisting of the prefix of the choosen set of breakpoints and the current breakpoint. Bootstrap 4 and a middle size Scren will add the class "bs4-md". ')]),s("div",{staticClass:"ul"},e._l(e.panels,function(o,n){return s("div",{directives:[{name:"responsive",rawName:"v-responsive.class",modifiers:{class:!0}}],key:n},[s("span",[e._v("A responsive panel")])])}),0),s("br"),s("span",[e._v("The template code")]),s("pre",{staticClass:"language-html"},[s("code",{domProps:{textContent:e._s(e.codeHtml)}})]),s("span",[e._v("The style code")]),s("pre",{staticClass:"language-css"},[s("code",{domProps:{textContent:e._s(e.codeStyle)}})])])},me=[];const ue={name:"DemoSix",data(){return{codeHtml:`<div v-for="(p, idx) in panels" v-responsive.class>
  <span>A responsive panel</span>
</div>`,codeStyle:`.bs4-lg, .bs4-xl {
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
`,panels:"0000000".split("0")}}},k={};var _e=m(ue,ce,me,!1,he,"7d57b4ce",null,null);function he(e){for(let t in k)this[t]=k[t]}var fe=function(){return _e.exports}(),xe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"routes"},[s("div",{staticClass:"header"},e._l(e.routes,function(o,n){return o.hide?e._e():s("span",{key:n},[s("label",{class:{marked:e.marked===o.component},attrs:{for:"route"+n}},[e._v(e._s(o.title))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.marked,expression:"marked"}],attrs:{id:"route"+n,name:"route",type:"radio"},domProps:{value:o.component,checked:e._q(e.marked,o.component)},on:{change:function(i){e.marked=o.component}}})])}),0),s("div",[s(e.marked,{tag:"component"})],1)])},ge=[];const ye={name:"Routes",components:{DemoOne:B,DemoTwo:q,DemoThree:Z,DemoFour:ie,DemoFive:pe,DemoSix:fe},data(){return{marked:"demoFour",routes:[{component:"demoOne",title:"Overview"},{component:"demoTwo",title:"Formats"},{component:"demoThree",title:"Bootstrap 3"},{component:"demoFour",title:"Tokens"},{component:"demoFive",title:"Numbers",hide:!0},{component:"demoSix",title:"Classes",hide:0}]}},mounted(){let e=window.location.hash.substr(1);e&&this.routes.find(t=>t.component===e)?this.marked=e:window.location.hash="#"+this.marked},watch:{marked(e){window.location.hash="#"+e}}},j={};var we=m(ye,xe,ge,!1,$e,"308776dc",null,null);function $e(e){for(let t in j)this[t]=j[t]}var be=function(){return we.exports}(),Ce=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"topInfo"},[s("div",{attrs:{id:"topInfo"}},[s("i",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","xs"],expression:"['hidden-all','xs']"}]},[e._v("Extra small")]),s("i",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","sm"],expression:"['hidden-all','sm']"}]},[e._v("Small ")]),s("i",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","md"],expression:"['hidden-all','md']"}]},[e._v("Middle")]),s("i",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","lg"],expression:"['hidden-all','lg']"}]},[e._v("Large ")]),s("i",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","xl"],expression:"['hidden-all','xl']"}]},[e._v("Extra large")])]),s("div",{staticClass:"source-toggle"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.showSource,expression:"showSource"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showSource)?e._i(e.showSource,null)>-1:e.showSource},on:{change:function(o){var n=e.showSource,i=o.target,v=!!i.checked;if(Array.isArray(n)){var c=null,l=e._i(n,c);i.checked?l<0&&(e.showSource=n.concat([c])):l>-1&&(e.showSource=n.slice(0,l).concat(n.slice(l+1)))}else e.showSource=v}}}),e._v("Show Sourcecode")]),s("pre",{directives:[{name:"show",rawName:"v-show",value:e.showSource,expression:"showSource"}],staticClass:"language-js"},[s("code",{domProps:{textContent:e._s(e.code)}}),e._v(`
`)])])])},Se=[];const Ne={name:"TopInfo",data(){return{showSource:!1,code:`<i v-responsive="['hidden-all','xs']">Extra small</i>
<i v-responsive="['hidden-all','sm']">Small </i>
<i v-responsive="['hidden-all','md']">Middle</i>
<i v-responsive="['hidden-all','lg']">Large </i>
<i v-responsive="['hidden-all','xl']">Extra large</i>`}}},T={};var Pe=m(Ne,Ce,Se,!1,ke,"4013c930",null,null);function ke(e){for(let t in T)this[t]=T[t]}var je=function(){return Pe.exports}(),Te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("routes"),s("top-info"),e._m(0)],1)},Ae=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",[e._v(" This is a demonstration site for the Open-Source plugin "),s("a",{attrs:{href:"https://github.com/reinerBa/Vue-Responsive"}},[e._v("vue-responsive")]),e._v(" hosted at Github.com ")])}];const Oe={name:"App",components:{Routes:be,TopInfo:je}},A={};var De=m(Oe,Te,Ae,!1,Ve,null,null,null);function Ve(e){for(let t in A)this[t]=A[t]}var Le=function(){return De.exports}();const Ee={xs:{min:-1,max:543},sm:{min:544,max:767},md:{min:768,max:991},lg:{min:992,max:1199},xl:{min:1200,max:1/0}},Fe={xs:{min:-1,max:767},sm:{min:768,max:991},md:{min:992,max:1199},lg:{min:1200,max:1/0}},d={idIncrement:1,resizeListeners:null,init:!1,_rPermissions:{bs4:Ee,bs3:Fe},allProperties:{}};var g={bind:function(e,t,s){var o=!!d._rPermissions.default;let n=!!t.modifiers.class;if(!d.init){for(let a in s.context.$data){if(a.indexOf("responsiveMarks$$")===0){var i=String(a).replace("responsiveMarks$$","").toLowerCase();d._rPermissions[i]={};for(let _ in s.context.$data[a])d._rPermissions[i][_]=s.context.$data[a][_]}a==="responsiveDefault$$"&&(o=s.context.$data[a])}d._rPermissions.undefined=o?d._rPermissions[o]:d._rPermissions.bs4,d.init++}var v=["hidden-all"];let c=[],l=o?d._rPermissions.defaultName:t.arg||"bs4";for(let a in d._rPermissions[t.arg])v.push(a),c.push(a),v.push("hidden-"+a);d.resizeListeners||(d.resizeListeners={},window.addEventListener("resize",function(){for(let a in d.resizeListeners)isNaN(a)||d.resizeListeners[a]()})),e.style.display&&(e.dataset.initialDisplay=e.style.display?e.style.display:getComputedStyle(e,null).display);let r=[],h=window.Object.keys(t.modifiers);if(!n)if(h.some(a=>~c.indexOf(a.replace(/\+|-/g,""))))h.forEach(a=>{}),r.push(...h),r.push("hidden-all"),r.sort();else if(Array.isArray(t.value)||typeof t.expression=="string"&&t.expression.match(/[*]/)){if(Array.isArray(t.value))r=t.value;else{var f=t.expression.replace(/'/g,'"');r=JSON.parse(f)}r.sort()}else if(t.value instanceof Object)for(let a in t.value)t.value[a]&&r.push(a);else if(typeof t.value=="string"||typeof t.expression=="string"){var p=t.value||t.expression.replace(/'"/g,"");r=new Array(p),r.sort()}else return;let x=String(d.idIncrement++);e.dataset.responsives=x;var u={lastBp:"",bpSet:l,useClass:n};let $=r.indexOf("hidden-all");if(~$){r.splice($,1);for(let a in d._rPermissions[t.arg])u[a]=0}else for(let a in d._rPermissions[t.arg])u[a]=1;for(let a=0;a<r.length;a++){let _=r[a];if(!!~v.indexOf(_))if(_.indexOf("hidden")===0){var D=_.split("-")[1];u[D]=0}else u[_]=1}d.allProperties[x]=u},inserted:function(e,t,s){if(e.dataset.responsives==null)return;let o=e.dataset.responsives;function n(){var i=d.allProperties[o],v=window.innerWidth,c=e.dataset.initialDisplay?e.dataset.initialDisplay:"",l=d._rPermissions[t.arg];for(let r in l)if(v>=l[r].min&&v<=l[r].max){i.lastBp!==r&&(d.allProperties[o].useClass?(e.classList.add(i.bpSet+"-"+r),e.classList.remove(i.bpSet+"-"+i.lastBp)):i[r]?e.style.display=c:e.style.setProperty("display","none","important"),d.allProperties[o].lastBp=r);break}}n(),d.resizeListeners[o]=n},unbind:function(e,t,s){let o=e.dataset.responsives;delete d.resizeListeners[o]}};g.install=function(e,t){typeof t=="object"&&t.breakpoints&&(d._rPermissions.default=t.breakpoints),e.directive("responsive",g)};try{var O=!1,w=document.currentScript;w=w||function(){var e=document.getElementsByTagName("script");return e[e.length-1]}(),O=Boolean(w.getAttribute("notGlobal")),!O&&typeof window!="undefined"&&typeof window.Vue=="function"&&window.Vue.use(g)}catch(e){console.error(e)}let y=window.Vue;y.use(V);y.use(g);y.config.productionTip=!1;new y({render:e=>e(Le)}).$mount("#app");
