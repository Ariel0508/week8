import{_ as C,r as p,o as r,c as d,a as t,b as s,w as o,d as n,F as x,e as $,f as T,g,h as N,u as m,t as w,i as v}from"./index-RFYwpk8Q.js";import{u as L}from"./cartStore-o0DpLVZF.js";import"./axios-G2rPRu76.js";import"./toastMessage-IJTrlXIm.js";const V={},B={class:"container-fluid border-top border-bottom border-brown mt-8"},R={class:"container my-5"},j={class:"row mb-5 text-center"},E=t("h1",{class:"fs-2"},"Cat Paws",-1),F={class:"row"},S=$('<div class="col-md-4 col-12 p-0 mb-3 d-flex justify-content-center align-items-center"><div class="d-flex text-brown fs-4"><div class="me-3">聯絡我們</div><i class="bi bi-instagram me-3"></i><i class="bi bi-line me-3"></i><i class="bi bi-facebook me-3"></i><i class="bi bi-telephone-fill me-3"></i><i class="bi bi-geo-alt-fill me-3"></i></div></div>',1),M={class:"col-md-4 col-12 mb-5"},P={class:"text-brown fs-5 text-center d-flex justify-content-center align-items-center"},q={class:"col-md-4 col-12 mb-3 d-flex justify-content-center align-items-center p-0"},A={style:{width:"185px",height:"40px",background:"#ffffff",border:"1px solid #a2672d"}},D=t("div",{class:"copy text-center text-brown fs-5"}," © by Ariel",-1);function H(f,_){const e=p("RouterLink");return r(),d(x,null,[t("div",B,[t("div",R,[t("footer",null,[t("div",j,[s(e,{class:"navbar-brand logo text-brown p-0",to:"/"},{default:o(()=>[E]),_:1})]),t("div",F,[S,t("div",M,[t("div",P,[s(e,{class:"nav-link me-4",to:"/","aria-current":"page",onclick:"window.scrollTo(0, 0)"},{default:o(()=>[n("首頁")]),_:1}),s(e,{class:"nav-link me-4",to:"/products",onclick:"window.scrollTo(0, 0)"},{default:o(()=>[n("產品")]),_:1}),s(e,{class:"nav-link me-4",to:"/saleproducts",onclick:"window.scrollTo(0, 0)"},{default:o(()=>[n("特價商品")]),_:1}),s(e,{class:"nav-link me-4",to:"/about",onclick:"window.scrollTo(0, 0)"},{default:o(()=>[n("品牌故事")]),_:1})])]),t("div",q,[t("div",A,[s(e,{class:"loginbtn text-center d-block",to:"/login"},{default:o(()=>[n("登入後台")]),_:1})])])])])])]),D],64)}const U=C(V,[["render",H]]),Y={class:"my-4"},z={class:"navbar navbar-expand-xxl bg-vanilla fixed-top"},G={class:"container p-0 text-center"},I=t("h1",{class:"fs-2"},"Cat Paws",-1),J={class:"d-flex align-items-center"},K=t("i",{class:"bi bi-cart3 fs-5 pe-2"},null,-1),O={key:0,class:"mobile-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-brown text-center"},Q=t("span",{class:"visually-hidden"},null,-1),W=t("span",{class:"navbar-toggler-icon"},null,-1),X=[W],Z={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},tt={class:"navbar-nav"},st={class:"nav-item"},ot={class:"nav-item"},et={class:"nav-item"},nt={class:"nav-item cartBtn"},at=t("i",{class:"bi bi-cart3 fs-6"},null,-1),lt={key:0,class:"mobile-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-brown text-center"},ct=t("span",{class:"visually-hidden"},null,-1),it=t("i",{class:"bi bi-arrow-up-circle fs-1"},null,-1),rt=[it],dt={__name:"NavbarComponent",setup(f){const _=T(!1),e=()=>{(window.scrollY||document.documentElement.scrollTop)>500?_.value=!0:_.value=!1},a=()=>{const c=document.querySelector(".navbar-collapse");c.classList.contains("show")&&c.classList.remove("show"),window.scrollTo(0,0)},k=()=>{window.scrollTo({top:0,behavior:"smooth"})},b=L(),{getCart:y}=b;return g(()=>{y()}),g(()=>{window.addEventListener("scroll",e)}),N(()=>{window.removeEventListener("scroll",e)}),(c,h)=>{const i=p("RouterLink");return r(),d(x,null,[t("div",Y,[t("nav",z,[t("div",G,[s(i,{class:"navbar-brand logo text-brown",to:"/",onclick:"window.scrollTo(0, 0)"},{default:o(()=>[I]),_:1}),t("div",J,[s(i,{class:"nav-link position-relative mcartBtn",onClick:a,to:"/cart"},{default:o(()=>{var l,u;return[K,((l=m(b).carts)==null?void 0:l.length)>0?(r(),d("span",O,w((u=m(b).carts)==null?void 0:u.length),1)):v("",!0),Q]}),_:1}),t("button",{class:"navbar-toggler ms-4",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",onClick:h[0]||(h[0]=(...l)=>c.toggleNavbar&&c.toggleNavbar(...l))},X)]),t("div",Z,[t("ul",tt,[t("li",st,[s(i,{class:"nav-link fs-6 mx-3",to:"/products",onClick:a},{default:o(()=>[n("產品")]),_:1})]),t("li",ot,[s(i,{class:"nav-link fs-6 mx-3",to:"/saleproducts",onClick:a},{default:o(()=>[n("特價商品")]),_:1})]),t("li",et,[s(i,{class:"nav-link fs-6 mx-3",to:"/about",onClick:a},{default:o(()=>[n("品牌故事")]),_:1})]),t("li",nt,[s(i,{class:"nav-link position-relative mx-3",onClick:a,to:"/cart"},{default:o(()=>{var l,u;return[at,((l=m(b).carts)==null?void 0:l.length)>0?(r(),d("span",lt,w((u=m(b).carts)==null?void 0:u.length),1)):v("",!0),ct]}),_:1})])])])])])]),t("div",null,[_.value?(r(),d("button",{key:0,type:"button",class:"fixed-bottom-right fs-1 p-0 topbtn border-0",onClick:k},rt)):v("",!0)])],64)}}},_t={class:"container-fluid"},pt={__name:"FrontView",setup(f){return(_,e)=>{const a=p("RouterView");return r(),d("div",_t,[s(dt),s(a),s(U)])}}};export{pt as default};
