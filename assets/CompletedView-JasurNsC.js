import{P as F,M as O,K as U,S as D,a as q}from"./pagination-nIvn03t2.js";import{_ as z,k as H,l as K,g as _,h as G,r as b,o as r,c as i,b as x,w as k,a as t,B,F as C,m as T,t as o,q as N,d as I,j as m,n as J}from"./index-UZsKeGfk.js";import{a as g}from"./axios-G2rPRu76.js";import{u as Q}from"./cartStore-l8_wA-I8.js";import{u as W}from"./toastMessage-fhLbAC8L.js";import{_ as X}from"./ToastMessages-Jfe-zVB1.js";import{_ as Y}from"./loading-pmP7T_O5.js";var Z={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/CatPaws/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const tt={setup(){const{VITE_APP_URL:a,VITE_APP_PATH:l}=Z,P=H(),s=K(),M=Q(),S=W(),{pushMessage:u}=S,{getCart:h}=M,v=_({}),f=_(s.params.productId),e=_([]),p=_({loadingItem:""}),d=_(!1),$=()=>{d.value=!0,g.get(`${a}/api/${l}/products`).then(n=>{e.value=n.data.products,d.value=!1}).catch(n=>{alert(n.response.data.message),d.value=!1})},E=n=>{P.push(`/product/${n.id}`).then(()=>{window.scrollTo(0,0)})},L=n=>{p.value.loadingItem=n;const c={product_id:n,qty:1},A=`${a}/api/${l}/cart`;g.post(A,{data:c}).then(R=>{p.value.loadingItem="",u({style:"success",title:"加入購物車",content:R.data.message}),h()})},w=_(s.params.orderId),V=_({user:{}}),y=()=>{const n=`${a}/api/${l}/order/${w.value}`;d.value=!0,g.get(n).then(c=>{V.value=c.data.order,d.value=!1}).catch(c=>{u({style:"danger",title:"錯誤訊息",content:c.response.data.message}),d.value=!1})},j=()=>{const n=`${a}/api/${l}/pay/${w.value}`;d.value=!0,g.post(n).then(()=>{y(),d.value=!1,u({style:"success",title:"付款成功",content:"感謝您的支持"})}).catch(c=>{u({style:"danger",title:"錯誤訊息",content:c.response.data.message}),d.value=!1}),window.scrollTo(0,0)};return y(),G(()=>{$(),h()}),{modules:[F,O,U],products:e,carts:v,openModal:E,addToCart:L,getOrder:y,getCart:h,id:f,status:p,isLoading:d,order:V,orderId:w,payOrder:j}},components:{Swiper:D,SwiperSlide:q,ToastMessages:X}},et=t("img",{src:Y,width:"500",alt:"loading",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},null,-1),st={class:"container mt-7 p-0"},ot={"aria-label":"breadcrumb"},rt={class:"breadcrumb"},it={key:0,class:"breadcrumb-item active","aria-current":"page"},at={key:1,class:"breadcrumb-item active","aria-current":"page"},nt={class:"container-fluid mt-6 rwdStep"},dt={class:"position-relative m-4"},lt=t("div",{class:"progress",style:{height:"2px"}},[t("div",{class:"progress-bar",role:"progressbar",style:{width:"100%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})],-1),ct=t("button",{type:"button",class:"position-absolute top-0 start-0 translate-middle btn btn-sm btn-brown rounded-pill",style:{width:"2rem",height:"2rem"}}," 1 ",-1),_t=t("button",{type:"button",class:"position-absolute top-0 start-50 translate-middle btn btn-sm btn-brown rounded-pill",style:{width:"2rem",height:"2rem"}}," 2 ",-1),ut={class:"pt-1"},ht={class:"position-relative m-4"},pt=t("div",{class:"position-absolute top-0 start-0 translate-middle text-brown",style:{width:"4rem",height:"2rem"}}," 確認商品 ",-1),bt=t("div",{class:"position-absolute top-0 start-50 translate-middle text-brown",style:{width:"4rem",height:"2rem"}}," 填寫資料 ",-1),mt={class:"container mt-5"},gt={class:"row"},vt={class:"table pc align-middle border-bottom border-lightBrown"},ft=t("thead",null,[t("tr",{class:"text-center"},[t("th",{width:"200"},"商品名稱"),t("th",{width:"120"},"單價"),t("th",{width:"200",class:"text-center"},"數量"),t("th",{width:"200"},"小計")])],-1),wt={class:"text-center"},yt=["src"],xt={class:"border-bottom border-white"},kt={colspan:"4",class:"text-end pe-8"},Ct={class:"text-brown fs-5 text-end mt-3"},Tt={class:"mobile"},Pt={class:"row"},Mt={class:"col-4 p-0"},St=["src"],Vt={class:"col-8 p-0"},Bt={class:"mt-3 d-flex justify-content-between"},Nt={class:"col-3 text-center"},It={class:"border-top border-lightBrown p-4 bg-white"},$t={class:"text-brown fs-5 text-end"},Et={class:"row px-2 py-5 fs-6"},Lt={class:"mb-5"},jt={key:0,class:"text-danger fw-bold"},At={key:1,class:"text-success fw-bold"},Rt={class:"col-md-6 col-12"},Ft={class:"mb-3"},Ot={class:"mb-3"},Ut={class:"mb-3"},Dt={class:"mb-4"},qt={class:"mb-3 text-gray2"},zt={class:"col-md-6 col-12"},Ht=t("div",{class:"mb-3"},"留言",-1),Kt={class:"border border-1 rounded p-2 w-100 bg-white",style:{height:"150px"}},Gt={key:0,class:"text-end"},Jt=t("div",null,[t("button",{type:"submit",class:"btn p-0 border-0"},[t("div",{class:"d-flex justify-content-center text-brown"},[t("div",{class:"d-flex align-items-center justify-content-center",style:{width:"185px",height:"40px",background:"#ffffff",border:"1px solid #a2672d"}},[t("a",{class:"text-center bg-brown text-decoration-none text-white m-1 d-block",style:{width:"175px",height:"30px","line-height":"30px"}},"確認付款 ")])])])],-1),Qt=[Jt],Wt={key:0,class:"container mt-8 p-0"},Xt=t("h3",{class:"text-center text-brown"},[I(" 猜你喜歡 "),t("div",{class:"text-center text-brown m-0 p-0 fs-1"},"-")],-1),Yt={id:"swiper"},Zt=["onClick"],te={key:0,class:"position-absolute top-0 start-0 fw-bold fs-6 text-white p-2 bg-brown"},ee=["src"],se={class:"card-body"},oe={class:"card-title"},re={key:0,class:"text-gray2 fs-5 card-title text-center"},ie={key:1,class:"d-flex align-items-center justify-content-center card-title ms-2"},ae={class:"text-gray2 fs-5"},ne={class:"text-brown fs-5 ms-3"},de=t("br",null,null,-1),le=["onClick"],ce={key:0,class:"spinner-border spinner-border-sm","aria-hidden":"true"},_e=t("i",{class:"bi bi-cart-plus"},null,-1);function ue(a,l,P,s,M,S){const u=b("VueLoading"),h=b("swiper-slide"),v=b("swiper"),f=b("ToastMessages");return r(),i("div",null,[x(u,{active:s.isLoading,"is-full-page":!0,"background-color":"#FFF8F1",opacity:1,"z-index":1060},{default:k(()=>[et]),_:1},8,["active"]),t("div",st,[t("nav",ot,[t("ol",rt,[s.order.is_paid===!0?(r(),i("li",it," 訂單完成!感謝您的購買! ")):(r(),i("li",at," 待付款訂單 "))])])]),t("div",nt,[t("div",dt,[lt,ct,_t,t("button",{type:"button",class:B(["position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill",s.order.is_paid?"btn-brown":"btn-gray2"]),style:{width:"2rem",height:"2rem"}}," 3 ",2)]),t("div",ut,[t("div",ht,[pt,bt,t("div",{class:B(["position-absolute top-0 start-100 translate-middle",s.order.is_paid?"text-brown":"text-black"]),style:{width:"4rem",height:"2rem"}}," 完成訂單 ",2)])])]),t("div",mt,[t("div",gt,[t("table",vt,[ft,t("tbody",wt,[(r(!0),i(C,null,T(s.order.products,e=>(r(),i("tr",{key:e.id},[t("td",null,[t("div",null,[t("img",{src:e.product.imageUrl,class:"img-fluid object-fit-cover",style:{width:"80px",height:"80px"},alt:""},null,8,yt),t("div",null,o(e.product.title),1)])]),t("td",null,"$"+o(a.$filters.numberToCurrencyNo(e.product.price)),1),t("td",null,o(e.qty),1),t("td",null,"$"+o(a.$filters.numberToCurrencyNo(e.total)),1)]))),128))]),t("tfoot",xt,[t("tr",null,[t("td",kt,[t("div",Ct," 訂單金額：$"+o(a.$filters.numberToCurrencyNo(Math.floor(s.order.total)))+"元 ",1)])])])]),t("div",Tt,[(r(!0),i(C,null,T(s.order.products,e=>(r(),i("div",{class:"border-top border-lightBrown p-3 bg-white",key:e.id},[t("div",Pt,[t("div",Mt,[t("img",{src:e.product.imageUrl,class:"img-fluid object-fit-cover",style:{width:"80px",height:"80px"},alt:""},null,8,St)]),t("div",Vt,[t("div",null,o(e.product.title),1),t("div",Bt,[t("div",null,"$"+o(a.$filters.numberToCurrencyNo(e.total)),1),t("div",Nt,"x "+o(e.qty),1)])])])]))),128)),t("div",It,[t("div",$t," 訂單金額：$"+o(a.$filters.numberToCurrencyNo(Math.floor(s.order.total)))+"元 ",1)])])]),t("form",{onSubmit:l[0]||(l[0]=N((...e)=>s.payOrder&&s.payOrder(...e),["prevent"]))},[t("div",Et,[t("div",Lt,[I(" 付款狀態 "),s.order.is_paid?(r(),i("span",At,"付款完成")):(r(),i("span",jt,"尚未付款"))]),t("div",Rt,[t("div",Ft,"送貨地址："+o(s.order.user.address),1),t("div",Ot,"Email："+o(s.order.user.email),1),t("div",Ut,"顧客姓名："+o(s.order.user.name),1),t("div",Dt,"電話："+o(s.order.user.tel),1),t("div",qt," 下單時間："+o(a.$filters.date(s.order.create_at)),1)]),t("div",zt,[Ht,t("div",Kt,o(s.order.message),1)])]),s.order.is_paid===!1?(r(),i("div",Gt,Qt)):m("",!0)],32)]),s.order.is_paid===!0?(r(),i("div",Wt,[Xt,t("div",Yt,[x(v,{slidesPerView:1,spaceBetween:10,pagination:{clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:4,spaceBetween:30}},grabCursor:!0,freeMode:!0,modules:s.modules,class:"mySwiper",mousewheel:!0,keyboard:!0},{default:k(()=>[(r(!0),i(C,null,T(s.products,e=>(r(),J(h,{key:e.id},{default:k(()=>[t("div",{style:{height:"450px"},class:"card shadow-sm rounded-lg border-0 position-relative mb-5",onClick:p=>s.openModal(e)},[e.price!==e.origin_price?(r(),i("span",te,"SALE")):m("",!0),t("img",{src:e.imageUrl,class:"card-img-top object-fit-cover w-100",style:{height:"300px"},alt:"productPicture"},null,8,ee),t("div",se,[t("p",oe,o(e.title),1),e.price===e.origin_price?(r(),i("div",re," $"+o(a.$filters.numberToCurrencyNo(e.origin_price)),1)):(r(),i("div",ie,[t("del",ae,"$"+o(a.$filters.numberToCurrencyNo(e.origin_price)),1),t("div",ne," $"+o(a.$filters.numberToCurrencyNo(e.price)),1)])),de,t("button",{type:"button",class:"btn btn-outline-brown border-0 fs-5 m-2 position-absolute bottom-0 end-0",onClick:N(p=>s.addToCart(e.id,1),["stop"])},[e.id===s.status.loadingItem?(r(),i("span",ce)):m("",!0),_e],8,le)])],8,Zt)]),_:2},1024))),128))]),_:1},8,["modules"])])])):m("",!0),x(f)])}const we=z(tt,[["render",ue]]);export{we as default};