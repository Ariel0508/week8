import{o as s,c as n,a as t,n as o,q as r,F as m,m as u,t as g}from"./index-jjd0GBJI.js";const _={"aria-label":"Page navigation example"},h={class:"pagination justify-content-center"},k=t("span",{"aria-hidden":"true"},"«",-1),v=[k],f={key:0,class:"page-link"},b=["onClick"],C=t("span",{"aria-hidden":"true"},"»",-1),P=[C],w={__name:"PaginationComponent",props:{pages:Object},emits:["emitPages"],setup(a,{emit:d}){const p=d,l=c=>{p("emitPages",c),window.scrollTo(0,0)};return(c,i)=>(s(),n("nav",_,[t("ul",h,[t("li",{class:o([{disabled:!a.pages.has_pre},"page-item"])},[t("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i[0]||(i[0]=r(e=>l(a.pages.current_page-1),["prevent"]))},v)],2),(s(!0),n(m,null,u(a.pages.total_pages,e=>(s(),n("li",{class:o(["page-item",{active:a.pages.current_page===e}]),key:e},[e===a.pages.current_page?(s(),n("span",f,g(e),1)):(s(),n("a",{key:1,class:"page-link",href:"#",onClick:r(x=>l(e),["prevent"])},g(e),9,b))],2))),128)),t("li",{class:o(["page-item",{disabled:!a.pages.has_next}])},[t("a",{class:"page-link",href:"#","aria-label":"Next",onClick:i[1]||(i[1]=r(e=>l(a.pages.current_page+1),["prevent"]))},P)],2)])]))}};export{w as _};
