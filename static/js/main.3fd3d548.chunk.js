(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(8),i=a.n(r),o=(a(13),a(3)),c=a(4),d=a(6),l=a(5),u=(a(14),a(15),a(2)),h=a(0),p=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={index:e.index,id:e.id,model:e.model,brand:e.brand,year:e.year,color:e.color,image:e.image},s.update=s.update.bind(Object(u.a)(s)),s}return Object(c.a)(a,[{key:"update",value:function(e){var t=e.target.name,a=e.target.value;switch(t){case"model":this.setState({model:a});break;case"brand":this.setState({brand:a});break;case"year":this.setState({year:a});break;case"color":this.setState({color:a});break;case"image":this.setState({image:a});break;default:throw Error}}},{key:"render",value:function(){var e=Object(h.jsx)("input",{name:"image",type:"text",value:"",placeholder:"add link here",onChange:this.update});return this.state.image&&(e=Object(h.jsx)("img",{alt:":( ",src:this.state.image,className:"carImage"})),Object(h.jsxs)("p",{children:[e,Object(h.jsx)("input",{name:"brand",type:"text",value:this.state.brand,onChange:this.update}),Object(h.jsx)("input",{name:"model",type:"text",value:this.state.model,onChange:this.update}),Object(h.jsx)("input",{name:"year",type:"text",value:this.state.year,onChange:this.update}),Object(h.jsx)("input",{name:"color",type:"text",value:this.state.color,onChange:this.update})]})}}]),a}(n.a.Component),j=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={owner:e.owner,address:e.address},s.update=s.update.bind(Object(u.a)(s)),s}return Object(c.a)(a,[{key:"update",value:function(e){var t=e.target.name,a=e.target.value;switch(t){case"owner":this.setState({owner:a});break;case"address":this.setState({address:a});break;default:throw Error}}},{key:"render",value:function(){return Object(h.jsxs)("p",{children:[Object(h.jsx)("input",{type:"text",name:"owner",value:this.state.owner,onChange:this.update},"input owner"+this.state.id),Object(h.jsx)("input",{type:"text",name:"address",value:this.state.address,onChange:this.update},"input address"+this.state.id)]})}}]),a}(n.a.Component),b="http://localhost:3000",O=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SERVER:"http://localhost:3000"}).API?Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SERVER:"http://localhost:3000"}).API:"/api",v=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).references=[],s.state={ref:e.ref,index:e.index,id:e.id,owner:e.owner,address:e.address,cars:e.cars},s.save=s.save.bind(Object(u.a)(s)),s.delete=s.delete.bind(Object(u.a)(s)),s.addNewCar=s.addNewCar.bind(Object(u.a)(s)),s.removeCar=s.removeCar.bind(Object(u.a)(s)),s}return Object(c.a)(a,[{key:"delete",value:function(e){e.preventDefault();var t=Number(e.target.form.id);fetch(b+O+"/owner",{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"http://localhost:5000","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},body:JSON.stringify({id:t})}),window.location.reload(!1)}},{key:"addNewCar",value:function(){var e=this.state.cars;e.push({model:"model",brand:"brand",year:"year",color:"color"}),this.setState({cars:e})}},{key:"removeCar",value:function(e){var t=this.state.cars;delete t[e.target.value],this.setState({cars:t})}},{key:"save",value:function(e){var t=this;e.preventDefault();var a=this.references.filter((function(e){return e.id===t.state.id&&null!=e.ref.current&&"cars"===e.obj}));a=a.map((function(e){return e.ref.current.state}));var s=this.references.filter((function(e){return e.id===t.state.id&&null!=e.ref.current&&"inputs"===e.obj}));s=s.map((function(e){return e.ref.current.state})),fetch(b+O+"/owner",{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"http://localhost:5000","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},body:JSON.stringify({id:this.state.id,address:s[0].address,owner:s[0].owner,cars:a})})}},{key:"render",value:function(){var e=this,t=this.state.cars.map((function(t,a){var s=n.a.createRef(),r={obj:"cars",id:e.state.id,ref:s};return e.references.push(r),Object(h.jsxs)("div",{className:"col cars",children:[Object(h.jsx)("button",{value:a,onClick:e.removeCar,className:"delButton",children:"\u274c"}),Object(h.jsx)(p,{ref:s,id:e.state.id,model:t.model,brand:t.brand,color:t.color,year:t.year,image:t.image},"car "+e.state.id+"_"+t.model)]},"div"+e.state.id+"_"+t.model)})),a=n.a.createRef(),s={obj:"inputs",id:this.state.id,ref:a};return this.references.push(s),Object(h.jsxs)("form",{id:this.state.id,className:"Form",onSubmit:this.save,children:[Object(h.jsx)("button",{className:"delButton",onClick:this.delete,children:"\u274c"},"delButton_"+this.state.index),Object(h.jsx)(j,{ref:a,id:this.state.id,owner:this.state.owner,address:this.state.address},this.state.owner+this.index),Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"cars "}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:t})}),Object(h.jsx)("button",{onClick:this.addNewCar,className:"addCar",children:"\u2795"})]}),Object(h.jsx)("input",{className:"saveButon",type:"submit",value:"save"})]},this.state.index)}}]),a}(n.a.Component),m="http://localhost:3000",f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SERVER:"http://localhost:3000"}).API?Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SERVER:"http://localhost:3000"}).API:"/api",C=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},s.childRefs=[],s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(m+f+"/owner"),fetch(m+f+"/owner",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"create",value:function(e){fetch(m+f+"/owner",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},body:JSON.stringify({address:"your address",owner:"your name",cars:[]})}),window.location.reload(!1)}},{key:"update",value:function(e){}},{key:"delete",value:function(e){fetch(m+f+"/owner",{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({address:this.state.items.address,owner:this.state.items.owner,cars:this.state.items.cars})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,s=t.isLoaded,r=t.items;if(a)return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{children:["server = ","http://localhost:3000"," "]})," Error: ",a.message,";"]});if(s){var i=this.state.items.map((function(t,a,s){s.index=a;var i=n.a.createRef(),o={owner:r.id,ref:i};return e.childRefs.push(o),Object(h.jsx)(v,{ref:i,index:a,id:t.id,owner:t.owner,address:t.address,cars:t.cars},"owner"+a)}));return Object(h.jsxs)("div",{className:"app",children:[i,Object(h.jsx)("button",{className:"addForm",onClick:this.create,children:"\u2795"})]})}return Object(h.jsx)("div",{className:"d-flex justify-content-center",children:Object(h.jsx)("div",{className:"spinner-border",role:"status",children:Object(h.jsx)("span",{className:"sr-only",children:"Loading..."})})})}}]),a}(n.a.Component),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),S()}},[[17,1,2]]]);
//# sourceMappingURL=main.3fd3d548.chunk.js.map