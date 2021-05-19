(function(t){function e(e){for(var n,a,c=e[0],l=e[1],r=e[2],d=0,b=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&b.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(b.length)b.shift()();return i.push.apply(i,r||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,c=1;c<o.length;c++){var l=o[c];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},s={app:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"0dab":function(t,e,o){"use strict";o("c47b")},"49bd":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("e792"),o("0cdd");var n=o("2b0e"),s=o("5f5b");o("ab8b"),o("2dd8");n["default"].use(s["a"]);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("MainBody"),o("Projects",{staticClass:"proj"}),o("Header",{staticClass:"head"})],1)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("b-navbar",{staticClass:"navbar",attrs:{toggleable:"lg",type:"dark"}},[o("b-navbar-brand",{staticClass:"name"},[t._v("Justin Bifeld")]),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),o("b-collapse",{staticClass:"mt-2",attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{staticClass:"ml-auto mb-3"},[t.isCollapsed?[o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.nav-collapse",modifiers:{"nav-collapse":!0}}],staticClass:"button-list-item",on:{click:function(e){return t.scrollToSection("About-Anchor")}}},[t._v("About")]),o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.nav-collapse",modifiers:{"nav-collapse":!0}}],staticClass:"button-list-item",on:{click:function(e){return t.scrollToSection("Projects-Anchor")}}},[t._v("Projects")]),o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.nav-collapse",modifiers:{"nav-collapse":!0}}],staticClass:"button-list-item",on:{click:t.scrollToSection}},[t._v("Experience")]),o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.nav-collapse",modifiers:{"nav-collapse":!0}}],staticClass:"button-list-item",on:{click:t.scrollToSection}},[t._v("Education")]),o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.nav-collapse",modifiers:{"nav-collapse":!0}}],staticClass:"button-list-item",on:{click:t.scrollToSection}},[t._v("Recipes")])]:[o("b-button",{staticClass:"button-list-item",on:{click:function(e){return t.scrollToSection("About-Anchor")}}},[t._v("About")]),o("b-button",{staticClass:"button-list-item",on:{click:function(e){return t.scrollToSection("Projects-Anchor")}}},[t._v("Projects")]),o("b-button",{staticClass:"button-list-item",on:{click:t.scrollToSection}},[t._v("Experience")]),o("b-button",{staticClass:"button-list-item",on:{click:t.scrollToSection}},[t._v("Education")]),o("b-button",{staticClass:"button-list-item",on:{click:t.scrollToSection}},[t._v("Recipes")])]],2)],1)],1)],1)},l=[],r={name:"Header",props:{msg:String},data:function(){return{isCollapsed:!1,About:"About"}},methods:{scrollToSection:function(t){console.log(t),document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}},mounted:function(){var t=this;this.$root.$on("bv::collapse::state",(function(e,o){t.isCollapsed=o,o?document.getElementById("Main-Body").classList.add("grayed"):document.getElementById("Main-Body").classList.remove("grayed")}))}},u=r,d=(o("0dab"),o("2877")),b=Object(d["a"])(u,c,l,!1,null,"ccbe72fe",null),p=b.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Main-Body",attrs:{id:"Main-Body"}},[n("section",{attrs:{id:"About"}},[n("div",{staticClass:"light x1"}),n("div",{staticClass:"light x2"}),n("div",{staticClass:"light x3"}),n("div",{staticClass:"light x4"}),n("div",{staticClass:"light x5"}),n("div",{staticClass:"light x6"}),n("div",{staticClass:"light x7"}),n("div",{staticClass:"light x8"}),n("div",{staticClass:"light x9"}),n("div",{staticStyle:{position:"relative",top:"-90px",left:"0"},attrs:{id:"About-Anchor"}}),n("b-img",{staticClass:"fixed_width",attrs:{id:"Me-Image",src:o("7db9")}}),n("h2",{attrs:{id:"About-Line"}}),n("h1",{attrs:{id:"About-Name"}},[t._v("Justin Bifeld")]),n("h3",{attrs:{id:"About-Degree"}},[t._v("BS in Computer Engineering")]),n("h4",{attrs:{id:"About-School"}},[t._v("Univeristy of Illinois at Urbana-Champaign Dec '21")]),n("p",{staticClass:"About-Text"},[t._v(" About Text - Coming Soon! ")])],1)])},f=[],v=o("cffa"),g=o("4e7c"),h=o("9ce6"),y={name:"Header",props:{msg:String},methods:{centerName:function(){var t=document.getElementById("About-Name"),e=document.getElementById("About");t.style.left=e.offsetWidth/2-t.offsetWidth/2+"px"}},created:function(){var t=document.createElement("script");t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"),t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/CSSRulePlugin.min.js"),document.head.appendChild(t)},mounted:function(){v["a"].registerPlugin(g["a"]),v["a"].registerPlugin(h["b"]);var t=v["a"].timeline();t.to("#About-Name",{duration:2,delay:2,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"});var e=document.getElementById("About-Name"),o=document.getElementById("About");e.style.left=o.offsetWidth/2-e.offsetWidth/2+"px",window.onresize=this.centerName}},C=y,j=(o("eb13"),Object(d["a"])(C,m,f,!1,null,"bcc45eba",null)),x=j.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Projects"}},[n("div",{staticStyle:{position:"relative",top:"-90px",left:"0"},attrs:{id:"Projects-Anchor"}}),n("p",{staticClass:"Projects-Text"},[t._v(" Projects Text - Coming Soon! ")]),n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md"},[n("div",{staticClass:"card",staticStyle:{width:"18rem"}},[n("img",{staticClass:"card-img-top",attrs:{src:o("cf05"),alt:"Card image cap"}}),n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[t._v("project 1 Name")])])])]),n("div",{staticClass:"col-md"},[t._v(" project 2 ")]),n("div",{staticClass:"col-md"},[t._v(" project 3 ")])])])])}],S={name:"Header",props:{msg:String},methods:{centerName:function(){var t=document.getElementById("About-Name"),e=document.getElementById("About");t.style.left=e.offsetWidth/2-t.offsetWidth/2+"px"}},created:function(){var t=document.createElement("script");t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"),t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/CSSRulePlugin.min.js"),document.head.appendChild(t)},mounted:function(){v["a"].registerPlugin(g["a"]),v["a"].registerPlugin(h["b"]);var t=v["a"].timeline();t.to("#About-Name",{duration:2,delay:2,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"});var e=document.getElementById("About-Name"),o=document.getElementById("About");e.style.left=o.offsetWidth/2-e.offsetWidth/2+"px",window.onresize=this.centerName}},P=S,w=(o("a72f"),Object(d["a"])(P,_,A,!1,null,"11e04194",null)),E=w.exports,B={name:"App",components:{Header:p,MainBody:x,Projects:E}},T=B,N=(o("034f"),Object(d["a"])(T,i,a,!1,null,null,null)),k=N.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(k)}}).$mount("#app")},"7db9":function(t,e,o){t.exports=o.p+"img/Justin_Profile_Pic.310e1242.png"},"85ec":function(t,e,o){},a72f:function(t,e,o){"use strict";o("ced6")},c47b:function(t,e,o){},ced6:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},eb13:function(t,e,o){"use strict";o("49bd")}});
//# sourceMappingURL=app.948eeb31.js.map