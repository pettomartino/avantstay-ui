!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(global,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(1)),u=n(2).checkWebPSupport();function c(e){if(/^http/i.test(e))return e;var t=globalThis&&globalThis.location?globalThis.location.origin:"";return t?t+(/^\//.test(e)?"":"/")+e:e}t.default=function(e,t){void 0===t&&(t={});var n=t.density,o=void 0===n?1:n,s=t.height,l=void 0===s?0:s,f=t.sizingStep,d=t.useOriginalFile,p=void 0!==d&&d,v=t.width,h=void 0===v?0:v,b=i(t,["density","height","sizingStep","useOriginalFile","width"]),g=globalThis&&globalThis.location&&/localhost/.test(globalThis.location.host)&&e&&!/^http/i.test(e),y=e&&/^(blob|data):/i.test(e),m=e&&/\.svg$/.test(e);if(!e||g||m||y||p)return e;var _=Math.max.call(null,h,l),O=1===f?1:f||_<1e3?100:200;return a.default.stringifyUrl({url:"https://cdn.avantstay.dev/",query:r({},b,u?{format:"Webp"}:{},l?{"size[height]":o*Math.ceil(l/O)*O}:{},h?{"size[width]":o*Math.ceil(h/O)*O}:{},{image_address:c(e)})},{skipEmptyString:!0})}},function(e,t){e.exports=require("query-string")},function(e,t){e.exports=require("supports-webp-sync")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.bottom="bottom",e.top="top"}(t.VerticalGravity||(t.VerticalGravity={})),function(e){e.left="left",e.right="right",e.center="center"}(t.HorizontalGravity||(t.HorizontalGravity={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.default=r.default;var i=n(0);t.thumbnail=i.default},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var u=n(6),c=o(n(7)),s=a(n(8)),l=a(n(9)),f=o(n(0)),d=[[256,384],[378,568],[512,768],[597,896],[682,1024],[853,1280],[1280,1920]],p=u.isMobile()?1.5:1;function v(e,t){e&&(e.current=t)}t.default=s.memo(s.forwardRef((function(e,t){var n,o=e.className,a=e.density,u=void 0===a?p:a,h=e.fit,b=e.gravity,g=e.height,y=e.isPrintable,m=void 0!==y&&y,_=e.onError,O=e.onLoad,j=e.pulseBackground,w=e.quality,k=e.sharpen,x=e.sizingStep,M=e.src,P=e.useOriginalFile,S=void 0!==P&&P,z=e.width,T=i(e,["className","density","fit","gravity","height","isPrintable","onError","onLoad","pulseBackground","quality","sharpen","sizingStep","src","useOriginalFile","width"]),E=s.useState(),L=E[0],q=E[1],C=(n=t,s.useMemo((function(){var e=function(t){v(e,t),"function"==typeof n?n(t):v(n,t)};return v(e,null),e}),[n])),G=s.useCallback((function(){var e=C.current,t=e?e.offsetHeight:0,n=e?e.offsetWidth:0,r=g||t,i=z||n;if(r&&i){var o=function(e,t){for(var n={newHeight:0,newWidth:0},r=0;r<d.length;r++){var i=d[r];if(e<=i[0]&&t<=i[1]){n.newHeight=i[0],n.newWidth=i[1];break}}return n}(r,i),a=o.newHeight,c=o.newWidth,s=M.includes("amazonaws.com/homes/")&&!!a&&!!c,l=f.default(M,{density:u,fit:h,gravity:b,height:s?a:r,quality:w,sharpen:k,sizingStep:s?1:x,useOriginalFile:S,width:s?c:i});if(_||O){var p=new Image;p.onerror=_,p.onload=O,p.src=l}L?(q(void 0),setTimeout((function(){return q(l)}))):q(l)}}),[u,h,b,g,C,_,O,w,k,x,M,S,z]);return s.useLayoutEffect((function(){return G()}),[G]),s.useEffect((function(){var e=c.default((function(){return G()}),100);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[G]),s.default.createElement(l.ImageBackground,r({className:o,printable:m,pulseBackground:j,ref:C,src:L},T))})))},function(e,t){e.exports=require("is-mobile")},function(e,t){e.exports=require("lodash/debounce")},function(e,t){e.exports=require("react")},function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o,a=i(n(10));n(11),t.ImageBackground=a.default.div(o||(o=r(["\n  -webkit-print-color-adjust: ",";\n  color-adjust: ",";\n  display: ",";\n  background-image: url('","');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transition: background 0ms;\n  ","\n"],["\n  -webkit-print-color-adjust: ",";\n  color-adjust: ",";\n  display: ",";\n  background-image: url('","');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transition: background 0ms;\n  ","\n"])),(function(e){return e.printable?"exact":"economy"}),(function(e){return e.printable?"exact":"economy"}),(function(e){return e.children?"flex":"inline-block"}),(function(e){return e.src}),(function(e){return e.pulseBackground?"background-color: rgba(0, 0, 0, 0.1); animation: ImgLiteBgPulse 1.5s infinite;":""}))},function(e,t){e.exports=require("styled-components")},function(e,t,n){var r=n(12),i=n(13);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function u(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var f=u(l),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:b(d,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function b(e,t){var n,r,i;if(t.singleton){var o=h++;n=v||(v=s(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=s(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=u(n[r]);a[i].references--}for(var o=c(e,t),s=0;s<n.length;s++){var l=u(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=o}}}},function(e,t,n){(t=n(14)(!1)).push([e.i,"@keyframes ImgLiteBgPulse {\n  0% { background-color: rgba(0, 0, 0, 0.1) }\n  50% { background-color: rgba(0, 0, 0, 0.2) }\n  100% { background-color: rgba(0, 0, 0, 0.1) }\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,u,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(3));t.default=i.default;var o=n(3);t.HorizontalGravity=o.HorizontalGravity,t.VerticalGravity=o.VerticalGravity},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.ImgLite=r.default;var i=n(15);t.HorizontalGravity=i.HorizontalGravity,t.VerticalGravity=i.VerticalGravity}])}));