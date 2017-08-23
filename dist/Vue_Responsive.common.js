/*!
 * Vue-Responsive v0.1.9
 * @Url: https://github.com/reinerBa/Vue-Responsive
 * @License: MIT, Reiner Bamberger
 */


	export default (function(){
		var self={};
		return{
		bind: function (el, binding, vnode) {
			//Bootstrap 4 Repsonsive Utils default
			var componentHasDefault=false;
			if (!self.__rPermissions) {
				self.__rPermissions = {};
				//bs4
				self.__rPermissions.bs4 = { xs: { class: !1, min: -1, max: 543 }, sm: { class: !1, min: 544, max: 767 }, md: { class: !1, min: 768, max: 991 }, lg: { class: !1, min: 992, max: 1199 }, xl: { class: !1, min: 1200, max: Infinity } };
				//:bs3
				self.__rPermissions.bs3 = { xs: { class: !1, min: -1, max: 767 }, sm: { class: !1, min: 768, max: 991 }, md: { class: !1, min: 992, max: 1199 }, lg: { class: !1, min: 1200, max: Infinity } };
				
				for (var i in vnode.context.$data){
					if (i.indexOf("responsiveMarks$$") === 0) {
						var name = String(i).replace("responsiveMarks$$", "").toLowerCase();
						self.__rPermissions[name] = {};
						for (var ii in vnode.context.$data[i]) 
							self.__rPermissions[name][ii] = vnode.context.$data[i][ii];
					}
					if (i === "responsiveDefault$$")
						componentHasDefault = vnode.context.$data[i];
				}
				// Set bs4 as default if not default is explicitly set
				self.__rPermissions.undefined = componentHasDefault ? self.__rPermissions[componentHasDefault] : self.__rPermissions.bs4;				

			}
			var validInputs = ['hidden-all'];
			for (var i in self.__rPermissions[binding.arg]) {
				validInputs.push(i);
				validInputs.push("hidden-"+i);
			} 
			
			//to use just one resize-event-listener whoose functions can easy unbound
			self.__rIntervalInstId = ++self.__rIntervalInstId || 1;
			var rPermissions = { rId : String(self.__rIntervalInstId)};
			if(typeof self.resizeListeners === 'undefined'){
				self.resizeListeners={};
				function callInstances(){
					for(var i in self.resizeListeners)
						if(!isNaN(i))
							self.resizeListeners[i]();
				}
				window.addEventListener("resize", callInstances);		
			}
			
			if (el.style.display.length){
				el.dataset.initialDisplay = el.style.display; //save the user defined css-value
			}
			var preParams = [];

			if (Array.isArray(binding.value) || (typeof binding.expression === "string" && !!binding.expression.match(/\[*\]/))) {
				if (Array.isArray(binding.value))
					preParams = binding.value;
				else {
					var stringArray = binding.expression.replace(/'/g, '"');
					preParams = JSON.parse(stringArray );
				}
				preParams.sort();
			} else if (typeof binding.value === 'object') {
				for (var i in binding.value) {
					if (binding.value[i]) preParams.push(i);
				}
			} else if (typeof binding.value === "string" || typeof binding.expression === "string") {   //a single parameter
				var val = binding.value || binding.expression.replace(/'"/g, "");
				preParams = new Array(val);
				preParams.sort();
			} else {
				preParams = null;
				return false;
			}
			if (!preParams) return 0;

			for (var k in self.__rPermissions[binding.arg]){
				rPermissions[k] = true;
			}
			
			if (preParams[0] === "hidden-all") {
				preParams.splice(0, 1);
				for (var i in self.__rPermissions[binding.arg]) {
					rPermissions[i] = false;
				}
			}
			
			var i = 0, item;
			while(item = preParams[i++]) {
				if (validInputs.indexOf(item) != -1) {
					if (item.indexOf("hidden")===0){ //hidden-..
						var key = item.split("-")[1];
						rPermissions[key] = false;
					} else {
						rPermissions[item]= true;
					}  
				}
			}
			el.dataset.responsives = JSON.stringify(rPermissions);
		},
		inserted: function (el, binding, vnode) { 
			if (el.dataset.responsives == null) return 0;
			
			function checkDisplay() {
				var myPermissions = JSON.parse(el.dataset.responsives);
				var curWidth = window.innerWidth;
				var initial = el.dataset.initialDisplay ? el.dataset.initialDisplay : "block";
				for (var i in self.__rPermissions[binding.arg]) {
					if (curWidth >= self.__rPermissions[binding.arg][i].min && curWidth <= self.__rPermissions[binding.arg][i].max) {
						el.style.display = myPermissions[i] ? initial :"none";
						vnode.__r
						break;
					}
				}
			};
			checkDisplay();
			
			var resizeListenerId = JSON.parse(el.dataset.responsives).rId;
			self.resizeListeners[resizeListenerId] = checkDisplay;
		},
		unbind: function (el, binding, vnode) { 
			var resizeListenerId = JSON.parse(el.dataset.responsives).rId;
			delete self.resizeListeners[resizeListenerId];
		}
	}})();

	