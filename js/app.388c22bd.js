(function(e){function n(n){for(var r,o,u=n[0],i=n[1],l=n[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"4fc7d118","chunk-42c03bc0":"d4201741","chunk-73dd2712":"fd0f70e3"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-42c03bc0":1,"chunk-73dd2712":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"31d6cfe0","chunk-42c03bc0":"e7200d1e","chunk-73dd2712":"238a1398"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===c)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),t(a)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var d=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"15d9":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("4917"),t("ac6a"),t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),o=t("5f5b"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u=(t("5c0b"),t("2877")),i={},l=Object(u["a"])(i,c,a,!1,null,null,null),s=l.exports,f=t("8c4f");r["default"].use(f["a"]);var d=new f["a"]({routes:[{path:"/",name:"home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))}},{path:"/login",name:"login",component:function(){return t.e("chunk-73dd2712").then(t.bind(null,"a55b"))}},{path:"/questionnaire",name:"question",component:function(){return t.e("chunk-42c03bc0").then(t.bind(null,"e254"))}}]}),h=t("9483");Object(h["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("f9e3"),t("7d05"),t("15d9");r["default"].config.productionTip=!1,r["default"].use(o["a"]),new r["default"]({router:d,render:function(e){return e(s)}}).$mount("#app");var p="v1.5";self.addEventListener("activate",(function(e){console.log("%c ".concat(p," "),"background: #ddd; color: #0000ff"),caches&&caches.keys().then((function(e){e.forEach((function(e){e.indexOf("d4-precache")<-1?caches.delete(e).then((function(){return console.log("%c Cleared ".concat(e),"background: #333; color: #ff0000")})):caches.open(e).then((function(n){n.match("version").then((function(t){t?t.statusText!==p?caches.delete(e).then((function(){return console.log("%c Cleared Cache ".concat(p),"background: #333; color: #ff0000")})):console.log("%c Great you have the latest version ".concat(p),"background: #333; color: #00ff00"):n.put("version",new Response(p,{status:200,statusText:p}))}))}))}))}))}))},"5c0b":function(e,n,t){"use strict";var r=t("e332"),o=t.n(r);o.a},"7d05":function(e,n,t){},e332:function(e,n,t){}});
//# sourceMappingURL=app.388c22bd.js.map