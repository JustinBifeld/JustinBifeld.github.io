(function(t){function e(e){for(var n,i,c=e[0],l=e[1],r=e[2],d=0,b=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(b.length)b.shift()();return s.push.apply(s,r||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,c=1;c<o.length;c++){var l=o[c];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var u=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("e792"),o("0cdd");var n=o("2b0e"),a=o("5f5b");o("ab8b"),o("2dd8");n["default"].use(a["a"]);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("MainBody"),o("Header")],1)},i=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("b-navbar",{staticClass:"navbar",attrs:{toggleable:"lg",type:"dark"}},[o("b-navbar-brand",{staticClass:"name"},[t._v("Justin Bifeld")]),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),o("b-collapse",{staticClass:"mt-2",attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{staticClass:"ml-auto mb-3"},[t.isCollapsed?[o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.nav-collapse",modifiers:{"nav-collapse":!0}}],staticClass:"button-list-item",on:{click:function(e){return t.scrollToSection("About-Anchor")}}},[t._v("About")]),o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.nav-collapse",modifiers:{"nav-collapse":!0}}],staticClass:"button-list-item",on:{click:function(e){return t.scrollToSection("Projects-Anchor")}}},[t._v("Projects")]),o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.nav-collapse",modifiers:{"nav-collapse":!0}}],staticClass:"button-list-item",on:{click:t.scrollToSection}},[t._v("Experience")]),o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.nav-collapse",modifiers:{"nav-collapse":!0}}],staticClass:"button-list-item",on:{click:t.scrollToSection}},[t._v("Education")]),o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.nav-collapse",modifiers:{"nav-collapse":!0}}],staticClass:"button-list-item",on:{click:t.scrollToSection}},[t._v("Recipes")])]:[o("b-button",{staticClass:"button-list-item",on:{click:function(e){return t.scrollToSection("About")}}},[t._v("About")]),o("b-button",{staticClass:"button-list-item",on:{click:function(e){return t.scrollToSection("Projects")}}},[t._v("Projects")]),o("b-button",{staticClass:"button-list-item",on:{click:t.scrollToSection}},[t._v("Experience")]),o("b-button",{staticClass:"button-list-item",on:{click:t.scrollToSection}},[t._v("Education")]),o("b-button",{staticClass:"button-list-item",on:{click:t.scrollToSection}},[t._v("Recipes")])]],2)],1)],1)],1)},l=[],r={name:"Header",props:{msg:String},data:function(){return{isCollapsed:!1,About:"About"}},methods:{scrollToSection:function(t){console.log(t),document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}},mounted:function(){var t=this;this.$root.$on("bv::collapse::state",(function(e,o){t.isCollapsed=o,o?document.getElementById("Main-Body").classList.add("grayed"):document.getElementById("Main-Body").classList.remove("grayed")}))}},u=r,d=(o("70ff"),o("2877")),b=Object(d["a"])(u,c,l,!1,null,"0d67da4c",null),p=b.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Main-Body",attrs:{id:"Main-Body"}},[n("section",{attrs:{id:"About"}},[n("div",{staticStyle:{position:"relative",top:"-90px",left:"0"},attrs:{id:"About-Anchor"}}),n("b-img",{staticClass:"Me-Image",attrs:{src:o("cf05")}}),n("h1",{attrs:{id:"About-Name"}},[t._v("Justin Bifeld")]),n("p",{staticClass:"About-Text"},[t._v(" About Text - Coming Soon! ")]),n("canvas",{staticClass:"webgl"})],1),t._m(0)])},v=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{attrs:{id:"Projects"}},[o("div",{staticStyle:{position:"relative",top:"-90px",left:"0"},attrs:{id:"Projects-Anchor"}}),o("p",{staticClass:"Projects-Text"},[t._v(" Projects Text - Coming Soon! ")])])}],m=o("cffa"),g={name:"Header",props:{msg:String},created:function(){var t=document.createElement("script");t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"),t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/CSSRulePlugin.min.js"),document.head.appendChild(t)},mounted:function(){var t=document.getElementById("About-Name"),e=m["a"].timeline();e.to(t,{duration:8,delay:.5,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"})}},h=g,y=(o("8438"),Object(d["a"])(h,f,v,!1,null,"c51c24dc",null)),_=y.exports,C={name:"App",components:{Header:p,MainBody:_}},j=C,S=(o("034f"),Object(d["a"])(j,s,i,!1,null,null,null)),x=S.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(x)}}).$mount("#app")},"70ff":function(t,e,o){"use strict";o("c2f0")},"7e6e":function(t,e,o){},8438:function(t,e,o){"use strict";o("7e6e")},"85ec":function(t,e,o){},c2f0:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.f4366969.js.map