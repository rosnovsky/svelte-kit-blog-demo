function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o,r,s,i){const c=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(c){const r=u(n,e,o,i);t.p(r,c)}}function a(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function d(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function p(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function y(){return m("")}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function _(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?g(n):p(n)}function w(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return m(n)}function E(t){return w(t," ")}function k(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function v(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function A(t,n=document.body){return Array.from(n.querySelectorAll(t))}class N{constructor(t=null){this.a=t,this.e=this.n=null}m(t,n,e=null){this.e||(this.e=p(n.nodeName),this.t=n,this.h(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)l(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}let j;function S(t){j=t}function O(){if(!j)throw new Error("Function called outside component initialization");return j}function T(t){O().$$.on_mount.push(t)}function q(t){O().$$.after_update.push(t)}function C(t,n){O().$$.context.set(t,n)}const M=[],z=[],B=[],F=[],H=Promise.resolve();let L=!1;function P(t){B.push(t)}let D=!1;const G=new Set;function I(){if(!D){D=!0;do{for(let t=0;t<M.length;t+=1){const n=M[t];S(n),J(n.$$)}for(S(null),M.length=0;z.length;)z.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];G.has(n)||(G.add(n),n())}B.length=0}while(M.length);for(;F.length;)F.pop()();L=!1,D=!1,G.clear()}}function J(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(P)}}const K=new Set;let Q;function R(){Q={r:0,c:[],p:Q}}function U(){Q.r||r(Q.c),Q=Q.p}function V(t,n){t&&t.i&&(K.delete(t),t.i(n))}function W(t,n,e,o){if(t&&t.o){if(K.has(t))return;K.add(t),Q.c.push((()=>{K.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function X(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function Y(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,n){t&&t.l(n)}function nt(t,n,o,i){const{fragment:c,on_mount:u,on_destroy:f,after_update:a}=t.$$;c&&c.m(n,o),i||P((()=>{const n=u.map(e).filter(s);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(P)}function et(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){-1===t.$$.dirty[0]&&(M.push(t),L||(L=!0,H.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function rt(n,e,s,i,c,u,f=[-1]){const a=j;S(n);const l=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let d=!1;if(l.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&c(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&ot(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!i&&i(l.ctx),e.target){if(e.hydrate){const t=x(e.target);l.fragment&&l.fragment.l(t),t.forEach(h)}else l.fragment&&l.fragment.c();e.intro&&V(n.$$.fragment),nt(n,e.target,e.anchor,e.customElement),I()}S(a)}class st{$destroy(){et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it=[];function ct(n,e=t){let o;const r=[];function s(t){if(i(n,t)&&(n=t,o)){const t=!it.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),it.push(t,n)}if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(i,c=t){const u=[i,c];return r.push(u),1===r.length&&(o=e(s)||t),i(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{q as A,T as B,R as C,U as D,g as E,v as F,c as G,A as H,f as I,ct as J,d as K,N as L,st as S,x as a,w as b,_ as c,h as d,p as e,l as f,a as g,k as h,rt as i,$ as j,y as k,E as l,n as m,t as n,b as o,Z as p,tt as q,nt as r,i as s,m as t,X as u,Y as v,V as w,W as x,et as y,C as z};
