(this["webpackJsonpreact-to-do-list"]=this["webpackJsonpreact-to-do-list"]||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(19),a=n.n(o),s=(n(27),n(22)),i=n(13),l=n(9),j=n(7),d=n(2),u=n(1),b=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(u.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};b.defaultProps={color:"steelblue"};var h=b,O=function(e){var t=e.title,n=e.onAdd,c=e.showAdd,r=Object(d.e)();return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{children:t}),"/"===r.pathname&&Object(u.jsx)(h,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};O.defaultProps={title:"Grocery List"};var x=O,f=function(){return Object(u.jsxs)("footer",{children:[Object(u.jsx)("p",{children:"Copyright \xa9 Rogelio Romero 2021"}),Object(u.jsx)(j.b,{to:"/about",children:"About"})]})},m=n(21),g=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(u.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(u.jsxs)("h3",{children:[" ",t.text," ",Object(u.jsx)(m.a,{style:{color:"red",cursor:"pointer "},onClick:function(){return n(t.id)}})," "]}),Object(u.jsx)("p",{children:t.day})]})},p=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(u.jsx)(u.Fragment,{children:t.map((function(e,t){return Object(u.jsx)(g,{task:e,onDelete:n,onToggle:c},e.id)}))})},v=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(l.a)(n,2),o=r[0],a=r[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),j=i[0],d=i[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),O=h[0],x=h[1];return Object(u.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:j,reminder:O}),a(""),d(""),x(!1)):alert("Please add a task")},children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Item"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Item",value:o,onChange:function(e){return a(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Quantity"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Quantity",value:j,onChange:function(e){return d(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control form-control-check",children:[Object(u.jsx)("label",{children:"Set Reminder"}),Object(u.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(u.jsx)("input",{type:"submit",value:"Submit Item",className:"btn btn-block"})]})},k=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Version 1.0.0"}),Object(u.jsx)("h4",{children:"Created by Rogelio Romero"}),Object(u.jsx)(j.b,{to:"/",children:"Go Back"})]})},C=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([]),a=Object(l.a)(o,2),b=a[0],h=a[1],O=function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(i.a)({id:t},e);h([].concat(Object(s.a)(b),[n]))},m=function(e){h(b.filter((function(t){return t.id!==e})))},g=function(e){h(b.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))};return Object(u.jsx)(j.a,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(x,{onAdd:function(){return r(!n)},showAdd:n}),Object(u.jsx)(d.a,{path:"/",exact:!0,render:function(e){return Object(u.jsxs)(u.Fragment,{children:[n&&Object(u.jsx)(v,{onAdd:O}),b.length>0?Object(u.jsx)(p,{tasks:b,onDelete:m,onToggle:g}):"No Items on List"]})}}),Object(u.jsx)(d.a,{path:"/about",component:k}),Object(u.jsx)(f,{})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),y()}},[[34,1,2]]]);
//# sourceMappingURL=main.9d23a656.chunk.js.map