import{M as $,f as e,k as h,g as A}from"./index-CP4Mrudi.js";import{a as r}from"./axios-G2rPRu76.js";import{u as E}from"./toastMessage-Cq4jzKej.js";var S={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:c,VITE_APP_PATH:l}=S,V=$("cart",()=>{const s=e([]),d=e(0),i=e(0),g=h(),o=e({loadingItem:""}),_=e(g.params.productId),v=e([]),f=E(),{pushMessage:p}=f,n=()=>{const t=`${c}/api/${l}/cart`;r.get(t).then(a=>{s.value=a.data.data.carts,d.value=a.data.data.final_total,i.value=a.data.data.total})},m=()=>{const t=`${c}/api/${l}/cart`;r.get(t).then(a=>{s.value=a.data.data,console.log(s.value)})},I=t=>{o.value.loadingItem=t;const a={product_id:t,qty:1},u=`${c}/api/${l}/cart`;r.post(u,{data:a}).then(T=>{o.value.loadingItem="",p({style:"success",title:"成功加入購物車",content:T.data.message}),n()})},P=t=>{o.value.loadingItem=t;const a=`${c}/api/${l}/cart/${t}`;r.delete(a).then(u=>{o.value.loadingItem="",p({style:"success",title:"刪除成功",content:u.data.message}),n(),m()})};return A(()=>{n()}),{carts:s,finalTotal:d,total:i,getCart:n,getCartList:m,addToCart:I,removeCartItem:P,status:o,id:_,products:v}});export{V as u};