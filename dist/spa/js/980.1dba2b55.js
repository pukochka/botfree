"use strict";(self["webpackChunkbotfree"]=self["webpackChunkbotfree"]||[]).push([[980],{2980:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var l=a(9835),o=a(6970),i=a(1957);const d=e=>((0,l.dD)("data-v-6d7279ec"),e=e(),(0,l.Cn)(),e),s={class:"container row q-pa-xl"},n=d((()=>(0,l._)("div",{class:"header text-h3 non-selectable"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laudantium qui alias. ",-1))),r={class:"q-pa-xl flex flex-center avatar q-gutter-md"},c=d((()=>(0,l._)("div",{class:"container q-pa-xl max-xl flex justify-end text-subtitle1"},[(0,l._)("div",{class:""}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit nobis quia quo rerum vel veniam error, expedita, quidem maxime rem quisquam ex dolore magni veritatis aperiam quod, assumenda ad! ")],-1))),u={class:"container q-pa-xl column flex-center q-gutter-lg"},p={class:"text-h6"},m=(0,l.Uk)(" Get параметры : "),x={class:"bg-red"},g={class:"text-h6"},w=(0,l.Uk)(" tg id : "),h={class:"bg-red"},f={class:""},_={class:"footer q-pa-lg row justify-between"},q={class:"social q-gutter-md"},v=d((()=>(0,l._)("div",{class:"text-h6"},"Код",-1)));function b(e,t,a,d,b,W){const C=(0,l.up)("q-avatar"),z=(0,l.up)("q-btn"),Z=(0,l.up)("q-separator"),k=(0,l.up)("q-card-section"),Q=(0,l.up)("q-input"),y=(0,l.up)("q-card-actions"),V=(0,l.up)("q-card"),D=(0,l.up)("q-dialog"),H=(0,l.up)("q-page"),I=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(H,{class:""},{default:(0,l.w5)((()=>[(0,l._)("div",s,[n,(0,l._)("div",r,[(0,l.Wm)(C,{size:"150px",rounded:"","font-size":"52px",color:"teal","text-color":"white",icon:"done"}),(0,l.Wm)(C,{size:"150px",rounded:"","font-size":"52px",color:"teal","text-color":"white",icon:"star"}),(0,l.Wm)(C,{size:"150px",rounded:"","font-size":"52px",color:"teal","text-color":"white",icon:"person"})])]),c,(0,l._)("div",u,[(0,l._)("div",p,[m,(0,l._)("span",x,(0,o.zw)(e.url),1)]),(0,l._)("div",g,[w,(0,l._)("span",h,(0,o.zw)(e.tg_id),1)]),(0,l.Wm)(z,{padding:"16px 64px",label:"Ввести код",class:"bg-teal text-white",onClick:t[0]||(t[0]=t=>e.dialCode=!e.dialCode)}),(0,l.Wm)(z,{padding:"16px 64px",label:"Войти через Telegram",class:"bg-teal text-white",onClick:t[1]||(t[1]=t=>e.dialCode=!e.dialCode)}),(0,l.Wm)(z,{padding:"16px 64px",icon:"add",class:"bg-teal text-white",onClick:e.rnd},null,8,["onClick"])]),(0,l._)("div",f,(0,o.zw)(e.show),1),(0,l.Wm)(Z),(0,l._)("div",_,[(0,l.Wm)(z,{flat:"",dense:"",color:"teal",padding:"4px 8px",label:"Другая информация"}),(0,l._)("div",q,[(0,l.Wm)(C,{size:"30px",color:"teal","text-color":"white"}),(0,l.Wm)(C,{size:"30px",color:"blue-4","text-color":"white"}),(0,l.Wm)(C,{size:"30px",color:"purple-4","text-color":"white"})])]),(0,l.Wm)(D,{modelValue:e.dialCode,"onUpdate:modelValue":t[4]||(t[4]=t=>e.dialCode=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[v])),_:1}),(0,l.Wm)(k,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{color:"teal",class:"text-teal-6",dense:"",modelValue:e.code,"onUpdate:modelValue":t[2]||(t[2]=t=>e.code=t),autofocus:"",onKeyup:t[3]||(t[3]=(0,i.D2)((t=>e.dialCode=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,l.Wm)(y,{align:"right",class:"text-primary"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(z,{class:"text-teal-6",flat:"",label:"Отмена"},null,512),[[I]]),(0,l.Wm)(z,{class:"text-teal-6",flat:"",label:"Войти",to:"/auth/user"})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var W=a(499),C=a(3100),z=a(7779);const Z=window.Telegram.WebApp,k=(0,l.aZ)({name:"IndexPage",setup(){return{dialCode:(0,W.iH)(!1),code:(0,W.iH)(""),url:(0,W.iH)(window.location.search),tg_id:(0,W.iH)(0)}},methods:{...(0,C.nv)(["rnd"]),...(0,C.OI)(["increment"])},computed:(0,C.Se)(["show"]),mounted(){z.log(this.url),""!=Z.initData?this.tg_id=Z.initData:this.tg_id=0},unmounted(){},watch:{}});var Q=a(1639),y=a(9885),V=a(1357),D=a(4455),H=a(926),I=a(4870),U=a(4458),j=a(3190),A=a(9828),P=a(1821),S=a(2146),L=a(9984),T=a.n(L);const B=(0,Q.Z)(k,[["render",b],["__scopeId","data-v-6d7279ec"]]),G=B;T()(k,"components",{QPage:y.Z,QAvatar:V.Z,QBtn:D.Z,QSeparator:H.Z,QDialog:I.Z,QCard:U.Z,QCardSection:j.Z,QInput:A.Z,QCardActions:P.Z}),T()(k,"directives",{ClosePopup:S.Z})}}]);