(this["webpackJsonptodo-api"]=this["webpackJsonptodo-api"]||[]).push([[0],{37:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),i=c(30),r=c.n(i),o=(c(37),c(20)),a=c(9),d=c(16),j=c.n(d),l=c(2),b=c(1),O=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(""),r=Object(a.a)(i,2),d=r[0],O=r[1],h=Object(s.useState)("asc"),u=Object(a.a)(h,2),x=u[0],p=u[1],f=Object(l.f)();return Object(s.useEffect)((function(){j.a.get("https://jsonplaceholder.typicode.com/todos").then((function(e){n(e.data)}))}),[]),Object(b.jsxs)("div",{className:"list-section",children:[Object(b.jsxs)("div",{className:"list-header",children:[Object(b.jsx)("h1",{children:"\u2713 TODO LIST "}),Object(b.jsx)("input",{className:"list-search-bar",type:"text",placeholder:"Search Here...",onChange:function(e){O(e.target.value)}})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("table",{className:"table table-bordered",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsxs)("th",{children:[Object(b.jsxs)("div",{className:"sort-container",onClick:function(){return function(e){if("asc"===x){var t=Object(o.a)(c).sort((function(t,c){return t[e].toString().toLowerCase()-c[e].toString().toLowerCase()}));n(t),p("dsc")}if("dsc"===x){var s=Object(o.a)(c).sort((function(t,c){return c[e].toString().toLowerCase()-t[e].toString().toLowerCase()}));n(s),p("asc")}}("id")},children:["asc"===x?"\u25bc":"\u25b2"," sort"]}),"TODO_ID"]}),Object(b.jsx)("th",{children:"TODO_TITLE"}),Object(b.jsx)("th",{children:"STATUS"}),Object(b.jsx)("th",{children:"ACTION"})]})}),Object(b.jsx)("tbody",{children:c&&c.length>0?c.filter((function(e){return""===d||e.id.toString().toLowerCase().includes(d.toString().toLowerCase())||e.title.toString().toLowerCase().includes(d.toString().toLowerCase())||(e.completed?"completed":"incomplete").toString().toLowerCase().includes(d.toString().toLowerCase())?e:void 0})).map((function(e){return Object(b.jsxs)("tr",{className:"table-data",children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:e.title}),Object(b.jsx)("td",{children:e.completed?"completed":"incomplete"}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{className:"details-btn",id:e.id,onClick:function(){f.push("/Todo/".concat(e.userId,"/").concat(e.id,"/").concat(e.title))},children:"Details"},e.id)})]})})):"LOADING..."})]})})]})},h=function(){var e=Object(l.g)(),t=e.id,c=e.Todoid,n=e.Todotitle,i=Object(s.useState)([]),r=Object(a.a)(i,2),o=r[0],d=r[1];return Object(s.useEffect)((function(){j.a.get("https://jsonplaceholder.typicode.com/users/").then((function(e){var t=e.data;d(t)}))}),[]),Object(b.jsxs)("div",{className:"todo-user",children:[o.length>0?o.filter((function(e){return e.id==t})).map((function(e){return Object(b.jsxs)("li",{className:"user-detail-container",style:{listStyle:"none"},children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:"Todo Id :"})," ",c]}),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:"Todo Title :"})," ",n]}),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:"User Id :"})," ",e.id]}),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:"User Name :"})," ",e.name]}),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:"Email :"})," ",e.email]})]},e.id)})):"LOADING...",Object(b.jsx)(l.a,{render:function(e){var t=e.history;return Object(b.jsx)("button",{className:"clear-btn",onClick:function(){t.push("/TodoRollixer/")},children:"Clear"})}})]})},u=c(14);var x=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(u.a,{children:Object(b.jsx)(l.c,{children:Object(b.jsxs)("div",{className:"mainPage",children:[Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(O,{})}),Object(b.jsx)(l.a,{path:"/todo/:id/:Todoid/:Todotitle",children:Object(b.jsx)(h,{})})]})})})})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.07081e9f.chunk.js.map