webpackJsonp([19],{uK6g:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("0xDb"),o={name:"app",data:function(){return{s3:"https://vocab-lms.s3-ap-northeast-1.amazonaws.com/public/profiles/",userProfile:null,join:!1,fileData:null,vocabs:[{text:"ESP Tourism",value:"tourism"},{text:"Food Viet",value:"food"}]}},computed:{validName:function(){return this.userProfile.username.length>2&&this.userProfile.username.length<13}},watch:{validName:function(){return this.userProfile.username.length>2&&this.userProfile.username.length<13},alert:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){this.alert&&alert(this.alert,"text")})},methods:{onSubmit:function(e){e.preventDefault(),this.account()},account:function(){console.log(localStorage.imageData),localStorage.imageData?this.userProfile.imageData=JSON.parse(localStorage.imageData):this.userProfile.imageData=null,console.log(this.userProfile),this.$store.dispatch("account",{userData:this.userProfile}).then(function(){return console.log("account action")}),localStorage.removeItem("imageData")},handleFileUpload:function(){Object(a.c)(document.getElementById("file"))}},created:function(){this.userProfile=this.$store.state.userProfile,this.userProfile.imageData="",console.log(this.userProfile)}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[r("b-container",[r("b-row",{staticClass:"mt-3 mx-auto"},[r("b-col",[r("b-card",{attrs:{header:"Account Information","header-bg-variant":"prime","header-text-variant":"cream","header-tag":"h3"}},[r("b-form",{on:{submit:e.onSubmit}},[r("div",{staticClass:"d-flex"},[r("b-col",[r("b-avatar",{attrs:{src:e.s3+e.userProfile.userID+"/avatar.jpg",size:"6rem",text:e.userProfile.username[0]}})],1),e._v(" "),r("b-col",[r("h4",[e._v(" "+e._s(e.userProfile.username)+" ")]),e._v(" "),r("h4",[e._v(" #"+e._s(e.userProfile.userID)+" ")])])],1),e._v(" "),r("br"),e._v(" "),r("b-form-file",{ref:"file",attrs:{accept:"image/*",placeholder:"Change Avatar",type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload()}}}),e._v(" "),r("br"),e._v(" "),r("b-input-group",{staticClass:"my-4",attrs:{label:"Student ID:","label-for":"exampleInput2"}},[r("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[r("b-icon",{attrs:{icon:"person-fill"}})],1),e._v(" "),r("b-form-input",{attrs:{id:"student ID",disabled:"",placeholder:"Student ID (if joining a class)"},model:{value:e.userProfile.username,callback:function(t){e.$set(e.userProfile,"username",t)},expression:"userProfile.username"}})],1),e._v(" "),r("b-input-group",{staticClass:"my-4",attrs:{label:"Email address:","label-for":"exampleInput4"}},[r("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[r("b-icon",{attrs:{icon:"envelope"}})],1),e._v(" "),r("b-form-input",{attrs:{id:"email",required:"",type:"email",placeholder:"Email (required)"},model:{value:e.userProfile.email,callback:function(t){e.$set(e.userProfile,"email",t)},expression:"userProfile.email"}})],1),e._v(" "),e.join?r("div",[r("b-input-group",{staticClass:"my-4",attrs:{label:"Vocab:","label-for":"exampleInput7"}},[r("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[r("b-icon",{attrs:{icon:"card-list"}})],1),e._v(" "),r("b-form-select",{attrs:{id:"vocab",required:"",options:e.vocabs},model:{value:e.userProfile.vocab,callback:function(t){e.$set(e.userProfile,"vocab",t)},expression:"userProfile.vocab"}})],1),e._v(" "),r("b-input-group",{staticClass:"my-4",attrs:{label:"Classroom:","label-for":"exampleInput3"}},[r("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[r("b-icon",{attrs:{icon:"people"}})],1),e._v(" "),r("b-form-input",{attrs:{id:"school",placeholder:"Classroom (provided by your teacher)"},model:{value:e.userProfile.classroom,callback:function(t){e.$set(e.userProfile,"classroom",t)},expression:"userProfile.classroom"}})],1),e._v(" "),r("b-input-group",{staticClass:"my-4",attrs:{label:"Student ID:","label-for":"exampleInput2"}},[r("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[r("b-icon",{attrs:{icon:"grid3x2-gap"}})],1),e._v(" "),r("b-form-input",{attrs:{id:"student ID",placeholder:"Student ID (if joining a class)"},model:{value:e.userProfile.studentID,callback:function(t){e.$set(e.userProfile,"studentID",t)},expression:"userProfile.studentID"}})],1),e._v(" "),r("b-input-group",{staticClass:"my-4",attrs:{label:"School:","label-for":"exampleInput3"}},[r("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[r("b-icon",{attrs:{icon:"geo-alt"}})],1),e._v(" "),r("b-form-input",{attrs:{id:"school",placeholder:"School name (not required)"},model:{value:e.userProfile.school,callback:function(t){e.$set(e.userProfile,"school",t)},expression:"userProfile.school"}})],1)],1):e._e(),e._v(" "),r("div",{staticClass:"d-flex justify-content-between"},[r("div",[r("button",{staticClass:"buttonDiv bg-info px-3",staticStyle:{width:"120px"},attrs:{type:"submit"}},[r("b-icon-forward",{attrs:{variant:"cream","font-scale":"1.5"}})],1)])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},s=r("VU/8")(o,i,!1,null,null,null);t.default=s.exports}});
//# sourceMappingURL=19.0cea52b9a08db17268f5.js.map