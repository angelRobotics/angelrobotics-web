(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"26b0":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[e.loadingSomethingBigger?a("q-linear-progress",{attrs:{indeterminate:"",color:"negative"}}):e._e(),a("breadcrumbs",{attrs:{links:e.links}}),a("q-tabs",{staticClass:"text-black bg-secondary",attrs:{align:"left"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{name:"users",icon:"people",label:"Members"}}),a("q-tab",{attrs:{name:"owner",icon:"supervisor_account",label:"Owner"}}),a("q-tab",{attrs:{name:"facilities",icon:"house",label:"Facilities"}})],1),a("q-tab-panels",{staticClass:"q-ma-none full-width q-pa-none",attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{staticClass:"q-pa-none q-ma-none",attrs:{name:"users"}},[a("organizationMembers",{attrs:{main:e.localmain,immediateMain:e.immediateMain}})],1),a("q-tab-panel",{staticClass:"q-pa-none q-ma-none",attrs:{name:"owner"}},[a("organizationOwner",{attrs:{main:e.localmain,immediateMain:e.immediateMain}})],1),a("q-tab-panel",{staticClass:"q-pa-none q-ma-none",attrs:{name:"facilities"}},[a("facilities",{attrs:{main:e.localmain,immediateMain:e.immediateMain}})],1)],1)],1)},n=[],s=(a("5319"),a("ddb0"),a("2cbd")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"padding bg-grey-1"},[e.rightSideBar?a("rightSideBar",{attrs:{main:e.localmain,objType:"organizationMember"}}):e._e(),a("q-dialog",{attrs:{"transition-show":"rotate","transition-hide":"rotate"},model:{value:e.saveOrganizationMemberDialog,callback:function(t){e.saveOrganizationMemberDialog=t},expression:"saveOrganizationMemberDialog"}},[a("q-card",{staticClass:"q-ma-md"},[a("q-card-section",{staticClass:"bg-secondary text-white text-center"},[a("div",{staticClass:"text-h6"},[e._v(e._s(e.extendedProjectName))]),a("div",{staticClass:"text-caption"},[e._v("Add User to Organization")])]),a("q-card-section",{staticClass:"bg-secondary text-white"},[a("saveOrganizationMember",{attrs:{inside:"true",main:e.localmain,parentMain:e.main}})],1)],1)],1),a("div",{staticClass:"row q-gutter-lg q-ma-none q-pa-none"},[a("cardTotal",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-12 bg-transparent q-ma-none",attrs:{title:"All Members","background-color":"members"===e.activeElement_?"bg-secondary":"bg-primary","icon-name":"person",total:e.numUsers,link:e.allMembersLink}}),a("cardTotal",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-12 bg-transparent q-ma-none",attrs:{title:"Org_Admin","background-color":"org_admin"===e.activeElement_?"bg-secondary":"bg-primary","icon-name":"settings",total:e.numSysAdmins,link:e.orgAdminsLink}})],1),a("q-table",{staticClass:"col",attrs:{title:"Organization Members",dense:"",data:e.allOrgMembers,columns:e.columns,filter:e.filter,"row-key":"index"},on:{"row-click":e.selectUser},scopedSlots:e._u([{key:"top-right",fn:function(){return[a("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[a("q-icon",{attrs:{slot:"append",name:"search"},slot:"append"})],1),a("q-btn",{attrs:{flat:""}},[a("q-icon",{attrs:{color:"primary",name:"refresh",side:""},on:{click:function(t){return e.listOrganizationMembers()}}})],1),a("q-btn",{attrs:{flat:""}},[a("q-icon",{attrs:{color:"primary",name:"add_circle",side:""},on:{click:function(t){e.saveOrganizationMemberDialog=!0}}})],1)]},proxy:!0}])})],1)},o=[],l=(a("cf57"),a("310f")),c=a("46c6"),m=function(){var e=this,t=this,a=t.$createElement,i=t._self._c||a;return i("q-form",{ref:"saveOrganizationMemberForm",staticClass:"q-gutter-md text-white",on:{submit:t.saveOrganizationMember,reset:t.onReset}},[i("q-input",{attrs:{filled:"",type:"text",label:"Organization name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter a name for your organization"}],disable:!0},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.main.currentOrganization.organizationName,callback:function(e){t.$set(t.main.currentOrganization,"organizationName",e)},expression:"main.currentOrganization.organizationName"}}),i("q-input",{attrs:{filled:"",type:"email",label:"email","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter your email address"},function(t){return e.isValidEmail()||"Invalid email address"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("q-select",{attrs:{filled:"",options:t.authorities,label:"Authority","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please select authority"}]},model:{value:t.authority,callback:function(e){t.authority=e},expression:"authority"}}),i("div",[i("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),i("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"white",flat:""}})],1)],1)},g=[];const d=a("1712").to,u=a("20e6"),h=a("c2a1").default,b=a("f392").default;var p={name:"saveOrganizationMember",components:{},props:["main","parentMain"],beforeDestroy(){this.main.loadingSomethingBigger=!1},async created(){h.setSettings({TBURL:u["TB_URL"]}),h.setSettings(u)},data(){return{organizationName:"",email:"",authority:"",authorities:b.ORG}},methods:{submit(){this.$refs.saveOrganizationMemberForm.submit()},isValidEmail(){return h.isValidEmail(this.email)},async saveOrganizationMember(){return h.setSettings({TBURL:u["TB_URL"]}),new Promise((async(e,t)=>{let a=this.organizationName,{email:i,authority:n}=this,s=this.main.currentOrganization.organizationId;this.parentMain.loadingSomethingBigger=!0;let[r,o]=await d(h.saveOrganizationMember({email:i,authority:n,organizationId:s}));if(this.parentMain.loadingSomethingBigger=!1,r){r=r.msg||r.message||r.error||r;try{r=JSON.parse(r)}catch(l){}if("object"===typeof r){let e=Object.keys(r);r=r[e[0]]}return this.$q.notify({type:"negative",message:r}),e(!1)}this.$q.notify({type:"positive",message:`${a} created.`}),this.main.saveOrganizationMemberDialog=!1,this.main.listOrganizationMembers()}))},onReset(){this.organizationName=null}}},z=p,f=a("2877"),O=a("0378"),y=a("27f9"),w=a("ddd8"),v=a("9c40"),M=a("eebe"),q=a.n(M),k=Object(f["a"])(z,m,g,!1,null,null,null),_=k.exports;q()(k,"components",{QForm:O["a"],QInput:y["a"],QSelect:w["a"],QBtn:v["a"]});var I=a("4d6d");const C=a("20e6"),S=a("c2a1").default,x=a("1712").to;var B={name:"organizationMembers",props:["main","immediateMain"],components:{loginForm:l["a"],cardTotal:c["a"],saveOrganizationMember:_,rightSideBar:I["default"]},watch:{$route(e,t){this.setfilters(e.path)}},data(){return{extendedProjectName:"",organizationId:null,currentOrganization:{},orgAdminsLink:"",allMembersLink:"",activeElement_:"",localmain:this,editted:!1,rightSideBar:!1,saveOrganizationMemberDialog:!1,loaded:!0,links:[{label:"Settings",icon:"settings",to:"/system"},{label:"Users",icon:"people",to:"/system/users"}],checkedLoggedIn:!1,loggedIn:!1,listHck:[{name:"Users",icon:"settings",link:"/#/system/users",Authority:"Manage Users and Organizations",description:"Manage Users and Organizations"}],filter:"",columnsHck:[],columns:[{name:"email",label:"Email",field:"email",sortable:!0},{name:"authority",label:"Authority",field:"authority",sortable:!0},{name:"createdAt",label:"Created",field:"createdAt",sortable:!0}],numUsers:0,numSysAdmins:0,numActiveUsers:0,numInactiveUsers:0,numEnabledUsers:0,numDisabledusers:0,allOrgMembers:[],selectedRow:{}}},async created(){S.setVue(this),S.setSettings({TBURL:C["TB_URL"]}),this.extendedProjectName=C["PROJECTEXTENDED"];let e,t,a,i=window.location.hash.replace(/^[#]*[\/]*/,""),n=i.split("/");n&&("organizations"===n[1]&&(e=n[3],t=n[4],a=n[5]||""),this.organizationId=e,this.section=t,this.subsection=a);let s="";s="user"===this.gettingOrganizationFor?`/#/system/organizations/${this.main.selectedRow.userId}/${this.organizationId}/users`:`/#/system/organizations/${n[2]}/${n[3]}/users`,this.allMembersLink=s,this.orgAdminsLink=`${s}/org_admin`,this.setfilters(),await this.organizationOwner(),await this.getCurrentOrganization(),await this.listOrganizationMembers()},methods:{async getCurrentOrganization(){return new Promise((async(e,t)=>{let[a,i]=await x(S.getOrganizationById(this.organizationId));if(a)return e(!1);this.currentOrganization=i,e(!0)}))},async organizationOwner(){return new Promise((async(e,t)=>{let[a,i]=await x(S.getOrganizationById(this.organizationId));if(a)return e(!1);this.currentOrganizationOwner=i,e(!0)}))},async listOrganizationMembers(){await this.organizationOwner(),this.filters||(this.filters={}),this.filters.organizationId=this.organizationId,this.main.loadingSomethingBigger=!0;let[e,t]=await x(S.listOrganizationMembers(this.filters));this.main.loadingSomethingBigger=!1,this.allOrgMembers=t||[],this.allOrgMembers=this.allOrgMembers.map((e=>{try{e.isOwner=e.userId===this.currentOrganizationOwner.userId}catch(t){}return e})),this.numUsers=this.allOrgMembers.length,this.numSysAdmins=this.allOrgMembers.filter((e=>"ORG_ADMIN"===e.authority)).length,this.numActiveUsers=this.allOrgMembers.filter((e=>!0===e.isActive)).length,this.numInactiveUsers=this.allOrgMembers.filter((e=>!1===e.isActive)).length,this.numEnabledUsers=this.allOrgMembers.filter((e=>!0===e.enabled)).length,this.numDisabledusers=this.allOrgMembers.filter((e=>!1===e.enabled)).length},setfilters(e=!1){let t,a,i,n=(e||window.location.hash).replace(/^[#]*[\/]*/,""),s=n.split("/");switch(s&&("organizations"===s[1]&&(t=s[3],a=s[4],i=s[5]||""),this.organizationId=t,this.section=a,this.subsection=i),s[5]){case"org_admin":this.filters={},this.activeElement_="org_admin",this.filters={authority:"ORG_ADMIN"};break;default:this.filters={},this.activeElement_="members"}this.listOrganizationMembers()},selectApplication(e){window.location.assign(e)},gotoPage(e){window.location.assign(e)},selectUser(e,t){this.selectedUser=!0,this.selectedEmail=t.email,this.selectedId="object"===typeof t.id?t.id.id:t.id,this.selecteduserId=t.userId,this.selectedFirstName=t.firstName,this.selectedLastName=t.lastName,this.selectedFullName=`${this.selectedFirstName} ${this.selectedLastName}`,this.selectedIsOwner=t.isOwner,this.selectedOrganizationUserId=t.organizationUserId,this.selectedRow=t,this.rightSideBar=!1,this.$nextTick((()=>this.rightSideBar=!0))}},computed:{activeElement(){return this.activeElement_},cardContainerClass(){if(this.$q.screen.gt.xs)return"grid-masonry grid-masonry--"+(this.$q.screen.gt.sm?"6":"4")}}},U=B,E=a("9989"),A=a("6b1d"),N=a("24e8"),$=a("f09f"),T=a("a370"),L=a("eaac"),Q=a("0016"),P=Object(f["a"])(U,r,o,!1,null,null,null),R=P.exports;q()(P,"components",{QPage:E["a"],QLinearProgress:A["a"],QDialog:N["a"],QCard:$["a"],QCardSection:T["a"],QTable:L["a"],QInput:y["a"],QIcon:Q["a"],QBtn:v["a"]});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"padding"},[a("div",{staticClass:"row q-gutter-lg q-ma-none q-pa-none"},[a("cardTotal",{staticClass:"col-12 col-lg-2 col-md-3 col-sm-12 bg-transparent q-ma-none",attrs:{title:e.currentOrganizationOwner.firstName+" "+e.currentOrganizationOwner.lastName,"background-color":"bg-secondary","icon-name":"person",total:e.currentOrganizationOwner.email,link:e.currentOrganizationOwner.email,smallsize:!0}})],1)])},j=[];const F=a("20e6"),V=a("c2a1").default,J=a("1712").to;var G={name:"organizationOwner",props:["main","immediateMain"],components:{cardTotal:c["a"]},watch:{$route(e,t){this.setfilters(e.path)}},data(){return{currentOrganizationOwner:{}}},async created(){V.setVue(this),V.setSettings({TBURL:F["TB_URL"]});let e,t,a,i=window.location.hash.replace(/^[#]*[\/]*/,""),n=i.split("/");n&&("organizations"===n[1]&&(e=n[3],t=n[4],a=n[5]||""),this.organizationId=e,this.section=t,this.subsection=a),await this.organizationOwner()},methods:{async organizationOwner(){return new Promise((async(e,t)=>{let[a,i]=await J(V.getOrganizationById(this.organizationId));if(a)return e(!1);this.currentOrganizationOwner=i,e(!0)}))}},computed:{activeElement(){return this.activeElement_},cardContainerClass(){if(this.$q.screen.gt.xs)return"grid-masonry grid-masonry--"+(this.$q.screen.gt.sm?"6":"4")}}},H=G,Z=Object(f["a"])(H,D,j,!1,null,null,null),X=Z.exports,K=a("22aa");a("20e6");const W=a("c2a1").default,Y=a("1712").to;var ee={name:"manageOrganization",props:["main"],components:{organizationMembers:R,organizationOwner:X,facilities:K["default"],breadcrumbs:s["a"]},async created(){let e,t,a=window.location.hash.replace(/^[#]*[\/]*/,""),i=a.match(/system\/(organizations)\/[0-9a-z-]+\/([0-9a-z-]+)[\/]*([a-zA-Z]+)/);i&&"organizations"===i[1]&&(e=i[2],t=i[3]),this.organizationId=e,t&&(this.tab=t);let[n,s]=await Y(W.getOrganizationById(this.organizationId));this.links[this.links.length-1].label=s.organizationName},data(){return{tab:"users",immediateMain:this,localmain:this,links:[{label:"Settings",icon:"settings",to:"/system"},{label:("mine"===window.location.hash.split("/")[3]?"My":"All")+" Organizations",icon:"corporate_fare",to:"/"+window.location.hash.split("/").slice(1,4).join("/")},{label:"Selected",icon:"corporate_fare",to:"/system/organizations"}],loadingSomethingBigger:!1}},methods:{setfilters(e){let t,a,i=(e||window.location.hash).replace(/^[#]*[\/]*/,""),n=i.match(/(organizations)\/([0-9a-z-]+)[\/]*([a-zA-Z]+)/);n&&"organizations"===n[1]&&(t=n[2],a=n[3]),a&&(this.tab=a)}},computed:{}},te=ee,ae=a("429bb"),ie=a("7460"),ne=a("adad"),se=a("823b"),re=Object(f["a"])(te,i,n,!1,null,null,null);t["default"]=re.exports;q()(re,"components",{QPage:E["a"],QLinearProgress:A["a"],QTabs:ae["a"],QTab:ie["a"],QTabPanels:ne["a"],QTabPanel:se["a"]})}}]);