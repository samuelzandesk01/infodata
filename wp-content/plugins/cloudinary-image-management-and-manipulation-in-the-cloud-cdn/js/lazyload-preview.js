!function(){var e={616:function(e){e.exports=function(e,t){var n,r,i=0;function o(){var o,s,a=n,l=arguments.length;e:for(;a;){if(a.args.length===arguments.length){for(s=0;s<l;s++)if(a.args[s]!==arguments[s]){a=a.next;continue e}return a!==n&&(a===r&&(r=a.prev),a.prev.next=a.next,a.next&&(a.next.prev=a.prev),a.next=n,a.prev=null,n.prev=a,n=a),a.val}a=a.next}for(o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return a={args:o,val:e.apply(null,o)},n?(n.prev=a,a.next=n):r=a,i===t.maxSize?(r=r.prev).next=null:i++,n=a,a.val}return t=t||{},o.clear=function(){n=null,r=null,i=0},o}},604:function(e,t,n){var r;!function(){"use strict";var i={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function o(e){return function(e,t){var n,r,s,a,l,c,u,h,d,p=1,f=e.length,g="";for(r=0;r<f;r++)if("string"==typeof e[r])g+=e[r];else if("object"==typeof e[r]){if((a=e[r]).keys)for(n=t[p],s=0;s<a.keys.length;s++){if(null==n)throw new Error(o('[sprintf] Cannot access property "%s" of undefined value "%s"',a.keys[s],a.keys[s-1]));n=n[a.keys[s]]}else n=a.param_no?t[a.param_no]:t[p++];if(i.not_type.test(a.type)&&i.not_primitive.test(a.type)&&n instanceof Function&&(n=n()),i.numeric_arg.test(a.type)&&"number"!=typeof n&&isNaN(n))throw new TypeError(o("[sprintf] expecting number but found %T",n));switch(i.number.test(a.type)&&(h=n>=0),a.type){case"b":n=parseInt(n,10).toString(2);break;case"c":n=String.fromCharCode(parseInt(n,10));break;case"d":case"i":n=parseInt(n,10);break;case"j":n=JSON.stringify(n,null,a.width?parseInt(a.width):0);break;case"e":n=a.precision?parseFloat(n).toExponential(a.precision):parseFloat(n).toExponential();break;case"f":n=a.precision?parseFloat(n).toFixed(a.precision):parseFloat(n);break;case"g":n=a.precision?String(Number(n.toPrecision(a.precision))):parseFloat(n);break;case"o":n=(parseInt(n,10)>>>0).toString(8);break;case"s":n=String(n),n=a.precision?n.substring(0,a.precision):n;break;case"t":n=String(!!n),n=a.precision?n.substring(0,a.precision):n;break;case"T":n=Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),n=a.precision?n.substring(0,a.precision):n;break;case"u":n=parseInt(n,10)>>>0;break;case"v":n=n.valueOf(),n=a.precision?n.substring(0,a.precision):n;break;case"x":n=(parseInt(n,10)>>>0).toString(16);break;case"X":n=(parseInt(n,10)>>>0).toString(16).toUpperCase()}i.json.test(a.type)?g+=n:(!i.number.test(a.type)||h&&!a.sign?d="":(d=h?"+":"-",n=n.toString().replace(i.sign,"")),c=a.pad_char?"0"===a.pad_char?"0":a.pad_char.charAt(1):" ",u=a.width-(d+n).length,l=a.width&&u>0?c.repeat(u):"",g+=a.align?d+n+l:"0"===c?d+l+n:l+d+n)}return g}(function(e){if(a[e])return a[e];var t,n=e,r=[],o=0;for(;n;){if(null!==(t=i.text.exec(n)))r.push(t[0]);else if(null!==(t=i.modulo.exec(n)))r.push("%");else{if(null===(t=i.placeholder.exec(n)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){o|=1;var s=[],l=t[2],c=[];if(null===(c=i.key.exec(l)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(s.push(c[1]);""!==(l=l.substring(c[0].length));)if(null!==(c=i.key_access.exec(l)))s.push(c[1]);else{if(null===(c=i.index_access.exec(l)))throw new SyntaxError("[sprintf] failed to parse named argument key");s.push(c[1])}t[2]=s}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}n=n.substring(t[0].length)}return a[e]=r}(e),arguments)}function s(e,t){return o.apply(null,[e].concat(t||[]))}var a=Object.create(null);o,s,"undefined"!=typeof window&&(window.sprintf=o,window.vsprintf=s,void 0===(r=function(){return{sprintf:o,vsprintf:s}}.call(t,n,t,e))||(e.exports=r))}()}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e,t,r,i,o=n(616),s=n.n(o);n(604),s()(console.error);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},t=["(","?"],r={")":["("],":":["?","?:"]},i=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var l={"!":function(e){return!e},"*":function(e,t){return e*t},"/":function(e,t){return e/t},"%":function(e,t){return e%t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"<":function(e,t){return e<t},"<=":function(e,t){return e<=t},">":function(e,t){return e>t},">=":function(e,t){return e>=t},"==":function(e,t){return e===t},"!=":function(e,t){return e!==t},"&&":function(e,t){return e&&t},"||":function(e,t){return e||t},"?:":function(e,t,n){if(e)throw t;return n}};function c(n){var o=function(n){for(var o,s,a,l,c=[],u=[];o=n.match(i);){for(s=o[0],(a=n.substr(0,o.index).trim())&&c.push(a);l=u.pop();){if(r[s]){if(r[s][0]===l){s=r[s][1]||s;break}}else if(t.indexOf(l)>=0||e[l]<e[s]){u.push(l);break}c.push(l)}r[s]||u.push(s),n=n.substr(o.index+s.length)}return(n=n.trim())&&c.push(n),c.concat(u.reverse())}(n);return function(e){return function(e,t){var n,r,i,o,s,a,c=[];for(n=0;n<e.length;n++){if(s=e[n],o=l[s]){for(r=o.length,i=Array(r);r--;)i[r]=c.pop();try{a=o.apply(null,i)}catch(e){return e}}else a=t.hasOwnProperty(s)?t[s]:+s;c.push(a)}return c[0]}(o,e)}}var u={contextDelimiter:"",onMissingKey:null};function h(e,t){var n;for(n in this.data=e,this.pluralForms={},this.options={},u)this.options[n]=void 0!==t&&n in t?t[n]:u[n]}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}h.prototype.getPluralForm=function(e,t){var n,r,i,o=this.pluralForms[e];return o||("function"!=typeof(i=(n=this.data[e][""])["Plural-Forms"]||n["plural-forms"]||n.plural_forms)&&(r=function(e){var t,n,r;for(t=e.split(";"),n=0;n<t.length;n++)if(0===(r=t[n].trim()).indexOf("plural="))return r.substr(7)}(n["Plural-Forms"]||n["plural-forms"]||n.plural_forms),i=function(e){var t=c(e);return function(e){return+t({n:e})}}(r)),o=this.pluralForms[e]=i),o(t)},h.prototype.dcnpgettext=function(e,t,n,r,i){var o,s,a;return o=void 0===i?0:this.getPluralForm(e,i),s=n,t&&(s=t+this.options.contextDelimiter+n),(a=this.data[e][s])&&a[o]?a[o]:(this.options.onMissingKey&&this.options.onMissingKey(n,e),0===o?n:r)};var f={"":{plural_forms:function(e){return 1===e?0:1}}},g=/^i18n\.(n?gettext|has_translation)(_|$)/;var y=function(e){return"string"!=typeof e||""===e?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var m=function(e){return"string"!=typeof e||""===e?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var v=function(e,t){return function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,s=e[t];if(m(n)&&y(r))if("function"==typeof i)if("number"==typeof o){var a={callback:i,priority:o,namespace:r};if(s[n]){var l,c=s[n].handlers;for(l=c.length;l>0&&!(o>=c[l-1].priority);l--);l===c.length?c[l]=a:c.splice(l,0,a),s.__current.forEach((function(e){e.name===n&&e.currentIndex>=l&&e.currentIndex++}))}else s[n]={handlers:[a],runs:0};"hookAdded"!==n&&e.doAction("hookAdded",n,r,i,o)}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}};var b=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(r,i){var o=e[t];if(m(r)&&(n||y(i))){if(!o[r])return 0;var s=0;if(n)s=o[r].handlers.length,o[r]={runs:o[r].runs,handlers:[]};else for(var a=o[r].handlers,l=function(e){a[e].namespace===i&&(a.splice(e,1),s++,o.__current.forEach((function(t){t.name===r&&t.currentIndex>=e&&t.currentIndex--})))},c=a.length-1;c>=0;c--)l(c);return"hookRemoved"!==r&&e.doAction("hookRemoved",r,i),s}}};var _=function(e,t){return function(n,r){var i=e[t];return void 0!==r?n in i&&i[n].handlers.some((function(e){return e.namespace===r})):n in i}};var x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(r){var i=e[t];i[r]||(i[r]={handlers:[],runs:0}),i[r].runs++;var o=i[r].handlers;for(var s=arguments.length,a=new Array(s>1?s-1:0),l=1;l<s;l++)a[l-1]=arguments[l];if(!o||!o.length)return n?a[0]:void 0;var c={name:r,currentIndex:0};for(i.__current.push(c);c.currentIndex<o.length;){var u=o[c.currentIndex].callback.apply(null,a);n&&(a[0]=u),c.currentIndex++}return i.__current.pop(),n?a[0]:void 0}};var w=function(e,t){return function(){var n,r,i=e[t];return null!==(n=null===(r=i.__current[i.__current.length-1])||void 0===r?void 0:r.name)&&void 0!==n?n:null}};var k=function(e,t){return function(n){var r=e[t];return void 0===n?void 0!==r.__current[0]:!!r.__current[0]&&n===r.__current[0].name}};var P=function(e,t){return function(n){var r=e[t];if(m(n))return r[n]&&r[n].runs?r[n].runs:0}},F=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=v(this,"actions"),this.addFilter=v(this,"filters"),this.removeAction=b(this,"actions"),this.removeFilter=b(this,"filters"),this.hasAction=_(this,"actions"),this.hasFilter=_(this,"filters"),this.removeAllActions=b(this,"actions",!0),this.removeAllFilters=b(this,"filters",!0),this.doAction=x(this,"actions"),this.applyFilters=x(this,"filters",!0),this.currentAction=w(this,"actions"),this.currentFilter=w(this,"filters"),this.doingAction=k(this,"actions"),this.doingFilter=k(this,"filters"),this.didAction=P(this,"actions"),this.didFilter=P(this,"filters")};var A=function(){return new F}(),T=(A.addAction,A.addFilter,A.removeAction,A.removeFilter,A.hasAction,A.hasFilter,A.removeAllActions,A.removeAllFilters,A.doAction,A.applyFilters,A.currentAction,A.currentFilter,A.doingAction,A.doingFilter,A.didAction,A.didFilter,A.actions,A.filters,function(e,t,n){var r=new h({}),i=new Set,o=function(){i.forEach((function(e){return e()}))},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";r.data[t]=p(p(p({},f),r.data[t]),e),r.data[t][""]=p(p({},f[""]),r.data[t][""])},a=function(e,t){s(e,t),o()},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return r.data[e]||s(void 0,e),r.dcnpgettext(e,t,n,i,o)},c=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default"},u=function(e,t,r){var i=l(r,t,e);return n?(i=n.applyFilters("i18n.gettext_with_context",i,e,t,r),n.applyFilters("i18n.gettext_with_context_"+c(r),i,e,t,r)):i};if(e&&a(e,t),n){var d=function(e){g.test(e)&&o()};n.addAction("hookAdded","core/i18n",d),n.addAction("hookRemoved","core/i18n",d)}return{getLocaleData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return r.data[e]},setLocaleData:a,resetLocaleData:function(e,t){r.data={},r.pluralForms={},a(e,t)},subscribe:function(e){return i.add(e),function(){return i.delete(e)}},__:function(e,t){var r=l(t,void 0,e);return n?(r=n.applyFilters("i18n.gettext",r,e,t),n.applyFilters("i18n.gettext_"+c(t),r,e,t)):r},_x:u,_n:function(e,t,r,i){var o=l(i,void 0,e,t,r);return n?(o=n.applyFilters("i18n.ngettext",o,e,t,r,i),n.applyFilters("i18n.ngettext_"+c(i),o,e,t,r,i)):o},_nx:function(e,t,r,i,o){var s=l(o,i,e,t,r);return n?(s=n.applyFilters("i18n.ngettext_with_context",s,e,t,r,i,o),n.applyFilters("i18n.ngettext_with_context_"+c(o),s,e,t,r,i,o)):s},isRTL:function(){return"rtl"===u("ltr","text direction")},hasTranslation:function(e,t,i){var o,s,a=t?t+""+e:e,l=!(null===(o=r.data)||void 0===o||null===(s=o[null!=i?i:"default"])||void 0===s||!s[a]);return n&&(l=n.applyFilters("i18n.has_translation",l,e,t,i),l=n.applyFilters("i18n.has_translation_"+c(i),l,e,t,i)),l}}}(void 0,void 0,A));T.getLocaleData.bind(T),T.setLocaleData.bind(T),T.resetLocaleData.bind(T),T.subscribe.bind(T),T.__.bind(T),T._x.bind(T),T._n.bind(T),T._nx.bind(T),T.isRTL.bind(T),T.hasTranslation.bind(T);const E={cycleTime:2e3,animate:document.getElementById("lazy_loading.lazy_animate"),image:document.getElementById("lazyload-image"),placeHolders:document.querySelectorAll('[name="lazy_loading[lazy_placeholder]"]'),preloader:document.getElementById("preloader-image"),color:document.getElementById("lazy_loading.lazy_custom_color"),previewCycle:document.getElementById("preview-cycle"),progress:document.getElementById("progress-bar"),threshold:document.getElementById("lazy_loading.lazy_threshold"),currentPlaceholder:null,svg:null,running:!1,init(){this.svg=this.image.dataset.svg,this.currentPlaceholder=document.getElementById("placeholder-"+this.getPlaceholder()),[...this.placeHolders].forEach((e=>{e.addEventListener("change",(()=>this.changePlaceholder(e.value)))})),this.color.addEventListener("input",(()=>this.changePreloader())),this.animate.addEventListener("change",(()=>this.changePreloader())),this.previewCycle.addEventListener("click",(()=>this.startCycle()))},getPlaceholder:()=>document.querySelector('[name="lazy_loading[lazy_placeholder]"]:checked').value,changePreloader(){this.preloader.src=this.getSVG()},changePlaceholder(e){const t=document.getElementById("placeholder-"+e);this.currentPlaceholder&&(this.currentPlaceholder.style.display="none",this.currentPlaceholder.style.width="85%",this.currentPlaceholder.style.boxShadow="",this.currentPlaceholder.style.bottom="0"),t&&(t.style.display=""),this.currentPlaceholder=t},getThreshold(){return parseInt(this.threshold.value)+this.image.parentNode.parentNode.offsetHeight},startCycle(){this.running?this.endCycle():(this.changePlaceholder("none"),this.image.parentNode.parentNode.style.overflowY="scroll",this.image.parentNode.style.visibility="hidden",this.image.parentNode.style.width="100%",this.image.parentNode.style.boxShadow="none",this.progress.style.width="100%",this.preloader.parentNode.style.visibility="hidden",this.running=setTimeout((()=>{this.progress.style.visibility="hidden",this.progress.style.width="0%",this.preloader.parentNode.style.visibility="",setTimeout((()=>{const e=this.getThreshold();this.image.parentNode.style.visibility="",this.preloader.parentNode.style.bottom="-"+e+"px",setTimeout((()=>{setTimeout((()=>{this.image.parentNode.parentNode.scrollTo({top:e,behavior:"smooth"}),this.showPlaceholder()}),this.cycleTime/3)}),this.cycleTime/2)}),this.cycleTime/2)}),this.cycleTime/2))},showPlaceholder(){const e=this.getPlaceholder(),t=this.getThreshold();"off"!==e&&(this.changePlaceholder(e),this.currentPlaceholder&&(this.currentPlaceholder.style.width="100%",this.currentPlaceholder.style.boxShadow="none",this.currentPlaceholder.style.bottom="-"+t+"px")),setTimeout((()=>{this.showImage()}),this.cycleTime/2)},showImage(){const e=this.getThreshold();this.changePlaceholder("none"),this.image.parentNode.style.bottom="-"+e+"px",this.image.parentNode.style.visibility="",setTimeout((()=>{this.endCycle()}),this.cycleTime)},endCycle(){clearTimeout(this.running),this.running=!1,this.changePlaceholder(this.getPlaceholder()),this.image.parentNode.style.visibility="",this.image.parentNode.style.bottom="0",this.image.parentNode.style.width="65%",this.image.parentNode.style.boxShadow="",this.preloader.parentNode.style.bottom="0",this.image.parentNode.parentNode.style.overflowY="",this.progress.style.visibility=""},getSVG(){let e=this.color.value;const t=[e];if(this.animate.checked){const n=[...e.matchAll(new RegExp(/[\d+\.*]+/g))];n[3]=.1,t.push("rgba("+n.join(",")+")"),t.push(e)}return this.svg.replace("-color-",t.join(";"))},showLoader(){this.image.parentNode.style.opacity=1,this.image.parentNode.src=this.getSVG(),setTimeout((()=>{this.showPlaceholder(this.image.parentNode.dataset.placeholder)}),this.cycleTime)}};window.addEventListener("load",(()=>E.init()))}()}();