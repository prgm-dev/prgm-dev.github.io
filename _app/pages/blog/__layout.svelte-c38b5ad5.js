import{S as t,i as e,s as a,O as s,e as o,t as n,c as r,a as l,g as c,d as h,b as i,Z as m,f as p,F as d,h as f,D as g,k as u,j as v,E as $,n as w,m as y,o as E,P as k,G as x,H as T,I as b,x as A,u as j,v as M,R as O,J as D}from"../../chunks/vendor-fd4b7359.js";import{L as I}from"../../chunks/Logo-26d5e580.js";import{r as V}from"../../chunks/routes-c138df12.js";import{p as z}from"../../chunks/stores-27caff06.js";function L(t,e,a){const s=t.slice();return s[6]=e[a].href,s[7]=e[a].active,s[8]=e[a].name,s}function N(t){let e,a,s,g=t[8]+"";return{c(){e=o("a"),a=n(g),this.h()},l(t){e=r(t,"A",{href:!0,class:!0});var s=l(e);a=c(s,g),s.forEach(h),this.h()},h(){i(e,"href",s=t[6]),i(e,"class","svelte-19vtrwt"),m(e,"selected",t[7])},m(t,s){p(t,e,s),d(e,a)},p(t,o){1&o&&g!==(g=t[8]+"")&&f(a,g),1&o&&s!==(s=t[6])&&i(e,"href",s),1&o&&m(e,"selected",t[7])},d(t){t&&h(e)}}}function P(t){let e,a,n,c,m,f,D,V,z,P,S,_,q,F,G,H,J,R,W,X,Y,Z=!1,B=()=>{Z=!1};s(t[5]),_=new I({});let C=t[0],K=[];for(let s=0;s<C.length;s+=1)K[s]=N(L(t,C,s));const Q=t[4].default,U=g(Q,t,t[3],null);return{c(){a=o("meta"),n=o("meta"),c=o("meta"),m=o("meta"),f=o("meta"),D=o("meta"),V=u(),z=o("div"),P=o("div"),S=o("span"),v(_.$$.fragment),q=u(),F=o("div"),G=u(),H=o("nav");for(let t=0;t<K.length;t+=1)K[t].c();R=u(),U&&U.c(),this.h()},l(t){const e=$('[data-svelte="svelte-1nqxusc"]',document.head);a=r(e,"META",{property:!0,content:!0}),n=r(e,"META",{property:!0,content:!0}),c=r(e,"META",{property:!0,content:!0}),m=r(e,"META",{property:!0,content:!0}),f=r(e,"META",{property:!0,content:!0}),D=r(e,"META",{name:!0,content:!0}),e.forEach(h),V=w(t),z=r(t,"DIV",{role:!0,class:!0});var s=l(z);P=r(s,"DIV",{class:!0});var o=l(P);S=r(o,"SPAN",{class:!0,role:!0});var i=l(S);y(_.$$.fragment,i),i.forEach(h),q=w(o),F=r(o,"DIV",{}),l(F).forEach(h),G=w(o),H=r(o,"NAV",{class:!0});var p=l(H);for(let a=0;a<K.length;a+=1)K[a].l(p);p.forEach(h),o.forEach(h),s.forEach(h),R=w(t),U&&U.l(t),this.h()},h(){i(a,"property","og:image"),i(a,"content","https://prgm.dev/favicon/opengraph.png"),i(n,"property","og:image:alt"),i(n,"content","prgm.dev logo with monogram"),i(c,"property","og:image:type"),i(c,"content","image/png"),i(m,"property","og:image:width"),i(m,"content","1200"),i(f,"property","og:image:height"),i(f,"content","630"),i(D,"name","twitter:card"),i(D,"content","summary_large_image"),i(S,"class","text-3xl"),i(S,"role","presentation"),i(H,"class","svelte-19vtrwt"),i(P,"class","mx-auto max-w-screen-md w-full h-full flex items-center justify-between"),i(z,"role","banner"),i(z,"class",J="w-full sticky top-0 h-20 px-4 py-2 bg-light dark:bg-dark "+(t[1]<=0?"shadow-none":"shadow-md")+" z-40 transition-all")},m(s,o){d(document.head,a),d(document.head,n),d(document.head,c),d(document.head,m),d(document.head,f),d(document.head,D),p(s,V,o),p(s,z,o),d(z,P),d(P,S),E(_,S,null),d(P,q),d(P,F),d(P,G),d(P,H);for(let t=0;t<K.length;t+=1)K[t].m(H,null);p(s,R,o),U&&U.m(s,o),W=!0,X||(Y=k(window,"scroll",(()=>{Z=!0,clearTimeout(e),e=setTimeout(B,100),t[5]()})),X=!0)},p(t,[a]){if(2&a&&!Z&&(Z=!0,clearTimeout(e),scrollTo(window.pageXOffset,t[1]),e=setTimeout(B,100)),1&a){let e;for(C=t[0],e=0;e<C.length;e+=1){const s=L(t,C,e);K[e]?K[e].p(s,a):(K[e]=N(s),K[e].c(),K[e].m(H,null))}for(;e<K.length;e+=1)K[e].d(1);K.length=C.length}(!W||2&a&&J!==(J="w-full sticky top-0 h-20 px-4 py-2 bg-light dark:bg-dark "+(t[1]<=0?"shadow-none":"shadow-md")+" z-40 transition-all"))&&i(z,"class",J),U&&U.p&&(!W||8&a)&&x(U,Q,t,t[3],W?b(Q,t[3],a,null):T(t[3]),null)},i(t){W||(A(_.$$.fragment,t),A(U,t),W=!0)},o(t){j(_.$$.fragment,t),j(U,t),W=!1},d(t){h(a),h(n),h(c),h(m),h(f),h(D),t&&h(V),t&&h(z),M(_),O(K,t),t&&h(R),U&&U.d(t),X=!1,Y()}}}function S(t,e,a){let s;D(t,z,(t=>a(2,s=t)));let{$$slots:o={},$$scope:n}=e,r=[],l=0;return t.$$set=t=>{"$$scope"in t&&a(3,n=t.$$scope)},t.$$.update=()=>{4&t.$$.dirty&&a(0,r=V.map((t=>Object.assign(Object.assign({},t),{active:s.path.startsWith(t.href)}))))},[r,l,s,n,o,function(){a(1,l=window.pageYOffset)}]}class _ extends t{constructor(t){super(),e(this,t,S,P,a,{})}}export{_ as default};
