"use strict";(self.webpackChunkdry_mix_project=self.webpackChunkdry_mix_project||[]).push([[913],{6913:(e,s,l)=>{l.r(s),l.d(s,{default:()=>j});var t=l(9379),a=l(5043),r=l(1462),n=l(3216),i=l(5475),o=l(155),x=l(184),c=l(2115),d=l(1619),m=l(3003),h=l(579);const f={email:"",password:""},p=()=>{const e=(0,m.wA)(),s=(0,n.Zp)(),[l,p]=(0,a.useState)(f),{email:j,password:u}=l,{isLoggedIn:g,isError:b}=(0,m.d4)((e=>e.auth)),N=e=>{const{name:s,value:a}=e.target;p((0,t.A)((0,t.A)({},l),{},{[s]:a}))},w=s=>{if(s.preventDefault(),!j||!u)return c.oR.error("All fields are required");e((0,d.iD)({email:j,password:u}))};return(0,a.useEffect)((()=>{g&&s("/home")}),[g,b,s]),(0,h.jsxs)("div",{className:"w-full h-screen flex items-center justify-center",children:[(0,h.jsx)("div",{className:"w-1/2 hidden lgl:inline-flex h-full text-white",children:(0,h.jsxs)("div",{className:"w-[450px] h-full bg-greenPrimeColor px-10 flex flex-col gap-6 justify-center",children:[(0,h.jsx)(i.N_,{to:"/",children:(0,h.jsx)("img",{src:o.OZ,alt:"logoImg",className:"w-28"})}),(0,h.jsxs)("div",{className:"flex flex-col gap-1 -mt-1",children:[(0,h.jsx)("h1",{className:"font-titleFont text-xl font-medium",children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"}),(0,h.jsx)("p",{className:"text-base",children:"\u0418\u043d\u043d\u043e\u0432\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0443\u0441\u043f\u0435\u0445\u0430."})]}),(0,h.jsxs)("div",{className:"w-[300px] flex items-start gap-3",children:[(0,h.jsx)("span",{className:"text-green-500 mt-1",children:(0,h.jsx)(r.HU4,{})}),(0,h.jsxs)("p",{className:"text-base text-gray-300",children:[(0,h.jsx)("span",{className:"text-white font-semibold font-titleFont",children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e"}),(0,h.jsx)("br",{}),"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0438\u043d\u043d\u043e\u0432\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430\u043c \u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c \u0432 \u043e\u0434\u0438\u043d \u043a\u043b\u0438\u043a."]})]}),(0,h.jsxs)("div",{className:"w-[300px] flex items-start gap-3",children:[(0,h.jsx)("span",{className:"text-green-500 mt-1",children:(0,h.jsx)(r.HU4,{})}),(0,h.jsxs)("p",{className:"text-base text-gray-300",children:[(0,h.jsx)("span",{className:"text-white font-semibold font-titleFont",children:"\u0412\u0430\u0448\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438"}),(0,h.jsx)("br",{}),"\u041f\u0440\u043e\u0447\u043d\u044b\u0435, \u0434\u043e\u043b\u0433\u043e\u0432\u0435\u0447\u043d\u044b\u0435 \u0438 \u044d\u043a\u043e\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f."]})]}),(0,h.jsxs)("div",{className:"w-[300px] flex items-start gap-3",children:[(0,h.jsx)("span",{className:"text-green-500 mt-1",children:(0,h.jsx)(r.HU4,{})}),(0,h.jsxs)("p",{className:"text-base text-gray-300",children:[(0,h.jsx)("span",{className:"text-white font-semibold font-titleFont",children:"\u041d\u0430\u043c \u0434\u043e\u0432\u0435\u0440\u044f\u044e\u0442"}),(0,h.jsx)("br",{}),"\u041d\u0430\u0448\u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0432\u044b\u0431\u0438\u0440\u0430\u044e\u0442 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044b, \u0446\u0435\u043d\u044f\u0449\u0438\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438 \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u044c."]})]})]})}),(0,h.jsx)("div",{className:"w-full lgl:w-1/2 h-full",children:(0,h.jsx)("form",{onSubmit:w,className:"w-full lgl:w-[450px] h-screen flex items-center justify-center",children:(0,h.jsxs)("div",{className:"px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor",children:[(0,h.jsx)("h1",{className:"font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4",children:"\u0421 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435\u043c"}),(0,h.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,h.jsxs)("div",{className:"flex flex-col gap-.5",children:[(0,h.jsx)("p",{className:"font-titleFont text-base font-semibold text-gray-600",children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"}),(0,h.jsx)("input",{name:"email",onChange:N,value:j,className:"w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none",type:"email",placeholder:"example@workemail.com"})]}),(0,h.jsxs)("div",{className:"flex flex-col gap-.5",children:[(0,h.jsx)("p",{className:"font-titleFont text-base font-semibold text-gray-600",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),(0,h.jsx)("input",{name:"password",onChange:N,value:u,className:"w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none",type:"password",placeholder:"Create password"})]}),(0,h.jsx)("button",{onClick:w,className:"bg-greenPrimeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300",children:"\u0412\u043e\u0439\u0442\u0438"}),(0,h.jsxs)("p",{className:"text-sm text-center font-titleFont font-medium",children:["\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438?"," ",(0,h.jsx)(i.N_,{to:"/signup",children:(0,h.jsx)("span",{className:"hover:text-greenPrimeColor duration-300",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}),(0,h.jsxs)("div",{className:"flex items-center mt-2 mb-2",children:[(0,h.jsx)("hr",{className:"flex-grow border-t border-gray-300"}),(0,h.jsx)("span",{className:"mx-4 text-sm text-center font-titleFont font-medium",children:"\u0418\u041b\u0418"}),(0,h.jsx)("hr",{className:"flex-grow border-t border-gray-300"})]}),(0,h.jsxs)("button",{className:"flex items-center justify-center gap-2 bg-red-500 text-white p-3 px-5 rounded-md",children:[(0,h.jsx)(x.DSS,{}),(0,h.jsx)("p",{className:"text-sm",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0441 Google"})]})]})]})})})]})},j=(0,a.memo)(p)}}]);
//# sourceMappingURL=913.e9a99806.chunk.js.map