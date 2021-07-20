/*! For license information please see 5.35d9db8a.chunk.js.LICENSE.txt */
(this["webpackJsonpcast-fe"]=this["webpackJsonpcast-fe"]||[]).push([[5],{504:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},505:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(504);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},506:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return o}))},586:function(e,t,n){e.exports=n(346)},587:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function s(e){r(a,o,i,s,u,"next",e)}function u(e){r(a,o,i,s,u,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return o}))},588:function(e,t,n){"use strict";t.__esModule=!0,t.useQuestions=function(){return(0,r.useContext)(o.default)},t.default=t.withQuestions=void 0;var r=n(0),o=s(n(344)),i=s(n(589));t.withQuestions=i.default;var a=s(n(348));function s(e){return e&&e.__esModule?e:{default:e}}t.default=a.default},589:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n(344)),o=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){return function(t){return o.default.createElement(r.default.Consumer,null,(function(n){return o.default.createElement(e,a({},n,t))}))}};t.default=s,e.exports=t.default},590:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=e.isOpen,n=void 0!==t&&t,f=e.handleClose,C=e.handleCropSubmit,b=e.path,S=e.cropperProps,P=(0,g.useIntl)(),z=(0,y.useTheme)(),D=(0,h.useState)(!1),O=D[0],_=D[1],R=(0,h.useState)(!1),A=R[0],j=R[1],T=(0,v.default)(z.breakpoints.down("sm")),L=(0,h.useState)(!1),W=L[0],N=L[1],I=(0,h.useState)({x:0,y:0}),H=I[0],F=I[1],k=(0,h.useState)(1),Z=k[0],U=k[1],X=(0,h.useState)(null),V=X[0],Y=X[1],G=(0,w.useAuth)(),J=G.auth,q=(G.updateAuth,J||{}),Q=q.photoURL,B=void 0===Q?"":Q,K=(q.displayName,(0,h.useState)(B)),$=(K[0],K[1],(0,h.useCallback)((function(e,t){Y(t)}),[])),ee=function(){N(!1),j(!1),Y(null),_(!1)};(0,h.useEffect)((function(){return ee(),ee}),[b]);var te=(0,h.useCallback)(x(r.default.mark((function e(){var t;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.default)(A,V,0);case 3:t=e.sent,N(t),C&&(f(),C(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[V]);return h.default.createElement(c.default,{fullScreen:T,open:n,onClose:f,TransitionComponent:E,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},h.default.createElement(d.default,null,h.default.createElement("div",{style:{width:"100%",height:"100%",minWidth:350,padding:0,display:"flex",justifyContent:"center",alignItems:"center"}},!A&&h.default.createElement("div",{onDrop:function(e){e.preventDefault();var t=function(e){var t=[];if(e.dataTransfer.items)for(var n=0;n<e.dataTransfer.items.length;n++)"file"===e.dataTransfer.items[n].kind&&t.push(e.dataTransfer.items[n].getAsFile());else for(n=0;n<e.dataTransfer.files.length;n++)t.push(e.dataTransfer.files[n]);return t}(e);if(t.length){var n=new FileReader;n.onload=function(e){j(e.target.result)},n.readAsDataURL(t[0])}},onDragOver:function(e){e.preventDefault(),_(!0)},onDragLeave:function(e){e.preventDefault(),_(!1)},style:{width:"100%",minHeight:350,borderStyle:"dashed",borderColor:O?"red":"grey",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},h.default.createElement(l.default,{color:"disabled",style:{height:60,width:60}}),h.default.createElement(o.default,{variant:"h6",style:{color:"grey"}},P.formatMessage({id:"file_upload_text",defaultMessage:"Drop image here or "})),h.default.createElement("input",{style:{display:"none"},accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",onChange:function(e){if(e.target.files){var t=new FileReader;t.onload=function(e){j(e.target.result)},t.readAsDataURL(e.target.files[0])}}}),h.default.createElement("label",{htmlFor:"contained-button-file"},h.default.createElement(a.default,{variant:"contained",color:"primary",component:"span",style:{margin:8}},"Upload"))),A&&!W&&h.default.createElement("div",{style:{position:"relative",height:300,width:"100%",background:"black"}},h.default.createElement(u.default,M({cropShape:"round",showGrid:!1,image:A,crop:H,zoom:Z,aspect:1,onCropChange:F,onCropComplete:$,onZoomChange:U},S))),W&&h.default.createElement(i.default,{position:"relative",display:"inline-flex",style:{height:280}},h.default.createElement(s.default,{size:280,variant:"determinate"}),h.default.createElement(i.default,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},h.default.createElement("img",{style:{height:250,borderRadius:"50%"},src:W,alt:"img"}))))),h.default.createElement(p.default,null,h.default.createElement(a.default,{onClick:f,color:"secondary"},P.formatMessage({id:"cancel",defaultMessage:"Cancel"})),h.default.createElement(a.default,{disabled:!A,onClick:te,color:"primary"},P.formatMessage({id:"save",defaultMessage:"Save"}))))};var r=b(n(219)),o=b(n(35)),i=b(n(163)),a=b(n(74)),s=b(n(121)),u=b(n(602)),c=b(n(122)),l=b(n(596)),p=b(n(123)),d=b(n(124)),h=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=C();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),f=b(n(83)),m=b(n(597)),v=b(n(82)),g=n(66),y=n(45),w=n(161);function C(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return C=function(){return e},e}function b(e){return e&&e.__esModule?e:{default:e}}function S(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){S(i,r,o,a,s,"next",e)}function s(e){S(i,r,o,a,s,"throw",e)}a(void 0)}))}}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=h.default.forwardRef((function(e,t){return h.default.createElement(f.default,M({direction:"up"},e,{ref:t}))}));e.exports=t.default},591:function(e,t,n){e.exports=n(592)},592:function(e,t,n){"use strict";var r=n(593),o=n(594);function i(e){var t=0,n=0,r=0,o=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),r=10*t,o=10*n,"deltaY"in e&&(o=e.deltaY),"deltaX"in e&&(r=e.deltaX),(r||o)&&e.deltaMode&&(1==e.deltaMode?(r*=40,o*=40):(r*=800,o*=800)),r&&!t&&(t=r<1?-1:1),o&&!n&&(n=o<1?-1:1),{spinX:t,spinY:n,pixelX:r,pixelY:o}}i.getEventType=function(){return r.firefox()?"DOMMouseScroll":o("wheel")?"wheel":"mousewheel"},e.exports=i},593:function(e,t){var n,r,o,i,a,s,u,c,l,p,d,h,f,m,v,g=!1;function y(){if(!g){g=!0;var e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),y=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(h=/\b(iPhone|iP[ao]d)/.exec(e),f=/\b(iP[ao]d)/.exec(e),p=/Android/i.exec(e),m=/FBAN\/\w+;/i.exec(e),v=/Mobile/i.exec(e),d=!!/Win64/.exec(e),t){(n=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN)&&document&&document.documentMode&&(n=document.documentMode);var w=/(?:Trident\/(\d+.\d+))/.exec(e);s=w?parseFloat(w[1])+4:n,r=t[2]?parseFloat(t[2]):NaN,o=t[3]?parseFloat(t[3]):NaN,(i=t[4]?parseFloat(t[4]):NaN)?(t=/(?:Chrome\/(\d+\.\d+))/.exec(e),a=t&&t[1]?parseFloat(t[1]):NaN):a=NaN}else n=r=o=a=i=NaN;if(y){if(y[1]){var C=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);u=!C||parseFloat(C[1].replace("_","."))}else u=!1;c=!!y[2],l=!!y[3]}else u=c=l=!1}}var w={ie:function(){return y()||n},ieCompatibilityMode:function(){return y()||s>n},ie64:function(){return w.ie()&&d},firefox:function(){return y()||r},opera:function(){return y()||o},webkit:function(){return y()||i},safari:function(){return w.webkit()},chrome:function(){return y()||a},windows:function(){return y()||c},osx:function(){return y()||u},linux:function(){return y()||l},iphone:function(){return y()||h},mobile:function(){return y()||h||f||p||v},nativeApp:function(){return y()||m},android:function(){return y()||p},ipad:function(){return y()||f}};e.exports=w},594:function(e,t,n){"use strict";var r,o=n(595);o.canUseDOM&&(r=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("","")),e.exports=function(e,t){if(!o.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,i=n in document;if(!i){var a=document.createElement("div");a.setAttribute(n,"return;"),i="function"===typeof a[n]}return!i&&r&&"wheel"===e&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}},595:function(e,t,n){"use strict";var r=!("undefined"===typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=o},596:function(e,t,n){"use strict";var r=n(58),o=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=(0,r(n(60)).default)(i.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.default=a},597:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){return c.apply(this,arguments)};var r,o=(r=n(219))&&r.__esModule?r:{default:r};function i(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){i(a,r,o,s,u,"next",e)}function u(e){i(a,r,o,s,u,"throw",e)}s(void 0)}))}}var s=function(e){return new Promise((function(t,n){var r=new Image;r.addEventListener("load",(function(){return t(r)})),r.addEventListener("error",(function(e){return n(e)})),r.setAttribute("crossOrigin","anonymous"),r.src=e}))};function u(e){return e*Math.PI/180}function c(){return(c=a(o.default.mark((function e(t,n,r){var i,a,c,l,p,d;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===r&&(r=0),e.next=3,s(t);case 3:return i=e.sent,a=document.createElement("canvas"),c=a.getContext("2d"),l=Math.max(i.width,i.height),p=l/2*Math.sqrt(2)*2,a.width=p,a.height=p,c.translate(p/2,p/2),c.rotate(u(r)),c.translate(-p/2,-p/2),c.drawImage(i,p/2-.5*i.width,p/2-.5*i.height),d=c.getImageData(0,0,p,p),a.width=n.width,a.height=n.height,c.putImageData(d,0-p/2+.5*i.width-n.x,0-p/2+.5*i.height-n.y),e.abrupt("return",a.toDataURL("image/jpeg"));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.exports=t.default},598:function(e,t,n){"use strict";var r=n(58),o=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=(0,r(n(60)).default)(i.createElement(i.Fragment,null,i.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),i.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})),"CameraAlt");t.default=a},599:function(e,t,n){"use strict";var r=n(58),o=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=(0,r(n(60)).default)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.default=a},600:function(e,t,n){"use strict";var r=n(58),o=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=(0,r(n(60)).default)(i.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=a},602:function(e,t,n){"use strict";n.r(t);var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.create;Object.create;var i=n(0),a=n.n(i),s=n(591),u=n.n(s);function c(e,t,n,r,o,i){void 0===i&&(i=0);var a=C(e,t,i),s=a.width,u=a.height,c=Math.min(s,n),l=Math.min(u,r);return c>l*o?{width:l*o,height:l}:{width:c,height:c/o}}function l(e,t,n,r,o){void 0===o&&(o=0);var i=C(t.width,t.height,o),a=i.width,s=i.height;return{x:p(e.x,a,n.width,r),y:p(e.y,s,n.height,r)}}function p(e,t,n,r){var o=t*r/2-n/2;return Math.min(o,Math.max(e,-o))}function d(e,t){return Math.sqrt(Math.pow(e.y-t.y,2)+Math.pow(e.x-t.x,2))}function h(e,t){return 180*Math.atan2(t.y-e.y,t.x-e.x)/Math.PI}function f(e,t,n,r,i,a,s){void 0===a&&(a=0),void 0===s&&(s=!0);var u=s&&0===a?m:v,c={x:u(100,((t.width-n.width/i)/2-e.x/i)/t.width*100),y:u(100,((t.height-n.height/i)/2-e.y/i)/t.height*100),width:u(100,n.width/t.width*100/i),height:u(100,n.height/t.height*100/i)},l=Math.round(u(t.naturalWidth,c.width*t.naturalWidth/100)),p=Math.round(u(t.naturalHeight,c.height*t.naturalHeight/100)),d=t.naturalWidth>=t.naturalHeight*r?{width:Math.round(p*r),height:p}:{width:l,height:Math.round(l/r)};return{croppedAreaPercentages:c,croppedAreaPixels:o(o({},d),{x:Math.round(u(t.naturalWidth-d.width,c.x*t.naturalWidth/100)),y:Math.round(u(t.naturalHeight-d.height,c.y*t.naturalHeight/100))})}}function m(e,t){return Math.min(e,Math.max(0,t))}function v(e,t){return t}function g(e,t,n){var r=t.width/t.naturalWidth,o=function(e,t,n){var r=t.width/t.naturalWidth;if(n)return n.height>n.width?n.height/r/e.height:n.width/r/e.width;var o=e.width/e.height;return t.naturalWidth>=t.naturalHeight*o?t.naturalHeight/e.height:t.naturalWidth/e.width}(e,t,n),i=r*o;return{crop:{x:((t.naturalWidth-e.width)/2-e.x)*i,y:((t.naturalHeight-e.height)/2-e.y)*i},zoom:o}}function y(e,t){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}function w(e,t,n,r,o){var i=Math.cos,a=Math.sin,s=o*Math.PI/180;return[(e-n)*i(s)-(t-r)*a(s)+n,(e-n)*a(s)+(t-r)*i(s)+r]}function C(e,t,n){var r=e/2,o=t/2,i=[w(0,0,r,o,n),w(e,0,r,o,n),w(e,t,r,o,n),w(0,t,r,o,n)],a=Math.min.apply(Math,i.map((function(e){return e[0]}))),s=Math.max.apply(Math,i.map((function(e){return e[0]}))),u=Math.min.apply(Math,i.map((function(e){return e[1]})));return{width:s-a,height:Math.max.apply(Math,i.map((function(e){return e[1]})))-u}}function b(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter((function(e){return"string"===typeof e&&e.length>0})).join(" ").trim()}var S=function(e){function t(){var n=null!==e&&e.apply(this,arguments)||this;return n.imageRef=null,n.videoRef=null,n.containerRef=null,n.styleRef=null,n.containerRect=null,n.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},n.dragStartPosition={x:0,y:0},n.dragStartCrop={x:0,y:0},n.lastPinchDistance=0,n.lastPinchRotation=0,n.rafDragTimeout=null,n.rafPinchTimeout=null,n.wheelTimer=null,n.state={cropSize:null,hasWheelJustStarted:!1},n.preventZoomSafari=function(e){return e.preventDefault()},n.cleanEvents=function(){document.removeEventListener("mousemove",n.onMouseMove),document.removeEventListener("mouseup",n.onDragStopped),document.removeEventListener("touchmove",n.onTouchMove),document.removeEventListener("touchend",n.onDragStopped)},n.clearScrollEvent=function(){n.containerRef&&n.containerRef.removeEventListener("wheel",n.onWheel),n.wheelTimer&&clearTimeout(n.wheelTimer)},n.onMediaLoad=function(){n.computeSizes(),n.emitCropData(),n.setInitialCrop(),n.props.onMediaLoaded&&n.props.onMediaLoaded(n.mediaSize)},n.setInitialCrop=function(){var e=n.props,t=e.initialCroppedAreaPixels,r=e.cropSize;if(t){var o=g(t,n.mediaSize,r),i=o.crop,a=o.zoom;n.props.onCropChange(i),n.props.onZoomChange&&n.props.onZoomChange(a)}},n.computeSizes=function(){var e,t,r,o,i,a,s=n.imageRef||n.videoRef;if(s&&n.containerRef){n.containerRect=n.containerRef.getBoundingClientRect(),n.mediaSize={width:s.offsetWidth,height:s.offsetHeight,naturalWidth:(null===(e=n.imageRef)||void 0===e?void 0:e.naturalWidth)||(null===(t=n.videoRef)||void 0===t?void 0:t.videoWidth)||0,naturalHeight:(null===(r=n.imageRef)||void 0===r?void 0:r.naturalHeight)||(null===(o=n.videoRef)||void 0===o?void 0:o.videoHeight)||0};var u=n.props.cropSize?n.props.cropSize:c(s.offsetWidth,s.offsetHeight,n.containerRect.width,n.containerRect.height,n.props.aspect,n.props.rotation);(null===(i=n.state.cropSize)||void 0===i?void 0:i.height)===u.height&&(null===(a=n.state.cropSize)||void 0===a?void 0:a.width)===u.width||n.props.onCropSizeChange&&n.props.onCropSizeChange(u),n.setState({cropSize:u},n.recomputeCropPosition)}},n.onMouseDown=function(e){e.preventDefault(),document.addEventListener("mousemove",n.onMouseMove),document.addEventListener("mouseup",n.onDragStopped),n.onDragStart(t.getMousePoint(e))},n.onMouseMove=function(e){return n.onDrag(t.getMousePoint(e))},n.onTouchStart=function(e){e.preventDefault(),document.addEventListener("touchmove",n.onTouchMove,{passive:!1}),document.addEventListener("touchend",n.onDragStopped),2===e.touches.length?n.onPinchStart(e):1===e.touches.length&&n.onDragStart(t.getTouchPoint(e.touches[0]))},n.onTouchMove=function(e){e.preventDefault(),2===e.touches.length?n.onPinchMove(e):1===e.touches.length&&n.onDrag(t.getTouchPoint(e.touches[0]))},n.onDragStart=function(e){var t,r,i=e.x,a=e.y;n.dragStartPosition={x:i,y:a},n.dragStartCrop=o({},n.props.crop),null===(r=(t=n.props).onInteractionStart)||void 0===r||r.call(t)},n.onDrag=function(e){var t=e.x,r=e.y;n.rafDragTimeout&&window.cancelAnimationFrame(n.rafDragTimeout),n.rafDragTimeout=window.requestAnimationFrame((function(){if(n.state.cropSize&&void 0!==t&&void 0!==r){var e=t-n.dragStartPosition.x,o=r-n.dragStartPosition.y,i={x:n.dragStartCrop.x+e,y:n.dragStartCrop.y+o},a=n.props.restrictPosition?l(i,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):i;n.props.onCropChange(a)}}))},n.onDragStopped=function(){var e,t;n.cleanEvents(),n.emitCropData(),null===(t=(e=n.props).onInteractionEnd)||void 0===t||t.call(e)},n.onWheel=function(e){e.preventDefault();var r=t.getMousePoint(e),o=u()(e).pixelY,i=n.props.zoom-o*n.props.zoomSpeed/200;n.setNewZoom(i,r),n.state.hasWheelJustStarted||n.setState({hasWheelJustStarted:!0},(function(){var e,t;return null===(t=(e=n.props).onInteractionStart)||void 0===t?void 0:t.call(e)})),n.wheelTimer&&clearTimeout(n.wheelTimer),n.wheelTimer=window.setTimeout((function(){return n.setState({hasWheelJustStarted:!1},(function(){var e,t;return null===(t=(e=n.props).onInteractionEnd)||void 0===t?void 0:t.call(e)}))}),250)},n.getPointOnContainer=function(e){var t=e.x,r=e.y;if(!n.containerRect)throw new Error("The Cropper is not mounted");return{x:n.containerRect.width/2-(t-n.containerRect.left),y:n.containerRect.height/2-(r-n.containerRect.top)}},n.getPointOnMedia=function(e){var t=e.x,r=e.y,o=n.props,i=o.crop,a=o.zoom;return{x:(t+i.x)/a,y:(r+i.y)/a}},n.setNewZoom=function(e,t){if(n.state.cropSize&&n.props.onZoomChange){var r=n.getPointOnContainer(t),o=n.getPointOnMedia(r),i=Math.min(n.props.maxZoom,Math.max(e,n.props.minZoom)),a={x:o.x*i-r.x,y:o.y*i-r.y},s=n.props.restrictPosition?l(a,n.mediaSize,n.state.cropSize,i,n.props.rotation):a;n.props.onCropChange(s),n.props.onZoomChange(i)}},n.getCropData=function(){return n.state.cropSize?f(n.props.restrictPosition?l(n.props.crop,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):n.props.crop,n.mediaSize,n.state.cropSize,n.getAspect(),n.props.zoom,n.props.rotation,n.props.restrictPosition):null},n.emitCropData=function(){var e=n.getCropData();if(e){var t=e.croppedAreaPercentages,r=e.croppedAreaPixels;n.props.onCropComplete&&n.props.onCropComplete(t,r),n.props.onCropAreaChange&&n.props.onCropAreaChange(t,r)}},n.emitCropAreaChange=function(){var e=n.getCropData();if(e){var t=e.croppedAreaPercentages,r=e.croppedAreaPixels;n.props.onCropAreaChange&&n.props.onCropAreaChange(t,r)}},n.recomputeCropPosition=function(){if(n.state.cropSize){var e=n.props.restrictPosition?l(n.props.crop,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):n.props.crop;n.props.onCropChange(e),n.emitCropData()}},n}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){window.addEventListener("resize",this.computeSizes),this.containerRef&&(this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.preventZoomSafari),this.containerRef.addEventListener("gesturechange",this.preventZoomSafari)),this.props.disableAutomaticStylesInjection||(this.styleRef=document.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.styleRef.innerHTML=".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n",document.head.appendChild(this.styleRef)),this.imageRef&&this.imageRef.complete&&this.onMediaLoad()},t.prototype.componentWillUnmount=function(){var e;window.removeEventListener("resize",this.computeSizes),this.containerRef&&(this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.containerRef.removeEventListener("gesturechange",this.preventZoomSafari)),this.styleRef&&(null===(e=this.styleRef.parentNode)||void 0===e||e.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent()},t.prototype.componentDidUpdate=function(e){var t,n,r,o,i,a,s,u;e.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):e.aspect!==this.props.aspect?this.computeSizes():e.zoom!==this.props.zoom?this.recomputeCropPosition():(null===(t=e.cropSize)||void 0===t?void 0:t.height)!==(null===(n=this.props.cropSize)||void 0===n?void 0:n.height)||(null===(r=e.cropSize)||void 0===r?void 0:r.width)!==(null===(o=this.props.cropSize)||void 0===o?void 0:o.width)?this.computeSizes():(null===(i=e.crop)||void 0===i?void 0:i.x)===(null===(a=this.props.crop)||void 0===a?void 0:a.x)&&(null===(s=e.crop)||void 0===s?void 0:s.y)===(null===(u=this.props.crop)||void 0===u?void 0:u.y)||this.emitCropAreaChange(),e.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent())},t.prototype.getAspect=function(){var e=this.props,t=e.cropSize,n=e.aspect;return t?t.width/t.height:n},t.prototype.onPinchStart=function(e){var n=t.getTouchPoint(e.touches[0]),r=t.getTouchPoint(e.touches[1]);this.lastPinchDistance=d(n,r),this.lastPinchRotation=h(n,r),this.onDragStart(y(n,r))},t.prototype.onPinchMove=function(e){var n=this,r=t.getTouchPoint(e.touches[0]),o=t.getTouchPoint(e.touches[1]),i=y(r,o);this.onDrag(i),this.rafPinchTimeout&&window.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=window.requestAnimationFrame((function(){var e=d(r,o),t=n.props.zoom*(e/n.lastPinchDistance);n.setNewZoom(t,i),n.lastPinchDistance=e;var a=h(r,o),s=n.props.rotation+(a-n.lastPinchRotation);n.props.onRotationChange&&n.props.onRotationChange(s),n.lastPinchRotation=a}))},t.prototype.render=function(){var e=this,t=this.props,n=t.image,r=t.video,i=t.mediaProps,s=t.transform,u=t.crop,c=u.x,l=u.y,p=t.rotation,d=t.zoom,h=t.cropShape,f=t.showGrid,m=t.style,v=m.containerStyle,g=m.cropAreaStyle,y=m.mediaStyle,w=t.classes,C=w.containerClassName,S=w.cropAreaClassName,x=w.mediaClassName,M=t.objectFit;return a.a.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(t){return e.containerRef=t},"data-testid":"container",style:v,className:b("reactEasyCrop_Container",C)},n?a.a.createElement("img",o({alt:"",className:b("reactEasyCrop_Image","contain"===M&&"reactEasyCrop_Contain","horizontal-cover"===M&&"reactEasyCrop_Cover_Horizontal","vertical-cover"===M&&"reactEasyCrop_Cover_Vertical",x)},i,{src:n,ref:function(t){return e.imageRef=t},style:o(o({},y),{transform:s||"translate("+c+"px, "+l+"px) rotate("+p+"deg) scale("+d+")"}),onLoad:this.onMediaLoad})):r&&a.a.createElement("video",o({autoPlay:!0,loop:!0,muted:!0,className:b("reactEasyCrop_Video","contain"===M&&"reactEasyCrop_Contain","horizontal-cover"===M&&"reactEasyCrop_Cover_Horizontal","vertical-cover"===M&&"reactEasyCrop_Cover_Vertical",x)},i,{ref:function(t){return e.videoRef=t},onLoadedMetadata:this.onMediaLoad,style:o(o({},y),{transform:s||"translate("+c+"px, "+l+"px) rotate("+p+"deg) scale("+d+")"}),controls:!1}),(Array.isArray(r)?r:[{src:r}]).map((function(e){return a.a.createElement("source",o({key:e.src},e))}))),this.state.cropSize&&a.a.createElement("div",{style:o(o({},g),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:b("reactEasyCrop_CropArea","round"===h&&"reactEasyCrop_CropAreaRound",f&&"reactEasyCrop_CropAreaGrid",S)}))},t.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:3,minZoom:1,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},t.getMousePoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},t.getTouchPoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},t}(a.a.Component);t.default=S}}]);
//# sourceMappingURL=5.35d9db8a.chunk.js.map