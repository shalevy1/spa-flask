webpackJsonp([7],{iHgM:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"dash",props:{tableItems:Array,type:String},data:function(){return{typeHeaders:{transEng:"E/C",transCh:"C/E",typeTest:"Type",matchTrans:"Match",matchType:"Match"},vocabSet:{generalT:"General Set 4000+ words",generalV:"Vocational Highschool Set",generalW:"Senior High Set A",generalD:"Senior High Set B",generalY:"Senior High Set C",tourism1:"ESP: Tourism Level 1",tourism:"ESP: Tourism Level 2",digital1:"ESP: Digital Media Level 1",culinary1:"ESP: Culinary English Level 1",culinary2:"ESP: Culinary English Level 2"}}},methods:{getClass:function(e){return{strong:"spanDiv bg-safe-light text-prime",good:"spanDiv bg-third text-prime",okay:"spanDiv bg-grey text-prime",weak:"spanDiv bg-warn-light text-prime",problem:"spanDiv bg-alert-light text-prime","not tested":"spanDiv bg-cream text-prime"}[e]},label:function(){return"nav"===this.type?"text-cream":"text-prime"},bar:function(){return"nav"===this.type?"third text-prime":"prime text-cream"}},computed:{currentRecItems:function(){var e=[];for(var t in this.$store.state.currentRecord){var r=0,a=0,s=0,n=this.$store.state.currentRecord[t];for(var i in n)i&&(n[i]<0?a+=1:0===n[i]?s+=1:r+=1);e.push({mode:this.typeHeaders[t],plus:r,minus:a,even:s})}return e},userRecItems:function(){var e={strong:0,good:0,okay:0,weak:0,problem:0,"not tested":0};for(var t in this.tableItems){var r=this.tableItems[t];r.totalScore>=2?e.strong+=1:1===r.totalScore?e.good+=1:0===r.totalScore&&r.tested?e.okay+=1:-1===r.totalScore?e.weak+=1:r.totalScore<=-2?e.problem+=1:e["not tested"]+=1}return e},maxRec:function(){var e=1;for(var t in this.userRecItems)this.userRecItems[t]>e&&"not tested"!==t&&(e=this.userRecItems[t]);return e+1}},created:function(){}},s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"dash"}},["account"!==e.type?r("div",[r("h6",{class:e.label()},[e._v(" This Session:")]),e._v(" "),0===e.currentRecItems.length?r("span",{staticClass:"text-cream"},[e._v(" No new words ")]):e._e(),e._v(" "),e._l(e.currentRecItems,function(t,a){return r("div",{key:a},[r("div",[r("b-progress",{staticClass:"mt-1",staticStyle:{height:"20px"},attrs:{max:"1","show-value":""}},[r("b-progress-bar",{attrs:{value:.2*(t.plus+t.minus+t.even),variant:"second text-cream"}},[r("span",[e._v(" "+e._s(t.mode)+" ")])]),e._v(" "),r("b-progress-bar",{attrs:{value:t.plus,variant:e.bar()}}),e._v(" "),r("b-progress-bar",{attrs:{value:t.even,variant:"smoke text-prime"}}),e._v(" "),r("b-progress-bar",{attrs:{value:t.minus,variant:"warn-light text-prime"}})],1)],1)])}),e._v(" "),r("hr")],2):r("div",{staticClass:"text-prime"},[r("h5",[e._v(" Vocab Set:")]),e._v(" "),r("h6",[e._v(" "+e._s(e.vocabSet[e.$store.state.userProfile.vocab]))]),e._v(" "),r("h6",[e._v(" "+e._s(e.tableItems.length)+" Words")]),e._v(" "),r("hr")]),e._v(" "),r("h6",{class:e.label()},[e._v(" Word Levels:")]),e._v(" "),e._l(e.userRecItems,function(t,a){return r("div",{key:a},[r("div","not tested"!==a?[r("b-progress",{staticClass:"mt-1",staticStyle:{height:"20px",background:"none"},attrs:{max:1.3*e.maxRec,"show-value":""}},[r("b-progress-bar",{attrs:{value:.3*e.maxRec,variant:"second text-cream"}},[r("span",[e._v(" "+e._s(a)+" ")])]),e._v(" "),r("b-progress-bar",{attrs:{value:t,variant:e.getClass(a)}})],1)]:[r("b-progress",{staticClass:"mt-1",staticStyle:{height:"20px",background:"none"},attrs:{max:"1000","show-value":""}},[r("b-progress-bar",{attrs:{value:.3*e.maxRec,variant:"second text-cream"}},[r("span",[e._v(" --- ")])]),e._v(" "),r("b-progress-bar",{attrs:{value:t,variant:e.getClass(a)}})],1)],1)])})],2)},staticRenderFns:[]};var n=r("VU/8")(a,s,!1,function(e){r("owp8")},"data-v-6325ff01",null);t.default=n.exports},owp8:function(e,t){}});
//# sourceMappingURL=7.bbe9df1458d1d367ad01.js.map