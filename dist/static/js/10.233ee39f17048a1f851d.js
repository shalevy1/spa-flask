webpackJsonp([10],{nQFy:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("mvHQ"),i=e.n(n),a=e("OLUw"),r={name:"MatchTest",data:function(){return{pageHead:"Matching",tableItems:null,stringItems:null,matchNumber:6,buttons:[],pressedBtn:[],showTest:!1,answerCount:null,answerMax:6,time:6e4,clock:null,socket:null}},methods:{createMatch:function(){this.buttons=[];var t=this.shuffle(this.tableItems).slice(0,this.matchNumber);for(var s in t)this.buttons.push({caption:t[s].English,state:!1,disabled:!1,variant:"outline-prime",name:t[s].English},{caption:t[s].Chinese,state:!1,disabled:!1,variant:"outline-prime",name:t[s].English});this.showTest=!0,this.answerCount=0,this.setCountdown()},connectSocket:function(){this.socket.emit("new",{msg:"ready"})},disconnectSocket:function(){this.socket.close()},clearSync:function(){for(var t in this.buttons)this.buttons[t].state=!1},deleteButtons:function(t){var s=[];for(var e in this.buttons)this.buttons[e].name!==t&&s.push(this.buttons[e]);this.answerMax+=1;var n=this.shuffle(this.tableItems)[0];s.push({caption:n.English,state:!1,disabled:!1,variant:"outline-prime",name:n.English},{caption:n.Chinese,state:!1,disabled:!1,variant:"outline-prime",name:n.English}),this.buttons=s},markButtons:function(t){for(var s in this.buttons)this.buttons[s].name===t&&(this.buttons[s].variant="warn",this.buttons[s].disabled=!0)},resetGame:function(){clearInterval(this.clock),this.clock=null,this.pressedBtn=[],this.buttons=[],this.time=6e4,this.answerCount=null,this.answerMax=6,this.showTest=!1},setCountdown:function(){this.time=6e4;var t=this;this.clock=setInterval(function(){t.time<=0?t.resetGame():t.time-=1e3},1e3)},shuffle:function(t){for(var s=t.length-1;s>0;s--){var e=Math.floor(Math.random()*(s+1)),n=[t[e],t[s]];t[s]=n[0],t[e]=n[1]}return t}},watch:{pressedBtn:function(){this.pressedBtn.length>1&&(this.pressedBtn[0]===this.pressedBtn[1]?(this.clearSync(),this.deleteButtons(this.pressedBtn[0]),this.pressedBtn=[],this.answerCount+=1):(this.time-=5e3,this.pressedBtn=[],this.clearSync()))}},created:function(){this.tableItems=this.$store.getters.makeList,this.stringItems=i()(this.tableItems),this.socket=Object(a.a)()},beforeDestroy:function(){var t=this.$store.state.userProfile;this.socket.emit("offline",{username:t.username,studentID:t.studentID}),this.socket.close()}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("b-container",[e("b-card",{staticClass:"my-2"},[e("h2",[t._v("\n        "+t._s(t.pageHead)+"\n      ")])])],1),t._v(" "),e("b-container",[t.showTest?t._e():e("b-card",{staticClass:"my-2"},[e("b-button",{on:{click:function(s){return t.createMatch()}}},[t._v("START")]),t._v(" "),e("b-button",{on:{click:function(s){return t.connectSocket()}}},[t._v("CONNECT")]),t._v(" "),e("b-button",{on:{click:function(s){return t.disconnectSocket()}}},[t._v("DISCONNECT")])],1)],1),t._v(" "),e("b-container",[t.showTest?e("b-card",{staticClass:"my-2",attrs:{cols:"10"}},[e("b-row",[e("b-col",{attrs:{cols:"1"}},[e("h4",[t._v(t._s(t.answerCount))])]),t._v(" "),e("b-col",{staticClass:"mt-1",attrs:{cols:"11"}},[e("b-progress",{staticStyle:{height:"30px"},attrs:{value:t.answerCount,max:t.answerMax,animated:""}})],1)],1),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"1"}},[e("h4",[t._v(t._s(t.time/1e3))])]),t._v(" "),e("b-col",{staticClass:"mt-1",attrs:{cols:"11"}},[e("b-progress",{staticStyle:{height:"30px"},attrs:{value:t.time,max:"60000",animated:"",variant:"danger"}})],1)],1)],1):t._e()],1),t._v(" "),e("b-container",[e("b-card",t._l(t.buttons,function(s,n){return e("div",{key:n,staticClass:"d-inline"},[e("b-button",{staticClass:"m-2",staticStyle:{width:"300px"},attrs:{pill:"",size:"lg",pressed:s.state,variant:s.variant,disabled:s.disabled,id:s.id},on:{"update:pressed":function(e){return t.$set(s,"state",e)},click:function(e){return t.pressedBtn.push(s.name)}}},[t._v("\n            "+t._s(s.caption)+"\n          ")])],1)}),0)],1)],1)},staticRenderFns:[]};var c=e("VU/8")(r,o,!1,function(t){e("xwY8")},"data-v-087ea96e",null);s.default=c.exports},xwY8:function(t,s){}});
//# sourceMappingURL=10.233ee39f17048a1f851d.js.map