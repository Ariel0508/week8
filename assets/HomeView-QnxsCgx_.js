import{N as D,P as z,S as q,a as H}from"./pagination-MIlt1seT.js";import{_ as K,j as O,k as X,f as r,g as Q,l as W,r as v,o as c,c as d,a as t,b as a,w as l,F as E,d as N,m as G,n as J,i as y,t as n,p as Y}from"./index-RFYwpk8Q.js";import{a as P}from"./axios-G2rPRu76.js";import{u as Z}from"./cartStore-o0DpLVZF.js";import{u as $}from"./toastMessage-IJTrlXIm.js";import{_ as tt}from"./ToastMessages-I8qgW9z6.js";import{M as st,K as ot}from"./mousewheel-JmLWMgor.js";import{_ as et}from"./loading-bneA9sLj.js";const it="/week8/assets/1-UpvAcVqM.png",nt="/week8/assets/6-iqdAB-xn.png",ct="/week8/assets/2-6XQBVvbT.png",at="/week8/assets/3-Vlw8e5Xk.png";var lt={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const rt={setup(){const u=()=>{s.push("/products"),window.scrollTo(0,0)},{VITE_APP_URL:i,VITE_APP_PATH:h}=lt,s=O(),V=X(),S=Z(),{getCart:k}=S,m=r([]),w=r(V.params.productId),_=r({loadingItem:""}),g=r(!1),b=$(),{pushMessage:x}=b,o=e=>{_.value.loadingItem=e;const f={product_id:e,qty:1},R=`${i}/api/${h}/cart`;P.post(R,{data:f}).then(F=>{_.value.loadingItem="",x({style:"success",title:"加入購物車",content:F.data.message}),k()})},p=(e=2)=>{g.value=!0,P.get(`${i}/api/${h}/products?page=${e}`).then(f=>{m.value=f.data.products,g.value=!1}).catch(f=>{alert(f.response.data.message)})},A=e=>{s.push(`/product/${e.id}`).then(()=>{window.scrollTo(0,0)})},j=r(!0),U=e=>{e===""?j.value=!0:j.value=!1,console.log(e)},T=r(null),B=()=>{P.get(`${i}/api/${h}/products/all`).then(e=>{e.data.success&&e.data.products.length>0&&(T.value=e.data.products[e.data.products.length-1])}).catch(e=>{console.error(e.response.data.message),T.value=null})},C=r(null),I=()=>{P.get(`${i}/api/${h}/products/all`).then(e=>{e.data.success&&e.data.products.length>0&&(C.value=e.data.products[e.data.products.length-2])}).catch(e=>{console.error(e.response.data.message),C.value=null})},L=r(4),M=()=>{window.innerWidth<=767?L.value=1:L.value=4};return Q(()=>{p(),B(),I(),M(),window.addEventListener("resize",M)}),W(()=>{window.removeEventListener("resize",M)}),{modules:[D,z,st,ot],goToShop:u,products:m,openModal:A,addToCart:o,handleCategoryClick:U,id:w,status:_,isLoading:g,lastProduct:T,secondLastProduct:C,slidesPerView:L}},components:{Swiper:q,SwiperSlide:H,ToastMessages:tt}},dt={id:"app"},ut=t("img",{src:et,width:"500",alt:"loading",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},null,-1),_t={class:"row p-0 bg-black"},pt=t("div",{class:"col-md-5 col-12 p-0"},[t("img",{src:it,class:"img-fluid w-100 object-fit-cover",style:{height:"500px"},alt:"banner"})],-1),mt={class:"col-md-7 col-12 text-center align-self-center mt-5 p-0"},ht=t("p",{class:"text-light",style:{"font-size":"1.5em"}}," 讓您的貓咪成為時尚界的新寵兒! ",-1),gt={class:"container mt-8"},ft=t("h3",{class:"text-center text-brown"},[N(" 精選商品 "),t("div",{class:"text-center text-brown m-0 p-0 fs-1"},"-")],-1),vt={id:"swiper"},wt={class:"row"},bt=["onClick"],xt={key:0,class:"position-absolute top-0 start-0 fw-bold text-white p-2 bg-brown rounded-top"},yt=["src"],Pt={class:"card-body d-flex flex-column justify-content-between p-3"},kt={class:"card-title"},Tt={key:0,class:"text-gray2 fs-5 mt-2"},Ct={key:1,class:"d-flex align-items-center justify-content-center ms-2 mt-2"},Lt={class:"text-gray2 fs-5"},Mt={class:"text-brown fs-5 ms-3"},Vt={class:"mt-2"},St=["onClick"],jt={key:0,class:"spinner-border spinner-border-sm","aria-hidden":"true"},Et=t("i",{class:"bi bi-cart-plus fs-5"},null,-1),Nt={class:"container-fluid mt-8"},At={class:"row pc"},Ut={key:0,class:"col-md-6 p-0 bg-white d-flex justify-content-start text-start",style:{width:"600px"}},Bt={class:"ms-5"},It=t("p",{class:"fs-1 mt-8"},"新品上市",-1),Rt={class:"card-title fs-5 mt-6 mb-3"},Ft={class:"card-title text-brown fs-5"},Dt={class:"fs-6 my-5",style:{width:"300px"}},zt={class:"col-md-6 p-0 position-relative cursor-pointer"},qt=["src"],Ht={class:"row pc"},Kt={key:0,class:"col-md-6 p-0 bg-white d-flex justify-content-start text-start",style:{width:"600px"}},Ot={class:"ms-5"},Xt=t("p",{class:"fs-1 mt-8"},"新品上市",-1),Qt={class:"card-title fs-5 mt-6 mb-3"},Wt={class:"card-title text-brown fs-5"},Gt={class:"fs-6 my-5",style:{width:"300px"}},Jt={class:"col-md-6 p-0 position-relative cursor-pointer"},Yt=["src"],Zt={class:"row newProduct mobile"},$t={class:"col-12 position-relative cursor-pointer"},ts=["src"],ss=t("a",{class:"position-absolute top-50 start-50 translate-middle text-decoration-underline text-white fs-4"}," 新品上市 ",-1),os={class:"row newProduct mobile"},es={class:"col-12 position-relative cursor-pointer"},is=["src"],ns=t("a",{class:"position-absolute top-50 start-50 translate-middle text-decoration-underline text-white fs-4"}," 新品上市 ",-1),cs={class:"container mt-8"},as={class:"row"},ls={class:"col-md-4 col-12 mb-3 position-relative category"},rs=t("img",{src:nt,class:"img-fluid w-100 object-fit-cover rounded-3",style:{height:"400px"},alt:"productPicture"},null,-1),ds=t("p",{class:"fs-5 position-absolute top-50 start-50 translate-middle text-decoration-underline text-white"}," 生活用品 ",-1),us={class:"col-md-4 col-12 mb-3 position-relative category"},_s=t("img",{src:ct,class:"img-fluid w-100 object-fit-cover rounded-3",style:{height:"400px"},alt:"productPicture"},null,-1),ps=t("p",{class:"fs-5 position-absolute top-50 start-50 translate-middle text-decoration-underline text-white"}," 時尚配件 ",-1),ms={class:"col-md-4 col-12 mb-3 position-relative category"},hs=t("img",{src:at,class:"img-fluid w-100 object-fit-cover rounded-3",style:{height:"400px"},alt:"productPicture"},null,-1),gs=t("p",{class:"fs-5 position-absolute top-50 start-50 translate-middle text-decoration-underline text-white"}," 休閒娛樂 ",-1);function fs(u,i,h,s,V,S){var b,x;const k=v("VueLoading"),m=v("swiper-slide"),w=v("swiper"),_=v("RouterLink"),g=v("ToastMessages");return c(),d(E,null,[t("div",dt,[a(k,{active:s.isLoading,"is-full-page":!0,"background-color":"#FFF8F1",opacity:1,"z-index":1060},{default:l(()=>[ut]),_:1},8,["active"]),t("div",_t,[pt,t("div",mt,[ht,t("button",{type:"button",class:"btn btn-outline-light m-3 px-5 btn-lg rounded-0",onClick:i[0]||(i[0]=(...o)=>s.goToShop&&s.goToShop(...o))}," 立即選購 ")])])]),t("div",gt,[ft,t("div",vt,[a(w,{slidesPerView:s.slidesPerView,grabCursor:!0,spaceBetween:30,pagination:{clickable:!0},freeMode:!0,modules:s.modules,class:"mySwiper",mousewheel:!0,keyboard:!0},{default:l(()=>[(c(!0),d(E,null,G(s.products,o=>(c(),J(m,{key:o.id},{default:l(()=>[t("div",wt,[t("div",{class:"card shadow-sm rounded-lg border-0 position-relative col-12 ms-3 p-0 mb-3",onClick:p=>s.openModal(o)},[o.price!==o.origin_price?(c(),d("span",xt,"SALE")):y("",!0),t("img",{src:o.imageUrl,class:"card-img-top object-fit-cover w-100",style:{height:"300px"},alt:"productPicture"},null,8,yt),t("div",Pt,[t("div",kt,n(o.title),1),o.price===o.origin_price?(c(),d("div",Tt," $"+n(u.$filters.numberToCurrencyNo(o.origin_price)),1)):(c(),d("div",Ct,[t("del",Lt,"$"+n(u.$filters.numberToCurrencyNo(o.origin_price)),1),t("div",Mt," $"+n(u.$filters.numberToCurrencyNo(o.price)),1)])),t("div",Vt,[t("button",{type:"button",class:"btn btn-outline-brown m-2 px-5 rounded-pill",onClick:Y(p=>s.addToCart(o.id,1),["stop"])},[o.id===s.status.loadingItem?(c(),d("span",jt)):y("",!0),N(" 加入購物車 "),Et],8,St)])])],8,bt)])]),_:2},1024))),128))]),_:1},8,["slidesPerView","modules"])])]),t("div",Nt,[a(w,{navigation:!0,modules:s.modules,class:"mySwiper"},{default:l(()=>[a(m,null,{default:l(()=>{var o;return[t("div",At,[s.lastProduct?(c(),d("div",Ut,[t("div",Bt,[It,t("p",Rt,n(s.lastProduct.title),1),t("span",Ft,"$"+n(u.$filters.numberToCurrencyNo(s.lastProduct.price)),1),t("p",Dt,n(s.lastProduct.content),1),t("p",{class:"mb-3 fs-6 cursor-pointer text-decoration-underline",onClick:i[1]||(i[1]=p=>s.openModal(s.lastProduct))}," 立即選購 >> ")])])):y("",!0),t("div",zt,[t("img",{src:(o=s.lastProduct)==null?void 0:o.imagesUrl[0],class:"img-fluid object-fit-cover w-100",style:{height:"600px"},alt:"picture",onClick:i[2]||(i[2]=p=>s.openModal(s.lastProduct))},null,8,qt)])])]}),_:1}),a(m,null,{default:l(()=>{var o;return[t("div",Ht,[s.secondLastProduct?(c(),d("div",Kt,[t("div",Ot,[Xt,t("p",Qt,n(s.secondLastProduct.title),1),t("span",Wt,"$"+n(u.$filters.numberToCurrencyNo(s.secondLastProduct.price)),1),t("p",Gt,n(s.secondLastProduct.content),1),t("p",{class:"mb-3 fs-6 cursor-pointer text-decoration-underline",onClick:i[3]||(i[3]=p=>s.openModal(s.secondLastProduct))}," 立即選購 >> ")])])):y("",!0),t("div",Jt,[t("img",{src:(o=s.secondLastProduct)==null?void 0:o.imagesUrl[0],class:"img-fluid object-fit-cover w-100",style:{height:"600px"},alt:"picture",onClick:i[4]||(i[4]=p=>s.openModal(s.secondLastProduct))},null,8,Yt)])])]}),_:1})]),_:1},8,["modules"]),t("div",Zt,[t("div",$t,[t("img",{src:(b=s.lastProduct)==null?void 0:b.imagesUrl[0],class:"img-fluid object-fit-cover w-100",style:{height:"600px"},alt:"picture",onClick:i[5]||(i[5]=o=>s.openModal(s.lastProduct))},null,8,ts),ss])]),t("div",os,[t("div",es,[t("img",{src:(x=s.secondLastProduct)==null?void 0:x.imagesUrl[0],class:"img-fluid object-fit-cover w-100",style:{height:"600px"},alt:"picture",onClick:i[6]||(i[6]=o=>s.openModal(s.secondLastProduct))},null,8,is),ns])])]),t("div",cs,[t("div",as,[t("div",ls,[a(_,{class:"text-decoration-none",to:"/products?category=生活用品",onclick:"window.scrollTo(0, 0);"},{default:l(()=>[rs,ds]),_:1})]),t("div",us,[a(_,{class:"text-decoration-none",to:"/products?category=時尚配件",onclick:"window.scrollTo(0, 0);"},{default:l(()=>[_s,ps]),_:1})]),t("div",ms,[a(_,{class:"text-decoration-none",to:"/products?category=休閒娛樂",onclick:"window.scrollTo(0, 0);"},{default:l(()=>[hs,gs]),_:1})])])]),a(g)],64)}const Cs=K(rt,[["render",fs]]);export{Cs as default};
