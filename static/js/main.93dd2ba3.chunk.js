(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),d=n.n(l),o=(n(13),n(5)),c=n(3),i=n(4),u=n(7),s=n(6),g=(n(14),n(15),function(e){var t=e.text,n=e.checked,a=e.done,l=e.deleteMe,d=e.edit,o=e.dragStart,c=e.dragEnd,i=e.drop;return r.a.createElement("div",{style:n?{color:"#555",opacity:.4}:null,className:"todoWraaper draggable",draggable:"true",onDragStart:o,onDragEnd:c,onDrop:i},r.a.createElement("li",{style:n?{textDecorationLine:"line-through"}:null},t),r.a.createElement("button",{className:"pa2 bg-yellow",onClick:d},r.a.createElement("i",{className:"far fa-edit"})),r.a.createElement("button",{className:"pa2 bg-green",onClick:a},"check"),r.a.createElement("button",{className:"pa2 bg-red",onClick:l},"delete"))}),m=function(e){var t=e.myTodo,n=e.checkHandler,a=e.deleteHandler,l=e.editHandler,d=e.dragStartHandler,o=e.dragEndtHandler,c=e.dropHandler,i=e.dragOverHandler,u=t.map((function(e,t){return r.a.createElement(g,{key:e.todoId,id:e.todoId,text:e.todoText,checked:e.checked,done:function(){return n(e.todoId)},deleteMe:function(t){return a(e.todoId,t)},edit:function(){return l(e.todoId)},dragStart:function(t){return d(t,e.todoId)},dragEnd:function(t){return o(t,e.todoId)},drop:function(t){return c(t,e.todoId)}})}));return r.a.createElement("div",{className:"container ma0.5",onDragOver:i},u)},f=(n(16),n(17),function(e){var t=e.getInput,n=e.addInput,a=e.value,l=e.clear;return r.a.createElement("form",{className:"flex mt2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",value:a,placeholder:"Enter Task",name:"input",onChange:t}),r.a.createElement("input",{type:"submit",onClick:n,className:"submit ml2",value:"Add Me"}),r.a.createElement("button",{className:"pa2 ml2",onClick:l},"Clear"))}),p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"0.5px solid black",height:"20em",width:"450px"}},e.children)},h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).inputHundler=function(t){e.setState({input:t.target.value})},e.addHandler=function(t){t.preventDefault();var n=e.state,a=n.list,r=n.input,l=n.id,d=n.checked;if(0!==r.length){e.setState({id:l+1});var o={todoId:l,todoText:r,checked:d},c=a.concat(o);e.setState({list:c,input:""})}else alert("vid input")},e.checkHandler=function(t){var n=e.state.list.map((function(e){return e.todoId===t&&(e.checked=!e.checked),e}));e.setState({list:n})},e.deleteHandler=function(t,n){n.target.parentElement.classList.add("fall");var a=e.state.list.filter((function(e){return e.todoId!==t}));setTimeout((function(){e.setState({list:a})}),400)},e.editHandler=function(t){var n=e.state.list,a=n.filter((function(e){return e.todoId===t}))[0],r=n.filter((function(e){return e.todoId!==t}));e.setState({input:a.todoText,list:r})},e.dragStartHandler=function(e,t){e.target.classList.add("dragging")},e.dragEndtHandler=function(e,t){e.target.classList.remove("dragging")},e.getDragAfterElement=function(e,t){return Object(o.a)(e.querySelectorAll(".draggable:not(.dragging)")).reduce((function(e,n){var a=n.getBoundingClientRect(),r=t-a.top-a.height/2;return r<0&&r>e.offset?{offset:r,element:n}:e}),{offset:Number.NEGATIVE_INFINITY}).element},e.dragOverHandler=function(t){t.preventDefault();var n=document.querySelector(".container"),a=e.getDragAfterElement(n,t.clientY),r=document.querySelector(".dragging");null==a?n.appendChild(r):n.insertBefore(r,a)},e.dropHandler=function(e,t){},e.clear=function(t){t.preventDefault(),e.setState({list:[],input:""})},e.state={list:[],input:"",id:0,checked:!1},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(p,{className:"scroll"},r.a.createElement(m,{myTodo:this.state.list,checkHandler:this.checkHandler,deleteHandler:this.deleteHandler,editHandler:this.editHandler,dragStartHandler:this.dragStartHandler,dragEndtHandler:this.dragEndtHandler,dropHandler:this.dropHandler,dragOverHandler:this.dragOverHandler})),r.a.createElement(f,{value:this.state.input,addInput:this.addHandler,getInput:this.inputHundler,clear:this.clear}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.93dd2ba3.chunk.js.map