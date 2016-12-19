/**
 * Vue-Responsive
 * @Url: https://github.com/reinerBa/Vue-Responsive
 * @License: MIT, Reiner Bamberger
 */

Vue.directive('responsiveness', {
    bind: function (el, binding, vnode) {
        el.dataset.initialDisplay = el.style.display; //save the user defined css-value

        var preParams = [];

        if (Array.isArray(binding.value) || (typeof binding.expression === "string" && !!binding.expression.match(/\[*\]/))) {
            if (Array.isArray(binding.value))
                preParams = binding.value;
            else {
                var stringArray = binding.expression.replace(/'/g, '"');
                preParams = JSON.parse(stringArray );
            }
            preParams.sort();
        } else if (typeof binding.value === "string" || typeof binding.expression === "string") {   //a single parameter
            var val = binding.value || binding.expression.replace(/'"/g, "");
            preParams = new Array(val);
            preParams.sort();
        } else {
            preParams = null;
            return false;
        }
        if (!preParams) return 0;

        //Bootstrap 4 Repsonsive Utils default
        this.__rPermissions = { xs: { show: true, min: -1, max: 543 }, sm: { show: true, min: 544, max: 767 }, md: { show: true, min: 768, max: 991 }, lg: { show: true, min: 992, max: 1199 }, xl: { show: true, min: 1200, max: Infinity } };
        //:bs3
        if (binding.arg === "bs3")
            this.__rPermissions= { xs: { show: true, min: -1, max: 767 }, sm: { show: true, min: 768, max: 991 }, md: { show: true, min: 992, max: 1199 }, lg: { show: true, min: 1200, max: Infinity } };        
        
        var rPermissions = {};
        for (k in this.__rPermissions)
            rPermissions[k] = true;

        var validInputs = ["xs", "sm", "md", "lg", "xl", "hidden-xs", "hidden-sm", "hidden-md", "hidden-lg", "hidden-xl","hidden-all"]
        
        if (preParams[0] === "hidden-all") {
            preParams.splice(0, 1);
            for (i in this.__rPermissions) {
                rPermissions[i] = false;
            }
        }
        
        var i = 0, item;
        while(item = preParams[i++]) {
            if (validInputs.indexOf(item) != -1) {
                if (item.length ==2) {
                    rPermissions[item]= true;
                } else if (item.length == 9){ //hidden-..
                    var key = item.split("-")[1];
                    rPermissions[key] = false;
                } 
            }
        }
        el.dataset.responsives = JSON.stringify(rPermissions);
    },
    inserted: function (el, binding, vnode) { 
        if (el.dataset.responsives == null) return 0;
        console.log(el.dataset.responsives)
        
        function checkDisplay() {
            var myPermissions = JSON.parse(el.dataset.responsives);
            var curWidth = el.ownerDocument.documentElement.offsetWidth;
            for (i in this.__rPermissions) {
                if (curWidth >= this.__rPermissions[i].min && curWidth <= this.__rPermissions[i].max) {
                    el.style.display = myPermissions[i] ? el.dataset.initialDisplay :"none";
                    break;
                }
            }
        };
        checkDisplay();

        var listenerName;
        window.addEventListener("resize", listenerName = checkDisplay);//arguments.callee(el, binding, vnode, 1) });
        el.dataset.listener = JSON.stringify(listenerName);
    },
/*    update: function (el, binding, vnode){
        if (this.__rPermissions == null) return 0;
        
        var myPermissions = JSON.parse(el.dataset.responsives);
        var curWidth = el.ownerDocument.documentElement.offsetWidth;
        for (i in this.__rPermissions) {
            if (curWidth >= this.__rPermissions[i].min && curWidth <= this.__rPermissions[i].max) {
                el.style.display = myPermissions[i] ? el.dataset.initialDisplay :"none";
                break;
            }
        }
    },
 */   unbind: function (el, binding, vnode) {
        debugger;
        window.removeEventListener("resize", JSON.parse(el.dataset.listener));//arguments.callee(el, binding, vnode, 1) });
    }
});

