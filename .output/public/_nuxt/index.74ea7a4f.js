import{a as d,o as e,b as n,e as t,f as p,h as u,F as h,r as x,u as f,t as g,i as s,j as a,w as v}from"./entry.58624817.js";import{_ as $}from"./nuxt-link.a26491af.js";const C={},w=t("h2",null," Call To Action Component ",-1),T=t("div",{class:"text-xl"}," Some CTA text ",-1),b=[w,T];function y(o,c){return e(),n("div",null,b)}const A=d(C,[["render",y]]),N=p({id:"items",state:()=>({items:[{name:"item 1",id:"1",description:"Description 1"},{name:"item 2",id:"2",description:"Description 2"},{name:"item 3",id:"3",description:"Description 3"}]})}),S=t("h2",null,"Pinia Component",-1),V=t("div",{class:"text-lg"},"Store Items:",-1),k=u({__name:"PiniaComponent",setup(o){const i=N().items;return(l,r)=>(e(),n("div",null,[S,V,t("ul",null,[(e(!0),n(h,null,x(f(i),(_,m)=>(e(),n("li",{key:m},g(_.name),1))),128))])]))}}),B={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},D=t("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),P=[D];function j(o,c){return e(),n("svg",B,P)}const F={name:"mdi-github",render:j},E={},G={class:"flex h-screen justify-center items-center px-4"},H={class:"grid grid-cols-2 gap-x-10 md:gap-x-20"},I=t("div",{class:"col-span-2"},[t("h1",null,"Nuxt Tailwind Template w/ Pinia 🎉")],-1),L={class:"col-span-1"},M={class:"col-span-1"},Z={class:"col-span-2"},q={class:"inline align-bottom"};function z(o,c){const i=A,l=k,r=F,_=$;return e(),n("div",G,[t("div",H,[I,t("div",L,[s(i)]),t("div",M,[s(l)]),t("div",Z,[s(r,{style:{color:"white"},class:"text-2xl inline mr-3"}),t("div",q,[a("Visit on "),s(_,{to:"https://github.com/michaelsynan/Nuxt-Tailwind-Template"},{default:v(()=>[a("GitHub")]),_:1}),a(".")])])])])}const O=d(E,[["render",z]]);export{O as default};
