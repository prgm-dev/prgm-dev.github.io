import{S as s,i as t,s as a,e,t as l,k as r,c as o,a as c,g as n,d as h,n as i,b as d,f,F as p,h as u,l as m,J as g,j as v,m as w,o as x,v as b,r as k,w as E,u as $,L as j,B as y}from"../../chunks/vendor-a7ad7a2b.js";import{metadata as A}from"./posts/our-tech-stack-2021.svelte.md-2f00d193.js";import{metadata as B}from"./posts/our-tech-stack-2020.svelte.md-8a42dbe7.js";import{metadata as P}from"./posts/understanding-cardano-rewards.svelte.md-8105e8f4.js";import"../../chunks/BlogLayout-75ee0ab0.js";function D(s){let t,a,m,g,v,w,x,b,k,E,$=s[0].description&&I(s);return{c(){t=e("a"),a=e("h2"),m=l(s[1]),g=r(),$&&$.c(),v=r(),w=e("div"),x=r(),b=e("p"),k=l("Read on..."),this.h()},l(e){t=o(e,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var l=c(t);a=o(l,"H2",{class:!0});var r=c(a);m=n(r,s[1]),r.forEach(h),g=i(l),$&&$.l(l),v=i(l),w=o(l,"DIV",{class:!0}),c(w).forEach(h),x=i(l),b=o(l,"P",{class:!0});var d=c(b);k=n(d,"Read on..."),d.forEach(h),l.forEach(h),this.h()},h(){d(a,"class","text-xl font-semibold"),d(w,"class","flex-grow"),d(b,"class","mt-2 highlight-on-hover svelte-5y32d7"),d(t,"sveltekit:prefetch",""),d(t,"href",E="/blog/posts/"+s[0].slug),d(t,"class","w-full h-full p-4 bg-light-alt dark:bg-dark-alt rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col svelte-5y32d7")},m(s,e){f(s,t,e),p(t,a),p(a,m),p(t,g),$&&$.m(t,null),p(t,v),p(t,w),p(t,x),p(t,b),p(b,k)},p(s,a){2&a&&u(m,s[1]),s[0].description?$?$.p(s,a):($=I(s),$.c(),$.m(t,v)):$&&($.d(1),$=null),1&a&&E!==(E="/blog/posts/"+s[0].slug)&&d(t,"href",E)},d(s){s&&h(t),$&&$.d()}}}function I(s){let t,a,r=s[0].description+"";return{c(){t=e("p"),a=l(r),this.h()},l(s){t=o(s,"P",{class:!0});var e=c(t);a=n(e,r),e.forEach(h),this.h()},h(){d(t,"class","mt-2 text-sm opacity-60")},m(s,e){f(s,t,e),p(t,a)},p(s,t){1&t&&r!==(r=s[0].description+"")&&u(a,r)},d(s){s&&h(t)}}}function N(s){let t,a=s[0]&&D(s);return{c(){a&&a.c(),t=m()},l(s){a&&a.l(s),t=m()},m(s,e){a&&a.m(s,e),f(s,t,e)},p(s,[e]){s[0]?a?a.p(s,e):(a=D(s),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i:g,o:g,d(s){a&&a.d(s),s&&h(t)}}}function S(s,t,a){let e;var l;let{post:r=null}=t;return s.$$set=s=>{"post"in s&&a(0,r=s.post)},s.$$.update=()=>{5&s.$$.dirty&&a(1,e=null!==a(2,l=r.title)&&void 0!==l?l:"—")},[r,e,l]}class V extends s{constructor(s){super(),t(this,s,S,N,a,{post:0})}}function H(s,t,a){const e=s.slice();return e[2]=t[a],e}function O(s){let t,a;return t=new V({props:{post:s[2]}}),{c(){v(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,e){x(t,s,e),a=!0},p(s,a){const e={};1&a&&(e.post=s[2]),t.$set(e)},i(s){a||(b(t.$$.fragment,s),a=!0)},o(s){k(t.$$.fragment,s),a=!1},d(s){E(t,s)}}}function L(s){let t,a,u,m,g,v,w,x,E,A,B,P,D,I,N,S,V,L,R=s[0],W=[];for(let e=0;e<R.length;e+=1)W[e]=O(H(s,R,e));const F=s=>k(W[s],1,1,(()=>{W[s]=null}));return{c(){t=e("div"),a=e("a"),u=e("h1"),m=l("Blog"),g=r(),v=e("h2"),w=e("span"),x=l("What we think"),E=l(",\n\t\t"),A=e("span"),B=l("what we’re working on"),P=l(",\n\t\t"),D=e("span"),I=l("and how we’re building it."),N=r(),S=e("div"),V=e("div");for(let s=0;s<W.length;s+=1)W[s].c();this.h()},l(s){t=o(s,"DIV",{class:!0});var e=c(t);a=o(e,"A",{class:!0,href:!0});var l=c(a);u=o(l,"H1",{class:!0});var r=c(u);m=n(r,"Blog"),r.forEach(h),l.forEach(h),g=i(e),v=o(e,"H2",{class:!0});var d=c(v);w=o(d,"SPAN",{class:!0});var f=c(w);x=n(f,"What we think"),f.forEach(h),E=n(d,",\n\t\t"),A=o(d,"SPAN",{class:!0});var p=c(A);B=n(p,"what we’re working on"),p.forEach(h),P=n(d,",\n\t\t"),D=o(d,"SPAN",{class:!0});var b=c(D);I=n(b,"and how we’re building it."),b.forEach(h),d.forEach(h),N=i(e),S=o(e,"DIV",{class:!0});var k=c(S);V=o(k,"DIV",{class:!0});var $=c(V);for(let t=0;t<W.length;t+=1)W[t].l($);$.forEach(h),k.forEach(h),e.forEach(h),this.h()},h(){d(u,"class","text-3xl font-bold svelte-i4cmhv"),d(a,"class","blog-title svelte-i4cmhv"),d(a,"href","/blog"),d(w,"class","whitespace-nowrap"),d(A,"class","whitespace-nowrap"),d(D,"class","whitespace-nowrap"),d(v,"class","mt-2 text-xl opacity-60 w-full md:w-4/6"),d(V,"class","grid grid-cols-1 sm:grid-cols-2 gap-4"),d(S,"class","mt-5 h-screen"),d(t,"class","mx-auto max-w-screen-md px-4 md:px-1 my-5")},m(s,e){f(s,t,e),p(t,a),p(a,u),p(u,m),p(t,g),p(t,v),p(v,w),p(w,x),p(v,E),p(v,A),p(A,B),p(v,P),p(v,D),p(D,I),p(t,N),p(t,S),p(S,V);for(let t=0;t<W.length;t+=1)W[t].m(V,null);L=!0},p(s,[t]){if(1&t){let a;for(R=s[0],a=0;a<R.length;a+=1){const e=H(s,R,a);W[a]?(W[a].p(e,t),b(W[a],1)):(W[a]=O(e),W[a].c(),b(W[a],1),W[a].m(V,null))}for(y(),a=R.length;a<W.length;a+=1)F(a);$()}},i(s){if(!L){for(let s=0;s<R.length;s+=1)b(W[s]);L=!0}},o(s){W=W.filter(Boolean);for(let t=0;t<W.length;t+=1)k(W[t]);L=!1},d(s){s&&h(t),j(W,s)}}}const R=!0,W=[{slug:"our-tech-stack-2021",metadata:A},{slug:"our-tech-stack-2020",metadata:B},{slug:"understanding-cardano-rewards",metadata:P}];function F(s,t,a){let e=Object.fromEntries(W.map((({slug:s,metadata:t})=>[s,Object.assign({slug:s},t)]))),l=[];return a(0,l=Object.values(e)),[l]}export default class extends s{constructor(s){super(),t(this,s,F,L,a,{})}}export{R as prerender,W as slugMapping};