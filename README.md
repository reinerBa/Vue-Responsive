<p align="center">
  <img src="Documentation/logo.png" />
</p>

# Vue-Responsive

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://vuejs.org/)
[![vue3](https://img.shields.io/badge/typescript-blue.svg)](https://www.typescriptlang.org/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-green.svg?style=flat-square)](https://github.com/feross/standard)
[![npm](https://img.shields.io/npm/v/vue-responsive.svg)](https://www.npmjs.com/package/vue-responsive)
[![GitHub stars](https://img.shields.io/github/stars/reinerBa/Vue-Responsive.svg)](https://github.com/reinerBa/Vue-Responsive/stargazers)
[![license](https://img.shields.io/github/license/reinerBa/Vue-Responsive.svg)](https://github.com/reinerBa/vue-responsive/blob/master/LICENSE)
[![Github file size](https://img.shields.io/github/size/reinerBa/Vue-Responsive/dist/Vue-Responsive.min.js.svg)](https://raw.githubusercontent.com/reinerBa/Vue-Responsive/master/dist/Vue-Responsive.min.js)

[![NPM](https://nodei.co/npm/vue-responsive.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-responsive/)

Vue-Responsive is a plugin to use responsive breakpoints easy on html elements. Because sometimes it's nice to to let vue do resolution specific things. It uses the breakpoints from bootstrap 4 as default.

📺 Check the [Demo](https://reinerba.github.io/Vue-Responsive/dist/)-link (IE11-[Demo](http://reinerba.github.io/Vue-Responsive/Demo.html) without webpack)

## 🔧  How to use

Load: 
```javascript

npm install vue-responsive
```

<details>
<summary>**With vue2** (click to open)</summary>

```javascript

import responsive from 'vue-responsive'
Vue.use(responsive)
```

In the browser just include the script and use the directive on a Html-Element inside a Vue Element

    <script src="Vue-Responsive.min.js"></script>

**Advanced:** If you do not want the directive to be globally available just add the attribute *notGlobal* with a not empty value in the script tag and define it the components with:


```html

    <script src="Vue-Responsive.min.js" notGlobal="true" ></script>	
	...
	directives:{
		// the global variable is 'index.vueResponsive'
		responsive: index.vueResponsive
	}
```
</details> 

<details>
<summary>**With vue3** (click to open)</summary>

```javascript

import {responsive} from 'vue-responsive/vue3'
const app = createApp(App)

app.directive('responsive', responsive)
```
</details>


📖 [Docs](https://reinerba.github.io/Vue-Responsive/Documentation/)

## Examples
### 👈 Shortest usecase

Just put the breakpoint identifiers behind the directive with dots:

```html

   <div v-responsive.lg.xl >Only visible on desktop !</div>

   <div v-responsive.md    >Visible on tablet ☺</div>

   <div v-responsive.sm.xs >Only visible on smartphone!</div>
```

### 👈 Small usage example

```javascript

<template>
  <div>
    <h1 v-responsive="'hidden-xs'">Big Title</h1>
    <div v-responsive="['hidden-all','xs','sm']">
      Only visible in small and extra-small windows
    </div>

    <h1 v-responsive="middleSize">Big Jumbotron</h1>
  </div>
</template>

<script>
  import vueResponsive from 'vue-responsive'
  Vue.directive('responsive', vueResponsive)
  ...
  data:{
	middleSize: ['hidden-all','lg','xl']
  } 
</script>
```

# Features

This directive adds responsive Feautures to single HTML-Elements without CSS or @Media.

The default Responsive breaks follow Bootstrap 4 [Responsive Utils](https://v4-alpha.getbootstrap.com/layout/responsive-utilities/).

The Bootstrap 3 breakpoints are includes as well.

## Do you miss a feature?
Take charge and file an issue or [add your idea](http://feathub.com/reinerBa/Vue-Responsive/features/new) or [vote for your favorite feature](http://feathub.com/reinerBa/Vue-Responsive) to be implemented:

[![Feature Requests](http://feathub.com/reinerBa/Vue-Responsive?format=svg)](http://feathub.com/reinerBa/Vue-Responsive)

## For Bootstrap 4 breakpoints
At default every resolution is visible, the hidden-all tag changes this to everything hidden (display:none). These tags are valid **hidden-all**, **xs**, **sm**, **md**, **lg**, **xl**, **hidden-xs**,...,**hidden-xl**.

```javascript

  <h1 v-responsive="'hidden-xs'">Big Title</h1>
  <div v-responsive="['hidden-all','md','lg']">Only visible in Middle and large Size View</div>
  <div v-responsive="['hidden-lg']">Only hidden at lg</div>

  <h1 v-responsive="middleSize">Jumbotron</h1>
  ...	//in the vue object
  data:{
    middleSize:['hidden-all','lg','xl']
  } 

```

## For Bootstrap 3 breakpoints
Just add **:bs3** after the directive to use bootstrap 3 breakpoints:

```javascript

  <p v-responsive:bs3="['hidden-xs']">
    As you can see on the big picture below.<br /><img ... />
  </p>

```

In this defintion the **xl** breakpoint doesn't exist.

## For self defined breakpoints (vue2 only)
First you have to declar your own breakpoints in the component/root wich wraps the html-elements with the directive. Every definition must start with **responsiveMarks$$** and a following name. So you can easily create breakpoints to differentiate between desktop and smartphones for instance, as you can see in the demo.html:
	
```javascript

  <p v-responsive:twoMarks="'hidden-desktop'">
    Visible on smartphone<br />
    <img src="http://lorempixel.com/360/240/animals" />
  </p>

  ... //in the vue object
  data:{
    responsiveMarks$$twoMarks: {  //set a custom breakpoint with the name "twoMarks"
      smartphone: { 
        show: true, 
        min: -1, 
        max: 767 
      }, 
      desktop: { 
        show: true, 
        min: 768, 
        max: Infinity 
      } 
    }
  } 

```

You can declar as much own definitions as you wish. Every defintion should have **min:-1** for its smalles breakpoint and **max:Infinity** for its biggest.

**Breaking Changes for verison 1.x:** 

- **Tag is now `v-responsive` the old `v-responsiveness` is no longer supported.**
- **The file `Vue_Responsive.common.js` does no longer exist** 


- **No further Dependencies** 
- **🔧 Chrome, Firefox, IE11+**

### Planned 
  - Mixin to trigger methods on breakpoint change
  - Add and remove classes instead of changing only the style

# License
MIT [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE.md)
