import{f as r,q as p,o as c,c as u,a as e,z as s,D as n,O as k,t as x}from"./index-CP4Mrudi.js";import{u as M}from"./useModal-V5SC_Z6D.js";const w={class:"modal-dialog",role:"document"},C={class:"modal-content"},V={class:"modal-header"},D={class:"modal-title",id:"exampleModalLabel"},U={key:0},g={key:1},B=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),N={class:"modal-body"},O={class:"mb-3"},S=e("label",{for:"title"},"標題",-1),T={class:"mb-3"},L=e("label",{for:"coupon_code"},"優惠碼",-1),R={class:"mb-3"},j=e("label",{for:"due_date"},"到期日",-1),q={class:"mb-3"},z=e("label",{for:"price"},"折扣百分比",-1),A={class:"mb-3"},E={class:"form-check"},I=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),$={class:"modal-footer"},F=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),J={__name:"CouponModal",props:{coupon:Object,isNew:Boolean},emits:["update-coupon"],setup(i,{expose:m,emit:_}){const{openModal:b,hideModal:v,modalRef:f}=M(),h=i,y=_,t=r({}),a=r("");return p(()=>h.coupon,d=>{t.value=d;const o=new Date(t.value.due_date*1e3).toISOString().split("T");[a.value]=o}),p(a,d=>{t.value.due_date=Math.floor(new Date(d)/1e3)}),m({openModal:b,hideModal:v}),(d,o)=>(c(),u("div",{class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"modalRef",ref:f},[e("div",w,[e("div",C,[e("div",V,[e("h5",D,[i.isNew?(c(),u("span",U,"新增優惠卷")):(c(),u("span",g,"編輯優惠卷"))]),B]),e("div",N,[e("div",O,[S,s(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[0]||(o[0]=l=>t.value.title=l),placeholder:"請輸入標題"},null,512),[[n,t.value.title]])]),e("div",T,[L,s(e("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":o[1]||(o[1]=l=>t.value.code=l),placeholder:"請輸入優惠碼"},null,512),[[n,t.value.code]])]),e("div",R,[j,s(e("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":o[2]||(o[2]=l=>a.value=l)},null,512),[[n,a.value]])]),e("div",q,[z,s(e("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":o[3]||(o[3]=l=>t.value.percent=l),placeholder:"請輸入折扣百分比"},null,512),[[n,t.value.percent,void 0,{number:!0}]])]),e("div",A,[e("div",E,[s(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[4]||(o[4]=l=>t.value.is_enabled=l),id:"is_enabled"},null,512),[[k,t.value.is_enabled]]),I])])]),e("div",$,[F,e("button",{type:"button",class:"btn btn-primary",onClick:o[5]||(o[5]=l=>y("update-coupon",t.value))},x(i.isNew?"新增優惠卷":"更新優惠券"),1)])])])],512))}};export{J as _};