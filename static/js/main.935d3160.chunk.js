(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{231:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n),a=o(45),c=o.n(a),i=(o(91),o(85)),l=o(22),s=o(23),d=o(26),u=o(25),p=o(24),h=o(27),m=(o(92),o(93),o(94),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"todo-item",style:this.props.todo.style},r.a.createElement("input",{type:"checkbox",checked:this.props.todo.completed,onChange:function(){return e.props.handleChange(e.props.todo.id)}}),r.a.createElement("p",null,this.props.todo.todo))}}]),t}(r.a.Component)),f=[{id:1,todo:"Do something special",completed:!1},{id:2,todo:"Do something adventurous",completed:!1},{id:3,todo:"Do something dangerous",completed:!1},{id:4,todo:"Do something daily",completed:!1},{id:5,todo:"Do something interesting",completed:!1},{id:6,todo:"Do something different",completed:!1}];function g(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}var b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).state={todo:f},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState((function(t){return{todo:t.todo.map((function(t){return t.id===e?function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?g(o,!0).forEach((function(t){Object(i.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},t,{completed:!t.completed,style:t.completed?null:{color:"green",fontWeight:"bold",textDecoration:"line-through"}}):t}))}})),console.log("updated ",e)}},{key:"render",value:function(){var e=this;var t=new Date,o=this.state.todo.map((function(t){return r.a.createElement(m,{key:t.id,todo:t,handleChange:e.handleChange})}));return r.a.createElement("div",{className:"todo-list"},r.a.createElement("h1",null,"Hi, It is ",t.getHours()%12,"'O clock already! "),o,r.a.createElement("button",{onClick:function(){console.log("Button Clicked")}}," Submit "))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,t,o){e.exports=o(231)},91:function(e,t,o){},92:function(e,t,o){e.exports=o.p+"static/media/logo.25bf045c.svg"},93:function(e,t,o){}},[[86,1,2]]]);
//# sourceMappingURL=main.935d3160.chunk.js.map