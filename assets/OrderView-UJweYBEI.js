import{g as m,k as H,s as G,h as J,r as f,o as _,c as p,b as n,w as u,a as e,F as B,m as I,y as k,D as A,d as c,t as a,j as K,B as y,C as Q}from"./index-Uhi6gd-0.js";import{_ as W}from"./loading-bneA9sLj.js";import{a as T}from"./axios-G2rPRu76.js";import{u as X}from"./cartStore-iyzSn0gZ.js";import{u as Y}from"./toastMessage-g2FpgOZr.js";import{_ as Z}from"./ToastMessages-Gr7Bu1fV.js";var ee={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const te=e("img",{src:W,width:"500",alt:"loading",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},null,-1),se=e("div",{class:"container mt-7 p-0"},[e("nav",{"aria-label":"breadcrumb"},[e("ol",{class:"breadcrumb"},[e("li",{class:"breadcrumb-item active","aria-current":"page"},"結帳")])])],-1),oe={class:"container mt-5"},le={class:"row"},ae={key:0,class:"table align-middle border-lightBrown pc"},ne=e("thead",null,[e("tr",{class:"text-center"},[e("th",{width:"200"},"商品名稱"),e("th",{width:"120"},"單價"),e("th",{width:"200",class:"text-center"},"數量"),e("th",{width:"200"},"小計")])],-1),de={class:"text-center"},ie=["src"],re={class:"border-white"},ce={colspan:"2",class:"pt-4"},ue={class:"d-flex align-items-center justify-content-end"},me=e("i",{class:"bi bi-ticket-perforated fs-2 text-brown pe-3"},null,-1),_e=e("option",{value:"請輸入優惠券",selected:""},"請輸入優惠券",-1),pe=e("option",{value:"newMember20%"},"新會員首購八折優惠",-1),ve=e("option",{value:"purchasesover200010%"}," 滿兩千享九折優惠 ",-1),he=[_e,pe,ve],fe={class:"text-center pt-4"},be={class:"me-5"},ge={class:"text-center pt-4"},xe={class:"text-brown"},ye={class:"border-white"},we=e("td",null,null,-1),$e=e("td",null,null,-1),Ve={class:"fs-5 text-end py-4",colspan:"2"},Ce={class:"me-8"},ke={class:"text-brown"},Te={class:"mobile justify-content-center"},Ne={class:"row"},Me={class:"col-4 p-0"},Pe=["src"],Se={class:"col-8 p-0"},Ue={class:"mt-3 d-flex justify-content-between"},Le={class:"pe-4"},Ee={class:"border-top border-lightBrown p-3 bg-white"},Re={class:"d-flex align-items-center"},je=e("i",{class:"bi bi-ticket-perforated fs-2 text-brown pe-3"},null,-1),Be=e("option",{value:"請輸入優惠券",selected:""},"請輸入優惠券",-1),Ie=e("option",{value:"newMember20%"},"新會員首購八折優惠",-1),Ae=e("option",{value:"purchasesover200010%"},"滿兩千享九折優惠",-1),Fe=[Be,Ie,Ae],De={class:"text-black text-end mt-3"},qe={class:"text-end mt-3"},Oe={class:"text-brown"},ze={class:"fs-5 text-end mt-3"},He={class:"text-brown"},Ge={class:"row justify-content-center mt-5"},Je=e("h5",{class:"my-5 text-center"},"購買人資料",-1),Ke={class:"row"},Qe={class:"col-md-6 col-12"},We={class:"mb-4"},Xe=e("label",{for:"name",class:"form-label"},"*姓名",-1),Ye=e("div",{class:"text-danger small mt-2"}," 姓名為必填 ",-1),Ze={class:"mb-4"},et=e("label",{for:"tel",class:"form-label"},"*電話",-1),tt=e("div",{class:"text-danger small mt-2"}," 需要正確的電話號碼 ",-1),st={class:"mb-4"},ot=e("label",{for:"email",class:"form-label"},"*Email",-1),lt={class:"col-md-6 col-12"},at={class:"mb-4"},nt=e("label",{for:"address",class:"form-label"},"*地址",-1),dt=e("div",{class:"text-danger small mt-2"}," 地址為必填 ",-1),it={class:"mb-4"},rt=e("label",{for:"message",class:"form-label"},"留言",-1),ct=e("div",{class:"text-end py-5"},[e("button",{type:"submit",class:"btn p-0 border-0"},[e("div",{class:"d-flex justify-content-center text-brown"},[e("div",{class:"d-flex align-items-center justify-content-center",style:{width:"185px",height:"40px",background:"#ffffff",border:"1px solid #a2672d"}},[e("a",{class:"text-center bg-brown text-decoration-none text-white m-1 d-block",style:{width:"175px",height:"30px","line-height":"30px"}},"送出訂單 ")])])])],-1),bt={__name:"OrderView",setup(ut){const{VITE_APP_URL:w,VITE_APP_PATH:$}=ee,N=X(),{getCart:M}=N,o=m(N.carts),F=H(),v=m(!1),D=Y(),{pushMessage:b}=D,P=()=>{const l=`${w}/api/${$}/cart`;T.get(l).then(s=>{o.value=s.data.data}).catch(()=>{v.value=!1})},V=m(null),d=m({user:{name:"",email:"",tel:"",address:""},message:""}),q=()=>{if(r.value==="purchasesover200010%"&&o.value.total<2e3){b({style:"danger",title:"無法使用優惠券",content:"購物車金額需達到2000元才能使用優惠券"});return}const l=`${w}/api/${$}/order`,s=d.value;v.value=!0,T.post(l,{data:s}).then(h=>{V.value&&(V.value.resetForm(),v.value=!1),F.push(`/completed/${h.data.orderId}`),localStorage.removeItem("coupon_code")}).catch(()=>{v.value=!1}),window.scrollTo(0,0)},O=l=>/^(09)[0-9]{8}$/.test(l)?!0:"需要正確的電話號碼",r=m(localStorage.getItem("coupon_code")||"請輸入優惠券"),C=m(!1),S=()=>{if(r.value==="purchasesover200010%"&&o.value.total<2e3){b({style:"danger",title:"無法使用優惠券",content:"購物車金額需達到2000元才能使用優惠券"});return}const l=`${w}/api/${$}/coupon`,s={code:r.value};C.value=!0,T.post(l,{data:s}).then(h=>{s.code==="請輸入優惠券"||b({style:"success",title:"加入優惠券",content:h.data.message}),M(),C.value=!1}).catch(()=>{C.value=!1,b({style:"danger",title:"優惠券不可用"})}),localStorage.setItem("coupon_code",r.value)};return G(()=>o.value,()=>{P()}),J(()=>{M(),P()}),(l,s)=>{var L,E,R,j;const h=f("VueLoading"),U=f("RouterLink"),g=f("v-field"),x=f("error-message"),z=f("v-form");return _(),p("div",null,[n(h,{active:v.value,"is-full-page":!0,"background-color":"#FFF8F1",opacity:1,"z-index":1060},{default:u(()=>[te]),_:1},8,["active"]),se,e("div",oe,[e("div",le,[o.value.total!==0?(_(),p("table",ae,[ne,e("tbody",de,[(_(!0),p(B,null,I(o.value.carts,t=>(_(),p("tr",{key:t.id},[e("td",null,[e("div",null,[e("img",{src:t.product.imageUrl,class:"img-fluid object-fit-cover",style:{width:"80px",height:"80px"},alt:""},null,8,ie)]),n(U,{class:"text-decoration-none text-black",to:`/product/${t.product.id}`},{default:u(()=>[c(a(t.product.title),1)]),_:2},1032,["to"])]),e("td",null,"$"+a(l.$filters.numberToCurrencyNo(t.product.price)),1),e("td",null,a(t.qty),1),e("td",null,"$"+a(l.$filters.numberToCurrencyNo(t.total)),1)]))),128))]),e("tfoot",null,[e("tr",re,[e("td",ce,[e("div",ue,[me,k(e("select",{name:"addCoupon",id:"addCoupon",class:"form-select rounded w-50 p-2 fs-6","onUpdate:modelValue":s[0]||(s[0]=t=>r.value=t),onChange:S},he,544),[[A,r.value]])])]),e("td",fe,[e("div",be,[c(" 總計："),e("span",null,"$"+a(l.$filters.numberToCurrencyNo(o.value.total)),1)])]),e("td",ge,[c(" 折扣："),e("span",xe,"$"+a(l.$filters.numberToCurrencyNo(Math.floor(o.value.total-o.value.final_total))),1)])]),e("tr",ye,[we,$e,e("td",Ve,[e("div",Ce,[c(" 訂單金額("+a((E=(L=o.value)==null?void 0:L.carts)==null?void 0:E.length)+"商品)： ",1),e("span",ke,"$"+a(l.$filters.numberToCurrencyNo(Math.ceil(o.value.final_total)))+"元",1)])])])])])):K("",!0),e("div",Te,[(_(!0),p(B,null,I(o.value.carts,t=>(_(),p("div",{class:"border-top border-lightBrown p-3 bg-white",key:t.id},[e("div",Ne,[e("div",Me,[e("img",{src:t.product.imageUrl,class:"img-fluid object-fit-cover",style:{width:"80px",height:"80px"},alt:""},null,8,Pe)]),e("div",Se,[n(U,{class:"text-decoration-none text-black",to:`/product/${t.product.id}`,style:{"font-size":"14px"}},{default:u(()=>[c(a(t.product.title),1)]),_:2},1032,["to"]),e("div",Ue,[e("div",null,"$"+a(l.$filters.numberToCurrencyNo(t.product.price)),1),e("div",Le," x "+a(t.qty),1)])])])]))),128)),e("div",Ee,[e("div",Re,[je,k(e("select",{name:"addCoupon",id:"addCoupon",class:"form-select rounded w-100 p-2 fs-6","onUpdate:modelValue":s[1]||(s[1]=t=>r.value=t),onChange:S},Fe,544),[[A,r.value]])]),e("div",De,[c(" 總計："),e("span",null,"$"+a(l.$filters.numberToCurrencyNo(o.value.total)),1)]),e("div",qe,[c(" 折扣："),e("span",Oe," $"+a(l.$filters.numberToCurrencyNo(Math.floor(o.value.total-o.value.final_total))),1)]),e("div",ze,[c(" 訂單金額("+a((j=(R=o.value)==null?void 0:R.carts)==null?void 0:j.length)+"商品)： ",1),e("span",He,"$"+a(l.$filters.numberToCurrencyNo(Math.ceil(o.value.final_total)))+"元",1)])])])]),e("div",Ge,[n(z,{ref_key:"formRef",ref:V,class:"form-floating",onSubmit:q},{default:u(({errors:t})=>[Je,e("div",Ke,[e("div",Qe,[e("div",We,[Xe,n(g,{id:"name",name:"name",type:"text",class:y(["form-control",{"is-invalid":t.name}]),placeholder:"請輸入收件人姓名",rules:"required",modelValue:d.value.user.name,"onUpdate:modelValue":s[2]||(s[2]=i=>d.value.user.name=i)},null,8,["class","modelValue"]),n(x,{name:"name",class:"invalid-feedback"},{default:u(()=>[Ye]),_:1})]),e("div",Ze,[et,n(g,{id:"tel",name:"tel",type:"text",class:y(["form-control",{"is-invalid":t.tel}]),placeholder:"請輸入收件人電話",rules:O,modelValue:d.value.user.tel,"onUpdate:modelValue":s[3]||(s[3]=i=>d.value.user.tel=i)},null,8,["class","modelValue"]),n(x,{name:"tel",class:"invalid-feedback"},{default:u(()=>[tt]),_:1})]),e("div",st,[ot,n(g,{id:"email",name:"email",type:"email",class:y(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:d.value.user.email,"onUpdate:modelValue":s[4]||(s[4]=i=>d.value.user.email=i)},null,8,["class","modelValue"]),n(x,{name:"email",class:"invalid-feedback"})])]),e("div",lt,[e("div",at,[nt,n(g,{id:"address",name:"address",type:"text",class:y(["form-control",{"is-invalid":t.address}]),placeholder:"請輸入收件人地址",rules:"required",modelValue:d.value.user.address,"onUpdate:modelValue":s[5]||(s[5]=i=>d.value.user.address=i)},null,8,["class","modelValue"]),n(x,{name:"address",class:"invalid-feedback"},{default:u(()=>[dt]),_:1})]),e("div",it,[rt,k(e("textarea",{name:"",id:"message",class:"form-control",cols:"20",rows:"5","onUpdate:modelValue":s[6]||(s[6]=i=>d.value.message=i)},null,512),[[Q,d.value.message]])])])]),ct]),_:1},512)])]),n(Z)])}}};export{bt as default};