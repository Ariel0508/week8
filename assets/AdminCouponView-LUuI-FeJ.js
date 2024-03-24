import{a as b}from"./axios-G2rPRu76.js";import{u as A}from"./toastMessage-jeIKEn4C.js";import{C as E}from"./CouponModal-ILAWz4Dq.js";import{_ as T}from"./DelModal-Z3Xg0Wv8.js";import{f as l,r as x,o as i,c as r,b as g,a as e,F as D,m as L,t as y}from"./index-chrp63HQ.js";var w={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const S={class:"text-end mt-4"},I={class:"table mt-4"},B=e("thead",null,[e("tr",null,[e("th",null,"名稱"),e("th",null,"折扣百分比"),e("th",null,"到期日"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1),U={key:0,class:"text-success"},N={key:1,class:"text-muted"},O={class:"btn-group"},F=["onClick"],H=["onClick"],Q={__name:"AdminCouponView",props:{config:Object},setup(j){const $=A(),{pushMessage:u}=$,m=l(null),f=l(null),C=l({}),a=l({title:"",is_enabled:0,percent:100,code:""}),p=l(!1),o=l(!1),M=(n,t)=>{p.value=n,p.value?a.value={due_date:new Date().getTime()/1e3}:a.value={...t},m.value.openModal()},k=n=>{a.value={...n},f.value.openModal()},{VITE_APP_URL:_,VITE_APP_PATH:v}=w,h=()=>{const n=`${_}/api/${v}/admin/coupons`;o.value=!0,b.get(n).then(t=>{C.value=t.data.coupons,o.value=!1}).catch(t=>{o.value=!1,u({style:"danger",title:"錯誤訊息",content:t.response.data.message})})},P=n=>{o.value=!0;let t=`${_}/api/${v}/admin/coupon`,c="post",s=n;p.value||(t=`${_}/api/${v}/admin/coupon/${n.id}`,c="put",s=n),b[c](t,{data:s}).then(d=>{o.value=!1,u({style:"success",title:"新增優惠券",content:d.data.message}),h(),m.value.hideModal()}).catch(d=>{o.value=!1,u({style:"danger",title:"錯誤訊息",content:d.response.data.message})})},V=()=>{const n=`${_}/api/${v}/admin/coupon/${a.value.id}`;o.value=!0,b.delete(n).then(t=>{o.value=!1,u({style:"success",title:"刪除優惠券",content:t.data.message}),f.value.hideModal(),h()}).catch(t=>{o.value=!1,u({style:"danger",title:"刪除優惠券",content:t.response.data.message})})};return h(),(n,t)=>{const c=x("VueLoading");return i(),r("div",null,[g(c,{active:o.value,"z-index":1060},null,8,["active"]),e("div",S,[e("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=s=>M(!0))}," 建立新的優惠券 ")]),e("table",I,[B,e("tbody",null,[(i(!0),r(D,null,L(C.value,(s,d)=>(i(),r("tr",{key:d},[e("td",null,y(s.title),1),e("td",null,y(s.percent)+"%",1),e("td",null,y(n.$filters.date(s.due_date)),1),e("td",null,[s.is_enabled===1?(i(),r("span",U,"啟用")):(i(),r("span",N,"未啟用"))]),e("td",null,[e("div",O,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:R=>M(!1,s)},"編輯",8,F),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:R=>k(s)},"刪除",8,H)])])]))),128))])]),g(E,{coupon:a.value,"is-new":p.value,ref_key:"couponModalRef",ref:m,onUpdateCoupon:P},null,8,["coupon","is-new"]),g(T,{item:a.value,ref_key:"delModalRef",ref:f,onDelItem:V},null,8,["item"])])}}};export{Q as default};
