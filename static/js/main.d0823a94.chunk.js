(this["webpackJsonpform-validations"]=this["webpackJsonpform-validations"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(3),r=n.n(a),s=(n(12),n(7)),i=n(2),o=(n(13),n(0)),l=function(e){return Object(o.jsx)("div",{className:"card ".concat(e.className),children:e.children})},j=(n(15),function(e){return Object(o.jsx)("button",{className:"button",type:e.type||"button",onClick:e.onClick,children:e.children})}),u=(n(16),function(e){return Object(o.jsx)("div",{className:"backdrop",onClick:e.onConfirm})}),d=function(e){return Object(o.jsxs)(l,{className:"modal",children:[Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("h2",{children:e.title})}),Object(o.jsx)("div",{className:"content",children:Object(o.jsx)("p",{children:e.message})}),Object(o.jsx)("footer",{className:"actions",children:Object(o.jsx)(j,{onClick:e.onConfirm,children:" Okay "})})]})},m=function(e){return Object(o.jsxs)(o.Fragment,{children:[r.a.createPortal(Object(o.jsx)(u,{onConfirm:e.onConfirm}),document.getElementById("backdrop-root")),r.a.createPortal(Object(o.jsx)(d,{title:e.title,message:e.message,onConfirm:e.onConfirm}),document.getElementById("overlay-root"))]})},b=function(e){return e.children},O=(n(17),function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),u=Object(i.a)(s,2),d=u[0],O=u[1],h=Object(c.useState)(),f=Object(i.a)(h,2),x=f[0],g=f[1];return Object(o.jsxs)(b,{children:[x&&Object(o.jsx)(m,{title:x.title,message:x.message,onConfirm:function(){g(null)}}),Object(o.jsx)(l,{className:"input",children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==a.trim().length&&0!==d.trim().length?+d<1?g({title:"Invalid input",message:"Please enter a valid age (>0)"}):(e.onAddUser(a,d),r(""),O("")):g({title:"Invalid input",message:"Please enter a valid name and age (non-empty values)"})},children:[Object(o.jsx)("label",{htmlFor:"username",children:" Username "}),Object(o.jsx)("input",{id:"username",type:"text",value:a,onChange:function(e){r(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"age",children:" Age (in years)"}),Object(o.jsx)("input",{id:"age",type:"text",value:d,onChange:function(e){O(e.target.value)}}),Object(o.jsx)(j,{type:"submit",children:" Add User "})]})})]})}),h=(n(18),function(e){return Object(o.jsx)(l,{className:"users",children:Object(o.jsx)("ul",{children:e.users.map((function(e){return Object(o.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})});var f=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(O,{onAddUser:function(e,t){a((function(n){return[].concat(Object(s.a)(n),[{id:Math.random().toString(),name:e,age:t}])}))}}),Object(o.jsx)(h,{users:n})]})};r.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.d0823a94.chunk.js.map