import{M as T,g as e,l as $,h as A}from"./index-UZsKeGfk.js";import{a as n}from"./axios-G2rPRu76.js";import{u as E}from"./toastMessage-fhLbAC8L.js";var S={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/CatPaws/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:r,VITE_APP_PATH:c}=S,V=T("cart",()=>{const u=e([]),i=e(0),p=e(0),g=$(),s=e({loadingItem:""}),_=e(g.params.productId),v=e([]),P=E(),{pushMessage:m}=P,o=()=>{const t=`${r}/api/${c}/cart`;n.get(t).then(a=>{u.value=a.data.data.carts,i.value=a.data.data.final_total,p.value=a.data.data.total})},l=()=>{const t=`${r}/api/${c}/cart`;n.get(t).then(a=>{u.value=a.data.data})},f=t=>{s.value.loadingItem=t;const a={product_id:t,qty:1},d=`${r}/api/${c}/cart`;n.post(d,{data:a}).then(h=>{s.value.loadingItem="",m({style:"success",title:"成功加入購物車",content:h.data.message}),o()})},I=t=>{s.value.loadingItem=t;const a=`${r}/api/${c}/cart/${t}`;n.delete(a).then(d=>{s.value.loadingItem="",m({style:"success",title:"刪除成功",content:d.data.message}),o(),l()})};return A(()=>{o(),l()}),{carts:u,finalTotal:i,total:p,getCart:o,getCartList:l,addToCart:f,removeCartItem:I,status:s,id:_,products:v}});export{V as u};
