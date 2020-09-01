webpackJsonp([7],{OAQr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"TransEngMatch",components:{ToolbarMatch:s("LR+Q").default},props:{testType:String,p1:Number,p1name:String,p2:Number,p2name:String,player:String,socket:Object,s3:String},data:function(){return{waiting:0,pageHead:"English --\x3e Chinese",toolbarShow:!0,showToolbar:!0,showAnswers:!1,showTest:!1,showProgress:!0,hover:!1,ready:[],answered:[],answerData:[],filter:null,testItems:[],settings:{},fields:["English","Chinese"],time:null,clock:null,progressValues:{p1:0,p2:0,warn:0}}},methods:{setCountdown:function(){this.time=5e3;var t=this;this.clock=setInterval(function(){0===t.time?(t.disableAll(),t.time-=100):t.time-=100},100)},start:function(){this.showAnswers=!1,this.filter=0,this.answerData=[],this.showTest=!0,this.setCountdown()},readyCheck:function(){if(console.log("length",this.ready,this.ready.length),2===this.ready.length){this.waiting=2;var t=this;setTimeout(function(){t.start(),t.$store.dispatch("testActive"),t.waiting=0,t.ready=[]},3e3)}},recordAnswer:function(t,e,s){var i=t+s,n=s===e;console.log("RESULT",n),this.socket.emit("answer",{room:this.p1,name:t,chinese:e,btnID:i,player:this.player,state:n})},disableAll:function(){var t=this,e=this.testItems[this.filter].English,s=this.testItems[this.filter].Chinese,i=document.getElementsByName(e);for(var n in console.log(i),i)console.log("buttons",n,i[n],this.time),"length"!=n&&(i[n].disabled=!0);setTimeout(function(){t.answered=0,t.answerData.length===t.filter?(t.enterResult(e,s,null,!1),t.time=5e3,t.filterToggle()):console.log("duplicate answer","timeout")},2e3)},disable:function(t,e,s,i,n){var a="bg-"+s,r=document.getElementById(e);i?r.classList.add("text-safe"):r.classList.add("text-alert"),r.classList.add(a),r.disabled=!0;var o=document.getElementsByName(t);if(console.log(o),s===this.player)for(var l=0;l<o.length;l++)o[l].disabled=!0;if(i)for(var h=0;h<o.length;h++)o[h].disabled=!0;if(this.answered+=1,i||this.answered>1){var c=this;setTimeout(function(){c.answered=0,c.answerData.length===c.filter?(c.enterResult(t,n,s,i),c.filterToggle()):console.log("duplicate answer",s)},2e3)}},enterResult:function(t,e,s,i){console.log(i);var n="warn";i&&(n=s);var a={English:t,Chinese:e,_rowVariant:n};this.progressValues[n]+=1,console.log(n,this.progressValues),this.answerData.push(a)},filterToggle:function(){this.filter+1<this.testItems.length?(console.log(this.filter,this.testItems.length),this.filter+=1):(console.log("filterMax"),this.$store.dispatch("testActive"),this.filter=null,this.showTest=!1,this.checkAnswers())},checkAnswers:function(){this.showAnswers=!0},playAudio:function(t){document.getElementById("audio").src=t}},watch:{filter:function(){var t=this.testItems[this.filter];t&&"sdOff"!==this.sound&&this.playAudio(t.sdEn)},hover:function(){if(!0===this.hover){console.log("hover_active");var t=this.testItems[this.filter];this.playAudio(t.sdEn)}}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}},mounted:function(){var t=this;t.socket.on("go",function(e){console.log("roomReady",e,e.testItems.length),t.room=e.room,e.testItems.length>0&&(t.testItems=e.testItems),t.ready.includes(e.player)||(t.ready.push(e.player),console.log(e.player)),t.readyCheck()}),t.socket.on("answer",function(e){t.disable(e.name,e.btnID,e.player,e.state,e.chinese)})}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"TransEng"},[s("audio",{attrs:{id:"audio",autoplay:""}}),t._v(" "),t.showProgress?s("div",{staticClass:"bg-second p-3"},[s("div",{staticClass:"mt-2 bg-third p-2",staticStyle:{height:"100px"},attrs:{align:"center"}},[s("div",{staticStyle:{width:"45%",height:"70px",display:"inline-block"}},[s("b-avatar",{attrs:{src:t.s3+t.p1.toString()+".jpg",size:"72px",badge:t.p1name,"badge-offset":"-0.5em","badge-variant":"p1"}}),t._v(" "),t.ready.includes("p1")?s("b-avatar",{attrs:{icon:"person-check",variant:"safe"}}):t._e()],1),t._v(" "),s("div",{staticStyle:{width:"45%",height:"70px",display:"inline-block"}},[s("b-avatar",{attrs:{src:t.s3+t.p2.toString()+".jpg",size:"72px",badge:t.p2name,"badge-offset":"-0.5em","badge-variant":"p2"}}),t._v(" "),t.ready.includes("p2")?s("b-avatar",{attrs:{icon:"person-check",variant:"safe"}}):t._e()],1)]),t._v(" "),s("div",[s("b-progress",{staticClass:"mt-2",staticStyle:{height:"30px"},attrs:{max:t.testItems.length,"show-value":""}},[s("b-progress-bar",{attrs:{value:t.progressValues.p1,variant:"p1"}}),t._v(" "),s("b-progress-bar",{attrs:{value:t.progressValues.warn,variant:"warn-light"}}),t._v(" "),s("b-progress-bar",{attrs:{value:t.progressValues.p2,variant:"p2"}})],1),t._v(" "),s("br"),t._v(" "),t.time?s("b-progress",{attrs:{value:t.time,max:"5000",animated:"",variant:"alert"}}):t._e()],1)]):t._e(),t._v(" "),s("ToolbarMatch",{attrs:{toolbarShow:t.showTest,p1:t.p1,p2:t.p2,p1name:t.p1name,p2name:t.p2name,socket:t.socket,player:t.player,waiting:t.waiting,showAnswers:t.showAnswers,testType:t.testType},on:{waitUpdate:function(e){t.waiting=1}}}),t._v(" "),t.showTest?s("div",t._l(t.testItems,function(e,i){return s("div",{key:i},[t.testItems.indexOf(e)===t.filter?s("div",{staticClass:"bg-third p-3",class:{active:t.hover},attrs:{align:"center"},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[s("h3",["sdEx"!==t.settings.sound||1==t.hover?s("span",[t._v(" "+t._s(e.English)+" ")]):t._e(),t._v(" "),"sdEx"==t.settings.sound||"sdOn"==t.settings.sound?s("span",[s("b-icon-soundwave")],1):t._e()])]):t._e(),t._v(" "),t.testItems.indexOf(e)===t.filter?s("div",t._l(e.Choices,function(i,n){return s("div",{key:n},[s("button",{staticClass:"answerBtn bg-grey",attrs:{name:e.English,id:e.English+i.Chinese,block:""},on:{click:function(s){return t.recordAnswer(e.English,e.Chinese,i.Chinese)}}},[t._v("\n              "+t._s(i.Chinese)+"\n            ")]),t._v(" "),s("br"),t._v(" "),s("br")])}),0):t._e()])}),0):t._e(),t._v(" "),t.showAnswers?s("div",[s("div",{staticClass:"mt-2"},[s("b-table",{attrs:{striped:"",hover:"",items:t.answerData,fields:t.fields}})],1)]):t._e()],1)},staticRenderFns:[]};var a=s("VU/8")(i,n,!1,function(t){s("wCjG")},"data-v-1328fb90",null);e.default=a.exports},wCjG:function(t,e){}});
//# sourceMappingURL=7.f72a036e03a71405154e.js.map