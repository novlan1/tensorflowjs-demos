(()=>{"use strict";var e,r,n={8:()=>{const e=tf,r=tfvis;function n(e=0,r=1){let n,t,o;do{n=2*Math.random()-1,t=2*Math.random()-1,o=n*n+t*t}while(o>1);let i=Math.sqrt(-2*Math.log(o)/o)*n;return e+Math.sqrt(r)*i}window.onload=async()=>{const t=function(e){let r=[];function t(e,t,o){for(let i=0;i<200;i++){let i=n(e),c=n(t);r.push({x:i,y:c,label:o})}}return t(2,2,0),t(-2,-2,0),t(-2,2,1),t(2,-2,1),r}();r.render.scatterplot({name:"XOR 训练数据"},{values:[t.filter((e=>1===e.label)),t.filter((e=>0===e.label))]});const o=e.sequential();o.add(e.layers.dense({units:4,inputShape:[2],activation:"relu"})),o.add(e.layers.dense({units:1,activation:"sigmoid"})),o.compile({loss:e.losses.logLoss,optimizer:e.train.adam(.1)});const i=e.tensor(t.map((e=>[e.x,e.y]))),c=e.tensor(t.map((e=>e.label)));await o.fit(i,c,{epochs:10,callbacks:r.show.fitCallbacks({name:"训练效果"},["loss"])}),window.predict=r=>{const n=o.predict(e.tensor([[1*r.x.value,1*r.y.value]]));alert(`预测结果：${n.dataSync()[0]}`)}}}},t={};function o(e){if(t[e])return t[e].exports;var r=t[e]={exports:{}},i={id:e,module:r,factory:n[e],require:o};return o.i.forEach((function(e){e(i)})),r=i.module,i.factory.call(r.exports,r,r.exports,i.require),r.exports}o.m=n,o.c=t,o.i=[],o.hu=e=>e+"."+o.h()+".hot-update.js",o.hmrF=()=>"main."+o.h()+".hot-update.json",o.h=()=>"e579d15c718fab77938a",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="js-ml-code:",o.l=(n,t,i)=>{if(e[n])e[n].push(t);else{var c,a;if(void 0!==i)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var l=d[s];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+i){c=l;break}}c||(a=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",r+i),c.src=n),e[n]=[t];var u=(r,t)=>{c.onerror=c.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(t))),r)return r(t)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),a&&document.head.appendChild(c)}},(()=>{var e,r,n,t,i={},c=o.c,a=[],d=[],s="idle";function l(e){s=e;for(var r=0;r<d.length;r++)d[r].call(null,e)}function u(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return u(e)}))}function f(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return l("check"),o.hmrM().then((function(t){if(!t)return l(v()?"ready":"idle"),null;l("prepare");var i=[];return r=[],n=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,r){return o.hmrC[r](t.c,t.r,t.m,e,n,i),e}),[])).then((function(){return u((function(){return e?h(e):(l("ready"),i)}))}))}))}function p(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},v();var r=n.map((function(r){return r(e)}));n=void 0;var o,i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return l("abort"),Promise.resolve().then((function(){throw i[0]}));l("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),l("apply");var c=function(e){o||(o=e)},a=[];return r.forEach((function(e){if(e.apply){var r=e.apply(c);if(r)for(var n=0;n<r.length;n++)a.push(r[n])}})),o?(l("fail"),Promise.resolve().then((function(){throw o}))):t?h(e).then((function(e){return a.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(l("idle"),Promise.resolve(a))}function v(){if(t)return n||(n=[]),Object.keys(o.hmrI).forEach((function(e){t.forEach((function(r){o.hmrI[e](r,n)}))})),t=void 0,!0}o.hmrD=i,o.i.push((function(h){var v,m,y,g=h.module,b=function(n,t){var o=c[t];if(!o)return n;var i=function(r){if(o.hot.active){if(c[r]){var i=c[r].parents;-1===i.indexOf(t)&&i.push(t)}else a=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),a=[];return n(r)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var f in n)Object.prototype.hasOwnProperty.call(n,f)&&"e"!==f&&Object.defineProperty(i,f,d(f));return i.e=function(e){return function(e){switch(s){case"ready":return l("prepare"),r.push(e),u((function(){l("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},i}(h.require,h.id);g.hot=(v=h.id,m=g,y={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==v,_requireSelf:function(){a=m.parents.slice(),e=v,o(v)},active:!0,accept:function(e,r){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)y._acceptedDependencies[e[n]]=r||function(){};else y._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._declinedDependencies[e[r]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=y._disposeHandlers.indexOf(e);r>=0&&y._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":n=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,n)})),l("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(v)}},check:f,apply:p,status:function(e){if(!e)return s;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:i[v]},e=void 0,y),g.parents=a,g.children=[],a=[],h.require=b})),o.hmrC={},o.hmrI={}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e,r,n,t,i={179:0},c={};function a(e){return new Promise(((r,n)=>{c[e]=r;var t=o.p+o.hu(e),i=new Error;o.l(t,(r=>{if(c[e]){c[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading hot update chunk "+e+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,n(i)}}))}))}function d(c){function a(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var i=t.pop(),c=i.id,a=i.chain,s=o.c[c];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var l=0;l<s.parents.length;l++){var u=s.parents[l],f=o.c[u];if(f){if(f.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([u]),moduleId:c,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[c]?(n[u]||(n[u]=[]),d(n[u],[c])):(delete n[u],r.push(u),t.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function d(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}o.f&&delete o.f.jsonpHmr,e=void 0;var s={},l=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(o.o(r,p)){var h,v=r[p],m=!1,y=!1,g=!1,b="";switch((h=v?a(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":c.onUnaccepted&&c.onUnaccepted(h),c.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":c.onAccepted&&c.onAccepted(h),y=!0;break;case"disposed":c.onDisposed&&c.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in u[p]=v,d(l,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,p)&&(s[p]||(s[p]=[]),d(s[p],h.outdatedDependencies[p]));g&&(d(l,[h.moduleId]),u[p]=f)}r=void 0;for(var w,E=[],_=0;_<l.length;_++){var D=l[_];o.c[D]&&o.c[D].hot._selfAccepted&&u[D]!==f&&!o.c[D].hot._selfInvalidated&&E.push({module:D,require:o.c[D].hot._requireSelf,errorHandler:o.c[D].hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var r,t=l.slice();t.length>0;){var c=t.pop(),a=o.c[c];if(a){var d={},u=a.hot._disposeHandlers;for(_=0;_<u.length;_++)u[_].call(null,d);for(o.hmrD[c]=d,a.hot.active=!1,delete o.c[c],delete s[c],_=0;_<a.children.length;_++){var f=o.c[a.children[_]];f&&(e=f.parents.indexOf(c))>=0&&f.parents.splice(e,1)}}}for(var p in s)if(o.o(s,p)&&(a=o.c[p]))for(w=s[p],_=0;_<w.length;_++)r=w[_],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(e){for(var r in u)o.o(u,r)&&(o.m[r]=u[r]);for(var n=0;n<t.length;n++)t[n](o);for(var i in s)if(o.o(s,i)){var a=o.c[i];if(a){w=s[i];for(var d=[],f=[],p=0;p<w.length;p++){var h=w[p],v=a.hot._acceptedDependencies[h];if(v){if(-1!==d.indexOf(v))continue;d.push(v),f.push(h)}}for(var m=0;m<d.length;m++)try{d[m].call(null,w)}catch(r){c.onErrored&&c.onErrored({type:"accept-errored",moduleId:i,dependencyId:f[m],error:r}),c.ignoreErrored||e(r)}}}for(var y=0;y<E.length;y++){var g=E[y],b=g.module;try{g.require(b)}catch(r){if("function"==typeof g.errorHandler)try{g.errorHandler(r)}catch(n){c.onErrored&&c.onErrored({type:"self-accept-error-handler-errored",moduleId:b,error:n,originalError:r}),c.ignoreErrored||e(n),e(r)}else c.onErrored&&c.onErrored({type:"self-accept-errored",moduleId:b,error:r}),c.ignoreErrored||e(r)}}return l}}}globalThis.webpackHotUpdatejs_ml_code=(e,n,i)=>{for(var a in n)o.o(n,a)&&(r[a]=n[a]);i&&t.push(i),c[e]&&(c[e](),c[e]=void 0)},o.hmrI.jsonp=function(e,i){r||(r={},t=[],n=[],i.push(d)),o.o(r,e)||(r[e]=o.m[e])},o.hmrC.jsonp=function(c,s,l,u,f,p){f.push(d),e={},n=s,r=l.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],c.forEach((function(r){o.o(i,r)&&void 0!==i[r]&&(u.push(a(r)),e[r]=!0)})),o.f&&(o.f.jsonpHmr=function(r,n){e&&!o.o(e,r)&&o.o(i,r)&&void 0!==i[r]&&(n.push(a(r)),e[r]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),o(8)})();