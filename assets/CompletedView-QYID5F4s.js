import{P as F,N as O,S as D,a as q}from"./pagination-8r-E7CPD.js";import{_ as z,k as H,l as W,g as c,h as G,m as J,r as p,o as r,c as i,b as k,w as T,a as e,F as C,n as P,t as o,s as E,d as I,j as V,q as K}from"./index-uSsl23hN.js";import{a as b}from"./axios-G2rPRu76.js";import{u as Q}from"./cartStore-cT4yMnq_.js";import{u as X}from"./toastMessage-JDYJgB3a.js";import{_ as Y}from"./ToastMessages-KB8ckqvl.js";import{_ as Z}from"./loading-bneA9sLj.js";var ee={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const te={setup(){const{VITE_APP_URL:n,VITE_APP_PATH:l}=ee,S=H(),s=W(),M=Q(),N=X(),{pushMessage:u}=N,{getCart:h}=M,v=c({}),g=c(s.params.productId),t=c([]),m=c({loadingItem:""}),d=c(!1),L=()=>{d.value=!0,b.get(`${n}/api/${l}/products`).then(a=>{t.value=a.data.products,d.value=!1}).catch(a=>{alert(a.response.data.message),d.value=!1})},B=a=>{S.push(`/product/${a.id}`).then(()=>{window.scrollTo(0,0)})},A=a=>{m.value.loadingItem=a;const _={product_id:a,qty:1},R=`${n}/api/${l}/cart`;b.post(R,{data:_}).then(U=>{m.value.loadingItem="",u({style:"success",title:"加入購物車",content:U.data.message}),h()})},f=c(s.params.orderId),$=c({user:{}}),w=()=>{const a=`${n}/api/${l}/order/${f.value}`;d.value=!0,b.get(a).then(_=>{$.value=_.data.order,d.value=!1}).catch(_=>{u({style:"danger",title:"錯誤訊息",content:_.response.data.message}),d.value=!1})},j=()=>{const a=`${n}/api/${l}/pay/${f.value}`;d.value=!0,b.post(a).then(()=>{w(),d.value=!1,u({style:"success",title:"付款成功",content:"感謝您的支持"})}).catch(_=>{u({style:"danger",title:"錯誤訊息",content:_.response.data.message}),d.value=!1}),window.scrollTo(0,0)};w();const y=c(4),x=()=>{window.innerWidth<=767?y.value=1:y.value=4};return G(()=>{L(),h(),x(),window.addEventListener("resize",x)}),J(()=>{window.removeEventListener("resize",x)}),{modules:[F,O],products:t,carts:v,openModal:B,addToCart:A,getOrder:w,getCart:h,id:g,status:m,isLoading:d,order:$,orderId:f,payOrder:j,slidesPerView:y}},components:{Swiper:D,SwiperSlide:q,ToastMessages:Y}},se=e("img",{src:Z,width:"500",alt:"loading",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},null,-1),oe={class:"container mt-7 p-0"},re={"aria-label":"breadcrumb"},ie={class:"breadcrumb"},ne={key:0,class:"breadcrumb-item active","aria-current":"page"},ae={key:1,class:"breadcrumb-item active","aria-current":"page"},de={class:"container mt-5"},ce={class:"row"},le={class:"table pc align-middle border-bottom border-lightBrown"},_e=e("thead",null,[e("tr",{class:"text-center"},[e("th",{width:"200"},"商品名稱"),e("th",{width:"120"},"單價"),e("th",{width:"200",class:"text-center"},"數量"),e("th",{width:"200"},"小計")])],-1),ue={class:"text-center"},he=["src"],me={class:"border-bottom border-white"},pe={colspan:"4",class:"text-end pe-5"},be={class:"text-brown fs-5 text-end mt-3"},ve={class:"mobile"},ge={class:"row"},fe={class:"col-4"},we=["src"],ye={class:"col-5"},xe={class:"col-3 text-center"},ke={class:"border-top border-lightBrown p-3 bg-white"},Te={class:"text-brown fs-5 text-end mt-3"},Ce={class:"row px-2 py-5 fs-5"},Pe={class:"mb-5"},Ve={class:"col-md-6 col-12"},Se={class:"mb-3"},Me={class:"mb-3"},Ne={class:"mb-3"},$e={class:"mb-3"},Ee={class:"col-md-6 col-12"},Ie=e("div",{class:"mb-3"},"留言",-1),Le={class:"border border-1 rounded p-2 mb-3 w-100 bg-white",style:{height:"100px"}},Be={class:"text-end"},Ae={key:0,class:"text-danger"},je={key:1,class:"text-success"},Re={key:0,class:"text-end"},Ue=e("div",null,[e("button",{type:"submit",class:"btn p-0 border-0"},[e("div",{class:"d-flex justify-content-center text-brown"},[e("div",{class:"d-flex align-items-center justify-content-center",style:{width:"185px",height:"40px",background:"#ffffff",border:"1px solid #a2672d"}},[e("a",{class:"text-center bg-brown text-decoration-none text-white m-1 d-block",style:{width:"175px",height:"30px","line-height":"30px"}},"確認付款 ")])])])],-1),Fe=[Ue],Oe={class:"container mt-8 p-0"},De=e("h3",{class:"text-center text-brown"},[I(" 猜你喜歡 "),e("div",{class:"text-center text-brown m-0 p-0 fs-1"},"-")],-1),qe={id:"swiper"},ze={class:"row"},He=["onClick"],We={key:0,class:"position-absolute top-0 start-0 fw-bold text-white p-2 bg-brown rounded-top"},Ge=["src"],Je={class:"card-body"},Ke={class:"card-title"},Qe={key:0,class:"text-gray2 fs-5 card-title text-center"},Xe={key:1,class:"d-flex align-items-center justify-content-center card-title ms-2"},Ye={class:"text-gray2 fs-5"},Ze={class:"text-brown fs-5 ms-3"},et=e("br",null,null,-1),tt=["onClick"],st={key:0,class:"spinner-border spinner-border-sm","aria-hidden":"true"},ot=e("i",{class:"bi bi-cart-plus"},null,-1);function rt(n,l,S,s,M,N){const u=p("VueLoading"),h=p("swiper-slide"),v=p("swiper"),g=p("ToastMessages");return r(),i("div",null,[k(u,{active:s.isLoading,"is-full-page":!0,"background-color":"#FFF8F1",opacity:1,"z-index":1060},{default:T(()=>[se]),_:1},8,["active"]),e("div",oe,[e("nav",re,[e("ol",ie,[s.order.is_paid===!0?(r(),i("li",ne," 訂單完成!感謝您的購買! ")):(r(),i("li",ae," 待付款訂單 "))])])]),e("div",de,[e("div",ce,[e("table",le,[_e,e("tbody",ue,[(r(!0),i(C,null,P(s.order.products,t=>(r(),i("tr",{key:t.id},[e("td",null,[e("div",null,[e("img",{src:t.product.imageUrl,class:"img-fluid object-fit-cover",style:{width:"80px",height:"80px"},alt:""},null,8,he),e("div",null,o(t.product.title),1)])]),e("td",null,"$"+o(n.$filters.numberToCurrencyNo(t.product.price)),1),e("td",null,o(t.qty),1),e("td",null,"$"+o(n.$filters.numberToCurrencyNo(t.total)),1)]))),128))]),e("tfoot",me,[e("tr",null,[e("td",pe,[e("div",be," 訂單金額：$"+o(n.$filters.numberToCurrencyNo(Math.floor(s.order.total)))+"元 ",1)])])])]),e("div",ve,[(r(!0),i(C,null,P(s.order.products,t=>(r(),i("div",{class:"border-top border-lightBrown p-3 bg-white",key:t.id},[e("div",ge,[e("div",fe,[e("img",{src:t.product.imageUrl,class:"img-fluid object-fit-cover",style:{width:"80px",height:"80px"},alt:""},null,8,we)]),e("div",ye,[e("div",null,o(t.product.title),1),e("div",null,"$"+o(n.$filters.numberToCurrencyNo(t.total)),1)]),e("div",xe,"x "+o(t.qty),1)])]))),128)),e("div",ke,[e("div",Te," 訂單金額：$"+o(n.$filters.numberToCurrencyNo(Math.floor(s.order.total)))+"元 ",1)])])]),e("form",{onSubmit:l[0]||(l[0]=E((...t)=>s.payOrder&&s.payOrder(...t),["prevent"]))},[e("div",Ce,[e("div",Pe,"下單時間："+o(n.$filters.date(s.order.create_at)),1),e("div",Ve,[e("div",Se,"送貨地址："+o(s.order.user.address),1),e("div",Me,"Email："+o(s.order.user.email),1),e("div",Ne,"顧客姓名："+o(s.order.user.name),1),e("div",$e,"電話："+o(s.order.user.tel),1)]),e("div",Ee,[Ie,e("div",Le,o(s.order.message),1)]),e("div",Be,[I(" 付款狀態 "),s.order.is_paid?(r(),i("span",je,"付款完成")):(r(),i("span",Ae,"尚未付款"))])]),s.order.is_paid===!1?(r(),i("div",Re,Fe)):V("",!0)],32)]),e("div",Oe,[De,e("div",qe,[k(v,{slidesPerView:s.slidesPerView,grabCursor:!0,spaceBetween:30,pagination:{clickable:!0},freeMode:!0,modules:s.modules,class:"mySwiper",mousewheel:!0,keyboard:!0},{default:T(()=>[(r(!0),i(C,null,P(s.products,t=>(r(),K(h,{key:t.id},{default:T(()=>[e("div",ze,[e("div",{class:"card shadow-sm bg-body rounded-lg border-0 position-relative mb-3 col-12 ms-3 p-0",onClick:m=>s.openModal(t)},[t.price!==t.origin_price?(r(),i("span",We,"SALE")):V("",!0),e("img",{src:t.imageUrl,class:"card-img-top object-fit-cover w-100",style:{height:"300px"},alt:"productPicture"},null,8,Ge),e("div",Je,[e("p",Ke,o(t.title),1),t.price===t.origin_price?(r(),i("div",Qe," $"+o(n.$filters.numberToCurrencyNo(t.origin_price)),1)):(r(),i("div",Xe,[e("del",Ye,"$"+o(n.$filters.numberToCurrencyNo(t.origin_price)),1),e("div",Ze," $"+o(n.$filters.numberToCurrencyNo(t.price)),1)])),et,e("button",{type:"button",class:"btn btn-outline-brown border-0 fs-5 m-2 position-absolute bottom-0 end-0",onClick:E(m=>s.addToCart(t.id,1),["stop"])},[t.id===s.status.loadingItem?(r(),i("span",st)):V("",!0),ot],8,tt)])],8,He)])]),_:2},1024))),128))]),_:1},8,["slidesPerView","modules"])])]),k(g)])}const ut=z(te,[["render",rt]]);export{ut as default};
