"use strict";(self["webpackChunkbotfree"]=self["webpackChunkbotfree"]||[]).push([[145],{8145:(e,a,t)=>{t.r(a),t.d(a,{default:()=>j});var l=t(9835),o=t(6970);const r={class:"flex no-wrap q-gutter-sm"},s={class:"user flex items-center q-pa-md"},n={class:"text-h6 q-pl-md"},i={class:""},c={class:"text-caption"};function m(e,a,t,m,u,d){const w=(0,l.up)("q-avatar"),b=(0,l.up)("q-tab"),p=(0,l.up)("q-separator"),g=(0,l.up)("q-badge"),f=(0,l.up)("q-tabs"),v=(0,l.up)("q-toolbar"),h=(0,l.up)("q-header"),k=(0,l.up)("q-btn"),W=(0,l.up)("q-item-section"),_=(0,l.up)("q-item"),x=(0,l.up)("q-list"),q=(0,l.up)("q-drawer"),Z=(0,l.up)("router-view"),y=(0,l.up)("q-page-container"),U=(0,l.up)("q-footer"),D=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(D,{view:"lHr lpR lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{bordered:"",class:"text-teal-7 row items-center bg-layout","height-hint":"78",style:{height:"60px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.Wm)(w,{size:"40px",rounded:"",color:"teal"}),(0,l.Wm)(w,{size:"40px",rounded:"",color:"purple-4"}),(0,l.Wm)(w,{size:"40px",rounded:"",color:"orange-4"})]),(0,l.Wm)(f,{modelValue:e.tab,"onUpdate:modelValue":a[1]||(a[1]=a=>e.tab=a),class:"text-weight-bold mobile-header","active-bg-color":"transparent","active-color":"teal","indicator-color":"transparent",align:"justify"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"mobile-tab top text-weight-bold",name:"mails",label:"Главная","content-class":"",onClick:a[0]||(a[0]=a=>e.userValid=!1),to:"/"}),(0,l.Wm)(p,{vertical:""}),(0,l.Wm)(b,{class:"mobile-tab",name:"alarms",label:"Каталог"}),(0,l.Wm)(p,{vertical:""}),(0,l.Wm)(b,{class:"mobile-tab top",name:"movies",label:"Корзина",onClick:e.openBasket},{default:(0,l.w5)((()=>[e.viewBasket.length>0?((0,l.wg)(),(0,l.j4)(g,{key:0,color:"orange",floating:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.viewBasket.length),1)])),_:1})):(0,l.kq)("",!0)])),_:1},8,["onClick"]),(0,l.Wm)(p,{vertical:""}),(0,l.Wm)(b,{class:"mobile-tab top",name:"movies",label:"Профиль",onClick:e.toggleRightDrawer},null,8,["onClick"])])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(q,{modelValue:e.rightDrawerOpen,"onUpdate:modelValue":a[2]||(a[2]=a=>e.rightDrawerOpen=a),side:"right",behavior:"mobile",bordered:""},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(w,{size:"70px","font-size":"52px",color:"teal","text-color":"white",icon:"person"}),(0,l._)("div",n,[(0,l._)("div",i,(0,o.zw)(e.viewUserData.first_name)+" "+(0,o.zw)(e.viewUserData.last_name),1),(0,l._)("div",c,"@"+(0,o.zw)(e.viewUserData.username),1)])]),(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"text-h6"},{default:(0,l.w5)((()=>[(0,l.Uk)("Баланс : "+(0,o.zw)(e.viewUserData.balance)+" "+(0,o.zw)(e.convertСurrency)+" ",1),(0,l.Wm)(k,{color:"teal",label:"Пополнить",class:"flex-grow q-my-sm",padding:"5px"})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Z)])),_:1}),(0,l.Wm)(U,{bordered:"",class:"bg-grey-2 text-teal mobile-footer"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{class:"flex justify-between",style:{padding:"0"}},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{modelValue:e.tab,"onUpdate:modelValue":a[4]||(a[4]=a=>e.tab=a),dense:"","active-bg-color":"transparent","active-color":"teal","indicator-color":"transparent",class:"bg-white full-width shadow-1",align:"justify","content-class":"mobile-tab"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"flex-grow mobile-tab bottom",name:"mails",icon:"home",label:"Главная",onClick:a[3]||(a[3]=a=>e.userValid=!1),to:"/"}),(0,l.Wm)(b,{class:"flex-grow mobile-tab bottom",name:"alarms",icon:"manage_search",label:"Каталог"}),(0,l.Wm)(b,{class:"flex-grow mobile-tab bottom",name:"movies",icon:"shopping_cart",label:"Корзина",onClick:e.openBasket},{default:(0,l.w5)((()=>[e.viewBasket.length>0?((0,l.wg)(),(0,l.j4)(g,{key:0,color:"orange",floating:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.viewBasket.length),1)])),_:1})):(0,l.kq)("",!0)])),_:1},8,["onClick"]),(0,l.Wm)(b,{class:"flex-grow mobile-tab bottom",name:"movies",icon:"person",label:"Профиль",onClick:e.toggleRightDrawer},null,8,["onClick"])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}var u=t(499),d=t(3100),w=t(7779);const b=(0,l.aZ)({name:"MainLayout",components:{},setup(){const e=(0,u.iH)(!1),a=(0,u.iH)(!1),t=window.innerWidth;return{rightDrawerOpen:e,mobileSize:a,scr:t,tab:(0,u.iH)("mails"),toggleRightDrawer(){e.value=!e.value}}},computed:{...(0,d.Se)(["userValid","viewBasket","viewUserData"]),convertСurrency(){switch(this.viewUserData.currency){case"RUB":return"₽";case"USD":return"$";case"EUR":return"€";case"UAH":return"₴";case"KZT":return"₸";default:return this.viewUserData.currency}}},methods:{...(0,d.OI)(["openBasket"])},watch:{scr(e){w.log(e)}},mounted(){}});var p=t(1639),g=t(7605),f=t(6602),v=t(1663),h=t(1357),k=t(2230),W=t(900),_=t(926),x=t(990),q=t(4455),Z=t(3655),y=t(3246),U=t(490),D=t(1233),Q=t(2133),z=t(1378),C=t(9984),V=t.n(C);const B=(0,p.Z)(b,[["render",m],["__scopeId","data-v-02c60ff9"]]),j=B;V()(b,"components",{QLayout:g.Z,QHeader:f.Z,QToolbar:v.Z,QAvatar:h.Z,QTabs:k.Z,QTab:W.Z,QSeparator:_.Z,QBadge:x.Z,QBtn:q.Z,QDrawer:Z.Z,QList:y.Z,QItem:U.Z,QItemSection:D.Z,QPageContainer:Q.Z,QFooter:z.Z})}}]);