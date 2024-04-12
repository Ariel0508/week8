import{_ as N,k as R,l as U,g as b,s as D,h as E,r as v,o as n,c as i,b as p,w as m,a as t,F as I,m as q,t as c,d as g,y as V,C as B,j as A}from"./index-Uhi6gd-0.js";import{a as k}from"./axios-G2rPRu76.js";import{u as F}from"./cartStore-iyzSn0gZ.js";import{u as O}from"./toastMessage-g2FpgOZr.js";import{_ as S}from"./ToastMessages-Gr7Bu1fV.js";import{_ as H}from"./loading-bneA9sLj.js";const Q="/week8/assets/empty-cart-Cdy4DvIF.png";var z={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const G={setup(){const{VITE_APP_URL:l,VITE_APP_PATH:d}=z,C=R(),o=U(),y=F(),T=O(),{pushMessage:f}=T,{getCart:r}=y,x=b([]),e=b(o.params.productId),s=b(y.carts),_=b({loadingItem:""}),$=b(!1),L=()=>{C.push("/order"),window.scrollTo(0,0)},u=()=>{const a=`${l}/api/${d}/cart`;k.get(a).then(h=>{s.value=h.data.data})},P=(a,h=1)=>{const w={product_id:a.product_id,qty:h};_.value.loadingItem=a.id;const M=`${l}/api/${d}/cart/${a.id}`;k.put(M,{data:w}).then(()=>{_.value.loadingItem="",u()})},j=a=>{_.value.loadingItem=a;const h=`${l}/api/${d}/cart/${a}`;k.delete(h).then(w=>{_.value.loadingItem="",f({style:"success",title:"刪除成功",content:w.data.message}),r(),u()})};return D(()=>s.value,()=>{u()}),E(()=>{r(),u()}),{products:x,id:e,carts:s,status:_,isLoading:$,changeCartQty:P,goToOrder:L,removeCartItem:j,getCartList:u}},components:{ToastMessages:S}},J=t("img",{src:H,width:"500",alt:"loading",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},null,-1),K=t("div",{class:"container mt-7 p-0"},[t("nav",{"aria-label":"breadcrumb"},[t("ol",{class:"breadcrumb"},[t("li",{class:"breadcrumb-item active","aria-current":"page"},"購物車")])])],-1),W={class:"container mt-5"},X={key:0,class:"row"},Y={class:"table align-middle border-lightBrown pc"},Z=t("thead",null,[t("tr",{class:"text-center"},[t("th",{width:"200"},"商品名稱"),t("th",{width:"120"},"單價"),t("th",{width:"200",class:"text-center"},"數量"),t("th",{width:"200"},"小計"),t("th",{width:"100"},"刪除")])],-1),tt={class:"text-center"},et=["src"],ot={class:"input-group w-100"},st=["disabled","onClick"],nt=t("span",{style:{height:"16px",width:"16px"}},"-",-1),it=[nt],lt=["onClick"],dt=t("span",{style:{height:"16px",width:"16px"}},[t("i",{class:"bi bi-trash"})],-1),at=[dt],ct=["onUpdate:modelValue","disabled"],rt=["onClick"],_t=t("span",{style:{height:"16px",width:"16px"}},"+",-1),ut=[_t],ht=["onClick"],bt={key:0,class:"spinner-border spinner-border-sm","aria-hidden":"true"},pt=t("i",{class:"bi bi-trash"},null,-1),mt={class:"border-white"},gt=t("td",null,null,-1),yt=t("td",null,null,-1),ft=t("td",null,null,-1),xt=t("td",null,null,-1),wt={class:"text-black mt-3 pe-7 text-end fs-5"},vt={class:"border-white"},kt=t("td",null,null,-1),Ct=t("td",null,null,-1),Tt=t("td",null,null,-1),It=t("td",null,null,-1),qt={class:"p-3"},Vt={class:"d-flex justify-content-center text-brown"},Bt={class:"d-flex align-items-center justify-content-center btnHover",style:{width:"185px",height:"40px",background:"#ffffff",border:"1px solid #a2672d"}},$t={class:"mobile"},Lt={class:"row"},Pt={class:"col-4 p-0"},jt=["src"],Mt={class:"col-8 p-0"},Nt={class:"mt-4 d-flex align-items-center justify-content-between"},Rt={class:"input-group w-100 ps-3"},Ut=["disabled","onClick"],Dt=t("span",{style:{height:"16px",width:"16px"}},"-",-1),Et=[Dt],At=["onClick"],Ft=t("span",{style:{height:"16px",width:"16px"}},[t("i",{class:"bi bi-trash"})],-1),Ot=[Ft],St=["onUpdate:modelValue","disabled"],Ht=["onClick"],Qt=t("span",{style:{height:"16px",width:"16px"}},"+",-1),zt=[Qt],Gt={class:"border-top border-lightBrown p-3 bg-white"},Jt={class:"text-black text-end mt-3 fs-5"},Kt={class:"d-flex justify-content-end text-brown my-3"},Wt={class:"d-flex align-items-center justify-content-center btnHover",style:{width:"185px",height:"40px",background:"#ffffff",border:"1px solid #a2672d"}},Xt={key:1,class:"text-center mb-8"},Yt={class:"d-flex flex-column justify-content-center align-items-center"},Zt=t("img",{src:Q,class:"img-fluid object-fit-cover",alt:"emptycartpicture",width:"300"},null,-1),te={class:"text-brown fs-5"},ee=t("br",null,null,-1);function oe(l,d,C,o,y,T){const f=v("VueLoading"),r=v("RouterLink"),x=v("ToastMessages");return n(),i("div",null,[p(f,{active:o.isLoading,"is-full-page":!0,"background-color":"#FFF8F1",opacity:1,"z-index":1060},{default:m(()=>[J]),_:1},8,["active"]),K,t("div",W,[o.carts.total!==0?(n(),i("div",X,[t("table",Y,[Z,t("tbody",tt,[(n(!0),i(I,null,q(o.carts.carts,e=>(n(),i("tr",{key:e.id},[t("td",null,[t("div",null,[t("img",{src:e.product.imageUrl,class:"img-fluid object-fit-cover",style:{width:"80px",height:"80px"},alt:""},null,8,et)]),t("div",null,[p(r,{class:"text-decoration-none text-black",to:`/product/${e.product.id}`},{default:m(()=>[g(c(e.product.title),1)]),_:2},1032,["to"])])]),t("td",null,"$"+c(l.$filters.numberToCurrencyNo(e.product.price)),1),t("td",null,[t("div",ot,[e.qty>1?(n(),i("button",{key:0,type:"button",class:"btn btn-outline-lightBrown",disabled:e.qty===1,onClick:s=>{e.qty--,o.changeCartQty(e,e.qty)}},it,8,st)):(n(),i("button",{key:1,type:"button",class:"btn btn-outline-brown border-lightBrown",onClick:s=>o.removeCartItem(e.id)},at,8,lt)),V(t("input",{"onUpdate:modelValue":s=>e.qty=s,type:"number",min:"1",max:"20",class:"form-control text-center","aria-label":"Dollar amount (with dot and two decimal places)",readonly:"",disabled:e.productId===o.status.loadingItem},null,8,ct),[[B,e.qty]]),t("button",{type:"button",class:"btn btn-outline-lightBrown",onClick:s=>{e.qty++,o.changeCartQty(e,e.qty)}},ut,8,rt)])]),t("td",null,"$"+c(l.$filters.numberToCurrencyNo(e.total)),1),t("td",null,[t("button",{class:"btn btn-outline-brown border-0",onClick:s=>o.removeCartItem(e.id)},[e.id===o.status.loadingItem?(n(),i("span",bt)):A("",!0),pt],8,ht)])]))),128))]),t("tfoot",null,[t("tr",mt,[gt,yt,ft,xt,t("td",null,[t("div",wt," 總計：$"+c(l.$filters.numberToCurrencyNo(o.carts.total))+"元 ",1)])]),t("tr",vt,[kt,Ct,Tt,It,t("td",qt,[t("div",Vt,[t("div",Bt,[t("a",{class:"text-center bg-brown text-decoration-none text-white m-1 d-block btnHover",style:{width:"175px",height:"30px","line-height":"30px"},onClick:d[0]||(d[0]=(...e)=>o.goToOrder&&o.goToOrder(...e))},"立即結帳 ")])])])])])]),t("div",$t,[(n(!0),i(I,null,q(o.carts.carts,e=>(n(),i("div",{class:"border-top border-lightBrown p-3 bg-white",key:e.id},[t("div",Lt,[t("div",Pt,[t("img",{src:e.product.imageUrl,class:"img-fluid object-fit-cover",style:{width:"80px",height:"80px"},alt:""},null,8,jt)]),t("div",Mt,[p(r,{class:"text-decoration-none text-black",to:`/product/${e.product.id}`,style:{"font-size":"14px"}},{default:m(()=>[g(c(e.product.title),1)]),_:2},1032,["to"]),t("div",Nt,[t("div",null,"$"+c(l.$filters.numberToCurrencyNo(e.total)),1),t("div",Rt,[e.qty>1?(n(),i("button",{key:0,type:"button",class:"btn btn-outline-lightBrown",disabled:e.qty===1,onClick:s=>{e.qty--,o.changeCartQty(e,e.qty)}},Et,8,Ut)):(n(),i("button",{key:1,type:"button",class:"btn btn-outline-brown border-lightBrown",onClick:s=>o.removeCartItem(e.id)},Ot,8,At)),V(t("input",{"onUpdate:modelValue":s=>e.qty=s,type:"number",min:"1",max:"20",class:"form-control text-center","aria-label":"Dollar amount (with dot and two decimal places)",readonly:"",disabled:e.productId===o.status.loadingItem},null,8,St),[[B,e.qty]]),t("button",{type:"button",class:"btn btn-outline-lightBrown",onClick:s=>{e.qty++,o.changeCartQty(e,e.qty)}},zt,8,Ht)])])])])]))),128)),t("div",Gt,[t("div",Jt," 總計：$"+c(l.$filters.numberToCurrencyNo(o.carts.total))+"元 ",1),t("div",Kt,[t("div",Wt,[t("a",{class:"text-center bg-brown text-decoration-none text-white m-1 d-block",style:{width:"175px",height:"30px","line-height":"30px"},onClick:d[1]||(d[1]=(...e)=>o.goToOrder&&o.goToOrder(...e))},"立即結帳 ")])])])])])):(n(),i("div",Xt,[t("div",Yt,[Zt,t("div",te,[g(" 購物車還沒有商品呦~ "),ee,p(r,{to:"/products",class:"btn btn-brown text-decoration-none m-3",onclick:"window.scrollTo(0, 0)"},{default:m(()=>[g("按我去選購")]),_:1})])])]))]),p(x)])}const ce=N(G,[["render",oe]]);export{ce as default};
