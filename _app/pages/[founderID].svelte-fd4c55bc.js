import{X as e,S as a,i as t,s,k as r,e as n,n as l,c as o,b as i,f as c,d as f,t as d,j as m,a as h,g as p,m as u,F as g,o as v,h as $,r as x,u as b,w,x as y,T as k,Y as E,Z as A,v as P,_ as I,l as S,E as M,A as N,M as z,$ as R,a0 as D,a1 as T,a2 as _,V as G,a3 as V,a4 as F,a5 as U,H as L}from"../chunks/vendor-17dca76f.js";import{L as j}from"../chunks/Logo-027bdf70.js";import{i as C,a as H}from"../chunks/founders-97749bb8.js";import{p as K}from"../chunks/stores-4c1aac46.js";async function O(a){const t=(s=C(a,512),fetch(s).then((e=>e.blob())).then((e=>new Promise(((a,t)=>{const s=new FileReader;s.onloadend=()=>a(s.result.toString()),s.onerror=t,s.readAsDataURL(e)})))));var s;const r=new e;r.addName(a.name.last,a.name.first).addAddress("Paris",void 0,void 0,"Paris",void 0,void 0,"France").addCompany("PRGM Dev").addJobtitle(a.title).addEmail(`${a.identifier}@prgm.dev`,"WORK").addURL(`https://${a.identifier}.prgm.dev/`,"WORK");const n=(await t).split(",");if(2===n.length){const[e,a]=n,t=e.match(/image\/([^;]+)/);if(2===t.length){const e=t[1].toUpperCase();r.addPhoto(a,e)}else console.error("Expected URL-encoded photo header to contain the MIME Type. Got:",{header:e})}else console.error("Expected exactly two parts in URL-encoded photo data. Got:",{urlParts:n});return r}function W(e){let a,t,s,d,m,h,p,u,g,v,$,x,b;return document.title=a=e[0].name.first+" "+e[0].name.last+" | PRGM.dev",{c(){t=r(),s=n("meta"),m=r(),h=n("meta"),u=r(),g=n("meta"),$=r(),x=n("meta"),this.h()},l(e){t=l(e),s=o(e,"META",{name:!0,property:!0,content:!0}),m=l(e),h=o(e,"META",{property:!0,content:!0}),u=l(e),g=o(e,"META",{property:!0,content:!0}),$=l(e),x=o(e,"META",{property:!0,content:!0}),this.h()},h(){i(s,"name","description"),i(s,"property","og:description"),i(s,"content",d=e[0].name.first+" "+e[0].name.last+" is "+e[0].title+" at PRGM Dev, a Paris-based company crafting delightful software."),i(h,"property","og:profile:username"),i(h,"content",p=e[0].identifier),i(g,"property","og:profile:first_name"),i(g,"content",v=e[0].name.first),i(x,"property","og:profile:last_name"),i(x,"content",b=e[0].name.last)},m(e,a){c(e,t,a),c(e,s,a),c(e,m,a),c(e,h,a),c(e,u,a),c(e,g,a),c(e,$,a),c(e,x,a)},p(e,t){1&t&&a!==(a=e[0].name.first+" "+e[0].name.last+" | PRGM.dev")&&(document.title=a),1&t&&d!==(d=e[0].name.first+" "+e[0].name.last+" is "+e[0].title+" at PRGM Dev, a Paris-based company crafting delightful software.")&&i(s,"content",d),1&t&&p!==(p=e[0].identifier)&&i(h,"content",p),1&t&&v!==(v=e[0].name.first)&&i(g,"content",v),1&t&&b!==(b=e[0].name.last)&&i(x,"content",b)},d(e){e&&f(t),e&&f(s),e&&f(m),e&&f(h),e&&f(u),e&&f(g),e&&f($),e&&f(x)}}}function B(e){let a,t,s,S,M,N,T,_,G,V,F,U,L,j,C,H,K,O,W,B,ee,ae,te,se,re,ne,le,oe,ie,ce,fe,de,me,he,pe,ue,ge,ve,$e,xe,be,we,ye,ke,Ee,Ae,Pe,Ie,Se,Me,Ne,ze,Re,De,Te,_e,Ge,Ve,Fe,Ue=e[0].name.first+"",Le=e[0].name.last+"",je=e[0].title+"",Ce=e[0].identifier+"",He=e[0].social.linkedIn+"";const Ke=[X,J],Oe=[];function We(e,a){return e[2]?1:0}oe=We(e),ie=Oe[oe]=Ke[oe](e),ue=new z({props:{icon:R,fw:!0,class:"inline"}}),Pe=new z({props:{icon:D,fw:!0,class:"inline"}});let Be=e[0].social.github&&Y(e),Je=e[0].social.gitlab&&Z(e),Xe=e[0].social.keybase&&q(e),Ye=!!e[2]&&Q(e);return{c(){a=n("div"),t=n("div"),s=n("div"),S=n("img"),T=r(),_=n("div"),G=n("div"),V=n("div"),F=n("h1"),U=d(Ue),L=r(),j=n("span"),C=d(Le),K=r(),O=n("h2"),W=d(je),B=d(" at\n\t\t\t\t\t\t\t\t"),ee=n("a"),ae=d("prgm.dev"),se=r(),re=n("div"),ne=r(),le=n("div"),ie.c(),me=r(),he=n("div"),pe=n("a"),m(ue.$$.fragment),ge=r(),ve=n("span"),$e=n("span"),xe=d(Ce),be=n("span"),we=d("@prgm.dev"),Ee=r(),Ae=n("a"),m(Pe.$$.fragment),Ie=r(),Se=n("span"),Me=n("span"),Ne=d("/"),ze=d(He),Te=r(),Be&&Be.c(),_e=r(),Je&&Je.c(),Ge=r(),Xe&&Xe.c(),Ve=r(),Ye&&Ye.c(),this.h()},l(e){a=o(e,"DIV",{class:!0,role:!0});var r=h(a);t=o(r,"DIV",{role:!0,class:!0});var n=h(t);s=o(n,"DIV",{role:!0,class:!0});var i=h(s);S=o(i,"IMG",{src:!0,alt:!0}),i.forEach(f),n.forEach(f),T=l(r),_=o(r,"DIV",{class:!0});var c=h(_);G=o(c,"DIV",{class:!0,"aria-labelledby":!0,"aria-describedby":!0});var d=h(G);V=o(d,"DIV",{class:!0});var m=h(V);F=o(m,"H1",{id:!0,class:!0});var g=h(F);U=p(g,Ue),L=l(g),j=o(g,"SPAN",{class:!0});var v=h(j);C=p(v,Le),v.forEach(f),g.forEach(f),K=l(m),O=o(m,"H2",{id:!0,class:!0});var $=h(O);W=p($,je),B=p($," at\n\t\t\t\t\t\t\t\t"),ee=o($,"A",{href:!0,class:!0});var x=h(ee);ae=p(x,"prgm.dev"),x.forEach(f),$.forEach(f),m.forEach(f),se=l(d),re=o(d,"DIV",{class:!0}),h(re).forEach(f),ne=l(d),le=o(d,"DIV",{class:!0});var b=h(le);ie.l(b),b.forEach(f),d.forEach(f),me=l(c),he=o(c,"DIV",{"aria-label":!0,class:!0});var w=h(he);pe=o(w,"A",{href:!0,class:!0});var y=h(pe);u(ue.$$.fragment,y),ge=l(y),ve=o(y,"SPAN",{class:!0});var k=h(ve);$e=o(k,"SPAN",{});var E=h($e);xe=p(E,Ce),E.forEach(f),be=o(k,"SPAN",{class:!0});var A=h(be);we=p(A,"@prgm.dev"),A.forEach(f),k.forEach(f),y.forEach(f),Ee=l(w),Ae=o(w,"A",{title:!0,href:!0,target:!0,class:!0,rel:!0});var P=h(Ae);u(Pe.$$.fragment,P),Ie=l(P),Se=o(P,"SPAN",{class:!0});var I=h(Se);Me=o(I,"SPAN",{class:!0});var M=h(Me);Ne=p(M,"/"),M.forEach(f),ze=p(I,He),I.forEach(f),P.forEach(f),Te=l(w),Be&&Be.l(w),_e=l(w),Je&&Je.l(w),Ge=l(w),Xe&&Xe.l(w),Ve=l(w),Ye&&Ye.l(w),w.forEach(f),c.forEach(f),r.forEach(f),this.h()},h(){S.src!==(M=e[4])&&i(S,"src",M),i(S,"alt",e[6]),i(s,"role","presentation"),i(s,"class","aspect-w-1 aspect-h-1 rounded-xl overflow-hidden border dark:border-dark"),i(t,"role","presentation"),i(t,"class","mx-auto my-3 w-10/12 xxs:w-9/12 xs:w-8/12 sm:w-4/12 flex-shrink-0"),i(j,"class","small-caps"),i(F,"id",H=e[0].identifier+"-name"),i(F,"class","text-2xl xxs:text-3xl sm:text-2xl"),i(ee,"href","/"),i(ee,"class","hover:underline"),i(O,"id",te=e[0].identifier+"-title"),i(O,"class","text-lg xxs:text-2xl sm:text-lg opacity-50"),i(V,"class","flex-shrink-0"),i(re,"class","flex-grow"),i(le,"class","flex-shrink-0 block hoverable:hidden"),i(G,"class","flex-shrink-0 w-full flex flex-row justify-start items-center"),i(G,"aria-labelledby",ce=e[0].identifier+"-name"),i(G,"aria-describedby",fe=e[0].identifier+"-title"),i(be,"class","low-contrast svelte-13ozrxk"),i(ve,"class","svelte-13ozrxk"),i(pe,"href",ye="mailto:"+e[0].identifier+"@prgm.dev"),i(pe,"class","svelte-13ozrxk"),i(Me,"class","low-contrast svelte-13ozrxk"),i(Se,"class","svelte-13ozrxk"),i(Ae,"title","LinkedIn profile"),i(Ae,"href",Re="https://www.linkedin.com/in/"+e[0].social.linkedIn+"/"),i(Ae,"target","_blank"),i(Ae,"class","whitespace-nowrap svelte-13ozrxk"),i(Ae,"rel","noopener noreferrer"),i(he,"aria-label","Contact & Social media links"),i(he,"class","flex-shrink-0 grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-2 text-base xxs:text-lg sm:text-base"),i(_,"class","flex-grow flex flex-col space-y-4 justify-around"),i(a,"class","w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-5 mb-10"),i(a,"role","presentation")},m(e,r){c(e,a,r),g(a,t),g(t,s),g(s,S),g(a,T),g(a,_),g(_,G),g(G,V),g(V,F),g(F,U),g(F,L),g(F,j),g(j,C),g(V,K),g(V,O),g(O,W),g(O,B),g(O,ee),g(ee,ae),g(G,se),g(G,re),g(G,ne),g(G,le),Oe[oe].m(le,null),g(_,me),g(_,he),g(he,pe),v(ue,pe,null),g(pe,ge),g(pe,ve),g(ve,$e),g($e,xe),g(ve,be),g(be,we),g(he,Ee),g(he,Ae),v(Pe,Ae,null),g(Ae,Ie),g(Ae,Se),g(Se,Me),g(Me,Ne),g(Se,ze),g(he,Te),Be&&Be.m(he,null),g(he,_e),Je&&Je.m(he,null),g(he,Ge),Xe&&Xe.m(he,null),g(he,Ve),Ye&&Ye.m(he,null),Fe=!0},p(a,t){e=a,(!Fe||1&t)&&Ue!==(Ue=e[0].name.first+"")&&$(U,Ue),(!Fe||1&t)&&Le!==(Le=e[0].name.last+"")&&$(C,Le),(!Fe||1&t&&H!==(H=e[0].identifier+"-name"))&&i(F,"id",H),(!Fe||1&t)&&je!==(je=e[0].title+"")&&$(W,je),(!Fe||1&t&&te!==(te=e[0].identifier+"-title"))&&i(O,"id",te);let s=oe;oe=We(e),oe===s?Oe[oe].p(e,t):(x(),b(Oe[s],1,1,(()=>{Oe[s]=null})),w(),ie=Oe[oe],ie?ie.p(e,t):(ie=Oe[oe]=Ke[oe](e),ie.c()),y(ie,1),ie.m(le,null)),(!Fe||1&t&&ce!==(ce=e[0].identifier+"-name"))&&i(G,"aria-labelledby",ce),(!Fe||1&t&&fe!==(fe=e[0].identifier+"-title"))&&i(G,"aria-describedby",fe),(!Fe||1&t)&&Ce!==(Ce=e[0].identifier+"")&&$(xe,Ce),(!Fe||1&t&&ye!==(ye="mailto:"+e[0].identifier+"@prgm.dev"))&&i(pe,"href",ye),(!Fe||1&t)&&He!==(He=e[0].social.linkedIn+"")&&$(ze,He),(!Fe||1&t&&Re!==(Re="https://www.linkedin.com/in/"+e[0].social.linkedIn+"/"))&&i(Ae,"href",Re),e[0].social.github?Be?(Be.p(e,t),1&t&&y(Be,1)):(Be=Y(e),Be.c(),y(Be,1),Be.m(he,_e)):Be&&(x(),b(Be,1,1,(()=>{Be=null})),w()),e[0].social.gitlab?Je?(Je.p(e,t),1&t&&y(Je,1)):(Je=Z(e),Je.c(),y(Je,1),Je.m(he,Ge)):Je&&(x(),b(Je,1,1,(()=>{Je=null})),w()),e[0].social.keybase?Xe?(Xe.p(e,t),1&t&&y(Xe,1)):(Xe=q(e),Xe.c(),y(Xe,1),Xe.m(he,Ve)):Xe&&(x(),b(Xe,1,1,(()=>{Xe=null})),w()),e[2]?Ye?(Ye.p(e,t),4&t&&y(Ye,1)):(Ye=Q(e),Ye.c(),y(Ye,1),Ye.m(he,null)):Ye&&(x(),b(Ye,1,1,(()=>{Ye=null})),w())},i(a){Fe||(N||k((()=>{N=E(t,I,{y:50,duration:250,delay:e[7].image}),N.start()})),y(ie),de||k((()=>{de=E(G,A,{duration:250,delay:e[7].header}),de.start()})),y(ue.$$.fragment,a),ke||k((()=>{ke=E(pe,A,{duration:250,delay:e[7].links}),ke.start()})),y(Pe.$$.fragment,a),De||k((()=>{De=E(Ae,A,{duration:250,delay:e[7].links}),De.start()})),y(Be),y(Je),y(Xe),y(Ye),Fe=!0)},o(e){b(ie),b(ue.$$.fragment,e),b(Pe.$$.fragment,e),b(Be),b(Je),b(Xe),b(Ye),Fe=!1},d(e){e&&f(a),Oe[oe].d(),P(ue),P(Pe),Be&&Be.d(),Je&&Je.d(),Xe&&Xe.d(),Ye&&Ye.d()}}}function J(e){let a,t,s,r,l;return t=new z({props:{icon:T,fw:!0,class:"inline"}}),{c(){a=n("a"),m(t.$$.fragment),this.h()},l(e){a=o(e,"A",{class:!0,download:!0,href:!0});var s=h(a);u(t.$$.fragment,s),s.forEach(f),this.h()},h(){i(a,"class","bg-light-alt dark:bg-dark-alt rounded-md block w-max h-full p-2"),i(a,"download",s=e[0].name.first+"_"+e[0].name.last+"."+e[2].getFileExtension()),i(a,"href",r="data:"+e[2].getContentType()+";charset=utf-8,"+encodeURI(e[2].toString()))},m(e,s){c(e,a,s),v(t,a,null),l=!0},p(e,t){(!l||5&t&&s!==(s=e[0].name.first+"_"+e[0].name.last+"."+e[2].getFileExtension()))&&i(a,"download",s),(!l||4&t&&r!==(r="data:"+e[2].getContentType()+";charset=utf-8,"+encodeURI(e[2].toString())))&&i(a,"href",r)},i(e){l||(y(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){e&&f(a),P(t)}}}function X(e){let a,t,s,r,l;return t=new z({props:{icon:_,fw:!0,class:"inline"}}),{c(){a=n("button"),m(t.$$.fragment),this.h()},l(e){a=o(e,"BUTTON",{class:!0});var s=h(a);u(t.$$.fragment,s),s.forEach(f),this.h()},h(){i(a,"class","bg-light-alt dark:bg-dark-alt rounded-md disabled:opacity-50 transition-opacity w-max h-full p-2"),a.disabled=e[1]},m(n,o){c(n,a,o),v(t,a,null),s=!0,r||(l=G(a,"click",e[8]),r=!0)},p(e,t){(!s||2&t)&&(a.disabled=e[1])},i(e){s||(y(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){e&&f(a),P(t),r=!1,l()}}}function Y(e){let a,t,s,x,w,I,S,M,N,R,D=e[0].social.github+"";return t=new z({props:{icon:V,fw:!0,class:"inline"}}),{c(){a=n("a"),m(t.$$.fragment),s=r(),x=n("span"),w=n("span"),I=d("@"),S=d(D),this.h()},l(e){a=o(e,"A",{title:!0,href:!0,target:!0,rel:!0,class:!0});var r=h(a);u(t.$$.fragment,r),s=l(r),x=o(r,"SPAN",{class:!0});var n=h(x);w=o(n,"SPAN",{class:!0});var i=h(w);I=p(i,"@"),i.forEach(f),S=p(n,D),n.forEach(f),r.forEach(f),this.h()},h(){i(w,"class","low-contrast svelte-13ozrxk"),i(x,"class","svelte-13ozrxk"),i(a,"title","GitHub profile"),i(a,"href",M="https://github.com/"+e[0].social.github+"/"),i(a,"target","_blank"),i(a,"rel","noopener noreferrer"),i(a,"class","svelte-13ozrxk")},m(e,r){c(e,a,r),v(t,a,null),g(a,s),g(a,x),g(x,w),g(w,I),g(x,S),R=!0},p(t,s){e=t,(!R||1&s)&&D!==(D=e[0].social.github+"")&&$(S,D),(!R||1&s&&M!==(M="https://github.com/"+e[0].social.github+"/"))&&i(a,"href",M)},i(s){R||(y(t.$$.fragment,s),N||k((()=>{N=E(a,A,{duration:250,delay:e[7].links}),N.start()})),R=!0)},o(e){b(t.$$.fragment,e),R=!1},d(e){e&&f(a),P(t)}}}function Z(e){let a,t,s,x,w,I,S,M,N,R,D=e[0].social.gitlab+"";return t=new z({props:{icon:F,fw:!0,class:"inline"}}),{c(){a=n("a"),m(t.$$.fragment),s=r(),x=n("span"),w=n("span"),I=d("@"),S=d(D),this.h()},l(e){a=o(e,"A",{title:!0,href:!0,target:!0,rel:!0,class:!0});var r=h(a);u(t.$$.fragment,r),s=l(r),x=o(r,"SPAN",{class:!0});var n=h(x);w=o(n,"SPAN",{class:!0});var i=h(w);I=p(i,"@"),i.forEach(f),S=p(n,D),n.forEach(f),r.forEach(f),this.h()},h(){i(w,"class","low-contrast svelte-13ozrxk"),i(x,"class","svelte-13ozrxk"),i(a,"title","GitLab profile"),i(a,"href",M="https://gitlab.com/"+e[0].social.gitlab+"/"),i(a,"target","_blank"),i(a,"rel","noopener noreferrer"),i(a,"class","svelte-13ozrxk")},m(e,r){c(e,a,r),v(t,a,null),g(a,s),g(a,x),g(x,w),g(w,I),g(x,S),R=!0},p(t,s){e=t,(!R||1&s)&&D!==(D=e[0].social.gitlab+"")&&$(S,D),(!R||1&s&&M!==(M="https://gitlab.com/"+e[0].social.gitlab+"/"))&&i(a,"href",M)},i(s){R||(y(t.$$.fragment,s),N||k((()=>{N=E(a,A,{duration:250,delay:e[7].links}),N.start()})),R=!0)},o(e){b(t.$$.fragment,e),R=!1},d(e){e&&f(a),P(t)}}}function q(e){let a,t,s,x,w,I,S,M,N,R,D=e[0].social.keybase+"";return t=new z({props:{icon:U,fw:!0,class:"inline"}}),{c(){a=n("a"),m(t.$$.fragment),s=r(),x=n("span"),w=n("span"),I=d("/"),S=d(D),this.h()},l(e){a=o(e,"A",{title:!0,href:!0,target:!0,rel:!0,class:!0});var r=h(a);u(t.$$.fragment,r),s=l(r),x=o(r,"SPAN",{class:!0});var n=h(x);w=o(n,"SPAN",{class:!0});var i=h(w);I=p(i,"/"),i.forEach(f),S=p(n,D),n.forEach(f),r.forEach(f),this.h()},h(){i(w,"class","low-contrast svelte-13ozrxk"),i(x,"class","svelte-13ozrxk"),i(a,"title","Keybase profile"),i(a,"href",M="https://keybase.io/"+e[0].social.keybase+"/"),i(a,"target","_blank"),i(a,"rel","noopener noreferrer"),i(a,"class","svelte-13ozrxk")},m(e,r){c(e,a,r),v(t,a,null),g(a,s),g(a,x),g(x,w),g(w,I),g(x,S),R=!0},p(t,s){e=t,(!R||1&s)&&D!==(D=e[0].social.keybase+"")&&$(S,D),(!R||1&s&&M!==(M="https://keybase.io/"+e[0].social.keybase+"/"))&&i(a,"href",M)},i(s){R||(y(t.$$.fragment,s),N||k((()=>{N=E(a,A,{duration:250,delay:e[7].links}),N.start()})),R=!0)},o(e){b(t.$$.fragment,e),R=!1},d(e){e&&f(a),P(t)}}}function Q(e){let a,t,s,x,w,I,S,M,N,R,D,T,G,V,F,U=e[0].name.first+"",L=e[0].name.last+"",j=e[2].getFileExtension()+"";return t=new z({props:{icon:_,fw:!0,class:"inline"}}),{c(){a=n("a"),m(t.$$.fragment),s=r(),x=n("span"),w=d(U),I=n("span"),S=d("_"),M=d(L),N=n("span"),R=d("."),D=d(j),this.h()},l(e){a=o(e,"A",{download:!0,href:!0,class:!0});var r=h(a);u(t.$$.fragment,r),s=l(r),x=o(r,"SPAN",{class:!0});var n=h(x);w=p(n,U),I=o(n,"SPAN",{class:!0});var i=h(I);S=p(i,"_"),i.forEach(f),M=p(n,L),N=o(n,"SPAN",{class:!0});var c=h(N);R=p(c,"."),D=p(c,j),c.forEach(f),n.forEach(f),r.forEach(f),this.h()},h(){i(I,"class","low-contrast svelte-13ozrxk"),i(N,"class","low-contrast svelte-13ozrxk"),i(x,"class","svelte-13ozrxk"),i(a,"download",T=e[0].name.first+"_"+e[0].name.last+"."+e[2].getFileExtension()),i(a,"href",G="data:"+e[2].getContentType()+";charset=utf-8,"+encodeURI(e[2].toString())),i(a,"class","hidden hoverable:inline svelte-13ozrxk")},m(e,r){c(e,a,r),v(t,a,null),g(a,s),g(a,x),g(x,w),g(x,I),g(I,S),g(x,M),g(x,N),g(N,R),g(N,D),F=!0},p(t,s){e=t,(!F||1&s)&&U!==(U=e[0].name.first+"")&&$(w,U),(!F||1&s)&&L!==(L=e[0].name.last+"")&&$(M,L),(!F||4&s)&&j!==(j=e[2].getFileExtension()+"")&&$(D,j),(!F||5&s&&T!==(T=e[0].name.first+"_"+e[0].name.last+"."+e[2].getFileExtension()))&&i(a,"download",T),(!F||4&s&&G!==(G="data:"+e[2].getContentType()+";charset=utf-8,"+encodeURI(e[2].toString())))&&i(a,"href",G)},i(s){F||(y(t.$$.fragment,s),V||k((()=>{V=E(a,A,{duration:250,delay:e[7].links}),V.start()})),F=!0)},o(e){b(t.$$.fragment,e),F=!1},d(e){e&&f(a),P(t)}}}function ee(e){let a,t,s,d,p,$,k,E,A,I,N,z,R,D=e[0]&&W(e);A=new j({});let T=e[0]&&B(e);return{c(){a=n("meta"),t=n("meta"),s=n("meta"),d=n("meta"),D&&D.c(),p=S(),$=r(),k=n("div"),E=n("div"),m(A.$$.fragment),I=r(),N=n("main"),T&&T.c(),this.h()},l(e){const r=M('[data-svelte="svelte-1f5uf02"]',document.head);a=o(r,"META",{name:!0,property:!0,content:!0}),t=o(r,"META",{property:!0,content:!0}),s=o(r,"META",{property:!0,content:!0}),d=o(r,"META",{property:!0,content:!0}),D&&D.l(r),p=S(),r.forEach(f),$=l(e),k=o(e,"DIV",{class:!0});var n=h(k);E=o(n,"DIV",{class:!0,role:!0});var i=h(E);u(A.$$.fragment,i),i.forEach(f),I=l(n),N=o(n,"MAIN",{class:!0,"aria-label":!0});var c=h(N);T&&T.l(c),c.forEach(f),n.forEach(f),this.h()},h(){i(a,"name","title"),i(a,"property","title"),i(a,"content",e[3]),i(t,"property","og:title"),i(t,"content",e[3]),i(s,"property","og:image"),i(s,"content",e[5]),i(d,"property","og:type"),i(d,"content","profile"),i(E,"class","mx-auto w-max sm:pt-5"),i(E,"role","banner"),i(N,"class","w-full"),i(N,"aria-label",z=e[0].name.first+"'s virtual business card"),i(k,"class","mx-auto w-full max-w-screen-sm p-5 sm:p-0")},m(e,r){g(document.head,a),g(document.head,t),g(document.head,s),g(document.head,d),D&&D.m(document.head,null),g(document.head,p),c(e,$,r),c(e,k,r),g(k,E),v(A,E,null),g(k,I),g(k,N),T&&T.m(N,null),R=!0},p(e,[a]){e[0]?D?D.p(e,a):(D=W(e),D.c(),D.m(p.parentNode,p)):D&&(D.d(1),D=null),e[0]?T?(T.p(e,a),1&a&&y(T,1)):(T=B(e),T.c(),y(T,1),T.m(N,null)):T&&(x(),b(T,1,1,(()=>{T=null})),w()),(!R||1&a&&z!==(z=e[0].name.first+"'s virtual business card"))&&i(N,"aria-label",z)},i(e){R||(y(A.$$.fragment,e),y(T),R=!0)},o(e){b(A.$$.fragment,e),b(T),R=!1},d(e){f(a),f(t),f(s),f(d),D&&D.d(e),f(p),e&&f($),e&&f(k),P(A),T&&T.d()}}}function ae(e,a,t){var s,r=this&&this.__awaiter||function(e,a,t,s){return new(t||(t=Promise))((function(r,n){function l(e){try{i(s.next(e))}catch(a){n(a)}}function o(e){try{i(s.throw(e))}catch(a){n(a)}}function i(e){var a;e.done?r(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(l,o)}i((s=s.apply(e,a||[])).next())}))};let{founder:n=null}=a,l=!1,o=null;const i=n?`${n.name.first} ${n.name.last} | ${n.title} @ PRGM.dev`:"Founder profile @ PRGM.dev",c=C(n,1024),f=C(n,1024,!0),d=null!==(s=n.image.alt)&&void 0!==s?s:n.name.first;function m(){return r(this,void 0,void 0,(function*(){const e=n;if(e&&!l){t(1,l=!0);try{t(2,o=yield O(e))}finally{t(1,l=!1)}}}))}return N((()=>{m()})),e.$$set=e=>{"founder"in e&&t(0,n=e.founder)},[n,l,o,i,c,f,d,{image:200,header:500,links:750},m]}class te extends a{constructor(e){super(),t(this,e,ae,ee,s,{founder:0})}}function se(e){let a,t;return a=new te({props:{founder:e[0]}}),{c(){m(a.$$.fragment)},l(e){u(a.$$.fragment,e)},m(e,s){v(a,e,s),t=!0},p(e,t){const s={};1&t&&(s.founder=e[0]),a.$set(s)},i(e){t||(y(a.$$.fragment,e),t=!0)},o(e){b(a.$$.fragment,e),t=!1},d(e){P(a,e)}}}function re(e){let a,t,s=!!e[0]&&se(e);return{c(){s&&s.c(),a=S()},l(e){s&&s.l(e),a=S()},m(e,r){s&&s.m(e,r),c(e,a,r),t=!0},p(e,[t]){e[0]?s?(s.p(e,t),1&t&&y(s,1)):(s=se(e),s.c(),y(s,1),s.m(a.parentNode,a)):s&&(x(),b(s,1,1,(()=>{s=null})),w())},i(e){t||(y(s),t=!0)},o(e){b(s),t=!1},d(e){s&&s.d(e),e&&f(a)}}}function ne(e,a,t){let s,r;var n;return L(e,K,(e=>t(2,r=e))),e.$$.update=()=>{6&e.$$.dirty&&t(0,s=null!==t(1,n=H.get(r.params.founderID))&&void 0!==n?n:null)},[s,n,r]}export default class extends a{constructor(e){super(),t(this,e,ne,re,s,{})}}
