const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/templates-DbVXrRYe.js","assets/EditorRuntime-D7cIEMnb.js","assets/rolldown-runtime-QTnfLwEv.js","assets/sandbox-BJcnohzy.js","assets/three.core-CEiXpGJk.js","assets/store-DnGq-N5d.js","assets/graphStore-CP-yy05H.js","assets/schema-BsIqhWF3.js","assets/scriptStore-C_lQYdPr.js","assets/index-CvYgS_Z_.js","assets/index-DZcyIOjI.css","assets/exampleGraph-DDvs6-Wa.js"])))=>i.map(i=>d[i]);
import{r as e,t}from"./rolldown-runtime-QTnfLwEv.js";import{i as n,n as r,r as i}from"./EditorRuntime-D7cIEMnb.js";import{c as a,i as o,o as s,x as c}from"./sandbox-BJcnohzy.js";import{r as l,t as u}from"./store-DnGq-N5d.js";import{a as d,c as f,d as p,f as m,g as h,h as g,i as _,l as v,m as y,n as b,p as x,r as S,s as C,u as w}from"./graphStore-CP-yy05H.js";import{S as T,_ as E,c as D,d as O,h as k,i as A,l as j,m as M,n as N,r as P,t as F,u as I,v as L,x as R}from"./schema-BsIqhWF3.js";import{A as z,B,D as V,H,I as U,L as ee,M as W,N as te,O as ne,R as re,U as ie,j as ae,k as oe,z as se}from"./index-CvYgS_Z_.js";import{t as ce}from"./DualLabel-DWsZJTXk.js";var G=e(l(),1),K=H();function q(e){if(typeof e==`string`||typeof e==`number`)return``+e;let t=``;if(Array.isArray(e))for(let n=0,r;n<e.length;n++)(r=q(e[n]))!==``&&(t+=(t&&` `)+r);else for(let n in e)e[n]&&(t+=(t&&` `)+n);return t}var le={value:()=>{}};function ue(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+``)||r in n||/[\s.]/.test(r))throw Error(`illegal type: `+r);n[r]=[]}return new de(n)}function de(e){this._=e}function fe(e,t){return e.trim().split(/^|\s+/).map(function(e){var n=``,r=e.indexOf(`.`);if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw Error(`unknown type: `+e);return{type:e,name:n}})}de.prototype=ue.prototype={constructor:de,on:function(e,t){var n=this._,r=fe(e+``,n),i,a=-1,o=r.length;if(arguments.length<2){for(;++a<o;)if((i=(e=r[a]).type)&&(i=pe(n[i],e.name)))return i;return}if(t!=null&&typeof t!=`function`)throw Error(`invalid callback: `+t);for(;++a<o;)if(i=(e=r[a]).type)n[i]=me(n[i],e.name,t);else if(t==null)for(i in n)n[i]=me(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new de(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=Array(i),r=0,i,a;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(a=this._[e],r=0,i=a.length;r<i;++r)a[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(var r=this._[e],i=0,a=r.length;i<a;++i)r[i].value.apply(t,n)}};function pe(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function me(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=le,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var he={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function ge(e){var t=e+=``,n=t.indexOf(`:`);return n>=0&&(t=e.slice(0,n))!==`xmlns`&&(e=e.slice(n+1)),he.hasOwnProperty(t)?{space:he[t],local:e}:e}function _e(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===`http://www.w3.org/1999/xhtml`&&t.documentElement.namespaceURI===`http://www.w3.org/1999/xhtml`?t.createElement(e):t.createElementNS(n,e)}}function J(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function ve(e){var t=ge(e);return(t.local?J:_e)(t)}function ye(){}function be(e){return e==null?ye:function(){return this.querySelector(e)}}function xe(e){typeof e!=`function`&&(e=be(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=Array(o),c,l,u=0;u<o;++u)(c=a[u])&&(l=e.call(c,c.__data__,u,a))&&(`__data__`in c&&(l.__data__=c.__data__),s[u]=l);return new un(r,this._parents)}function Se(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Ce(){return[]}function we(e){return e==null?Ce:function(){return this.querySelectorAll(e)}}function Te(e){return function(){return Se(e.apply(this,arguments))}}function Ee(e){e=typeof e==`function`?Te(e):we(e);for(var t=this._groups,n=t.length,r=[],i=[],a=0;a<n;++a)for(var o=t[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&(r.push(e.call(c,c.__data__,l,o)),i.push(c));return new un(r,i)}function De(e){return function(){return this.matches(e)}}function Oe(e){return function(t){return t.matches(e)}}var ke=Array.prototype.find;function Ae(e){return function(){return ke.call(this.children,e)}}function je(){return this.firstElementChild}function Me(e){return this.select(e==null?je:Ae(typeof e==`function`?e:Oe(e)))}var Ne=Array.prototype.filter;function Pe(){return Array.from(this.children)}function Fe(e){return function(){return Ne.call(this.children,e)}}function Ie(e){return this.selectAll(e==null?Pe:Fe(typeof e==`function`?e:Oe(e)))}function Le(e){typeof e!=`function`&&(e=De(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new un(r,this._parents)}function Re(e){return Array(e.length)}function ze(){return new un(this._enter||this._groups.map(Re),this._parents)}function Be(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Be.prototype={constructor:Be,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Ve(e){return function(){return e}}function He(e,t,n,r,i,a){for(var o=0,s,c=t.length,l=a.length;o<l;++o)(s=t[o])?(s.__data__=a[o],r[o]=s):n[o]=new Be(e,a[o]);for(;o<c;++o)(s=t[o])&&(i[o]=s)}function Ue(e,t,n,r,i,a,o){var s,c,l=new Map,u=t.length,d=a.length,f=Array(u),p;for(s=0;s<u;++s)(c=t[s])&&(f[s]=p=o.call(c,c.__data__,s,t)+``,l.has(p)?i[s]=c:l.set(p,c));for(s=0;s<d;++s)p=o.call(e,a[s],s,a)+``,(c=l.get(p))?(r[s]=c,c.__data__=a[s],l.delete(p)):n[s]=new Be(e,a[s]);for(s=0;s<u;++s)(c=t[s])&&l.get(f[s])===c&&(i[s]=c)}function We(e){return e.__data__}function Ge(e,t){if(!arguments.length)return Array.from(this,We);var n=t?Ue:He,r=this._parents,i=this._groups;typeof e!=`function`&&(e=Ve(e));for(var a=i.length,o=Array(a),s=Array(a),c=Array(a),l=0;l<a;++l){var u=r[l],d=i[l],f=d.length,p=Ke(e.call(u,u&&u.__data__,l,r)),m=p.length,h=s[l]=Array(m),g=o[l]=Array(m);n(u,d,h,g,c[l]=Array(f),p,t);for(var _=0,v=0,y,b;_<m;++_)if(y=h[_]){for(_>=v&&(v=_+1);!(b=g[v])&&++v<m;);y._next=b||null}}return o=new un(o,r),o._enter=s,o._exit=c,o}function Ke(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function qe(){return new un(this._exit||this._groups.map(Re),this._parents)}function Je(e,t,n){var r=this.enter(),i=this,a=this.exit();return typeof e==`function`?(r=e(r),r&&=r.selection()):r=r.append(e+``),t!=null&&(i=t(i),i&&=i.selection()),n==null?a.remove():n(a),r&&i?r.merge(i).order():i}function Ye(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,a=r.length,o=Math.min(i,a),s=Array(i),c=0;c<o;++c)for(var l=n[c],u=r[c],d=l.length,f=s[c]=Array(d),p,m=0;m<d;++m)(p=l[m]||u[m])&&(f[m]=p);for(;c<i;++c)s[c]=n[c];return new un(s,this._parents)}function Xe(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,a=r[i],o;--i>=0;)(o=r[i])&&(a&&o.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(o,a),a=o);return this}function Ze(e){e||=Qe;function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}for(var n=this._groups,r=n.length,i=Array(r),a=0;a<r;++a){for(var o=n[a],s=o.length,c=i[a]=Array(s),l,u=0;u<s;++u)(l=o[u])&&(c[u]=l);c.sort(t)}return new un(i,this._parents).order()}function Qe(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function $e(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function et(){return Array.from(this)}function tt(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null}function nt(){let e=0;for(let t of this)++e;return e}function rt(){return!this.node()}function it(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],a=0,o=i.length,s;a<o;++a)(s=i[a])&&e.call(s,s.__data__,a,i);return this}function at(e){return function(){this.removeAttribute(e)}}function ot(e){return function(){this.removeAttributeNS(e.space,e.local)}}function st(e,t){return function(){this.setAttribute(e,t)}}function ct(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function lt(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function ut(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function dt(e,t){var n=ge(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?ot:at:typeof t==`function`?n.local?ut:lt:n.local?ct:st)(n,t))}function ft(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function pt(e){return function(){this.style.removeProperty(e)}}function mt(e,t,n){return function(){this.style.setProperty(e,t,n)}}function ht(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function gt(e,t,n){return arguments.length>1?this.each((t==null?pt:typeof t==`function`?ht:mt)(e,t,n??``)):_t(this.node(),e)}function _t(e,t){return e.style.getPropertyValue(t)||ft(e).getComputedStyle(e,null).getPropertyValue(t)}function vt(e){return function(){delete this[e]}}function yt(e,t){return function(){this[e]=t}}function bt(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function xt(e,t){return arguments.length>1?this.each((t==null?vt:typeof t==`function`?bt:yt)(e,t)):this.node()[e]}function St(e){return e.trim().split(/^|\s+/)}function Ct(e){return e.classList||new wt(e)}function wt(e){this._node=e,this._names=St(e.getAttribute(`class`)||``)}wt.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute(`class`,this._names.join(` `)))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute(`class`,this._names.join(` `)))},contains:function(e){return this._names.indexOf(e)>=0}};function Tt(e,t){for(var n=Ct(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function Et(e,t){for(var n=Ct(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function Dt(e){return function(){Tt(this,e)}}function Ot(e){return function(){Et(this,e)}}function kt(e,t){return function(){(t.apply(this,arguments)?Tt:Et)(this,e)}}function At(e,t){var n=St(e+``);if(arguments.length<2){for(var r=Ct(this.node()),i=-1,a=n.length;++i<a;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t==`function`?kt:t?Dt:Ot)(n,t))}function jt(){this.textContent=``}function Mt(e){return function(){this.textContent=e}}function Nt(e){return function(){var t=e.apply(this,arguments);this.textContent=t??``}}function Pt(e){return arguments.length?this.each(e==null?jt:(typeof e==`function`?Nt:Mt)(e)):this.node().textContent}function Ft(){this.innerHTML=``}function It(e){return function(){this.innerHTML=e}}function Lt(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??``}}function Rt(e){return arguments.length?this.each(e==null?Ft:(typeof e==`function`?Lt:It)(e)):this.node().innerHTML}function zt(){this.nextSibling&&this.parentNode.appendChild(this)}function Bt(){return this.each(zt)}function Vt(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ht(){return this.each(Vt)}function Ut(e){var t=typeof e==`function`?e:ve(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Wt(){return null}function Gt(e,t){var n=typeof e==`function`?e:ve(e),r=t==null?Wt:typeof t==`function`?t:be(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Kt(){var e=this.parentNode;e&&e.removeChild(this)}function qt(){return this.each(Kt)}function Jt(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Yt(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Xt(e){return this.select(e?Yt:Jt)}function Zt(e){return arguments.length?this.property(`__data__`,e):this.node().__data__}function Qt(e){return function(t){e.call(this,t,this.__data__)}}function $t(e){return e.trim().split(/^|\s+/).map(function(e){var t=``,n=e.indexOf(`.`);return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}function en(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,a;n<i;++n)a=t[n],(!e.type||a.type===e.type)&&a.name===e.name?this.removeEventListener(a.type,a.listener,a.options):t[++r]=a;++r?t.length=r:delete this.__on}}}function tn(e,t,n){return function(){var r=this.__on,i,a=Qt(t);if(r){for(var o=0,s=r.length;o<s;++o)if((i=r[o]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=a,i.options=n),i.value=t;return}}this.addEventListener(e.type,a,n),i={type:e.type,name:e.name,value:t,listener:a,options:n},r?r.push(i):this.__on=[i]}}function nn(e,t,n){var r=$t(e+``),i,a=r.length,o;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,u;c<l;++c)for(i=0,u=s[c];i<a;++i)if((o=r[i]).type===u.type&&o.name===u.name)return u.value}return}for(s=t?tn:en,i=0;i<a;++i)this.each(s(r[i],t,n));return this}function rn(e,t,n){var r=ft(e),i=r.CustomEvent;typeof i==`function`?i=new i(t,n):(i=r.document.createEvent(`Event`),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function an(e,t){return function(){return rn(this,e,t)}}function on(e,t){return function(){return rn(this,e,t.apply(this,arguments))}}function sn(e,t){return this.each((typeof t==`function`?on:an)(e,t))}function*cn(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length,o;i<a;++i)(o=r[i])&&(yield o)}var ln=[null];function un(e,t){this._groups=e,this._parents=t}function dn(){return new un([[document.documentElement]],ln)}function fn(){return this}un.prototype=dn.prototype={constructor:un,select:xe,selectAll:Ee,selectChild:Me,selectChildren:Ie,filter:Le,data:Ge,enter:ze,exit:qe,join:Je,merge:Ye,selection:fn,order:Xe,sort:Ze,call:$e,nodes:et,node:tt,size:nt,empty:rt,each:it,attr:dt,style:gt,property:xt,classed:At,text:Pt,html:Rt,raise:Bt,lower:Ht,append:Ut,insert:Gt,remove:qt,clone:Xt,datum:Zt,on:nn,dispatch:sn,[Symbol.iterator]:cn};function pn(e){return typeof e==`string`?new un([[document.querySelector(e)]],[document.documentElement]):new un([[e]],ln)}function mn(e){let t;for(;t=e.sourceEvent;)e=t;return e}function hn(e,t){if(e=mn(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}var gn={passive:!1},_n={capture:!0,passive:!1};function vn(e){e.stopImmediatePropagation()}function yn(e){e.preventDefault(),e.stopImmediatePropagation()}function bn(e){var t=e.document.documentElement,n=pn(e).on(`dragstart.drag`,yn,_n);`onselectstart`in t?n.on(`selectstart.drag`,yn,_n):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect=`none`)}function xn(e,t){var n=e.document.documentElement,r=pn(e).on(`dragstart.drag`,null);t&&(r.on(`click.drag`,yn,_n),setTimeout(function(){r.on(`click.drag`,null)},0)),`onselectstart`in n?r.on(`selectstart.drag`,null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Sn=e=>()=>e;function Cn(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:a,x:o,y:s,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}Cn.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function wn(e){return!e.ctrlKey&&!e.button}function Tn(){return this.parentNode}function En(e,t){return t??{x:e.x,y:e.y}}function Dn(){return navigator.maxTouchPoints||`ontouchstart`in this}function On(){var e=wn,t=Tn,n=En,r=Dn,i={},a=ue(`start`,`drag`,`end`),o=0,s,c,l,u,d=0;function f(e){e.on(`mousedown.drag`,p).filter(r).on(`touchstart.drag`,g).on(`touchmove.drag`,_,gn).on(`touchend.drag touchcancel.drag`,v).style(`touch-action`,`none`).style(`-webkit-tap-highlight-color`,`rgba(0,0,0,0)`)}function p(n,r){if(!(u||!e.call(this,n,r))){var i=y(this,t.call(this,n,r),n,r,`mouse`);i&&(pn(n.view).on(`mousemove.drag`,m,_n).on(`mouseup.drag`,h,_n),bn(n.view),vn(n),l=!1,s=n.clientX,c=n.clientY,i(`start`,n))}}function m(e){if(yn(e),!l){var t=e.clientX-s,n=e.clientY-c;l=t*t+n*n>d}i.mouse(`drag`,e)}function h(e){pn(e.view).on(`mousemove.drag mouseup.drag`,null),xn(e.view,l),yn(e),i.mouse(`end`,e)}function g(n,r){if(e.call(this,n,r)){var i=n.changedTouches,a=t.call(this,n,r),o=i.length,s,c;for(s=0;s<o;++s)(c=y(this,a,n,r,i[s].identifier,i[s]))&&(vn(n),c(`start`,n,i[s]))}}function _(e){var t=e.changedTouches,n=t.length,r,a;for(r=0;r<n;++r)(a=i[t[r].identifier])&&(yn(e),a(`drag`,e,t[r]))}function v(e){var t=e.changedTouches,n=t.length,r,a;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),r=0;r<n;++r)(a=i[t[r].identifier])&&(vn(e),a(`end`,e,t[r]))}function y(e,t,r,s,c,l){var u=a.copy(),d=hn(l||r,t),p,m,h;if((h=n.call(e,new Cn(`beforestart`,{sourceEvent:r,target:f,identifier:c,active:o,x:d[0],y:d[1],dx:0,dy:0,dispatch:u}),s))!=null)return p=h.x-d[0]||0,m=h.y-d[1]||0,function n(r,a,l){var g=d,_;switch(r){case`start`:i[c]=n,_=o++;break;case`end`:delete i[c],--o;case`drag`:d=hn(l||a,t),_=o;break}u.call(r,e,new Cn(r,{sourceEvent:a,subject:h,target:f,identifier:c,active:_,x:d[0]+p,y:d[1]+m,dx:d[0]-g[0],dy:d[1]-g[1],dispatch:u}),s)}}return f.filter=function(t){return arguments.length?(e=typeof t==`function`?t:Sn(!!t),f):e},f.container=function(e){return arguments.length?(t=typeof e==`function`?e:Sn(e),f):t},f.subject=function(e){return arguments.length?(n=typeof e==`function`?e:Sn(e),f):n},f.touchable=function(e){return arguments.length?(r=typeof e==`function`?e:Sn(!!e),f):r},f.on=function(){var e=a.on.apply(a,arguments);return e===a?f:e},f.clickDistance=function(e){return arguments.length?(d=(e=+e)*e,f):Math.sqrt(d)},f}function kn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function An(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function jn(){}var Mn=.7,Nn=1/Mn,Pn=`\\s*([+-]?\\d+)\\s*`,Fn=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,In=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,Ln=/^#([0-9a-f]{3,8})$/,Rn=RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`),zn=RegExp(`^rgb\\(${In},${In},${In}\\)$`),Bn=RegExp(`^rgba\\(${Pn},${Pn},${Pn},${Fn}\\)$`),Vn=RegExp(`^rgba\\(${In},${In},${In},${Fn}\\)$`),Hn=RegExp(`^hsl\\(${Fn},${In},${In}\\)$`),Un=RegExp(`^hsla\\(${Fn},${In},${In},${Fn}\\)$`),Wn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};kn(jn,Yn,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Gn,formatHex:Gn,formatHex8:Kn,formatHsl:qn,formatRgb:Jn,toString:Jn});function Gn(){return this.rgb().formatHex()}function Kn(){return this.rgb().formatHex8()}function qn(){return sr(this).formatHsl()}function Jn(){return this.rgb().formatRgb()}function Yn(e){var t,n;return e=(e+``).trim().toLowerCase(),(t=Ln.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Xn(t):n===3?new Y(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Zn(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Zn(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Rn.exec(e))?new Y(t[1],t[2],t[3],1):(t=zn.exec(e))?new Y(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Bn.exec(e))?Zn(t[1],t[2],t[3],t[4]):(t=Vn.exec(e))?Zn(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Hn.exec(e))?or(t[1],t[2]/100,t[3]/100,1):(t=Un.exec(e))?or(t[1],t[2]/100,t[3]/100,t[4]):Wn.hasOwnProperty(e)?Xn(Wn[e]):e===`transparent`?new Y(NaN,NaN,NaN,0):null}function Xn(e){return new Y(e>>16&255,e>>8&255,e&255,1)}function Zn(e,t,n,r){return r<=0&&(e=t=n=NaN),new Y(e,t,n,r)}function Qn(e){return e instanceof jn||(e=Yn(e)),e?(e=e.rgb(),new Y(e.r,e.g,e.b,e.opacity)):new Y}function $n(e,t,n,r){return arguments.length===1?Qn(e):new Y(e,t,n,r??1)}function Y(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}kn(Y,$n,An(jn,{brighter(e){return e=e==null?Nn:Nn**+e,new Y(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Mn:Mn**+e,new Y(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Y(ir(this.r),ir(this.g),ir(this.b),rr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:er,formatHex:er,formatHex8:tr,formatRgb:nr,toString:nr}));function er(){return`#${ar(this.r)}${ar(this.g)}${ar(this.b)}`}function tr(){return`#${ar(this.r)}${ar(this.g)}${ar(this.b)}${ar((isNaN(this.opacity)?1:this.opacity)*255)}`}function nr(){let e=rr(this.opacity);return`${e===1?`rgb(`:`rgba(`}${ir(this.r)}, ${ir(this.g)}, ${ir(this.b)}${e===1?`)`:`, ${e})`}`}function rr(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function ir(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function ar(e){return e=ir(e),(e<16?`0`:``)+e.toString(16)}function or(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new lr(e,t,n,r)}function sr(e){if(e instanceof lr)return new lr(e.h,e.s,e.l,e.opacity);if(e instanceof jn||(e=Yn(e)),!e)return new lr;if(e instanceof lr)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,s=a-i,c=(a+i)/2;return s?(o=t===a?(n-r)/s+(n<r)*6:n===a?(r-t)/s+2:(t-n)/s+4,s/=c<.5?a+i:2-a-i,o*=60):s=c>0&&c<1?0:o,new lr(o,s,c,e.opacity)}function cr(e,t,n,r){return arguments.length===1?sr(e):new lr(e,t,n,r??1)}function lr(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}kn(lr,cr,An(jn,{brighter(e){return e=e==null?Nn:Nn**+e,new lr(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Mn:Mn**+e,new lr(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Y(fr(e>=240?e-240:e+120,i,r),fr(e,i,r),fr(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new lr(ur(this.h),dr(this.s),dr(this.l),rr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=rr(this.opacity);return`${e===1?`hsl(`:`hsla(`}${ur(this.h)}, ${dr(this.s)*100}%, ${dr(this.l)*100}%${e===1?`)`:`, ${e})`}`}}));function ur(e){return e=(e||0)%360,e<0?e+360:e}function dr(e){return Math.max(0,Math.min(1,e||0))}function fr(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var pr=e=>()=>e;function mr(e,t){return function(n){return e+n*t}}function hr(e,t,n){return e**=+n,t=t**+n-e,n=1/n,function(r){return(e+r*t)**+n}}function gr(e){return(e=+e)==1?_r:function(t,n){return n-t?hr(t,n,e):pr(isNaN(t)?n:t)}}function _r(e,t){var n=t-e;return n?mr(e,n):pr(isNaN(e)?t:e)}var vr=(function e(t){var n=gr(t);function r(e,t){var r=n((e=$n(e)).r,(t=$n(t)).r),i=n(e.g,t.g),a=n(e.b,t.b),o=_r(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=a(t),e.opacity=o(t),e+``}}return r.gamma=e,r})(1);function yr(e,t){t||=[];var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function br(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function xr(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=Array(r),a=Array(n),o;for(o=0;o<r;++o)i[o]=Ar(e[o],t[o]);for(;o<n;++o)a[o]=t[o];return function(e){for(o=0;o<r;++o)a[o]=i[o](e);return a}}function Sr(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Cr(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function wr(e,t){var n={},r={},i;for(i in(typeof e!=`object`||!e)&&(e={}),(typeof t!=`object`||!t)&&(t={}),t)i in e?n[i]=Ar(e[i],t[i]):r[i]=t[i];return function(e){for(i in n)r[i]=n[i](e);return r}}var Tr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Er=new RegExp(Tr.source,`g`);function Dr(e){return function(){return e}}function Or(e){return function(t){return e(t)+``}}function kr(e,t){var n=Tr.lastIndex=Er.lastIndex=0,r,i,a,o=-1,s=[],c=[];for(e+=``,t+=``;(r=Tr.exec(e))&&(i=Er.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,c.push({i:o,x:Cr(r,i)})),n=Er.lastIndex;return n<t.length&&(a=t.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?c[0]?Or(c[0].x):Dr(t):(t=c.length,function(e){for(var n=0,r;n<t;++n)s[(r=c[n]).i]=r.x(e);return s.join(``)})}function Ar(e,t){var n=typeof t,r;return t==null||n===`boolean`?pr(t):(n===`number`?Cr:n===`string`?(r=Yn(t))?(t=r,vr):kr:t instanceof Yn?vr:t instanceof Date?Sr:br(t)?yr:Array.isArray(t)?xr:typeof t.valueOf!=`function`&&typeof t.toString!=`function`||isNaN(t)?wr:Cr)(e,t)}var jr=180/Math.PI,Mr={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Nr(e,t,n,r,i,a){var o,s,c;return(o=Math.sqrt(e*e+t*t))&&(e/=o,t/=o),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,c/=s),e*r<t*n&&(e=-e,t=-t,c=-c,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(t,e)*jr,skewX:Math.atan(c)*jr,scaleX:o,scaleY:s}}var Pr;function Fr(e){let t=new(typeof DOMMatrix==`function`?DOMMatrix:WebKitCSSMatrix)(e+``);return t.isIdentity?Mr:Nr(t.a,t.b,t.c,t.d,t.e,t.f)}function Ir(e){return e==null||(Pr||=document.createElementNS(`http://www.w3.org/2000/svg`,`g`),Pr.setAttribute(`transform`,e),!(e=Pr.transform.baseVal.consolidate()))?Mr:(e=e.matrix,Nr(e.a,e.b,e.c,e.d,e.e,e.f))}function Lr(e,t,n,r){function i(e){return e.length?e.pop()+` `:``}function a(e,r,i,a,o,s){if(e!==i||r!==a){var c=o.push(`translate(`,null,t,null,n);s.push({i:c-4,x:Cr(e,i)},{i:c-2,x:Cr(r,a)})}else(i||a)&&o.push(`translate(`+i+t+a+n)}function o(e,t,n,a){e===t?t&&n.push(i(n)+`rotate(`+t+r):(e-t>180?t+=360:t-e>180&&(e+=360),a.push({i:n.push(i(n)+`rotate(`,null,r)-2,x:Cr(e,t)}))}function s(e,t,n,a){e===t?t&&n.push(i(n)+`skewX(`+t+r):a.push({i:n.push(i(n)+`skewX(`,null,r)-2,x:Cr(e,t)})}function c(e,t,n,r,a,o){if(e!==n||t!==r){var s=a.push(i(a)+`scale(`,null,`,`,null,`)`);o.push({i:s-4,x:Cr(e,n)},{i:s-2,x:Cr(t,r)})}else(n!==1||r!==1)&&a.push(i(a)+`scale(`+n+`,`+r+`)`)}return function(t,n){var r=[],i=[];return t=e(t),n=e(n),a(t.translateX,t.translateY,n.translateX,n.translateY,r,i),o(t.rotate,n.rotate,r,i),s(t.skewX,n.skewX,r,i),c(t.scaleX,t.scaleY,n.scaleX,n.scaleY,r,i),t=n=null,function(e){for(var t=-1,n=i.length,a;++t<n;)r[(a=i[t]).i]=a.x(e);return r.join(``)}}}var Rr=Lr(Fr,`px, `,`px)`,`deg)`),zr=Lr(Ir,`, `,`)`,`)`),Br=1e-12;function Vr(e){return((e=Math.exp(e))+1/e)/2}function Hr(e){return((e=Math.exp(e))-1/e)/2}function Ur(e){return((e=Math.exp(2*e))-1)/(e+1)}var Wr=(function e(t,n,r){function i(e,i){var a=e[0],o=e[1],s=e[2],c=i[0],l=i[1],u=i[2],d=c-a,f=l-o,p=d*d+f*f,m,h;if(p<Br)h=Math.log(u/s)/t,m=function(e){return[a+e*d,o+e*f,s*Math.exp(t*e*h)]};else{var g=Math.sqrt(p),_=(u*u-s*s+r*p)/(2*s*n*g),v=(u*u-s*s-r*p)/(2*u*n*g),y=Math.log(Math.sqrt(_*_+1)-_);h=(Math.log(Math.sqrt(v*v+1)-v)-y)/t,m=function(e){var r=e*h,i=Vr(y),c=s/(n*g)*(i*Ur(t*r+y)-Hr(y));return[a+c*d,o+c*f,s*i/Vr(t*r+y)]}}return m.duration=h*1e3*t/Math.SQRT2,m}return i.rho=function(t){var n=Math.max(.001,+t),r=n*n;return e(n,r,r*r)},i})(Math.SQRT2,2,4),Gr=0,Kr=0,qr=0,Jr=1e3,Yr,Xr,Zr=0,Qr=0,$r=0,ei=typeof performance==`object`&&performance.now?performance:Date,ti=typeof window==`object`&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function ni(){return Qr||=(ti(ri),ei.now()+$r)}function ri(){Qr=0}function ii(){this._call=this._time=this._next=null}ii.prototype=ai.prototype={constructor:ii,restart:function(e,t,n){if(typeof e!=`function`)throw TypeError(`callback is not a function`);n=(n==null?ni():+n)+(t==null?0:+t),!this._next&&Xr!==this&&(Xr?Xr._next=this:Yr=this,Xr=this),this._call=e,this._time=n,ui()},stop:function(){this._call&&(this._call=null,this._time=1/0,ui())}};function ai(e,t,n){var r=new ii;return r.restart(e,t,n),r}function oi(){ni(),++Gr;for(var e=Yr,t;e;)(t=Qr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Gr}function si(){Qr=(Zr=ei.now())+$r,Gr=Kr=0;try{oi()}finally{Gr=0,li(),Qr=0}}function ci(){var e=ei.now(),t=e-Zr;t>Jr&&($r-=t,Zr=e)}function li(){for(var e,t=Yr,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Yr=n);Xr=e,ui(r)}function ui(e){Gr||(Kr&&=clearTimeout(Kr),e-Qr>24?(e<1/0&&(Kr=setTimeout(si,e-ei.now()-$r)),qr&&=clearInterval(qr)):(qr||=(Zr=ei.now(),setInterval(ci,Jr)),Gr=1,ti(si)))}function di(e,t,n){var r=new ii;return t=t==null?0:+t,r.restart(n=>{r.stop(),e(n+t)},t,n),r}var fi=ue(`start`,`end`,`cancel`,`interrupt`),pi=[];function mi(e,t,n,r,i,a){var o=e.__transition;if(!o)e.__transition={};else if(n in o)return;vi(e,n,{name:t,index:r,group:i,on:fi,tween:pi,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function hi(e,t){var n=_i(e,t);if(n.state>0)throw Error(`too late; already scheduled`);return n}function gi(e,t){var n=_i(e,t);if(n.state>3)throw Error(`too late; already running`);return n}function _i(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw Error(`transition not found`);return n}function vi(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=ai(a,0,n.time);function a(e){n.state=1,n.timer.restart(o,n.delay,n.time),n.delay<=e&&o(e-n.delay)}function o(a){var l,u,d,f;if(n.state!==1)return c();for(l in r)if(f=r[l],f.name===n.name){if(f.state===3)return di(o);f.state===4?(f.state=6,f.timer.stop(),f.on.call(`interrupt`,e,e.__data__,f.index,f.group),delete r[l]):+l<t&&(f.state=6,f.timer.stop(),f.on.call(`cancel`,e,e.__data__,f.index,f.group),delete r[l])}if(di(function(){n.state===3&&(n.state=4,n.timer.restart(s,n.delay,n.time),s(a))}),n.state=2,n.on.call(`start`,e,e.__data__,n.index,n.group),n.state===2){for(n.state=3,i=Array(d=n.tween.length),l=0,u=-1;l<d;++l)(f=n.tween[l].value.call(e,e.__data__,n.index,n.group))&&(i[++u]=f);i.length=u+1}}function s(t){for(var r=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(c),n.state=5,1),a=-1,o=i.length;++a<o;)i[a].call(e,r);n.state===5&&(n.on.call(`end`,e,e.__data__,n.index,n.group),c())}function c(){for(var i in n.state=6,n.timer.stop(),delete r[t],r)return;delete e.__transition}}function yi(e,t){var n=e.__transition,r,i,a=!0,o;if(n){for(o in t=t==null?null:t+``,n){if((r=n[o]).name!==t){a=!1;continue}i=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(i?`interrupt`:`cancel`,e,e.__data__,r.index,r.group),delete n[o]}a&&delete e.__transition}}function bi(e){return this.each(function(){yi(this,e)})}function xi(e,t){var n,r;return function(){var i=gi(this,e),a=i.tween;if(a!==n){r=n=a;for(var o=0,s=r.length;o<s;++o)if(r[o].name===t){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function Si(e,t,n){var r,i;if(typeof n!=`function`)throw Error();return function(){var a=gi(this,e),o=a.tween;if(o!==r){i=(r=o).slice();for(var s={name:t,value:n},c=0,l=i.length;c<l;++c)if(i[c].name===t){i[c]=s;break}c===l&&i.push(s)}a.tween=i}}function Ci(e,t){var n=this._id;if(e+=``,arguments.length<2){for(var r=_i(this.node(),n).tween,i=0,a=r.length,o;i<a;++i)if((o=r[i]).name===e)return o.value;return null}return this.each((t==null?xi:Si)(n,e,t))}function wi(e,t,n){var r=e._id;return e.each(function(){var e=gi(this,r);(e.value||={})[t]=n.apply(this,arguments)}),function(e){return _i(e,r).value[t]}}function Ti(e,t){var n;return(typeof t==`number`?Cr:t instanceof Yn?vr:(n=Yn(t))?(t=n,vr):kr)(e,t)}function Ei(e){return function(){this.removeAttribute(e)}}function Di(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Oi(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttribute(e);return o===i?null:o===r?a:a=t(r=o,n)}}function ki(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttributeNS(e.space,e.local);return o===i?null:o===r?a:a=t(r=o,n)}}function Ai(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttribute(e):(o=this.getAttribute(e),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function ji(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(o=this.getAttributeNS(e.space,e.local),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function Mi(e,t){var n=ge(e),r=n===`transform`?zr:Ti;return this.attrTween(e,typeof t==`function`?(n.local?ji:Ai)(n,r,wi(this,`attr.`+e,t)):t==null?(n.local?Di:Ei)(n):(n.local?ki:Oi)(n,r,t))}function Ni(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Pi(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Fi(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Pi(e,i)),n}return i._value=t,i}function Ii(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Ni(e,i)),n}return i._value=t,i}function Li(e,t){var n=`attr.`+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!=`function`)throw Error();var r=ge(e);return this.tween(n,(r.local?Fi:Ii)(r,t))}function Ri(e,t){return function(){hi(this,e).delay=+t.apply(this,arguments)}}function zi(e,t){return t=+t,function(){hi(this,e).delay=t}}function Bi(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?Ri:zi)(t,e)):_i(this.node(),t).delay}function Vi(e,t){return function(){gi(this,e).duration=+t.apply(this,arguments)}}function Hi(e,t){return t=+t,function(){gi(this,e).duration=t}}function Ui(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?Vi:Hi)(t,e)):_i(this.node(),t).duration}function Wi(e,t){if(typeof t!=`function`)throw Error();return function(){gi(this,e).ease=t}}function Gi(e){var t=this._id;return arguments.length?this.each(Wi(t,e)):_i(this.node(),t).ease}function Ki(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!=`function`)throw Error();gi(this,e).ease=n}}function qi(e){if(typeof e!=`function`)throw Error();return this.each(Ki(this._id,e))}function Ji(e){typeof e!=`function`&&(e=De(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new Ca(r,this._parents,this._name,this._id)}function Yi(e){if(e._id!==this._id)throw Error();for(var t=this._groups,n=e._groups,r=t.length,i=n.length,a=Math.min(r,i),o=Array(r),s=0;s<a;++s)for(var c=t[s],l=n[s],u=c.length,d=o[s]=Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;s<r;++s)o[s]=t[s];return new Ca(o,this._parents,this._name,this._id)}function Xi(e){return(e+``).trim().split(/^|\s+/).every(function(e){var t=e.indexOf(`.`);return t>=0&&(e=e.slice(0,t)),!e||e===`start`})}function Zi(e,t,n){var r,i,a=Xi(t)?hi:gi;return function(){var o=a(this,e),s=o.on;s!==r&&(i=(r=s).copy()).on(t,n),o.on=i}}function Qi(e,t){var n=this._id;return arguments.length<2?_i(this.node(),n).on.on(e):this.each(Zi(n,e,t))}function $i(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function ea(){return this.on(`end.remove`,$i(this._id))}function ta(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=be(e));for(var r=this._groups,i=r.length,a=Array(i),o=0;o<i;++o)for(var s=r[o],c=s.length,l=a[o]=Array(c),u,d,f=0;f<c;++f)(u=s[f])&&(d=e.call(u,u.__data__,f,s))&&(`__data__`in u&&(d.__data__=u.__data__),l[f]=d,mi(l[f],t,n,f,l,_i(u,n)));return new Ca(a,this._parents,t,n)}function na(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=we(e));for(var r=this._groups,i=r.length,a=[],o=[],s=0;s<i;++s)for(var c=r[s],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,m=_i(u,n),h=0,g=f.length;h<g;++h)(p=f[h])&&mi(p,t,n,h,f,m);a.push(f),o.push(u)}return new Ca(a,o,t,n)}var ra=dn.prototype.constructor;function ia(){return new ra(this._groups,this._parents)}function aa(e,t){var n,r,i;return function(){var a=_t(this,e),o=(this.style.removeProperty(e),_t(this,e));return a===o?null:a===n&&o===r?i:i=t(n=a,r=o)}}function oa(e){return function(){this.style.removeProperty(e)}}function sa(e,t,n){var r,i=n+``,a;return function(){var o=_t(this,e);return o===i?null:o===r?a:a=t(r=o,n)}}function ca(e,t,n){var r,i,a;return function(){var o=_t(this,e),s=n(this),c=s+``;return s??(c=s=(this.style.removeProperty(e),_t(this,e))),o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s))}}function la(e,t){var n,r,i,a=`style.`+t,o=`end.`+a,s;return function(){var c=gi(this,e),l=c.on,u=c.value[a]==null?s||=oa(t):void 0;(l!==n||i!==u)&&(r=(n=l).copy()).on(o,i=u),c.on=r}}function ua(e,t,n){var r=(e+=``)==`transform`?Rr:Ti;return t==null?this.styleTween(e,aa(e,r)).on(`end.style.`+e,oa(e)):typeof t==`function`?this.styleTween(e,ca(e,r,wi(this,`style.`+e,t))).each(la(this._id,e)):this.styleTween(e,sa(e,r,t),n).on(`end.style.`+e,null)}function da(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function fa(e,t,n){var r,i;function a(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&da(e,a,n)),r}return a._value=t,a}function pa(e,t,n){var r=`style.`+(e+=``);if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!=`function`)throw Error();return this.tween(r,fa(e,t,n??``))}function ma(e){return function(){this.textContent=e}}function ha(e){return function(){var t=e(this);this.textContent=t??``}}function ga(e){return this.tween(`text`,typeof e==`function`?ha(wi(this,`text`,e)):ma(e==null?``:e+``))}function _a(e){return function(t){this.textContent=e.call(this,t)}}function va(e){var t,n;function r(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&_a(r)),t}return r._value=e,r}function ya(e){var t=`text`;if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!=`function`)throw Error();return this.tween(t,va(e))}function ba(){for(var e=this._name,t=this._id,n=Ta(),r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)if(c=o[l]){var u=_i(c,t);mi(c,e,n,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Ca(r,this._parents,e,n)}function xa(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(a,o){var s={value:o},c={value:function(){--i===0&&a()}};n.each(function(){var n=gi(this,r),i=n.on;i!==e&&(t=(e=i).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),n.on=t}),i===0&&a()})}var Sa=0;function Ca(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function wa(e){return dn().transition(e)}function Ta(){return++Sa}var Ea=dn.prototype;Ca.prototype=wa.prototype={constructor:Ca,select:ta,selectAll:na,selectChild:Ea.selectChild,selectChildren:Ea.selectChildren,filter:Ji,merge:Yi,selection:ia,transition:ba,call:Ea.call,nodes:Ea.nodes,node:Ea.node,size:Ea.size,empty:Ea.empty,each:Ea.each,on:Qi,attr:Mi,attrTween:Li,style:ua,styleTween:pa,text:ga,textTween:ya,remove:ea,tween:Ci,delay:Bi,duration:Ui,ease:Gi,easeVarying:qi,end:xa,[Symbol.iterator]:Ea[Symbol.iterator]};function Da(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Oa={time:null,delay:0,duration:250,ease:Da};function ka(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw Error(`transition ${t} not found`);return n}function Aa(e){var t,n;e instanceof Ca?(t=e._id,e=e._name):(t=Ta(),(n=Oa).time=ni(),e=e==null?null:e+``);for(var r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&mi(c,e,t,l,o,n||ka(c,t));return new Ca(r,this._parents,e,t)}dn.prototype.interrupt=bi,dn.prototype.transition=Aa;var ja=e=>()=>e;function Ma(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Na(e,t,n){this.k=e,this.x=t,this.y=n}Na.prototype={constructor:Na,scale:function(e){return e===1?this:new Na(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Na(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return`translate(`+this.x+`,`+this.y+`) scale(`+this.k+`)`}};var Pa=new Na(1,0,0);Fa.prototype=Na.prototype;function Fa(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Pa;return e.__zoom}function Ia(e){e.stopImmediatePropagation()}function La(e){e.preventDefault(),e.stopImmediatePropagation()}function Ra(e){return(!e.ctrlKey||e.type===`wheel`)&&!e.button}function za(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute(`viewBox`)?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Ba(){return this.__zoom||Pa}function Va(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Ha(){return navigator.maxTouchPoints||`ontouchstart`in this}function Ua(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],a=e.invertY(t[0][1])-n[0][1],o=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),o>a?(a+o)/2:Math.min(0,a)||Math.max(0,o))}function Wa(){var e=Ra,t=za,n=Ua,r=Va,i=Ha,a=[0,1/0],o=[[-1/0,-1/0],[1/0,1/0]],s=250,c=Wr,l=ue(`start`,`zoom`,`end`),u,d,f,p=500,m=150,h=0,g=10;function _(e){e.property(`__zoom`,Ba).on(`wheel.zoom`,w,{passive:!1}).on(`mousedown.zoom`,T).on(`dblclick.zoom`,E).filter(i).on(`touchstart.zoom`,D).on(`touchmove.zoom`,O).on(`touchend.zoom touchcancel.zoom`,k).style(`-webkit-tap-highlight-color`,`rgba(0,0,0,0)`)}_.transform=function(e,t,n,r){var i=e.selection?e.selection():e;i.property(`__zoom`,Ba),e===i?i.interrupt().each(function(){S(this,arguments).event(r).start().zoom(null,typeof t==`function`?t.apply(this,arguments):t).end()}):x(e,t,n,r)},_.scaleBy=function(e,t,n,r){_.scaleTo(e,function(){return this.__zoom.k*(typeof t==`function`?t.apply(this,arguments):t)},n,r)},_.scaleTo=function(e,r,i,a){_.transform(e,function(){var e=t.apply(this,arguments),a=this.__zoom,s=i==null?b(e):typeof i==`function`?i.apply(this,arguments):i,c=a.invert(s),l=typeof r==`function`?r.apply(this,arguments):r;return n(y(v(a,l),s,c),e,o)},i,a)},_.translateBy=function(e,r,i,a){_.transform(e,function(){return n(this.__zoom.translate(typeof r==`function`?r.apply(this,arguments):r,typeof i==`function`?i.apply(this,arguments):i),t.apply(this,arguments),o)},null,a)},_.translateTo=function(e,r,i,a,s){_.transform(e,function(){var e=t.apply(this,arguments),s=this.__zoom,c=a==null?b(e):typeof a==`function`?a.apply(this,arguments):a;return n(Pa.translate(c[0],c[1]).scale(s.k).translate(typeof r==`function`?-r.apply(this,arguments):-r,typeof i==`function`?-i.apply(this,arguments):-i),e,o)},a,s)};function v(e,t){return t=Math.max(a[0],Math.min(a[1],t)),t===e.k?e:new Na(t,e.x,e.y)}function y(e,t,n){var r=t[0]-n[0]*e.k,i=t[1]-n[1]*e.k;return r===e.x&&i===e.y?e:new Na(e.k,r,i)}function b(e){return[(+e[0][0]+ +e[1][0])/2,(+e[0][1]+ +e[1][1])/2]}function x(e,n,r,i){e.on(`start.zoom`,function(){S(this,arguments).event(i).start()}).on(`interrupt.zoom end.zoom`,function(){S(this,arguments).event(i).end()}).tween(`zoom`,function(){var e=this,a=arguments,o=S(e,a).event(i),s=t.apply(e,a),l=r==null?b(s):typeof r==`function`?r.apply(e,a):r,u=Math.max(s[1][0]-s[0][0],s[1][1]-s[0][1]),d=e.__zoom,f=typeof n==`function`?n.apply(e,a):n,p=c(d.invert(l).concat(u/d.k),f.invert(l).concat(u/f.k));return function(e){if(e===1)e=f;else{var t=p(e),n=u/t[2];e=new Na(n,l[0]-t[0]*n,l[1]-t[1]*n)}o.zoom(null,e)}})}function S(e,t,n){return!n&&e.__zooming||new C(e,t)}function C(e,n){this.that=e,this.args=n,this.active=0,this.sourceEvent=null,this.extent=t.apply(e,n),this.taps=0}C.prototype={event:function(e){return e&&(this.sourceEvent=e),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit(`start`)),this},zoom:function(e,t){return this.mouse&&e!==`mouse`&&(this.mouse[1]=t.invert(this.mouse[0])),this.touch0&&e!==`touch`&&(this.touch0[1]=t.invert(this.touch0[0])),this.touch1&&e!==`touch`&&(this.touch1[1]=t.invert(this.touch1[0])),this.that.__zoom=t,this.emit(`zoom`),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit(`end`)),this},emit:function(e){var t=pn(this.that).datum();l.call(e,this.that,new Ma(e,{sourceEvent:this.sourceEvent,target:_,type:e,transform:this.that.__zoom,dispatch:l}),t)}};function w(t,...i){if(!e.apply(this,arguments))return;var s=S(this,i).event(t),c=this.__zoom,l=Math.max(a[0],Math.min(a[1],c.k*2**r.apply(this,arguments))),u=hn(t);if(s.wheel)(s.mouse[0][0]!==u[0]||s.mouse[0][1]!==u[1])&&(s.mouse[1]=c.invert(s.mouse[0]=u)),clearTimeout(s.wheel);else if(c.k===l)return;else s.mouse=[u,c.invert(u)],yi(this),s.start();La(t),s.wheel=setTimeout(d,m),s.zoom(`mouse`,n(y(v(c,l),s.mouse[0],s.mouse[1]),s.extent,o));function d(){s.wheel=null,s.end()}}function T(t,...r){if(f||!e.apply(this,arguments))return;var i=t.currentTarget,a=S(this,r,!0).event(t),s=pn(t.view).on(`mousemove.zoom`,d,!0).on(`mouseup.zoom`,p,!0),c=hn(t,i),l=t.clientX,u=t.clientY;bn(t.view),Ia(t),a.mouse=[c,this.__zoom.invert(c)],yi(this),a.start();function d(e){if(La(e),!a.moved){var t=e.clientX-l,r=e.clientY-u;a.moved=t*t+r*r>h}a.event(e).zoom(`mouse`,n(y(a.that.__zoom,a.mouse[0]=hn(e,i),a.mouse[1]),a.extent,o))}function p(e){s.on(`mousemove.zoom mouseup.zoom`,null),xn(e.view,a.moved),La(e),a.event(e).end()}}function E(r,...i){if(e.apply(this,arguments)){var a=this.__zoom,c=hn(r.changedTouches?r.changedTouches[0]:r,this),l=a.invert(c),u=a.k*(r.shiftKey?.5:2),d=n(y(v(a,u),c,l),t.apply(this,i),o);La(r),s>0?pn(this).transition().duration(s).call(x,d,c,r):pn(this).call(_.transform,d,c,r)}}function D(t,...n){if(e.apply(this,arguments)){var r=t.touches,i=r.length,a=S(this,n,t.changedTouches.length===i).event(t),o,s,c,l;for(Ia(t),s=0;s<i;++s)c=r[s],l=hn(c,this),l=[l,this.__zoom.invert(l),c.identifier],a.touch0?!a.touch1&&a.touch0[2]!==l[2]&&(a.touch1=l,a.taps=0):(a.touch0=l,o=!0,a.taps=1+!!u);u&&=clearTimeout(u),o&&(a.taps<2&&(d=l[0],u=setTimeout(function(){u=null},p)),yi(this),a.start())}}function O(e,...t){if(this.__zooming){var r=S(this,t).event(e),i=e.changedTouches,a=i.length,s,c,l,u;for(La(e),s=0;s<a;++s)c=i[s],l=hn(c,this),r.touch0&&r.touch0[2]===c.identifier?r.touch0[0]=l:r.touch1&&r.touch1[2]===c.identifier&&(r.touch1[0]=l);if(c=r.that.__zoom,r.touch1){var d=r.touch0[0],f=r.touch0[1],p=r.touch1[0],m=r.touch1[1],h=(h=p[0]-d[0])*h+(h=p[1]-d[1])*h,g=(g=m[0]-f[0])*g+(g=m[1]-f[1])*g;c=v(c,Math.sqrt(h/g)),l=[(d[0]+p[0])/2,(d[1]+p[1])/2],u=[(f[0]+m[0])/2,(f[1]+m[1])/2]}else if(r.touch0)l=r.touch0[0],u=r.touch0[1];else return;r.zoom(`touch`,n(y(c,l,u),r.extent,o))}}function k(e,...t){if(this.__zooming){var n=S(this,t).event(e),r=e.changedTouches,i=r.length,a,o;for(Ia(e),f&&clearTimeout(f),f=setTimeout(function(){f=null},p),a=0;a<i;++a)o=r[a],n.touch0&&n.touch0[2]===o.identifier?delete n.touch0:n.touch1&&n.touch1[2]===o.identifier&&delete n.touch1;if(n.touch1&&!n.touch0&&(n.touch0=n.touch1,delete n.touch1),n.touch0)n.touch0[1]=this.__zoom.invert(n.touch0[0]);else if(n.end(),n.taps===2&&(o=hn(o,this),Math.hypot(d[0]-o[0],d[1]-o[1])<g)){var s=pn(this).on(`dblclick.zoom`);s&&s.apply(this,arguments)}}}return _.wheelDelta=function(e){return arguments.length?(r=typeof e==`function`?e:ja(+e),_):r},_.filter=function(t){return arguments.length?(e=typeof t==`function`?t:ja(!!t),_):e},_.touchable=function(e){return arguments.length?(i=typeof e==`function`?e:ja(!!e),_):i},_.extent=function(e){return arguments.length?(t=typeof e==`function`?e:ja([[+e[0][0],+e[0][1]],[+e[1][0],+e[1][1]]]),_):t},_.scaleExtent=function(e){return arguments.length?(a[0]=+e[0],a[1]=+e[1],_):[a[0],a[1]]},_.translateExtent=function(e){return arguments.length?(o[0][0]=+e[0][0],o[1][0]=+e[1][0],o[0][1]=+e[0][1],o[1][1]=+e[1][1],_):[[o[0][0],o[0][1]],[o[1][0],o[1][1]]]},_.constrain=function(e){return arguments.length?(n=e,_):n},_.duration=function(e){return arguments.length?(s=+e,_):s},_.interpolate=function(e){return arguments.length?(c=e,_):c},_.on=function(){var e=l.on.apply(l,arguments);return e===l?_:e},_.clickDistance=function(e){return arguments.length?(h=(e=+e)*e,_):Math.sqrt(h)},_.tapDistance=function(e){return arguments.length?(g=+e,_):g},_}var Ga={error001:(e=`react`)=>`Seems like you have not used ${e===`svelte`?`SvelteFlowProvider`:`ReactFlowProvider`} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>`It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.`,error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>`The parent container needs a width and a height to render the graph.`,error005:()=>`Only child nodes can use a parent extent.`,error006:()=>`Can't create edge. An edge needs a source and a target.`,error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:r})=>`Couldn't create edge for ${e} handle id: "${e===`source`?n:r}", edge id: ${t}.`,error010:()=>`Handle: No node id found. Make sure to only use a Handle inside a custom Node.`,error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e=`react`)=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>`useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.`,error015:()=>`It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.`,error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Ka=[[-1/0,-1/0],[1/0,1/0]],qa=[`Enter`,` `,`Escape`],Ja={"node.a11yDescription.default":`Press enter or space to select a node. Press delete to remove it and escape to cancel.`,"node.a11yDescription.keyboardDisabled":`Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.`,"node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":`Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.`,"controls.ariaLabel":`Control Panel`,"controls.zoomIn.ariaLabel":`Zoom In`,"controls.zoomOut.ariaLabel":`Zoom Out`,"controls.fitView.ariaLabel":`Fit View`,"controls.interactive.ariaLabel":`Toggle Interactivity`,"minimap.ariaLabel":`Mini Map`,"handle.ariaLabel":`Handle`},Ya;(function(e){e.Strict=`strict`,e.Loose=`loose`})(Ya||={});var Xa;(function(e){e.Free=`free`,e.Vertical=`vertical`,e.Horizontal=`horizontal`})(Xa||={});var Za;(function(e){e.Partial=`partial`,e.Full=`full`})(Za||={});var Qa={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},$a;(function(e){e.Bezier=`default`,e.Straight=`straight`,e.Step=`step`,e.SmoothStep=`smoothstep`,e.SimpleBezier=`simplebezier`})($a||={});var eo;(function(e){e.Arrow=`arrow`,e.ArrowClosed=`arrowclosed`})(eo||={});var X;(function(e){e.Left=`left`,e.Top=`top`,e.Right=`right`,e.Bottom=`bottom`})(X||={});var to={[X.Left]:X.Right,[X.Right]:X.Left,[X.Top]:X.Bottom,[X.Bottom]:X.Top};function no(e){return e===null?null:e?`valid`:`invalid`}var ro=e=>!!e&&typeof e==`object`&&`id`in e&&`source`in e&&`target`in e,io=e=>!!e&&typeof e==`object`&&`id`in e&&`position`in e&&!(`source`in e)&&!(`target`in e),ao=e=>!!e&&typeof e==`object`&&`id`in e&&`internals`in e&&!(`source`in e)&&!(`target`in e),oo=(e,t=[0,0])=>{let{width:n,height:r}=Vo(e),i=e.origin??t,a=n*i[0],o=r*i[1];return{x:e.position.x-a,y:e.position.y-o}},so=(e,t={nodeOrigin:[0,0]})=>e.length===0?{x:0,y:0,width:0,height:0}:Co(e.reduce((e,n)=>{let r=typeof n==`string`,i=!t.nodeLookup&&!r?n:void 0;return t.nodeLookup&&(i=r?t.nodeLookup.get(n):ao(n)?n:t.nodeLookup.get(n.id)),xo(e,i?To(i,t.nodeOrigin):{x:0,y:0,x2:0,y2:0})},{x:1/0,y:1/0,x2:-1/0,y2:-1/0})),co=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},r=!1;return e.forEach(e=>{(t.filter===void 0||t.filter(e))&&(n=xo(n,To(e)),r=!0)}),r?Co(n):{x:0,y:0,width:0,height:0}},lo=(e,t,[n,r,i]=[0,0,1],a=!1,o=!1)=>{let s=(t.x-n)/i,c=(t.y-r)/i,l=t.width/i,u=t.height/i,d=[];for(let t of e.values()){let{measured:e,selectable:n=!0,hidden:r=!1}=t;if(o&&!n||r)continue;let i=e.width??t.width??t.initialWidth??0,f=e.height??t.height??t.initialHeight??0,{x:p,y:m}=t.internals.positionAbsolute,h=Do(s,c,l,u,p,m,i,f),g=i*f,_=a&&h>0;(!t.internals.handleBounds||_||h>=g||t.dragging)&&d.push(t)}return d},uo=(e,t)=>{let n=new Set;return e.forEach(e=>{n.add(e.id)}),t.filter(e=>n.has(e.source)||n.has(e.target))};function fo(e,t){let n=new Map,r=t?.nodes?new Set(t.nodes.map(e=>e.id)):null;return e.forEach(e=>{let i;if(t?.includeHiddenNodes){let{width:t,height:n}=Vo(e);i=t>0&&n>0}else i=!!(e.measured.width&&e.measured.height&&!e.hidden);i&&(!r||r.has(e.id))&&n.set(e.id,e)}),n}async function po({nodes:e,width:t,height:n,panZoom:r,minZoom:i,maxZoom:a},o){if(e.size===0)return!0;let s=Ro(co(fo(e,o)),t,n,o?.minZoom??i,o?.maxZoom??a,o?.padding??.1);return await r.setViewport(s,{duration:o?.duration,ease:o?.ease,interpolate:o?.interpolate}),!0}function mo({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:r=[0,0],nodeExtent:i,onError:a}){let o=n.get(e),s=o.parentId?n.get(o.parentId):void 0,{x:c,y:l}=s?s.internals.positionAbsolute:{x:0,y:0},u=o.origin??r,d=o.extent||i;if(o.extent===`parent`&&!o.expandParent)if(!s)a?.(`005`,Ga.error005());else{let e=s.measured.width,t=s.measured.height;e&&t&&(d=[[c,l],[c+e,l+t]])}else s&&Bo(o.extent)&&(d=[[o.extent[0][0]+c,o.extent[0][1]+l],[o.extent[1][0]+c,o.extent[1][1]+l]]);let f=Bo(d)?_o(t,d,o.measured):t;return(o.measured.width===void 0||o.measured.height===void 0)&&a?.(`015`,Ga.error015()),{position:{x:f.x-c+(o.measured.width??0)*u[0],y:f.y-l+(o.measured.height??0)*u[1]},positionAbsolute:f}}async function ho({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:r,onBeforeDelete:i}){let a=new Set(e.map(e=>e.id)),o=[];for(let e of n){if(e.deletable===!1)continue;let t=a.has(e.id),n=!t&&e.parentId&&o.find(t=>t.id===e.parentId);(t||n)&&o.push(e)}let s=new Set(t.map(e=>e.id)),c=r.filter(e=>e.deletable!==!1),l=uo(o,c);for(let e of c)s.has(e.id)&&!l.find(t=>t.id===e.id)&&l.push(e);if(!i)return{edges:l,nodes:o};let u=await i({nodes:o,edges:l});return typeof u==`boolean`?u?{edges:l,nodes:o}:{edges:[],nodes:[]}:u}var go=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),_o=(e={x:0,y:0},t,n)=>({x:go(e.x,t[0][0],t[1][0]-(n?.width??0)),y:go(e.y,t[0][1],t[1][1]-(n?.height??0))});function vo(e,t,n){let{width:r,height:i}=Vo(n),{x:a,y:o}=n.internals.positionAbsolute;return _o(e,[[a,o],[a+r,o+i]],t)}var yo=(e,t,n)=>e<t?go(Math.abs(e-t),1,t)/t:e>n?-go(Math.abs(e-n),1,t)/t:0,bo=(e,t,n=15,r=40)=>[yo(e.x,r,t.width-r)*n,yo(e.y,r,t.height-r)*n],xo=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),So=({x:e,y:t,width:n,height:r})=>({x:e,y:t,x2:e+n,y2:t+r}),Co=({x:e,y:t,x2:n,y2:r})=>({x:e,y:t,width:n-e,height:r-t}),wo=(e,t=[0,0])=>{let{x:n,y:r}=ao(e)?e.internals.positionAbsolute:oo(e,t);return{x:n,y:r,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},To=(e,t=[0,0])=>{let{x:n,y:r}=ao(e)?e.internals.positionAbsolute:oo(e,t);return{x:n,y:r,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:r+(e.measured?.height??e.height??e.initialHeight??0)}},Eo=(e,t)=>Co(xo(So(e),So(t))),Do=(e,t,n,r,i,a,o,s)=>{let c=Math.max(0,Math.min(e+n,i+o)-Math.max(e,i)),l=Math.max(0,Math.min(t+r,a+s)-Math.max(t,a));return Math.ceil(c*l)},Oo=(e,t)=>Do(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),ko=e=>Ao(e.width)&&Ao(e.height)&&Ao(e.x)&&Ao(e.y),Ao=e=>!isNaN(e)&&isFinite(e),jo=(e,t)=>(e,t)=>{},Mo=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),No=({x:e,y:t},[n,r,i],a=!1,o=[1,1])=>{let s={x:(e-n)/i,y:(t-r)/i};return a?Mo(s,o):s},Po=({x:e,y:t},[n,r,i])=>({x:e*i+n,y:t*i+r});function Fo(e,t){if(typeof e==`number`)return Math.floor((t-t/(1+e))*.5);if(typeof e==`string`&&e.endsWith(`px`)){let t=parseFloat(e);if(!Number.isNaN(t))return Math.floor(t)}if(typeof e==`string`&&e.endsWith(`%`)){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Io(e,t,n){if(typeof e==`string`||typeof e==`number`){let r=Fo(e,n),i=Fo(e,t);return{top:r,right:i,bottom:r,left:i,x:i*2,y:r*2}}if(typeof e==`object`){let r=Fo(e.top??e.y??0,n),i=Fo(e.bottom??e.y??0,n),a=Fo(e.left??e.x??0,t),o=Fo(e.right??e.x??0,t);return{top:r,right:o,bottom:i,left:a,x:a+o,y:r+i}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function Lo(e,t,n,r,i,a){let{x:o,y:s}=Po(e,[t,n,r]),{x:c,y:l}=Po({x:e.x+e.width,y:e.y+e.height},[t,n,r]),u=i-c,d=a-l;return{left:Math.floor(o),top:Math.floor(s),right:Math.floor(u),bottom:Math.floor(d)}}var Ro=(e,t,n,r,i,a)=>{let o=Io(a,t,n),s=(t-o.x)/e.width,c=(n-o.y)/e.height,l=go(Math.min(s,c),r,i),u=e.x+e.width/2,d=e.y+e.height/2,f=t/2-u*l,p=n/2-d*l,m=Lo(e,f,p,l,t,n),h={left:Math.min(m.left-o.left,0),top:Math.min(m.top-o.top,0),right:Math.min(m.right-o.right,0),bottom:Math.min(m.bottom-o.bottom,0)};return{x:f-h.left+h.right,y:p-h.top+h.bottom,zoom:l}},zo=()=>typeof navigator<`u`&&navigator?.userAgent?.indexOf(`Mac`)>=0;function Bo(e){return e!=null&&e!==`parent`}function Vo(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Ho(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Uo(e,t={width:0,height:0},n,r,i){let a={...e},o=r.get(n);if(o){let e=o.origin||i;a.x+=o.internals.positionAbsolute.x-(t.width??0)*e[0],a.y+=o.internals.positionAbsolute.y-(t.height??0)*e[1]}return a}function Wo(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Go(){let e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}function Ko(e){return{...Ja,...e||{}}}function qo(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:r,containerBounds:i}){let{x:a,y:o}=$o(e),s=No({x:a-(i?.left??0),y:o-(i?.top??0)},r),{x:c,y:l}=n?Mo(s,t):s;return{xSnapped:c,ySnapped:l,...s}}var Jo=e=>({width:e.offsetWidth,height:e.offsetHeight}),Yo=e=>e?.getRootNode?.()||window?.document,Xo=[`INPUT`,`SELECT`,`TEXTAREA`];function Zo(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType===1?Xo.includes(t.nodeName)||t.hasAttribute(`contenteditable`)||!!t.closest(`.nokey`):!1}var Qo=e=>`clientX`in e,$o=(e,t)=>{let n=Qo(e),r=n?e.clientX:e.touches?.[0].clientX,i=n?e.clientY:e.touches?.[0].clientY;return{x:r-(t?.left??0),y:i-(t?.top??0)}},es=(e,t,n,r,i)=>{let a=t.querySelectorAll(`.${e}`);return!a||!a.length?null:Array.from(a).map(t=>{let a=t.getBoundingClientRect();return{id:t.getAttribute(`data-handleid`),type:e,nodeId:i,position:t.getAttribute(`data-handlepos`),x:(a.left-n.left)/r,y:(a.top-n.top)/r,...Jo(t)}})};function ts({sourceX:e,sourceY:t,targetX:n,targetY:r,sourceControlX:i,sourceControlY:a,targetControlX:o,targetControlY:s}){let c=e*.125+i*.375+o*.375+n*.125,l=t*.125+a*.375+s*.375+r*.125;return[c,l,Math.abs(c-e),Math.abs(l-t)]}function ns(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function rs({pos:e,x1:t,y1:n,x2:r,y2:i,c:a}){switch(e){case X.Left:return[t-ns(t-r,a),n];case X.Right:return[t+ns(r-t,a),n];case X.Top:return[t,n-ns(n-i,a)];case X.Bottom:return[t,n+ns(i-n,a)]}}function is({sourceX:e,sourceY:t,sourcePosition:n=X.Bottom,targetX:r,targetY:i,targetPosition:a=X.Top,curvature:o=.25}){let[s,c]=rs({pos:n,x1:e,y1:t,x2:r,y2:i,c:o}),[l,u]=rs({pos:a,x1:r,y1:i,x2:e,y2:t,c:o}),[d,f,p,m]=ts({sourceX:e,sourceY:t,targetX:r,targetY:i,sourceControlX:s,sourceControlY:c,targetControlX:l,targetControlY:u});return[`M${e},${t} C${s},${c} ${l},${u} ${r},${i}`,d,f,p,m]}function as({sourceX:e,sourceY:t,targetX:n,targetY:r}){let i=Math.abs(n-e)/2,a=n<e?n+i:n-i,o=Math.abs(r-t)/2;return[a,r<t?r+o:r-o,i,o]}function os({sourceNode:e,targetNode:t,selected:n=!1,zIndex:r=0,elevateOnSelect:i=!1,zIndexMode:a=`basic`}){return a===`manual`?r:(i&&n?r+1e3:r)+Math.max(e.parentId||i&&e.selected?e.internals.z:0,t.parentId||i&&t.selected?t.internals.z:0)}function ss({sourceNode:e,targetNode:t,width:n,height:r,transform:i}){let a=xo(To(e),To(t));return a.x===a.x2&&(a.x2+=1),a.y===a.y2&&(a.y2+=1),Oo({x:-i[0]/i[2],y:-i[1]/i[2],width:n/i[2],height:r/i[2]},Co(a))>0}var cs=({source:e,sourceHandle:t,target:n,targetHandle:r})=>`xy-edge__${e}${t||``}-${n}${r||``}`,ls=(e,t)=>t.some(t=>t.source===e.source&&t.target===e.target&&(t.sourceHandle===e.sourceHandle||!t.sourceHandle&&!e.sourceHandle)&&(t.targetHandle===e.targetHandle||!t.targetHandle&&!e.targetHandle)),us=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.(`006`,Ga.error006()),t;let r=n.getEdgeId||cs,i;return i=ro(e)?{...e}:{...e,id:r(e)},ls(i,t)?t:(i.sourceHandle===null&&delete i.sourceHandle,i.targetHandle===null&&delete i.targetHandle,t.concat(i))};function ds({sourceX:e,sourceY:t,targetX:n,targetY:r}){let[i,a,o,s]=as({sourceX:e,sourceY:t,targetX:n,targetY:r});return[`M ${e},${t}L ${n},${r}`,i,a,o,s]}var fs={[X.Left]:{x:-1,y:0},[X.Right]:{x:1,y:0},[X.Top]:{x:0,y:-1},[X.Bottom]:{x:0,y:1}},ps=({source:e,sourcePosition:t=X.Bottom,target:n})=>t===X.Left||t===X.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},ms=(e,t)=>Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2);function hs({source:e,sourcePosition:t=X.Bottom,target:n,targetPosition:r=X.Top,center:i,offset:a,stepPosition:o}){let s=fs[t],c=fs[r],l={x:e.x+s.x*a,y:e.y+s.y*a},u={x:n.x+c.x*a,y:n.y+c.y*a},d=ps({source:l,sourcePosition:t,target:u}),f=d.x===0?`y`:`x`,p=d[f],m=[],h,g,_={x:0,y:0},v={x:0,y:0},[,,y,b]=as({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[f]*c[f]===-1){f===`x`?(h=i.x??l.x+(u.x-l.x)*o,g=i.y??(l.y+u.y)/2):(h=i.x??(l.x+u.x)/2,g=i.y??l.y+(u.y-l.y)*o);let e=[{x:h,y:l.y},{x:h,y:u.y}],t=[{x:l.x,y:g},{x:u.x,y:g}];m=s[f]===p?f===`x`?e:t:f===`x`?t:e}else{let i=[{x:l.x,y:u.y}],o=[{x:u.x,y:l.y}];if(m=f===`x`?s.x===p?o:i:s.y===p?i:o,t===r){let t=Math.abs(e[f]-n[f]);if(t<=a){let r=Math.min(a-1,a-t);s[f]===p?_[f]=(l[f]>e[f]?-1:1)*r:v[f]=(u[f]>n[f]?-1:1)*r}}if(t!==r){let e=f===`x`?`y`:`x`,t=s[f]===c[e],n=l[e]>u[e],r=l[e]<u[e];(s[f]===1&&(!t&&n||t&&r)||s[f]!==1&&(!t&&r||t&&n))&&(m=f===`x`?i:o)}let d={x:l.x+_.x,y:l.y+_.y},y={x:u.x+v.x,y:u.y+v.y};Math.max(Math.abs(d.x-m[0].x),Math.abs(y.x-m[0].x))>=Math.max(Math.abs(d.y-m[0].y),Math.abs(y.y-m[0].y))?(h=(d.x+y.x)/2,g=m[0].y):(h=m[0].x,g=(d.y+y.y)/2)}let x={x:l.x+_.x,y:l.y+_.y},S={x:u.x+v.x,y:u.y+v.y};return[[e,...x.x!==m[0].x||x.y!==m[0].y?[x]:[],...m,...S.x!==m[m.length-1].x||S.y!==m[m.length-1].y?[S]:[],n],h,g,y,b]}function gs(e,t,n,r){let i=Math.min(ms(e,t)/2,ms(t,n)/2,r),{x:a,y:o}=t;if(e.x===a&&a===n.x||e.y===o&&o===n.y)return`L${a} ${o}`;if(e.y===o){let t=e.x<n.x?-1:1,r=e.y<n.y?1:-1;return`L ${a+i*t},${o}Q ${a},${o} ${a},${o+i*r}`}let s=e.x<n.x?1:-1;return`L ${a},${o+i*(e.y<n.y?-1:1)}Q ${a},${o} ${a+i*s},${o}`}function _s({sourceX:e,sourceY:t,sourcePosition:n=X.Bottom,targetX:r,targetY:i,targetPosition:a=X.Top,borderRadius:o=5,centerX:s,centerY:c,offset:l=20,stepPosition:u=.5}){let[d,f,p,m,h]=hs({source:{x:e,y:t},sourcePosition:n,target:{x:r,y:i},targetPosition:a,center:{x:s,y:c},offset:l,stepPosition:u}),g=`M${d[0].x} ${d[0].y}`;for(let e=1;e<d.length-1;e++)g+=gs(d[e-1],d[e],d[e+1],o);return g+=`L${d[d.length-1].x} ${d[d.length-1].y}`,[g,f,p,m,h]}function vs(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function ys(e){let{sourceNode:t,targetNode:n}=e;if(!vs(t)||!vs(n))return null;let r=t.internals.handleBounds||bs(t.handles),i=n.internals.handleBounds||bs(n.handles),a=Ss(r?.source??[],e.sourceHandle),o=Ss(e.connectionMode===Ya.Strict?i?.target??[]:(i?.target??[]).concat(i?.source??[]),e.targetHandle);if(!a||!o)return e.onError?.(`008`,Ga.error008(a?`target`:`source`,{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=a?.position||X.Bottom,c=o?.position||X.Top,l=xs(t,a,s),u=xs(n,o,c);return{sourceX:l.x,sourceY:l.y,targetX:u.x,targetY:u.y,sourcePosition:s,targetPosition:c}}function bs(e){if(!e)return null;let t=[],n=[];for(let r of e)r.width=r.width??1,r.height=r.height??1,r.type===`source`?t.push(r):r.type===`target`&&n.push(r);return{source:t,target:n}}function xs(e,t,n=X.Left,r=!1){let i=(t?.x??0)+e.internals.positionAbsolute.x,a=(t?.y??0)+e.internals.positionAbsolute.y,{width:o,height:s}=t??Vo(e);if(r)return{x:i+o/2,y:a+s/2};switch(t?.position??n){case X.Top:return{x:i+o/2,y:a};case X.Right:return{x:i+o,y:a+s/2};case X.Bottom:return{x:i+o/2,y:a+s};case X.Left:return{x:i,y:a+s/2}}}function Ss(e,t){return e&&(t?e.find(e=>e.id===t):e[0])||null}function Cs(e,t){return e?typeof e==`string`?e:`${t?`${t}__`:``}${Object.keys(e).sort().map(t=>`${t}=${e[t]}`).join(`&`)}`:``}function ws(e,{id:t,defaultColor:n,defaultMarkerStart:r,defaultMarkerEnd:i}){let a=new Set;return e.reduce((e,o)=>([o.markerStart||r,o.markerEnd||i].forEach(r=>{if(r&&typeof r==`object`){let i=Cs(r,t);a.has(i)||(e.push({id:i,color:r.color||n,...r}),a.add(i))}}),e),[]).sort((e,t)=>e.id.localeCompare(t.id))}var Ts=1e3,Es=10,Ds={nodeOrigin:[0,0],nodeExtent:Ka,elevateNodesOnSelect:!0,zIndexMode:`basic`,defaults:{}},Os={...Ds,checkEquality:!0};function ks(e,t){let n={...e};for(let e in t)t[e]!==void 0&&(n[e]=t[e]);return n}function As(e,t,n){let r=ks(Ds,n);for(let n of e.values())if(n.parentId)Fs(n,e,t,r);else{let e=_o(oo(n,r.nodeOrigin),Bo(n.extent)?n.extent:r.nodeExtent,Vo(n));n.internals.positionAbsolute=e}}function js(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],r=[];for(let t of e.handles){let i={id:t.id,width:t.width??1,height:t.height??1,nodeId:e.id,x:t.x,y:t.y,position:t.position,type:t.type};t.type===`source`?n.push(i):t.type===`target`&&r.push(i)}return{source:n,target:r}}function Ms(e){return e===`manual`}function Ns(e,t,n,r={}){let i=ks(Os,r),a={i:0},o=new Map(t),s=i?.elevateNodesOnSelect&&!Ms(i.zIndexMode)?Ts:0,c=e.length>0,l=!1;t.clear(),n.clear();for(let u of e){let e=o.get(u.id);if(i.checkEquality&&u===e?.internals.userNode)t.set(u.id,e);else{let n=_o(oo(u,i.nodeOrigin),Bo(u.extent)?u.extent:i.nodeExtent,Vo(u));e={...i.defaults,...u,measured:{width:u.measured?.width,height:u.measured?.height},internals:{positionAbsolute:n,handleBounds:js(u,e),z:Is(u,s,i.zIndexMode),userNode:u}},t.set(u.id,e)}(e.measured===void 0||e.measured.width===void 0||e.measured.height===void 0)&&!e.hidden&&(c=!1),u.parentId&&Fs(e,t,n,r,a),l||=u.selected??!1}return{nodesInitialized:c,hasSelectedNodes:l}}function Ps(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function Fs(e,t,n,r,i){let{elevateNodesOnSelect:a,nodeOrigin:o,nodeExtent:s,zIndexMode:c}=ks(Ds,r),l=e.parentId,u=t.get(l);if(!u){console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}Ps(e,n),i&&!u.parentId&&u.internals.rootParentIndex===void 0&&c===`auto`&&(u.internals.rootParentIndex=++i.i,u.internals.z=u.internals.z+i.i*Es),i&&u.internals.rootParentIndex!==void 0&&(i.i=u.internals.rootParentIndex);let{x:d,y:f,z:p}=Ls(e,u,o,s,a&&!Ms(c)?Ts:0,c),{positionAbsolute:m}=e.internals,h=d!==m.x||f!==m.y;(h||p!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:h?{x:d,y:f}:m,z:p}})}function Is(e,t,n){let r=Ao(e.zIndex)?e.zIndex:0;return Ms(n)?r:r+(e.selected?t:0)}function Ls(e,t,n,r,i,a){let{x:o,y:s}=t.internals.positionAbsolute,c=Vo(e),l=oo(e,n),u=Bo(e.extent)?_o(l,e.extent,c):l,d=_o({x:o+u.x,y:s+u.y},r,c);e.extent===`parent`&&(d=vo(d,c,t));let f=Is(e,i,a),p=t.internals.z??0;return{x:d.x,y:d.y,z:p>=f?p+1:f}}function Rs(e,t,n,r=[0,0]){let i=[],a=new Map;for(let n of e){let e=t.get(n.parentId);if(!e)continue;let r=Eo(a.get(n.parentId)?.expandedRect??wo(e),n.rect);a.set(n.parentId,{expandedRect:r,parent:e})}return a.size>0&&a.forEach(({expandedRect:t,parent:a},o)=>{let s=a.internals.positionAbsolute,c=Vo(a),l=a.origin??r,u=t.x<s.x?Math.round(Math.abs(s.x-t.x)):0,d=t.y<s.y?Math.round(Math.abs(s.y-t.y)):0,f=Math.max(c.width,Math.round(t.width)),p=Math.max(c.height,Math.round(t.height)),m=(f-c.width)*l[0],h=(p-c.height)*l[1];(u>0||d>0||m||h)&&(i.push({id:o,type:`position`,position:{x:a.position.x-u+m,y:a.position.y-d+h}}),n.get(o)?.forEach(t=>{e.some(e=>e.id===t.id)||i.push({id:t.id,type:`position`,position:{x:t.position.x+u,y:t.position.y+d}})})),(c.width<t.width||c.height<t.height||u||d)&&i.push({id:o,type:`dimensions`,setAttributes:!0,dimensions:{width:f+(u?l[0]*u-m:0),height:p+(d?l[1]*d-h:0)}})}),i}function zs(e,t,n,r,i,a,o){let s=r?.querySelector(`.xyflow__viewport`),c=!1;if(!s)return{changes:[],updatedInternals:c};let l=[],u=window.getComputedStyle(s),{m22:d}=new window.DOMMatrixReadOnly(u.transform),f=[];for(let r of e.values()){let e=t.get(r.id);if(!e)continue;if(e.hidden){t.set(e.id,{...e,internals:{...e.internals,handleBounds:void 0}}),c=!0;continue}let s=Jo(r.nodeElement),u=e.measured.width!==s.width||e.measured.height!==s.height;if(s.width&&s.height&&(u||!e.internals.handleBounds||r.force)){let p=r.nodeElement.getBoundingClientRect(),m=Bo(e.extent)?e.extent:a,{positionAbsolute:h}=e.internals;if(e.parentId&&e.extent===`parent`){let n=t.get(e.parentId);n&&(h=vo(h,s,n))}else m&&(h=_o(h,m,s));let g={...e,measured:s,internals:{...e.internals,positionAbsolute:h,handleBounds:{source:es(`source`,r.nodeElement,p,d,e.id),target:es(`target`,r.nodeElement,p,d,e.id)}}};t.set(e.id,g),e.parentId&&Fs(g,t,n,{nodeOrigin:i,zIndexMode:o}),c=!0,u&&(l.push({id:e.id,type:`dimensions`,dimensions:s}),e.expandParent&&e.parentId&&f.push({id:e.id,parentId:e.parentId,rect:wo(g,i)}))}}if(f.length>0){let e=Rs(f,t,n,i);l.push(...e)}return{changes:l,updatedInternals:c}}async function Bs({delta:e,panZoom:t,transform:n,translateExtent:r,width:i,height:a}){if(!t||!e.x&&!e.y)return!1;let o=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[i,a]],r);return!!o&&(o.x!==n[0]||o.y!==n[1]||o.k!==n[2])}function Vs(e,t,n,r,i,a){let o=i,s=r.get(o)||new Map;r.set(o,s.set(n,t)),o=`${i}-${e}`;let c=r.get(o)||new Map;if(r.set(o,c.set(n,t)),a){o=`${i}-${e}-${a}`;let s=r.get(o)||new Map;r.set(o,s.set(n,t))}}function Hs(e,t,n){e.clear(),t.clear();for(let r of n){let{source:n,target:i,sourceHandle:a=null,targetHandle:o=null}=r,s={edgeId:r.id,source:n,target:i,sourceHandle:a,targetHandle:o},c=`${n}-${a}--${i}-${o}`;Vs(`source`,s,`${i}-${o}--${n}-${a}`,e,n,a),Vs(`target`,s,c,e,i,o),t.set(r.id,r)}}function Us(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:Us(n,t):!1}function Ws(e,t,n){let r=e;do{if(r?.matches?.(t))return!0;if(r===n)return!1;r=r?.parentElement}while(r);return!1}function Gs(e,t,n,r){let i=new Map;for(let[a,o]of e)if((o.selected||o.id===r)&&(!o.parentId||!Us(o,e))&&(o.draggable||t&&o.draggable===void 0)){let t=e.get(a);t&&i.set(a,{id:a,position:t.position||{x:0,y:0},distance:{x:n.x-t.internals.positionAbsolute.x,y:n.y-t.internals.positionAbsolute.y},extent:t.extent,parentId:t.parentId,origin:t.origin,expandParent:t.expandParent,internals:{positionAbsolute:t.internals.positionAbsolute||{x:0,y:0}},measured:{width:t.measured.width??0,height:t.measured.height??0}})}return i}function Ks({nodeId:e,dragItems:t,nodeLookup:n,dragging:r=!0}){let i=[];for(let[e,a]of t){let t=n.get(e)?.internals.userNode;t&&i.push({...t,position:a.position,dragging:r})}if(!e)return[i[0],i];let a=n.get(e)?.internals.userNode;return[a?{...a,position:t.get(e)?.position||a.position,dragging:r}:i[0],i]}function qs({dragItems:e,snapGrid:t,x:n,y:r}){let i=e.values().next().value;if(!i)return null;let a={x:n-i.distance.x,y:r-i.distance.y},o=Mo(a,t);return{x:o.x-a.x,y:o.y-a.y}}function Js({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:r,onDragStop:i}){let a={x:null,y:null},o=0,s=new Map,c=!1,l={x:0,y:0},u=null,d=!1,f=null,p=!1,m=!1,h=null;function g({noDragClassName:g,handleSelector:_,domNode:v,isSelectable:y,nodeId:b,nodeClickDistance:x=0}){f=pn(v);function S({x:e,y:n}){let{nodeLookup:i,nodeExtent:o,snapGrid:c,snapToGrid:l,nodeOrigin:u,onNodeDrag:d,onSelectionDrag:f,onError:p,updateNodePositions:g}=t();a={x:e,y:n};let _=!1,v=s.size>1,y=v&&o?So(co(s)):null,x=v&&l?qs({dragItems:s,snapGrid:c,x:e,y:n}):null;for(let[t,r]of s){if(!i.has(t))continue;let a={x:e-r.distance.x,y:n-r.distance.y};l&&(a=x?{x:Math.round(a.x+x.x),y:Math.round(a.y+x.y)}:Mo(a,c));let s=null;if(v&&o&&!r.extent&&y){let{positionAbsolute:e}=r.internals,t=e.x-y.x+o[0][0],n=e.x+r.measured.width-y.x2+o[1][0],i=e.y-y.y+o[0][1],a=e.y+r.measured.height-y.y2+o[1][1];s=[[t,i],[n,a]]}let{position:d,positionAbsolute:f}=mo({nodeId:t,nextPosition:a,nodeLookup:i,nodeExtent:s||o,nodeOrigin:u,onError:p});_=_||r.position.x!==d.x||r.position.y!==d.y,r.position=d,r.internals.positionAbsolute=f}if(m||=_,_&&(g(s,!0),h&&(r||d||!b&&f))){let[e,t]=Ks({nodeId:b,dragItems:s,nodeLookup:i});r?.(h,s,e,t),d?.(h,e,t),b||f?.(h,t)}}async function C(){if(!u)return;let{transform:e,panBy:n,autoPanSpeed:r,autoPanOnNodeDrag:i}=t();if(!i){c=!1,cancelAnimationFrame(o);return}let[s,d]=bo(l,u,r);(s!==0||d!==0)&&(a.x=(a.x??0)-s/e[2],a.y=(a.y??0)-d/e[2],await n({x:s,y:d})&&S(a)),o=requestAnimationFrame(C)}function w(r){let{nodeLookup:i,multiSelectionActive:o,nodesDraggable:c,transform:l,snapGrid:f,snapToGrid:p,selectNodesOnDrag:m,onNodeDragStart:h,onSelectionDragStart:g,unselectNodesAndEdges:_}=t();d=!0,(!m||!y)&&!o&&b&&(i.get(b)?.selected||_()),y&&m&&b&&e?.(b);let v=qo(r.sourceEvent,{transform:l,snapGrid:f,snapToGrid:p,containerBounds:u});if(a=v,s=Gs(i,c,v,b),s.size>0&&(n||h||!b&&g)){let[e,t]=Ks({nodeId:b,dragItems:s,nodeLookup:i});n?.(r.sourceEvent,s,e,t),h?.(r.sourceEvent,e,t),b||g?.(r.sourceEvent,t)}}let T=On().clickDistance(x).on(`start`,e=>{let{domNode:n,nodeDragThreshold:r,transform:i,snapGrid:o,snapToGrid:s}=t();u=n?.getBoundingClientRect()||null,p=!1,m=!1,h=e.sourceEvent,r===0&&w(e),a=qo(e.sourceEvent,{transform:i,snapGrid:o,snapToGrid:s,containerBounds:u}),l=$o(e.sourceEvent,u)}).on(`drag`,e=>{let{autoPanOnNodeDrag:n,transform:r,snapGrid:i,snapToGrid:o,nodeDragThreshold:f,nodeLookup:m}=t(),g=qo(e.sourceEvent,{transform:r,snapGrid:i,snapToGrid:o,containerBounds:u});if(h=e.sourceEvent,(e.sourceEvent.type===`touchmove`&&e.sourceEvent.touches.length>1||b&&!m.has(b))&&(p=!0),!p){if(!c&&n&&d&&(c=!0,C()),!d){let t=$o(e.sourceEvent,u),n=t.x-l.x,r=t.y-l.y;Math.sqrt(n*n+r*r)>f&&w(e)}(a.x!==g.xSnapped||a.y!==g.ySnapped)&&s&&d&&(l=$o(e.sourceEvent,u),S(g))}}).on(`end`,e=>{if(!d||p){p&&s.size>0&&t().updateNodePositions(s,!1);return}if(c=!1,d=!1,cancelAnimationFrame(o),s.size>0){let{nodeLookup:n,updateNodePositions:r,onNodeDragStop:a,onSelectionDragStop:o}=t();if(m&&=(r(s,!1),!1),i||a||!b&&o){let[t,r]=Ks({nodeId:b,dragItems:s,nodeLookup:n,dragging:!1});i?.(e.sourceEvent,s,t,r),a?.(e.sourceEvent,t,r),b||o?.(e.sourceEvent,r)}}}).filter(e=>{let t=e.target;return!e.button&&(!g||!Ws(t,`.${g}`,v))&&(!_||Ws(t,_,v))});f.call(T)}function _(){f?.on(`.drag`,null)}return{update:g,destroy:_}}function Ys(e,t,n){let r=[],i={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let e of t.values())Oo(i,wo(e))>0&&r.push(e);return r}var Xs=250;function Zs(e,t,n,r){let i=[],a=1/0,o=Ys(e,n,t+Xs);for(let n of o){let o=[...n.internals.handleBounds?.source??[],...n.internals.handleBounds?.target??[]];for(let s of o){if(r.nodeId===s.nodeId&&r.type===s.type&&r.id===s.id)continue;let{x:o,y:c}=xs(n,s,s.position,!0),l=Math.sqrt((o-e.x)**2+(c-e.y)**2);l>t||(l<a?(i=[{...s,x:o,y:c}],a=l):l===a&&i.push({...s,x:o,y:c}))}}if(!i.length)return null;if(i.length>1){let e=r.type===`source`?`target`:`source`;return i.find(t=>t.type===e)??i[0]}return i[0]}function Qs(e,t,n,r,i,a=!1){let o=r.get(e);if(!o)return null;let s=i===`strict`?o.internals.handleBounds?.[t]:[...o.internals.handleBounds?.source??[],...o.internals.handleBounds?.target??[]],c=(n?s?.find(e=>e.id===n):s?.[0])??null;return c&&a?{...c,...xs(o,c,c.position,!0)}:c}function $s(e,t){return e||(t?.classList.contains(`target`)?`target`:t?.classList.contains(`source`)?`source`:null)}function ec(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var tc=()=>!0;function nc(e,{connectionMode:t,connectionRadius:n,handleId:r,nodeId:i,edgeUpdaterType:a,isTarget:o,domNode:s,nodeLookup:c,lib:l,autoPanOnConnect:u,flowId:d,panBy:f,cancelConnection:p,onConnectStart:m,onConnect:h,onConnectEnd:g,isValidConnection:_=tc,onReconnectEnd:v,updateConnection:y,getTransform:b,getFromHandle:x,autoPanSpeed:S,dragThreshold:C=1,handleDomNode:w}){let T=Yo(e.target),E=0,D,{x:O,y:k}=$o(e),A=$s(a,w),j=s?.getBoundingClientRect(),M=!1;if(!j||!A)return;let N=Qs(i,A,r,c,t);if(!N)return;let P=$o(e,j),F=!1,I=null,L=!1,R=null;function z(){if(!u||!j)return;let[e,t]=bo(P,j,S);f({x:e,y:t}),E=requestAnimationFrame(z)}let B={...N,nodeId:i,type:A,position:N.position},V=c.get(i),H={inProgress:!0,isValid:null,from:xs(V,B,X.Left,!0),fromHandle:B,fromPosition:B.position,fromNode:V,to:P,toHandle:null,toPosition:to[B.position],toNode:null,pointer:P};function U(){M=!0,y(H),m?.(e,{nodeId:i,handleId:r,handleType:A})}C===0&&U();function ee(e){if(!M){let{x:t,y:n}=$o(e),r=t-O,i=n-k;if(!(r*r+i*i>C*C))return;U()}if(!x()||!B){W(e);return}let a=b();P=$o(e,j),D=Zs(No(P,a,!1,[1,1]),n,c,B),F||=(z(),!0);let s=rc(e,{handle:D,connectionMode:t,fromNodeId:i,fromHandleId:r,fromType:o?`target`:`source`,isValidConnection:_,doc:T,lib:l,flowId:d,nodeLookup:c});R=s.handleDomNode,I=s.connection,L=ec(!!D,s.isValid);let u=c.get(i),f=u?xs(u,B,X.Left,!0):H.from,p={...H,from:f,isValid:L,to:s.toHandle&&L?Po({x:s.toHandle.x,y:s.toHandle.y},a):P,toHandle:s.toHandle,toPosition:L&&s.toHandle?s.toHandle.position:to[B.position],toNode:s.toHandle?c.get(s.toHandle.nodeId):null,pointer:P};y(p),H=p}function W(e){if(!(`touches`in e&&e.touches.length>0)){if(M){(D||R)&&I&&L&&h?.(I);let{inProgress:t,...n}=H,r={...n,toPosition:H.toHandle?H.toPosition:null};g?.(e,r),a&&v?.(e,r)}p(),cancelAnimationFrame(E),F=!1,L=!1,I=null,R=null,T.removeEventListener(`mousemove`,ee),T.removeEventListener(`mouseup`,W),T.removeEventListener(`touchmove`,ee),T.removeEventListener(`touchend`,W)}}T.addEventListener(`mousemove`,ee),T.addEventListener(`mouseup`,W),T.addEventListener(`touchmove`,ee),T.addEventListener(`touchend`,W)}function rc(e,{handle:t,connectionMode:n,fromNodeId:r,fromHandleId:i,fromType:a,doc:o,lib:s,flowId:c,isValidConnection:l=tc,nodeLookup:u}){let d=a===`target`,f=t?o.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:m}=$o(e),h=o.elementFromPoint(p,m),g=h?.classList.contains(`${s}-flow__handle`)?h:f,_={handleDomNode:g,isValid:!1,connection:null,toHandle:null};if(g){let e=$s(void 0,g),t=g.getAttribute(`data-nodeid`),a=g.getAttribute(`data-handleid`),o=g.classList.contains(`connectable`),s=g.classList.contains(`connectableend`);if(!t||!e)return _;let c={source:d?t:r,sourceHandle:d?a:i,target:d?r:t,targetHandle:d?i:a};_.connection=c,_.isValid=o&&s&&(n===Ya.Strict?d&&e===`source`||!d&&e===`target`:t!==r||a!==i)&&l(c),_.toHandle=Qs(t,e,a,u,n,!0)}return _}var ic={onPointerDown:nc,isValid:rc};function ac({domNode:e,panZoom:t,getTransform:n,getViewScale:r}){let i=pn(e);function a({translateExtent:e,width:a,height:o,zoomStep:s=1,pannable:c=!0,zoomable:l=!0,inversePan:u=!1}){let d=e=>{if(e.sourceEvent.type!==`wheel`||!t)return;let r=n(),i=e.sourceEvent.ctrlKey&&zo()?10:1,a=-e.sourceEvent.deltaY*(e.sourceEvent.deltaMode===1?.05:e.sourceEvent.deltaMode?1:.002)*s,o=r[2]*2**(a*i);t.scaleTo(o)},f=[0,0],p=Wa().on(`start`,e=>{(e.sourceEvent.type===`mousedown`||e.sourceEvent.type===`touchstart`)&&(f=[e.sourceEvent.clientX??e.sourceEvent.touches[0].clientX,e.sourceEvent.clientY??e.sourceEvent.touches[0].clientY])}).on(`zoom`,c?i=>{let s=n();if(i.sourceEvent.type!==`mousemove`&&i.sourceEvent.type!==`touchmove`||!t)return;let c=[i.sourceEvent.clientX??i.sourceEvent.touches[0].clientX,i.sourceEvent.clientY??i.sourceEvent.touches[0].clientY],l=[c[0]-f[0],c[1]-f[1]];f=c;let d=r()*Math.max(s[2],Math.log(s[2]))*(u?-1:1),p={x:s[0]-l[0]*d,y:s[1]-l[1]*d},m=[[0,0],[a,o]];t.setViewportConstrained({x:p.x,y:p.y,zoom:s[2]},m,e)}:null).on(`zoom.wheel`,l?d:null);i.call(p,{})}function o(){i.on(`zoom`,null)}return{update:a,destroy:o,pointer:hn}}var oc=e=>({x:e.x,y:e.y,zoom:e.k}),sc=({x:e,y:t,zoom:n})=>Pa.translate(e,t).scale(n),cc=(e,t)=>e.target.closest(`.${t}`),lc=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),uc=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,dc=(e,t=0,n=uc,r=()=>{})=>{let i=typeof t==`number`&&t>0;return i||r(),i?e.transition().duration(t).ease(n).on(`end`,r):e},fc=e=>{let t=e.ctrlKey&&zo()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function pc({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:r,panOnScrollMode:i,panOnScrollSpeed:a,zoomOnPinch:o,onPanZoomStart:s,onPanZoom:c,onPanZoomEnd:l}){return u=>{if(cc(u,t))return u.ctrlKey&&u.preventDefault(),!1;u.preventDefault(),u.stopImmediatePropagation();let d=n.property(`__zoom`).k||1;if(u.ctrlKey&&o){let e=hn(u),t=d*2**fc(u);r.scaleTo(n,t,e,u);return}let f=u.deltaMode===1?20:1,p=i===Xa.Vertical?0:u.deltaX*f,m=i===Xa.Horizontal?0:u.deltaY*f;!zo()&&u.shiftKey&&i!==Xa.Vertical&&(p=u.deltaY*f,m=0),r.translateBy(n,-(p/d)*a,-(m/d)*a,{internal:!0});let h=oc(n.property(`__zoom`));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(u,h):(e.isPanScrolling=!0,s?.(u,h)),e.panScrollTimeout=setTimeout(()=>{l?.(u,h),e.isPanScrolling=!1},150)}}function mc({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(r,i){let a=r.type===`wheel`,o=!t&&a&&!r.ctrlKey,s=cc(r,e);if(r.ctrlKey&&a&&s&&r.preventDefault(),o||s)return null;r.preventDefault(),n.call(this,r,i)}}function hc({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return r=>{if(r.sourceEvent?.internal)return;let i=oc(r.transform);e.mouseButton=r.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=i,r.sourceEvent?.type===`mousedown`&&t(!0),n&&n?.(r.sourceEvent,i)}}function gc({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:r,onPanZoom:i}){return a=>{e.usedRightMouseButton=!!(n&&lc(t,e.mouseButton??0)),a.sourceEvent?.sync||r([a.transform.x,a.transform.y,a.transform.k]),i&&!a.sourceEvent?.internal&&i?.(a.sourceEvent,oc(a.transform))}}function _c({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:r,onPanZoomEnd:i,onPaneContextMenu:a}){return o=>{if(!o.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,a&&lc(t,e.mouseButton??0)&&!e.usedRightMouseButton&&o.sourceEvent&&a(o.sourceEvent),e.usedRightMouseButton=!1,r(!1),i)){let t=oc(o.transform);e.prevViewport=t,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{i?.(o.sourceEvent,t)},n?150:0)}}}function vc({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:r,panOnScroll:i,zoomOnDoubleClick:a,userSelectionActive:o,noWheelClassName:s,noPanClassName:c,lib:l,connectionInProgress:u}){return d=>{let f=e||t,p=n&&d.ctrlKey,m=d.type===`wheel`;if(d.button===1&&d.type===`mousedown`&&(cc(d,`${l}-flow__node`)||cc(d,`${l}-flow__edge`)))return!0;if(!r&&!f&&!i&&!a&&!n||o||u&&!m||cc(d,s)&&m||cc(d,c)&&(!m||i&&m&&!e)||!n&&d.ctrlKey&&m)return!1;if(!n&&d.type===`touchstart`&&d.touches?.length>1)return d.preventDefault(),!1;if(!f&&!i&&!p&&m||!r&&(d.type===`mousedown`||d.type===`touchstart`)||Array.isArray(r)&&!r.includes(d.button)&&d.type===`mousedown`)return!1;let h=Array.isArray(r)&&r.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||m)&&h}}function yc({domNode:e,minZoom:t,maxZoom:n,translateExtent:r,viewport:i,onPanZoom:a,onPanZoomStart:o,onPanZoomEnd:s,onDraggingChange:c}){let l={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},u=e.getBoundingClientRect(),d=[[0,0],[u.width,u.height]];(typeof ResizeObserver<`u`?new ResizeObserver(e=>{let t=e[0];t&&(d=[[0,0],[t.contentRect.width,t.contentRect.height]])}):null)?.observe(e);let f=Wa().extent(()=>d).scaleExtent([t,n]).translateExtent(r),p=pn(e).call(f);y({x:i.x,y:i.y,zoom:go(i.zoom,t,n)},[[0,0],[u.width,u.height]],r);let m=p.on(`wheel.zoom`),h=p.on(`dblclick.zoom`);f.wheelDelta(fc);async function g(e,t){return p?new Promise(n=>{f?.interpolate(t?.interpolate===`linear`?Ar:Wr).transform(dc(p,t?.duration,t?.ease,()=>n(!0)),e)}):!1}function _({noWheelClassName:e,noPanClassName:t,onPaneContextMenu:n,userSelectionActive:r,panOnScroll:i,panOnDrag:u,panOnScrollMode:d,panOnScrollSpeed:g,preventScrolling:_,zoomOnPinch:y,zoomOnScroll:b,zoomOnDoubleClick:x,zoomActivationKeyPressed:S,lib:C,onTransformChange:w,connectionInProgress:T,paneClickDistance:E,selectionOnDrag:D}){r&&!l.isZoomingOrPanning&&v();let O=i&&!S&&!r;f.clickDistance(D?1/0:!Ao(E)||E<0?0:E);let k=O?pc({zoomPanValues:l,noWheelClassName:e,d3Selection:p,d3Zoom:f,panOnScrollMode:d,panOnScrollSpeed:g,zoomOnPinch:y,onPanZoomStart:o,onPanZoom:a,onPanZoomEnd:s}):mc({noWheelClassName:e,preventScrolling:_,d3ZoomHandler:m});p.on(`wheel.zoom`,k,{passive:!1});let A=hc({zoomPanValues:l,onDraggingChange:c,onPanZoomStart:o});f.on(`start`,A);let j=gc({zoomPanValues:l,panOnDrag:u,onPaneContextMenu:!!n,onPanZoom:a,onTransformChange:w});f.on(`zoom`,j);let M=_c({zoomPanValues:l,panOnDrag:u,panOnScroll:i,onPaneContextMenu:n,onPanZoomEnd:s,onDraggingChange:c});f.on(`end`,M);let N=vc({zoomActivationKeyPressed:S,panOnDrag:u,zoomOnScroll:b,panOnScroll:i,zoomOnDoubleClick:x,zoomOnPinch:y,userSelectionActive:r,noPanClassName:t,noWheelClassName:e,lib:C,connectionInProgress:T});f.filter(N),x?p.on(`dblclick.zoom`,h):p.on(`dblclick.zoom`,null)}function v(){f.on(`zoom`,null)}async function y(e,t,n){let r=sc(e),i=f?.constrain()(r,t,n);return i&&await g(i),i}async function b(e,t){let n=sc(e);return await g(n,t),n}function x(e){if(p){let t=sc(e),n=p.property(`__zoom`);(n.k!==e.zoom||n.x!==e.x||n.y!==e.y)&&f?.transform(p,t,null,{sync:!0})}}function S(){let e=p?Fa(p.node()):{x:0,y:0,k:1};return{x:e.x,y:e.y,zoom:e.k}}async function C(e,t){return p?new Promise(n=>{f?.interpolate(t?.interpolate===`linear`?Ar:Wr).scaleTo(dc(p,t?.duration,t?.ease,()=>n(!0)),e)}):!1}async function w(e,t){return p?new Promise(n=>{f?.interpolate(t?.interpolate===`linear`?Ar:Wr).scaleBy(dc(p,t?.duration,t?.ease,()=>n(!0)),e)}):!1}function T(e){f?.scaleExtent(e)}function E(e){f?.translateExtent(e)}function D(e){let t=!Ao(e)||e<0?0:e;f?.clickDistance(t)}return{update:_,destroy:v,setViewport:b,setViewportConstrained:y,getViewport:S,scaleTo:C,scaleBy:w,setScaleExtent:T,setTranslateExtent:E,syncViewport:x,setClickDistance:D}}var bc;(function(e){e.Line=`line`,e.Handle=`handle`})(bc||={});var xc=[`top-left`,`top-right`,`bottom-left`,`bottom-right`],Sc=[`top`,`right`,`bottom`,`left`];function Cc({width:e,prevWidth:t,height:n,prevHeight:r,affectsX:i,affectsY:a}){let o=e-t,s=n-r,c=[o>0?1:o<0?-1:0,s>0?1:s<0?-1:0];return o&&i&&(c[0]*=-1),s&&a&&(c[1]*=-1),c}function wc(e){return{isHorizontal:e.includes(`right`)||e.includes(`left`),isVertical:e.includes(`bottom`)||e.includes(`top`),affectsX:e.includes(`left`),affectsY:e.includes(`top`)}}function Tc(e,t){return Math.max(0,t-e)}function Ec(e,t){return Math.max(0,e-t)}function Dc(e,t,n){return Math.max(0,t-e,e-n)}function Oc(e,t){return e?!t:t}function kc(e,t,n,r,i,a,o,s){let{affectsX:c,affectsY:l}=t,{isHorizontal:u,isVertical:d}=t,f=u&&d,{xSnapped:p,ySnapped:m}=n,{minWidth:h,maxWidth:g,minHeight:_,maxHeight:v}=r,{x:y,y:b,width:x,height:S,aspectRatio:C}=e,w=Math.floor(u?p-e.pointerX:0),T=Math.floor(d?m-e.pointerY:0),E=x+(c?-w:w),D=S+(l?-T:T),O=-a[0]*x,k=-a[1]*S,A=Dc(E,h,g),j=Dc(D,_,v);if(o){let e=0,t=0;c&&w<0?e=Tc(y+w+O,o[0][0]):!c&&w>0&&(e=Ec(y+E+O,o[1][0])),l&&T<0?t=Tc(b+T+k,o[0][1]):!l&&T>0&&(t=Ec(b+D+k,o[1][1])),A=Math.max(A,e),j=Math.max(j,t)}if(s){let e=0,t=0;c&&w>0?e=Ec(y+w,s[0][0]):!c&&w<0&&(e=Tc(y+E,s[1][0])),l&&T>0?t=Ec(b+T,s[0][1]):!l&&T<0&&(t=Tc(b+D,s[1][1])),A=Math.max(A,e),j=Math.max(j,t)}if(i){if(u){let e=Dc(E/C,_,v)*C;if(A=Math.max(A,e),o){let e=0;e=!c&&!l||c&&!l&&f?Ec(b+k+E/C,o[1][1])*C:Tc(b+k+(c?w:-w)/C,o[0][1])*C,A=Math.max(A,e)}if(s){let e=0;e=!c&&!l||c&&!l&&f?Tc(b+E/C,s[1][1])*C:Ec(b+(c?w:-w)/C,s[0][1])*C,A=Math.max(A,e)}}if(d){let e=Dc(D*C,h,g)/C;if(j=Math.max(j,e),o){let e=0;e=!c&&!l||l&&!c&&f?Ec(y+D*C+O,o[1][0])/C:Tc(y+(l?T:-T)*C+O,o[0][0])/C,j=Math.max(j,e)}if(s){let e=0;e=!c&&!l||l&&!c&&f?Tc(y+D*C,s[1][0])/C:Ec(y+(l?T:-T)*C,s[0][0])/C,j=Math.max(j,e)}}}T+=T<0?j:-j,w+=w<0?A:-A,i&&(f?E>D*C?T=(Oc(c,l)?-w:w)/C:w=(Oc(c,l)?-T:T)*C:u?(T=w/C,l=c):(w=T*C,c=l));let M=c?y+w:y,N=l?b+T:b;return{width:x+(c?-w:w),height:S+(l?-T:T),x:a[0]*w*(c?-1:1)+M,y:a[1]*T*(l?-1:1)+N}}var Ac={width:0,height:0,x:0,y:0},jc={...Ac,pointerX:0,pointerY:0,aspectRatio:1};function Mc(e,t,n){let r=t.position.x+e.position.x,i=t.position.y+e.position.y,a=e.measured.width??0,o=e.measured.height??0,s=n[0]*a,c=n[1]*o;return[[r-s,i-c],[r+a-s,i+o-c]]}function Nc({domNode:e,nodeId:t,getStoreItems:n,onChange:r,onEnd:i}){let a=pn(e),o={controlDirection:wc(`bottom-right`),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:e,boundaries:s,keepAspectRatio:c,resizeDirection:l,onResizeStart:u,onResize:d,onResizeEnd:f,shouldResize:p}){let m={...Ac},h={...jc};o={boundaries:s,resizeDirection:l,keepAspectRatio:c,controlDirection:wc(e)};let g,_=null,v=[],y,b,x,S=!1,C=On().on(`start`,e=>{let{nodeLookup:r,transform:i,snapGrid:a,snapToGrid:o,nodeOrigin:s,paneDomNode:c}=n();if(g=r.get(t),!g)return;_=c?.getBoundingClientRect()??null;let{xSnapped:l,ySnapped:d}=qo(e.sourceEvent,{transform:i,snapGrid:a,snapToGrid:o,containerBounds:_});m={width:g.measured.width??0,height:g.measured.height??0,x:g.position.x??0,y:g.position.y??0},h={...m,pointerX:l,pointerY:d,aspectRatio:m.width/m.height},y=void 0,b=Bo(g.extent)?g.extent:void 0,g.parentId&&(g.extent===`parent`||g.expandParent)&&(y=r.get(g.parentId)),y&&g.extent===`parent`&&(b=[[0,0],[y.measured.width,y.measured.height]]),v=[],x=void 0;for(let[e,n]of r)if(n.parentId===t&&(v.push({id:e,position:{...n.position},extent:n.extent}),n.extent===`parent`||n.expandParent)){let e=Mc(n,g,n.origin??s);x=x?[[Math.min(e[0][0],x[0][0]),Math.min(e[0][1],x[0][1])],[Math.max(e[1][0],x[1][0]),Math.max(e[1][1],x[1][1])]]:e}u?.(e,{...m})}).on(`drag`,e=>{let{transform:t,snapGrid:i,snapToGrid:a,nodeOrigin:s}=n(),c=qo(e.sourceEvent,{transform:t,snapGrid:i,snapToGrid:a,containerBounds:_}),l=[];if(!g)return;let{x:u,y:f,width:C,height:w}=m,T={},E=g.origin??s,{width:D,height:O,x:k,y:A}=kc(h,o.controlDirection,c,o.boundaries,o.keepAspectRatio,E,b,x),j=D!==C,M=O!==w,N=k!==u&&j,P=A!==f&&M;if(!N&&!P&&!j&&!M)return;if((N||P||E[0]===1||E[1]===1)&&(T.x=N?k:m.x,T.y=P?A:m.y,m.x=T.x,m.y=T.y,v.length>0)){let e=k-u,t=A-f;for(let n of v)n.position={x:n.position.x-e+E[0]*(D-C),y:n.position.y-t+E[1]*(O-w)},l.push(n)}if((j||M)&&(T.width=j&&(!o.resizeDirection||o.resizeDirection===`horizontal`)?D:m.width,T.height=M&&(!o.resizeDirection||o.resizeDirection===`vertical`)?O:m.height,m.width=T.width,m.height=T.height),y&&g.expandParent){let e=E[0]*(T.width??0);T.x&&T.x<e&&(m.x=e,h.x-=T.x-e);let t=E[1]*(T.height??0);T.y&&T.y<t&&(m.y=t,h.y-=T.y-t)}let F=Cc({width:m.width,prevWidth:C,height:m.height,prevHeight:w,affectsX:o.controlDirection.affectsX,affectsY:o.controlDirection.affectsY}),I={...m,direction:F};p?.(e,I)!==!1&&(S=!0,d?.(e,I),r(T,l))}).on(`end`,e=>{S&&=(f?.(e,{...m}),i?.({...m}),!1)});a.call(C)}function c(){a.on(`.drag`,null)}return{update:s,destroy:c}}var Pc=t((e=>{var t=l();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useState,a=t.useEffect,o=t.useLayoutEffect,s=t.useDebugValue;function c(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),c=r[0].inst,l=r[1];return o(function(){c.value=n,c.getSnapshot=t,u(c)&&l({inst:c})},[e,n,t]),a(function(){return u(c)&&l({inst:c}),e(function(){u(c)&&l({inst:c})})},[e]),s(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:c;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),Fc=t(((e,t)=>{t.exports=Pc()})),Ic=t((e=>{var t=l(),n=Fc();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=n.useSyncExternalStore,o=t.useRef,s=t.useEffect,c=t.useMemo,u=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,l){var d=o(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=c(function(){function e(e){if(!a){if(a=!0,o=e,e=r(e),l!==void 0&&f.hasValue){var t=f.value;if(l(t,e))return s=t}return s=e}if(t=s,i(o,e))return t;var n=r(e);return l!==void 0&&l(t,n)?(o=e,t):(o=e,s=n)}var a=!1,o,s,c=n===void 0?null:n;return[function(){return e(t())},c===null?void 0:function(){return e(c())}]},[t,n,r,l]);var p=a(e,d[0],d[1]);return s(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),Lc=e(t(((e,t)=>{t.exports=Ic()}))(),1),Rc=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{n.clear()}},o=t=e(r,i,a);return a},zc=e=>e?Rc(e):Rc,{useDebugValue:Bc}=G.default,{useSyncExternalStoreWithSelector:Vc}=Lc.default,Hc=e=>e;function Uc(e,t=Hc,n){let r=Vc(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Bc(r),r}var Wc=(e,t)=>{let n=zc(e),r=(e,r=t)=>Uc(n,e,r);return Object.assign(r,n),r},Gc=(e,t)=>e?Wc(e,t):Wc;function Z(e,t){if(Object.is(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[n,r]of e)if(!Object.is(r,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||!Object.is(e[r],t[r]))return!1;return!0}ie();var Kc=(0,G.createContext)(null),qc=Kc.Provider,Jc=Ga.error001(`react`);function Q(e,t){let n=(0,G.useContext)(Kc);if(n===null)throw Error(Jc);return Uc(n,e,t)}function $(){let e=(0,G.useContext)(Kc);if(e===null)throw Error(Jc);return(0,G.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var Yc={display:`none`},Xc={position:`absolute`,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0px, 0px, 0px, 0px)`,clipPath:`inset(100%)`},Zc=`react-flow__node-desc`,Qc=`react-flow__edge-desc`,$c=`react-flow__aria-live`,el=e=>e.ariaLiveMessage,tl=e=>e.ariaLabelConfig;function nl({rfId:e}){let t=Q(el);return(0,K.jsx)(`div`,{id:`${$c}-${e}`,"aria-live":`assertive`,"aria-atomic":`true`,style:Xc,children:t})}function rl({rfId:e,disableKeyboardA11y:t}){let n=Q(tl);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`div`,{id:`${Zc}-${e}`,style:Yc,children:t?n[`node.a11yDescription.default`]:n[`node.a11yDescription.keyboardDisabled`]}),(0,K.jsx)(`div`,{id:`${Qc}-${e}`,style:Yc,children:n[`edge.a11yDescription.default`]}),!t&&(0,K.jsx)(nl,{rfId:e})]})}var il=(0,G.forwardRef)(({position:e=`top-left`,children:t,className:n,style:r,...i},a)=>(0,K.jsx)(`div`,{className:q([`react-flow__panel`,n,...`${e}`.split(`-`)]),style:r,ref:a,...i,children:t}));il.displayName=`Panel`;var al=`https://reactflow.dev?utm_source=attribution`;function ol({proOptions:e,position:t=`bottom-right`}){return e?.hideAttribution?null:(0,K.jsx)(il,{position:t,className:`react-flow__attribution`,"data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${al}`,children:(0,K.jsx)(`a`,{href:al,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`React Flow attribution`,children:`React Flow`})})}var sl=e=>{let t=[],n=[];for(let[,n]of e.nodeLookup)n.selected&&t.push(n.internals.userNode);for(let[,t]of e.edgeLookup)t.selected&&n.push(t);return{selectedNodes:t,selectedEdges:n}},cl=e=>e.id;function ll(e,t){return Z(e.selectedNodes.map(cl),t.selectedNodes.map(cl))&&Z(e.selectedEdges.map(cl),t.selectedEdges.map(cl))}function ul({onSelectionChange:e}){let t=$(),{selectedNodes:n,selectedEdges:r}=Q(sl,ll);return(0,G.useEffect)(()=>{let i={nodes:n,edges:r};e?.(i),t.getState().onSelectionChangeHandlers.forEach(e=>e(i))},[n,r,e]),null}var dl=e=>!!e.onSelectionChangeHandlers;function fl({onSelectionChange:e}){let t=Q(dl);return e||t?(0,K.jsx)(ul,{onSelectionChange:e}):null}var pl=[0,0],ml={x:0,y:0,zoom:1},hl=[...`nodes.edges.defaultNodes.defaultEdges.onConnect.onConnectStart.onConnectEnd.onClickConnectStart.onClickConnectEnd.nodesDraggable.autoPanOnNodeFocus.nodesConnectable.nodesFocusable.edgesFocusable.edgesReconnectable.elevateNodesOnSelect.elevateEdgesOnSelect.minZoom.maxZoom.nodeExtent.onNodesChange.onEdgesChange.elementsSelectable.connectionMode.snapGrid.snapToGrid.translateExtent.connectOnClick.defaultEdgeOptions.fitView.fitViewOptions.onNodesDelete.onEdgesDelete.onDelete.onNodeDrag.onNodeDragStart.onNodeDragStop.onSelectionDrag.onSelectionDragStart.onSelectionDragStop.onMoveStart.onMove.onMoveEnd.noPanClassName.nodeOrigin.autoPanOnConnect.autoPanOnNodeDrag.onError.connectionRadius.isValidConnection.selectNodesOnDrag.nodeDragThreshold.connectionDragThreshold.onBeforeDelete.debug.autoPanSpeed.ariaLabelConfig.zIndexMode`.split(`.`),`rfId`],gl=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),_l={translateExtent:Ka,nodeOrigin:pl,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:`nopan`,rfId:`1`};function vl(e){let{setNodes:t,setEdges:n,setMinZoom:r,setMaxZoom:i,setTranslateExtent:a,setNodeExtent:o,reset:s,setDefaultNodesAndEdges:c}=Q(gl,Z),l=$();(0,G.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{u.current=_l,s()}),[]);let u=(0,G.useRef)(_l);return(0,G.useEffect)(()=>{for(let s of hl){let c=e[s];c!==u.current[s]&&e[s]!==void 0&&(s===`nodes`?t(c):s===`edges`?n(c):s===`minZoom`?r(c):s===`maxZoom`?i(c):s===`translateExtent`?a(c):s===`nodeExtent`?o(c):s===`ariaLabelConfig`?l.setState({ariaLabelConfig:Ko(c)}):s===`fitView`?l.setState({fitViewQueued:c}):s===`fitViewOptions`?l.setState({fitViewOptions:c}):l.setState({[s]:c}))}u.current=e},hl.map(t=>e[t])),null}function yl(){return typeof window>`u`||!window.matchMedia?null:window.matchMedia(`(prefers-color-scheme: dark)`)}function bl(e){let[t,n]=(0,G.useState)(e===`system`?null:e);return(0,G.useEffect)(()=>{if(e!==`system`){n(e);return}let t=yl(),r=()=>n(t?.matches?`dark`:`light`);return r(),t?.addEventListener(`change`,r),()=>{t?.removeEventListener(`change`,r)}},[e]),t===null?yl()?.matches?`dark`:`light`:t}var xl=typeof document<`u`?document:null;function Sl(e=null,t={target:xl,actInsideInputWithModifier:!0}){let[n,r]=(0,G.useState)(!1),i=(0,G.useRef)(!1),a=(0,G.useRef)(new Set([])),[o,s]=(0,G.useMemo)(()=>{if(e!==null){let t=(Array.isArray(e)?e:[e]).filter(e=>typeof e==`string`).map(e=>e.replace(`+`,`
`).replace(`

`,`
+`).split(`
`));return[t,t.reduce((e,t)=>e.concat(...t),[])]}return[[],[]]},[e]);return(0,G.useEffect)(()=>{let n=t?.target??xl,c=t?.actInsideInputWithModifier??!0;if(e!==null){let e=e=>{if(i.current=e.ctrlKey||e.metaKey||e.shiftKey||e.altKey,(!i.current||i.current&&!c)&&Zo(e))return!1;let n=wl(e.code,s);if(a.current.add(e[n]),Cl(o,a.current,!1)){let n=e.composedPath?.()?.[0]||e.target,a=n?.nodeName===`BUTTON`||n?.nodeName===`A`;t.preventDefault!==!1&&(i.current||!a)&&e.preventDefault(),r(!0)}},l=e=>{let t=wl(e.code,s);Cl(o,a.current,!0)?(r(!1),a.current.clear()):a.current.delete(e[t]),e.key===`Meta`&&a.current.clear(),i.current=!1},u=()=>{a.current.clear(),r(!1)};return n?.addEventListener(`keydown`,e),n?.addEventListener(`keyup`,l),window.addEventListener(`blur`,u),window.addEventListener(`contextmenu`,u),()=>{n?.removeEventListener(`keydown`,e),n?.removeEventListener(`keyup`,l),window.removeEventListener(`blur`,u),window.removeEventListener(`contextmenu`,u)}}},[e,r]),n}function Cl(e,t,n){return e.filter(e=>n||e.length===t.size).some(e=>e.every(e=>t.has(e)))}function wl(e,t){return t.includes(e)?`code`:`key`}var Tl=()=>{let e=$();return(0,G.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:r}=e.getState();return r?r.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[r,i,a],panZoom:o}=e.getState();return o?(await o.setViewport({x:t.x??r,y:t.y??i,zoom:t.zoom??a},n),!0):!1},getViewport:()=>{let[t,n,r]=e.getState().transform;return{x:t,y:n,zoom:r}},setCenter:async(t,n,r)=>e.getState().setCenter(t,n,r),fitBounds:async(t,n)=>{let{width:r,height:i,minZoom:a,maxZoom:o,panZoom:s}=e.getState(),c=Ro(t,r,i,a,o,n?.padding??.1);return s?(await s.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:r,snapGrid:i,snapToGrid:a,domNode:o}=e.getState();if(!o)return t;let{x:s,y:c}=o.getBoundingClientRect(),l={x:t.x-s,y:t.y-c},u=n.snapGrid??i;return No(l,r,n.snapToGrid??a,u)},flowToScreenPosition:t=>{let{transform:n,domNode:r}=e.getState();if(!r)return t;let{x:i,y:a}=r.getBoundingClientRect(),o=Po(t,n);return{x:o.x+i,y:o.y+a}}}),[])};function El(e,t){let n=[],r=new Map,i=[];for(let t of e)if(t.type===`add`){i.push(t);continue}else if(t.type===`remove`||t.type===`replace`)r.set(t.id,[t]);else{let e=r.get(t.id);e?e.push(t):r.set(t.id,[t])}for(let e of t){let t=r.get(e.id);if(!t){n.push(e);continue}if(t[0].type===`remove`)continue;if(t[0].type===`replace`){n.push({...t[0].item});continue}let i={...e};for(let e of t)Dl(e,i);n.push(i)}return i.length&&i.forEach(e=>{e.index===void 0?n.push({...e.item}):n.splice(e.index,0,{...e.item})}),n}function Dl(e,t){switch(e.type){case`select`:t.selected=e.selected;break;case`position`:e.position!==void 0&&(t.position=e.position),e.dragging!==void 0&&(t.dragging=e.dragging);break;case`dimensions`:e.dimensions!==void 0&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes===`width`)&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes===`height`)&&(t.height=e.dimensions.height))),typeof e.resizing==`boolean`&&(t.resizing=e.resizing);break}}function Ol(e,t){return El(e,t)}function kl(e,t){return El(e,t)}function Al(e,t){return{id:e,type:`select`,selected:t}}function jl(e,t=new Set,n=!1){let r=[];for(let[i,a]of e){let e=t.has(i);!(a.selected===void 0&&!e)&&a.selected!==e&&(n&&(a.selected=e),r.push(Al(a.id,e)))}return r}function Ml({items:e=[],lookup:t}){let n=[],r=new Map(e.map(e=>[e.id,e]));for(let[r,i]of e.entries()){let e=t.get(i.id),a=e?.internals?.userNode??e;a!==void 0&&a!==i&&n.push({id:i.id,item:i,type:`replace`}),a===void 0&&n.push({item:i,type:`add`,index:r})}for(let[e]of t)r.get(e)===void 0&&n.push({id:e,type:`remove`});return n}function Nl(e){return{id:e.id,type:`remove`}}var Pl=jo(`React Flow`,`https://reactflow.dev/`);function Fl(e,t,n={}){return us(e,t,{...n,onError:n.onError??Pl})}var Il=e=>io(e),Ll=e=>ro(e);function Rl(e){return(0,G.forwardRef)(e)}var zl=typeof window<`u`?G.useLayoutEffect:G.useEffect;function Bl(e){let[t,n]=(0,G.useState)(BigInt(0)),[r]=(0,G.useState)(()=>Vl(()=>n(e=>e+BigInt(1))));return zl(()=>{let t=r.get();t.length&&(e(t),r.reset())},[t]),r}function Vl(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var Hl=(0,G.createContext)(null);function Ul({children:e}){let t=$(),n=Bl((0,G.useCallback)(e=>{let{nodes:n=[],setNodes:r,hasDefaultNodes:i,onNodesChange:a,nodeLookup:o,fitViewQueued:s,onNodesChangeMiddlewareMap:c}=t.getState(),l=n;for(let t of e)l=typeof t==`function`?t(l):t;let u=Ml({items:l,lookup:o});for(let e of c.values())u=e(u);i&&r(l),u.length>0?a?.(u):s&&window.requestAnimationFrame(()=>{let{fitViewQueued:e,nodes:n,setNodes:r}=t.getState();e&&r(n)})},[])),r=Bl((0,G.useCallback)(e=>{let{edges:n=[],setEdges:r,hasDefaultEdges:i,onEdgesChange:a,edgeLookup:o}=t.getState(),s=n;for(let t of e)s=typeof t==`function`?t(s):t;i?r(s):a&&a(Ml({items:s,lookup:o}))},[])),i=(0,G.useMemo)(()=>({nodeQueue:n,edgeQueue:r}),[]);return(0,K.jsx)(Hl.Provider,{value:i,children:e})}function Wl(){let e=(0,G.useContext)(Hl);if(!e)throw Error(`useBatchContext must be used within a BatchProvider`);return e}var Gl=e=>!!e.panZoom;function Kl(){let e=Tl(),t=$(),n=Wl(),r=Q(Gl),i=(0,G.useMemo)(()=>{let e=e=>t.getState().nodeLookup.get(e),r=e=>{n.nodeQueue.push(e)},i=e=>{n.edgeQueue.push(e)},a=e=>{let{nodeLookup:n,nodeOrigin:r}=t.getState(),i=Il(e)?e:n.get(e.id),a=i.parentId?Uo(i.position,i.measured,i.parentId,n,r):i.position;return wo({...i,position:a,width:i.measured?.width??i.width,height:i.measured?.height??i.height})},o=(e,t,n={replace:!1})=>{r(r=>r.map(r=>{if(r.id===e){let e=typeof t==`function`?t(r):t;return n.replace&&Il(e)?e:{...r,...e}}return r}))},s=(e,t,n={replace:!1})=>{i(r=>r.map(r=>{if(r.id===e){let e=typeof t==`function`?t(r):t;return n.replace&&Ll(e)?e:{...r,...e}}return r}))};return{getNodes:()=>t.getState().nodes.map(e=>({...e})),getNode:t=>e(t)?.internals.userNode,getInternalNode:e,getEdges:()=>{let{edges:e=[]}=t.getState();return e.map(e=>({...e}))},getEdge:e=>t.getState().edgeLookup.get(e),setNodes:r,setEdges:i,addNodes:e=>{let t=Array.isArray(e)?e:[e];n.nodeQueue.push(e=>[...e,...t])},addEdges:e=>{let t=Array.isArray(e)?e:[e];n.edgeQueue.push(e=>[...e,...t])},toObject:()=>{let{nodes:e=[],edges:n=[],transform:r}=t.getState(),[i,a,o]=r;return{nodes:e.map(e=>({...e})),edges:n.map(e=>({...e})),viewport:{x:i,y:a,zoom:o}}},deleteElements:async({nodes:e=[],edges:n=[]})=>{let{nodes:r,edges:i,onNodesDelete:a,onEdgesDelete:o,triggerNodeChanges:s,triggerEdgeChanges:c,onDelete:l,onBeforeDelete:u}=t.getState(),{nodes:d,edges:f}=await ho({nodesToRemove:e,edgesToRemove:n,nodes:r,edges:i,onBeforeDelete:u}),p=f.length>0,m=d.length>0;if(p){let e=f.map(Nl);o?.(f),c(e)}if(m){let e=d.map(Nl);a?.(d),s(e)}return(m||p)&&l?.({nodes:d,edges:f}),{deletedNodes:d,deletedEdges:f}},getIntersectingNodes:(e,n=!0,r)=>{let i=ko(e),o=i?e:a(e),s=r!==void 0;return o?(r||t.getState().nodes).filter(r=>{let a=t.getState().nodeLookup.get(r.id);if(a&&!i&&(r.id===e.id||!a.internals.positionAbsolute))return!1;let c=wo(s?r:a),l=Oo(c,o);return n&&l>0||l>=c.width*c.height||l>=o.width*o.height}):[]},isNodeIntersecting:(e,t,n=!0)=>{let r=ko(e)?e:a(e);if(!r)return!1;let i=Oo(r,t);return n&&i>0||i>=t.width*t.height||i>=r.width*r.height},updateNode:o,updateNodeData:(e,t,n={replace:!1})=>{o(e,e=>{let r=typeof t==`function`?t(e):t;return n.replace?{...e,data:r}:{...e,data:{...e.data,...r}}},n)},updateEdge:s,updateEdgeData:(e,t,n={replace:!1})=>{s(e,e=>{let r=typeof t==`function`?t(e):t;return n.replace?{...e,data:r}:{...e,data:{...e.data,...r}}},n)},getNodesBounds:e=>{let{nodeLookup:n,nodeOrigin:r}=t.getState();return so(e,{nodeLookup:n,nodeOrigin:r})},getHandleConnections:({type:e,id:n,nodeId:r})=>Array.from(t.getState().connectionLookup.get(`${r}-${e}${n?`-${n}`:``}`)?.values()??[]),getNodeConnections:({type:e,handleId:n,nodeId:r})=>Array.from(t.getState().connectionLookup.get(`${r}${e?n?`-${e}-${n}`:`-${e}`:``}`)?.values()??[]),fitView:async e=>{let r=t.getState().fitViewResolver??Go();return t.setState({fitViewQueued:!0,fitViewOptions:e,fitViewResolver:r}),n.nodeQueue.push(e=>[...e]),r.promise}}},[]);return(0,G.useMemo)(()=>({...i,...e,viewportInitialized:r}),[r])}var ql=e=>e.selected,Jl=typeof window<`u`?window:void 0;function Yl({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=$(),{deleteElements:r}=Kl(),i=Sl(e,{actInsideInputWithModifier:!1}),a=Sl(t,{target:Jl});(0,G.useEffect)(()=>{if(i){let{edges:e,nodes:t}=n.getState();r({nodes:t.filter(ql),edges:e.filter(ql)}),n.setState({nodesSelectionActive:!1})}},[i]),(0,G.useEffect)(()=>{n.setState({multiSelectionActive:a})},[a])}function Xl(e){let t=$();(0,G.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let n=Jo(e.current);(n.height===0||n.width===0)&&t.getState().onError?.(`004`,Ga.error004()),t.setState({width:n.width||500,height:n.height||500})};if(e.current){n(),window.addEventListener(`resize`,n);let t=new ResizeObserver(()=>n());return t.observe(e.current),()=>{window.removeEventListener(`resize`,n),t&&e.current&&t.unobserve(e.current)}}},[])}var Zl={position:`absolute`,width:`100%`,height:`100%`,top:0,left:0},Ql=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function $l({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:r=!1,panOnScrollSpeed:i=.5,panOnScrollMode:a=Xa.Free,zoomOnDoubleClick:o=!0,panOnDrag:s=!0,defaultViewport:c,translateExtent:l,minZoom:u,maxZoom:d,zoomActivationKeyCode:f,preventScrolling:p=!0,children:m,noWheelClassName:h,noPanClassName:g,onViewportChange:_,isControlledViewport:v,paneClickDistance:y,selectionOnDrag:b}){let x=$(),S=(0,G.useRef)(null),{userSelectionActive:C,lib:w,connectionInProgress:T}=Q(Ql,Z),E=Sl(f),D=(0,G.useRef)();Xl(S);let O=(0,G.useCallback)(e=>{_?.({x:e[0],y:e[1],zoom:e[2]}),v||x.setState({transform:e})},[_,v]);return(0,G.useEffect)(()=>{if(S.current){D.current=yc({domNode:S.current,minZoom:u,maxZoom:d,translateExtent:l,viewport:c,onDraggingChange:e=>x.setState(t=>t.paneDragging===e?t:{paneDragging:e}),onPanZoomStart:(e,t)=>{let{onViewportChangeStart:n,onMoveStart:r}=x.getState();r?.(e,t),n?.(t)},onPanZoom:(e,t)=>{let{onViewportChange:n,onMove:r}=x.getState();r?.(e,t),n?.(t)},onPanZoomEnd:(e,t)=>{let{onViewportChangeEnd:n,onMoveEnd:r}=x.getState();r?.(e,t),n?.(t)}});let{x:e,y:t,zoom:n}=D.current.getViewport();return x.setState({panZoom:D.current,transform:[e,t,n],domNode:S.current.closest(`.react-flow`)}),()=>{D.current?.destroy()}}},[]),(0,G.useEffect)(()=>{D.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:r,panOnScrollSpeed:i,panOnScrollMode:a,zoomOnDoubleClick:o,panOnDrag:s,zoomActivationKeyPressed:E,preventScrolling:p,noPanClassName:g,userSelectionActive:C,noWheelClassName:h,lib:w,onTransformChange:O,connectionInProgress:T,selectionOnDrag:b,paneClickDistance:y})},[e,t,n,r,i,a,o,s,E,p,g,C,h,w,O,T,b,y]),(0,K.jsx)(`div`,{className:`react-flow__renderer`,ref:S,style:Zl,children:m})}var eu=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function tu(){let{userSelectionActive:e,userSelectionRect:t}=Q(eu,Z);return e&&t?(0,K.jsx)(`div`,{className:`react-flow__selection react-flow__container`,style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var nu=(e,t)=>n=>{n.target===t.current&&e?.(n)},ru=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function iu({isSelecting:e,selectionKeyPressed:t,selectionMode:n=Za.Full,panOnDrag:r,autoPanOnSelection:i,paneClickDistance:a,selectionOnDrag:o,onSelectionStart:s,onSelectionEnd:c,onPaneClick:l,onPaneContextMenu:u,onPaneScroll:d,onPaneMouseEnter:f,onPaneMouseMove:p,onPaneMouseLeave:m,children:h}){let g=(0,G.useRef)(0),_=$(),{userSelectionActive:v,elementsSelectable:y,dragging:b,panBy:x,autoPanSpeed:S}=Q(ru,Z),C=y&&(e||v),w=(0,G.useRef)(null),T=(0,G.useRef)(),E=(0,G.useRef)(new Set),D=(0,G.useRef)(new Set),O=(0,G.useRef)(!1),k=(0,G.useRef)(!1),A=(0,G.useRef)({x:0,y:0}),j=(0,G.useRef)(!1),M=e=>{if(k.current||O.current||_.getState().connection.inProgress){k.current=!1,O.current=!1;return}l?.(e),_.getState().resetSelectedElements(),_.setState({nodesSelectionActive:!1})},N=e=>{if(Array.isArray(r)&&r?.includes(2)){e.preventDefault();return}u?.(e)},P=d?e=>d(e):void 0,F=e=>{k.current&&=(e.stopPropagation(),!1)},I=n=>{let{domNode:r,transform:i}=_.getState();if(T.current=r?.getBoundingClientRect(),!T.current)return;let a=n.target===w.current;if(!a&&n.target.closest(`.nokey`)||!e||!(o&&a||t)||n.button!==0||!n.isPrimary)return;n.target?.setPointerCapture?.(n.pointerId),k.current=!1;let{x:s,y:c}=$o(n.nativeEvent,T.current),l=No({x:s,y:c},i);_.setState({userSelectionRect:{width:0,height:0,startX:l.x,startY:l.y,x:s,y:c}}),a||(n.stopPropagation(),n.preventDefault())};function L(e,t){let{userSelectionRect:r}=_.getState();if(!r)return;let{transform:i,nodeLookup:a,edgeLookup:o,connectionLookup:s,triggerNodeChanges:c,triggerEdgeChanges:l,defaultEdgeOptions:u}=_.getState(),d={x:r.startX,y:r.startY},{x:f,y:p}=Po(d,i),m={startX:d.x,startY:d.y,x:e<f?e:f,y:t<p?t:p,width:Math.abs(e-f),height:Math.abs(t-p)},h=E.current,g=D.current;E.current=new Set(lo(a,m,i,n===Za.Partial,!0).map(e=>e.id)),D.current=new Set;let v=u?.selectable??!0;for(let e of E.current){let t=s.get(e);if(t)for(let{edgeId:e}of t.values()){let t=o.get(e);t&&(t.selectable??v)&&D.current.add(e)}}Wo(h,E.current)||c(jl(a,E.current,!0)),Wo(g,D.current)||l(jl(o,D.current)),_.setState({userSelectionRect:m,userSelectionActive:!0,nodesSelectionActive:!1})}function R(){if(!i||!T.current)return;let[e,t]=bo(A.current,T.current,S);x({x:e,y:t}).then(e=>{if(!k.current||!e){g.current=requestAnimationFrame(R);return}let{x:t,y:n}=A.current;L(t,n),g.current=requestAnimationFrame(R)})}let z=()=>{cancelAnimationFrame(g.current),g.current=0,j.current=!1};return(0,G.useEffect)(()=>()=>z(),[]),(0,K.jsxs)(`div`,{className:q([`react-flow__pane`,{draggable:r===!0||Array.isArray(r)&&r.includes(0),dragging:b,selection:e}]),onClick:C?void 0:nu(M,w),onContextMenu:nu(N,w),onWheel:nu(P,w),onPointerEnter:C?void 0:f,onPointerMove:C?e=>{let{userSelectionRect:n,transform:r,resetSelectedElements:i}=_.getState();if(!T.current||!n)return;let{x:o,y:c}=$o(e.nativeEvent,T.current);A.current={x:o,y:c};let l=Po({x:n.startX,y:n.startY},r);if(!k.current){let n=t?0:a;if(Math.hypot(o-l.x,c-l.y)<=n)return;i(),s?.(e)}k.current=!0,j.current||=(R(),!0),L(o,c)}:p,onPointerUp:e=>{if(!C){e.target===w.current&&_.getState().connection.inProgress&&(O.current=!0);return}e.button===0&&(e.target?.releasePointerCapture?.(e.pointerId),!v&&e.target===w.current&&_.getState().userSelectionRect&&M?.(e),_.setState({userSelectionActive:!1,userSelectionRect:null}),k.current&&(c?.(e),_.setState({nodesSelectionActive:E.current.size>0})),z())},onPointerCancel:C?e=>{e.target?.releasePointerCapture?.(e.pointerId),z()}:void 0,onPointerDownCapture:C?I:void 0,onClickCapture:C?F:void 0,onPointerLeave:m,ref:w,style:Zl,children:[h,(0,K.jsx)(tu,{})]})}function au({id:e,store:t,unselect:n=!1,nodeRef:r}){let{addSelectedNodes:i,unselectNodesAndEdges:a,multiSelectionActive:o,nodeLookup:s,onError:c}=t.getState(),l=s.get(e);if(!l){c?.(`012`,Ga.error012(e));return}t.setState({nodesSelectionActive:!1}),l.selected?(n||l.selected&&o)&&(a({nodes:[l],edges:[]}),requestAnimationFrame(()=>r?.current?.blur())):i([e])}function ou({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:r,nodeId:i,isSelectable:a,nodeClickDistance:o}){let s=$(),[c,l]=(0,G.useState)(!1),u=(0,G.useRef)();return(0,G.useEffect)(()=>{if(!t)return u.current=Js({getStoreItems:()=>s.getState(),onNodeMouseDown:t=>{au({id:t,store:s,nodeRef:e})},onDragStart:()=>{l(!0)},onDragStop:()=>{l(!1)}}),()=>{u.current?.destroy(),u.current=void 0}},[t,s,e]),(0,G.useEffect)(()=>{t||!e.current||!u.current||u.current.update({noDragClassName:n,handleSelector:r,domNode:e.current,isSelectable:a,nodeId:i,nodeClickDistance:o})},[n,r,t,a,e,i,o]),c}var su=e=>t=>t.selected&&(t.draggable||e&&t.draggable===void 0);function cu(){let e=$();return(0,G.useCallback)(t=>{let{nodeExtent:n,snapToGrid:r,snapGrid:i,nodesDraggable:a,onError:o,updateNodePositions:s,nodeLookup:c,nodeOrigin:l}=e.getState(),u=new Map,d=su(a),f=r?i[0]:5,p=r?i[1]:5,m=t.direction.x*f*t.factor,h=t.direction.y*p*t.factor;for(let[,e]of c){if(!d(e))continue;let t={x:e.internals.positionAbsolute.x+m,y:e.internals.positionAbsolute.y+h};r&&(t=Mo(t,i));let{position:a,positionAbsolute:s}=mo({nodeId:e.id,nextPosition:t,nodeLookup:c,nodeExtent:n,nodeOrigin:l,onError:o});e.position=a,e.internals.positionAbsolute=s,u.set(e.id,e)}s(u)},[])}var lu=(0,G.createContext)(null),uu=lu.Provider;lu.Consumer;var du=()=>(0,G.useContext)(lu),fu=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),pu=(0,G.createContext)(null);function mu({children:e}){let t=Q(fu,Z);return(0,K.jsx)(pu.Provider,{value:t,children:e})}function hu(){let e=(0,G.useContext)(pu);if(!e)throw Error(`useHandleConfig must be used within a HandleConfigProvider`);return e}var gu={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},_u=(e,t,n)=>r=>{let{connectionClickStartHandle:i,connectionMode:a,connection:o}=r,{fromHandle:s,toHandle:c,isValid:l}=o;if(!s&&!i)return gu;let u=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===n,connectingTo:u,clickConnecting:i?.nodeId===e&&i?.id===t&&i?.type===n,isPossibleEndHandle:a===Ya.Strict?s?.type!==n:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!i,valid:u&&l}};function vu({type:e=`source`,position:t=X.Top,isValidConnection:n,isConnectable:r=!0,isConnectableStart:i=!0,isConnectableEnd:a=!0,id:o,onConnect:s,children:c,className:l,onMouseDown:u,onTouchStart:d,...f},p){let m=o||null,h=e===`target`,g=$(),_=du(),{connectOnClick:v,noPanClassName:y,rfId:b}=hu(),{connectingFrom:x,connectingTo:S,clickConnecting:C,isPossibleEndHandle:w,connectionInProcess:T,clickConnectionInProcess:E,valid:D}=Q(_u(_,m,e),Z);_||g.getState().onError?.(`010`,Ga.error010());let O=e=>{let{defaultEdgeOptions:t,onConnect:n,hasDefaultEdges:r}=g.getState(),i={...t,...e};if(r){let{edges:e,setEdges:t,onError:n}=g.getState();t(Fl(i,e,{onError:n}))}n?.(i),s?.(i)},k=e=>{if(!_)return;let t=Qo(e.nativeEvent);if(i&&(t&&e.button===0||!t)){let t=g.getState();ic.onPointerDown(e.nativeEvent,{handleDomNode:e.currentTarget,autoPanOnConnect:t.autoPanOnConnect,connectionMode:t.connectionMode,connectionRadius:t.connectionRadius,domNode:t.domNode,nodeLookup:t.nodeLookup,lib:t.lib,isTarget:h,handleId:m,nodeId:_,flowId:t.rfId,panBy:t.panBy,cancelConnection:t.cancelConnection,onConnectStart:t.onConnectStart,onConnectEnd:(...e)=>g.getState().onConnectEnd?.(...e),updateConnection:t.updateConnection,onConnect:O,isValidConnection:n||((...e)=>g.getState().isValidConnection?.(...e)??!0),getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,autoPanSpeed:t.autoPanSpeed,dragThreshold:t.connectionDragThreshold})}t?u?.(e):d?.(e)};return(0,K.jsx)(`div`,{"data-handleid":m,"data-nodeid":_,"data-handlepos":t,"data-id":`${b}-${_}-${m}-${e}`,className:q([`react-flow__handle`,`react-flow__handle-${t}`,`nodrag`,y,l,{source:!h,target:h,connectable:r,connectablestart:i,connectableend:a,clickconnecting:C,connectingfrom:x,connectingto:S,valid:D,connectionindicator:r&&(!T||w)&&(T||E?a:i)}]),onMouseDown:k,onTouchStart:k,onClick:v?t=>{let{onClickConnectStart:r,onClickConnectEnd:a,connectionClickStartHandle:o,connectionMode:s,isValidConnection:c,lib:l,rfId:u,nodeLookup:d,connection:f}=g.getState();if(!_||!o&&!i)return;if(!o){r?.(t.nativeEvent,{nodeId:_,handleId:m,handleType:e}),g.setState({connectionClickStartHandle:{nodeId:_,type:e,id:m}});return}let p=Yo(t.target),h=n||c,{connection:v,isValid:y}=ic.isValid(t.nativeEvent,{handle:{nodeId:_,id:m,type:e},connectionMode:s,fromNodeId:o.nodeId,fromHandleId:o.id||null,fromType:o.type,isValidConnection:h,flowId:u,doc:p,lib:l,nodeLookup:d});y&&v&&O(v);let b=structuredClone(f);delete b.inProgress,b.toPosition=b.toHandle?b.toHandle.position:null,a?.(t,b),g.setState({connectionClickStartHandle:null})}:void 0,ref:p,...f,children:c})}var yu=(0,G.memo)(Rl(vu));function bu({data:e,isConnectable:t,sourcePosition:n=X.Bottom}){return(0,K.jsxs)(K.Fragment,{children:[e?.label,(0,K.jsx)(yu,{type:`source`,position:n,isConnectable:t})]})}function xu({data:e,isConnectable:t,targetPosition:n=X.Top,sourcePosition:r=X.Bottom}){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(yu,{type:`target`,position:n,isConnectable:t}),e?.label,(0,K.jsx)(yu,{type:`source`,position:r,isConnectable:t})]})}function Su(){return null}function Cu({data:e,isConnectable:t,targetPosition:n=X.Top}){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(yu,{type:`target`,position:n,isConnectable:t}),e?.label]})}var wu={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Tu={input:bu,default:xu,output:Cu,group:Su};function Eu(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var Du=e=>{let{width:t,height:n,x:r,y:i}=co(e.nodeLookup,{filter:e=>!!e.selected});return{width:Ao(t)?t:null,height:Ao(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${i}px)`}};function Ou({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let r=$(),{width:i,height:a,transformString:o,userSelectionActive:s}=Q(Du,Z),c=cu(),l=(0,G.useRef)(null);(0,G.useEffect)(()=>{n||l.current?.focus({preventScroll:!0})},[n]);let u=!s&&i!==null&&a!==null;if(ou({nodeRef:l,disabled:!u}),!u)return null;let d=e?t=>{e(t,r.getState().nodes.filter(e=>e.selected))}:void 0;return(0,K.jsx)(`div`,{className:q([`react-flow__nodesselection`,`react-flow__container`,t]),style:{transform:o},children:(0,K.jsx)(`div`,{ref:l,className:`react-flow__nodesselection-rect`,onContextMenu:d,tabIndex:n?void 0:-1,onKeyDown:n?void 0:e=>{Object.prototype.hasOwnProperty.call(wu,e.key)&&(e.preventDefault(),c({direction:wu[e.key],factor:e.shiftKey?4:1}))},style:{width:i,height:a}})})}var ku=typeof window<`u`?window:void 0,Au=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function ju({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:r,onPaneMouseLeave:i,onPaneContextMenu:a,onPaneScroll:o,paneClickDistance:s,deleteKeyCode:c,selectionKeyCode:l,selectionOnDrag:u,selectionMode:d,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:m,panActivationKeyCode:h,zoomActivationKeyCode:g,elementsSelectable:_,zoomOnScroll:v,zoomOnPinch:y,panOnScroll:b,panOnScrollSpeed:x,panOnScrollMode:S,zoomOnDoubleClick:C,panOnDrag:w,autoPanOnSelection:T,defaultViewport:E,translateExtent:D,minZoom:O,maxZoom:k,preventScrolling:A,onSelectionContextMenu:j,noWheelClassName:M,noPanClassName:N,disableKeyboardA11y:P,onViewportChange:F,isControlledViewport:I}){let{nodesSelectionActive:L,userSelectionActive:R}=Q(Au,Z),z=Sl(l,{target:ku}),B=Sl(h,{target:ku}),V=B||w,H=B||b,U=u&&V!==!0,ee=z||R||U;return Yl({deleteKeyCode:c,multiSelectionKeyCode:m}),(0,K.jsx)($l,{onPaneContextMenu:a,elementsSelectable:_,zoomOnScroll:v,zoomOnPinch:y,panOnScroll:H,panOnScrollSpeed:x,panOnScrollMode:S,zoomOnDoubleClick:C,panOnDrag:!z&&V,defaultViewport:E,translateExtent:D,minZoom:O,maxZoom:k,zoomActivationKeyCode:g,preventScrolling:A,noWheelClassName:M,noPanClassName:N,onViewportChange:F,isControlledViewport:I,paneClickDistance:s,selectionOnDrag:U,children:(0,K.jsxs)(iu,{onSelectionStart:f,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:r,onPaneMouseLeave:i,onPaneContextMenu:a,onPaneScroll:o,panOnDrag:V,autoPanOnSelection:T,isSelecting:!!ee,selectionMode:d,selectionKeyPressed:z,paneClickDistance:s,selectionOnDrag:U,children:[e,L&&(0,K.jsx)(Ou,{onSelectionContextMenu:j,noPanClassName:N,disableKeyboardA11y:P})]})})}ju.displayName=`FlowRenderer`;var Mu=(0,G.memo)(ju),Nu=e=>t=>e?lo(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(e=>e.id):Array.from(t.nodeLookup.keys());function Pu(e){return Q((0,G.useCallback)(Nu(e),[e]),Z)}var Fu=e=>e.updateNodeInternals;function Iu(){let e=Q(Fu),[t]=(0,G.useState)(()=>typeof ResizeObserver>`u`?null:new ResizeObserver(t=>{let n=new Map;t.forEach(e=>{let t=e.target.getAttribute(`data-id`);n.set(t,{id:t,nodeElement:e.target,force:!0})}),e(n)}));return(0,G.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function Lu({node:e,nodeType:t,hasDimensions:n,resizeObserver:r}){let i=$(),a=(0,G.useRef)(null),o=(0,G.useRef)(null),s=(0,G.useRef)(e.sourcePosition),c=(0,G.useRef)(e.targetPosition),l=(0,G.useRef)(t),u=n&&!!e.internals.handleBounds;return(0,G.useEffect)(()=>{a.current&&!e.hidden&&(!u||o.current!==a.current)&&(o.current&&r?.unobserve(o.current),r?.observe(a.current),o.current=a.current)},[u,e.hidden]),(0,G.useEffect)(()=>()=>{o.current&&=(r?.unobserve(o.current),null)},[]),(0,G.useEffect)(()=>{if(a.current){let n=l.current!==t,r=s.current!==e.sourcePosition,o=c.current!==e.targetPosition;(n||r||o)&&(l.current=t,s.current=e.sourcePosition,c.current=e.targetPosition,i.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:a.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),a}function Ru({id:e,onClick:t,onMouseEnter:n,onMouseMove:r,onMouseLeave:i,onContextMenu:a,onDoubleClick:o,nodesDraggable:s,elementsSelectable:c,nodesConnectable:l,nodesFocusable:u,resizeObserver:d,noDragClassName:f,noPanClassName:p,disableKeyboardA11y:m,rfId:h,nodeTypes:g,nodeClickDistance:_,onError:v}){let{node:y,internals:b,isParent:x}=Q(t=>{let n=t.nodeLookup.get(e),r=t.parentLookup.has(e);return{node:n,internals:n.internals,isParent:r}},Z),S=y.type||`default`,C=g?.[S]||Tu[S];C===void 0&&(v?.(`003`,Ga.error003(S)),S=`default`,C=g?.default||Tu.default);let w=!!(y.draggable||s&&y.draggable===void 0),T=!!(y.selectable||c&&y.selectable===void 0),E=!!(y.connectable||l&&y.connectable===void 0),D=!!(y.focusable||u&&y.focusable===void 0),O=$(),k=Ho(y),A=Lu({node:y,nodeType:S,hasDimensions:k,resizeObserver:d}),j=ou({nodeRef:A,disabled:y.hidden||!w,noDragClassName:f,handleSelector:y.dragHandle,nodeId:e,isSelectable:T,nodeClickDistance:_}),M=cu();if(y.hidden)return null;let N=Vo(y),P=Eu(y),F=T||w||t||n||r||i,I=n?e=>n(e,{...b.userNode}):void 0,L=r?e=>r(e,{...b.userNode}):void 0,R=i?e=>i(e,{...b.userNode}):void 0,z=a?e=>a(e,{...b.userNode}):void 0,B=o?e=>o(e,{...b.userNode}):void 0,V=n=>{let{selectNodesOnDrag:r,nodeDragThreshold:i}=O.getState();T&&(!r||!w||i>0)&&au({id:e,store:O,nodeRef:A}),t&&t(n,{...b.userNode})},H=t=>{if(!(Zo(t.nativeEvent)||m)){if(qa.includes(t.key)&&T){let n=t.key===`Escape`;au({id:e,store:O,unselect:n,nodeRef:A})}else if(w&&y.selected&&Object.prototype.hasOwnProperty.call(wu,t.key)){t.preventDefault();let{ariaLabelConfig:e}=O.getState();O.setState({ariaLiveMessage:e[`node.a11yDescription.ariaLiveMessage`]({direction:t.key.replace(`Arrow`,``).toLowerCase(),x:~~b.positionAbsolute.x,y:~~b.positionAbsolute.y})}),M({direction:wu[t.key],factor:t.shiftKey?4:1})}}},U=()=>{if(m||!A.current?.matches(`:focus-visible`))return;let{transform:t,width:n,height:r,autoPanOnNodeFocus:i,setCenter:a}=O.getState();i&&(lo(new Map([[e,y]]),{x:0,y:0,width:n,height:r},t,!0).length>0||a(y.position.x+N.width/2,y.position.y+N.height/2,{zoom:t[2]}))};return(0,K.jsx)(`div`,{className:q([`react-flow__node`,`react-flow__node-${S}`,{[p]:w},y.className,{selected:y.selected,selectable:T,parent:x,draggable:w,dragging:j}]),ref:A,style:{zIndex:b.z,transform:`translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,pointerEvents:F?`all`:`none`,visibility:k?`visible`:`hidden`,...y.style,...P},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:I,onMouseMove:L,onMouseLeave:R,onContextMenu:z,onClick:V,onDoubleClick:B,onKeyDown:D?H:void 0,tabIndex:D?0:void 0,onFocus:D?U:void 0,role:y.ariaRole??(D?`group`:void 0),"aria-roledescription":`node`,"aria-describedby":m?void 0:`${Zc}-${h}`,"aria-label":y.ariaLabel,...y.domAttributes,children:(0,K.jsx)(uu,{value:e,children:(0,K.jsx)(C,{id:e,data:y.data,type:S,positionAbsoluteX:b.positionAbsolute.x,positionAbsoluteY:b.positionAbsolute.y,selected:y.selected??!1,selectable:T,draggable:w,deletable:y.deletable??!0,isConnectable:E,sourcePosition:y.sourcePosition,targetPosition:y.targetPosition,dragging:j,dragHandle:y.dragHandle,zIndex:b.z,parentId:y.parentId,...N})})})}var zu=(0,G.memo)(Ru),Bu=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function Vu(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:r,onError:i}=Q(Bu,Z),a=Pu(e.onlyRenderVisibleElements),o=Iu();return(0,K.jsx)(`div`,{className:`react-flow__nodes`,style:Zl,children:a.map(a=>(0,K.jsx)(zu,{id:a,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:o,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:r,nodeClickDistance:e.nodeClickDistance,onError:i},a))})}Vu.displayName=`NodeRenderer`;var Hu=(0,G.memo)(Vu);function Uu(e){return Q((0,G.useCallback)(t=>{if(!e)return t.edges.map(e=>e.id);let n=[];if(t.width&&t.height)for(let e of t.edges){let r=t.nodeLookup.get(e.source),i=t.nodeLookup.get(e.target);r&&i&&ss({sourceNode:r,targetNode:i,width:t.width,height:t.height,transform:t.transform})&&n.push(e.id)}return n},[e]),Z)}var Wu=({color:e=`none`,strokeWidth:t=1})=>(0,K.jsx)(`polyline`,{className:`arrow`,style:{strokeWidth:t,...e&&{stroke:e}},strokeLinecap:`round`,fill:`none`,strokeLinejoin:`round`,points:`-5,-4 0,0 -5,4`}),Gu=({color:e=`none`,strokeWidth:t=1})=>(0,K.jsx)(`polyline`,{className:`arrowclosed`,style:{strokeWidth:t,...e&&{stroke:e,fill:e}},strokeLinecap:`round`,strokeLinejoin:`round`,points:`-5,-4 0,0 -5,4 -5,-4`}),Ku={[eo.Arrow]:Wu,[eo.ArrowClosed]:Gu};function qu(e){let t=$();return(0,G.useMemo)(()=>Object.prototype.hasOwnProperty.call(Ku,e)?Ku[e]:(t.getState().onError?.(`009`,Ga.error009(e)),null),[e])}var Ju=({id:e,type:t,color:n,width:r=12.5,height:i=12.5,markerUnits:a=`strokeWidth`,strokeWidth:o,orient:s=`auto-start-reverse`})=>{let c=qu(t);return c?(0,K.jsx)(`marker`,{className:`react-flow__arrowhead`,id:e,markerWidth:`${r}`,markerHeight:`${i}`,viewBox:`-10 -10 20 20`,markerUnits:a,orient:s,refX:`0`,refY:`0`,children:(0,K.jsx)(c,{color:n,strokeWidth:o})}):null},Yu=({defaultColor:e,rfId:t})=>{let n=Q(e=>e.edges),r=Q(e=>e.defaultEdgeOptions),i=(0,G.useMemo)(()=>ws(n,{id:t,defaultColor:e,defaultMarkerStart:r?.markerStart,defaultMarkerEnd:r?.markerEnd}),[n,r,t,e]);return i.length?(0,K.jsx)(`svg`,{className:`react-flow__marker`,"aria-hidden":`true`,children:(0,K.jsx)(`defs`,{children:i.map(e=>(0,K.jsx)(Ju,{id:e.id,type:e.type,color:e.color,width:e.width,height:e.height,markerUnits:e.markerUnits,strokeWidth:e.strokeWidth,orient:e.orient},e.id))})}):null};Yu.displayName=`MarkerDefinitions`;var Xu=(0,G.memo)(Yu);function Zu({x:e,y:t,label:n,labelStyle:r,labelShowBg:i=!0,labelBgStyle:a,labelBgPadding:o=[2,4],labelBgBorderRadius:s=2,children:c,className:l,...u}){let[d,f]=(0,G.useState)({x:1,y:0,width:0,height:0}),p=q([`react-flow__edge-textwrapper`,l]),m=(0,G.useRef)(null);return(0,G.useEffect)(()=>{if(m.current){let e=m.current.getBBox();f({x:e.x,y:e.y,width:e.width,height:e.height})}},[n]),n?(0,K.jsxs)(`g`,{transform:`translate(${e-d.width/2} ${t-d.height/2})`,className:p,visibility:d.width?`visible`:`hidden`,...u,children:[i&&(0,K.jsx)(`rect`,{width:d.width+2*o[0],x:-o[0],y:-o[1],height:d.height+2*o[1],className:`react-flow__edge-textbg`,style:a,rx:s,ry:s}),(0,K.jsx)(`text`,{className:`react-flow__edge-text`,y:d.height/2,dy:`0.3em`,ref:m,style:r,children:n}),c]}):null}Zu.displayName=`EdgeText`;var Qu=(0,G.memo)(Zu);function $u({path:e,labelX:t,labelY:n,label:r,labelStyle:i,labelShowBg:a,labelBgStyle:o,labelBgPadding:s,labelBgBorderRadius:c,interactionWidth:l=20,...u}){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`path`,{...u,d:e,fill:`none`,className:q([`react-flow__edge-path`,u.className])}),l?(0,K.jsx)(`path`,{d:e,fill:`none`,strokeOpacity:0,strokeWidth:l,className:`react-flow__edge-interaction`}):null,r&&Ao(t)&&Ao(n)?(0,K.jsx)(Qu,{x:t,y:n,label:r,labelStyle:i,labelShowBg:a,labelBgStyle:o,labelBgPadding:s,labelBgBorderRadius:c}):null]})}function ed({pos:e,x1:t,y1:n,x2:r,y2:i}){return e===X.Left||e===X.Right?[.5*(t+r),n]:[t,.5*(n+i)]}function td({sourceX:e,sourceY:t,sourcePosition:n=X.Bottom,targetX:r,targetY:i,targetPosition:a=X.Top}){let[o,s]=ed({pos:n,x1:e,y1:t,x2:r,y2:i}),[c,l]=ed({pos:a,x1:r,y1:i,x2:e,y2:t}),[u,d,f,p]=ts({sourceX:e,sourceY:t,targetX:r,targetY:i,sourceControlX:o,sourceControlY:s,targetControlX:c,targetControlY:l});return[`M${e},${t} C${o},${s} ${c},${l} ${r},${i}`,u,d,f,p]}function nd(e){return(0,G.memo)(({id:t,sourceX:n,sourceY:r,targetX:i,targetY:a,sourcePosition:o,targetPosition:s,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:h,markerStart:g,interactionWidth:_})=>{let[v,y,b]=td({sourceX:n,sourceY:r,sourcePosition:o,targetX:i,targetY:a,targetPosition:s});return(0,K.jsx)($u,{id:e.isInternal?void 0:t,path:v,labelX:y,labelY:b,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:h,markerStart:g,interactionWidth:_})})}var rd=nd({isInternal:!1}),id=nd({isInternal:!0});rd.displayName=`SimpleBezierEdge`,id.displayName=`SimpleBezierEdgeInternal`;function ad(e){return(0,G.memo)(({id:t,sourceX:n,sourceY:r,targetX:i,targetY:a,label:o,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,sourcePosition:p=X.Bottom,targetPosition:m=X.Top,markerEnd:h,markerStart:g,pathOptions:_,interactionWidth:v})=>{let[y,b,x]=_s({sourceX:n,sourceY:r,sourcePosition:p,targetX:i,targetY:a,targetPosition:m,borderRadius:_?.borderRadius,offset:_?.offset,stepPosition:_?.stepPosition});return(0,K.jsx)($u,{id:e.isInternal?void 0:t,path:y,labelX:b,labelY:x,label:o,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:h,markerStart:g,interactionWidth:v})})}var od=ad({isInternal:!1}),sd=ad({isInternal:!0});od.displayName=`SmoothStepEdge`,sd.displayName=`SmoothStepEdgeInternal`;function cd(e){return(0,G.memo)(({id:t,...n})=>{let r=e.isInternal?void 0:t;return(0,K.jsx)(od,{...n,id:r,pathOptions:(0,G.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var ld=cd({isInternal:!1}),ud=cd({isInternal:!0});ld.displayName=`StepEdge`,ud.displayName=`StepEdgeInternal`;function dd(e){return(0,G.memo)(({id:t,sourceX:n,sourceY:r,targetX:i,targetY:a,label:o,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:m,interactionWidth:h})=>{let[g,_,v]=ds({sourceX:n,sourceY:r,targetX:i,targetY:a});return(0,K.jsx)($u,{id:e.isInternal?void 0:t,path:g,labelX:_,labelY:v,label:o,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:m,interactionWidth:h})})}var fd=dd({isInternal:!1}),pd=dd({isInternal:!0});fd.displayName=`StraightEdge`,pd.displayName=`StraightEdgeInternal`;function md(e){return(0,G.memo)(({id:t,sourceX:n,sourceY:r,targetX:i,targetY:a,sourcePosition:o=X.Bottom,targetPosition:s=X.Top,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:h,markerStart:g,pathOptions:_,interactionWidth:v})=>{let[y,b,x]=is({sourceX:n,sourceY:r,sourcePosition:o,targetX:i,targetY:a,targetPosition:s,curvature:_?.curvature});return(0,K.jsx)($u,{id:e.isInternal?void 0:t,path:y,labelX:b,labelY:x,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:h,markerStart:g,interactionWidth:v})})}var hd=md({isInternal:!1}),gd=md({isInternal:!0});hd.displayName=`BezierEdge`,gd.displayName=`BezierEdgeInternal`;var _d={default:gd,straight:pd,step:ud,smoothstep:sd,simplebezier:id},vd={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},yd=(e,t,n)=>n===X.Left?e-t:n===X.Right?e+t:e,bd=(e,t,n)=>n===X.Top?e-t:n===X.Bottom?e+t:e,xd=`react-flow__edgeupdater`;function Sd({position:e,centerX:t,centerY:n,radius:r=10,onMouseDown:i,onMouseEnter:a,onMouseOut:o,type:s}){return(0,K.jsx)(`circle`,{onMouseDown:i,onMouseEnter:a,onMouseOut:o,className:q([xd,`${xd}-${s}`]),cx:yd(t,r,e),cy:bd(n,r,e),r,stroke:`transparent`,fill:`transparent`})}function Cd({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:r,sourceY:i,targetX:a,targetY:o,sourcePosition:s,targetPosition:c,onReconnect:l,onReconnectStart:u,onReconnectEnd:d,setReconnecting:f,setUpdateHover:p}){let m=$(),h=(e,t)=>{if(e.button!==0)return;let{autoPanOnConnect:r,domNode:i,connectionMode:a,connectionRadius:o,lib:s,onConnectStart:c,cancelConnection:p,nodeLookup:h,rfId:g,panBy:_,updateConnection:v}=m.getState(),y=t.type===`target`;ic.onPointerDown(e.nativeEvent,{autoPanOnConnect:r,connectionMode:a,connectionRadius:o,domNode:i,handleId:t.id,nodeId:t.nodeId,nodeLookup:h,isTarget:y,edgeUpdaterType:t.type,lib:s,flowId:g,cancelConnection:p,panBy:_,isValidConnection:(...e)=>m.getState().isValidConnection?.(...e)??!0,onConnect:e=>l?.(n,e),onConnectStart:(r,i)=>{f(!0),u?.(e,n,t.type),c?.(r,i)},onConnectEnd:(...e)=>m.getState().onConnectEnd?.(...e),onReconnectEnd:(e,r)=>{f(!1),d?.(e,n,t.type,r)},updateConnection:v,getTransform:()=>m.getState().transform,getFromHandle:()=>m.getState().connection.fromHandle,dragThreshold:m.getState().connectionDragThreshold,handleDomNode:e.currentTarget})},g=e=>h(e,{nodeId:n.target,id:n.targetHandle??null,type:`target`}),_=e=>h(e,{nodeId:n.source,id:n.sourceHandle??null,type:`source`}),v=()=>p(!0),y=()=>p(!1);return(0,K.jsxs)(K.Fragment,{children:[(e===!0||e===`source`)&&(0,K.jsx)(Sd,{position:s,centerX:r,centerY:i,radius:t,onMouseDown:g,onMouseEnter:v,onMouseOut:y,type:`source`}),(e===!0||e===`target`)&&(0,K.jsx)(Sd,{position:c,centerX:a,centerY:o,radius:t,onMouseDown:_,onMouseEnter:v,onMouseOut:y,type:`target`})]})}function wd({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:r,onClick:i,onDoubleClick:a,onContextMenu:o,onMouseEnter:s,onMouseMove:c,onMouseLeave:l,reconnectRadius:u,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,rfId:m,edgeTypes:h,noPanClassName:g,onError:_,disableKeyboardA11y:v}){let y=Q(t=>t.edgeLookup.get(e)),b=Q(e=>e.defaultEdgeOptions);y=b?{...b,...y}:y;let x=y.type||`default`,S=h?.[x]||_d[x];S===void 0&&(_?.(`011`,Ga.error011(x)),x=`default`,S=h?.default||_d.default);let C=!!(y.focusable||t&&y.focusable===void 0),w=d!==void 0&&(y.reconnectable||n&&y.reconnectable===void 0),T=!!(y.selectable||r&&y.selectable===void 0),E=(0,G.useRef)(null),[D,O]=(0,G.useState)(!1),[k,A]=(0,G.useState)(!1),j=$(),{zIndex:M=y.zIndex,sourceX:N,sourceY:P,targetX:F,targetY:I,sourcePosition:L,targetPosition:R}=Q((0,G.useCallback)(t=>{let n=t.nodeLookup.get(y.source),r=t.nodeLookup.get(y.target);if(!n||!r)return vd;let i=ys({id:e,sourceNode:n,targetNode:r,sourceHandle:y.sourceHandle||null,targetHandle:y.targetHandle||null,connectionMode:t.connectionMode,onError:_}),a=os({selected:y.selected,zIndex:y.zIndex,sourceNode:n,targetNode:r,elevateOnSelect:t.elevateEdgesOnSelect,zIndexMode:t.zIndexMode});return{...i||vd,zIndex:a}},[y.source,y.target,y.sourceHandle,y.targetHandle,y.selected,y.zIndex]),Z),z=(0,G.useMemo)(()=>y.markerStart?`url('#${Cs(y.markerStart,m)}')`:void 0,[y.markerStart,m]),B=(0,G.useMemo)(()=>y.markerEnd?`url('#${Cs(y.markerEnd,m)}')`:void 0,[y.markerEnd,m]);if(y.hidden||N===null||P===null||F===null||I===null)return null;let V=t=>{let{addSelectedEdges:n,unselectNodesAndEdges:r,multiSelectionActive:a}=j.getState();T&&(j.setState({nodesSelectionActive:!1}),y.selected&&a?(r({nodes:[],edges:[y]}),E.current?.blur()):n([e])),i&&i(t,y)},H=a?e=>{a(e,{...y})}:void 0,U=o?e=>{o(e,{...y})}:void 0,ee=s?e=>{s(e,{...y})}:void 0,W=c?e=>{c(e,{...y})}:void 0,te=l?e=>{l(e,{...y})}:void 0;return(0,K.jsx)(`svg`,{style:{zIndex:M},children:(0,K.jsxs)(`g`,{className:q([`react-flow__edge`,`react-flow__edge-${x}`,y.className,g,{selected:y.selected,animated:y.animated,inactive:!T&&!i,updating:D,selectable:T}]),onClick:V,onDoubleClick:H,onContextMenu:U,onMouseEnter:ee,onMouseMove:W,onMouseLeave:te,onKeyDown:C?t=>{if(!v&&qa.includes(t.key)&&T){let{unselectNodesAndEdges:n,addSelectedEdges:r}=j.getState();t.key===`Escape`?(E.current?.blur(),n({edges:[y]})):r([e])}}:void 0,tabIndex:C?0:void 0,role:y.ariaRole??(C?`group`:`img`),"aria-roledescription":`edge`,"data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":y.ariaLabel===null?void 0:y.ariaLabel||`Edge from ${y.source} to ${y.target}`,"aria-describedby":C?`${Qc}-${m}`:void 0,ref:E,...y.domAttributes,children:[!k&&(0,K.jsx)(S,{id:e,source:y.source,target:y.target,type:y.type,selected:y.selected,animated:y.animated,selectable:T,deletable:y.deletable??!0,label:y.label,labelStyle:y.labelStyle,labelShowBg:y.labelShowBg,labelBgStyle:y.labelBgStyle,labelBgPadding:y.labelBgPadding,labelBgBorderRadius:y.labelBgBorderRadius,sourceX:N,sourceY:P,targetX:F,targetY:I,sourcePosition:L,targetPosition:R,data:y.data,style:y.style,sourceHandleId:y.sourceHandle,targetHandleId:y.targetHandle,markerStart:z,markerEnd:B,pathOptions:`pathOptions`in y?y.pathOptions:void 0,interactionWidth:y.interactionWidth}),w&&(0,K.jsx)(Cd,{edge:y,isReconnectable:w,reconnectRadius:u,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,sourceX:N,sourceY:P,targetX:F,targetY:I,sourcePosition:L,targetPosition:R,setUpdateHover:O,setReconnecting:A})]})})}var Td=(0,G.memo)(wd),Ed=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function Dd({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:r,noPanClassName:i,onReconnect:a,onEdgeContextMenu:o,onEdgeMouseEnter:s,onEdgeMouseMove:c,onEdgeMouseLeave:l,onEdgeClick:u,reconnectRadius:d,onEdgeDoubleClick:f,onReconnectStart:p,onReconnectEnd:m,disableKeyboardA11y:h}){let{edgesFocusable:g,edgesReconnectable:_,elementsSelectable:v,onError:y}=Q(Ed,Z),b=Uu(t);return(0,K.jsxs)(`div`,{className:`react-flow__edges`,children:[(0,K.jsx)(Xu,{defaultColor:e,rfId:n}),b.map(e=>(0,K.jsx)(Td,{id:e,edgesFocusable:g,edgesReconnectable:_,elementsSelectable:v,noPanClassName:i,onReconnect:a,onContextMenu:o,onMouseEnter:s,onMouseMove:c,onMouseLeave:l,onClick:u,reconnectRadius:d,onDoubleClick:f,onReconnectStart:p,onReconnectEnd:m,rfId:n,onError:y,edgeTypes:r,disableKeyboardA11y:h},e))]})}Dd.displayName=`EdgeRenderer`;var Od=(0,G.memo)(Dd),kd=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function Ad({children:e}){let t=$(),n=(0,G.useRef)(null),[r]=(0,G.useState)(()=>t.getState().transform);return zl(()=>{let e=null,r=()=>{let r=t.getState().transform;e&&r[0]===e[0]&&r[1]===e[1]&&r[2]===e[2]||(e=r,n.current&&(n.current.style.transform=kd(r)))};return r(),t.subscribe(r)},[t]),(0,K.jsx)(`div`,{ref:n,className:`react-flow__viewport xyflow__viewport react-flow__container`,style:{transform:kd(r)},children:e})}function jd(e){let t=Kl(),n=(0,G.useRef)(!1);(0,G.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var Md=e=>e.panZoom?.syncViewport;function Nd(e){let t=Q(Md),n=$();return(0,G.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function Pd(e){return e.connection.inProgress?{...e.connection,to:No(e.connection.to,e.transform)}:{...e.connection}}function Fd(e){return e?t=>e(Pd(t)):Pd}function Id(e){return Q(Fd(e),Z)}var Ld=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function Rd({containerStyle:e,style:t,type:n,component:r}){let{nodesConnectable:i,width:a,height:o,isValid:s,inProgress:c}=Q(Ld,Z);return a&&i&&c?(0,K.jsx)(`svg`,{style:e,width:a,height:o,className:`react-flow__connectionline react-flow__container`,children:(0,K.jsx)(`g`,{className:q([`react-flow__connection`,no(s)]),children:(0,K.jsx)(zd,{style:t,type:n,CustomComponent:r,isValid:s})})}):null}var zd=({style:e,type:t=$a.Bezier,CustomComponent:n,isValid:r})=>{let{inProgress:i,from:a,fromNode:o,fromHandle:s,fromPosition:c,to:l,toNode:u,toHandle:d,toPosition:f,pointer:p}=Id();if(!i)return;if(n)return(0,K.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:o,fromHandle:s,fromX:a.x,fromY:a.y,toX:l.x,toY:l.y,fromPosition:c,toPosition:f,connectionStatus:no(r),toNode:u,toHandle:d,pointer:p});let m=``,h={sourceX:a.x,sourceY:a.y,sourcePosition:c,targetX:l.x,targetY:l.y,targetPosition:f};switch(t){case $a.Bezier:[m]=is(h);break;case $a.SimpleBezier:[m]=td(h);break;case $a.Step:[m]=_s({...h,borderRadius:0});break;case $a.SmoothStep:[m]=_s(h);break;default:[m]=ds(h)}return(0,K.jsx)(`path`,{d:m,fill:`none`,className:`react-flow__connection-path`,style:e})};zd.displayName=`ConnectionLine`;var Bd={};function Vd(e=Bd){(0,G.useRef)(e),$(),(0,G.useEffect)(()=>{},[e])}function Hd(){$(),(0,G.useRef)(!1),(0,G.useEffect)(()=>{},[])}function Ud({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:r,onEdgeClick:i,onNodeDoubleClick:a,onEdgeDoubleClick:o,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,onSelectionContextMenu:d,onSelectionStart:f,onSelectionEnd:p,connectionLineType:m,connectionLineStyle:h,connectionLineComponent:g,connectionLineContainerStyle:_,selectionKeyCode:v,selectionOnDrag:y,selectionMode:b,multiSelectionKeyCode:x,panActivationKeyCode:S,zoomActivationKeyCode:C,deleteKeyCode:w,onlyRenderVisibleElements:T,elementsSelectable:E,defaultViewport:D,translateExtent:O,minZoom:k,maxZoom:A,preventScrolling:j,defaultMarkerColor:M,zoomOnScroll:N,zoomOnPinch:P,panOnScroll:F,panOnScrollSpeed:I,panOnScrollMode:L,zoomOnDoubleClick:R,panOnDrag:z,autoPanOnSelection:B,onPaneClick:V,onPaneMouseEnter:H,onPaneMouseMove:U,onPaneMouseLeave:ee,onPaneScroll:W,onPaneContextMenu:te,paneClickDistance:ne,nodeClickDistance:re,onEdgeContextMenu:ie,onEdgeMouseEnter:ae,onEdgeMouseMove:oe,onEdgeMouseLeave:se,reconnectRadius:ce,onReconnect:G,onReconnectStart:q,onReconnectEnd:le,noDragClassName:ue,noWheelClassName:de,noPanClassName:fe,disableKeyboardA11y:pe,nodeExtent:me,rfId:he,viewport:ge,onViewportChange:_e,nodesDraggable:J}){return Vd(e),Vd(t),Hd(),jd(n),Nd(ge),(0,K.jsx)(Mu,{onPaneClick:V,onPaneMouseEnter:H,onPaneMouseMove:U,onPaneMouseLeave:ee,onPaneContextMenu:te,onPaneScroll:W,paneClickDistance:ne,deleteKeyCode:w,selectionKeyCode:v,selectionOnDrag:y,selectionMode:b,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:x,panActivationKeyCode:S,zoomActivationKeyCode:C,elementsSelectable:E,zoomOnScroll:N,zoomOnPinch:P,zoomOnDoubleClick:R,panOnScroll:F,panOnScrollSpeed:I,panOnScrollMode:L,panOnDrag:z,autoPanOnSelection:B,defaultViewport:D,translateExtent:O,minZoom:k,maxZoom:A,onSelectionContextMenu:d,preventScrolling:j,noDragClassName:ue,noWheelClassName:de,noPanClassName:fe,disableKeyboardA11y:pe,onViewportChange:_e,isControlledViewport:!!ge,children:(0,K.jsxs)(Ad,{children:[(0,K.jsx)(Od,{edgeTypes:t,onEdgeClick:i,onEdgeDoubleClick:o,onReconnect:G,onReconnectStart:q,onReconnectEnd:le,onlyRenderVisibleElements:T,onEdgeContextMenu:ie,onEdgeMouseEnter:ae,onEdgeMouseMove:oe,onEdgeMouseLeave:se,reconnectRadius:ce,defaultMarkerColor:M,noPanClassName:fe,disableKeyboardA11y:pe,rfId:he}),(0,K.jsx)(Rd,{style:h,type:m,component:g,containerStyle:_}),(0,K.jsx)(`div`,{className:`react-flow__edgelabel-renderer`}),(0,K.jsx)(Hu,{nodeTypes:e,onNodeClick:r,onNodeDoubleClick:a,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,nodeClickDistance:re,onlyRenderVisibleElements:T,noPanClassName:fe,noDragClassName:ue,disableKeyboardA11y:pe,nodeExtent:me,rfId:he,nodesDraggable:J}),(0,K.jsx)(`div`,{className:`react-flow__viewport-portal`})]})})}Ud.displayName=`GraphView`;var Wd=(0,G.memo)(Ud),Gd=jo(`React Flow`,`https://reactflow.dev/`),Kd=({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,width:i,height:a,fitView:o,fitViewOptions:s,minZoom:c=.5,maxZoom:l=2,nodeOrigin:u,nodeExtent:d,zIndexMode:f=`basic`}={})=>{let p=new Map,m=new Map,h=new Map,g=new Map,_=r??t??[],v=n??e??[],y=u??[0,0],b=d??Ka;Hs(h,g,_);let{nodesInitialized:x}=Ns(v,p,m,{nodeOrigin:y,nodeExtent:b,zIndexMode:f}),S=[0,0,1];if(o&&i&&a){let{x:e,y:t,zoom:n}=Ro(co(p,{filter:e=>!!((e.width||e.initialWidth)&&(e.height||e.initialHeight))}),i,a,c,l,s?.padding??.1);S=[e,t,n]}return{rfId:`1`,width:i??0,height:a??0,transform:S,nodes:v,nodesInitialized:x,nodeLookup:p,parentLookup:m,edges:_,edgeLookup:g,connectionLookup:h,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:r!==void 0,panZoom:null,minZoom:c,maxZoom:l,translateExtent:Ka,nodeExtent:b,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Ya.Strict,domNode:null,paneDragging:!1,noPanClassName:`nopan`,nodeOrigin:y,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:o??!1,fitViewOptions:s,fitViewResolver:null,connection:{...Qa},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:``,autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:Gd,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:`react`,debug:!1,ariaLabelConfig:Ja,zIndexMode:f,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},qd=({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,width:i,height:a,fitView:o,fitViewOptions:s,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:d,zIndexMode:f})=>Gc((p,m)=>{async function h(){let{nodeLookup:e,panZoom:t,fitViewOptions:n,fitViewResolver:r,width:i,height:a,minZoom:o,maxZoom:s}=m();t&&(await po({nodes:e,width:i,height:a,panZoom:t,minZoom:o,maxZoom:s},n),r?.resolve(!0),p({fitViewResolver:null}))}return{...Kd({nodes:e,edges:t,width:i,height:a,fitView:o,fitViewOptions:s,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:d,defaultNodes:n,defaultEdges:r,zIndexMode:f}),setNodes:e=>{let{nodeLookup:t,parentLookup:n,nodeOrigin:r,elevateNodesOnSelect:i,fitViewQueued:a,zIndexMode:o,nodesSelectionActive:s}=m(),{nodesInitialized:c,hasSelectedNodes:l}=Ns(e,t,n,{nodeOrigin:r,nodeExtent:d,elevateNodesOnSelect:i,checkEquality:!0,zIndexMode:o}),u=s&&l;a&&c?(h(),p({nodes:e,nodesInitialized:c,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:u})):p({nodes:e,nodesInitialized:c,nodesSelectionActive:u})},setEdges:e=>{let{connectionLookup:t,edgeLookup:n}=m();Hs(t,n,e),p({edges:e})},setDefaultNodesAndEdges:(e,t)=>{if(e){let{setNodes:t}=m();t(e),p({hasDefaultNodes:!0})}if(t){let{setEdges:e}=m();e(t),p({hasDefaultEdges:!0})}},updateNodeInternals:e=>{let{triggerNodeChanges:t,nodeLookup:n,parentLookup:r,domNode:i,nodeOrigin:a,nodeExtent:o,debug:s,fitViewQueued:c,zIndexMode:l}=m(),{changes:u,updatedInternals:d}=zs(e,n,r,i,a,o,l);d&&(As(n,r,{nodeOrigin:a,nodeExtent:o,zIndexMode:l}),c?(h(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),u?.length>0&&(s&&console.log(`React Flow: trigger node changes`,u),t?.(u)))},updateNodePositions:(e,t=!1)=>{let n=[],r=[],{nodeLookup:i,triggerNodeChanges:a,connection:o,updateConnection:s,onNodesChangeMiddlewareMap:c}=m();for(let[a,c]of e){let e=i.get(a),l=!!(e?.expandParent&&e?.parentId&&c?.position),u={id:a,type:`position`,position:l?{x:Math.max(0,c.position.x),y:Math.max(0,c.position.y)}:c.position,dragging:t};if(e&&o.inProgress&&o.fromNode.id===e.id){let t=xs(e,o.fromHandle,X.Left,!0);s({...o,from:t})}l&&e.parentId&&n.push({id:a,parentId:e.parentId,rect:{...c.internals.positionAbsolute,width:c.measured.width??0,height:c.measured.height??0}}),r.push(u)}if(n.length>0){let{parentLookup:e,nodeOrigin:t}=m(),a=Rs(n,i,e,t);r.push(...a)}for(let e of c.values())r=e(r);a(r)},triggerNodeChanges:e=>{let{onNodesChange:t,setNodes:n,nodes:r,hasDefaultNodes:i,debug:a}=m();e?.length&&(i&&n(Ol(e,r)),a&&console.log(`React Flow: trigger node changes`,e),t?.(e))},triggerEdgeChanges:e=>{let{onEdgesChange:t,setEdges:n,edges:r,hasDefaultEdges:i,debug:a}=m();e?.length&&(i&&n(kl(e,r)),a&&console.log(`React Flow: trigger edge changes`,e),t?.(e))},addSelectedNodes:e=>{let{multiSelectionActive:t,edgeLookup:n,nodeLookup:r,triggerNodeChanges:i,triggerEdgeChanges:a}=m();if(t){i(e.map(e=>Al(e,!0)));return}i(jl(r,new Set([...e]),!0)),a(jl(n))},addSelectedEdges:e=>{let{multiSelectionActive:t,edgeLookup:n,nodeLookup:r,triggerNodeChanges:i,triggerEdgeChanges:a}=m();if(t){a(e.map(e=>Al(e,!0)));return}a(jl(n,new Set([...e]))),i(jl(r,new Set,!0))},unselectNodesAndEdges:({nodes:e,edges:t}={})=>{let{edges:n,nodes:r,nodeLookup:i,triggerNodeChanges:a,triggerEdgeChanges:o}=m(),s=e||r,c=t||n,l=[];for(let e of s){if(!e.selected)continue;let t=i.get(e.id);t&&(t.selected=!1),l.push(Al(e.id,!1))}let u=[];for(let e of c)e.selected&&u.push(Al(e.id,!1));a(l),o(u)},setMinZoom:e=>{let{panZoom:t,maxZoom:n}=m();t?.setScaleExtent([e,n]),p({minZoom:e})},setMaxZoom:e=>{let{panZoom:t,minZoom:n}=m();t?.setScaleExtent([n,e]),p({maxZoom:e})},setTranslateExtent:e=>{m().panZoom?.setTranslateExtent(e),p({translateExtent:e})},resetSelectedElements:()=>{let{edges:e,nodes:t,triggerNodeChanges:n,triggerEdgeChanges:r,elementsSelectable:i}=m();if(!i)return;let a=t.reduce((e,t)=>t.selected?[...e,Al(t.id,!1)]:e,[]),o=e.reduce((e,t)=>t.selected?[...e,Al(t.id,!1)]:e,[]);n(a),r(o)},setNodeExtent:e=>{let{nodes:t,nodeLookup:n,parentLookup:r,nodeOrigin:i,elevateNodesOnSelect:a,nodeExtent:o,zIndexMode:s}=m();e[0][0]===o[0][0]&&e[0][1]===o[0][1]&&e[1][0]===o[1][0]&&e[1][1]===o[1][1]||(Ns(t,n,r,{nodeOrigin:i,nodeExtent:e,elevateNodesOnSelect:a,checkEquality:!1,zIndexMode:s}),p({nodeExtent:e}))},panBy:e=>{let{transform:t,width:n,height:r,panZoom:i,translateExtent:a}=m();return Bs({delta:e,panZoom:i,transform:t,translateExtent:a,width:n,height:r})},setCenter:async(e,t,n)=>{let{width:r,height:i,maxZoom:a,panZoom:o}=m();if(!o)return!1;let s=n?.zoom===void 0?a:n.zoom;return await o.setViewport({x:r/2-e*s,y:i/2-t*s,zoom:s},{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Qa}})},updateConnection:e=>{p({connection:e})},reset:()=>p({...Kd()})}},Object.is);function Jd({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:r,initialWidth:i,initialHeight:a,initialMinZoom:o,initialMaxZoom:s,initialFitViewOptions:c,fitView:l,nodeOrigin:u,nodeExtent:d,zIndexMode:f,children:p}){let[m]=(0,G.useState)(()=>qd({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,width:i,height:a,fitView:l,minZoom:o,maxZoom:s,fitViewOptions:c,nodeOrigin:u,nodeExtent:d,zIndexMode:f}));return(0,K.jsx)(qc,{value:m,children:(0,K.jsx)(Ul,{children:(0,K.jsx)(mu,{children:p})})})}function Yd({children:e,nodes:t,edges:n,defaultNodes:r,defaultEdges:i,width:a,height:o,fitView:s,fitViewOptions:c,minZoom:l,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:p}){return(0,G.useContext)(Kc)?(0,K.jsx)(K.Fragment,{children:e}):(0,K.jsx)(Jd,{initialNodes:t,initialEdges:n,defaultNodes:r,defaultEdges:i,initialWidth:a,initialHeight:o,fitView:s,initialFitViewOptions:c,initialMinZoom:l,initialMaxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:p,children:e})}var Xd={width:`100%`,height:`100%`,overflow:`hidden`,position:`relative`,zIndex:0};function Zd({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,className:i,nodeTypes:a,edgeTypes:o,onNodeClick:s,onEdgeClick:c,onInit:l,onMove:u,onMoveStart:d,onMoveEnd:f,onConnect:p,onConnectStart:m,onConnectEnd:h,onClickConnectStart:g,onClickConnectEnd:_,onNodeMouseEnter:v,onNodeMouseMove:y,onNodeMouseLeave:b,onNodeContextMenu:x,onNodeDoubleClick:S,onNodeDragStart:C,onNodeDrag:w,onNodeDragStop:T,onNodesDelete:E,onEdgesDelete:D,onDelete:O,onSelectionChange:k,onSelectionDragStart:A,onSelectionDrag:j,onSelectionDragStop:M,onSelectionContextMenu:N,onSelectionStart:P,onSelectionEnd:F,onBeforeDelete:I,connectionMode:L,connectionLineType:R=$a.Bezier,connectionLineStyle:z,connectionLineComponent:B,connectionLineContainerStyle:V,deleteKeyCode:H=`Backspace`,selectionKeyCode:U=`Shift`,selectionOnDrag:ee=!1,selectionMode:W=Za.Full,panActivationKeyCode:te=`Space`,multiSelectionKeyCode:ne=zo()?`Meta`:`Control`,zoomActivationKeyCode:re=zo()?`Meta`:`Control`,snapToGrid:ie,snapGrid:ae,onlyRenderVisibleElements:oe=!1,selectNodesOnDrag:se,nodesDraggable:ce,autoPanOnNodeFocus:le,nodesConnectable:ue,nodesFocusable:de,nodeOrigin:fe=pl,edgesFocusable:pe,edgesReconnectable:me,elementsSelectable:he=!0,defaultViewport:ge=ml,minZoom:_e=.5,maxZoom:J=2,translateExtent:ve=Ka,preventScrolling:ye=!0,nodeExtent:be,defaultMarkerColor:xe=`#b1b1b7`,zoomOnScroll:Se=!0,zoomOnPinch:Ce=!0,panOnScroll:we=!1,panOnScrollSpeed:Te=.5,panOnScrollMode:Ee=Xa.Free,zoomOnDoubleClick:De=!0,panOnDrag:Oe=!0,onPaneClick:ke,onPaneMouseEnter:Ae,onPaneMouseMove:je,onPaneMouseLeave:Me,onPaneScroll:Ne,onPaneContextMenu:Pe,paneClickDistance:Fe=1,nodeClickDistance:Ie=0,children:Le,onReconnect:Re,onReconnectStart:ze,onReconnectEnd:Be,onEdgeContextMenu:Ve,onEdgeDoubleClick:He,onEdgeMouseEnter:Ue,onEdgeMouseMove:We,onEdgeMouseLeave:Ge,reconnectRadius:Ke=10,onNodesChange:qe,onEdgesChange:Je,noDragClassName:Ye=`nodrag`,noWheelClassName:Xe=`nowheel`,noPanClassName:Ze=`nopan`,fitView:Qe,fitViewOptions:$e,connectOnClick:et,attributionPosition:tt,proOptions:nt,defaultEdgeOptions:rt,elevateNodesOnSelect:it=!0,elevateEdgesOnSelect:at=!1,disableKeyboardA11y:ot=!1,autoPanOnConnect:st,autoPanOnNodeDrag:ct,autoPanOnSelection:lt=!0,autoPanSpeed:ut,connectionRadius:dt,isValidConnection:ft,onError:pt,style:mt,id:ht,nodeDragThreshold:gt,connectionDragThreshold:_t,viewport:vt,onViewportChange:yt,width:bt,height:xt,colorMode:St=`light`,debug:Ct,onScroll:wt,ariaLabelConfig:Tt,zIndexMode:Et=`basic`,...Dt},Ot){let kt=ht||`1`,At=bl(St),jt=(0,G.useCallback)(e=>{e.currentTarget.scrollTo({top:0,left:0,behavior:`instant`}),wt?.(e)},[wt]);return(0,K.jsx)(`div`,{"data-testid":`rf__wrapper`,...Dt,onScroll:jt,style:{...mt,...Xd},ref:Ot,className:q([`react-flow`,i,At]),id:ht,role:`application`,children:(0,K.jsxs)(Yd,{nodes:e,edges:t,width:bt,height:xt,fitView:Qe,fitViewOptions:$e,minZoom:_e,maxZoom:J,nodeOrigin:fe,nodeExtent:be,zIndexMode:Et,children:[(0,K.jsx)(vl,{nodes:e,edges:t,defaultNodes:n,defaultEdges:r,onConnect:p,onConnectStart:m,onConnectEnd:h,onClickConnectStart:g,onClickConnectEnd:_,nodesDraggable:ce,autoPanOnNodeFocus:le,nodesConnectable:ue,nodesFocusable:de,edgesFocusable:pe,edgesReconnectable:me,elementsSelectable:he,elevateNodesOnSelect:it,elevateEdgesOnSelect:at,minZoom:_e,maxZoom:J,nodeExtent:be,onNodesChange:qe,onEdgesChange:Je,snapToGrid:ie,snapGrid:ae,connectionMode:L,translateExtent:ve,connectOnClick:et,defaultEdgeOptions:rt,fitView:Qe,fitViewOptions:$e,onNodesDelete:E,onEdgesDelete:D,onDelete:O,onNodeDragStart:C,onNodeDrag:w,onNodeDragStop:T,onSelectionDrag:j,onSelectionDragStart:A,onSelectionDragStop:M,onMove:u,onMoveStart:d,onMoveEnd:f,noPanClassName:Ze,nodeOrigin:fe,rfId:kt,autoPanOnConnect:st,autoPanOnNodeDrag:ct,autoPanSpeed:ut,onError:pt,connectionRadius:dt,isValidConnection:ft,selectNodesOnDrag:se,nodeDragThreshold:gt,connectionDragThreshold:_t,onBeforeDelete:I,debug:Ct,ariaLabelConfig:Tt,zIndexMode:Et}),(0,K.jsx)(Wd,{onInit:l,onNodeClick:s,onEdgeClick:c,onNodeMouseEnter:v,onNodeMouseMove:y,onNodeMouseLeave:b,onNodeContextMenu:x,onNodeDoubleClick:S,nodeTypes:a,edgeTypes:o,connectionLineType:R,connectionLineStyle:z,connectionLineComponent:B,connectionLineContainerStyle:V,selectionKeyCode:U,selectionOnDrag:ee,selectionMode:W,deleteKeyCode:H,multiSelectionKeyCode:ne,panActivationKeyCode:te,zoomActivationKeyCode:re,onlyRenderVisibleElements:oe,defaultViewport:ge,translateExtent:ve,minZoom:_e,maxZoom:J,preventScrolling:ye,zoomOnScroll:Se,zoomOnPinch:Ce,zoomOnDoubleClick:De,panOnScroll:we,panOnScrollSpeed:Te,panOnScrollMode:Ee,panOnDrag:Oe,autoPanOnSelection:lt,onPaneClick:ke,onPaneMouseEnter:Ae,onPaneMouseMove:je,onPaneMouseLeave:Me,onPaneScroll:Ne,onPaneContextMenu:Pe,paneClickDistance:Fe,nodeClickDistance:Ie,onSelectionContextMenu:N,onSelectionStart:P,onSelectionEnd:F,onReconnect:Re,onReconnectStart:ze,onReconnectEnd:Be,onEdgeContextMenu:Ve,onEdgeDoubleClick:He,onEdgeMouseEnter:Ue,onEdgeMouseMove:We,onEdgeMouseLeave:Ge,reconnectRadius:Ke,defaultMarkerColor:xe,noDragClassName:Ye,noWheelClassName:Xe,noPanClassName:Ze,rfId:kt,disableKeyboardA11y:ot,nodeExtent:be,viewport:vt,onViewportChange:yt,nodesDraggable:ce}),(0,K.jsx)(fl,{onSelectionChange:k}),Le,(0,K.jsx)(ol,{proOptions:nt,position:tt}),(0,K.jsx)(rl,{rfId:kt,disableKeyboardA11y:ot})]})})}var Qd=Rl(Zd);function $d(e){let[t,n]=(0,G.useState)(e);return[t,n,(0,G.useCallback)(e=>n(t=>Ol(e,t)),[])]}function ef(e){let[t,n]=(0,G.useState)(e);return[t,n,(0,G.useCallback)(e=>n(t=>kl(e,t)),[])]}Ga.error014();function tf({dimensions:e,lineWidth:t,variant:n,className:r}){return(0,K.jsx)(`path`,{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:q([`react-flow__background-pattern`,n,r])})}function nf({radius:e,className:t}){return(0,K.jsx)(`circle`,{cx:e,cy:e,r:e,className:q([`react-flow__background-pattern`,`dots`,t])})}var rf;(function(e){e.Lines=`lines`,e.Dots=`dots`,e.Cross=`cross`})(rf||={});var af={[rf.Dots]:1,[rf.Lines]:1,[rf.Cross]:6},of=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function sf({id:e,variant:t=rf.Dots,gap:n=20,size:r,lineWidth:i=1,offset:a=0,color:o,bgColor:s,style:c,className:l,patternClassName:u}){let d=(0,G.useRef)(null),{transform:f,patternId:p}=Q(of,Z),m=r||af[t],h=t===rf.Dots,g=t===rf.Cross,_=Array.isArray(n)?n:[n,n],v=[_[0]*f[2]||1,_[1]*f[2]||1],y=m*f[2],b=Array.isArray(a)?a:[a,a],x=g?[y,y]:v,S=[b[0]*f[2]||1+x[0]/2,b[1]*f[2]||1+x[1]/2],C=`${p}${e||``}`;return(0,K.jsxs)(`svg`,{className:q([`react-flow__background`,l]),style:{...c,...Zl,"--xy-background-color-props":s,"--xy-background-pattern-color-props":o},ref:d,"data-testid":`rf__background`,children:[(0,K.jsx)(`pattern`,{id:C,x:f[0]%v[0],y:f[1]%v[1],width:v[0],height:v[1],patternUnits:`userSpaceOnUse`,patternTransform:`translate(-${S[0]},-${S[1]})`,children:h?(0,K.jsx)(nf,{radius:y/2,className:u}):(0,K.jsx)(tf,{dimensions:x,lineWidth:i,variant:t,className:u})}),(0,K.jsx)(`rect`,{x:`0`,y:`0`,width:`100%`,height:`100%`,fill:`url(#${C})`})]})}sf.displayName=`Background`;var cf=(0,G.memo)(sf);function lf(){return(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 32 32`,children:(0,K.jsx)(`path`,{d:`M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z`})})}function uf(){return(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 32 5`,children:(0,K.jsx)(`path`,{d:`M0 0h32v4.2H0z`})})}function df(){return(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 32 30`,children:(0,K.jsx)(`path`,{d:`M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z`})})}function ff(){return(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 25 32`,children:(0,K.jsx)(`path`,{d:`M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z`})})}function pf(){return(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 25 32`,children:(0,K.jsx)(`path`,{d:`M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z`})})}function mf({children:e,className:t,...n}){return(0,K.jsx)(`button`,{type:`button`,className:q([`react-flow__controls-button`,t]),...n,children:e})}var hf=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function gf({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:r=!0,fitViewOptions:i,onZoomIn:a,onZoomOut:o,onFitView:s,onInteractiveChange:c,className:l,children:u,position:d=`bottom-left`,orientation:f=`vertical`,"aria-label":p}){let m=$(),{isInteractive:h,minZoomReached:g,maxZoomReached:_,ariaLabelConfig:v}=Q(hf,Z),{zoomIn:y,zoomOut:b,fitView:x}=Kl();return(0,K.jsxs)(il,{className:q([`react-flow__controls`,f===`horizontal`?`horizontal`:`vertical`,l]),position:d,style:e,"data-testid":`rf__controls`,"aria-label":p??v[`controls.ariaLabel`],children:[t&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(mf,{onClick:()=>{y(),a?.()},className:`react-flow__controls-zoomin`,title:v[`controls.zoomIn.ariaLabel`],"aria-label":v[`controls.zoomIn.ariaLabel`],disabled:_,children:(0,K.jsx)(lf,{})}),(0,K.jsx)(mf,{onClick:()=>{b(),o?.()},className:`react-flow__controls-zoomout`,title:v[`controls.zoomOut.ariaLabel`],"aria-label":v[`controls.zoomOut.ariaLabel`],disabled:g,children:(0,K.jsx)(uf,{})})]}),n&&(0,K.jsx)(mf,{className:`react-flow__controls-fitview`,onClick:()=>{x(i),s?.()},title:v[`controls.fitView.ariaLabel`],"aria-label":v[`controls.fitView.ariaLabel`],children:(0,K.jsx)(df,{})}),r&&(0,K.jsx)(mf,{className:`react-flow__controls-interactive`,onClick:()=>{m.setState({nodesDraggable:!h,nodesConnectable:!h,elementsSelectable:!h}),c?.(!h)},title:v[`controls.interactive.ariaLabel`],"aria-label":v[`controls.interactive.ariaLabel`],children:h?(0,K.jsx)(pf,{}):(0,K.jsx)(ff,{})}),u]})}gf.displayName=`Controls`;var _f=(0,G.memo)(gf);function vf({id:e,x:t,y:n,width:r,height:i,style:a,color:o,strokeColor:s,strokeWidth:c,className:l,borderRadius:u,shapeRendering:d,selected:f,onClick:p}){let{background:m,backgroundColor:h}=a||{},g=o||m||h;return(0,K.jsx)(`rect`,{className:q([`react-flow__minimap-node`,{selected:f},l]),x:t,y:n,rx:u,ry:u,width:r,height:i,style:{fill:g,stroke:s,strokeWidth:c},shapeRendering:d,onClick:p?t=>p(t,e):void 0})}var yf=(0,G.memo)(vf),bf=e=>e.nodes.map(e=>e.id),xf=e=>e instanceof Function?e:()=>e;function Sf({nodeStrokeColor:e,nodeColor:t,nodeClassName:n=``,nodeBorderRadius:r=5,nodeStrokeWidth:i,nodeComponent:a=yf,onClick:o}){let s=Q(bf,Z),c=xf(t),l=xf(e),u=xf(n),d=typeof window>`u`||window.chrome?`crispEdges`:`geometricPrecision`;return(0,K.jsx)(K.Fragment,{children:s.map(e=>(0,K.jsx)(wf,{id:e,nodeColorFunc:c,nodeStrokeColorFunc:l,nodeClassNameFunc:u,nodeBorderRadius:r,nodeStrokeWidth:i,NodeComponent:a,onClick:o,shapeRendering:d},e))})}function Cf({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:r,nodeBorderRadius:i,nodeStrokeWidth:a,shapeRendering:o,NodeComponent:s,onClick:c}){let{node:l,x:u,y:d,width:f,height:p}=Q(t=>{let n=t.nodeLookup.get(e);if(!n)return{node:void 0,x:0,y:0,width:0,height:0};let r=n.internals.userNode,{x:i,y:a}=n.internals.positionAbsolute,{width:o,height:s}=Vo(r);return{node:r,x:i,y:a,width:o,height:s}},Z);return!l||l.hidden||!Ho(l)?null:(0,K.jsx)(s,{x:u,y:d,width:f,height:p,style:l.style,selected:!!l.selected,className:r(l),color:t(l),borderRadius:i,strokeColor:n(l),strokeWidth:a,shapeRendering:o,onClick:c,id:l.id})}var wf=(0,G.memo)(Cf),Tf=(0,G.memo)(Sf),Ef=200,Df=150,Of=e=>!e.hidden,kf=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Eo(co(e.nodeLookup,{filter:Of}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},Af=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,jf=(e,t)=>Af(e.viewBB,t.viewBB)&&Af(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,Mf=`react-flow__minimap-desc`;function Nf({style:e,className:t,nodeStrokeColor:n,nodeColor:r,nodeClassName:i=``,nodeBorderRadius:a=5,nodeStrokeWidth:o,nodeComponent:s,bgColor:c,maskColor:l,maskStrokeColor:u,maskStrokeWidth:d,position:f=`bottom-right`,onClick:p,onNodeClick:m,pannable:h=!1,zoomable:g=!1,ariaLabel:_,inversePan:v,zoomStep:y=1,offsetScale:b=5}){let x=$(),S=(0,G.useRef)(null),{boundingRect:C,viewBB:w,rfId:T,panZoom:E,translateExtent:D,flowWidth:O,flowHeight:k,ariaLabelConfig:A}=Q(kf,jf),j=e?.width??Ef,M=e?.height??Df,N=C.width/j,P=C.height/M,F=Math.max(N,P),I=F*j,L=F*M,R=b*F,z=C.x-(I-C.width)/2-R,B=C.y-(L-C.height)/2-R,V=I+R*2,H=L+R*2,U=`${Mf}-${T}`,ee=(0,G.useRef)(0),W=(0,G.useRef)();ee.current=F,(0,G.useEffect)(()=>{if(S.current&&E)return W.current=ac({domNode:S.current,panZoom:E,getTransform:()=>x.getState().transform,getViewScale:()=>ee.current}),()=>{W.current?.destroy()}},[E]),(0,G.useEffect)(()=>{W.current?.update({translateExtent:D,width:O,height:k,inversePan:v,pannable:h,zoomStep:y,zoomable:g})},[h,g,v,y,D,O,k]);let te=p?e=>{let[t,n]=W.current?.pointer(e)||[0,0];p(e,{x:t,y:n})}:void 0,ne=m?(0,G.useCallback)((e,t)=>{let n=x.getState().nodeLookup.get(t).internals.userNode;m(e,n)},[]):void 0,re=_??A[`minimap.ariaLabel`];return(0,K.jsx)(il,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof c==`string`?c:void 0,"--xy-minimap-mask-background-color-props":typeof l==`string`?l:void 0,"--xy-minimap-mask-stroke-color-props":typeof u==`string`?u:void 0,"--xy-minimap-mask-stroke-width-props":typeof d==`number`?d*F:void 0,"--xy-minimap-node-background-color-props":typeof r==`string`?r:void 0,"--xy-minimap-node-stroke-color-props":typeof n==`string`?n:void 0,"--xy-minimap-node-stroke-width-props":typeof o==`number`?o:void 0},className:q([`react-flow__minimap`,t]),"data-testid":`rf__minimap`,children:(0,K.jsxs)(`svg`,{width:j,height:M,viewBox:`${z} ${B} ${V} ${H}`,className:`react-flow__minimap-svg`,role:`img`,"aria-labelledby":U,ref:S,onClick:te,children:[re&&(0,K.jsx)(`title`,{id:U,children:re}),(0,K.jsx)(Tf,{onClick:ne,nodeColor:r,nodeStrokeColor:n,nodeBorderRadius:a,nodeClassName:i,nodeStrokeWidth:o,nodeComponent:s}),(0,K.jsx)(`path`,{className:`react-flow__minimap-mask`,d:`M${z-R},${B-R}h${V+R*2}v${H+R*2}h${-V-R*2}z
        M${w.x},${w.y}h${w.width}v${w.height}h${-w.width}z`,fillRule:`evenodd`,pointerEvents:`none`})]})})}Nf.displayName=`MiniMap`;var Pf=(0,G.memo)(Nf),Ff=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,If={[bc.Line]:`right`,[bc.Handle]:`bottom-right`};function Lf({nodeId:e,position:t,variant:n=bc.Handle,className:r,style:i=void 0,children:a,color:o,minWidth:s=10,minHeight:c=10,maxWidth:l=Number.MAX_VALUE,maxHeight:u=Number.MAX_VALUE,keepAspectRatio:d=!1,resizeDirection:f,autoScale:p=!0,shouldResize:m,onResizeStart:h,onResize:g,onResizeEnd:_}){let v=du(),y=typeof e==`string`?e:v,b=$(),x=(0,G.useRef)(null),S=n===bc.Handle,C=Q((0,G.useCallback)(Ff(S&&p),[S,p]),Z),w=(0,G.useRef)(null),T=t??If[n];return(0,G.useEffect)(()=>{if(!(!x.current||!y))return w.current||=Nc({domNode:x.current,nodeId:y,getStoreItems:()=>{let{nodeLookup:e,transform:t,snapGrid:n,snapToGrid:r,nodeOrigin:i,domNode:a}=b.getState();return{nodeLookup:e,transform:t,snapGrid:n,snapToGrid:r,nodeOrigin:i,paneDomNode:a}},onChange:(e,t)=>{let{triggerNodeChanges:n,nodeLookup:r,parentLookup:i,nodeOrigin:a}=b.getState(),o=[],s={x:e.x,y:e.y},c=r.get(y);if(c&&c.expandParent&&c.parentId){let t=c.origin??a,n=e.width??c.measured.width??0,l=e.height??c.measured.height??0,u=Rs([{id:c.id,parentId:c.parentId,rect:{width:n,height:l,...Uo({x:e.x??c.position.x,y:e.y??c.position.y},{width:n,height:l},c.parentId,r,t)}}],r,i,a);o.push(...u),s.x=e.x?Math.max(t[0]*n,e.x):void 0,s.y=e.y?Math.max(t[1]*l,e.y):void 0}if(s.x!==void 0&&s.y!==void 0){let e={id:y,type:`position`,position:{...s}};o.push(e)}if(e.width!==void 0&&e.height!==void 0){let t={id:y,type:`dimensions`,resizing:!0,setAttributes:f?f===`horizontal`?`width`:`height`:!0,dimensions:{width:e.width,height:e.height}};o.push(t)}for(let e of t){let t={...e,type:`position`};o.push(t)}n(o)},onEnd:({width:e,height:t})=>{let n={id:y,type:`dimensions`,resizing:!1,dimensions:{width:e,height:t}};b.getState().triggerNodeChanges([n])}}),w.current.update({controlPosition:T,boundaries:{minWidth:s,minHeight:c,maxWidth:l,maxHeight:u},keepAspectRatio:d,resizeDirection:f,onResizeStart:h,onResize:g,onResizeEnd:_,shouldResize:m}),()=>{w.current?.destroy()}},[T,s,c,l,u,d,h,g,_,m]),(0,K.jsx)(`div`,{className:q([`react-flow__resize-control`,`nodrag`,...T.split(`-`),n,r]),ref:x,style:{...i,scale:C,...o&&{[S?`backgroundColor`:`borderColor`]:o}},children:a})}var Rf=(0,G.memo)(Lf);function zf({nodeId:e,isVisible:t=!0,handleClassName:n,handleStyle:r,lineClassName:i,lineStyle:a,color:o,minWidth:s=10,minHeight:c=10,maxWidth:l=Number.MAX_VALUE,maxHeight:u=Number.MAX_VALUE,keepAspectRatio:d=!1,autoScale:f=!0,shouldResize:p,onResizeStart:m,onResize:h,onResizeEnd:g}){return t?(0,K.jsxs)(K.Fragment,{children:[Sc.map(t=>(0,K.jsx)(Rf,{className:i,style:a,nodeId:e,position:t,variant:bc.Line,color:o,minWidth:s,minHeight:c,maxWidth:l,maxHeight:u,onResizeStart:m,keepAspectRatio:d,autoScale:f,shouldResize:p,onResize:h,onResizeEnd:g},t)),xc.map(t=>(0,K.jsx)(Rf,{className:n,style:r,nodeId:e,position:t,color:o,minWidth:s,minHeight:c,maxWidth:l,maxHeight:u,onResizeStart:m,keepAspectRatio:d,autoScale:f,shouldResize:p,onResize:h,onResizeEnd:g},t))]}):null}var Bf=[`world`,`spawn`,`player`,`target`,`bone`],Vf=j(Bf),Hf={world:`Mundo (fixo)`,spawn:`Onde nasceu`,player:`Segue o jogador`,target:`Segue o alvo`,bone:`Osso do modelo`},Uf=L([M(),M(),M()]),Wf=k({at:M().min(0).max(1),label:E().default(``)}),Gf=k({kind:E(),amount:M().default(0),freq:M().default(1)}),Kf=k({kind:j([`catmull`,`bezier`]).default(`catmull`),space:Vf.default(`world`),anchorName:E().optional(),points:I(Uf).default([]),tension:M().min(0).max(1).default(.5),closed:O().default(!1),speedProfile:j([`linear`,`easeIn`,`easeOut`,`easeInOut`]).default(`linear`),modifiers:I(Gf).default([]),markers:I(Wf).default([])});function qf(e=`world`){return{kind:`catmull`,space:e,points:[],tension:.5,closed:!1,speedProfile:`linear`,modifiers:[],markers:[]}}function Jf(e){return Kf.parse(e)}function Yf(e){return!!e&&e.points.length>=2}var Xf=560,Zf=380,Qf=16,$f=Xf/2,ep=Zf/2;function tp({value:e,onChange:t,onClose:n}){let[r,i]=(0,G.useState)(()=>e?Jf(e):qf()),[a,o]=(0,G.useState)(null),c=(0,G.useRef)(null);function l(e){i(e),t(e)}function u(e){l({...r,...e})}let d=e=>[$f+e[0]*Qf,ep+e[2]*Qf];function f(e,t){return[(e-$f)/Qf,0,(t-ep)/Qf]}function p(e){let t=c.current.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}let m=(0,G.useMemo)(()=>{let e=new s(r);if(!e.usable)return``;let t=[];for(let n=0;n<=80;n++){let r=e.localAt(n/80);t.push(`${$f+r.x*Qf},${ep+r.z*Qf}`)}return t.join(` `)},[r]);function h(e){let[t,n]=p(e),i=f(t,n),a=[...r.points,i];l({...r,points:a}),o(a.length-1)}function g(e,n){n.stopPropagation(),o(e),c.current?.setPointerCapture(n.pointerId);let r=n=>{let r=c.current.getBoundingClientRect(),a=f(n.clientX-r.left,n.clientY-r.top);i(n=>{let r=n.points.slice();r[e]=a;let i={...n,points:r};return t(i),i})},a=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,a)}function _(e){let t=r.points.filter((t,n)=>n!==e);l({...r,points:t}),o(null)}let v=r.space===`player`||r.space===`target`||r.space===`bone`;return(0,K.jsx)(V,{title:`Trajeto — editor de curva`,width:820,onClose:n,children:(0,K.jsxs)(`div`,{className:`pe`,children:[(0,K.jsxs)(`div`,{className:`pe__stage`,children:[(0,K.jsxs)(`svg`,{ref:c,className:`pe__svg`,width:Xf,height:Zf,onPointerDown:h,onKeyDown:e=>{(e.key===`Delete`||e.key===`Backspace`)&&a!==null&&_(a)},tabIndex:0,children:[Array.from({length:17},(e,t)=>{let n=(t-8)*2*Qf+$f;return(0,K.jsx)(`line`,{x1:n,y1:0,x2:n,y2:Zf,className:`pe__grid`},`v`+t)}),Array.from({length:13},(e,t)=>{let n=(t-6)*2*Qf+ep;return(0,K.jsx)(`line`,{x1:0,y1:n,x2:Xf,y2:n,className:`pe__grid`},`h`+t)}),(0,K.jsx)(`line`,{x1:$f,y1:0,x2:$f,y2:Zf,className:`pe__axis`}),(0,K.jsx)(`line`,{x1:0,y1:ep,x2:Xf,y2:ep,className:`pe__axis`}),m&&(0,K.jsx)(`polyline`,{points:m,className:`pe__curve`}),r.closed&&m&&(0,K.jsx)(`polygon`,{points:m,className:`pe__curve pe__curve--fill`}),r.points.map((e,t)=>{let[n,r]=d(e);return(0,K.jsxs)(`g`,{children:[(0,K.jsx)(`circle`,{cx:n,cy:r,r:7,className:`pe__pt`+(a===t?` selected`:``)+(t===0?` start`:``),onPointerDown:e=>g(t,e),onDoubleClick:e=>{e.stopPropagation(),_(t)}}),(0,K.jsx)(`text`,{x:n+9,y:r-8,className:`pe__ptlabel`,children:t+1})]},t)})]}),(0,K.jsx)(`p`,{className:`pe__hint`,children:`Clique para adicionar · arraste para mover · duplo-clique remove. Vista de topo (plano X→direita, Z→baixo).`})]}),(0,K.jsxs)(`div`,{className:`pe__side`,children:[(0,K.jsxs)(`label`,{className:`pe__field`,children:[(0,K.jsx)(`span`,{children:`Âncora`}),(0,K.jsx)(`select`,{value:r.space,onChange:e=>u({space:e.target.value}),children:Bf.map(e=>(0,K.jsx)(`option`,{value:e,children:Hf[e]},e))})]}),v&&(0,K.jsxs)(`label`,{className:`pe__field`,children:[(0,K.jsx)(`span`,{children:r.space===`bone`?`Osso (Objeto/Osso)`:`Objeto da âncora`}),(0,K.jsx)(`input`,{value:r.anchorName??``,placeholder:r.space===`player`?`Jogador`:r.space===`bone`?`Jogador/mão_direita`:`nome do objeto`,onChange:e=>u({anchorName:e.target.value})})]}),(0,K.jsxs)(`label`,{className:`pe__field`,children:[(0,K.jsxs)(`span`,{children:[`Suavidade (`,r.tension.toFixed(2),`)`]}),(0,K.jsx)(`input`,{type:`range`,min:0,max:1,step:.05,value:r.tension,onChange:e=>u({tension:Number(e.target.value)})})]}),(0,K.jsxs)(`label`,{className:`pe__field`,children:[(0,K.jsx)(`span`,{children:`Velocidade`}),(0,K.jsxs)(`select`,{value:r.speedProfile,onChange:e=>u({speedProfile:e.target.value}),children:[(0,K.jsx)(`option`,{value:`linear`,children:`Constante`}),(0,K.jsx)(`option`,{value:`easeIn`,children:`Acelera`}),(0,K.jsx)(`option`,{value:`easeOut`,children:`Desacelera`}),(0,K.jsx)(`option`,{value:`easeInOut`,children:`Suave nas pontas`})]})]}),(0,K.jsxs)(`label`,{className:`pe__check`,children:[(0,K.jsx)(`input`,{type:`checkbox`,checked:r.closed,onChange:e=>u({closed:e.target.checked})}),`Fechar o laço`]}),(0,K.jsxs)(`div`,{className:`pe__stat`,children:[r.points.length,` ponto(s)`]}),(0,K.jsxs)(`div`,{className:`pe__actions`,children:[(0,K.jsx)(`button`,{className:`tbtn`,disabled:a===null,onClick:()=>a!==null&&_(a),children:`Excluir ponto`}),(0,K.jsx)(`button`,{className:`tbtn`,disabled:r.points.length===0,onClick:()=>l({...r,points:[]}),children:`Limpar`})]}),(0,K.jsx)(`button`,{className:`cta-primary pe__done`,onClick:n,children:`Concluir`})]})]})})}var np=(0,G.memo)(function({id:e,data:t,selected:n}){let r=t,i=g.get(r.type),a=Kl(),o=Q(e=>e.transform[2]<.55);if(!i)return(0,K.jsxs)(`div`,{className:`sn sn--unknown`,children:[(0,K.jsx)(`div`,{className:`sn__head`,children:`Node desconhecido`}),(0,K.jsx)(`div`,{className:`sn__body`,children:r.type})]});let s=y(i.family),c=new Set(r.connected??[]);function l(t,n){a.updateNodeData(e,e=>({...e.data,values:{...e.data.values,[t]:n}}))}let{inputs:u,outputs:d}=h(i,r.values),p=u.filter(e=>e.type===`exec`),m=u.filter(e=>e.type!==`exec`),_=d.filter(e=>e.type===`exec`),v=d.filter(e=>e.type!==`exec`),b=f({type:r.type,values:r.values});return(0,K.jsxs)(`div`,{className:`sn`+(n?` sn--selected`:``)+(r.error?` sn--error`:``)+(r.tracing?` sn--tracing`:``)+(o?` sn--far`:``)+(b?` sn--molecule`:``),style:{"--family":s.color},title:b?`Molécula: ${b.name} (${b.sub.nodes.length} nodes) — duplo clique para entrar`:`${i.description}\n${i.type}`,children:[(0,K.jsxs)(`div`,{className:`sn__head`,children:[(0,K.jsx)(`span`,{className:`sn__icon`,"aria-hidden":!0,children:(0,K.jsx)(B,{name:b?`genoma`:s.icon,size:13})}),(0,K.jsx)(`span`,{className:`sn__title`,children:b?b.name:i.label}),b&&(0,K.jsx)(`span`,{className:`sn__mol-count`,children:b.sub.nodes.length}),r.error&&(0,K.jsx)(`span`,{className:`sn__badge`,title:r.error,"aria-label":`erro`,children:`!`})]}),(0,K.jsxs)(`div`,{className:`sn__exec`,children:[(0,K.jsx)(`div`,{className:`sn__exec-col`,children:p.map(e=>(0,K.jsxs)(`div`,{className:`sn__row sn__row--exec`,children:[(0,K.jsx)(yu,{type:`target`,position:X.Left,id:e.id,className:`sn__handle sn__handle--exec`,style:{background:N.exec}}),(0,K.jsx)(`span`,{className:`sn__exec-label`,children:e.label||(0,K.jsx)(B,{name:`play`,size:9})})]},e.id))}),(0,K.jsx)(`div`,{className:`sn__exec-col sn__exec-col--out`,children:_.map(e=>(0,K.jsxs)(`div`,{className:`sn__row sn__row--exec sn__row--right`,children:[(0,K.jsx)(`span`,{className:`sn__exec-label`,children:e.label||(0,K.jsx)(B,{name:`play`,size:9})}),(0,K.jsx)(yu,{type:`source`,position:X.Right,id:e.id,className:`sn__handle sn__handle--exec`,style:{background:N.exec}})]},e.id))})]}),(0,K.jsxs)(`div`,{className:`sn__body`,children:[m.map(e=>(0,K.jsxs)(`div`,{className:`sn__row`,children:[(0,K.jsx)(yu,{type:`target`,position:X.Left,id:e.id,className:`sn__handle`,style:{background:N[e.type]},title:P[e.type]}),(0,K.jsx)(`span`,{className:`sn__label`,children:e.label||e.id}),(0,K.jsx)(`span`,{className:`sn__field`,children:c.has(e.id)?(0,K.jsx)(`span`,{className:`sn__linked`,children:`conectado`}):(0,K.jsx)(rp,{spec:e,value:r.values?.[e.id]??e.default,onChange:t=>l(e.id,t)})})]},e.id)),v.map(e=>(0,K.jsxs)(`div`,{className:`sn__row sn__row--right`,children:[(0,K.jsx)(`span`,{className:`sn__label sn__label--out`,children:e.label||`valor`}),(0,K.jsx)(yu,{type:`source`,position:X.Right,id:e.id,className:`sn__handle`,style:{background:N[e.type]},title:P[e.type]})]},e.id))]})]})});function rp({spec:e,value:t,onChange:n}){if(e.linkOnly)return(0,K.jsx)(`span`,{className:`sn__linked`,children:`ligue um valor`});if(e.widget===`color`){let r=/^#[0-9a-f]{6}$/i.test(String(t))?String(t):`#ffffff`;return(0,K.jsxs)(`span`,{className:`sn__color`,onMouseDown:e=>e.stopPropagation(),children:[(0,K.jsx)(`input`,{type:`color`,value:r,"aria-label":e.label,onChange:e=>n(e.target.value)}),(0,K.jsx)(`code`,{children:r})]})}if(e.options)return(0,K.jsx)(`select`,{className:`sn__select`,"aria-label":e.label,value:String(t??e.default??``),onChange:e=>n(e.target.value),onMouseDown:e=>e.stopPropagation(),children:e.options.map(e=>(0,K.jsx)(`option`,{value:e.value,children:e.label},e.value))});if(e.type===`path`)return(0,K.jsx)(ip,{value:t,onChange:n});switch(e.type){case`number`:return(0,K.jsx)(`span`,{className:`sn__num`,onMouseDown:e=>e.stopPropagation(),children:(0,K.jsx)(ne.Provider,{value:e.label,children:(0,K.jsx)(oe,{value:Number(t??0),step:e.step??.1,min:e.min,max:e.max,onChange:e=>n(e)})})});case`boolean`:return(0,K.jsx)(`input`,{type:`checkbox`,"aria-label":e.label,checked:!!t,onChange:e=>n(e.target.checked),onMouseDown:e=>e.stopPropagation()});case`string`:return(0,K.jsx)(`input`,{className:`sn__text`,"aria-label":e.label,value:String(t??``),onChange:e=>n(e.target.value),onMouseDown:e=>e.stopPropagation()});default:return(0,K.jsx)(`span`,{className:`sn__linked`,children:`—`})}}function ip({value:e,onChange:t}){let[n,r]=(0,G.useState)(!1),i=e?.points?.length??0;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`button`,{className:`sn__path`+(Yf(e)?` ok`:``),onMouseDown:e=>e.stopPropagation(),onClick:()=>r(!0),title:`Abrir o editor de trajeto`,children:[(0,K.jsx)(B,{name:`trajeto`,size:12}),` `,i>=2?`trajeto · ${i} pts`:`desenhar trajeto…`]}),n&&(0,K.jsx)(tp,{value:e,onChange:e=>t(e),onClose:()=>r(!1)})]})}function ap({request:e,onPick:t,onClose:n}){let[r,i]=(0,G.useState)(``),[a,o]=(0,G.useState)(0),s=(0,G.useRef)(null),c=(0,G.useMemo)(()=>{let t=g.search(r);e.family&&(t=t.filter(t=>t.family===e.family));let n=e.from;return n&&(t=t.filter(e=>(n.side===`source`?e.inputs:e.outputs).some(e=>n.side===`source`?A(n.type,e.type):A(e.type,n.type)))),t.slice(0,40)},[r,e.from]);(0,G.useEffect)(()=>{function e(e){s.current&&!s.current.contains(e.target)&&n()}return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[n]);let l=e.from;return(0,K.jsxs)(`div`,{className:`add-menu`,ref:s,style:{left:e.screen.x,top:e.screen.y},role:`dialog`,"aria-label":`Adicionar node`,children:[(0,K.jsx)(`input`,{className:`add-menu__input`,autoFocus:!0,placeholder:l?`Conectar ${P[l.type]} a…`:e.family?`${y(e.family).label}…`:`Buscar node…`,value:r,"aria-label":`Buscar node`,onChange:e=>{i(e.target.value),o(0)},onKeyDown:r=>{if(r.key===`ArrowDown`)r.preventDefault(),o(e=>Math.min(e+1,c.length-1));else if(r.key===`ArrowUp`)r.preventDefault(),o(e=>Math.max(e-1,0));else if(r.key===`Enter`){r.preventDefault();let n=c[a];n&&t(n,e)}else r.key===`Escape`&&(r.preventDefault(),n())}}),(0,K.jsxs)(`ul`,{className:`add-menu__list`,role:`listbox`,children:[c.length===0&&(0,K.jsx)(`li`,{className:`add-menu__empty`,children:`Nada compatível encontrado.`}),c.map((n,r)=>{let i=y(n.family);return(0,K.jsxs)(`li`,{role:`option`,"aria-selected":r===a,className:`add-menu__item`+(r===a?` active`:``),onMouseEnter:()=>o(r),onClick:()=>t(n,e),children:[(0,K.jsx)(`span`,{className:`add-menu__icon`,style:{color:i.color},children:(0,K.jsx)(B,{name:i.icon,size:15})}),(0,K.jsxs)(`span`,{className:`add-menu__text`,children:[(0,K.jsx)(`span`,{className:`add-menu__label`,children:n.label}),(0,K.jsx)(`span`,{className:`add-menu__desc`,children:n.description})]})]},n.type)})]})]})}var op=92,sp=42;function cp({screen:e,onPick:t,onClose:n}){let[r,i]=(0,G.useState)(null),a=(0,G.useRef)(null);(0,G.useEffect)(()=>{function e(e){a.current&&!a.current.contains(e.target)&&n()}function t(e){e.key===`Escape`&&n()}return document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)}},[n]);let o=x.length,s=r?x.find(e=>e.id===r):null;return(0,K.jsxs)(`div`,{className:`sn-radial`,ref:a,role:`dialog`,"aria-label":`Adicionar node (radial)`,style:{left:e.x-134,top:e.y-134,width:268,height:268},children:[(0,K.jsx)(`div`,{className:`sn-radial__hub`,style:{borderColor:s?.color},children:s?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`span`,{className:`sn-radial__hub-icon`,style:{color:s.color},children:(0,K.jsx)(B,{name:s.icon,size:20})}),(0,K.jsx)(`span`,{className:`sn-radial__hub-label`,children:s.label})]}):(0,K.jsx)(`span`,{className:`sn-radial__hub-label`,children:`Adicionar`})}),x.map((e,n)=>{let r=n/o*Math.PI*2-Math.PI/2;return(0,K.jsx)(`button`,{className:`sn-radial__slice`,style:{left:134+Math.cos(r)*op-sp/2,top:134+Math.sin(r)*op-sp/2,width:sp,height:sp,borderColor:e.color,color:e.color},title:e.label,onMouseEnter:()=>i(e.id),onMouseLeave:()=>i(t=>t===e.id?null:t),onClick:()=>t(e.id),"aria-label":e.label,children:(0,K.jsx)(B,{name:e.icon,size:18})},e.id)})]})}var lp=null;function up(e){return`${e}_${crypto.randomUUID().slice(0,8)}`}function dp(e,t){let n=e.filter(e=>e.selected);if(n.length===0)return null;let r=new Set(n.map(e=>e.id)),i=t.filter(e=>r.has(e.source)&&r.has(e.target)),a={nodes:n.map(e=>({...e,selected:!1,data:{...e.data}})),edges:i.map(e=>({...e}))};return lp=a,a}function fp(e,t={x:28,y:28}){let n=new Map;return{nodes:e.nodes.map(e=>{let r=up(`n`);return n.set(e.id,r),{...e,id:r,selected:!0,position:{x:e.position.x+t.x,y:e.position.y+t.y},data:{...e.data}}}),edges:e.edges.map(e=>({...e,id:up(`e`),source:n.get(e.source)??e.source,target:n.get(e.target)??e.target,selected:!1}))}}function pp(e={x:28,y:28}){return lp?fp(lp,e):null}function mp(e,t){let n=e.filter(e=>e.selected);if(n.length===0)return null;let r=new Set(n.map(e=>e.id));return{nodes:n.map(e=>({...e,selected:!1,data:{...e.data}})),edges:t.filter(e=>r.has(e.source)&&r.has(e.target)).map(e=>({...e}))}}function hp(e,t,n={x:24,y:24}){let r=mp(e,t);return r?fp(r,n):null}var gp=`flow/comment`,_p=(0,G.createContext)({enterGroup:()=>{}}),vp={violet:R.color[`violet-500`],magenta:R.color[`magenta-500`],cyan:R.color[`cyan-500`],emerald:R.color[`emerald-500`],copper:R.color[`copper-500`],lime:R.color[`lime-500`]},yp={violet:`violeta`,magenta:`magenta`,cyan:`ciano`,emerald:`esmeralda`,copper:`cobre`,lime:`lima`},bp={sinapse:np,note:(0,G.memo)(function({id:e,data:t,selected:n}){let r=t,i=Kl();return(0,K.jsxs)(`div`,{className:`sn-note`+(n?` sn-note--selected`:``),children:[(0,K.jsxs)(`div`,{className:`sn-note__head`,children:[(0,K.jsx)(B,{name:`note`,size:12}),` Comentário`]}),(0,K.jsx)(`textarea`,{className:`sn-note__text nodrag nowheel`,value:r.comment,placeholder:`Escreva uma nota…`,"aria-label":`Texto do comentário`,rows:Math.min(10,Math.max(3,r.comment.split(`
`).length+1)),onChange:t=>i.updateNodeData(e,{comment:t.target.value})})]})}),frame:(0,G.memo)(function({id:e,data:t,selected:n}){let r=t,i=Kl(),{enterGroup:a}=(0,G.useContext)(_p),[o,s]=(0,G.useState)(!1),c=vp[r.color]??vp.violet,l=t=>{i.updateNodeData(e,{label:t.trim()||`Grupo`}),s(!1)};return(0,K.jsxs)(`div`,{className:`sn-frame`+(n?` sn-frame--selected`:``),style:{"--frame":c},children:[(0,K.jsx)(zf,{isVisible:n,minWidth:160,minHeight:100,lineClassName:`sn-frame__resize-line`,handleClassName:`sn-frame__resize-handle`}),(0,K.jsxs)(`div`,{className:`sn-frame__head`,onDoubleClick:()=>a(e),children:[o?(0,K.jsx)(`input`,{className:`sn-frame__input nodrag`,autoFocus:!0,defaultValue:r.label,"aria-label":`Nome do grupo`,onBlur:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&l(e.currentTarget.value),e.key===`Escape`&&s(!1)}}):(0,K.jsx)(`span`,{className:`sn-frame__label`,title:`Clique duas vezes no nome para renomear`,onDoubleClick:e=>{e.stopPropagation(),s(!0)},children:r.label}),(0,K.jsx)(`button`,{className:`sn-frame__enter nodrag`,title:`Entrar no grupo (enquadra os nodes dele)`,"aria-label":`Entrar no grupo ${r.label}`,onClick:()=>a(e),children:(0,K.jsx)(B,{name:`fullscreen`,size:12})})]}),n&&(0,K.jsx)(`div`,{className:`sn-frame__colors nodrag`,role:`group`,"aria-label":`Cor do grupo`,children:F.map(t=>(0,K.jsx)(`button`,{className:`sn-frame__swatch`,style:{background:vp[t]},"aria-pressed":r.color===t,"aria-label":`Cor ${yp[t]}`,onClick:()=>i.updateNodeData(e,{color:t})},t))})]})})},xp=e=>e.type!==`frame`;function Sp(e){return e===`flow/comment`?`note`:`sinapse`}function Cp(e){return e===`flow/comment`?{type:gp,values:{},comment:``}:{type:e,values:{},connected:[]}}function wp(e){return{id:e.id,type:`frame`,position:e.position,width:e.size.w,height:e.size.h,zIndex:-1,data:{label:e.label,color:e.color}}}function Tp(e){return{w:e.width??e.measured?.width??220,h:e.height??e.measured?.height??120}}function Ep(e){let t=e.data,{w:n,h:r}=Tp(e);return{id:e.id,label:t.label,color:t.color,position:e.position,size:{w:n,h:r}}}function Dp(e,t,n,r){let i=e.nodes.find(e=>e.id===t),a=i&&g.get(i.type);if(!a)return;let{inputs:o,outputs:s}=h(a,i.values);return(r===`output`?s:o).find(e=>e.id===n)?.type}function Op(e){let t=new Map;for(let n of e.edges){let e=t.get(n.target)??[];e.push(n.targetHandle),t.set(n.target,e)}return t}function kp(e){let t=Op(e),n=(e.groups??[]).map(wp),r=e.nodes.map(e=>e.type===`flow/comment`?{id:e.id,type:`note`,position:e.position,data:{type:gp,values:e.values??{},comment:e.comment??``}}:{id:e.id,type:`sinapse`,position:e.position,data:{type:e.type,values:e.values??{},connected:t.get(e.id)??[]}});return[...n,...r]}function Ap(e){return e.edges.map(t=>jp(e,{id:t.id,source:t.source,sourceHandle:t.sourceHandle,target:t.target,targetHandle:t.targetHandle}))}function jp(e,t){let n=Dp(e,t.source,t.sourceHandle??``,`output`)??`number`,r=n===`exec`;return{...t,className:r?`sn-edge sn-edge--exec`:`sn-edge`,style:{stroke:N[n],strokeWidth:r?2.5:1.6}}}function Mp(e){return{id:e.id,type:e.data.type,position:e.position,values:e.data.values??{},...e.type===`note`?{comment:e.data.comment}:{}}}function Np(e){return{id:e.id,source:e.source,sourceHandle:e.sourceHandle??``,target:e.target,targetHandle:e.targetHandle??``}}function Pp(e){return e.nodes.map(e=>e.id+e.type).join(`|`)+`#`+e.edges.map(e=>e.id).join(`|`)+`#`+(e.groups??[]).map(e=>e.id).join(`|`)}var Fp=[];function Ip({graphName:e}){let t=b(t=>t.molPath[e])??Fp;return(0,K.jsx)(Lp,{graphName:e,path:t},e+`|`+t.join(`/`))}function Lp({graphName:e,path:t}){let n=b(t=>t.graphs[e]),r=(0,G.useMemo)(()=>n?w(n,t)??void 0:void 0,[n,t]),i=b(t=>t.status[e]),a=b(e=>e.update),o=b(e=>e.setMolPath),s=(0,G.useCallback)(n=>{let r=b.getState().graphs[e];r&&a(e,t.length?v(r,t,n):n)},[e,t,a]);(0,G.useEffect)(()=>{n&&!r&&t.length&&o(e,[])},[n,r,t,e,o]);let c=b(e=>e.focusNodeId),l=u(e=>e.playState),d=Kl(),h=(0,G.useRef)(null),[_,y]=(0,G.useState)(null),[x,S]=(0,G.useState)(null),[E,D]=(0,G.useState)(new Set),[O,k]=(0,G.useState)(`pan`),[j,M,N]=$d(r?kp(r):[]),[P,F,I]=ef(r?Ap(r):[]),L=(0,G.useRef)(r?Pp(r):``);(0,G.useEffect)(()=>{if(!r)return;let e=Pp(r);e!==L.current&&(L.current=e,M(kp(r)),F(Ap(r)))},[r,M,F]);let R=(0,G.useRef)(new Map);(0,G.useEffect)(()=>{let n=globalThis;n.__SINAPSE_TRACE__=(n,r)=>{if(n!==e)return;let i=m(r,t);i&&R.current.set(i,performance.now())};let r=window.setInterval(()=>{let e=performance.now(),t=new Set;for(let[n,r]of R.current)e-r<400?t.add(n):R.current.delete(n);D(e=>zp(e,t)?e:t)},120);return()=>{window.clearInterval(r),delete n.__SINAPSE_TRACE__}},[e,t]);let V=(0,G.useMemo)(()=>{let e=new Map;for(let n of i?.issues??[]){let r=n.nodeId?m(n.nodeId,t):null;r&&e.set(r,n.message)}return e},[i,t]);(0,G.useEffect)(()=>{M(e=>e.map(e=>{if(e.type!==`sinapse`)return e;let t=e.data,n=V.get(e.id),r=E.has(e.id);return t.error===n&&t.tracing===r?e:{...e,data:{...t,error:n,tracing:r}}})),F(e=>e.map(e=>{let t=E.has(e.source)&&e.className?.includes(`exec`),n=e.className?.replace(` sn-edge--pulse`,``)??`sn-edge`,r=t?n+` sn-edge--pulse`:n;return e.className===r?e:{...e,className:r}}))},[V,E,M,F]),(0,G.useEffect)(()=>{M(e=>e.map(e=>{if(e.type!==`sinapse`)return e;let t=e.data,n=P.filter(t=>t.target===e.id).map(e=>e.targetHandle??``);return n.length===(t.connected?.length??0)&&n.every(e=>t.connected?.includes(e))?e:{...e,data:{...t,connected:n}}}))},[P,M]),(0,G.useEffect)(()=>{if(!c)return;let e=m(c,t),n=j.find(t=>t.id===e);n&&d.setCenter(n.position.x+110,n.position.y+60,{zoom:1,duration:400})},[c,j,d,t]);let H=(0,G.useCallback)((e,t)=>{if(!r)return;let n=e.filter(e=>!xp(e)),i={...r,nodes:e.filter(xp).map(Mp),edges:t.map(Np),groups:n.length?n.map(Ep):void 0};L.current=Pp(i),s(i)},[r,s]);(0,G.useEffect)(()=>{if(!r)return;let e=window.setTimeout(()=>H(j,P),60);return()=>window.clearTimeout(e)},[j,P,r,H]);let U=(0,G.useCallback)(e=>{r&&F(t=>Fl({...e,id:`e_${crypto.randomUUID().slice(0,8)}`},t).map(e=>jp(r,e)))},[r,F]),ee=(0,G.useCallback)(e=>{if(!r||!e.source||!e.target||e.source===e.target)return!1;let t=Dp(r,e.source,e.sourceHandle??``,`output`),n=Dp(r,e.target,e.targetHandle??``,`input`);return!!t&&!!n&&A(t,n)},[r]),W=(0,G.useCallback)((e,t)=>{let n=t.fromHandle;if(t.isValid||!r||!n)return;let i=`changedTouches`in e?e.changedTouches[0]:e,a=n.type===`source`?`source`:`target`,o=n.id??``,s=Dp(r,n.nodeId,o,a===`source`?`output`:`input`);s&&y({screen:{x:i.clientX,y:i.clientY},flow:d.screenToFlowPosition({x:i.clientX,y:i.clientY}),from:{nodeId:n.nodeId,handleId:o,type:s,side:a}})},[r,d]),te=(0,G.useCallback)((e,t)=>{if(!r)return;let n=`n_${crypto.randomUUID().slice(0,8)}`,i={id:n,type:Sp(e.type),position:t.flow,data:Cp(e.type)};if(M(e=>[...e,i]),t.from){let{from:i}=t,a=i.side===`source`?e.inputs.find(e=>A(i.type,e.type)):e.outputs.find(e=>A(e.type,i.type));if(a){let o=i.side===`source`?{id:`e_${crypto.randomUUID().slice(0,8)}`,source:i.nodeId,sourceHandle:i.handleId,target:n,targetHandle:a.id}:{id:`e_${crypto.randomUUID().slice(0,8)}`,source:n,sourceHandle:a.id,target:i.nodeId,targetHandle:i.handleId},s={...r,nodes:[...r.nodes,{id:n,type:e.type,position:t.flow,values:{}}]};F(e=>[...e,jp(s,o)])}}y(null)},[r,M,F]),ne=(0,G.useCallback)(()=>{let e=d.getNodes().filter(e=>e.selected&&xp(e)),t;if(e.length){let n=e.map(e=>e.position.x),r=e.map(e=>e.position.y),i=e.map(e=>e.position.x+Tp(e).w),a=e.map(e=>e.position.y+Tp(e).h),o=Math.min(...n)-24,s=Math.min(...r)-48;t={x:o,y:s,w:Math.max(...i)+24-o,h:Math.max(...a)+24-s}}else{let e=h.current?.getBoundingClientRect(),n=d.screenToFlowPosition({x:(e?.left??0)+(e?.width??0)/2,y:(e?.top??0)+(e?.height??0)/2});t={x:n.x-160,y:n.y-100,w:320,h:200}}let n={...wp({id:`grp_${crypto.randomUUID().slice(0,8)}`,label:`Grupo`,color:`violet`,position:{x:t.x,y:t.y},size:{w:t.w,h:t.h}}),selected:!0};d.setNodes(e=>[n,...e.map(e=>({...e,selected:!1}))])},[d]),re=(0,G.useCallback)(e=>{M(kp(e)),F(Ap(e))},[M,F]),ie=(0,G.useCallback)(()=>{if(!r)return null;let e=d.getNodes(),t=e.filter(e=>!xp(e));return{...r,nodes:e.filter(xp).map(Mp),edges:d.getEdges().map(Np),groups:t.length?t.map(Ep):void 0}},[r,d]),ae=(0,G.useCallback)(()=>{let e=ie(),t=d.getNodes().filter(e=>e.selected&&e.type===`sinapse`).map(e=>e.id);if(!e||t.length===0)return;let n=C(e,t);n&&re(n.graph)},[ie,d,re]),oe=(0,G.useCallback)(()=>{let e=ie(),t=d.getNodes().find(e=>e.selected&&e.data.type===`graph/molecule`);!e||!t||re(p(e,t.id))},[ie,d,re]),se=(0,G.useCallback)(n=>{let r=b.getState().graphs[e],i=t.slice(0,-1),o=r&&w(r,i),s=t[t.length-1];if(!r||!o||!s)return;let c=o.nodes.map(e=>e.id===s?{...e,values:{...e.values,name:n}}:e);a(e,v(r,i,{...o,nodes:c}))},[e,t,a]),ce=(0,G.useRef)({x:0,y:0});(0,G.useEffect)(()=>{function e(e){ce.current={x:e.clientX,y:e.clientY}}function n(e){let n=e.target;if(n&&[`INPUT`,`SELECT`,`TEXTAREA`].includes(n.tagName))return;let i=h.current;if(!(i&&(i.matches(`:hover`)||i.contains(document.activeElement))))return;if(e.key===`A`&&e.shiftKey){e.preventDefault(),y({screen:{...ce.current},flow:d.screenToFlowPosition(ce.current)});return}if(e.key===`Tab`){e.preventDefault(),S({screen:{...ce.current},flow:d.screenToFlowPosition(ce.current)});return}let a=e.ctrlKey||e.metaKey;if(a&&e.key.toLowerCase()===`c`){dp(d.getNodes().filter(xp),d.getEdges());return}if(a&&e.shiftKey&&e.key.toLowerCase()===`g`){e.preventDefault(),ae();return}if(a&&e.key.toLowerCase()===`g`){e.preventDefault(),t.length===0&&ne();return}if(a&&e.key.toLowerCase()===`v`){let t=pp();if(!t)return;e.preventDefault(),r(t);return}if(a&&e.key.toLowerCase()===`d`){let t=hp(d.getNodes().filter(xp),d.getEdges());if(!t)return;e.preventDefault(),r(t);return}}function r(e){let t={version:1,name:`_clip`,nodes:e.nodes.map(e=>({id:e.id,type:e.data.type,position:e.position,values:e.data.values??{}})),edges:[]};d.setNodes(t=>[...t.map(e=>({...e,selected:!1})),...e.nodes]),d.setEdges(n=>[...n,...e.edges.map(e=>jp(t,e))])}return window.addEventListener(`mousemove`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`mousemove`,e),window.removeEventListener(`keydown`,n)}},[d,ne,ae,t.length]);let q=(0,G.useRef)(!1),le=(0,G.useRef)(null),ue=(0,G.useCallback)((e,t)=>{if(t.type===`frame`){let{w:e,h:n}=Tp(t),r=r=>r.position.x>=t.position.x&&r.position.y>=t.position.y&&r.position.x<=t.position.x+e&&r.position.y<=t.position.y+n;le.current={id:t.id,start:{...t.position},members:new Map(d.getNodes().filter(e=>xp(e)&&!e.selected&&r(e)).map(e=>[e.id,{...e.position}]))};return}if(!(`ctrlKey`in e)||!(e.ctrlKey||e.metaKey)||q.current)return;q.current=!0;let n=d.getNodes().filter(xp),r=hp(n.some(e=>e.selected)?n:n.map(e=>({...e,selected:e.id===t.id})),d.getEdges(),{x:0,y:0});if(!r)return;let i={version:1,name:`_clip`,nodes:r.nodes.map(e=>({id:e.id,type:e.data.type,position:e.position,values:e.data.values??{}})),edges:[]};d.setNodes(e=>[...e,...r.nodes.map(e=>({...e,selected:!1}))]),d.setEdges(e=>[...e,...r.edges.map(e=>jp(i,e))])},[d]),de=(0,G.useCallback)((e,t)=>{let n=le.current;if(!n||n.id!==t.id||n.members.size===0)return;let r=t.position.x-n.start.x,i=t.position.y-n.start.y;M(e=>e.map(e=>{let t=n.members.get(e.id);return t?{...e,position:{x:t.x+r,y:t.y+i}}:e}))},[M]),fe=(0,G.useCallback)(()=>{q.current=!1,le.current=null},[]),pe=(0,G.useCallback)(e=>{e.preventDefault();let t=e.dataTransfer.getData(`application/x-sinapse-node`),n=t&&g.get(t);if(!n)return;let r=d.screenToFlowPosition({x:e.clientX,y:e.clientY});M(e=>[...e,{id:`n_${crypto.randomUUID().slice(0,8)}`,type:Sp(n.type),position:r,data:Cp(n.type)}])},[d,M]),[me,he]=(0,G.useState)(null),ge=(0,G.useCallback)(e=>{let t=d.getNode(e);if(!t)return;let{w:n,h:r}=Tp(t);he(e),d.fitBounds({x:t.position.x,y:t.position.y,width:n,height:r},{padding:.12,duration:400})},[d]),_e=(0,G.useCallback)(()=>{he(null),d.fitView({padding:.15,duration:400})},[d]),J=me?j.find(e=>e.id===me&&e.type===`frame`):void 0,ve=(0,G.useMemo)(()=>({enterGroup:ge}),[ge]);(0,G.useEffect)(()=>{if(!J)return;let e=e=>{let t=e.target;t&&[`INPUT`,`SELECT`,`TEXTAREA`].includes(t.tagName)||e.key===`Escape`&&_e()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[J,_e]),(0,G.useEffect)(()=>{if(J||t.length===0)return;let n=n=>{let r=n.target;r&&[`INPUT`,`SELECT`,`TEXTAREA`].includes(r.tagName)||n.key===`Escape`&&o(e,t.slice(0,-1))};return window.addEventListener(`keydown`,n),()=>window.removeEventListener(`keydown`,n)},[J,t,e,o]);let ye=(0,G.useMemo)(()=>t.map((e,r)=>n?w(n,t.slice(0,r+1))?.name??`?`:`?`),[n,t]),be=(0,G.useMemo)(()=>{if(!n||t.length===0)return null;let e=w(n,t.slice(0,-1))?.nodes.find(e=>e.id===t[t.length-1]),r=e&&f(e);return r?{ins:r.ports.filter(e=>e.dir===`in`).length,outs:r.ports.filter(e=>e.dir===`out`).length}:null},[n,t]);return r?(0,K.jsxs)(`div`,{className:`sn-canvas`+(l===`stopped`?``:` sn-canvas--playing`),ref:h,onDragOver:e=>{e.dataTransfer.types.includes(`application/x-sinapse-node`)&&e.preventDefault()},onDrop:pe,children:[(0,K.jsxs)(`div`,{className:`sn-tools`,role:`toolbar`,"aria-label":`Ferramentas do board`,children:[(0,K.jsx)(`button`,{className:`sn-tool`+(O===`pan`?` active`:``),title:`Mover a tela (V)`,"aria-label":`Mover a tela`,"aria-pressed":O===`pan`,onClick:()=>k(`pan`),children:(0,K.jsx)(B,{name:`pan`,size:15})}),(0,K.jsx)(`button`,{className:`sn-tool`+(O===`select`?` active`:``),title:`Selecionar em caixa (arrastar seleciona vários nodes)`,"aria-label":`Selecionar em caixa`,"aria-pressed":O===`select`,onClick:()=>k(`select`),children:(0,K.jsx)(B,{name:`select-box`,size:15})}),(0,K.jsx)(`button`,{className:`sn-tool`,title:t.length?`Grupos coloridos ficam no grafo principal`:`Agrupar a seleção num grupo colorido (Ctrl+G)`,"aria-label":`Agrupar seleção`,disabled:t.length>0,onClick:ne,children:(0,K.jsx)(B,{name:`group`,size:15})}),(0,K.jsx)(`button`,{className:`sn-tool`,title:`Agrupar a seleção numa molécula — um node que abre com duplo clique (Ctrl+Shift+G)`,"aria-label":`Agrupar em molécula`,onClick:ae,children:(0,K.jsx)(B,{name:`genoma`,size:15})}),(0,K.jsx)(`button`,{className:`sn-tool`,title:`Desagrupar a molécula selecionada (os nodes voltam ao board)`,"aria-label":`Desagrupar molécula`,onClick:oe,children:(0,K.jsx)(B,{name:`expand`,size:15})})]}),(0,K.jsxs)(`nav`,{className:`sn-crumbs`,"aria-label":`Caminho no board`,children:[r.folder&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`span`,{className:`sn-crumbs__item`,children:r.folder}),(0,K.jsx)(`span`,{className:`sn-crumbs__sep`,"aria-hidden":!0,children:`›`})]}),(0,K.jsx)(`button`,{className:`sn-crumbs__item sn-crumbs__link`,"aria-current":J||t.length?void 0:`location`,title:t.length?`Voltar ao grafo principal`:J?`Voltar ao grafo inteiro (Esc)`:`Enquadrar o grafo inteiro`,onClick:()=>t.length?o(e,[]):_e(),children:n?.name??r.name}),t.map((n,r)=>(0,K.jsxs)(`span`,{className:`sn-crumbs__mol`,children:[(0,K.jsx)(`span`,{className:`sn-crumbs__sep`,"aria-hidden":!0,children:`›`}),r<t.length-1?(0,K.jsxs)(`button`,{className:`sn-crumbs__item sn-crumbs__link`,onClick:()=>o(e,t.slice(0,r+1)),children:[(0,K.jsx)(B,{name:`genoma`,size:11}),` `,ye[r]]}):(0,K.jsxs)(`span`,{className:`sn-crumbs__item`,"aria-current":J?void 0:`location`,children:[(0,K.jsx)(B,{name:`genoma`,size:11}),(0,K.jsx)(`input`,{className:`sn-crumbs__name`,"aria-label":`Nome da molécula`,defaultValue:ye[r],onBlur:e=>e.target.value.trim()&&se(e.target.value.trim()),onKeyDown:e=>{e.key===`Enter`&&se(e.target.value.trim()||ye[r])}}),be&&(0,K.jsxs)(`small`,{className:`sn-crumbs__ports`,children:[be.ins,` entrada`,be.ins===1?``:`s`,` · `,be.outs,` saída`,be.outs===1?``:`s`,` · Esc sai`]})]})]},n)),J&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`span`,{className:`sn-crumbs__sep`,"aria-hidden":!0,children:`›`}),(0,K.jsx)(`span`,{className:`sn-crumbs__item`,"aria-current":`location`,children:J.data.label})]})]}),(0,K.jsx)(_p.Provider,{value:ve,children:(0,K.jsxs)(Qd,{nodes:j,edges:P,nodeTypes:bp,onNodesChange:N,onEdgesChange:I,onConnect:U,onConnectEnd:W,onNodeDragStart:ue,onNodeDrag:de,onNodeDragStop:fe,panOnDrag:O===`pan`||[1,2],selectionOnDrag:O===`select`,isValidConnection:ee,onNodeDoubleClick:(n,r)=>{r.data.type===`graph/molecule`&&o(e,[...t,r.id])},onDoubleClick:e=>{e.target.closest(`.sn, .sn-note, .sn-frame__head`)||y({screen:{x:e.clientX,y:e.clientY},flow:d.screenToFlowPosition({x:e.clientX,y:e.clientY})})},snapToGrid:!0,snapGrid:[10,10],fitView:!0,proOptions:{hideAttribution:!0},deleteKeyCode:[`Delete`,`Backspace`],minZoom:.2,maxZoom:2,children:[(0,K.jsx)(cf,{variant:rf.Lines,gap:24,lineWidth:1,color:T[`grid-line`]}),(0,K.jsx)(Pf,{pannable:!0,zoomable:!0,className:`sn-minimap`,maskColor:`rgba(6, 7, 9, 0.72)`,bgColor:`rgba(10, 12, 16, 0.85)`,nodeColor:e=>{if(e.type===`frame`)return vp[e.data.color]+`40`;let t=g.get(e.data.type);return t?Rp(t):`#555`}}),(0,K.jsx)(_f,{showInteractive:!1})]})}),(0,K.jsx)(z,{}),_&&(0,K.jsx)(ap,{request:_,onPick:te,onClose:()=>y(null)}),x&&(0,K.jsx)(cp,{screen:x.screen,onClose:()=>S(null),onPick:e=>{y({screen:x.screen,flow:x.flow,family:e}),S(null)}})]}):(0,K.jsx)(`div`,{className:`sn-empty`,children:`Nenhum grafo selecionado.`})}function Rp(e){return y(e.family).color}function zp(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Bp(){let e=b(e=>e.graphs),t=b(e=>e.folders),n=b(e=>e.active),r=b(e=>e.status),i=b(e=>e.setActive),a=b(e=>e.create),o=b(e=>e.remove),s=b(e=>e.rename),c=b(e=>e.duplicate),l=b(e=>e.setDisabled),d=b(e=>e.setFolder),f=b(e=>e.createFolder),p=b(e=>e.renameFolder),m=b(e=>e.removeFolder),h=b(e=>e.duplicateFolder),[g,_]=(0,G.useState)(new Set),[v,y]=(0,G.useState)(null),[x,S]=(0,G.useState)(null),[C,w]=(0,G.useState)(null),T=(0,G.useMemo)(()=>{let n=[],r=new Map;for(let e of t)r.set(e,[]);for(let t of Object.values(e))t.folder&&r.has(t.folder)?r.get(t.folder).push(t):n.push(t);return{root:n,map:r}},[e,t]);function E(e){_(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}function D(e){v||x||n&&(e.key===`Delete`||e.key===`Backspace`?(e.preventDefault(),o(n)):(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`d`?(e.preventDefault(),c(n)):e.key===`F2`&&(e.preventDefault(),y(n)))}function O(t){let n=e[t];if(!n)return;let r=new Blob([JSON.stringify(n,null,2)],{type:`application/json`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`${t.replace(/[^\w-]+/g,`_`)}.sinapse.json`,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3),u.getState().pushConsole(`log`,`Grafo "${t}" exportado (.sinapse).`)}function k({g:e}){let t=n===e.name,a=r[e.name],u=a&&!a.ok;return(0,K.jsxs)(`div`,{className:`gt-row`+(t?` active`:``)+(e.disabled?` disabled`:``),draggable:v!==e.name,onClick:()=>i(e.name),onDragStart:t=>t.dataTransfer.setData(`application/x-sinapse-graph`,e.name),title:e.disabled?`Grafo desabilitado (não age em Play)`:e.name,children:[(0,K.jsx)(`span`,{className:`gt-row__icon`+(u&&!e.disabled?` err`:``),"aria-hidden":!0,children:(0,K.jsx)(B,{name:e.disabled?`obj-empty`:u?`stop`:`sinapse`,size:13})}),v===e.name?(0,K.jsx)(`input`,{className:`gt-row__input`,autoFocus:!0,defaultValue:e.name,onClick:e=>e.stopPropagation(),onBlur:t=>{s(e.name,t.target.value),y(null)},onKeyDown:t=>{t.key===`Enter`&&(s(e.name,t.currentTarget.value),y(null)),t.key===`Escape`&&y(null)}}):(0,K.jsx)(`span`,{className:`gt-row__name`,onDoubleClick:t=>{t.stopPropagation(),y(e.name)},children:e.name}),(0,K.jsxs)(`span`,{className:`gt-row__actions`,children:[(0,K.jsx)(`button`,{className:`gt-ibtn`,title:`Duplicar (Ctrl+D)`,"aria-label":`Duplicar grafo`,onClick:t=>{t.stopPropagation(),c(e.name)},children:(0,K.jsx)(B,{name:`duplicate`,size:13})}),(0,K.jsx)(`button`,{className:`gt-ibtn`+(e.disabled?` on`:``),title:e.disabled?`Reabilitar grafo`:`Desabilitar grafo`,"aria-label":e.disabled?`Reabilitar grafo`:`Desabilitar grafo`,onClick:t=>{t.stopPropagation(),l(e.name,!e.disabled)},children:(0,K.jsx)(B,{name:e.disabled?`play`:`pause`,size:13})}),(0,K.jsx)(`button`,{className:`gt-ibtn`,title:`Exportar grafo (.sinapse)`,"aria-label":`Exportar grafo`,onClick:t=>{t.stopPropagation(),O(e.name)},children:(0,K.jsx)(B,{name:`export`,size:13})}),(0,K.jsx)(`button`,{className:`gt-ibtn gt-ibtn--del`,title:`Deletar (Del)`,"aria-label":`Deletar grafo`,onClick:t=>{t.stopPropagation(),o(e.name)},children:(0,K.jsx)(B,{name:`delete`,size:13})})]})]})}return(0,K.jsxs)(`div`,{className:`gt`,tabIndex:0,onKeyDown:D,children:[(0,K.jsxs)(`div`,{className:`gt__head`,children:[(0,K.jsx)(`span`,{className:`gt__title`,children:`Grafos`}),(0,K.jsxs)(`div`,{className:`gt__head-actions`,children:[(0,K.jsx)(`button`,{className:`gt-ibtn`,title:`Novo grafo`,"aria-label":`Novo grafo`,onClick:()=>a(),children:(0,K.jsx)(B,{name:`add`,size:14})}),(0,K.jsx)(`button`,{className:`gt-ibtn`,title:`Nova pasta`,"aria-label":`Nova pasta`,onClick:()=>f(),children:(0,K.jsx)(B,{name:`folder`,size:14})})]})]}),(0,K.jsxs)(`div`,{className:`gt__body`,children:[t.map(e=>{let t=T.map.get(e)??[],n=g.has(e);return(0,K.jsxs)(`div`,{className:`gt-folder`+(C===e?` dropover`:``),onDragOver:t=>{t.dataTransfer.types.includes(`application/x-sinapse-graph`)&&(t.preventDefault(),w(e))},onDragLeave:()=>w(t=>t===e?null:t),onDrop:t=>{let n=t.dataTransfer.getData(`application/x-sinapse-graph`);w(null),n&&d(n,e)},children:[(0,K.jsxs)(`div`,{className:`gt-folder__head`,children:[(0,K.jsx)(`button`,{className:`gt-folder__twist`,"aria-label":n?`Abrir pasta`:`Fechar pasta`,"aria-expanded":!n,onClick:()=>E(e),children:(0,K.jsx)(B,{name:n?`expand`:`collapse`,size:12})}),(0,K.jsx)(`span`,{className:`gt-folder__icon`,"aria-hidden":!0,children:(0,K.jsx)(B,{name:`folder`,size:13})}),x===e?(0,K.jsx)(`input`,{className:`gt-row__input`,autoFocus:!0,defaultValue:e,onBlur:t=>{p(e,t.target.value),S(null)},onKeyDown:t=>{t.key===`Enter`&&(p(e,t.currentTarget.value),S(null)),t.key===`Escape`&&S(null)}}):(0,K.jsxs)(`span`,{className:`gt-folder__name`,onDoubleClick:()=>S(e),children:[e,` `,(0,K.jsx)(`span`,{className:`gt-folder__count`,children:t.length})]}),(0,K.jsxs)(`span`,{className:`gt-row__actions`,children:[(0,K.jsx)(`button`,{className:`gt-ibtn`,title:`Duplicar pasta`,"aria-label":`Duplicar pasta`,onClick:()=>h(e),children:(0,K.jsx)(B,{name:`duplicate`,size:13})}),(0,K.jsx)(`button`,{className:`gt-ibtn gt-ibtn--del`,title:`Remover pasta (grafos vão para a raiz)`,"aria-label":`Remover pasta`,onClick:()=>m(e),children:(0,K.jsx)(B,{name:`delete`,size:13})})]})]}),!n&&(0,K.jsx)(`div`,{className:`gt-folder__body`,children:t.length===0?(0,K.jsx)(`div`,{className:`gt-folder__empty`,children:`arraste grafos para cá`}):t.map(e=>(0,K.jsx)(k,{g:e},e.name))})]},e)}),(0,K.jsxs)(`div`,{className:`gt-root`+(C===`@root`?` dropover`:``),onDragOver:e=>{e.dataTransfer.types.includes(`application/x-sinapse-graph`)&&(e.preventDefault(),w(`@root`))},onDragLeave:()=>w(e=>e===`@root`?null:e),onDrop:e=>{let t=e.dataTransfer.getData(`application/x-sinapse-graph`);w(null),t&&d(t,void 0)},children:[T.root.map(e=>(0,K.jsx)(k,{g:e},e.name)),Object.keys(e).length===0&&(0,K.jsx)(`div`,{className:`gt-folder__empty`,children:`Nenhum grafo. Use o botão Novo grafo ou a Biblioteca de Mecânicas.`})]})]})]})}var Vp=`/**
 * Expctral Runtime — o mínimo para rodar o \`logic.ts\` ejetado SEM a engine
 * (master prompt §3.6: 0% lock-in do gameplay). Só depende de \`three\`.
 *
 * Este arquivo é seu: leia, mude ou troque peças. Ele implementa a mesma API
 * que o código gerado pela Sinapse usa dentro do Expctral Optic Modulator
 * (\`this.transform\`, \`this.physics\`, \`this.game\`, \`this.hud\`…), com:
 *
 * - \`World\`: lista de entities, laço de jogo (física em passo fixo + update),
 *   remoção deferida, prefabs e câmera ativa;
 * - \`SimplePhysics\`: física de caixas alinhadas aos eixos (AABB) com gravidade,
 *   chão, sensores (onTrigger) e raycast. NÃO é o Rapier da engine: não há
 *   rotação de corpos nem formas além de caixa. Para física completa, troque
 *   por um adaptador seu com os mesmos métodos (veja \`PhysicsApi\`);
 * - \`loadScene\`: monta um \`World\` a partir do \`scene.json\` exportado
 *   (primitivas, luzes, câmera, corpos e scripts);
 * - \`Input\`, \`GameState\`, \`Hud\`, \`PathSampler\`, \`Time\`, \`CameraShake\`.
 */
import * as THREE from 'three'

/* ================================ tempo ================================ */

/** Relógio do jogo — atualizado pelo World a cada frame. */
export const Time = {
  /** segundos desde o início (já escalado por timescale) */
  elapsed: 0,
  /** segundos desde o frame anterior (já escalado por timescale) */
  delta: 0,
  /** total de frames */
  frame: 0,
  /** 1 = normal, 0 = congelado (hitstop), 0.2 = câmera lenta */
  timescale: 1,
  reset(): void {
    this.elapsed = 0
    this.delta = 0
    this.frame = 0
    this.timescale = 1
  },
  tick(dt: number): void {
    this.delta = dt
    this.elapsed += dt
    this.frame++
  },
}

/* ================================ input ================================ */

export interface InputBinding {
  action: string
  keys: string[]
}

/**
 * Gamepad e touch de cada ação padrão (cópia de runtime/input/devices.ts da
 * engine). Botões do controle: Pad0…Pad15; analógico esquerdo: PadUp/Down/
 * Left/Right; o direito move a câmera como o mouse.
 */
export const DEVICE_DEFAULTS: Record<string, string[]> = {
  'move-forward': ['PadUp', 'TouchUp'],
  'move-back': ['PadDown', 'TouchDown'],
  'move-left': ['PadLeft', 'TouchLeft'],
  'move-right': ['PadRight', 'TouchRight'],
  jump: ['Pad0', 'TouchA'],
  fire: ['Pad7', 'Pad5', 'TouchB'],
  sprint: ['Pad10', 'Pad4'],
  interact: ['Pad2', 'TouchX'],
}

const isDeviceCode = (code: string) => code.startsWith('Pad') || code.startsWith('Touch')

/** soma gamepad e touch às ações padrão que não têm nenhum desses códigos */
export function withDeviceDefaults(bindings: InputBinding[]): InputBinding[] {
  return bindings.map((b) => {
    const extra = DEVICE_DEFAULTS[b.action]
    if (!extra || b.keys.some(isDeviceCode)) return b
    return { ...b, keys: [...b.keys, ...extra] }
  })
}

interface PadLike {
  buttons: readonly { pressed: boolean }[]
  axes: readonly number[]
}

/**
 * Input por AÇÕES (não teclas cruas): o mapa ação → teclas vem do projeto.
 * Botões do mouse viram pseudo-teclas "Mouse0", "Mouse1"…; o controle (Gamepad
 * API) é lido a cada quadro em \`beginFrame()\`.
 */
export class Input {
  private down = new Set<string>()
  private pressed = new Set<string>()
  private released = new Set<string>()
  private actionMap = new Map<string, string[]>()
  private el: HTMLElement | null = null

  mouse = { x: 0, y: 0, dx: 0, dy: 0, buttons: 0 }
  wheel = 0

  setActionMap(bindings: InputBinding[]): void {
    this.actionMap = new Map(withDeviceDefaults(bindings).map((b) => [b.action, [...b.keys]]))
  }

  /** o mapa ativo (com padrões de dispositivo e remapeamentos) */
  bindings(): InputBinding[] {
    return [...this.actionMap].map(([action, keys]) => ({ action, keys: [...keys] }))
  }

  /** remapear: \`replace\` troca só os códigos do mesmo tipo de dispositivo */
  bind(action: string, code: string, replace = true): void {
    const kind = (c: string) => (c.startsWith('Pad') ? 'pad' : c.startsWith('Touch') ? 'touch' : 'kb')
    const keys = this.actionMap.get(action) ?? []
    const kept = replace ? keys.filter((k) => kind(k) !== kind(code)) : keys.filter((k) => k !== code)
    this.actionMap.set(action, [...kept, code])
  }

  /** chama \`cb\` com a PRÓXIMA tecla, botão do mouse ou do controle */
  captureNext(cb: (code: string) => void): void {
    this.capture = cb
  }
  private capture: ((code: string) => void) | null = null

  private padState = new Set<string>()
  /** fonte dos controles (testes trocam por uma lista falsa) */
  getGamepads: () => readonly (PadLike | null)[] = () =>
    typeof navigator !== 'undefined' && navigator.getGamepads ? navigator.getGamepads() : []

  /** início do quadro: lê os controles e converte em press/release */
  beginFrame(): void {
    const now = new Set<string>()
    for (const pad of this.getGamepads()) {
      if (!pad) continue
      pad.buttons.forEach((b, i) => b.pressed && now.add(\`Pad\${i}\`))
      const [lx = 0, ly = 0, rx = 0, ry = 0] = pad.axes
      if (lx < -0.4) now.add('PadLeft')
      if (lx > 0.4) now.add('PadRight')
      if (ly < -0.4) now.add('PadUp')
      if (ly > 0.4) now.add('PadDown')
      const dz = (v: number) => (Math.abs(v) < 0.15 ? 0 : v)
      this.mouse.dx += dz(rx) * 14
      this.mouse.dy += dz(ry) * 14
    }
    for (const code of now) if (!this.padState.has(code)) this.press(code)
    for (const code of this.padState) if (!now.has(code)) this.release(code)
    this.padState = now
  }

  attach(el: HTMLElement): void {
    this.el = el
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('keyup', this.onKeyUp)
    el.addEventListener('pointermove', this.onPointerMove)
    el.addEventListener('pointerdown', this.onPointerDown)
    el.addEventListener('pointerup', this.onPointerUp)
    el.addEventListener('wheel', this.onWheel, { passive: true })
  }

  detach(): void {
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('keyup', this.onKeyUp)
    this.el?.removeEventListener('pointermove', this.onPointerMove)
    this.el?.removeEventListener('pointerdown', this.onPointerDown)
    this.el?.removeEventListener('pointerup', this.onPointerUp)
    this.el?.removeEventListener('wheel', this.onWheel)
    this.el = null
  }

  /** fim do frame: limpa o que vale só por um frame */
  endFrame(): void {
    this.pressed.clear()
    this.released.clear()
    this.mouse.dx = 0
    this.mouse.dy = 0
    this.wheel = 0
  }

  /** simula tecla (testes, controles na tela) */
  press(code: string): void {
    if (this.capture) {
      const cb = this.capture
      this.capture = null
      cb(code)
    }
    if (!this.down.has(code)) this.pressed.add(code)
    this.down.add(code)
  }
  release(code: string): void {
    if (!this.down.has(code)) return
    this.down.delete(code)
    this.released.add(code)
  }

  isKeyDown(code: string): boolean {
    return this.down.has(code)
  }
  isKeyPressed(code: string): boolean {
    return this.pressed.has(code)
  }
  isKeyReleased(code: string): boolean {
    return this.released.has(code)
  }
  isActionActive(action: string): boolean {
    return this.keysOf(action).some((k) => this.down.has(k))
  }
  isActionPressed(action: string): boolean {
    return this.keysOf(action).some((k) => this.pressed.has(k))
  }
  isActionReleased(action: string): boolean {
    return this.keysOf(action).some((k) => this.released.has(k))
  }
  /** eixo −1..1 a partir de duas ações (ex.: 'left'/'right') */
  axis(negAction: string, posAction: string): number {
    return (this.isActionActive(posAction) ? 1 : 0) - (this.isActionActive(negAction) ? 1 : 0)
  }

  private keysOf(action: string): string[] {
    return this.actionMap.get(action) ?? []
  }

  private onKeyDown = (e: KeyboardEvent) => {
    if (!e.repeat) this.press(e.code)
  }
  private onKeyUp = (e: KeyboardEvent) => this.release(e.code)
  private onPointerMove = (e: PointerEvent) => {
    this.mouse.dx += e.movementX
    this.mouse.dy += e.movementY
    this.mouse.x = e.offsetX
    this.mouse.y = e.offsetY
  }
  private onPointerDown = (e: PointerEvent) => {
    this.mouse.buttons |= 1 << e.button
    this.press(\`Mouse\${e.button}\`)
  }
  private onPointerUp = (e: PointerEvent) => {
    this.mouse.buttons &= ~(1 << e.button)
    this.release(\`Mouse\${e.button}\`)
  }
  private onWheel = (e: WheelEvent) => {
    this.wheel += Math.sign(e.deltaY)
  }
}

/* ============================ estado do jogo ============================ */

/** Placares, contadores e flags compartilhados entre objetos. */
export class GameState {
  private numbers = new Map<string, number>()
  private flags = new Map<string, boolean>()
  private listeners = new Set<(key: string, value: number) => void>()

  getNumber(key: string): number {
    return this.numbers.get(key) ?? 0
  }
  setNumber(key: string, value: number): void {
    this.numbers.set(key, value)
    for (const fn of this.listeners) fn(key, value)
  }
  add(key: string, delta: number): number {
    const v = this.getNumber(key) + delta
    this.setNumber(key, v)
    return v
  }
  getFlag(key: string): boolean {
    return this.flags.get(key) ?? false
  }
  setFlag(key: string, value: boolean): void {
    this.flags.set(key, value)
  }
  onChange(fn: (key: string, value: number) => void): () => void {
    this.listeners.add(fn)
    return () => this.listeners.delete(fn)
  }
  reset(): void {
    this.numbers.clear()
    this.flags.clear()
  }
  serialize(): { numbers: [string, number][]; flags: [string, boolean][] } {
    return { numbers: [...this.numbers.entries()], flags: [...this.flags.entries()] }
  }
  load(data: { numbers?: [string, number][]; flags?: [string, boolean][] } | null | undefined): void {
    this.numbers = new Map(data?.numbers ?? [])
    this.flags = new Map(data?.flags ?? [])
    for (const [k, v] of this.numbers) for (const fn of this.listeners) fn(k, v)
  }
}

/* ================================= HUD ================================= */

const HUD_CSS = \`
.ex-hud{position:absolute;inset:0;pointer-events:none;font-family:system-ui,sans-serif;z-index:5;overflow:hidden;color:#f2f3f7}
.ex-hud .bars{position:absolute;top:12px;left:12px;display:flex;flex-direction:column;gap:8px}
.ex-hud .counters{position:absolute;top:12px;right:12px;display:flex;flex-direction:column;gap:6px;align-items:flex-end}
.ex-hud .trackers{position:absolute;top:12px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;gap:4px;align-items:center}
.ex-bar{width:200px}
.ex-bar b{display:block;font-size:11px;text-shadow:0 1px 2px #000;margin-bottom:2px}
.ex-bar .track{height:12px;border-radius:6px;background:rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.15);overflow:hidden}
.ex-bar .track>i{display:block;height:100%}
.ex-chip{font-size:14px;font-weight:600;text-shadow:0 1px 3px #000;background:rgba(10,11,15,.5);padding:3px 10px;border-radius:8px}
.ex-chip.done{color:#34e27a}
.ex-banner{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(6,7,10,.55)}
.ex-banner h1{font-size:44px;font-weight:300;margin:0}
.ex-banner p{color:#9ea4b4;font-size:15px;margin:0}
.ex-dialog{position:absolute;left:50%;bottom:24px;transform:translateX(-50%);width:min(620px,86%);background:rgba(10,11,15,.92);
  border:1px solid rgba(255,255,255,.16);border-radius:14px;padding:16px 18px;pointer-events:auto}
.ex-dialog p{margin:0 0 12px;font-size:15px;line-height:1.5}
.ex-dialog button{display:block;width:100%;margin-top:6px;text-align:left;font:inherit;color:inherit;background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:8px 12px;cursor:pointer}
.ex-hidden{display:none!important}
\`

/** HUD em DOM puro sobre o canvas: barras, contadores, objetivos, banner e diálogo. */
export class Hud {
  readonly root: HTMLDivElement
  private bars: HTMLDivElement
  private counters: HTMLDivElement
  private trackers: HTMLDivElement
  private bannerEl: HTMLDivElement
  private dialogEl: HTMLDivElement
  private widgets = new Map<string, { el: HTMLElement; fill?: HTMLElement; label?: HTMLElement }>()

  constructor(container: HTMLElement) {
    if (!document.getElementById('ex-hud-css')) {
      const s = document.createElement('style')
      s.id = 'ex-hud-css'
      s.textContent = HUD_CSS
      document.head.appendChild(s)
    }
    this.root = div('ex-hud')
    this.bars = div('bars')
    this.counters = div('counters')
    this.trackers = div('trackers')
    this.bannerEl = div('ex-banner ex-hidden')
    this.dialogEl = div('ex-dialog ex-hidden')
    this.root.append(this.bars, this.counters, this.trackers, this.bannerEl, this.dialogEl)
    container.appendChild(this.root)
  }

  /** barra (vida, stamina, XP…) */
  bar(id: string, o: { label: string; value: number; max: number; color?: string }): void {
    let w = this.widgets.get(id)
    if (!w) {
      const wrap = div('ex-bar')
      const label = document.createElement('b')
      const track = div('track')
      const fill = document.createElement('i')
      track.appendChild(fill)
      wrap.append(label, track)
      this.bars.appendChild(wrap)
      w = { el: wrap, fill, label }
      this.widgets.set(id, w)
    }
    w.label!.textContent = \`\${o.label}  \${Math.round(o.value)}/\${Math.round(o.max)}\`
    const pct = o.max > 0 ? Math.max(0, Math.min(1, o.value / o.max)) : 0
    w.fill!.style.width = \`\${pct * 100}%\`
    w.fill!.style.background = o.color ?? '#34e27a'
  }

  /** contador (moedas, pontos…) */
  counter(id: string, o: { label: string; value: number; icon?: string }): void {
    const w = this.chip(id, this.counters)
    w.textContent = \`\${o.icon ? o.icon + ' ' : ''}\${o.label}: \${Math.round(o.value)}\`
  }

  /** objetivo de missão no topo */
  tracker(id: string, o: { label: string; value: number; max: number; done?: boolean }): void {
    const w = this.chip(id, this.trackers)
    w.className = 'ex-chip' + (o.done ? ' done' : '')
    w.textContent = \`\${o.label}  \${Math.round(o.value)}/\${Math.round(o.max)}\`
  }

  /** caixa de diálogo com escolhas; sem escolhas → "Continuar" (i = 0) */
  dialogue(text: string, choices: string[], onPick: (i: number) => void): void {
    const opts = choices.filter((c) => c && c.trim())
    const p = document.createElement('p')
    p.textContent = text
    const buttons = (opts.length ? opts : ['Continuar']).map((label, i) => {
      const b = document.createElement('button')
      b.textContent = label
      b.onclick = () => {
        this.hideDialogue()
        onPick(i)
      }
      return b
    })
    this.dialogEl.replaceChildren(p, ...buttons)
    this.dialogEl.classList.remove('ex-hidden')
  }
  hideDialogue(): void {
    this.dialogEl.classList.add('ex-hidden')
    this.dialogEl.replaceChildren()
  }

  /** tela central (vitória, derrota, mensagem) */
  showBanner(title: string, sub = ''): void {
    const h = document.createElement('h1')
    h.textContent = title
    const p = document.createElement('p')
    p.textContent = sub
    this.bannerEl.replaceChildren(h, p)
    this.bannerEl.classList.remove('ex-hidden')
  }
  hideBanner(): void {
    this.bannerEl.classList.add('ex-hidden')
  }

  dispose(): void {
    this.root.remove()
  }

  private chip(id: string, parent: HTMLElement): HTMLElement {
    let w = this.widgets.get(id)
    if (!w) {
      w = { el: div('ex-chip') }
      parent.appendChild(w.el)
      this.widgets.set(id, w)
    }
    return w.el
  }
}

function div(cls: string): HTMLDivElement {
  const e = document.createElement('div')
  e.className = cls
  return e
}

/* =============================== trajeto =============================== */

/** Trajeto desenhado no Path Editor (o compilador o embute como literal). */
export interface PathData {
  points: [number, number, number][]
  closed?: boolean
  tension?: number
  speedProfile?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut'
  [extra: string]: unknown
}

/** Amostra posição/tangente de um trajeto por u ∈ [0, 1]. */
export class PathSampler {
  readonly usable: boolean
  private curve: THREE.CatmullRomCurve3 | null = null
  private readonly profile: NonNullable<PathData['speedProfile']>

  constructor(data: PathData | null | undefined) {
    const pts = (data?.points ?? []).map((p) => new THREE.Vector3(p[0], p[1], p[2]))
    this.profile = data?.speedProfile ?? 'linear'
    this.usable = pts.length >= 2
    if (this.usable) this.curve = new THREE.CatmullRomCurve3(pts, !!data?.closed, 'catmullrom', data?.tension ?? 0.5)
  }

  private shape(u: number): number {
    const t = Math.min(1, Math.max(0, u))
    if (this.profile === 'easeIn') return t * t
    if (this.profile === 'easeOut') return 1 - (1 - t) * (1 - t)
    if (this.profile === 'easeInOut') return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
    return t
  }

  localAt(u: number, out = new THREE.Vector3()): THREE.Vector3 {
    return this.curve ? this.curve.getPointAt(this.shape(u), out) : out.set(0, 0, 0)
  }
  localTangent(u: number, out = new THREE.Vector3()): THREE.Vector3 {
    return this.curve ? this.curve.getTangentAt(this.shape(u), out) : out.set(0, 0, 1)
  }
  /** ponto no mundo: aplica a matriz de âncora (null = já é mundo) */
  worldAt(u: number, anchor: THREE.Matrix4 | null, out = new THREE.Vector3()): THREE.Vector3 {
    this.localAt(u, out)
    if (anchor) out.applyMatrix4(anchor)
    return out
  }
  worldTangent(u: number, anchor: THREE.Matrix4 | null, out = new THREE.Vector3()): THREE.Vector3 {
    this.localTangent(u, out)
    if (anchor) out.transformDirection(anchor)
    return out.normalize()
  }
}

/* =========================== tremor de câmera =========================== */

/** Offset somado à câmera só no render; decai por tempo real. */
export const CameraShake = {
  amplitude: 0,
  start: 0,
  until: 0,
  fire(amount = 0.3, seconds = 0.25): void {
    const now = performance.now()
    if (now < this.until && amount < this.amplitude) return
    this.amplitude = amount
    this.start = now
    this.until = now + seconds * 1000
  },
  sample(out: THREE.Vector3): THREE.Vector3 | null {
    const now = performance.now()
    if (now >= this.until || this.amplitude <= 0) return null
    const a = this.amplitude * (1 - (now - this.start) / (this.until - this.start || 1))
    return out.set((Math.random() * 2 - 1) * a, (Math.random() * 2 - 1) * a, (Math.random() * 2 - 1) * a)
  },
}

/* ================================ rastro ================================ */
/**
 * Rastro (fita/ribbon) atrás de um objeto: projéteis, espadas, veículos.
 * Guarda os pontos recentes em espaço de MUNDO e monta uma fita que afina e
 * escurece com a idade (aditivo: escurecer = sumir). Só depende de three —
 * o runtime ejetado tem uma cópia igual.
 */
export interface TrailOptions {
  /** largura da fita na ponta nova */
  width: number
  /** quanto tempo um ponto fica na fita (s) */
  life: number
  color: string
  /** horizontal: fita deitada (chão, veículos) · vertical: em pé (espadas) */
  orientation?: 'horizontal' | 'vertical'
}

const UP = new THREE.Vector3(0, 1, 0)
const MAX = 64

export class Trail {
  readonly mesh: THREE.Mesh
  private pts: { p: THREE.Vector3; t: number }[] = []
  private readonly pos = new Float32Array(MAX * 2 * 3)
  private readonly col = new Float32Array(MAX * 2 * 3)
  private opts: TrailOptions
  private readonly c = new THREE.Color()

  constructor(opts: TrailOptions) {
    this.opts = opts
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage))
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage))
    const index: number[] = []
    for (let i = 0; i < MAX - 1; i++) {
      const a = i * 2
      index.push(a, a + 1, a + 2, a + 1, a + 3, a + 2)
    }
    geo.setIndex(index)
    geo.setDrawRange(0, 0)
    const mat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    })
    this.mesh = new THREE.Mesh(geo, mat)
    this.mesh.frustumCulled = false
    this.mesh.raycast = () => {} // não é clicável
  }

  setOptions(opts: TrailOptions): void {
    this.opts = opts
  }

  /** pontos vivos agora (testes) */
  get length(): number {
    return this.pts.length
  }

  /** acrescenta a posição atual (mundo) e remonta a fita */
  update(p: THREE.Vector3, now: number): void {
    const { life, width } = this.opts
    const last = this.pts[this.pts.length - 1]
    if (!last || last.p.distanceToSquared(p) > 1e-4) this.pts.push({ p: p.clone(), t: now })
    else last.t = now
    while (this.pts.length && now - this.pts[0].t > life) this.pts.shift()
    while (this.pts.length > MAX) this.pts.shift()

    const n = this.pts.length
    const geo = this.mesh.geometry
    if (n < 2) {
      geo.setDrawRange(0, 0)
      return
    }
    this.c.set(this.opts.color)
    const dir = new THREE.Vector3()
    const side = new THREE.Vector3()
    for (let i = 0; i < n; i++) {
      const cur = this.pts[i]
      const a = this.pts[Math.max(0, i - 1)].p
      const b = this.pts[Math.min(n - 1, i + 1)].p
      dir.subVectors(b, a)
      if (this.opts.orientation === 'vertical') side.copy(UP)
      else {
        side.crossVectors(dir, UP)
        if (side.lengthSq() < 1e-8) side.set(1, 0, 0)
        side.normalize()
      }
      // 1 na ponta nova, 0 no fim da vida: afina e escurece
      const k = Math.max(0, 1 - (now - cur.t) / Math.max(1e-3, life))
      const w = width * 0.5 * k
      const o = i * 6
      this.pos[o] = cur.p.x + side.x * w
      this.pos[o + 1] = cur.p.y + side.y * w
      this.pos[o + 2] = cur.p.z + side.z * w
      this.pos[o + 3] = cur.p.x - side.x * w
      this.pos[o + 4] = cur.p.y - side.y * w
      this.pos[o + 5] = cur.p.z - side.z * w
      for (let v = 0; v < 2; v++) {
        this.col[o + v * 3] = this.c.r * k
        this.col[o + v * 3 + 1] = this.c.g * k
        this.col[o + v * 3 + 2] = this.c.b * k
      }
    }
    geo.attributes.position.needsUpdate = true
    geo.attributes.color.needsUpdate = true
    geo.setDrawRange(0, (n - 1) * 6)
  }

  dispose(): void {
    this.mesh.removeFromParent()
    this.mesh.geometry.dispose()
    ;(this.mesh.material as THREE.Material).dispose()
  }
}

/* ================================ entity ================================ */

let nextId = 0

/** Um objeto do jogo: um THREE.Group + os Behaviours ligados a ele. */
export class Entity {
  readonly id: string
  name: string
  readonly object3D = new THREE.Group()
  readonly behaviours: Behaviour[] = []
  world: World | null = null
  private _active = true

  constructor(name = 'Entity') {
    this.id = \`e\${++nextId}\`
    this.name = name
    this.object3D.name = name
  }

  get active(): boolean {
    return this._active
  }
  set active(v: boolean) {
    this._active = v
    this.object3D.visible = v
  }

  /** mesmo nome usado na engine (onDamage percorre os componentes) */
  get components(): Behaviour[] {
    return this.behaviours
  }

  addBehaviour<T extends Behaviour>(b: T): T {
    b.entity = this
    this.behaviours.push(b)
    return b
  }

  getBehaviour<T extends Behaviour>(cls: new () => T): T | undefined {
    return this.behaviours.find((b) => b instanceof cls) as T | undefined
  }
}

/* =============================== física =============================== */

export type BodyType = 'dynamic' | 'fixed' | 'kinematic'

export interface BodyOptions {
  type?: BodyType
  /** meia-extensão da caixa; sem ela, usa o bounding box do objeto */
  halfExtents?: [number, number, number]
  sensor?: boolean
  gravityScale?: number
  linearDamping?: number
  mass?: number
}

export interface RaycastHit {
  acertou: boolean
  objeto: Entity | null
  distancia: number
}

/** O que \`this.physics\` oferece aos scripts. Troque por Rapier/cannon com a mesma forma. */
export interface PhysicsApi {
  applyImpulse(entity: Entity | null | undefined, x: number, y: number, z: number): void
  setVelocity(entity: Entity | null | undefined, x: number, y: number, z: number): void
  getVelocity(entity: Entity | null | undefined): THREE.Vector3
  teleport(entity: Entity | null | undefined, x: number, y: number, z: number): void
  isGrounded(entity: Entity | null | undefined, distance?: number): boolean
  /** \`ignorar\`: objeto cujo corpo o raio atravessa (ex.: o próprio jogador) */
  raycast(origin: THREE.Vector3, direction: THREE.Vector3, maxDistance?: number, ignorar?: Entity | null): RaycastHit
}

interface Body {
  entity: Entity
  type: BodyType
  half: THREE.Vector3
  sensor: boolean
  gravityScale: number
  linearDamping: number
  mass: number
  velocity: THREE.Vector3
}

const SKIN = 0.02

/**
 * Física de caixas alinhadas aos eixos. Corpos dinâmicos caem e param em
 * corpos sólidos; cinemáticos seguem o transform (movidos pelo script); fixos
 * não se movem. Sensores não colidem e disparam \`onTrigger\`. Como no Rapier
 * da engine, só há evento se o par tiver ao menos um corpo dinâmico.
 */
export class SimplePhysics implements PhysicsApi {
  gravity = new THREE.Vector3(0, -9.81, 0)
  private bodies = new Map<Entity, Body>()
  private contacts = new Set<string>()
  private readonly world: World

  constructor(world: World) {
    this.world = world
  }

  add(entity: Entity, opts: BodyOptions = {}): void {
    let half: THREE.Vector3
    if (opts.halfExtents) {
      half = new THREE.Vector3(...opts.halfExtents)
    } else {
      const box = new THREE.Box3().setFromObject(entity.object3D)
      half = box.isEmpty() ? new THREE.Vector3(0.5, 0.5, 0.5) : box.getSize(new THREE.Vector3()).multiplyScalar(0.5)
    }
    half.max(new THREE.Vector3(0.05, 0.05, 0.05))
    this.bodies.set(entity, {
      entity,
      type: opts.type ?? 'dynamic',
      half,
      sensor: !!opts.sensor,
      gravityScale: opts.gravityScale ?? 1,
      linearDamping: opts.linearDamping ?? 0,
      mass: opts.mass && opts.mass > 0 ? opts.mass : 1,
      velocity: new THREE.Vector3(),
    })
  }

  remove(entity: Entity): void {
    this.bodies.delete(entity)
    for (const key of [...this.contacts]) if (key.split('|').includes(entity.id)) this.contacts.delete(key)
  }

  has(entity: Entity): boolean {
    return this.bodies.has(entity)
  }

  applyImpulse(entity: Entity | null | undefined, x: number, y: number, z: number): void {
    const b = entity && this.bodies.get(entity)
    if (b && b.type === 'dynamic') b.velocity.add(new THREE.Vector3(x, y, z).divideScalar(b.mass))
  }

  setVelocity(entity: Entity | null | undefined, x: number, y: number, z: number): void {
    const b = entity && this.bodies.get(entity)
    if (b && b.type !== 'fixed') b.velocity.set(x, y, z)
  }

  getVelocity(entity: Entity | null | undefined): THREE.Vector3 {
    const b = entity && this.bodies.get(entity)
    return b ? b.velocity.clone() : new THREE.Vector3()
  }

  teleport(entity: Entity | null | undefined, x: number, y: number, z: number): void {
    if (!entity) return
    entity.object3D.position.set(x, y, z)
    this.bodies.get(entity)?.velocity.set(0, 0, 0)
  }

  isGrounded(entity: Entity | null | undefined, distance = 1.1): boolean {
    if (!entity || !this.bodies.has(entity)) return false
    const origin = entity.object3D.getWorldPosition(new THREE.Vector3())
    return this.cast(origin, new THREE.Vector3(0, -1, 0), distance, entity) !== null
  }

  raycast(origin: THREE.Vector3, direction: THREE.Vector3, maxDistance = 100, ignorar?: Entity | null): RaycastHit {
    const hit = this.cast(origin, direction, maxDistance, ignorar ?? undefined)
    return { acertou: !!hit, objeto: hit?.entity ?? null, distancia: hit?.toi ?? Infinity }
  }

  /** um passo fixo: integra, resolve contra sólidos e dispara eventos */
  step(dt: number): void {
    for (const b of this.bodies.values()) {
      if (b.type !== 'dynamic' || !b.entity.active) continue
      b.velocity.addScaledVector(this.gravity, b.gravityScale * dt)
      if (b.linearDamping > 0) b.velocity.multiplyScalar(1 / (1 + dt * b.linearDamping))
      if (b.sensor) {
        b.entity.object3D.position.addScaledVector(b.velocity, dt)
        continue
      }
      for (const axis of ['x', 'y', 'z'] as const) this.moveAxis(b, axis, b.velocity[axis] * dt)
    }
    this.detectContacts()
  }

  private moveAxis(b: Body, axis: 'x' | 'y' | 'z', delta: number): void {
    if (delta === 0) return
    const pos = b.entity.object3D.position
    pos[axis] += delta
    for (const o of this.bodies.values()) {
      if (o === b || o.sensor || !o.entity.active) continue
      const op = o.entity.object3D.position
      if (!overlaps(pos, b.half, op, o.half, 0)) continue
      // empurra para fora pelo lado de onde veio e zera a velocidade nesse eixo
      pos[axis] = delta > 0 ? op[axis] - o.half[axis] - b.half[axis] : op[axis] + o.half[axis] + b.half[axis]
      b.velocity[axis] = 0
    }
  }

  private detectContacts(): void {
    const list = [...this.bodies.values()].filter((b) => b.entity.active)
    const now = new Set<string>()
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const a = list[i], b = list[j]
        if (a.type !== 'dynamic' && b.type !== 'dynamic') continue
        const pa = a.entity.object3D.position, pb = b.entity.object3D.position
        if (!overlaps(pa, a.half, pb, b.half, SKIN)) continue
        const key = a.entity.id < b.entity.id ? \`\${a.entity.id}|\${b.entity.id}\` : \`\${b.entity.id}|\${a.entity.id}\`
        now.add(key)
        if (this.contacts.has(key)) continue
        this.world.dispatchContact(a.entity, b.entity, a.sensor)
        this.world.dispatchContact(b.entity, a.entity, b.sensor)
      }
    }
    this.contacts = now
  }

  private cast(origin: THREE.Vector3, dir: THREE.Vector3, max: number, ignore?: Entity): { entity: Entity; toi: number } | null {
    const ray = new THREE.Ray(origin, dir.clone().normalize())
    const box = new THREE.Box3()
    const hitPoint = new THREE.Vector3()
    let best: { entity: Entity; toi: number } | null = null
    for (const b of this.bodies.values()) {
      if (b.entity === ignore || !b.entity.active) continue
      const p = b.entity.object3D.position
      box.min.copy(p).sub(b.half)
      box.max.copy(p).add(b.half)
      const toi = box.containsPoint(origin) ? 0 : ray.intersectBox(box, hitPoint) ? origin.distanceTo(hitPoint) : null
      if (toi !== null && toi <= max && (!best || toi < best.toi)) best = { entity: b.entity, toi }
    }
    return best
  }
}

function overlaps(pa: THREE.Vector3, ha: THREE.Vector3, pb: THREE.Vector3, hb: THREE.Vector3, skin: number): boolean {
  return (
    Math.abs(pa.x - pb.x) < ha.x + hb.x + skin - 1e-6 &&
    Math.abs(pa.y - pb.y) < ha.y + hb.y + skin - 1e-6 &&
    Math.abs(pa.z - pb.z) < ha.z + hb.z + skin - 1e-6
  )
}

/** física nula: o script nunca quebra quando o objeto está fora de um World */
const NO_PHYSICS: PhysicsApi = {
  applyImpulse() {},
  setVelocity() {},
  getVelocity: () => new THREE.Vector3(),
  teleport(entity, x, y, z) {
    entity?.object3D.position.set(x, y, z)
  },
  isGrounded: () => false,
  raycast: () => ({ acertou: false, objeto: null, distancia: Infinity }),
}

/* ============================== behaviour ============================== */

/**
 * Base dos scripts. O código gerado pela Sinapse faz:
 *
 *   export default class Sinapse_Jogador extends Behaviour {
 *     velocidade = 6
 *     update(dt: number) { ... }
 *   }
 */
export class Behaviour {
  entity!: Entity
  enabled = true

  /* ciclo de vida (sobrescreva o que precisar) */
  start(): void {}
  update(_dt: number): void {}
  fixedUpdate(_dt: number): void {}
  /** ao sair do mundo, os rastros saem junto */
  onDestroy(): void {
    for (const t of this._trails.values()) t.dispose()
    this._trails.clear()
  }
  onCollision?(other: Entity): void
  onTrigger?(other: Entity): void
  onDamage?(amount: number, from: Entity): void
  onEvent?(evt: string, value: unknown, from: Entity): void

  /** o THREE.Group desta entity (posição, rotação, escala) */
  get transform(): THREE.Object3D {
    return this.entity.object3D
  }
  get time(): typeof Time {
    return Time
  }
  /** o World em que o script roda (start/update só rodam dentro de um) */
  get scene(): World {
    return this.entity.world!
  }
  get input(): Input {
    return this.entity.world?.input ?? IDLE_INPUT
  }
  get physics(): PhysicsApi {
    return this.entity.world?.physics ?? NO_PHYSICS
  }
  get game(): GameState {
    return this.entity.world?.game ?? (FALLBACK_GAME ??= new GameState())
  }
  get hud(): Hud | null {
    return this.entity.world?.hud ?? null
  }

  log(...args: unknown[]): void {
    console.log(\`[\${this.entity.name}]\`, ...args)
  }
  warn(...args: unknown[]): void {
    console.warn(\`[\${this.entity.name}]\`, ...args)
  }
  error(...args: unknown[]): void {
    console.error(\`[\${this.entity.name}]\`, ...args)
  }

  find(name: string): Entity | null {
    return this.entity.world?.find(name) ?? null
  }

  /** remove a entity (deferido até o fim do frame) */
  destroy(target?: Entity | null): void {
    const e = target ?? this.entity
    e.world?.remove(e)
  }

  /** cria uma entity vazia */
  spawn(name = 'Spawned'): Entity {
    const e = new Entity(name)
    this.entity.world?.add(e)
    return e
  }

  /** instancia um prefab do scene.json numa posição */
  spawnPrefab(name: string, x = 0, y = 0, z = 0): Entity | null {
    return this.entity.world?.spawnPrefab(name, x, y, z) ?? null
  }

  /** orienta a entity para olhar um ponto na convenção de câmera (−Z ao alvo) */
  aimAt(x: number, y: number, z: number): void {
    const o = this.entity.object3D
    const m = new THREE.Matrix4().lookAt(o.position, new THREE.Vector3(x, y, z), new THREE.Vector3(0, 1, 0))
    o.quaternion.setFromRotationMatrix(m)
  }

  /** direção do olhar de uma entity-câmera (view = −Z do grupo) */
  viewDirOf(entity: Entity | null | undefined): THREE.Vector3 {
    if (!entity) return new THREE.Vector3(0, 0, -1)
    return entity.object3D.getWorldDirection(new THREE.Vector3()).negate()
  }

  /** bip sintetizado (sem asset) */
  tone(freq = 880, dur = 0.1, vol = 0.15, type: OscillatorType = 'square'): void {
    const ctx = this.entity.world?.audio()
    if (!ctx) return
    if (ctx.state === 'suspended') void ctx.resume()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = type
    osc.frequency.value = freq
    gain.gain.setValueAtTime(vol, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur)
    osc.connect(gain).connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + dur)
  }

  /** aplica dano: chama onDamage(amount, from) nos behaviours do alvo */
  damage(target: Entity | null | undefined, amount: number): void {
    if (!target) return
    for (const b of target.behaviours) b.onDamage?.(amount, this.entity)
  }

  /* ---- trajeto ---- */

  captureMatrix(): THREE.Matrix4 {
    this.entity.object3D.updateWorldMatrix(true, false)
    return this.entity.object3D.matrixWorld.clone()
  }

  /** matriz da âncora: world → nula · spawn → capturada · player/target → do objeto · bone → osso ("Objeto/Osso") */
  pathAnchor(space: string, anchorName?: string, spawn?: THREE.Matrix4 | null): THREE.Matrix4 | null {
    if (space === 'world') return null
    if (space === 'spawn') return spawn ?? this.captureMatrix()
    if (space === 'bone') {
      // "Objeto/Osso" (osso de outro objeto) ou só "Osso" (deste objeto)
      const [objName, boneName] = (anchorName ?? '').includes('/')
        ? (anchorName ?? '').split('/', 2)
        : ['', anchorName ?? '']
      const owner = objName ? this.find(objName) : this.entity
      if (!owner) return null
      const bone = boneName ? owner.object3D.getObjectByName(boneName) : undefined
      const node = bone ?? owner.object3D
      node.updateWorldMatrix(true, false)
      return node.matrixWorld
    }
    const name = anchorName || (space === 'player' ? 'Jogador' : '')
    const e = name ? this.find(name) : null
    if (!e) return null
    e.object3D.updateWorldMatrix(true, false)
    return e.object3D.matrixWorld
  }

  pathPoint(sampler: PathSampler, u: number, space: string, anchorName?: string, spawn?: THREE.Matrix4 | null): THREE.Vector3 {
    return sampler.worldAt(u, this.pathAnchor(space, anchorName, spawn))
  }

  pathTangent(sampler: PathSampler, u: number, space: string, anchorName?: string, spawn?: THREE.Matrix4 | null): THREE.Vector3 {
    return sampler.worldTangent(u, this.pathAnchor(space, anchorName, spawn))
  }

  /* ---- IA ---- */

  /** cone de visão: dentro do raio e do ângulo (graus, total); \`los\` testa paredes */
  perceives(target: Entity | null | undefined, range = 16, angleDeg = 360, los = false): boolean {
    if (!target) return false
    const a = target.object3D.position
    const b = this.entity.object3D.position
    const dx = a.x - b.x, dz = a.z - b.z
    const dist = Math.hypot(dx, dz)
    if (dist > range) return false
    if (angleDeg < 360 && dist > 0.001) {
      const fwd = this.entity.object3D.getWorldDirection(new THREE.Vector3())
      const fl = Math.hypot(fwd.x, fwd.z) || 1
      const cos = (fwd.x / fl) * (dx / dist) + (fwd.z / fl) * (dz / dist)
      if (cos < Math.cos((angleDeg * 0.5 * Math.PI) / 180)) return false
    }
    if (los) {
      const origin = new THREE.Vector3(b.x, b.y + 0.5, b.z)
      const dir = new THREE.Vector3(dx, a.y - b.y, dz).normalize()
      const hit = this.physics.raycast(origin, dir, dist)
      if (hit.acertou && hit.objeto && hit.objeto !== target && hit.distancia < dist - 0.5) return false
    }
    return true
  }

  /** separação (flocking) de vizinhos com o mesmo nome, no plano XZ */
  separationForce(name: string, radius = 2): THREE.Vector3 {
    const out = new THREE.Vector3()
    const b = this.entity.object3D.position
    const r2 = radius * radius
    this.entity.world?.traverse((e) => {
      if (e === this.entity || !e.active || e.name !== name) return
      const p = e.object3D.position
      const dx = b.x - p.x, dz = b.z - p.z
      const d2 = dx * dx + dz * dz
      if (d2 > r2 || d2 < 1e-5) return
      const d = Math.sqrt(d2)
      const w = 1 - d / radius
      out.x += (dx / d) * w
      out.z += (dz / d) * w
    })
    return out
  }

  /* ---- game feel ---- */

  /** congela/afrouxa o tempo do jogo por \`seconds\` reais */
  hitstop(seconds = 0.08, scale = 0): void {
    Time.timescale = scale
    setTimeout(() => {
      Time.timescale = 1
    }, Math.max(0, seconds) * 1000)
  }

  shakeCamera(amount = 0.3, seconds = 0.25): void {
    CameraShake.fire(amount, seconds)
  }

  /* ---- diálogo e save/load ---- */

  showDialogue(text: string, choices: string[], onPick: (i: number) => void): void {
    const hud = this.hud
    if (hud) hud.dialogue(text, choices, onPick)
    else onPick(0)
  }

  /** salva placares e flags num slot do localStorage (mesma chave da engine) */
  saveGame(slot: string | number = '1'): void {
    try {
      localStorage.setItem(\`rft-save-\${slot}\`, JSON.stringify(this.game.serialize()))
    } catch (err) {
      this.warn('Falha ao salvar:', err)
    }
  }

  loadGame(slot: string | number = '1'): boolean {
    try {
      const raw = localStorage.getItem(\`rft-save-\${slot}\`)
      if (!raw) return false
      this.game.load(JSON.parse(raw))
      return true
    } catch (err) {
      this.warn('Falha ao carregar:', err)
      return false
    }
  }

  /* ---- eventos customizados ---- */

  /** evento com nome para um objeto, ou para todos se \`target\` for vazio */
  sendEvent(name: string, value: unknown = 0, target?: Entity | null): void {
    const deliver = (e: Entity) => {
      for (const b of e.behaviours) b.onEvent?.(name, value, this.entity)
    }
    if (target) deliver(target)
    else this.entity.world?.traverse(deliver)
  }

  /* ---- VFX ---- */

  /** Partículas (GPU) não vêm no runtime ejetado: sempre false */
  particles(_target: Entity | null | undefined, _on: boolean): boolean {
    return false
  }

  private _trails = new Map<string, Trail>()

  /** rastro deste objeto (um por chave), criado na primeira chamada */
  trail(key: string, opts: TrailOptions): Trail {
    let t = this._trails.get(key)
    if (!t) {
      t = new Trail(opts)
      this.entity.world?.three.add(t.mesh)
      this._trails.set(key, t)
    } else t.setOptions(opts)
    return t
  }

  /**
   * Componente por tipo, como na engine. O runtime ejetado não tem
   * componentes: devolve adaptadores mínimos para o que os nodes usam
   * (MeshRenderer: emissivo do Piscar · AudioSource: tocar som, sem áudio).
   */
  getComponent(type: string): ComponentAdapter | undefined {
    if (type === 'MeshRenderer') return meshAdapter(this.entity)
    if (type === 'AudioSource') return { play() {}, onPropChanged() {} }
    return undefined
  }

  /** troca de cena: chama \`World.onLoadScene\`, se o host definiu */
  loadScene(name: string): void {
    const fn = this.entity.world?.onLoadScene
    if (fn) fn(name)
    else this.warn(\`loadScene sem destino: \${name}\`)
  }
}

/** o que \`getComponent\` devolve no runtime ejetado */
export interface ComponentAdapter {
  emissive?: string
  emissiveIntensity?: number
  onPropChanged(key: string): void
  play(): void
}

/** emissivo da malha do objeto, no formato do MeshRenderer da engine */
function meshAdapter(e: Entity): ComponentAdapter | undefined {
  let mat: THREE.MeshStandardMaterial | null = null
  e.object3D.traverse((o) => {
    const m = (o as THREE.Mesh).material
    if (!mat && m instanceof THREE.MeshStandardMaterial) mat = m
  })
  const material = mat as THREE.MeshStandardMaterial | null
  if (!material) return undefined
  const a: ComponentAdapter = {
    emissive: '#' + material.emissive.getHexString(),
    emissiveIntensity: material.emissiveIntensity,
    onPropChanged() {
      material.emissive.set(a.emissive ?? '#000000')
      material.emissiveIntensity = a.emissiveIntensity ?? 1
    },
    play() {},
  }
  return a
}

const IDLE_INPUT = new Input()
let FALLBACK_GAME: GameState | null = null

export type BehaviourClass = new () => Behaviour

/* ================================ world ================================ */

/** Renderer mínimo: serve WebGPURenderer (three/webgpu) e WebGLRenderer. */
export interface RendererLike {
  domElement: HTMLCanvasElement
  render(scene: THREE.Scene, camera: THREE.Camera): unknown
  setSize(w: number, h: number, updateStyle?: boolean): void
  setPixelRatio(r: number): void
  setAnimationLoop(fn: ((time: number) => void) | null): unknown
}

export interface WorldOptions {
  /** nome do script (ex.: "Sinapse.Jogador") → classe */
  behaviours?: Record<string, BehaviourClass>
  prefabs?: Record<string, EntityJSON>
  inputMap?: InputBinding[]
  /** onde o HUD em DOM é montado (sem ele, \`this.hud\` é null) */
  hudContainer?: HTMLElement | null
}

/** O jogo: entities, física, input, placares, HUD e laço de frame. */
export class World {
  readonly three = new THREE.Scene()
  readonly physics: SimplePhysics
  readonly input = new Input()
  readonly game = new GameState()
  readonly hud: Hud | null
  readonly behaviours: Record<string, BehaviourClass>
  readonly prefabs: Record<string, EntityJSON>
  camera: THREE.Camera | null = null
  /** passo fixo da física (s) */
  fixedStep = 1 / 60
  onLoadScene: ((name: string) => void) | null = null

  private list: Entity[] = []
  private started = new Set<Entity>()
  private removals = new Set<Entity>()
  private accumulator = 0
  private ctx: AudioContext | null = null
  private missing = new Set<string>()

  constructor(opts: WorldOptions = {}) {
    this.physics = new SimplePhysics(this)
    this.behaviours = opts.behaviours ?? {}
    this.prefabs = opts.prefabs ?? {}
    if (opts.inputMap) this.input.setActionMap(opts.inputMap)
    this.hud = opts.hudContainer ? new Hud(opts.hudContainer) : null
    Time.reset()
  }

  /* ---- entities ---- */

  /** adiciona a entity (e o objeto three) ao mundo; \`parent\` aninha */
  add(entity: Entity, parent?: Entity): Entity {
    entity.world = this
    this.list.push(entity)
    ;(parent?.object3D ?? this.three).add(entity.object3D)
    return entity
  }

  /** remove no fim do frame (não corrompe a travessia) */
  remove(entity: Entity): void {
    this.removals.add(entity)
  }

  find(name: string): Entity | null {
    return this.list.find((e) => e.name === name && !this.removals.has(e)) ?? null
  }

  traverse(fn: (e: Entity) => void): void {
    for (const e of [...this.list]) fn(e)
  }

  get entities(): readonly Entity[] {
    return this.list
  }

  /** instancia um prefab (com corpo físico e scripts) */
  spawnPrefab(name: string, x = 0, y = 0, z = 0): Entity | null {
    const json = this.prefabs[name]
    if (!json) {
      console.warn(\`Prefab não encontrado: \${name}\`)
      return null
    }
    const e = buildEntity(this, json)
    e.object3D.position.set(x, y, z)
    return e
  }

  /** chamado pelo SimplePhysics quando um contato começa */
  dispatchContact(entity: Entity, other: Entity, isSensor: boolean): void {
    for (const b of entity.behaviours) {
      if (!b.enabled) continue
      try {
        if (isSensor) b.onTrigger?.(other)
        else b.onCollision?.(other)
      } catch (err) {
        console.error(\`[\${entity.name}] \${isSensor ? 'onTrigger' : 'onCollision'}():\`, err)
      }
    }
  }

  /** contexto de áudio, criado no primeiro uso */
  audio(): AudioContext | null {
    if (!this.ctx && typeof AudioContext !== 'undefined') this.ctx = new AudioContext()
    return this.ctx
  }

  /** só avisa uma vez por script que não veio no ejetado */
  noteMissing(name: string): void {
    if (this.missing.has(name)) return
    this.missing.add(name)
    console.warn(\`Script "\${name}" não está no ejetado: registre-o em behaviours.\`)
  }

  /* ---- laço ---- */

  /** avança o jogo \`rawDt\` segundos reais: física em passo fixo, depois update */
  step(rawDt: number): void {
    const dt = Math.min(rawDt, 0.1) * Time.timescale
    this.accumulator += dt
    let guard = 0
    while (this.accumulator >= this.fixedStep && guard < 5) {
      this.each((b) => b.fixedUpdate(this.fixedStep), 'fixedUpdate')
      this.physics.step(this.fixedStep)
      this.accumulator -= this.fixedStep
      guard++
    }
    Time.tick(dt)
    // controles (Gamepad API) por polling, antes dos scripts do quadro
    this.input.beginFrame()
    for (const e of [...this.list]) {
      if (!e.active || this.started.has(e)) continue
      this.started.add(e)
      for (const b of e.behaviours) if (b.enabled) this.safe(e, 'start', () => b.start())
    }
    this.each((b) => b.update(dt), 'update')
    this.flushRemovals()
    this.input.endFrame()
  }

  /** câmera ativa; sem nenhuma na cena, cria uma padrão olhando a origem */
  ensureCamera(): THREE.Camera {
    if (!this.camera) {
      const cam = new THREE.PerspectiveCamera(60, 16 / 9, 0.1, 500)
      cam.position.set(0, 4, 10)
      cam.lookAt(0, 0, 0)
      this.camera = cam
    }
    return this.camera
  }

  /** desenha a cena com a câmera ativa (com o tremor de câmera aplicado) */
  render(renderer: RendererLike): void {
    const cam = this.ensureCamera()
    const shake = CameraShake.sample(new THREE.Vector3())
    if (shake) cam.position.add(shake)
    renderer.render(this.three, cam)
    if (shake) cam.position.sub(shake)
  }

  /**
   * Liga input, tamanho e laço de animação ao renderer. Devolve \`stop()\`.
   * O canvas vai para \`container\` (padrão: document.body).
   */
  run(renderer: RendererLike, container: HTMLElement = document.body): () => void {
    if (!renderer.domElement.parentElement) container.appendChild(renderer.domElement)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.ensureCamera()
    const resize = () => {
      const w = container.clientWidth || window.innerWidth
      const h = container.clientHeight || window.innerHeight
      renderer.setSize(w, h)
      if (this.camera instanceof THREE.PerspectiveCamera) {
        this.camera.aspect = w / h
        this.camera.updateProjectionMatrix()
      }
    }
    resize()
    window.addEventListener('resize', resize)
    this.input.attach(renderer.domElement)
    const timer = new THREE.Timer()
    renderer.setAnimationLoop((t) => {
      timer.update(t)
      this.step(timer.getDelta())
      this.render(renderer)
    })
    return () => {
      renderer.setAnimationLoop(null)
      window.removeEventListener('resize', resize)
      this.input.detach()
    }
  }

  private each(fn: (b: Behaviour) => void, label: string): void {
    for (const e of [...this.list]) {
      if (!e.active || this.removals.has(e)) continue
      for (const b of e.behaviours) if (b.enabled) this.safe(e, label, () => fn(b))
    }
  }

  private safe(e: Entity, label: string, fn: () => void): void {
    try {
      fn()
    } catch (err) {
      console.error(\`[\${e.name}] \${label}():\`, err)
    }
  }

  private flushRemovals(): void {
    if (!this.removals.size) return
    for (const e of this.removals) {
      // filhos (no grafo three) saem junto
      const gone = this.list.filter((x) => x === e || isDescendant(x.object3D, e.object3D))
      for (const x of gone) {
        for (const b of x.behaviours) this.safe(x, 'onDestroy', () => b.onDestroy())
        this.physics.remove(x)
        this.started.delete(x)
        x.world = null
      }
      this.list = this.list.filter((x) => !gone.includes(x))
      e.object3D.removeFromParent()
    }
    this.removals.clear()
  }
}

function isDescendant(obj: THREE.Object3D, root: THREE.Object3D): boolean {
  for (let p = obj.parent; p; p = p.parent) if (p === root) return true
  return false
}

/* ============================ scene.json ============================ */

/** Formato da cena exportada pela engine (mesmo \`SceneJSON\`/\`EntityJSON\`). */
export interface ComponentJSON {
  type: string
  enabled?: boolean
  props: Record<string, unknown>
}

export interface EntityJSON {
  id?: string
  name: string
  active?: boolean
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number, number]
  components: ComponentJSON[]
  children: EntityJSON[]
}

export interface SceneJSON {
  name: string
  background: string
  fog?: { enabled: boolean; color: string; near: number; far: number }
  entities: EntityJSON[]
}

/** o que o editor grava no \`scene.json\` do ejetado */
export interface EjectedScene {
  scene: SceneJSON
  prefabs?: Record<string, EntityJSON>
  inputMap?: InputBinding[]
}

/** Monta um World a partir do \`scene.json\`. */
export function loadScene(data: EjectedScene, opts: Omit<WorldOptions, 'prefabs' | 'inputMap'> = {}): World {
  const world = new World({ ...opts, prefabs: data.prefabs, inputMap: data.inputMap })
  const s = data.scene
  world.three.background = new THREE.Color(s.background || '#000000')
  if (s.fog?.enabled) world.three.fog = new THREE.Fog(s.fog.color, s.fog.near, s.fog.far)
  for (const json of s.entities) buildEntity(world, json)
  return world
}

const PRIMITIVES: Record<string, () => THREE.BufferGeometry> = {
  box: () => new THREE.BoxGeometry(1, 1, 1),
  sphere: () => new THREE.SphereGeometry(0.5, 32, 16),
  plane: () => new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2),
  cylinder: () => new THREE.CylinderGeometry(0.5, 0.5, 1, 32),
  capsule: () => new THREE.CapsuleGeometry(0.4, 0.6, 8, 16),
}

/** cria a entity (e filhos) com malha, luz, câmera, corpo e scripts */
export function buildEntity(world: World, json: EntityJSON, parent?: Entity): Entity {
  const e = new Entity(json.name)
  e.object3D.position.fromArray(json.position)
  e.object3D.rotation.fromArray(json.rotation)
  e.object3D.scale.fromArray(json.scale)
  world.add(e, parent)

  let body: BodyOptions | null = null
  let collider: ComponentJSON['props'] | null = null
  for (const c of json.components) {
    if (c.enabled === false) continue
    const p = c.props
    if (c.type === 'MeshRenderer') addMesh(e, p)
    else if (c.type === 'Light') addLight(e, p)
    else if (c.type === 'Camera') addCamera(world, e, p)
    else if (c.type === 'RigidBody') {
      body = {
        type: (str(p.bodyType, 'dynamic') as BodyType),
        mass: num(p.mass, 1),
        gravityScale: num(p.gravityScale, 1),
        linearDamping: num(p.linearDamping, 0),
      }
    } else if (c.type === 'Collider') collider = p
    else if (c.type.startsWith('Script:')) {
      const name = c.type.slice('Script:'.length)
      const cls = world.behaviours[name]
      if (!cls) {
        world.noteMissing(name)
        continue
      }
      const b = e.addBehaviour(new cls())
      Object.assign(b, p) // parâmetros editados no Inspector
      b.enabled = true
    }
  }
  for (const child of json.children) buildEntity(world, child, e)

  // como na engine: só entity com RigidBody tem corpo; Collider ajusta a forma
  if (body) {
    if (collider) {
      body.sensor = !!collider.isSensor
      const s = e.object3D.scale
      const shape = str(collider.shape, 'auto')
      if (shape === 'box') {
        body.halfExtents = [(num(collider.sizeX, 1) * s.x) / 2, (num(collider.sizeY, 1) * s.y) / 2, (num(collider.sizeZ, 1) * s.z) / 2]
      } else if (shape === 'sphere' || shape === 'capsule') {
        const r = num(collider.radius, 0.5) * s.x
        const hy = shape === 'capsule' ? (num(collider.sizeY, 1) * s.y) / 2 + r : r
        body.halfExtents = [r, hy, r]
      }
    }
    e.object3D.updateMatrixWorld(true)
    world.physics.add(e, body)
  }
  e.active = json.active ?? true
  return e
}

function addMesh(e: Entity, p: Record<string, unknown>): void {
  const make = PRIMITIVES[str(p.primitive, 'box')]
  if (!make) {
    console.warn(\`[\${e.name}] modelo importado não vem no ejetado; usando um cubo.\`)
  }
  const opacity = num(p.opacity, 1)
  const mat = new THREE.MeshStandardMaterial({
    color: str(p.color, '#c8ccd6'),
    metalness: num(p.metalness, 0),
    roughness: num(p.roughness, 0.6),
    emissive: str(p.emissive, '#000000'),
    emissiveIntensity: num(p.emissiveIntensity, 1),
    transparent: opacity < 1,
    opacity,
  })
  const mesh = new THREE.Mesh((make ?? PRIMITIVES.box)(), mat)
  mesh.castShadow = p.castShadow !== false
  mesh.receiveShadow = p.receiveShadow !== false
  e.object3D.add(mesh)
}

function addLight(e: Entity, p: Record<string, unknown>): void {
  const color = str(p.color, '#ffffff')
  const intensity = num(p.intensity, 2)
  const kind = str(p.kind, 'directional')
  let light: THREE.Light
  if (kind === 'ambient') light = new THREE.AmbientLight(color, intensity)
  else if (kind === 'point') light = new THREE.PointLight(color, intensity, num(p.distance, 0))
  else if (kind === 'spot') light = new THREE.SpotLight(color, intensity, num(p.distance, 0), num(p.angle, Math.PI / 6))
  else light = new THREE.DirectionalLight(color, intensity)
  if (kind !== 'ambient' && p.castShadow !== false) {
    light.castShadow = true
    const shadow = (light as THREE.DirectionalLight).shadow
    shadow.mapSize.set(1024, 1024)
    shadow.bias = -0.0005
  }
  // direcional/spot miram a origem do mundo (alvo padrão do three)
  e.object3D.add(light)
}

function addCamera(world: World, e: Entity, p: Record<string, unknown>): void {
  const cam = new THREE.PerspectiveCamera(num(p.fov, 60), 16 / 9, num(p.near, 0.1), num(p.far, 500))
  e.object3D.add(cam)
  if (p.main !== false && !world.camera) world.camera = cam
}

function num(v: unknown, fallback: number): number {
  return typeof v === 'number' && Number.isFinite(v) ? v : fallback
}
function str(v: unknown, fallback: string): string {
  return typeof v === 'string' && v ? v : fallback
}
`,Hp=[`Behaviour`,`PathSampler`,`Entity`,`Time`],Up=[`Vector3`,`Vector2`,`Matrix4`,`Quaternion`,`Color`,`MathUtils`],Wp=[[/^ {2}(update|fixedUpdate)\(dt\) \{$/gm,`  $1(dt: number) {`],[/^ {2}(onTrigger|onCollision)\(other\) \{$/gm,`  $1(other: Entity) {`],[/^ {2}onDamage\(amount, from\) \{$/gm,`  onDamage(amount: number, from: Entity) {`],[/^ {2}onEvent\(evt, value, from\) \{$/gm,`  onEvent(evt: string, value: unknown, from: Entity) {`]];function Gp(e){return e.replace(/\/\/[^\n]*/g,``).replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g,`""`)}function Kp(e,t=`./expctral-runtime`){let n=e.replace(`// Edite o grafo no editor, ou ejete este código e siga em TypeScript.`,"// Ejetado: roda sem a engine, só com `three` e o expctral-runtime.ts.");for(let[e,t]of Wp)n=n.replace(e,t);let r=Gp(n),i=e=>RegExp(`(?<![\\w.$])${e}\\b`).test(r),a=Hp.filter(i),o=Up.filter(i),s=[];i(`THREE`)&&s.push(`import * as THREE from 'three'`),o.length&&s.push(`import { ${o.join(`, `)} } from 'three'`),s.push(`import { ${a.join(`, `)} } from '${t}'`);let c=n.split(`
`);return[...c.slice(0,2),...s,``,...c.slice(2)].join(`
`)}var qp=`Script:`+D(``);function Jp(e,t=new Set){for(let n of e){for(let e of n.components)e.type.startsWith(`Script:`)&&t.add(e.type);Jp(n.children,t)}return t}function Yp(e){let t=e.normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^\w]+/g,`_`);return/^\d/.test(t)?`_${t}`:t||`Grafo`}function Xp(e){let{graphName:t,graphs:n,scene:r,prefabs:i,inputMap:a}=e,o=n[t];if(!o)return{ok:!1,error:`grafo "${t}" não existe`};let s=d(o);if(!s.ok)return{ok:!1,error:`corrija os problemas antes de exportar.`};let c=_(o);if(c.hasOutput&&(!c.ok||!c.ast))return{ok:!1,error:`corrija o material TSL antes de exportar.`};let l={"logic.ts":Kp(s.code),"expctral-runtime.ts":Vp};c.ast&&(l[`shader.ts`]=S(c.ast));let u=r?Jp([...r.entities,...Object.values(i)]):new Set,f=[],p=[],m=`Sinapse_${Yp(t)}`,h=new Set([m]);for(let e of[...u].sort()){if(!e.startsWith(qp)){p.push(e.slice(7));continue}let r=e.slice(qp.length);if(r===t)continue;let i=n[r],a=i&&!i.disabled?d(i):null;if(!a?.ok){p.push(D(r));continue}let o=`Sinapse_${Yp(r)}`;for(;h.has(o);)o+=`_`;h.add(o),l[`grafos/${o}.ts`]=Kp(a.code,`../expctral-runtime`),f.push({name:r,file:`./grafos/${o}`,ident:o})}return r&&(l[`scene.json`]=JSON.stringify({scene:r,prefabs:i,inputMap:a},null,2)+`
`),l[`main.ts`]=Zp({graphName:t,mainIdent:m,others:f,hasScene:!!r,shader:c.ast?{textures:c.ast.textures}:null}),l[`index.html`]=Qp,l[`package.json`]=$p,l[`tsconfig.json`]=em,l[`README.md`]=tm(t,f.map(e=>e.name),p,c.ast?.textures??null,!!r),{ok:!0,files:l}}function Zp(e){let t=[`    ${JSON.stringify(D(e.graphName))}: ${e.mainIdent},`,...e.others.map(e=>`    ${JSON.stringify(D(e.name))}: ${e.ident},`)],n=[`// Projeto ejetado do grafo "${e.graphName}". Roda com: npm install && npm run dev`,...e.hasScene?e.shader?[`import { Mesh } from 'three'`]:[]:[`import { BoxGeometry, HemisphereLight, Mesh, MeshStandardMaterial, PerspectiveCamera } from 'three'`],`import { WebGPURenderer } from 'three/webgpu'`,e.hasScene?`import { loadScene, type EjectedScene } from './expctral-runtime'`:`import { Entity, World } from './expctral-runtime'`,...e.hasScene?[`import data from './scene.json'`]:[],`import ${e.mainIdent} from './logic'`,...e.others.map(e=>`import ${e.ident} from '${e.file}'`),...e.shader?[`import { createMaterial } from './shader'`]:[],``,`const app = document.getElementById('app')!`];if(e.hasScene?n.push(``,`// nome do script na cena → classe`,`const world = loadScene(data as unknown as EjectedScene, {`,`  behaviours: {`,...t,`  },`,`  hudContainer: app,`,`})`):n.push(``,`// sem cena: um cubo com a lógica do grafo`,`const world = new World({ hudContainer: app })`,`const cubo = world.add(new Entity(${JSON.stringify(e.graphName)}))`,`cubo.object3D.add(new Mesh(new BoxGeometry(), new MeshStandardMaterial()))`,`world.three.add(new HemisphereLight('#ffffff', '#445566', 2))`,`world.camera = new PerspectiveCamera(50, 16 / 9, 0.1, 100)`,`world.camera.position.set(2, 1.5, 3)`,`world.camera.lookAt(0, 0, 0)`,`cubo.addBehaviour(new ${e.mainIdent}())`),e.shader){let t=e.shader.textures.length?`{ /* ${e.shader.textures.map(e=>JSON.stringify(e)).join(`, `)}: Texture */ }`:``;n.push(``,`// material TSL do grafo nos objetos que usam a lógica dele`,`for (const e of world.entities) {`,`  if (!e.getBehaviour(${e.mainIdent})) continue`,`  e.object3D.traverse((obj) => { if (obj instanceof Mesh) obj.material = createMaterial(${t}) })`,`}`)}return n.push(``,`// WebGPU quando há; senão o próprio three cai para WebGL2`,`const renderer = new WebGPURenderer({ antialias: true })`,`renderer.shadowMap.enabled = true`,`void renderer.init().then(() => world.run(renderer, app))`,`// clique prende o mouse (câmera em 3ª pessoa, mira)`,`renderer.domElement.addEventListener('click', () => void renderer.domElement.requestPointerLock())`,``),n.join(`
`)}var Qp=`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jogo ejetado</title>
    <style>
      html, body { margin: 0; height: 100%; background: #000; }
      #app { position: fixed; inset: 0; }
      #app canvas { display: block; }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/main.ts"><\/script>
  </body>
</html>
`,$p=JSON.stringify({name:`jogo-ejetado`,private:!0,type:`module`,scripts:{dev:`vite`,build:`tsc --noEmit && vite build`,typecheck:`tsc --noEmit`},dependencies:{three:`^0.185.1`},devDependencies:{"@types/three":`^0.185.0`,typescript:`~6.0.2`,vite:`^8.0.0`}},null,2)+`
`,em=JSON.stringify({compilerOptions:{target:`ES2022`,module:`ESNext`,moduleResolution:`bundler`,lib:[`ES2022`,`DOM`,`DOM.Iterable`],strict:!0,noEmit:!0,skipLibCheck:!0,resolveJsonModule:!0,types:[]},include:[`*.ts`,`grafos/*.ts`]},null,2)+`
`;function tm(e,t,n,r,i){let a=[`# Grafo "${e}" — código ejetado do Expctral Optic Modulator`,``,"Este projeto roda **sem a engine**: só depende de `three`.",``,"```bash",`npm install`,`npm run dev`,"```",``,`## Arquivos`,``,"- `logic.ts`: a lógica de gameplay do grafo, em TypeScript.","- `expctral-runtime.ts`: o runtime mínimo e legível que o `logic.ts` usa (`Behaviour`, `World`, física simples, input, HUD). O arquivo é seu: mude o que quiser."];return r&&a.push("- `shader.ts`: o material TSL do grafo (`createMaterial()`), aplicado no `main.ts`."),i&&a.push("- `scene.json`: a cena do editor (objetos, luzes, câmera, corpos), os prefabs e o mapa de input."),t.length&&a.push(`- \`grafos/\`: os outros grafos que a cena usa (${t.map(e=>`"${e}"`).join(`, `)}).`),a.push("- `main.ts`: liga cena, scripts e renderer (WebGPU, ou WebGL2 como reserva).",``,`## Diferenças para a engine`,``,"- A física é de caixas alinhadas aos eixos (`SimplePhysics`): gravidade, chão, sensores e raycast. Não é o Rapier: corpos não giram e toda forma vira caixa. Para física completa, implemente a interface `PhysicsApi` com Rapier ou cannon.",`- Modelos e texturas importados não vêm no pacote: primitivas da cena viram malhas do three; modelos viram cubos.`,"- Áudio de arquivo não é tocado; o bip sintetizado (`tone`) funciona.",`- Emissores de Partículas (GPU) da cena não vêm: o runtime ejetado não tem o compute pass.`,`- Controles: teclado, mouse e gamepad funcionam (com remapear); os controles de toque na tela não vêm.`),n.length&&a.push(``,`## Scripts que não vieram`,``,`A cena usa ${n.map(e=>`"${e}"`).join(`, `)}, que não são grafos compiláveis da Sinapse. Os objetos com eles rodam sem esse comportamento até você registrá-los em \`behaviours\` no \`main.ts\`.`),a.join(`
`)+`
`}function nm(){let e=b(e=>e.graphs),t=b(e=>e.active),n=b(e=>e.setActive),r=b(e=>e.create),i=b(e=>e.active?e.status[e.active]:void 0),s=b(e=>e.focusNode),l=Object.keys(e),[d,f]=(0,G.useState)(`graph`),p=!!i?.tsl,m=d===`tsl`&&!p?`graph`:d;(0,G.useEffect)(()=>{!t&&l.length&&n(l[0])},[t,l,n]);let h=i?.issues.filter(e=>e.severity===`error`)??[],g=i?.issues.filter(e=>e.severity===`warning`)??[];return l.length===0?(0,K.jsx)(`div`,{className:`sn-panel sn-panel--empty`,children:(0,K.jsxs)(`div`,{className:`sn-welcome`,children:[(0,K.jsx)(`h2`,{className:`t-h3`,children:`Sinapse — gameplay por nodes`}),(0,K.jsx)(`p`,{children:`Monte a lógica do jogo conectando caixas. O grafo compila para TypeScript de verdade — que você pode exportar a qualquer momento.`}),(0,K.jsxs)(`div`,{className:`sn-welcome__actions`,children:[(0,K.jsx)(`button`,{className:`cta-primary`,onClick:()=>u.getState().openModal(`packs`),children:`Biblioteca de Mecânicas`}),(0,K.jsx)(`button`,{className:`tbtn`,onClick:()=>void c(()=>import(`./templates-DbVXrRYe.js`).then(e=>e.loadTemplate(`platformer`)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])),children:`Abrir Plataforma 3D`}),(0,K.jsx)(`button`,{className:`tbtn`,onClick:()=>void cm(),children:`Exemplo simples (Pulo)`}),(0,K.jsx)(`button`,{className:`tbtn`,onClick:()=>r(`Novo Grafo`),children:`Grafo vazio`})]}),(0,K.jsxs)(`p`,{className:`sn-welcome__hint`,children:[`Na Biblioteca você `,(0,K.jsx)(`b`,{children:`soma`}),` mecânicas ao seu projeto — movimento, combate, coleta — ou monta um estilo inteiro num clique. Os templates (como a Plataforma 3D) fazem o contrário: `,(0,K.jsx)(`b`,{children:`substituem`}),` tudo por um jogo pronto.`]})]})}):(0,K.jsxs)(`div`,{className:`sn-panel`,children:[(0,K.jsxs)(`div`,{className:`sn-toolbar`,children:[(0,K.jsx)(`span`,{className:`sn-toolbar__active`,title:`Grafo ativo`,children:t?(0,K.jsx)(se,{id:am(l,t),label:`Grafo: ${t}`}):`— nenhum grafo —`}),(0,K.jsxs)(`button`,{className:`tbtn`,title:`Biblioteca de Mecânicas — somar pacotes prontos ao projeto (Ctrl+M)`,onClick:()=>u.getState().openModal(`packs`),children:[(0,K.jsx)(B,{name:`mecanica`,size:14}),` Mecânicas`]}),(0,K.jsx)(`span`,{className:`sn-toolbar__sep`}),i&&(0,K.jsx)(`span`,{className:`sn-status `+(h.length?`err`:`ok`),children:h.length?`${h.length} problema${h.length>1?`s`:``}`:om(i)}),i?.tsl&&(0,K.jsx)(`span`,{className:`sn-status `+(i.tsl.ok?`ok`:`err`),title:`Material TSL`,children:i.tsl.ok?`TSL—COMPILE · ${i.tsl.nodeCount} nós · ${i.tsl.ms.toFixed(1)} ms`:`TSL com problemas`}),t&&a.get(o(D(t)))&&(0,K.jsxs)(`span`,{className:`sn-hint-comp`,children:[`componente `,(0,K.jsx)(`b`,{children:D(t)}),` pronto no Inspector`]}),(0,K.jsx)(`span`,{style:{flex:1}}),(0,K.jsxs)(`div`,{className:`sn-views`,role:`group`,"aria-label":`Mostrar`,children:[(0,K.jsxs)(`button`,{className:`tbtn`,"aria-pressed":m===`graph`,onClick:()=>f(`graph`),children:[(0,K.jsx)(B,{name:`sinapse`,size:14}),` Grafo`]}),(0,K.jsxs)(`button`,{className:`tbtn`,"aria-pressed":m===`ts`,title:`Ver código TypeScript`,onClick:()=>f(`ts`),children:[(0,K.jsx)(B,{name:`code`,size:14}),` TypeScript`]}),(0,K.jsxs)(`button`,{className:`tbtn`,"aria-pressed":m===`tsl`,disabled:!p,title:p?`Ver código TSL (shader.ts)`:`Adicione o node Material TSL (família Efeitos)`,onClick:()=>f(`tsl`),children:[(0,K.jsx)(B,{name:`fam-vfx`,size:14}),` TSL`]})]}),(0,K.jsx)(`button`,{className:`tbtn`,title:`Baixar projeto Vite com o TypeScript gerado: roda sem a engine, só com three`,onClick:()=>t&&sm(t),children:(0,K.jsx)(ce,{icon:`eject`,code:`Eject TypeScript`,children:`Exportar código`})})]}),(0,K.jsx)(`div`,{className:`sn-main`,children:(0,K.jsxs)(ee,{direction:`horizontal`,autoSaveId:`sinapse-h`,children:[(0,K.jsx)(U,{defaultSize:22,minSize:12,children:(0,K.jsxs)(ee,{direction:`vertical`,autoSaveId:`sinapse-left`,children:[(0,K.jsx)(U,{defaultSize:42,minSize:16,children:(0,K.jsx)(Bp,{})}),(0,K.jsx)(re,{className:`rz rz--h`}),(0,K.jsx)(U,{defaultSize:58,minSize:20,children:(0,K.jsx)(rm,{})})]})}),(0,K.jsx)(re,{className:`rz rz--v`}),(0,K.jsx)(U,{defaultSize:80,children:(0,K.jsxs)(ee,{direction:`vertical`,autoSaveId:`sinapse-v`,children:[(0,K.jsx)(U,{defaultSize:78,minSize:30,children:m===`ts`?(0,K.jsx)(`pre`,{className:`sn-code`,children:i?.code||`// grafo ainda não compilado`}):m===`tsl`?(0,K.jsx)(`pre`,{className:`sn-code sn-code--tsl`,children:i?.tsl?.code||`// o material TSL ainda tem problemas — veja o painel Problemas`}):t&&(0,K.jsx)(Jd,{children:(0,K.jsx)(Ip,{graphName:t})})}),(0,K.jsx)(re,{className:`rz rz--h`}),(0,K.jsx)(U,{defaultSize:22,minSize:8,children:(0,K.jsxs)(`div`,{className:`sn-problems`,children:[(0,K.jsxs)(`div`,{className:`sn-problems__head`,children:[`Problemas`,h.length+g.length>0&&(0,K.jsx)(`span`,{className:`sn-problems__count`,children:h.length+g.length})]}),(0,K.jsx)(`div`,{className:`sn-problems__body`,tabIndex:0,role:`region`,"aria-label":`Problemas do grafo`,children:h.length+g.length===0?(0,K.jsxs)(`div`,{className:`sn-problems__ok`,children:[`Tudo certo. O grafo virou o componente`,` `,(0,K.jsx)(`b`,{children:t?D(t):``}),` — adicione-o a um objeto no Inspector e aperte Play.`]}):[...h,...g].map((e,t)=>(0,K.jsxs)(`button`,{className:`sn-problem `+e.severity,onClick:()=>e.nodeId&&s(e.nodeId),children:[(0,K.jsx)(`span`,{className:`sn-problem__icon`,children:(0,K.jsx)(B,{name:e.severity===`error`?`stop`:`help`,size:13,label:e.severity===`error`?`Erro`:`Aviso`})}),(0,K.jsx)(`span`,{children:e.message}),e.nodeId&&(0,K.jsx)(`span`,{className:`sn-problem__go`,children:`ir ao node →`})]},t))})]})})]})})]})})]})}function rm(){let[e,t]=(0,G.useState)(``),[n,r]=(0,G.useState)(new Set),i=(0,G.useMemo)(()=>{if(!e.trim())return g.byFamily();let t=g.search(e);return g.byFamily().map(e=>({...e,nodes:e.nodes.filter(e=>t.includes(e))})).filter(e=>e.nodes.length>0)},[e]),a=!!e.trim();function o(e){r(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}return(0,K.jsxs)(`div`,{className:`sn-library`,children:[(0,K.jsxs)(`div`,{className:`sn-library__search`,children:[(0,K.jsx)(`input`,{value:e,placeholder:`Buscar node…`,"aria-label":`Buscar node`,onChange:e=>t(e.target.value)}),(0,K.jsxs)(`div`,{className:`sn-library__tools`,children:[(0,K.jsx)(`button`,{className:`gt-ibtn`,title:`Recolher todas`,"aria-label":`Recolher todas`,onClick:()=>r(new Set(i.map(e=>e.family.id))),children:(0,K.jsx)(B,{name:`collapse`,size:14})}),(0,K.jsx)(`button`,{className:`gt-ibtn`,title:`Expandir todas`,"aria-label":`Expandir todas`,onClick:()=>r(new Set),children:(0,K.jsx)(B,{name:`expand`,size:14})})]})]}),(0,K.jsxs)(`div`,{className:`sn-library__body`,children:[i.map(({family:e,nodes:t})=>{let r=n.has(e.id)&&!a;return(0,K.jsxs)(`div`,{className:`sn-fam`,children:[(0,K.jsxs)(`button`,{className:`sn-fam__head`,style:{color:e.color},onClick:()=>o(e.id),"aria-expanded":!r,children:[(0,K.jsx)(`span`,{className:`sn-fam__twist`,"aria-hidden":!0,children:(0,K.jsx)(B,{name:r?`expand`:`collapse`,size:12})}),(0,K.jsx)(B,{name:e.icon,size:14}),` `,e.label,(0,K.jsx)(`span`,{className:`sn-fam__count`,children:t.length})]}),!r&&t.map(e=>(0,K.jsx)(im,{def:e},e.type))]},e.id)}),(0,K.jsxs)(`p`,{className:`sn-library__tip`,children:[`Arraste para o canvas, ou use `,(0,K.jsx)(`kbd`,{children:`Shift`}),`+`,(0,K.jsx)(`kbd`,{children:`A`}),` lá dentro.`]})]})]})}function im({def:e}){return(0,K.jsxs)(`div`,{className:`sn-lib-item`,draggable:!0,title:e.description,onDragStart:t=>{t.dataTransfer.setData(`application/x-sinapse-node`,e.type),t.dataTransfer.effectAllowed=`copy`},children:[(0,K.jsx)(`span`,{className:`sn-lib-item__label`,children:e.label}),(0,K.jsx)(`span`,{className:`sn-lib-item__desc`,children:e.description})]})}function am(e,t){return`SIN—${String(e.indexOf(t)+1).padStart(3,`0`)}`}function om(e){return e?.compileMs===void 0?`✓ compilado`:`✓ TS—COMPILE · ${e.nodeCount??0} nós · ${e.compileMs.toFixed(1)} ms`}function sm(e){let t=b.getState().graphs;if(!t[e])return;let a=performance.now(),o=Xp({graphName:e,graphs:t,scene:r().editedSceneJSON(),prefabs:n.getState().serialize(),inputMap:i.getState().serialize()});if(!o.ok){u.getState().pushConsole(`error`,`Sinapse ${e}: ${o.error}`);return}let s=te(Object.fromEntries(Object.entries(o.files).map(([e,t])=>[e,W(t)]))),c=new Blob([s],{type:`application/zip`}),l=URL.createObjectURL(c),d=document.createElement(`a`);d.href=l,d.download=`${e.replace(/[^\w-]+/g,`_`)}.eject.zip`,d.click(),setTimeout(()=>URL.revokeObjectURL(l),1e3),ae(`grafo "${e}" → ${d.download}`,c.size,(performance.now()-a)/1e3)}async function cm(){let{createJumpGraph:e}=await c(async()=>{let{createJumpGraph:e}=await import(`./exampleGraph-DDvs6-Wa.js`);return{createJumpGraph:e}},__vite__mapDeps([11,6,3,2,4,5,7]));await e();let t=r().scene?.findByName(`Cubo Físico`),n=o(D(`Pulo`)),i=a.create(n);t&&i&&!t.getComponentByType(n)&&(t.addComponent(i),u.getState().bump())}export{nm as SinapsePanel};