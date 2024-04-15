import{a as S}from"./axios-G2rPRu76.js";import{_ as $,k as q,l as D,g as r,h as j,r as v,o as l,c as d,a as t,b as f,w as T,F as L,m as B,d as U,j as I,t as m,q as H,p as O,f as z}from"./index-UZsKeGfk.js";import{u as G}from"./cartStore-l8_wA-I8.js";import{u as J}from"./toastMessage-fhLbAC8L.js";import{_ as K}from"./ToastMessages-Jfe-zVB1.js";import{_ as Q}from"./loading-pmP7T_O5.js";var W={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/CatPaws/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:V,VITE_APP_PATH:M}=W,X={setup(){const a=G(),{getCart:n}=a,w=J(),{pushMessage:s}=w,y=q(),P=D(),h=r(P.params.productId),_=r([]),u=r({loadingItem:""}),e=r(!1),g=r([]),E=r(0),R=r(0),C=()=>{_.value.sort((o,c)=>o.price-c.price),document.querySelector(".lowPrice").classList.add("price-active"),document.querySelector(".heightPrice").classList.remove("price-active")},x=()=>{_.value.sort((o,c)=>c.price-o.price),document.querySelector(".heightPrice").classList.add("price-active"),document.querySelector(".lowPrice").classList.remove("price-active")},A=o=>{y.push(`/product/${o.id}`).then(()=>{window.scrollTo(0,0)})},k=()=>{const o=`${V}/api/${M}/products/all`;e.value=!0,S.get(o).then(c=>{const b=c.data.products.filter(p=>p.price<p.origin_price);_.value=b,e.value=!1}).catch(c=>{alert(c.response.data.message)})},F=o=>{u.value.loadingItem=o;const c={product_id:o,qty:1},b=`${V}/api/${M}/cart`;S.post(b,{data:c}).then(p=>{u.value.loadingItem="",s({style:"success",title:"加入購物車",content:p.data.message}),n()})},N=()=>{const o=event.target.value;o==="high"?x():o==="low"&&C()};return j(()=>{k()}),{id:h,products:_,status:u,isLoading:e,addToCart:F,openModal:A,heightPrice:x,lowPrice:C,carts:g,finalTotal:E,total:R,getProducts:k,selectChange:N}},components:{ToastMessages:K}},i=a=>(O("data-v-02c9b865"),a=a(),z(),a),Y={id:"app"},Z=i(()=>t("img",{src:Q,width:"500",alt:"loading",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},null,-1)),tt={class:"container mt-7 p-0"},et={"aria-label":"breadcrumb"},st={class:"breadcrumb"},ot={class:"breadcrumb-item",to:"/"},it=i(()=>t("li",{class:"breadcrumb-item active","aria-current":"page"},"特價商品",-1)),at={class:"row mt-7"},ct={class:"col-md-3"},nt={class:"mSale"},rt={class:"d-flex justify-content-end mb-5"},lt=i(()=>t("option",{selected:""},"價格",-1)),dt=i(()=>t("option",{value:"high"},"價格高到低",-1)),_t=i(()=>t("option",{value:"low"},"價格低到高",-1)),ut=[lt,dt,_t],pt={class:"pSale"},mt=i(()=>t("div",{class:"fs-4 text-gray2 mb-2"},"篩選條件",-1)),ht=i(()=>t("span",{class:"heightPrice"},"價格高到低",-1)),gt=[ht],bt=i(()=>t("br",null,null,-1)),vt=i(()=>t("span",{class:"lowPrice"},"價格低到高",-1)),ft=[vt],wt={class:"col-md-9"},yt={class:"row"},Pt=["onClick"],Ct={key:0,class:"position-absolute top-0 start-0 fw-bold text-white p-2 bg-brown"},xt=["src"],kt={class:"card-body"},St={class:"card-title text-center rwdFont"},Tt={key:0,class:"text-gray2 fs-5 card-title"},Lt={key:1,class:"d-flex justify-content-center align-items-center card-title ms-2"},It={class:"text-gray2 fs-5"},Vt={class:"text-brown fs-5 ms-3"},Mt=i(()=>t("br",null,null,-1)),Et=["onClick"],Rt={key:0,class:"spinner-border spinner-border-sm","aria-hidden":"true"},At=i(()=>t("i",{class:"bi bi-cart-plus"},null,-1));function Ft(a,n,w,s,y,P){const h=v("VueLoading"),_=v("RouterLink"),u=v("ToastMessages");return l(),d(L,null,[t("div",Y,[f(h,{active:s.isLoading,"is-full-page":!0,"background-color":"#FFF8F1",opacity:1,"z-index":1060},{default:T(()=>[Z]),_:1},8,["active"]),t("div",tt,[t("nav",et,[t("ol",st,[t("li",ot,[f(_,{class:"text-black text-decoration-none",to:"/"},{default:T(()=>[U("首頁")]),_:1})]),it])]),t("div",at,[t("div",ct,[t("div",nt,[t("div",rt,[t("select",{class:"p-1 text-gray2","aria-label":"Default select example",onChange:n[0]||(n[0]=(...e)=>s.selectChange&&s.selectChange(...e))},ut,32)])]),t("div",pt,[mt,t("div",{class:"fs-6 text-gray2 mb-2 btn p-0 border-0",onClick:n[1]||(n[1]=(...e)=>s.heightPrice&&s.heightPrice(...e))},gt),bt,t("div",{class:"fs-6 text-gray2 mb-2 btn p-0 border-0",onClick:n[2]||(n[2]=(...e)=>s.lowPrice&&s.lowPrice(...e))},ft)])]),t("div",wt,[t("div",yt,[(l(!0),d(L,null,B(s.products,e=>(l(),d("div",{class:"col-md-4 col-6",key:e.id},[t("div",{class:"card shadow-sm rounded-lg border-0 position-relative mb-5",onClick:g=>s.openModal(e)},[e.price!==e.origin_price?(l(),d("span",Ct,"SALE")):I("",!0),t("img",{src:e.imageUrl,class:"card-img-top object-fit-cover w-100 rwdImg",alt:"productPicture"},null,8,xt),t("div",kt,[t("p",St,m(e.title),1),e.price===e.origin_price?(l(),d("div",Tt," $"+m(a.$filters.numberToCurrencyNo(e.origin_price)),1)):(l(),d("div",Lt,[t("del",It,"$"+m(a.$filters.numberToCurrencyNo(e.origin_price)),1),t("div",Vt," $"+m(a.$filters.numberToCurrencyNo(e.price)),1)])),Mt,t("button",{type:"button",class:"btn btn-outline-brown border-0 fs-5 m-2 position-absolute bottom-0 end-0",onClick:H(g=>s.addToCart(e.id,1),["stop"])},[e.id===s.status.loadingItem?(l(),d("span",Rt)):I("",!0),At],8,Et)])],8,Pt)]))),128))])])])])]),f(u)],64)}const Ut=$(X,[["render",Ft],["__scopeId","data-v-02c9b865"]]);export{Ut as default};
