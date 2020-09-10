webpackJsonp([11],{dIqY:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"app",data:function(){return{form:{username:"",email:"",password:"",confirm:""},show:!0,waiting:!0}},computed:{validName:function(){return this.form.username.length>2&&this.form.username.length<20},validPass:function(){return this.form.password===this.form.confirm}},methods:{onSubmit:function(t){t.preventDefault(),this.validName&&this.validPass?this.register():alert("form is not complete")},onReset:function(t){var e=this;for(var r in t.preventDefault(),this.form)this.form[r]="";this.show=!1,this.$nextTick(function(){e.show=!0})},register:function(){this.$store.dispatch("register",{userData:this.form}).then(function(){return console.log("registration action")})}}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"register"},[r("b-container",[r("b-row",{staticClass:"mt-5 mx-auto"},[r("b-col",[t.waiting?r("b-card",{attrs:{header:"Register","header-bg-variant":"prime","header-text-variant":"cream","header-tag":"h3"}},[t.show?r("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[r("b-input-group",{staticClass:"my-4",attrs:{label:"Username:","label-for":"exampleInput1"}},[r("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[r("b-icon",{attrs:{icon:"person-fill"}})],1),t._v(" "),r("b-form-input",{attrs:{id:"username",required:"",placeholder:"Enter username"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}}),t._v(" "),r("b-form-invalid-feedback",{attrs:{state:t.validName}},[t._v("\n                Your username must be 3-20 characters long.\n              ")]),t._v(" "),r("b-form-valid-feedback",{attrs:{state:t.validName}},[t._v("\n                Looks Good.\n              ")])],1),t._v(" "),r("b-input-group",{staticClass:"my-4",attrs:{label:"Email address:","label-for":"exampleInput4"}},[r("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[r("b-icon",{attrs:{icon:"envelope"}})],1),t._v(" "),r("b-form-input",{attrs:{type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("b-input-group",{attrs:{id:"password",label:"Password:","label-for":"exampleInput2"}},[r("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[r("b-icon",{attrs:{icon:"lock-fill"}})],1),t._v(" "),r("b-form-input",{attrs:{id:"exampleInput2",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),r("b-input-group",{staticClass:"my-4",attrs:{id:"exampleInputGroup3",label:"Confirm Password:","label-for":"exampleInput3"}},[r("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[r("b-icon",{attrs:{icon:"lock-fill"}})],1),t._v(" "),r("b-form-input",{attrs:{id:"exampleInput3",type:"password",required:""},model:{value:t.form.confirm,callback:function(e){t.$set(t.form,"confirm",e)},expression:"form.confirm"}}),t._v(" "),r("b-form-invalid-feedback",{attrs:{state:t.validPass}},[t._v("\n                You must enter the same password\n              ")])],1),t._v(" "),r("div",{staticClass:"d-flex justify-content-between"},[r("div",[r("button",{staticClass:"buttonDiv bg-second px-3",staticStyle:{width:"140px"},attrs:{type:"submit"}},[r("b-icon-forward",{attrs:{variant:"cream","font-scale":"1.5"}})],1),t._v("\n                \n              "),r("button",{staticClass:"buttonDiv bg-alert px-3",staticStyle:{width:"60px"},attrs:{type:"reset"}},[r("b-icon-x-circle",{attrs:{variant:"cream","font-scale":"1.5"}})],1)])])],1):t._e()],1):r("div",{attrs:{align:"center"}},[r("b-icon",{attrs:{icon:"three-dots",animation:"cylon",variant:"prime","font-scale":"6"}})],1)],1)],1)],1)],1)},staticRenderFns:[]},n=r("VU/8")(a,s,!1,null,null,null);e.default=n.exports}});
//# sourceMappingURL=11.b504158984da11b062f8.js.map