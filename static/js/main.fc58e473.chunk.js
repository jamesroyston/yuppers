(this.webpackJsonpyuppers=this.webpackJsonpyuppers||[]).push([[0],{66:function(t,e,n){"use strict";n.r(e);var c,i,r,s,o,j=n(0),a=n.n(j),b=n(34),d=n.n(b),p=n(20),x=n(2),l=n(11),u=n(10),h=Object(u.a)(c||(c=Object(l.a)(["\n  body, html {\n    font-family: 'Poppins', sans-serif;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n"]))),O=n(13),f=n.n(O),m=n(17),g=n(18),v=n(4),y=u.b.div(i||(i=Object(l.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  display: flex;\n"])),v.d,v.g,v.c,v.e,v.b,v.a,v.f),k=u.b.div(r||(r=Object(l.a)(["\n  ","\n  ","\n  display: inline-block;\n  margin-top: 8px;\n  margin-bottom: 8px;\n"])),v.h,v.g),C=u.b.div(s||(s=Object(l.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),v.g,v.c,v.e,v.b,v.a,v.f),S=Object(u.b)(y)(o||(o=Object(l.a)(["\n  cursor: ",";\n"])),(function(t){var e=t.cursor;return e||"pointer"})),w=n(1);var I=function(t){var e=t.itemData,n=t.type,c=(e.userId,e.id),i=e.title,r=void 0===i?"":i,s=e.body,o=void 0===s?"":s,j=e.email,a=void 0===j?"":j,b=(e.name,Object(x.g)());return Object(w.jsxs)(S,{px:"16px",py:"post"===n?"8px":"16px",mb:"16px",borderRadius:"10px",onClick:function(){return"post"===n?b.push("/post/".concat(c),{itemData:e}):null},border:"2px solid black",cursor:"post"===n?"pointer":"default",flexDirection:"column",children:["post"===n&&Object(w.jsxs)(y,{alignItems:"center",children:[Object(w.jsxs)(k,{mr:"8px",fontWeight:"600",children:["Title:"," "]}),Object(w.jsx)(k,{children:r})]}),"comment"===n&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(k,{fontStyle:"italic",children:[Object(w.jsx)(k,{fontWeight:"bold",children:a})," left a comment:"]}),Object(w.jsxs)(y,{children:[Object(w.jsx)(C,{width:"3px",bg:"gray",mr:"16px"}),Object(w.jsx)(k,{children:o})]})]})]})};var D=function(t){var e=t.items,n=void 0===e?[]:e,c=t.type;return Object(w.jsx)(C,{children:n.map((function(t){return Object(w.jsx)(I,{itemData:t,type:c})}))})};function W(t){var e=t.onClick;return Object(w.jsxs)(S,{border:"2px solid black",width:"fit-content",alignItems:"center",onClick:e,px:"2",mb:"0.5em",borderRadius:"8px",children:[Object(w.jsx)(y,{justifyContent:"center",alignItems:"center",height:"1em",mr:"0.25em",children:"<"}),Object(w.jsx)(k,{fontSize:"0.6em",children:"Back"})]})}var z=n(23),B=n.n(z),F="https://jsonplaceholder.typicode.com",P=function(){return B()("".concat(F,"/posts/")).then((function(t){return t.data}))},T=function(t){return B()("".concat(F,"/comments?postId=").concat(t)).then((function(t){return t.data}))};function E(){var t=Object(j.useState)(),e=Object(g.a)(t,2),n=e[0],c=e[1],i=Object(x.h)(),r=Object(x.g)(),s=i.state.itemData,o=(s.userId,s.id),a=s.title,b=void 0===a?"":a,d=s.body,p=void 0===d?"":d;return Object(j.useEffect)((function(){function t(){return(t=Object(m.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(o);case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(w.jsxs)(C,{mx:"32px",my:"16px",children:[Object(w.jsxs)(y,{flexDirection:"column",children:[Object(w.jsx)(k,{fontSize:"32px",fontWeight:"600",children:Object(w.jsxs)("span",{children:[Object(w.jsx)(W,{onClick:function(){return r.goBack()}}),"Post: ",o]})}),Object(w.jsxs)(k,{children:[Object(w.jsx)(k,{fontWeight:"600",children:"Title:"})," ",b]}),Object(w.jsxs)(k,{children:[Object(w.jsx)(k,{fontWeight:"600",children:"Body:"})," ",p]})]}),Object(w.jsx)("hr",{}),Object(w.jsxs)(k,{fontSize:"16px",fontWeight:"600",children:["Comments:"," "]}),Object(w.jsx)(y,{children:Object(w.jsx)(D,{items:n,type:"comment"})})]})}function J(){var t=Object(j.useState)(),e=Object(g.a)(t,2),n=e[0],c=e[1];return Object(j.useEffect)((function(){function t(){return(t=Object(m.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(w.jsxs)(C,{mx:"32px",my:"16px",children:[Object(w.jsx)(k,{fontSize:"48px",fontWeight:"600",children:"Posts"}),Object(w.jsx)(y,{children:Object(w.jsx)(D,{items:n,type:"post"})})]})}var L=function(){return Object(w.jsxs)(p.a,{children:[Object(w.jsx)(h,{}),Object(w.jsx)("div",{children:Object(w.jsxs)(x.d,{children:[Object(w.jsx)(x.b,{exact:!0,path:"/post/:id",children:Object(w.jsx)(E,{})}),Object(w.jsx)(x.b,{path:"/posts",children:Object(w.jsx)(J,{})}),Object(w.jsx)(x.b,{path:"/",children:Object(w.jsx)(x.a,{to:"/posts"})})]})})]})},R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),r(t),s(t)}))};d.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(L,{})}),document.getElementById("root")),R()}},[[66,1,2]]]);
//# sourceMappingURL=main.fc58e473.chunk.js.map