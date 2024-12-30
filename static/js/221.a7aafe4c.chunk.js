"use strict";(self.webpackChunkdry_mix_project=self.webpackChunkdry_mix_project||[]).push([[221],{9939:(e,t,l)=>{l.d(t,{A:()=>i});var s=l(5043),a=l(3538),r=l(3216),n=l(579);const o=e=>{let{prevLocation:t,title:l}=e;const o=(0,r.zy)(),[i,d]=(0,s.useState)("");return(0,s.useEffect)((()=>{d(o.pathname.split("/")[1])}),[o]),(0,n.jsxs)("div",{className:"w-full py-10 xl:py-10 flex flex-col gap-3",children:[(0,n.jsx)("h1",{className:"text-5xl text-primeColor font-titleFont font-bold",children:l}),(0,n.jsxs)("p",{className:"text-sm font-normal text-lightText capitalize flex items-center",children:[(0,n.jsxs)("span",{children:[" ",""===t?"Home":t]}),(0,n.jsx)("span",{className:"px-1",children:(0,n.jsx)(a.ngD,{})}),(0,n.jsx)("span",{className:"capitalize font-semibold text-primeColor",children:i})]})]})},i=(0,s.memo)(o)},3221:(e,t,l)=>{l.r(t),l.d(t,{default:()=>w});var s=l(5043),a=l(3216),r=l(9939),n=l(5475),o=l(3003),i=l(4907),d=l(579);const c=()=>{const e=(0,o.wA)(),{list:t,isLoading:l,createError:a,deleteError:r}=(0,o.d4)((e=>e.categories)),[c,x]=(0,s.useState)(""),[m,u]=(0,s.useState)(""),[f,p]=(0,s.useState)(""),[h,b]=(0,s.useState)(!1),[g,j]=(0,s.useState)(!1),[N,y]=(0,s.useState)("");(0,s.useEffect)((()=>{e((0,i.bW)())}),[e]);return(0,d.jsx)("div",{className:"flex flex-col",children:(0,d.jsxs)("div",{className:"w-full lgl:w-[500px] mx-auto flex flex-col justify-start",children:[f?(0,d.jsxs)("div",{className:"w-full",children:[(0,d.jsx)("p",{className:"w-full px-4 py-10 text-green-500 font-medium font-titleFont",children:f}),(0,d.jsx)(n.N_,{to:"/manage",children:(0,d.jsx)("button",{className:"w-ful h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold tracking-wide hover:bg-black hover:text-white duration-300",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]}):(0,d.jsx)("form",{className:"w-full lgl:w-[500px] h-full flex flex-col justify-start",children:(0,d.jsxs)("div",{className:"px-6 py-4 w-full h-full flex flex-col justify-start",children:[(0,d.jsx)("h1",{className:"font-titleFont text-center underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4 pt-10",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"}),(0,d.jsxs)("div",{className:"flex flex-col gap-3 pb-6",children:[(0,d.jsxs)("div",{className:"flex flex-col gap-0.5",children:[(0,d.jsx)("p",{className:"font-titleFont text-base font-semibold text-gray-600",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),(0,d.jsx)("input",{onChange:e=>{x(e.target.value),u("")},value:c,className:"w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),m&&(0,d.jsxs)("p",{className:"text-sm text-red-500 font-titleFont font-semibold px-4",children:[(0,d.jsx)("span",{className:"font-bold italic mr-1",children:"!"}),m]})]}),(0,d.jsx)("button",{onClick:()=>{y(""),j(!0)},className:"bg-red-500 hover:bg-red-700 hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md duration-300",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"}),(0,d.jsx)("button",{onClick:t=>{t.preventDefault(),c?(b(!0),e((0,i.zZ)(c)).unwrap().then((()=>{p("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0430."),x("")})).catch((e=>{u("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: ".concat(e.message||"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430"))})).finally((()=>{b(!1)}))):u("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438")},disabled:h,className:"bg-greenPrimeColor hover:bg-black hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md duration-300 ".concat(h?"opacity-50 cursor-not-allowed":""),children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"})]})]})}),g&&(0,d.jsx)("div",{className:"fixed top-0 left-0 w-full h-full bg-black/30 z-50 flex items-center justify-center",children:(0,d.jsxs)("div",{className:"bg-white p-6 rounded-md w-[300px]",children:[(0,d.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"}),(0,d.jsxs)("select",{className:"border border-gray-300 rounded w-full mb-4 p-2",value:N,onChange:e=>y(e.target.value),children:[(0,d.jsx)("option",{value:"",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"}),t.map((e=>(0,d.jsx)("option",{value:e.id,children:e.name},e.id)))]}),(0,d.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,d.jsx)("button",{onClick:t=>{t.preventDefault(),N?(b(!0),e((0,i.K7)(N)).unwrap().then((()=>{p("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u0430."),y(""),j(!1),e((0,i.bW)())})).catch((e=>{u("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f: ".concat(e.message||"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430"))})).finally((()=>{b(!1)}))):u("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f")},disabled:h,className:"bg-red-500 text-white px-4 py-2 rounded ".concat(h?"opacity-50 cursor-not-allowed":""),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),(0,d.jsx)("button",{onClick:()=>{j(!1)},className:"bg-gray-300 px-4 py-2 rounded",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]}),r&&(0,d.jsxs)("p",{className:"text-red-500 mt-2",children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",r]})]})})]})})},x=(0,s.memo)(c);l(9379);var m=l(3825),u=l(8799);const f=()=>{const[e,t]=(0,s.useState)(!1),[l,a]=(0,s.useState)(""),[r,n]=(0,s.useState)(""),[c,x]=(0,s.useState)(""),[f,p]=(0,s.useState)(null),[h,b]=(0,s.useState)(""),[g,j]=(0,s.useState)(""),[N,y]=(0,s.useState)(""),[v,w]=(0,s.useState)(""),[C,S]=(0,s.useState)(""),[k,F]=(0,s.useState)(!1),[z,A]=(0,s.useState)(""),[D,E]=(0,s.useState)(""),[P,L]=(0,s.useState)(""),[_,V]=(0,s.useState)({color:"",dryingTime:"",waterproof:!1,mixingRatio:"",maxGrainSize:"",materialClass:"",mobilityClass:"",strengthClass:"",frostResistance:"",adhesionStrength:"",effectiveActivity:"",solutionViability:"",compressiveStrength:"",materialConsumption:"",applicationTemperature:""}),[W,$]=(0,s.useState)(""),[R,T]=(0,s.useState)(""),[Y,H]=(0,s.useState)(""),I=(0,o.wA)(),{list:K}=(0,o.d4)((e=>e.categories)),{list:B,isLoading:G,deleteError:U,updateError:Z}=(0,o.d4)((e=>e.products));(0,s.useEffect)((()=>{I((0,i.bW)()),I((0,u.d$)())}),[I]);const[q,J]=(0,s.useState)(!1),[M,O]=(0,s.useState)(""),Q=()=>{J(!1)};return(0,d.jsx)("div",{className:"flex flex-col",children:(0,d.jsx)("div",{className:"w-full lgl:w-[500px] mx-auto flex flex-col justify-start",children:C?(0,d.jsx)("div",{className:"w-[500px]",children:(0,d.jsx)("p",{className:"w-full px-4 py-10 text-green-500 font-medium font-titleFont",children:C})}):(0,d.jsx)("form",{className:"w-full lgl:w-[500px] h-full flex flex-col justify-start",children:(0,d.jsxs)("div",{className:"px-6 py-4 w-full h-full flex flex-col justify-start",children:[(0,d.jsx)("h1",{className:"font-titleFont text-center underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4 pt-10",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"}),(0,d.jsxs)("div",{className:"flex flex-col gap-3 pb-6",children:[(0,d.jsxs)("div",{className:"flex flex-col gap-.5",children:[(0,d.jsx)("p",{className:"font-titleFont text-base font-semibold text-gray-600",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"}),(0,d.jsx)("input",{onChange:e=>{a(e.target.value),b("")},value:l,className:"w-full h-8 placeholder:text-sm px-4 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none",type:"text"}),h&&(0,d.jsxs)("p",{className:"text-sm text-red-500 font-titleFont font-semibold px-4",children:[(0,d.jsx)("span",{className:"font-bold italic mr-1",children:"!"}),h]})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-.5",children:[(0,d.jsx)("p",{className:"font-titleFont text-base font-semibold text-gray-600",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,d.jsx)("textarea",{value:r,onChange:e=>{n(e.target.value),j("")},className:"w-full h-20 placeholder:text-sm px-4 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none"}),g&&(0,d.jsxs)("p",{className:"text-sm text-red-500 font-titleFont font-semibold px-4",children:[(0,d.jsx)("span",{className:"font-bold italic mr-1",children:"!"}),g]})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-.5",children:[(0,d.jsx)("p",{className:"font-titleFont text-base font-semibold text-gray-600",children:"\u0426\u0435\u043d\u0430"}),(0,d.jsx)("input",{onChange:e=>{x(e.target.value),y("")},value:c,className:"w-full h-8 placeholder:text-sm px-4 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none",type:"text"}),N&&(0,d.jsxs)("p",{className:"text-sm text-red-500 font-titleFont font-semibold px-4",children:[(0,d.jsx)("span",{className:"font-bold italic mr-1",children:"!"}),N]})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-.5",children:[(0,d.jsx)("p",{className:"font-titleFont text-base font-semibold text-gray-600",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),(0,d.jsxs)("label",{className:"flex items-center justify-center h-20 border-[2px] border-dashed border-gray-400 rounded-md cursor-pointer hover:border-greenPrimeColor",children:[(0,d.jsx)(m.zV$,{size:24,className:"text-gray-600"}),(0,d.jsx)("span",{className:"ml-2 text-sm text-gray-600",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"}),(0,d.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{const t=e.target.files[0];t?(p(t),w("")):w("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.")},className:"hidden"})]}),f&&(0,d.jsx)("p",{className:"text-sm text-green-500",children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}),v&&(0,d.jsxs)("p",{className:"text-sm text-red-500 font-titleFont font-semibold px-4",children:[(0,d.jsx)("span",{className:"font-bold italic mr-1",children:"!"}),v]})]}),(0,d.jsxs)("div",{className:"flex items-center gap-2 mt-2",children:[(0,d.jsx)("input",{type:"checkbox",id:"inStock",checked:k,onChange:e=>{F(e.target.checked),L("")}}),(0,d.jsx)("label",{htmlFor:"inStock",className:"text-base text-gray-600",children:"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"})]}),P&&(0,d.jsxs)("p",{className:"text-sm text-red-500 font-titleFont font-semibold px-4",children:[(0,d.jsx)("span",{className:"font-bold italic mr-1",children:"!"}),P]}),(0,d.jsxs)("div",{className:"flex flex-col gap-.5",children:[(0,d.jsx)("p",{className:"font-titleFont text-base font-semibold text-gray-600",children:'\u0421\u0442\u0430\u0442\u0443\u0441 (\u043f\u0440\u0438\u043c\u0435\u0440: "\u043d\u043e\u0432\u0438\u043d\u043a\u0430")'}),(0,d.jsx)("input",{value:z,onChange:e=>{A(e.target.value),E("")},className:"w-full h-8 placeholder:text-sm px-4 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none",type:"text"}),D&&(0,d.jsxs)("p",{className:"text-sm text-red-500 font-titleFont font-semibold px-4",children:[(0,d.jsx)("span",{className:"font-bold italic mr-1",children:"!"}),D]})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-.5",children:[(0,d.jsx)("p",{className:"font-titleFont text-base font-semibold text-gray-600",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),(0,d.jsxs)("select",{value:R,onChange:e=>{T(e.target.value),H("")},className:"w-full h-8 px-2 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none",children:[(0,d.jsx)("option",{value:"",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"}),K.map((e=>(0,d.jsx)("option",{value:e.id,children:e.name},e.id)))]}),Y&&(0,d.jsxs)("p",{className:"text-sm text-red-500 font-titleFont font-semibold px-4",children:[(0,d.jsx)("span",{className:"font-bold italic mr-1",children:"!"}),Y]})]})]}),(0,d.jsx)("button",{onClick:()=>{O(""),J(!0)},className:"bg-red-500 hover:bg-red-700 hover:text-white cursor-pointer".concat(" w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300"),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"}),(0,d.jsx)("div",{className:"w-full lgl:w-[500px] mx-auto flex flex-col justify-start",children:q&&(0,d.jsx)("div",{className:"fixed top-0 left-0 w-full h-full bg-black/30 z-50 flex items-center justify-center",children:(0,d.jsxs)("div",{className:"bg-white p-6 rounded-md w-[300px]",children:[(0,d.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"}),G?(0,d.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):(0,d.jsxs)("select",{className:"border border-gray-300 rounded w-full mb-4 p-2",value:M,onChange:e=>O(e.target.value),children:[(0,d.jsx)("option",{value:"",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442"}),B.map((e=>(0,d.jsx)("option",{value:e.id,children:e.name},e.id)))]}),(0,d.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,d.jsx)("button",{onClick:e=>{e.preventDefault(),M&&(t(!0),I((0,u.DD)(M)).unwrap().then((()=>{Q()})).catch((e=>{console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438:",e)})).finally((()=>{t(!1)})))},disabled:e,className:"bg-red-500 text-white px-4 py-2 rounded ".concat(e?"opacity-50 cursor-not-allowed":""),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),(0,d.jsx)("button",{onClick:Q,className:"bg-gray-300 px-4 py-2 rounded",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]}),U&&(0,d.jsxs)("p",{className:"text-red-500 mt-2",children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",U]})]})})}),(0,d.jsx)("button",{onClick:async e=>{if(e.preventDefault(),l&&r&&c&&f&&z&&R){t(!0);try{const e=new FormData;e.append("name",l),e.append("description",r),e.append("price",c),e.append("image",f),e.append("status",z),e.append("categoryId",R);await I((0,u.WY)(e)).unwrap();S("\u041f\u0440\u043e\u0434\u0443\u043a\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d!"),a(""),n(""),x(""),p(null),F(!1),A(""),T(""),V(null)}catch(s){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430:",s),w(s)}finally{t(!1)}}},disabled:e,className:"mt-6 bg-greenPrimeColor hover:bg-black hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md duration-300 ".concat(e?"opacity-50 cursor-not-allowed":""),children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"})]})})})})},p=(0,s.memo)(f);var h=l(2237),b=l(6218);const g=()=>{const e=(0,o.wA)(),{list:t,isLoading:l,deleteError:a,updateError:r}=(0,o.d4)((e=>e.posts));console.log(t);const[i,c]=(0,s.useState)(!1),[x,u]=(0,s.useState)(null),[f,p]=(0,s.useState)([]),[g,j]=(0,s.useState)(""),[N,y]=(0,s.useState)(""),[v,w]=(0,s.useState)(""),[C,S]=(0,s.useState)(""),[k,F]=(0,s.useState)(!1),[z,A]=(0,s.useState)("");(0,s.useEffect)((()=>{e((0,h.K5)({page:1,limit:12}))}),[e]);const D=()=>{F(!1)};return(0,d.jsx)("div",{className:"flex flex-col",children:(0,d.jsx)("div",{className:"w-full lgl:w-[500px] mx-auto flex flex-col justify-start",children:C?(0,d.jsxs)("div",{className:"w-full",children:[(0,d.jsx)("p",{className:"w-full px-4 py-10 text-green-500 font-medium font-titleFont",children:C}),(0,d.jsx)(n.N_,{to:"/manage",children:(0,d.jsx)("button",{className:"w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold tracking-wide hover:bg-black hover:text-white duration-300",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]}):(0,d.jsx)("form",{className:"w-full lgl:w-[500px] h-full flex flex-col justify-start",children:(0,d.jsxs)("div",{className:"px-6 py-4 w-full h-full flex flex-col justify-start",children:[(0,d.jsx)("h1",{className:"font-titleFont text-center underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4 pt-10",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c"}),(0,d.jsxs)("div",{className:"flex flex-col gap-3 pb-6",children:[(0,d.jsxs)("div",{className:"flex flex-col gap-.5",children:[(0,d.jsx)("p",{className:"font-titleFont text-base font-semibold text-gray-600",children:"\u041f\u0440\u0435\u0432\u044c\u044e-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),(0,d.jsxs)("label",{className:"flex items-center justify-center h-20 border-[2px] border-dashed border-gray-400 rounded-md cursor-pointer hover:border-greenPrimeColor",children:[(0,d.jsx)(m.zV$,{size:24,className:"text-gray-600"}),(0,d.jsx)("span",{className:"ml-2 text-sm text-gray-600",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"}),(0,d.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{const t=e.target.files[0];u(t),w("")},className:"hidden"})]}),x&&(0,d.jsx)("p",{className:"text-sm text-green-500",children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-.5",children:[(0,d.jsx)("p",{className:"font-titleFont text-base font-semibold text-gray-600",children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f (\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e)"}),(0,d.jsxs)("label",{className:"flex items-center justify-center h-20 border-[2px] border-dashed border-gray-400 rounded-md cursor-pointer hover:border-greenPrimeColor",children:[(0,d.jsx)(m.zV$,{size:24,className:"text-gray-600"}),(0,d.jsx)("span",{className:"ml-2 text-sm text-gray-600",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"}),(0,d.jsx)("input",{type:"file",accept:"image/*",multiple:!0,onChange:e=>{const t=Array.from(e.target.files);p(t),w("")},className:"hidden"})]}),f.length>0&&(0,d.jsxs)("p",{className:"text-sm text-green-500",children:["\u0412\u044b\u0431\u0440\u0430\u043d\u043e ",f.length," \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"]})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-.5",children:[(0,d.jsx)("p",{className:"font-titleFont text-base font-semibold text-gray-600",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0438"}),(0,d.jsx)("input",{type:"text",value:g,onChange:e=>{j(e.target.value),w("")},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",className:"w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-.5",children:[(0,d.jsx)("p",{className:"font-titleFont text-base font-semibold text-gray-600",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"}),(0,d.jsx)("textarea",{value:N,onChange:e=>{y(e.target.value),w("")},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",className:"w-full h-20 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"})]}),v&&(0,d.jsxs)("p",{className:"text-sm text-red-500 font-titleFont font-semibold px-4",children:[(0,d.jsx)("span",{className:"font-bold italic mr-1",children:"!"}),v]})]}),(0,d.jsx)("button",{onClick:()=>{A(""),F(!0)},className:"bg-red-500 hover:bg-red-700 hover:text-white cursor-pointer".concat(" w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300"),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c"}),(0,d.jsx)("div",{className:"w-full lgl:w-[500px] mx-auto flex flex-col justify-start",children:k&&(0,d.jsx)("div",{className:"fixed top-0 left-0 w-full h-full bg-black/30 z-50 flex items-center justify-center",children:(0,d.jsxs)("div",{className:"bg-white p-6 rounded-md w-[300px]",children:[(0,d.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c"}),(0,d.jsxs)("select",{className:"border border-gray-300 rounded w-full mb-4 p-2",value:z,onChange:e=>A(e.target.value),children:[(0,d.jsx)("option",{value:"",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u044c"}),Array.isArray(t)&&t.map((e=>(0,d.jsx)("option",{value:e.id,children:(0,b.Y)(e.createdAt)},e.id)))]}),(0,d.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,d.jsx)("button",{onClick:t=>{t.preventDefault(),z&&(c(!0),e((0,h.pm)(z)).unwrap().then((()=>{D()})).catch((e=>{console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438:",e)})).finally((()=>{c(!1)})))},disabled:i,className:"bg-red-500 text-white px-4 py-2 rounded ".concat(i?"opacity-50 cursor-not-allowed":""),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),(0,d.jsx)("button",{onClick:D,className:"bg-gray-300 px-4 py-2 rounded",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]}),a&&(0,d.jsxs)("p",{className:"text-red-500 mt-2",children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",a]})]})})}),(0,d.jsx)("button",{onClick:async t=>{if(t.preventDefault(),g)if(N)if(x)if(0!==f.length){c(!0);try{const t=new FormData;t.append("title",g),t.append("content",N),t.append("previewImage",x),t.append("images[]",f);await e((0,h.AB)(t)).unwrap();S("\u041d\u043e\u0432\u043e\u0441\u0442\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0430."),u(null),p([]),j(""),y("")}catch(l){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u0438:",l);const e=Array.isArray(null===l||void 0===l?void 0:l.message)?l.message.join(", "):(null===l||void 0===l?void 0:l.message)||"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.";w(e)}finally{c(!1)}}else w("\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.");else w("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0435\u0432\u044c\u044e-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.");else w("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438.");else w("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0438.")},disabled:i,className:"mt-6 bg-greenPrimeColor hover:bg-black hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md duration-300 ".concat(i?"opacity-50 cursor-not-allowed":""),children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c"})]})})})})},j=(0,s.memo)(g),N=()=>{const[e,t]=(0,s.useState)("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f");return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex justify-between items-center mt-4 md:mt-6 border-b-4 border-gray-300",children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f","\u041f\u0440\u043e\u0434\u0443\u043a\u0442","\u041d\u043e\u0432\u043e\u0441\u0442\u0438"].map((l=>(0,d.jsx)("button",{className:"pb-2 md:pb-4 text-sm md:text-xl font-bold ".concat(e===l?"text-greenPrimeColor border-b-4 border-greenPrimeColor":"text-gray-500"),onClick:()=>t(l),style:{width:"100%",textAlign:"center"},children:l},l)))}),"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"===e&&(0,d.jsx)(x,{}),"\u041f\u0440\u043e\u0434\u0443\u043a\u0442"===e&&(0,d.jsx)(p,{}),"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"===e&&(0,d.jsx)(j,{})]})},y=(0,s.memo)(N),v=()=>{const e=(0,a.zy)(),[t,l]=(0,s.useState)("");return(0,s.useEffect)((()=>{e.state&&e.state.data?l(e.state.data):l("Home")}),[e]),(0,d.jsxs)("div",{className:"max-w-container mx-auto px-4",children:[(0,d.jsx)(r.A,{title:"\u0410\u0434\u043c\u0438\u043d \u043f\u0430\u043d\u0435\u043b\u044c",prevLocation:t}),(0,d.jsx)("div",{className:"pb-10",children:(0,d.jsx)(y,{})})]})},w=(0,s.memo)(v)},6218:(e,t,l)=>{l.d(t,{Y:()=>s});const s=e=>!e||isNaN(new Date(e))?"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0430\u0442\u0430":new Date(e).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"})}}]);
//# sourceMappingURL=221.a7aafe4c.chunk.js.map