webpackJsonp([1,5],{"7SrL":function(e,s){},HLHQ:function(e,s){},OAQr:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={name:"TransEngMatch",components:{ToolbarMatch:t("LR+Q").default},props:{testType:String,p1:Number,p1name:String,p2:Number,p2name:String,player:String},data:function(){return{waiting:0,pageHead:"English --\x3e Chinese",toolbarShow:!0,showToolbar:!0,hover:!1,showAnswers:!1,ready:[],answered:[],showTest:!1,answerData:[],filter:null,testItems:[],settings:{},fields:["English","Chinese"],clock:null,time:0,socket:this.$store.state.socket,progressValues:{p1:0,p2:0,warn:0}}},methods:{recordAnswer:function(e,s,t){var n=e+t,r=t===s;this.socket.emit("answer",{room:this.p1,name:e,chinese:s,btnID:n,player:this.player,state:r})},filterToggle:function(){this.filter+1<this.testItems.length?(console.log(this.filter,this.testItems.length),this.filter+=1):(console.log("filterMax"),this.$store.dispatch("testActive"),this.filter=null,this.showTest=!1,this.checkAnswers()),this.clock=null,this.time=5e3},disable:function(e,s,t,n,r){var a="btn-"+t,o=document.getElementById(s);o.style.color=n?"green":"red",o.classList.add(a),o.disabled=!0;var i=document.getElementsByName(e);if(console.log(i),t===this.player)for(var l=0;l<i.length;l++)i[l].disabled=!0;if(n)for(var c=0;c<i.length;c++)i[c].disabled=!0;if(this.answered+=1,n||this.answered>1){var h=this;setTimeout(function(){h.answered=0,h.filterToggle(),h.enterResult(e,r,t,n)},2e3)}},start:function(e){this.showAnswers=!1,this.filter=0,this.answerData=[],this.showTest=!0,e&&(this.testItems=e.test,this.settings=JSON.parse(e.settings))},enterResult:function(e,s,t,n){console.log(n);var r="warn";n&&(r=t);var a={English:e,Chinese:s,_rowVariant:r};this.progressValues[rowVariant]+=1,console.log(r,this.progressValues),this.answerData.push(a)},checkAnswers:function(){this.showAnswers=!0,this.$store.dispatch("updateRecord",{mode:"matchTransEng"})},playAudio:function(e){document.getElementById("audio").src=e},readyCheck:function(){if(console.log("length",this.ready,this.ready.length),2===this.ready.length){this.waiting=2;var e=this;setTimeout(function(){e.start(),e.$store.dispatch("testActive"),e.waiting=0,e.ready=[]},3e3)}}},watch:{filter:function(){var e=this.testItems[this.filter];e&&"sdOff"!==this.sound&&this.playAudio(e.sdEn)},hover:function(){if(!0===this.hover){console.log("hover_active");var e=this.testItems[this.filter];this.playAudio(e.sdEn)}}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}},mounted:function(){var e=this;e.socket.on("go",function(s){console.log("roomReady",s,s.testItems.length),e.room=s.room,s.testItems.length>0&&(e.testItems=s.testItems),e.ready.includes(s.player)||(e.ready.push(s.player),console.log(s.player)),e.readyCheck()}),e.socket.on("answer",function(s){e.disable(s.name,s.btnID,s.player,s.state,s.chinese)})}},r={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"TransEng"},[t("audio",{attrs:{id:"audio",autoplay:""}}),e._v(" "),t("ToolbarMatch",{attrs:{toolbarShow:e.showTest,p1:e.p1,p2:e.p2,p1name:e.p1name,p2name:e.p2name,socket:e.socket,player:e.player,waiting:e.waiting,showAnswers:e.showAnswers,testType:e.testType}}),e._v(" "),e.showTest?t("b-card",{staticClass:"mt-2"},[t("b-progress",{staticClass:"mt-2",attrs:{max:e.testItems.length,"show-value":""}},[t("b-progress-bar",{attrs:{value:e.progressValues.p1,variant:"p1"}}),e._v(" "),t("b-progress-bar",{attrs:{value:e.progressValues.warn,variant:"warn-light"}}),e._v(" "),t("b-progress-bar",{attrs:{value:e.progressValues.p2,variant:"p2"}})],1)],1):e._e(),e._v(" "),t("div",[e.showTest?t("b-card",{staticClass:"mt-2"},e._l(e.testItems,function(s,n){return t("div",{key:n},[t("b-row",[t("b-col",[e.testItems.indexOf(s)===e.filter?t("b-card",{class:{active:e.hover},attrs:{align:"center"},on:{mouseover:function(s){e.hover=!0},mouseleave:function(s){e.hover=!1}}},[t("h3",["sdEx"!==e.settings.sound||1==e.hover?t("span",[e._v(" "+e._s(s.English)+" ")]):e._e(),e._v(" "),"sdEx"==e.settings.sound||"sdOn"==e.settings.sound?t("span",[t("b-icon-soundwave")],1):e._e()])]):e._e()],1)],1),e._v(" "),t("b-row",[t("b-col",[e.testItems.indexOf(s)===e.filter?t("b-card",e._l(s.Choices,function(n,r){return t("div",{key:r},[t("b-button",{attrs:{name:s.English,id:s.English+n.Chinese,variant:"safe",block:""},on:{click:function(t){return e.recordAnswer(s.English,s.Chinese,n.Chinese)}}},[e._v("\n                  "+e._s(n.Chinese)+"\n                ")]),e._v(" "),t("br"),e._v(" "),t("br")],1)}),0):e._e()],1)],1)],1)}),0):e._e()],1),e._v(" "),e.showAnswers?t("div",[t("b-card",{staticClass:"mt-2"},[t("b-table",{attrs:{striped:"",hover:"",items:e.answerData,fields:e.fields}})],1)],1):e._e()],1)},staticRenderFns:[]};var a=t("VU/8")(n,r,!1,function(e){t("HLHQ")},"data-v-61ac2fe2",null);s.default=a.exports},dHcL:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t("mvHQ"),r=t.n(n),a={name:"Match",components:{TransEngMatch:t("OAQr").default},data:function(){return{s3:"https://vocab-lms.s3-ap-northeast-1.amazonaws.com/public/profiles/",pageHead:"Match Area",username:null,userID:null,onlineUsers:{},userList:[],challengeUsers:{},challengeList:[],socket:null,testType:null,p1:null,p2:null,p1name:null,p2name:null,player:null}},methods:{joinRoom:function(){this.socket.emit("join_room",{room:this.room,username:this.username,userID:this.userID})},startRoom:function(){this.socket.emit("start_room",{room:this.room,username:this.username,userID:this.userID})},sayHi:function(e){this.socket.emit("sayHi",{userID:this.userID,username:this.username,target:e})},challenge:function(e,s){this.socket.emit("challenge",{userID:this.userID,username:this.username,target:e,mode:s})},declineChallenge:function(e){console.log("sid",e,this.challengeUsers);var s={};for(var t in this.challengeUsers)console.log(t,e),parseInt(t)!==e&&(s[t]=this.challengeUsers[t]);this.challengeUsers=s,console.log("change",this.challengeUsers)},acceptChallenge:function(e,s,t){this.socket.emit("accept",{p2:this.userID,p2name:this.username,p1:e,p1name:s,mode:t})}},watch:{onlineUsers:function(){for(var e in this.userList=[],this.onlineUsers)this.userList.push(this.onlineUsers[e].userID);console.log(this.userList)},challengeUsers:function(){for(var e in this.challengeList=[],this.challengeUsers)this.challengeList.push(this.challengeUsers[e].userID);console.log(this.challengeList)}},created:function(){if(!this.$store.getters.isAuthenticated)return this.$router.push("login"),!1;this.userID=this.$store.state.userProfile.userID,this.username=this.$store.state.userProfile.username,console.log("opening new SOCKET"),this.$store.dispatch("openSocket"),this.socket=this.$store.state.socket},beforeDestroy:function(){this.socket.emit("offline",{userProfile:this.$store.state.userProfile}),this.socket.close()},mounted:function(){var e=this;e.socket.on("onlineUsers",function(s){console.log("onlineUsers",s),e.onlineUsers=JSON.parse(s.userList),console.log(e.onlineUsers)}),e.socket.on("sayHi",function(e){console.log(e),alert("Hello, from "+e.sender)}),e.socket.on("disconnect",function(e){console.log("disconnect")}),e.socket.on("challenge",function(s){console.log("challenge",s);var t={sender:s.sender,mode:s.mode,userID:s.userID};for(var n in e.challengeUsers)if(console.log(e.challengeUsers[n],t),e.challengeUsers[n].userID===t.userID)return console.log("found"),!1;e.challengeUsers[t.userID]=t,e.challengeUsers=JSON.parse(r()(e.challengeUsers)),console.log(e.challengeUsers,e.challengeList)}),e.socket.on("start",function(s){console.log("start",s),e.testType=s.mode,e.p1=s.p1,e.p1name=s.p1name,e.p2=s.p2,e.p2name=s.p2name,e.p1===e.$store.state.userProfile.userID?e.player="p1":e.player="p2",console.log("player",e.player)})}},o={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",["TransEng"===e.testType?t("TransEngMatch",{attrs:{testType:e.testType,p1:e.p1,p2:e.p2,p1name:e.p1name,p2name:e.p2name,player:e.player}}):e._e(),e._v(" "),null===e.testType?t("b-container",[t("div",{staticClass:"mt-2 bg-secondary p-2"},[t("h2",{staticClass:"text-sand",attrs:{align:"center"}},[e._v("\n            Online Area\n          ")])]),e._v(" "),t("div",[t("h3",[e._v(" Friends Online  ")]),e._v(" "),t("b-list-group",e._l(e.onlineUsers,function(s,n){return t("div",{key:n},[e.challengeList.includes(s.userID)?e._e():t("b-list-group-item",{staticClass:"d-flex align-items-center"},[t("b-avatar",{staticClass:"mr-3",attrs:{src:e.s3+s.userID+".jpg",text:s.username[0]}}),e._v(" "),t("span",{staticClass:"mr-auto"},[e._v(e._s(s.username))]),e._v(" "),s.userID!==e.userID?t("div",[t("b-button",{on:{click:function(t){return e.sayHi(s.userID)}}},[e._v(" Say Hi ")]),e._v(" "),t("b-button",{on:{click:function(t){return e.challenge(s.userID,"TransEng")}}},[e._v(" TransEng Match ")])],1):e._e()],1)],1)}),0)],1),e._v(" "),t("div",[t("h3",[e._v(" Challengers ")]),e._v(" "),t("b-list-group",e._l(e.challengeUsers,function(s,n){return t("div",{key:n},[e.userList.includes(s.userID)?t("b-list-group-item",{staticClass:"d-flex align-items-center"},[t("b-avatar",{staticClass:"mr-3",attrs:{id:n,src:e.s3+s.userID+".jpg",text:s.sender[0]}}),e._v(" "),t("span",{staticClass:"mr-auto"},[e._v(e._s(s.sender))]),e._v(" "),t("span",{staticClass:"mr-auto"},[e._v(e._s(s.mode))]),e._v(" "),t("b-button",{on:{click:function(t){return e.acceptChallenge(s.userID,s.sender,s.mode)}}},[e._v(" Accept ")]),e._v(" "),t("b-button",{on:{click:function(t){return e.declineChallenge(s.userID)}}},[e._v(" Decline ")])],1):e._e()],1)}),0)],1)]):e._e()],1)},staticRenderFns:[]};var i=t("VU/8")(a,o,!1,function(e){t("7SrL")},"data-v-fcd6aa5a",null);s.default=i.exports}});
//# sourceMappingURL=1.56851aa9ec1bfa857bad.js.map