(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{134:function(e,t,a){e.exports=a(195)},139:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(129),l=a.n(c),o=(a(139),a(17)),s=a(7),u=a(2),m=function(e){var t=e.isAuthenticated,a=e.onLogout,c=r.a.createElement(n.Fragment,null,r.a.createElement("li",null,r.a.createElement("a",{onClick:a,href:"#!"},r.a.createElement("span",{className:"hide-sm"},"Logout")))),l=r.a.createElement(n.Fragment,null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"Login")));return r.a.createElement("div",{className:"navbar bg-primary"},r.a.createElement("h1",null,r.a.createElement(s.b,{to:t?"/users":"/"},"SnapCheck")),r.a.createElement("ul",null,t?c:l))},i=a(23),d=a.n(i),p=a(29),h=a(55),f=function(e){var t=e.user;return r.a.createElement("div",{className:"card text-center "},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"all-center"},r.a.createElement(h.a,{name:t.first_name,size:"150",round:"120px"}),r.a.createElement("h1",null,t.first_name),r.a.createElement("p",null,"Location: ",t.address.address1),r.a.createElement("strong",null,"Order: ")," ",t.order_total.amount," ",r.a.createElement("strong",null,t.order_total.currency," ")),r.a.createElement(s.b,{to:"/users/".concat(t.id)},r.a.createElement("button",{style:{color:"#fff",fontSize:"1rem",margin:"1rem",padding:"0.2rem 1.5rem",border:"none",outline:"none",cursor:"pointer",borderRadius:"20px",background:" #003699"}},"More"))))},E=a(30),b=a.n(E),g=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),u=Object(o.a)(l,2),m=u[0],i=u[1],h=Object(n.useState)(""),E=Object(o.a)(h,2),g=E[0],v=E[1],y=function(e){var t=a.filter((function(t){return t.first_name.toLowerCase().includes(e.toLowerCase())||t.last_name.toLowerCase().includes(e.toLowerCase())||t.order_total.amount.includes(e.toLowerCase())}));i(t)},j=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:3000/users");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){j()}),[]),r.a.createElement("div",null,r.a.createElement(s.b,{style:{marginLeft:" 4rem"},onClick:function(){return i([])},to:"/users"},"Back to users"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v("")},style:{display:"flex",justifyContent:"center"}},r.a.createElement("input",{style:{width:"35rem",marginRight:"2rem",alignItems:"center"},type:"text",name:"text",value:g,placeholder:"Search by First name, Last name or the amount....",onChange:function(e){v(e.target.value),y(g)}}),r.a.createElement("button",{style:{color:"#fff",fontSize:"1rem",margin:"1rem",padding:"0.7rem 1.5rem",border:"none",outline:"none",cursor:"pointer",borderRadius:"20px",background:" #003699"},type:"submit"},"Search")),r.a.createElement("div",{className:"grid-3"},m.length>0?m.map((function(e){return r.a.createElement(f,{user:e,key:e.id})})):a.map((function(e){return r.a.createElement(f,{user:e,key:e.id})}))))},v=a(133),y=function(e){var t=e.component,a=Object(v.a)(e,["component"]);return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/"})}}))},j=a(25),C=a(9),O=(a(193),function(e){var t=e.show,a=e.close,n=e.deleteUser;return r.a.createElement("div",{className:"modal-wrapper",style:{transform:t?"translateY(0vh)":"translateY(-100vh)",opacity:t?"1":"0"}},r.a.createElement("div",{className:"modal-header"},r.a.createElement("span",{onClick:a,className:"close-modal-btn"},"x")),r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-body"},r.a.createElement("p",null,"Are you sure you want to delete this user?")),r.a.createElement("div",{style:{display:"flex"},className:"modal-footer"},r.a.createElement("button",{style:{background:"#eee"},onClick:a,className:"btn-cancel"},"Cancel"),r.a.createElement(s.b,{to:"/users"},r.a.createElement("button",{onClick:n,className:"btn-cancel"},"Delete")))))}),w=function(e){var t=e.match.params.id,a=Object(n.useState)({first_name:"",last_name:"",age:"",gender:"",address:{address1:"",address2:"",city:"",state:"",zip:""},order_total:{amount:0}}),c=Object(o.a)(a,2),l=c[0],u=c[1],m=Object(n.useState)(!1),i=Object(o.a)(m,2),f=i[0],E=i[1],g=Object(n.useState)(!1),v=Object(o.a)(g,2),y=v[0],w=v[1],x=new Intl.NumberFormat("en-US",{style:"currency",currency:"GBP"}),k=l.first_name,N=l.last_name,S=l.age,L=l.gender,_=l.order_total.amount,z=l.address,A=z.address1,F=z.city,D=z.state,U=z.zip,B=function(){var e=Object(p.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:3000/users/".concat(t));case 2:a=e.sent,u(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){var t=e.target.name;u("city"===t||"zip"===t||"state"===t||"address1"===t||"address2"===t?Object(C.a)(Object(C.a)({},l),{},{address:Object(C.a)(Object(C.a)({},l.address),{},Object(j.a)({},e.target.name,e.target.value))}):"amount"===t?Object(C.a)(Object(C.a)({},l),{},{order_total:Object(C.a)(Object(C.a)({},l.order_total),{},Object(j.a)({},e.target.name,e.target.value))}):Object(C.a)(Object(C.a)({},l),{},Object(j.a)({},t,e.target.value)))},R=function(){return E(!1)},I=function(){var a=Object(p.a)(d.a.mark((function a(n){var r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},a.next=3,b.a.put("http://localhost:3000/users/".concat(t),l,r);case 3:e.history.push("/users");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),q=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("http://localhost:3000/users/".concat(t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){B()}),[t]),r.a.createElement("div",{className:"card text-center"},r.a.createElement(s.b,{to:"/users/"},"Back to users"),y?r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),I(l)}},r.a.createElement("input",{style:{width:"15rem"},type:"text",name:"first_name",value:k,placeholder:"Change the first name",onChange:M}),r.a.createElement("input",{style:{width:"15rem"},type:"text",name:"last_name",value:N,placeholder:"Change the last name....",onChange:M}),r.a.createElement("input",{style:{width:"15rem"},type:"text",name:"gender",value:L,placeholder:"Change the gender....",onChange:M}),r.a.createElement("input",{style:{width:"15rem"},type:"text",name:"address1",value:A,placeholder:"Change the address....",onChange:M}),r.a.createElement("input",{style:{width:"15rem"},type:"text",name:"city",value:F,placeholder:"Change the city....",onChange:M}),r.a.createElement("input",{style:{width:"15rem"},type:"text",name:"state",value:D,placeholder:"Change the state....",onChange:M}),r.a.createElement("input",{style:{width:"15rem"},type:"text",name:"zip",value:U,placeholder:"Change the zip code....",onChange:M}),r.a.createElement("input",{style:{width:"15rem"},type:"text",name:"age",value:S,placeholder:"Change the age....",onChange:M}),r.a.createElement("input",{style:{width:"15rem"},type:"text",name:"amount",value:_,placeholder:"Chnage the amount....",onChange:M}),r.a.createElement("button",{style:{color:"#fff",fontSize:"1rem",margin:"1rem",padding:"0.2rem 1.5rem",border:"none",outline:"none",cursor:"pointer",borderRadius:"20px",background:" #003699"},type:"submit"},"Submit"),r.a.createElement(s.b,{to:"/users/".concat(t),onClick:function(){return w(!1)}}," ","Cancel"," ")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"all-center"},r.a.createElement(h.a,{name:k,size:"150",round:"120px"}),r.a.createElement("h1",null,"".concat(k," ").concat(N)),r.a.createElement("strong",null,"Address: ")," ","".concat(A," ").concat(F,"  ").concat(D,"\n              ").concat(U),r.a.createElement("br",null),r.a.createElement("strong",null,"Gender: ")," ",L,r.a.createElement("br",null),r.a.createElement("strong",null,"Age: "),S,r.a.createElement("br",null),r.a.createElement("strong",null,"amount: "),x.format(_))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return E(!0)},className:"btn-openModal",style:{background:"#d42c2c",color:"#fff"}},"Delete User"),r.a.createElement("button",{onClick:function(){return w(!y)},className:"btn-openModal",style:{background:"rgb(47, 194, 108)",color:"#fff",padding:".5rem 3.5rem"}},"Edit"),r.a.createElement(s.b,{to:"/users"},"Cancel"),r.a.createElement("div",null,f?r.a.createElement("div",{onClick:R,className:"back-drop"}):null,r.a.createElement(O,{deleteUser:q,show:f,close:R})))))},x=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(o.a)(t,2),c=a[0],l=a[1],s=c.username,u=c.password,m=function(e){return l(Object(C.a)(Object(C.a)({},c),{},Object(j.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"form-container"},r.a.createElement("h1",null,"Account ",r.a.createElement("span",{className:"text-primary"},"Login")),r.a.createElement("div",null),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.history.push("/users")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{id:"username",type:"username",name:"username",value:s,onChange:m,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{id:"password",type:"password",name:"password",value:u,onChange:m,required:!0})),r.a.createElement("input",{onClick:e.onLogin,type:"submit",value:"Login",className:"btn btn-primary btn-block"})))};a(194);var k=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=function(){c(!0)};return r.a.createElement(n.Fragment,null,r.a.createElement(s.a,{className:"App"},r.a.createElement(m,{onLogin:l,onLogout:function(){c(!1)},isAuthenticated:a}),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(x,Object.assign({},e,{onLogin:l}))}}),r.a.createElement(y,{exact:!0,path:"/users",isAuthenticated:a,component:g}),r.a.createElement(y,{exact:!0,path:"/users/:id",isAuthenticated:a,component:w}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.abf74741.chunk.js.map