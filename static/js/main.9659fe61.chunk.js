(this["webpackJsonpfront-react"]=this["webpackJsonpfront-react"]||[]).push([[0],{17:function(e,t,n){},31:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(12),c=n.n(r),o=(n(31),n(8)),i=(n(17),n(2)),s=function(e){var t=e.text,n=Object(a.useState)({fade:"fade-in"}),r=Object(o.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){var e=setInterval((function(){"fade-in"===c.fade?s({fade:"fade-out"}):s({fade:"fade-in"})}),4e3);return function(){return clearInterval(e)}}),[c]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h1",{className:c.fade,children:t})})};s.defaultProps={text:"Hello World!"};var u=s,l=n(13),f=n(9),d=n.n(f),p=n(15);n(55);p.a.initializeApp({apiKey:"AIzaSyApbNtcE9vZm0PAXwt_vDyatD-R2O_0aLU",authDomain:"fir-example-lacit.firebaseapp.com",projectId:"fir-example-lacit",storageBucket:"fir-example-lacit.appspot.com",messagingSenderId:"809172351904",appId:"1:809172351904:web:e0d16e1a843dcd10a902c5",measurementId:"G-WB4W65ND11"});var b=p.a.messaging(),j=function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.prev=1,e.next=4,b.getToken({vapidKey:"BKL0vtChkdS4SQhOigCq1q6hesW4Xl7C4bOM89TzSwPj-ThD09ateiv_eoMid-yokDECEOP1mNGLwZwHCWNW21s"});case 4:n=e.sent,t(!!n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("An error occurred while retrieving token. ",e.t0);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),O=n(26),h=n.n(O),v=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1];return console.log("Token found",r),Object(a.useEffect)((function(){var e;function t(){return(t=Object(l.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(c);case 2:return(e=t.sent)&&(console.log("Token is ",e),h()({method:"post",url:"http://tomcat.vit.belwest.com/firebase-back/firebase/token",headers:{"Content-Type":"text/plain"},data:e}).then((function(e){console.log(e)}),(function(e){console.log(e)}))),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[c]),Object(i.jsx)(i.Fragment,{})};v.propTypes={};var g=v,m=n(16),x=(n(53),function(e){var t=e.title,n=e.body;function a(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:t}),Object(i.jsx)("p",{children:n})]})}return""===t||m.b.info(Object(i.jsx)(a,{})),Object(i.jsx)(m.a,{autoClose:3e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!1})});x.defaultProps={title:"This is title",body:"Some body"};var y=x;var k=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({title:"",body:""}),s=Object(o.a)(c,2),l=s[0],f=s[1];return console.log(n,l),new Promise((function(e){b.onMessage((function(t){e(t)}))})).then((function(e){r(!0),f({title:e.notification.title,body:e.notification.body}),console.log(e)})).catch((function(e){return console.log("failed: ",e)})),Object(i.jsxs)("div",{className:"App",children:[n?Object(i.jsx)(y,{title:l.title,body:l.body}):Object(i.jsx)(i.Fragment,{}),Object(i.jsx)(g,{}),Object(i.jsx)(u,{text:"Hello React"})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};c.a.render(Object(i.jsx)(k,{}),document.getElementById("root")),w()}},[[54,1,2]]]);
//# sourceMappingURL=main.9659fe61.chunk.js.map