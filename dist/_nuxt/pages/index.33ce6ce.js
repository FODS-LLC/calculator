(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(t,e,l){"use strict";l.r(e);var n={props:{fields:{type:Array,default:function(){return[]}},formData:{type:Object,default:function(){}},label:{type:String,default:""}},computed:{computedContainerClasses:function(){return"".concat(this.defaultMargin?"mb-8":""," ").concat(this.containerClasses)}}},o=l(10),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h1",{staticClass:"mb-4 font-bold text-center text-22 font-nexa-bold sm:text-left"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),l("form",{staticClass:"flex flex-wrap items-end justify-between"},t._l(t.fields,(function(e,n){return l("div",{key:n,staticClass:"w-full md:w-1/2"},["radio"===e.type?l("RadioInput",{attrs:{"init-value":t.formData[e.name],label:e.label,name:e.name,buttons:e.buttons},model:{value:t.formData[e.name],callback:function(l){t.$set(t.formData,e.name,l)},expression:"formData[field.name]"}}):l("Input",{attrs:{"init-value":t.formData[e.name],placeholder:e.placeholder,name:e.name,label:e.label,type:e.type},model:{value:t.formData[e.name],callback:function(l){t.$set(t.formData,e.name,l)},expression:"formData[field.name]"}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RadioInput:l(201).default,Input:l(67).default})},200:function(t,e,l){"use strict";l.r(e);l(32);var n={props:{label:{type:String,default:""},backgroundColor:{type:String,default:"bg-white"},borderColor:{type:String,default:"border-black"},defaultMargin:{type:Boolean,default:!0},containerClasses:{type:String,default:""},click:{type:Function,default:null}},computed:{computedContainerClasses:function(){return"".concat(this.defaultMargin?"mb-8":""," ").concat(this.containerClasses," ").concat(this.backgroundColor," ").concat(this.borderColor)}},methods:{onClick:function(t){this.click?this.click():this.$emit("buttonPress",{event:t,name:this.name})}}},o=l(10),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"text-center border border-solid w-284 button-border hover:shadow-xl active:shadow h-60 font-nexa-bold",class:this.computedContainerClasses,on:{click:this.onClick}},[this._v("\n  "+this._s(this.label)+"\n")])}),[],!1,null,null,null);e.default=component.exports},201:function(t,e,l){"use strict";l.r(e);l(32);var n={props:{buttons:{type:Array,default:function(){}},name:{type:String,default:""},label:{type:String,default:""},error:{type:String,default:""},defaultMargin:{type:Boolean,default:!0},containerClasses:{type:String,default:""},initValue:{type:String,default:""}},data:function(){return{selected:""}},computed:{computedContainerClasses:function(){return"".concat(this.defaultMargin?"mb-8":""," ").concat(this.containerClasses)}},mounted:function(){this.selected=this.$props.initValue},methods:{onClick:function(t){this.$store.commit("updateField",{field:this.name,value:t.target.value})}}},o=l(10),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full",class:t.computedContainerClasses},[l("p",{staticClass:"block mb-3 font-bold text-center sm:text-left"},[t._v(t._s(t.label)+":")]),t._v(" "),l("div",{staticClass:"flex justify-start space-x-2"},t._l(t.buttons,(function(button,e){return l("div",{key:e,staticClass:"relative"},[l("label",{class:"px-3 rounded-sm duration-100 py-3 font-bold font-nexa-bold cursor-pointer whitespace-no-wrap text-15px hover:bg-dove-gray hover:text-white inline-block "+(t.selected===button.value?"bg-dove-gray text-white":"bg-gray-100 text-input-text-gray"),attrs:{for:button.label}},[l("span",[t._v(t._s(button.label))])]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"hidden",attrs:{id:button.label,type:"radio",name:t.name},domProps:{value:button.value,checked:t._q(t.selected,button.value)},on:{click:t.onClick,change:function(e){t.selected=button.value}}}),t._v(" "),t.error?l("span",{staticClass:"my-1"},[t._v(t._s(t.error))]):t._e()])})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:l(67).default})},202:function(t,e,l){"use strict";l.r(e);var n={methods:{goToHomePage:function(){this.$router.push({path:"/"})}}},o=l(10),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"grid w-full grid-cols-3 py-5"},[l("img",{staticClass:"col-span-1 mx-2 my-6 w-logo cursor-pointer",attrs:{src:"/logo/FODS-LOG2O.png",alt:"Logo"},on:{click:function(e){return t.goToHomePage()}}}),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"self-center col-span-1 text-center"},[e("h1",{staticClass:"font-bold font-nexa-bold text-mid-grey text-40 sm:text-96"},[this._v("\n      Calculator\n    ")])])}],!1,null,null,null);e.default=component.exports},214:function(t,e,l){"use strict";l.r(e);l(50),l(27),l(20),l(7),l(37);var n=l(26),o=l(199),r=l(200),c=l(202);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{GenericForm:o.default,ButtonComp:r.default,Header:c.default},data:function(){return{Form:{formData:m({},this.$store.state.formData),label:"Input Calculation Values",fields:[{type:"radio",label:"Entrance Length",name:"entrance_length",buttons:[{label:"35'",value:"35"},{label:"50'",value:"50"},{label:"70'",value:"70"},{label:"100'",value:"100"}]},{type:"text",label:"Install Cost",name:"install_cost",placeholder:"Type ammount (USD)"},{type:"text",label:"Refresh Cost",name:"refresh_cost",placeholder:"Type ammount (USD)"},{type:"radio",label:"Refresh Frequency",name:"refresh_frequency",buttons:[{label:"Monthly",value:"monthly",widthClass:"w-22 sm:w-24"},{label:"Bi-Monthly",value:"bi-monthly",widthClass:"w-22 sm:w-24"},{label:"Quarterly",value:"quarterly",widthClass:"w-22 sm:w-24"}]},{type:"text",label:"Removal Cost",name:"removal_cost",placeholder:"Type ammount (USD)"},{type:"text",label:"Remediation Cost",name:"remediation_cost",placeholder:"Type ammount (USD)"},{type:"text",label:"Length of Project",name:"length_of_project",placeholder:"Type months quantity"}],redirect:"results"}}},computed:{image:function(){var t=["/drawings/Yellow Outlines/1x4Y.jpg","/drawings/Yellow Outlines/1x5TY.jpg","/drawings/Yellow Outlines/1X7TY.jpg"],e=this.$store.state.formData.entrance_length;return"70"===e||"50"===e?t[1]:"100"===e?t[2]:t[0]}},methods:{submit:function(){var t=this;this.Form.formData.pdfurl="",this.$store.commit("updateForm",this.Form.formData),this.$axios.post("https://getfods-calculator.herokuapp.com/entries",m({},this.$store.state.formData)).then((function(e){t.$store.commit("setId",e.data.id),t.$router.push({path:"output?id=".concat(t.$store.state.id)})}))}}},h=l(10),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"container mx-auto"},[l("div",{staticClass:"flex flex-col items-center w-10/12 mx-auto"},[l("Header"),t._v(" "),l("div",{staticClass:"pt-2"},[l("div",{staticClass:"pb-4"},[l("div",{staticClass:"flex"},[l("img",{staticClass:"hidden w-1/3 rounded-md h-main-content xl:block",attrs:{src:t.image,alt:"truck"}}),t._v(" "),l("div",{staticClass:"w-full px-8 pt-8 bg-white shadow-xl xl:min-w-600px xxl:max-w-full min-h-main-content"},[l("GenericForm",{attrs:{"form-data":t.Form.formData,label:t.Form.label,fields:t.Form.fields,redirect:t.Form.redirect}})],1)])]),t._v(" "),l("ButtonComp",{staticClass:"block px-20 py-4 mx-auto mt-3 uppercase",attrs:{label:"Calculate","background-color":"bg-energy-yellow","border-color":"border-transparent"},on:{buttonPress:t.submit}})],1)],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:l(202).default,GenericForm:l(199).default,ButtonComp:l(200).default})}}]);