(()=>{var e={4901:(e,t,a)=>{"use strict";a(8964),a(702);var r=a(1957),o=a(1947),i=a(499),n=a(9835);function s(e,t,a,r,o,i){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}const d=(0,n.aZ)({name:"App"});var c=a(1639);const u=(0,c.Z)(d,[["render",s],["__scopeId","data-v-cbfda788"]]),l=u;var g=a(5240),h=a(3340),f=a(8910);const v=[{path:"/",component:()=>Promise.all([a.e(736),a.e(28)]).then(a.bind(a,9028)),children:[{path:"/",component:()=>Promise.all([a.e(736),a.e(668)]).then(a.bind(a,2668))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(181)]).then(a.bind(a,7181))}],p=v,m=(0,h.BC)((function(){const e=f.PO,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:p,history:e("/botfree/")});return t}));async function b(e,t){const r=e(l);r.use(o.Z,t);const n="function"===typeof g["default"]?await(0,g["default"])({}):g["default"],{storeKey:s}=await Promise.resolve().then(a.bind(a,5240)),d=(0,i.Xl)("function"===typeof m?await m({store:n}):m);return n.$router=d,{app:r,store:n,storeKey:s,router:d}}var _=a(6827);const y={config:{},plugins:{Notify:_.Z}};var w=a(7779);const k="/botfree/",D=/\/\//,U=e=>(k+e).replace(D,"/");async function O({app:e,router:t,store:a,storeKey:r},o){let i=!1;const n=e=>{try{return U(t.resolve(e).href)}catch(a){}return Object(e)===e?null:e},s=e=>{if(i=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t)},d=window.location.href.replace(window.location.origin,"");for(let u=0;!1===i&&u<o.length;u++)try{await o[u]({app:e,router:t,store:a,ssrContext:null,redirect:s,urlPath:d,publicPath:k})}catch(c){return c&&c.url?void s(c.url):void w.error("[Quasar] boot error:",c)}!0!==i&&(e.use(t),e.use(a,r),e.mount("#q-app"))}b(r.ri,y).then((e=>Promise.all([Promise.resolve().then(a.bind(a,1569))]).then((t=>{const a=t.map((e=>e.default)).filter((e=>"function"===typeof e));O(e,a)}))))},1569:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var r=a(3340),o=a(9981),i=a.n(o);const n=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=i()}))},559:(e,t,a)=>{"use strict";a.d(t,{d9:()=>o,kh:()=>r});a(702),a(3269),a(7779);function r(e,t,...a){for(let r=0;r<a.length;r++)null==a[r]&&void 0==a[r]||(t[e[r]]=a[r]);return t}function o(e){if(""==e)return!1;{let t={};for(const[a,r]of new URLSearchParams(e))t[a]=r;return t}}},5240:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Lt});var r={};a.r(r),a.d(r,{viewBasket:()=>S});var o={};a.r(o),a.d(o,{changeBasketData:()=>G,changeBasketLoading:()=>T});var i={};a.r(i),a.d(i,{getBasket:()=>N});var n={};a.r(n),a.d(n,{viewNewOrder:()=>I,viewOrders:()=>j});var s={};a.r(s),a.d(s,{changeOrdersCount:()=>Z,changeOrdersData:()=>E,changeOrdersLoading:()=>V,changeOrdersSelect:()=>W,createNewOrder:()=>M});var d={};a.r(d),a.d(d,{getOrders:()=>R,getOrdersCount:()=>J});var c={};a.r(c),a.d(c,{viewDialogs:()=>ee,viewTab:()=>Y,viewUser:()=>z});var u={};a.r(u),a.d(u,{SaveBotDataTelegram:()=>ne,SaveBotDataWeb:()=>ie,SetError:()=>ge,SetGuest:()=>le,changeColor:()=>ce,changeDialogs:()=>he,changeLoading:()=>fe,changeUserProp:()=>re,changeUserTab:()=>oe,changeUserTheme:()=>ue,signWithTelegram:()=>de,signWithWebsite:()=>se,test:()=>ve});var l={};a.r(l),a.d(l,{GetBotData:()=>_e,GetDataByDomain:()=>be,getUserData:()=>me});var g={};a.r(g),a.d(g,{viewInfo:()=>ke});var h={};a.r(h),a.d(h,{changeInfoData:()=>De,changeInfoDialogs:()=>Oe,changeInfoloading:()=>Ue});var f={};a.r(f),a.d(f,{getRules:()=>Ce,getSales:()=>Pe});var v={};a.r(v),a.d(v,{viewBalance:()=>$e,viewCoupon:()=>Be,viewDelivery:()=>Te,viewFormData:()=>Ke,viewPayments:()=>Ge});var p={};a.r(p),a.d(p,{changeCheckBoxesValue:()=>Ve,changeCouponLoading:()=>He,changeCouponValidate:()=>Ie,changeFieldValue:()=>We,changeFileValue:()=>Ze,changeFormData:()=>Ne,changeFormLoading:()=>Ae,changeFormSelect:()=>je,createAnswerGroup:()=>Ee});var m={};a.r(m),a.d(m,{formAnswers:()=>ze,getDelivery:()=>Re,getGifts:()=>Je,getPayments:()=>qe,getReferalBalance:()=>Qe,getСoupon:()=>Xe});var b={};a.r(b),a.d(b,{viewProducts:()=>tt});var _={};a.r(_),a.d(_,{changeProductsCategory:()=>ot,changeProductsData:()=>at,changeProductsLoading:()=>rt});var y={};a.r(y),a.d(y,{getProducts:()=>nt});var w={};a.r(w),a.d(w,{viewDigital:()=>ct});var k={};a.r(k),a.d(k,{changeDigitalCount:()=>gt,changeDigitalData:()=>lt,changeDigitalLoading:()=>ut,changeDigitalOrders:()=>ht});var D={};a.r(D),a.d(D,{GetDigitalData:()=>vt,GetDigitalOrderCount:()=>pt});var U={};a.r(U),a.d(U,{viewSelect:()=>_t,viewSelectLoading:()=>yt,viewSelectTab:()=>wt});var O={};a.r(O),a.d(O,{changeSelectProduct:()=>kt,changeSelectTab:()=>Dt});var L=a(3340),C=a(3100),P=a(499);function x(){return{basket:(0,P.iH)({data:[],elem:0,loading:{get:!1,add:!1,"set-count":!1,subtract:!1,remove:!1,"remove-all":!1}})}}function S(e){return e.basket}function G(e,t){e.basket.data=t}function T(e,{section:t,value:a,elem:r}){void 0!=r&&(e.basket.elem=r),e.basket.loading[t]=a}var B=a(9981),$=a.n(B),K=a(559),F=a(7779);function N({commit:e,rootGetters:t},{action:a,category_id:r,count:o}){e("changeBasketLoading",{section:a,value:!0,elem:r}),$().post(`https://api.bot-t.com/v1/shopcart/cart/${a}?secretKey=${t["user/viewUser"].bot_data.secret_key}`,{bot_id:t["user/viewUser"].bot_data.id,user_id:t["user/viewUser"].data.id,secret_user_key:t["user/viewUser"].data.secret_user_key,category_id:r,count:o}).then((t=>{F.log(t,"Корзина"),e("changeBasketLoading",{section:a,value:!1,elem:r}),e("changeBasketData",t.data.data)}))}const A={namespaced:!0,getters:r,mutations:o,actions:i,state:x};function H(){return{orders:(0,P.iH)({data:[],loading:{index:!1,create:!1,cancel:!1,"set-delivery":!1},select:{},count:0,tab:"all"}),newOrder:(0,P.iH)({})}}function j(e){return e.orders}function I(e){return e.newOrder}function E(e,t){e.orders.data=t}function W(e,{order:t,tab:a}){e.orders.select=t,e.orders.tab=a}function Z(e,t){e.orders.count=t}function V(e,{section:t,value:a}){e.orders.loading[t]=a}function M(e,t){e.newOrder=t}var q=a(7779);function R({commit:e,rootGetters:t,dispatch:a},{action:r,order_id:o,offset:i,delivery_id:n,is_back_cart:s}){e("changeOrdersLoading",{section:r,value:!0}),$().post(`https://api.bot-t.com/v1/shopcart/order/${r}?secretKey=${t["user/viewUser"].bot_data.secret_key}`,{bot_id:t["user/viewUser"].bot_data.id,user_id:t["user/viewUser"].data.id,secret_user_key:t["user/viewUser"].data.secret_user_key,order_id:o,offset:i,delivery_id:n,is_back_cart:s}).then((t=>{if(q.log(t,"Заказы"),200==t.status)if("create"==r)e("changeOrdersLoading",{section:r,value:!1}),e("createNewOrder",t.data.data),e("user/changeUserTab","formsOrders",{root:!0});else if("set-delivery"==r){var a;e("changeOrdersLoading",{section:r,value:!1}),null===(a=window.Telegram.WebApp)||void 0===a||a.close()}else"cancel"==r?(e("changeOrdersLoading",{section:r,value:!1}),e("info/changeInfoDialogs",{section:"order"},{root:!0}),e("user/changeUserTab","catalog",{root:!0})):(e("changeOrdersLoading",{section:r,value:!1}),e("changeOrdersData",t.data.data),window.scrollTo({top:0}))}))}function J({commit:e,rootGetters:t}){$().post(`https://api.bot-t.com/v1/shopcart/order/count?secretKey=${t["user/viewUser"].bot_data.secret_key}`,{bot_id:t["user/viewUser"].bot_data.id,user_id:t["user/viewUser"].data.id,secret_user_key:t["user/viewUser"].data.secret_user_key}).then((t=>{200==t.status&&e("changeOrdersCount",t.data.data.count)}))}const Q={namespaced:!0,getters:n,mutations:s,actions:d,state:H};function X(){return{dialogs:(0,P.iH)({auth:!1}),user:(0,P.iH)({init_telegram:{},status:!1,no_guest:!1,error:!1,loading:{auth:!0},data:{},bot_data:{},warning:"",tab:"catalog",theme:{select:{background:"#edf2fb",text:"#1b4965",add:"rgba(0, 0, 0, 0.4)"},is_dark:!1},colors:[{name:"Стандартная",background:{light:"#edf2fb",dark:"#023047"},text:{light:"#1b4965",dark:"#edf2fb"},add:{light:"rgba(0, 0, 0, 0.4)",dark:"rgba(255, 255, 255, 0.4)"},select:!0,id:1},{name:"Зелёная",background:{light:"#f0fff1",dark:"#274029"},text:{light:"#588157",dark:"#f0fff1"},add:{light:"rgba(0, 0, 0, 0.4)",dark:"rgba(255, 255, 255, 0.4)"},select:!1,id:2},{name:"Серая",background:{light:"#e9ecef",dark:"#023047"},text:{light:"#495057",dark:"#e9ecef"},add:{light:"rgba(0, 0, 0, 0.4)",dark:"rgba(255, 255, 255, 0.4)"},select:!1,id:3},{name:"Фиолетовая",background:{light:"#f7ebfd",dark:"#240046"},text:{light:"#4e148c",dark:"#f7ebfd"},add:{light:"rgba(0, 0, 0, 0.4)",dark:"rgba(255, 255, 255, 0.4)"},select:!1,id:4},{name:"Коричневая",background:{light:"#ede0d4",dark:"#392a16"},text:{light:"#6f5e53",dark:"#ede0d4"},add:{light:"rgba(0, 0, 0, 0.4)",dark:"rgba(255, 255, 255, 0.4)"},select:!1,id:5}]})}}function z(e){return e.user}function Y(e){return e.user.tab}function ee(e){return e.dialogs}a(425),a(7779);var te=a(7674),ae=a(7779);function re(e,{section:t,value:a}){e.user[t]=a}function oe(e,t){"formsOrders"==t?(this.state.info.info.dialogs.order.danger=!0,e.user.tab="formsOrders"):(this.state.info.info.dialogs.order.danger=!1,this.state.info.info.dialogs.order.open=!1,e.user.tab=t)}function ie(e,t){e.user.bot_data=t,this.dispatch("products/getProducts",{category:0,text:""})}function ne(e,t){e.user.bot_data=t}function se(e,t){e.user.init_telegram=t,ae.log(t),this.dispatch("user/getUserData",e.user.init_telegram.id)}function de(e){let t=(0,K.d9)(window.Telegram.WebApp.initData);t.user=JSON.parse(t.user),e.user.init_telegram=t,this.dispatch("user/getUserData",e.user.init_telegram.user.id)}function ce(e,{text:t,background:a,add:r,id:o}){(0,te.Z)("primary",e.user.theme.is_dark?a.dark:a.light),(0,te.Z)("secondary",e.user.theme.is_dark?t.dark:t.light),(0,te.Z)("accent",e.user.theme.is_dark?r.dark:r.light),e.user.colors.map((e=>e.select=!1)),e.user.colors.filter((e=>e.id==o))[0].select=!0}function ue(e){e.user.theme.is_dark=!e.user.theme.is_dark;const{background:t,text:a,add:r}=e.user.colors.filter((e=>!0===e.select))[0];(0,te.Z)("primary",e.user.theme.is_dark?t.dark:t.light),(0,te.Z)("secondary",e.user.theme.is_dark?a.dark:a.light),(0,te.Z)("accent",e.user.theme.is_dark?r.dark:r.light)}function le(e,t){e.user.no_guest=t}function ge(e,t){e.user.error=t}function he(e,t){e.dialogs[t]=!e.dialogs[t]}function fe(e,{section:t,value:a}){e.user.loading[t]=a}function ve(e,t){e.user.bot_data.type.id=t}var pe=a(7779);function me({commit:e,getters:t,rootGetters:a},r){$().post(`https://api.bot-t.com/v1/bot/user-key/view-by-telegram-id?secretKey=${t.viewUser.bot_data.secret_key}`,{bot_id:t.viewUser.bot_data.id,telegram_id:r}).then((a=>{pe.log(a,"Пользователь"),200===a.status?(e("changeUserProp",{section:"data",value:a.data.data}),7===t.viewUser.bot_data.type.id?(this.dispatch("order/getOrders",{action:"index",offset:0}),this.dispatch("order/getOrdersCount"),this.dispatch("basket/getBasket",{action:"get"})):(this.dispatch("digital/GetDigitalData",{action:"index",offset:0}),this.dispatch("digital/GetDigitalOrderCount")),this.dispatch("products/getProducts",{category:0,text:""}),e("SetGuest",!0)):e("changeUserProp",{section:"loading",value:!0})}))}function be({commit:e},{action:t=!1,user:a=null}){e("changeLoading",{section:"auth",value:!0}),$().post("https://api.bot-t.com/v1/module/bot/get-by-public-key",{type_id:1,public_key:"localhost:8080"==window.location.host?"shopdigital.bot-t.com":window.location.host}).then((r=>{200===r.status?(pe.log(r),e("SaveBotDataWeb",r.data.data),e("changeLoading",{section:"auth",value:!1}),"website"==t?e("signWithWebsite",a):"telegram"==t&&e("signWithTelegram"),pe.warn("Данные получены успешно!")):(e("changeLoading",{section:"auth",value:!1}),pe.warn("Нет данных или отсуствует интернет соединение."))})).catch((t=>{e("changeLoading",{section:"auth",value:!1}),pe.warn("Нет данных или отсуствует интернет соединение.")}))}function _e({commit:e,rootGetters:t},{id:a,key:r}){$().post(`https://api.bot-t.com/v1/bot/main/info?secretKey=${r}`,{bot_id:a}).then((t=>{pe.log(t,"Бот"),200===t.status&&(e("SaveBotDataTelegram",JSON.parse(t.data).data),e("signWithTelegram"))}))}const ye={namespaced:!0,getters:c,mutations:u,actions:l,state:X};function we(){return{info:(0,P.iH)({loading:{rules:!1,sales:!1,bot:!1},rules:[],sales:[],bot:[],dialogs:{order:{open:!1,danger:!1,name:"order"}}})}}function ke(e){return e.info}function De(e,{section:t,value:a}){e.info[t]=a}function Ue(e,{section:t,value:a}){e.info.loading[t]=a}function Oe(e,{section:t,value:a}){e.info.dialogs.order.name=a,e.info.dialogs[t].open=!e.info.dialogs[t].open}var Le=a(7779);function Ce({commit:e,rootGetters:t}){e("changeInfoloading",{section:"rules",value:!0}),$().post(`https://api.bot-t.com/v1/shoppublic/shop/info?secretKey=${t["user/viewUser"].bot_data.secret_key}`,{bot_id:t["user/viewUser"].bot_data.id}).then((t=>{Le.log(t,"Правила"),200===t.status&&(e("changeInfoData",{section:"rules",value:t.data.data}),e("changeInfoloading",{section:"rules",value:!1}))}))}function Pe({commit:e,rootGetters:t}){e("changeInfoloading",{section:"sales",value:!0}),$().post(`https://api.bot-t.com/v1/shopcart/discount/index?secretKey=${t["user/viewUser"].bot_data.secret_key}`,{bot_id:t["user/viewUser"].bot_data.id}).then((t=>{Le.log(t,"Скидки"),200===t.status&&(e("changeInfoData",{section:"sales",value:t.data.data}),e("changeInfoloading",{section:"sales",value:!1}))}))}const xe={namespaced:!0,getters:g,mutations:h,actions:f,state:we};function Se(){return{payments:(0,P.iH)({data:[],loading:!0,select:{},tab:"all"}),delivery:(0,P.iH)({data:[],loading:!0,select:{},tab:"all"}),coupon:(0,P.iH)({data:[],status:!1,current:!1,loading:{"find-active":!1,activate:!1,deactivate:!1}}),referalBalance:(0,P.iH)({data:[],loading:!0})}}function Ge(e){return e.payments}function Te(e){return e.delivery}function Be(e){return e.coupon}function $e(e){return e.referalBalance}function Ke(e){return e.formData}var Fe=a(7779);function Ne(e,{section:t,data:a}){e[t].data=a}function Ae(e,{section:t,value:a}){e[t].loading=a}function He(e,{section:t,value:a}){e.coupon.loading[t]=a}function je(e,{section:t,data:a,tab:r}){e[t].tab=r,e[t].select=a}function Ie(e,{section:t,value:a}){e.coupon[t]=a}function Ee(e,{section:t,data:a}){e.formData[t]=a}function We(e,{section:t,id:a,value:r}){e.formData.delivery.fields.filter((e=>e.id==a))[0].value=r,Fe.log(e.formData[t])}function Ze(e,{id:t,value:a}){e.formData.delivery.files.filter((e=>e.id==t))[0].value=a,Fe.log(e.formData.delivery.files)}function Ve(e,{is_multiple:t,id:a,option_id:r,value:o}){t||e.formData.delivery.checkboxes.filter((e=>e.id==a)).map((e=>{e.value=!1})),e.formData.delivery.checkboxes.filter((e=>e.option_id==r))[0].value=!e.formData.delivery.checkboxes.filter((e=>e.option_id==r))[0].value,Fe.log(e.formData.delivery.checkboxes)}var Me=a(7779);function qe({commit:e,rootGetters:t},{action:a,group_id:r,order_id:o}){e("changeFormLoading",{section:"payments",value:!0}),$().post(`https://api.bot-t.com/v1/common/money/payment/${a}?secretKey=${t["user/viewUser"].bot_data.secret_key}`,(0,K.kh)(["group_id","order_id"],{bot_id:t["user/viewUser"].bot_data.id},r,o)).then((t=>{200===t.status&&("set-item"!=a?(e("changeFormData",{section:"payments",data:t.data.data[0].groups}),e("changeFormLoading",{section:"payments",value:!1})):(e("form/changeFormSelect",{section:"payments",data:t.data.data}),e("order/changeOrdersLoading",{section:a,value:!1}))),Me.log(t.data.data[0],"Оплата")}))}function Re({commit:e,rootGetters:t},{action:a,order_id:r}){e("changeFormLoading",{section:"delivery",value:!0}),$().post(`https://api.bot-t.com/v1/shopcart/delivery/${a}?secretKey=${t["user/viewUser"].bot_data.secret_key}`,{bot_id:t["user/viewUser"].bot_data.id,order_id:r}).then((t=>{200===t.status&&(e("changeFormData",{section:"delivery",data:t.data.data}),e("changeFormLoading",{section:"delivery",value:!1})),Me.log(t,"Доставка")}))}function Je({commit:e,rootGetters:t},{order_id:a}){$().post(`https://api.bot-t.com/v1/shopcart/discount/for-order?secretKey=${t["user/viewUser"].bot_data.secret_key}`,(0,K.kh)(["order_id"],{bot_id:t["user/viewUser"].bot_data.id},a)).then((e=>{Me.log(e,"подарки")}))}function Qe({commit:e,rootGetters:t},{order_id:a}){$().post(`https://api.bot-t.com/v1/shopcart/order/use-balance?secretKey=${t["user/viewUser"].bot_data.secret_key}`,(0,K.kh)(["order_id"],{bot_id:t["user/viewUser"].bot_data.id,user_id:t["user/viewUser"].data.id,secret_user_key:t["user/viewUser"].data.secret_user_key},a)).then((e=>{Me.log(e,"Баланс")}))}function Xe({commit:e,rootGetters:t},{action:a,coupon:r}){e("changeCouponLoading",{section:a,value:!0}),$().post(`https://api.bot-t.com/v1/shoppublic/coupon/${a}?secretKey=${t["user/viewUser"].bot_data.secret_key}`,{bot_id:t["user/viewUser"].bot_data.id,user_id:t["user/viewUser"].data.id,secret_user_key:t["user/viewUser"].data.secret_user_key,code:r}).then((t=>{200===t.status&&(e("changeCouponLoading",{section:a,value:!1}),"activate"==a?t.data.result?(e("changeFormData",{section:"coupon",data:t.data.data}),e("changeCouponValidate",{section:"status",value:!1})):e("changeCouponValidate",{section:"current",value:!0}):"find-active"==a?t.data.result?e("changeFormData",{section:"coupon",data:t.data.data}):e("changeCouponValidate",{section:"status",value:!0}):"deactivated"==a&&(e("changeCouponValidate",{section:"status",value:!0}),e("changeCouponValidate",{section:"current",value:!1}))),Me.log(t,"Купон")}))}function ze({commit:e,rootGetters:t},{action:a,type:r,data:o}){$().post(`https://api.bot-t.com/v1/shopcart/order/use-balance?secretKey=${t["user/viewUser"].search.secretKey}`,(0,K.kh)(["order_id"],{bot_id:t["user/viewUser"].search.bot_id,user_id:t["user/viewUser"].data.id,secret_user_key:t["user/viewUser"].data.secret_user_key},order_id)).then((e=>{Me.log(e,"Баланс")}))}const Ye={namespaced:!0,getters:v,mutations:p,actions:m,state:Se};function et(){return{products:(0,P.iH)({data:[],now:0,prev:0,textNow:"",textPrev:"",loading:!1})}}function tt(e){return e.products}function at(e,{items:t,category:a}){e.products.data=t,e.products.textPrev=e.products.textNow,e.products.textNow=a}function rt(e,t){e.products.loading=t}function ot(e,t){e.products.prev=e.products.now,e.products.now=t}var it=a(7779);function nt({commit:e,rootGetters:t},{category:a,text:r}){e("changeProductsLoading",!0),$().post(`https://api.bot-t.com/v1/shoppublic/category/view?secretKey=${t["user/viewUser"].bot_data.secret_key}`,{bot_id:t["user/viewUser"].bot_data.id,category_id:a}).then((t=>{if(it.log(t,"Витрина"),200===t.status){let o=[];for(let e in t.data.data)o.push(t.data.data[e]);e("changeProductsData",{items:o,category:r}),e("changeProductsCategory",a),e("changeProductsLoading",!1)}}))}const st={namespaced:!0,getters:b,mutations:_,actions:y,state:et};function dt(){return{digital:(0,P.iH)({order:{},select:{},last:[],count:0,loading:{create:!1,get:!1,index:!1,count:!1,cancel:!1}})}}function ct(e){return e.digital}function ut(e,{section:t,value:a}){e.digital.loading[t]=a}function lt(e,t){e.digital.order=t}function gt(e,t){e.digital.count=t}function ht(e,t){e.digital.last=t}var ft=a(7779);function vt({commit:e,rootGetters:t},{action:a,offset:r,category_id:o,count:i,order_id:n}){e("changeDigitalLoading",{section:a,value:!0}),$().post(`https://api.bot-t.com/v1/shopdigital/order/${a}?secretKey=${t["user/viewUser"].bot_data.secret_key}`,{bot_id:t["user/viewUser"].bot_data.id,user_id:t["user/viewUser"].data.id,secret_user_key:t["user/viewUser"].data.secret_user_key,offset:r,category_id:o,count:i,order_id:n}).then((t=>{ft.log(t,"цифровые товары"),200===t.status&&("index"==a?e("order/changeOrdersData",t.data.data,{root:!0}):(e("changeDigitalData",t.data.data),e("user/changeUserTab","digital",{root:!0})),e("changeDigitalLoading",{section:a,value:!1}))})).catch((e=>{ft.log(e)}))}function pt({commit:e,rootGetters:t}){e("changeDigitalLoading",{section:"count",value:!0}),$().post(`https://api.bot-t.com/v1/shopdigital/order/count?secretKey=${t["user/viewUser"].bot_data.secret_key}`,{bot_id:t["user/viewUser"].bot_data.id,user_id:t["user/viewUser"].data.id,secret_user_key:t["user/viewUser"].data.secret_user_key}).then((t=>{ft.log(t,"количество заказов ЦТ"),200===t.status&&(e("order/changeOrdersCount",t.data.data.count,{root:!0}),e("changeDigitalLoading",{section:"count",value:!1}))})).catch((e=>{ft.log(e)}))}const mt={namespaced:!0,getters:w,mutations:k,actions:D,state:dt};function bt(){return{loading:(0,P.iH)(!1),data:(0,P.iH)({}),tab:"all"}}function _t(e){return e.data}function yt(e){return e.loading}function wt(e){return e.tab}function kt(e,t){e.data=t,e.tab="select"}function Dt(e,t){e.tab=t}var Ut=a(4448);const Ot={namespaced:!0,getters:U,mutations:O,actions:Ut,state:bt},Lt=(0,L.h)((function(){const e=(0,C.MT)({modules:{basket:A,order:Q,info:xe,user:ye,form:Ye,products:st,digital:mt,select:Ot},strict:!1});return e}))},4448:()=>{},2480:()=>{}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,a),i.exports}a.m=e,(()=>{var e=[];a.O=(t,r,o,i)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){for(var[r,o,i]=e[u],s=!0,d=0;d<r.length;d++)(!1&i||n>=i)&&Object.keys(a.O).every((e=>a.O[e](r[d])))?r.splice(d--,1):(s=!1,i<n&&(n=i));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{28:"0faa0e6e",181:"a0eb3c36",668:"5dd4f79c"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{28:"ce40209d",143:"7fbf44fd",668:"35825064",736:"017ae419"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="webappbott:";a.l=(r,o,i,n)=>{if(e[r])e[r].push(o);else{var s,d;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){s=l;break}}s||(d=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var g=(t,a)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(a))),t)return t(a)},h=setTimeout(g.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=g.bind(null,s.onerror),s.onload=g.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/botfree/"})(),(()=>{var e=(e,t,a,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=i=>{if(o.onerror=o.onload=null,"load"===i.type)a();else{var n=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=n,d.request=s,o.parentNode.removeChild(o),r(d)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var o=a[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){o=n[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=r=>new Promise(((o,i)=>{var n=a.miniCssF(r),s=a.p+n;if(t(n,s))return o();e(r,s,o,i)})),o={143:0};a.f.miniCss=(e,t)=>{var a={28:1,668:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((a,r)=>o=e[t]=[a,r]));r.push(o[2]=i);var n=a.p+a.u(t),s=new Error,d=r=>{if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",s.name="ChunkLoadError",s.type=i,s.request=n,o[1](s)}};a.l(n,d,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[n,s,d]=r,c=0;if(n.some((t=>0!==e[t]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(d)var u=d(a)}for(t&&t(r);c<n.length;c++)i=n[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},r=self["webpackChunkwebappbott"]=self["webpackChunkwebappbott"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[736],(()=>a(4901)));r=a.O(r)})();