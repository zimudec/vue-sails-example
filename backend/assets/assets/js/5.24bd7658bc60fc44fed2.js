webpackJsonp([5],{129:function(t,e,r){"use strict";var n={data:function(){return{id:""}},created:function(){this.$store.dispatch("getProductsByUser",this.user)},i18n:{messages:{en:{"field.first":"Title","field.second":"Description","field.third":"Price","field.fourth":"Actions","button.first":"Edit","button.second":"Remove","product.removed":"Product removed"},de:{"field.first":"Titel","field.second":"Beschreibung","field.third":"Preis","field.fourth":"Aktionen","button.first":"Bearbeiten","button.second":"Entfernen","product.removed":"Produkt entfernt"}}},computed:{fields:function(){return{title:{label:this.$t("field.first")},description:{label:this.$t("field.second")},price:{label:this.$t("field.third")},actions:{label:this.$t("field.fourth")}}},products:{get:function(){return this.$store.state.Products.products}},user:{get:function(){return this.$store.state.User.user}},isEditProductVisible:{get:function(){return this.$store.state.Product.product.meta.isEditProductVisible},set:function(t){this.$store.commit("SET_IS_EDIT_PRODUCT_VISIBLE",t)}}}};e.a=n},130:function(t,e,r){"use strict";var n={props:["id"],i18n:{messages:{en:{"template.first.title":"Patch product","description.first":"Define a title","label.first":"Title","description.second":"Define a price","label.second":"Price","description.third":"Define a description","label.third":"Description","button.first":"Cancel","button.second":"Patch","product.patched":"Product patched"},de:{"template.first.title":"Bearbeite Produkt","description.first":"Definiere einen Titel","label.first":"Titel","description.second":"Definiere einen Preis","label.second":"Preis","description.third":"Definiere eine Beschreibung","label.third":"Beschreibung","button.first":"Abbrechen","button.second":"Speichern","product.patched":"Produkt bearbeitet"}}},computed:{user:{get:function(){return this.$store.state.User.user}},title:{get:function(){return this.$store.state.Product.product.title},set:function(t){this.$store.commit("SET_PRODUCT_TITLE",t)}},description:{get:function(){return this.$store.state.Product.product.description},set:function(t){this.$store.commit("SET_PRODUCT_DESCRIPTION",t)}},price:{get:function(){return this.$store.state.Product.product.price},set:function(t){this.$store.commit("SET_PRODUCT_PRICE",t)}},isEditProductVisible:{get:function(){return this.$store.state.Product.product.meta.isEditProductVisible},set:function(t){this.$store.commit("SET_IS_EDIT_PRODUCT_VISIBLE",t)}}}};e.a=n},237:function(t,e,r){var n=r(5)(r(238),r(244),null,null);t.exports=n.exports},238:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(53),i=r.n(n),o=r(56),c=r.n(o),s=r(129),u=r(239),a=r.n(u),l=r(34);r.n(l);e.default={mixins:[s.a],components:{ProductPatch:a.a},methods:{showPatchForm:function(t){this.$set(this,"id",t),this.$store.commit("SET_IS_EDIT_PRODUCT_VISIBLE",!0)},deleteProduct:function(t){var e=this;return c()(i.a.mark(function r(){return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("deleteProduct",t);case 2:Object(l.Toast)({message:e.$t("product.removed"),position:"bottom",duration:3e3}),e.$store.dispatch("getProductsByUser",e.user);case 4:case"end":return r.stop()}},r,e)}))()}}}},239:function(t,e,r){r(240);var n=r(5)(r(242),r(243),null,null);t.exports=n.exports},240:function(t,e,r){var n=r(241);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(25)("a77fbf9a",n,!0)},241:function(t,e,r){e=t.exports=r(24)(),e.push([t.i,".mint-popup-1{width:85%;height:85%;border-radius:8px;padding:20px}","",{version:3,sources:["/media/cetaju/Entwicklung/Projekte/Github/vue-sails-example/frontend/src/components/user/products/product/ProductPatch.mobile.vue"],names:[],mappings:"AACA,cACE,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,YAAc,CACf",file:"ProductPatch.mobile.vue",sourcesContent:["\n.mint-popup-1 {\n  width: 85%;\n  height: 85%;\n  border-radius: 8px;\n  padding: 20px;\n}\n"],sourceRoot:""}])},242:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(130),i=r(34);r.n(i);e.default={mixins:[n.a],created:function(){var t=this;this.$store.dispatch("getProduct",this.id).then(function(e){t.$store.commit("SET_PRODUCT_TITLE",e.title),t.$store.commit("SET_PRODUCT_DESCRIPTION",e.description),t.$store.commit("SET_PRODUCT_PRICE",e.price)},function(){})},methods:{patchProduct:function(){var t=this;this.$store.dispatch("patchProduct",{id:this.id,title:this.title,price:this.price,description:this.description}).then(function(){Object(i.Toast)({message:t.$t("product.patched"),position:"bottom",duration:3e3}),t.$store.dispatch("getProductsByUser",t.user),t.$store.commit("SET_IS_EDIT_PRODUCT_VISIBLE",!1),t.$store.commit("RESET_PRODUCT")},function(){})},cancel:function(){this.$store.commit("SET_IS_EDIT_PRODUCT_VISIBLE",!1)}},destroyed:function(){this.$store.commit("RESET_PRODUCT")}}},243:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("mt-popup",{staticClass:"mint-popup-1",model:{value:t.isEditProductVisible,callback:function(e){t.isEditProductVisible=e},expression:"isEditProductVisible"}},[r("mt-field",{attrs:{label:t.$t("label.first")},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),r("mt-field",{attrs:{label:t.$t("label.third")},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),r("mt-field",{attrs:{label:t.$t("label.second")},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),t._v(" "),r("mt-cell",{attrs:{title:""}},[r("mt-button",{attrs:{size:"small",type:"default",plain:""},on:{click:t.cancel}},[t._v(t._s(t.$t("button.first")))]),t._v(" "),r("mt-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:t.patchProduct}},[t._v(t._s(t.$t("button.second")))])],1)],1)],1)},staticRenderFns:[]}},244:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isEditProductVisible?r("product-patch",{attrs:{id:t.id}}):t._e(),t._v(" "),t._l(t.products,function(e){return r("mt-cell",{key:e.id,attrs:{title:e.title}},[r("mt-button",{attrs:{size:"small",type:"default"},on:{click:function(r){t.showPatchForm(e.id)}}},[t._v(t._s(t.$t("button.first")))]),t._v(" "),r("mt-button",{attrs:{size:"small",type:"danger"},on:{click:function(r){t.deleteProduct(e.id)}}},[t._v(t._s(t.$t("button.second")))])],1)})],2)},staticRenderFns:[]}},53:function(t,e,r){t.exports=r(54)},54:function(t,e,r){var n=function(){return this}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(55),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},55:function(t,e){!function(e){"use strict";function r(t,e,r,n){var o=e&&e.prototype instanceof i?e:i,c=Object.create(o.prototype),s=new h(n||[]);return c._invoke=a(t,r,s),c}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function o(){}function c(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(r,i,o,c){var s=n(t[r],t,i);if("throw"!==s.type){var u=s.arg,a=u.value;return a&&"object"==typeof a&&g.call(a,"__await")?Promise.resolve(a.__await).then(function(t){e("next",t,o,c)},function(t){e("throw",t,o,c)}):Promise.resolve(a).then(function(t){u.value=t,o(u)},c)}c(s.arg)}function r(t,r){function n(){return new Promise(function(n,i){e(t,r,n,i)})}return i=i?i.then(n,n):n()}var i;this._invoke=r}function a(t,e,r){var i=T;return function(o,c){if(i===L)throw new Error("Generator is already running");if(i===O){if("throw"===o)throw c;return m()}for(r.method=o,r.arg=c;;){var s=r.delegate;if(s){var u=l(s,r);if(u){if(u===R)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===T)throw i=O,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=L;var a=n(t,e,r);if("normal"===a.type){if(i=r.done?O:$,a.arg===R)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(i=O,r.method="throw",r.arg=a.arg)}}}function l(t,e){var r=t.iterator[e.method];if(r===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,l(t,e),"throw"===e.method))return R;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return R}var i=n(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,R;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,R):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,R)}function d(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(d,this),this.reset(!0)}function p(t){if(t){var e=t[_];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=v,e.done=!0,e};return n.next=n}}return{next:m}}function m(){return{value:v,done:!0}}var v,y=Object.prototype,g=y.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},_=b.iterator||"@@iterator",P=b.asyncIterator||"@@asyncIterator",E=b.toStringTag||"@@toStringTag",w="object"==typeof t,x=e.regeneratorRuntime;if(x)return void(w&&(t.exports=x));x=e.regeneratorRuntime=w?t.exports:{},x.wrap=r;var T="suspendedStart",$="suspendedYield",L="executing",O="completed",R={},S={};S[_]=function(){return this};var I=Object.getPrototypeOf,D=I&&I(I(p([])));D&&D!==y&&g.call(D,_)&&(S=D);var C=c.prototype=i.prototype=Object.create(S);o.prototype=C.constructor=c,c.constructor=o,c[E]=o.displayName="GeneratorFunction",x.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},x.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,E in t||(t[E]="GeneratorFunction")),t.prototype=Object.create(C),t},x.awrap=function(t){return{__await:t}},s(u.prototype),u.prototype[P]=function(){return this},x.AsyncIterator=u,x.async=function(t,e,n,i){var o=new u(r(t,e,n,i));return x.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},s(C),C[E]="Generator",C[_]=function(){return this},C.toString=function(){return"[object Generator]"},x.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},x.values=p,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(f),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return o.type="throw",o.arg=t,r.next=e,n&&(r.method="next",r.arg=v),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=g.call(i,"catchLoc"),s=g.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,R):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),R},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),f(r),R}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;f(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:p(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=v),R}}}(function(){return this}()||Function("return this")())},56:function(t,e,r){"use strict";e.__esModule=!0;var n=r(12),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){function n(o,c){try{var s=e[o](c),u=s.value}catch(t){return void r(t)}if(!s.done)return i.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}}});