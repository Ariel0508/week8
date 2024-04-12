import{_ as E,g as u,s as T,h as R,N as I,o as i,c,a as t,d as A,j as H,y as b,C as h,F as D,m as L,O as B,t as P,k as O,r as w,b as V,w as z,B as N}from"./index-Uhi6gd-0.js";import{a as g}from"./axios-G2rPRu76.js";import{_ as j}from"./PaginationComponent-zdUCiLdo.js";import{_ as q}from"./loading-bneA9sLj.js";var $={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:M}=$,{VITE_APP_PATH:x}=$,G={props:["status","product","updateProduct"],setup(r,{emit:e}){const a=u(null),o=u(null),_=u({}),d=u({}),s=()=>{a.value.show()},l=()=>{a.value.hide()},f=()=>{let p=`${M}/api/${x}/admin/product`,U="post";r.status||(p=`${M}/api/${x}/admin/product/${r.product.id}`,U="put"),g[U](p,{data:r.product}).then(k=>{alert(k.data.message),e("update"),l()}).catch(k=>{alert(k.response.data.message)})},y=()=>{_.value.imagesUrl=[],_.value.imagesUrl.push("")},n=u(null),m=u({fileUploading:!1}),v=()=>{const p=n.value.files[0],U=new FormData;U.append("file-to-upload",p);const k=`${M}/api/${x}/admin/upload`;m.value.fileUploading=!0,g.post(k,U,{headers:{"Content-Type":"multipart/form-data"}}).then(S=>{m.value.fileUploading=!1,d.value.imageUrl=S.data.imageUrl,n.value.value=""}).catch(()=>{m.value.fileUploading=!1})};return T(()=>r.product,p=>{d.value=p,d.value.imagesUrl||(d.value.imagesUrl=[]),d.value.imageUrl||(d.value.imageUrl="")}),T(()=>r.product,()=>{_.value=r.product}),R(()=>{a.value=new I(o.value,{keyboard:!1,backdrop:"static"}),_.value=r.product}),{updateProduct:f,createImages:y,oModal:s,cModal:l,pModalRef:o,editProduct:_,tempProduct:d,fileInputRef:n,uploadFile:v}}},J={class:"modal",tabindex:"-1",id:"productModal",ref:"pModalRef","aria-labelledby":"productModalLabel","aria-hidden":"true"},K={class:"modal-dialog modal-xl"},Q={class:"modal-content"},W={class:"modal-header bg-dark text-white"},X={class:"modal-title"},Y={key:0},Z={key:1},tt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),ot={class:"modal-body"},et={class:"row"},st={class:"col-md-4"},lt={class:"mb-3"},at=t("h3",null,"主要圖片",-1),dt={for:"customFile",class:"form-label"},nt={key:0,class:"fas fa-spinner fa-spin"},it=["src"],ct={class:"row"},rt={class:"mb-3"},ut=t("label",{for:"imageUrl",class:"col-form-label"},"圖片網址",-1),_t=["src"],mt=t("h3",null,"多圖新增",-1),pt={key:0,class:"mb-3"},bt=t("label",{for:"imagesUrl",class:"col-form-label"},"圖片網址",-1),ht=["onUpdate:modelValue"],ft=["src"],vt={key:0},Pt={key:1},gt={key:1},yt=t("div",{class:"mb-3"},null,-1),Ut={class:"col-md-8"},kt={class:"row"},wt={class:"mb-3"},Vt=t("label",{for:"title",class:"col-form-label"},"標題",-1),Mt={class:"row"},xt={class:"col-md-6 mb-3"},At=t("label",{for:"category",class:"col-form-label"},"分類",-1),Et={class:"col-md-6 mb-3"},Rt=t("label",{for:"unit",class:"col-form-label"},"單位",-1),Tt={class:"row"},Ct={class:"col-md-6 mb-3"},It=t("label",{for:"origin_price",class:"col-form-label"},"原價",-1),Dt={class:"col-md-6 mb-3"},Lt=t("label",{for:"price",class:"col-form-label"},"售價",-1),$t={class:"row mb-3"},Ft=t("label",{for:"description",class:"col-form-label"},"商品描述",-1),St={class:"row mb-3"},Ht=t("label",{for:"content",class:"col-form-label"},"商品內容",-1),Bt={class:"form-check"},Ot=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),zt={class:"modal-footer"},Nt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function jt(r,e,a,o,_,d){return i(),c("div",J,[t("div",K,[t("div",Q,[t("div",W,[t("h5",X,[a.status?(i(),c("span",Y,"新增產品")):(i(),c("span",Z,"編輯產品"))]),tt]),t("div",ot,[t("div",et,[t("div",st,[t("div",lt,[at,t("label",dt,[A("上傳圖片 "),a.status.fileUploading?(i(),c("i",nt)):H("",!0)]),t("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInputRef",onChange:e[0]||(e[0]=(...s)=>o.uploadFile&&o.uploadFile(...s))},null,544)]),t("img",{class:"img-fluid",src:o.tempProduct.imageUrl},null,8,it),t("div",ct,[t("div",rt,[ut,b(t("input",{type:"text",class:"form-control mb-3",id:"imageUrl","onUpdate:modelValue":e[1]||(e[1]=s=>o.editProduct.imageUrl=s)},null,512),[[h,o.editProduct.imageUrl]]),t("img",{src:o.editProduct.imageUrl,class:"w-100"},null,8,_t)])]),mt,Array.isArray(o.editProduct.imagesUrl)?(i(),c("div",pt,[(i(!0),c(D,null,L(o.editProduct.imagesUrl,(s,l)=>(i(),c("div",{class:"mb-3",key:l},[bt,b(t("input",{type:"text",class:"form-control mb-3",id:"imagesUrl","onUpdate:modelValue":f=>o.editProduct.imagesUrl[l]=f},null,8,ht),[[h,o.editProduct.imagesUrl[l]]]),t("img",{src:s,class:"w-100"},null,8,ft)]))),128)),!o.editProduct.imagesUrl.length||o.editProduct.imagesUrl[o.editProduct.imagesUrl.length-1]?(i(),c("div",vt,[t("button",{type:"button",class:"btn btn-sm btn-outline-primary d-block w-100",onClick:e[2]||(e[2]=s=>o.editProduct.imagesUrl.push(""))}," 新增圖片 ")])):(i(),c("div",Pt,[t("button",{type:"button",class:"btn btn-sm btn-outline-danger d-block w-100",onClick:e[3]||(e[3]=s=>o.editProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):(i(),c("div",gt,[t("button",{type:"button",class:"btn btn-sm btn-outline-primary d-block w-100",onClick:e[4]||(e[4]=(...s)=>o.createImages&&o.createImages(...s))}," 新增圖片 ")])),yt]),t("div",Ut,[t("div",kt,[t("div",wt,[Vt,b(t("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[5]||(e[5]=s=>o.editProduct.title=s)},null,512),[[h,o.editProduct.title]])])]),t("div",Mt,[t("div",xt,[At,b(t("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[6]||(e[6]=s=>o.editProduct.category=s)},null,512),[[h,o.editProduct.category]])]),t("div",Et,[Rt,b(t("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[7]||(e[7]=s=>o.editProduct.unit=s)},null,512),[[h,o.editProduct.unit]])])]),t("div",Tt,[t("div",Ct,[It,b(t("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[8]||(e[8]=s=>o.editProduct.origin_price=s),min:"1"},null,512),[[h,o.editProduct.origin_price,void 0,{number:!0}]])]),t("div",Dt,[Lt,b(t("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[9]||(e[9]=s=>o.editProduct.price=s),min:"1"},null,512),[[h,o.editProduct.price,void 0,{number:!0}]])])]),t("div",$t,[Ft,b(t("textarea",{class:"form-control white-textarea",id:"description","onUpdate:modelValue":e[10]||(e[10]=s=>o.editProduct.description=s)},null,512),[[h,o.editProduct.description]])]),t("div",St,[Ht,b(t("textarea",{class:"form-control",id:"content","onUpdate:modelValue":e[11]||(e[11]=s=>o.editProduct.content=s)},null,512),[[h,o.editProduct.content]])]),t("div",Bt,[b(t("input",{id:"is_enabled","onUpdate:modelValue":e[12]||(e[12]=s=>o.editProduct.is_enabled=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[B,o.editProduct.is_enabled]]),Ot])])])]),t("div",zt,[Nt,t("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=(...s)=>o.updateProduct&&o.updateProduct(...s))}," 確定 ")])])])],512)}const qt=E(G,[["render",jt]]);var F={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:Gt}=F,{VITE_APP_PATH:Jt}=F,Kt={props:["item"],setup(r,{emit:e}){const a=u(null),o=u(null),_=()=>{g.delete(`${Gt}/api/${Jt}/admin/product/${r.item.id}`).then(()=>{e("update"),a.value.hide()}).catch(l=>{alert(l.response.data.message)})},d=()=>{a.value.show()},s=()=>{a.value.hide()};return R(()=>{a.value=new I(o.value,{keyboard:!1,backdrop:"static"})}),{delProduct:_,oModal:d,cModal:s,delProductModalRef:o}}},Qt={class:"modal",tabindex:"-1",id:"delProductModal",ref:"delProductModalRef","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Wt={class:"modal-dialog"},Xt={class:"modal-content"},Yt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{class:"modal-title"},"刪除商品"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Zt={class:"modal-body"},to={class:"text-danger"},oo={class:"modal-footer"},eo=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function so(r,e,a,o,_,d){return i(),c("div",Qt,[t("div",Wt,[t("div",Xt,[Yt,t("div",Zt,[t("p",null,[A(" 是否刪除 "),t("strong",to,P(a.item.title),1),A(" 商品(刪除後將無法恢復)。 ")])]),t("div",oo,[eo,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=s=>o.delProduct())}," 確定刪除 ")])])])],512)}const lo=E(Kt,[["render",so]]);var ao={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:C,VITE_APP_PATH:no}=ao,io={setup(){const r=u([]),e=u({imageUrl:[]}),a=u({}),o=u(null),_=u(null),d=u(!1),s=O(),l=u(!1),f=(m=1)=>{const v=`${C}/api/${no}/admin/products?page=${m}`;l.value=!0,g.get(v).then(p=>{r.value=p.data.products,a.value=p.data.pagination,l.value=!1}).catch(p=>{alert(p.response.data.message),l.value=!1})},y=()=>{l.value=!0,g.post(`${C}/api/user/check`).then(()=>{f(),l.value=!1}).catch(()=>{s.push("/login"),l.value=!1})},n=(m,v)=>{m==="new"?(e.value={imageUrl:[]},d.value=!0,o.value.oModal()):m==="edit"?(e.value={...v},d.value=!1,o.value.oModal()):m==="delete"&&(e.value={...v},_.value.oModal())};return R(()=>{const m=document.cookie.replace(/(?:(?:^|.*;\s*)rubbyToken\s*=\s*([^;]*).*$)|^.*$/,"$1");g.defaults.headers.common.Authorization=m,y()}),{products:r,tempProduct:e,openModal:n,status:d,isLoading:l,getData:f,pagination:a,delModalRef:_,productRef:o}},components:{PaginationComponent:j,DelProductModal:lo,ProductModal:qt}},co={id:"app"},ro=t("img",{src:q,width:"500",alt:"loading",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},null,-1),uo={class:"container p-0"},_o={class:"m-3 d-flex justify-content-end"},mo={class:"row my-3"},po={class:"table p-0"},bo=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",{width:"150"},"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"150"},"是否啟用"),t("th",{width:"150"},"編輯")])],-1),ho={width:"150"},fo={width:"150"},vo={width:"120"},Po={width:"120"},go={width:"150"},yo={key:1},Uo={width:"150"},ko=["onClick"],wo=["onClick"],Vo={colspan:"6",class:"border-0"};function Mo(r,e,a,o,_,d){const s=w("VueLoading"),l=w("PaginationComponent"),f=w("ProductModal"),y=w("DelProductModal");return i(),c("div",co,[V(s,{active:o.isLoading,"is-full-page":!0,"background-color":"#FFF8F1",opacity:1,"z-index":1060},{default:z(()=>[ro]),_:1},8,["active"]),t("div",uo,[t("div",_o,[t("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=n=>o.openModal("new"))}," 建立新的產品 ")]),t("div",mo,[t("table",po,[bo,t("tbody",null,[(i(!0),c(D,null,L(o.products,n=>(i(),c("tr",{key:n.id},[t("td",ho,P(n.category),1),t("td",fo,P(n.title),1),t("td",vo,P(n.origin_price),1),t("td",Po,P(n.price),1),t("td",go,[n.is_enabled?(i(),c("span",{key:0,class:N({"text-success":n.is_enabled})},"啟用",2)):(i(),c("span",yo,"未啟用"))]),t("td",Uo,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:m=>o.openModal("edit",n)}," 編輯 ",8,ko),t("button",{type:"button",class:"btn btn-outline-danger",onClick:m=>o.openModal("delete",n)}," 刪除 ",8,wo)])]))),128))]),t("tfoot",null,[t("tr",null,[t("td",Vo," 目前有"+P(o.products.length)+"項產品 ",1)])])])]),V(l,{pages:o.pagination,onEmitPages:o.getData},null,8,["pages","onEmitPages"])]),V(f,{ref:"productRef",product:o.tempProduct,status:o.status,onUpdate:o.getData},null,8,["product","status","onUpdate"]),V(y,{ref:"delModalRef",item:o.tempProduct,onUpdate:o.getData},null,8,["item","onUpdate"])])}const To=E(io,[["render",Mo]]);export{To as default};