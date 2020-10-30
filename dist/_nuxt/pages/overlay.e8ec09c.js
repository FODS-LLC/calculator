(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{198:function(e,t,o){},199:function(e,t,o){"use strict";o.r(t);var l={props:{fields:{type:Array,default:function(){return[]}},formData:{type:Object,default:function(){}},label:{type:String,default:""}},computed:{computedContainerClasses:function(){return"".concat(this.defaultMargin?"mb-8":""," ").concat(this.containerClasses)}}},n=o(10),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",{staticClass:"mb-4 font-bold text-center text-22 font-nexa-bold sm:text-left"},[e._v("\n    "+e._s(e.label)+"\n  ")]),e._v(" "),o("form",{staticClass:"flex flex-wrap items-end justify-between"},e._l(e.fields,(function(t,l){return o("div",{key:l,staticClass:"w-full md:w-1/2"},["radio"===t.type?o("RadioInput",{attrs:{"init-value":e.formData[t.name],label:t.label,name:t.name,buttons:t.buttons},model:{value:e.formData[t.name],callback:function(o){e.$set(e.formData,t.name,o)},expression:"formData[field.name]"}}):o("Input",{attrs:{"init-value":e.formData[t.name],placeholder:t.placeholder,name:t.name,label:t.label,type:t.type},model:{value:e.formData[t.name],callback:function(o){e.$set(e.formData,t.name,o)},expression:"formData[field.name]"}})],1)})),0)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{RadioInput:o(201).default,Input:o(67).default})},200:function(e,t,o){"use strict";o.r(t);o(32);var l={props:{label:{type:String,default:""},backgroundColor:{type:String,default:"bg-white"},borderColor:{type:String,default:"border-black"},defaultMargin:{type:Boolean,default:!0},containerClasses:{type:String,default:""},click:{type:Function,default:null}},computed:{computedContainerClasses:function(){return"".concat(this.defaultMargin?"mb-8":""," ").concat(this.containerClasses," ").concat(this.backgroundColor," ").concat(this.borderColor)}},methods:{onClick:function(e){this.click?this.click():this.$emit("buttonPress",{event:e,name:this.name})}}},n=o(10),component=Object(n.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("button",{staticClass:"text-center border border-solid w-284 button-border hover:shadow-xl active:shadow h-60 font-nexa-bold",class:this.computedContainerClasses,on:{click:this.onClick}},[this._v("\n  "+this._s(this.label)+"\n")])}),[],!1,null,null,null);t.default=component.exports},201:function(e,t,o){"use strict";o.r(t);o(32);var l={props:{buttons:{type:Array,default:function(){}},name:{type:String,default:""},label:{type:String,default:""},error:{type:String,default:""},defaultMargin:{type:Boolean,default:!0},containerClasses:{type:String,default:""},initValue:{type:String,default:""}},data:function(){return{selected:""}},computed:{computedContainerClasses:function(){return"".concat(this.defaultMargin?"mb-8":""," ").concat(this.containerClasses)}},mounted:function(){this.selected=this.$props.initValue},methods:{onClick:function(e){this.$store.commit("updateField",{field:this.name,value:e.target.value})}}},n=o(10),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"w-full",class:e.computedContainerClasses},[o("p",{staticClass:"block mb-3 font-bold text-center sm:text-left"},[e._v(e._s(e.label)+":")]),e._v(" "),o("div",{staticClass:"flex justify-start space-x-2"},e._l(e.buttons,(function(button,t){return o("div",{key:t,staticClass:"relative"},[o("label",{class:"px-3 rounded-sm duration-100 py-3 font-bold font-nexa-bold cursor-pointer whitespace-no-wrap text-15px hover:bg-dove-gray hover:text-white inline-block "+(e.selected===button.value?"bg-dove-gray text-white":"bg-gray-100 text-input-text-gray"),attrs:{for:button.label}},[o("span",[e._v(e._s(button.label))])]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"hidden",attrs:{id:button.label,type:"radio",name:e.name},domProps:{value:button.value,checked:e._q(e.selected,button.value)},on:{click:e.onClick,change:function(t){e.selected=button.value}}}),e._v(" "),e.error?o("span",{staticClass:"my-1"},[e._v(e._s(e.error))]):e._e()])})),0)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Input:o(67).default})},203:function(e,t,o){"use strict";o.r(t);o(50),o(27),o(20),o(7),o(37);var l=o(26),n=(o(19),o(2));o(32);function r(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={data:function(){return{componentKey:0,action:null,projectRepForm:{formData:{},label:"Project Reciepent",fields:[{type:"text",label:"Name",name:"name",placeholder:"Type Your Name"},{type:"text",label:"Phone Number",name:"phoneNumber",placeholder:"Type Your Phone Number"},{type:"text",label:"Email",name:"email",placeholder:"Type Your Email"},{type:"text",label:"Location",name:"location",placeholder:"Type Your Location"},{type:"text",label:"Company",name:"company",placeholder:"Type Your Name"},{type:"text",label:"Role",name:"role",placeholder:"Type Your Role"}]},salesRepForm:{formData:{},label:"Sales Representative (optional)",fields:[{type:"text",label:"Name",name:"name",placeholder:"Type Your Name"},{type:"text",label:"Phone Number",name:"phoneNumber",placeholder:"Type Your Phone Number"},{type:"text",label:"Email",name:"email",placeholder:"Type Your Email"},{type:"text",label:"Location",name:"location",placeholder:"Type Your Location"},{type:"text",label:"Company",name:"company",placeholder:"Type Your Name"},{type:"text",label:"Role",name:"role",placeholder:"Type Your Role"}]},visible:!1}},mounted:function(){this.$store.state.formData.salesRep&&this.$store.state.formData.salesRep.name&&(this.projectRepForm.formData=this.$store.state.formData.salesRep)},methods:{submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,l,n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o={salesRep:e.salesRepForm.formData,clients:[e.projectRepForm.formData],email:"Email"===e.action},l=e.projectRepForm.formData.name,n=e.$store.state.id||e.$route.query.id,t.prev=3,"Email"!==e.action){t.next=15;break}return t.next=7,e.$axios.put("https://getfods-calculator.herokuapp.com/entries/".concat(n,"/sales"),o);case 7:r=t.sent,data=r.data,console.log(data),e.$swal({title:"Success",icon:"success",text:"Email sent to ".concat(l),toast:!0,confirmButtonColor:"#48bb78",position:"top"}),e.projectRepForm.formData={},e.componentKey+=1,t.next=17;break;case 15:return t.next=17,e.$axios({url:"https://getfods-calculator.herokuapp.com/entries/".concat(n,"/sales"),method:"PUT",responseType:"arraybuffer",data:c({},o)}).then((function(t){var o=new Blob([t.data],{type:"application/pdf"}),l=window.URL.createObjectURL(o),n=window.open(l);n.print(),setTimeout(n.close,150),e.projectRepForm.formData={},e.componentKey+=1}));case 17:t.next=23;break;case 19:t.prev=19,t.t0=t.catch(3),console.log("err",t.t0),e.$swal({title:"Error",icon:"error",text:"Whoops, something went wrong when sending the ".concat(e.action,"."),toast:!0,confirmButtonColor:"red",position:"top"});case 23:case"end":return t.stop()}}),t,null,[[3,19]])})))()},exit:function(){this.visible=!1,this.action=null},open:function(e){this.visible=!0,this.action=e}}},d=(o(205),o(10)),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{attrs:{name:"fade"}},[e.visible?o("div",{staticClass:"fixed inset-0 flex items-center justify-center modal-backdrop bg-modal-background"},[o("div",{staticClass:"flex flex-col items-center w-11/12 overflow-auto bg-white border border-black shadow-2xl modal sm:max-w-screen-sm md:max-w-screen-md h-11/12"},[o("button",{staticClass:"self-end mt-4 mr-4 font-bold bg-white border border-black w-24px text-22",attrs:{type:"button"},on:{click:e.exit}},[e._v("\n          X\n        ")]),e._v(" "),o("div",{staticClass:"flex flex-col w-11/12 m-2"},[o("div",{staticClass:"flex flex-col m-2"},[o("GenericForm",{key:e.componentKey,attrs:{"form-data":e.projectRepForm.formData,label:e.projectRepForm.label,fields:e.projectRepForm.fields,"space-arround":!0}}),e._v(" "),o("GenericForm",{attrs:{"form-data":e.salesRepForm.formData,label:e.salesRepForm.label,fields:e.salesRepForm.fields,"space-arround":!0}}),e._v(" "),o("ButtonComp",{staticClass:"block px-20 py-4 mx-auto mt-3 uppercase",attrs:{label:e.action,"background-color":"bg-energy-yellow","border-color":"border-transparent"},on:{buttonPress:e.submit}})],1)])])]):e._e()]),e._v(" "),o("div",{staticClass:"flex flex-wrap"},[o("ButtonComp",{staticClass:"block px-20 py-4 mx-3 mt-3 uppercase sm:mt-0",attrs:{label:"Print","background-color":"bg-white","border-color":"border-charade"},on:{buttonPress:function(){return e.open("Print")}}}),e._v(" "),e.$store.state.isAuthorized?o("ButtonComp",{staticClass:"block px-20 py-4 mx-auto mt-3 uppercase sm:mt-0",attrs:{label:"Email","background-color":"bg-energy-yellow","border-color":"border-transparent"},on:{buttonPress:function(){return e.open("Email")}}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GenericForm:o(199).default,ButtonComp:o(200).default})},205:function(e,t,o){"use strict";var l=o(198);o.n(l).a},212:function(e,t,o){"use strict";o.r(t);var l={components:{Modal:o(203).default},data:function(){return{projectRepForm:{formData:{},label:"Project Reciepent",fields:[{type:"radio",label:"Entrance Length",name:"entrance_length",buttons:[{label:"35'",value:"35"},{label:"50'",value:"50"},{label:"70'",value:"70"},{label:"100'",value:"100"}]},{type:"text",label:"Install Cost",name:"install_cost",placeholder:"Type ammount (USD)"},{type:"text",label:"Refresh Cost",name:"refresh_cost",placeholder:"Type ammount (USD)"},{type:"radio",label:"Refresh Frequency",name:"refresh_frequency",buttons:[{label:"Monthly",value:"monthly"},{label:"Bi_Monthly",value:"bi_monthly"},{label:"Quarterly",value:"quarterly"}]},{type:"text",label:"Removal Cost",name:"removal_cost",placeholder:"Type ammount (USD)"},{type:"text",label:"Remediation Cost",name:"remediation_cost",placeholder:"Type ammount (USD)"},{type:"text",label:"Length of Project",name:"length_of_project",placeholder:"Type ammount (USD)"}],redirect:"results"},salesRepForm:{formData:{},label:"Sales Representative (optional)",fields:[{type:"radio",label:"Entrance Length",name:"entrance_length",buttons:[{label:"35'",value:"35"},{label:"50'",value:"50"},{label:"70'",value:"70"},{label:"100'",value:"100"}]},{type:"text",label:"Install Cost",name:"install_cost",placeholder:"Type ammount (USD)"},{type:"text",label:"Refresh Cost",name:"refresh_cost",placeholder:"Type ammount (USD)"},{type:"radio",label:"Refresh Frequency",name:"refresh_frequency",buttons:[{label:"Monthly",value:"monthly"},{label:"Bi_Monthly",value:"bi_monthly"},{label:"Quarterly",value:"quarterly"}]},{type:"text",label:"Removal Cost",name:"removal_cost",placeholder:"Type ammount (USD)"},{type:"text",label:"Remediation Cost",name:"remediation_cost",placeholder:"Type ammount (USD)"},{type:"text",label:"Length of Project",name:"length_of_project",placeholder:"Type ammount (USD)"}],redirect:"results"}}},methods:{submit:function(){this.$router.push({path:"input",query:{formData:JSON.stringify(this.Form.formData)}})},exit:function(){this.$router.push({path:"input",query:{}})}}},n=o(10),component=Object(n.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Modal")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Modal:o(203).default})}}]);