var vt=Object.defineProperty;var wt=(e,t,n)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Le=(e,t,n)=>wt(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function I(){}const at=e=>e;function Ge(e,t){for(const n in t)e[n]=t[n];return e}function dt(e){return e()}function Fe(){return Object.create(null)}function V(e){e.forEach(dt)}function Me(e){return typeof e=="function"}function qe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let pe;function ae(e,t){return e===t?!0:(pe||(pe=document.createElement("a")),pe.href=t,e===pe.href)}function kt(e){return Object.keys(e).length===0}function $t(e,...t){if(e==null){for(const i of t)i(void 0);return I}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ke(e,t,n){e.$$.on_destroy.push($t(t,n))}function _e(e,t,n){return e.set(n),t}const mt=typeof window<"u";let St=mt?()=>window.performance.now():()=>Date.now(),He=mt?e=>requestAnimationFrame(e):I;const le=new Set;function pt(e){le.forEach(t=>{t.c(e)||(le.delete(t),t.f())}),le.size!==0&&He(pt)}function zt(e){let t;return le.size===0&&He(pt),{promise:new Promise(n=>{le.add(t={c:e,f:n})}),abort(){le.delete(t)}}}const Et=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function g(e,t){e.appendChild(t)}function _t(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Lt(e){const t=b("style");return t.textContent="/* empty */",Ct(_t(e),t),t.sheet}function Ct(e,t){return g(e.head||e,t),t.sheet}function N(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function Ce(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function re(e){return document.createTextNode(e)}function q(){return re(" ")}function Ne(){return re("")}function K(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Nt(e){return Array.from(e.childNodes)}function Pe(e,t){t=""+t,e.data!==t&&(e.data=t)}function De(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function ve(e,t,n){e.classList.toggle(t,!!n)}function Dt(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}function Re(e,t){return new e(t)}const we=new Map;let ke=0;function Ot(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Tt(e,t){const n={stylesheet:Lt(t),rules:{}};return we.set(e,n),n}function Ue(e,t,n,i,o,l,a,f=0){const c=16.666/i;let r=`{
`;for(let k=0;k<=1;k+=c){const O=t+(n-t)*l(k);r+=k*100+`%{${a(O,1-O)}}
`}const p=r+`100% {${a(n,1-n)}}
}`,m=`__svelte_${Ot(p)}_${f}`,y=_t(e),{stylesheet:v,rules:h}=we.get(y)||Tt(y,e);h[m]||(h[m]=!0,v.insertRule(`@keyframes ${m} ${p}`,v.cssRules.length));const w=e.style.animation||"";return e.style.animation=`${w?`${w}, `:""}${m} ${i}ms linear ${o}ms 1 both`,ke+=1,m}function Pt(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?l=>l.indexOf(t)<0:l=>l.indexOf("__svelte")===-1),o=n.length-i.length;o&&(e.style.animation=i.join(", "),ke-=o,ke||jt())}function jt(){He(()=>{ke||(we.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&S(t)}),we.clear())})}let de;function ue(e){de=e}function At(){if(!de)throw new Error("Function called outside component initialization");return de}function It(e){At().$$.on_mount.push(e)}const ie=[],je=[];let se=[];const We=[],Mt=Promise.resolve();let Ae=!1;function qt(){Ae||(Ae=!0,Mt.then(ht))}function x(e){se.push(e)}const Oe=new Set;let ee=0;function ht(){if(ee!==0)return;const e=de;do{try{for(;ee<ie.length;){const t=ie[ee];ee++,ue(t),Ht(t.$$)}}catch(t){throw ie.length=0,ee=0,t}for(ue(null),ie.length=0,ee=0;je.length;)je.pop()();for(let t=0;t<se.length;t+=1){const n=se[t];Oe.has(n)||(Oe.add(n),n())}se.length=0}while(ie.length);for(;We.length;)We.pop()();Ae=!1,Oe.clear(),ue(e)}function Ht(e){if(e.fragment!==null){e.update(),V(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}function Bt(e){const t=[],n=[];se.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),se=t}let fe;function Gt(){return fe||(fe=Promise.resolve(),fe.then(()=>{fe=null})),fe}function Te(e,t,n){e.dispatchEvent(Dt(`${t?"intro":"outro"}${n}`))}const ge=new Set;let Z;function be(){Z={r:0,c:[],p:Z}}function ye(){Z.r||V(Z.c),Z=Z.p}function F(e,t){e&&e.i&&(ge.delete(e),e.i(t))}function W(e,t,n,i){if(e&&e.o){if(ge.has(e))return;ge.add(e),Z.c.push(()=>{ge.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const Ft={duration:0};function $e(e,t,n,i){let l=t(e,n,{direction:"both"}),a=i?0:1,f=null,c=null,r=null,p;function m(){r&&Pt(e,r)}function y(h,w){const k=h.b-a;return w*=Math.abs(k),{a,b:h.b,d:k,duration:w,start:h.start,end:h.start+w,group:h.group}}function v(h){const{delay:w=0,duration:k=300,easing:O=at,tick:z=I,css:R}=l||Ft,M={start:St()+w,b:h};h||(M.group=Z,Z.r+=1),"inert"in e&&(h?p!==void 0&&(e.inert=p):(p=e.inert,e.inert=!0)),f||c?c=M:(R&&(m(),r=Ue(e,a,h,k,w,O,R)),h&&z(0,1),f=y(M,k),x(()=>Te(e,h,"start")),zt(T=>{if(c&&T>c.start&&(f=y(c,k),c=null,Te(e,f.b,"start"),R&&(m(),r=Ue(e,a,f.b,f.duration,0,O,l.css))),f){if(T>=f.end)z(a=f.b,1-a),Te(e,f.b,"end"),c||(f.b?m():--f.group.r||V(f.group.c)),f=null;else if(T>=f.start){const $=T-f.start;a=f.a+f.d*O($/f.duration),z(a,1-a)}}return!!(f||c)}))}return{run(h){Me(l)?Gt().then(()=>{l=l({direction:h?"in":"out"}),v(h)}):v(h)},end(){m(),f=c=null}}}function te(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ze(e,t){const n={},i={},o={$$scope:1};let l=e.length;for(;l--;){const a=e[l],f=t[l];if(f){for(const c in a)c in f||(i[c]=1);for(const c in f)o[c]||(n[c]=f[c],o[c]=1);e[l]=f}else for(const c in a)o[c]=1}for(const a in i)a in n||(n[a]=void 0);return n}function Ve(e){return typeof e=="object"&&e!==null?e:{}}function Ie(e){e&&e.c()}function Se(e,t,n){const{fragment:i,after_update:o}=e.$$;i&&i.m(t,n),x(()=>{const l=e.$$.on_mount.map(dt).filter(Me);e.$$.on_destroy?e.$$.on_destroy.push(...l):V(l),e.$$.on_mount=[]}),o.forEach(x)}function ze(e,t){const n=e.$$;n.fragment!==null&&(Bt(n.after_update),V(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Kt(e,t){e.$$.dirty[0]===-1&&(ie.push(e),qt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function gt(e,t,n,i,o,l,a=null,f=[-1]){const c=de;ue(e);const r=e.$$={fragment:null,ctx:[],props:l,update:I,not_equal:o,bound:Fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Fe(),dirty:f,skip_bound:!1,root:t.target||c.$$.root};a&&a(r.root);let p=!1;if(r.ctx=n?n(e,t.props||{},(m,y,...v)=>{const h=v.length?v[0]:y;return r.ctx&&o(r.ctx[m],r.ctx[m]=h)&&(!r.skip_bound&&r.bound[m]&&r.bound[m](h),p&&Kt(e,m)),y}):[],r.update(),p=!0,V(r.before_update),r.fragment=i?i(r.ctx):!1,t.target){if(t.hydrate){const m=Nt(t.target);r.fragment&&r.fragment.l(m),m.forEach(S)}else r.fragment&&r.fragment.c();t.intro&&F(e.$$.fragment),Se(e,t.target,t.anchor),ht()}ue(c)}class bt{constructor(){Le(this,"$$");Le(this,"$$set")}$destroy(){ze(this,1),this.$destroy=I}$on(t,n){if(!Me(n))return I;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!kt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Rt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Rt);const ne=[];function Be(e,t=I){let n;const i=new Set;function o(f){if(qe(e,f)&&(e=f,n)){const c=!ne.length;for(const r of i)r[1](),ne.push(r,e);if(c){for(let r=0;r<ne.length;r+=2)ne[r][0](ne[r+1]);ne.length=0}}}function l(f){o(f(e))}function a(f,c=I){const r=[f,c];return i.add(r),i.size===1&&(n=t(o,l)||I),f(e),()=>{i.delete(r),i.size===0&&n&&(n(),n=null)}}return{set:o,update:l,subscribe:a}}let Ye=e=>e.charAt(0).toUpperCase()+e.slice(1),Ut=(e,t)=>{let n=localStorage.getItem(e);Be(n?JSON.parse(n):t)},Je=Be([]),he=Be({component:null,props:{}});Ut("fa-changelogSeen",!1);function Wt(e){const t=e-1;return t*t*t+1}function Xe(e,{delay:t=0,duration:n=400,easing:i=at}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:i,css:l=>`opacity: ${l*o}`}}function Qe(e,{delay:t=0,duration:n=400,easing:i=Wt,start:o=0,opacity:l=0}={}){const a=getComputedStyle(e),f=+a.opacity,c=a.transform==="none"?"":a.transform,r=1-o,p=f*(1-l);return{delay:t,duration:n,easing:i,css:(m,y)=>`
			transform: ${c} scale(${1-r*y});
			opacity: ${f-p*y}
		`}}let Ee="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/",xe="https://fantastic-frontier-roblox.fandom.com/wiki/";function Zt(e){return{c:I,m:I,p:I,d:I}}function Vt(e){let t,n,i,o;return{c(){t=b("div"),n=b("span"),n.textContent="Stats",i=q(),o=b("div"),_(o,"class","table")},m(l,a){N(l,t,a),g(t,n),g(t,i),g(t,o)},p:I,d(l){l&&S(t)}}}function Yt(e){let t,n,i,o,l,a,f,c,r,p=e[0].name+"",m,y,v,h=`${e[1]?"Slot":"Special"}: ${Ye(e[0].slot||e[0].special)}`,w,k,O,z;function R($,D){return $[1]?Vt:Zt}let T=R(e)(e);return{c(){t=b("div"),n=b("div"),i=b("a"),o=b("img"),f=q(),c=b("div"),r=b("span"),m=re(p),y=q(),v=b("span"),w=re(h),k=q(),T.c(),O=q(),z=b("span"),z.innerHTML="",ae(o.src,l=Ee+e[0].image)||_(o,"src",l),_(o,"alt",""),_(o,"class","svelte-eoyizx"),_(i,"class","flex bg-change"),_(i,"href",a=xe+e[0].link),_(i,"target","_blank"),_(v,"class","smaller-fs"),_(c,"class","flex fd-col fjc-center rg-1"),_(n,"class","flex cg-1 svelte-eoyizx"),_(n,"id","preview"),De(z,"width","100%"),De(z,"line-break","anywhere"),De(z,"margin-top","25rem"),_(t,"class","focusedItem flex fd-col fai-center svelte-eoyizx")},m($,D){N($,t,D),g(t,n),g(n,i),g(i,o),g(n,f),g(n,c),g(c,r),g(r,m),g(c,y),g(c,v),g(v,w),g(t,k),T.m(t,null),g(t,O),g(t,z)},p($,[D]){D&1&&!ae(o.src,l=Ee+$[0].image)&&_(o,"src",l),D&1&&a!==(a=xe+$[0].link)&&_(i,"href",a),D&1&&p!==(p=$[0].name+"")&&Pe(m,p),D&1&&h!==(h=`${$[1]?"Slot":"Special"}: ${Ye($[0].slot||$[0].special)}`)&&Pe(w,h),T.p($,D)},i:I,o:I,d($){$&&S(t),T.d()}}}function Jt(e,t,n){let{item:i}=t,o=i.slot!==void 0;return e.$$set=l=>{"item"in l&&n(0,i=l.item)},[i,o]}class Xt extends bt{constructor(t){super(),gt(this,t,Jt,Yt,qe,{item:0})}}const{document:ce,window:oe}=Et;function et(e,t,n){const i=e.slice();return i[37]=t[n],i}function tt(e,t,n){const i=e.slice();return i[40]=t[n],i}function nt(e,t,n){const i=e.slice();return i[40]=t[n],i}function it(e){let t;return{c(){t=b("link"),_(t,"rel","preload"),_(t,"as","image"),_(t,"href",e[40])},m(n,i){N(n,t,i)},p:I,d(n){n&&S(t)}}}function ot(e){let t;return{c(){t=b("style"),t.textContent=`*:not(.promptCont, .promptCont *) {
                transition: filter 0.3s;
            }
            body > :not(.backgrounds, .promptCont, .info),
            .backgrounds > img {
                filter: blur(0.75rem);
                pointer-events: none;
            }
            .info:not(#zoomLevel, #version) {
                filter: blur(0.375vh);
                pointer-events: none;
            }`},m(n,i){N(n,t,i)},d(n){n&&S(t)}}}function lt(e){let t,n;return{c(){t=b("img"),_(t,"class","background svelte-7zey3p"),ae(t.src,n=e[40])||_(t,"src",n),_(t,"alt",""),ve(t,"active",e[13].indexOf(e[40])==e[5])},m(i,o){N(i,t,o)},p(i,o){o[0]&8224&&ve(t,"active",i[13].indexOf(i[40])==i[5])},d(i){i&&S(t)}}}function st(e){let t,n,i=Math.floor(e[11][e[2]]*100)+"",o,l,a,f;return{c(){t=b("span"),n=re("Zoom: "),o=re(i),l=b("b"),l.textContent="%",_(t,"class","info svelte-7zey3p"),_(t,"id","zoomLevel")},m(c,r){N(c,t,r),g(t,n),g(t,o),g(t,l),f=!0},p(c,r){(!f||r[0]&4)&&i!==(i=Math.floor(c[11][c[2]]*100)+"")&&Pe(o,i)},i(c){f||(c&&x(()=>{f&&(a||(a=$e(t,Xe,{duration:150},!0)),a.run(1))}),f=!0)},o(c){c&&(a||(a=$e(t,Xe,{duration:150},!1)),a.run(0)),f=!1},d(c){c&&S(t),c&&a&&a.end()}}}function rt(e){let t,n;return t=new Xt({props:{item:e[7]}}),{c(){Ie(t.$$.fragment)},m(i,o){Se(t,i,o),n=!0},p(i,o){const l={};o[0]&128&&(l.item=i[7]),t.$set(l)},i(i){n||(F(t.$$.fragment,i),n=!0)},o(i){W(t.$$.fragment,i),n=!1},d(i){ze(t,i)}}}function ft(e){let t,n,i,o,l,a,f;function c(){return e[24](e[37])}return{c(){t=b("button"),n=b("img"),l=q(),ae(n.src,i=Ee+e[37].image)||_(n,"src",i),_(n,"alt",o=e[37].name),_(n,"class","svelte-7zey3p"),_(t,"class","item br-1 svelte-7zey3p")},m(r,p){N(r,t,p),g(t,n),g(t,l),a||(f=[K(t,"mouseenter",e[22]),K(t,"mouseleave",e[23]),K(t,"focusin",c),K(t,"focusout",e[25])],a=!0)},p(r,p){e=r,p[0]&512&&!ae(n.src,i=Ee+e[37].image)&&_(n,"src",i),p[0]&512&&o!==(o=e[37].name)&&_(n,"alt",o)},d(r){r&&S(t),a=!1,V(f)}}}function ct(e){let t;return{c(){t=b("div"),_(t,"class","settings svelte-7zey3p")},m(n,i){N(n,t,i)},d(n){n&&S(t)}}}function ut(e){let t,n,i,o,l,a,f;const c=[{prompted:!0},e[8].props];var r=e[8].component;function p(m,y){let v={};for(let h=0;h<c.length;h+=1)v=Ge(v,c[h]);return y!==void 0&&y[0]&256&&(v=Ge(v,Ze(c,[c[0],Ve(m[8].props)]))),{props:v}}return r&&(i=Re(r,p(e))),{c(){t=b("div"),n=b("div"),i&&Ie(i.$$.fragment),_(n,"class","flex fd-col border-tp br-1 bs"),_(t,"class","promptCont")},m(m,y){N(m,t,y),g(t,n),i&&Se(i,n,null),e[27](t),l=!0,a||(f=[K(n,"introstart",e[26]),K(t,"click",e[28])],a=!0)},p(m,y){if(y[0]&256&&r!==(r=m[8].component)){if(i){be();const v=i;W(v.$$.fragment,1,0,()=>{ze(v,1)}),ye()}r?(i=Re(r,p(m,y)),Ie(i.$$.fragment),F(i.$$.fragment,1),Se(i,n,null)):i=null}else if(r){const v=y[0]&256?Ze(c,[c[0],Ve(m[8].props)]):{};i.$set(v)}},i(m){l||(i&&F(i.$$.fragment,m),m&&x(()=>{l&&(o||(o=$e(n,Qe,{duration:200},!0)),o.run(1))}),l=!0)},o(m){i&&W(i.$$.fragment,m),m&&(o||(o=$e(n,Qe,{duration:200},!1)),o.run(0)),l=!1},d(m){m&&S(t),i&&ze(i),m&&o&&o.end(),e[27](null),a=!1,V(f)}}}function Qt(e){let t,n,i,o,l,a,f,c,r,p,m,y,v,h,w,k,O,z,R,M,T,$,D,U,Y,me;x(e[19]);let J=te(e[13]),P=[];for(let u=0;u<J.length;u+=1)P[u]=it(nt(e,J,u));let H=e[8].component&&ot(),X=te(e[13]),j=[];for(let u=0;u<X.length;u+=1)j[u]=lt(tt(e,X,u));let E=e[4]&&st(e),L=e[7]&&rt(e),Q=te(e[9]),A=[];for(let u=0;u<Q.length;u+=1)A[u]=ft(et(e,Q,u));let B=e[6]&&ct(),C=e[8].component&&ut(e);return{c(){t=q();for(let u=0;u<P.length;u+=1)P[u].c();n=Ne(),H&&H.c(),i=Ne(),o=q(),l=b("div");for(let u=0;u<j.length;u+=1)j[u].c();a=q(),E&&E.c(),f=q(),c=b("div"),L&&L.c(),r=q(),p=b("main"),m=b("div"),y=b("div"),y.innerHTML='<img src="misc/logo.svg" alt="Fantastic Armory" class="svelte-7zey3p"/>',v=q(),h=b("div"),w=b("input"),k=q(),O=b("div"),z=b("button"),z.innerHTML='<iconify-icon icon="mi:filter"></iconify-icon>',R=q(),M=b("div");for(let u=0;u<A.length;u+=1)A[u].c();T=q(),B&&B.c(),$=q(),C&&C.c(),D=Ne(),_(l,"class","backgrounds"),_(c,"class","track ff-bg border-tp bs svelte-7zey3p"),_(y,"class","logo flex fjc-center cg-1 svelte-7zey3p"),_(w,"class","ff-bg border-tp svelte-7zey3p"),_(w,"type","text"),_(w,"placeholder","Search..."),w.autofocus=!0,_(z,"class","flex fai-center fjc-center light-hover svelte-7zey3p"),_(O,"class","toggleSettings ff-bg br-1 svelte-7zey3p"),_(h,"class","searcher flex svelte-7zey3p"),_(m,"class","header ff-bg flex border-tp bs svelte-7zey3p"),_(M,"class","itemPool flex fw cg-1 rg-1 svelte-7zey3p"),ve(M,"full-width",!e[6]),_(p,"class","flex fw svelte-7zey3p")},m(u,s){N(u,t,s);for(let d=0;d<P.length;d+=1)P[d]&&P[d].m(ce.head,null);g(ce.head,n),H&&H.m(ce.head,null),g(ce.head,i),N(u,o,s),N(u,l,s);for(let d=0;d<j.length;d+=1)j[d]&&j[d].m(l,null);N(u,a,s),E&&E.m(u,s),N(u,f,s),N(u,c,s),L&&L.m(c,null),N(u,r,s),N(u,p,s),g(p,m),g(m,y),g(m,v),g(m,h),g(h,w),g(h,k),g(h,O),g(O,z),g(p,R),g(p,M);for(let d=0;d<A.length;d+=1)A[d]&&A[d].m(M,null);g(p,T),B&&B.m(p,null),N(u,$,s),C&&C.m(u,s),N(u,D,s),U=!0,w.focus(),Y||(me=[K(oe,"storage",e[16]),K(oe,"wheel",e[17],{passive:!1}),K(oe,"keydown",e[18]),K(oe,"resize",e[19]),K(ce,"visibilitychange",e[20]),K(z,"click",e[21])],Y=!0)},p(u,s){if(s[0]&8192){J=te(u[13]);let d;for(d=0;d<J.length;d+=1){const G=nt(u,J,d);P[d]?P[d].p(G,s):(P[d]=it(G),P[d].c(),P[d].m(n.parentNode,n))}for(;d<P.length;d+=1)P[d].d(1);P.length=J.length}if(u[8].component?H||(H=ot(),H.c(),H.m(i.parentNode,i)):H&&(H.d(1),H=null),s[0]&8224){X=te(u[13]);let d;for(d=0;d<X.length;d+=1){const G=tt(u,X,d);j[d]?j[d].p(G,s):(j[d]=lt(G),j[d].c(),j[d].m(l,null))}for(;d<j.length;d+=1)j[d].d(1);j.length=X.length}if(u[4]?E?(E.p(u,s),s[0]&16&&F(E,1)):(E=st(u),E.c(),F(E,1),E.m(f.parentNode,f)):E&&(be(),W(E,1,1,()=>{E=null}),ye()),u[7]?L?(L.p(u,s),s[0]&128&&F(L,1)):(L=rt(u),L.c(),F(L,1),L.m(c,null)):L&&(be(),W(L,1,1,()=>{L=null}),ye()),s[0]&640){Q=te(u[9]);let d;for(d=0;d<Q.length;d+=1){const G=et(u,Q,d);A[d]?A[d].p(G,s):(A[d]=ft(G),A[d].c(),A[d].m(M,null))}for(;d<A.length;d+=1)A[d].d(1);A.length=Q.length}(!U||s[0]&64)&&ve(M,"full-width",!u[6]),u[6]?B||(B=ct(),B.c(),B.m(p,null)):B&&(B.d(1),B=null),u[8].component?C?(C.p(u,s),s[0]&256&&F(C,1)):(C=ut(u),C.c(),F(C,1),C.m(D.parentNode,D)):C&&(be(),W(C,1,1,()=>{C=null}),ye())},i(u){U||(F(E),F(L),F(C),U=!0)},o(u){W(E),W(L),W(C),U=!1},d(u){u&&(S(t),S(o),S(l),S(a),S(f),S(c),S(r),S(p),S($),S(D)),Ce(P,u),S(n),H&&H.d(u),S(i),Ce(j,u),E&&E.d(u),L&&L.d(),Ce(A,u),B&&B.d(),C&&C.d(u),Y=!1,V(me)}}}let xt="https://raw.githubusercontent.com/XT8SS/fantastic-armory/gh-pages/itemData.json";function en(e,t,n){let i,o;Ke(e,he,s=>n(8,i=s)),Ke(e,Je,s=>n(9,o=s)),It(()=>{});let l,a,f,c=["fd-currentGameData","fd-playerStats","fd-settings","fd-userId","fd-endlessModesData","fd-roomData","builds"];fetch(xt).then(async s=>{if(s.status!=200){console.error(`Failed to fetch item data!
Status: ${s.status}`);return}let d=await s.json();_e(Je,o=d.sort((G,yt)=>G.name.toLowerCase().localeCompare(yt.name.toLowerCase())),o)}).catch(s=>console.error(`Failed to initiate item data fetch!
${s}`));let r=7,p=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],m=!1,y;function v(){y=setTimeout(()=>{n(4,m=!1)},750)}function h(){clearTimeout(y),n(4,m=!0),v()}let w=[],k=[],O,z,R=9;for(let s=0;s<R;s++)w.push(`backgrounds/BG${s}.jpg`);function M(s){z=Math.floor(Math.random()*s.length)}M(w);function T(){n(5,O=z),k.push(z)}T(),function s(){setTimeout(()=>{if(M(w),!k.length)T();else if(k.length>3&&(k=k.slice(1)),!k.includes(z))T();else{let d=[...Array(R).keys()].filter(G=>!k.includes(G));M(d),T()}document.visibilityState=="visible"&&s()},45e3)}();let $=!1,D={name:"Helm of the Skater",slot:"head",stats:["armor","magicDmg","meleeDmg","rangedDmg","endurance"],cost:{min:68e5,max:75e5},colors:["black","gray","red","white","yellow"],outline:"red",release:"fs",image:"e/e4/Helm_of_the_Skater_Large.png",link:"Forgotten_Life_Set#Skater_Helm"};function U(){let s=a>l;document.documentElement.style.fontSize=`${(s?.75:a/l/2)*p[r]}vh`}function Y(){_e(he,i.component=null,i),_e(he,i.props={},i),_e(he,i.complete=!1,i)}const me=s=>{c.includes(s.key)&&s.url==location.href&&localStorage.setItem(s.key,s.oldValue)},J=s=>{let d=s.wheelDeltaY;if(s.ctrlKey){if(s.preventDefault(),p[r]==.2&&d<0||p[r]==5&&d>0)return;d>0?n(2,r++,r):n(2,r--,r),h()}},P=s=>{let d=["Enter"," "],G=["BUTTON","INPUT","A"];s.ctrlKey&&(s.key=="-"||s.key=="+"||s.code=="Equal"||s.key=="0")&&(s.preventDefault(),(s.key=="+"||s.code=="Equal")&&p[r]!=5?n(2,r++,r):s.key=="-"&&p[r]!=.2?n(2,r--,r):s.key=="0"&&p[r]!=1&&n(2,r=7),h()),i.component&&f&&(!s.ctrlKey&&!s.shiftKey&&!s.altKey&&(s.key=="Escape"||d.includes(s.key)&&!G.includes(document.activeElement.tagName))?Y():setTimeout(()=>{s.key=="Tab"&&!f.contains(document.activeElement)&&Y()}))};function H(){n(0,l=oe.outerHeight),n(1,a=oe.outerWidth)}const X=()=>{document.visibilityState=="visible"&&setTimeout(()=>{n(0,l=window.outerHeight),n(1,a=window.outerWidth),U()})},j=()=>n(6,$=!$),E=()=>{document.activeElement.classList.contains("item")&&document.activeElement.blur()},L=()=>"",Q=s=>n(7,D=s),A=()=>n(7,D=null),B=()=>{let s=f.querySelector("a, button, input");s&&s.focus()};function C(s){je[s?"unshift":"push"](()=>{f=s,n(3,f)})}const u=s=>{f.children[0].contains(s.target)||Y()};return e.$$.update=()=>{e.$$.dirty[0]&7&&(l||a||r)&&U()},[l,a,r,f,m,O,$,D,i,o,c,p,h,w,U,Y,me,J,P,H,X,j,E,L,Q,A,B,C,u]}class tn extends bt{constructor(t){super(),gt(this,t,en,Qt,qe,{},null,[-1,-1])}}new tn({target:document.body});
