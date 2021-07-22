(this.webpackJsonptranscriber=this.webpackJsonptranscriber||[]).push([[0],{117:function(e,t){},239:function(e,t,n){},248:function(e,t){},250:function(e,t){},293:function(e,t){},295:function(e,t){},327:function(e,t){},328:function(e,t){},333:function(e,t){},335:function(e,t){},342:function(e,t){},361:function(e,t){},408:function(e,t,n){},410:function(e,t,n){"use strict";n.r(t);var r,c,o,a,s,i,l,d,u,b,p,f,j,O=n(2),m=n(221),g=n.n(m),h=(n(238),n(239),n(20)),x=n(420),v=n(230),A="https://drive.google.com/corp/drive/u/0/my-drive",w="https://app.getguru.com/boards/yiKXnGpi/Transcriber",y="https://yu3gypcoyi.execute-api.us-west-2.amazonaws.com/dev/graphql",B=["https://www.googleapis.com/auth/drive","https://www.googleapis.com/auth/documents"],S=Object(v.a)(r||(r=Object(h.a)(['\n  query UserQuery {\n    cards(\n      id: [\n        "iqKnn74T" # Application Servers (On-Premise)\n        "ioEzzokT" # Application Database (On-Premise)\n        "cAB66Egi" # Monitoring\n        "ceXzzbRi" # Development Process & Environment\n        "TLKg5Gbc" # LookML Views\n        "c8e5bg7i" # LookML Explores\n        "iGB6RkXT" # LookML Models\n        "T5KnzGqc" # LookML Projects\n        "ikEzzkeT" # Performance\n        "ckEzzkki" # Security\n        "TkEzzk6c" # Database Connections\n        "TbXzz78c" # Data Pipeline\n        "c5KnnjRi" # User Enablement\n        "TqKnnjnc" # Release Management\n        "TXrjjBpc" # Content Management\n        "inEpreBT" # Customer Success Top 10\n        "cbbeybKi" # Client-Side Performance\n      ]\n    ) {\n      title\n      rows {\n        rowId\n        text\n      }\n      statusCode\n    }\n  }\n']))),T={1:{color:"#ff4600",icon:"0\ufe0f\u20e3"},2:{color:"#ff8c00",icon:"1\ufe0f\u20e3"},3:{color:"#ffd300",icon:"2\ufe0f\u20e3"},4:{color:"#e5ff00",icon:"3\ufe0f\u20e3"},5:{color:"#9fff00",icon:"4\ufe0f\u20e3"}},k={cs:{label:"Customer Success",included:["Top 10 Behaviors and Characteristics of Successful Customers"]},pbl:{label:"PBL",included:["Client-Side Performance"]},lookml:{label:"LookML",included:["Development Process & Environment","Views","Explores","Models","Projects","Performance","Security","Database Connections","Data Pipeline"]},architecture:{label:"On-Premise Architecture",included:["Application Servers (On-Premise)","Application Database (On-Premise)","Monitoring"]},dataculture:{label:"Data Culture",included:["User Enablement","Content Management","Release Management"]}},G=n(27),C=n(28),J=n(12),z=n.n(J),Z=n(68),Q=n(222),L=n(1),H=Object(O.createContext)(),R=function(e){var t=Object(O.useState)({}),n=Object(G.a)(t,2),r=n[0],c=n[1],o=Object(O.useState)("lookml"),a=Object(G.a)(o,2),s=a[0],i=a[1],l=Object(O.useState)(!1),d=Object(G.a)(l,2),u=d[0],b=d[1],p=Object(O.useState)(void 0),f=Object(G.a)(p,2),j=f[0],m=f[1];Object(O.useEffect)((function(){m(new Q.OAuth2Client("389609123961-f66143o3ee89gp1q23m85sip64agkd1j.apps.googleusercontent.com"))}),[]);var g=function(e){var t={};return Object.keys(r).forEach((function(e){(function(e,t){return Object.values(e[t].rows).map((function(e){return e.score})).reduce((function(e,t){return e+t}),0)>0})(r,e)&&(t[e]={rows:{}},Object.keys(r[e].rows).forEach((function(n){var c=r[e].rows[n].score;if(c>0&&c<6){var o=Object(C.a)({},r[e].rows[n]);o.score-=1,t[e].rows[n]=Object(C.a)({},o)}})))})),{cards:Object(C.a)({},t),customer:e}},h=function(e){console.log(e);var t={};e.forEach((function(e){var n={};e.rows.forEach((function(e){n[e.text]={notes:"",score:0}})),t[e.title]={rows:n}})),c(Object(C.a)({},t))},x={gClient:j,loggedIn:u,handleOAuthLogIn:function(){var e=Object(Z.a)(z.a.mark((function e(t){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{(n=j).setCredentials(t.tokenObj),m(n),b(!0)}catch(r){window.alert("Problem authenticating. See console"),b(!1),console.error(r)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleOauthLogOut:function(){if(j){var e=j;e.revokeCredentials(),m(e)}b(!1)},cardState:r,reviewType:s,setReviewType:i,generateScores:Object(O.useMemo)((function(){return g}),[r]),updateRowScore:function(e,t,n){var o=Object(C.a)({},r);o[e].rows[t].score=n,c(Object(C.a)({},o))},updateRowNotes:function(e,t,n){var o=Object(C.a)({},r);o[e].rows[t].notes=n,c(Object(C.a)({},o))},setupState:Object(O.useMemo)((function(){return h}),[r])};return Object(L.jsx)(H.Provider,{value:x,children:e.children})},Y=n(22),V=Y.a.div(c||(c=Object(h.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  padding: 15px 15px;\n  font-size: 14px;\n  line-height: 20px;\n  &:hover {\n    cursor: pointer;\n    background-color: rgb(245, 245, 245);\n  }\n"]))),M=Y.a.span(o||(o=Object(h.a)(["\n  border-radius: 25px;\n  padding: 3px;\n"]))),U=Y.a.div(a||(a=Object(h.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  padding: 15px 15px;\n"]))),K=function(e){var t=Object(O.useContext)(H),n=t.cardState,r=t.updateRowScore,c=t.updateRowNotes,o=Object(O.useState)(0),a=Object(G.a)(o,2),s=a[0],i=a[1],l=Object(O.useState)(null),d=Object(G.a)(l,2),u=d[0],b=d[1];Object(O.useEffect)((function(){n[e.card]&&(b(n[e.card].rows[e.name.text].notes),i(n[e.card].rows[e.name.text].score))}),[n[e.card]]);var p=Object(L.jsx)(U,{children:Object(L.jsx)("textarea",{onChange:function(t){var n;n=t.target.value,b(n),c(e.card,e.name.text,n)},value:u,cols:"69",rows:"3"})}),f=Object(L.jsx)("span",{dangerouslySetInnerHTML:{__html:e.name.text.replace(/\[([^\]]+)\]\(([^)]+)\)/gi,'<a target="_blank" href="$2">$1</a>')}});return Object(L.jsxs)("div",{children:[Object(L.jsxs)(V,{"data-text":e.name.text,onClick:function(){var t;i(t=(s+1)%7),r(e.card,e.name.text,t),e.calcScores(n[e.card].rows)},style:6===s?{backgroundColor:"#eee",textDecoration:"line-through"}:{},children:[function(){var e=T[Number(s)];return e?Object(L.jsx)(M,{style:{backgroundColor:e.color},children:Object(L.jsxs)("span",{"aria-label":"yes",role:"img",children:["\xa0",e.icon]})}):Object(L.jsx)(L.Fragment,{})}()," ",f]},e.name.index),s>=1&&p]})},F=Y.a.div(s||(s=Object(h.a)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),P=Y.a.div(i||(i=Object(h.a)(["\n  margin: auto;\n  width: 600px;\n  max-width: 100%;\n  text-align: left;\n  background-color: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.3);\n"]))),I=Y.a.div(l||(l=Object(h.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  padding: 15px 15px;\n  font-size: 16px;\n  font-weight: bold;\n"]))),D=Y.a.div(d||(d=Object(h.a)(["\n  padding: 15px 15px;\n  float: right;\n  cursor: pointer;\n  color: #ddd;\n"]))),X=Y.a.div(u||(u=Object(h.a)(["\n  float: right;\n  font-weight: normal;\n"]))),q=Y.a.span(b||(b=Object(h.a)(["\n  font-size: 12px;\n  color: #bbb;\n  padding-left: 10px;\n"]))),E=function(e){var t=Object(O.useContext)(H).cardState,n=Object(O.useState)(!1),r=Object(G.a)(n,2),c=r[0],o=r[1],a=Object(O.useState)(!1),s=Object(G.a)(a,2),i=s[0],l=s[1],d=Object(O.useState)(0),u=Object(G.a)(d,2),b=u[0],p=u[1],f=function(){o(!c)};Object(O.useEffect)((function(){t[e.card]&&j(t[e.card].rows)}),[t[e.card]]);var j=function(e){var t=Object.values(e).filter((function(e){return e.score>0&&e.score<6})).map((function(e){return e.score-1})).reduce((function(e,t){return e+t}),0);p(t)},m=e.card.title,g=Math.round(b/(4*e.card.rows.length)*100);return c?i?Object(L.jsx)(F,{}):Object(L.jsx)(F,{children:Object(L.jsxs)(P,{children:[Object(L.jsx)(D,{onClick:function(){l(!0),o(!0)},alt:"Remove",children:"x"}),Object(L.jsxs)(I,{onClick:f,children:[Object(L.jsx)("input",{type:"checkbox",readOnly:!0,checked:!c})," ",m]})]})}):Object(L.jsx)(F,{children:Object(L.jsxs)(P,{children:[Object(L.jsxs)(I,{onClick:f,children:[Object(L.jsx)("input",{type:"checkbox",readOnly:!0,checked:!c})," ",m," ",Object(L.jsxs)(X,{children:[g,"%"," ",Object(L.jsxs)(q,{children:["(",b,"/",4*e.card.rows.length,")"]})]})]}),e.card.rows.map((function(e,t){return Object(L.jsx)(K,{card:m,name:e,calcScores:j},t)}))]})})},W=Y.a.span(p||(p=Object(h.a)(["\n  font-size: 11px;\n"]))),N=function(){var e=Object(O.useContext)(H),t=e.reviewType,n=e.setReviewType,r=e.setupState,c=Object(x.a)(S),o=c.loading,a=c.error,s=c.data;Object(O.useEffect)((function(){s&&r(s.cards)}),[s]);if(a)return Object(L.jsx)("p",{children:a.message});if(o)return Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsx)("p",{children:"Loading cards from Guru..."}),Object(L.jsx)("p",{children:"\xa0"})]});var i,l=(null===(i=k[t])||void 0===i?void 0:i.included)||[],d=s.cards.filter((function(e){return-1!==l.indexOf(e.title)}));return Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsx)("label",{htmlFor:"reviewType",children:"Section:"}),Object(L.jsx)("select",{id:"reviewType",value:t,onChange:function(e){n(e.target.value)},children:Object.keys(k).map((function(e){return Object(L.jsx)("option",{value:e,children:k[e].label},e)}))})," ",Object(L.jsx)(W,{children:"Tip: remove cards you\u2019re not interested in by clicking the X"}),Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsx)("div",{children:d.map((function(e){return Object(L.jsx)(E,{card:e},e.title)}))}),Object(L.jsx)("p",{children:"\xa0"})]})},_=n(83),$=Y.a.span(f||(f=Object(h.a)(["\n  padding-left: 100px;\n"]))),ee=function(){var e=Object(O.useContext)(H),t=e.generateScores,n=e.gClient,r=e.handleOauthLogOut,c=function(){var e=Object(Z.a)(z.a.mark((function e(){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,prompt("Who is the customer?");case 2:return n=e.sent,e.abrupt("return",t(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(e){console.error(e),window.alert("Problem communicating with Google Drive! Check the console")},a=function(){var e=Object(Z.a)(z.a.mark((function e(){var t,r,a,s,i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:return t=e.sent,e.next=5,n.getRequestHeaders();case 5:return r=e.sent,a=Object(C.a)(Object(C.a)({},r),{},{"Content-type":"application/json","Access-Control-Allow-Origin":"*"}),e.prev=7,e.next=10,fetch("/api/generate",{method:"POST",headers:a,body:JSON.stringify(t)});case 10:if(!(s=e.sent).ok){e.next=18;break}return e.next=14,s.json();case 14:(i=e.sent).ok?("Document has been saved in the root of your Google Drive. Do you want to clear?",window.confirm("Document has been saved in the root of your Google Drive. Do you want to clear?")?(window.location.reload(),window.open(i.data,"_blank")):window.open(i.data,"_blank")):o(i.error),e.next=19;break;case 18:o(s);case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(7),o(e.t0);case 24:case"end":return e.stop()}}),e,null,[[7,21]])})));return function(){return e.apply(this,arguments)}}();return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("div",{children:[Object(L.jsx)("input",{type:"button",onClick:a,value:"Save to Google Doc"}),"\xa0\xa0",Object(L.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:A,children:"Transcriber Output Location"}),Object(L.jsx)($,{children:Object(L.jsx)("input",{type:"button",onClick:function(){window.confirm("Are you sure you want to start over?")&&window.location.reload()},value:"Clear"})}),Object(L.jsx)("p",{children:"\xa0"})]}),Object(L.jsx)("div",{children:Object(L.jsx)(_.GoogleLogout,{buttonText:"Logout",onLogoutSuccess:r})})]})},te=Y.a.div(j||(j=Object(h.a)(["\n  margin: auto;\n  padding: 20px;\n  width: 600px;\n  max-width: 100%;\n  text-align: left;\n  background-color: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.3);\n"]))),ne=function(){var e=Object(O.useContext)(H),t=e.handleOAuthLogIn,n=e.handleOauthLogOut;return Object(L.jsxs)(te,{style:{width:"50%",marginTop:"10%"},children:[Object(L.jsx)("h5",{style:{marginBottom:"10px"},children:"Authenticate with Google to view this Content"}),Object(L.jsx)(_.GoogleLogin,{clientId:"389609123961-f66143o3ee89gp1q23m85sip64agkd1j.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:t,scope:B.join(" "),onFailure:n,cookiePolicy:"single_host_origin"})]})},re=(n(407),n(408),n(419)),ce=n(418),oe=n(231),ae=n(232),se=new re.a({link:new oe.a({uri:y}),cache:new ae.a}),ie=function(e){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("span",{className:"underline",children:e.text.slice(0,1)}),e.text.slice(1)," "]})},le=function(){return Object(O.useContext)(H).loggedIn?Object(L.jsx)(ce.a,{client:se,children:Object(L.jsxs)("div",{className:"App",children:[Object(L.jsxs)("div",{className:"App-header",children:[Object(L.jsx)("img",{src:"data:image/png;base64, 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",className:"App-logo",alt:"logo"}),Object(L.jsxs)("h2",{children:[Object(L.jsxs)("div",{className:"tooltip",children:["Transcriber",Object(L.jsxs)("span",{className:"tooltiptext",children:["Transcriber"," ",Object(L.jsx)(ie,{text:"reproduces"}),Object(L.jsx)(ie,{text:"analytical,"}),Object(L.jsx)(ie,{text:"neat"}),Object(L.jsx)(ie,{text:"similarly"}),Object(L.jsx)(ie,{text:"comprehensive"}),Object(L.jsx)(ie,{text:"reviews"}),Object(L.jsx)(ie,{text:"incorporating"}),Object(L.jsx)(ie,{text:"best practices"}),Object(L.jsx)(ie,{text:"every"}),Object(L.jsx)(ie,{text:"rendition"})]})]}),"\xa0helps you conduct different types of reviews and audits",Object(L.jsx)("br",{}),"and is powered by content from this"," ",Object(L.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:w,children:"Guru board"}),"\xa0\xa0\xa0",Object(L.jsx)("span",{className:"version",children:"v0.1.5"})]})]}),Object(L.jsx)("div",{className:"App-User",children:Object(L.jsx)(N,{})}),Object(L.jsx)(ee,{})]})}):Object(L.jsx)(ne,{})},de=function(){return Object(L.jsx)(R,{children:Object(L.jsx)(le,{})})};g.a.render(Object(L.jsx)(de,{}),document.getElementById("root"))}},[[410,1,2]]]);
//# sourceMappingURL=main.bcb42f00.chunk.js.map