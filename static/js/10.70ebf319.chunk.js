(this["webpackJsonpcast-fe"]=this["webpackJsonpcast-fe"]||[]).push([[10],{504:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},505:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(504);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},583:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}},601:function(e,t,r){"use strict";r.d(t,"a",(function(){return X}));var n=r(0),o=r.n(n),i=r(6),a=r.n(i),c=r(7),u=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function l(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=u.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"===typeof t?t:"string"===typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var s=[".DS_Store","Thumbs.db"];function f(e){return(null!==e.target&&e.target.files?g(e.target.files):[]).map((function(e){return l(e)}))}function p(e,t){return Object(c.__awaiter)(this,void 0,void 0,(function(){var r;return Object(c.__generator)(this,(function(n){switch(n.label){case 0:return e.items?(r=g(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(b))]):[3,2];case 1:return[2,d(v(n.sent()))];case 2:return[2,d(g(e.files).map((function(e){return l(e)})))]}}))}))}function d(e){return e.filter((function(e){return-1===s.indexOf(e.name)}))}function g(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function b(e){if("function"!==typeof e.webkitGetAsEntry)return y(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?O(t):y(e)}function v(e){return e.reduce((function(e,t){return Object(c.__spread)(e,Array.isArray(t)?v(t):[t])}),[])}function y(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var r=l(t);return Promise.resolve(r)}function m(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(t){return[2,e.isDirectory?O(e):h(e)]}))}))}function O(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function o(){var i=this;t.readEntries((function(t){return Object(c.__awaiter)(i,void 0,void 0,(function(){var i,a,u;return Object(c.__generator)(this,(function(c){switch(c.label){case 0:if(t.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return i=c.sent(),e(i),[3,4];case 3:return a=c.sent(),r(a),[3,4];case 4:return[3,6];case 5:u=Promise.all(t.map(m)),n.push(u),o(),c.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function h(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=l(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}var j=r(583),D=r.n(j);function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var A=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},P=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," bytes")}},E=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," bytes")}},S={code:"too-many-files",message:"Too many files"};function k(e,t){var r="application/x-moz-file"===e.type||D()(e,t);return[r,r?null:A(t)]}function C(e,t,r){if(x(e.size))if(x(t)&&x(r)){if(e.size>r)return[!1,P(r)];if(e.size<t)return[!1,E(t)]}else{if(x(t)&&e.size<t)return[!1,E(t)];if(x(r)&&e.size>r)return[!1,P(r)]}return[!0,null]}function x(e){return void 0!==e&&null!==e}function _(e){var t=e.files,r=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=w(k(e,r),1)[0],i=w(C(e,n,o),1)[0];return t&&i}))}function z(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function R(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function T(e){e.preventDefault()}function I(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function L(e){return-1!==e.indexOf("Edge/")}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return I(e)||L(e)}function B(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t.some((function(t){return!z(e)&&t&&t.apply(void 0,[e].concat(n)),z(e)}))}}function M(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||q(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){if(e){if("string"===typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(e,t):void 0}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){U(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function W(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var H=Object(n.forwardRef)((function(e,t){var r=e.children,i=X(W(e,["children"])),a=i.open,c=W(i,["open"]);return Object(n.useImperativeHandle)(t,(function(){return{open:a}}),[a]),o.a.createElement(n.Fragment,null,r(N(N({},c),{},{open:a})))}));H.displayName="Dropzone";var Q={disabled:!1,getFilesFromEvent:function(e){return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(t){return[2,(r=e,r.dataTransfer&&e.dataTransfer?p(e.dataTransfer,e.type):f(e))];var r}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null};H.defaultProps=Q,H.propTypes={children:a.a.func,accept:a.a.oneOfType([a.a.string,a.a.arrayOf(a.a.string)]),multiple:a.a.bool,preventDropOnDocument:a.a.bool,noClick:a.a.bool,noKeyboard:a.a.bool,noDrag:a.a.bool,noDragEventsBubbling:a.a.bool,minSize:a.a.number,maxSize:a.a.number,maxFiles:a.a.number,disabled:a.a.bool,getFilesFromEvent:a.a.func,onFileDialogCancel:a.a.func,onDragEnter:a.a.func,onDragLeave:a.a.func,onDragOver:a.a.func,onDrop:a.a.func,onDropAccepted:a.a.func,onDropRejected:a.a.func,validator:a.a.func};var V={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=N(N({},Q),e),r=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,u=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,g=t.onDropAccepted,b=t.onDropRejected,v=t.onFileDialogCancel,y=t.preventDropOnDocument,m=t.noClick,O=t.noKeyboard,h=t.noDrag,j=t.noDragEventsBubbling,D=t.validator,w=Object(n.useRef)(null),F=Object(n.useRef)(null),A=Object(n.useReducer)(Y,V),P=$(A,2),E=P[0],x=P[1],I=E.isFocused,L=E.isFileDialogActive,q=E.draggedFiles,G=Object(n.useCallback)((function(){F.current&&(x({type:"openDialog"}),F.current.value=null,F.current.click())}),[x]),J=function(){L&&setTimeout((function(){F.current&&(F.current.files.length||(x({type:"closeDialog"}),"function"===typeof v&&v()))}),300)};Object(n.useEffect)((function(){return window.addEventListener("focus",J,!1),function(){window.removeEventListener("focus",J,!1)}}),[F,L,v]);var H=Object(n.useCallback)((function(e){w.current&&w.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),G()))}),[w,F]),X=Object(n.useCallback)((function(){x({type:"focus"})}),[]),Z=Object(n.useCallback)((function(){x({type:"blur"})}),[]),ee=Object(n.useCallback)((function(){m||(K()?setTimeout(G,0):G())}),[F,m]),te=Object(n.useRef)([]),re=function(e){w.current&&w.current.contains(e.target)||(e.preventDefault(),te.current=[])};Object(n.useEffect)((function(){return y&&(document.addEventListener("dragover",T,!1),document.addEventListener("drop",re,!1)),function(){y&&(document.removeEventListener("dragover",T),document.removeEventListener("drop",re))}}),[w,y]);var ne=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),se(e),te.current=[].concat(M(te.current),[e.target]),R(e)&&Promise.resolve(i(e)).then((function(t){z(e)&&!j||(x({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[i,s,j]),oe=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),se(e);var t=R(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(r){}return t&&p&&p(e),!1}),[p,j]),ie=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),se(e);var t=te.current.filter((function(e){return w.current&&w.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),te.current=t,t.length>0||(x({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),R(e)&&f&&f(e))}),[w,f,j]),ae=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),se(e),te.current=[],R(e)&&Promise.resolve(i(e)).then((function(t){if(!z(e)||j){var n=[],o=[];t.forEach((function(e){var t=$(k(e,r),2),i=t[0],u=t[1],l=$(C(e,c,a),2),s=l[0],f=l[1],p=D?D(e):null;if(i&&s&&!p)n.push(e);else{var d=[u,f];p&&(d=d.concat(p)),o.push({file:e,errors:d.filter((function(e){return e}))})}})),(!u&&n.length>1||u&&l>=1&&n.length>l)&&(n.forEach((function(e){o.push({file:e,errors:[S]})})),n.splice(0)),x({acceptedFiles:n,fileRejections:o,type:"setFiles"}),d&&d(n,o,e),o.length>0&&b&&b(o,e),n.length>0&&g&&g(n,e)}})),x({type:"reset"})}),[u,r,c,a,l,i,d,g,b,j,D]),ce=function(e){return o?null:e},ue=function(e){return O?null:ce(e)},le=function(e){return h?null:ce(e)},se=function(e){j&&e.stopPropagation()},fe=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onKeyDown,i=e.onFocus,a=e.onBlur,c=e.onClick,u=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=W(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return N(N(U({onKeyDown:ue(B(n,H)),onFocus:ue(B(i,X)),onBlur:ue(B(a,Z)),onClick:ce(B(c,ee)),onDragEnter:le(B(u,ne)),onDragOver:le(B(l,oe)),onDragLeave:le(B(s,ie)),onDrop:le(B(f,ae))},r,w),o||O?{}:{tabIndex:0}),p)}}),[w,H,X,Z,ee,ne,oe,ie,ae,O,h,o]),pe=Object(n.useCallback)((function(e){e.stopPropagation()}),[]),de=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,o=e.onChange,i=e.onClick,a=W(e,["refKey","onChange","onClick"]),c=U({accept:r,multiple:u,type:"file",style:{display:"none"},onChange:ce(B(o,ae)),onClick:ce(B(i,pe)),autoComplete:"off",tabIndex:-1},n,F);return N(N({},c),a)}}),[F,r,u,ae,o]),ge=q.length,be=ge>0&&_({files:q,accept:r,minSize:c,maxSize:a,multiple:u,maxFiles:l}),ve=ge>0&&!be;return N(N({},E),{},{isDragAccept:be,isDragReject:ve,isFocused:I&&!o,getRootProps:fe,getInputProps:de,rootRef:w,inputRef:F,open:ce(G)})}function Y(e,t){switch(t.type){case"focus":return N(N({},e),{},{isFocused:!0});case"blur":return N(N({},e),{},{isFocused:!1});case"openDialog":return N(N({},e),{},{isFileDialogActive:!0});case"closeDialog":return N(N({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var r=t.isDragActive,n=t.draggedFiles;return N(N({},e),{},{draggedFiles:n,isDragActive:r});case"setFiles":return N(N({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return N({},V);default:return e}}}}]);
//# sourceMappingURL=10.70ebf319.chunk.js.map