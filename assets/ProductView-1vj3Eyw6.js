import{a as j}from"./axios-G2rPRu76.js";import{v as G,x as K,u as Y,g as r,s as B,_ as D,o as h,c as y,a as e,y as R,z as N,A as U,F as A,m as q,B as Q,k as J,l as Z,h as ee,r as S,b as P,w as L,t as x,C as te,j as X,d as $,n as se,q as oe}from"./index-UZsKeGfk.js";import{u as ne}from"./cartStore-l8_wA-I8.js";import{u as ie}from"./toastMessage-fhLbAC8L.js";import{_ as ae}from"./ToastMessages-Jfe-zVB1.js";import{P as re,M as le,K as ce,S as de,a as ue}from"./pagination-nIvn03t2.js";import{_ as pe}from"./loading-pmP7T_O5.js";function me(s){return G()?(K(s),!0):!1}function W(s){return typeof s=="function"?s():Y(s)}const fe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const _e=Object.prototype.toString,ve=s=>_e.call(s)==="[object Object]",ge=()=>{};function F(s){var n;const f=W(s);return(n=f==null?void 0:f.$el)!=null?n:f}const H=fe?window:void 0;function I(...s){let n,f,t,u;if(typeof s[0]=="string"||Array.isArray(s[0])?([f,t,u]=s,n=H):[n,f,t,u]=s,!n)return ge;Array.isArray(f)||(f=[f]),Array.isArray(t)||(t=[t]);const l=[],m=()=>{l.forEach(c=>c()),l.length=0},g=(c,i,o,v)=>(c.addEventListener(i,o,v),()=>c.removeEventListener(i,o,v)),p=B(()=>[F(n),W(u)],([c,i])=>{if(m(),!c)return;const o=ve(i)?{...i}:i;l.push(...f.flatMap(v=>t.map(b=>g(c,v,b,o))))},{immediate:!0,flush:"post"}),_=()=>{p(),m()};return me(_),_}const he={page:s=>[s.pageX,s.pageY],client:s=>[s.clientX,s.clientY],screen:s=>[s.screenX,s.screenY],movement:s=>s instanceof Touch?null:[s.movementX,s.movementY]};function be(s={}){const{type:n="page",touch:f=!0,resetOnTouchEnds:t=!1,initialValue:u={x:0,y:0},window:l=H,target:m=l,scroll:g=!0,eventFilter:p}=s;let _=null;const c=r(u.x),i=r(u.y),o=r(null),v=typeof n=="function"?n:he[n],b=a=>{const d=v(a);_=a,d&&([c.value,i.value]=d,o.value="mouse")},w=a=>{if(a.touches.length>0){const d=v(a.touches[0]);d&&([c.value,i.value]=d,o.value="touch")}},k=()=>{if(!_||!l)return;const a=v(_);_ instanceof MouseEvent&&a&&(c.value=a[0]+l.scrollX,i.value=a[1]+l.scrollY)},M=()=>{c.value=u.x,i.value=u.y},E=p?a=>p(()=>b(a),{}):a=>b(a),V=p?a=>p(()=>w(a),{}):a=>w(a),C=p?()=>p(()=>k(),{}):()=>k();if(m){const a={passive:!0};I(m,["mousemove","dragover"],E,a),f&&n!=="movement"&&(I(m,["touchstart","touchmove"],V,a),t&&I(m,"touchend",M,a)),g&&n==="page"&&I(l,"scroll",C,{passive:!0})}return{x:c,y:i,sourceType:o}}function ye(s,n={}){const{handleOutside:f=!0,window:t=H}=n,u=n.type||"page",{x:l,y:m,sourceType:g}=be(n),p=r(s??(t==null?void 0:t.document.body)),_=r(0),c=r(0),i=r(0),o=r(0),v=r(0),b=r(0),w=r(!0);let k=()=>{};return t&&(k=B([p,l,m],()=>{const M=F(p);if(!M)return;const{left:E,top:V,width:C,height:a}=M.getBoundingClientRect();i.value=E+(u==="page"?t.pageXOffset:0),o.value=V+(u==="page"?t.pageYOffset:0),v.value=a,b.value=C;const d=l.value-i.value,T=m.value-o.value;w.value=C===0||a===0||d<0||T<0||d>C||T>a,(f||!w.value)&&(_.value=d,c.value=T)},{immediate:!0}),I(document,"mouseleave",()=>{w.value=!0})),{x:l,y:m,sourceType:g,elementX:_,elementY:c,elementPositionX:i,elementPositionY:o,elementHeight:v,elementWidth:b,isOutside:w,stop:k}}const we={class:"goods-image flex-column d-flex align-items-between p-0"},xe=["src"],ke={class:"small d-flex px-0 m-0"},Ce=["onMouseenter"],Te=["src"],Pe={__name:"ImageComponentView",props:{imageList:{type:Array,default:()=>[]}},setup(s){const n=r(0),f=i=>{n.value=i},t=r(null),{elementX:u,elementY:l,isOutside:m}=ye(t),g=r(0),p=r(0),_=r(0),c=r(0);return B([u,l,m],()=>{m.value||(u.value>125&&u.value<325&&(g.value=u.value-125),l.value>125&&l.value<325&&(p.value=l.value-125),u.value<125&&(g.value=0),u.value>325&&(g.value=225),l.value<125&&(p.value=0),l.value>325&&(p.value=225),_.value=-g.value*2,c.value=-p.value*2)}),(i,o)=>(h(),y("div",we,[e("div",{class:"middle",ref_key:"target",ref:t},[e("img",{src:s.imageList[n.value],class:"img-fluid object-fit-cover w-100",alt:""},null,8,xe),R(e("div",{class:"layer",style:U({left:`${g.value}px`,top:`${p.value}px`})},null,4),[[N,!Y(m)]])],512),e("ul",ke,[(h(!0),y(A,null,q(s.imageList,(v,b)=>(h(),y("li",{class:Q(["list-unstyled p-0 me-2",{active:b===n.value}]),key:b,onMouseenter:w=>f(b)},[e("img",{src:v,class:"img-fluid object-fit-cover w-100 h-100",alt:""},null,8,Te)],42,Ce))),128))]),R(e("div",{class:"large",style:U([{backgroundImage:`url(${s.imageList[n.value]})`,backgroundPositionX:`${_.value}px`,backgroundPositionY:`${c.value}px`}])},null,4),[[N,!Y(m)]])]))}},Me=D(Pe,[["__scopeId","data-v-70dfa292"]]);var Se={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/CatPaws/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Le={setup(){const{VITE_APP_URL:s,VITE_APP_PATH:n}=Se,f=J(),t=Z(),u=ne(),{getCart:l}=u,m=ie(),{pushMessage:g}=m,p=r(t.params.productId),_=r([]),c=r({loadingItem:""}),i=r(!1),o=r({}),v=r([]),b=r(1),w=r(t.params),k=()=>{i.value=!0,j.get(`${s}/api/${n}/product/${w.value.id}`).then(d=>{o.value=d.data.product,v.value=d.data.product.imagesUrl,i.value=!1})},M=()=>{i.value=!0,j.get(`${s}/api/${n}/products`).then(d=>{_.value=d.data.products,i.value=!1}).catch(d=>{alert(d.response.data.message),i.value=!1})},E=d=>{w.value=d,f.push(`/product/${d.id}`).then(()=>{window.scrollTo(0,0)}),k()},V=r(["時尚配件","休閒娛樂","生活用品"]),C=()=>{const{category:d=""}=t.query,T=`${s}/api/${n}/products?category=${d}`;i.value=!0,j.get(T).then(O=>{o.value=O.data.products,i.value=!1})},a=d=>{c.value.loadingItem=d;const T={product_id:d,qty:b.value},O=`${s}/api/${n}/cart`;j.post(O,{data:T}).then(z=>{c.value.loadingItem="",g({style:"success",title:"加入購物車",content:z.data.message}),l(),window.scrollTo(0,0)})};return B(()=>t.query,()=>{l()}),ee(()=>{k(),l(),M()}),{modules:[re,le,ce],products:_,openModal:E,addToCart:a,product:o,imagesUrl:v,qty:b,categories:V,getProducts:C,gProduct:w,id:p,status:c,isLoading:i}},components:{Swiper:de,SwiperSlide:ue,ImageComponent:Me,ToastMessages:ae}},Ee={id:"app"},Ve=e("img",{src:pe,width:"500",alt:"loading",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},null,-1),$e={class:"container mt-7"},Ie={"aria-label":"breadcrumb"},je={class:"breadcrumb"},Ae={class:"breadcrumb-item",to:"/"},Be={class:"breadcrumb-item"},Oe={class:"breadcrumb-item active","aria-current":"page"},Xe={class:"container bg-vanilla pt-2 pb-5"},Ye={class:"row mt-5"},Re={class:"col-md-6 d-flex justify-content-center p-0"},qe={class:"col-md-6 d-flex flex-column justify-content-between p-0"},He={class:"fs-4 mb-4 px-2"},Ne={class:"mb-4 px-2"},Ue={key:0,class:"text-gray2 fs-5"},De={key:1,class:"d-flex align-items-center justify-content-start"},We={class:"text-gray2 fs-5 me-2"},Fe={class:"text-brown fs-4"},ze={class:"mb-5 px-2"},Ge=e("div",{class:"fs-6 mb-2"},"商品內容:",-1),Ke={style:{"white-space":"pre-wrap"}},Qe={class:"input-group mb-4 px-2 rwdQty"},Je=["disabled"],Ze={class:"d-flex justify-content-between mb-3 rwdQty"},et={class:"d-flex justify-content-center text-brown"},tt={class:"d-flex align-items-center justify-content-center btnHover",style:{width:"150px",height:"40px",background:"#ffffff",border:"1px solid #e8b887"}},st={key:0,class:"spinner-border spinner-border-sm","aria-hidden":"true"},ot={class:"d-flex justify-content-center text-brown"},nt={class:"d-flex align-items-center justify-content-center",style:{width:"150px",height:"40px",background:"#ffffff",border:"1px solid #a2672d"}},it={class:"mt-7 col-12 col-md-8 margin-auto"},at=e("div",{class:"fs-6 mb-4"},"商品詳情:",-1),rt={style:{"white-space":"pre-wrap"}},lt={class:"list-unstyled mb-3"},ct=["src"],dt={class:"container mt-8"},ut=e("h3",{class:"text-center text-brown"},[$(" 猜你喜歡 "),e("div",{class:"text-center text-brown m-0 p-0 fs-1"},"-")],-1),pt={id:"swiper"},mt=["onClick"],ft={key:0,class:"position-absolute top-0 start-0 fw-bold text-white p-2 fs-6 bg-brown"},_t=["src"],vt={class:"card-body"},gt={class:"card-title"},ht={key:0,class:"text-gray2 fs-5 card-title text-center"},bt={key:1,class:"d-flex justify-content-center align-items-center card-title ms-2"},yt={class:"text-gray2 fs-5"},wt={class:"text-brown fs-5 ms-3"},xt=e("br",null,null,-1),kt=["onClick"],Ct={key:0,class:"spinner-border spinner-border-sm","aria-hidden":"true"},Tt=e("i",{class:"bi bi-cart-plus"},null,-1);function Pt(s,n,f,t,u,l){const m=S("VueLoading"),g=S("RouterLink"),p=S("ImageComponent"),_=S("swiper-slide"),c=S("swiper"),i=S("ToastMessages");return h(),y(A,null,[e("div",Ee,[P(m,{active:t.isLoading,"is-full-page":!0,"background-color":"#FFF8F1",opacity:1,"z-index":1060},{default:L(()=>[Ve]),_:1},8,["active"]),e("div",$e,[e("nav",Ie,[e("ol",je,[e("li",Ae,[P(g,{class:"text-black text-decoration-none",to:"/"},{default:L(()=>[$("首頁")]),_:1})]),e("li",Be,[P(g,{class:"text-black text-decoration-none",to:"/products"},{default:L(()=>[$("產品")]),_:1})]),e("li",Oe,x(t.product.category),1)])]),e("div",Xe,[e("div",Ye,[e("div",Re,[P(p,{imageList:t.imagesUrl,class:"mb-8"},null,8,["imageList"])]),e("div",qe,[e("div",He,x(t.product.title),1),e("div",Ne,[t.product.price===t.product.origin_price?(h(),y("div",Ue," $"+x(s.$filters.numberToCurrencyNo(t.product.origin_price)),1)):(h(),y("div",De,[e("del",We,"$"+x(s.$filters.numberToCurrencyNo(t.product.origin_price)),1),e("div",Fe," $"+x(s.$filters.numberToCurrencyNo(t.product.price)),1)]))]),e("div",ze,[Ge,e("div",Ke,x(t.product.content),1)]),e("div",Qe,[e("button",{type:"button",class:"btn btn-outline-lightBrown",disabled:t.qty===1,onClick:n[0]||(n[0]=o=>t.qty--)}," - ",8,Je),R(e("input",{"onUpdate:modelValue":n[1]||(n[1]=o=>t.qty=o),type:"number",min:"1",max:"20",class:"form-control text-center","aria-label":"Dollar amount (with dot and two decimal places)",readonly:""},null,512),[[te,t.qty,void 0,{number:!0}]]),e("button",{type:"button",class:"btn btn-outline-lightBrown",onClick:n[2]||(n[2]=o=>t.qty++)}," + ")]),e("div",Ze,[e("div",et,[e("div",tt,[e("div",{class:"text-center bg-lightBrown text-white m-1",style:{width:"140px",height:"30px","line-height":"30px"},onClick:n[3]||(n[3]=o=>t.addToCart(t.product.id))},[t.product.id===t.status.loadingItem?(h(),y("span",st)):X("",!0),$(" 加入購物車 ")])])]),e("div",ot,[e("div",nt,[P(g,{to:"/cart",class:"text-center bg-brown text-decoration-none text-white m-1",style:{width:"140px",height:"30px","line-height":"30px"},onClick:n[4]||(n[4]=o=>t.addToCart(t.product.id))},{default:L(()=>[$("立即購買 ")]),_:1})])])])])]),e("div",it,[at,e("div",rt,x(t.product.description),1),(h(!0),y(A,null,q(t.imagesUrl,o=>(h(),y("div",{class:"mt-5",key:o},[e("li",lt,[e("img",{src:o,class:"w-100",alt:""},null,8,ct)])]))),128))])])])]),e("div",dt,[ut,e("div",pt,[P(c,{slidesPerView:1,spaceBetween:10,pagination:{clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:4,spaceBetween:30}},grabCursor:!0,freeMode:!0,modules:t.modules,class:"mySwiper",mousewheel:!0,keyboard:!0},{default:L(()=>[(h(!0),y(A,null,q(t.products,o=>(h(),se(_,{key:o.id},{default:L(()=>[e("div",{style:{height:"450px"},class:"card shadow-sm rounded-lg border-0 position-relative mb-5",onClick:v=>t.openModal(o)},[o.price!==o.origin_price?(h(),y("span",ft,"SALE")):X("",!0),e("img",{src:o.imageUrl,class:"card-img-top object-fit-cover w-100",style:{height:"300px"},alt:"productPicture"},null,8,_t),e("div",vt,[e("p",gt,x(o.title),1),o.price===o.origin_price?(h(),y("div",ht," $"+x(s.$filters.numberToCurrencyNo(o.origin_price)),1)):(h(),y("div",bt,[e("del",yt,"$"+x(s.$filters.numberToCurrencyNo(o.origin_price)),1),e("div",wt," $"+x(s.$filters.numberToCurrencyNo(o.price)),1)])),xt,e("button",{type:"button",class:"btn btn-outline-brown border-0 fs-5 m-2 position-absolute bottom-0 end-0",onClick:oe(v=>t.addToCart(o.id,1),["stop"])},[o.id===t.status.loadingItem?(h(),y("span",Ct)):X("",!0),Tt],8,kt)])],8,mt)]),_:2},1024))),128))]),_:1},8,["modules"])])]),P(i)],64)}const jt=D(Le,[["render",Pt]]);export{jt as default};