(this["webpackJsonpcast-fe"]=this["webpackJsonpcast-fe"]||[]).push([[8],{504:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},505:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(504);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},506:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(c){r=!0,i=c}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},604:function(e,t,a){"use strict";a.r(t);var n=a(505),r=a(506),i=a(504),o=a(288),s=a(205),c=a.n(s),u=a(72),l=a(0),p=a(296),f=a(64),m=a(194),d=a(161),b=a(24),g=a(38),j=a(208),O=a(31),h=Object(m.a)((function(e){var t;return{paper:(t={width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(i.a)(t,e.breakpoints.up(620+e.spacing(6)),{width:400,marginLeft:"auto",marginRight:"auto"}),Object(i.a)(t,"marginTop",e.spacing(8)),Object(i.a)(t,"display","flex"),Object(i.a)(t,"flexDirection","column"),Object(i.a)(t,"alignItems","center"),Object(i.a)(t,"padding","".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")),t),avatar:{margin:e.spacing(1),width:192,height:192,color:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}}));t.default=function(){var e=h(),t=Object(g.a)(),a=Object(b.k)(),i=Object(l.useState)(""),s=Object(r.a)(i,2),m=s[0],y=s[1],v=Object(l.useState)(""),w=Object(r.a)(v,2),x=w[0],M=w[1],S=Object(l.useState)(""),P=Object(r.a)(S,2),A=P[0],I=P[1],k=Object(l.useState)(""),C=Object(r.a)(k,2),D=C[0],_=C[1],N=Object(j.useMenu)().toggleThis,T=Object(d.useAuth)().setAuth;var W=function(e){T(Object(n.a)({isAuthenticated:!0},e)),N("isAuthMenuOpen",!1);var t=a.location,r="/home";t.state&&t.state.from?(r=t.state.from.pathname,a.push(r)):a.push(r)};return Object(O.jsx)(c.a,{pageTitle:t.formatMessage({id:"sign_up",defaultMessage:" Sign up"}),onBackClick:function(){a.goBack()},children:Object(O.jsx)(u.a,{className:e.paper,elevation:6,children:Object(O.jsxs)("div",{className:e.container,children:[Object(O.jsx)(f.a,{component:"h1",variant:"h5",children:t.formatMessage({id:"sign_up",defaultMessage:"Sign up"})}),Object(O.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),W({displayName:"User",email:m})},noValidate:!0,children:[Object(O.jsx)(p.a,{value:m,onInput:function(e){return y(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:t.formatMessage({id:"username",defaultMessage:"Username"}),name:"username",autoComplete:"username",autoFocus:!0}),Object(O.jsx)(p.a,{value:A,onInput:function(e){return I(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:t.formatMessage({id:"email",defaultMessage:"E-Mail"}),name:"email",autoComplete:"email"}),Object(O.jsx)(p.a,{value:x,onInput:function(e){return M(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:t.formatMessage({id:"password",defaultMessage:"Password"}),type:"password",id:"password",autoComplete:"current-password"}),Object(O.jsx)(p.a,{value:D,onInput:function(e){return _(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password_confirm",label:t.formatMessage({id:"password_confirm",defaultMessage:"Confirm Password"}),type:"password",id:"password_confirm",autoComplete:"current-password"}),Object(O.jsx)(o.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:t.formatMessage({id:"sign_up",defaultMessage:"Sign up"})})]})]})})})}}}]);
//# sourceMappingURL=8.424c908c.chunk.js.map