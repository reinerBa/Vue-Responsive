# Vue-Responsive
Brings a directive to use in specific html Elements. More Options are planned oriented at Bootstrap 4.
-Todo: Mixin to use in Vue-Element methods etc.
For Vue.js 2.0 only. 

## Demo
Demo [link](Demo.html)

# Features

# Usage
Just include the script and use the directive on a Html-Element inside a Vue Element

    <script src="Vue-Responsive.js"></script>
    ...
    <h1 v-responsiveness="'hidden-xs'">Big Title</h1>
    <div v-responsiveness="['hidden-all','md','lg']">Only visible in Middle and large Size View</div>
    <div v-responsiveness="['hidden-lg']">Only hidden at lg</div>

    <h1 v-responsiveness="middleSize">Jumbotron</h1>
	...	//in the vue element
	data:{
		middleSize:['hidden-all','lg','xl']
	} 

    
At default every resolution is visible, the hidden-all tag changes this to everything hidden (display:none). These tags are valid **hidden-all**, **xs**, **sm**, **md**, **lg**, **xl**, **hidden-xs**,...,**hidden-xl**.    

The default Responsive breaks follow Bootstrap 4 [Responsive Utils](https://v4-alpha.getbootstrap.com/layout/responsive-utilities/).
The command bs3 sets everthing to Bootstrap 3 Repsonsive breaks.
`<img v-responsiveness:bs3="['hidden-xs']" class="big-image">` 
where **xl** doesn't exist.
#License
MIT
