(function(t){function e(e){for(var r,s,c=e[0],o=e[1],l=e[2],f=0,d=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02fe":function(t,e,n){},"04ce":function(t,e,n){"use strict";n("0b52")},"0b52":function(t,e,n){},"14c7":function(t,e,n){},"2ec1":function(t,e,n){"use strict";n("fe99")},"35ac":function(t,e,n){"use strict";n("02fe")},"370c":function(t,e,n){"use strict";n("7628")},3797:function(t,e,n){t.exports=n.p+"img/arrow.a47519b9.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-bree"),n("one-section"),n("about-model")],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"headroom-wrapper"},[t._m(0),r("div",{staticClass:"nav-item-right"},[r("ul",{staticClass:"list-right"},[t._m(1),r("li",[r("img",{staticClass:"ico",attrs:{src:n("c578"),alt:""}}),r("a",{attrs:{href:"#"}},[t._v("Cart")]),r("span",{staticClass:"counter"},[t._v("("+t._s(t.counter)+")")])]),t._m(2)])])])])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-item-left"},[r("img",{attrs:{src:n("68eb"),alt:""}}),r("ul",{staticClass:"list-left"},[r("li",[r("a",{attrs:{href:"#"}},[t._v("Footwear")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Clothing")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Accessories")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Brands")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Clearance")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("img",{staticClass:"ico",attrs:{src:n("ec1f"),alt:""}}),r("a",{attrs:{href:"#"}},[t._v("Search")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("img",{staticClass:"ico",attrs:{src:n("86d7"),alt:""}}),r("a",{attrs:{href:"#"}},[t._v("Sing in")])])}],o={computed:{counter:function(){return this.$store.state.counter}}},l=o,u=(n("c6db"),n("2877")),f=Object(u["a"])(l,s,c,!1,null,null,null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("home-card",[n("product-map",[n("add-cart-btn")],1),n("v-select")],1)},m=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"wrapper-card-product"},[n("div",{staticClass:"box-img"},[n("div",{staticClass:"parent-item"},[n("img",{staticClass:"parent-img",attrs:{src:t.defaultImg}})])]),n("product-map",{attrs:{dataParent:t.chieldImg,clickHandler:t.getParentImg}})],1)])])},g=[],h=(n("7db0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-card-product"},[n("div",{staticClass:"like",on:{click:function(e){t.isActive=!t.isActive}}},[t.isActive?n("i",{staticClass:"material-icons active_like"},[t._v("favorite")]):n("i",{staticClass:"material-icons like_icon"},[t._v("favorite_border")])]),n("h2",{staticClass:"name-brand"},[t._v("Nike")]),n("h1",{staticClass:"name-model"},[t._v("AIR MAX TAVAS SD")]),n("p",{staticClass:"price-model"},[t._v("$ 160.00")]),t._m(0),n("div",{staticClass:"thumb-card"},t._l(t.dataParent,(function(e){return n("img",{key:e.id,staticClass:"chield-img",attrs:{src:e.img},on:{click:function(n){return t.clickHandler(e.parentId)}}})})),0),n("p",{staticClass:"text-size"},[t._v("Size chart")]),n("div",{staticClass:"wrapper-select-add"},[n("v-select"),n("add-cart-btn")],1)])}),_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"available-color"},[t._v("COLORS - "),n("span",[t._v("Black/Pink Pow/Tour Yellow/White")])])}],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-product-cart"},[n("button",{staticClass:"add-cart",on:{click:function(e){return t.updateCounter(1)}}},[t._v("ADD TO CART")])])},C=[],w={methods:{updateCounter:function(t){this.$store.state.counter+=t}}},k=w,x=(n("04ce"),Object(u["a"])(k,b,C,!1,null,null,null)),O=x.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-select"},[r("div",{staticClass:"result-size",on:{click:function(e){t.show=!t.show}}},[t._v(" "+t._s(t.selectedSize)+" "),r("img",{staticClass:"select-arrow",attrs:{src:n("3797"),alt:""}})]),r("transition",{attrs:{name:"fade"}},[t.show?r("div",{staticClass:"list-size"},t._l(t.sizes,(function(e){return r("p",{key:e.name,staticClass:"v-option",on:{click:function(n){return t.insertSize(e.name)}}},[t._v(" "+t._s(e.name)+" ")])})),0):t._e()])],1)},E=[],y={data:function(){return{show:!1,selectedSize:"Size",sizes:[{name:"EU 40.5"},{name:"EU 41"},{name:"EU 42.5"},{name:"EU 43.5"},{name:"EU 45"}]}},methods:{insertSize:function(t){this.$root.$data.sizes,this.selectedSize=t,this.show=!1}}},A=y,j=(n("2ec1"),Object(u["a"])(A,S,E,!1,null,null,null)),$=j.exports,I={props:{dataParent:Array,clickHandler:Function},data:function(){return{isActive:!1}},components:{VSelect:$,AddCartBtn:O}},P=I,z=(n("370c"),Object(u["a"])(P,h,_,!1,null,null,null)),M=z.exports,U={components:{ProductMap:M},data:function(){return{show:!0,showRc:"",defaultImg:n("7e77"),parentImg:[{id:"1",img:n("7e77")},{id:"2",img:n("9651")}],chieldImg:[{id:"1",img:n("f7dc"),parentId:"1"},{id:"2",img:n("9c05"),parentId:"2"}]}},methods:{getParentImg:function(t){this.defaultImg=this.parentImg.find((function(e){return e.id===t})).img}}},T=U,N=(n("35ac"),Object(u["a"])(T,v,g,!1,null,null,null)),B=N.exports,H={components:{HomeCard:B,ProductMap:M,VSelect:$,AddCartBtn:O}},R=H,D=Object(u["a"])(R,p,m,!1,null,null,null),F=D.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bkg-about-model"},[r("img",{attrs:{src:n("cca2"),alt:""}}),r("div",{staticClass:"container"},[r("div",{staticClass:"wrapp-content"},[r("h2",[t._v("CLASSIC CUSHIONING. MODERN COMFORT.")]),r("p",[t._v(" Nike Air Max Tavas SD Men's Shoe recalls the profile of"),r("br"),t._v(" the iconic running original with a Max Air unit in the heel"),r("br"),t._v(" and multi-surface Waffle outsole. A lightweight upper and"),r("br"),t._v(" gradient detail offer a comfortable fit and dynamic look."),r("br")])])])])}],L={},W=L,q=(n("8b1d"),Object(u["a"])(W,V,J,!1,null,null,null)),G=q.exports,X={components:{HeaderBree:d,OneSection:F,AboutModel:G}},Y=X,K=Object(u["a"])(Y,i,a,!1,null,null,null),Q=K.exports,Z=n("2f62");r["a"].use(Z["a"]);var tt=new Z["a"].Store({actions:{},mutations:{},state:{counter:0,sizes:[{name:"EU 40.5"},{name:"EU 41"},{name:"EU 42.5"},{name:"EU 43.5"},{name:"EU 45"}]},getters:{},modules:{}}),et=n("8c4f"),nt=n("9483");Object(nt["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,r["a"].use(et["a"]),new r["a"]({store:tt,render:function(t){return t(Q)}}).$mount("#app")},"68eb":function(t,e,n){t.exports=n.p+"img/logo-header.0455ed2f.svg"},7628:function(t,e,n){},"7e77":function(t,e,n){t.exports=n.p+"img/img.69971b6a.png"},"86d7":function(t,e,n){t.exports=n.p+"img/sign-in.874aea05.svg"},"8b1d":function(t,e,n){"use strict";n("9352")},9352:function(t,e,n){},9651:function(t,e,n){t.exports=n.p+"img/img-2.6bf9d784.png"},"9c05":function(t,e,n){t.exports=n.p+"img/preview-nike-filter.72f71474.svg"},c578:function(t,e,n){t.exports=n.p+"img/basket.c6826bcc.svg"},c6db:function(t,e,n){"use strict";n("14c7")},cca2:function(t,e,n){t.exports=n.p+"img/BgAboutModel.91adb6b2.png"},ec1f:function(t,e,n){t.exports=n.p+"img/loop.ff37731e.svg"},f7dc:function(t,e,n){t.exports=n.p+"img/preview-nike-color.05e2f965.svg"},fe99:function(t,e,n){}});
//# sourceMappingURL=app.51b87d6c.js.map