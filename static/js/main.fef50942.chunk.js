(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=a(2),i=(a(9),a(0)),o=function(e){return Object(i.jsxs)("div",{children:[" ",Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode?"dark":"light"," bg-").concat(e.mode?"dark":"light"),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(i.jsxs)("div",{className:"form-check form-switch",children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(i.jsxs)("label",{className:"form-check-label ".concat(e.mode?"text-light":""),htmlFor:"flexSwitchCheckDefault",children:["Enable ",e.mode?"light":"dark"," Mode"]})]})]})]})})]})};o.defaultProps={title:"Text",aboutText:"about"};var b=o,d=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",value:n,id:"myBox",rows:"8",name:"text",onChange:function(e){return s(e.target.value)}})}),Object(i.jsx)("button",{className:"btn btn-primary m-1",onClick:function(){var e=n.toLocaleUpperCase();s(e)},children:"Convert To uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary m-1",onClick:function(){var e=n.toLocaleLowerCase();s(e)},children:"Convert To lowercase"}),Object(i.jsx)("button",{className:"btn btn-primary m-1",onClick:function(){s("")},children:"clear text"})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{children:"Your Text Summary"}),Object(i.jsxs)("p",{children:[n.split(" ").length-1," words and ",n.length," characters"]}),Object(i.jsxs)("p",{children:[.008*(n.split(" ").length-1)," Minutes read"]})]})]})},j=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(i.jsxs)("strong",{children:[" ",e.alert]}),Object(i.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})})};var m=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2);return r[0],r[1],Object(i.jsxs)("div",{children:[Object(i.jsx)(b,{title:"TextUtils",aboutText:"about",toggleMode:function(){n(!a),document.title="Dark Mode"},mode:a}),Object(i.jsx)(j,{alert:"".concat(a?"Dark Mode Enabled":"Dark mode disabled")}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)(d,{heading:"Enter the text to analyze"})})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.fef50942.chunk.js.map