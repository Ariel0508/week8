import{f as v,j,g as D,r as p,o as u,c as m,b as n,w as c,a as e,F as N,m as P,d as _,t as o,i as I,C as g,z as q,D as O}from"./index-RFYwpk8Q.js";import{_ as z}from"./loading-bneA9sLj.js";import{a as R}from"./axios-G2rPRu76.js";import{u as H}from"./cartStore-o0DpLVZF.js";import{_ as G}from"./CouponModal-9ef76qi0.js";import"./toastMessage-IJTrlXIm.js";import"./useModal-NpBpEK79.js";var J={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const K=e("img",{src:z,width:"500",alt:"loading",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},null,-1),Q=e("div",{class:"container mt-7 p-0"},[e("nav",{"aria-label":"breadcrumb"},[e("ol",{class:"breadcrumb"},[e("li",{class:"breadcrumb-item active","aria-current":"page"},"結帳")])])],-1),W={class:"container mt-5"},X={class:"row"},Y={key:0,class:"table align-middle border-lightBrown pc"},Z=e("thead",null,[e("tr",{class:"text-center"},[e("th",{width:"200"},"商品名稱"),e("th",{width:"120"},"單價"),e("th",{width:"200",class:"text-center"},"數量"),e("th",{width:"200"},"小計")])],-1),ee={class:"text-center"},te=["src"],se={class:"border-white"},le=e("td",null,null,-1),oe={class:"text-black text-end my-3"},ae={class:"text-lightBrown text-center my-3"},ne={class:"p-3 fs-5",colspan:"2"},re={class:"text-brown"},de={class:"mobile justify-content-center"},ie={class:"row"},ce={class:"col-4"},ue=["src"],me={class:"col-5"},_e={class:"col-3 text-center"},fe={class:"border-top border-lightBrown p-3 bg-white"},ve={class:"text-black text-end mt-3"},pe={class:"text-lightBrown text-end mt-3"},he={class:"fs-5 text-end mt-3"},be={class:"text-brown"},ge={class:"row justify-content-center mt-5"},xe=e("h5",{class:"my-5 text-center"},"購買人資料",-1),ye={class:"row"},we={class:"col-md-6 col-12"},$e={class:"mb-4"},Ve=e("label",{for:"name",class:"form-label"},"*姓名",-1),ke=e("div",{class:"text-danger small mt-2"}," 姓名為必填 ",-1),Ce={class:"mb-4"},Te=e("label",{for:"tel",class:"form-label"},"*電話",-1),Ne=e("div",{class:"text-danger small mt-2"}," 需要正確的電話號碼 ",-1),Pe={class:"mb-4"},Re=e("label",{for:"email",class:"form-label"},"*Email",-1),Ee={class:"col-md-6 col-12"},Le={class:"mb-4"},Ue=e("label",{for:"address",class:"form-label"},"*地址",-1),Be=e("div",{class:"text-danger small mt-2"}," 地址為必填 ",-1),Me={class:"mb-4"},Ae=e("label",{for:"message",class:"form-label"},"留言",-1),Fe=e("div",{class:"text-end py-5"},[e("button",{type:"submit",class:"btn p-0 border-0"},[e("div",{class:"d-flex justify-content-center align-items-center p-0",style:{width:"185px",height:"40px",background:"#ffffff",border:"1px solid #a2672d"}},[e("div",{class:"loginbtn text-center bg-brown d-block"},[e("div",null,"送出訂單")])])])],-1),Ge={__name:"OrderView",setup(Se){const{VITE_APP_URL:y,VITE_APP_PATH:w}=J,E=H(),{getCart:L}=E,a=v({}),i=v(!1),U=()=>{const l=`${y}/api/${w}/cart`;i.value=!0,R.get(l).then(s=>{a.value=s.data.data,i.value=!1}).catch(s=>{alert(s.response.data.message),i.value=!1})},B=v(null),x=v(null),r=v({user:{name:"",email:"",tel:"",address:""},message:""}),M=j(),A=()=>{const l=`${y}/api/${w}/order`,s=r.value;i.value=!0,R.post(l,{data:s}).then(f=>{x.value&&(x.value.resetForm(),i.value=!1),M.push(`/completed/${f.data.orderId}`)}).catch(f=>{alert(f.response.data.message),i.value=!1}),localStorage.removeItem("coupon_code"),window.scrollTo(0,0)},F=l=>/^(09)[0-9]{8}$/.test(l)?!0:"需要正確的電話號碼";return D(()=>{L(),U()}),(l,s)=>{var V,k,C,T;const f=p("VueLoading"),$=p("RouterLink"),h=p("v-field"),b=p("error-message"),S=p("v-form");return u(),m("div",null,[n(f,{active:i.value,"is-full-page":!0,"background-color":"#FFF8F1",opacity:1,"z-index":1060},{default:c(()=>[K]),_:1},8,["active"]),Q,e("div",W,[e("div",X,[a.value.total!==0?(u(),m("table",Y,[Z,e("tbody",ee,[(u(!0),m(N,null,P(a.value.carts,t=>(u(),m("tr",{key:t.id},[e("td",null,[e("div",null,[e("img",{src:t.product.imageUrl,class:"img-fluid object-fit-cover",style:{width:"80px",height:"80px"},alt:""},null,8,te)]),n($,{class:"text-decoration-none text-black",to:`/product/${t.product.id}`},{default:c(()=>[_(o(t.product.title),1)]),_:2},1032,["to"])]),e("td",null,"$"+o(l.$filters.numberToCurrencyNo(t.product.price)),1),e("td",null,o(t.qty),1),e("td",null,"$"+o(l.$filters.numberToCurrencyNo(t.total)),1)]))),128))]),e("tfoot",null,[e("tr",se,[le,e("td",oe,[_(" 總計："),e("span",null,"$"+o(l.$filters.numberToCurrencyNo(a.value.total)),1)]),e("td",ae," 折扣：$"+o(l.$filters.numberToCurrencyNo(Math.floor(a.value.total-a.value.final_total))),1),e("td",ne,[_(" 訂單金額("+o((k=(V=a.value)==null?void 0:V.carts)==null?void 0:k.length)+"商品)： ",1),e("span",re,"$"+o(l.$filters.numberToCurrencyNo(Math.ceil(a.value.final_total)))+"元",1)])])])])):I("",!0),e("div",de,[(u(!0),m(N,null,P(a.value.carts,t=>(u(),m("div",{class:"border-top border-lightBrown p-3 bg-white",key:t.id},[e("div",ie,[e("div",ce,[e("img",{src:t.product.imageUrl,class:"img-fluid object-fit-cover",style:{width:"80px",height:"80px"},alt:""},null,8,ue)]),e("div",me,[n($,{class:"text-decoration-none text-black",to:`/product/${t.product.id}`},{default:c(()=>[_(o(t.product.title),1)]),_:2},1032,["to"]),e("div",null," $"+o(l.$filters.numberToCurrencyNo(t.product.price)),1)]),e("div",_e,[e("div",null,"x "+o(t.qty),1)])])]))),128)),e("div",fe,[e("div",ve,[_(" 總計："),e("span",null,"$"+o(l.$filters.numberToCurrencyNo(a.value.total)),1)]),e("div",pe," 折扣：$"+o(l.$filters.numberToCurrencyNo(Math.floor(a.value.total-a.value.final_total))),1),e("div",he,[_(" 訂單金額("+o((T=(C=a.value)==null?void 0:C.carts)==null?void 0:T.length)+"商品)： ",1),e("span",be,"$"+o(l.$filters.numberToCurrencyNo(Math.ceil(a.value.final_total)))+"元",1)])])])]),e("div",ge,[n(S,{ref_key:"formRef",ref:x,class:"form-floating",onSubmit:A},{default:c(({errors:t})=>[xe,e("div",ye,[e("div",we,[e("div",$e,[Ve,n(h,{id:"name",name:"name",type:"text",class:g(["form-control",{"is-invalid":t.name}]),placeholder:"請輸入收件人姓名",rules:"required",modelValue:r.value.user.name,"onUpdate:modelValue":s[0]||(s[0]=d=>r.value.user.name=d)},null,8,["class","modelValue"]),n(b,{name:"name",class:"invalid-feedback"},{default:c(()=>[ke]),_:1})]),e("div",Ce,[Te,n(h,{id:"tel",name:"tel",type:"text",class:g(["form-control",{"is-invalid":t.tel}]),placeholder:"請輸入收件人電話",rules:F,modelValue:r.value.user.tel,"onUpdate:modelValue":s[1]||(s[1]=d=>r.value.user.tel=d)},null,8,["class","modelValue"]),n(b,{name:"tel",class:"invalid-feedback"},{default:c(()=>[Ne]),_:1})]),e("div",Pe,[Re,n(h,{id:"email",name:"email",type:"email",class:g(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:r.value.user.email,"onUpdate:modelValue":s[2]||(s[2]=d=>r.value.user.email=d)},null,8,["class","modelValue"]),n(b,{name:"email",class:"invalid-feedback"})])]),e("div",Ee,[e("div",Le,[Ue,n(h,{id:"address",name:"address",type:"text",class:g(["form-control",{"is-invalid":t.address}]),placeholder:"請輸入收件人地址",rules:"required",modelValue:r.value.user.address,"onUpdate:modelValue":s[3]||(s[3]=d=>r.value.user.address=d)},null,8,["class","modelValue"]),n(b,{name:"address",class:"invalid-feedback"},{default:c(()=>[Be]),_:1})]),e("div",Me,[Ae,q(e("textarea",{name:"",id:"message",class:"form-control",cols:"20",rows:"5","onUpdate:modelValue":s[4]||(s[4]=d=>r.value.message=d)},null,512),[[O,r.value.message]])])])]),Fe]),_:1},512)])]),n(G,{ref_key:"CouponModalRef",ref:B},null,512)])}}};export{Ge as default};
