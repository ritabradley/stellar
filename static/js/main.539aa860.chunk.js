(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/star.98d7b8e3.svg"},,,function(e,t,n){e.exports=n(26)},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),l=(n(18),n(4)),s=n(5),c=n(10),m=n(6),u=n(11),d=n(7),p=n.n(d),h=function(e){var t=e.onRouteChange;return e.isSignedIn?o.a.createElement("nav",{className:"d-flex justify-content-end nav"},o.a.createElement("p",{onClick:function(){return t("signout")},className:"nav-item p-3 text-light"},"Sign Out")):o.a.createElement("nav",{className:"d-flex justify-content-end nav"},o.a.createElement("p",{onClick:function(){return t("signin")},className:"nav-item p-3 text-light"},"Sign In"),o.a.createElement("p",{onClick:function(){return t("register")},className:"nav-item p-3 orange"},"Register"))},g=n(8),f=n.n(g),b=n(9),E=n.n(b),v=(n(19),function(){return o.a.createElement("div",{className:"m-4 mt-0"},o.a.createElement(f.a,{className:"Tilt rounded shadow",options:{max:75},style:{height:150,width:150}},o.a.createElement("div",{className:"Tilt-inner p-3"},o.a.createElement("img",{className:"logo pt-3",alt:"shooting star logo",src:E.a}))))}),y=(n(20),n(21),function(e){var t=e.onInputChange,n=e.onDetectButtonSubmit;return o.a.createElement("div",null,o.a.createElement("p",{className:"lead text-light"},"Stellar's facial recognition system will detect faces in your photos. Try it out:"),o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("div",{className:"form d-flex justify-content-center w-50 p-4 rounded shadow-lg"},o.a.createElement("input",{className:"image-input border border-light rounded w-50 mr-3",type:"text",onChange:t}),o.a.createElement("button",{className:"btn custom-button detect-button hvr-grow",onClick:n},"Detect"))))}),N=function(e){var t=e.name,n=e.entries;return o.a.createElement("div",null,o.a.createElement("div",{className:"text-light"},o.a.createElement("h4",null,"".concat(t,", your current entry count is..."))),o.a.createElement("div",{className:"text-light"},o.a.createElement("h2",null,n)))},w=(n(22),function(e){var t=e.imageUrl,n=e.box;return o.a.createElement("div",{className:"d-flex justify-content-center m-1"},o.a.createElement("div",{className:"position-absolute mt-2"},o.a.createElement("img",{id:"inputimage",width:"500px",height:"auto",alt:"",src:t}),o.a.createElement("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})))}),x=n(1),C=(n(23),function(e){var t=e.onRouteChange,n=e.loadUser,r=Object(a.useState)(""),i=Object(x.a)(r,2),l=i[0],s=i[1],c=Object(a.useState)(""),m=Object(x.a)(c,2),u=m[0],d=m[1];return o.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},o.a.createElement("div",{className:"py-4 text-center card bg-transparent shadow text-light",style:{width:"18rem"}},o.a.createElement("div",null,o.a.createElement("legend",{className:"display-4 mb-4"},"Sign In"),o.a.createElement("div",{className:"form-group mx-4"},o.a.createElement("label",{htmlFor:"userEmail"},"Email address"),o.a.createElement("input",{onChange:function(e){s(l=e.target.value)},type:"email",className:"form-control",id:"userEmail","aria-describedby":"emailHelp",placeholder:"Enter email",required:!0})),o.a.createElement("div",{className:"form-group mx-4"},o.a.createElement("label",{htmlFor:"userPassword"},"Password"),o.a.createElement("input",{onChange:function(e){d(u=e.target.value)},type:"password",className:"form-control",id:"userPassword",placeholder:"Password",required:!0})),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){fetch("https://sleepy-crag-47754.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:u})}).then(function(e){return e.json()}).then(function(e){e.id&&(n(e),t("home"))})},type:"submit",className:"btn custom-button"},"Sign in")),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return t("register")},type:"button",className:"btn btn-link orange"},"register")))))}),j=(n(24),function(e){var t=e.onRouteChange,n=e.loadUser,r=Object(a.useState)(""),i=Object(x.a)(r,2),l=i[0],s=i[1],c=Object(a.useState)(""),m=Object(x.a)(c,2),u=m[0],d=m[1],p=Object(a.useState)(""),h=Object(x.a)(p,2),g=h[0],f=h[1];return o.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},o.a.createElement("div",{className:"py-4 text-center card bg-transparent shadow text-light",style:{width:"18rem"}},o.a.createElement("div",null,o.a.createElement("legend",{className:"display-4 mb-4"},"Register"),o.a.createElement("div",{className:"form-group mx-4"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{onChange:function(e){s(l=e.target.value)},type:"text",className:"form-control",id:"name",placeholder:"Enter name",required:!0})),o.a.createElement("div",{className:"form-group mx-4"},o.a.createElement("label",{htmlFor:"email"},"Email address"),o.a.createElement("input",{onChange:function(e){d(u=e.target.value)},type:"email",className:"form-control",id:"email",placeholder:"Enter email",required:!0})),o.a.createElement("div",{className:"form-group mx-4"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{onChange:function(e){f(g=e.target.value)},type:"password",className:"form-control",id:"password",placeholder:"Password",required:!0})),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){fetch("https://sleepy-crag-47754.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l,email:u,password:g})}).then(function(e){return e.json()}).then(function(e){e.id&&(n(e),t("home"))})},type:"submit",className:"btn custom-button"},"Register")))))}),S=(n(25),{input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}}),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).onInputChange=function(t){e.setState({input:t.target.value})},e.displayFaceDetectionBox=function(t){e.setState({box:t})},e.calcFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),o=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*o,rightCol:a-t.right_col*a,bottomRow:o-t.bottom_row*o}},e.onDetectButtonSubmit=function(){var t=e.state.input,n=e.state.user.id;e.setState({imageUrl:t}),fetch("https://sleepy-crag-47754.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:t})}).then(function(e){return e.json()}).then(function(t){t&&fetch("https://sleepy-crag-47754.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n})}).then(function(e){return e.json()}).then(function(t){e.setState(Object.assign(e.state.user,{entries:t}))}),e.displayFaceDetectionBox(e.calcFaceLocation(t))}).catch(function(e){return console.log(e)})},e.loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.onRouteChange=function(t){"signout"===t?e.setState(S):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=S,e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,r=e.box,i=this.state.user,l=i.name,s=i.entries;return o.a.createElement("div",{className:"App"},o.a.createElement(p.a,{className:"particles",params:{particles:{number:{value:100,density:{enable:!0,value_area:1e3}},line_linked:{enable:!0,opacity:.07},move:{direction:"none",speed:.8},shape:{type:"star"},size:{value:2},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}}),o.a.createElement(h,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement("h1",{className:"title"},"Stellar"),o.a.createElement(N,{name:l,entries:s}),o.a.createElement(y,{onInputChange:this.onInputChange,onDetectButtonSubmit:this.onDetectButtonSubmit}),o.a.createElement(w,{box:r,imageUrl:n})):"signin"===a||"signout"===a?o.a.createElement(C,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):o.a.createElement(j,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.539aa860.chunk.js.map