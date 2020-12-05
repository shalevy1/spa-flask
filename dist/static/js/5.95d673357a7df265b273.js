webpackJsonp([5],{c2yy:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),o=i.n(n),s=i("mvHQ"),a=i.n(s),c=i("0xDb"),r=i("gyMJ"),l={name:"DictPict",props:{s3:String,pictWord:String,pictCh:String,vocabList:String},data:function(){return{imageData:null,msg:"Action Complete",waiting:!1,newWord:{word:this.pictWord,text:null,def:null,chinese:this.pictCh,link:null,code:this.codeGen(),vocab:this.vocabList}}},computed:{pictGet:function(){return console.log("pictGet",this.$store.state.setRecord.dictRecord),this.$store.getters.pictGet},getPict:function(){if("add"===this.newWord.link)return"https://vocab-lms.s3-ap-northeast-1.amazonaws.com/public/add.jpg";if(this.newWord.link){var t=this.s3+this.$store.state.userProfile.userID+"/"+this.newWord.vocab+"/"+this.pictWord+this.newWord.link+".jpg";return console.log(t),t}return"https://vocab-lms.s3-ap-northeast-1.amazonaws.com/public/standin.png"}},methods:{showModal:function(){this.$refs.success.show()},showDelete:function(){this.$refs.delete.show()},hideModal:function(t){"success"===t?this.$refs.success.hide():"cancel"===t?(this.$refs.delete.hide(),this.msg=null):(this.$refs.delete.hide(),this.msg=null,this.deletePict(),this.$emit("pictureFalse"))},deleteAlert:function(){this.msg="Are you you sure you want to delete picture?",this.showDelete()},deletePict:function(){this.$store.dispatch("deletePict",{word:this.pictWord}),console.log(this.pictGet),this.showModal()},onSubmit:function(t){t.preventDefault()},codeGen:function(){var t=new Date,e=t.getMinutes().toString()+t.getSeconds().toString();return console.log(e),e},getText:function(t){return this.pictGet[t]?this.pictGet[t].text:""},handleFileUpload:function(){Object(c.c)(document.getElementById("file"))},saveWord:function(){var t=this;return"null"===localStorage.imageData&&null===this.newWord.link?(alert("please add image"),!1):null===this.newWord.text?(alert("please add sentence"),!1):localStorage.imageData.length<1?void t.$store.dispatch("newPicture",{newWord:a()(t.newWord)}):(this.waiting=!0,Object(r.b)({imageData:localStorage.imageData,wordData:t.newWord,userID:t.$store.state.userProfile.userID}).then(function(e){console.log("response",e.data),localStorage.imageData&&1===e.data.status&&t.$store.dispatch("newPicture",{newWord:a()(t.newWord)}),t.newWord=o()({},e.data.obj),t.waiting=!1,t.msg="New image/sentence added",t.showModal()}).catch(function(e){t.waiting=!1,t.msg="sorry, new image/sentence could not be added",t.showModal(),console.log("Error Registering: ",e)}))}},created:function(){localStorage.imageData=null,this.pictGet[this.pictWord]&&(this.newWord=this.pictGet[this.pictWord],this.newWord.code=this.codeGen())}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dictpict"},[i("div",{staticClass:"bg-safe-light p-2"},[t.waiting?i("div",{attrs:{align:"center"}},[i("h4",{staticClass:"text-prime"},[t._v(" Adding Picture ")]),t._v(" "),i("b-icon",{attrs:{icon:"three-dots",animation:"cylon",variant:"prime","font-scale":"6"}})],1):i("div",[i("b-form",{on:{submit:t.onSubmit}},[i("b-row",[i("b-col",{attrs:{align:"center"}},[t.newWord.link?i("div",[i("b-img",{staticStyle:{"max-height":"200px"},attrs:{thumbnail:"",fluid:"",src:t.getPict,alt:t.pictWord}})],1):t._e(),t._v(" "),i("div",{staticStyle:{"max-width":"250px"},attrs:{align:"left"}},[i("b-form-file",{ref:"file",attrs:{accept:"image/*",placeholder:"",type:"file",id:"file"},on:{change:function(e){return t.handleFileUpload()}}})],1)]),t._v(" "),i("b-col",{attrs:{md:"7"}},[i("b-input-group",{staticClass:"my-2 p-6",attrs:{"label-for":"exampleInput2"}},[i("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[i("b-icon",{attrs:{icon:"filter-left"}})],1),t._v(" "),i("b-form-input",{attrs:{placeholder:"Add Definition / Synonyms",rows:"2"},model:{value:t.newWord.def,callback:function(e){t.$set(t.newWord,"def",e)},expression:"newWord.def"}})],1),t._v(" "),i("b-input-group",{staticClass:"my-2 p-6",attrs:{"label-for":"exampleInput3"}},[i("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[i("b-icon",{attrs:{icon:"filter-left"}})],1),t._v(" "),i("b-form-textarea",{attrs:{placeholder:"Add Sentence",rows:"3"},model:{value:t.newWord.text,callback:function(e){t.$set(t.newWord,"text",e)},expression:"newWord.text"}})],1),t._v(" "),i("div",{staticClass:" mt-2"},[i("button",{staticClass:"buttonDiv bg-success px-3",staticStyle:{width:"120px"},on:{click:function(e){return t.saveWord()}}},[i("b-icon",{attrs:{variant:"cream","font-scale":"1.5",icon:"arrow-up"}}),i("b-icon-card-image",{attrs:{variant:"cream","font-scale":"1.5"}})],1),t._v(" "),t.newWord.link?i("button",{staticClass:"buttonDiv bg-danger px-3",staticStyle:{width:"60px",float:"right"},on:{click:function(e){return t.deleteAlert()}}},[i("b-icon",{attrs:{variant:"cream","font-scale":"1.5",icon:"trash-fill"}})],1):t._e()])],1)],1)],1)],1)]),t._v(" "),i("b-modal",{ref:"success",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Image Adder"}},[i("div",{staticClass:"d-block"},[i("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),i("button",{staticClass:"buttonDiv mt-3 bg-warn text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("success")}}},[t._v("Close")])]),t._v(" "),i("b-modal",{ref:"delete",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Delete Picture"}},[i("div",{staticClass:"d-block"},[i("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),i("button",{staticClass:"buttonDiv mt-3 bg-grey text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("cancel")}}},[t._v("Cancel")]),t._v(" "),i("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("delete")}}},[t._v("Delete")])])],1)},staticRenderFns:[]};var u=i("VU/8")(l,d,!1,function(t){i("xa1t")},"data-v-cbec265c",null);e.default=u.exports},xa1t:function(t,e){}});
//# sourceMappingURL=5.95d673357a7df265b273.js.map