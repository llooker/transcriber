(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,n){e.exports=n.p+"static/media/logo.c35b2089.svg"},48:function(e,t,n){e.exports=n(84)},55:function(e,t,n){},76:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),c=n.n(o),i=(n(53),n(55),n(11)),l=n(12),s=n(14),u=n(13),d=n(15),p=n(2),m=n(4),b=n(19),h=n(38),g=n.n(h),f=n(5);function v(){var e=Object(m.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  padding: 15px 15px;\n"]);return v=function(){return e},e}function E(){var e=Object(m.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  background-color: #EEE;\n  padding: 15px 15px;\n  font-size: 14px;\n  line-height: 20px;\n  text-decoration: line-through;\n"]);return E=function(){return e},e}function k(){var e=Object(m.a)(["\n  border-radius: 25px;\n  background-color: #9FFF00;\n  padding: 3px;\n"]);return k=function(){return e},e}function j(){var e=Object(m.a)(["\n  border-radius: 25px;\n  background-color: #E5FF00;\n  padding: 3px;\n"]);return j=function(){return e},e}function w(){var e=Object(m.a)(["\n  border-radius: 25px;\n  background-color: #FFD300;\n  padding: 3px;\n"]);return w=function(){return e},e}function O(){var e=Object(m.a)(["\n  border-radius: 25px;\n  background-color: #FF8C00;\n  padding: 3px;\n"]);return O=function(){return e},e}function x(){var e=Object(m.a)(["\n  border-radius: 25px;\n  background-color: #FF4600;\n  padding: 3px;\n"]);return x=function(){return e},e}function y(){var e=Object(m.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  padding: 15px 15px;\n  font-size: 14px;\n  line-height: 20px;\n"]);return y=function(){return e},e}var S=f.a.div(y()),C=f.a.span(x()),A=f.a.span(O()),F=f.a.span(w()),T=f.a.span(j()),z=f.a.span(k()),G=f.a.div(E()),P=f.a.div(v()),H=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).idx=n.props.idx,n.name=n.props.name,n.card=n.props.card,n.updateScore=n.props.updateScore,n.handleClick=n.handleClick.bind(Object(p.a)(Object(p.a)(n))),n.handleChange=n.handleChange.bind(Object(p.a)(Object(p.a)(n))),n.state={clicks:0,score:n.props.score},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){var t=this.state.clicks,n=e.target;for(var a in n.getAttribute("data-text")||(n=e.target.parentElement),window.jsonForGoogleApps.cards)if(window.jsonForGoogleApps.cards.hasOwnProperty(a)&&a===this.card){var r=!0,o="";window.jsonForGoogleApps.cards[a].rows[n.getAttribute("data-text")]&&(o=window.jsonForGoogleApps.cards[a].rows[n.getAttribute("data-text")].notes),window.jsonForGoogleApps.cards[a].rows[n.getAttribute("data-text")]={notes:o,score:t},t>6&&delete window.jsonForGoogleApps.cards[a].rows[n.getAttribute("data-text")];break}if(!r){var c={};c[n.getAttribute("data-text")]={notes:"",score:t},window.jsonForGoogleApps.cards[this.card]={rows:c}}if(this.setState(function(e,n){return{clicks:t}}),t>=6){this.props.updateScore(0,this.idx),this.setState(function(e,t){return{clicks:0}})}else t>=1&&t<=4&&this.props.updateScore(t,this.idx);t=this.state.clicks+1}},{key:"handleChange",value:function(e){this.setState({value:e.target.value});var t=e.target.parentElement.previousElementSibling;for(var n in window.jsonForGoogleApps.cards)if(window.jsonForGoogleApps.cards.hasOwnProperty(n)&&n===this.card){window.jsonForGoogleApps.cards[n].rows[t.getAttribute("data-text")].notes=e.target.value;break}}},{key:"render",value:function(){var e=this.state.clicks,t="",n="",a=r.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.name.text.replace(/\[([^\]]+)\]\(([^)]+)\)/gi,'<a target="_blank" href="$2">$1</a>')}});switch(e){case 1:t=r.a.createElement(C,null,r.a.createElement("span",{"aria-label":"yes",role:"img"},"\xa00\ufe0f\u20e3"));break;case 2:t=r.a.createElement(A,null,r.a.createElement("span",{"aria-label":"no",role:"img"},"\xa01\ufe0f\u20e3"));break;case 3:t=r.a.createElement(F,null,r.a.createElement("span",{"aria-label":"no",role:"img"},"\xa02\ufe0f\u20e3"));break;case 4:t=r.a.createElement(T,null,r.a.createElement("span",{"aria-label":"no",role:"img"},"\xa03\ufe0f\u20e3"));break;case 5:t=r.a.createElement(z,null,r.a.createElement("span",{"aria-label":"no",role:"img"},"\xa04\ufe0f\u20e3"))}return e>=1&&(n=r.a.createElement(P,null,r.a.createElement("textarea",{onChange:this.handleChange,value:this.state.value,cols:"78",rows:"3"}))),e<=5?r.a.createElement("div",null,r.a.createElement(S,{"data-text":this.name.text,onClick:this.handleClick,key:this.name.index},t," ",a),n):r.a.createElement("div",null,r.a.createElement(G,{"data-text":this.name.text,onClick:this.handleClick,key:this.name.index},a),n)}}]),t}(r.a.Component);function M(){var e=Object(m.a)(["\n  font-size: 12px;\n  color: #bbb;\n  padding-left: 10px;\n"]);return M=function(){return e},e}function L(){var e=Object(m.a)(["\n  float: right;\n  font-weight: normal;\n"]);return L=function(){return e},e}function D(){var e=Object(m.a)(["\n  padding: 15px 15px;\n  float: right;\n  cursor: pointer;\n  color: #ddd;\n"]);return D=function(){return e},e}function q(){var e=Object(m.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  padding: 15px 15px;\n  font-size: 16px;\n  font-weight: bold;\n"]);return q=function(){return e},e}function R(){var e=Object(m.a)(["\n  margin: auto;\n  width: 600px;\n  max-width: 100%;\n  text-align: left;\n  background-color: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.3);\n"]);return R=function(){return e},e}function I(){var e=Object(m.a)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]);return I=function(){return e},e}var N=f.a.div(I()),K=f.a.div(R()),X=f.a.div(q()),B=f.a.div(D()),U=f.a.div(L()),J=f.a.span(M()),_=function(e){function t(e){var n,a=e.card;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this))).card=a,n.state={isHidden:!0,isRemoved:!1,rowScores:{},totalScore:0},n.toggleHidden=n.toggleHidden.bind(Object(p.a)(Object(p.a)(n))),n.remove=n.remove.bind(Object(p.a)(Object(p.a)(n))),n.addScores=n.addScores.bind(Object(p.a)(Object(p.a)(n))),n.updateScore=n.updateScore.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"remove",value:function(){this.setState({isRemoved:!0,isHidden:!0})}},{key:"addScores",value:function(e,t){return Number(e)+Number(t)}},{key:"updateScore",value:function(e,t){var n=Object.assign({},this.state.rowScores);n[t]=e;var a=Object.values(n).reduce(this.addScores,0);this.setState({rowScores:n,totalScore:a})}},{key:"render",value:function(){var e=this,t=this.card.title,n=Math.round(this.state.totalScore/(4*this.card.rows.length)*100);return this.state.isHidden?this.state.isRemoved?r.a.createElement(N,null):r.a.createElement(N,null,r.a.createElement(K,null,r.a.createElement(B,{onClick:this.remove,alt:"Remove"},"x"),r.a.createElement(X,{onClick:this.toggleHidden},r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:!this.state.isHidden})," ",t))):r.a.createElement(N,null,r.a.createElement(K,null,r.a.createElement(X,{onClick:this.toggleHidden},r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:!this.state.isHidden})," ",t," ",r.a.createElement(U,null,n,"% ",r.a.createElement(J,null,"(",this.state.totalScore,"/",4*this.card.rows.length,")"))),this.card.rows.map(function(n,a){return r.a.createElement(H,{key:a,card:t,name:n,score:e.state.rowScores[a],idx:a,updateScore:e.updateScore})})))}}]),t}(r.a.Component);function V(){var e=Object(m.a)(['\n  query UserQuery {\n    cards (id:["iqKnn74T" # Application Servers (On-Premise)\n              ,"ioEzzokT" # Application Database (On-Premise)\n              ,"cAB66Egi" # Monitoring\n\n              ,"ceXzzbRi" # Development Process & Environment\n              ,"TLKg5Gbc" # LookML Views\n              ,"c8e5bg7i" # LookML Explores\n              ,"iGB6RkXT" # LookML Models\n              ,"T5KnzGqc" # LookML Projects\n              ,"ikEzzkeT" # Performance\n              ,"ckEzzkki" # Security\n              ,"TkEzzk6c" # Database Connections\n              ,"TbXzz78c" # Data Pipeline\n\n              ,"c5KnnjRi" # User Enablement\n              ,"TqKnnjnc" # Release Management\n              ,"TXrjjBpc" # Content Management\n\n              ,"inEpreBT" # Customer Success Top 10\n              ]) {\n      title\n      rows {\n        rowId\n        text\n      }\n      statusCode\n    }\n  }\n']);return V=function(){return e},e}function W(){var e=Object(m.a)(["\n  font-size: 11px;\n"]);return W=function(){return e},e}var Z=f.a.span(W()),Q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={reviewType:"lookml"},n.handleChange=n.handleChange.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({reviewType:e.target.value}),this.forceUpdate()}},{key:"render",value:function(){var e=this;return r.a.createElement(b.Query,{query:Y},function(t){var n=t.loading,a=t.error,o=t.data;if(n)return r.a.createElement("div",null,r.a.createElement("p",null,"\xa0"),r.a.createElement("p",null,"Loading cards from Guru..."),r.a.createElement("p",null,"\xa0"));if(a)return r.a.createElement("p",null,a.message);var c=o.cards,i=[];switch(e.state.reviewType){case"cs":i=["Top 10 Behaviors and Characteristics of Successful Customers"];break;case"lookml":i=["Development Process & Environment","Views","Explores","Models","Projects","Performance","Security","Database Connections","Data Pipeline"];break;case"architecture":i=["Application Servers (On-Premise)","Application Database (On-Premise)","Monitoring"];break;case"dataculture":i=["User Enablement","Content Management","Release Management"]}return c=c.filter(function(e,t,n){return-1!==i.indexOf(e.title)}),r.a.createElement("div",null,r.a.createElement("p",null,"\xa0"),r.a.createElement("label",{htmlFor:"reviewType"},"Section:"),r.a.createElement("select",{id:"reviewType",value:e.state.reviewType,onChange:e.handleChange},r.a.createElement("option",{value:"cs"},"Customer Success"),r.a.createElement("option",{value:"lookml"},"LookML"),r.a.createElement("option",{value:"architecture"},"On-Premise Architecture"),r.a.createElement("option",{value:"dataculture"},"Data Culture"))," ",r.a.createElement(Z,null,"Tip: remove cards you\u2019re not interested in by clicking the X"),r.a.createElement("p",null,"\xa0"),r.a.createElement("div",null,c.map(function(e,t){return r.a.createElement(_,{key:e.title,card:e})})),r.a.createElement("p",null,"\xa0"))})}}]),t}(r.a.Component),Y=g()(V()),$=Object(b.graphql)(Y,{options:function(){return{variables:{},pollInterval:1e6}}})(Q),ee=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).save=e.save.bind(Object(p.a)(Object(p.a)(e))),e.googleScriptsEndpoint="https://script.google.com/a/looker.com/macros/s/AKfycbzAAHv7EHgJRbZ5f8IqnK3IPqWDlnuUZWZTC-zIfw/exec",e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"save",value:function(){window.jsonForGoogleApps.customer=prompt("Who is the customer?"),console.log(JSON.stringify(window.jsonForGoogleApps)),fetch(this.googleScriptsEndpoint,{mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*"},method:"post",body:JSON.stringify(window.jsonForGoogleApps)}).then(function(e){console.log(e),alert("Success, check the Transcriber Output folder.")})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"button",onClick:this.save,value:"Save to Google Doc"})," then check the",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://drive.google.com/drive/u/0/folders/1VXtp98I-A8MFdo-wN3iHnYOPYtqh8lTI"}," Output")," folder",r.a.createElement("p",null,"\xa0"))}}]),t}(r.a.Component),te=n(46),ne=n.n(te),ae=(n(76),n(36)),re=n(47),oe=n(91),ce=new ae.a({link:new re.a({uri:"https://yu3gypcoyi.execute-api.us-west-2.amazonaws.com/dev/graphql"}),cache:new oe.a}),ie=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(b.ApolloProvider,{client:ce},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:ne.a,className:"App-logo",alt:"logo"}),r.a.createElement("h2",null,r.a.createElement("div",{class:"tooltip"},"Transcriber",r.a.createElement("span",{class:"tooltiptext"},"Transcriber ",r.a.createElement("span",{class:"underline"},"r"),"eproduces ",r.a.createElement("span",{class:"underline"},"a"),"nalytical, ",r.a.createElement("span",{class:"underline"},"n"),"eat, similarly-comprehensive reviews, incorporating #bestpractices every rendition")),"\xa0helps you conduct different types of reviews and audits",r.a.createElement("br",null),"and is powered by content from this ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://app.getguru.com/boards/yiKXnGpi/Transcriber"},"Guru board"))),r.a.createElement("div",{className:"App-User"},r.a.createElement($,null)),r.a.createElement(ee,null)))}}]),t}(a.Component);window.jsonForGoogleApps={customer:"",cards:{}},c.a.render(r.a.createElement(ie,null),document.getElementById("root"))}},[[48,2,1]]]);
//# sourceMappingURL=main.59b2ce52.chunk.js.map