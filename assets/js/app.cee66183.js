(function(t){function e(e){for(var i,a,l=e[0],r=e[1],c=e[2],d=0,f=[];d<l.length;d++)a=l[d],o[a]&&f.push(o[a][0]),o[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,l=1;l<n.length;l++){var r=n[l];0!==o[r]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("c21b"),o=n.n(i);o.a},"2e01":function(t,e,n){"use strict";var i=n("462c"),o=n.n(i);o.a},3234:function(t,e,n){},"462c":function(t,e,n){},4866:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var i=n("2b0e"),o=n("ce5b"),s=n.n(o);n("bf40");i["default"].use(s.a,{iconfont:"fa"});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("TopParallax"),n("v-container",[n("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}},[n("v-flex",{attrs:{md4:"",lg4:"","mx-3":""}},[n("PersonalInfo")],1),n("v-flex",{attrs:{md6:"",lg7:"","mx-3":""}},[n("WorkExperience"),n("EducationHistory"),n("TechnologiesUsed")],1)],1)],1)],1)],1)},l=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{attrs:{src:t.topBg,height:"640"}},[n("v-layout",{staticStyle:{"padding-top":"140px"},attrs:{column:"","align-center":""}},[n("h1",{staticClass:"mb-4 text-xs-center intro-text",staticStyle:{"font-size":"12vmin"}},[t._v("Hi, I'm Colin.")]),n("div",{staticClass:"mb-3 text-xs-center intro-text",staticStyle:{"font-size":"7vmin"}},[t._v("Software engineer and systems specialist.")]),n("v-slide-y-reverse-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.isMounted,expression:"isMounted"}],staticClass:"orange darken-2 mt-5",attrs:{dark:"",round:"",large:""},on:{click:t.scrollDown}},[n("strong",[t._v("Learn about me")])])],1)],1)],1)},c=[],u=n("d110"),d=n.n(u),f=n("86d5"),v=n.n(f),p={name:"TopParallax",data:function(){return{topBg:v.a,isMounted:!1}},mounted:function(){var t=this;setTimeout(function(){t.isMounted=!0},400)},methods:{scrollDown:function(){d.a.toY(600,1e3)}}},b=p,h=(n("68fc"),n("2877")),m=Object(h["a"])(b,r,c,!1,null,"1e2a1354",null);m.options.__file="TopParallax.vue";var g,_,y=m.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mb-4"},[n("v-card",{staticClass:"elevation-4"},[n("with-root",{attrs:{show:t.isSm}},[n("v-layout",[n("with-root",{attrs:{show:t.isSm}},[n("v-flex",{attrs:{xs6:""}},[n("v-img",{attrs:{src:t.profilePic,height:t.isSm?"380px":"300px"}})],1)],1),n("with-root",{attrs:{show:t.isSm}},[n("v-flex",{attrs:{xs6:""}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"display-1"},[t._v("Colin Bohn")]),n("v-spacer"),n("span",[n("strong",[t._v("Software Engineer II")]),t._v(" – Wave Broadband\n              ")])],1),n("v-list",[n("v-list-tile",{attrs:{href:"mailto:"+t.email}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"blue"}},[t._v("fas fa-envelope")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Email")]),n("v-list-tile-sub-title",[t._v(t._s(t.email))])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-tile",{attrs:{href:"https://linkedin.com/in/"+t.linkedin}},[n("v-list-tile-action",[n("v-icon",{staticStyle:{"padding-left":"1px"},attrs:{color:"blue"}},[t._v("fab fa-linkedin")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("LinkedIn")]),n("v-list-tile-sub-title",[t._v(t._s(t.linkedin))])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-tile",{attrs:{href:"https://github.com/"+t.github}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"blue"}},[t._v("fab fa-github")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("GitHub")]),n("v-list-tile-sub-title",[t._v(t._s(t.github))])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-tile",{attrs:{href:"https://keybase.io/"+t.keybase}},[n("v-list-tile-action",[n("v-icon",{staticStyle:{"padding-left":"2px"},attrs:{color:"blue"}},[t._v("fab fa-keybase")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Keybase")]),n("v-list-tile-sub-title",[t._v(t._s(t.keybase))])],1)],1)],1)],1)],1)],1)],1)],1)],1)},w=[],k=n("953c"),S=n.n(k),P={functional:!0,props:{show:{type:Boolean,default:!1}},render:function(t,e){var n=e.children.filter(function(t){return t.tag});return 1!==n.length&&console.warn("this component accepts only one root node in its slot"),e.props.show?n[0]:n[0].children}},j=P,C=Object(h["a"])(j,g,_,!1,null,null,null);C.options.__file="WithRoot.vue";var T=C.exports,E={components:{WithRoot:T},data:function(){return{profilePic:S.a,email:"colinbohn@gmail.com",linkedin:"colinbohn",github:"colinbohn",keybase:"colinbohn",resizeListener:null,isSm:!1}},created:function(){this.updateScreenSize(),this.resizeListener=window.addEventListener("resize",this.updateScreenSize)},methods:{updateScreenSize:function(){document.body.clientWidth>600&&document.body.clientWidth<960?this.isSm=!0:this.isSm=!1}}},O=E,M=(n("dd63"),Object(h["a"])(O,x,w,!1,null,null,null));M.options.__file="PersonalInfo.vue";var L=M.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-card",{staticClass:"mb-4"},[n("v-card-title",{staticClass:"display-1"},[t._v("Experience")]),n("v-list",{attrs:{"three-line":""}},[t._l(t.jobs,function(e){return[n("div",{key:e.title},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}}),n("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.employer)}}),n("v-list-tile-sub-title",[t._v("\n                "+t._s(e.start+" – "+e.end)+"\n              ")])],1),n("v-list-tile-avatar",{staticStyle:{"min-width":"125px"},attrs:{size:"120",tile:""}},[n("img",{attrs:{src:e.logo}})])],1),n("div",{staticClass:"mx-2 mb-4"},[n("ul",t._l(e.bullets,function(e,i){return n("li",{key:i,domProps:{innerHTML:t._s(e)}})}))])],1)]})],2)],1)],1)},H=[],I=n("aedb"),W=n.n(I),B=n("f5c7"),D=n.n(B),J={data:function(){return{jobs:[{title:"Software Engineer II",employer:"Wave Broadband",start:"July 2017",end:"Present",logo:D.a,bullets:["Design and develop web applications and APIs using a modern web stack","Advocate and advance containerized infrastructure for applications","Troubleshoot, identify, and resolve server performance problems","Collaborate with peers on best practices and promote knowledge sharing"]},{title:"Technology Specialist",employer:"Stanwood-Camano School District",start:"June 2014",end:"July 2017",logo:W.a,bullets:["Spearheaded new and innovative projects as part of district technology levy","Developed web apps including district status page, tech KB, and student portal","Created open source Allcall.io public alert system for district use","Led rollout of device management solutions for 3000+ endpoints"]}]}}},$=J,A=(n("2e01"),Object(h["a"])($,z,H,!1,null,null,null));A.options.__file="WorkExperience.vue";var U=A.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-card",{staticClass:"mb-4"},[n("v-card-title",{staticClass:"display-1"},[t._v("Education")]),n("v-list",{attrs:{"three-line":""}},[t._l(t.degrees,function(e){return[n("div",{key:e.title},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}}),n("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.school)}}),n("v-list-tile-sub-title",[t._v("\n                "+t._s(e.when)+"\n              ")])],1),n("v-list-tile-avatar",{staticStyle:{"min-width":"125px"},attrs:{size:"120",tile:""}},[n("img",{attrs:{src:e.logo}})])],1)],1)]})],2)],1)],1)},G=[],K=n("e88c"),R=n.n(K),F={data:function(){return{degrees:[{title:"Full Stack Web Developer Nanodegree",school:"Udacity",when:"2017",logo:R.a}]}}},V=F,Y=(n("ecf2"),Object(h["a"])(V,N,G,!1,null,null,null));Y.options.__file="EducationHistory.vue";var q=Y.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-card",{staticClass:"mb-4"},[n("v-card-title",{staticClass:"display-1"},[t._v("Technologies")]),n("div",{staticClass:"text-xs-center pl-4 pr-4 pb-4"},[t._l(t.techs,function(e){return[n("v-tooltip",{key:e.name,attrs:{bottom:""}},[n("v-hover",{attrs:{slot:"activator"},slot:"activator",scopedSlots:t._u([{key:"default",fn:function(i){var o=i.hover;return n("v-btn",{style:o?"":t.lightBgStyle(e.color),attrs:{color:e.color,href:e.link,outline:!o,fab:"",small:""}},[n("v-icon",{attrs:{color:o?"white":"grey darken-1"}},[t._v("fab fa-"+t._s(e.icon))])],1)}}])}),n("span",[t._v(t._s(e.name))])],1)]})],2)],1)],1)},X=[],Z=n("6929"),tt=n.n(Z),et={data:function(){return{techs:[{name:"Vue.JS",icon:"vuejs",color:"#42b883",link:"https://vuejs.org/"},{name:"Node JS",icon:"node-js",color:"#44883e",link:"https://nodejs.org/en/"},{name:"Laravel",icon:"laravel",color:"#f55247",link:"https://laravel.com/"},{name:"PHP",icon:"php",color:"#8892be",link:"https://secure.php.net/"},{name:"Python",icon:"python",color:"#4584b6",link:"https://www.python.org/"},{name:"Docker",icon:"docker",color:"#0db7ed",link:"https://www.docker.com/"},{name:"Git",icon:"git",color:"#f05033",link:"https://git-scm.com/"},{name:"OpenID Connect",icon:"openid",color:"#f8931e",link:"https://openid.net/connect/"}]}},methods:{lightBgStyle:function(t){var e=tt()(t).alpha(.1).rgb();return"background-color: "+e+" !important"}}},nt=et,it=Object(h["a"])(nt,Q,X,!1,null,null,null);it.options.__file="TechnologiesUsed.vue";var ot=it.exports,st={name:"App",components:{TopParallax:y,PersonalInfo:L,WorkExperience:U,EducationHistory:q,TechnologiesUsed:ot}},at=st,lt=(n("034f"),Object(h["a"])(at,a,l,!1,null,null,null));lt.options.__file="App.vue";var rt=lt.exports;i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(rt)}}).$mount("#app")},"68fc":function(t,e,n){"use strict";var i=n("4866"),o=n.n(i);o.a},"86d5":function(t,e,n){t.exports=n.p+"assets/img/bg.f701711f.jpg"},"953c":function(t,e,n){t.exports=n.p+"assets/img/colin.349e8b7c.png"},a7f7:function(t,e,n){},aedb:function(t,e,n){t.exports=n.p+"assets/img/scsd-logo.f499e67c.svg"},c21b:function(t,e,n){},dd63:function(t,e,n){"use strict";var i=n("3234"),o=n.n(i);o.a},e88c:function(t,e,n){t.exports=n.p+"assets/img/udacity-logo.18e83420.svg"},ecf2:function(t,e,n){"use strict";var i=n("a7f7"),o=n.n(i);o.a},f5c7:function(t,e,n){t.exports=n.p+"assets/img/wave-logo.dee12193.svg"}});
//# sourceMappingURL=app.cee66183.js.map