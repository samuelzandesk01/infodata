(()=>{function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,a){if(!e)return;if("string"==typeof e)return t(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,a)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}!function(t){var a=window.fluentformpro_post_update_vars.post_selector,n=null;function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t||(t=""),"string"!=typeof t&&(t=t.length>0?t.map((function(e){return e.value?e.value.toString():e.toString()})):t.toString()),e.hasClass("ff_has_multi_select")?e.data("choicesjs")&&(e.data("choicesjs").removeActiveItems(t),e.data("choicesjs").setChoiceByValue(t)):e.val(t)}function r(a){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=!1;"string"!=typeof i&&"number"!=typeof i||("1"===i&&(r=!0),i=i.includes(",")?i.split(","):[i]);var o=(i=(n=[]).concat.apply(n,e(i))).map((function(e){return e.value?e.value.toString().trim():e.toString().trim()}));a.each((function(e,a){var n=t(a);-1!==t.inArray(n.val(),o)||"on"===n.val()&&r?(n.closest(".ff-el-form-check").addClass("ff_item_selected"),n.prop("checked",!0)):n.prop("checked",!1)}))}function o(e,a,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"img";if(Array.isArray(a)&&a.length>0)t.each(a,(function(t,a){o(e,a,n,i)}));else{var r='<input type="hidden" class="ff-acf-mb-attachment-remove" name="'.concat(n,'" value="__acf_image_or_file_remove__').concat(f(a),'">'),s=l(e,a,r,i);e.closest(".ff-el-input--content").append(s)}}function s(e,a){var n="Something is wrong when doing ajax request! Please try again";e.responseJSON&&e.responseJSON.data&&e.responseJSON.data.message?n=e.responseJSON.data.message:e.responseJSON&&e.responseJSON.message?n=e.responseJSON.message:e.responseText&&(n=e.responseText);var i=t("<div/>",{class:"error text-danger"});a.closest(".ff-el-group").addClass("ff-el-is-error"),a.closest(".ff-el-input--content").find("div.error").remove(),a.closest(".ff-el-input--content").append(i.text(n))}function l(e,a,n){var i,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"img";if(!a||Array.isArray(a)&&!a.length)return"";"image"===(null===(i=a)||void 0===i?void 0:i.type)&&(r="img");var o=t("<div/>",{class:"ff-post-update-thumb-wrapper",css:{position:"relative","margin-bottom":"15px"}}),s=t("<span/>",{text:"X",title:"Remove "+("file"===r?"File":"Image"),"data-attachment-id":f(a),css:{position:"absolute",background:"#f00","border-radius":"50%",color:"#fff",right:"-3px",top:"-3px",width:"15px",height:"15px",display:"flex","align-items":"center","justify-content":"center","font-weight":"700","font-size":"10px",cursor:"pointer","z-index":1},on:{click:function(){var e=t(this).closest(".ff-el-group").find(".ff-acf-mb-attachment-remove"),a=t(this).data("attachment-id");if(a&&e.length>0&&e.val()){var i=e.val()+","+a;e.val(i)}else t(this).closest(".ff-el-input--content").append(n);o.remove()}}}),l="";if("string"==typeof a&&"file"===r){var c=a.split(/(\\|\/)/g).pop(),d=c.split(".").pop().toLowerCase().trim();if(!["png","jpg","gif","jpeg","webp","bmp"].includes(d)){var p={};p.url=a,p.filename=c,p.filesize=function(e){var t=0,a=new XMLHttpRequest;a.open("HEAD",e,!1),a.send(null),200===a.status&&(t=a.getResponseHeader("content-length"));return parseInt(t)}(a),a=p}}if("file"===r&&"string"!=typeof a)l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:140;return t-=91,e.filesize=(null==e?void 0:e.filesize)||(null==e?void 0:e.filesizeInBytes),'\n                    <div class="ff-upload-preview" data-src="">\n                        <div class="ff-upload-thumb">\n                            <div class="ff-upload-preview-img" style="background-image: url(\''.concat(null==e?void 0:e.url,'\');">\n                            \n                            </div>\n                        </div>\n                        <div class="ff-upload-details">\n                            <div class="ff-upload-filename" style="max-width: ').concat(t,'px;">').concat(null!=e&&e.filename?e.filename:null==e?void 0:e.name,'</div>\n                                <div class="ff-upload-progress-inline ff-el-progress">\n                                    <div class="ff-el-progress-bar" style="width: 100%;"></div>\n                                </div>\n                                <div class="ff-upload-filesize ff-inline-block">').concat(null!=e&&e.filesize?(e.filesize/1024).toFixed(2):0,' KB</div>\n                                <div class="ff-upload-error" style="color:red;"></div>\n                            </div>\n                        </div>\n                    </div>\n               ')}(a,parseInt(e.closest(".ff-el-group").width()));else{var u;if("string"!=typeof a)a=null===(u=a)||void 0===u?void 0:u.url;l='<div style="max-width: 200px;"><img class="ff-post-update-thumb" style="width: 100%;" src="'+a+'" ></div>'}return o.append(s).append(l),o}function f(e){return"string"==typeof e?"":(null==e?void 0:e.ID)||(null==e?void 0:e.id)||""}t(document).on("change","#"+a,(function(e){var a=this,f=t(this).val(),c=t(this).closest("form");if(function(e){var t=e.find(".ff-post-update-thumb-wrapper");t.length&&t.remove()}(c),n&&function(e){var t=e.find(".ff-el-repeater.js-repeater table tbody");t.find("tr").remove(),t.append(n)}(c),f){var d=c.attr("data-form_id");jQuery.post(window.fluentFormVars.ajaxUrl,{action:"fluentformpro_get_post_details",post_id:f,form_id:d,fluentformpro_post_update_nonce:window.fluentformpro_post_update_vars.nonce}).then((function(e){e.data.post?(!function(e,a){t.each(e,(function(e,t){if("post_content"===e)window.wpActiveEditor&&tinyMCE.get(wpActiveEditor).setContent(t);else if("thumbnail"===e){var n=a.find("input[name='featured_image']");if(n.length&&t){var i=l(n,t,'<input type="hidden" name="remove_featured_image" value="1">');n.closest(".ff-el-input--content").append(i)}}else"post_excerpt"===e?a.find("textarea[name='"+e+"']").val(t).trigger("change"):a.find("input[name='"+e+"']").val(t).trigger("change")}))}(e.data.post,c),function(e,a){t.each(e,(function(e,t){var n=a.find('[data-name="'+e+'"]');if("select"===n.attr("type"))i(n,t);else if("checkbox"===n.attr("type"))r(n,t);else{var o=t.map((function(e){return e.label})).join(",");n.val(o)}n.change()}))}(e.data.taxonomy,c),["custom_meta","acf_metas","advanced_acf_metas","mb_general_metas","mb_advanced_metas"].forEach((function(a){var s=e.data[a];!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;t.each(e,(function(e,t){!function(e,t){var a=t.name;a.includes(".")&&(a=a.split(".").join("[")+"]");var s=t.value,l=e.find('[data-name="'+a+'"]');l.length||(l=e.find('[name="'+a+'"]'));if(l.length){switch(t.type){case"image":case"image_upload":case"single_image":case"gallery":o(l,s,a,"img");break;case"file":case"file_upload":case"file_input":case"file_advanced":o(l,s,a,"file");break;case"select":case"image_select":case"checkbox":case"radio":case"button_group":case"checkbox_list":!function(e,t){var a="select"===e.attr("type")||"select"===e.prop("nodeName").toLowerCase();a?i(e,t):r(e,t)}(l,s);break;case"date_picker":case"date_time_picker":case"time_picker":!function(e,t,a){var n;"date_picker"===a?n="Ymd":"date_time_picker"===a?n="Y-m-d H:i:s":"time_picker"===a&&(n="H:i:s");if(e.length>0&&e[0]._flatpickr){var i=e[0]._flatpickr,r=i.parseDate(t,n);i.setDate(r)}else e.val(t)}(l,s,t.type);break;case"repeater":!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!t||null==t||!t.length)return;var a=e.find("table"),i=a.find("tbody tr"),r=parseInt(a.attr("data-max_repeat"));t.forEach((function(e){var t=a.find("tbody tr").length-1;if(r&&t===r)a.addClass("repeat-maxed");else{var o=i.clone();n||(n=i.clone());var s=Object.values(e);o.find("td").each((function(e,t){var a=jQuery(this).find(".ff-el-form-control:last-child"),n=a.attr("data-mask");n&&a.mask(n);var i="ffrpt-"+(new Date).getTime()+e,r={value:s[e]||"",id:i};a.prop(r)})),o.insertBefore(i)}})),i.remove();var o=a.attr("data-root_name"),s=0;a.find("tbody tr").each((function(e,t){jQuery(this).find(".ff-el-form-control").each((function(t,a){var n=jQuery(a);0===e&&(s=n.attr("tabindex")),n.prop({name:o+"["+e+"][]"}),n.attr("data-name",o+"_"+t+"_"+e),s&&n.attr("tabindex",s)}))})),a.trigger("repeat_change")}(l,s);break;default:"string"==typeof s&&l.val(s)}l.change()}}(a,t)}))}(s||[],c)}))):s(e,t(a))})).fail((function(e){s(e,t(a))})).always((function(){}))}else c.trigger("reset")})),setTimeout((function(){t("#"+a).change()}),500)}(jQuery)})();