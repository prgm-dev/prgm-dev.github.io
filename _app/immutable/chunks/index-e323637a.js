function C(){}const ft=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function K(){return Object.create(null)}function j(t){t.forEach(Y)}function Z(t){return typeof t=="function"}function Ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function It(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Gt(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Kt(t,e,n,i,r,l){if(r){const s=tt(e,n,i,l);t.p(s,r)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ut(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const et=typeof window!="undefined";let mt=et?()=>window.performance.now():()=>Date.now(),W=et?t=>requestAnimationFrame(t):C;const v=new Set;function nt(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&W(nt)}function yt(t){let e;return v.size===0&&W(nt),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let z=!1;function pt(){z=!0}function gt(){z=!1}function wt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:wt(1,r,_=>e[n[_]].claim_order,u))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(s[c],f)}}function $t(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=rt("style");return vt(it(t),e),e.sheet}function vt(t,e){$t(t.head||t,e)}function Et(t,e){if(z){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){z&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function kt(t){t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function rt(t){return document.createElement(t)}function St(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Yt(){return G(" ")}function Zt(){return G("")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ee(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,i,r=!1){Nt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ct(t,e,n,i){return st(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ne(t,e,n){return ct(t,e,n,rt)}function ie(t,e,n){return ct(t,e,n,St)}function Ct(t,e){return st(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function re(t){return Ct(t," ")}function se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function oe(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function le(t,e=document.body){return Array.from(e.querySelectorAll(t))}const D=new Map;let L=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t,e){const n={stylesheet:bt(e),rules:{}};return D.set(t,n),n}function Rt(t,e,n,i,r,l,s,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const x=e+(n-e)*l(y);u+=y*100+`%{${s(x,1-x)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Mt(f)}_${o}`,_=it(t),{stylesheet:m,rules:d}=D.get(_)||qt(_,t);d[a]||(d[a]=!0,m.insertRule(`@keyframes ${a} ${f}`,m.cssRules.length));const w=t.style.animation||"";return t.style.animation=`${w?`${w}, `:""}${a} ${i}ms linear ${r}ms 1 both`,L+=1,a}function Q(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),L-=r,L||Ot())}function Ot(){W(()=>{L||(D.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),D.clear())})}let N;function A(t){N=t}function B(){if(!N)throw new Error("Function called outside component initialization");return N}function ue(t){B().$$.on_mount.push(t)}function ae(t){B().$$.after_update.push(t)}function fe(t,e){return B().$$.context.set(t,e),e}function _e(t){return B().$$.context.get(t)}const S=[],U=[],O=[],V=[],ot=Promise.resolve();let I=!1;function lt(){I||(I=!0,ot.then(ut))}function de(){return lt(),ot}function T(t){O.push(t)}const H=new Set;let R=0;function ut(){const t=N;do{for(;R<S.length;){const e=S[R];R++,A(e),Pt(e.$$)}for(A(null),S.length=0,R=0;U.length;)U.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];H.has(n)||(H.add(n),n())}O.length=0}while(S.length);for(;V.length;)V.pop()();I=!1,H.clear(),A(t)}function Pt(t){if(t.fragment!==null){t.update(),j(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let k;function Dt(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function X(t,e,n){t.dispatchEvent(jt(`${e?"intro":"outro"}${n}`))}const P=new Set;let b;function he(){b={r:0,c:[],p:b}}function me(){b.r||j(b.c),b=b.p}function at(t,e){t&&t.i&&(P.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),b.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Tt={duration:0};function ye(t,e,n){let i=e(t,n),r=!1,l,s,o=0;function c(){l&&Q(t,l)}function u(){const{delay:a=0,duration:_=300,easing:m=ft,tick:d=C,css:w}=i||Tt;w&&(l=Rt(t,0,1,_,a,m,w,o++)),d(0,1);const y=mt()+a,x=y+_;s&&s.abort(),r=!0,T(()=>X(t,!0,"start")),s=yt($=>{if(r){if($>=x)return d(1,0),X(t,!0,"end"),c(),r=!1;if($>=y){const E=m(($-y)/_);d(E,1-E)}}return r})}let f=!1;return{start(){f||(f=!0,Q(t),Z(i)?(i=i(),Dt().then(u)):u())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function pe(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function ge(t,e,n,i,r,l,s,o,c,u,f,a){let _=t.length,m=l.length,d=_;const w={};for(;d--;)w[t[d].key]=d;const y=[],x=new Map,$=new Map;for(d=m;d--;){const h=a(r,l,d),p=n(h);let g=s.get(p);g?i&&g.p(h,e):(g=u(p,h),g.c()),x.set(p,y[d]=g),p in w&&$.set(p,Math.abs(d-w[p]))}const E=new Set,J=new Set;function F(h){at(h,1),h.m(o,f),s.set(h.key,h),f=h.first,m--}for(;_&&m;){const h=y[m-1],p=t[_-1],g=h.key,M=p.key;h===p?(f=h.first,_--,m--):x.has(M)?!s.has(g)||E.has(g)?F(h):J.has(M)?_--:$.get(g)>$.get(M)?(J.add(g),F(h)):(E.add(M),_--):(c(p,s),_--)}for(;_--;){const h=t[_];x.has(h.key)||c(h,s)}for(;m;)F(y[m-1]);return y}function we(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function xe(t){return typeof t=="object"&&t!==null?t:{}}function $e(t){t&&t.c()}function be(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||T(()=>{const c=l.map(Y).filter(Z);s?s.push(...c):j(c),t.$$.on_mount=[]}),o.forEach(T)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(j(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(S.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,i,r,l,s,o=[-1]){const c=N;A(t);const u=t.$$={fragment:null,ctx:null,props:l,update:C,not_equal:r,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:K(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...m)=>{const d=m.length?m[0]:_;return u.ctx&&r(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),f&&Ft(t,a)),_}):[],u.update(),f=!0,j(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){pt();const a=At(e.target);u.fragment&&u.fragment.l(a),a.forEach(kt)}else u.fragment&&u.fragment.c();e.intro&&at(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),gt(),ut()}A(c)}class Ee{$destroy(){Bt(this,1),this.$destroy=C}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{we as A,xe as B,Bt as C,_t as D,de as E,Gt as F,le as G,Et as H,Kt as I,Qt as J,Jt as K,Wt as L,It as M,_e as N,T as O,oe as P,te as Q,Xt as R,Ee as S,St as T,ie as U,ft as V,ye as W,Ut as X,ge as Y,pe as Z,At as a,ee as b,ne as c,kt as d,rt as e,ce as f,Vt as g,Ct as h,ve as i,se as j,Yt as k,Zt as l,re as m,C as n,he as o,Lt as p,me as q,at as r,Ht as s,G as t,fe as u,ae as v,ue as w,$e as x,be as y,zt as z};
