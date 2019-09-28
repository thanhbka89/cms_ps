webpackJsonp([6],{1425:function(t,e,s){s(1476);var a=s(1)(s(1446),s(1494),"data-v-65b595c3",null);t.exports=a.exports},1446:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),i=s.n(a),n=s(9),r=s.n(n),o=s(5),c=s(1500),l=(s.n(c),s(195));e.default={name:"UserDetail",data:function(){return{user_id:this.$route.params.id,user:{}}},computed:{point:function(){return this.user.diem_tich-this.user.diem_tieu},role:function(){return this.user.role===l.a.ROLE_ADMINISTRATOR?"Administrator":this.user.role===l.a.ROLE_EMPLOYEE?"Nhân viên":"Khách hàng"},type:function(){return this.user.type===l.a.TYPE_DIAMOND?"Diamond":this.user.type===l.a.TYPE_VIP?"VIP":this.user.type===l.a.TYPE_LOYAL?"Khách hàng thân thiết":"Khách hàng thông thường"}},created:function(){var t=this;return r()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getUser();case 2:case"end":return e.stop()}},e,t)}))()},methods:{getUser:function(){var t=this;return r()(i.a.mark(function e(){var s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.request("get","/user/action/"+t.user_id);case 3:s=e.sent,s.data.success&&(t.user=s.data.data[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},showToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.$swal({type:t,title:e||"Cập nhật thành công",toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3})}},components:{VueTabs:c.VueTabs,VTab:c.VTab}}},1463:function(t,e,s){e=t.exports=s(1415)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"UserDetail.vue",sourceRoot:""}])},1476:function(t,e,s){var a=s(1463);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(1416)("0f79579e",a,!0)},1494:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("vue-tabs",{attrs:{"active-tab-color":"#9b59b6","active-text-color":"white"}},[s("v-tab",{attrs:{title:"User Profile",icon:"fa fa-user-secret"}},[s("section",{staticClass:"userdetail"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 table-responsive"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("td",{staticClass:"col-md-1"}),t._v(" "),s("td",{staticClass:"col-md-2"},[t._v("Username:")]),t._v(" "),s("td",{staticClass:"col-md-9 text-bold"},[t._v(t._s(this.user.username))])]),t._v(" "),s("tr",[s("td",{staticClass:"col-md-1"}),t._v(" "),s("td",{staticClass:"col-md-2"},[t._v("Họ tên:")]),t._v(" "),s("td",{staticClass:"col-md-9 text-bold"},[t._v(t._s(this.user.fullname))])]),t._v(" "),s("tr",[s("td",{staticClass:"col-md-1"}),t._v(" "),s("td",{staticClass:"col-md-2"},[t._v("Nickname:")]),t._v(" "),s("td",{staticClass:"col-md-9 text-bold"},[t._v(t._s(this.user.nickname))])]),t._v(" "),s("tr",[s("td",{staticClass:"col-md-1"}),t._v(" "),s("td",{staticClass:"col-md-2"},[t._v("Số điện thoại:")]),t._v(" "),s("td",{staticClass:"col-md-9 text-bold"},[t._v(t._s(this.user.phone))])]),t._v(" "),s("tr",[s("td",{staticClass:"col-md-1"}),t._v(" "),s("td",{staticClass:"col-md-2"},[t._v("Địa chỉ:")]),t._v(" "),s("td",{staticClass:"col-md-9 text-bold"},[t._v(t._s(this.user.address))])]),t._v(" "),s("tr",[s("td",{staticClass:"col-md-1"}),t._v(" "),s("td",{staticClass:"col-md-2"},[t._v("Khách hàng:")]),t._v(" "),s("td",{staticClass:"col-md-9 text-bold"},[t._v(t._s(t.type))])]),t._v(" "),s("tr",[s("td",{staticClass:"col-md-1"}),t._v(" "),s("td",{staticClass:"col-md-2"},[t._v("Vai trò:")]),t._v(" "),s("td",{staticClass:"col-md-9 text-bold"},[t._v(t._s(t.role))])]),t._v(" "),s("tr",[s("td",{staticClass:"col-md-1"}),t._v(" "),s("td",{staticClass:"col-md-2"},[t._v("Ngày tạo:")]),t._v(" "),s("td",{staticClass:"col-md-9 text-bold"},[t._v(t._s(this.user.created_by)+" - "+t._s(t._f("fDateTime")(this.user.created_at)))])]),t._v(" "),s("tr",[s("td",{staticClass:"col-md-1"}),t._v(" "),s("td",{staticClass:"col-md-2"},[t._v("Ngày cập nhật:")]),t._v(" "),s("td",{staticClass:"col-md-9 text-bold"},[t._v(t._s(this.user.updated_by)+" - "+t._s(t._f("fDateTime")(this.user.updated_at)))])])])])])])])]),t._v(" "),s("v-tab",{attrs:{title:"Point",icon:"fa fa-money"}},[t._v("\n          Số phút đã tích được: "),s("span",{staticClass:"text-bold"},[t._v(t._s(t.point))])]),t._v(" "),s("v-tab",{attrs:{title:"History",icon:"fa fa-history"}},[t._v("\n          Lịch sử của người chơi "),s("span",{staticClass:"text-bold"},[t._v(t._s(this.user.username))])])],1)],1)])])},staticRenderFns:[]}},1500:function(t,e,s){/*!
 * vue-nav-tabs v0.5.7
 * (c) 2018-present cristij <joracristi@gmail.com>
 * Released under the MIT License.
 */
!function(t,s){s(e)}(0,function(t){"use strict";var e=/^(attrs|props|on|nativeOn|class|style|hook)$/,s=function(t){return t.reduce(function(t,s){var a,i,n,r,o;for(n in s)if(a=t[n],i=s[n],a&&e.test(n))if("class"===n&&("string"==typeof a&&(o=a,t[n]=a={},a[o]=!0),"string"==typeof i&&(o=i,s[n]=i={},i[o]=!0)),"on"===n||"nativeOn"===n||"hook"===n)for(r in i)a[r]=function(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}(a[r],i[r]);else if(Array.isArray(a))t[n]=a.concat(i);else if(Array.isArray(i))t[n]=[a].concat(i);else for(r in i)a[r]=i[r];else t[n]=s[n];return t},{})},a={name:"vue-tabs",props:{activeTabColor:String,activeTextColor:String,disabledColor:String,disabledTextColor:String,textPosition:{type:String,default:"center"},type:{type:String,default:"tabs"},direction:{type:String,default:"horizontal"},centered:Boolean,value:[String,Number,Object]},data:function(){return{activeTabIndex:0,tabs:[]}},computed:{isTabShape:function(){return"tabs"===this.type},isStacked:function(){return"vertical"===this.direction},classList:function(){return"nav "+(this.isTabShape?"nav-tabs":"nav-pills")+" "+(this.centered?"nav-justified":"")+" "+(this.isStacked?"nav-stacked":"")},stackedClass:function(){return this.isStacked?"stacked":""},activeTabStyle:function(){return{backgroundColor:this.activeTabColor,color:this.activeTextColor}}},methods:{navigateToTab:function(t,e){this.changeTab(this.activeTabIndex,t,e)},activateTab:function(t){this.activeTabIndex=t;var e=this.tabs[t];e.active=!0,this.$emit("input",e.title)},changeTab:function(t,e,s){var a=this.tabs[t]||{},i=this.tabs[e];i.disabled||(this.activeTabIndex=e,a.active=!1,i.active=!0,this.$emit("input",this.tabs[e].title),this.$emit("tab-change",e,i,a),this.tryChangeRoute(s))},tryChangeRoute:function(t){this.$router&&t&&this.$router.push(t)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);this.tabs.splice(e,0,t)},removeTab:function(t){var e=this.tabs,s=e.indexOf(t);s>-1&&e.splice(s,1)},getTabs:function(){return this.$slots.default?this.$slots.default.filter(function(t){return t.componentOptions}):[]},findTabAndActivate:function(t){var e=this.tabs.findIndex(function(e,s){return e.title===t||s===t});e!==this.activeTabIndex&&(-1!==e?this.changeTab(this.activeTabIndex,e):this.changeTab(this.activeTabIndex,0))},renderTabTitle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",s=this.$createElement;if(0!==this.tabs.length){var a=this.tabs[t],i=a.active,n=a.title,r={color:this.activeTabColor};"center"===e&&(r.color=this.activeTextColor);var o=s("span",{class:"title title_"+e,style:i?r:{}},["center"===e&&this.renderIcon(t),n]);return a.$slots.title?a.$slots.title:a.$scopedSlots.title?a.$scopedSlots.title({active:i,title:n,position:e,icon:a.icon,data:a.tabData}):o}},renderIcon:function(t){var e=this.$createElement;if(0!==this.tabs.length){var s=this.tabs[t],a=s.icon,i=e("i",{class:a},[" "]);return!s.$slots.title&&a?i:void 0}},tabStyles:function(t){return t.disabled?{backgroundColor:this.disabledColor,color:this.disabledTextColor}:{}},renderTabs:function(){var t=this,e=this.$createElement;return this.tabs.map(function(a,i){if(a){var n=a.route,r=(a.id,a.title),o=(a.icon,a.tabId),c=t.activeTabIndex===i;return e("li",s([{attrs:{name:"tab",id:"t-"+o,"aria-selected":c,"aria-controls":"p-"+o,role:"tab"},class:["tab",{active:c},{disabled:a.disabled}],key:r},{on:{click:function(e){for(var s=arguments.length,r=Array(s>1?s-1:0),o=1;o<s;o++)r[o-1]=arguments[o];(function(){return!a.disabled&&t.navigateToTab(i,n)}).apply(void 0,[e].concat(r))}}}]),["top"===t.textPosition&&t.renderTabTitle(i,t.textPosition),e("a",s([{attrs:{href:"#",role:"tab"},style:c?t.activeTabStyle:t.tabStyles(a),class:[{active_tab:c},"tabs__link"]},{on:{click:function(t){for(var e=arguments.length,s=Array(e>1?e-1:0),a=1;a<e;a++)s[a-1]=arguments[a];(function(t){return t.preventDefault(),!1}).apply(void 0,[t].concat(s))}}}]),["center"!==t.textPosition&&!a.$slots.title&&t.renderIcon(i),"center"===t.textPosition&&t.renderTabTitle(i,t.textPosition)]),"bottom"===t.textPosition&&t.renderTabTitle(i,t.textPosition)])}})}},render:function(){var t=arguments[0],e=this.renderTabs();return t("div",{class:["vue-tabs",this.stackedClass]},[t("div",{class:[{"nav-tabs-navigation":!this.isStacked},{"left-vertical-tabs":this.isStacked}]},[t("div",{class:["nav-tabs-wrapper",this.stackedClass]},[t("ul",{class:this.classList,attrs:{role:"tablist"}},[e])])]),t("div",{class:["tab-content",{"right-text-tabs":this.isStacked}]},[this.$slots.default])])},watch:{tabs:function(t){t.length>0&&!this.value&&(t.length<=this.activeTabIndex?this.activateTab(this.activeTabIndex-1):this.activateTab(this.activeTabIndex)),t.length>0&&this.value&&this.findTabAndActivate(this.value)},value:function(t){this.findTabAndActivate(t)}}},i={name:"v-tab",props:{title:{type:String,default:""},icon:{type:String,default:""},tabData:{default:null},beforeChange:{type:Function},id:String,route:{type:[String,Object]},disabled:Boolean,transitionName:String,transitionMode:String},computed:{isValidParent:function(){return"vue-tabs"===this.$parent.$options.name},hash:function(){return"#"+this.id},tabId:function(){return this.id?this.id:this.title}},data:function(){return{active:!1,validationError:null}},mounted:function(){this.$parent.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.$parent.removeTab(this)},render:function(){return(0,arguments[0])("section",{class:"tab-container",attrs:{id:"p-"+this.tabId,"aria-labelledby":"t-"+this.tabId,role:"tabpanel"},directives:[{name:"show",value:this.active}]},[this.$slots.default])}},n={install:function(t){t.component("vue-tabs",a),t.component("v-tab",i)}};"undefined"!=typeof window&&window.Vue&&(window.Vue.use(n),window.VueTabs=n),t.default=n,t.VueTabs=a,t.VTab=i,Object.defineProperty(t,"__esModule",{value:!0})})}});
//# sourceMappingURL=6.dc960ea391db133b6680.js.map