webpackJsonp([4],{"51hp":function(e,s){},dHcL:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=t("OLUw"),n={name:"Match",data:function(){return{s3:"https://vocab-lms.s3-ap-northeast-1.amazonaws.com/public/profiles/",pageHead:"Match Area",username:null,userID:null,onlineUsers:null,socket:null,room:null}},methods:{joinRoom:function(){this.socket.emit("join_room",{room:this.room,username:this.username,userID:this.userID})},startRoom:function(){this.socket.emit("start_room",{room:this.room,username:this.username,userID:this.userID})},sayHi:function(e){this.socket.emit("sayHi",{userID:this.userID,username:this.username,target:e})}},watch:{},created:function(){this.userID=this.$store.state.userProfile.userID,this.username=this.$store.state.userProfile.username,this.socket=Object(o.a)()},beforeDestroy:function(){this.socket.emit("offline",{userProfile:this.$store.state.userProfile}),this.socket.close()},mounted:function(){var e=this;e.socket.on("roomReady",function(s){console.log("roomReady",s),e.room=s.room}),e.socket.on("playerReady",function(s){console.log("roomReady",s),e.room=s.room}),e.socket.on("onlineUsers",function(s){console.log("onlineUsers",s),e.onlineUsers=JSON.parse(s.userList),console.log(e.onlineUsers)}),e.socket.on("sayHi",function(e){console.log(e),alert("Hello, from "+e.sender)})}},r={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("b-container",[t("b-card",{staticClass:"my-2"},[t("h2",[e._v("\n        "+e._s(e.pageHead)+"\n      ")])])],1),e._v(" "),t("b-container",[t("b-list-group",{staticStyle:{"max-width":"300px"}},e._l(e.onlineUsers,function(s,o){return t("b-list-group-item",{key:o,staticClass:"d-flex align-items-center"},[t("b-avatar",{staticClass:"mr-3",attrs:{src:e.s3+s.userID+".jpg",text:s.username[0]}}),e._v(" "),t("span",{staticClass:"mr-auto"},[e._v(e._s(s.username))]),e._v(" "),t("b-button",{on:{click:function(t){return e.sayHi(s.userID)}}},[e._v(" Say Hi ")])],1)}),1)],1)],1)},staticRenderFns:[]};var i=t("VU/8")(n,r,!1,function(e){t("51hp")},"data-v-737f47ef",null);s.default=i.exports}});
//# sourceMappingURL=4.eaa6d58f60d392313200.js.map