import{N as B,P as j,S as N,a as D}from"./pagination-hurwVTjr.js";import{_ as q,k as H,l as F,f as l,g as K,r as x,o as a,c,a as t,b as u,w as m,t as n,j as P,F as V,d as O,m as X,p as z,q as Q}from"./index-chrp63HQ.js";import{a as k}from"./axios-G2rPRu76.js";import{u as $}from"./cartStore-4VNCE_vT.js";import{u as G}from"./toastMessage-jeIKEn4C.js";import{_ as J}from"./ToastMessages-A2Jk37eF.js";import{M as W,K as Y}from"./mousewheel-M_5C9zab.js";const Z="/week8/assets/1-UpvAcVqM.png",tt="/week8/assets/6-iqdAB-xn.png",st="/week8/assets/2-6XQBVvbT.png",ot="/week8/assets/3-Vlw8e5Xk.png";var et={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const it={setup(){const M=()=>{s.push("/products")},{VITE_APP_URL:i,VITE_APP_PATH:r}=et,s=H(),L=F(),S=$(),{getCart:y}=S,h=l([]),d=l(L.params.productId),_=l({loadingItem:""}),g=G(),{pushMessage:v}=g,w=o=>{_.value.loadingItem=o;const p={product_id:o,qty:1},R=`${i}/api/${r}/cart`;k.post(R,{data:p}).then(U=>{_.value.loadingItem="",v({style:"success",title:"加入購物車",content:U.data.message}),y()})},f=(o=2)=>{k.get(`${i}/api/${r}/products?page=${o}`).then(p=>{h.value=p.data.products}).catch(p=>{alert(p.response.data.message)})},e=o=>{s.push(`/product/${o.id}`).then(()=>{window.scrollTo(0,0)})},b=l(!0),A=o=>{o===""?b.value=!0:b.value=!1,console.log(o)},T=l(null),E=()=>{k.get(`${i}/api/${r}/products/all`).then(o=>{o.data.success&&o.data.products.length>0&&(T.value=o.data.products[o.data.products.length-1])}).catch(o=>{console.error(o.response.data.message),T.value=null})},C=l(null),I=()=>{k.get(`${i}/api/${r}/products/all`).then(o=>{o.data.success&&o.data.products.length>0&&(C.value=o.data.products[o.data.products.length-2])}).catch(o=>{console.error(o.response.data.message),C.value=null})};return K(()=>{f(),E(),I()}),{modules:[B,j,W,Y],goToShop:M,products:h,openModal:e,addToCart:w,handleCategoryClick:A,id:d,status:_,lastProduct:T,secondLastProduct:C}},components:{Swiper:N,SwiperSlide:D,ToastMessages:J}},at={id:"app"},ct={class:"container-fluid bg-black"},nt={class:"row"},lt=t("div",{class:"col-md-6 p-0"},[t("img",{src:Z,class:"img-fluid",style:{height:"600px"},alt:"banner"})],-1),rt={class:"col-md-6 text-center align-self-center p-0"},dt=t("p",{class:"text-light",style:{"font-size":"1.5em"}}," 讓您的貓咪成為時尚界的新寵兒! ",-1),_t={class:"container mt-8 p-0"},pt=t("h3",{class:"text-center text-brown"},[O(" 精選商品 "),t("div",{class:"text-center text-brown m-0 p-0 fs-1"},"-")],-1),ut={id:"swiper"},mt={class:"row"},ht=["onClick"],gt={key:0,class:"position-absolute top-0 start-0 fw-bold text-white p-2 bg-brown rounded-top"},vt=["src"],wt={class:"card-body"},ft={class:"card-title"},bt={key:0,class:"text-gray2 fs-5 card-title"},xt={key:1,class:"d-flex align-items-center card-title ms-2"},Pt={class:"text-gray2 fs-5"},kt={class:"text-brown fs-4 ms-3"},yt=["onClick"],Tt={key:0,class:"spinner-border spinner-border-sm","aria-hidden":"true"},Ct=t("i",{class:"bi bi-cart-plus"},null,-1),Mt={class:"container bg-white mt-8"},Lt={class:"row mb-5"},St={key:0,class:"col-md-6 p-0 position-relative"},Vt={class:"position-absolute top-50 start-50 translate-middle w-100 h-50 text-center"},At=["src"],Et={class:"card-title mt-2"},It={class:"card-title text-brown"},Rt={class:"col-md-6 p-0 position-relative cursor-pointer"},Ut=["src"],Bt=t("p",{class:"position-absolute top-50 start-50 translate-middle text-decoration-underline text-white fs-4"}," 新品上市 ",-1),jt={class:"row flex-row-reverse"},Nt={key:0,class:"col-md-6 col-12 p-0 position-relative"},Dt={class:"position-absolute top-50 start-50 translate-middle w-100 h-50 text-center"},qt=["src"],Ht={class:"card-title mt-2"},Ft={class:"card-title text-brown"},Kt={class:"col-md-6 col-12 p-0 position-relative cursor-pointer"},Ot=["src"],Xt=t("a",{class:"position-absolute top-50 start-50 translate-middle text-decoration-underline text-white fs-4"}," 新品上市 ",-1),zt={class:"container mt-8"},Qt={class:"row"},$t={class:"col-md-4 col-12 p-0 mb-3 position-relative"},Gt=t("img",{src:tt,class:"img-fluid w-80 opacity-50",style:{height:"400px"},alt:"productPicture"},null,-1),Jt=t("p",{class:"fs-5 position-absolute top-50 start-50 translate-middle text-decoration-underline text-white"}," 生活用品 ",-1),Wt={class:"col-md-4 col-12 p-0 mb-3 position-relative"},Yt=t("img",{src:st,class:"img-fluid w-80 opacity-50",style:{height:"400px"},alt:"productPicture"},null,-1),Zt=t("p",{class:"fs-5 position-absolute top-50 start-50 translate-middle text-decoration-underline text-white"}," 時尚配件 ",-1),ts={class:"col-md-4 col-12 p-0 mb-3 position-relative"},ss=t("img",{src:ot,class:"img-fluid w-80 opacity-50",style:{height:"400px"},alt:"productPicture"},null,-1),os=t("p",{class:"fs-5 position-absolute top-50 start-50 translate-middle text-decoration-underline text-white"}," 休閒娛樂 ",-1);function es(M,i,r,s,L,S){var g,v,w,f;const y=x("swiper-slide"),h=x("swiper"),d=x("RouterLink"),_=x("ToastMessages");return a(),c(V,null,[t("div",at,[t("div",ct,[t("div",nt,[lt,t("div",rt,[dt,t("button",{type:"button",class:"btn btn-outline-light m-3 px-5 btn-lg rounded-0",onClick:i[0]||(i[0]=(...e)=>s.goToShop&&s.goToShop(...e))}," 立即選購 ")])])]),t("div",_t,[pt,t("div",ut,[u(h,{slidesPerView:2,grabCursor:!0,pagination:{clickable:!0},modules:s.modules,class:"mySwiper",navigation:!0,mousewheel:!0,keyboard:!0},{default:m(()=>[(a(!0),c(V,null,X(s.products,e=>(a(),z(y,{key:e.id},{default:m(()=>[t("div",mt,[t("div",{class:"card shadow-sm bg-body rounded-lg border-0 position-relative mb-5 col-12 ms-3 p-0",onClick:b=>s.openModal(e)},[e.price!==e.origin_price?(a(),c("span",gt,"SALE")):P("",!0),t("img",{src:e.imageUrl,class:"card-img-top object-fit-cover w-100",style:{height:"300px"},alt:"productPicture"},null,8,vt),t("div",wt,[t("p",ft,n(e.title),1),e.price===e.origin_price?(a(),c("div",bt," $"+n(e.origin_price),1)):(a(),c("div",xt,[t("del",Pt,"$"+n(e.origin_price),1),t("div",kt,"$"+n(e.price),1)])),t("button",{type:"button",class:"btn btn-outline-brown border-0 fs-5 m-2 position-absolute bottom-0 end-0",onClick:Q(b=>s.addToCart(e.id,1),["stop"])},[e.id===s.status.loadingItem?(a(),c("span",Tt)):P("",!0),Ct],8,yt)])],8,ht)])]),_:2},1024))),128))]),_:1},8,["modules"])])]),t("div",Mt,[t("div",Lt,[s.lastProduct?(a(),c("div",St,[t("div",Vt,[t("img",{src:(g=s.lastProduct)==null?void 0:g.imagesUrl[1],class:"img-fluid object-fit-cover newsimg",alt:"picture",onClick:i[1]||(i[1]=e=>s.openModal(s.lastProduct))},null,8,At),t("p",Et,n(s.lastProduct.title),1),t("p",It,"$"+n(s.lastProduct.price),1)])])):P("",!0),t("div",Rt,[t("img",{src:(v=s.lastProduct)==null?void 0:v.imagesUrl[0],class:"img-fluid object-fit-cover w-100",style:{height:"700px"},alt:"picture",onClick:i[2]||(i[2]=e=>s.openModal(s.lastProduct))},null,8,Ut),Bt])]),t("div",jt,[s.secondLastProduct?(a(),c("div",Nt,[t("div",Dt,[t("img",{src:(w=s.secondLastProduct)==null?void 0:w.imagesUrl[1],class:"img-fluid object-fit-cover newsimg",alt:"picture",onClick:i[3]||(i[3]=e=>s.openModal(s.secondLastProduct))},null,8,qt),t("p",Ht,n(s.secondLastProduct.title),1),t("p",Ft,"$"+n(s.secondLastProduct.price),1)])])):P("",!0),t("div",Kt,[t("img",{src:(f=s.secondLastProduct)==null?void 0:f.imagesUrl[0],class:"img-fluid object-fit-cover w-100",style:{height:"700px"},alt:"picture",onClick:i[4]||(i[4]=e=>s.openModal(s.secondLastProduct))},null,8,Ot),Xt])])]),t("div",zt,[t("div",Qt,[t("div",$t,[u(d,{class:"text-decoration-none",to:"/products?category=生活用品",onclick:"window.scrollTo(0, 0);"},{default:m(()=>[Gt,Jt]),_:1})]),t("div",Wt,[u(d,{class:"text-decoration-none",to:"/products?category=時尚配件",onclick:"window.scrollTo(0, 0);"},{default:m(()=>[Yt,Zt]),_:1})]),t("div",ts,[u(d,{class:"text-decoration-none",to:"/products?category=休閒娛樂",onclick:"window.scrollTo(0, 0);"},{default:m(()=>[ss,os]),_:1})])])])]),u(_)],64)}const _s=q(it,[["render",es]]);export{_s as default};
