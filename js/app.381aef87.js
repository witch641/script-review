(()=>{"use strict";var e={6897:(e,t,a)=>{a(3792),a(3362),a(9085),a(9391);var r=a(3751),o=a(641),n={id:"app",class:"app-container"};function i(e,t,a,i,u,s){var d=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.bF)(d,null,{default:(0,o.k6)((function(e){var t=e.Component;return[(0,o.bF)(r.eB,{name:"page",mode:"out-in"},{default:(0,o.k6)((function(){return[((0,o.uX)(),(0,o.Wv)((0,o.$y)(t)))]})),_:2},1024)]})),_:1})])}const u={name:"App"};var s=a(6262);const d=(0,s.A)(u,[["render",i]]),l=d;var c=a(5220),m={class:"home"},p={class:"actions"};function f(e,t,a,n,i,u){var s=(0,o.g2)("SearchBar"),d=(0,o.g2)("AddRecordForm"),l=(0,o.g2)("GameRecord");return(0,o.uX)(),(0,o.CE)("div",m,[t[3]||(t[3]=(0,o.Lk)("div",{class:"title-container"},[(0,o.Lk)("h1",{class:"title"},"剧本杀复盘记录"),(0,o.Lk)("div",{class:"title-decoration"})],-1)),(0,o.bF)(r.eB,{name:"fade"},{default:(0,o.k6)((function(){return[(0,o.bF)(s,{onSearch:u.handleSearch,class:"search-section"},null,8,["onSearch"])]})),_:1}),(0,o.Lk)("div",p,[(0,o.Lk)("button",{class:"add-btn",onClick:t[0]||(t[0]=function(e){return i.showAddForm=!0})},t[2]||(t[2]=[(0,o.Lk)("span",{class:"btn-icon"},"+",-1),(0,o.Lk)("span",{class:"btn-text"},"添加记录",-1)]))]),(0,o.bF)(r.eB,{name:"fade"},{default:(0,o.k6)((function(){return[i.showAddForm?((0,o.uX)(),(0,o.Wv)(d,{key:0,onClose:t[1]||(t[1]=function(e){return i.showAddForm=!1})})):(0,o.Q3)("",!0)]})),_:1}),(0,o.bF)(r.F,{name:"slide-up",tag:"div",class:"records-list"},{default:(0,o.k6)((function(){return[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.filteredRecords,(function(e){return(0,o.uX)(),(0,o.Wv)(l,{key:e.id,record:e,onDelete:u.deleteRecord},null,8,["record","onDelete"])})),128))]})),_:1})])}var g=a(8788),h=a(6278),v={class:"search-container"};function k(e,t,a,n,i,u){return(0,o.uX)(),(0,o.CE)("div",v,[(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.searchQuery=e}),onInput:t[1]||(t[1]=function(){return u.handleSearch&&u.handleSearch.apply(u,arguments)}),placeholder:"搜索记录...",class:"search-input"},null,544),[[r.Jo,i.searchQuery]])])}a(6031);const b={name:"SearchBar",data:function(){return{searchQuery:"",debounceTimer:null}},methods:{handleSearch:function(){var e=this;this.debounceTimer&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout((function(){e.$emit("search",e.searchQuery)}),300)}},beforeUnmount:function(){this.debounceTimer&&clearTimeout(this.debounceTimer)}},y=(0,s.A)(b,[["render",k],["__scopeId","data-v-342b4304"]]),L=y;var D=a(33),S={class:"record-card"},R={class:"record-header"},F={class:"game-name"},T={class:"record-field"},w={class:"record-field"},C={class:"record-field"},_={class:"record-field"},A={class:"multiline-text"},I={class:"record-field"},N={class:"multiline-text"},E={class:"record-actions"};function O(e,t,a,r,n,i){return(0,o.uX)(),(0,o.CE)("div",S,[(0,o.Lk)("div",R,[(0,o.Lk)("h3",F,(0,D.v_)(a.record.gameName||"未命名游戏"),1),(0,o.Lk)("span",{class:(0,D.C4)(["mood-tag",i.moodClass])},(0,D.v_)(a.record.mood||"心情无"),3)]),(0,o.Lk)("div",T,[t[2]||(t[2]=(0,o.Lk)("span",{class:"field-label"},"游戏时间：",-1)),(0,o.Lk)("span",null,(0,D.v_)(i.formattedGameTime),1)]),(0,o.Lk)("div",w,[t[3]||(t[3]=(0,o.Lk)("span",{class:"field-label"},"玩家人数：",-1)),(0,o.Lk)("span",null,(0,D.v_)(a.record.playerCount||"无"),1)]),(0,o.Lk)("div",C,[t[4]||(t[4]=(0,o.Lk)("span",{class:"field-label"},"参与者：",-1)),(0,o.Lk)("span",null,(0,D.v_)(a.record.participants||"无"),1)]),(0,o.Lk)("div",_,[t[5]||(t[5]=(0,o.Lk)("span",{class:"field-label"},"关键线索：",-1)),(0,o.Lk)("p",A,(0,D.v_)(a.record.keyPoints||"无"),1)]),(0,o.Lk)("div",I,[t[6]||(t[6]=(0,o.Lk)("span",{class:"field-label"},"复盘总结：",-1)),(0,o.Lk)("p",N,(0,D.v_)(a.record.summary||"无"),1)]),(0,o.Lk)("div",E,[(0,o.Lk)("button",{class:"edit-btn",onClick:t[0]||(t[0]=function(){return i.handleEdit&&i.handleEdit.apply(i,arguments)})},"编辑"),(0,o.Lk)("button",{class:"delete-btn",onClick:t[1]||(t[1]=function(t){return e.$emit("delete",a.record.id)})},"删除")])])}a(4114),a(3288);const $={name:"GameRecord",props:{record:{type:Object,required:!0}},computed:{formattedGameTime:function(){if(!this.record.gameTime)return"无时间";try{var e=new Date(this.record.gameTime);return isNaN(e.getTime())?"无时间":e.toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch(t){return console.error("Date formatting error:",t),"无时间"}},moodClass:function(){var e={开心:"mood-happy",紧张:"mood-nervous",沮丧:"mood-sad",如坐针毡:"mood-anxious",收获颇丰:"mood-fulfilled"};return e[this.record.mood]||"mood-default"}},methods:{handleEdit:function(){this.$router.push("/edit/".concat(this.record.id))}}},x=(0,s.A)($,[["render",O],["__scopeId","data-v-31675c2a"]]),P=x;var J={class:"form-overlay"},U={class:"form-container"},V={class:"form-group"},X={class:"form-group"},Q={class:"form-group"},j={class:"form-group"},q={class:"form-group"},B={class:"form-group"},G={class:"form-group"},W={class:"form-actions"},H={type:"submit",class:"submit-btn"};function M(e,t,a,n,i,u){return(0,o.uX)(),(0,o.CE)("div",J,[(0,o.Lk)("div",U,[(0,o.Lk)("h2",null,(0,D.v_)(u.isEditing?"编辑记录":"添加记录"),1),(0,o.Lk)("form",{onSubmit:t[8]||(t[8]=(0,r.D$)((function(){return u.submitForm&&u.submitForm.apply(u,arguments)}),["prevent"]))},[(0,o.Lk)("div",V,[t[9]||(t[9]=(0,o.Lk)("label",null,"游戏名称：",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.form.gameName=e}),required:""},null,512),[[r.Jo,i.form.gameName]])]),(0,o.Lk)("div",X,[t[10]||(t[10]=(0,o.Lk)("label",null,"游戏时间：",-1)),(0,o.bo)((0,o.Lk)("input",{type:"datetime-local","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.form.gameTime=e}),required:""},null,512),[[r.Jo,i.form.gameTime]])]),(0,o.Lk)("div",Q,[t[12]||(t[12]=(0,o.Lk)("label",null,"心情：",-1)),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.form.mood=e}),required:""},t[11]||(t[11]=[(0,o.Fv)('<option value="" data-v-029bad02>请选择心情</option><option value="开心" data-v-029bad02>开心</option><option value="收获颇丰" data-v-029bad02>收获颇丰</option><option value="紧张" data-v-029bad02>紧张</option><option value="如坐针毡" data-v-029bad02>如坐针毡</option><option value="沮丧" data-v-029bad02>沮丧</option>',6)]),512),[[r.u1,i.form.mood]])]),(0,o.Lk)("div",j,[t[13]||(t[13]=(0,o.Lk)("label",null,"玩家人数：",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.form.players=e}),required:"",min:"1"},null,512),[[r.Jo,i.form.players,void 0,{number:!0}]])]),(0,o.Lk)("div",q,[t[14]||(t[14]=(0,o.Lk)("label",null,"参与者：",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.form.participants=e}),placeholder:"请用逗号分隔多个参与者"},null,512),[[r.Jo,i.form.participants]])]),(0,o.Lk)("div",B,[t[15]||(t[15]=(0,o.Lk)("label",null,"关键线索：",-1)),(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return i.form.keyPoints=e}),rows:"4"},null,512),[[r.Jo,i.form.keyPoints]])]),(0,o.Lk)("div",G,[t[16]||(t[16]=(0,o.Lk)("label",null,"复盘总结：",-1)),(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return i.form.summary=e}),rows:"6"},null,512),[[r.Jo,i.form.summary]])]),(0,o.Lk)("div",W,[(0,o.Lk)("button",H,(0,D.v_)(u.isEditing?"保存记录":"保存"),1),(0,o.Lk)("button",{type:"button",class:"cancel-btn",onClick:t[7]||(t[7]=function(t){return e.$emit("close")})},"取消")])],32)])])}a(4782),a(1688);const z={name:"AddRecordForm",props:{editRecord:{type:Object,default:null}},data:function(){return{form:{gameName:"",gameTime:this.formatDateForInput(new Date),mood:"",players:"",participants:"",keyPoints:"",summary:""}}},computed:{isEditing:function(){return!!this.editRecord}},methods:{formatDateForInput:function(e){return new Date(e).toISOString().slice(0,16)},submitForm:function(){var e=(0,g.A)((0,g.A)({},this.form),{},{gameTime:new Date(this.form.gameTime).toISOString()});this.isEditing?this.$store.commit("updateRecord",(0,g.A)({id:this.editRecord.id},e)):this.$store.commit("addRecord",e),this.$emit("close"),this.resetForm()},resetForm:function(){this.form={gameName:"",gameTime:this.formatDateForInput(new Date),mood:"",players:"",participants:"",keyPoints:"",summary:""}}},created:function(){this.editRecord&&(this.form=(0,g.A)((0,g.A)({},this.editRecord),{},{gameTime:this.formatDateForInput(new Date(this.editRecord.gameTime))}))}},K=(0,s.A)(z,[["render",M],["__scopeId","data-v-029bad02"]]),Y=K,Z={name:"HomePage",components:{SearchBar:L,GameRecord:P,AddRecordForm:Y},data:function(){return{showAddForm:!1}},computed:(0,g.A)({},(0,h.L8)(["filteredRecords"])),methods:{handleSearch:function(e){this.$store.commit("setSearchQuery",e)},deleteRecord:function(e){this.$store.commit("deleteRecord",e)}}},ee=(0,s.A)(Z,[["render",f],["__scopeId","data-v-7b73f7f5"]]),te=ee;var ae={class:"add-game"};function re(e,t,a,r,n,i){var u=(0,o.g2)("GameForm");return(0,o.uX)(),(0,o.CE)("div",ae,[(0,o.Lk)("h2",null,(0,D.v_)(n.isEditing?"编辑记录":"添加记录"),1),n.formReady?((0,o.uX)(),(0,o.Wv)(u,{key:0,onSubmit:i.handleSubmit,initialData:n.editingRecord},null,8,["onSubmit","initialData"])):(0,o.Q3)("",!0)])}var oe={class:"game-form"},ne={class:"form-group"},ie={class:"form-group"},ue={class:"form-group"},se={class:"form-group"},de={class:"form-group"},le={class:"form-group"},ce={class:"form-group"},me={type:"submit"};function pe(e,t,a,n,i,u){return(0,o.uX)(),(0,o.CE)("div",oe,[(0,o.Lk)("form",{onSubmit:t[7]||(t[7]=(0,r.D$)((function(){return u.submitForm&&u.submitForm.apply(u,arguments)}),["prevent"]))},[(0,o.Lk)("div",ne,[t[8]||(t[8]=(0,o.Lk)("label",null,"游戏名称",-1)),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.gameData.gameName=e}),required:""},null,512),[[r.Jo,i.gameData.gameName]])]),(0,o.Lk)("div",ie,[t[10]||(t[10]=(0,o.Lk)("label",null,"心情",-1)),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.gameData.mood=e})},t[9]||(t[9]=[(0,o.Lk)("option",null,"开心",-1),(0,o.Lk)("option",null,"紧张",-1),(0,o.Lk)("option",null,"沮丧",-1),(0,o.Lk)("option",null,"如坐针毡",-1),(0,o.Lk)("option",null,"收获颇丰",-1)]),512),[[r.u1,i.gameData.mood]])]),(0,o.Lk)("div",ue,[t[11]||(t[11]=(0,o.Lk)("label",null,"游戏时间",-1)),(0,o.bo)((0,o.Lk)("input",{type:"datetime-local","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.gameData.gameTime=e}),required:""},null,512),[[r.Jo,i.gameData.gameTime]])]),(0,o.Lk)("div",se,[t[12]||(t[12]=(0,o.Lk)("label",null,"玩家人数",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.gameData.playerCount=e}),min:"0",required:""},null,512),[[r.Jo,i.gameData.playerCount,void 0,{number:!0}]])]),(0,o.Lk)("div",de,[t[13]||(t[13]=(0,o.Lk)("label",null,"参与者",-1)),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.gameData.participants=e}),placeholder:"用逗号分隔玩家姓名"},null,512),[[r.Jo,i.gameData.participants]])]),(0,o.Lk)("div",le,[t[14]||(t[14]=(0,o.Lk)("label",null,"关键线索",-1)),(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return i.gameData.keyPoints=e}),rows:"4"},null,512),[[r.Jo,i.gameData.keyPoints]])]),(0,o.Lk)("div",ce,[t[15]||(t[15]=(0,o.Lk)("label",null,"复盘总结",-1)),(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return i.gameData.summary=e}),rows:"4"},null,512),[[r.Jo,i.gameData.summary]])]),(0,o.Lk)("button",me,(0,D.v_)(e.isEditing?"保存记录":"保存"),1)],32)])}a(8706),a(2892),a(8156);const fe={props:{initialData:{type:Object,default:function(){return null}}},data:function(){return{gameData:{gameName:"",mood:"开心",gameTime:this.formatDateForInput(new Date),playerCount:0,participants:"",keyPoints:"",summary:""}}},created:function(){this.initialData&&(this.gameData={gameName:this.initialData.gameName||"",mood:this.initialData.mood||"开心",gameTime:this.formatDateForInput(new Date(this.initialData.gameTime)),playerCount:Number(this.initialData.playerCount)||0,participants:this.initialData.participants||"",keyPoints:this.initialData.keyPoints||"",summary:this.initialData.summary||""})},watch:{initialData:{handler:function(e){e&&(this.gameData={gameName:e.gameName||"",mood:e.mood||"开心",gameTime:this.formatDateForInput(new Date(e.gameTime)),playerCount:Number(e.playerCount)||0,participants:e.participants||"",keyPoints:e.keyPoints||"",summary:e.summary||""})},deep:!0}},methods:{formatDateForInput:function(e){if(!e||isNaN(e.getTime()))return"";var t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0");return"".concat(t,"-").concat(a,"-").concat(r,"T").concat(o,":").concat(n)},submitForm:function(){var e=(0,g.A)((0,g.A)({},this.gameData),{},{playerCount:Number(this.gameData.playerCount)||0,gameTime:new Date(this.gameData.gameTime).toISOString()});this.$emit("submit",e)}}},ge=(0,s.A)(fe,[["render",pe],["__scopeId","data-v-a05b2dfa"]]),he=ge,ve={components:{GameForm:he},data:function(){return{editingRecord:null,isEditing:!1,formReady:!1}},created:function(){var e=this.$route.params.id;!e||(this.isEditing=!0,this.editingRecord=this.$store.getters.getRecordById(e),this.editingRecord)?this.formReady=!0:this.$router.push("/")},methods:{handleSubmit:function(e){this.isEditing?this.$store.dispatch("updateRecord",(0,g.A)((0,g.A)({},e),{},{id:this.$route.params.id})):this.$store.commit("addRecord",e),this.$router.push("/")}}},ke=(0,s.A)(ve,[["render",re],["__scopeId","data-v-0a7b49a4"]]),be=ke;var ye=[{path:"/",name:"home",component:te},{path:"/edit/:id",name:"edit",component:be}],Le=(0,c.aE)({history:(0,c.LA)("/script-review/"),routes:ye});const De=Le;a(6918),a(2008),a(113),a(8980),a(4423),a(2062),a(5086),a(4554),a(9089),a(739),a(3110),a(9432),a(6099),a(8781),a(1699),a(8992),a(4520),a(2577),a(1454),a(7550);var Se=localStorage.getItem("gameRecords"),Re=Se?JSON.parse(Se):[];const Fe=(0,h.y$)({state:{records:Re,searchQuery:""},getters:{filteredRecords:function(e){var t,a=(null===(t=e.searchQuery)||void 0===t?void 0:t.toLowerCase())||"";return a?e.records.filter((function(e){var t=[String(e.gameName||""),String(e.mood||""),String(e.players||""),String(e.participants||""),String(e.keyPoints||""),String(e.summary||"")].map((function(e){return e.toLowerCase()}));return t.some((function(e){return e.includes(a)}))})):e.records},getRecordById:function(e){return function(t){return e.records.find((function(e){return String(e.id)===String(t)}))||null}}},mutations:{setSearchQuery:function(e,t){e.searchQuery=t||""},addRecord:function(e,t){var a=(0,g.A)({id:Date.now().toString(),gameTime:(new Date).toISOString(),gameName:t.gameName||"",mood:t.mood||"",playerCount:t.playerCount||0,participants:t.participants||"",keyPoints:t.keyPoints||"",summary:t.summary||""},t);e.records.push(a),localStorage.setItem("gameRecords",JSON.stringify(e.records))},deleteRecord:function(e,t){var a=e.records.findIndex((function(e){return e.id===t}));-1!==a&&(e.records.splice(a,1),localStorage.setItem("gameRecords",JSON.stringify(e.records)))},updateRecord:function(e,t){var a=e.records.findIndex((function(e){return e.id===t.id}));-1!==a&&(e.records[a]=(0,g.A)((0,g.A)({},e.records[a]),t),localStorage.setItem("gameRecords",JSON.stringify(e.records)))}},actions:{updateRecord:function(e,t){var a=e.commit;a("updateRecord",t)}}});var Te=(0,r.Ef)(l);Te.use(Fe),Te.use(De),Te.mount("#app")}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,r,o,n)=>{if(!r){var i=1/0;for(l=0;l<e.length;l++){for(var[r,o,n]=e[l],u=!0,s=0;s<r.length;s++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(u=!1,n<i&&(i=n));if(u){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[r,o,n]}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={524:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[i,u,s]=r,d=0;if(i.some((t=>0!==e[t]))){for(o in u)a.o(u,o)&&(a.m[o]=u[o]);if(s)var l=s(a)}for(t&&t(r);d<i.length;d++)n=i[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(l)},r=self["webpackChunkscript_review"]=self["webpackChunkscript_review"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[504],(()=>a(6897)));r=a.O(r)})();
//# sourceMappingURL=app.381aef87.js.map