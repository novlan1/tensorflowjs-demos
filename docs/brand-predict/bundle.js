(()=>{"use strict";var e,r,n={838:()=>{const e=tf,r="https://novlan1.github.io/tensorflowjs-demos/data",n=["android","apple","windows"];window.onload=async()=>{const t=await e.loadLayersModel(`${r}/mobilenet/web_model/model.json`);t.summary();const o=t.getLayer("conv_pw_13_relu"),i=e.model({inputs:t.inputs,outputs:o.output}),c=await e.loadLayersModel(`${r}/brand/web_model/model.json`);window.predict=async r=>{const t=await(o=r,new Promise((e=>{const r=new FileReader;r.readAsDataURL(o),r.onload=r=>{const n=document.createElement("img");n.src=r.target.result,n.width=224,n.height=224,n.onload=()=>e(n)}})));var o;document.body.appendChild(t);const d=e.tidy((()=>{const r=(n=t,e.tidy((()=>e.browser.fromPixels(n).toFloat().sub(127.5).div(127.5).reshape([1,224,224,3]))));var n;const o=i.predict(r);return c.predict(o)})).argMax(1).dataSync()[0];setTimeout((()=>{alert(`预测结果：${n[d]}`)}),0)}}}},t={};function o(e){if(t[e])return t[e].exports;var r=t[e]={exports:{}},i={id:e,module:r,factory:n[e],require:o};return o.i.forEach((function(e){e(i)})),r=i.module,i.factory.call(r.exports,r,r.exports,i.require),r.exports}o.m=n,o.c=t,o.i=[],o.hu=e=>e+"."+o.h()+".hot-update.js",o.hmrF=()=>"main."+o.h()+".hot-update.json",o.h=()=>"8df1609beedbce6eb3ad",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="js-ml-code:",o.l=(n,t,i)=>{if(e[n])e[n].push(t);else{var c,d;if(void 0!==i)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var l=a[s];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+i){c=l;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",r+i),c.src=n),e[n]=[t];var u=(r,t)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),d&&document.head.appendChild(c)}},(()=>{var e,r,n,t,i={},c=o.c,d=[],a=[],s="idle";function l(e){s=e;for(var r=0;r<a.length;r++)a[r].call(null,e)}function u(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return u(e)}))}function p(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return l("check"),o.hmrM().then((function(t){if(!t)return l(m()?"ready":"idle"),null;l("prepare");var i=[];return r=[],n=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,r){return o.hmrC[r](t.c,t.r,t.m,e,n,i),e}),[])).then((function(){return u((function(){return e?h(e):(l("ready"),i)}))}))}))}function f(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var r=n.map((function(r){return r(e)}));n=void 0;var o,i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return l("abort"),Promise.resolve().then((function(){throw i[0]}));l("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),l("apply");var c=function(e){o||(o=e)},d=[];return r.forEach((function(e){if(e.apply){var r=e.apply(c);if(r)for(var n=0;n<r.length;n++)d.push(r[n])}})),o?(l("fail"),Promise.resolve().then((function(){throw o}))):t?h(e).then((function(e){return d.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(l("idle"),Promise.resolve(d))}function m(){if(t)return n||(n=[]),Object.keys(o.hmrI).forEach((function(e){t.forEach((function(r){o.hmrI[e](r,n)}))})),t=void 0,!0}o.hmrD=i,o.i.push((function(h){var m,v,y,g=h.module,b=function(n,t){var o=c[t];if(!o)return n;var i=function(r){if(o.hot.active){if(c[r]){var i=c[r].parents;-1===i.indexOf(t)&&i.push(t)}else d=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),d=[];return n(r)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var p in n)Object.prototype.hasOwnProperty.call(n,p)&&"e"!==p&&Object.defineProperty(i,p,a(p));return i.e=function(e){return function(e){switch(s){case"ready":return l("prepare"),r.push(e),u((function(){l("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},i}(h.require,h.id);g.hot=(m=h.id,v=g,y={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==m,_requireSelf:function(){d=v.parents.slice(),e=m,o(m)},active:!0,accept:function(e,r){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)y._acceptedDependencies[e[n]]=r||function(){};else y._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._declinedDependencies[e[r]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=y._disposeHandlers.indexOf(e);r>=0&&y._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":n=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,n)})),l("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:p,apply:f,status:function(e){if(!e)return s;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:i[m]},e=void 0,y),g.parents=d,g.children=[],d=[],h.require=b})),o.hmrC={},o.hmrI={}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e,r,n,t,i={179:0},c={};function d(e){return new Promise(((r,n)=>{c[e]=r;var t=o.p+o.hu(e),i=new Error;o.l(t,(r=>{if(c[e]){c[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading hot update chunk "+e+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,n(i)}}))}))}function a(c){function d(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var i=t.pop(),c=i.id,d=i.chain,s=o.c[c];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:c};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:c};for(var l=0;l<s.parents.length;l++){var u=s.parents[l],p=o.c[u];if(p){if(p.hot._declinedDependencies[c])return{type:"declined",chain:d.concat([u]),moduleId:c,parentId:u};-1===r.indexOf(u)&&(p.hot._acceptedDependencies[c]?(n[u]||(n[u]=[]),a(n[u],[c])):(delete n[u],r.push(u),t.push({chain:d.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function a(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}o.f&&delete o.f.jsonpHmr,e=void 0;var s={},l=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in r)if(o.o(r,f)){var h,m=r[f],v=!1,y=!1,g=!1,b="";switch((h=m?d(f):{type:"disposed",moduleId:f}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":c.onUnaccepted&&c.onUnaccepted(h),c.ignoreUnaccepted||(v=new Error("Aborted because "+f+" is not accepted"+b));break;case"accepted":c.onAccepted&&c.onAccepted(h),y=!0;break;case"disposed":c.onDisposed&&c.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(y)for(f in u[f]=m,a(l,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,f)&&(s[f]||(s[f]=[]),a(s[f],h.outdatedDependencies[f]));g&&(a(l,[h.moduleId]),u[f]=p)}r=void 0;for(var w,_=[],E=0;E<l.length;E++){var D=l[E];o.c[D]&&o.c[D].hot._selfAccepted&&u[D]!==p&&!o.c[D].hot._selfInvalidated&&_.push({module:D,require:o.c[D].hot._requireSelf,errorHandler:o.c[D].hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var r,t=l.slice();t.length>0;){var c=t.pop(),d=o.c[c];if(d){var a={},u=d.hot._disposeHandlers;for(E=0;E<u.length;E++)u[E].call(null,a);for(o.hmrD[c]=a,d.hot.active=!1,delete o.c[c],delete s[c],E=0;E<d.children.length;E++){var p=o.c[d.children[E]];p&&(e=p.parents.indexOf(c))>=0&&p.parents.splice(e,1)}}}for(var f in s)if(o.o(s,f)&&(d=o.c[f]))for(w=s[f],E=0;E<w.length;E++)r=w[E],(e=d.children.indexOf(r))>=0&&d.children.splice(e,1)},apply:function(e){for(var r in u)o.o(u,r)&&(o.m[r]=u[r]);for(var n=0;n<t.length;n++)t[n](o);for(var i in s)if(o.o(s,i)){var d=o.c[i];if(d){w=s[i];for(var a=[],p=[],f=0;f<w.length;f++){var h=w[f],m=d.hot._acceptedDependencies[h];if(m){if(-1!==a.indexOf(m))continue;a.push(m),p.push(h)}}for(var v=0;v<a.length;v++)try{a[v].call(null,w)}catch(r){c.onErrored&&c.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[v],error:r}),c.ignoreErrored||e(r)}}}for(var y=0;y<_.length;y++){var g=_[y],b=g.module;try{g.require(b)}catch(r){if("function"==typeof g.errorHandler)try{g.errorHandler(r)}catch(n){c.onErrored&&c.onErrored({type:"self-accept-error-handler-errored",moduleId:b,error:n,originalError:r}),c.ignoreErrored||e(n),e(r)}else c.onErrored&&c.onErrored({type:"self-accept-errored",moduleId:b,error:r}),c.ignoreErrored||e(r)}}return l}}}globalThis.webpackHotUpdatejs_ml_code=(e,n,i)=>{for(var d in n)o.o(n,d)&&(r[d]=n[d]);i&&t.push(i),c[e]&&(c[e](),c[e]=void 0)},o.hmrI.jsonp=function(e,i){r||(r={},t=[],n=[],i.push(a)),o.o(r,e)||(r[e]=o.m[e])},o.hmrC.jsonp=function(c,s,l,u,p,f){p.push(a),e={},n=s,r=l.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],c.forEach((function(r){o.o(i,r)&&void 0!==i[r]&&(u.push(d(r)),e[r]=!0)})),o.f&&(o.f.jsonpHmr=function(r,n){e&&!o.o(e,r)&&o.o(i,r)&&void 0!==i[r]&&(n.push(d(r)),e[r]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),o(838)})();