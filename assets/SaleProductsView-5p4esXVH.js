import{a as P}from"./axios-G2rPRu76.js";import{_ as A,k as L,l as $,f as l,g as B,r as k,o as a,c as r,a as t,b as w,w as D,F as x,m as N,d as U,j as y,t as _,q as j}from"./index-jjd0GBJI.js";import{u as q}from"./cartStore-izFotvQE.js";import{u as F}from"./toastMessage-T-vDHxpX.js";import{_ as H}from"./ToastMessages-LWYl60w5.js";var O={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:T,VITE_APP_PATH:C}=O,z={setup(){const b=q(),{getCart:n}=b,h=F(),{pushMessage:e}=h,g=L(),f=$(),m=l(f.params.productId),c=l([]),s=l({loadingItem:""}),p=l([]),M=l(0),V=l(0),E=()=>{c.value.sort((o,i)=>o.price-i.price)},I=()=>{c.value.sort((o,i)=>i.price-o.price)},R=o=>{g.push(`/product/${o.id}`).then(()=>{window.scrollTo(0,0)})},v=()=>{const o=`${T}/api/${C}/products/all`;P.get(o).then(i=>{const u=i.data.products.filter(d=>d.price<d.origin_price);c.value=u})},S=o=>{s.value.loadingItem=o;const i={product_id:o,qty:1},u=`${T}/api/${C}/cart`;P.post(u,{data:i}).then(d=>{s.value.loadingItem="",e({style:"success",title:"加入購物車",content:d.data.message}),n()})};return B(()=>{v()}),{id:m,products:c,status:s,addToCart:S,openModal:R,heightPrice:I,lowPrice:E,carts:p,finalTotal:M,total:V,getProducts:v}},components:{ToastMessages:H}},G={id:"app"},J={class:"container mt-8 p-0"},K={"aria-label":"breadcrumb"},Q={class:"breadcrumb"},W={class:"breadcrumb-item",to:"/"},X=t("li",{class:"breadcrumb-item active","aria-current":"page"},"特價商品",-1),Y={class:"row mt-5"},Z={class:"col-md-3"},tt=t("div",{class:"fs-4 text-gray2 mt-3 mb-2"},"篩選條件",-1),st=t("br",null,null,-1),et={class:"col-md-9"},ot={class:"row mb-5"},it=["onClick"],at={key:0,class:"position-absolute top-0 start-0 fw-bold text-white p-2 bg-brown"},rt=["src"],nt={class:"card-body"},ct={class:"card-title"},lt={key:0,class:"text-gray2 fs-5 card-title"},dt={key:1,class:"d-flex align-items-center card-title ms-2"},_t={class:"text-gray2 fs-5"},mt={class:"text-brown fs-4 ms-3"},pt=["onClick"],ut={key:0,class:"spinner-border spinner-border-sm","aria-hidden":"true"},bt=t("i",{class:"bi bi-cart-plus"},null,-1);function ht(b,n,h,e,g,f){const m=k("RouterLink"),c=k("ToastMessages");return a(),r(x,null,[t("div",G,[t("div",J,[t("nav",K,[t("ol",Q,[t("li",W,[w(m,{class:"text-black text-decoration-none",to:"/"},{default:D(()=>[U("首頁")]),_:1})]),X])]),t("div",Y,[t("div",Z,[tt,t("div",{class:"fs-6 text-gray2 mb-2 btn p-0 border-0",onClick:n[0]||(n[0]=(...s)=>e.heightPrice&&e.heightPrice(...s))},"價格高到低"),st,t("div",{class:"fs-6 text-gray2 mb-2 btn p-0 border-0",onClick:n[1]||(n[1]=(...s)=>e.lowPrice&&e.lowPrice(...s))},"價格低到高")]),t("div",et,[t("div",ot,[(a(!0),r(x,null,N(e.products,s=>(a(),r("div",{class:"col-md-4",key:s.id},[t("div",{class:"card shadow-sm bg-body rounded-lg border-0 position-relative mb-5",onClick:p=>e.openModal(s)},[s.price!==s.origin_price?(a(),r("span",at,"SALE")):y("",!0),t("img",{src:s.imageUrl,class:"card-img-top object-fit-cover",style:{height:"300px"},alt:"productPicture"},null,8,rt),t("div",nt,[t("p",ct,_(s.title),1),s.price===s.origin_price?(a(),r("div",lt," $"+_(s.origin_price),1)):(a(),r("div",dt,[t("del",_t,"$"+_(s.origin_price),1),t("div",mt,"$"+_(s.price),1)])),t("button",{type:"button",class:"btn btn-outline-brown border-0 fs-5 m-2 position-absolute bottom-0 end-0",onClick:j(p=>e.addToCart(s.id,1),["stop"])},[s.id===e.status.loadingItem?(a(),r("span",ut)):y("",!0),bt],8,pt)])],8,it)]))),128))])])])])]),w(c)],64)}const wt=A(z,[["render",ht]]);export{wt as default};
