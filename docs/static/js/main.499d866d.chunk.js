(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=(n(16),n(9)),u=n(2),j=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(u.a)(n,2),i=r[0],s=r[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t(i),s(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){s(e.target.value)}})})},o=n(10),d=n(6),l=n.n(d),b=n(8),f=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=rI6QvjiqsXlCKkeB0GbMax9Eb7QIVWAh"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:n,alt:t}),Object(a.jsx)("p",{children:t})]})},m=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){f(e).then((function(e){r({data:e,loading:!1})}))}),[e]),a}(t),r=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(a.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(a.jsx)(p,Object(o.a)({},e),e.id)}))})]})},h=function(){var e=Object(c.useState)(["One Punch"]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(j,{setCategories:function(e){r([e].concat(Object(s.a)(n)))}}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(m,{category:e},e)}))})]})};i.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.499d866d.chunk.js.map