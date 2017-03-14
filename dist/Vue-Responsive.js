/*!
 * Vue-Responsive v0.1.2
 * @Url: https://github.com/reinerBa/Vue-Responsive
 * @License: MIT, Reiner Bamberger
 */

Vue.directive('responsiveness', {
    bind: function (el, binding, vnode) {
        //Bootstrap 4 Repsonsive Utils default
        if (!this.__rPermissions) {
            this.__rPermissions = {};
            for (i in vnode.context.$data)
                if (i.indexOf("responsiveMarks$$") === 0) {
                    var name = new String(i).replace("responsiveMarks$$", "").toLowerCase();
                    this.__rPermissions[name] = {};
                    for (ii in vnode.context.$data[i]) this.__rPermissions[name][ii] = vnode.context.$data[i][ii];
                }
            this.__rPermissions.undefined = { xs: { show: true, min: -1, max: 543 }, sm: { show: true, min: 544, max: 767 }, md: { show: true, min: 768, max: 991 }, lg: { show: true, min: 992, max: 1199 }, xl: { show: true, min: 1200, max: Infinity } };
            //:bs3
            this.__rPermissions.bs3 = { xs: { show: true, min: -1, max: 767 }, sm: { show: true, min: 768, max: 991 }, md: { show: true, min: 992, max: 1199 }, lg: { show: true, min: 1200, max: Infinity } };
        }
        var validInputs = ['hidden-all'];
        for (i in this.__rPermissions[binding.arg]) {
            validInputs.push(i);
            validInputs.push("hidden-"+i);
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
            for (i in binding.value) {
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


        var rPermissions = {};
        for (k in this.__rPermissions[binding.arg]){
            rPermissions[k] = true;
		}
        
        if (preParams[0] === "hidden-all") {
            preParams.splice(0, 1);
            for (i in this.__rPermissions[binding.arg]) {
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
            var curWidth = el.ownerDocument.documentElement.offsetWidth;
            var initial = el.dataset.initialDisplay ? el.dataset.initialDisplay : "block";
            for (i in this.__rPermissions[binding.arg]) {
                if (curWidth >= this.__rPermissions[binding.arg][i].min && curWidth <= this.__rPermissions[binding.arg][i].max) {
                    el.style.display = myPermissions[i] ? initial :"none";
                    break;
                }
            }
        };
        checkDisplay();

        var listenerName;
        window.addEventListener("resize", listenerName = checkDisplay);//arguments.callee(el, binding, vnode, 1) });
        vnode.respLis = listenerName
    },
   unbind: function (el, binding, vnode) {
       window.removeEventListener("resize", vnode.respLis);
    }
});


