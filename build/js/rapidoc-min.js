/*! For license information please see rapidoc-min.js.LICENSE.txt */
(()=>{var e,t,r={448:(e,t,r)=>{"use strict";const n=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new Map;class i{constructor(e,t){if(this._$cssResult$=!0,t!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=a.get(this.cssText);return n&&void 0===e&&(a.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const s=e=>new i("string"==typeof e?e:e+"",o),l=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return new i(r,o)},c=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return s(t)})(e):e;var p;const u=window.trustedTypes,d=u?u.emptyScript:"",h=window.reactiveElementPolyfillSupport,f={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},m=(e,t)=>t!==e&&(t==t||e==e),y={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:m};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const n=this._$Eh(r,t);void 0!==n&&(this._$Eu.set(n,r),e.push(n))})),e}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eh(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{n?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const r=document.createElement("style"),n=window.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=t.cssText,e.appendChild(r)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=y){var n,o;const a=this.constructor._$Eh(e,r);if(void 0!==a&&!0===r.reflect){const i=(null!==(o=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:f.toAttribute)(t,r.type);this._$Ei=e,null==i?this.removeAttribute(a):this.setAttribute(a,i),this._$Ei=null}}_$AK(e,t){var r,n,o;const a=this.constructor,i=a._$Eu.get(e);if(void 0!==i&&this._$Ei!==i){const e=a.getPropertyOptions(i),s=e.converter,l=null!==(o=null!==(n=null===(r=s)||void 0===r?void 0:r.fromAttribute)&&void 0!==n?n:"function"==typeof s?s:null)&&void 0!==o?o:f.fromAttribute;this._$Ei=i,this[i]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,r){let n=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}var v;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:g}),(null!==(p=globalThis.reactiveElementVersions)&&void 0!==p?p:globalThis.reactiveElementVersions=[]).push("1.3.0");const b=globalThis.trustedTypes,x=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,$="?"+w,k=`<${$}>`,S=document,A=(e="")=>S.createComment(e),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,T=e=>{var t;return O(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,j=/>/g,I=/>|[ \x09\n\x0c\r](?:([^\s"'>=/]+)([ \x09\n\x0c\r]*=[ \x09\n\x0c\r]*(?:[^ \x09\n\x0c\r"'`<>=]|("|')|))|$)/g,P=/'/g,R=/"/g,L=/^(?:script|style|textarea|title)$/i,D=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),B=D(1),F=(D(2),Symbol.for("lit-noChange")),N=Symbol.for("lit-nothing"),z=new WeakMap,U=S.createTreeWalker(S,129,null,!1),q=(e,t)=>{const r=e.length-1,n=[];let o,a=2===t?"<svg>":"",i=C;for(let l=0;l<r;l++){const t=e[l];let r,s,c=-1,p=0;for(;p<t.length&&(i.lastIndex=p,s=i.exec(t),null!==s);)p=i.lastIndex,i===C?"!--"===s[1]?i=_:void 0!==s[1]?i=j:void 0!==s[2]?(L.test(s[2])&&(o=RegExp("</"+s[2],"g")),i=I):void 0!==s[3]&&(i=I):i===I?">"===s[0]?(i=null!=o?o:C,c=-1):void 0===s[1]?c=-2:(c=i.lastIndex-s[2].length,r=s[1],i=void 0===s[3]?I:'"'===s[3]?R:P):i===R||i===P?i=I:i===_||i===j?i=C:(i=I,o=void 0);const u=i===I&&e[l+1].startsWith("/>")?" ":"";a+=i===C?t+k:c>=0?(n.push(r),t.slice(0,c)+"$lit$"+t.slice(c)+w+u):t+w+(-2===c?(n.push(void 0),l):u)}const s=a+(e[r]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==x?x.createHTML(s):s,n]};class M{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let o=0,a=0;const i=e.length-1,s=this.parts,[l,c]=q(e,t);if(this.el=M.createElement(l,r),U.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=U.nextNode())&&s.length<i;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(w)){const r=c[a++];if(e.push(t),void 0!==r){const e=n.getAttribute(r.toLowerCase()+"$lit$").split(w),t=/([.?@])?(.*)/.exec(r);s.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?K:"?"===t[1]?Y:"@"===t[1]?Z:G})}else s.push({type:6,index:o})}for(const t of e)n.removeAttribute(t)}if(L.test(n.tagName)){const e=n.textContent.split(w),t=e.length-1;if(t>0){n.textContent=b?b.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],A()),U.nextNode(),s.push({type:2,index:++o});n.append(e[t],A())}}}else if(8===n.nodeType)if(n.data===$)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(w,e+1));)s.push({type:7,index:o}),e+=w.length-1}o++}}static createElement(e,t){const r=S.createElement("template");return r.innerHTML=e,r}}function H(e,t,r=e,n){var o,a,i,s;if(t===F)return t;let l=void 0!==n?null===(o=r._$Cl)||void 0===o?void 0:o[n]:r._$Cu;const c=E(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,r,n)),void 0!==n?(null!==(i=(s=r)._$Cl)&&void 0!==i?i:s._$Cl=[])[n]=l:r._$Cu=l),void 0!==l&&(t=H(e,l._$AS(e,t.values),l,n)),t}class W{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:n}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(r,!0);U.currentNode=o;let a=U.nextNode(),i=0,s=0,l=n[0];for(;void 0!==l;){if(i===l.index){let t;2===l.type?t=new V(a,a.nextSibling,this,e):1===l.type?t=new l.ctor(a,l.name,l.strings,this,e):6===l.type&&(t=new Q(a,this,e)),this.v.push(t),l=n[++s]}i!==(null==l?void 0:l.index)&&(a=U.nextNode(),i++)}return o}m(e){let t=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class V{constructor(e,t,r,n){var o;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cg=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=H(this,e,t),E(e)?e===N||null==e||""===e?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==F&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):T(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==N&&E(this._$AH)?this._$AA.nextSibling.data=e:this.k(S.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=M.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.m(r);else{const e=new W(o,this),t=e.p(this.options);e.m(r),this.k(t),this._$AH=e}}_$AC(e){let t=z.get(e.strings);return void 0===t&&z.set(e.strings,t=new M(e)),t}S(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const o of e)n===t.length?t.push(r=new V(this.A(A()),this.A(A()),this,this.options)):r=t[n],r._$AI(o),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class G{constructor(e,t,r,n,o){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const o=this.strings;let a=!1;if(void 0===o)e=H(this,e,t,0),a=!E(e)||e!==this._$AH&&e!==F,a&&(this._$AH=e);else{const n=e;let i,s;for(e=o[0],i=0;i<o.length-1;i++)s=H(this,n[r+i],t,i),s===F&&(s=this._$AH[i]),a||(a=!E(s)||s!==this._$AH[i]),s===N?e=N:e!==N&&(e+=(null!=s?s:"")+o[i+1]),this._$AH[i]=s}a&&!n&&this.C(e)}C(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class K extends G{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===N?void 0:e}}const J=b?b.emptyScript:"";class Y extends G{constructor(){super(...arguments),this.type=4}C(e){e&&e!==N?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Z extends G{constructor(e,t,r,n,o){super(e,t,r,n,o),this.type=5}_$AI(e,t=this){var r;if((e=null!==(r=H(this,e,t,0))&&void 0!==r?r:N)===F)return;const n=this._$AH,o=e===N&&n!==N||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==N&&(n===N||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}}class Q{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}}const X={P:"$lit$",L:w,V:$,I:1,N:q,R:W,D:T,j:H,H:V,O:G,F:Y,B:Z,W:K,Z:Q},ee=window.litHtmlPolyfillSupport;var te,re;null==ee||ee(M,V),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.0");class ne extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,r)=>{var n,o;const a=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:t;let i=a._$litPart$;if(void 0===i){const e=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:null;a._$litPart$=i=new V(t.insertBefore(A(),e),e,void 0,null!=r?r:{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return F}}ne.finalized=!0,ne._$litElement$=!0,null===(te=globalThis.litElementHydrateSupport)||void 0===te||te.call(globalThis,{LitElement:ne});const oe=globalThis.litElementPolyfillSupport;null==oe||oe({LitElement:ne}),(null!==(re=globalThis.litElementVersions)&&void 0!==re?re:globalThis.litElementVersions=[]).push("3.2.0");let ae={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const ie=/[&<>"']/,se=/[&<>"']/g,le=/[<>"']|&(?!#?\w+;)/,ce=/[<>"']|&(?!#?\w+;)/g,pe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ue=e=>pe[e];function de(e,t){if(t){if(ie.test(e))return e.replace(se,ue)}else if(le.test(e))return e.replace(ce,ue);return e}const he=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function fe(e){return e.replace(he,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const me=/(^|[^\[])\^/g;function ye(e,t){e="string"==typeof e?e:e.source,t=t||"";const r={replace:(t,n)=>(n=(n=n.source||n).replace(me,"$1"),e=e.replace(t,n),r),getRegex:()=>new RegExp(e,t)};return r}const ge=/[^\w:]/g,ve=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function be(e,t,r){if(e){let t;try{t=decodeURIComponent(fe(r)).replace(ge,"").toLowerCase()}catch(e){return null}if(0===t.indexOf("javascript:")||0===t.indexOf("vbscript:")||0===t.indexOf("data:"))return null}t&&!ve.test(r)&&(r=function(e,t){xe[" "+e]||(we.test(e)?xe[" "+e]=e+"/":xe[" "+e]=Oe(e,"/",!0));const r=-1===(e=xe[" "+e]).indexOf(":");return"//"===t.substring(0,2)?r?t:e.replace($e,"$1")+t:"/"===t.charAt(0)?r?t:e.replace(ke,"$1")+t:e+t}(t,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch(e){return null}return r}const xe={},we=/^[^:]+:\/*[^/]*$/,$e=/^([^:]+:)[\s\S]*$/,ke=/^([^:]+:\/*[^/]*)[\s\S]*$/,Se={exec:function(){}};function Ae(e){let t,r,n=1;for(;n<arguments.length;n++)for(r in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function Ee(e,t){const r=e.replace(/\|/g,((e,t,r)=>{let n=!1,o=t;for(;--o>=0&&"\\"===r[o];)n=!n;return n?"|":" |"})).split(/ \|/);let n=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|");return r}function Oe(e,t,r){const n=e.length;if(0===n)return"";let o=0;for(;o<n;){const a=e.charAt(n-o-1);if(a!==t||r){if(a===t||!r)break;o++}else o++}return e.slice(0,n-o)}function Te(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Ce(e,t){if(t<1)return"";let r="";for(;t>1;)1&t&&(r+=e),t>>=1,e+=e;return r+e}function _e(e,t,r,n){const o=t.href,a=t.title?de(t.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){n.state.inLink=!0;const e={type:"link",raw:r,href:o,title:a,text:i,tokens:n.inlineTokens(i,[])};return n.state.inLink=!1,e}return{type:"image",raw:r,href:o,title:a,text:de(i)}}class je{constructor(e){this.options=e||ae}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:Oe(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],r=function(e,t){const r=e.match(/^(\s+)(?:```)/);if(null===r)return t;const n=r[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[r]=t;return r.length>=n.length?e.slice(n.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=Oe(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}const r={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,n,o,a,i,s,l,c,p,u,d,h,f=t[1].trim();const m=f.length>1,y={type:"list",raw:"",ordered:m,start:m?+f.slice(0,-1):"",loose:!1,items:[]};f=m?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=m?f:"[*+-]");const g=new RegExp(`^( {0,3}${f})((?:[\t ][^\\n]*)?(?:\\n|$))`);for(;e&&(h=!1,t=g.exec(e))&&!this.rules.block.hr.test(e);){if(r=t[0],e=e.substring(r.length),c=t[2].split("\n",1)[0],p=e.split("\n",1)[0],this.options.pedantic?(a=2,d=c.trimLeft()):(a=t[2].search(/[^ ]/),a=a>4?1:a,d=c.slice(a),a+=t[1].length),s=!1,!c&&/^ *$/.test(p)&&(r+=p+"\n",e=e.substring(p.length+1),h=!0),!h){const t=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),n=new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);for(;e&&(u=e.split("\n",1)[0],c=u,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!t.test(c))&&!n.test(e);){if(c.search(/[^ ]/)>=a||!c.trim())d+="\n"+c.slice(a);else{if(s)break;d+="\n"+c}s||c.trim()||(s=!0),r+=u+"\n",e=e.substring(u.length+1)}}y.loose||(l?y.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(d),n&&(o="[ ] "!==n[0],d=d.replace(/^\[[ xX]\] +/,""))),y.items.push({type:"list_item",raw:r,task:!!n,checked:o,loose:!1,text:d}),y.raw+=r}y.items[y.items.length-1].raw=r.trimRight(),y.items[y.items.length-1].text=d.trimRight(),y.raw=y.raw.trimRight();const v=y.items.length;for(i=0;i<v;i++){this.lexer.state.top=!1,y.items[i].tokens=this.lexer.blockTokens(y.items[i].text,[]);const e=y.items[i].tokens.filter((e=>"space"===e.type)),t=e.every((e=>{const t=e.raw.split("");let r=0;for(const n of t)if("\n"===n&&(r+=1),r>1)return!0;return!1}));!y.loose&&e.length&&t&&(y.loose=!0,y.items[i].loose=!0)}return y}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):de(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}}def(e){const t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:Ee(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let r,n,o,a,i=e.align.length;for(r=0;r<i;r++)/^ *-+: *$/.test(e.align[r])?e.align[r]="right":/^ *:-+: *$/.test(e.align[r])?e.align[r]="center":/^ *:-+ *$/.test(e.align[r])?e.align[r]="left":e.align[r]=null;for(i=e.rows.length,r=0;r<i;r++)e.rows[r]=Ee(e.rows[r],e.header.length).map((e=>({text:e})));for(i=e.header.length,n=0;n<i;n++)e.header[n].tokens=[],this.lexer.inline(e.header[n].text,e.header[n].tokens);for(i=e.rows.length,n=0;n<i;n++)for(a=e.rows[n],o=0;o<a.length;o++)a[o].tokens=[],this.lexer.inline(a[o].text,a[o].tokens);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}text(e){const t=this.rules.block.text.exec(e);if(t){const e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:de(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):de(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=Oe(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const r=e.length;let n=0,o=0;for(;o<r;o++)if("\\"===e[o])o++;else if(e[o]===t[0])n++;else if(e[o]===t[1]&&(n--,n<0))return o;return-1}(t[2],"()");if(e>-1){const r=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let r=t[2],n="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);e&&(r=e[1],n=e[3])}else n=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(r=this.options.pedantic&&!/>$/.test(e)?r.slice(1):r.slice(1,-1)),_e(t,{href:r?r.replace(this.rules.inline._escapes,"$1"):r,title:n?n.replace(this.rules.inline._escapes,"$1"):n},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let e=(r[2]||r[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=r[0].charAt(0);return{type:"text",raw:e,text:e}}return _e(r,e,r[0],this.lexer)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrong.lDelim.exec(e);if(!n)return;if(n[3]&&r.match(/[\p{L}\p{N}]/u))return;const o=n[1]||n[2]||"";if(!o||o&&(""===r||this.rules.inline.punctuation.exec(r))){const r=n[0].length-1;let o,a,i=r,s=0;const l="*"===n[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+r);null!=(n=l.exec(t));){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o)continue;if(a=o.length,n[3]||n[4]){i+=a;continue}if((n[5]||n[6])&&r%3&&!((r+a)%3)){s+=a;continue}if(i-=a,i>0)continue;if(a=Math.min(a,a+i+s),Math.min(r,a)%2){const t=e.slice(1,r+n.index+a);return{type:"em",raw:e.slice(0,r+n.index+a+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}const t=e.slice(2,r+n.index+a-1);return{type:"strong",raw:e.slice(0,r+n.index+a+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const r=/[^ ]/.test(e),n=/^ /.test(e)&&/ $/.test(e);return r&&n&&(e=e.substring(1,e.length-1)),e=de(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const r=this.rules.inline.autolink.exec(e);if(r){let e,n;return"@"===r[2]?(e=de(this.options.mangle?t(r[1]):r[1]),n="mailto:"+e):(e=de(r[1]),n=e),{type:"link",raw:r[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let r;if(r=this.rules.inline.url.exec(e)){let e,n;if("@"===r[2])e=de(this.options.mangle?t(r[0]):r[0]),n="mailto:"+e;else{let t;do{t=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0]}while(t!==r[0]);e=de(r[0]),n="www."===r[1]?"http://"+e:e}return{type:"link",raw:r[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const r=this.rules.inline.text.exec(e);if(r){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):de(r[0]):r[0]:de(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}}const Ie={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Se,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Ie.def=ye(Ie.def).replace("label",Ie._label).replace("title",Ie._title).getRegex(),Ie.bullet=/(?:[*+-]|\d{1,9}[.)])/,Ie.listItemStart=ye(/^( *)(bull) */).replace("bull",Ie.bullet).getRegex(),Ie.list=ye(Ie.list).replace(/bull/g,Ie.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Ie.def.source+")").getRegex(),Ie._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ie._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Ie.html=ye(Ie.html,"i").replace("comment",Ie._comment).replace("tag",Ie._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ie.paragraph=ye(Ie._paragraph).replace("hr",Ie.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ie._tag).getRegex(),Ie.blockquote=ye(Ie.blockquote).replace("paragraph",Ie.paragraph).getRegex(),Ie.normal=Ae({},Ie),Ie.gfm=Ae({},Ie.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Ie.gfm.table=ye(Ie.gfm.table).replace("hr",Ie.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ie._tag).getRegex(),Ie.gfm.paragraph=ye(Ie._paragraph).replace("hr",Ie.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Ie.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ie._tag).getRegex(),Ie.pedantic=Ae({},Ie.normal,{html:ye("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Ie._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Se,paragraph:ye(Ie.normal._paragraph).replace("hr",Ie.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Ie.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const Pe={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Se,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Se,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Re(e){return e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026")}function Le(e){let t,r,n="";const o=e.length;for(t=0;t<o;t++)r=e.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),n+="&#"+r+";";return n}Pe._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",Pe.punctuation=ye(Pe.punctuation).replace(/punctuation/g,Pe._punctuation).getRegex(),Pe.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,Pe.escapedEmSt=/\\\*|\\_/g,Pe._comment=ye(Ie._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),Pe.emStrong.lDelim=ye(Pe.emStrong.lDelim).replace(/punct/g,Pe._punctuation).getRegex(),Pe.emStrong.rDelimAst=ye(Pe.emStrong.rDelimAst,"g").replace(/punct/g,Pe._punctuation).getRegex(),Pe.emStrong.rDelimUnd=ye(Pe.emStrong.rDelimUnd,"g").replace(/punct/g,Pe._punctuation).getRegex(),Pe._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,Pe._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Pe._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Pe.autolink=ye(Pe.autolink).replace("scheme",Pe._scheme).replace("email",Pe._email).getRegex(),Pe._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Pe.tag=ye(Pe.tag).replace("comment",Pe._comment).replace("attribute",Pe._attribute).getRegex(),Pe._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Pe._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,Pe._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Pe.link=ye(Pe.link).replace("label",Pe._label).replace("href",Pe._href).replace("title",Pe._title).getRegex(),Pe.reflink=ye(Pe.reflink).replace("label",Pe._label).replace("ref",Ie._label).getRegex(),Pe.nolink=ye(Pe.nolink).replace("ref",Ie._label).getRegex(),Pe.reflinkSearch=ye(Pe.reflinkSearch,"g").replace("reflink",Pe.reflink).replace("nolink",Pe.nolink).getRegex(),Pe.normal=Ae({},Pe),Pe.pedantic=Ae({},Pe.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ye(/^!?\[(label)\]\((.*?)\)/).replace("label",Pe._label).getRegex(),reflink:ye(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Pe._label).getRegex()}),Pe.gfm=Ae({},Pe.normal,{escape:ye(Pe.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),Pe.gfm.url=ye(Pe.gfm.url,"i").replace("email",Pe.gfm._extended_email).getRegex(),Pe.breaks=Ae({},Pe.gfm,{br:ye(Pe.br).replace("{2,}","*").getRegex(),text:ye(Pe.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class De{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ae,this.options.tokenizer=this.options.tokenizer||new je,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Ie.normal,inline:Pe.normal};this.options.pedantic?(t.block=Ie.pedantic,t.inline=Pe.pedantic):this.options.gfm&&(t.block=Ie.gfm,this.options.breaks?t.inline=Pe.breaks:t.inline=Pe.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ie,inline:Pe}}static lex(e,t){return new De(t).lex(e)}static lexInline(e,t){return new De(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let r,n,o,a;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,((e,t,r)=>t+"    ".repeat(r.length)));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),1===r.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),n=t[t.length-1],!n||"paragraph"!==n.type&&"text"!==n.type?t.push(r):(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.list(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.def(e))e=e.substring(r.raw.length),n=t[t.length-1],!n||"paragraph"!==n.type&&"text"!==n.type?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(n.raw+="\n"+r.raw,n.text+="\n"+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else{if(o=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const r=e.slice(1);let n;this.options.extensions.startBlock.forEach((function(e){n=e.call({lexer:this},r),"number"==typeof n&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(o=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o)))n=t[t.length-1],a&&"paragraph"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r),a=o.length!==e.length,e=e.substring(r.raw.length);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let r,n,o,a,i,s,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(a=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,a.index)+"["+Ce("a",a[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(a=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,a.index)+"["+Ce("a",a[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(a=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,a.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(i||(s=""),i=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))))if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.emStrong(e,l,s))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.autolink(e,Le))e=e.substring(r.raw.length),t.push(r);else if(this.state.inLink||!(r=this.tokenizer.url(e,Le))){if(o=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const r=e.slice(1);let n;this.options.extensions.startInline.forEach((function(e){n=e.call({lexer:this},r),"number"==typeof n&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(o=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(o,Re))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(s=r.raw.slice(-1)),i=!0,n=t[t.length-1],n&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(r.raw.length),t.push(r);return t}}class Be{constructor(e){this.options=e||ae}code(e,t,r){const n=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,n);null!=t&&t!==e&&(r=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",n?'<pre><code class="'+this.options.langPrefix+de(n,!0)+'">'+(r?e:de(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:de(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e){return e}heading(e,t,r,n){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+n.slug(r)}">${e}</h${t}>\n`:`<h${t}>${e}</h${t}>\n`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,r){const n=t?"ol":"ul";return"<"+n+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+n+">\n"}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){const r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){if(null===(e=be(this.options.sanitize,this.options.baseUrl,e)))return r;let n='<a href="'+de(e)+'"';return t&&(n+=' title="'+t+'"'),n+=">"+r+"</a>",n}image(e,t,r){if(null===(e=be(this.options.sanitize,this.options.baseUrl,e)))return r;let n=`<img src="${e}" alt="${r}"`;return t&&(n+=` title="${t}"`),n+=this.options.xhtml?"/>":">",n}text(e){return e}}class Fe{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class Ne{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,n=0;if(this.seen.hasOwnProperty(r)){n=this.seen[e];do{n++,r=e+"-"+n}while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=n,this.seen[r]=0),r}slug(e,t={}){const r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}class ze{constructor(e){this.options=e||ae,this.options.renderer=this.options.renderer||new Be,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Fe,this.slugger=new Ne}static parse(e,t){return new ze(t).parse(e)}static parseInline(e,t){return new ze(t).parseInline(e)}parse(e,t=!0){let r,n,o,a,i,s,l,c,p,u,d,h,f,m,y,g,v,b,x,w="";const $=e.length;for(r=0;r<$;r++)if(u=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(x=this.options.extensions.renderers[u.type].call({parser:this},u),!1!==x||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))w+=x||"";else switch(u.type){case"space":continue;case"hr":w+=this.renderer.hr();continue;case"heading":w+=this.renderer.heading(this.parseInline(u.tokens),u.depth,fe(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":w+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(c="",l="",a=u.header.length,n=0;n<a;n++)l+=this.renderer.tablecell(this.parseInline(u.header[n].tokens),{header:!0,align:u.align[n]});for(c+=this.renderer.tablerow(l),p="",a=u.rows.length,n=0;n<a;n++){for(s=u.rows[n],l="",i=s.length,o=0;o<i;o++)l+=this.renderer.tablecell(this.parseInline(s[o].tokens),{header:!1,align:u.align[o]});p+=this.renderer.tablerow(l)}w+=this.renderer.table(c,p);continue;case"blockquote":p=this.parse(u.tokens),w+=this.renderer.blockquote(p);continue;case"list":for(d=u.ordered,h=u.start,f=u.loose,a=u.items.length,p="",n=0;n<a;n++)y=u.items[n],g=y.checked,v=y.task,m="",y.task&&(b=this.renderer.checkbox(g),f?y.tokens.length>0&&"paragraph"===y.tokens[0].type?(y.tokens[0].text=b+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&"text"===y.tokens[0].tokens[0].type&&(y.tokens[0].tokens[0].text=b+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:b}):m+=b),m+=this.parse(y.tokens,f),p+=this.renderer.listitem(m,v,g);w+=this.renderer.list(p,d,h);continue;case"html":w+=this.renderer.html(u.text);continue;case"paragraph":w+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(p=u.tokens?this.parseInline(u.tokens):u.text;r+1<$&&"text"===e[r+1].type;)u=e[++r],p+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);w+=t?this.renderer.paragraph(p):p;continue;default:{const e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return w}parseInline(e,t){t=t||this.renderer;let r,n,o,a="";const i=e.length;for(r=0;r<i;r++)if(n=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type]&&(o=this.options.extensions.renderers[n.type].call({parser:this},n),!1!==o||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)))a+=o||"";else switch(n.type){case"escape":case"text":a+=t.text(n.text);break;case"html":a+=t.html(n.text);break;case"link":a+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":a+=t.image(n.href,n.title,n.text);break;case"strong":a+=t.strong(this.parseInline(n.tokens,t));break;case"em":a+=t.em(this.parseInline(n.tokens,t));break;case"codespan":a+=t.codespan(n.text);break;case"br":a+=t.br();break;case"del":a+=t.del(this.parseInline(n.tokens,t));break;default:{const e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return a}}function Ue(e,t,r){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(r=t,t=null),Te(t=Ae({},Ue.defaults,t||{})),r){const n=t.highlight;let o;try{o=De.lex(e,t)}catch(e){return r(e)}const a=function(e){let a;if(!e)try{t.walkTokens&&Ue.walkTokens(o,t.walkTokens),a=ze.parse(o,t)}catch(t){e=t}return t.highlight=n,e?r(e):r(null,a)};if(!n||n.length<3)return a();if(delete t.highlight,!o.length)return a();let i=0;return Ue.walkTokens(o,(function(e){"code"===e.type&&(i++,setTimeout((()=>{n(e.text,e.lang,(function(t,r){if(t)return a(t);null!=r&&r!==e.text&&(e.text=r,e.escaped=!0),i--,0===i&&a()}))}),0))})),void(0===i&&a())}try{const r=De.lex(e,t);return t.walkTokens&&Ue.walkTokens(r,t.walkTokens),ze.parse(r,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+de(e.message+"",!0)+"</pre>";throw e}}Ue.options=Ue.setOptions=function(e){var t;return Ae(Ue.defaults,e),t=Ue.defaults,ae=t,Ue},Ue.getDefaults=function(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}},Ue.defaults=ae,Ue.use=function(...e){const t=Ae({},...e),r=Ue.defaults.extensions||{renderers:{},childTokens:{}};let n;e.forEach((e=>{if(e.extensions&&(n=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=r.renderers?r.renderers[e.name]:null;r.renderers[e.name]=t?function(...r){let n=e.renderer.apply(this,r);return!1===n&&(n=t.apply(this,r)),n}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");r[e.level]?r[e.level].unshift(e.tokenizer):r[e.level]=[e.tokenizer],e.start&&("block"===e.level?r.startBlock?r.startBlock.push(e.start):r.startBlock=[e.start]:"inline"===e.level&&(r.startInline?r.startInline.push(e.start):r.startInline=[e.start]))}e.childTokens&&(r.childTokens[e.name]=e.childTokens)}))),e.renderer){const r=Ue.defaults.renderer||new Be;for(const t in e.renderer){const n=r[t];r[t]=(...o)=>{let a=e.renderer[t].apply(r,o);return!1===a&&(a=n.apply(r,o)),a}}t.renderer=r}if(e.tokenizer){const r=Ue.defaults.tokenizer||new je;for(const t in e.tokenizer){const n=r[t];r[t]=(...o)=>{let a=e.tokenizer[t].apply(r,o);return!1===a&&(a=n.apply(r,o)),a}}t.tokenizer=r}if(e.walkTokens){const r=Ue.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens.call(this,t),r&&r.call(this,t)}}n&&(t.extensions=r),Ue.setOptions(t)}))},Ue.walkTokens=function(e,t){for(const r of e)switch(t.call(Ue,r),r.type){case"table":for(const e of r.header)Ue.walkTokens(e.tokens,t);for(const e of r.rows)for(const r of e)Ue.walkTokens(r.tokens,t);break;case"list":Ue.walkTokens(r.items,t);break;default:Ue.defaults.extensions&&Ue.defaults.extensions.childTokens&&Ue.defaults.extensions.childTokens[r.type]?Ue.defaults.extensions.childTokens[r.type].forEach((function(e){Ue.walkTokens(r[e],t)})):r.tokens&&Ue.walkTokens(r.tokens,t)}},Ue.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");Te(t=Ae({},Ue.defaults,t||{}));try{const r=De.lexInline(e,t);return t.walkTokens&&Ue.walkTokens(r,t.walkTokens),ze.parseInline(r,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+de(e.message+"",!0)+"</pre>";throw e}},Ue.Parser=ze,Ue.parser=ze.parse,Ue.Renderer=Be,Ue.TextRenderer=Fe,Ue.Lexer=De,Ue.lexer=De.lex,Ue.Tokenizer=je,Ue.Slugger=Ne,Ue.parse=Ue,Ue.options,Ue.setOptions,Ue.use,Ue.walkTokens,Ue.parseInline,ze.parse,De.lex;var qe=r(660),Me=r.n(qe);r(251),r(358),r(46),r(503),r(277),r(874),r(366),r(57),r(16);const He=l`
  .hover-bg:hover{
    background: var(--bg3);
  }
  ::selection {
    background: var(--selection-bg);
    color: var(--selection-fg);
  }
  .regular-font{ 
    font-family:var(--font-regular); 
  }
  .mono-font { 
    font-family:var(--font-mono); 
  }
  .title { 
    font-size: calc(var(--font-size-small) + 18px);
    font-weight: normal 
  }
  .sub-title{ font-size: 20px;}
  .req-res-title {
    font-family: var(--font-regular);
    font-size: calc(var(--font-size-small) + 4px);
    font-weight:bold;
    margin-bottom:8px;
    text-align:left;
  }
  .tiny-title { 
    font-size:calc(var(--font-size-small) + 1px); 
    font-weight:bold; 
  }
  .regular-font-size { font-size: var(--font-size-regular); }
  .small-font-size { font-size: var(--font-size-small); }
  .upper { text-transform: uppercase; }
  .primary-text{ color: var(--primary-color); }
  .bold-text { font-weight:bold; }
  .gray-text { color: var(--light-fg); }
  .red-text {color: var(--red)}
  .blue-text {color: var(--blue)}
  .multiline {
    overflow: scroll;
    max-height: var(--resp-area-height, 300px);
    color: var(--fg3);  
  }
  .method-fg.put { color: var(--orange); }
  .method-fg.post { color: var(--green); }
  .method-fg.get { color: var(--blue); }
  .method-fg.delete { color: var(--red); }
  .method-fg.options, 
  .method-fg.head, 
  .method-fg.patch { 
    color: var(--yellow); 
  }

  h1{ font-family:var(--font-regular); font-size:28px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h2{ font-family:var(--font-regular); font-size:24px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h3{ font-family:var(--font-regular); font-size:18px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h4{ font-family:var(--font-regular); font-size:16px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h5{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h6{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }

  h1,h2,h3,h4,h5,h5{
    margin-block-end: 0.2em;
  }
  p { margin-block-start: 0.5em; }
  a { color: var(--blue); cursor:pointer; }
  a.inactive-link { 
    color:var(--fg);
    text-decoration: none;
    cursor:text;
  }
  
  code,
  pre {
    margin: 0px;
    font-family: var(--font-mono);
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown,
  .m-markdown-small {
    display:block;
  }

  .m-markdown p,
  .m-markdown span {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 8px);
  }
  .m-markdown li {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 10px);
  }
  
  .m-markdown-small p,
  .m-markdown-small span,
  .m-markdown-small li {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 6px);
  }
  .m-markdown-small li {
    line-height: calc(var(--font-size-small) + 8px);
  }

  .m-markdown p:not(:first-child) {
    margin-block-start: 24px;
  }

  .m-markdown-small p:not(:first-child) {
    margin-block-start: 12px;
  }
  .m-markdown-small p:first-child {
    margin-block-start: 0;
  }

  .m-markdown p,
  .m-markdown-small p {
    margin-block-end: 0
  }

  .m-markdown code span {
    font-size:var(--font-size-mono);
  }

  .m-markdown-small code,
  .m-markdown code {
    padding: 1px 6px;
    border-radius: 2px;
    color: var(--inline-code-fg);
    background-color: var(--bg3);
    font-size: calc(var(--font-size-mono));
    line-height: 1.2;
  }

  .m-markdown-small code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown-small pre,
  .m-markdown pre {
    white-space: pre-wrap;
    overflow-x: auto;
    line-height: normal;
    border-radius: 2px;
    border: 1px solid var(--code-border-color);
  }

  .m-markdown pre {
    padding: 12px;
    background-color: var(--code-bg);
    color:var(--code-fg);
  }

  .m-markdown-small pre {
    margin-top: 4px;
    padding: 2px 4px;
    background-color: var(--bg3);
    color: var(--fg2);
  }

  .m-markdown-small pre code,
  .m-markdown pre code {
    border:none;
    padding:0;
  }

  .m-markdown pre code {
    color: var(--code-fg);
    background-color: var(--code-bg);
    background-color: transparent;
  }

  .m-markdown-small pre code {
    color: var(--fg2);
    background-color: var(--bg3);
  }

  .m-markdown ul,
  .m-markdown ol {
    padding-inline-start: 30px;
  }

  .m-markdown-small ul,
  .m-markdown-small ol {
    padding-inline-start: 20px;
  }

  .m-markdown-small a,
  .m-markdown a {
    color:var(--blue);
  }

  .m-markdown-small img,
  .m-markdown img { 
    max-width: 100%; 
  }

  /* Markdown table */

  .m-markdown-small table,
  .m-markdown table {
    border-spacing: 0;
    margin: 10px 0;
    border-collapse: separate;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: calc(var(--font-size-small) + 1px);
    line-height: calc(var(--font-size-small) + 4px);
    max-width: 100%;
  }

  .m-markdown-small table {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 2px);
    margin: 8px 0;
  }

  .m-markdown-small td, 
  .m-markdown-small th,
  .m-markdown td, 
  .m-markdown th {
    vertical-align: top;
    border-top: 1px solid var(--border-color);
    line-height: calc(var(--font-size-small) + 4px);
  }

  .m-markdown-small tr:first-child th,
  .m-markdown tr:first-child th {
    border-top: 0 none;
  }

  .m-markdown th, 
  .m-markdown td { 
    padding: 10px 12px; 
  }

  .m-markdown-small th,
  .m-markdown-small td { 
    padding: 8px 8px; 
  }

  .m-markdown th,
  .m-markdown-small th {
    font-weight: 600;
    background-color: var(--bg2);
    vertical-align: middle;
  }

  .m-markdown-small table code {
    font-size: calc(var(--font-size-mono) - 2px);
  }

  .m-markdown table code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown blockquote,
  .m-markdown-small blockquote {
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-left: 3px solid var(--border-color);
    padding: 6px 0 6px 6px;
  }
  .m-markdown hr{
    border: 1px solid var(--border-color);
  }
`,We=l`
/* Button */
#try-btn {
  padding: 9px 18px;
  font-size: var(--font-size-regular);
}
.m-btn {
  border-radius: var(--border-radius);
  font-weight: 600;
  display: inline-block;
  padding: 6px 16px;
  font-size: var(--font-size-small);
  outline: 0;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  border: 2px solid var(--primary-color);
  background-color:transparent;
  transition: background-color 0.2s;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.m-btn.primary {
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.thin-border { border-width: 1px; }
.m-btn.large { padding:8px 14px; }
.m-btn.small { padding:5px 12px; }
.m-btn.tiny { padding:5px 6px; }
.m-btn.circle { border-radius: 50%; }
.m-btn:hover { 
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.nav { border: 2px solid var(--nav-accent-color); }
.m-btn.nav:hover { 
  background-color: var(--nav-accent-color);
}
.m-btn:disabled{ 
  background-color: var(--bg3);
  color: var(--fg3);
  border-color: var(--fg3);
  cursor: not-allowed;
  opacity: 0.4;
}
.toolbar-btn{
  cursor: pointer;
  padding: 4px;
  margin:0 2px;
  font-size: var(--font-size-small);
  min-width: 50px;
  color: var(--primary-color-invert);
  border-radius: 2px;
  border: none;
  background-color: var(--primary-color);
}

input, textarea, select, button, pre {
  color:var(--fg);
  outline: none;
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}
button {
  font-family: var(--font-regular);
}

/* Form Inputs */
pre,
select,
textarea,
input[type="file"],
input[type="text"],
input[type="password"] {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: var(--font-size-small);
  transition: border .2s;
  padding: 6px 5px;
}

select {
  font-family: var(--font-regular);
  padding: 5px 30px 5px 5px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%3Cpath%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3A1%201%200%2000.3%204.7l5%205a1%201%200%20001.4%200l5-5a1%201%200%2010-1.4-1.4z%22%20fill%3D%22%23777777%22%2F%3E%3C%2Fsvg%3E"); 
  background-position: calc(100% - 5px) center;
  background-repeat: no-repeat;  
  background-size: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

select:hover {
  border-color: var(--primary-color);
}

textarea::placeholder,
input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: var(--placeholder-color);
  opacity:1;
}

select:focus,
textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
textarea:active,
input[type="text"]:active,
input[type="password"]:active {
  border:1px solid var(--primary-color);
}

input[type="file"]{
  font-family: var(--font-regular);
  padding:2px;
  cursor:pointer;
  border: 1px solid var(--primary-color);
  min-height: calc(var(--font-size-small) + 18px);
}

input[type="file"]::-webkit-file-upload-button {
  font-family: var(--font-regular);
  font-size: var(--font-size-small);
  outline: none;
  cursor:pointer;
  padding: 3px 8px;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
  border-radius: var(--border-radius);;
  -webkit-appearance: none;
}

pre,
textarea {
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) var(--input-bg);
}

pre::-webkit-scrollbar,
textarea::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

pre::-webkit-scrollbar-track,
textarea::-webkit-scrollbar-track {
  background:var(--input-bg);
}
 
pre::-webkit-scrollbar-thumb,
textarea::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--border-color);
}

.link {
  font-size:var(--font-size-small);
  text-decoration: underline;
  color:var(--blue);
  font-family:var(--font-mono);
  margin-bottom:2px;
}

input[type="checkbox"]:focus{
  outline:0;
}

/* Toggle Body */
input[type="checkbox"] {
  appearance: none;
  display: inline-block;
  background-color: var(--light-bg);
  border: 1px solid var(--light-bg);
  border-radius: 9px;
  cursor: pointer;
  height: 18px;
  position: relative;
  transition: border .25s .15s, box-shadow .25s .3s, padding .25s;
  min-width: 36px;
  width: 36px;
  vertical-align: top;
}
/* Toggle Thumb */
input[type="checkbox"]:after {
  position: absolute;
  background-color: var(--bg);
  border: 1px solid var(--light-bg);
  border-radius: 8px;
  content: '';
  top: 0px;
  left: 0px;
  right: 16px;
  display: block;
  height: 16px;
  transition: border .25s .15s, left .25s .1s, right .15s .175s;
}

/* Toggle Body - Checked */
input[type="checkbox"]:checked {
  box-shadow: inset 0 0 0 13px var(--green);
  border-color: var(--green);
}
/* Toggle Thumb - Checked*/
input[type="checkbox"]:checked:after {
  border: 1px solid var(--green);
  left: 16px;
  right: 1px;
  transition: border .25s, left .15s .25s, right .25s .175s;
}
`,Ve=l`
.row, .col{
  display:flex;
} 
.row {
  align-items:center;
  flex-direction: row;
}
.col {
  align-items:stretch;
  flex-direction: column;
}
`,Ge=l`
.m-table {
  border-spacing: 0;  
  border-collapse: separate;
  border: 1px solid var(--light-border-color);
  border-radius: var(--border-radius);
  margin: 0;
  max-width: 100%;
  direction: ltr;
}
.m-table tr:first-child td,
.m-table tr:first-child th {
    border-top: 0 none;
}
.m-table td, 
.m-table th {
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 4px);
  padding: 4px 5px 4px;
  vertical-align: top;
}

.m-table.padded-12 td, 
.m-table.padded-12 th {
  padding: 12px;
}

.m-table td:not([align]), 
.m-table th:not([align]) {
  text-align: left;
}

.m-table th {
  color: var(--fg2);
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 18px);
  font-weight: 600;
  letter-spacing: normal;
  background-color: var(--bg2);
  vertical-align: bottom;
  border-bottom: 1px solid var(--light-border-color);
}

.m-table > tbody > tr > td,
.m-table > tr > td {
  border-top: 1px solid var(--light-border-color);
  text-overflow: ellipsis;
  overflow: hidden;
}
.table-title {
  font-size:var(--font-size-small);
  font-weight:bold;
  vertical-align: middle;
  margin: 12px 0 4px 0;
}
`,Ke=l`
.only-large-screen { display:none; }
.endpoint-head .path{
  display: flex;
  font-family:var(--font-mono);
  font-size: var(--font-size-small);
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
}

.endpoint-head .descr {
  font-size: var(--font-size-small);
  color:var(--light-fg);
  font-weight:400;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
  display:none;
}

.m-endpoint.expanded{margin-bottom:16px; }
.m-endpoint > .endpoint-head{
  border-width:1px 1px 1px 5px;
  border-style:solid;
  border-color:transparent;
  border-top-color:var(--light-border-color);
  display:flex;
  padding:6px 16px;
  align-items: center;
  cursor: pointer;
}
.m-endpoint > .endpoint-head.put:hover,
.m-endpoint > .endpoint-head.put.expanded{
  border-color:var(--orange); 
  background-color:var(--light-orange); 
}
.m-endpoint > .endpoint-head.post:hover,
.m-endpoint > .endpoint-head.post.expanded {
  border-color:var(--green); 
  background-color:var(--light-green); 
}
.m-endpoint > .endpoint-head.get:hover,
.m-endpoint > .endpoint-head.get.expanded {
  border-color:var(--blue); 
  background-color:var(--light-blue); 
}
.m-endpoint > .endpoint-head.delete:hover,
.m-endpoint > .endpoint-head.delete.expanded {
  border-color:var(--red); 
  background-color:var(--light-red); 
}

.m-endpoint > .endpoint-head.head:hover,
.m-endpoint > .endpoint-head.head.expanded,
.m-endpoint > .endpoint-head.patch:hover,
.m-endpoint > .endpoint-head.patch.expanded,
.m-endpoint > .endpoint-head.options:hover,
.m-endpoint > .endpoint-head.options.expanded {
  border-color:var(--yellow); 
  background-color:var(--light-yellow); 
}

.m-endpoint > .endpoint-head.deprecated:hover,
.m-endpoint > .endpoint-head.deprecated.expanded {
  border-color:var(--border-color); 
  filter:opacity(0.6);
}

.m-endpoint .endpoint-body {
  flex-wrap:wrap;
  padding:16px 0px 0 0px;
  border-width:0px 1px 1px 5px;
  border-style:solid;
  box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.15);
}
.m-endpoint .endpoint-body.delete{ border-color:var(--red); }
.m-endpoint .endpoint-body.put{ border-color:var(--orange); }
.m-endpoint .endpoint-body.post{border-color:var(--green);}
.m-endpoint .endpoint-body.get{ border-color:var(--blue); }
.m-endpoint .endpoint-body.head,
.m-endpoint .endpoint-body.patch,
.m-endpoint .endpoint-body.options { 
  border-color:var(--yellow); 
}

.m-endpoint .endpoint-body.deprecated{ 
  border-color:var(--border-color);
  filter:opacity(0.6);
}

.endpoint-head .deprecated{
  color: var(--light-fg);
  filter:opacity(0.6);
}

.summary{
  padding:8px 8px;
}
.summary .title{
  font-size:calc(var(--font-size-regular) + 2px);
  margin-bottom: 6px;
  word-break: break-all;
}

.endpoint-head .method{
  padding:2px 5px;
  vertical-align: middle;
  font-size:var(--font-size-small);
  height: calc(var(--font-size-small) + 16px);
  line-height: calc(var(--font-size-small) + 8px);
  width: 60px;
  border-radius: 2px;
  display:inline-block;
  text-align: center;
  font-weight: bold;
  text-transform:uppercase;
  margin-right:5px;
}
.endpoint-head .method{ width: 65px; }
.endpoint-head .method.delete{ border: 2px solid var(--red);}
.endpoint-head .method.put{ border: 2px solid var(--orange); }
.endpoint-head .method.post{ border: 2px solid var(--green); }
.endpoint-head .method.get{ border: 2px solid var(--blue); }
.endpoint-head .method.get.deprecated{ border: 2px solid var(--border-color); }
.endpoint-head .method.head,
.endpoint-head .method.patch,
.endpoint-head .method.options { 
  border: 2px solid var(--yellow); 
}

.req-resp-container{
  display: flex;
  margin-top:16px;
  align-items: stretch;
  flex-wrap: wrap;
  flex-direction: column;
  border-top:1px solid var(--light-border-color);
}

.view-mode-request,
api-response.view-mode {
  flex:1; 
  min-height:100px;
  padding:16px 8px;
  overflow:hidden;
}
.view-mode-request {
  border-width:0 0 1px 0;
  border-style:dashed;
}

.head .view-mode-request,
.patch .view-mode-request,
.options .view-mode-request { 
  border-color:var(--yellow); 
}
.put .view-mode-request { 
  border-color:var(--orange); 
}
.post .view-mode-request { 
  border-color:var(--green); 
}
.get .view-mode-request { 
  border-color:var(--blue); 
}
.delete .view-mode-request { 
  border-color:var(--red); 
}

@media only screen and (min-width: 1024px) {
  .only-large-screen { display:block; }
  .endpoint-head .path{
    font-size: var(--font-size-regular);
  }
  .endpoint-head .descr{
    display: flex;
  }
  .endpoint-head .m-markdown-small,
  .descr .m-markdown-small{
    display:block;
  }
  .req-resp-container{
    flex-direction: var(--layout, row);
    flex-wrap: nowrap;
  }
  api-response.view-mode {
    padding:16px;
  }
  .view-mode-request.row-layout {
    border-width:0 1px 0 0;
    padding:16px;
  }
  .summary{
    padding:8px 16px;
  }
}
`,Je=l`
code[class*="language-"],
pre[class*="language-"] {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 2;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--light-fg)
}

.token.punctuation {
  color: var(--fg);
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color:var(--pink);
}

.token.function-name {
  color: var(--blue);
}

.token.boolean,
.token.number,
.token.function {
  color: var(--red);
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: var(--code-property-color);
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: var(--code-keyword-color);
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable { 
  color: var(--green);
}

.token.operator,
.token.entity,
.token.url {
  color: var(--code-operator-color);
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
`,Ye=l`
.tab-panel {
  border: none;
}
.tab-buttons {
  height:30px;
  border-bottom: 1px solid var(--light-border-color) ;
  align-items: stretch;
  overflow-y: hidden;
  overflow-x: auto;
  scrollbar-width: thin;
}
.tab-buttons::-webkit-scrollbar {
  height: 1px;
  background-color: var(--border-color);
}
.tab-btn {
  border: none;
  border-bottom: 3px solid transparent; 
  color: var(--light-fg);
  background-color: transparent;
  white-space: nowrap;
  cursor:pointer;
  outline:none;
  font-family:var(--font-regular); 
  font-size:var(--font-size-small);
  margin-right:16px;
  padding:1px;
}
.tab-btn.active {
  border-bottom: 3px solid var(--primary-color); 
  font-weight:bold;
  color:var(--primary-color);
}

.tab-btn:hover {
  color:var(--primary-color);
}
.tab-content {
  margin:-1px 0 0 0;
  position:relative;
  min-height: 50px;
}
`,Ze=l`
.nav-bar {
  width:0;
  height:100%;
  overflow: hidden;
  color:var(--nav-text-color);
  background-color: var(--nav-bg-color);
  background-blend-mode: multiply;
  line-height: calc(var(--font-size-small) + 4px);
  display:none;
  position:relative;
  flex-direction:column;
  flex-wrap:nowrap;
  word-break:break-word;
}
::slotted([slot=nav-logo]){
  padding:16px 16px 0 16px;
}
.nav-scroll {
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: overlay;
  scrollbar-width: thin;
  scrollbar-color: var(--nav-hover-bg-color) transparent;
}

.nav-bar-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.nav-bar.read .nav-bar-tag-icon {
  display:none;
}

.nav-bar-tag-icon {
  color: var(--nav-text-color);
  font-size: 20px; 
}
.nav-bar-tag-icon:hover {
  color:var(--nav-hover-text-color);
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-paths-under-tag {
  display:none;
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transform: rotate(-90deg);
  transition: transform 0.2s ease-out 0s;
}
.nav-bar.focused .nav-bar-tag-and-paths.expanded .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transition: transform 0.2s ease-out 0s;
}
.nav-scroll::-webkit-scrollbar {
  width: var(--scroll-bar-width, 8px);
}
.nav-scroll::-webkit-scrollbar-track {
  background:transparent;
}
.nav-scroll::-webkit-scrollbar-thumb {
  background-color: var(--nav-hover-bg-color);
}

.nav-bar-tag {
  font-size: var(--font-size-regular);
  color: var(--nav-accent-color);
  border-left:4px solid transparent;
  font-weight:bold;
  padding: 15px 15px 15px 10px;
  text-transform: capitalize;
}

.nav-bar-components,
.nav-bar-h1,
.nav-bar-h2,
.nav-bar-info,
.nav-bar-tag,
.nav-bar-path {
  display:flex;
  cursor:pointer;
  border-left:4px solid transparent;
}

.nav-bar-h1,
.nav-bar-h2,
.nav-bar-path {
  font-size: calc(var(--font-size-small) + 1px);
  padding: var(--nav-item-padding);
}
.nav-bar-path.small-font {
  font-size: var(--font-size-small);
}

.nav-bar-info {
  font-size: var(--font-size-regular);
  padding: 16px 10px;
  font-weight:bold;
}
.nav-bar-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--font-size-small);
  color: var(--nav-text-color);
  padding: var(--nav-item-padding);
  font-weight:bold;
}
.nav-bar-section.operations {
  cursor:pointer;
}
.nav-bar-section.operations:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}

.nav-bar-section:first-child {
  display: none;
}
.nav-bar-h2 {margin-left:12px;}

.nav-bar-h1.active,
.nav-bar-h2.active,
.nav-bar-info.active,
.nav-bar-tag.active,
.nav-bar-path.active,
.nav-bar-section.operations.active {
  border-left:4px solid var(--nav-accent-color);
  color:var(--nav-hover-text-color);
}

.nav-bar-h1:hover,
.nav-bar-h2:hover,
.nav-bar-info:hover,
.nav-bar-tag:hover,
.nav-bar-path:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}
`,Qe=l`
#api-info {
  font-size:calc(var(--font-size-regular) - 1px);margin-top:8px
  margin-left: -15px;
}

#api-info span:before {
  content: "|";
  display: inline-block;
  opacity: 0.5;
  width: 15px;
  text-align: center;
}
#api-info span:first-child:before {
  content: "";
  width: 0px;
}
`,Xe=l`

`,et=/[\s#:?&={}]/g,tt="_rapidoc_api_key";function rt(e){return new Promise((t=>setTimeout(t,e)))}function nt(e,t){const r=t.currentTarget,n=document.createElement("textarea");n.value=e,n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy"),r.innerText="Copied",setTimeout((()=>{r.innerText="Copy"}),5e3)}catch(e){console.error("Unable to copy",e)}document.body.removeChild(n)}function ot(e,t,r="includes"){return"includes"===r?`${t.method} ${t.path} ${t.summary||t.description||""} ${t.operationId||""}`.toLowerCase().includes(e.toLowerCase()):new RegExp(e,"i").test(`${t.method} ${t.path}`)}function at(e,t=new Set){return e?(Object.keys(e).forEach((r=>{var n;if(t.add(r),e[r].properties)at(e[r].properties,t);else if(null!==(n=e[r].items)&&void 0!==n&&n.properties){var o;at(null===(o=e[r].items)||void 0===o?void 0:o.properties,t)}})),t):t}function it(e,t){if(e){const r=document.createElement("a");document.body.appendChild(r),r.style="display: none",r.href=e,r.download=t,r.click(),r.remove()}}function st(e){if(e){const t=document.createElement("a");document.body.appendChild(t),t.style="display: none",t.href=e,t.target="_blank",t.click(),t.remove()}}var lt=r(764).Buffer;var ct=function(e){return e&&e.Math==Math&&e},pt=ct("object"==typeof globalThis&&globalThis)||ct("object"==typeof window&&window)||ct("object"==typeof self&&self)||ct("object"==typeof pt&&pt)||function(){return this}()||Function("return this")(),ut=function(e){try{return!!e()}catch(e){return!0}},dt=!ut((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")})),ht=dt,ft=Function.prototype,mt=ft.apply,yt=ft.call,gt="object"==typeof Reflect&&Reflect.apply||(ht?yt.bind(mt):function(){return yt.apply(mt,arguments)}),vt=dt,bt=Function.prototype,xt=bt.bind,wt=bt.call,$t=vt&&xt.bind(wt,wt),kt=vt?function(e){return e&&$t(e)}:function(e){return e&&function(){return wt.apply(e,arguments)}},St=function(e){return"function"==typeof e},At={},Et=!ut((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),Ot=dt,Tt=Function.prototype.call,Ct=Ot?Tt.bind(Tt):function(){return Tt.apply(Tt,arguments)},_t={},jt={}.propertyIsEnumerable,It=Object.getOwnPropertyDescriptor,Pt=It&&!jt.call({1:2},1);_t.f=Pt?function(e){var t=It(this,e);return!!t&&t.enumerable}:jt;var Rt,Lt,Dt=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},Bt=kt,Ft=Bt({}.toString),Nt=Bt("".slice),zt=function(e){return Nt(Ft(e),8,-1)},Ut=kt,qt=ut,Mt=zt,Ht=pt.Object,Wt=Ut("".split),Vt=qt((function(){return!Ht("z").propertyIsEnumerable(0)}))?function(e){return"String"==Mt(e)?Wt(e,""):Ht(e)}:Ht,Gt=pt.TypeError,Kt=function(e){if(null==e)throw Gt("Can't call method on "+e);return e},Jt=Vt,Yt=Kt,Zt=function(e){return Jt(Yt(e))},Qt=St,Xt=function(e){return"object"==typeof e?null!==e:Qt(e)},er={},tr=er,rr=pt,nr=St,or=function(e){return nr(e)?e:void 0},ar=function(e,t){return arguments.length<2?or(tr[e])||or(rr[e]):tr[e]&&tr[e][t]||rr[e]&&rr[e][t]},ir=kt({}.isPrototypeOf),sr=ar("navigator","userAgent")||"",lr=pt,cr=sr,pr=lr.process,ur=lr.Deno,dr=pr&&pr.versions||ur&&ur.version,hr=dr&&dr.v8;hr&&(Lt=(Rt=hr.split("."))[0]>0&&Rt[0]<4?1:+(Rt[0]+Rt[1])),!Lt&&cr&&(!(Rt=cr.match(/Edge\/(\d+)/))||Rt[1]>=74)&&(Rt=cr.match(/Chrome\/(\d+)/))&&(Lt=+Rt[1]);var fr=Lt,mr=fr,yr=ut,gr=!!Object.getOwnPropertySymbols&&!yr((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&mr&&mr<41})),vr=gr&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,br=ar,xr=St,wr=ir,$r=vr,kr=pt.Object,Sr=$r?function(e){return"symbol"==typeof e}:function(e){var t=br("Symbol");return xr(t)&&wr(t.prototype,kr(e))},Ar=pt.String,Er=function(e){try{return Ar(e)}catch(e){return"Object"}},Or=St,Tr=Er,Cr=pt.TypeError,_r=function(e){if(Or(e))return e;throw Cr(Tr(e)+" is not a function")},jr=_r,Ir=function(e,t){var r=e[t];return null==r?void 0:jr(r)},Pr=Ct,Rr=St,Lr=Xt,Dr=pt.TypeError,Br={exports:{}},Fr=pt,Nr=Object.defineProperty,zr="__core-js_shared__",Ur=pt[zr]||function(e,t){try{Nr(Fr,e,{value:t,configurable:!0,writable:!0})}catch(r){Fr[e]=t}return t}(zr,{}),qr=Ur;(Br.exports=function(e,t){return qr[e]||(qr[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:"pure",copyright:"\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Mr=Kt,Hr=pt.Object,Wr=function(e){return Hr(Mr(e))},Vr=Wr,Gr=kt({}.hasOwnProperty),Kr=Object.hasOwn||function(e,t){return Gr(Vr(e),t)},Jr=kt,Yr=0,Zr=Math.random(),Qr=Jr(1..toString),Xr=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Qr(++Yr+Zr,36)},en=pt,tn=Br.exports,rn=Kr,nn=Xr,on=gr,an=vr,sn=tn("wks"),ln=en.Symbol,cn=ln&&ln.for,pn=an?ln:ln&&ln.withoutSetter||nn,un=function(e){if(!rn(sn,e)||!on&&"string"!=typeof sn[e]){var t="Symbol."+e;on&&rn(ln,e)?sn[e]=ln[e]:sn[e]=an&&cn?cn(t):pn(t)}return sn[e]},dn=Ct,hn=Xt,fn=Sr,mn=Ir,yn=un,gn=pt.TypeError,vn=yn("toPrimitive"),bn=function(e,t){if(!hn(e)||fn(e))return e;var r,n=mn(e,vn);if(n){if(void 0===t&&(t="default"),r=dn(n,e,t),!hn(r)||fn(r))return r;throw gn("Can't convert object to primitive value")}return void 0===t&&(t="number"),function(e,t){var r,n;if("string"===t&&Rr(r=e.toString)&&!Lr(n=Pr(r,e)))return n;if(Rr(r=e.valueOf)&&!Lr(n=Pr(r,e)))return n;if("string"!==t&&Rr(r=e.toString)&&!Lr(n=Pr(r,e)))return n;throw Dr("Can't convert object to primitive value")}(e,t)},xn=Sr,wn=function(e){var t=bn(e,"string");return xn(t)?t:t+""},$n=Xt,kn=pt.document,Sn=$n(kn)&&$n(kn.createElement),An=function(e){return Sn?kn.createElement(e):{}},En=An,On=!Et&&!ut((function(){return 7!=Object.defineProperty(En("div"),"a",{get:function(){return 7}}).a})),Tn=Et,Cn=Ct,_n=_t,jn=Dt,In=Zt,Pn=wn,Rn=Kr,Ln=On,Dn=Object.getOwnPropertyDescriptor;At.f=Tn?Dn:function(e,t){if(e=In(e),t=Pn(t),Ln)try{return Dn(e,t)}catch(e){}if(Rn(e,t))return jn(!Cn(_n.f,e,t),e[t])};var Bn=ut,Fn=St,Nn=/#|\.prototype\./,zn=function(e,t){var r=qn[Un(e)];return r==Hn||r!=Mn&&(Fn(t)?Bn(t):!!t)},Un=zn.normalize=function(e){return String(e).replace(Nn,".").toLowerCase()},qn=zn.data={},Mn=zn.NATIVE="N",Hn=zn.POLYFILL="P",Wn=zn,Vn=_r,Gn=dt,Kn=kt(kt.bind),Jn=function(e,t){return Vn(e),void 0===t?e:Gn?Kn(e,t):function(){return e.apply(t,arguments)}},Yn={},Zn=Et&&ut((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Qn=pt,Xn=Xt,eo=Qn.String,to=Qn.TypeError,ro=function(e){if(Xn(e))return e;throw to(eo(e)+" is not an object")},no=Et,oo=On,ao=Zn,io=ro,so=wn,lo=pt.TypeError,co=Object.defineProperty,po=Object.getOwnPropertyDescriptor;Yn.f=no?ao?function(e,t,r){if(io(e),t=so(t),io(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable){var n=po(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return co(e,t,r)}:co:function(e,t,r){if(io(e),t=so(t),io(r),oo)try{return co(e,t,r)}catch(e){}if("get"in r||"set"in r)throw lo("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var uo=Yn,ho=Dt,fo=Et?function(e,t,r){return uo.f(e,t,ho(1,r))}:function(e,t,r){return e[t]=r,e},mo=pt,yo=gt,go=kt,vo=St,bo=At.f,xo=Wn,wo=er,$o=Jn,ko=fo,So=Kr,Ao=function(e){var t=function(r,n,o){if(this instanceof t){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,o)}return yo(e,this,arguments)};return t.prototype=e.prototype,t},Eo=function(e,t){var r,n,o,a,i,s,l,c,p=e.target,u=e.global,d=e.stat,h=e.proto,f=u?mo:d?mo[p]:(mo[p]||{}).prototype,m=u?wo:wo[p]||ko(wo,p,{})[p],y=m.prototype;for(o in t)r=!xo(u?o:p+(d?".":"#")+o,e.forced)&&f&&So(f,o),i=m[o],r&&(s=e.noTargetGet?(c=bo(f,o))&&c.value:f[o]),a=r&&s?s:t[o],r&&typeof i==typeof a||(l=e.bind&&r?$o(a,mo):e.wrap&&r?Ao(a):h&&vo(a)?go(a):a,(e.sham||a&&a.sham||i&&i.sham)&&ko(l,"sham",!0),ko(m,o,l),h&&(So(wo,n=p+"Prototype")||ko(wo,n,{}),ko(wo[n],o,a),e.real&&y&&!y[o]&&ko(y,o,a)))},Oo=Math.ceil,To=Math.floor,Co=function(e){var t=+e;return t!=t||0===t?0:(t>0?To:Oo)(t)},_o=Co,jo=Math.max,Io=Math.min,Po=function(e,t){var r=_o(e);return r<0?jo(r+t,0):Io(r,t)},Ro=Co,Lo=Math.min,Do=function(e){return e>0?Lo(Ro(e),9007199254740991):0},Bo=Do,Fo=function(e){return Bo(e.length)},No=Zt,zo=Po,Uo=Fo,qo=function(e){return function(t,r,n){var o,a=No(t),i=Uo(a),s=zo(n,i);if(e&&r!=r){for(;i>s;)if((o=a[s++])!=o)return!0}else for(;i>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},Mo={includes:qo(!0),indexOf:qo(!1)},Ho={},Wo=Kr,Vo=Zt,Go=Mo.indexOf,Ko=Ho,Jo=kt([].push),Yo=function(e,t){var r,n=Vo(e),o=0,a=[];for(r in n)!Wo(Ko,r)&&Wo(n,r)&&Jo(a,r);for(;t.length>o;)Wo(n,r=t[o++])&&(~Go(a,r)||Jo(a,r));return a},Zo=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Qo=Yo,Xo=Zo,ea=Object.keys||function(e){return Qo(e,Xo)},ta=Wr,ra=ea;Eo({target:"Object",stat:!0,forced:ut((function(){ra(1)}))},{keys:function(e){return ra(ta(e))}});var na=er.Object.keys,oa=na,aa=zt,ia=Array.isArray||function(e){return"Array"==aa(e)},sa={};sa[un("toStringTag")]="z";var la="[object z]"===String(sa),ca=pt,pa=la,ua=St,da=zt,ha=un("toStringTag"),fa=ca.Object,ma="Arguments"==da(function(){return arguments}()),ya=pa?da:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=fa(e),ha))?r:ma?da(t):"Object"==(n=da(t))&&ua(t.callee)?"Arguments":n},ga=ya,va=pt.String,ba=function(e){if("Symbol"===ga(e))throw TypeError("Cannot convert a Symbol value to a string");return va(e)},xa={},wa=Et,$a=Zn,ka=Yn,Sa=ro,Aa=Zt,Ea=ea;xa.f=wa&&!$a?Object.defineProperties:function(e,t){Sa(e);for(var r,n=Aa(t),o=Ea(t),a=o.length,i=0;a>i;)ka.f(e,r=o[i++],n[r]);return e};var Oa,Ta=ar("document","documentElement"),Ca=Br.exports,_a=Xr,ja=Ca("keys"),Ia=function(e){return ja[e]||(ja[e]=_a(e))},Pa=ro,Ra=xa,La=Zo,Da=Ho,Ba=Ta,Fa=An,Na=Ia("IE_PROTO"),za=function(){},Ua=function(e){return"<script>"+e+"<\/script>"},qa=function(e){e.write(Ua("")),e.close();var t=e.parentWindow.Object;return e=null,t},Ma=function(){try{Oa=new ActiveXObject("htmlfile")}catch(e){}var e,t;Ma="undefined"!=typeof document?document.domain&&Oa?qa(Oa):((t=Fa("iframe")).style.display="none",Ba.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Ua("document.F=Object")),e.close(),e.F):qa(Oa);for(var r=La.length;r--;)delete Ma.prototype[La[r]];return Ma()};Da[Na]=!0;var Ha=Object.create||function(e,t){var r;return null!==e?(za.prototype=Pa(e),r=new za,za.prototype=null,r[Na]=e):r=Ma(),void 0===t?r:Ra.f(r,t)},Wa={},Va=Yo,Ga=Zo.concat("length","prototype");Wa.f=Object.getOwnPropertyNames||function(e){return Va(e,Ga)};var Ka={},Ja=wn,Ya=Yn,Za=Dt,Qa=function(e,t,r){var n=Ja(t);n in e?Ya.f(e,n,Za(0,r)):e[n]=r},Xa=Po,ei=Fo,ti=Qa,ri=pt.Array,ni=Math.max,oi=function(e,t,r){for(var n=ei(e),o=Xa(t,n),a=Xa(void 0===r?n:r,n),i=ri(ni(a-o,0)),s=0;o<a;o++,s++)ti(i,s,e[o]);return i.length=s,i},ai=zt,ii=Zt,si=Wa.f,li=oi,ci="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];Ka.f=function(e){return ci&&"Window"==ai(e)?function(e){try{return si(e)}catch(e){return li(ci)}}(e):si(ii(e))};var pi={};pi.f=Object.getOwnPropertySymbols;var ui=kt([].slice),di=fo,hi=function(e,t,r,n){n&&n.enumerable?e[t]=r:di(e,t,r)},fi={},mi=un;fi.f=mi;var yi=er,gi=Kr,vi=fi,bi=Yn.f,xi=function(e){var t=yi.Symbol||(yi.Symbol={});gi(t,e)||bi(t,e,{value:vi.f(e)})},wi=ya,$i=la?{}.toString:function(){return"[object "+wi(this)+"]"},ki=la,Si=Yn.f,Ai=fo,Ei=Kr,Oi=$i,Ti=un("toStringTag"),Ci=function(e,t,r,n){if(e){var o=r?e:e.prototype;Ei(o,Ti)||Si(o,Ti,{configurable:!0,value:t}),n&&!ki&&Ai(o,"toString",Oi)}},_i=St,ji=Ur,Ii=kt(Function.toString);_i(ji.inspectSource)||(ji.inspectSource=function(e){return Ii(e)});var Pi,Ri,Li,Di=ji.inspectSource,Bi=St,Fi=Di,Ni=pt.WeakMap,zi=Bi(Ni)&&/native code/.test(Fi(Ni)),Ui=zi,qi=pt,Mi=kt,Hi=Xt,Wi=fo,Vi=Kr,Gi=Ur,Ki=Ia,Ji=Ho,Yi="Object already initialized",Zi=qi.TypeError,Qi=qi.WeakMap;if(Ui||Gi.state){var Xi=Gi.state||(Gi.state=new Qi),es=Mi(Xi.get),ts=Mi(Xi.has),rs=Mi(Xi.set);Pi=function(e,t){if(ts(Xi,e))throw new Zi(Yi);return t.facade=e,rs(Xi,e,t),t},Ri=function(e){return es(Xi,e)||{}},Li=function(e){return ts(Xi,e)}}else{var ns=Ki("state");Ji[ns]=!0,Pi=function(e,t){if(Vi(e,ns))throw new Zi(Yi);return t.facade=e,Wi(e,ns,t),t},Ri=function(e){return Vi(e,ns)?e[ns]:{}},Li=function(e){return Vi(e,ns)}}var os={set:Pi,get:Ri,has:Li,enforce:function(e){return Li(e)?Ri(e):Pi(e,{})},getterFor:function(e){return function(t){var r;if(!Hi(t)||(r=Ri(t)).type!==e)throw Zi("Incompatible receiver, "+e+" required");return r}}},as=kt,is=ut,ss=St,ls=ya,cs=Di,ps=function(){},us=[],ds=ar("Reflect","construct"),hs=/^\s*(?:class|function)\b/,fs=as(hs.exec),ms=!hs.exec(ps),ys=function(e){if(!ss(e))return!1;try{return ds(ps,us,e),!0}catch(e){return!1}},gs=function(e){if(!ss(e))return!1;switch(ls(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ms||!!fs(hs,cs(e))}catch(e){return!0}};gs.sham=!0;var vs=!ds||is((function(){var e;return ys(ys.call)||!ys(Object)||!ys((function(){e=!0}))||e}))?gs:ys,bs=pt,xs=ia,ws=vs,$s=Xt,ks=un("species"),Ss=bs.Array,As=function(e,t){return new(function(e){var t;return xs(e)&&(t=e.constructor,(ws(t)&&(t===Ss||xs(t.prototype))||$s(t)&&null===(t=t[ks]))&&(t=void 0)),void 0===t?Ss:t}(e))(0===t?0:t)},Es=Jn,Os=Vt,Ts=Wr,Cs=Fo,_s=As,js=kt([].push),Is=function(e){var t=1==e,r=2==e,n=3==e,o=4==e,a=6==e,i=7==e,s=5==e||a;return function(l,c,p,u){for(var d,h,f=Ts(l),m=Os(f),y=Es(c,p),g=Cs(m),v=0,b=u||_s,x=t?b(l,g):r||i?b(l,0):void 0;g>v;v++)if((s||v in m)&&(h=y(d=m[v],v,f),e))if(t)x[v]=h;else if(h)switch(e){case 3:return!0;case 5:return d;case 6:return v;case 2:js(x,d)}else switch(e){case 4:return!1;case 7:js(x,d)}return a?-1:n||o?o:x}},Ps={forEach:Is(0),map:Is(1),filter:Is(2),some:Is(3),every:Is(4),find:Is(5),findIndex:Is(6),filterReject:Is(7)},Rs=Eo,Ls=pt,Ds=ar,Bs=gt,Fs=Ct,Ns=kt,zs=Et,Us=gr,qs=ut,Ms=Kr,Hs=ia,Ws=St,Vs=Xt,Gs=ir,Ks=Sr,Js=ro,Ys=Wr,Zs=Zt,Qs=wn,Xs=ba,el=Dt,tl=Ha,rl=ea,nl=Wa,ol=Ka,al=pi,il=At,sl=Yn,ll=xa,cl=_t,pl=ui,ul=hi,dl=Br.exports,hl=Ho,fl=Xr,ml=un,yl=fi,gl=xi,vl=Ci,bl=os,xl=Ps.forEach,wl=Ia("hidden"),$l="Symbol",kl=ml("toPrimitive"),Sl=bl.set,Al=bl.getterFor($l),El=Object.prototype,Ol=Ls.Symbol,Tl=Ol&&Ol.prototype,Cl=Ls.TypeError,_l=Ls.QObject,jl=Ds("JSON","stringify"),Il=il.f,Pl=sl.f,Rl=ol.f,Ll=cl.f,Dl=Ns([].push),Bl=dl("symbols"),Fl=dl("op-symbols"),Nl=dl("string-to-symbol-registry"),zl=dl("symbol-to-string-registry"),Ul=dl("wks"),ql=!_l||!_l.prototype||!_l.prototype.findChild,Ml=zs&&qs((function(){return 7!=tl(Pl({},"a",{get:function(){return Pl(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=Il(El,t);n&&delete El[t],Pl(e,t,r),n&&e!==El&&Pl(El,t,n)}:Pl,Hl=function(e,t){var r=Bl[e]=tl(Tl);return Sl(r,{type:$l,tag:e,description:t}),zs||(r.description=t),r},Wl=function(e,t,r){e===El&&Wl(Fl,t,r),Js(e);var n=Qs(t);return Js(r),Ms(Bl,n)?(r.enumerable?(Ms(e,wl)&&e[wl][n]&&(e[wl][n]=!1),r=tl(r,{enumerable:el(0,!1)})):(Ms(e,wl)||Pl(e,wl,el(1,{})),e[wl][n]=!0),Ml(e,n,r)):Pl(e,n,r)},Vl=function(e,t){Js(e);var r=Zs(t),n=rl(r).concat(Yl(r));return xl(n,(function(t){zs&&!Fs(Gl,r,t)||Wl(e,t,r[t])})),e},Gl=function(e){var t=Qs(e),r=Fs(Ll,this,t);return!(this===El&&Ms(Bl,t)&&!Ms(Fl,t))&&(!(r||!Ms(this,t)||!Ms(Bl,t)||Ms(this,wl)&&this[wl][t])||r)},Kl=function(e,t){var r=Zs(e),n=Qs(t);if(r!==El||!Ms(Bl,n)||Ms(Fl,n)){var o=Il(r,n);return!o||!Ms(Bl,n)||Ms(r,wl)&&r[wl][n]||(o.enumerable=!0),o}},Jl=function(e){var t=Rl(Zs(e)),r=[];return xl(t,(function(e){Ms(Bl,e)||Ms(hl,e)||Dl(r,e)})),r},Yl=function(e){var t=e===El,r=Rl(t?Fl:Zs(e)),n=[];return xl(r,(function(e){!Ms(Bl,e)||t&&!Ms(El,e)||Dl(n,Bl[e])})),n};if(Us||(ul(Tl=(Ol=function(){if(Gs(Tl,this))throw Cl("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?Xs(arguments[0]):void 0,t=fl(e),r=function(e){this===El&&Fs(r,Fl,e),Ms(this,wl)&&Ms(this[wl],t)&&(this[wl][t]=!1),Ml(this,t,el(1,e))};return zs&&ql&&Ml(El,t,{configurable:!0,set:r}),Hl(t,e)}).prototype,"toString",(function(){return Al(this).tag})),ul(Ol,"withoutSetter",(function(e){return Hl(fl(e),e)})),cl.f=Gl,sl.f=Wl,ll.f=Vl,il.f=Kl,nl.f=ol.f=Jl,al.f=Yl,yl.f=function(e){return Hl(ml(e),e)},zs&&Pl(Tl,"description",{configurable:!0,get:function(){return Al(this).description}})),Rs({global:!0,wrap:!0,forced:!Us,sham:!Us},{Symbol:Ol}),xl(rl(Ul),(function(e){gl(e)})),Rs({target:$l,stat:!0,forced:!Us},{for:function(e){var t=Xs(e);if(Ms(Nl,t))return Nl[t];var r=Ol(t);return Nl[t]=r,zl[r]=t,r},keyFor:function(e){if(!Ks(e))throw Cl(e+" is not a symbol");if(Ms(zl,e))return zl[e]},useSetter:function(){ql=!0},useSimple:function(){ql=!1}}),Rs({target:"Object",stat:!0,forced:!Us,sham:!zs},{create:function(e,t){return void 0===t?tl(e):Vl(tl(e),t)},defineProperty:Wl,defineProperties:Vl,getOwnPropertyDescriptor:Kl}),Rs({target:"Object",stat:!0,forced:!Us},{getOwnPropertyNames:Jl,getOwnPropertySymbols:Yl}),Rs({target:"Object",stat:!0,forced:qs((function(){al.f(1)}))},{getOwnPropertySymbols:function(e){return al.f(Ys(e))}}),jl&&Rs({target:"JSON",stat:!0,forced:!Us||qs((function(){var e=Ol();return"[null]"!=jl([e])||"{}"!=jl({a:e})||"{}"!=jl(Object(e))}))},{stringify:function(e,t,r){var n=pl(arguments),o=t;if((Vs(t)||void 0!==e)&&!Ks(e))return Hs(t)||(t=function(e,t){if(Ws(o)&&(t=Fs(o,this,e,t)),!Ks(t))return t}),n[1]=t,Bs(jl,null,n)}}),!Tl[kl]){var Zl=Tl.valueOf;ul(Tl,kl,(function(e){return Fs(Zl,this)}))}vl(Ol,$l),hl[wl]=!0;var Ql=er.Object.getOwnPropertySymbols,Xl=ut,ec=fr,tc=un("species"),rc=function(e){return ec>=51||!Xl((function(){var t=[];return(t.constructor={})[tc]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},nc=Ps.filter;Eo({target:"Array",proto:!0,forced:!rc("filter")},{filter:function(e){return nc(this,e,arguments.length>1?arguments[1]:void 0)}});var oc=er,ac=function(e){return oc[e+"Prototype"]},ic=ac("Array").filter,sc=ir,lc=ic,cc=Array.prototype,pc=function(e){var t=e.filter;return e===cc||sc(cc,e)&&t===cc.filter?lc:t},uc=pc,dc={exports:{}},hc=Eo,fc=ut,mc=Zt,yc=At.f,gc=Et,vc=fc((function(){yc(1)}));hc({target:"Object",stat:!0,forced:!gc||vc,sham:!gc},{getOwnPropertyDescriptor:function(e,t){return yc(mc(e),t)}});var bc=er.Object,xc=dc.exports=function(e,t){return bc.getOwnPropertyDescriptor(e,t)};bc.getOwnPropertyDescriptor.sham&&(xc.sham=!0);var wc,$c,kc,Sc=dc.exports,Ac={},Ec=Et,Oc=Kr,Tc=Function.prototype,Cc=Ec&&Object.getOwnPropertyDescriptor,_c=Oc(Tc,"name"),jc={EXISTS:_c,PROPER:_c&&"something"===function(){}.name,CONFIGURABLE:_c&&(!Ec||Ec&&Cc(Tc,"name").configurable)},Ic=!ut((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})),Pc=pt,Rc=Kr,Lc=St,Dc=Wr,Bc=Ic,Fc=Ia("IE_PROTO"),Nc=Pc.Object,zc=Nc.prototype,Uc=Bc?Nc.getPrototypeOf:function(e){var t=Dc(e);if(Rc(t,Fc))return t[Fc];var r=t.constructor;return Lc(r)&&t instanceof r?r.prototype:t instanceof Nc?zc:null},qc=ut,Mc=St,Hc=Ha,Wc=Uc,Vc=hi,Gc=un("iterator"),Kc=!1;[].keys&&("next"in(kc=[].keys())?($c=Wc(Wc(kc)))!==Object.prototype&&(wc=$c):Kc=!0);var Jc=null==wc||qc((function(){var e={};return wc[Gc].call(e)!==e}));Mc((wc=Jc?{}:Hc(wc))[Gc])||Vc(wc,Gc,(function(){return this}));var Yc={IteratorPrototype:wc,BUGGY_SAFARI_ITERATORS:Kc},Zc=Yc.IteratorPrototype,Qc=Ha,Xc=Dt,ep=Ci,tp=Ac,rp=function(){return this},np=function(e,t,r,n){var o=t+" Iterator";return e.prototype=Qc(Zc,{next:Xc(+!n,r)}),ep(e,o,!1,!0),tp[o]=rp,e},op=pt,ap=St,ip=op.String,sp=op.TypeError,lp=kt,cp=ro,pp=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=lp(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return cp(r),function(e){if("object"==typeof e||ap(e))return e;throw sp("Can't set "+ip(e)+" as a prototype")}(n),t?e(r,n):r.__proto__=n,r}}():void 0),up=Eo,dp=Ct,hp=np,fp=Uc,mp=Ci,yp=hi,gp=Ac,vp=jc.PROPER,bp=Yc.BUGGY_SAFARI_ITERATORS,xp=un("iterator"),wp="keys",$p="values",kp="entries",Sp=function(){return this},Ap=function(e,t,r,n,o,a,i){hp(r,t,n);var s,l,c,p=function(e){if(e===o&&m)return m;if(!bp&&e in h)return h[e];switch(e){case wp:case $p:case kp:return function(){return new r(this,e)}}return function(){return new r(this)}},u=t+" Iterator",d=!1,h=e.prototype,f=h[xp]||h["@@iterator"]||o&&h[o],m=!bp&&f||p(o),y="Array"==t&&h.entries||f;if(y&&(s=fp(y.call(new e)))!==Object.prototype&&s.next&&(mp(s,u,!0,!0),gp[u]=Sp),vp&&o==$p&&f&&f.name!==$p&&(d=!0,m=function(){return dp(f,this)}),o)if(l={values:p($p),keys:a?m:p(wp),entries:p(kp)},i)for(c in l)(bp||d||!(c in h))&&yp(h,c,l[c]);else up({target:t,proto:!0,forced:bp||d},l);return i&&h[xp]!==m&&yp(h,xp,m,{name:o}),gp[t]=m,l},Ep=Zt,Op=Ac,Tp=os;Yn.f;var Cp=Ap,_p="Array Iterator",jp=Tp.set,Ip=Tp.getterFor(_p);Cp(Array,"Array",(function(e,t){jp(this,{type:_p,target:Ep(e),index:0,kind:t})}),(function(){var e=Ip(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values"),Op.Arguments=Op.Array;var Pp=pt,Rp=ya,Lp=fo,Dp=Ac,Bp=un("toStringTag");for(var Fp in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Np=Pp[Fp],zp=Np&&Np.prototype;zp&&Rp(zp)!==Bp&&Lp(zp,Bp,Fp),Dp[Fp]=Dp.Array}var Up=ut,qp=function(e,t){var r=[][e];return!!r&&Up((function(){r.call(null,t||function(){return 1},1)}))},Mp=Ps.forEach,Hp=qp("forEach")?[].forEach:function(e){return Mp(this,e,arguments.length>1?arguments[1]:void 0)};Eo({target:"Array",proto:!0,forced:[].forEach!=Hp},{forEach:Hp});var Wp=ac("Array").forEach,Vp=ya,Gp=Kr,Kp=ir,Jp=Wp,Yp=Array.prototype,Zp={DOMTokenList:!0,NodeList:!0},Qp=function(e){var t=e.forEach;return e===Yp||Kp(Yp,e)&&t===Yp.forEach||Gp(Zp,Vp(e))?Jp:t},Xp=ar,eu=Wa,tu=pi,ru=ro,nu=kt([].concat),ou=Xp("Reflect","ownKeys")||function(e){var t=eu.f(ru(e)),r=tu.f;return r?nu(t,r(e)):t},au=ou,iu=Zt,su=At,lu=Qa;Eo({target:"Object",stat:!0,sham:!Et},{getOwnPropertyDescriptors:function(e){for(var t,r,n=iu(e),o=su.f,a=au(n),i={},s=0;a.length>s;)void 0!==(r=o(n,t=a[s++]))&&lu(i,t,r);return i}});var cu=er.Object.getOwnPropertyDescriptors,pu={exports:{}},uu=Eo,du=Et,hu=xa.f;uu({target:"Object",stat:!0,forced:Object.defineProperties!==hu,sham:!du},{defineProperties:hu});var fu=er.Object,mu=pu.exports=function(e,t){return fu.defineProperties(e,t)};fu.defineProperties.sham&&(mu.sham=!0);var yu=pu.exports,gu={exports:{}},vu=Eo,bu=Et,xu=Yn.f;vu({target:"Object",stat:!0,forced:Object.defineProperty!==xu,sham:!bu},{defineProperty:xu});var wu=er.Object,$u=gu.exports=function(e,t,r){return wu.defineProperty(e,t,r)};wu.defineProperty.sham&&($u.sham=!0);var ku=gu.exports;function Su(e,t,r){return t in e?ku(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Au(e,t){var r=oa(e);if(Ql){var n=Ql(e);t&&(n=uc(n).call(n,(function(t){return Sc(e,t).enumerable}))),r.push.apply(r,n)}return r}function Eu(e){for(var t=1;t<arguments.length;t++){var r,n,o=null!=arguments[t]?arguments[t]:{};t%2?Qp(r=Au(Object(o),!0)).call(r,(function(t){Su(e,t,o[t])})):cu?yu(e,cu(o)):Qp(n=Au(Object(o))).call(n,(function(t){ku(e,t,Sc(o,t))}))}return e}var Ou=Et,Tu=kt,Cu=Ct,_u=ut,ju=ea,Iu=pi,Pu=_t,Ru=Wr,Lu=Vt,Du=Object.assign,Bu=Object.defineProperty,Fu=Tu([].concat),Nu=!Du||_u((function(){if(Ou&&1!==Du({b:1},Du(Bu({},"a",{enumerable:!0,get:function(){Bu(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach((function(e){t[e]=e})),7!=Du({},e)[r]||ju(Du({},t)).join("")!=n}))?function(e,t){for(var r=Ru(e),n=arguments.length,o=1,a=Iu.f,i=Pu.f;n>o;)for(var s,l=Lu(arguments[o++]),c=a?Fu(ju(l),a(l)):ju(l),p=c.length,u=0;p>u;)s=c[u++],Ou&&!Cu(i,l,s)||(r[s]=l[s]);return r}:Du;Eo({target:"Object",stat:!0,forced:Object.assign!==Nu},{assign:Nu});var zu=er.Object.assign,Uu=Xt,qu=zt,Mu=un("match"),Hu=pt.TypeError,Wu=function(e){if(function(e){var t;return Uu(e)&&(void 0!==(t=e[Mu])?!!t:"RegExp"==qu(e))}(e))throw Hu("The method doesn't accept regular expressions");return e},Vu=un("match"),Gu=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[Vu]=!1,"/./"[e](t)}catch(e){}}return!1},Ku=Eo,Ju=kt,Yu=Do,Zu=ba,Qu=Wu,Xu=Kt,ed=Gu,td=Ju("".startsWith),rd=Ju("".slice),nd=Math.min;Ku({target:"String",proto:!0,forced:!ed("startsWith")},{startsWith:function(e){var t=Zu(Xu(this));Qu(e);var r=Yu(nd(arguments.length>1?arguments[1]:void 0,t.length)),n=Zu(e);return td?td(t,n,r):rd(t,r,r+n.length)===n}});var od=ac("String").startsWith,ad=ir,id=od,sd=String.prototype,ld=function(e){var t=e.startsWith;return"string"==typeof e||e===sd||ad(sd,e)&&t===sd.startsWith?id:t},cd={},pd={exports:{}};!function(e,t){!function(n){var o=t&&!t.nodeType&&t,a=e&&!e.nodeType&&e,i="object"==typeof r.g&&r.g;i.global!==i&&i.window!==i&&i.self!==i||(n=i);var s,l,c=2147483647,p=36,u=/^xn--/,d=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,f={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},m=Math.floor,y=String.fromCharCode;function g(e){throw RangeError(f[e])}function v(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}function b(e,t){var r=e.split("@"),n="";return r.length>1&&(n=r[0]+"@",e=r[1]),n+v((e=e.replace(h,".")).split("."),t).join(".")}function x(e){for(var t,r,n=[],o=0,a=e.length;o<a;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<a?56320==(64512&(r=e.charCodeAt(o++)))?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),o--):n.push(t);return n}function w(e){return v(e,(function(e){var t="";return e>65535&&(t+=y((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+y(e)})).join("")}function $(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function k(e,t,r){var n=0;for(e=r?m(e/700):e>>1,e+=m(e/t);e>455;n+=p)e=m(e/35);return m(n+36*e/(e+38))}function S(e){var t,r,n,o,a,i,s,l,u,d,h,f=[],y=e.length,v=0,b=128,x=72;for((r=e.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)e.charCodeAt(n)>=128&&g("not-basic"),f.push(e.charCodeAt(n));for(o=r>0?r+1:0;o<y;){for(a=v,i=1,s=p;o>=y&&g("invalid-input"),((l=(h=e.charCodeAt(o++))-48<10?h-22:h-65<26?h-65:h-97<26?h-97:p)>=p||l>m((c-v)/i))&&g("overflow"),v+=l*i,!(l<(u=s<=x?1:s>=x+26?26:s-x));s+=p)i>m(c/(d=p-u))&&g("overflow"),i*=d;x=k(v-a,t=f.length+1,0==a),m(v/t)>c-b&&g("overflow"),b+=m(v/t),v%=t,f.splice(v++,0,b)}return w(f)}function A(e){var t,r,n,o,a,i,s,l,u,d,h,f,v,b,w,S=[];for(f=(e=x(e)).length,t=128,r=0,a=72,i=0;i<f;++i)(h=e[i])<128&&S.push(y(h));for(n=o=S.length,o&&S.push("-");n<f;){for(s=c,i=0;i<f;++i)(h=e[i])>=t&&h<s&&(s=h);for(s-t>m((c-r)/(v=n+1))&&g("overflow"),r+=(s-t)*v,t=s,i=0;i<f;++i)if((h=e[i])<t&&++r>c&&g("overflow"),h==t){for(l=r,u=p;!(l<(d=u<=a?1:u>=a+26?26:u-a));u+=p)w=l-d,b=p-d,S.push(y($(d+w%b,0))),l=m(w/b);S.push(y($(l,0))),a=k(r,v,n==o),r=0,++n}++r,++t}return S.join("")}if(s={version:"1.3.2",ucs2:{decode:x,encode:w},decode:S,encode:A,toASCII:function(e){return b(e,(function(e){return d.test(e)?"xn--"+A(e):e}))},toUnicode:function(e){return b(e,(function(e){return u.test(e)?S(e.slice(4).toLowerCase()):e}))}},o&&a)if(e.exports==o)a.exports=s;else for(l in s)s.hasOwnProperty(l)&&(o[l]=s[l]);else n.punycode=s}(this)}(pd,pd.exports);var ud={};function dd(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var hd=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};ud.decode=ud.parse=function(e,t,r,n){t=t||"&",r=r||"=";var o={};if("string"!=typeof e||0===e.length)return o;var a=/\+/g;e=e.split(t);var i=1e3;n&&"number"==typeof n.maxKeys&&(i=n.maxKeys);var s=e.length;i>0&&s>i&&(s=i);for(var l=0;l<s;++l){var c,p,u,d,h=e[l].replace(a,"%20"),f=h.indexOf(r);f>=0?(c=h.substr(0,f),p=h.substr(f+1)):(c=h,p=""),u=decodeURIComponent(c),d=decodeURIComponent(p),dd(o,u)?Array.isArray(o[u])?o[u].push(d):o[u]=[o[u],d]:o[u]=d}return o},ud.encode=ud.stringify=function(e,t,r,n){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(n){var o=encodeURIComponent(hd(n))+r;return Array.isArray(e[n])?e[n].map((function(e){return o+encodeURIComponent(hd(e))})).join(t):o+encodeURIComponent(hd(e[n]))})).join(t):n?encodeURIComponent(hd(n))+r+encodeURIComponent(hd(e)):""};var fd=pd.exports,md=function(e){return"string"==typeof e},yd=function(e){return"object"==typeof e&&null!==e},gd=function(e){return null===e},vd=function(e){return null==e};function bd(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}cd.parse=Pd,cd.resolve=function(e,t){return Pd(e,!1,!0).resolve(t)},cd.resolveObject=function(e,t){return e?Pd(e,!1,!0).resolveObject(t):t},cd.format=function(e){return md(e)&&(e=Pd(e)),e instanceof bd?e.format():bd.prototype.format.call(e)},cd.Url=bd;var xd=/^([a-z0-9.+-]+:)/i,wd=/:[0-9]*$/,$d=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,kd=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),Sd=["'"].concat(kd),Ad=["%","/","?",";","#"].concat(Sd),Ed=["/","?","#"],Od=/^[+a-z0-9A-Z_-]{0,63}$/,Td=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Cd={javascript:!0,"javascript:":!0},_d={javascript:!0,"javascript:":!0},jd={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Id=ud;function Pd(e,t,r){if(e&&yd(e)&&e instanceof bd)return e;var n=new bd;return n.parse(e,t,r),n}bd.prototype.parse=function(e,t,r){if(!md(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),o=-1!==n&&n<e.indexOf("#")?"?":"#",a=e.split(o);a[0]=a[0].replace(/\\/g,"/");var i=e=a.join(o);if(i=i.trim(),!r&&1===e.split("#").length){var s=$d.exec(i);if(s)return this.path=i,this.href=i,this.pathname=s[1],s[2]?(this.search=s[2],this.query=t?Id.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var l=xd.exec(i);if(l){var c=(l=l[0]).toLowerCase();this.protocol=c,i=i.substr(l.length)}if(r||l||i.match(/^\/\/[^@\/]+@[^@\/]+/)){var p="//"===i.substr(0,2);!p||l&&_d[l]||(i=i.substr(2),this.slashes=!0)}if(!_d[l]&&(p||l&&!jd[l])){for(var u,d,h=-1,f=0;f<Ed.length;f++)-1!==(m=i.indexOf(Ed[f]))&&(-1===h||m<h)&&(h=m);for(-1!==(d=-1===h?i.lastIndexOf("@"):i.lastIndexOf("@",h))&&(u=i.slice(0,d),i=i.slice(d+1),this.auth=decodeURIComponent(u)),h=-1,f=0;f<Ad.length;f++){var m;-1!==(m=i.indexOf(Ad[f]))&&(-1===h||m<h)&&(h=m)}-1===h&&(h=i.length),this.host=i.slice(0,h),i=i.slice(h),this.parseHost(),this.hostname=this.hostname||"";var y="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!y)for(var g=this.hostname.split(/\./),v=(f=0,g.length);f<v;f++){var b=g[f];if(b&&!b.match(Od)){for(var x="",w=0,$=b.length;w<$;w++)b.charCodeAt(w)>127?x+="x":x+=b[w];if(!x.match(Od)){var k=g.slice(0,f),S=g.slice(f+1),A=b.match(Td);A&&(k.push(A[1]),S.unshift(A[2])),S.length&&(i="/"+S.join(".")+i),this.hostname=k.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),y||(this.hostname=fd.toASCII(this.hostname));var E=this.port?":"+this.port:"",O=this.hostname||"";this.host=O+E,this.href+=this.host,y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==i[0]&&(i="/"+i))}if(!Cd[c])for(f=0,v=Sd.length;f<v;f++){var T=Sd[f];if(-1!==i.indexOf(T)){var C=encodeURIComponent(T);C===T&&(C=escape(T)),i=i.split(T).join(C)}}var _=i.indexOf("#");-1!==_&&(this.hash=i.substr(_),i=i.slice(0,_));var j=i.indexOf("?");if(-1!==j?(this.search=i.substr(j),this.query=i.substr(j+1),t&&(this.query=Id.parse(this.query)),i=i.slice(0,j)):t&&(this.search="",this.query={}),i&&(this.pathname=i),jd[c]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){E=this.pathname||"";var I=this.search||"";this.path=E+I}return this.href=this.format(),this},bd.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,a="";this.host?o=e+this.host:this.hostname&&(o=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&yd(this.query)&&Object.keys(this.query).length&&(a=Id.stringify(this.query));var i=this.search||a&&"?"+a||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||jd[t])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),i&&"?"!==i.charAt(0)&&(i="?"+i),t+o+(r=r.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(i=i.replace("#","%23"))+n},bd.prototype.resolve=function(e){return this.resolveObject(Pd(e,!1,!0)).format()},bd.prototype.resolveObject=function(e){if(md(e)){var t=new bd;t.parse(e,!1,!0),e=t}for(var r=new bd,n=Object.keys(this),o=0;o<n.length;o++){var a=n[o];r[a]=this[a]}if(r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var i=Object.keys(e),s=0;s<i.length;s++){var l=i[s];"protocol"!==l&&(r[l]=e[l])}return jd[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!jd[e.protocol]){for(var c=Object.keys(e),p=0;p<c.length;p++){var u=c[p];r[u]=e[u]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||_d[e.protocol])r.pathname=e.pathname;else{for(var d=(e.pathname||"").split("/");d.length&&!(e.host=d.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),r.pathname=d.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var h=r.pathname||"",f=r.search||"";r.path=h+f}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var m=r.pathname&&"/"===r.pathname.charAt(0),y=e.host||e.pathname&&"/"===e.pathname.charAt(0),g=y||m||r.host&&e.pathname,v=g,b=r.pathname&&r.pathname.split("/")||[],x=(d=e.pathname&&e.pathname.split("/")||[],r.protocol&&!jd[r.protocol]);if(x&&(r.hostname="",r.port=null,r.host&&(""===b[0]?b[0]=r.host:b.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===d[0]?d[0]=e.host:d.unshift(e.host)),e.host=null),g=g&&(""===d[0]||""===b[0])),y)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,b=d;else if(d.length)b||(b=[]),b.pop(),b=b.concat(d),r.search=e.search,r.query=e.query;else if(!vd(e.search))return x&&(r.hostname=r.host=b.shift(),(A=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=A.shift(),r.host=r.hostname=A.shift())),r.search=e.search,r.query=e.query,gd(r.pathname)&&gd(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r;if(!b.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var w=b.slice(-1)[0],$=(r.host||e.host||b.length>1)&&("."===w||".."===w)||""===w,k=0,S=b.length;S>=0;S--)"."===(w=b[S])?b.splice(S,1):".."===w?(b.splice(S,1),k++):k&&(b.splice(S,1),k--);if(!g&&!v)for(;k--;k)b.unshift("..");!g||""===b[0]||b[0]&&"/"===b[0].charAt(0)||b.unshift(""),$&&"/"!==b.join("/").substr(-1)&&b.push("");var A,E=""===b[0]||b[0]&&"/"===b[0].charAt(0);return x&&(r.hostname=r.host=E?"":b.length?b.shift():"",(A=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=A.shift(),r.host=r.hostname=A.shift())),(g=g||r.host&&b.length)&&!E&&b.unshift(""),b.length?r.pathname=b.join("/"):(r.pathname=null,r.path=null),gd(r.pathname)&&gd(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},bd.prototype.parseHost=function(){var e=this.host,t=wd.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var Rd=Eo,Ld=pt,Dd=ut,Bd=ia,Fd=Xt,Nd=Wr,zd=Fo,Ud=Qa,qd=As,Md=rc,Hd=fr,Wd=un("isConcatSpreadable"),Vd=9007199254740991,Gd="Maximum allowed index exceeded",Kd=Ld.TypeError,Jd=Hd>=51||!Dd((function(){var e=[];return e[Wd]=!1,e.concat()[0]!==e})),Yd=Md("concat"),Zd=function(e){if(!Fd(e))return!1;var t=e[Wd];return void 0!==t?!!t:Bd(e)};Rd({target:"Array",proto:!0,forced:!Jd||!Yd},{concat:function(e){var t,r,n,o,a,i=Nd(this),s=qd(i,0),l=0;for(t=-1,n=arguments.length;t<n;t++)if(Zd(a=-1===t?i:arguments[t])){if(l+(o=zd(a))>Vd)throw Kd(Gd);for(r=0;r<o;r++,l++)r in a&&Ud(s,l,a[r])}else{if(l>=Vd)throw Kd(Gd);Ud(s,l++,a)}return s.length=l,s}}),xi("asyncIterator"),xi("hasInstance"),xi("isConcatSpreadable"),xi("iterator"),xi("match"),xi("matchAll"),xi("replace"),xi("search"),xi("species"),xi("split"),xi("toPrimitive"),xi("toStringTag"),xi("unscopables"),Ci(pt.JSON,"JSON",!0);var Qd=er.Symbol;xi("asyncDispose"),xi("dispose"),xi("matcher"),xi("metadata"),xi("observable"),xi("patternMatch"),xi("replaceAll");var Xd=Qd,eh=kt,th=Co,rh=ba,nh=Kt,oh=eh("".charAt),ah=eh("".charCodeAt),ih=eh("".slice),sh=function(e){return function(t,r){var n,o,a=rh(nh(t)),i=th(r),s=a.length;return i<0||i>=s?e?"":void 0:(n=ah(a,i))<55296||n>56319||i+1===s||(o=ah(a,i+1))<56320||o>57343?e?oh(a,i):n:e?ih(a,i,i+2):o-56320+(n-55296<<10)+65536}},lh=(sh(!1),sh(!0)),ch=ba,ph=os,uh=Ap,dh="String Iterator",hh=ph.set,fh=ph.getterFor(dh);uh(String,"String",(function(e){hh(this,{type:dh,string:ch(e),index:0})}),(function(){var e,t=fh(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=lh(r,n),t.index+=e.length,{value:e,done:!1})}));var mh=ya,yh=Ir,gh=Ac,vh=un("iterator"),bh=function(e){if(null!=e)return yh(e,vh)||yh(e,"@@iterator")||gh[mh(e)]},xh=bh;Eo({target:"Array",stat:!0},{isArray:ia});var wh=er.Array.isArray,$h=Eo,kh=pt,Sh=ia,Ah=vs,Eh=Xt,Oh=Po,Th=Fo,Ch=Zt,_h=Qa,jh=un,Ih=ui,Ph=rc("slice"),Rh=jh("species"),Lh=kh.Array,Dh=Math.max;$h({target:"Array",proto:!0,forced:!Ph},{slice:function(e,t){var r,n,o,a=Ch(this),i=Th(a),s=Oh(e,i),l=Oh(void 0===t?i:t,i);if(Sh(a)&&(r=a.constructor,(Ah(r)&&(r===Lh||Sh(r.prototype))||Eh(r)&&null===(r=r[Rh]))&&(r=void 0),r===Lh||void 0===r))return Ih(a,s,l);for(n=new(void 0===r?Lh:r)(Dh(l-s,0)),o=0;s<l;s++,o++)s in a&&_h(n,o,a[s]);return n.length=o,n}});var Bh=ac("Array").slice,Fh=ir,Nh=Bh,zh=Array.prototype,Uh=function(e){var t=e.slice;return e===zh||Fh(zh,e)&&t===zh.slice?Nh:t},qh=Uh,Mh=Ct,Hh=ro,Wh=Ir,Vh=function(e,t,r){var n,o;Hh(e);try{if(!(n=Wh(e,"return"))){if("throw"===t)throw r;return r}n=Mh(n,e)}catch(e){o=!0,n=e}if("throw"===t)throw r;if(o)throw n;return Hh(n),r},Gh=ro,Kh=Vh,Jh=Ac,Yh=un("iterator"),Zh=Array.prototype,Qh=function(e){return void 0!==e&&(Jh.Array===e||Zh[Yh]===e)},Xh=Ct,ef=_r,tf=ro,rf=Er,nf=bh,of=pt.TypeError,af=function(e,t){var r=arguments.length<2?nf(e):t;if(ef(r))return tf(Xh(r,e));throw of(rf(e)+" is not iterable")},sf=Jn,lf=Ct,cf=Wr,pf=function(e,t,r,n){try{return n?t(Gh(r)[0],r[1]):t(r)}catch(t){Kh(e,"throw",t)}},uf=Qh,df=vs,hf=Fo,ff=Qa,mf=af,yf=bh,gf=pt.Array,vf=un("iterator"),bf=!1;try{var xf=0,wf={next:function(){return{done:!!xf++}},return:function(){bf=!0}};wf[vf]=function(){return this},Array.from(wf,(function(){throw 2}))}catch(e){}var $f=function(e,t){if(!t&&!bf)return!1;var r=!1;try{var n={};n[vf]=function(){return{next:function(){return{done:r=!0}}}},e(n)}catch(e){}return r};Eo({target:"Array",stat:!0,forced:!$f((function(e){Array.from(e)}))},{from:function(e){var t=cf(e),r=df(this),n=arguments.length,o=n>1?arguments[1]:void 0,a=void 0!==o;a&&(o=sf(o,n>2?arguments[2]:void 0));var i,s,l,c,p,u,d=yf(t),h=0;if(!d||this==gf&&uf(d))for(i=hf(t),s=r?new this(i):gf(i);i>h;h++)u=a?o(t[h],h):t[h],ff(s,h,u);else for(p=(c=mf(t,d)).next,s=r?new this:[];!(l=lf(p,c)).done;h++)u=a?pf(c,o,[l.value,h],!0):l.value,ff(s,h,u);return s.length=h,s}});var kf=er.Array.from,Sf=kf;function Af(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ef(e,t){var r;if(e){if("string"==typeof e)return Af(e,t);var n=qh(r=Object.prototype.toString.call(e)).call(r,8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Sf(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Af(e,t):void 0}}function Of(e,t){var r=void 0!==Xd&&xh(e)||e["@@iterator"];if(!r){if(wh(e)||(r=Ef(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}var Tf=fi.f("iterator");function Cf(e){return(Cf="function"==typeof Xd&&"symbol"==typeof Tf?function(e){return typeof e}:function(e){return e&&"function"==typeof Xd&&e.constructor===Xd&&e!==Xd.prototype?"symbol":typeof e})(e)}function _f(e,t){return function(e){if(wh(e))return e}(e)||function(e,t){var r=null==e?null:void 0!==Xd&&xh(e)||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,t)||Ef(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var jf=Kr,If=ou,Pf=At,Rf=Yn,Lf=kt("".replace),Df=String(Error("zxcasd").stack),Bf=/\n\s*at [^:]*:[^\n]*/,Ff=Bf.test(Df),Nf=Xt,zf=fo,Uf=Jn,qf=Ct,Mf=ro,Hf=Er,Wf=Qh,Vf=Fo,Gf=ir,Kf=af,Jf=bh,Yf=Vh,Zf=pt.TypeError,Qf=function(e,t){this.stopped=e,this.result=t},Xf=Qf.prototype,em=function(e,t,r){var n,o,a,i,s,l,c,p=r&&r.that,u=!(!r||!r.AS_ENTRIES),d=!(!r||!r.IS_ITERATOR),h=!(!r||!r.INTERRUPTED),f=Uf(t,p),m=function(e){return n&&Yf(n,"normal",e),new Qf(!0,e)},y=function(e){return u?(Mf(e),h?f(e[0],e[1],m):f(e[0],e[1])):h?f(e,m):f(e)};if(d)n=e;else{if(!(o=Jf(e)))throw Zf(Hf(e)+" is not iterable");if(Wf(o)){for(a=0,i=Vf(e);i>a;a++)if((s=y(e[a]))&&Gf(Xf,s))return s;return new Qf(!1)}n=Kf(e,o)}for(l=n.next;!(c=qf(l,n)).done;){try{s=y(c.value)}catch(e){Yf(n,"throw",e)}if("object"==typeof s&&s&&Gf(Xf,s))return s}return new Qf(!1)},tm=ba,rm=Dt,nm=!ut((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",rm(1,7)),7!==e.stack)})),om=Eo,am=pt,im=ir,sm=Uc,lm=pp,cm=Ha,pm=fo,um=Dt,dm=em,hm=nm,fm=un("toStringTag"),mm=am.Error,ym=[].push,gm=function(e,t){var r,n=arguments.length>2?arguments[2]:void 0,o=im(vm,this);lm?r=lm(new mm,o?sm(this):vm):(r=o?this:cm(vm),pm(r,fm,"Error")),void 0!==t&&pm(r,"message",function(e,t){return void 0===e?arguments.length<2?"":t:tm(e)}(t)),hm&&pm(r,"stack",function(e,t){if(Ff&&"string"==typeof e)for(;t--;)e=Lf(e,Bf,"");return e}(r.stack,1)),function(e,t){Nf(t)&&"cause"in t&&zf(e,"cause",t.cause)}(r,n);var a=[];return dm(e,ym,{that:a}),pm(r,"errors",a),r};lm?lm(gm,mm):function(e,t,r){for(var n=If(t),o=Rf.f,a=Pf.f,i=0;i<n.length;i++){var s=n[i];jf(e,s)||r&&jf(r,s)||o(e,s,a(t,s))}}(gm,mm,{name:!0});var vm=gm.prototype=cm(mm.prototype,{constructor:um(1,gm),message:um(1,""),name:um(1,"AggregateError")});om({global:!0},{AggregateError:gm});var bm,xm,wm,$m,km=pt.Promise,Sm=hi,Am=function(e,t,r){for(var n in t)r&&r.unsafe&&e[n]?e[n]=t[n]:Sm(e,n,t[n],r);return e},Em=ar,Om=Yn,Tm=Et,Cm=un("species"),_m=ir,jm=pt.TypeError,Im=function(e,t){if(_m(t,e))return e;throw jm("Incorrect invocation")},Pm=vs,Rm=Er,Lm=pt.TypeError,Dm=ro,Bm=un("species"),Fm=function(e,t){var r,n=Dm(e).constructor;return void 0===n||null==(r=Dm(n)[Bm])?t:function(e){if(Pm(e))return e;throw Lm(Rm(e)+" is not a constructor")}(r)},Nm=pt.TypeError,zm=function(e,t){if(e<t)throw Nm("Not enough arguments");return e},Um=/(?:ipad|iphone|ipod).*applewebkit/i.test(sr),qm="process"==zt(pt.process),Mm=pt,Hm=gt,Wm=Jn,Vm=St,Gm=Kr,Km=ut,Jm=Ta,Ym=ui,Zm=An,Qm=zm,Xm=Um,ey=qm,ty=Mm.setImmediate,ry=Mm.clearImmediate,ny=Mm.process,oy=Mm.Dispatch,ay=Mm.Function,iy=Mm.MessageChannel,sy=Mm.String,ly=0,cy={};try{bm=Mm.location}catch(e){}var py=function(e){if(Gm(cy,e)){var t=cy[e];delete cy[e],t()}},uy=function(e){return function(){py(e)}},dy=function(e){py(e.data)},hy=function(e){Mm.postMessage(sy(e),bm.protocol+"//"+bm.host)};ty&&ry||(ty=function(e){Qm(arguments.length,1);var t=Vm(e)?e:ay(e),r=Ym(arguments,1);return cy[++ly]=function(){Hm(t,void 0,r)},xm(ly),ly},ry=function(e){delete cy[e]},ey?xm=function(e){ny.nextTick(uy(e))}:oy&&oy.now?xm=function(e){oy.now(uy(e))}:iy&&!Xm?($m=(wm=new iy).port2,wm.port1.onmessage=dy,xm=Wm($m.postMessage,$m)):Mm.addEventListener&&Vm(Mm.postMessage)&&!Mm.importScripts&&bm&&"file:"!==bm.protocol&&!Km(hy)?(xm=hy,Mm.addEventListener("message",dy,!1)):xm="onreadystatechange"in Zm("script")?function(e){Jm.appendChild(Zm("script")).onreadystatechange=function(){Jm.removeChild(this),py(e)}}:function(e){setTimeout(uy(e),0)});var fy,my,yy,gy,vy,by,xy,wy,$y={set:ty,clear:ry},ky=pt,Sy=/ipad|iphone|ipod/i.test(sr)&&void 0!==ky.Pebble,Ay=/web0s(?!.*chrome)/i.test(sr),Ey=pt,Oy=Jn,Ty=At.f,Cy=$y.set,_y=Um,jy=Sy,Iy=Ay,Py=qm,Ry=Ey.MutationObserver||Ey.WebKitMutationObserver,Ly=Ey.document,Dy=Ey.process,By=Ey.Promise,Fy=Ty(Ey,"queueMicrotask"),Ny=Fy&&Fy.value;Ny||(fy=function(){var e,t;for(Py&&(e=Dy.domain)&&e.exit();my;){t=my.fn,my=my.next;try{t()}catch(e){throw my?gy():yy=void 0,e}}yy=void 0,e&&e.enter()},_y||Py||Iy||!Ry||!Ly?!jy&&By&&By.resolve?((xy=By.resolve(void 0)).constructor=By,wy=Oy(xy.then,xy),gy=function(){wy(fy)}):Py?gy=function(){Dy.nextTick(fy)}:(Cy=Oy(Cy,Ey),gy=function(){Cy(fy)}):(vy=!0,by=Ly.createTextNode(""),new Ry(fy).observe(by,{characterData:!0}),gy=function(){by.data=vy=!vy}));var zy=Ny||function(e){var t={fn:e,next:void 0};yy&&(yy.next=t),my||(my=t,gy()),yy=t},Uy={},qy=_r,My=function(e){var t,r;this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n})),this.resolve=qy(t),this.reject=qy(r)};Uy.f=function(e){return new My(e)};var Hy=ro,Wy=Xt,Vy=Uy,Gy=function(e,t){if(Hy(e),Wy(t)&&t.constructor===e)return t;var r=Vy.f(e);return(0,r.resolve)(t),r.promise},Ky=pt,Jy=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},Yy=function(){this.head=null,this.tail=null};Yy.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}};var Zy,Qy,Xy,eg="object"==typeof window,tg=Eo,rg=pt,ng=ar,og=Ct,ag=km,ig=Am,sg=Ci,lg=_r,cg=St,pg=Xt,ug=Im,dg=Di,hg=em,fg=$f,mg=Fm,yg=$y.set,gg=zy,vg=Gy,bg=Uy,xg=Jy,wg=Yy,$g=os,kg=Wn,Sg=eg,Ag=qm,Eg=fr,Og=un("species"),Tg="Promise",Cg=$g.getterFor(Tg),_g=$g.set,jg=$g.getterFor(Tg),Ig=ag&&ag.prototype,Pg=ag,Rg=Ig,Lg=rg.TypeError,Dg=rg.document,Bg=rg.process,Fg=bg.f,Ng=Fg,zg=!!(Dg&&Dg.createEvent&&rg.dispatchEvent),Ug=cg(rg.PromiseRejectionEvent),qg="unhandledrejection",Mg=kg(Tg,(function(){var e=dg(Pg),t=e!==String(Pg);if(!t&&66===Eg)return!0;if(!Rg.finally)return!0;if(Eg>=51&&/native code/.test(e))return!1;var r=new Pg((function(e){e(1)})),n=function(e){e((function(){}),(function(){}))};return(r.constructor={})[Og]=n,!(r.then((function(){}))instanceof n)||!t&&Sg&&!Ug})),Hg=Mg||!fg((function(e){Pg.all(e).catch((function(){}))})),Wg=function(e){var t;return!(!pg(e)||!cg(t=e.then))&&t},Vg=function(e,t){var r,n,o,a=t.value,i=1==t.state,s=i?e.ok:e.fail,l=e.resolve,c=e.reject,p=e.domain;try{s?(i||(2===t.rejection&&Zg(t),t.rejection=1),!0===s?r=a:(p&&p.enter(),r=s(a),p&&(p.exit(),o=!0)),r===e.promise?c(Lg("Promise-chain cycle")):(n=Wg(r))?og(n,r,l,c):l(r)):c(a)}catch(e){p&&!o&&p.exit(),c(e)}},Gg=function(e,t){e.notified||(e.notified=!0,gg((function(){for(var r,n=e.reactions;r=n.get();)Vg(r,e);e.notified=!1,t&&!e.rejection&&Jg(e)})))},Kg=function(e,t,r){var n,o;zg?((n=Dg.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),rg.dispatchEvent(n)):n={promise:t,reason:r},!Ug&&(o=rg["on"+e])?o(n):e===qg&&function(e,t){var r=Ky.console;r&&r.error&&(1==arguments.length?r.error(e):r.error(e,t))}("Unhandled promise rejection",r)},Jg=function(e){og(yg,rg,(function(){var t,r=e.facade,n=e.value;if(Yg(e)&&(t=xg((function(){Ag?Bg.emit("unhandledRejection",n,r):Kg(qg,r,n)})),e.rejection=Ag||Yg(e)?2:1,t.error))throw t.value}))},Yg=function(e){return 1!==e.rejection&&!e.parent},Zg=function(e){og(yg,rg,(function(){var t=e.facade;Ag?Bg.emit("rejectionHandled",t):Kg("rejectionhandled",t,e.value)}))},Qg=function(e,t,r){return function(n){e(t,n,r)}},Xg=function(e,t,r){e.done||(e.done=!0,r&&(e=r),e.value=t,e.state=2,Gg(e,!0))},ev=function(e,t,r){if(!e.done){e.done=!0,r&&(e=r);try{if(e.facade===t)throw Lg("Promise can't be resolved itself");var n=Wg(t);n?gg((function(){var r={done:!1};try{og(n,t,Qg(ev,r,e),Qg(Xg,r,e))}catch(t){Xg(r,t,e)}})):(e.value=t,e.state=1,Gg(e,!1))}catch(t){Xg({done:!1},t,e)}}};Mg&&(Rg=(Pg=function(e){ug(this,Rg),lg(e),og(Zy,this);var t=Cg(this);try{e(Qg(ev,t),Qg(Xg,t))}catch(e){Xg(t,e)}}).prototype,(Zy=function(e){_g(this,{type:Tg,done:!1,notified:!1,parent:!1,reactions:new wg,rejection:!1,state:0,value:void 0})}).prototype=ig(Rg,{then:function(e,t){var r=jg(this),n=Fg(mg(this,Pg));return r.parent=!0,n.ok=!cg(e)||e,n.fail=cg(t)&&t,n.domain=Ag?Bg.domain:void 0,0==r.state?r.reactions.add(n):gg((function(){Vg(n,r)})),n.promise},catch:function(e){return this.then(void 0,e)}}),Qy=function(){var e=new Zy,t=Cg(e);this.promise=e,this.resolve=Qg(ev,t),this.reject=Qg(Xg,t)},bg.f=Fg=function(e){return e===Pg||e===Xy?new Qy(e):Ng(e)}),tg({global:!0,wrap:!0,forced:Mg},{Promise:Pg}),sg(Pg,Tg,!1,!0),function(e){var t=Em(e),r=Om.f;Tm&&t&&!t[Cm]&&r(t,Cm,{configurable:!0,get:function(){return this}})}(Tg),Xy=ng(Tg),tg({target:Tg,stat:!0,forced:Mg},{reject:function(e){var t=Fg(this);return og(t.reject,void 0,e),t.promise}}),tg({target:Tg,stat:!0,forced:!0},{resolve:function(e){return vg(this===Xy?Pg:this,e)}}),tg({target:Tg,stat:!0,forced:Hg},{all:function(e){var t=this,r=Fg(t),n=r.resolve,o=r.reject,a=xg((function(){var r=lg(t.resolve),a=[],i=0,s=1;hg(e,(function(e){var l=i++,c=!1;s++,og(r,t,e).then((function(e){c||(c=!0,a[l]=e,--s||n(a))}),o)})),--s||n(a)}));return a.error&&o(a.value),r.promise},race:function(e){var t=this,r=Fg(t),n=r.reject,o=xg((function(){var o=lg(t.resolve);hg(e,(function(e){og(o,t,e).then(r.resolve,n)}))}));return o.error&&n(o.value),r.promise}});var tv=Ct,rv=_r,nv=Uy,ov=Jy,av=em;Eo({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=nv.f(t),n=r.resolve,o=r.reject,a=ov((function(){var r=rv(t.resolve),o=[],a=0,i=1;av(e,(function(e){var s=a++,l=!1;i++,tv(r,t,e).then((function(e){l||(l=!0,o[s]={status:"fulfilled",value:e},--i||n(o))}),(function(e){l||(l=!0,o[s]={status:"rejected",reason:e},--i||n(o))}))})),--i||n(o)}));return a.error&&o(a.value),r.promise}});var iv=_r,sv=ar,lv=Ct,cv=Uy,pv=Jy,uv=em,dv="No one promise resolved";Eo({target:"Promise",stat:!0},{any:function(e){var t=this,r=sv("AggregateError"),n=cv.f(t),o=n.resolve,a=n.reject,i=pv((function(){var n=iv(t.resolve),i=[],s=0,l=1,c=!1;uv(e,(function(e){var p=s++,u=!1;l++,lv(n,t,e).then((function(e){u||c||(c=!0,o(e))}),(function(e){u||c||(u=!0,i[p]=e,--l||a(new r(i,dv)))}))})),--l||a(new r(i,dv))}));return i.error&&a(i.value),n.promise}});var hv=km,fv=ar,mv=St,yv=Fm,gv=Gy;Eo({target:"Promise",proto:!0,real:!0,forced:!!hv&&ut((function(){hv.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=yv(this,fv("Promise")),r=mv(e);return this.then(r?function(r){return gv(t,e()).then((function(){return r}))}:e,r?function(r){return gv(t,e()).then((function(){throw r}))}:e)}});var vv=er.Promise,bv=vv,xv=Uy,wv=Jy;Eo({target:"Promise",stat:!0,forced:!0},{try:function(e){var t=xv.f(this),r=wv(e);return(r.error?t.reject:t.resolve)(r.value),t.promise}});var $v=bv;function kv(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(e){return void r(e)}s.done?t(l):$v.resolve(l).then(n,o)}function Sv(e){return function(){var t=this,r=arguments;return new $v((function(n,o){var a=e.apply(t,r);function i(e){kv(a,n,o,i,s,"next",e)}function s(e){kv(a,n,o,i,s,"throw",e)}i(void 0)}))}}var Av={exports:{}};!function(e){var t=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(e,t,r){var n=u;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=A(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=p(e,t,r);if("normal"===l.type){if(n=r.done?f:d,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=f,r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u="suspendedStart",d="suspendedYield",h="executing",f="completed",m={};function y(){}function g(){}function v(){}var b={};l(b,a,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(C([])));w&&w!==r&&n.call(w,a)&&(b=w);var $=v.prototype=y.prototype=Object.create(b);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,a,i,s){var l=p(e[o],e,a);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(u).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,s)}))}s(l.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function A(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,A(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=p(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function C(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:_}}function _(){return{value:t,done:!0}}return g.prototype=v,l($,"constructor",v),l(v,"constructor",g),g.displayName=l(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,s,"GeneratorFunction")),e.prototype=Object.create($),e},e.awrap=function(e){return{__await:e}},k(S.prototype),l(S.prototype,i,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k($),l($,s,"Generator"),l($,a,(function(){return this})),l($,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=C,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}(Av);var Ev=Av.exports,Ov=Mo.includes;Eo({target:"Array",proto:!0},{includes:function(e){return Ov(this,e,arguments.length>1?arguments[1]:void 0)}});var Tv=ac("Array").includes,Cv=Eo,_v=Wu,jv=Kt,Iv=ba,Pv=Gu,Rv=kt("".indexOf);Cv({target:"String",proto:!0,forced:!Pv("includes")},{includes:function(e){return!!~Rv(Iv(jv(this)),Iv(_v(e)),arguments.length>1?arguments[1]:void 0)}});var Lv=ac("String").includes,Dv=ir,Bv=Tv,Fv=Lv,Nv=Array.prototype,zv=String.prototype,Uv=function(e){var t=e.includes;return e===Nv||Dv(Nv,e)&&t===Nv.includes?Bv:"string"==typeof e||e===zv||Dv(zv,e)&&t===zv.includes?Fv:t},qv=ac("Array").entries,Mv=ya,Hv=Kr,Wv=ir,Vv=qv,Gv=Array.prototype,Kv={DOMTokenList:!0,NodeList:!0},Jv=function(e){var t=e.entries;return e===Gv||Wv(Gv,e)&&t===Gv.entries||Hv(Kv,Mv(e))?Vv:t},Yv=kf,Zv=Eo,Qv=ar,Xv=gt,eb=kt,tb=ut,rb=pt.Array,nb=Qv("JSON","stringify"),ob=eb(/./.exec),ab=eb("".charAt),ib=eb("".charCodeAt),sb=eb("".replace),lb=eb(1..toString),cb=/[\uD800-\uDFFF]/g,pb=/^[\uD800-\uDBFF]$/,ub=/^[\uDC00-\uDFFF]$/,db=function(e,t,r){var n=ab(r,t-1),o=ab(r,t+1);return ob(pb,e)&&!ob(ub,o)||ob(ub,e)&&!ob(pb,n)?"\\u"+lb(ib(e,0),16):e},hb=tb((function(){return'"\\udf06\\ud834"'!==nb("\udf06\ud834")||'"\\udead"'!==nb("\udead")}));nb&&Zv({target:"JSON",stat:!0,forced:hb},{stringify:function(e,t,r){for(var n=0,o=arguments.length,a=rb(o);n<o;n++)a[n]=arguments[n];var i=Xv(nb,null,a);return"string"==typeof i?sb(i,cb,db):i}});var fb=er,mb=gt;fb.JSON||(fb.JSON={stringify:JSON.stringify});var yb=function(e,t,r){return mb(fb.JSON.stringify,null,arguments)},gb=Ps.map;Eo({target:"Array",proto:!0,forced:!rc("map")},{map:function(e){return gb(this,e,arguments.length>1?arguments[1]:void 0)}});var vb=ac("Array").map,bb=ir,xb=vb,wb=Array.prototype,$b=function(e){var t=e.map;return e===wb||bb(wb,e)&&t===wb.map?xb:t},kb=na,Sb=ac("Array").concat,Ab=ir,Eb=Sb,Ob=Array.prototype,Tb=function(e){var t=e.concat;return e===Ob||Ab(Ob,e)&&t===Ob.concat?Eb:t},Cb=Et,_b=kt,jb=ea,Ib=Zt,Pb=_b(_t.f),Rb=_b([].push),Lb=function(e){return function(t){for(var r,n=Ib(t),o=jb(n),a=o.length,i=0,s=[];a>i;)r=o[i++],Cb&&!Pb(n,r)||Rb(s,e?[r,n[r]]:n[r]);return s}},Db=[Lb(!0),Lb(!1)][0];Eo({target:"Object",stat:!0},{entries:function(e){return Db(e)}});var Bb=er.Object.entries,Fb=pc;!function(e){!function(t){var r="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,o="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in e,i="ArrayBuffer"in e;if(i)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(e){return e&&s.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function p(e){return"string"!=typeof e&&(e=String(e)),e}function u(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function h(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function f(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=f(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():i&&o&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i&&(ArrayBuffer.prototype.isPrototypeOf(e)||l(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=h(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var e=h(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=f(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(x)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(e,t){e=c(e),t=p(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},d.prototype.delete=function(e){delete this.map[c(e)]},d.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},d.prototype.set=function(e,t){this.map[c(e)]=p(t)},d.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},d.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),u(e)},d.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),u(e)},d.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),u(e)},n&&(d.prototype[Symbol.iterator]=d.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(e,t){var r=(t=t||{}).body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new d(t.headers)),this.method=function(e){var t=e.toUpperCase();return v.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function x(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function w(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},g.call(b.prototype),g.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var $=[301,302,303,307,308];w.redirect=function(e,t){if(-1===$.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function k(e,r){return new Promise((function(n,a){var i=new b(e,r);if(i.signal&&i.signal.aborted)return a(new t.DOMException("Aborted","AbortError"));var s=new XMLHttpRequest;function l(){s.abort()}s.onload=function(){var e,t,r={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new d,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;n(new w(o,r))},s.onerror=function(){a(new TypeError("Network request failed"))},s.ontimeout=function(){a(new TypeError("Network request failed"))},s.onabort=function(){a(new t.DOMException("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&o&&(s.responseType="blob"),i.headers.forEach((function(e,t){s.setRequestHeader(t,e)})),i.signal&&(i.signal.addEventListener("abort",l),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",l)}),s.send(void 0===i._bodyInit?null:i._bodyInit)}))}k.polyfill=!0,e.fetch||(e.fetch=k,e.Headers=d,e.Request=b,e.Response=w),t.Headers=d,t.Request=b,t.Response=w,t.fetch=k,Object.defineProperty(t,"__esModule",{value:!0})}({})}("undefined"!=typeof self?self:globalThis);var Nb,zb="undefined"!=typeof Symbol&&Symbol,Ub=Array.prototype.slice,qb=Object.prototype.toString,Mb=Function.prototype.bind||function(e){var t=this;if("function"!=typeof t||"[object Function]"!==qb.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var r,n=Ub.call(arguments,1),o=Math.max(0,t.length-n.length),a=[],i=0;i<o;i++)a.push("$"+i);if(r=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof r){var o=t.apply(this,n.concat(Ub.call(arguments)));return Object(o)===o?o:this}return t.apply(e,n.concat(Ub.call(arguments)))})),t.prototype){var s=function(){};s.prototype=t.prototype,r.prototype=new s,s.prototype=null}return r},Hb=Mb.call(Function.call,Object.prototype.hasOwnProperty),Wb=SyntaxError,Vb=Function,Gb=TypeError,Kb=function(e){try{return Vb('"use strict"; return ('+e+").constructor;")()}catch(e){}},Jb=Object.getOwnPropertyDescriptor;if(Jb)try{Jb({},"")}catch(o){Jb=null}var Yb=function(){throw new Gb},Zb=Jb?function(){try{return Yb}catch(e){try{return Jb(arguments,"callee").get}catch(e){return Yb}}}():Yb,Qb="function"==typeof zb&&"function"==typeof Symbol&&"symbol"==typeof zb("foo")&&"symbol"==typeof Symbol("bar")&&function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}(),Xb=Object.getPrototypeOf||function(e){return e.__proto__},ex={},tx="undefined"==typeof Uint8Array?Nb:Xb(Uint8Array),rx={"%AggregateError%":"undefined"==typeof AggregateError?Nb:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?Nb:ArrayBuffer,"%ArrayIteratorPrototype%":Qb?Xb([][Symbol.iterator]()):Nb,"%AsyncFromSyncIteratorPrototype%":Nb,"%AsyncFunction%":ex,"%AsyncGenerator%":ex,"%AsyncGeneratorFunction%":ex,"%AsyncIteratorPrototype%":ex,"%Atomics%":"undefined"==typeof Atomics?Nb:Atomics,"%BigInt%":"undefined"==typeof BigInt?Nb:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?Nb:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?Nb:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?Nb:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?Nb:FinalizationRegistry,"%Function%":Vb,"%GeneratorFunction%":ex,"%Int8Array%":"undefined"==typeof Int8Array?Nb:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?Nb:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?Nb:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":Qb?Xb(Xb([][Symbol.iterator]())):Nb,"%JSON%":"object"==typeof JSON?JSON:Nb,"%Map%":"undefined"==typeof Map?Nb:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&Qb?Xb((new Map)[Symbol.iterator]()):Nb,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?Nb:Promise,"%Proxy%":"undefined"==typeof Proxy?Nb:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?Nb:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?Nb:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&Qb?Xb((new Set)[Symbol.iterator]()):Nb,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?Nb:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":Qb?Xb(""[Symbol.iterator]()):Nb,"%Symbol%":Qb?Symbol:Nb,"%SyntaxError%":Wb,"%ThrowTypeError%":Zb,"%TypedArray%":tx,"%TypeError%":Gb,"%Uint8Array%":"undefined"==typeof Uint8Array?Nb:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?Nb:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?Nb:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?Nb:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?Nb:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?Nb:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?Nb:WeakSet},nx=function e(t){var r;if("%AsyncFunction%"===t)r=Kb("async function () {}");else if("%GeneratorFunction%"===t)r=Kb("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=Kb("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&(r=Xb(o.prototype))}return rx[t]=r,r},ox={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},ax=Mb,ix=Hb,sx=ax.call(Function.call,Array.prototype.concat),lx=ax.call(Function.apply,Array.prototype.splice),cx=ax.call(Function.call,String.prototype.replace),px=ax.call(Function.call,String.prototype.slice),ux=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,dx=/\\(\\)?/g,hx=function(e,t){var r,n=e;if(ix(ox,n)&&(n="%"+(r=ox[n])[0]+"%"),ix(rx,n)){var o=rx[n];if(o===ex&&(o=nx(n)),void 0===o&&!t)throw new Gb("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:o}}throw new Wb("intrinsic "+e+" does not exist!")},fx=function(e,t){if("string"!=typeof e||0===e.length)throw new Gb("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new Gb('"allowMissing" argument must be a boolean');var r=function(e){var t=px(e,0,1),r=px(e,-1);if("%"===t&&"%"!==r)throw new Wb("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new Wb("invalid intrinsic syntax, expected opening `%`");var n=[];return cx(e,ux,(function(e,t,r,o){n[n.length]=r?cx(o,dx,"$1"):t||e})),n}(e),n=r.length>0?r[0]:"",o=hx("%"+n+"%",t),a=o.name,i=o.value,s=!1,l=o.alias;l&&(n=l[0],lx(r,sx([0,1],l)));for(var c=1,p=!0;c<r.length;c+=1){var u=r[c],d=px(u,0,1),h=px(u,-1);if(('"'===d||"'"===d||"`"===d||'"'===h||"'"===h||"`"===h)&&d!==h)throw new Wb("property names with quotes must have matching quotes");if("constructor"!==u&&p||(s=!0),ix(rx,a="%"+(n+="."+u)+"%"))i=rx[a];else if(null!=i){if(!(u in i)){if(!t)throw new Gb("base intrinsic for "+e+" exists, but the property is not available.");return}if(Jb&&c+1>=r.length){var f=Jb(i,u);i=(p=!!f)&&"get"in f&&!("originalValue"in f.get)?f.get:i[u]}else p=ix(i,u),i=i[u];p&&!s&&(rx[a]=i)}}return i},mx={exports:{}};!function(e){var t=Mb,r=fx,n=r("%Function.prototype.apply%"),o=r("%Function.prototype.call%"),a=r("%Reflect.apply%",!0)||t.call(o,n),i=r("%Object.getOwnPropertyDescriptor%",!0),s=r("%Object.defineProperty%",!0),l=r("%Math.max%");if(s)try{s({},"a",{value:1})}catch(e){s=null}e.exports=function(e){var r=a(t,o,arguments);i&&s&&(i(r,"length").configurable&&s(r,"length",{value:1+l(0,e.length-(arguments.length-1))}));return r};var c=function(){return a(t,n,arguments)};s?s(e.exports,"apply",{value:c}):e.exports.apply=c}(mx);var yx=fx,gx=mx.exports,vx=gx(yx("String.prototype.indexOf")),bx=function(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{}})),xx="function"==typeof Map&&Map.prototype,wx=Object.getOwnPropertyDescriptor&&xx?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,$x=xx&&wx&&"function"==typeof wx.get?wx.get:null,kx=xx&&Map.prototype.forEach,Sx="function"==typeof Set&&Set.prototype,Ax=Object.getOwnPropertyDescriptor&&Sx?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Ex=Sx&&Ax&&"function"==typeof Ax.get?Ax.get:null,Ox=Sx&&Set.prototype.forEach,Tx="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,Cx="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,_x="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,jx=Boolean.prototype.valueOf,Ix=Object.prototype.toString,Px=Function.prototype.toString,Rx=String.prototype.match,Lx=String.prototype.slice,Dx=String.prototype.replace,Bx=String.prototype.toUpperCase,Fx=String.prototype.toLowerCase,Nx=RegExp.prototype.test,zx=Array.prototype.concat,Ux=Array.prototype.join,qx=Array.prototype.slice,Mx=Math.floor,Hx="function"==typeof BigInt?BigInt.prototype.valueOf:null,Wx=Object.getOwnPropertySymbols,Vx="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,Gx="function"==typeof Symbol&&"object"==typeof Symbol.iterator,Kx="function"==typeof Symbol&&Symbol.toStringTag&&(Symbol.toStringTag,1)?Symbol.toStringTag:null,Jx=Object.prototype.propertyIsEnumerable,Yx=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function Zx(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||Nx.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof e){var n=e<0?-Mx(-e):Mx(e);if(n!==e){var o=String(n),a=Lx.call(t,o.length+1);return Dx.call(o,r,"$&_")+"."+Dx.call(Dx.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return Dx.call(t,r,"$&_")}var Qx=bx.custom,Xx=Qx&&nw(Qx)?Qx:null;function ew(e,t,r){var n="double"===(r.quoteStyle||t)?'"':"'";return n+e+n}function tw(e){return Dx.call(String(e),/"/g,"&quot;")}function rw(e){return!("[object Array]"!==iw(e)||Kx&&"object"==typeof e&&Kx in e)}function nw(e){if(Gx)return e&&"object"==typeof e&&e instanceof Symbol;if("symbol"==typeof e)return!0;if(!e||"object"!=typeof e||!Vx)return!1;try{return Vx.call(e),!0}catch(e){}return!1}var ow=Object.prototype.hasOwnProperty||function(e){return e in this};function aw(e,t){return ow.call(e,t)}function iw(e){return Ix.call(e)}function sw(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function lw(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,n="... "+r+" more character"+(r>1?"s":"");return lw(Lx.call(e,0,t.maxStringLength),t)+n}return ew(Dx.call(Dx.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,cw),"single",t)}function cw(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+Bx.call(t.toString(16))}function pw(e){return"Object("+e+")"}function uw(e){return e+" { ? }"}function dw(e,t,r,n){return e+" ("+t+") {"+(n?hw(r,n):Ux.call(r,", "))+"}"}function hw(e,t){if(0===e.length)return"";var r="\n"+t.prev+t.base;return r+Ux.call(e,","+r)+"\n"+t.prev}function fw(e,t){var r=rw(e),n=[];if(r){n.length=e.length;for(var o=0;o<e.length;o++)n[o]=aw(e,o)?t(e[o],e):""}var a,i="function"==typeof Wx?Wx(e):[];if(Gx){a={};for(var s=0;s<i.length;s++)a["$"+i[s]]=i[s]}for(var l in e)aw(e,l)&&(r&&String(Number(l))===l&&l<e.length||Gx&&a["$"+l]instanceof Symbol||(Nx.call(/[^\w$]/,l)?n.push(t(l,e)+": "+t(e[l],e)):n.push(l+": "+t(e[l],e))));if("function"==typeof Wx)for(var c=0;c<i.length;c++)Jx.call(e,i[c])&&n.push("["+t(i[c])+"]: "+t(e[i[c]],e));return n}var mw=fx,yw=function(e,t){var r=yx(e,!!t);return"function"==typeof r&&vx(e,".prototype.")>-1?gx(r):r},gw=function e(t,r,n,o){var a=r||{};if(aw(a,"quoteStyle")&&"single"!==a.quoteStyle&&"double"!==a.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(aw(a,"maxStringLength")&&("number"==typeof a.maxStringLength?a.maxStringLength<0&&a.maxStringLength!==1/0:null!==a.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=!aw(a,"customInspect")||a.customInspect;if("boolean"!=typeof i&&"symbol"!==i)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(aw(a,"indent")&&null!==a.indent&&"\t"!==a.indent&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(aw(a,"numericSeparator")&&"boolean"!=typeof a.numericSeparator)throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var s=a.numericSeparator;if(void 0===t)return"undefined";if(null===t)return"null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return lw(t,a);if("number"==typeof t){if(0===t)return 1/0/t>0?"0":"-0";var l=String(t);return s?Zx(t,l):l}if("bigint"==typeof t){var c=String(t)+"n";return s?Zx(t,c):c}var p=void 0===a.depth?5:a.depth;if(void 0===n&&(n=0),n>=p&&p>0&&"object"==typeof t)return rw(t)?"[Array]":"[Object]";var u=function(e,t){var r;if("\t"===e.indent)r="\t";else{if(!("number"==typeof e.indent&&e.indent>0))return null;r=Ux.call(Array(e.indent+1)," ")}return{base:r,prev:Ux.call(Array(t+1),r)}}(a,n);if(void 0===o)o=[];else if(sw(o,t)>=0)return"[Circular]";function d(t,r,i){if(r&&(o=qx.call(o)).push(r),i){var s={depth:a.depth};return aw(a,"quoteStyle")&&(s.quoteStyle=a.quoteStyle),e(t,s,n+1,o)}return e(t,a,n+1,o)}if("function"==typeof t){var h=function(e){if(e.name)return e.name;var t=Rx.call(Px.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}(t),f=fw(t,d);return"[Function"+(h?": "+h:" (anonymous)")+"]"+(f.length>0?" { "+Ux.call(f,", ")+" }":"")}if(nw(t)){var m=Gx?Dx.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):Vx.call(t);return"object"!=typeof t||Gx?m:pw(m)}if(function(e){return!(!e||"object"!=typeof e)&&("undefined"!=typeof HTMLElement&&e instanceof HTMLElement||"string"==typeof e.nodeName&&"function"==typeof e.getAttribute)}(t)){for(var y="<"+Fx.call(String(t.nodeName)),g=t.attributes||[],v=0;v<g.length;v++)y+=" "+g[v].name+"="+ew(tw(g[v].value),"double",a);return y+=">",t.childNodes&&t.childNodes.length&&(y+="..."),y+"</"+Fx.call(String(t.nodeName))+">"}if(rw(t)){if(0===t.length)return"[]";var b=fw(t,d);return u&&!function(e){for(var t=0;t<e.length;t++)if(sw(e[t],"\n")>=0)return!1;return!0}(b)?"["+hw(b,u)+"]":"[ "+Ux.call(b,", ")+" ]"}if(function(e){return!("[object Error]"!==iw(e)||Kx&&"object"==typeof e&&Kx in e)}(t)){var x=fw(t,d);return"cause"in t&&!Jx.call(t,"cause")?"{ ["+String(t)+"] "+Ux.call(zx.call("[cause]: "+d(t.cause),x),", ")+" }":0===x.length?"["+String(t)+"]":"{ ["+String(t)+"] "+Ux.call(x,", ")+" }"}if("object"==typeof t&&i){if(Xx&&"function"==typeof t[Xx])return t[Xx]();if("symbol"!==i&&"function"==typeof t.inspect)return t.inspect()}if(function(e){if(!$x||!e||"object"!=typeof e)return!1;try{$x.call(e);try{Ex.call(e)}catch(e){return!0}return e instanceof Map}catch(e){}return!1}(t)){var w=[];return kx.call(t,(function(e,r){w.push(d(r,t,!0)+" => "+d(e,t))})),dw("Map",$x.call(t),w,u)}if(function(e){if(!Ex||!e||"object"!=typeof e)return!1;try{Ex.call(e);try{$x.call(e)}catch(e){return!0}return e instanceof Set}catch(e){}return!1}(t)){var $=[];return Ox.call(t,(function(e){$.push(d(e,t))})),dw("Set",Ex.call(t),$,u)}if(function(e){if(!Tx||!e||"object"!=typeof e)return!1;try{Tx.call(e,Tx);try{Cx.call(e,Cx)}catch(e){return!0}return e instanceof WeakMap}catch(e){}return!1}(t))return uw("WeakMap");if(function(e){if(!Cx||!e||"object"!=typeof e)return!1;try{Cx.call(e,Cx);try{Tx.call(e,Tx)}catch(e){return!0}return e instanceof WeakSet}catch(e){}return!1}(t))return uw("WeakSet");if(function(e){if(!_x||!e||"object"!=typeof e)return!1;try{return _x.call(e),!0}catch(e){}return!1}(t))return uw("WeakRef");if(function(e){return!("[object Number]"!==iw(e)||Kx&&"object"==typeof e&&Kx in e)}(t))return pw(d(Number(t)));if(function(e){if(!e||"object"!=typeof e||!Hx)return!1;try{return Hx.call(e),!0}catch(e){}return!1}(t))return pw(d(Hx.call(t)));if(function(e){return!("[object Boolean]"!==iw(e)||Kx&&"object"==typeof e&&Kx in e)}(t))return pw(jx.call(t));if(function(e){return!("[object String]"!==iw(e)||Kx&&"object"==typeof e&&Kx in e)}(t))return pw(d(String(t)));if(!function(e){return!("[object Date]"!==iw(e)||Kx&&"object"==typeof e&&Kx in e)}(t)&&!function(e){return!("[object RegExp]"!==iw(e)||Kx&&"object"==typeof e&&Kx in e)}(t)){var k=fw(t,d),S=Yx?Yx(t)===Object.prototype:t instanceof Object||t.constructor===Object,A=t instanceof Object?"":"null prototype",E=!S&&Kx&&Object(t)===t&&Kx in t?Lx.call(iw(t),8,-1):A?"Object":"",O=(S||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(E||A?"["+Ux.call(zx.call([],E||[],A||[]),": ")+"] ":"");return 0===k.length?O+"{}":u?O+"{"+hw(k,u)+"}":O+"{ "+Ux.call(k,", ")+" }"}return String(t)},vw=mw("%TypeError%"),bw=mw("%WeakMap%",!0),xw=mw("%Map%",!0),ww=yw("WeakMap.prototype.get",!0),$w=yw("WeakMap.prototype.set",!0),kw=yw("WeakMap.prototype.has",!0),Sw=yw("Map.prototype.get",!0),Aw=yw("Map.prototype.set",!0),Ew=yw("Map.prototype.has",!0),Ow=function(e,t){for(var r,n=e;null!==(r=n.next);n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r,r},Tw=String.prototype.replace,Cw=/%20/g,_w="RFC3986",jw={default:_w,formatters:{RFC1738:function(e){return Tw.call(e,Cw,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:_w},Iw=jw,Pw=Object.prototype.hasOwnProperty,Rw=Array.isArray,Lw=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),Dw=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r},Bw={arrayToObject:Dw,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],a=o.obj[o.prop],i=Object.keys(a),s=0;s<i.length;++s){var l=i[s],c=a[l];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(t.push({obj:a,prop:l}),r.push(c))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(Rw(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r,n,o){if(0===e.length)return e;var a=e;if("symbol"==typeof e?a=Symbol.prototype.toString.call(e):"string"!=typeof e&&(a=String(e)),"iso-8859-1"===r)return escape(a).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var i="",s=0;s<a.length;++s){var l=a.charCodeAt(s);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||o===Iw.RFC1738&&(40===l||41===l)?i+=a.charAt(s):l<128?i+=Lw[l]:l<2048?i+=Lw[192|l>>6]+Lw[128|63&l]:l<55296||l>=57344?i+=Lw[224|l>>12]+Lw[128|l>>6&63]+Lw[128|63&l]:(s+=1,l=65536+((1023&l)<<10|1023&a.charCodeAt(s)),i+=Lw[240|l>>18]+Lw[128|l>>12&63]+Lw[128|l>>6&63]+Lw[128|63&l])}return i},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(Rw(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(Rw(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!Pw.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var o=t;return Rw(t)&&!Rw(r)&&(o=Dw(t,n)),Rw(t)&&Rw(r)?(r.forEach((function(r,o){if(Pw.call(t,o)){var a=t[o];a&&"object"==typeof a&&r&&"object"==typeof r?t[o]=e(a,r,n):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var a=r[o];return Pw.call(t,o)?t[o]=e(t[o],a,n):t[o]=a,t}),o)}},Fw=function(){var e,t,r,n={assert:function(e){if(!n.has(e))throw new vw("Side channel does not contain "+gw(e))},get:function(n){if(bw&&n&&("object"==typeof n||"function"==typeof n)){if(e)return ww(e,n)}else if(xw){if(t)return Sw(t,n)}else if(r)return function(e,t){var r=Ow(e,t);return r&&r.value}(r,n)},has:function(n){if(bw&&n&&("object"==typeof n||"function"==typeof n)){if(e)return kw(e,n)}else if(xw){if(t)return Ew(t,n)}else if(r)return function(e,t){return!!Ow(e,t)}(r,n);return!1},set:function(n,o){bw&&n&&("object"==typeof n||"function"==typeof n)?(e||(e=new bw),$w(e,n,o)):xw?(t||(t=new xw),Aw(t,n,o)):(r||(r={key:{},next:null}),function(e,t,r){var n=Ow(e,t);n?n.value=r:e.next={key:t,next:e.next,value:r}}(r,n,o))}};return n},Nw=Bw,zw=jw,Uw=Object.prototype.hasOwnProperty,qw={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},Mw=Array.isArray,Hw=String.prototype.split,Ww=Array.prototype.push,Vw=function(e,t){Ww.apply(e,Mw(t)?t:[t])},Gw=Date.prototype.toISOString,Kw=zw.default,Jw={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:Nw.encode,encodeValuesOnly:!1,format:Kw,formatter:zw.formatters[Kw],indices:!1,serializeDate:function(e){return Gw.call(e)},skipNulls:!1,strictNullHandling:!1},Yw={},Zw=function e(t,r,n,o,a,i,s,l,c,p,u,d,h,f,m){for(var y=t,g=m,v=0,b=!1;void 0!==(g=g.get(Yw))&&!b;){var x=g.get(t);if(v+=1,void 0!==x){if(x===v)throw new RangeError("Cyclic object value");b=!0}void 0===g.get(Yw)&&(v=0)}if("function"==typeof s?y=s(r,y):y instanceof Date?y=p(y):"comma"===n&&Mw(y)&&(y=Nw.maybeMap(y,(function(e){return e instanceof Date?p(e):e}))),null===y){if(o)return i&&!h?i(r,Jw.encoder,f,"key",u):r;y=""}if(function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e||"symbol"==typeof e||"bigint"==typeof e}(y)||Nw.isBuffer(y)){if(i){var w=h?r:i(r,Jw.encoder,f,"key",u);if("comma"===n&&h){for(var $=Hw.call(String(y),","),k="",S=0;S<$.length;++S)k+=(0===S?"":",")+d(i($[S],Jw.encoder,f,"value",u));return[d(w)+"="+k]}return[d(w)+"="+d(i(y,Jw.encoder,f,"value",u))]}return[d(r)+"="+d(String(y))]}var A,E=[];if(void 0===y)return E;if("comma"===n&&Mw(y))A=[{value:y.length>0?y.join(",")||null:void 0}];else if(Mw(s))A=s;else{var O=Object.keys(y);A=l?O.sort(l):O}for(var T=0;T<A.length;++T){var C=A[T],_="object"==typeof C&&void 0!==C.value?C.value:y[C];if(!a||null!==_){var j=Mw(y)?"function"==typeof n?n(r,C):r:r+(c?"."+C:"["+C+"]");m.set(t,v);var I=Fw();I.set(Yw,m),Vw(E,e(_,j,n,o,a,i,s,l,c,p,u,d,h,f,I))}}return E},Qw=Bw,Xw=Object.prototype.hasOwnProperty,e$=Array.isArray,t$={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:Qw.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},r$=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},n$=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},o$=function(e,t,r,n){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,i=r.depth>0&&/(\[[^[\]]*])/.exec(o),s=i?o.slice(0,i.index):o,l=[];if(s){if(!r.plainObjects&&Xw.call(Object.prototype,s)&&!r.allowPrototypes)return;l.push(s)}for(var c=0;r.depth>0&&null!==(i=a.exec(o))&&c<r.depth;){if(c+=1,!r.plainObjects&&Xw.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(i[1])}return i&&l.push("["+o.slice(i.index)+"]"),function(e,t,r,n){for(var o=n?t:n$(t,r),a=e.length-1;a>=0;--a){var i,s=e[a];if("[]"===s&&r.parseArrays)i=[].concat(o);else{i=r.plainObjects?Object.create(null):{};var l="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,c=parseInt(l,10);r.parseArrays||""!==l?!isNaN(c)&&s!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(i=[])[c]=o:"__proto__"!==l&&(i[l]=o):i={0:o}}o=i}return o}(l,t,r,n)}},a$={formats:jw,parse:function(e,t){var r=function(e){if(!e)return t$;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?t$.charset:e.charset;return{allowDots:void 0===e.allowDots?t$.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:t$.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:t$.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:t$.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:t$.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:t$.comma,decoder:"function"==typeof e.decoder?e.decoder:t$.decoder,delimiter:"string"==typeof e.delimiter||Qw.isRegExp(e.delimiter)?e.delimiter:t$.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:t$.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:t$.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:t$.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:t$.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:t$.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof e?function(e,t){var r,n={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,i=o.split(t.delimiter,a),s=-1,l=t.charset;if(t.charsetSentinel)for(r=0;r<i.length;++r)0===i[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===i[r]?l="utf-8":"utf8=%26%2310003%3B"===i[r]&&(l="iso-8859-1"),s=r,r=i.length);for(r=0;r<i.length;++r)if(r!==s){var c,p,u=i[r],d=u.indexOf("]="),h=-1===d?u.indexOf("="):d+1;-1===h?(c=t.decoder(u,t$.decoder,l,"key"),p=t.strictNullHandling?null:""):(c=t.decoder(u.slice(0,h),t$.decoder,l,"key"),p=Qw.maybeMap(n$(u.slice(h+1),t),(function(e){return t.decoder(e,t$.decoder,l,"value")}))),p&&t.interpretNumericEntities&&"iso-8859-1"===l&&(p=r$(p)),u.indexOf("[]=")>-1&&(p=e$(p)?[p]:p),Xw.call(n,c)?n[c]=Qw.combine(n[c],p):n[c]=p}return n}(e,r):e,o=r.plainObjects?Object.create(null):{},a=Object.keys(n),i=0;i<a.length;++i){var s=a[i],l=o$(s,n[s],r,"string"==typeof e);o=Qw.merge(o,l,r)}return!0===r.allowSparse?o:Qw.compact(o)},stringify:function(e,t){var r,n=e,o=function(e){if(!e)return Jw;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||Jw.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=zw.default;if(void 0!==e.format){if(!Uw.call(zw.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=zw.formatters[r],o=Jw.filter;return("function"==typeof e.filter||Mw(e.filter))&&(o=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:Jw.addQueryPrefix,allowDots:void 0===e.allowDots?Jw.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:Jw.charsetSentinel,delimiter:void 0===e.delimiter?Jw.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:Jw.encode,encoder:"function"==typeof e.encoder?e.encoder:Jw.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:Jw.encodeValuesOnly,filter:o,format:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:Jw.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:Jw.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:Jw.strictNullHandling}}(t);"function"==typeof o.filter?n=(0,o.filter)("",n):Mw(o.filter)&&(r=o.filter);var a,i=[];if("object"!=typeof n||null===n)return"";a=t&&t.arrayFormat in qw?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var s=qw[a];r||(r=Object.keys(n)),o.sort&&r.sort(o.sort);for(var l=Fw(),c=0;c<r.length;++c){var p=r[c];o.skipNulls&&null===n[p]||Vw(i,Zw(n[p],p,s,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.format,o.formatter,o.encodeValuesOnly,o.charset,l))}var u=i.join(o.delimiter),d=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?d+="utf8=%26%2310003%3B&":d+="utf8=%E2%9C%93&"),u.length>0?d+u:""}};function i$(e){return null==e}var s$={isNothing:i$,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:i$(e)?[]:[e]},repeat:function(e,t){var r,n="";for(r=0;r<t;r+=1)n+=e;return n},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var r,n,o,a;if(t)for(r=0,n=(a=Object.keys(t)).length;r<n;r+=1)e[o=a[r]]=t[o];return e}};function l$(e,t){var r="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(r+="\n\n"+e.mark.snippet),n+" "+r):n}function c$(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=l$(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}c$.prototype=Object.create(Error.prototype),c$.prototype.constructor=c$,c$.prototype.toString=function(e){return this.name+": "+l$(this,e)};var p$=c$;function u$(e,t,r,n,o){var a="",i="",s=Math.floor(o/2)-1;return n-t>s&&(t=n-s+(a=" ... ").length),r-n>s&&(r=n+s-(i=" ...").length),{str:a+e.slice(t,r).replace(/\t/g,"\u2192")+i,pos:n-t+a.length}}function d$(e,t){return s$.repeat(" ",t-e.length)+e}var h$=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var r,n=/\r?\n|\r|\0/g,o=[0],a=[],i=-1;r=n.exec(e.buffer);)a.push(r.index),o.push(r.index+r[0].length),e.position<=r.index&&i<0&&(i=o.length-2);i<0&&(i=o.length-1);var s,l,c="",p=Math.min(e.line+t.linesAfter,a.length).toString().length,u=t.maxLength-(t.indent+p+3);for(s=1;s<=t.linesBefore&&!(i-s<0);s++)l=u$(e.buffer,o[i-s],a[i-s],e.position-(o[i]-o[i-s]),u),c=s$.repeat(" ",t.indent)+d$((e.line-s+1).toString(),p)+" | "+l.str+"\n"+c;for(l=u$(e.buffer,o[i],a[i],e.position,u),c+=s$.repeat(" ",t.indent)+d$((e.line+1).toString(),p)+" | "+l.str+"\n",c+=s$.repeat("-",t.indent+p+3+l.pos)+"^\n",s=1;s<=t.linesAfter&&!(i+s>=a.length);s++)l=u$(e.buffer,o[i+s],a[i+s],e.position-(o[i]-o[i+s]),u),c+=s$.repeat(" ",t.indent)+d$((e.line+s+1).toString(),p)+" | "+l.str+"\n";return c.replace(/\n$/,"")},f$=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],m$=["scalar","sequence","mapping"],y$=function(e,t){if(t=t||{},Object.keys(t).forEach((function(t){if(-1===f$.indexOf(t))throw new p$('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach((function(r){e[r].forEach((function(e){t[String(e)]=r}))})),t}(t.styleAliases||null),-1===m$.indexOf(this.kind))throw new p$('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function g$(e,t){var r=[];return e[t].forEach((function(e){var t=r.length;r.forEach((function(r,n){r.tag===e.tag&&r.kind===e.kind&&r.multi===e.multi&&(t=n)})),r[t]=e})),r}function v$(e){return this.extend(e)}v$.prototype.extend=function(e){var t=[],r=[];if(e instanceof y$)r.push(e);else if(Array.isArray(e))r=r.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new p$("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(r=r.concat(e.explicit))}t.forEach((function(e){if(!(e instanceof y$))throw new p$("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new p$("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new p$("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),r.forEach((function(e){if(!(e instanceof y$))throw new p$("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var n=Object.create(v$.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(r),n.compiledImplicit=g$(n,"implicit"),n.compiledExplicit=g$(n,"explicit"),n.compiledTypeMap=function(){var e,t,r={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function n(e){e.multi?(r.multi[e.kind].push(e),r.multi.fallback.push(e)):r[e.kind][e.tag]=r.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(n);return r}(n.compiledImplicit,n.compiledExplicit),n};var b$=v$,x$=new y$("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),w$=new y$("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),$$=new y$("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),k$=new b$({explicit:[x$,w$,$$]}),S$=new y$("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),A$=new y$("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function E$(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function O$(e){return 48<=e&&e<=55}function T$(e){return 48<=e&&e<=57}var C$=new y$("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,r=e.length,n=0,o=!1;if(!r)return!1;if("-"!==(t=e[n])&&"+"!==t||(t=e[++n]),"0"===t){if(n+1===r)return!0;if("b"===(t=e[++n])){for(n++;n<r;n++)if("_"!==(t=e[n])){if("0"!==t&&"1"!==t)return!1;o=!0}return o&&"_"!==t}if("x"===t){for(n++;n<r;n++)if("_"!==(t=e[n])){if(!E$(e.charCodeAt(n)))return!1;o=!0}return o&&"_"!==t}if("o"===t){for(n++;n<r;n++)if("_"!==(t=e[n])){if(!O$(e.charCodeAt(n)))return!1;o=!0}return o&&"_"!==t}}if("_"===t)return!1;for(;n<r;n++)if("_"!==(t=e[n])){if(!T$(e.charCodeAt(n)))return!1;o=!0}return!(!o||"_"===t)},construct:function(e){var t,r=e,n=1;if(-1!==r.indexOf("_")&&(r=r.replace(/_/g,"")),"-"!==(t=r[0])&&"+"!==t||("-"===t&&(n=-1),t=(r=r.slice(1))[0]),"0"===r)return 0;if("0"===t){if("b"===r[1])return n*parseInt(r.slice(2),2);if("x"===r[1])return n*parseInt(r.slice(2),16);if("o"===r[1])return n*parseInt(r.slice(2),8)}return n*parseInt(r,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!s$.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),_$=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),j$=/^[-+]?[0-9]+e/,I$=new y$("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!_$.test(e)||"_"===e[e.length-1])},construct:function(e){var t,r;return r="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===r?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:r*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||s$.isNegativeZero(e))},represent:function(e,t){var r;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(s$.isNegativeZero(e))return"-0.0";return r=e.toString(10),j$.test(r)?r.replace("e",".e"):r},defaultStyle:"lowercase"}),P$=k$.extend({implicit:[S$,A$,C$,I$]}),R$=P$,L$=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),D$=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),B$=new y$("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==L$.exec(e)||null!==D$.exec(e))},construct:function(e){var t,r,n,o,a,i,s,l,c=0,p=null;if(null===(t=L$.exec(e))&&(t=D$.exec(e)),null===t)throw new Error("Date resolve error");if(r=+t[1],n=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(r,n,o));if(a=+t[4],i=+t[5],s=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(p=-p)),l=new Date(Date.UTC(r,n,o,a,i,s,c)),p&&l.setTime(l.getTime()-p),l},instanceOf:Date,represent:function(e){return e.toISOString()}}),F$=new y$("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),N$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r",z$=new y$("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,r,n=0,o=e.length,a=N$;for(r=0;r<o;r++)if(!((t=a.indexOf(e.charAt(r)))>64)){if(t<0)return!1;n+=6}return n%8==0},construct:function(e){var t,r,n=e.replace(/[\r\n=]/g,""),o=n.length,a=N$,i=0,s=[];for(t=0;t<o;t++)t%4==0&&t&&(s.push(i>>16&255),s.push(i>>8&255),s.push(255&i)),i=i<<6|a.indexOf(n.charAt(t));return 0==(r=o%4*6)?(s.push(i>>16&255),s.push(i>>8&255),s.push(255&i)):18===r?(s.push(i>>10&255),s.push(i>>2&255)):12===r&&s.push(i>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,r,n="",o=0,a=e.length,i=N$;for(t=0;t<a;t++)t%3==0&&t&&(n+=i[o>>18&63],n+=i[o>>12&63],n+=i[o>>6&63],n+=i[63&o]),o=(o<<8)+e[t];return 0==(r=a%3)?(n+=i[o>>18&63],n+=i[o>>12&63],n+=i[o>>6&63],n+=i[63&o]):2===r?(n+=i[o>>10&63],n+=i[o>>4&63],n+=i[o<<2&63],n+=i[64]):1===r&&(n+=i[o>>2&63],n+=i[o<<4&63],n+=i[64],n+=i[64]),n}}),U$=Object.prototype.hasOwnProperty,q$=Object.prototype.toString,M$=new y$("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,r,n,o,a,i=[],s=e;for(t=0,r=s.length;t<r;t+=1){if(n=s[t],a=!1,"[object Object]"!==q$.call(n))return!1;for(o in n)if(U$.call(n,o)){if(a)return!1;a=!0}if(!a)return!1;if(-1!==i.indexOf(o))return!1;i.push(o)}return!0},construct:function(e){return null!==e?e:[]}}),H$=Object.prototype.toString,W$=new y$("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,r,n,o,a,i=e;for(a=new Array(i.length),t=0,r=i.length;t<r;t+=1){if(n=i[t],"[object Object]"!==H$.call(n))return!1;if(1!==(o=Object.keys(n)).length)return!1;a[t]=[o[0],n[o[0]]]}return!0},construct:function(e){if(null===e)return[];var t,r,n,o,a,i=e;for(a=new Array(i.length),t=0,r=i.length;t<r;t+=1)n=i[t],o=Object.keys(n),a[t]=[o[0],n[o[0]]];return a}}),V$=Object.prototype.hasOwnProperty,G$=new y$("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,r=e;for(t in r)if(V$.call(r,t)&&null!==r[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),K$=R$.extend({implicit:[B$,F$],explicit:[z$,M$,W$,G$]}),J$=Object.prototype.hasOwnProperty,Y$=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Z$=/[\x85\u2028\u2029]/,Q$=/[,\[\]\{\}]/,X$=/^(?:!|!!|![a-z\-]+!)$/i,ek=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function tk(e){return Object.prototype.toString.call(e)}function rk(e){return 10===e||13===e}function nk(e){return 9===e||32===e}function ok(e){return 9===e||32===e||10===e||13===e}function ak(e){return 44===e||91===e||93===e||123===e||125===e}function ik(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function sk(e){return 120===e?2:117===e?4:85===e?8:0}function lk(e){return 48<=e&&e<=57?e-48:-1}function ck(e){return 48===e?"\0":97===e?"\x07":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"\x1b":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"\x85":95===e?"\xa0":76===e?"\u2028":80===e?"\u2029":""}function pk(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var uk=new Array(256),dk=new Array(256),hk=0;hk<256;hk++)uk[hk]=ck(hk)?1:0,dk[hk]=ck(hk);function fk(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||K$,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function mk(e,t){var r={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return r.snippet=h$(r),new p$(t,r)}function yk(e,t){throw mk(e,t)}function gk(e,t){e.onWarning&&e.onWarning.call(null,mk(e,t))}var vk={YAML:function(e,t,r){var n,o,a;null!==e.version&&yk(e,"duplication of %YAML directive"),1!==r.length&&yk(e,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(r[0]))&&yk(e,"ill-formed argument of the YAML directive"),o=parseInt(n[1],10),a=parseInt(n[2],10),1!==o&&yk(e,"unacceptable YAML version of the document"),e.version=r[0],e.checkLineBreaks=a<2,1!==a&&2!==a&&gk(e,"unsupported YAML version of the document")},TAG:function(e,t,r){var n,o;2!==r.length&&yk(e,"TAG directive accepts exactly two arguments"),n=r[0],o=r[1],X$.test(n)||yk(e,"ill-formed tag handle (first argument) of the TAG directive"),J$.call(e.tagMap,n)&&yk(e,'there is a previously declared suffix for "'+n+'" tag handle'),ek.test(o)||yk(e,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch(t){yk(e,"tag prefix is malformed: "+o)}e.tagMap[n]=o}};function bk(e,t,r,n){var o,a,i,s;if(t<r){if(s=e.input.slice(t,r),n)for(o=0,a=s.length;o<a;o+=1)9===(i=s.charCodeAt(o))||32<=i&&i<=1114111||yk(e,"expected valid JSON character");else Y$.test(s)&&yk(e,"the stream contains non-printable characters");e.result+=s}}function xk(e,t,r,n){var o,a,i,s;for(s$.isObject(r)||yk(e,"cannot merge mappings; the provided source object is unacceptable"),i=0,s=(o=Object.keys(r)).length;i<s;i+=1)a=o[i],J$.call(t,a)||(t[a]=r[a],n[a]=!0)}function wk(e,t,r,n,o,a,i,s,l){var c,p;if(Array.isArray(o))for(c=0,p=(o=Array.prototype.slice.call(o)).length;c<p;c+=1)Array.isArray(o[c])&&yk(e,"nested arrays are not supported inside keys"),"object"==typeof o&&"[object Object]"===tk(o[c])&&(o[c]="[object Object]");if("object"==typeof o&&"[object Object]"===tk(o)&&(o="[object Object]"),o=String(o),null===t&&(t={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(a))for(c=0,p=a.length;c<p;c+=1)xk(e,t,a[c],r);else xk(e,t,a,r);else e.json||J$.call(r,o)||!J$.call(t,o)||(e.line=i||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,yk(e,"duplicated mapping key")),"__proto__"===o?Object.defineProperty(t,o,{configurable:!0,enumerable:!0,writable:!0,value:a}):t[o]=a,delete r[o];return t}function $k(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):yk(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function kk(e,t,r){for(var n=0,o=e.input.charCodeAt(e.position);0!==o;){for(;nk(o);)9===o&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(t&&35===o)do{o=e.input.charCodeAt(++e.position)}while(10!==o&&13!==o&&0!==o);if(!rk(o))break;for($k(e),o=e.input.charCodeAt(e.position),n++,e.lineIndent=0;32===o;)e.lineIndent++,o=e.input.charCodeAt(++e.position)}return-1!==r&&0!==n&&e.lineIndent<r&&gk(e,"deficient indentation"),n}function Sk(e){var t,r=e.position;return!(45!==(t=e.input.charCodeAt(r))&&46!==t||t!==e.input.charCodeAt(r+1)||t!==e.input.charCodeAt(r+2)||(r+=3,0!==(t=e.input.charCodeAt(r))&&!ok(t)))}function Ak(e,t){1===t?e.result+=" ":t>1&&(e.result+=s$.repeat("\n",t-1))}function Ek(e,t){var r,n,o=e.tag,a=e.anchor,i=[],s=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),n=e.input.charCodeAt(e.position);0!==n&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,yk(e,"tab characters must not be used in indentation")),45===n)&&ok(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,kk(e,!0,-1)&&e.lineIndent<=t)i.push(null),n=e.input.charCodeAt(e.position);else if(r=e.line,Ck(e,t,3,!1,!0),i.push(e.result),kk(e,!0,-1),n=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>t)&&0!==n)yk(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=o,e.anchor=a,e.kind="sequence",e.result=i,!0)}function Ok(e){var t,r,n,o,a=!1,i=!1;if(33!==(o=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&yk(e,"duplication of a tag property"),60===(o=e.input.charCodeAt(++e.position))?(a=!0,o=e.input.charCodeAt(++e.position)):33===o?(i=!0,r="!!",o=e.input.charCodeAt(++e.position)):r="!",t=e.position,a){do{o=e.input.charCodeAt(++e.position)}while(0!==o&&62!==o);e.position<e.length?(n=e.input.slice(t,e.position),o=e.input.charCodeAt(++e.position)):yk(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==o&&!ok(o);)33===o&&(i?yk(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(t-1,e.position+1),X$.test(r)||yk(e,"named tag handle cannot contain such characters"),i=!0,t=e.position+1)),o=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),Q$.test(n)&&yk(e,"tag suffix cannot contain flow indicator characters")}n&&!ek.test(n)&&yk(e,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch(t){yk(e,"tag name is malformed: "+n)}return a?e.tag=n:J$.call(e.tagMap,r)?e.tag=e.tagMap[r]+n:"!"===r?e.tag="!"+n:"!!"===r?e.tag="tag:yaml.org,2002:"+n:yk(e,'undeclared tag handle "'+r+'"'),!0}function Tk(e){var t,r;if(38!==(r=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&yk(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!ok(r)&&!ak(r);)r=e.input.charCodeAt(++e.position);return e.position===t&&yk(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function Ck(e,t,r,n,o){var a,i,s,l,c,p,u,d,h,f=1,m=!1,y=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=i=s=4===r||3===r,n&&kk(e,!0,-1)&&(m=!0,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)),1===f)for(;Ok(e)||Tk(e);)kk(e,!0,-1)?(m=!0,s=a,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)):s=!1;if(s&&(s=m||o),1!==f&&4!==r||(d=1===r||2===r?t:t+1,h=e.position-e.lineStart,1===f?s&&(Ek(e,h)||function(e,t,r){var n,o,a,i,s,l,c,p=e.tag,u=e.anchor,d={},h=Object.create(null),f=null,m=null,y=null,g=!1,v=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=d),c=e.input.charCodeAt(e.position);0!==c;){if(g||-1===e.firstTabInLine||(e.position=e.firstTabInLine,yk(e,"tab characters must not be used in indentation")),n=e.input.charCodeAt(e.position+1),a=e.line,63!==c&&58!==c||!ok(n)){if(i=e.line,s=e.lineStart,l=e.position,!Ck(e,r,2,!1,!0))break;if(e.line===a){for(c=e.input.charCodeAt(e.position);nk(c);)c=e.input.charCodeAt(++e.position);if(58===c)ok(c=e.input.charCodeAt(++e.position))||yk(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(wk(e,d,h,f,m,null,i,s,l),f=m=y=null),v=!0,g=!1,o=!1,f=e.tag,m=e.result;else{if(!v)return e.tag=p,e.anchor=u,!0;yk(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!v)return e.tag=p,e.anchor=u,!0;yk(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(g&&(wk(e,d,h,f,m,null,i,s,l),f=m=y=null),v=!0,g=!0,o=!0):g?(g=!1,o=!0):yk(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,c=n;if((e.line===a||e.lineIndent>t)&&(g&&(i=e.line,s=e.lineStart,l=e.position),Ck(e,t,4,!0,o)&&(g?m=e.result:y=e.result),g||(wk(e,d,h,f,m,y,i,s,l),f=m=y=null),kk(e,!0,-1),c=e.input.charCodeAt(e.position)),(e.line===a||e.lineIndent>t)&&0!==c)yk(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return g&&wk(e,d,h,f,m,null,i,s,l),v&&(e.tag=p,e.anchor=u,e.kind="mapping",e.result=d),v}(e,h,d))||function(e,t){var r,n,o,a,i,s,l,c,p,u,d,h,f=!0,m=e.tag,y=e.anchor,g=Object.create(null);if(91===(h=e.input.charCodeAt(e.position)))i=93,c=!1,a=[];else{if(123!==h)return!1;i=125,c=!0,a={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=a),h=e.input.charCodeAt(++e.position);0!==h;){if(kk(e,!0,t),(h=e.input.charCodeAt(e.position))===i)return e.position++,e.tag=m,e.anchor=y,e.kind=c?"mapping":"sequence",e.result=a,!0;f?44===h&&yk(e,"expected the node content, but found ','"):yk(e,"missed comma between flow collection entries"),d=null,s=l=!1,63===h&&ok(e.input.charCodeAt(e.position+1))&&(s=l=!0,e.position++,kk(e,!0,t)),r=e.line,n=e.lineStart,o=e.position,Ck(e,t,1,!1,!0),u=e.tag,p=e.result,kk(e,!0,t),h=e.input.charCodeAt(e.position),!l&&e.line!==r||58!==h||(s=!0,h=e.input.charCodeAt(++e.position),kk(e,!0,t),Ck(e,t,1,!1,!0),d=e.result),c?wk(e,a,g,u,p,d,r,n,o):s?a.push(wk(e,null,g,u,p,d,r,n,o)):a.push(p),kk(e,!0,t),44===(h=e.input.charCodeAt(e.position))?(f=!0,h=e.input.charCodeAt(++e.position)):f=!1}yk(e,"unexpected end of the stream within a flow collection")}(e,d)?y=!0:(i&&function(e,t){var r,n,o,a,i=1,s=!1,l=!1,c=t,p=0,u=!1;if(124===(a=e.input.charCodeAt(e.position)))n=!1;else{if(62!==a)return!1;n=!0}for(e.kind="scalar",e.result="";0!==a;)if(43===(a=e.input.charCodeAt(++e.position))||45===a)1===i?i=43===a?3:2:yk(e,"repeat of a chomping mode identifier");else{if(!((o=lk(a))>=0))break;0===o?yk(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?yk(e,"repeat of an indentation width identifier"):(c=t+o-1,l=!0)}if(nk(a)){do{a=e.input.charCodeAt(++e.position)}while(nk(a));if(35===a)do{a=e.input.charCodeAt(++e.position)}while(!rk(a)&&0!==a)}for(;0!==a;){for($k(e),e.lineIndent=0,a=e.input.charCodeAt(e.position);(!l||e.lineIndent<c)&&32===a;)e.lineIndent++,a=e.input.charCodeAt(++e.position);if(!l&&e.lineIndent>c&&(c=e.lineIndent),rk(a))p++;else{if(e.lineIndent<c){3===i?e.result+=s$.repeat("\n",s?1+p:p):1===i&&s&&(e.result+="\n");break}for(n?nk(a)?(u=!0,e.result+=s$.repeat("\n",s?1+p:p)):u?(u=!1,e.result+=s$.repeat("\n",p+1)):0===p?s&&(e.result+=" "):e.result+=s$.repeat("\n",p):e.result+=s$.repeat("\n",s?1+p:p),s=!0,l=!0,p=0,r=e.position;!rk(a)&&0!==a;)a=e.input.charCodeAt(++e.position);bk(e,r,e.position,!1)}}return!0}(e,d)||function(e,t){var r,n,o;if(39!==(r=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=o=e.position;0!==(r=e.input.charCodeAt(e.position));)if(39===r){if(bk(e,n,e.position,!0),39!==(r=e.input.charCodeAt(++e.position)))return!0;n=e.position,e.position++,o=e.position}else rk(r)?(bk(e,n,o,!0),Ak(e,kk(e,!1,t)),n=o=e.position):e.position===e.lineStart&&Sk(e)?yk(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);yk(e,"unexpected end of the stream within a single quoted scalar")}(e,d)||function(e,t){var r,n,o,a,i,s;if(34!==(s=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,r=n=e.position;0!==(s=e.input.charCodeAt(e.position));){if(34===s)return bk(e,r,e.position,!0),e.position++,!0;if(92===s){if(bk(e,r,e.position,!0),rk(s=e.input.charCodeAt(++e.position)))kk(e,!1,t);else if(s<256&&uk[s])e.result+=dk[s],e.position++;else if((i=sk(s))>0){for(o=i,a=0;o>0;o--)(i=ik(s=e.input.charCodeAt(++e.position)))>=0?a=(a<<4)+i:yk(e,"expected hexadecimal character");e.result+=pk(a),e.position++}else yk(e,"unknown escape sequence");r=n=e.position}else rk(s)?(bk(e,r,n,!0),Ak(e,kk(e,!1,t)),r=n=e.position):e.position===e.lineStart&&Sk(e)?yk(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position)}yk(e,"unexpected end of the stream within a double quoted scalar")}(e,d)?y=!0:function(e){var t,r,n;if(42!==(n=e.input.charCodeAt(e.position)))return!1;for(n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!ok(n)&&!ak(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&yk(e,"name of an alias node must contain at least one character"),r=e.input.slice(t,e.position),J$.call(e.anchorMap,r)||yk(e,'unidentified alias "'+r+'"'),e.result=e.anchorMap[r],kk(e,!0,-1),!0}(e)?(y=!0,null===e.tag&&null===e.anchor||yk(e,"alias node should not have any properties")):function(e,t,r){var n,o,a,i,s,l,c,p,u=e.kind,d=e.result;if(ok(p=e.input.charCodeAt(e.position))||ak(p)||35===p||38===p||42===p||33===p||124===p||62===p||39===p||34===p||37===p||64===p||96===p)return!1;if((63===p||45===p)&&(ok(n=e.input.charCodeAt(e.position+1))||r&&ak(n)))return!1;for(e.kind="scalar",e.result="",o=a=e.position,i=!1;0!==p;){if(58===p){if(ok(n=e.input.charCodeAt(e.position+1))||r&&ak(n))break}else if(35===p){if(ok(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&Sk(e)||r&&ak(p))break;if(rk(p)){if(s=e.line,l=e.lineStart,c=e.lineIndent,kk(e,!1,-1),e.lineIndent>=t){i=!0,p=e.input.charCodeAt(e.position);continue}e.position=a,e.line=s,e.lineStart=l,e.lineIndent=c;break}}i&&(bk(e,o,a,!1),Ak(e,e.line-s),o=a=e.position,i=!1),nk(p)||(a=e.position+1),p=e.input.charCodeAt(++e.position)}return bk(e,o,a,!1),!!e.result||(e.kind=u,e.result=d,!1)}(e,d,1===r)&&(y=!0,null===e.tag&&(e.tag="?")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===f&&(y=s&&Ek(e,h))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&yk(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,c=e.implicitTypes.length;l<c;l+=1)if((u=e.implicitTypes[l]).resolve(e.result)){e.result=u.construct(e.result),e.tag=u.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(J$.call(e.typeMap[e.kind||"fallback"],e.tag))u=e.typeMap[e.kind||"fallback"][e.tag];else for(u=null,l=0,c=(p=e.typeMap.multi[e.kind||"fallback"]).length;l<c;l+=1)if(e.tag.slice(0,p[l].tag.length)===p[l].tag){u=p[l];break}u||yk(e,"unknown tag !<"+e.tag+">"),null!==e.result&&u.kind!==e.kind&&yk(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+u.kind+'", not "'+e.kind+'"'),u.resolve(e.result,e.tag)?(e.result=u.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):yk(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||y}function _k(e){var t,r,n,o,a=e.position,i=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(o=e.input.charCodeAt(e.position))&&(kk(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==o));){for(i=!0,o=e.input.charCodeAt(++e.position),t=e.position;0!==o&&!ok(o);)o=e.input.charCodeAt(++e.position);for(n=[],(r=e.input.slice(t,e.position)).length<1&&yk(e,"directive name must not be less than one character in length");0!==o;){for(;nk(o);)o=e.input.charCodeAt(++e.position);if(35===o){do{o=e.input.charCodeAt(++e.position)}while(0!==o&&!rk(o));break}if(rk(o))break;for(t=e.position;0!==o&&!ok(o);)o=e.input.charCodeAt(++e.position);n.push(e.input.slice(t,e.position))}0!==o&&$k(e),J$.call(vk,r)?vk[r](e,r,n):gk(e,'unknown document directive "'+r+'"')}kk(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,kk(e,!0,-1)):i&&yk(e,"directives end mark is expected"),Ck(e,e.lineIndent-1,4,!1,!0),kk(e,!0,-1),e.checkLineBreaks&&Z$.test(e.input.slice(a,e.position))&&gk(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Sk(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,kk(e,!0,-1)):e.position<e.length-1&&yk(e,"end of the stream or a document separator is expected")}function jk(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var r=new fk(e,t),n=e.indexOf("\0");for(-1!==n&&(r.position=n,yk(r,"null byte is not allowed in input")),r.input+="\0";32===r.input.charCodeAt(r.position);)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)_k(r);return r.documents}var Ik={loadAll:function(e,t,r){null!==t&&"object"==typeof t&&void 0===r&&(r=t,t=null);var n=jk(e,r);if("function"!=typeof t)return n;for(var o=0,a=n.length;o<a;o+=1)t(n[o])},load:function(e,t){var r=jk(e,t);if(0!==r.length){if(1===r.length)return r[0];throw new p$("expected a single document in the stream, but found more")}}},Pk=Object.prototype.toString,Rk=Object.prototype.hasOwnProperty,Lk=65279,Dk={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Bk=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Fk=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Nk(e){var t,r,n;if(t=e.toString(16).toUpperCase(),e<=255)r="x",n=2;else if(e<=65535)r="u",n=4;else{if(!(e<=4294967295))throw new p$("code point within a string may not be greater than 0xFFFFFFFF");r="U",n=8}return"\\"+r+s$.repeat("0",n-t.length)+t}function zk(e){this.schema=e.schema||K$,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=s$.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var r,n,o,a,i,s,l;if(null===t)return{};for(r={},o=0,a=(n=Object.keys(t)).length;o<a;o+=1)i=n[o],s=String(t[i]),"!!"===i.slice(0,2)&&(i="tag:yaml.org,2002:"+i.slice(2)),(l=e.compiledTypeMap.fallback[i])&&Rk.call(l.styleAliases,s)&&(s=l.styleAliases[s]),r[i]=s;return r}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Uk(e,t){for(var r,n=s$.repeat(" ",t),o=0,a=-1,i="",s=e.length;o<s;)-1===(a=e.indexOf("\n",o))?(r=e.slice(o),o=s):(r=e.slice(o,a+1),o=a+1),r.length&&"\n"!==r&&(i+=n),i+=r;return i}function qk(e,t){return"\n"+s$.repeat(" ",e.indent*t)}function Mk(e){return 32===e||9===e}function Hk(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==Lk||65536<=e&&e<=1114111}function Wk(e){return Hk(e)&&e!==Lk&&13!==e&&10!==e}function Vk(e,t,r){var n=Wk(e),o=n&&!Mk(e);return(r?n:n&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!o)||Wk(t)&&!Mk(t)&&35===e||58===t&&o}function Gk(e,t){var r,n=e.charCodeAt(t);return n>=55296&&n<=56319&&t+1<e.length&&(r=e.charCodeAt(t+1))>=56320&&r<=57343?1024*(n-55296)+r-56320+65536:n}function Kk(e){return/^\n* /.test(e)}function Jk(e,t,r,n,o){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==Bk.indexOf(t)||Fk.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var a=e.indent*Math.max(1,r),i=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a),s=n||e.flowLevel>-1&&r>=e.flowLevel;switch(function(e,t,r,n,o,a,i,s){var l,c=0,p=null,u=!1,d=!1,h=-1!==n,f=-1,m=function(e){return Hk(e)&&e!==Lk&&!Mk(e)&&45!==e&&63!==e&&58!==e&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e&&35!==e&&38!==e&&42!==e&&33!==e&&124!==e&&61!==e&&62!==e&&39!==e&&34!==e&&37!==e&&64!==e&&96!==e}(Gk(e,0))&&function(e){return!Mk(e)&&58!==e}(Gk(e,e.length-1));if(t||i)for(l=0;l<e.length;c>=65536?l+=2:l++){if(!Hk(c=Gk(e,l)))return 5;m=m&&Vk(c,p,s),p=c}else{for(l=0;l<e.length;c>=65536?l+=2:l++){if(10===(c=Gk(e,l)))u=!0,h&&(d=d||l-f-1>n&&" "!==e[f+1],f=l);else if(!Hk(c))return 5;m=m&&Vk(c,p,s),p=c}d=d||h&&l-f-1>n&&" "!==e[f+1]}return u||d?r>9&&Kk(e)?5:i?2===a?5:2:d?4:3:!m||i||o(e)?2===a?5:2:1}(t,s,e.indent,i,(function(t){return function(e,t){var r,n;for(r=0,n=e.implicitTypes.length;r<n;r+=1)if(e.implicitTypes[r].resolve(t))return!0;return!1}(e,t)}),e.quotingType,e.forceQuotes&&!n,o)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+Yk(t,e.indent)+Zk(Uk(t,a));case 4:return">"+Yk(t,e.indent)+Zk(Uk(function(e,t){for(var r,n,o,a=/(\n+)([^\n]*)/g,i=(o=-1!==(o=e.indexOf("\n"))?o:e.length,a.lastIndex=o,Qk(e.slice(0,o),t)),s="\n"===e[0]||" "===e[0];n=a.exec(e);){var l=n[1],c=n[2];r=" "===c[0],i+=l+(s||r||""===c?"":"\n")+Qk(c,t),s=r}return i}(t,i),a));case 5:return'"'+function(e){for(var t,r="",n=0,o=0;o<e.length;n>=65536?o+=2:o++)n=Gk(e,o),!(t=Dk[n])&&Hk(n)?(r+=e[o],n>=65536&&(r+=e[o+1])):r+=t||Nk(n);return r}(t)+'"';default:throw new p$("impossible error: invalid scalar style")}}()}function Yk(e,t){var r=Kk(e)?String(t):"",n="\n"===e[e.length-1];return r+(!n||"\n"!==e[e.length-2]&&"\n"!==e?n?"":"-":"+")+"\n"}function Zk(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function Qk(e,t){if(""===e||" "===e[0])return e;for(var r,n,o=/ [^ ]/g,a=0,i=0,s=0,l="";r=o.exec(e);)(s=r.index)-a>t&&(n=i>a?i:s,l+="\n"+e.slice(a,n),a=n+1),i=s;return l+="\n",e.length-a>t&&i>a?l+=e.slice(a,i)+"\n"+e.slice(i+1):l+=e.slice(a),l.slice(1)}function Xk(e,t,r,n){var o,a,i,s="",l=e.tag;for(o=0,a=r.length;o<a;o+=1)i=r[o],e.replacer&&(i=e.replacer.call(r,String(o),i)),(tS(e,t+1,i,!0,!0,!1,!0)||void 0===i&&tS(e,t+1,null,!0,!0,!1,!0))&&(n&&""===s||(s+=qk(e,t)),e.dump&&10===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=l,e.dump=s||"[]"}function eS(e,t,r){var n,o,a,i,s,l;for(a=0,i=(o=r?e.explicitTypes:e.implicitTypes).length;a<i;a+=1)if(((s=o[a]).instanceOf||s.predicate)&&(!s.instanceOf||"object"==typeof t&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(r?s.multi&&s.representName?e.tag=s.representName(t):e.tag=s.tag:e.tag="?",s.represent){if(l=e.styleMap[s.tag]||s.defaultStyle,"[object Function]"===Pk.call(s.represent))n=s.represent(t,l);else{if(!Rk.call(s.represent,l))throw new p$("!<"+s.tag+'> tag resolver accepts not "'+l+'" style');n=s.represent[l](t,l)}e.dump=n}return!0}return!1}function tS(e,t,r,n,o,a,i){e.tag=null,e.dump=r,eS(e,r,!1)||eS(e,r,!0);var s,l=Pk.call(e.dump),c=n;n&&(n=e.flowLevel<0||e.flowLevel>t);var p,u,d="[object Object]"===l||"[object Array]"===l;if(d&&(u=-1!==(p=e.duplicates.indexOf(r))),(null!==e.tag&&"?"!==e.tag||u||2!==e.indent&&t>0)&&(o=!1),u&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(d&&u&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),"[object Object]"===l)n&&0!==Object.keys(e.dump).length?(function(e,t,r,n){var o,a,i,s,l,c,p="",u=e.tag,d=Object.keys(r);if(!0===e.sortKeys)d.sort();else if("function"==typeof e.sortKeys)d.sort(e.sortKeys);else if(e.sortKeys)throw new p$("sortKeys must be a boolean or a function");for(o=0,a=d.length;o<a;o+=1)c="",n&&""===p||(c+=qk(e,t)),s=r[i=d[o]],e.replacer&&(s=e.replacer.call(r,i,s)),tS(e,t+1,i,!0,!0,!0)&&((l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?c+="?":c+="? "),c+=e.dump,l&&(c+=qk(e,t)),tS(e,t+1,s,!0,l)&&(e.dump&&10===e.dump.charCodeAt(0)?c+=":":c+=": ",p+=c+=e.dump));e.tag=u,e.dump=p||"{}"}(e,t,e.dump,o),u&&(e.dump="&ref_"+p+e.dump)):(function(e,t,r){var n,o,a,i,s,l="",c=e.tag,p=Object.keys(r);for(n=0,o=p.length;n<o;n+=1)s="",""!==l&&(s+=", "),e.condenseFlow&&(s+='"'),i=r[a=p[n]],e.replacer&&(i=e.replacer.call(r,a,i)),tS(e,t,a,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),tS(e,t,i,!1,!1)&&(l+=s+=e.dump));e.tag=c,e.dump="{"+l+"}"}(e,t,e.dump),u&&(e.dump="&ref_"+p+" "+e.dump));else if("[object Array]"===l)n&&0!==e.dump.length?(e.noArrayIndent&&!i&&t>0?Xk(e,t-1,e.dump,o):Xk(e,t,e.dump,o),u&&(e.dump="&ref_"+p+e.dump)):(function(e,t,r){var n,o,a,i="",s=e.tag;for(n=0,o=r.length;n<o;n+=1)a=r[n],e.replacer&&(a=e.replacer.call(r,String(n),a)),(tS(e,t,a,!1,!1)||void 0===a&&tS(e,t,null,!1,!1))&&(""!==i&&(i+=","+(e.condenseFlow?"":" ")),i+=e.dump);e.tag=s,e.dump="["+i+"]"}(e,t,e.dump),u&&(e.dump="&ref_"+p+" "+e.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(e.skipInvalid)return!1;throw new p$("unacceptable kind of an object to dump "+l)}"?"!==e.tag&&Jk(e,e.dump,t,a,c)}null!==e.tag&&"?"!==e.tag&&(s=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),s="!"===e.tag[0]?"!"+s:"tag:yaml.org,2002:"===s.slice(0,18)?"!!"+s.slice(18):"!<"+s+">",e.dump=s+" "+e.dump)}return!0}function rS(e,t){var r,n,o=[],a=[];for(nS(e,o,a),r=0,n=a.length;r<n;r+=1)t.duplicates.push(o[a[r]]);t.usedDuplicates=new Array(n)}function nS(e,t,r){var n,o,a;if(null!==e&&"object"==typeof e)if(-1!==(o=t.indexOf(e)))-1===r.indexOf(o)&&r.push(o);else if(t.push(e),Array.isArray(e))for(o=0,a=e.length;o<a;o+=1)nS(e[o],t,r);else for(o=0,a=(n=Object.keys(e)).length;o<a;o+=1)nS(e[n[o]],t,r)}function oS(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var aS={Type:y$,Schema:b$,FAILSAFE_SCHEMA:k$,JSON_SCHEMA:P$,CORE_SCHEMA:R$,DEFAULT_SCHEMA:K$,load:Ik.load,loadAll:Ik.loadAll,dump:function(e,t){var r=new zk(t=t||{});r.noRefs||rS(e,r);var n=e;return r.replacer&&(n=r.replacer.call({"":n},"",n)),tS(r,0,n,!0,!0)?r.dump+"\n":""},YAMLException:p$,types:{binary:z$,float:I$,map:$$,null:S$,pairs:W$,set:G$,timestamp:B$,bool:A$,int:C$,merge:F$,omap:M$,seq:w$,str:x$},safeLoad:oS("safeLoad","load"),safeLoadAll:oS("safeLoadAll","loadAll"),safeDump:oS("safeDump","dump")};const iS="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window,{FormData:sS,Blob:lS,File:cS}=iS;function pS(e){return function(e){if(wh(e))return Af(e)}(e)||function(e){if(void 0!==Xd&&null!=xh(e)||null!=e["@@iterator"])return Sf(e)}(e)||Ef(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var uS=Uh,dS=function(e){return":/?#[]@!$&'()*+,;=".indexOf(e)>-1},hS=function(e){return/^[a-z0-9\-._~]+$/i.test(e)};function fS(e){var t,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).escape,n=arguments.length>2?arguments[2]:void 0;return"number"==typeof e&&(e=e.toString()),"string"==typeof e&&e.length&&r?n?JSON.parse(e):$b(t=pS(e)).call(t,(function(e){var t,n;if(hS(e))return e;if(dS(e)&&"unsafe"===r)return e;var o=new TextEncoder;return $b(t=$b(n=Yv(o.encode(e))).call(n,(function(e){var t;return uS(t="0".concat(e.toString(16).toUpperCase())).call(t,-2)}))).call(t,(function(e){return"%".concat(e)})).join("")})).join(""):e}function mS(e){var t=e.value;return Array.isArray(t)?function(e){var t=e.key,r=e.value,n=e.style,o=e.explode,a=e.escape,i=function(e){return fS(e,{escape:a})};if("simple"===n)return $b(r).call(r,(function(e){return i(e)})).join(",");if("label"===n)return".".concat($b(r).call(r,(function(e){return i(e)})).join("."));if("matrix"===n)return $b(r).call(r,(function(e){return i(e)})).reduce((function(e,r){var n,a,i;return!e||o?Tb(a=Tb(i="".concat(e||"",";")).call(i,t,"=")).call(a,r):Tb(n="".concat(e,",")).call(n,r)}),"");if("form"===n){var s=o?"&".concat(t,"="):",";return $b(r).call(r,(function(e){return i(e)})).join(s)}if("spaceDelimited"===n){var l=o?"".concat(t,"="):"";return $b(r).call(r,(function(e){return i(e)})).join(" ".concat(l))}if("pipeDelimited"===n){var c=o?"".concat(t,"="):"";return $b(r).call(r,(function(e){return i(e)})).join("|".concat(c))}}(e):"object"===Cf(t)?function(e){var t=e.key,r=e.value,n=e.style,o=e.explode,a=e.escape,i=function(e){return fS(e,{escape:a})},s=kb(r);return"simple"===n?s.reduce((function(e,t){var n,a,s,l=i(r[t]),c=o?"=":",",p=e?"".concat(e,","):"";return Tb(n=Tb(a=Tb(s="".concat(p)).call(s,t)).call(a,c)).call(n,l)}),""):"label"===n?s.reduce((function(e,t){var n,a,s,l=i(r[t]),c=o?"=":".",p=e?"".concat(e,"."):".";return Tb(n=Tb(a=Tb(s="".concat(p)).call(s,t)).call(a,c)).call(n,l)}),""):"matrix"===n&&o?s.reduce((function(e,t){var n,o,a=i(r[t]),s=e?"".concat(e,";"):";";return Tb(n=Tb(o="".concat(s)).call(o,t,"=")).call(n,a)}),""):"matrix"===n?s.reduce((function(e,n){var o,a,s=i(r[n]),l=e?"".concat(e,","):";".concat(t,"=");return Tb(o=Tb(a="".concat(l)).call(a,n,",")).call(o,s)}),""):"form"===n?s.reduce((function(e,t){var n,a,s,l,c=i(r[t]),p=e?Tb(n="".concat(e)).call(n,o?"&":","):"",u=o?"=":",";return Tb(a=Tb(s=Tb(l="".concat(p)).call(l,t)).call(s,u)).call(a,c)}),""):void 0}(e):function(e){var t,r=e.key,n=e.value,o=e.style,a=e.escape,i=function(e){return fS(e,{escape:a})};return"simple"===o?i(n):"label"===o?".".concat(i(n)):"matrix"===o?Tb(t=";".concat(r,"=")).call(t,i(n)):"form"===o||"deepObject"===o?i(n):void 0}(e)}var yS=function(e,t){t.body=e},gS={serializeRes:wS,mergeInQueryOrForm:_S};function vS(e){return bS.apply(this,arguments)}function bS(){return(bS=Sv(Ev.mark((function e(t){var r,n,o,a,i,s=arguments;return Ev.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.length>1&&void 0!==s[1]?s[1]:{},"object"===Cf(t)&&(t=(r=t).url),r.headers=r.headers||{},gS.mergeInQueryOrForm(r),r.headers&&kb(r.headers).forEach((function(e){var t=r.headers[e];"string"==typeof t&&(r.headers[e]=t.replace(/\n+/g," "))})),!r.requestInterceptor){e.next=12;break}return e.next=8,r.requestInterceptor(r);case 8:if(e.t0=e.sent,e.t0){e.next=11;break}e.t0=r;case 11:r=e.t0;case 12:return n=r.headers["content-type"]||r.headers["Content-Type"],/multipart\/form-data/i.test(n)&&r.body instanceof sS&&(delete r.headers["content-type"],delete r.headers["Content-Type"]),e.prev=14,e.next=17,(r.userFetch||fetch)(r.url,r);case 17:return o=e.sent,e.next=20,gS.serializeRes(o,t,r);case 20:if(o=e.sent,!r.responseInterceptor){e.next=28;break}return e.next=24,r.responseInterceptor(o);case 24:if(e.t1=e.sent,e.t1){e.next=27;break}e.t1=o;case 27:o=e.t1;case 28:e.next=39;break;case 30:if(e.prev=30,e.t2=e.catch(14),o){e.next=34;break}throw e.t2;case 34:throw(a=new Error(o.statusText||"response status is ".concat(o.status))).status=o.status,a.statusCode=o.status,a.responseError=e.t2,a;case 39:if(o.ok){e.next=45;break}throw(i=new Error(o.statusText||"response status is ".concat(o.status))).status=o.status,i.statusCode=o.status,i.response=o,i;case 45:return e.abrupt("return",o);case 46:case"end":return e.stop()}}),e,null,[[14,30]])})))).apply(this,arguments)}var xS=function(){return/(json|xml|yaml|text)\b/.test(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")};function wS(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).loadSpec,n=void 0!==r&&r,o={ok:e.ok,url:e.url||t,status:e.status,statusText:e.statusText,headers:$S(e.headers)},a=o.headers["content-type"],i=n||xS(a);return(i?e.text:e.blob||e.buffer).call(e).then((function(e){if(o.text=e,o.data=e,i)try{var t=function(e,t){return t&&(0===t.indexOf("application/json")||t.indexOf("+json")>0)?JSON.parse(e):aS.load(e)}(e,a);o.body=t,o.obj=t}catch(e){o.parseError=e}return o}))}function $S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"function"!=typeof Jv(e)?{}:Yv(Jv(e).call(e)).reduce((function(e,t){var r=_f(t,2),n=r[0],o=r[1];return e[n]=function(e){return Uv(e).call(e,", ")?e.split(", "):e}(o),e}),{})}function kS(e,t){return t||"undefined"==typeof navigator||(t=navigator),t&&"ReactNative"===t.product?!(!e||"object"!==Cf(e)||"string"!=typeof e.uri):void 0!==cS&&e instanceof cS||void 0!==lS&&e instanceof lS||!!ArrayBuffer.isView(e)||null!==e&&"object"===Cf(e)&&"function"==typeof e.pipe}function SS(e,t){return Array.isArray(e)&&e.some((function(e){return kS(e,t)}))}var AS={form:",",spaceDelimited:"%20",pipeDelimited:"|"},ES={csv:",",ssv:"%20",tsv:"%09",pipes:"|"};function OS(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t.collectionFormat,o=t.allowEmptyValue,a=t.serializationOption,i=t.encoding,s="object"!==Cf(t)||Array.isArray(t)?t:t.value,l=r?function(e){return e.toString()}:function(e){return encodeURIComponent(e)},c=l(e);return void 0===s&&o?[[c,""]]:kS(s)||SS(s)?[[c,s]]:a?TS(e,s,r,a):i?[Cf(i.style),Cf(i.explode),Cf(i.allowReserved)].some((function(e){return"undefined"!==e}))?TS(e,s,r,{style:i.style,explode:i.explode,allowReserved:i.allowReserved}):i.contentType?"application/json"===i.contentType?[[c,l("string"==typeof s?s:yb(s))]]:[[c,l(s.toString())]]:"object"!==Cf(s)?[[c,l(s)]]:Array.isArray(s)&&s.every((function(e){return"object"!==Cf(e)}))?[[c,$b(s).call(s,l).join(",")]]:[[c,l(yb(s))]]:"object"!==Cf(s)?[[c,l(s)]]:Array.isArray(s)?"multi"===n?[[c,$b(s).call(s,l)]]:[[c,$b(s).call(s,l).join(ES[n||"csv"])]]:[[c,""]]}function TS(e,t,r,n){var o,a,i,s=n.style||"form",l=void 0===n.explode?"form"===s:n.explode,c=!r&&(n&&n.allowReserved?"unsafe":"reserved"),p=function(e){return fS(e,{escape:c})},u=r?function(e){return e}:function(e){return fS(e,{escape:c})};return"object"!==Cf(t)?[[u(e),p(t)]]:Array.isArray(t)?l?[[u(e),$b(t).call(t,p)]]:[[u(e),$b(t).call(t,p).join(AS[s])]]:"deepObject"===s?$b(a=kb(t)).call(a,(function(r){var n;return[u(Tb(n="".concat(e,"[")).call(n,r,"]")),p(t[r])]})):l?$b(i=kb(t)).call(i,(function(e){return[u(e),p(t[e])]})):[[u(e),$b(o=kb(t)).call(o,(function(e){var r;return[Tb(r="".concat(u(e),",")).call(r,p(t[e]))]})).join(",")]]}function CS(e){var t=kb(e).reduce((function(t,r){var n,o=Of(OS(r,e[r]));try{for(o.s();!(n=o.n()).done;){var a=_f(n.value,2),i=a[0],s=a[1];t[i]=s}}catch(e){o.e(e)}finally{o.f()}return t}),{});return a$.stringify(t,{encode:!1,indices:!1})||""}function _S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,r=void 0===t?"":t,n=e.query,o=e.form;if(o){var a=kb(o).some((function(e){var t=o[e].value;return kS(t)||SS(t)})),i=e.headers["content-type"]||e.headers["Content-Type"];if(a||/multipart\/form-data/i.test(i)){var s=function(e){return Bb(e).reduce((function(e,t){var r,n=_f(t,2),o=Of(OS(n[0],n[1],!0));try{for(o.s();!(r=o.n()).done;){var a=_f(r.value,2),i=a[0],s=a[1];if(Array.isArray(s)){var l,c=Of(s);try{for(c.s();!(l=c.n()).done;){var p=l.value;if(ArrayBuffer.isView(p)){var u=new lS([p]);e.append(i,u)}else e.append(i,p)}}catch(e){c.e(e)}finally{c.f()}}else if(ArrayBuffer.isView(s)){var d=new lS([s]);e.append(i,d)}else e.append(i,s)}}catch(e){o.e(e)}finally{o.f()}return e}),new sS)}(e.form);yS(s,e)}else e.body=CS(o);delete e.form}if(n){var l=_f(r.split("?"),2),c=l[0],p=l[1],u="";if(p){var d=a$.parse(p);kb(n).forEach((function(e){return delete d[e]})),u=a$.stringify(d,{encode:!0})}var h=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=Fb(t).call(t,(function(e){return e})).join("&");return n?"?".concat(n):""}(u,CS(n));e.url=c+h,delete e.query}return e}function jS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function IS(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),ku(e,n.key,n)}}function PS(e,t,r){return t&&IS(e.prototype,t),r&&IS(e,r),ku(e,"prototype",{writable:!1}),e}var RS=Eo,LS=Ps.find,DS=!0;"find"in[]&&Array(1).find((function(){DS=!1})),RS({target:"Array",proto:!0,forced:DS},{find:function(e){return LS(this,e,arguments.length>1?arguments[1]:void 0)}});var BS=ac("Array").find,FS=ir,NS=BS,zS=Array.prototype,US=vv,qS=Eo,MS=pt,HS=Po,WS=Co,VS=Fo,GS=Wr,KS=As,JS=Qa,YS=rc("splice"),ZS=MS.TypeError,QS=Math.max,XS=Math.min;qS({target:"Array",proto:!0,forced:!YS},{splice:function(e,t){var r,n,o,a,i,s,l=GS(this),c=VS(l),p=HS(e,c),u=arguments.length;if(0===u?r=n=0:1===u?(r=0,n=c-p):(r=u-2,n=XS(QS(WS(t),0),c-p)),c+r-n>9007199254740991)throw ZS("Maximum allowed length exceeded");for(o=KS(l,n),a=0;a<n;a++)(i=p+a)in l&&JS(o,a,l[i]);if(o.length=n,r<n){for(a=p;a<c-n;a++)s=a+r,(i=a+n)in l?l[s]=l[i]:delete l[s];for(a=c;a>c-n+r;a--)delete l[a-1]}else if(r>n)for(a=c-n;a>p;a--)s=a+r-1,(i=a+n-1)in l?l[s]=l[i]:delete l[s];for(a=0;a<r;a++)l[a+p]=arguments[a+2];return l.length=c-n+r,o}});var eA,tA=ac("Array").splice,rA=ir,nA=tA,oA=Array.prototype,aA=globalThis&&globalThis.__extends||(eA=function(e,t){return(eA=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}eA(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),iA=Object.prototype.hasOwnProperty;function sA(e,t){return iA.call(e,t)}function lA(e){if(Array.isArray(e)){for(var t=new Array(e.length),r=0;r<t.length;r++)t[r]=""+r;return t}if(Object.keys)return Object.keys(e);for(var n in t=[],e)sA(e,n)&&t.push(n);return t}function cA(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e));case"undefined":return null;default:return e}}function pA(e){for(var t,r=0,n=e.length;r<n;){if(!((t=e.charCodeAt(r))>=48&&t<=57))return!1;r++}return!0}function uA(e){return-1===e.indexOf("/")&&-1===e.indexOf("~")?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function dA(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}function hA(e){if(void 0===e)return!0;if(e)if(Array.isArray(e)){for(var t=0,r=e.length;t<r;t++)if(hA(e[t]))return!0}else if("object"==typeof e){var n=lA(e),o=n.length;for(t=0;t<o;t++)if(hA(e[n[t]]))return!0}return!1}function fA(e,t){var r=[e];for(var n in t){var o="object"==typeof t[n]?JSON.stringify(t[n],null,2):t[n];void 0!==o&&r.push(n+": "+o)}return r.join("\n")}var mA=function(e){function t(t,r,n,o,a){var i=this.constructor,s=e.call(this,fA(t,{name:r,index:n,operation:o,tree:a}))||this;return s.name=r,s.index=n,s.operation=o,s.tree=a,Object.setPrototypeOf(s,i.prototype),s.message=fA(t,{name:r,index:n,operation:o,tree:a}),s}return aA(t,e),t}(Error),yA=mA,gA=cA,vA={add:function(e,t,r){return e[t]=this.value,{newDocument:r}},remove:function(e,t,r){var n=e[t];return delete e[t],{newDocument:r,removed:n}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:function(e,t,r){var n=xA(r,this.path);n&&(n=cA(n));var o=wA(r,{op:"remove",path:this.from}).removed;return wA(r,{op:"add",path:this.path,value:o}),{newDocument:r,removed:n}},copy:function(e,t,r){var n=xA(r,this.from);return wA(r,{op:"add",path:this.path,value:cA(n)}),{newDocument:r}},test:function(e,t,r){return{newDocument:r,test:AA(e[t],this.value)}},_get:function(e,t,r){return this.value=e[t],{newDocument:r}}},bA={add:function(e,t,r){return pA(t)?e.splice(t,0,this.value):e[t]=this.value,{newDocument:r,index:t}},remove:function(e,t,r){return{newDocument:r,removed:e.splice(t,1)[0]}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:vA.move,copy:vA.copy,test:vA.test,_get:vA._get};function xA(e,t){if(""==t)return e;var r={op:"_get",path:t};return wA(e,r),r.value}function wA(e,t,r,n,o,a){if(void 0===r&&(r=!1),void 0===n&&(n=!0),void 0===o&&(o=!0),void 0===a&&(a=0),r&&("function"==typeof r?r(t,0,e,t.path):kA(t,0)),""===t.path){var i={newDocument:e};if("add"===t.op)return i.newDocument=t.value,i;if("replace"===t.op)return i.newDocument=t.value,i.removed=e,i;if("move"===t.op||"copy"===t.op)return i.newDocument=xA(e,t.from),"move"===t.op&&(i.removed=e),i;if("test"===t.op){if(i.test=AA(e,t.value),!1===i.test)throw new yA("Test operation failed","TEST_OPERATION_FAILED",a,t,e);return i.newDocument=e,i}if("remove"===t.op)return i.removed=e,i.newDocument=null,i;if("_get"===t.op)return t.value=e,i;if(r)throw new yA("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",a,t,e);return i}n||(e=cA(e));var s=(t.path||"").split("/"),l=e,c=1,p=s.length,u=void 0,d=void 0,h=void 0;for(h="function"==typeof r?r:kA;;){if((d=s[c])&&-1!=d.indexOf("~")&&(d=dA(d)),o&&"__proto__"==d)throw new TypeError("JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(r&&void 0===u&&(void 0===l[d]?u=s.slice(0,c).join("/"):c==p-1&&(u=t.path),void 0!==u&&h(t,0,e,u)),c++,Array.isArray(l)){if("-"===d)d=l.length;else{if(r&&!pA(d))throw new yA("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",a,t,e);pA(d)&&(d=~~d)}if(c>=p){if(r&&"add"===t.op&&d>l.length)throw new yA("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",a,t,e);if(!1===(i=bA[t.op].call(t,l,d,e)).test)throw new yA("Test operation failed","TEST_OPERATION_FAILED",a,t,e);return i}}else if(c>=p){if(!1===(i=vA[t.op].call(t,l,d,e)).test)throw new yA("Test operation failed","TEST_OPERATION_FAILED",a,t,e);return i}if(l=l[d],r&&c<p&&(!l||"object"!=typeof l))throw new yA("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",a,t,e)}}function $A(e,t,r,n,o){if(void 0===n&&(n=!0),void 0===o&&(o=!0),r&&!Array.isArray(t))throw new yA("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");n||(e=cA(e));for(var a=new Array(t.length),i=0,s=t.length;i<s;i++)a[i]=wA(e,t[i],r,!0,o,i),e=a[i].newDocument;return a.newDocument=e,a}function kA(e,t,r,n){if("object"!=typeof e||null===e||Array.isArray(e))throw new yA("Operation is not an object","OPERATION_NOT_AN_OBJECT",t,e,r);if(!vA[e.op])throw new yA("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",t,e,r);if("string"!=typeof e.path)throw new yA("Operation `path` property is not a string","OPERATION_PATH_INVALID",t,e,r);if(0!==e.path.indexOf("/")&&e.path.length>0)throw new yA('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",t,e,r);if(("move"===e.op||"copy"===e.op)&&"string"!=typeof e.from)throw new yA("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",t,e,r);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&void 0===e.value)throw new yA("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",t,e,r);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&hA(e.value))throw new yA("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",t,e,r);if(r)if("add"==e.op){var o=e.path.split("/").length,a=n.split("/").length;if(o!==a+1&&o!==a)throw new yA("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",t,e,r)}else if("replace"===e.op||"remove"===e.op||"_get"===e.op){if(e.path!==n)throw new yA("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",t,e,r)}else if("move"===e.op||"copy"===e.op){var i=SA([{op:"_get",path:e.from,value:void 0}],r);if(i&&"OPERATION_PATH_UNRESOLVABLE"===i.name)throw new yA("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",t,e,r)}}function SA(e,t,r){try{if(!Array.isArray(e))throw new yA("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(t)$A(cA(t),cA(e),r||!0);else{r=r||kA;for(var n=0;n<e.length;n++)r(e[n],n,t,void 0)}}catch(e){if(e instanceof yA)return e;throw e}}function AA(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var r,n,o,a=Array.isArray(e),i=Array.isArray(t);if(a&&i){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!AA(e[r],t[r]))return!1;return!0}if(a!=i)return!1;var s=Object.keys(e);if((n=s.length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!t.hasOwnProperty(s[r]))return!1;for(r=n;0!=r--;)if(!AA(e[o=s[r]],t[o]))return!1;return!0}return e!=e&&t!=t}var EA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",JsonPatchError:yA,deepClone:gA,getValueByPointer:xA,applyOperation:wA,applyPatch:$A,applyReducer:function(e,t,r){var n=wA(e,t);if(!1===n.test)throw new yA("Test operation failed","TEST_OPERATION_FAILED",r,t,e);return n.newDocument},validator:kA,validate:SA,_areEquals:AA}),OA=new WeakMap,TA=function(e){this.observers=new Map,this.obj=e},CA=function(e,t){this.callback=e,this.observer=t};function _A(e,t){void 0===t&&(t=!1);var r=OA.get(e.object);jA(r.value,e.object,e.patches,"",t),e.patches.length&&$A(r.value,e.patches);var n=e.patches;return n.length>0&&(e.patches=[],e.callback&&e.callback(n)),n}function jA(e,t,r,n,o){if(t!==e){"function"==typeof t.toJSON&&(t=t.toJSON());for(var a=lA(t),i=lA(e),s=!1,l=i.length-1;l>=0;l--){var c=e[u=i[l]];if(!sA(t,u)||void 0===t[u]&&void 0!==c&&!1===Array.isArray(t))Array.isArray(e)===Array.isArray(t)?(o&&r.push({op:"test",path:n+"/"+uA(u),value:cA(c)}),r.push({op:"remove",path:n+"/"+uA(u)}),s=!0):(o&&r.push({op:"test",path:n,value:e}),r.push({op:"replace",path:n,value:t}));else{var p=t[u];"object"==typeof c&&null!=c&&"object"==typeof p&&null!=p&&Array.isArray(c)===Array.isArray(p)?jA(c,p,r,n+"/"+uA(u),o):c!==p&&(o&&r.push({op:"test",path:n+"/"+uA(u),value:cA(c)}),r.push({op:"replace",path:n+"/"+uA(u),value:cA(p)}))}}if(s||a.length!=i.length)for(l=0;l<a.length;l++){var u;sA(e,u=a[l])||void 0===t[u]||r.push({op:"add",path:n+"/"+uA(u),value:cA(t[u])})}}}var IA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",unobserve:function(e,t){t.unobserve()},observe:function(e,t){var r,n=function(e){return OA.get(e)}(e);if(n){var o=function(e,t){return e.observers.get(t)}(n,t);r=o&&o.observer}else n=new TA(e),OA.set(e,n);if(r)return r;if(r={},n.value=cA(e),t){r.callback=t,r.next=null;var a=function(){_A(r)},i=function(){clearTimeout(r.next),r.next=setTimeout(a)};"undefined"!=typeof window&&(window.addEventListener("mouseup",i),window.addEventListener("keyup",i),window.addEventListener("mousedown",i),window.addEventListener("keydown",i),window.addEventListener("change",i))}return r.patches=[],r.object=e,r.unobserve=function(){_A(r),clearTimeout(r.next),function(e,t){e.observers.delete(t.callback)}(n,r),"undefined"!=typeof window&&(window.removeEventListener("mouseup",i),window.removeEventListener("keyup",i),window.removeEventListener("mousedown",i),window.removeEventListener("keydown",i),window.removeEventListener("change",i))},n.observers.set(t,new CA(t,r)),r},generate:_A,compare:function(e,t,r){void 0===r&&(r=!1);var n=[];return jA(e,t,n,"",r),n}});Object.assign({},EA,IA,{JsonPatchError:mA,deepClone:cA,escapePathComponent:uA,unescapePathComponent:dA});var PA=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===RA}(e)}(e)},RA="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function LA(e,t){return!1!==t.clone&&t.isMergeableObject(e)?NA((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function DA(e,t,r){return e.concat(t).map((function(e){return LA(e,r)}))}function BA(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function FA(e,t){try{return t in e}catch(e){return!1}}function NA(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||DA,r.isMergeableObject=r.isMergeableObject||PA,r.cloneUnlessOtherwiseSpecified=LA;var n=Array.isArray(t);return n===Array.isArray(e)?n?r.arrayMerge(e,t,r):function(e,t,r){var n={};return r.isMergeableObject(e)&&BA(e).forEach((function(t){n[t]=LA(e[t],r)})),BA(t).forEach((function(o){(function(e,t){return FA(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(FA(e,o)&&r.isMergeableObject(t[o])?n[o]=function(e,t){if(!t.customMerge)return NA;var r=t.customMerge(e);return"function"==typeof r?r:NA}(o,r)(e[o],t[o],r):n[o]=LA(t[o],r))})),n}(e,t,r):LA(t,r)}NA.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return NA(e,r,t)}),{})};var zA=NA,UA={add:function(e,t){return{op:"add",path:e,value:t}},replace:MA,remove:function(e){return{op:"remove",path:e}},merge:function(e,t){return{type:"mutation",op:"merge",path:e,value:t}},mergeDeep:function(e,t){return{type:"mutation",op:"mergeDeep",path:e,value:t}},context:function(e,t){return{type:"context",path:e,value:t}},getIn:function(e,t){return t.reduce((function(e,t){return void 0!==t&&e?e[t]:e}),e)},applyPatch:function(e,t,r){if(r=r||{},"merge"===(t=Eu(Eu({},t),{},{path:t.path&&qA(t.path)})).op){var n=rE(e,t.path);zu(n,t.value),$A(e,[MA(t.path,n)])}else if("mergeDeep"===t.op){var o=rE(e,t.path),a=zA(o,t.value);e=$A(e,[MA(t.path,a)]).newDocument}else if("add"===t.op&&""===t.path&&YA(t.value)){var i=kb(t.value).reduce((function(e,r){return e.push({op:"add",path:"/".concat(qA(r)),value:t.value[r]}),e}),[]);$A(e,i)}else if("replace"===t.op&&""===t.path){var s=t.value;r.allowMetaPatches&&t.meta&&eE(t)&&(Array.isArray(t.value)||YA(t.value))&&(s=Eu(Eu({},s),t.meta)),e=s}else if($A(e,[t]),r.allowMetaPatches&&t.meta&&eE(t)&&(Array.isArray(t.value)||YA(t.value))){var l=Eu(Eu({},rE(e,t.path)),t.meta);$A(e,[MA(t.path,l)])}return e},parentPathMatch:function(e,t){if(!Array.isArray(t))return!1;for(var r=0,n=t.length;r<n;r+=1)if(t[r]!==e[r])return!1;return!0},flatten:KA,fullyNormalizeArray:function(e){return JA(KA(GA(e)))},normalizeArray:GA,isPromise:function(e){return YA(e)&&ZA(e.then)},forEachNew:function(e,t){try{return HA(e,VA,t)}catch(e){return e}},forEachNewPrimitive:function(e,t){try{return HA(e,WA,t)}catch(e){return e}},isJsonPatch:QA,isContextPatch:function(e){return tE(e)&&"context"===e.type},isPatch:tE,isMutation:XA,isAdditiveMutation:eE,isGenerator:function(e){return"[object GeneratorFunction]"===Object.prototype.toString.call(e)},isFunction:ZA,isObject:YA,isError:function(e){return e instanceof Error}};function qA(e){return Array.isArray(e)?e.length<1?"":"/".concat($b(e).call(e,(function(e){return(e+"").replace(/~/g,"~0").replace(/\//g,"~1")})).join("/")):e}function MA(e,t,r){return{op:"replace",path:e,value:t,meta:r}}function HA(e,t,r){var n;return JA(KA($b(n=Fb(e).call(e,eE)).call(n,(function(e){return t(e.value,r,e.path)}))||[]))}function WA(e,t,r){return r=r||[],Array.isArray(e)?$b(e).call(e,(function(e,n){return WA(e,t,Tb(r).call(r,n))})):YA(e)?$b(n=kb(e)).call(n,(function(n){return WA(e[n],t,Tb(r).call(r,n))})):t(e,r[r.length-1],r);var n}function VA(e,t,r){var n=[];if((r=r||[]).length>0){var o=t(e,r[r.length-1],r);o&&(n=Tb(n).call(n,o))}if(Array.isArray(e)){var a=$b(e).call(e,(function(e,n){return VA(e,t,Tb(r).call(r,n))}));a&&(n=Tb(n).call(n,a))}else if(YA(e)){var i,s=$b(i=kb(e)).call(i,(function(n){return VA(e[n],t,Tb(r).call(r,n))}));s&&(n=Tb(n).call(n,s))}return KA(n)}function GA(e){return Array.isArray(e)?e:[e]}function KA(e){var t;return Tb(t=[]).apply(t,pS($b(e).call(e,(function(e){return Array.isArray(e)?KA(e):e}))))}function JA(e){return Fb(e).call(e,(function(e){return void 0!==e}))}function YA(e){return e&&"object"===Cf(e)}function ZA(e){return e&&"function"==typeof e}function QA(e){if(tE(e)){var t=e.op;return"add"===t||"remove"===t||"replace"===t}return!1}function XA(e){return QA(e)||tE(e)&&"mutation"===e.type}function eE(e){return XA(e)&&("add"===e.op||"replace"===e.op||"merge"===e.op||"mergeDeep"===e.op)}function tE(e){return e&&"object"===Cf(e)}function rE(e,t){try{return xA(e,t)}catch(e){return console.error(e),{}}}var nE={exports:{}},oE=ut((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})),aE=ut,iE=Xt,sE=zt,lE=oE,cE=Object.isExtensible,pE=aE((function(){cE(1)}))||lE?function(e){return!!iE(e)&&(!lE||"ArrayBuffer"!=sE(e))&&(!cE||cE(e))}:cE,uE=!ut((function(){return Object.isExtensible(Object.preventExtensions({}))})),dE=Eo,hE=kt,fE=Ho,mE=Xt,yE=Kr,gE=Yn.f,vE=Wa,bE=Ka,xE=pE,wE=uE,$E=!1,kE=Xr("meta"),SE=0,AE=function(e){gE(e,kE,{value:{objectID:"O"+SE++,weakData:{}}})},EE=nE.exports={enable:function(){EE.enable=function(){},$E=!0;var e=vE.f,t=hE([].splice),r={};r[kE]=1,e(r).length&&(vE.f=function(r){for(var n=e(r),o=0,a=n.length;o<a;o++)if(n[o]===kE){t(n,o,1);break}return n},dE({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:bE.f}))},fastKey:function(e,t){if(!mE(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!yE(e,kE)){if(!xE(e))return"F";if(!t)return"E";AE(e)}return e[kE].objectID},getWeakData:function(e,t){if(!yE(e,kE)){if(!xE(e))return!0;if(!t)return!1;AE(e)}return e[kE].weakData},onFreeze:function(e){return wE&&$E&&xE(e)&&!yE(e,kE)&&AE(e),e}};fE[kE]=!0;var OE=Eo,TE=pt,CE=nE.exports,_E=ut,jE=fo,IE=em,PE=Im,RE=St,LE=Xt,DE=Ci,BE=Yn.f,FE=Ps.forEach,NE=Et,zE=os.set,UE=os.getterFor,qE=kt,ME=Am,HE=nE.exports.getWeakData,WE=ro,VE=Xt,GE=Im,KE=em,JE=Kr,YE=os.set,ZE=os.getterFor,QE=Ps.find,XE=Ps.findIndex,eO=qE([].splice),tO=0,rO=function(e){return e.frozen||(e.frozen=new nO)},nO=function(){this.entries=[]},oO=function(e,t){return QE(e.entries,(function(e){return e[0]===t}))};nO.prototype={get:function(e){var t=oO(this,e);if(t)return t[1]},has:function(e){return!!oO(this,e)},set:function(e,t){var r=oO(this,e);r?r[1]=t:this.entries.push([e,t])},delete:function(e){var t=XE(this.entries,(function(t){return t[0]===e}));return~t&&eO(this.entries,t,1),!!~t}};var aO,iO={getConstructor:function(e,t,r,n){var o=e((function(e,o){GE(e,a),YE(e,{type:t,id:tO++,frozen:void 0}),null!=o&&KE(o,e[n],{that:e,AS_ENTRIES:r})})),a=o.prototype,i=ZE(t),s=function(e,t,r){var n=i(e),o=HE(WE(t),!0);return!0===o?rO(n).set(t,r):o[n.id]=r,e};return ME(a,{delete:function(e){var t=i(this);if(!VE(e))return!1;var r=HE(e);return!0===r?rO(t).delete(e):r&&JE(r,t.id)&&delete r[t.id]},has:function(e){var t=i(this);if(!VE(e))return!1;var r=HE(e);return!0===r?rO(t).has(e):r&&JE(r,t.id)}}),ME(a,r?{get:function(e){var t=i(this);if(VE(e)){var r=HE(e);return!0===r?rO(t).get(e):r?r[t.id]:void 0}},set:function(e,t){return s(this,e,t)}}:{add:function(e){return s(this,e,!0)}}),o}},sO=pt,lO=kt,cO=Am,pO=nE.exports,uO=iO,dO=Xt,hO=pE,fO=os.enforce,mO=zi,yO=!sO.ActiveXObject&&"ActiveXObject"in sO,gO=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},vO=function(e,t,r){var n,o=-1!==e.indexOf("Map"),a=-1!==e.indexOf("Weak"),i=o?"set":"add",s=TE[e],l=s&&s.prototype,c={};if(NE&&RE(s)&&(a||l.forEach&&!_E((function(){(new s).entries().next()})))){var p=(n=t((function(t,r){zE(PE(t,p),{type:e,collection:new s}),null!=r&&IE(r,t[i],{that:t,AS_ENTRIES:o})}))).prototype,u=UE(e);FE(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(e){var t="add"==e||"set"==e;!(e in l)||a&&"clear"==e||jE(p,e,(function(r,n){var o=u(this).collection;if(!t&&a&&!LE(r))return"get"==e&&void 0;var i=o[e](0===r?0:r,n);return t?this:i}))})),a||BE(p,"size",{configurable:!0,get:function(){return u(this).collection.size}})}else n=r.getConstructor(t,e,o,i),CE.enable();return DE(n,e,!1,!0),c[e]=n,OE({global:!0,forced:!0},c),a||r.setStrong(n,e,o),n}("WeakMap",gO,uO);if(mO&&yO){aO=uO.getConstructor(gO,"WeakMap",!0),pO.enable();var bO=vO.prototype,xO=lO(bO.delete),wO=lO(bO.has),$O=lO(bO.get),kO=lO(bO.set);cO(bO,{delete:function(e){if(dO(e)&&!hO(e)){var t=fO(this);return t.frozen||(t.frozen=new aO),xO(this,e)||t.frozen.delete(e)}return xO(this,e)},has:function(e){if(dO(e)&&!hO(e)){var t=fO(this);return t.frozen||(t.frozen=new aO),wO(this,e)||t.frozen.has(e)}return wO(this,e)},get:function(e){if(dO(e)&&!hO(e)){var t=fO(this);return t.frozen||(t.frozen=new aO),wO(this,e)?$O(this,e):t.frozen.get(e)}return $O(this,e)},set:function(e,t){if(dO(e)&&!hO(e)){var r=fO(this);r.frozen||(r.frozen=new aO),wO(this,e)?kO(this,e,t):r.frozen.set(e,t)}else kO(this,e,t);return this}})}var SO=er.WeakMap,AO=ut,EO=un("iterator"),OO=!AO((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach((function(e,n){t.delete("b"),r+=n+e})),!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[EO]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://\u0442\u0435\u0441\u0442").host||"#%D0%B1"!==new URL("http://a#\u0431").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host})),TO=oi,CO=Math.floor,_O=function(e,t){var r=e.length,n=CO(r/2);return r<8?jO(e,t):IO(e,_O(TO(e,0,n),t),_O(TO(e,n),t),t)},jO=function(e,t){for(var r,n,o=e.length,a=1;a<o;){for(n=a,r=e[a];n&&t(e[n-1],r)>0;)e[n]=e[--n];n!==a++&&(e[n]=r)}return e},IO=function(e,t,r,n){for(var o=t.length,a=r.length,i=0,s=0;i<o||s<a;)e[i+s]=i<o&&s<a?n(t[i],r[s])<=0?t[i++]:r[s++]:i<o?t[i++]:r[s++];return e},PO=Eo,RO=pt,LO=ar,DO=Ct,BO=kt,FO=OO,NO=hi,zO=Am,UO=Ci,qO=np,MO=os,HO=Im,WO=St,VO=Kr,GO=Jn,KO=ya,JO=ro,YO=Xt,ZO=ba,QO=Ha,XO=Dt,eT=af,tT=bh,rT=zm,nT=_O,oT=un("iterator"),aT="URLSearchParams",iT="URLSearchParamsIterator",sT=MO.set,lT=MO.getterFor(aT),cT=MO.getterFor(iT),pT=LO("fetch"),uT=LO("Request"),dT=LO("Headers"),hT=uT&&uT.prototype,fT=dT&&dT.prototype,mT=RO.RegExp,yT=RO.TypeError,gT=RO.decodeURIComponent,vT=RO.encodeURIComponent,bT=BO("".charAt),xT=BO([].join),wT=BO([].push),$T=BO("".replace),kT=BO([].shift),ST=BO([].splice),AT=BO("".split),ET=BO("".slice),OT=/\+/g,TT=Array(4),CT=function(e){return TT[e-1]||(TT[e-1]=mT("((?:%[\\da-f]{2}){"+e+"})","gi"))},_T=function(e){try{return gT(e)}catch(t){return e}},jT=function(e){var t=$T(e,OT," "),r=4;try{return gT(t)}catch(e){for(;r;)t=$T(t,CT(r--),_T);return t}},IT=/[!'()~]|%20/g,PT={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},RT=function(e){return PT[e]},LT=function(e){return $T(vT(e),IT,RT)},DT=qO((function(e,t){sT(this,{type:iT,iterator:eT(lT(e).entries),kind:t})}),"Iterator",(function(){var e=cT(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r}),!0),BT=function(e){this.entries=[],this.url=null,void 0!==e&&(YO(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===bT(e,0)?ET(e,1):e:ZO(e)))};BT.prototype={type:aT,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,r,n,o,a,i,s,l=tT(e);if(l)for(r=(t=eT(e,l)).next;!(n=DO(r,t)).done;){if(a=(o=eT(JO(n.value))).next,(i=DO(a,o)).done||(s=DO(a,o)).done||!DO(a,o).done)throw yT("Expected sequence with length 2");wT(this.entries,{key:ZO(i.value),value:ZO(s.value)})}else for(var c in e)VO(e,c)&&wT(this.entries,{key:c,value:ZO(e[c])})},parseQuery:function(e){if(e)for(var t,r,n=AT(e,"&"),o=0;o<n.length;)(t=n[o++]).length&&(r=AT(t,"="),wT(this.entries,{key:jT(kT(r)),value:jT(xT(r,"="))}))},serialize:function(){for(var e,t=this.entries,r=[],n=0;n<t.length;)e=t[n++],wT(r,LT(e.key)+"="+LT(e.value));return xT(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var FT=function(){HO(this,NT),sT(this,new BT(arguments.length>0?arguments[0]:void 0))},NT=FT.prototype;if(zO(NT,{append:function(e,t){rT(arguments.length,2);var r=lT(this);wT(r.entries,{key:ZO(e),value:ZO(t)}),r.updateURL()},delete:function(e){rT(arguments.length,1);for(var t=lT(this),r=t.entries,n=ZO(e),o=0;o<r.length;)r[o].key===n?ST(r,o,1):o++;t.updateURL()},get:function(e){rT(arguments.length,1);for(var t=lT(this).entries,r=ZO(e),n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){rT(arguments.length,1);for(var t=lT(this).entries,r=ZO(e),n=[],o=0;o<t.length;o++)t[o].key===r&&wT(n,t[o].value);return n},has:function(e){rT(arguments.length,1);for(var t=lT(this).entries,r=ZO(e),n=0;n<t.length;)if(t[n++].key===r)return!0;return!1},set:function(e,t){rT(arguments.length,1);for(var r,n=lT(this),o=n.entries,a=!1,i=ZO(e),s=ZO(t),l=0;l<o.length;l++)(r=o[l]).key===i&&(a?ST(o,l--,1):(a=!0,r.value=s));a||wT(o,{key:i,value:s}),n.updateURL()},sort:function(){var e=lT(this);nT(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){for(var t,r=lT(this).entries,n=GO(e,arguments.length>1?arguments[1]:void 0),o=0;o<r.length;)n((t=r[o++]).value,t.key,this)},keys:function(){return new DT(this,"keys")},values:function(){return new DT(this,"values")},entries:function(){return new DT(this,"entries")}},{enumerable:!0}),NO(NT,oT,NT.entries,{name:"entries"}),NO(NT,"toString",(function(){return lT(this).serialize()}),{enumerable:!0}),UO(FT,aT),PO({global:!0,forced:!FO},{URLSearchParams:FT}),!FO&&WO(dT)){var zT=BO(fT.has),UT=BO(fT.set),qT=function(e){if(YO(e)){var t,r=e.body;if(KO(r)===aT)return t=e.headers?new dT(e.headers):new dT,zT(t,"content-type")||UT(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),QO(e,{body:XO(0,ZO(r)),headers:XO(0,t)})}return e};if(WO(pT)&&PO({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return pT(e,arguments.length>1?qT(arguments[1]):{})}}),WO(uT)){var MT=function(e){return HO(this,hT),new uT(e,arguments.length>1?qT(arguments[1]):{})};hT.constructor=MT,MT.prototype=hT,PO({global:!0,forced:!0},{Request:MT})}}var HT=er.URLSearchParams;function WT(e,t){function r(){Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack;for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this.message=r[0],t&&t.apply(this,r)}return r.prototype=new Error,r.prototype.name=e,r.prototype.constructor=r,r}var VT={exports:{}},GT=VT.exports=function(e){return new KT(e)};function KT(e){this.value=e}function JT(e,t,r){var n=[],o=[],a=!0;return function e(i){var s=r?YT(i):i,l={},c=!0,p={node:s,node_:i,path:[].concat(n),parent:o[o.length-1],parents:o,key:n.slice(-1)[0],isRoot:0===n.length,level:n.length,circular:null,update:function(e,t){p.isRoot||(p.parent.node[p.key]=e),p.node=e,t&&(c=!1)},delete:function(e){delete p.parent.node[p.key],e&&(c=!1)},remove:function(e){XT(p.parent.node)?p.parent.node.splice(p.key,1):delete p.parent.node[p.key],e&&(c=!1)},keys:null,before:function(e){l.before=e},after:function(e){l.after=e},pre:function(e){l.pre=e},post:function(e){l.post=e},stop:function(){a=!1},block:function(){c=!1}};if(!a)return p;function u(){if("object"==typeof p.node&&null!==p.node){p.keys&&p.node_===p.node||(p.keys=ZT(p.node)),p.isLeaf=0==p.keys.length;for(var e=0;e<o.length;e++)if(o[e].node_===i){p.circular=o[e];break}}else p.isLeaf=!0,p.keys=null;p.notLeaf=!p.isLeaf,p.notRoot=!p.isRoot}u();var d=t.call(p,p.node);return void 0!==d&&p.update&&p.update(d),l.before&&l.before.call(p,p.node),c?("object"!=typeof p.node||null===p.node||p.circular||(o.push(p),u(),eC(p.keys,(function(t,o){n.push(t),l.pre&&l.pre.call(p,p.node[t],t);var a=e(p.node[t]);r&&tC.call(p.node,t)&&(p.node[t]=a.node),a.isLast=o==p.keys.length-1,a.isFirst=0==o,l.post&&l.post.call(p,a),n.pop()})),o.pop()),l.after&&l.after.call(p,p.node),p):p}(e).node}function YT(e){if("object"==typeof e&&null!==e){var t;if(XT(e))t=[];else if("[object Date]"===QT(e))t=new Date(e.getTime?e.getTime():e);else if(function(e){return"[object RegExp]"===QT(e)}(e))t=new RegExp(e);else if(function(e){return"[object Error]"===QT(e)}(e))t={message:e.message};else if(function(e){return"[object Boolean]"===QT(e)}(e))t=new Boolean(e);else if(function(e){return"[object Number]"===QT(e)}(e))t=new Number(e);else if(function(e){return"[object String]"===QT(e)}(e))t=new String(e);else if(Object.create&&Object.getPrototypeOf)t=Object.create(Object.getPrototypeOf(e));else if(e.constructor===Object)t={};else{var r=e.constructor&&e.constructor.prototype||e.__proto__||{},n=function(){};n.prototype=r,t=new n}return eC(ZT(e),(function(r){t[r]=e[r]})),t}return e}KT.prototype.get=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!tC.call(t,n)){t=void 0;break}t=t[n]}return t},KT.prototype.has=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!tC.call(t,n))return!1;t=t[n]}return!0},KT.prototype.set=function(e,t){for(var r=this.value,n=0;n<e.length-1;n++){var o=e[n];tC.call(r,o)||(r[o]={}),r=r[o]}return r[e[n]]=t,t},KT.prototype.map=function(e){return JT(this.value,e,!0)},KT.prototype.forEach=function(e){return this.value=JT(this.value,e,!1),this.value},KT.prototype.reduce=function(e,t){var r=1===arguments.length,n=r?this.value:t;return this.forEach((function(t){this.isRoot&&r||(n=e.call(this,n,t))})),n},KT.prototype.paths=function(){var e=[];return this.forEach((function(t){e.push(this.path)})),e},KT.prototype.nodes=function(){var e=[];return this.forEach((function(t){e.push(this.node)})),e},KT.prototype.clone=function(){var e=[],t=[];return function r(n){for(var o=0;o<e.length;o++)if(e[o]===n)return t[o];if("object"==typeof n&&null!==n){var a=YT(n);return e.push(n),t.push(a),eC(ZT(n),(function(e){a[e]=r(n[e])})),e.pop(),t.pop(),a}return n}(this.value)};var ZT=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};function QT(e){return Object.prototype.toString.call(e)}var XT=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},eC=function(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)};eC(ZT(KT.prototype),(function(e){GT[e]=function(t){var r=[].slice.call(arguments,1),n=new KT(t);return n[e].apply(n,r)}}));var tC=Object.hasOwnProperty||function(e,t){return t in e},rC=VT.exports,nC=["properties"],oC=["properties"],aC=["definitions","parameters","responses","securityDefinitions","components/schemas","components/responses","components/parameters","components/securitySchemes"],iC=["schema/example","items/example"];function sC(e){var t=e[e.length-1],r=e[e.length-2],n=e.join("/");return nC.indexOf(t)>-1&&-1===oC.indexOf(r)||aC.indexOf(n)>-1||iC.some((function(e){return n.indexOf(e)>-1}))}function lC(e,t){var r,n=_f(e.split("#"),2),o=n[0],a=n[1],i=cd.resolve(o||"",t||"");return a?Tb(r="".concat(i,"#")).call(r,a):i}var cC="application/json, application/yaml",pC=/^([a-z]+:\/\/|\/\/)/i,uC=WT("JSONRefError",(function(e,t,r){this.originalError=r,zu(this,t||{})})),dC={},hC=new SO,fC=[function(e){return"paths"===e[0]&&"responses"===e[3]&&"examples"===e[5]},function(e){return"paths"===e[0]&&"responses"===e[3]&&"content"===e[5]&&"example"===e[7]},function(e){return"paths"===e[0]&&"responses"===e[3]&&"content"===e[5]&&"examples"===e[7]&&"value"===e[9]},function(e){return"paths"===e[0]&&"requestBody"===e[3]&&"content"===e[4]&&"example"===e[6]},function(e){return"paths"===e[0]&&"requestBody"===e[3]&&"content"===e[4]&&"examples"===e[6]&&"value"===e[8]},function(e){return"paths"===e[0]&&"parameters"===e[2]&&"example"===e[4]},function(e){return"paths"===e[0]&&"parameters"===e[3]&&"example"===e[5]},function(e){return"paths"===e[0]&&"parameters"===e[2]&&"examples"===e[4]&&"value"===e[6]},function(e){return"paths"===e[0]&&"parameters"===e[3]&&"examples"===e[5]&&"value"===e[7]},function(e){return"paths"===e[0]&&"parameters"===e[2]&&"content"===e[4]&&"example"===e[6]},function(e){return"paths"===e[0]&&"parameters"===e[2]&&"content"===e[4]&&"examples"===e[6]&&"value"===e[8]},function(e){return"paths"===e[0]&&"parameters"===e[3]&&"content"===e[4]&&"example"===e[7]},function(e){return"paths"===e[0]&&"parameters"===e[3]&&"content"===e[5]&&"examples"===e[7]&&"value"===e[9]}],mC=zu({key:"$ref",plugin:function(e,t,r,n){var o=n.getInstance(),a=uS(r).call(r,0,-1);if(!sC(a)&&!function(e){return fC.some((function(t){return t(e)}))}(a)){var i=n.getContext(r).baseDoc;if("string"!=typeof e)return new uC("$ref: must be a string (JSON-Ref)",{$ref:e,baseDoc:i,fullPath:r});var s,l,c,p=vC(e),u=p[0],d=p[1]||"";try{s=i||u?yC(u,i):null}catch(t){return gC(t,{pointer:d,$ref:e,basePath:s,fullPath:r})}if(function(e,t,r,n){var o,a,i=hC.get(n);i||(i={},hC.set(n,i));var s=function(e){return 0===e.length?"":"/".concat($b(e).call(e,SC).join("/"))}(r),l=Tb(o="".concat(t||"<specmap-base>","#")).call(o,e),c=s.replace(/allOf\/\d+\/?/g,"");if(t===n.contextTree.get([]).baseDoc&&AC(c,e))return!0;var p="";if(r.some((function(e){var t;return p=Tb(t="".concat(p,"/")).call(t,SC(e)),i[p]&&i[p].some((function(e){return AC(e,l)||AC(l,e)}))})))return!0;i[c]=Tb(a=i[c]||[]).call(a,l)}(d,s,a,n)&&!o.useCircularStructures){var h=lC(e,s);return e===h?null:UA.replace(r,h)}if(null==s?(c=$C(d),void 0===(l=n.get(c))&&(l=new uC("Could not resolve reference: ".concat(e),{pointer:d,$ref:e,baseDoc:i,fullPath:r}))):l=null!=(l=bC(s,d)).__value?l.__value:l.catch((function(t){throw gC(t,{pointer:d,$ref:e,baseDoc:i,fullPath:r})})),l instanceof Error)return[UA.remove(r),l];var f=lC(e,s),m=UA.replace(a,l,{$$ref:f});if(s&&s!==i)return[m,UA.context(a,{baseDoc:s})];try{if(!function(e,t){var r=[e];return t.path.reduce((function(e,t){return r.push(e[t]),e[t]}),e),function e(t){return UA.isObject(t)&&(r.indexOf(t)>=0||kb(t).some((function(r){return e(t[r])})))}(t.value)}(n.state,m)||o.useCircularStructures)return m}catch(e){return null}}}},{docCache:dC,absoluteify:yC,clearCache:function(e){void 0!==e?delete dC[e]:kb(dC).forEach((function(e){delete dC[e]}))},JSONRefError:uC,wrapError:gC,getDoc:xC,split:vC,extractFromDoc:bC,fetchJSON:function(e){return fetch(e,{headers:{Accept:cC},loadSpec:!0}).then((function(e){return e.text()})).then((function(e){return aS.load(e)}))},extract:wC,jsonPointerToArray:$C,unescapeJsonPointerToken:kC});function yC(e,t){if(!pC.test(e)){var r;if(!t)throw new uC(Tb(r="Tried to resolve a relative URL, without having a basePath. path: '".concat(e,"' basePath: '")).call(r,t,"'"));return cd.resolve(t,e)}return e}function gC(e,t){var r,n;return r=e&&e.response&&e.response.body?Tb(n="".concat(e.response.body.code," ")).call(n,e.response.body.message):e.message,new uC("Could not resolve reference: ".concat(r),t,e)}function vC(e){return(e+"").split("#")}function bC(e,t){var r=dC[e];if(r&&!UA.isPromise(r))try{var n=wC(t,r);return zu(US.resolve(n),{__value:n})}catch(e){return US.reject(e)}return xC(e).then((function(e){return wC(t,e)}))}function xC(e){var t=dC[e];return t?UA.isPromise(t)?t:US.resolve(t):(dC[e]=mC.fetchJSON(e).then((function(t){return dC[e]=t,t})),dC[e])}function wC(e,t){var r=$C(e);if(r.length<1)return t;var n=UA.getIn(t,r);if(void 0===n)throw new uC("Could not resolve pointer: ".concat(e," does not exist in document"),{pointer:e});return n}function $C(e){var t;if("string"!=typeof e)throw new TypeError("Expected a string, got a ".concat(Cf(e)));return"/"===e[0]&&(e=e.substr(1)),""===e?[]:$b(t=e.split("/")).call(t,kC)}function kC(e){return"string"!=typeof e?e:new HT("=".concat(e.replace(/~1/g,"/").replace(/~0/g,"~"))).get("")}function SC(e){var t,r=new HT([["",e.replace(/~/g,"~0").replace(/\//g,"~1")]]);return uS(t=r.toString()).call(t,1)}function AC(e,t){if(function(e){return!e||"/"===e||"#"===e}(t))return!0;var r=e.charAt(t.length),n=uS(t).call(t,-1);return 0===e.indexOf(t)&&(!r||"/"===r||"#"===r)&&"#"!==n}var EC={key:"allOf",plugin:function(e,t,r,n,o){if(!o.meta||!o.meta.$$ref){var a=uS(r).call(r,0,-1);if(!sC(a)){if(!Array.isArray(e)){var i=new TypeError("allOf must be an array");return i.fullPath=r,i}var s=!1,l=o.value;if(a.forEach((function(e){l&&(l=l[e])})),l=Eu({},l),0!==kb(l).length){delete l.allOf;var c,p,u=[];return u.push(n.replace(a,{})),e.forEach((function(e,t){if(!n.isObject(e)){if(s)return null;s=!0;var o=new TypeError("Elements in allOf must be objects");return o.fullPath=r,u.push(o)}u.push(n.mergeDeep(a,e));var i=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.specmap,o=r.getBaseUrlForNodePath,a=void 0===o?function(e){var r;return n.getContext(Tb(r=[]).call(r,pS(t),pS(e))).baseDoc}:o,i=r.targetKeys,s=void 0===i?["$ref","$$ref"]:i,l=[];return rC(e).forEach((function(){if(Uv(s).call(s,this.key)&&"string"==typeof this.node){var e=this.path,r=Tb(t).call(t,this.path),o=lC(this.node,a(e));l.push(n.replace(r,o))}})),l}(e,uS(r).call(r,0,-1),{getBaseUrlForNodePath:function(e){var o;return n.getContext(Tb(o=[]).call(o,pS(r),[t],pS(e))).baseDoc},specmap:n});u.push.apply(u,pS(i))})),l.example&&u.push(n.remove(Tb(c=[]).call(c,a,"example"))),u.push(n.mergeDeep(a,l)),l.$$ref||u.push(n.remove(Tb(p=[]).call(p,a,"$$ref"))),u}}}}},OC={key:"parameters",plugin:function(e,t,r,n){if(Array.isArray(e)&&e.length){var o=zu([],e),a=uS(r).call(r,0,-1),i=Eu({},UA.getIn(n.spec,a));return e.forEach((function(e,t){try{o[t].default=n.parameterMacro(i,e)}catch(e){var a=new Error(e);return a.fullPath=r,a}})),UA.replace(r,o)}return UA.replace(r,e)}},TC={key:"properties",plugin:function(e,t,r,n){var o=Eu({},e);for(var a in e)try{o[a].default=n.modelPropertyMacro(o[a])}catch(e){var i=new Error(e);return i.fullPath=r,i}return UA.replace(r,o)}},CC=function(){function e(t){jS(this,e),this.root=_C(t||{})}return PS(e,[{key:"set",value:function(e,t){var r=this.getParent(e,!0);if(r){var n=e[e.length-1],o=r.children;o[n]?jC(o[n],t,r):o[n]=_C(t,r)}else jC(this.root,t,null)}},{key:"get",value:function(e){if((e=e||[]).length<1)return this.root.value;for(var t,r,n=this.root,o=0;o<e.length&&(r=e[o],(t=n.children)[r]);o+=1)n=t[r];return n&&n.protoValue}},{key:"getParent",value:function(e,t){return!e||e.length<1?null:e.length<2?this.root:uS(e).call(e,0,-1).reduce((function(e,r){if(!e)return e;var n=e.children;return!n[r]&&t&&(n[r]=_C(null,e)),n[r]}),this.root)}}]),e}();function _C(e,t){return jC({children:{}},e,t)}function jC(e,t,r){return e.value=t||{},e.protoValue=r?Eu(Eu({},r.protoValue),e.value):e.value,kb(e.children).forEach((function(t){var r=e.children[t];e.children[t]=jC(r,r.value,e)})),e}var IC=function(){},PC=function(){function e(t){var r,n,o=this;jS(this,e),zu(this,{spec:"",debugLevel:"info",plugins:[],pluginHistory:{},errors:[],mutations:[],promisedPatches:[],state:{},patches:[],context:{},contextTree:new CC,showDebug:!1,allPatches:[],pluginProp:"specMap",libMethods:zu(Object.create(this),UA,{getInstance:function(){return o}}),allowMetaPatches:!1},t),this.get=this._get.bind(this),this.getContext=this._getContext.bind(this),this.hasRun=this._hasRun.bind(this),this.wrappedPlugins=Fb(r=$b(n=this.plugins).call(n,this.wrapPlugin.bind(this))).call(r,UA.isFunction),this.patches.push(UA.add([],this.spec)),this.patches.push(UA.context([],this.context)),this.updatePatches(this.patches)}return PS(e,[{key:"debug",value:function(e){if(this.debugLevel===e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];(t=console).log.apply(t,n)}}},{key:"verbose",value:function(e){if("verbose"===this.debugLevel){for(var t,r,n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];(t=console).log.apply(t,Tb(r=["[".concat(e,"]   ")]).call(r,o))}}},{key:"wrapPlugin",value:function(e,t){var r,n,o,a=this.pathDiscriminator,i=null;return e[this.pluginProp]?(i=e,r=e[this.pluginProp]):UA.isFunction(e)?r=e:UA.isObject(e)&&(n=e,o=function(e,t){return!Array.isArray(e)||e.every((function(e,r){return e===t[r]}))},r=Ev.mark((function e(t,r){var i,s,l,c,p,u;return Ev.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=function(e,t,l){var c,p,d,h,f,m,y,g,v,b,x,w,$;return Ev.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(UA.isObject(e)){i.next=6;break}if(n.key!==t[t.length-1]){i.next=4;break}return i.next=4,n.plugin(e,n.key,t,r);case 4:i.next=30;break;case 6:c=t.length-1,p=t[c],d=t.indexOf("properties"),h="properties"===p&&c===d,f=r.allowMetaPatches&&s[e.$$ref],m=0,y=kb(e);case 12:if(!(m<y.length)){i.next=30;break}if(g=y[m],v=e[g],b=Tb(t).call(t,g),x=UA.isObject(v),w=e.$$ref,f){i.next=22;break}if(!x){i.next=22;break}return r.allowMetaPatches&&w&&(s[w]=!0),i.delegateYield(u(v,b,l),"t0",22);case 22:if(h||g!==n.key){i.next=27;break}if($=o(a,t),a&&!$){i.next=27;break}return i.next=27,n.plugin(v,g,b,r,l);case 27:m++,i.next=12;break;case 30:case"end":return i.stop()}}),i)},i=Ev.mark(u),s={},l=Of(Fb(t).call(t,UA.isAdditiveMutation)),e.prev=4,l.s();case 6:if((c=l.n()).done){e.next=11;break}return p=c.value,e.delegateYield(u(p.value,p.path,p),"t0",9);case 9:e.next=6;break;case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(4),l.e(e.t1);case 16:return e.prev=16,l.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[4,13,16,19]])}))),zu(r.bind(i),{pluginName:e.name||t,isGenerator:UA.isGenerator(r)})}},{key:"nextPlugin",value:function(){var e,t=this;return function(e){var t=e.find;return e===zS||FS(zS,e)&&t===zS.find?NS:t}(e=this.wrappedPlugins).call(e,(function(e){return t.getMutationsForPlugin(e).length>0}))}},{key:"nextPromisedPatch",value:function(){var e;if(this.promisedPatches.length>0)return US.race($b(e=this.promisedPatches).call(e,(function(e){return e.value})))}},{key:"getPluginHistory",value:function(e){var t=this.constructor.getPluginName(e);return this.pluginHistory[t]||[]}},{key:"getPluginRunCount",value:function(e){return this.getPluginHistory(e).length}},{key:"getPluginHistoryTip",value:function(e){var t=this.getPluginHistory(e);return t&&t[t.length-1]||{}}},{key:"getPluginMutationIndex",value:function(e){var t=this.getPluginHistoryTip(e).mutationIndex;return"number"!=typeof t?-1:t}},{key:"updatePluginHistory",value:function(e,t){var r=this.constructor.getPluginName(e);this.pluginHistory[r]=this.pluginHistory[r]||[],this.pluginHistory[r].push(t)}},{key:"updatePatches",value:function(e){var t=this;UA.normalizeArray(e).forEach((function(e){if(e instanceof Error)t.errors.push(e);else try{if(!UA.isObject(e))return void t.debug("updatePatches","Got a non-object patch",e);if(t.showDebug&&t.allPatches.push(e),UA.isPromise(e.value))return t.promisedPatches.push(e),void t.promisedPatchThen(e);if(UA.isContextPatch(e))return void t.setContext(e.path,e.value);if(UA.isMutation(e))return void t.updateMutations(e)}catch(e){console.error(e),t.errors.push(e)}}))}},{key:"updateMutations",value:function(e){"object"===Cf(e.value)&&!Array.isArray(e.value)&&this.allowMetaPatches&&(e.value=Eu({},e.value));var t=UA.applyPatch(this.state,e,{allowMetaPatches:this.allowMetaPatches});t&&(this.mutations.push(e),this.state=t)}},{key:"removePromisedPatch",value:function(e){var t,r=this.promisedPatches.indexOf(e);r<0?this.debug("Tried to remove a promisedPatch that isn't there!"):function(e){var t=e.splice;return e===oA||rA(oA,e)&&t===oA.splice?nA:t}(t=this.promisedPatches).call(t,r,1)}},{key:"promisedPatchThen",value:function(e){var t=this;return e.value=e.value.then((function(r){var n=Eu(Eu({},e),{},{value:r});t.removePromisedPatch(e),t.updatePatches(n)})).catch((function(r){t.removePromisedPatch(e),t.updatePatches(r)})),e.value}},{key:"getMutations",value:function(e,t){var r;return e=e||0,"number"!=typeof t&&(t=this.mutations.length),uS(r=this.mutations).call(r,e,t)}},{key:"getCurrentMutations",value:function(){return this.getMutationsForPlugin(this.getCurrentPlugin())}},{key:"getMutationsForPlugin",value:function(e){var t=this.getPluginMutationIndex(e);return this.getMutations(t+1)}},{key:"getCurrentPlugin",value:function(){return this.currentPlugin}},{key:"getLib",value:function(){return this.libMethods}},{key:"_get",value:function(e){return UA.getIn(this.state,e)}},{key:"_getContext",value:function(e){return this.contextTree.get(e)}},{key:"setContext",value:function(e,t){return this.contextTree.set(e,t)}},{key:"_hasRun",value:function(e){return this.getPluginRunCount(this.getCurrentPlugin())>(e||0)}},{key:"dispatch",value:function(){var e,t=this,r=this,n=this.nextPlugin();if(!n){var o=this.nextPromisedPatch();if(o)return o.then((function(){return t.dispatch()})).catch((function(){return t.dispatch()}));var a={spec:this.state,errors:this.errors};return this.showDebug&&(a.patches=this.allPatches),US.resolve(a)}if(r.pluginCount=r.pluginCount||{},r.pluginCount[n]=(r.pluginCount[n]||0)+1,r.pluginCount[n]>100)return US.resolve({spec:r.state,errors:Tb(e=r.errors).call(e,new Error("We've reached a hard limit of ".concat(100," plugin runs")))});if(n!==this.currentPlugin&&this.promisedPatches.length){var i,s=$b(i=this.promisedPatches).call(i,(function(e){return e.value}));return US.all($b(s).call(s,(function(e){return e.then(IC,IC)}))).then((function(){return t.dispatch()}))}return function(){r.currentPlugin=n;var e=r.getCurrentMutations(),t=r.mutations.length-1;try{if(n.isGenerator){var o,a=Of(n(e,r.getLib()));try{for(a.s();!(o=a.n()).done;)l(o.value)}catch(e){a.e(e)}finally{a.f()}}else l(n(e,r.getLib()))}catch(e){console.error(e),l([zu(Object.create(e),{plugin:n})])}finally{r.updatePluginHistory(n,{mutationIndex:t})}return r.dispatch()}();function l(e){e&&(e=UA.fullyNormalizeArray(e),r.updatePatches(e,n))}}}],[{key:"getPluginName",value:function(e){return e.pluginName}},{key:"getPatchesOfType",value:function(e,t){return Fb(e).call(e,t)}}]),e}(),RC={refs:mC,allOf:EC,parameters:OC,properties:TC},LC=function(e){return String.prototype.toLowerCase.call(e)},DC=function(e){return e.replace(/[^\w]/gi,"_")};function BC(e){var t=e.openapi;return!!t&&ld(t).call(t,"3")}function FC(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).v2OperationIdCompatibilityMode;return e&&"object"===Cf(e)?(e.operationId||"").replace(/\s/g,"").length?DC(e.operationId):function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.v2OperationIdCompatibilityMode;if(o){var a,i,s=Tb(a="".concat(t.toLowerCase(),"_")).call(a,e).replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g,"_");return(s=s||Tb(i="".concat(e.substring(1),"_")).call(i,t)).replace(/((_){2,})/g,"_").replace(/^(_)*/g,"").replace(/([_])*$/g,"")}return Tb(r="".concat(LC(t))).call(r,DC(e))}(t,r,{v2OperationIdCompatibilityMode:n}):null}function NC(e,t){var r;return Tb(r="".concat(LC(t),"-")).call(r,e)}function zC(e,t,r){if(!e||"object"!==Cf(e)||!e.paths||"object"!==Cf(e.paths))return null;var n=e.paths;for(var o in n)for(var a in n[o])if("PARAMETERS"!==a.toUpperCase()){var i=n[o][a];if(i&&"object"===Cf(i)){var s={spec:e,pathName:o,method:a.toUpperCase(),operation:i},l=t(s);if(r&&l)return s}}}function UC(e){var t=e.spec,r=t.paths,n={};if(!r||t.$$normalized)return e;for(var o in r){var a,i=r[o];if(null!=i&&Uv(a=["object","function"]).call(a,Cf(i))){var s=i.parameters,l=function(e){var r,a=i[e];if(null==a||!Uv(r=["object","function"]).call(r,Cf(a)))return"continue";var l=FC(a,o,e);if(l){n[l]?n[l].push(a):n[l]=[a];var c=n[l];if(c.length>1)c.forEach((function(e,t){var r;e.__originalOperationId=e.__originalOperationId||e.operationId,e.operationId=Tb(r="".concat(l)).call(r,t+1)}));else if(void 0!==a.operationId){var p=c[0];p.__originalOperationId=p.__originalOperationId||a.operationId,p.operationId=l}}if("parameters"!==e){var u=[],d={};for(var h in t)"produces"!==h&&"consumes"!==h&&"security"!==h||(d[h]=t[h],u.push(d));if(s&&(d.parameters=s,u.push(d)),u.length){var f,m=Of(u);try{for(m.s();!(f=m.n()).done;){var y=f.value;for(var g in y)if(a[g]){if("parameters"===g){var v,b=Of(y[g]);try{var x=function(){var e=v.value;a[g].some((function(t){return t.name&&t.name===e.name||t.$ref&&t.$ref===e.$ref||t.$$ref&&t.$$ref===e.$$ref||t===e}))||a[g].push(e)};for(b.s();!(v=b.n()).done;)x()}catch(e){b.e(e)}finally{b.f()}}}else a[g]=y[g]}}catch(e){m.e(e)}finally{m.f()}}}};for(var c in i)l(c)}}return t.$$normalized=!0,e}function qC(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.requestInterceptor,n=t.responseInterceptor,o=e.withCredentials?"include":"same-origin";return function(t){return e({url:t,loadSpec:!0,requestInterceptor:r,responseInterceptor:n,headers:{Accept:cC},credentials:o}).then((function(e){return e.body}))}}function MC(e){var t=e.fetch,r=e.spec,n=e.url,o=e.mode,a=e.allowMetaPatches,i=void 0===a||a,s=e.pathDiscriminator,l=e.modelPropertyMacro,c=e.parameterMacro,p=e.requestInterceptor,u=e.responseInterceptor,d=e.skipNormalization,h=e.useCircularStructures,f=e.http,m=e.baseDoc;return m=m||n,f=t||f||vS,r?y(r):qC(f,{requestInterceptor:p,responseInterceptor:u})(m).then(y);function y(e){m&&(RC.refs.docCache[m]=e),RC.refs.fetchJSON=qC(f,{requestInterceptor:p,responseInterceptor:u});var t,r=[RC.refs];return"function"==typeof c&&r.push(RC.parameters),"function"==typeof l&&r.push(RC.properties),"strict"!==o&&r.push(RC.allOf),(t={spec:e,context:{baseDoc:m},plugins:r,allowMetaPatches:i,pathDiscriminator:s,parameterMacro:c,modelPropertyMacro:l,useCircularStructures:h},new PC(t).dispatch()).then(d?function(){var e=Sv(Ev.mark((function e(t){return Ev.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():UC)}}var HC=Array.isArray,WC="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,VC="object"==typeof self&&self&&self.Object===Object&&self,GC=WC||VC||Function("return this")(),KC=GC.Symbol,JC=KC,YC=Object.prototype,ZC=YC.hasOwnProperty,QC=YC.toString,XC=JC?JC.toStringTag:void 0,e_=Object.prototype.toString,t_=function(e){var t=ZC.call(e,XC),r=e[XC];try{e[XC]=void 0;var n=!0}catch(e){}var o=QC.call(e);return n&&(t?e[XC]=r:delete e[XC]),o},r_=KC?KC.toStringTag:void 0,n_=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":r_&&r_ in Object(e)?t_(e):function(e){return e_.call(e)}(e)},o_=n_,a_=function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==o_(e)},i_=HC,s_=a_,l_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c_=/^\w*$/,p_=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},u_=n_,d_=p_,h_=GC["__core-js_shared__"],f_=function(){var e=/[^.]+$/.exec(h_&&h_.keys&&h_.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),m_=Function.prototype.toString,y_=function(e){if(!d_(e))return!1;var t=u_(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},g_=function(e){return!!f_&&f_ in e},v_=p_,b_=/^\[object .+?Constructor\]$/,x_=Function.prototype,w_=Object.prototype,$_=x_.toString,k_=w_.hasOwnProperty,S_=RegExp("^"+$_.call(k_).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),A_=function(e){return!(!v_(e)||g_(e))&&(y_(e)?S_:b_).test(function(e){if(null!=e){try{return m_.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))},E_=function(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return A_(r)?r:void 0},O_=E_(Object,"create"),T_=O_,C_=O_,__=Object.prototype.hasOwnProperty,j_=O_,I_=Object.prototype.hasOwnProperty,P_=O_,R_=function(){this.__data__=T_?T_(null):{},this.size=0},L_=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},D_=function(e){var t=this.__data__;if(C_){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return __.call(t,e)?t[e]:void 0};function B_(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}B_.prototype.clear=R_,B_.prototype.delete=L_,B_.prototype.get=D_,B_.prototype.has=function(e){var t=this.__data__;return j_?void 0!==t[e]:I_.call(t,e)},B_.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=P_&&void 0===t?"__lodash_hash_undefined__":t,this};var F_=B_,N_=function(e,t){return e===t||e!=e&&t!=t},z_=function(e,t){for(var r=e.length;r--;)if(N_(e[r][0],t))return r;return-1},U_=z_,q_=Array.prototype.splice,M_=z_,H_=z_,W_=z_,V_=function(){this.__data__=[],this.size=0};function G_(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}G_.prototype.clear=V_,G_.prototype.delete=function(e){var t=this.__data__,r=U_(t,e);return!(r<0||(r==t.length-1?t.pop():q_.call(t,r,1),--this.size,0))},G_.prototype.get=function(e){var t=this.__data__,r=M_(t,e);return r<0?void 0:t[r][1]},G_.prototype.has=function(e){return H_(this.__data__,e)>-1},G_.prototype.set=function(e,t){var r=this.__data__,n=W_(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};var K_=G_,J_=E_(GC,"Map"),Y_=F_,Z_=K_,Q_=J_,X_=function(e,t){var r=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?r["string"==typeof t?"string":"hash"]:r.map},ej=X_,tj=X_,rj=X_,nj=X_;function oj(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}oj.prototype.clear=function(){this.size=0,this.__data__={hash:new Y_,map:new(Q_||Z_),string:new Y_}},oj.prototype.delete=function(e){var t=ej(this,e).delete(e);return this.size-=t?1:0,t},oj.prototype.get=function(e){return tj(this,e).get(e)},oj.prototype.has=function(e){return rj(this,e).has(e)},oj.prototype.set=function(e,t){var r=nj(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};var aj=oj;function ij(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=e.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(ij.Cache||aj),r}ij.Cache=aj;var sj=ij,lj=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,cj=/\\(\\)?/g,pj=function(){var e=sj((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(lj,(function(e,r,n,o){t.push(n?o.replace(cj,"$1"):r||e)})),t}),(function(e){return 500===t.size&&t.clear(),e})),t=e.cache;return e}(),uj=HC,dj=a_,hj=KC?KC.prototype:void 0,fj=hj?hj.toString:void 0,mj=function e(t){if("string"==typeof t)return t;if(uj(t))return function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(t,e)+"";if(dj(t))return fj?fj.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},yj=HC,gj=function(e,t){if(i_(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!s_(e))||c_.test(e)||!l_.test(e)||null!=t&&e in Object(t)},vj=pj,bj=a_,xj=function(e,t){return yj(e)?e:gj(e,t)?[e]:vj(function(e){return null==e?"":mj(e)}(e))},wj=function(e){if("string"==typeof e||bj(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},$j=function(e,t,r){var n=null==e?void 0:function(e,t){for(var r=0,n=(t=xj(t,e)).length;null!=e&&r<n;)e=e[wj(t[r++])];return r&&r==n?e:void 0}(e,t);return void 0===n?r:n};function kj(){return(kj=Sv(Ev.mark((function e(t,r){var n,o,a,i,s,l,c,p,u,d,h,f,m=arguments;return Ev.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(n=m.length>2&&void 0!==m[2]?m[2]:{}).returnEntireTree,a=n.baseDoc,i=n.requestInterceptor,s=n.responseInterceptor,l=n.parameterMacro,c=n.modelPropertyMacro,p=n.useCircularStructures,u={pathDiscriminator:r,baseDoc:a,requestInterceptor:i,responseInterceptor:s,parameterMacro:l,modelPropertyMacro:c,useCircularStructures:p},d=UC({spec:t}),h=d.spec,e.next=6,MC(Eu(Eu({},u),{},{spec:h,allowMetaPatches:!0,skipNormalization:!0}));case 6:return f=e.sent,!o&&Array.isArray(r)&&r.length&&(f.spec=$j(f.spec,r)||null),e.abrupt("return",f);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Sj=function(){return null},Aj=function(e){var t=e.spec,r=e.cb,n=void 0===r?Sj:r,o=e.defaultTag,a=void 0===o?"default":o,i=e.v2OperationIdCompatibilityMode,s={},l={};return zC(t,(function(e){var r,o=e.pathName,c=e.method,p=e.operation;(p.tags?(r=p.tags,Array.isArray(r)?r:[r]):[a]).forEach((function(e){if("string"==typeof e){l[e]=l[e]||{};var r,a=l[e],u=FC(p,o,c,{v2OperationIdCompatibilityMode:i}),d=n({spec:t,pathName:o,method:c,operation:p,operationId:u});if(s[u])s[u]+=1,a[Tb(r="".concat(u)).call(r,s[u])]=d;else if(void 0!==a[u]){var h,f,m=s[u]||1;s[u]=m+1,a[Tb(h="".concat(u)).call(h,s[u])]=d;var y=a[u];delete a[u],a[Tb(f="".concat(u)).call(f,m)]=y}else a[u]=d}}))})),l},Ej=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var r=t.pathName,n=t.method,o=t.operationId;return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.requestInterceptor,s=e.responseInterceptor,l=e.userFetch;return e.execute(Eu({spec:e.spec,requestInterceptor:i,responseInterceptor:s,userFetch:l,pathName:r,method:n,parameters:t,operationId:o},a))}}},Oj=Eo,Tj=Mo.indexOf,Cj=qp,_j=kt([].indexOf),jj=!!_j&&1/_j([1],1,-0)<0,Ij=Cj("indexOf");Oj({target:"Array",proto:!0,forced:jj||!Ij},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return jj?_j(this,e,t)||0:Tj(this,e,t)}});var Pj=ac("Array").indexOf,Rj=ir,Lj=Pj,Dj=Array.prototype,Bj=function(e){var t=e.indexOf;return e===Dj||Rj(Dj,e)&&t===Dj.indexOf?Lj:t};var Fj=function(e,t,r){var n=r||{},o=n.encode||Nj;if("function"!=typeof o)throw new TypeError("option encode is invalid");if(!zj.test(e))throw new TypeError("argument name is invalid");var a=o(t);if(a&&!zj.test(a))throw new TypeError("argument val is invalid");var i=e+"="+a;if(null!=n.maxAge){var s=n.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(s)}if(n.domain){if(!zj.test(n.domain))throw new TypeError("option domain is invalid");i+="; Domain="+n.domain}if(n.path){if(!zj.test(n.path))throw new TypeError("option path is invalid");i+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");i+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(i+="; HttpOnly"),n.secure&&(i+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i},Nj=(decodeURIComponent,encodeURIComponent),zj=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Uj(e){return"[object Object]"===Object.prototype.toString.call(e)}function qj(e){var t,r;return!1!==Uj(e)&&(void 0===(t=e.constructor)||!1!==Uj(r=t.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf"))}var Mj={body:function(e){var t=e.req,r=e.value;t.body=r},header:function(e){var t=e.req,r=e.parameter,n=e.value;t.headers=t.headers||{},void 0!==n&&(t.headers[r.name]=n)},query:function(e){var t=e.req,r=e.value,n=e.parameter;if(t.query=t.query||{},!1===r&&"boolean"===n.type&&(r="false"),0===r&&["number","integer"].indexOf(n.type)>-1&&(r="0"),r)t.query[n.name]={collectionFormat:n.collectionFormat,value:r};else if(n.allowEmptyValue&&void 0!==r){var o=n.name;t.query[o]=t.query[o]||{},t.query[o].allowEmptyValue=!0}},path:function(e){var t=e.req,r=e.value,n=e.parameter;t.url=t.url.split("{".concat(n.name,"}")).join(encodeURIComponent(r))},formData:function(e){var t=e.req,r=e.value,n=e.parameter;(r||n.allowEmptyValue)&&(t.form=t.form||{},t.form[n.name]={value:r,allowEmptyValue:n.allowEmptyValue,collectionFormat:n.collectionFormat})}};function Hj(e,t){return Uv(t).call(t,"application/json")?"string"==typeof e?e:yb(e):e.toString()}var Wj=["accept","authorization","content-type"],Vj=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",path:function(e){var t=e.req,r=e.value,n=e.parameter,o=n.name,a=n.style,i=n.explode,s=n.content;if(s){var l=kb(s)[0];t.url=t.url.split("{".concat(o,"}")).join(fS(Hj(r,l),{escape:!0}))}else{var c=mS({key:n.name,value:r,style:a||"simple",explode:i||!1,escape:!0});t.url=t.url.split("{".concat(o,"}")).join(c)}},query:function(e){var t=e.req,r=e.value,n=e.parameter;if(t.query=t.query||{},n.content){var o=kb(n.content)[0];t.query[n.name]=Hj(r,o)}else if(!1===r&&(r="false"),0===r&&(r="0"),r){var a=n.style,i=n.explode,s=n.allowReserved;t.query[n.name]={value:r,serializationOption:{style:a,explode:i,allowReserved:s}}}else if(n.allowEmptyValue&&void 0!==r){var l=n.name;t.query[l]=t.query[l]||{},t.query[l].allowEmptyValue=!0}},header:function(e){var t=e.req,r=e.parameter,n=e.value;if(t.headers=t.headers||{},!(Wj.indexOf(r.name.toLowerCase())>-1))if(r.content){var o=kb(r.content)[0];t.headers[r.name]=Hj(n,o)}else void 0!==n&&(t.headers[r.name]=mS({key:r.name,value:n,style:r.style||"simple",explode:void 0!==r.explode&&r.explode,escape:!1}))},cookie:function(e){var t=e.req,r=e.parameter,n=e.value;t.headers=t.headers||{};var o=Cf(n);if(r.content){var a,i=kb(r.content)[0];t.headers.Cookie=Tb(a="".concat(r.name,"=")).call(a,Hj(n,i))}else if("undefined"!==o){var s="object"===o&&!Array.isArray(n)&&r.explode?"":"".concat(r.name,"=");t.headers.Cookie=s+mS({key:r.name,value:n,escape:!1,style:r.style||"form",explode:void 0!==r.explode&&r.explode})}}}),Gj={exports:function(e){return(e instanceof lt?e:lt.from(e.toString(),"binary")).toString("base64")}},Kj=Gj.exports;var Jj=["http","fetch","spec","operationId","pathName","method","parameters","securities"],Yj=function(e){return Array.isArray(e)?e:[]},Zj=WT("OperationNotFoundError",(function(e,t,r){this.originalError=r,zu(this,t||{})})),Qj={buildRequest:Xj};function Xj(e){var t,r,n=e.spec,o=e.operationId,a=e.responseContentType,i=e.scheme,s=e.requestInterceptor,l=e.responseInterceptor,c=e.contextUrl,p=e.userFetch,u=e.server,d=e.serverVariables,h=e.http,f=e.signal,m=e.parameters,y=e.parameterBuilders,g=BC(n);y||(y=g?Vj:Mj);var v={url:"",credentials:h&&h.withCredentials?"include":"same-origin",headers:{},cookies:{}};f&&(v.signal=f),s&&(v.requestInterceptor=s),l&&(v.responseInterceptor=l),p&&(v.userFetch=p);var b=function(e,t){return e&&e.paths?function(e,t){return zC(e,t,!0)||null}(e,(function(e){var r=e.pathName,n=e.method,o=e.operation;if(!o||"object"!==Cf(o))return!1;var a=o.operationId;return[FC(o,r,n),NC(r,n),a].some((function(e){return e&&e===t}))})):null}(n,o);if(!b)throw new Zj("Operation ".concat(o," not found"));var x=b.operation,w=void 0===x?{}:x,$=b.method,k=b.pathName;if(v.url+=tI({spec:n,scheme:i,contextUrl:c,server:u,serverVariables:d,pathName:k,method:$}),!o)return delete v.cookies,v;v.url+=k,v.method="".concat($).toUpperCase(),m=m||{};var S=n.paths[k]||{};a&&(v.headers.accept=a);var A=function(e){var t={};e.forEach((function(e){t[e.in]||(t[e.in]={}),t[e.in][e.name]=e}));var r=[];return kb(t).forEach((function(e){kb(t[e]).forEach((function(n){r.push(t[e][n])}))})),r}(Tb(t=Tb(r=[]).call(r,Yj(w.parameters))).call(t,Yj(S.parameters)));A.forEach((function(e){var t,r,o=y[e.in];if("body"===e.in&&e.schema&&e.schema.properties&&(t=m),void 0===(t=e&&e.name&&m[e.name]))t=e&&e.name&&m[Tb(r="".concat(e.in,".")).call(r,e.name)];else if(function(e,t){return Fb(t).call(t,(function(t){return t.name===e}))}(e.name,A).length>1){var a;console.warn(Tb(a="Parameter '".concat(e.name,"' is ambiguous because the defined spec has more than one parameter with the name: '")).call(a,e.name,"' and the passed-in parameter values did not define an 'in' value."))}if(null!==t){if(void 0!==e.default&&void 0===t&&(t=e.default),void 0===t&&e.required&&!e.allowEmptyValue)throw new Error("Required parameter ".concat(e.name," is not provided"));if(g&&e.schema&&"object"===e.schema.type&&"string"==typeof t)try{t=JSON.parse(t)}catch(e){throw new Error("Could not parse object parameter value string as JSON")}o&&o({req:v,parameter:e,value:t,operation:w,spec:n})}}));var E=Eu(Eu({},e),{},{operation:w});if((v=g?function(e,t){var r=e.operation,n=e.requestBody,o=e.securities,a=e.spec,i=e.attachContentTypeForEmptyPayload,s=e.requestContentType;t=function(e){var t=e.request,r=e.securities,n=void 0===r?{}:r,o=e.operation,a=void 0===o?{}:o,i=e.spec,s=Eu({},t),l=n.authorized,c=void 0===l?{}:l,p=a.security||i.security||[],u=c&&!!kb(c).length,d=$j(i,["components","securitySchemes"])||{};return s.headers=s.headers||{},s.query=s.query||{},kb(n).length&&u&&p&&(!Array.isArray(a.security)||a.security.length)?(p.forEach((function(e){kb(e).forEach((function(e){var t=c[e],r=d[e];if(t){var n=t.value||t,o=r.type;if(t)if("apiKey"===o)"query"===r.in&&(s.query[r.name]=n),"header"===r.in&&(s.headers[r.name]=n),"cookie"===r.in&&(s.cookies[r.name]=n);else if("http"===o){if(/^basic$/i.test(r.scheme)){var a,i=n.username||"",l=n.password||"",p=Kj(Tb(a="".concat(i,":")).call(a,l));s.headers.Authorization="Basic ".concat(p)}/^bearer$/i.test(r.scheme)&&(s.headers.Authorization="Bearer ".concat(n))}else if("oauth2"===o||"openIdConnect"===o){var u,h=t.token||{},f=h[r["x-tokenName"]||"access_token"],m=h.token_type;m&&"bearer"!==m.toLowerCase()||(m="Bearer"),s.headers.Authorization=Tb(u="".concat(m," ")).call(u,f)}}}))})),s):t}({request:t,securities:o,operation:r,spec:a});var l=r.requestBody||{},c=kb(l.content||{}),p=s&&c.indexOf(s)>-1;if(n||i){if(s&&p)t.headers["Content-Type"]=s;else if(!s){var u=c[0];u&&(t.headers["Content-Type"]=u,s=u)}}else s&&p&&(t.headers["Content-Type"]=s);if(!e.responseContentType&&r.responses){var d,h=Fb(d=Bb(r.responses)).call(d,(function(e){var t=_f(e,2),r=t[0],n=t[1],o=parseInt(r,10);return o>=200&&o<300&&qj(n.content)})).reduce((function(e,t){var r=_f(t,2)[1];return Tb(e).call(e,kb(r.content))}),[]);h.length>0&&(t.headers.accept=h.join(", "))}if(n)if(s){if(c.indexOf(s)>-1)if("application/x-www-form-urlencoded"===s||"multipart/form-data"===s)if("object"===Cf(n)){var f=(l.content[s]||{}).encoding||{};t.form={},kb(n).forEach((function(e){t.form[e]={value:n[e],encoding:f[e]||{}}}))}else t.form=n;else t.body=n}else t.body=n;return t}(E,v):function(e,t){var r,n,o=e.spec,a=e.operation,i=e.securities,s=e.requestContentType,l=e.responseContentType,c=e.attachContentTypeForEmptyPayload;if((t=function(e){var t=e.request,r=e.securities,n=void 0===r?{}:r,o=e.operation,a=void 0===o?{}:o,i=e.spec,s=Eu({},t),l=n.authorized,c=void 0===l?{}:l,p=n.specSecurity,u=void 0===p?[]:p,d=a.security||u,h=c&&!!kb(c).length,f=i.securityDefinitions;return s.headers=s.headers||{},s.query=s.query||{},kb(n).length&&h&&d&&(!Array.isArray(a.security)||a.security.length)?(d.forEach((function(e){kb(e).forEach((function(e){var t=c[e];if(t){var r=t.token,n=t.value||t,o=f[e],a=o.type,i=o["x-tokenName"]||"access_token",l=r&&r[i],p=r&&r.token_type;if(t)if("apiKey"===a){var u="query"===o.in?"query":"headers";s[u]=s[u]||{},s[u][o.name]=n}else if("basic"===a)if(n.header)s.headers.authorization=n.header;else{var d,h=n.username||"",m=n.password||"";n.base64=Kj(Tb(d="".concat(h,":")).call(d,m)),s.headers.authorization="Basic ".concat(n.base64)}else if("oauth2"===a&&l){var y;p=p&&"bearer"!==p.toLowerCase()?p:"Bearer",s.headers.authorization=Tb(y="".concat(p," ")).call(y,l)}}}))})),s):t}({request:t,securities:i,operation:a,spec:o})).body||t.form||c)if(s)t.headers["Content-Type"]=s;else if(Array.isArray(a.consumes)){var p=_f(a.consumes,1);t.headers["Content-Type"]=p[0]}else if(Array.isArray(o.consumes)){var u=_f(o.consumes,1);t.headers["Content-Type"]=u[0]}else a.parameters&&Fb(r=a.parameters).call(r,(function(e){return"file"===e.type})).length?t.headers["Content-Type"]="multipart/form-data":a.parameters&&Fb(n=a.parameters).call(n,(function(e){return"formData"===e.in})).length&&(t.headers["Content-Type"]="application/x-www-form-urlencoded");else if(s){var d,h,f=a.parameters&&Fb(d=a.parameters).call(d,(function(e){return"body"===e.in})).length>0,m=a.parameters&&Fb(h=a.parameters).call(h,(function(e){return"formData"===e.in})).length>0;(f||m)&&(t.headers["Content-Type"]=s)}return!l&&Array.isArray(a.produces)&&a.produces.length>0&&(t.headers.accept=a.produces.join(", ")),t}(E,v)).cookies&&kb(v.cookies).length){var O=kb(v.cookies).reduce((function(e,t){var r=v.cookies[t];return e+(e?"&":"")+Fj(t,r)}),"");v.headers.Cookie=O}return v.cookies&&delete v.cookies,_S(v),v}var eI=function(e){return e?e.replace(/\W/g,""):null};function tI(e){return BC(e.spec)?function(e){var t=e.spec,r=e.pathName,n=e.method,o=e.server,a=e.contextUrl,i=e.serverVariables,s=void 0===i?{}:i,l=$j(t,["paths",r,(n||"").toLowerCase(),"servers"])||$j(t,["paths",r,"servers"])||$j(t,["servers"]),c="",p=null;if(o&&l&&l.length){var u=$b(l).call(l,(function(e){return e.url}));u.indexOf(o)>-1&&(c=o,p=l[u.indexOf(o)])}if(!c&&l&&l.length){c=l[0].url;var d=_f(l,1);p=d[0]}return c.indexOf("{")>-1&&function(e){for(var t,r=[],n=/{([^}]+)}/g;t=n.exec(e);)r.push(t[1]);return r}(c).forEach((function(e){if(p.variables&&p.variables[e]){var t=p.variables[e],r=s[e]||t.default,n=new RegExp("{".concat(e,"}"),"g");c=c.replace(n,r)}})),function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=r&&n?cd.parse(cd.resolve(n,r)):cd.parse(r),a=cd.parse(n),i=eI(o.protocol)||eI(a.protocol)||"",s=o.host||a.host,l=o.pathname||"";return"/"===(e=i&&s?Tb(t="".concat(i,"://")).call(t,s+l):l)[e.length-1]?uS(e).call(e,0,-1):e}(c,a)}(e):function(e){var t,r,n=e.spec,o=e.scheme,a=e.contextUrl,i=void 0===a?"":a,s=cd.parse(i),l=Array.isArray(n.schemes)?n.schemes[0]:null,c=o||l||eI(s.protocol)||"http",p=n.host||s.host||"",u=n.basePath||"";return"/"===(t=c&&p?Tb(r="".concat(c,"://")).call(r,p+u):u)[t.length-1]?uS(t).call(t,0,-1):t}(e)}function rI(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e?r.url=e:r=e,!(this instanceof rI))return new rI(r);zu(this,r);var n=this.resolve().then((function(){return t.disableInterfaces||zu(t,rI.makeApisTagOperation(t)),t}));return n.client=this,n}function nI(e){const t=(e=e.replace("[]","Array")).split("/");return t[0]=t[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm,"_"),t.join("/")}rI.http=vS,rI.makeHttp=function(e,t,r){return r=r||function(e){return e},t=t||function(e){return e},function(n){return"string"==typeof n&&(n={url:n}),gS.mergeInQueryOrForm(n),n=t(n),r(e(n))}}.bind(null,rI.http),rI.resolve=MC,rI.resolveSubtree=function(e,t){return kj.apply(this,arguments)},rI.execute=function(e){var t=e.http,r=e.fetch,n=e.spec,o=e.operationId,a=e.pathName,i=e.method,s=e.parameters,l=e.securities,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=oa(e);for(n=0;n<a.length;n++)r=a[n],Bj(t).call(t,r)>=0||(o[r]=e[r]);return o}(e,t);if(Ql){var a=Ql(e);for(n=0;n<a.length;n++)r=a[n],Bj(t).call(t,r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,Jj),p=t||r||vS;a&&i&&!o&&(o=NC(a,i));var u=Qj.buildRequest(Eu({spec:n,operationId:o,parameters:s,securities:l,http:p},c));return u.body&&(qj(u.body)||Array.isArray(u.body))&&(u.body=yb(u.body)),p(u)},rI.serializeRes=wS,rI.serializeHeaders=$S,rI.clearCache=function(){RC.refs.clearCache()},rI.makeApisTagOperation=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Ej(e);return{apis:Aj({v2OperationIdCompatibilityMode:e.v2OperationIdCompatibilityMode,spec:e.spec,cb:t})}},rI.buildRequest=Xj,rI.helpers={opId:FC},rI.getBaseUrl=tI,rI.prototype={http:vS,execute:function(e){return this.applyDefaults(),rI.execute(Eu({spec:this.spec,http:this.http,securities:{authorized:this.authorizations},contextUrl:"string"==typeof this.url?this.url:void 0,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null},e))},resolve:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return rI.resolve(Eu({spec:this.spec,url:this.url,http:this.http||this.fetch,allowMetaPatches:this.allowMetaPatches,useCircularStructures:this.useCircularStructures,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null,skipNormalization:this.skipNormalization||!1},t)).then((function(t){return e.originalSpec=e.spec,e.spec=t.spec,e.errors=t.errors,e}))}},rI.prototype.applyDefaults=function(){var e=this.spec,t=this.url;if(t&&ld(t).call(t,"http")){var r=cd.parse(t);e.host||(e.host=r.host),e.schemes||(e.schemes=[r.protocol.replace(":","")]),e.basePath||(e.basePath="/")}};var oI={parameterTypeProperties:["format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","minLength","maxLength","multipleOf","minItems","maxItems","uniqueItems","minProperties","maxProperties","additionalProperties","pattern","enum","default"],arrayProperties:["items","minItems","maxItems","uniqueItems"],httpMethods:["get","post","put","delete","patch","head","options","trace"],uniqueOnly:function(e,t,r){return r.indexOf(e)===t},createHash:function(e){let t,r=0;if(0===e.length)return r;for(let n=0;n<e.length;n++)t=e.charCodeAt(n),r=(r<<5)-r+t,r|=0;return r},sanitise:nI,sanitiseAll:function(e){return nI(e.split("/").join("_"))},camelize:function(e){return e.toLowerCase().replace(/[-_ \/\.](.)/g,((e,t)=>t.toUpperCase()))},clone:function(e){return JSON.parse(JSON.stringify(e))},circularClone:function e(t,r){if(r||(r=new WeakMap),Object(t)!==t||t instanceof Function)return t;if(r.has(t))return r.get(t);let n;try{n=new t.constructor}catch(e){n=Object.create(Object.getPrototypeOf(t))}return r.set(t,n),Object.assign(n,...Object.keys(t).map((n=>({[n]:e(t[n],r)}))))}};function aI(){return{depth:0,seen:new WeakMap,top:!0,combine:!1,allowRefSiblings:!1}}var iI={getDefaultState:aI,walkSchema:function e(t,r,n,o){if(void 0===n.depth&&(n=aI()),null==t)return t;if(n.combine&&(t.allOf&&Array.isArray(t.allOf)&&1===t.allOf.length&&delete(t={...t.allOf[0],...t}).allOf,t.anyOf&&Array.isArray(t.anyOf)&&1===t.anyOf.length&&delete(t={...t.anyOf[0],...t}).anyOf,t.oneOf&&Array.isArray(t.oneOf)&&1===t.oneOf.length&&delete(t={...t.oneOf[0],...t}).oneOf),o(t,r,n),n.seen.has(t))return t;if("object"==typeof t&&null!==t&&n.seen.set(t,!0),n.top=!1,n.depth++,void 0!==t.items&&(n.property="items",e(t.items,t,n,o)),t.additionalItems&&"object"==typeof t.additionalItems&&(n.property="additionalItems",e(t.additionalItems,t,n,o)),t.additionalProperties&&"object"==typeof t.additionalProperties&&(n.property="additionalProperties",e(t.additionalProperties,t,n,o)),t.properties)for(const a in t.properties){const r=t.properties[a];n.property=`properties/${a}`,e(r,t,n,o)}if(t.patternProperties)for(const a in t.patternProperties){const r=t.patternProperties[a];n.property=`patternProperties/${a}`,e(r,t,n,o)}if(t.allOf)for(const a in t.allOf){const r=t.allOf[a];n.property=`allOf/${a}`,e(r,t,n,o)}if(t.anyOf)for(const a in t.anyOf){const r=t.anyOf[a];n.property=`anyOf/${a}`,e(r,t,n,o)}if(t.oneOf)for(const a in t.oneOf){const r=t.oneOf[a];n.property=`oneOf/${a}`,e(r,t,n,o)}return t.not&&(n.property="not",e(t.not,t,n,o)),n.depth--,t}};function sI(e,t,r){if(t||(t={depth:0}),t.depth||(t={path:"#",depth:0,pkey:"",parent:{},payload:{},seen:new WeakMap,identity:!1,identityDetection:!1,...t}),"object"!=typeof e)return;const n=t.path;for(const o in e){if(t.key=o,t.path=`${t.path}/${encodeURIComponent(o)}`,t.identityPath=t.seen.get(e[o]),t.identity=void 0!==t.identityPath,e.hasOwnProperty(o)&&r(e,o,t),"object"==typeof e[o]&&!t.identity){t.identityDetection&&!Array.isArray(e[o])&&null!==e[o]&&t.seen.set(e[o],t.path);const n={};n.parent=e,n.path=t.path,n.depth=t.depth?t.depth+1:1,n.pkey=o,n.payload=t.payload,n.seen=t.seen,n.identity=!1,n.identityDetection=t.identityDetection,sI(e[o],n,r)}t.path=n}}let lI;function cI(e,t){for(const r in e)r.startsWith("x-")&&!r.startsWith("x-s2o")&&(t[r]=e[r])}function pI(e,t){iI.walkSchema(e,{},{},((e,r)=>{!function(e){if(e["x-required"]&&Array.isArray(e["x-required"])&&(e.required||(e.required=[]),e.required=e.required.concat(e["x-required"]),delete e["x-required"]),e["x-anyOf"]&&(e.anyOf=e["x-anyOf"],delete e["x-anyOf"]),e["x-oneOf"]&&(e.oneOf=e["x-oneOf"],delete e["x-oneOf"]),e["x-not"]&&(e.not=e["x-not"],delete e["x-not"]),"boolean"==typeof e["x-nullable"]&&(e.nullable=e["x-nullable"],delete e["x-nullable"]),"object"==typeof e["x-discriminator"]&&"string"==typeof e["x-discriminator"].propertyName){e.discriminator=e["x-discriminator"],delete e["x-discriminator"];for(const t in e.discriminator.mapping){const r=e.discriminator.mapping[t];r.startsWith("#/definitions/")&&(e.discriminator.mapping[t]=r.replace("#/definitions/","#/components/schemas/"))}}}(e),function(e,t,r){if(e.nullable&&r.patches++,e.discriminator&&"string"==typeof e.discriminator&&(e.discriminator={propertyName:e.discriminator}),e.items&&Array.isArray(e.items)&&(0===e.items.length?e.items={}:1===e.items.length?e.items=e.items[0]:e.items={anyOf:e.items}),e.type&&Array.isArray(e.type)){if(r.patches++,r.warnings.push("(Patchable) schema type must not be an array"),0===e.type.length)delete e.type;else{e.oneOf||(e.oneOf=[]);for(const t of e.type){const r={};if("null"===t)e.nullable=!0;else{r.type=t;for(const t of oI.arrayProperties)void 0!==e.prop&&(r[t]=e[t],delete e[t])}r.type&&e.oneOf.push(r)}delete e.type,0===e.oneOf.length?delete e.oneOf:e.oneOf.length<2&&(e.type=e.oneOf[0].type,Object.keys(e.oneOf[0]).length>1&&(r.patches++,r.warnings.push("Lost properties from oneOf")),delete e.oneOf)}e.type&&Array.isArray(e.type)&&1===e.type.length&&(e.type=e.type[0])}e.type&&"null"===e.type&&(delete e.type,e.nullable=!0),"array"!==e.type||e.items||(e.items={}),"file"===e.type&&(e.type="string",e.format="binary"),"boolean"==typeof e.required&&(e.required&&e.name&&(void 0===t.required&&(t.required=[]),Array.isArray(t.required)&&t.required.push(e.name)),delete e.required),e.xml&&"string"==typeof e.xml.namespace&&(e.xml.namespace||delete e.xml.namespace),e.allowEmptyValue&&(delete e.allowEmptyValue,r.patches++,r.warnings.push("(Patchable): deleted schema.allowEmptyValue"))}(e,r,t)}))}function uI(e){for(const t in e)for(const r in e[t]){const n=oI.sanitise(r);r!==n&&(e[t][n]=e[t][r],delete e[t][r])}}function dI(e,t){if("basic"===e.type&&(e.type="http",e.scheme="basic"),"oauth2"===e.type){const r={};let n=e.flow;"application"===e.flow&&(n="clientCredentials"),"accessCode"===e.flow&&(n="authorizationCode"),"string"==typeof e.authorizationUrl&&(r.authorizationUrl=e.authorizationUrl.split("?")[0].trim()||"/"),"string"==typeof e.tokenUrl&&(r.tokenUrl=e.tokenUrl.split("?")[0].trim()||"/"),r.scopes=e.scopes||{},e.flows={},e.flows[n]=r,delete e.flow,delete e.authorizationUrl,delete e.tokenUrl,delete e.scopes,e.name&&(delete e.name,t.patches++,t.warnings.push("(Patchable) oauth2 securitySchemes should not have name property"))}}function hI(e){return e&&!e["x-s2o-delete"]}function fI(e,t){if(e.type&&!e.schema&&(e.schema={}),e.type&&(e.schema.type=e.type),e.items&&"array"!==e.items.type){if(e.items.collectionFormat!==e.collectionFormat)return t.errCount++,void t.errors.push({message:"Nested collectionFormats are not supported",pointer:"/.../responses/header"});delete e.items.collectionFormat}"array"===e.type?("ssv"===e.collectionFormat?(t.patches++,t.warnings.push("collectionFormat:ssv is no longer supported for headers")):"pipes"===e.collectionFormat?(t.patches++,t.warnings.push("collectionFormat:pipes is no longer supported for headers")):"multi"===e.collectionFormat?e.explode=!0:"tsv"===e.collectionFormat?(e["x-collectionFormat"]="tsv",t.patches++,t.warnings.push("collectionFormat:tsv is no longer supported")):e.style="simple",delete e.collectionFormat):e.collectionFormat&&(delete e.collectionFormat,t.patches++,t.warnings.push("(Patchable) collectionFormat is only applicable to header.type array")),delete e.type;for(const r of oI.parameterTypeProperties)void 0!==e[r]&&(e.schema[r]=e[r],delete e[r]);for(const r of oI.arrayProperties)void 0!==e[r]&&(e.schema[r]=e[r],delete e[r])}function mI(e,t,r,n,o,a,i){const s={};let l,c=!0;t&&t.consumes&&"string"==typeof t.consumes&&(t.consumes=[t.consumes],i.patches++,i.warnings.push("(Patchable) operation.consumes must be an array")),Array.isArray(a.consumes)||delete a.consumes;const p=((t?t.consumes:null)||a.consumes||[]).filter(oI.uniqueOnly);if(e&&(e.name||e.in)){"boolean"==typeof e["x-deprecated"]&&(e.deprecated=e["x-deprecated"],delete e["x-deprecated"]),void 0!==e["x-example"]&&(e.example=e["x-example"],delete e["x-example"]),"body"===e.in||e.type||(e.type="string",i.patches++,i.warnings.push("(Patchable) parameter.type is mandatory for non-body parameters")),"file"===e.type&&(e["x-s2o-originalType"]=e.type,l=e.type),null===e.description&&delete e.description;let t=e.collectionFormat;if("array"!==e.type||t||(t="csv"),t&&("array"!==e.type&&(delete e.collectionFormat,i.patches++,i.warnings.push("(Patchable) collectionFormat is only applicable to param.type array")),"csv"!==t||"query"!==e.in&&"cookie"!==e.in||(e.style="form",e.explode=!1),"csv"!==t||"path"!==e.in&&"header"!==e.in||(e.style="simple"),"ssv"===t&&("query"===e.in?e.style="spaceDelimited":i.warnings.push(`${e.name} collectionFormat:ssv is no longer supported except for in:query parameters`)),"pipes"===t&&("query"===e.in?e.style="pipeDelimited":i.warnings.push(`${e.name} collectionFormat:pipes is no longer supported except for in:query parameters`)),"multi"===t&&(e.explode=!0),"tsv"===t&&(i.warnings.push("collectionFormat:tsv is no longer supported"),e["x-collectionFormat"]="tsv"),delete e.collectionFormat),e.type&&"body"!==e.type&&"formData"!==e.in)if(e.items&&e.schema)i.warnings.push(`${e.name} parameter has array,items and schema`);else{e.schema&&i.patches++,e.schema&&"object"==typeof e.schema||(e.schema={}),e.schema.type=e.type,e.items&&(e.schema.items=e.items,delete e.items,sI(e.schema.items,null,((r,n)=>{"collectionFormat"===n&&"string"==typeof r[n]&&(t&&r[n]!==t&&i.warnings.push(`${e.name} Nested collectionFormats are not supported`),delete r[n])})));for(const t of oI.parameterTypeProperties)void 0!==e[t]&&(e.schema[t]=e[t]),delete e[t]}e.schema&&pI(e.schema,i),e["x-ms-skip-url-encoding"]&&"query"===e.in&&(e.allowReserved=!0,delete e["x-ms-skip-url-encoding"])}if(e&&"formData"===e.in){c=!1,s.content={};let t="application/x-www-form-urlencoded";if(p.length&&p.indexOf("multipart/form-data")>=0&&(t="multipart/form-data"),s.content[t]={},e.schema)s.content[t].schema=e.schema;else{s.content[t].schema={},s.content[t].schema.type="object",s.content[t].schema.properties={},s.content[t].schema.properties[e.name]={};const r=s.content[t].schema,n=s.content[t].schema.properties[e.name];e.description&&(n.description=e.description),e.example&&(n.example=e.example),e.type&&(n.type=e.type);for(const t of oI.parameterTypeProperties)void 0!==e[t]&&(n[t]=e[t]);!0===e.required&&(r.required||(r.required=[]),r.required.push(e.name),s.required=!0),void 0!==e.default&&(n.default=e.default),n.properties&&(n.properties=e.properties),e.allOf&&(n.allOf=e.allOf),"array"===e.type&&e.items&&(n.items=e.items,n.items.collectionFormat&&delete n.items.collectionFormat),"file"!==l&&"file"!==e["x-s2o-originalType"]||(n.type="string",n.format="binary"),cI(e,n)}}else e&&"file"===e.type&&(e.required&&(s.required=e.required),s.content={},s.content["application/octet-stream"]={},s.content["application/octet-stream"].schema={},s.content["application/octet-stream"].schema.type="string",s.content["application/octet-stream"].schema.format="binary",cI(e,s));if(e&&"body"===e.in){s.content={},e.name&&(s["x-s2o-name"]=(t&&t.operationId?oI.sanitiseAll(t.operationId):"")+oI.camelize(`_${e.name}`)),e.description&&(s.description=e.description),e.required&&(s.required=e.required),p.length||p.push("application/json");for(const t of p)s.content[t]={},s.content[t].schema=oI.clone(e.schema||{}),pI(s.content[t].schema,i);cI(e,s)}if(Object.keys(s).length>0&&(e["x-s2o-delete"]=!0,t))if(t.requestBody&&c){t.requestBody["x-s2o-overloaded"]=!0;const e=t.operationId||o;i.warnings.push(`Operation ${e} has multiple requestBodies`)}else t.requestBody||(t=function(e,t){const r={};for(const n of Object.keys(e))r[n]=e[n],"parameters"===n&&(r.requestBody={},t.rbname&&(r[t.rbname]=""));return r.requestBody={},r}(t,i),r[n]=t),t.requestBody.content&&t.requestBody.content["multipart/form-data"]&&t.requestBody.content["multipart/form-data"].schema&&t.requestBody.content["multipart/form-data"].schema.properties&&s.content["multipart/form-data"]&&s.content["multipart/form-data"].schema&&s.content["multipart/form-data"].schema.properties?(t.requestBody.content["multipart/form-data"].schema.properties=Object.assign(t.requestBody.content["multipart/form-data"].schema.properties,s.content["multipart/form-data"].schema.properties),t.requestBody.content["multipart/form-data"].schema.required=(t.requestBody.content["multipart/form-data"].schema.required||[]).concat(s.content["multipart/form-data"].schema.required||[]),t.requestBody.content["multipart/form-data"].schema.required.length||delete t.requestBody.content["multipart/form-data"].schema.required):t.requestBody.content&&t.requestBody.content["application/x-www-form-urlencoded"]&&t.requestBody.content["application/x-www-form-urlencoded"].schema&&t.requestBody.content["application/x-www-form-urlencoded"].schema.properties&&s.content["application/x-www-form-urlencoded"]&&s.content["application/x-www-form-urlencoded"].schema&&s.content["application/x-www-form-urlencoded"].schema.properties?(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties=Object.assign(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties,s.content["application/x-www-form-urlencoded"].schema.properties),t.requestBody.content["application/x-www-form-urlencoded"].schema.required=(t.requestBody.content["application/x-www-form-urlencoded"].schema.required||[]).concat(s.content["application/x-www-form-urlencoded"].schema.required||[]),t.requestBody.content["application/x-www-form-urlencoded"].schema.required.length||delete t.requestBody.content["application/x-www-form-urlencoded"].schema.required):(t.requestBody=Object.assign(t.requestBody,s),t.requestBody["x-s2o-name"]||t.operationId&&(t.requestBody["x-s2o-name"]=oI.sanitiseAll(t.operationId)));if(e&&!e["x-s2o-delete"]){delete e.type;for(const t of oI.parameterTypeProperties)delete e[t];"path"!==e.in||void 0!==e.required&&!0===e.required||(e.required=!0,i.patches++,i.warnings.push(`(Patchable) path parameters must be required:true [${e.name} in ${o}]`))}return t}function yI(e,t,r,n,o){if(!e)return!1;if(e.description||"object"!=typeof e||Array.isArray(e)||(o.patches++,o.warnings.push("(Patchable) response.description is mandatory")),void 0!==e.schema){pI(e.schema,o),r&&r.produces&&"string"==typeof r.produces&&(r.produces=[r.produces],o.patches++,o.warnings.push("(Patchable) operation.produces must be an array")),n.produces&&!Array.isArray(n.produces)&&delete n.produces;const t=((r?r.produces:null)||n.produces||[]).filter(oI.uniqueOnly);t.length||t.push("*/*"),e.content={};for(const r of t){if(e.content[r]={},e.content[r].schema=oI.clone(e.schema),e.examples&&e.examples[r]){const t={};t.value=e.examples[r],e.content[r].examples={},e.content[r].examples.response=t,delete e.examples[r]}"file"===e.content[r].schema.type&&(e.content[r].schema={type:"string",format:"binary"})}delete e.schema}for(const a in e.examples)e.content||(e.content={}),e.content[a]||(e.content[a]={}),e.content[a].examples={},e.content[a].examples.response={},e.content[a].examples.response.value=e.examples[a];if(delete e.examples,e.headers)for(const a in e.headers)"status code"===a.toLowerCase()?(delete e.headers[a],o.patches++,o.warnings.push('(Patchable) "Status Code" is not a valid header')):fI(e.headers[a],o)}function gI(e,t,r,n,o){for(const a in e){const i=e[a];i&&i["x-trace"]&&"object"==typeof i["x-trace"]&&(i.trace=i["x-trace"],delete i["x-trace"]),i&&i["x-summary"]&&"string"==typeof i["x-summary"]&&(i.summary=i["x-summary"],delete i["x-summary"]),i&&i["x-description"]&&"string"==typeof i["x-description"]&&(i.description=i["x-description"],delete i["x-description"]),i&&i["x-servers"]&&Array.isArray(i["x-servers"])&&(i.servers=i["x-servers"],delete i["x-servers"]);for(const e in i)if(oI.httpMethods.indexOf(e)>=0||"x-amazon-apigateway-any-method"===e){let s=i[e];if(s&&s.parameters&&Array.isArray(s.parameters)){if(i.parameters)for(const t of i.parameters)s.parameters.find((e=>e.name===t.name&&e.in===t.in))||"formData"!==t.in&&"body"!==t.in&&"file"!==t.type||(s=mI(t,s,i,e,a,o,r));for(const t of s.parameters)s=mI(t,s,i,e,`${e}: ${a}`,o,r);s.parameters&&(s.parameters=s.parameters.filter(hI))}if(s&&s.security&&uI(s.security),"object"==typeof s){if(!s.responses){const e={description:"Default response"};s.responses={default:e}}for(const e in s.responses)yI(s.responses[e],0,s,o,r)}if(s&&s["x-servers"]&&Array.isArray(s["x-servers"]))s.servers=s["x-servers"],delete s["x-servers"];else if(s&&s.schemes&&s.schemes.length)for(const e of s.schemes)if((!o.schemes||o.schemes.indexOf(e)<0)&&(s.servers||(s.servers=[]),Array.isArray(o.servers)))for(const t of o.servers){const e=oI.clone(t);s.servers.push(e)}if(s){if(delete s.consumes,delete s.produces,delete s.schemes,s["x-ms-examples"]){for(const e in s["x-ms-examples"]){const t=s["x-ms-examples"][e],r=oI.sanitiseAll(e);if(t.parameters)for(const n in t.parameters){const r=t.parameters[n];for(const t of(s.parameters||[]).concat(i.parameters||[]))t.name!==n||t.example||(t.examples||(t.examples={}),t.examples[e]={value:r})}if(t.responses)for(const n in t.responses){if(t.responses[n].headers)for(const e in t.responses[n].headers){const r=t.responses[n].headers[e];for(const t in s.responses[n].headers)t===e&&(s.responses[n].headers[t].example=r)}if(t.responses[n].body&&(o.components.examples[r]={value:oI.clone(t.responses[n].body)},s.responses[n]&&s.responses[n].content))for(const t in s.responses[n].content){const o=s.responses[n].content[t];o.examples||(o.examples={}),o.examples[e]={$ref:`#/components/examples/${r}`}}}}delete s["x-ms-examples"]}if(s.parameters&&0===s.parameters.length&&delete s.parameters,s.requestBody){const r=s.operationId?oI.sanitiseAll(s.operationId):oI.camelize(oI.sanitiseAll(e+a)),o=oI.sanitise(s.requestBody["x-s2o-name"]||r||"");delete s.requestBody["x-s2o-name"];const i=JSON.stringify(s.requestBody),l=oI.createHash(i);if(!n[l]){const e={};e.name=o,e.body=s.requestBody,e.refs=[],n[l]=e}const c=`#/${t}/${encodeURIComponent(a)}/${e}/requestBody`;n[l].refs.push(c)}}}if(i&&i.parameters){for(const e in i.parameters)mI(i.parameters[e],null,i,null,a,o,r);Array.isArray(i.parameters)&&(i.parameters=i.parameters.filter(hI))}}}function vI(e){return e&&e.url&&"string"==typeof e.url?(e.url=e.url.split("{{").join("{"),e.url=e.url.split("}}").join("}"),e.url.replace(/\{(.+?)\}/g,((t,r)=>{e.variables||(e.variables={}),e.variables[r]={default:"unknown"}})),e):e}function bI(e,t){void 0!==e.info&&null!==e.info||(e.info={version:"",title:""},t.patches++,t.warnings.push("(Patchable) info object is mandatory")),("object"!=typeof e.info||Array.isArray(e.info))&&(t.errCount++,t.errors.push({message:"info must be an object",pointer:"/info"})),e.info&&(void 0===e.info.title&&(t.patches++,e.info.title="",t.warnings.push({message:"(Patchable) info.title cannot be null",pointer:"/info/title",patchable:!0})),void 0===e.info.version?(t.patches++,e.info.version="",t.warnings.push("(Patchable) info.version cannot be null")):"string"!=typeof e.info.version&&(t.patches++,e.info.version=e.info.version.toString(),t.warnings.push("(Patchable) info.version must be a string")))}function xI(e,t){e.paths||(t.patches++,e.paths={},t.warnings.push("(Patchable) paths object is mandatory"))}function wI(e={}){const t={original:e,openapi:{},patches:0,warnings:[],errCount:0,errors:[]};if(e.openapi&&"string"==typeof e.openapi&&e.openapi.startsWith("3."))return t.openapi=oI.circularClone(e),bI(t.openapi,t),xI(t.openapi,t),t;if("2.0"!==e.swagger)return t.errCount++,t.errors.push({message:`Unsupported swagger/OpenAPI version: ${e.openapi?e.openapi:e.swagger}`,pointer:"/swagger"}),t;if(t.openapi=oI.circularClone(e),t.openapi.openapi="3.0.0",delete t.openapi.swagger,sI(t.openapi,{},((e,t,r)=>{null===e[t]&&!t.startsWith("x-")&&"default"!==t&&r.path.indexOf("/example")<0&&delete e[t]})),e.host)(e.schemes||[]).forEach((r=>{const n={},o=(e.basePath||"").replace(/\/$/,"");n.url=`${r?`${r}:`:""}//${e.host}${o}`,vI(n),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(n)}));else if(e.basePath){const r={};r.url=e.basePath,vI(r),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(r)}if(delete t.openapi.host,delete t.openapi.basePath,e["x-ms-parameterized-host"]){const r=e["x-ms-parameterized-host"],n={};n.url=r.hostTemplate+(e.basePath?e.basePath:""),n.variables={};const o=n.url.match(/\{\w+\}/g);for(const e in r.parameters){const t=r.parameters[e];e.startsWith("x-")||(delete t.required,delete t.type,delete t.in,void 0===t.default&&(t.enum?t.default=t.enum[0]:t.default="none"),t.name||(t.name=o[e].replace("{","").replace("}","")),n.variables[t.name]=t,delete t.name)}t.openapi.servers||(t.openapi.servers=[]),!1===r.useSchemePrefix?t.openapi.servers.push(n):e.schemes.forEach((e=>{t.openapi.servers.push({...n,url:`${e}://${n.url}`})})),delete t.openapi["x-ms-parameterized-host"]}return bI(t.openapi,t),xI(t.openapi,t),"string"==typeof t.openapi.consumes&&(t.openapi.consumes=[t.openapi.consumes]),"string"==typeof t.openapi.produces&&(t.openapi.produces=[t.openapi.produces]),t.openapi.components={},t.openapi["x-callbacks"]&&(t.openapi.components.callbacks=t.openapi["x-callbacks"],delete t.openapi["x-callbacks"]),t.openapi.components.examples={},t.openapi.components.headers={},t.openapi["x-links"]&&(t.openapi.components.links=t.openapi["x-links"],delete t.openapi["x-links"]),t.openapi.components.parameters=t.openapi.parameters||{},t.openapi.components.responses=t.openapi.responses||{},t.openapi.components.requestBodies={},t.openapi.components.securitySchemes=t.openapi.securityDefinitions||{},t.openapi.components.schemas=t.openapi.definitions||{},delete t.openapi.definitions,delete t.openapi.responses,delete t.openapi.parameters,delete t.openapi.securityDefinitions,function(e){const t=e.openapi,r={};lI={schemas:{}},t.security&&uI(t.security);for(const n in t.components.securitySchemes){const r=oI.sanitise(n);if(n!==r){if(t.components.securitySchemes[r])return e.errCount++,e.errors.push({message:`Duplicate sanitised securityScheme name ${r}`,pointer:`/components/securitySchemes/${r}`}),e;t.components.securitySchemes[r]=t.components.securitySchemes[n],delete t.components.securitySchemes[n]}dI(t.components.securitySchemes[r],e)}for(const n in t.components.schemas){const r=oI.sanitiseAll(n);let o="";if(n!==r){for(;t.components.schemas[r+o];)o=o?++o:2;t.components.schemas[r+o]=t.components.schemas[n],delete t.components.schemas[n]}lI.schemas[n]=r+o,pI(t.components.schemas[`${r}${o}`],e)}for(const n in t.components.parameters){const r=oI.sanitise(n);if(n!==r){if(t.components.parameters[r])return e.errCount++,e.errors.push({message:`Duplicate sanitised parameter name ${r}`,pointer:`/components/parameters/${r}`}),e;t.components.parameters[r]=t.components.parameters[n],delete t.components.parameters[n]}mI(t.components.parameters[r],null,null,null,r,t,e)}for(const n in t.components.responses){const r=oI.sanitise(n);if(n!==r){if(t.components.responses[r])return e.errCount++,e.errors.push({message:`Duplicate sanitised response name ${r}`,pointer:`/components/responses/${r}`}),e;t.components.responses[r]=t.components.responses[n],delete t.components.responses[n]}const o=t.components.responses[r];if(yI(o,0,null,t,e),o.headers)for(const t in o.headers)"status code"===t.toLowerCase()?(delete o.headers[t],e.patches++,e.warnings.push('(Patchable) "Status Code" is not a valid header')):fI(o.headers[t],e)}for(const n in t.components.requestBodies){const e=t.components.requestBodies[n],o=JSON.stringify(e),a=oI.createHash(o),i={};i.name=n,i.body=e,i.refs=[],r[a]=i}gI(t.paths,"paths",e,r,t),t["x-ms-paths"]&&gI(t["x-ms-paths"],"x-ms-paths",e,r,t);for(const n in t.components.parameters)t.components.parameters[n]["x-s2o-delete"]&&delete t.components.parameters[n];return delete t.consumes,delete t.produces,delete t.schemes,t.components.requestBodies={},t.components.responses&&0===Object.keys(t.components.responses).length&&delete t.components.responses,t.components.parameters&&0===Object.keys(t.components.parameters).length&&delete t.components.parameters,t.components.examples&&0===Object.keys(t.components.examples).length&&delete t.components.examples,t.components.requestBodies&&0===Object.keys(t.components.requestBodies).length&&delete t.components.requestBodies,t.components.securitySchemes&&0===Object.keys(t.components.securitySchemes).length&&delete t.components.securitySchemes,t.components.headers&&0===Object.keys(t.components.headers).length&&delete t.components.headers,t.components.schemas&&0===Object.keys(t.components.schemas).length&&delete t.components.schemas,t.components&&0===Object.keys(t.components).length&&delete t.components,e}(t)}var $I=function(e){return new Promise((async t=>{try{const r=await rI.resolve(e);if(r.errors&&r.errors.length>0)t(r);else{r.spec.openapi&&(r.resolvedSpec=r.spec,t(r));const e=wI(r.spec);e.errors&&e.errors.length>0&&(Array.isArray(r.errors)?r.errors.concat(r.errors):r.errors=e.errors),e.warnings&&e.warnings.length>0&&(r.warnings=e.warnings),r.resolvedSpec=r.spec,r.spec=e.openapi,t(r)}}catch(e){t(e)}}))};async function kI(e,t=!1,r=!1,n="",o="",a="",i="",s=""){var l,c;let p;try{var u,d;let t;if(this.requestUpdate(),t="string"==typeof e?await $I({url:e,allowMetaPatches:!1}):await $I({spec:e,allowMetaPatches:!1}),await rt(0),null!==(u=t.resolvedSpec)&&void 0!==u&&u.jsonSchemaViewer&&null!==(d=t.resolvedSpec)&&void 0!==d&&d.schemaAndExamples){this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:t.resolvedSpec}}));const e=Object.entries(t.resolvedSpec.schemaAndExamples).map((e=>({show:!0,expanded:!0,selectedExample:null,name:e[0],elementId:e[0].replace(et,"-"),...e[1]})));return{specLoadError:!1,isSpecLoading:!1,info:t.resolvedSpec.info,schemaAndExamples:e}}var h,f,m,y;if(!t.spec||!(t.spec.components||t.spec.info||t.spec.servers||t.spec.tags||t.spec.paths))return console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",t),{specLoadError:!0,isSpecLoading:!1,info:{title:"Error loading the spec",description:null!==(h=t.response)&&void 0!==h&&h.url?`${null===(f=t.response)||void 0===f?void 0:f.url} \u2503 ${null===(m=t.response)||void 0===m?void 0:m.status}  ${null===(y=t.response)||void 0===y?void 0:y.statusText}`:"Unable to load the Spec",version:" "},tags:[]};p=t.spec,this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:p}}))}catch(e){console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",e)}const g=function(e,t,r=!1,n=!1){const o=["get","put","post","delete","patch","head","options"],a=e.tags&&Array.isArray(e.tags)?e.tags.map((e=>({show:!0,elementId:`tag--${e.name.replace(et,"-")}`,name:e.name,description:e.description||"",headers:e.description?SI(e.description):[],paths:[],expanded:!1!==e["x-tag-expanded"]}))):[],i=e.paths||{};if(e.webhooks)for(const[l,c]of Object.entries(e.webhooks))c._type="webhook",i[l]=c;for(const l in i){const t=i[l].parameters,n={servers:i[l].servers||[],parameters:i[l].parameters||[]},s="webhook"===i[l]._type;o.forEach((o=>{if(i[l][o]){const i=e.paths[l][o],c=i.tags||[];if(0===c.length)if(r){const e=l.replace(/^\/+|\/+$/g,""),t=e.indexOf("/");-1===t?c.push(e):c.push(e.substr(0,t))}else c.push("General \u2982");c.forEach((r=>{let c,p;var u,d;e.tags&&(p=e.tags.find((e=>e.name.toLowerCase()===r.toLowerCase()))),c=a.find((e=>e.name===r)),c||(c={show:!0,elementId:`tag--${r.replace(et,"-")}`,name:r,description:(null===(u=p)||void 0===u?void 0:u.description)||"",headers:null!==(d=p)&&void 0!==d&&d.description?SI(p.description):[],paths:[],expanded:!p||!1!==p["x-tag-expanded"]},a.push(c));let h=(i.summary||i.description||`${o.toUpperCase()} ${l}`).trim();h.length>100&&([h]=h.split(/[.|!|?]\s|[\r?\n]/));let f=[];if(f=t?i.parameters?t.filter((e=>{if(!i.parameters.some((t=>e.name===t.name&&e.in===t.in)))return e})).concat(i.parameters):t.slice(0):i.parameters?i.parameters.slice(0):[],i.callbacks)for(const[e,t]of Object.entries(i.callbacks)){const r=Object.entries(t).filter((e=>"object"==typeof e[1]))||[];i.callbacks[e]=Object.fromEntries(r)}c.paths.push({show:!0,expanded:!1,isWebhook:s,expandedAtLeastOnce:!1,summary:i.summary||"",description:i.description||"",shortSummary:h,method:o,path:l,operationId:i.operationId,elementId:`${o}-${l.replace(et,"-")}`,servers:i.servers?n.servers.concat(i.servers):n.servers,parameters:f,requestBody:i.requestBody,responses:i.responses,callbacks:i.callbacks,deprecated:i.deprecated,security:i.security,xBadges:i["x-badges"]||void 0,xCodeSamples:i["x-codeSamples"]||i["x-code-samples"]||""})}))}}))}const s=a.filter((e=>e.paths&&e.paths.length>0));return s.forEach((e=>{"method"===t?e.paths.sort(((e,t)=>o.indexOf(e.method).toString().localeCompare(o.indexOf(t.method)))):"summary"===t?e.paths.sort(((e,t)=>e.shortSummary.localeCompare(t.shortSummary))):"path"===t&&e.paths.sort(((e,t)=>e.path.localeCompare(t.path))),e.firstPathId=e.paths[0].elementId})),n?s.sort(((e,t)=>e.name.localeCompare(t.name))):s}(p,n,t,r),v=function(e){if(!e.components)return[];const t=[];for(const r in e.components){const n=[];for(const t in e.components[r]){const o={show:!0,id:`${r.toLowerCase()}-${t.toLowerCase()}`.replace(et,"-"),name:t,component:e.components[r][t]};n.push(o)}let o=r,a=r;switch(r){case"schemas":a="Schemas",o="Schemas allows the definition of input and output data types. These types can be objects, but also primitives and arrays.";break;case"responses":a="Responses",o="Describes responses from an API Operation, including design-time, static links to operations based on the response.";break;case"parameters":a="Parameters",o="Describes operation parameters. A unique parameter is defined by a combination of a name and location.";break;case"examples":a="Examples",o="List of Examples for operations, can be requests, responses and objects examples.";break;case"requestBodies":a="Request Bodies",o="Describes common request bodies that are used across the API operations.";break;case"headers":a="Headers",o='Headers follows the structure of the Parameters but they are explicitly in "header"';break;case"securitySchemes":a="Security Schemes",o="Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows(implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.";break;case"links":a="Links",o="Links represent a possible design-time link for a response. The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.";break;case"callbacks":a="Callbacks",o="A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.";break;default:a=r,o=r}const i={show:!0,name:a,description:o,subComponents:n};t.push(i)}return t||[]}(p),b=null!==(l=p.info)&&void 0!==l&&l.description?SI(p.info.description):[],x=[];if(null!==(c=p.components)&&void 0!==c&&c.securitySchemes){const e=new Set;Object.entries(p.components.securitySchemes).forEach((t=>{if(!e.has(t[0])){e.add(t[0]);const r={securitySchemeId:t[0],...t[1]};r.value="",r.finalKeyValue="","apiKey"===t[1].type||"http"===t[1].type?(r.in=t[1].in||"header",r.name=t[1].name||"Authorization",r.user="",r.password=""):"oauth2"===t[1].type&&(r.in="header",r.name="Authorization",r.clientId="",r.clientSecret=""),x.push(r)}}))}o&&a&&i&&x.push({securitySchemeId:tt,description:"api-key provided in rapidoc element attributes",type:"apiKey",oAuthFlow:"",name:o,in:a,value:i,finalKeyValue:i}),x.forEach((e=>{"http"===e.type?e.typeDisplay="basic"===e.scheme?"HTTP Basic":"HTTP Bearer":"apiKey"===e.type?e.typeDisplay=`API Key (${e.name})`:"oauth2"===e.type?e.typeDisplay=`OAuth (${e.securitySchemeId})`:e.typeDisplay=e.type||"None"}));let w=[];return p.servers&&Array.isArray(p.servers)?(p.servers.forEach((e=>{let t=e.url.trim();t.startsWith("http")||t.startsWith("//")||t.startsWith("{")||window.location.origin.startsWith("http")&&(e.url=window.location.origin+e.url,t=e.url),e.variables&&Object.entries(e.variables).forEach((e=>{const r=new RegExp(`{${e[0]}}`,"g");t=t.replace(r,e[1].default||""),e[1].value=e[1].default||""})),e.computedUrl=t})),s&&p.servers.push({url:s,computedUrl:s})):s?p.servers=[{url:s,computedUrl:s}]:window.location.origin.startsWith("http")?p.servers=[{url:window.location.origin,computedUrl:window.location.origin}]:p.servers=[{url:"http://localhost",computedUrl:"http://localhost"}],w=p.servers,{specLoadError:!1,isSpecLoading:!1,info:p.info,infoDescriptionHeaders:b,tags:g,components:v,externalDocs:p.externalDocs,securitySchemes:x,servers:w}}function SI(e){return Ue.lexer(e).filter((e=>"heading"===e.type&&e.depth<=2))||[]}const AI=e=>(...t)=>({_$litDirective$:e,values:t});class EI{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class OI extends EI{constructor(e){if(super(e),this.it=N,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||null==e)return this.ft=void 0,this.it=e;if(e===F)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}OI.directiveName="unsafeHTML",OI.resultType=1;const TI=AI(OI),CI="rapidoc";function _I(e,t="",r="",n=""){var o,a;const i=null===(o=this.resolvedSpec.securitySchemes)||void 0===o?void 0:o.find((t=>t.securitySchemeId===e));if(!i)return!1;let s="";if("basic"===(null===(a=i.scheme)||void 0===a?void 0:a.toLowerCase()))t&&(s=`Basic ${btoa(`${t}:${r}`)}`);else if(n){var l;i.value=n,s=`${"bearer"===(null===(l=i.scheme)||void 0===l?void 0:l.toLowerCase())?"Bearer ":""}${n}`}return!!s&&(i.finalKeyValue=s,this.requestUpdate(),!0)}function jI(){var e;null===(e=this.resolvedSpec.securitySchemes)||void 0===e||e.forEach((e=>{e.user="",e.password="",e.value="",e.finalKeyValue=""})),this.requestUpdate()}function II(){return JSON.parse(localStorage.getItem(CI))||{}}function PI(e){localStorage.setItem(CI,JSON.stringify(e))}function RI(){const e=II.call(this);Object.values(e).forEach((e=>{_I.call(this,e.securitySchemeId,e.username,e.password,e.value)}))}function LI(e){let t="";const r=this.resolvedSpec.securitySchemes.find((t=>t.securitySchemeId===e));if(r){const n=this.shadowRoot.getElementById(`security-scheme-${e}`);if(n){if(r.type&&r.scheme&&"http"===r.type&&"basic"===r.scheme.toLowerCase()){const t=n.querySelector(".api-key-user").value.trim(),r=n.querySelector(".api-key-password").value.trim();_I.call(this,e,t,r)}else t=n.querySelector(".api-key-input").value.trim(),_I.call(this,e,"","",t);if("true"===this.persistAuth){const t=II.call(this);t[e]=r,PI.call(this,t)}}}}function DI(e,t,r="Bearer"){this.resolvedSpec.securitySchemes.find((t=>t.securitySchemeId===e)).finalKeyValue=`${"bearer"===r.toLowerCase()?"Bearer":"mac"===r.toLowerCase()?"MAC":r} ${t}`,this.requestUpdate()}async function BI(e,t,r,n,o,a,i,s,l="header",c=null,p=null,u=null){const d=s?s.querySelector(".oauth-resp-display"):void 0,h=new URLSearchParams,f=new Headers;h.append("grant_type",o),"client_credentials"!==o&&"password"!==o&&h.append("redirect_uri",n),a&&(h.append("code",a),h.append("code_verifier","731DB1C3F7EA533B85E29492D26AA-1234567890-1234567890")),"header"===l?f.set("Authorization",`Basic ${btoa(`${t}:${r}`)}`):(h.append("client_id",t),h.append("client_secret",r)),"password"===o&&(h.append("username",p),h.append("password",u)),c&&h.append("scope",c);try{const t=await fetch(e,{method:"POST",headers:f,body:h}),r=await t.json();if(!t.ok)return d&&(d.innerHTML=`<span style="color:var(--red)">${r.error_description||r.error_description||"Unable to get access token"}</span>`),!1;if(r.token_type&&r.access_token)return DI.call(this,i,r.access_token,r.token_type),d&&(d.innerHTML='<span style="color:var(--green)">Access Token Received</span>'),!0}catch(e){return d&&(d.innerHTML='<span style="color:var(--red)">Failed to get access token</span>'),!1}}async function FI(e,t,r,n,o,a,i,s,l,c){sessionStorage.removeItem("winMessageEventActive"),t.close(),e.data.fake||(e.data||console.warn("RapiDoc: Received no data with authorization message"),e.data.error&&console.warn("RapiDoc: Error while receiving data"),e.data&&("code"===e.data.responseType?BI.call(this,r,n,o,a,i,e.data.code,l,c,s):"token"===e.data.responseType&&DI.call(this,l,e.data.access_token,e.data.token_type)))}async function NI(e,t,r,n,o){const a=o.target.closest(".oauth-flow"),i=a.querySelector(".oauth-client-id")?a.querySelector(".oauth-client-id").value.trim():"",s=a.querySelector(".oauth-client-secret")?a.querySelector(".oauth-client-secret").value.trim():"",l=a.querySelector(".api-key-user")?a.querySelector(".api-key-user").value.trim():"",c=a.querySelector(".api-key-password")?a.querySelector(".api-key-password").value.trim():"",p=a.querySelector(".oauth-send-client-secret-in")?a.querySelector(".oauth-send-client-secret-in").value.trim():"header",u=[...a.querySelectorAll(".scope-checkbox:checked")],d=a.querySelector(`#${e}-pkce`),h=`${Math.random().toString(36)}random`.slice(2,9),f=`${Math.random().toString(36)}random`.slice(2,9),m=new URL(`${window.location.origin}${window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/"))}/${this.oauthReceiver}`);let y,g="",v="";if([...a.parentNode.querySelectorAll(".oauth-resp-display")].forEach((e=>{e.innerHTML=""})),"authorizationCode"===t||"implicit"===t){const o=new URL(r);"authorizationCode"===t?(g="authorization_code",v="code"):"implicit"===t&&(v="token");const l=new URLSearchParams(o.search),c=u.map((e=>e.value)).join(" ");c&&l.set("scope",c),l.set("client_id",i),l.set("redirect_uri",m.toString()),l.set("response_type",v),l.set("state",h),l.set("nonce",f),d&&d.checked&&(l.set("code_challenge","4FatVDBJKPAo4JgLLaaQFMUcQPn5CrPRvLlaob9PTYc"),l.set("code_challenge_method","S256")),l.set("show_dialog",!0),o.search=l.toString(),"true"===sessionStorage.getItem("winMessageEventActive")&&window.postMessage({fake:!0},this),setTimeout((()=>{y=window.open(o.toString()),y?(sessionStorage.setItem("winMessageEventActive","true"),window.addEventListener("message",(t=>FI.call(this,t,y,n,i,s,m.toString(),g,p,e,a)),{once:!0})):console.error(`RapiDoc: Unable to open ${o.toString()} in a new window`)}),10)}else if("clientCredentials"===t){g="client_credentials";const t=u.map((e=>e.value)).join(" ");BI.call(this,n,i,s,m.toString(),g,"",e,a,p,t)}else if("password"===t){g="password";const t=u.map((e=>e.value)).join(" ");BI.call(this,n,i,s,m.toString(),g,"",e,a,p,t,l,c)}}function zI(e,t,r,n,o,a=[],i="header"){let{authorizationUrl:s,tokenUrl:l,refreshUrl:c}=o;const p=e=>e.indexOf("://")>0||0===e.indexOf("//");let u;return c&&!p(c)&&(c=`${this.selectedServer.computedUrl}/${c.replace(/^\//,"")}`),l&&!p(l)&&(l=`${this.selectedServer.computedUrl}/${l.replace(/^\//,"")}`),s&&!p(s)&&(s=`${this.selectedServer.computedUrl}/${s.replace(/^\//,"")}`),u="authorizationCode"===e?"Authorization Code Flow":"clientCredentials"===e?"Client Credentials Flow":"implicit"===e?"Implicit Flow":"password"===e?"Password Flow":e,B`
    <div class="oauth-flow ${e}" style="padding: 12px 0; margin-bottom:12px;">
      <div class="tiny-title upper" style="margin-bottom:8px;">${u}</div>
      ${s?B`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Auth URL</span> <span class="mono-font"> ${s} </span></div>`:""}
      ${l?B`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Token URL</span> <span class="mono-font">${l}</span></div>`:""}
      ${c?B`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Refresh URL</span> <span class="mono-font">${c}</span></div>`:""}
      ${"authorizationCode"===e||"clientCredentials"===e||"implicit"===e||"password"===e?B`
          ${o.scopes?B`
              <span> Scopes </span>
              <div class= "oauth-scopes" part="section-auth-scopes" style = "width:100%; display:flex; flex-direction:column; flex-wrap:wrap; margin:0 0 10px 24px">
                ${Object.entries(o.scopes).map(((t,r)=>B`
                  <div class="m-checkbox" style="display:inline-flex; align-items:center">
                    <input type="checkbox" part="checkbox checkbox-auth-scope" class="scope-checkbox" id="${n}${e}${r}" ?checked="${a.includes(t[0])}" value="${t[0]}">
                    <label for="${n}${e}${r}" style="margin-left:5px; cursor:pointer">
                      <span class="mono-font">${t[0]}</span>
                        ${t[0]!==t[1]?` - ${t[1]||""}`:""}
                    </label>
                  </div>
                `))}
              </div>
            `:""}
          ${"password"===e?B`
              <div style="margin:5px 0">
                <input type="text" value = "" placeholder="username" spellcheck="false" class="oauth2 ${e} ${n} api-key-user" part="textbox textbox-username">
                <input type="password" value = "" placeholder="password" spellcheck="false" class="oauth2 ${e} ${n} api-key-password" style = "margin:0 5px;" part="textbox textbox-password">
              </div>`:""}
          <div>
            ${"authorizationCode"===e?B`
                <div style="margin: 16px 0 4px">
                  <input type="checkbox" part="checkbox checkbox-auth-scope" id="${n}-pkce" checked>
                  <label for="${n}-pkce" style="margin:0 16px 0 4px; line-height:24px; cursor:pointer">
                   Send Proof Key for Code Exchange (PKCE)
                  </label>
                </div>
              `:""}
            <input type="text" part="textbox textbox-auth-client-id" value = "${t||""}" placeholder="client-id" spellcheck="false" class="oauth2 ${e} ${n} oauth-client-id">
            ${"authorizationCode"===e||"clientCredentials"===e||"password"===e?B`
                <input type="password" part="textbox textbox-auth-client-secret" value = "${r||""}" placeholder="client-secret" spellcheck="false" class="oauth2 ${e} ${n} oauth-client-secret" style = "margin:0 5px;">
                ${"authorizationCode"===e||"clientCredentials"===e||"password"===e?B`
                    <select style="margin-right:5px;" class="${e} ${n} oauth-send-client-secret-in">
                      <option value = 'header' .selected = ${"header"===i} > Authorization Header </option>
                      <option value = 'request-body' .selected = ${"request-body"===i}> Request Body </option>
                    </select>`:""}`:""}
            ${"authorizationCode"===e||"clientCredentials"===e||"implicit"===e||"password"===e?B`
                <button class="m-btn thin-border" part="btn btn-outline"
                  @click="${t=>{NI.call(this,n,e,s,l,t)}}"
                > GET TOKEN </button>`:""}
          </div>
          <div class="oauth-resp-display red-text small-font-size"></div>
          `:""}
    </div>
  `}function UI(e){var t;const r=null===(t=this.resolvedSpec.securitySchemes)||void 0===t?void 0:t.find((t=>t.securitySchemeId===e));if(r.user="",r.password="",r.value="",r.finalKeyValue="","true"===this.persistAuth){const e=II.call(this);delete e[r.securitySchemeId],PI.call(this,e)}this.requestUpdate()}function qI(){var e;if(!this.resolvedSpec)return"";const t=null===(e=this.resolvedSpec.securitySchemes)||void 0===e?void 0:e.filter((e=>e.finalKeyValue));return t?B`
  <section id='auth' part="section-auth" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class = 'observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap "}'>
    <div class='sub-title regular-font'> AUTHENTICATION </div>

    <div class="small-font-size" style="display:flex; align-items: center; min-height:30px">
      ${t.length>0?B`
          <div class="blue-text"> ${t.length} API key applied </div>
          <div style="flex:1"></div>
          <button class="m-btn thin-border" part="btn btn-outline" @click=${()=>{jI.call(this)}}>CLEAR ALL API KEYS</button>`:B`<div class="red-text">No API key applied</div>`}
    </div>
    ${this.resolvedSpec.securitySchemes&&this.resolvedSpec.securitySchemes.length>0?B`
        <table id="auth-table" class='m-table padded-12' style="width:100%;">
          ${this.resolvedSpec.securitySchemes.map((e=>B`
            <tr id="security-scheme-${e.securitySchemeId}" class="${e.type.toLowerCase()}">
              <td style="max-width:500px; overflow-wrap: break-word;">
                <div style="line-height:28px; margin-bottom:5px;">
                  <span style="font-weight:bold; font-size:var(--font-size-regular)">${e.typeDisplay}</span>
                  ${e.finalKeyValue?B`
                      <span class='blue-text'>  ${e.finalKeyValue?"Key Applied":""} </span>
                      <button class="m-btn thin-border small" part="btn btn-outline" @click=${()=>{UI.call(this,e.securitySchemeId)}}>REMOVE</button>
                      `:""}
                </div>
                ${e.description?B`
                    <div class="m-markdown">
                      ${TI(Ue(e.description||""))}
                    </div>`:""}

                ${"apikey"===e.type.toLowerCase()||"http"===e.type.toLowerCase()&&"bearer"===e.scheme.toLowerCase()?B`
                    <div style="margin-bottom:5px">
                      ${"apikey"===e.type.toLowerCase()?B`Send <code>${e.name}</code> in <code>${e.in}</code>`:B`Send <code>Authorization</code> in <code>header</code> containing the word <code>Bearer</code> followed by a space and a Token String.`}
                    </div>
                    <div style="max-height:28px;">
                      ${"cookie"!==e.in?B`
                          <input type = "text" value = "${e.value}" class="${e.type} ${e.securitySchemeId} api-key-input" placeholder = "api-token" spellcheck = "false">
                          <button class="m-btn thin-border" style = "margin-left:5px;"
                            part = "btn btn-outline"
                            @click="${t=>{LI.call(this,e.securitySchemeId,t)}}">
                            ${e.finalKeyValue?"UPDATE":"SET"}
                          </button>`:B`<span class="gray-text" style="font-size::var(--font-size-small)"> cookies cannot be set from here</span>`}
                    </div>`:""}
                ${"http"===e.type.toLowerCase()&&"basic"===e.scheme.toLowerCase()?B`
                    <div style="margin-bottom:5px">
                      Send <code>Authorization</code> in <code>header</code> containing the word <code>Basic</code> followed by a space and a base64 encoded string of <code>username:password</code>.
                    </div>
                    <div>
                      <input type="text" value = "${e.user}" placeholder="username" spellcheck="false" class="${e.type} ${e.securitySchemeId} api-key-user" style="width:100px">
                      <input type="password" value = "${e.password}" placeholder="password" spellcheck="false" class="${e.type} ${e.securitySchemeId} api-key-password" style = "width:100px; margin:0 5px;">
                      <button class="m-btn thin-border"
                        @click="${t=>{LI.call(this,e.securitySchemeId,t)}}"
                        part = "btn btn-outline"
                      >
                        ${e.finalKeyValue?"UPDATE":"SET"}
                      </button>
                    </div>`:""}
              </td>
            </tr>
            ${"oauth2"===e.type.toLowerCase()?B`
                <tr>
                  <td style="border:none; padding-left:48px">
                    ${Object.keys(e.flows).map((t=>zI.call(this,t,e["x-client-id"],e["x-client-secret"],e.securitySchemeId,e.flows[t],e["x-default-scopes"],e["x-receive-token-in"])))}
                  </td>
                </tr>
                `:""}
          `))}
        </table>`:""}
    <slot name="auth"></slot>
  </section>
`:void 0}function MI(e){if(this.resolvedSpec.securitySchemes&&e){const t=[];return e.forEach((e=>{const r=[],n=[];0===Object.keys(e).length?t.push({securityTypes:"None",securityDefs:[]}):(Object.keys(e).forEach((t=>{let o="";const a=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===t));e[t]&&Array.isArray(e[t])&&(o=e[t].join(", ")),a&&(n.push(a.typeDisplay),r.push({...a,scopes:o}))})),t.push({securityTypes:n.length>1?`${n[0]} + ${n.length-1} more`:n[0],securityDefs:r}))})),B`<div style="position:absolute; top:3px; right:2px; font-size:var(--font-size-small); line-height: 1.5;">
      <div style="position:relative; display:flex; min-width:350px; max-width:700px; justify-content: flex-end;">
        <svg width="16" height="24">
          <g>
            <path style="fill: var(--fg3)" d="m13.8,8.5l0,-2.6l0,0c0,-3.2 -2.6,-5.8 -5.8,-5.8s-5.8,2.6 -5.8,5.8l0,0l0,2.6l-2.1,0l0,11.2l16,0l0,-11.2l-2.1,0l-0,0l0,0l0,0l-0,0zm-9.8,-2.6c0,0 0,0 0,0c0,-2.2 1.8,-4 4,-4c2.2,0 4,1.8 4,4c0,0 0,0 0,0l0,2.6l-8.03,0l0,-2.6l0,0l0,0z" />
          </g>
        </svg>
          ${t.map(((e,t)=>B`

          ${e.securityTypes?B`
              ${0!==t?B`<div style="padding:3px 4px;"> OR </div>`:""}
              <div class="tooltip">
                <div style = "padding:2px 4px; white-space:nowrap; text-overflow:ellipsis;max-width:150px; overflow:hidden;">
                  ${"true"===this.updateRoute&&"true"===this.allowAuthentication?B`<a part="anchor anchor-operation-security" href="#auth"> ${e.securityTypes} </a>`:B`${e.securityTypes}`}
                </div>
                <div class="tooltip-text" style="position:absolute; color: var(--fg); top:26px; right:0; border:1px solid var(--border-color);padding:2px 4px; display:block;">
                  ${e.securityDefs.length>1?B`<div>Requires <b>all</b> of the following </div>`:""}
                  <div style="padding-left: 8px">
                    ${e.securityDefs.map(((t,r)=>{const n=B`${""!==t.scopes?B`
                          <div>
                            <b>Required scopes:</b>
                            <br/>
                            <div style="margin-left:8px">
                              ${t.scopes.split(",").map(((e,t)=>B`${0===t?"":"\u2503"}<span>${e}</span>`))}
                            </div>
                          </div>`:""}`;return B`
                      ${"oauth2"===t.type?B`
                          <div>
                            ${e.securityDefs.length>1?B`<b>${r+1}.</b> &nbsp;`:"Needs"}
                            OAuth Token <span style="font-family:var(--font-mono); color:var(--primary-color);">${t.securitySchemeId}</span> in <b>Authorization header</b>
                            ${n}
                          </div>`:"http"===t.type?B`
                            <div>
                              ${e.securityDefs.length>1?B`<b>${r+1}.</b> &nbsp;`:B`Requires`}
                              ${"basic"===t.scheme?"Base 64 encoded username:password":"Bearer Token"} in <b>Authorization header</b>
                              ${n}
                            </div>`:B`
                            <div>
                              ${e.securityDefs.length>1?B`<b>${r+1}.</b> &nbsp;`:B`Requires`}
                              Token in <b>${t.name} ${t.in}</b>
                              ${n}
                            </div>`}`}))}
                  </div>
                </div>
              </div>
            `:""}
        `))}
      </div>
    `}return""}function HI(e){return B`
  <section class="table-title" style="margin-top:24px;">CODE SAMPLES</div>
  <div class="tab-panel col"
    @click="${e=>{if(!e.target.classList.contains("tab-btn"))return;const t=e.target.dataset.tab,r=[...e.currentTarget.querySelectorAll(".tab-btn")],n=[...e.currentTarget.querySelectorAll(".tab-content")];r.forEach((e=>e.classList[e.dataset.tab===t?"add":"remove"]("active"))),n.forEach((e=>{e.style.display=e.dataset.tab===t?"block":"none"}))}}">
    <div class="tab-buttons row" style="width:100; overflow">
      ${e.map(((e,t)=>B`<button class="tab-btn ${0===t?"active":""}" data-tab = '${e.lang}${t}'> ${e.label||e.lang} </button>`))}
    </div>
    ${e.map(((e,t)=>{var r,n,o;return B`
      <div class="tab-content m-markdown" style= "display:${0===t?"block":"none"}" data-tab = '${e.lang}${t}'>
        <button class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${t=>{nt(e.source,t)}}'> Copy </button>
        <pre><code class="language">${Me().languages[null===(r=e.lang)||void 0===r?void 0:r.toLowerCase()]?TI(Me().highlight(e.source,Me().languages[null===(n=e.lang)||void 0===n?void 0:n.toLowerCase()],null===(o=e.lang)||void 0===o?void 0:o.toLowerCase())):e.source}</code></pre>
      </div>`}))}
  </section>`}function WI(e){return B`
    <div class="req-res-title" style="margin-top:12px">CALLBACKS</div>
    ${Object.entries(e).map((e=>B`
      <div class="tiny-title" style="padding: 12px; border:1px solid var(--light-border-color)"> 
        ${e[0]}
        ${Object.entries(e[1]).map((e=>B`
          <div class="mono-font small-font-size" style="display:flex; margin-left:16px;">
            <div> 
              ${Object.entries(e[1]).map((t=>{var r,n,o;return B`
                <div>
                  <div style="margin-top:12px;">
                    <div class="method method-fg ${t[0]}" style="width:70px; border:none; margin:0; padding:0; line-height:20px; vertical-align: baseline;text-align:left"> 
                      <span style="font-size:20px;"> &#x2944; </span> 
                      ${t[0]} 
                    </div>
                    <span style="line-height:20px; vertical-align: baseline;">${e[0]} </span>
                  </div>  
                  <div class='expanded-req-resp-container'>
                    <api-request
                      class = "${this.renderStyle}-mode callback"  
                      style = "width:100%;"
                      callback = "true"
                      method = "${t[0]||""}", 
                      path = "${e[0]||""}" 
                      .parameters = "${(null===(r=t[1])||void 0===r?void 0:r.parameters)||""}" 
                      .request_body = "${(null===(n=t[1])||void 0===n?void 0:n.requestBody)||""}"
                      fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
                      use-summary-to-list-example = "${this.useSummaryToListExamples}"
                      allow-try = "false"
                      render-style="${this.renderStyle}" 
                      schema-style = "${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                      schema-hide-read-only = "false"
                      schema-hide-write-only = "${this.schemaHideWriteOnly}"
                      fetch-credentials = "${this.fetchCredentials}"
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                        file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                        anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                    > </api-request>

                    <api-response
                      style = "width:100%;"
                      class = "${this.renderStyle}-mode"
                      callback = "true"
                      .responses="${null===(o=t[1])||void 0===o?void 0:o.responses}"
                      render-style="${this.renderStyle}"
                      schema-style="${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      schema-hide-read-only = "${this.schemaHideReadOnly}"
                      schema-hide-write-only = "false"
                      exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
                      schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                    > </api-response>
                  </div>
                </div>  
              `}))}
            </div>  
          </div>  
        `))}
      </div>  
    `))}
  `}const VI={},GI=AI(class extends EI{constructor(){super(...arguments),this.nt=VI}render(e,t){return t()}update(e,[t,r]){if(Array.isArray(t)){if(Array.isArray(this.nt)&&this.nt.length===t.length&&t.every(((e,t)=>e===this.nt[t])))return F}else if(this.nt===t)return F;return this.nt=Array.isArray(t)?Array.from(t):t,this.render(t,r)}}),{H:KI}=X,JI={},YI=AI(class extends EI{constructor(e){if(super(e),3!==e.type&&1!==e.type&&4!==e.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===F||t===N)return t;const r=e.element,n=e.name;if(3===e.type){if(t===r[n])return F}else if(4===e.type){if(!!t===r.hasAttribute(n))return F}else if(1===e.type&&r.getAttribute(n)===t+"")return F;return((e,t=JI)=>{e._$AH=t})(e),t}}),ZI=l`
.border-top {
  border-top:1px solid var(--border-color);
}
.border{
  border:1px solid var(--border-color);
  border-radius: var(--border-radius);
}
.light-border{
  border:1px solid var(--light-border-color);
  border-radius: var(--border-radius);
}
.pad-8-16{
  padding: 8px 16px;
}
.pad-top-8{
  padding-top: 8px;
}
.mar-top-8{
  margin-top: 8px;
}
`;function QI(e){if(!e)return;let t="",r="";if(e.$ref){const r=e.$ref.lastIndexOf("/");t=`{recursive: ${e.$ref.substring(r+1)}} `}else e.type?(t=Array.isArray(e.type)?e.type.join(2===e.length?" or ":"\u2503"):e.type,(e.format||e.enum)&&(t=t.replace("string",e.enum?"enum":e.format)),e.nullable&&(t+="\u2503null")):t=0===Object.keys(e).length?"any":"{missing-type-info}";const n={type:t,format:e.format||"",pattern:e.pattern&&!e.enum?e.pattern:"",readOrWriteOnly:e.readOnly?"\ud83c\udd81":e.writeOnly?"\ud83c\udd86":"",deprecated:e.deprecated?"\u274c":"",examples:e.examples||e.example,default:null!=e.default?`${e.default}`:"",description:e.description||"",constrain:"",allowedValues:"",arrayType:"",html:""};if("{recursive}"===n.type?n.description=e.$ref.substring(e.$ref.lastIndexOf("/")+1):"{missing-type-info}"!==n.type&&"any"!==n.type||(n.description=n.description||""),n.allowedValues=Array.isArray(e.enum)?e.enum.join("\u2503"):"","array"===t&&e.items){var o,a,i;const t=null===(o=e.items)||void 0===o?void 0:o.type,r=void 0!==(null===(a=e.items)||void 0===a?void 0:a.default)?e.items.default:"";n.arrayType=`${e.type} of ${Array.isArray(t)?t.join(""):t}`,n.default=r,n.allowedValues=Array.isArray(null===(i=e.items)||void 0===i?void 0:i.enum)?e.items.enum.join("\u2503"):""}return t.match(/integer|number/g)&&(void 0===e.minimum&&void 0===e.exclusiveMinimum||(r+=void 0!==e.minimum?`Min ${e.minimum}`:`More than ${e.exclusiveMinimum}`),void 0===e.maximum&&void 0===e.exclusiveMaximum||(r+=void 0!==e.maximum?`${r?"\u2503":""}Max ${e.maximum}`:`${r?"\u2503":""}Less than ${e.exclusiveMaximum}`),void 0!==e.multipleOf&&(r+=`${r?"\u2503":""} multiple of ${e.multipleOf}`)),t.match(/string/g)&&(void 0!==e.minLength&&void 0!==e.maxLength?r+=`${r?"\u2503":""}${e.minLength} to ${e.maxLength} chars`:void 0!==e.minLength?r+=`${r?"\u2503":""}Min ${e.minLength} chars`:void 0!==e.maxLength&&(r+=`Max ${r?"\u2503":""}${e.maxLength} chars`)),n.constrain=r,n.html=`${n.type}~|~${n.readOrWriteOnly}~|~${n.constrain}~|~${n.default}~|~${n.allowedValues}~|~${n.pattern}~|~${n.description}~|~${e.title||""}~|~${n.deprecated?"deprecated":""}`,n}function XI(e){return e?{Example:{value:e}}:e}function eP(e,t="string"){let r,n;if(e){if(e.constructor===Object){const t=Object.values(e);r=t.length>0?"boolean"==typeof t[0].value||"number"==typeof t[0].value?t[0].value.toString():t[0].value:"",n=Object.values(e).map((e=>({value:"boolean"==typeof e.value||"number"==typeof e.value?e.value.toString():e.value,description:e.description||e.summary||e.value})))}else Array.isArray(e)||(e=e?[e]:[]),e.length>0&&("array"===t?([r]=e,n=e.map((e=>({value:e,description:Array.isArray(e)?e.join(" , "):e})))):(r=e[0].toString(),n=e.map((e=>({value:e.toString(),description:e})))));return{exampleVal:r,exampleList:n}}return{exampleVal:"",exampleList:[]}}function tP(e){const t=e.examples?e.examples[0]:null===e.example?null:e.example||void 0;if(""===t)return"";if(null===t)return null;if(0===t)return 0;if(t)return t;if(0===Object.keys(e).length)return null;if(e.$ref)return e.$ref;const r=Array.isArray(e.type)?e.type[0]:e.type;if(!r)return"?";if(r.match(/^integer|^number/g)){const t=Number.isNaN(Number(e.multipleOf))?void 0:Number(e.multipleOf),n=Number.isNaN(Number(e.maximum))?void 0:Number(e.maximum),o=Number.isNaN(Number(e.minimum))?Number.isNaN(Number(e.exclusiveMinimum))?n||0:Number(e.exclusiveMinimum)+(r.startsWith("integer")?1:.001):Number(e.minimum);return t?t>=o?t:o%t==0?o:Math.ceil(o/t)*t:o}if(r.match(/^boolean/g))return!1;if(r.match(/^null/g))return null;if(r.match(/^string/g)){if(e.enum)return e.enum[0];if(e.pattern)return e.pattern;if(!e.format){const t=Number.isNaN(e.minLength)?void 0:Number(e.minLength),r=Number.isNaN(e.maxLength)?void 0:Number(e.maxLength),n=t||(r>6?6:r||void 0);return n?"A".repeat(n):"string"}{const t=`${Date.now().toString(16)}${Math.random().toString(16)}0`.repeat(16);switch(e.format.toLowerCase()){case"url":case"uri":return"http://example.com";case"date":return new Date(0).toISOString().split("T")[0];case"time":return new Date(0).toISOString().split("T")[1];case"date-time":return new Date(0).toISOString();case"duration":return"P3Y6M4DT12H30M5S";case"email":case"idn-email":return"user@example.com";case"hostname":case"idn-hostname":return"www.example.com";case"ipv4":return"198.51.100.42";case"ipv6":return"2001:0db8:5b96:0000:0000:426f:8e17:642a";case"uuid":return[t.substr(0,8),t.substr(8,4),`4000-8${t.substr(13,3)}`,t.substr(16,12)].join("-");default:return""}}}return"?"}function rP(e,t=1){const r="  ".repeat(t);let n="";if(1===t&&"object"!=typeof e)return`\n${r}${e.toString()}`;for(const o in e)n=Array.isArray(e[o])||"object"==typeof e[o]?`${n}\n${r}<${o}> ${rP(e[o],t+1)}\n${r}</${o}>`:`${n}\n${r}<${o}> ${e[o].toString()} </${o}>`;return n}function nP(e,t){"object"==typeof t&&null!==t&&(e.title&&(t["::TITLE"]=e.title),e.description&&(t["::DESCRIPTION"]=e.description))}function oP(e){if("object"==typeof e&&null!==e){delete e["::TITLE"],delete e["::DESCRIPTION"];for(const t in e)oP(e[t])}}function aP(e,t,r){for(const n in t)t[n][r]=e}function iP(e,t,r){let n=0;const o={};for(const a in e){for(const i in r)if(o[`example-${n}`]={...e[a]},o[`example-${n}`][t]=r[i],n++,n>=10)break;if(n>=10)break}return o}function sP(e,t={}){let r={};if(e){if(e.allOf){const n={};if(1===e.allOf.length&&!e.allOf[0].properties&&!e.allOf[0].items)return e.allOf[0].$ref?"{  }":e.allOf[0].readOnly&&t.includeReadOnly?tP(e.allOf[0]):void 0;e.allOf.forEach((e=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const r=sP(e,t);Object.assign(n,r)}else if("array"===e.type||e.items){const r=[sP(e,t)];Object.assign(n,r)}else{if(!e.type)return"";{const t=`prop${Object.keys(n).length}`;n[t]=tP(e)}}})),r=n}else if(e.oneOf){const n={};if(e.properties)for(const t in e.properties)n[t]=tP(e.properties[t]);if(e.oneOf.length>0){let o=0;for(const a in e.oneOf){const i=sP(e.oneOf[a],t);for(const t in i){let s;if(Object.keys(n).length>0){if(null===i[t]||"object"!=typeof i[t])continue;s=Object.assign(i[t],n)}else s=i[t];r[`example-${o}`]=s,nP(e.oneOf[a],r[`example-${o}`]),o++}}}}else if(e.anyOf){let n;if("object"===e.type||e.properties){n={"example-0":{}};for(const r in e.properties){if(e.example){n=e;break}e.properties[r].deprecated&&!t.includeDeprecated||e.properties[r].readOnly&&!t.includeReadOnly||e.properties[r].writeOnly&&!t.includeWriteOnly||(n=iP(n,r,sP(e.properties[r],t)))}}let o=0;for(const a in e.anyOf){const i=sP(e.anyOf[a],t);for(const t in i){if(void 0!==n)for(const e in n)r[`example-${o}`]={...n[e],...i[t]};else r[`example-${o}`]=i[t];nP(e.anyOf[a],r[`example-${o}`]),o++}}}else if("object"===e.type||e.properties)if(r["example-0"]={},nP(e,r["example-0"]),e.example)r["example-0"]=e.example;else for(const p in e.properties){var n,o,a,i,s,l,c;if((null===(n=e.properties[p])||void 0===n||!n.deprecated||t.includeDeprecated)&&(null===(o=e.properties[p])||void 0===o||!o.readOnly||t.includeReadOnly)&&(null===(a=e.properties[p])||void 0===a||!a.writeOnly||t.includeWriteOnly))if("array"===(null===(i=e.properties[p])||void 0===i?void 0:i.type)||null!==(s=e.properties[p])&&void 0!==s&&s.items)if(e.properties[p].example)aP(e.properties[p].example,r,p);else if(null!==(l=e.properties[p])&&void 0!==l&&null!==(c=l.items)&&void 0!==c&&c.example)aP([e.properties[p].items.example],r,p);else{const n=sP(e.properties[p].items,t),o=[];for(const e in n)o[e]=[n[e]];r=iP(r,p,o)}else r=iP(r,p,sP(e.properties[p],t))}else{if("array"!==e.type&&!e.items)return{"example-0":tP(e)};var p;if(e.items||e.example)if(e.example)r["example-0"]=e.example;else if(null!==(p=e.items)&&void 0!==p&&p.example)r["example-0"]=[e.items.example];else{const n=sP(e.items,t);let o=0;for(const t in n)r[`example-${o}`]=[n[t]],nP(e.items,r[`example-${o}`]),o++}else r["example-0"]=[]}return r}}function lP(e,t=0){var r;let n="";if(e.title&&(n=`**${e.title}:** `),e.description&&(n=`${n} ${e.description} ${e.minItems||e.maxItems?'<span class="more-content">\u2935</span><br/>':""}`),e.minItems&&(n=`${n} **Min Items:** ${e.minItems}`),e.maxItems&&(n=`${n} **Max Items:** ${e.maxItems}`),t>0&&null!==(r=e.items)&&void 0!==r&&r.description){let t="";e.items.minProperties&&(t=`**Min Properties:** ${e.items.minProperties}`),e.items.maxProperties&&(t=`${t} **Max Properties:** ${e.items.maxProperties}`),n=`${n} \u2b95 ${t} [ ${e.items.description} ] `}return n}function cP(e,t,r=0,n=""){if(e){if(e.allOf){const n={};if(1===e.allOf.length&&!e.allOf[0].properties&&!e.allOf[0].items)return`${QI(e.allOf[0]).html}`;e.allOf.map(((e,t)=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const o=(e.anyOf||e.oneOf)&&t>0?t:"",a=cP(e,{},r+1,o);Object.assign(n,a)}else if("array"===e.type||e.items){const t=cP(e,{},r+1);Object.assign(n,t)}else{if(!e.type)return"";{const t=`prop${Object.keys(n).length}`,r=QI(e);n[t]=`${r.html}`}}})),t=n}else if(e.anyOf||e.oneOf){if(t["::description"]=e.description||"","object"===e.type||e.properties){t["::description"]=e.description||"",t["::type"]="object";for(const n in e.properties)e.required&&e.required.includes(n)?t[`${n}*`]=cP(e.properties[n],{},r+1):t[n]=cP(e.properties[n],{},r+1)}const o={},a=e.anyOf?"anyOf":"oneOf";e[a].forEach(((e,t)=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const r=cP(e,{});o[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]=r,o["::type"]="xxx-of-option"}else if("array"===e.type||e.items){const r=cP(e,{});o[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]=r,o["::type"]="xxx-of-array"}else{const r=`::OPTION~${t+1}${e.title?`~${e.title}`:""}`;o[r]=`${QI(e).html}`,o["::type"]="xxx-of-option"}})),t[e.anyOf?`::ANY~OF ${n}`:`::ONE~OF ${n}`]=o,t["::type"]="xxx-of"}else if(Array.isArray(e.type)){const n=JSON.parse(JSON.stringify(e)),i=[],s=[];let l;var o;if(n.type.forEach((e=>{var t,r;e.match(/integer|number|string|null|boolean/g)?i.push(e):"array"===e&&"string"==typeof(null===(t=n.items)||void 0===t?void 0:t.type)&&null!==(r=n.items)&&void 0!==r&&r.type.match(/integer|number|string|null|boolean/g)?"string"===n.items.type&&n.items.format?i.push(`[${n.items.format}]`):i.push(`[${n.items.type}]`):s.push(e)})),i.length>0&&(n.type=i.join(2===i.length?" or ":"\u2503"),l=QI(n),0===s.length))return`${(null===(o=l)||void 0===o?void 0:o.html)||""}`;if(s.length>0){var a;t["::type"]="xxx-of";const o={"::type":"xxx-of-option"};s.forEach(((t,a)=>{if("null"===t)o[`::OPTION~${a+1}`]="NULL~|~~|~~|~~|~~|~~|~~|~~|~";else if("integer, number, string, boolean,".includes(`${t},`)){n.type=Array.isArray(t)?t.join("\u2503"):t;const e=QI(n);o[`::OPTION~${a+1}`]=e.html}else if("object"===t){const t={"::title":e.title||"","::description":e.description||"","::type":"object","::deprecated":e.deprecated||!1};for(const n in e.properties)e.required&&e.required.includes(n)?t[`${n}*`]=cP(e.properties[n],{},r+1):t[n]=cP(e.properties[n],{},r+1);o[`::OPTION~${a+1}`]=t}else"array"===t&&(o[`::OPTION~${a+1}`]={"::title":e.title||"","::description":e.description||"","::type":"array","::props":cP(e.items,{},r+1)})})),o[`::OPTION~${s.length+1}`]=(null===(a=l)||void 0===a?void 0:a.html)||"",t["::ONE~OF"]=o}}else if("object"===e.type||e.properties){t["::title"]=e.title||"",t["::description"]=lP(e,r),t["::type"]="object",t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"";for(const n in e.properties)e.required&&e.required.includes(n)?t[`${n}*`]=cP(e.properties[n],{},r+1):t[n]=cP(e.properties[n],{},r+1);e.additionalProperties&&(t["<any-key>"]=cP(e.additionalProperties,{}))}else{if("array"!==e.type&&!e.items){const t=QI(e);return null!=t&&t.html?`${t.html}`:""}var i;t["::title"]=e.title||"",t["::description"]=lP(e,r),t["::type"]="array",t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"",null!==(i=e.items)&&void 0!==i&&i.items&&(t["::array-type"]=e.items.items.type),t["::props"]=cP(e.items,{},r+1)}return t}}function pP(e,t,r="",n="",o=!0,a=!0,i="json",s=!1){const l=[];if(r)for(const c in r){let e="",n="json";if(null!=t&&t.toLowerCase().includes("json")){if("text"===i)e="string"==typeof r[c].value?r[c].value:JSON.stringify(r[c].value,void 0,2),n="text";else if(e=r[c].value,"string"==typeof r[c].value)try{const t=r[c].value.replace(/([\w]+)(:)/g,'"$1"$2').replace(/'/g,'"');e=JSON.parse(t),n="json"}catch(t){n="text",e=r[c].value}}else e=r[c].value,n="text";l.push({exampleId:c,exampleSummary:r[c].summary||c,exampleDescription:r[c].description||"",exampleType:t,exampleValue:e,exampleFormat:n})}else if(n){let e="",r="json";if(null!=t&&t.toLowerCase().includes("json")){if("text"===i)e="string"==typeof n?n:JSON.stringify(n,void 0,2),r="text";else if("object"==typeof n)e=n,r="json";else if("string"==typeof n)try{e=JSON.parse(n),r="json"}catch(t){r="text",e=n}}else e=n,r="text";l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:e,exampleFormat:r})}if(0===l.length||!0===s)if(e)if(e.example)l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:e.example,exampleFormat:null!=t&&t.toLowerCase().includes("json")&&"object"==typeof e.example?"json":"text"});else if(null!=t&&t.toLowerCase().includes("json")||null!=t&&t.toLowerCase().includes("text")||null!=t&&t.toLowerCase().includes("*/*")||null!=t&&t.toLowerCase().includes("xml")){let r="",n="",s="",c="";null!=t&&t.toLowerCase().includes("xml")?(r=e.xml&&e.xml.name?`<${e.xml.name}>`:"<root>",n=e.xml&&e.xml.name?`</${e.xml.name}>`:"</root>",s="text"):s=i;const p=sP(e,{includeReadOnly:o,includeWriteOnly:a,deprecated:!0});let u=0;for(const e in p){if(!p[e])continue;const o=p[e]["::TITLE"]||"Example "+ ++u,a=p[e]["::DESCRIPTION"]||"";oP(p[e]),c=null!=t&&t.toLowerCase().includes("xml")?`${r}${rP(p[e])}\n${n}`:"text"===i?JSON.stringify(p[e],null,2):p[e],l.push({exampleId:e,exampleSummary:o,exampleDescription:a,exampleType:t,exampleFormat:s,exampleValue:c})}}else null!=t&&t.toLowerCase().includes("jose")?l.push({exampleId:"Example",exampleSummary:"Base64 Encoded",exampleDescription:"",exampleType:t,exampleValue:e.pattern||"bXJpbg==",exampleFormat:"text"}):l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});else l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});return l}function uP(e){return"application/json"===e?"json":"application/xml"===e?"xml":null}function dP(e){if(e.schema)return[e.schema,null,null];if(e.content)for(const t of Object.keys(e.content))if(e.content[t].schema)return[e.content[t].schema,uP(t),e.content[t]];return[null,null,null]}customElements.define("json-tree",class extends ne{static get properties(){return{data:{type:Object},renderStyle:{type:String,attribute:"render-style"}}}static get styles(){return[He,ZI,We,l`
      :host{
        display:flex;
      }
      .json-tree {
        position: relative;
        font-family: var(--font-mono);
        font-size: var(--font-size-small);
        display:inline-block;
        overflow:hidden;
        word-break: break-all;
        flex:1;
        line-height: calc(var(--font-size-small) + 6px);
        direction: ltr; 
        text-align: left;
      }

      .open-bracket {
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .close-bracket {
        border: 1px solid transparent;
        border-radius:3px;
        display:inline-block;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .open-bracket.expanded:hover ~ .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .open-bracket.expanded:hover ~ .close-bracket {
        color:var(--primary-color);
      }
      .inside-bracket{
        padding-left:12px;
        border-left:1px dotted var(--border-color);
      }
      .open-bracket.collapsed + .inside-bracket,
      .open-bracket.collapsed + .inside-bracket + .close-bracket {
        display:none;
      }

      .string{color:var(--green);}
      .number{color:var(--blue);}
      .null{color:var(--red);}
      .boolean{color:var(--purple);}
      .object{color:var(--fg)}
      .toolbar {
        position: absolute;
        top:5px;
        right:6px;
        display:flex;
        padding:2px;
        align-items: center;
      }`,Xe]}render(){return B`
      <div class = "json-tree" >
        <div class='toolbar'> 
          <button class="toolbar-btn" part="btn btn-fill btn-copy" @click='${e=>{nt(JSON.stringify(this.data,null,2),e)}}'> Copy </button>
        </div>
        ${this.generateTree(this.data,!0)}
      </div>  
    `}generateTree(e,t=!1){if(null===e)return B`<div class="null" style="display:inline;">null</div>`;if("object"==typeof e&&e instanceof Date==0){const r=Array.isArray(e)?"array":"pure_object";return 0===Object.keys(e).length?B`${Array.isArray(e)?"[ ],":"{ },"}`:B`
      <div class="open-bracket expanded ${"array"===r?"array":"object"} " @click="${this.toggleExpand}" > ${"array"===r?"[":"{"}</div>
      <div class="inside-bracket">
        ${Object.keys(e).map(((t,n,o)=>B`
          <div class="item"> 
            ${"pure_object"===r?B`"${t}":`:""}
            ${this.generateTree(e[t],n===o.length-1)}
          </div>`))}
      </div>
      <div class="close-bracket">${"array"===r?"]":"}"}${t?"":","}</div>
      `}return"string"==typeof e||e instanceof Date?B`<span class="${typeof e}">"${e}"</span>${t?"":","}`:B`<span class="${typeof e}">${e}</span>${t?"":","}`}toggleExpand(e){const t=e.target;t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array")?"[":"{")}});const hP=l`

*, *:before, *:after { box-sizing: border-box; }

.tr {
  display: flex;
  flex: none;
  width: 100%;
  box-sizing: content-box;
  border-bottom: 1px dotted transparent;
}
.td {
  display: block;
  flex: 0 0 auto;
}
.key {
  font-family: var(--font-mono);
  white-space: normal;
  word-break: break-all;
}

.collapsed-descr .key {
  overflow:hidden;
}

.expanded-descr .more-content { display:none; }

.key-descr {
  font-family:var(--font-regular);
  color:var(--light-fg);
  flex-shrink: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  display: none;
}
.expanded-descr .key-descr{
  max-height:auto;
  overflow:hidden;
  display: none;
}
.collapsed-descr .tr {
  max-height:20px;
}

.tr.xxx-of{
  border-top: 1px dotted var(--primary-color);
}

.xxx-of-key {
  font-size: calc(var(--font-size-small) - 2px); 
  font-weight:bold; 
  background-color:var(--primary-color); 
  color:var(--primary-color-invert); 
  border-radius:2px;
  line-height:calc(var(--font-size-small) + 6px);
  padding:0px 5px; 
  margin-bottom:1px; 
  display:inline-block;
}

.xxx-of-descr {
    font-family: var(--font-regular);
    color: var(--primary-color);
    font-size: calc(var(--font-size-small) - 1px);
    margin-left: 2px;
}

.stri, .string, .uri, .url, .byte, .bina, .date, .pass, .ipv4, .ipv4, .uuid, .emai, .host {color:var(--green);}
.inte, .numb, .number, .int6, .int3, .floa, .doub, .deci .blue {color:var(--blue);}
.null {color:var(--red);}
.bool, .boolean{color:var(--orange)}
.enum {color:var(--purple)}
.recu {color:var(--brown)}
.toolbar {
  display:flex;
  width:100%;
  padding: 2px 0;
  color:var(--primary-color);
}
.toolbar-item {
  cursor:pointer;
  padding:5px 0;
  margin:0 2px;
}
.schema-root-type {
  cursor:auto;
  color:var(--fg2);
  font-weight: bold;
  text-transform: uppercase;
}
.schema-root-type.xxx-of {
  display:none;
}
.toolbar-item:first-of-type { margin:0 2px 0 0;}

@media only screen and (min-width: 500px) {
  .key-descr {
    display: block;
  }
  .expanded-descr .key-descr{
    display: block;
  }
}
`;function fP(e){const t=new Ue.Renderer;return t.heading=(t,r,n,o)=>`<h${r} class="observe-me" id="${e}--${o.slug(n)}">${t}</h${r}>`,t}function mP(e,t=""){var r,n,o;const a=new Set;for(const u in e.responses)for(const t in null===(i=e.responses[u])||void 0===i?void 0:i.content){var i;a.add(t.trim())}const s=[...a].join(", "),l=this.resolvedSpec.securitySchemes.filter((t=>{var r;return t.finalKeyValue&&(null===(r=e.security)||void 0===r?void 0:r.some((e=>t.securitySchemeId in e)))}))||[],c=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===tt&&"-"!==e.value));c&&l.push(c);const p=e.xCodeSamples?HI.call(this,e.xCodeSamples):"";return B`
    ${"read"===this.renderStyle?B`<div class='divider' part="operation-divider"></div>`:""}
    <div class='expanded-endpoint-body observe-me ${e.method} ${e.deprecated?"deprecated":""} ' part="section-operation ${e.elementId}" id='${e.elementId}'>
      ${"focused"===this.renderStyle&&"General \u2982"!==t?B`<h3 class="upper" style="font-weight:bold" part="section-operation-tag"> ${t} </h3>`:""}
      ${e.deprecated?B`<div class="bold-text red-text"> DEPRECATED </div>`:""}
      ${B`
        ${e.xBadges&&(null===(r=e.xBadges)||void 0===r?void 0:r.length)>0?B`
            <div style="display:flex; flex-wrap:wrap; margin-bottom: -24px; font-size: var(--font-size-small);">
              ${e.xBadges.map((e=>B`<span style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${e.color}, var(--input-bg)); color:var(--${e.color}); border:1px solid var(--${e.color})">${e.label}</span>`))}
            </div>
            `:""}
        <h2 part="section-operation-summary"> ${e.shortSummary||`${e.method.toUpperCase()} ${e.path}`}</h2>
        ${e.isWebhook?B`<span part="section-operation-webhook style="color:var(--primary-color); font-weight:bold; font-size: var(--font-size-regular);"> WEBHOOK </span>`:B`
            <div class='mono-font part="section-operation-webhook-method" regular-font-size' style='text-align:left; direction:ltr; padding: 8px 0; color:var(--fg3)'> 
              <span part="label-operation-method" class='regular-font upper method-fg bold-text ${e.method}'>${e.method}</span> 
              <span part="label-operation-path">${e.path}</span>
            </div>
          `}
        <slot name="${e.elementId}"></slot>`}
      ${e.description?B`<div class="m-markdown"> ${TI(Ue(e.description))}</div>`:""}
      ${MI.call(this,e.security)}
      ${p}
      <div class='expanded-req-resp-container'>
        <api-request
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          method = "${e.method}"
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${l}"
          .servers = "${e.servers}"
          server-url = "${(null===(n=e.servers)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.url)||this.selectedServer.computedUrl}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          use-summary-to-list-example = "${this.useSummaryToListExamples}"
          allow-try = "${this.allowTry}"
          accept = "${s}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${!e.isWebhook&&this.schemaHideReadOnly}"
          schema-hide-write-only = "${!!e.isWebhook&&this.schemaHideWriteOnly}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-request>

        ${e.callbacks?WI.call(this,e.callbacks):""}

        <api-response
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          .responses = "${e.responses}"
          render-style = "${this.renderStyle}"
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${!!e.isWebhook&&this.schemaHideReadOnly}"
          schema-hide-write-only = "${!e.isWebhook&&this.schemaHideWriteOnly}"
          selected-status = "${Object.keys(e.responses||{})[0]||""}"
          exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-response>
      </div>
    </div>
  `}function yP(){return this.resolvedSpec?B`
  ${this.resolvedSpec.tags.map((e=>B`
    <section id="${e.elementId}" part="section-tag" class="regular-font section-gap--read-mode observe-me" style="border-top:1px solid var(--primary-color);">
      <div class="title tag" part="section-tag-title label-tag-title">${e.name}</div>
      <slot name="${e.elementId}"></slot>
      <div class="regular-font-size">
      ${TI(`\n          <div class="m-markdown regular-font">\n          ${Ue(e.description||"","true"===this.infoDescriptionHeadingsInNavBar?{renderer:fP(e.elementId)}:void 0)}\n        </div>`)}
      </div>
    </section>
    <section class='regular-font section-gap--read-mode' part="section-operations-in-tag">
      ${e.paths.map((e=>mP.call(this,e,"BBB")))}
    </section>
    `))}
`:""}function gP(e){return B`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400;"> Schema </span></div>
  ${"table"===this.schemaStyle?B`
      <schema-table
        render-style = '${this.renderStyle}'
        .data = '${cP(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-tree> `:B`
      <schema-tree
        render-style = '${this.renderStyle}'
        .data = '${cP(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-tree>`}
  </div>`}function vP(e,t){return-1!==e.id.indexOf("schemas-")?gP.call(this,e):B`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    ${B`
      <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400"> ${t} </span> </div>
      ${e.component?B`
      <div class='mono-font regular-font-size' style='padding: 8px 0; color:var(--fg2)'> 
        <json-tree class="border tree" render-style='${this.renderStyle}' .data="${e.component}"> </json-tree>
      </div>`:""}
    `}
  </div>
  `}function bP(){return this.resolvedSpec?B`
  ${this.resolvedSpec.components.map((e=>B`
    <div id="cmp--${e.name.toLowerCase()}" class='regular-font section-gap--read-mode observe-me' style="border-top:1px solid var(--primary-color);">
      <div class="title tag">${e.name}</div>
      <div class="regular-font-size">
        ${TI(`<div class='m-markdown regular-font'>${Ue(e.description?e.description:"")}</div>`)}
      </div>
    </div>
    <div class='regular-font section-gap--read-mode'>
      ${e.subComponents.filter((e=>!1!==e.expanded)).map((t=>vP.call(this,t,e.name)))}
    </div>
    `))}
`:""}function xP(){const e=new Ue.Renderer;return e.heading=(e,t,r,n)=>`<h${t} class="observe-me" id="overview--${n.slug(r)}">${e}</h${t}>`,e}function wP(){var e,t,r,n;return B`
    <section id="overview" part="section-overview"
      class="observe-me ${"view"===this.renderStyle?"section-gap":"section-gap--read-mode"}">
      ${null!==(e=this.resolvedSpec)&&void 0!==e&&e.info?B`
          <div id="api-title" part="section-overview-title" style="font-size:32px">
            ${this.resolvedSpec.info.title}
            ${this.resolvedSpec.info.version?B`
              <span style = 'font-size:var(--font-size-small);font-weight:bold'>
                ${this.resolvedSpec.info.version}
              </span>`:""}
          </div>
          <div id="api-info" style="font-size:calc(var(--font-size-regular) - 1px); margin-top:8px;">
            ${null!==(t=this.resolvedSpec.info.contact)&&void 0!==t&&t.email?B`<span>${this.resolvedSpec.info.contact.name||"Email"}: 
                <a href="mailto:${this.resolvedSpec.info.contact.email}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.email}</a>
              </span>`:""}
            ${null!==(r=this.resolvedSpec.info.contact)&&void 0!==r&&r.url?B`<span>URL: <a href="${this.resolvedSpec.info.contact.url}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.url}</a></span>`:""}
            ${this.resolvedSpec.info.license?B`<span>License: 
                ${this.resolvedSpec.info.license.url?B`<a href="${this.resolvedSpec.info.license.url}" part="anchor anchor-overview">${this.resolvedSpec.info.license.name}</a>`:this.resolvedSpec.info.license.name} </span>`:""}
            ${this.resolvedSpec.info.termsOfService?B`<span><a href="${this.resolvedSpec.info.termsOfService}" part="anchor anchor-overview">Terms of Service</a></span>`:""}
            ${this.specUrl&&"true"===this.allowSpecFileDownload?B`
                <div style="display:flex; margin:12px 0; gap:8px; justify-content: start;">
                  <button class="m-btn thin-border" style="width:170px" part="btn btn-outline" @click='${e=>{it(this.specUrl,"openapi-spec")}}'>Download OpenAPI spec</button>
                  ${null!==(n=this.specUrl)&&void 0!==n&&n.trim().toLowerCase().endsWith("json")?B`<button class="m-btn thin-border" style="width:200px" part="btn btn-outline" @click='${e=>{st(this.specUrl)}}'>View OpenAPI spec (New Tab)</button>`:""}
                </div>`:""}
          </div>
          <slot name="overview"></slot>
          <div id="api-description">
          ${this.resolvedSpec.info.description?B`${TI(`\n                <div class="m-markdown regular-font">\n                ${Ue(this.resolvedSpec.info.description,"true"===this.infoDescriptionHeadingsInNavBar?{renderer:xP()}:void 0)}\n              </div>`)}`:""}
          </div>
        `:""}
    </section>
  `}function $P(e){var t;const r=null===(t=this.resolvedSpec)||void 0===t?void 0:t.servers.find((t=>t.url===e));return!!r&&(this.selectedServer=r,this.requestUpdate(),this.dispatchEvent(new CustomEvent("api-server-change",{bubbles:!0,composed:!0,detail:{selectedServer:r}})),!0)}function kP(e,t){const r=[...e.currentTarget.closest("table").querySelectorAll("input, select")];let n=t.url;r.forEach((e=>{const t=new RegExp(`{${e.dataset.var}}`,"g");n=n.replace(t,e.value)})),t.computedUrl=n,this.requestUpdate()}function SP(){return this.selectedServer&&this.selectedServer.variables?B`
    <div class="table-title">SERVER VARIABLES</div>
    <table class='m-table'>
      ${Object.entries(this.selectedServer.variables).map((e=>B`
        <tr>
          <td style="vertical-align: middle;" >${e[0]}</td>
          <td>
            ${e[1].enum?B`
            <select
              data-var = "${e[0]}"
              @input = ${e=>{kP.call(this,e,this.selectedServer)}}
            >
            ${Object.entries(e[1].enum).map((t=>e[1].default===t[1]?B`
              <option
                selected
                label = ${t[1]}
                value = ${t[1]}
              />`:B`
              <option
                label = ${t[1]}
                value = ${t[1]}
              />`))}
            </select>`:B`
            <input
              type = "text"
              part="textbox textbox-server-var"
              spellcheck = "false"
              data-var = "${e[0]}"
              value = "${e[1].default}"
              @input = ${e=>{kP.call(this,e,this.selectedServer)}}
            />`}
          </td>
        </tr>
        ${e[1].description?B`<tr><td colspan="2" style="border:none"><span class="m-markdown-small"> ${TI(Ue(e[1].description))} </span></td></tr>`:""}
      `))}
    </table>
    `:""}function AP(){var e,t,r;return!this.resolvedSpec||this.resolvedSpec.specLoadError?"":B`
  <section id = 'servers' part="section-servers" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class='regular-font observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap"}'>
    <div part = "section-servers-title" class = "sub-title">API SERVER</div>
    <div class = 'mono-font' style='margin: 12px 0; font-size:calc(var(--font-size-small) + 1px);'>
      ${this.resolvedSpec.servers&&0!==(null===(e=this.resolvedSpec.servers)||void 0===e?void 0:e.length)?B`
          ${null===(t=this.resolvedSpec)||void 0===t?void 0:t.servers.map(((e,t)=>B`
            <input type = 'radio'
              name = 'api_server'
              id = 'srvr-opt-${t}'
              value = '${e.url}'
              @change = ${()=>{$P.call(this,e.url)}}
              .checked = '${this.selectedServer.url===e.url}'
              style = 'margin:4px 0; cursor:pointer'
            />
              <label style='cursor:pointer' for='srvr-opt-${t}'>
                ${e.url} ${e.description?B`- <span class='regular-font'>${e.description} </span>`:""}
              </label>
            <br/>
          `))}
      `:""}
      <div class="table-title primary-text" part="label-selected-server"> SELECTED: ${(null===(r=this.selectedServer)||void 0===r?void 0:r.computedUrl)||"none"}</div>
    </div>
    <slot name="servers"></slot>
    ${SP.call(this)}
  </section>`}function EP(e,t="toggle"){const r=null==e?void 0:e.closest(".nav-bar-tag-and-paths");if(r){const e=r.classList.contains("expanded");!e||"toggle"!==t&&"collapse"!==t?e||"toggle"!==t&&"expand"!==t||r.classList.replace("collapsed","expanded"):r.classList.replace("expanded","collapsed")}}function OP(e){EP(e.target,"toggle")}function TP(e,t="expand-all"){!function(e,t="expand-all"){const r=[...e.querySelectorAll(".nav-bar-tag-and-paths")];"expand-all"===t?r.map((e=>{e.classList.replace("collapsed","expanded")})):r.map((e=>{e.classList.replace("expanded","collapsed")}))}(e.target.closest(".nav-scroll"),t)}function CP(){var e,t,r,n;return!this.resolvedSpec||this.resolvedSpec.specLoadError?B`
      <nav class='nav-bar' part="section-navbar">
        <slot name="nav-logo" class="logo"></slot>
      </nav>
    `:B`
  <nav class='nav-bar ${this.renderStyle}' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    ${"false"===this.allowSearch&&"false"===this.allowAdvancedSearch?"":B`
        <div style="display:flex; flex-direction:row; justify-content:center; align-items:stretch; padding:8px 24px 12px 24px; ${"false"===this.allowAdvancedSearch?"border-bottom: 1px solid var(--nav-hover-bg-color)":""}">
          ${"false"===this.allowSearch?"":B`
              <div style="display:flex; flex:1; line-height:22px;">
                <input id="nav-bar-search" 
                  part = "textbox textbox-nav-filter"
                  style = "width:100%; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
                  type = "text"
                  placeholder = "Filter" 
                  @change = "${this.onSearchChange}"  
                  spellcheck = "false" 
                >
                <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
              </div>  
              ${this.matchPaths?B`
                  <button @click = '${this.onClearSearch}' class="m-btn thin-border" style="margin-left:5px; color:var(--nav-text-color); width:75px; padding:6px 8px;" part="btn btn-outline btn-clear-filter">
                    CLEAR
                  </button>`:""}
            `}
          ${"false"===this.allowAdvancedSearch||this.matchPaths?"":B`
              <button class="m-btn primary" part="btn btn-fill btn-search" style="margin-left:5px; padding:6px 8px; width:75px" @click="${this.onShowSearchModalClicked}">
                SEARCH
              </button>
            `}
        </div>
      `}
    ${B`<nav class='nav-scroll' part="section-navbar-scroll">
      ${"false"!==this.showInfo&&this.resolvedSpec.info?B`
          ${"true"===this.infoDescriptionHeadingsInNavBar?B`
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?B`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${e=>this.scrollToEventTarget(e,!1)}'> 
                    ${(null===(e=this.resolvedSpec.info)||void 0===e||null===(t=e.title)||void 0===t?void 0:t.trim())||"Overview"}
                  </div>`:""}
              <div class="overview-headers">
                ${this.resolvedSpec.infoDescriptionHeaders.map((e=>B`
                  <div 
                    class='nav-bar-h${e.depth}' 
                    id="link-overview--${(new Ue.Slugger).slug(e.text)}"  
                    data-content-id='overview--${(new Ue.Slugger).slug(e.text)}' 
                    @click='${e=>this.scrollToEventTarget(e,!1)}'
                  >
                    ${e.text}
                  </div>`))}
              </div>
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?B`<hr style='border-top: 1px solid var(--nav-hover-bg-color); border-width:1px 0 0 0; margin: 15px 0 0 0'/>`:""}
            `:B`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${e=>this.scrollToEventTarget(e,!1)}'> 
            ${(null===(r=this.resolvedSpec.info)||void 0===r||null===(n=r.title)||void 0===n?void 0:n.trim())||"Overview"} 
              </div>`}
        `:""}
    
      ${"false"===this.allowServerSelection?"":B`<div class='nav-bar-info' id='link-servers' data-content-id='servers' @click = '${e=>this.scrollToEventTarget(e,!1)}'> API Servers </div>`}
      ${"false"!==this.allowAuthentication&&this.resolvedSpec.securitySchemes?B`<div class='nav-bar-info' id='link-auth' data-content-id='auth' @click = '${e=>this.scrollToEventTarget(e,!1)}'> Authentication </div>`:""}

      <div id='link-operations-top' class='nav-bar-section operations' data-content-id='operations-top' @click = '${e=>this.scrollToEventTarget(e,!1)}'>
        <div style="font-size:16px; display:flex; margin-left:10px;">
          ${"focused"===this.renderStyle?B`
              <div @click="${e=>{TP.call(this,e,"expand-all")}}" title="Expand all" style="transform: rotate(90deg); cursor:pointer; margin-right:10px;">▸</div>
              <div @click="${e=>{TP.call(this,e,"collapse-all")}}" title="Collapse all" style="transform: rotate(270deg); cursor:pointer;">▸</div>`:""}  
        </div>
        <div class='nav-bar-section-title'> OPERATIONS </div>
      </div>

      <!-- TAGS AND PATHS-->
      ${this.resolvedSpec.tags.filter((e=>e.paths.filter((e=>ot(this.matchPaths,e,this.matchType))).length)).map((e=>B`
          <div class='nav-bar-tag-and-paths ${e.expanded?"expanded":"collapsed"}'>
            ${"General \u2982"===e.name?B`<hr style="border:none; border-top: 1px dotted var(--nav-text-color); opacity:0.3; margin:-1px 0 0 0;"/>`:B`
                <div 
                  class='nav-bar-tag' 
                  id="link-${e.elementId}" 
                  data-content-id='${e.elementId}'
                  data-first-path-id='${e.firstPathId}'
                  @click='${e=>{"focused"===this.renderStyle&&"expand-collapse"===this.onNavTagClick?OP.call(this,e):this.scrollToEventTarget(e,!1)}}'
                >
                  <div>${e.name}</div>
                  <div class="nav-bar-tag-icon" @click="${e=>{"focused"===this.renderStyle&&"show-description"===this.onNavTagClick&&OP.call(this,e)}}">
                  </div>
                </div>
              `}
            ${"true"===this.infoDescriptionHeadingsInNavBar?B`
                ${"focused"===this.renderStyle&&"expand-collapse"===this.onNavTagClick?"":B`
                    <div class='tag-headers'>
                      ${e.headers.map((t=>B`
                      <div 
                        class='nav-bar-h${t.depth}' 
                        id="link-${e.elementId}--${(new Ue.Slugger).slug(t.text)}"  
                        data-content-id='${e.elementId}--${(new Ue.Slugger).slug(t.text)}' 
                        @click='${e=>this.scrollToEventTarget(e,!1)}'
                      > ${t.text}</div>`))}
                    </div>`}`:""}

            
            <div class='nav-bar-paths-under-tag'>
              <!-- Paths in each tag (endpoints) -->
              ${e.paths.filter((e=>!this.matchPaths||ot(this.matchPaths,e,this.matchType))).map((e=>B`
              <div 
                class='nav-bar-path
                ${"true"===this.usePathInNavBar?"small-font":""}'
                data-content-id='${e.elementId}'
                id='link-${e.elementId}'
                @click = '${e=>{this.scrollToEventTarget(e,!1)}}'
              >
                <span style = "display:flex; align-items:start; ${e.deprecated?"filter:opacity(0.5)":""}">
                  ${B`<span class="nav-method ${this.showMethodInNavBar} ${e.method}">
                      ${"as-colored-block"===this.showMethodInNavBar?e.method.substring(0,3).toUpperCase():e.method.toUpperCase()}
                    </span>`}
                  ${e.isWebhook?B`<span style="font-weight:bold; margin-right:8px; font-size: calc(var(--font-size-small) - 2px)">WEBHOOK</span>`:""}
                  ${"true"===this.usePathInNavBar?B`<span class='mono-font'>${e.path}</span>`:e.summary||e.shortSummary}
                </span>
              </div>`))}
            </div>
          </div>
        `))}

      <!-- COMPONENTS -->
      ${this.resolvedSpec.components&&"true"===this.showComponents&&"focused"===this.renderStyle?B`
          <div id='link-components' class='nav-bar-section components'>
            <div></div>
            <div class='nav-bar-section-title'>COMPONENTS</div>
          </div>
          ${this.resolvedSpec.components.map((e=>e.subComponents.length?B`
              <div class='nav-bar-tag' 
                data-content-id='cmp--${e.name.toLowerCase()}' 
                id='link-cmp--${e.name.toLowerCase()}' 
                @click='${e=>this.scrollToEventTarget(e,!1)}'>
                ${e.name}
              </div>
              ${e.subComponents.filter((e=>!1!==e.expanded)).map((e=>B`
                <div class='nav-bar-path' data-content-id='cmp--${e.id}' id='link-cmp--${e.id}' @click='${e=>this.scrollToEventTarget(e,!1)}'>
                  <span> ${e.name} </span>
                </div>`))}`:""))}`:""}
    </nav>`}
</nav>
`}function _P(e){const t=new Ue.Renderer;return t.heading=(t,r,n,o)=>`<h${r} class="observe-me" id="${e}--${o.slug(n)}">${t}</h${r}>`,t}function jP(e){return B`
    <div class='regular-font section-gap--focused-mode' part="section-operations-in-tag">
      ${e}
    </div>`}function IP(){var e;if("true"===this.showInfo)return jP(wP.call(this));const t=this.resolvedSpec.tags[0],r=null===(e=this.resolvedSpec.tags[0])||void 0===e?void 0:e.paths[0];return jP(t&&r?mP.call(this,r,t.name):"")}function PP(e){return B`
    <h1 id="${e.elementId}">${e.name}</h1>
    ${"show-description"===this.onNavTagClick&&e.description?B`
        <div class="m-markdown">
          ${TI(`\n            <div class="m-markdown regular-font">\n              ${Ue(e.description||"","true"===this.infoDescriptionHeadingsInNavBar?{renderer:_P(e.elementId)}:void 0)}\n            </div>`)}
        </div>`:""}
  `}function RP(){if(!this.focusedElementId||!this.resolvedSpec)return;const e=this.focusedElementId;let t,r=null,n=null,o=0;if(e.startsWith("overview")&&"true"===this.showInfo)t=wP.call(this);else if("auth"===e&&"true"===this.allowAuthentication)t=qI.call(this);else if("servers"===e&&"true"===this.allowServerSelection)t=AP.call(this);else if("operations-top"===e)t=B`
    <div id="operations-top" class="observe-me">
      <slot name="operations-top"></slot>
    </div>`;else if(e.startsWith("cmp--")&&"true"===this.showComponents)t=bP.call(this);else if(e.startsWith("tag--")){const r=e.indexOf("--",4)>0?e.substring(0,e.indexOf("--",5)):e;n=this.resolvedSpec.tags.find((e=>e.elementId===r)),t=n?jP.call(this,PP.call(this,n)):IP.call(this)}else{for(o=0;o<this.resolvedSpec.tags.length&&(n=this.resolvedSpec.tags[o],r=this.resolvedSpec.tags[o].paths.find((t=>`${t.elementId}`===e)),!r);o+=1);r?(EP(this.shadowRoot.getElementById(`link-${e}`),"expand"),t=jP.call(this,mP.call(this,r,n.name))):t=IP.call(this)}return t}function LP(e){if(e.expanded)e.expanded=!1,"true"===this.updateRoute&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${"#"===this.routePrefix?"":`${this.routePrefix}`}`);else if(e.expanded=!0,"true"===this.updateRoute){const t=`${this.routePrefix||"#"}${e.elementId}`;window.location.hash!==t&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${t}`)}this.requestUpdate()}function DP(e,t=!1){return B`
  <summary @click="${t=>{LP.call(this,e,t)}}" part="section-endpoint-head-${e.expanded?"expanded":"collapsed"}" class='endpoint-head ${e.method} ${e.deprecated?"deprecated":""} ${t||e.expanded?"expanded":"collapsed"}'>
    <div part="section-endpoint-head-method" class="method ${e.method} ${e.deprecated?"deprecated":""}"> ${e.method} </div> 
    <div  part="section-endpoint-head-path" class="path ${e.deprecated?"deprecated":""}"> 
      ${e.path} 
      ${e.isWebhook?B`<span style="font-family: var(--font-regular); font-size: var(--); font-size: var(--font-size-small); color:var(--primary-color); margin-left: 16px"> Webhook</span>`:""}
    </div>
    ${e.deprecated?B`
        <span style="font-size:var(--font-size-small); text-transform:uppercase; font-weight:bold; color:var(--red); margin:2px 0 0 5px;"> 
          deprecated 
        </span>`:""}
    ${this.showSummaryWhenCollapsed?B`
        <div class="only-large-screen" style="min-width:60px; flex:1"></div>
        <div part="section-endpoint-head-description" class="descr">${e.summary||e.shortSummary} </div>`:""}
  </summary>
  `}function BP(e){var t;const r=new Set;for(const l in e.responses)for(const t in null===(n=e.responses[l])||void 0===n?void 0:n.content){var n;r.add(t.trim())}const o=[...r].join(", "),a=this.resolvedSpec.securitySchemes.filter((t=>{var r;return t.finalKeyValue&&(null===(r=e.security)||void 0===r?void 0:r.some((e=>t.securitySchemeId in e)))}))||[],i=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===tt&&"-"!==e.value));i&&a.push(i);const s=e.xCodeSamples?HI(e.xCodeSamples):"";return B`
  <div part="section-endpoint-body-${e.expanded?"expanded":"collapsed"}" class='endpoint-body ${e.method} ${e.deprecated?"deprecated":""}'>
    <div class="summary">
      ${e.summary?B`<div class="title" part="section-endpoint-body-title">${e.summary}<div>`:e.shortSummary!==e.description?B`<div class="title" part="section-endpoint-body-title">${e.shortSummary}</div>`:""}
      ${e.xBadges&&(null===(t=e.xBadges)||void 0===t?void 0:t.length)>0?B`
          <div style="display:flex; flex-wrap:wrap;font-size: var(--font-size-small);">
            ${e.xBadges.map((e=>B`<span part="endpoint-badge" style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${e.color}, var(--input-bg)); color:var(--${e.color}); border:1px solid var(--${e.color})">${e.label}</span>`))}
          </div>
          `:""}

      ${e.description?B`<div part="section-endpoint-body-description" class="m-markdown"> ${TI(Ue(e.description))}</div>`:""}
      <slot name="${e.elementId}"></slot>
      ${MI.call(this,e.security)}
      ${s}
    </div>  
    <div class='req-resp-container'> 
      <div style="display:flex; flex-direction:column" class="view-mode-request ${this.layout}-layout">
        <api-request
          class = "${this.renderStyle}-mode ${this.layout}-layout"
          style = "width:100%;"
          method = "${e.method}", 
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${a}"
          .servers = "${e.servers}" 
          server-url = "${e.servers&&e.servers.length>0?e.servers[0].url:this.selectedServer.computedUrl}" 
          active-schema-tab = "${this.defaultSchemaTab}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          use-summary-to-list-example = "${this.useSummaryToListExamples}"
          allow-try = "${this.allowTry}"
          accept = "${o}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}" 
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${e.isWebhook?this.schemaHideWriteOnly:this.schemaHideReadOnly}"
          schema-hide-write-only = "${e.isWebhook?this.schemaHideReadOnly:this.schemaHideWriteOnly}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-request>

          ${e.callbacks?WI.call(this,e.callbacks):""}
      </div>  

      <api-response
        class = "${this.renderStyle}-mode"
        style = "width:100%;"
        .responses="${e.responses}"
        active-schema-tab = "${this.defaultSchemaTab}" 
        render-style="${this.renderStyle}" 
        schema-style="${this.schemaStyle}"
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "${e.isWebhook?this.schemaHideWriteOnly:this.schemaHideReadOnly}"
        schema-hide-write-only = "${e.isWebhook?this.schemaHideReadOnly:this.schemaHideWriteOnly}"
        selected-status = "${Object.keys(e.responses||{})[0]||""}"
        exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, file-input:file-input, 
        textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, anchor:anchor, anchor-param-example:anchor-param-example, btn-clear-resp:btn-clear-resp,
        schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </api-response>
    </div>
  </div>`}function FP(e=!0,t=!0,r=!1){return this.resolvedSpec?B`
    ${this.resolvedSpec.tags.map((e=>B`
      ${t?B` 
          <div class='regular-font section-gap section-tag ${e.expanded?"expanded":"collapsed"}'> 
            <div class='section-tag-header' @click="${()=>{e.expanded=!e.expanded,this.requestUpdate()}}">
              <div id='${e.elementId}' class="sub-title tag" style="color:var(--primary-color)">${e.name}</div>
            </div>
            <div class='section-tag-body'>
              <slot name="${e.elementId}"></slot>
              <div class="regular-font regular-font-size m-markdown" style="padding-bottom:12px">
                ${TI(Ue(e.description||""))}
              </div>
              ${e.paths.filter((e=>!this.matchPaths||ot(this.matchPaths,e,this.matchType))).map((e=>B`
                <section part="section-endpoint" id='${e.elementId}' class='m-endpoint regular-font ${e.method} ${r||e.expanded?"expanded":"collapsed"}'>
                  ${DP.call(this,e,r)}      
                  ${r||e.expanded?BP.call(this,e):""}
                </section>`))}
            </div>
          </div>`:B`
          <div class='section-tag-body'>
          ${e.paths.filter((e=>!this.matchPaths||ot(this.matchPaths,e,this.matchType))).map((e=>B`
            <section id='${e.elementId}' class='m-endpoint regular-font ${e.method} ${r||e.expanded?"expanded":"collapsed"}'>
              ${DP.call(this,e,r)}      
              ${r||e.expanded?BP.call(this,e):""}
            </section>`))}
          </div>
        `}
  `))}`:""}function NP(){return B`
  <header class="row main-header regular-font" part="section-header" style="padding:8px 4px 8px 4px;min-height:48px;">
    <div class="only-large-screen-flex" style="align-items: center;">
      <slot name="logo" class="logo" part="section-logo">
        ${B`
  <div style=${"height:36px;width:36px;margin-left:5px"}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 511 512">
      <path d="M351 411a202 202 0 01-350 0 203 203 0 01333-24 203 203 0 0117 24zm0 0" fill="#adc165"/>
      <path d="M334 387a202 202 0 01-216-69 202 202 0 01216 69zm78 32H85a8 8 0 01-8-8 8 8 0 018-8h327a8 8 0 017 8 8 8 0 01-7 8zm0 0" fill="#99aa52"/>
      <path d="M374 338l-5 30a202 202 0 01-248-248 203 203 0 01253 218zm0 0" fill="#ffc73b"/>
      <path d="M374 338a202 202 0 01-100-197 203 203 0 01100 197zm38 81l-6-2-231-231a8 8 0 0111-11l231 230a8 8 0 01-5 14zm0 0" fill="#efb025"/>
      <path d="M311 175c0 75 40 140 101 175a202 202 0 000-350 202 202 0 00-101 175zm0 0" fill="#ff903e"/>
      <path d="M412 419a8 8 0 01-8-8V85a8 8 0 0115 0v326a8 8 0 01-7 8zm0 0" fill="#e87425"/>
    </svg>
  </div>    
`}
        <!-- m-logo style="height:36px;width:36px;margin-left:5px"></m-logo -->
      </slot>  
      <div class="header-title" part="label-header-title">${this.headingText}</div>
    </div>  
    <div style="margin: 0px 8px;display:flex;flex:1">
      ${"false"===this.allowSpecUrlLoad?"":B`
          <input id="spec-url" 
            type="text" 
            style="font-size:var(--font-size-small)" 
            class="header-input mono-font"
            part="textbox textbox-spec-url" 
            placeholder="Spec URL" 
            value="${this.specUrl||""}" 
            @change="${this.onSepcUrlChange}" 
            spellcheck="false"
          >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div> 
        `} 
      ${"false"===this.allowSpecFileLoad?"":B`
          <input id="spec-file" 
            part = "file-input"
            type="file" 
            style="display:none" 
            value="${this.specFile||""}" 
            @change="${this.onSepcFileChange}" 
            spellcheck="false"
           >
          <button class="m-btn primary only-large-screen" style="margin-left:10px;" part="btn btn-fill" @click="${this.onFileLoadClick}"> LOCAL JSON FILE </button>
        `}
      <slot name="header"></slot>
      ${"false"===this.allowSearch||"read focused".includes(this.renderStyle)?"":B`  
          <input id="search" class="header-input" type="text" part="textbox textbox-header-filter" placeholder="Filter" @change="${this.onSearchChange}" style="max-width:130px;margin-left:10px;" spellcheck="false" >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
        `}
      
      ${"false"===this.allowAdvancedSearch||"read focused".includes(this.renderStyle)?"":B`
          <button class="m-btn primary only-large-screen" part="btn btn-fill btn-search" style="margin-left:10px;" @click="${this.onShowSearchModalClicked}">
            Search
          </button>
        `}
    </div>
    </header>`}customElements.define("schema-tree",class extends ne{static get properties(){return{data:{type:Object},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[He,hP,ZI,l`
      .tree {
        font-size:var(--font-size-small);
        text-align: left;
        direction: ltr;
        line-height:calc(var(--font-size-small) + 6px);
      }
      .tree .tr:hover{
        background-color:var(--hover-color);
      }
      .collapsed-descr .tr {
        max-height:calc(var(--font-size-small) + 8px);
      }
      .collapsed-descr .m-markdown-small p {
        line-height:calc(var(--font-size-small) + 6px);
      }

      .tree .key {
        max-width: 300px;
      }
      .key.deprecated .key-label {
        color: var(--red);
      }
      .tr.expanded:hover > .td.key > .open-bracket {
        color: var(--primary-color);
      }
      .tr.expanded:hover + .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .tr.expanded:hover + .inside-bracket + .close-bracket {
        color: var(--primary-color);
      }

      .open-bracket{
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .close-bracket{
        display:inline-block;
        font-family: var(--font-mono);
      }
      .tr.collapsed + .inside-bracket,
      .tr.collapsed + .inside-bracket + .close-bracket{
        display:none;
      }
      .inside-bracket.object,
      .inside-bracket.array {
        border-left: 1px dotted var(--border-color);
      }
      .inside-bracket.xxx-of {
        padding:5px 0px;
        border-style: dotted;
        border-width: 0 0 1px 0;
        border-color:var(--primary-color);
      }`,Xe]}render(){var e,t,r;return B`
      <div class="tree ${"true"===this.schemaDescriptionExpanded?"expanded-descr":"collapsed-descr"}">
        <div class="toolbar">
          <div class="toolbar-item schema-root-type ${(null===(e=this.data)||void 0===e?void 0:e["::type"])||""} "> ${(null===(t=this.data)||void 0===t?void 0:t["::type"])||""} </div>
          ${"true"===this.allowSchemaDescriptionExpandToggle?B`
              <div style="flex:1"></div>
              <div part="schema-toolbar-item schema-multiline-toggle" class='toolbar-item' @click='${()=>{this.schemaDescriptionExpanded="true"===this.schemaDescriptionExpanded?"false":"true"}}'> 
                ${"true"===this.schemaDescriptionExpanded?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        ${null!==(r=this.data)&&void 0!==r&&r["::description"]?B`<span part="schema-description" class='m-markdown'> ${TI(Ue(this.data["::description"]||""))}</span>`:""}
        ${this.data?B`
            ${this.generateTree("array"===this.data["::type"]?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"]||"")}`:B`<span class='mono-font' style='color:var(--red)'> Schema not found </span>`}
      </div>  
    `}generateTree(e,t="object",r="",n="",o="",a=0,i=0,s=""){var l;if("true"===this.schemaHideReadOnly){if("array"===t&&"readonly"===s)return;if(e&&"readonly"===e["::readwrite"])return}if("true"===this.schemaHideWriteOnly){if("array"===t&&"writeonly"===s)return;if(e&&"writeonly"===e["::readwrite"])return}if(!e)return B`<div class="null" style="display:inline;">
        <span class="key-label xxx-of-key"> ${n.replace("::OPTION~","")}</span>
        ${"array"===t?B`<span class='mono-font'> [ ] </span>`:"object"===t?B`<span class='mono-font'> { } </span>`:B`<span class='mono-font'> schema undefined </span>`}
      </div>`;if(0===Object.keys(e).length)return B`<span class="key object">${n}:{ }</span>`;let c="",p="";if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))c=n.replace("::","").replace("~"," ");else if(n.startsWith("::OPTION")){const e=n.split("~");c=e[1],p=e[2]}else c=n;const u=400-12*i;let d="",h="";const f=null!==(l=e["::type"])&&void 0!==l&&l.startsWith("xxx-of")?a:a+1,m="xxx-of-option"===t||"xxx-of-option"===e["::type"]||n.startsWith("::OPTION")?i:i+1;if("object"===e["::type"])"array"===t?(d=a<this.schemaExpandLevel?B`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{</span>`:B`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{...}]</span>`,h="}]"):(d=a<this.schemaExpandLevel?B`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{</span>`:B`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{...}</span>`,h="}");else if("array"===e["::type"])if("array"===t){const e="object"!==r?r:"";d=a<this.schemaExpandLevel?B`<span class="open-bracket array-of-array" data-array-type="${e}" @click="${this.toggleObjectExpand}">[[ ${e} </span>`:B`<span class="open-bracket array-of-array"  data-array-type="${e}" @click="${this.toggleObjectExpand}">[[...]]</span>`,h="]]"}else d=a<this.schemaExpandLevel?B`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[</span>`:B`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[...]</span>`,h="]";var y;if("object"==typeof e)return B`
        <div class="tr ${a<this.schemaExpandLevel||null!==(y=e["::type"])&&void 0!==y&&y.startsWith("xxx-of")?"expanded":"collapsed"} ${e["::type"]||"no-type-info"}" title="${e["::deprecated"]?"Deprecated":""}">
          <div class="td key ${e["::deprecated"]?"deprecated":""}" style='min-width:${u}px'>
            ${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]||n.startsWith("::OPTION")?B`<span class='key-label xxx-of-key'> ${c}</span><span class="xxx-of-descr">${p}</span>`:"::props"===c||"::ARRAY~OF"===c?"":a>0?B`<span class="key-label" title="${"readonly"===s?"Read-Only":"writeonly"===s?"Write-Only":""}">
                      ${e["::deprecated"]?"\u2717":""}
                      ${c.replace(/\*$/,"")}${c.endsWith("*")?B`<span style="color:var(--red)">*</span>`:""}${"readonly"===s?B` 🆁`:"writeonly"===s?B` 🆆`:s}:
                    </span>`:""}
            ${"xxx-of"===e["::type"]&&"array"===t?B`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
            ${d}
          </div>
          <div class='td key-descr m-markdown-small'>${TI(Ue(o||""))}</div>
        </div>
        <div class='inside-bracket ${e["::type"]||"no-type-info"}' style='padding-left:${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]?0:12}px;'>
          ${Array.isArray(e)&&e[0]?B`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",f,m,e[0]["::readwrite"])}`:B`
              ${Object.keys(e).map((t=>B`
                ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite"].includes(t)?"array"===e[t]["::type"]||"object"===e[t]["::type"]?B`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],f,m,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`:"":B`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],f,m,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`}
              `))}
            `}
        </div>
        ${e["::type"]&&e["::type"].includes("xxx-of")?"":B`<div class='close-bracket'> ${h} </div>`}
      `;const[g,v,b,x,w,$,k,S,A]=e.split("~|~");if("\ud83c\udd81"===v&&"true"===this.schemaHideReadOnly)return;if("\ud83c\udd86"===v&&"true"===this.schemaHideWriteOnly)return;const E=g.replace(/\u2503.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase();let O="",T="";return"array"===t?"readonly"===s?(O="\ud83c\udd81",T="Read-Only"):"writeonly"===s&&(O="\ud83c\udd86",T="Write-Only"):"\ud83c\udd81"===v?(O="\ud83c\udd81",T="Read-Only"):"\ud83c\udd86"===v&&(O="\ud83c\udd86",T="Write-Only"),B`
      <div class = "tr primitive" title="${A?"Deprecated":""}">
        <div class="td key ${A}" style='min-width:${u}px'>
          ${A?B`<span style='color:var(--red);'>✗</span>`:""}
          ${c.endsWith("*")?B`<span class="key-label">${c.substring(0,c.length-1)}</span><span style='color:var(--red);'>*</span>:`:n.startsWith("::OPTION")?B`<span class='key-label xxx-of-key'>${c}</span><span class="xxx-of-descr">${p}</span>`:B`<span class="key-label">${c}:</span>`}
          <span class="${E}" title="${T}"> 
            ${"array"===t?`[${g}]`:`${g}`}
            ${O}
          </span>
        </div>
        <div class='td key-descr'>
          ${"array"===t?B`<span class="m-markdown-small">${TI(Ue(o))}</span>`:""}
          ${k?B`<span class="m-markdown-small">
              ${TI(Ue(`${S?`**${S}:**`:""} ${k} ${b||x||w||$?'<span class="more-content">\u2935</span>':""}`))}
              </span>`:S?B`${S} ${b||x||w||$?B`<span class="more-content">⤵</span>`:""}`:""}
          ${b?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Constraints: </span>${b}</div>`:""}
          ${x?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Default: </span>${x}</div>`:""}
          ${w?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Allowed: </span>${w}</div>`:""}
          ${$?B`<div style='display:inline-block; line-break: anywhere; margin-right:8px'><span class='bold-text'>Pattern: </span>${$}</div>`:""}
        </div>
      </div>
    `}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{...}]":e.target.classList.contains("array-of-array")?"[[...]]":e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{":e.target.classList.contains("array-of-array")?`[[ ${e.target.dataset.arrayType}`:e.target.classList.contains("object")?"{":"[")}}),customElements.define("tag-input",class extends ne{render(){let e="";return Array.isArray(this.value)&&(e=B`${this.value.filter((e=>""!==e.trim())).map((e=>B`<span class='tag'>${e}</span>`))}`),B`
      <div class='tags' tabindex="0">
        ${e}
        <input type="text" class='editor' @paste="${e=>this.afterPaste(e)}" @keydown="${this.afterKeyDown}" @blur="${this.onBlur}" placeholder="${this.placeholder||""}">
      </div>
    `}static get properties(){return{placeholder:{type:String},value:{type:Array,attribute:"value"}}}attributeChangedCallback(e,t,r){"value"===e&&r&&t!==r&&(this.value=r.split(",").filter((e=>""!==e.trim()))),super.attributeChangedCallback(e,t,r)}afterPaste(e){const t=(e.clipboardData||window.clipboardData).getData("Text"),r=t?t.split(",").filter((e=>""!==e.trim())):"";r&&(Array.isArray(this.value)?this.value=[...this.value,...r]:this.value=r),e.preventDefault()}afterKeyDown(e){13===e.keyCode?(e.stopPropagation(),e.preventDefault(),e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")):8===e.keyCode&&0===e.target.value.length&&Array.isArray(this.value)&&this.value.length>0&&(this.value.splice(-1),this.value=[...this.value])}onBlur(e){e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")}static get styles(){return[l`
      .tags{
        display:flex;
        flex-wrap: wrap;
        outline: none;
        padding:0;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        cursor:text;
        overflow:hidden;
        background:var(--input-bg);
      }
      .tag, .editor {
        padding:3px;
        margin:2px;
      }
      .tag{
        border:1px solid var(--border-color);
        background-color:var(--bg3);
        color:var(--fg3);
        border-radius:var(--border-radius);
        word-break: break-all;
        font-size: var(--font-size-small);
      }
      .tag:hover ~ #cursor {
        display: block;
      }
      .editor{
        flex:1;
        border:1px solid transparent;
        color:var(--fg);
        min-width:60px;
        outline: none;
        line-height: inherit;
        font-family:inherit;
        background:transparent;
        font-size: calc(var(--font-size-small) + 1px);
      }
      .editor::placeholder {
        color: var(--placeholder-color);
        opacity:1;
      }
    `]}}),customElements.define("api-request",class extends ne{constructor(){super(),this.responseMessage="",this.responseStatus="success",this.responseHeaders="",this.responseText="",this.responseUrl="",this.curlSyntax="",this.activeResponseTab="response",this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.activeParameterSchemaTabs={}}static get properties(){return{serverUrl:{type:String,attribute:"server-url"},servers:{type:Array},method:{type:String},path:{type:String},security:{type:Array},parameters:{type:Array},request_body:{type:Object},api_keys:{type:Array},parser:{type:Object},accept:{type:String},callback:{type:String},responseMessage:{type:String,attribute:!1},responseText:{type:String,attribute:!1},responseHeaders:{type:String,attribute:!1},responseStatus:{type:String,attribute:!1},responseUrl:{type:String,attribute:!1},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},useSummaryToListExamples:{type:String,attribute:"use-summary-to-list-example"},allowTry:{type:String,attribute:"allow-try"},renderStyle:{type:String,attribute:"render-style"},schemaStyle:{type:String,attribute:"schema-style"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},activeParameterSchemaTabs:{type:Object,converter:{fromAttribute:e=>JSON.parse(e),toAttribute:e=>JSON.stringify(e)},attribute:"active-parameter-schema-tabs"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},fetchCredentials:{type:String,attribute:"fetch-credentials"},activeResponseTab:{type:String},selectedRequestBodyType:{type:String,attribute:"selected-request-body-type"},selectedRequestBodyExample:{type:String,attribute:"selected-request-body-example"}}}static get styles(){return[Ge,We,He,Ve,ZI,Ye,Je,l`
        *, *:before, *:after { box-sizing: border-box; }
    
        .read-mode {
          margin-top: 24px;
        }
        .param-name,
        .param-type {
          margin: 1px 0;
          text-align: right;
          line-height: var(--font-size-small);
        }
        .param-name {
          color: var(--fg); 
          font-family: var(--font-mono);
        }
        .param-name.deprecated { 
          color: var(--red);
        }
        .param-type{
          color: var(--light-fg); 
          font-family: var(--font-regular);
        }
        .param-constraint{
          min-width:100px;
        }
        .param-constraint:empty{
          display:none;
        }
        .top-gap{margin-top:24px;}

        .textarea {
          min-height:220px; 
          padding:5px;
          resize:vertical;
          direction: ltr;
        }
        .example:first-child {
          margin-top: -9px;
        }

        .response-message{
          font-weight:bold;
          text-overflow: ellipsis;
        }
        .response-message.error {
          color:var(--red);
        }
        .response-message.success {
          color:var(--blue);
        }

        .file-input-container {
          align-items:flex-end;
        }
        .file-input-container .input-set:first-child .file-input-remove-btn{
          visibility:hidden;
        }

        .file-input-remove-btn{
          font-size:16px;
          color:var(--red);
          outline: none;
          border: none;
          background:none;
          cursor:pointer;
        }

        .v-tab-btn {
          font-size: var(--smal-font-size);
          height:24px; 
          border:none; 
          background:none; 
          opacity: 0.3;
          cursor: pointer;
          padding: 4px 8px;
        }
        .v-tab-btn.active {
          font-weight: bold;
          background: var(--bg);
          opacity: 1;
        }

        @media only screen and (min-width: 768px) {
          .textarea {
            padding:8px;
          }
        }

        @media only screen and (max-width: 470px) {
          .hide-in-small-screen {
            display:none;
          }
        }
      `,Xe]}render(){return B`
    <div class="col regular-font request-panel ${"read focused".includes(this.renderStyle)||"true"===this.callback?"read-mode":"view-mode"}">
      <div class=" ${"true"===this.callback?"tiny-title":"req-res-title"} "> 
        ${"true"===this.callback?"CALLBACK REQUEST":"REQUEST"}
      </div>
      <div>
        ${GI([this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("path")))}
        ${GI([this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("query")))}
        ${this.requestBodyTemplate()}
        ${GI([this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("header")))}
        ${GI([this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("cookie")))}
        ${"false"===this.allowTry?"":B`${this.apiCallTemplate()}`}
      </div>  
    </div>
    `}updated(e){"focused"===this.renderStyle&&(1===e.size&&e.has("activeSchemaTab")||[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach((e=>{const t=this.shadowRoot.querySelector(`textarea[data-pname='hidden-${e.dataset.pname}']`);t&&(e.value=t.value)})))}exampleListTemplate(e,t,r=[]){return B`
    ${r.length>0?B`<span style="font-weight:bold">Example: </span>
        ${r.map(((r,n)=>{var o,a,i;return B`
          ${0===n?"":"\u2503"}
          ${"array"===t?"[":""}
          <a part="anchor anchor-param-example" class = "${"true"===this.allowTry?"":"inactive-link"}"
            data-example-type="${"array"===t?t:"string"}"
            data-example = "${r.value&&Array.isArray(r.value)?null===(o=r.value)||void 0===o?void 0:o.join("~|~"):r.value||""}"
            @click="${t=>{const r=t.target.closest("table").querySelector(`[data-pname="${e}"]`);r&&("array"===t.target.dataset.exampleType?r.value=t.target.dataset.example.split("~|~"):r.value=t.target.dataset.example)}}"
          >
          ${"true"===this.useSummaryToListExamples?r.description||r.summary||(r.value&&Array.isArray(r.value)?null===(a=r.value)||void 0===a?void 0:a.join(", "):r.value||""):r.value&&Array.isArray(r.value)?null===(i=r.value)||void 0===i?void 0:i.join(", "):r.value||""}
          </a>
          ${"array"===t?"] ":""}
        `}))}
      `:""}`}inputParametersTemplate(e){const t=this.parameters?this.parameters.filter((t=>t.in===e)):[];if(0===t.length)return"";let r="";"path"===e?r="PATH PARAMETERS":"query"===e?r="QUERY-STRING PARAMETERS":"header"===e?r="REQUEST HEADERS":"cookie"===e&&(r="COOKIES");const n=[];for(const o of t){const[t,r,a]=dP(o);if(!t)continue;const i=QI(t);if(!i)continue;const s=cP(t,{});let l="form",c=!0,p=!1;"query"===e&&(o.style&&"form spaceDelimited pipeDelimited".includes(o.style)?l=o.style:r&&(l=r),"boolean"==typeof o.explode&&(c=o.explode),"boolean"==typeof o.allowReserved&&(p=o.allowReserved));const u=eP(o.examples||XI(o.example)||XI(null==a?void 0:a.example)||(null==a?void 0:a.examples)||i.examples||XI(i.example),i.type);u.exampleVal||"object"!==i.type||(u.exampleVal=pP(t,r||"json","","",!(this.schemaHideReadOnly&&(this.schemaHideReadOnly.includes(this.method)||"true"===this.schemaHideReadOnly)),!(this.schemaHideWriteOnly&&(this.schemaHideWriteOnly.includes(this.method)||"true"===this.schemaHideWriteOnly)),"text",!1)[0].exampleValue);const d="read focused".includes(this.renderStyle)?"200px":"160px";n.push(B`
      <tr title="${o.deprecated?"Deprecated":""}"> 
        <td rowspan="${"true"===this.allowTry?"1":"2"}" style="width:${d}; min-width:100px;">
          <div class="param-name ${o.deprecated?"deprecated":""}" >
            ${o.deprecated?B`<span style='color:var(--red);'>✗</span>`:""}
            ${o.required?B`<span style='color:var(--red)'>*</span>`:""}
            ${o.name}
          </div>
          <div class="param-type">
            ${"array"===i.type?`${i.arrayType}`:`${i.format?i.format:i.type}`}
          </div>
        </td>  
        ${"true"===this.allowTry?B`
            <td style="min-width:100px;" colspan="${i.default||i.constrain||i.allowedValues||i.pattern?"1":"2"}">
              ${"array"===i.type?B`
                  <tag-input class="request-param" 
                    style = "width:100%" 
                    data-ptype = "${e}"
                    data-pname = "${o.name}"
                    data-example = "${Array.isArray(u.exampleVal)?u.exampleVal.join("~|~"):u.exampleVal}"
                    data-param-serialize-style = "${l}"
                    data-param-serialize-explode = "${c}"
                    data-param-allow-reserved = "${p}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(u.exampleVal),u.exampleVal}"
                  >
                  </tag-input>`:"object"===i.type?B`
                    <div class="tab-panel col" style="border-width:0 0 1px 0;">
                      <div class="tab-buttons row" @click="${e=>{if("button"===e.target.tagName.toLowerCase()){const t={...this.activeParameterSchemaTabs};t[o.name]=e.target.dataset.tab,this.activeParameterSchemaTabs=t}}}">
                        <button class="tab-btn ${"example"===this.activeParameterSchemaTabs[o.name]?"active":""}" data-tab = 'example'>EXAMPLE </button>
                        <button class="tab-btn ${"example"!==this.activeParameterSchemaTabs[o.name]?"active":""}" data-tab = 'schema'>SCHEMA</button>
                      </div>
                      ${"example"===this.activeParameterSchemaTabs[o.name]?B`<div class="tab-content col">
                          <textarea 
                            class = "textarea request-param"
                            part = "textarea textarea-param"
                            data-ptype = "${e}-object"
                            data-pname = "${o.name}"
                            data-example = "${u.exampleVal}"
                            data-param-serialize-style = "${l}"
                            data-param-serialize-explode = "${c}"
                            data-param-allow-reserved = "${p}"
                            spellcheck = "false"
                            .textContent = "${"true"===this.fillRequestFieldsWithExample?u.exampleVal:""}"
                            style = "resize:vertical; width:100%; height: ${"read focused".includes(this.renderStyle)?"180px":"120px"};"
                          ></textarea>
                        </div>`:B`
                          <div class="tab-content col">            
                            <schema-tree
                              class = 'json'
                              style = 'display: block'
                              .data = '${s}'
                              schema-expand-level = "${this.schemaExpandLevel}"
                              schema-description-expanded = "${this.schemaDescriptionExpanded}"
                              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                              schema-hide-read-only = "${this.schemaHideReadOnly.includes(this.method)}"
                              schema-hide-write-only = "${this.schemaHideWriteOnly.includes(this.method)}"
                              exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example"
                            > </schema-tree>
                          </div>`}
                    </div>`:B`
                    <input type="${"password"===i.format?"password":"text"}" spellcheck="false" style="width:100%" 
                      class="request-param"
                      part="textbox textbox-param"
                      data-ptype="${e}"
                      data-pname="${o.name}" 
                      data-example="${Array.isArray(u.exampleVal)?u.exampleVal.join("~|~"):u.exampleVal}"
                      data-param-allow-reserved = "${p}"
                      data-x-fill-example = "${o["x-fill-example"]||"yes"}"
                      data-array="false"
                      .value="${"no"===o["x-fill-example"]?"":YI("true"===this.fillRequestFieldsWithExample?u.exampleVal:"")}"
                    />`}
            </td>`:""}
        ${i.default||i.constrain||i.allowedValues||i.pattern?B`
            <td colspan="${"true"===this.allowTry?"1":"2"}">
              <div class="param-constraint">
                ${i.default?B`<span style="font-weight:bold">Default: </span>${i.default}<br/>`:""}
                ${i.pattern?B`<span style="font-weight:bold">Pattern: </span>${i.pattern}<br/>`:""}
                ${i.constrain?B`${i.constrain}<br/>`:""}
                ${i.allowedValues&&i.allowedValues.split("\u2503").map(((e,t)=>B`
                  ${t>0?"\u2503":B`<span style="font-weight:bold">Allowed: </span>`}
                  ${B`
                    <a part="anchor anchor-param-constraint" class = "${"true"===this.allowTry?"":"inactive-link"}"
                      data-type="${"array"===i.type?i.type:"string"}"
                      data-enum="${e.trim()}"
                      @click="${e=>{const t=e.target.closest("table").querySelector(`[data-pname="${o.name}"]`);t&&("array"===e.target.dataset.type?t.value=[e.target.dataset.enum]:t.value=e.target.dataset.enum)}}"
                    >${e}</a>`}`))}
              </div>
            </td>`:B`<td></td>`}
      </tr>
      <tr>
        ${"true"===this.allowTry?B`<td style="border:none"> </td>`:""}
        <td colspan="2" style="border:none">
          <span class="m-markdown-small">${TI(Ue(o.description||""))}</span>
          ${this.exampleListTemplate.call(this,o.name,i.type,u.exampleList)}
        </td>
      </tr>
    `)}return B`
    <div class="table-title top-gap">${r}</div>
    <div style="display:block; overflow-x:auto; max-width:100%;">
      <table class="m-table" style="width:100%; word-break:break-word;">
        ${n}
      </table>
    </div>`}resetRequestBodySelection(){this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.clearResponseData()}onSelectExample(e){this.selectedRequestBodyExample=e.target.value;const t=e.target;window.setTimeout((e=>{const t=e.closest(".example-panel").querySelector(".request-body-param");e.closest(".example-panel").querySelector(".request-body-param-user-input").value=t.innerText}),0,t)}onMimeTypeChange(e){this.selectedRequestBodyType=e.target.value;const t=e.target;this.selectedRequestBodyExample="",window.setTimeout((e=>{const t=e.closest(".request-body-container").querySelector(".request-body-param");t&&(e.closest(".request-body-container").querySelector(".request-body-param-user-input").value=t.innerText)}),0,t)}requestBodyTemplate(){if(!this.request_body)return"";if(0===Object.keys(this.request_body).length)return"";let e="",t="",r="",n="",o="";const a=[],{content:i}=this.request_body;for(const s in i)a.push({mimeType:s,schema:i[s].schema,example:i[s].example,examples:i[s].examples}),this.selectedRequestBodyType||(this.selectedRequestBodyType=s);return e=1===a.length?"":B`
        <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change = '${e=>this.onMimeTypeChange(e)}'>
          ${a.map((e=>B`
            <option value = '${e.mimeType}' ?selected = '${e.mimeType===this.selectedRequestBodyType}'>
              ${e.mimeType}
            </option> `))}
        </select>
      `,a.forEach((e=>{let a,i=[];if(this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose"))e.mimeType===this.selectedRequestBodyType&&(i=pP(e.schema,e.mimeType,e.examples,e.example,!(this.schemaHideReadOnly&&(this.schemaHideReadOnly.includes(this.method)||"true"===this.schemaHideReadOnly)),!(this.schemaHideWriteOnly&&(this.schemaHideWriteOnly.includes(this.method)||"true"===this.schemaHideWriteOnly)),"text",!1),this.selectedRequestBodyExample||(this.selectedRequestBodyExample=i.length>0?i[0].exampleId:""),o=B`
            ${o}
            <div class = 'example-panel border-top pad-top-8'>
              ${1===i.length?"":B`
                  <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change='${e=>this.onSelectExample(e)}'>
                    ${i.map((e=>B`<option value="${e.exampleId}" ?selected=${e.exampleId===this.selectedRequestBodyExample} > 
                      ${e.exampleSummary.length>80?e.exampleId:e.exampleSummary?e.exampleSummary:e.exampleId} 
                    </option>`))}
                  </select>
                `}
              ${i.filter((e=>e.exampleId===this.selectedRequestBodyExample)).map((t=>B`
                <div class="example ${t.exampleId===this.selectedRequestBodyExample?"example-selected":""}" data-example = '${t.exampleId}'>
                  ${t.exampleSummary&&t.exampleSummary.length>80?B`<div style="padding: 4px 0"> ${t.exampleSummary} </div>`:""}
                  ${t.exampleDescription?B`<div class="m-markdown-small" style="padding: 4px 0"> ${TI(Ue(t.exampleDescription||""))} </div>`:""}
                  <!-- This pre(hidden) is to store the original example value, this will remain unchanged when users switches from one example to another, its is used to populate the editable textarea -->
                  <pre 
                    class = "textarea is-hidden request-body-param ${e.mimeType.substring(e.mimeType.indexOf("/")+1)}" 
                    spellcheck = "false"
                    data-ptype = "${e.mimeType}" 
                    style="width:100%; resize:vertical; display:none"
                  >${"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2)}</pre>

                  <!-- this textarea is for user to edit the example -->
                  <textarea 
                    class = "textarea request-body-param-user-input"
                    part = "textarea textarea-param"
                    spellcheck = "false"
                    data-ptype = "${e.mimeType}" 
                    data-example = "${"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2)}"
                    data-example-format = "${t.exampleFormat}"
                    style="width:100%; resize:vertical;"
                    .textContent = "${"true"===this.fillRequestFieldsWithExample?"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2):""}"
                  ></textarea>
                </div>  
              `))}

            </div>
          `);else if(this.selectedRequestBodyType.includes("form-urlencoded")||this.selectedRequestBodyType.includes("form-data")){if(e.mimeType===this.selectedRequestBodyType){const t=pP(e.schema,e.mimeType,e.examples,e.example,!(this.schemaHideReadOnly&&(this.schemaHideReadOnly.includes(this.method)||"true"===this.schemaHideReadOnly)),!(this.schemaHideWriteOnly&&(this.schemaHideWriteOnly.includes(this.method)||"true"===this.schemaHideWriteOnly)),"text",!1);e.schema&&(r=this.formDataTemplate(e.schema,e.mimeType,t[0]?t[0].exampleValue:""))}}else/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(this.selectedRequestBodyType)&&e.mimeType===this.selectedRequestBodyType&&(t=B`
            <div class = "small-font-size bold-text row">
              <input type="file" part="file-input" style="max-width:100%" class="request-body-param-file" data-ptype="${e.mimeType}" spellcheck="false" />
            </div>  
          `);(e.mimeType.includes("json")||e.mimeType.includes("xml")||e.mimeType.includes("text")||this.selectedRequestBodyType.includes("jose"))&&(a=cP(e.schema,{}),"table"===this.schemaStyle?n=B`
            ${n}
            <schema-table
              class = '${e.mimeType.substring(e.mimeType.indexOf("/")+1)}'
              style = 'display: ${this.selectedRequestBodyType===e.mimeType?"block":"none"};'
              .data = '${a}'
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-table>
          `:"tree"===this.schemaStyle&&(n=B`
            ${n}
            <schema-tree
              class = "${e.mimeType.substring(e.mimeType.indexOf("/")+1)}"
              style = "display: ${this.selectedRequestBodyType===e.mimeType?"block":"none"};"
              .data = "${a}"
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-tree>
          `))})),B`
      <div class='request-body-container' data-selected-request-body-type="${this.selectedRequestBodyType}">
        <div class="table-title top-gap row">
          REQUEST BODY ${this.request_body.required?B`<span class="mono-font" style='color:var(--red)'>*</span>`:""} 
          <span style = "font-weight:normal; margin-left:5px"> ${this.selectedRequestBodyType}</span>
          <span style="flex:1"></span>
          ${e}
        </div>
        ${this.request_body.description?B`<div class="m-markdown" style="margin-bottom:12px">${TI(Ue(this.request_body.description))}</div>`:""}
        
        ${this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose")?B`
            <div class="tab-panel col" style="border-width:0 0 1px 0;">
              <div class="tab-buttons row" @click="${e=>{"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}">
                <button class="tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE</button>
                <button class="tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema'>SCHEMA</button>
              </div>
              ${"example"===this.activeSchemaTab?B`<div class="tab-content col"> ${o}</div>`:B`<div class="tab-content col"> ${n}</div>`}
            </div>`:B`  
            ${t}
            ${r}`}
      </div>  
    `}formDataParamAsObjectTemplate(e,t,r){var n;const o=cP(t,{}),a=pP(t,"json",t.examples,t.example,!(this.schemaHideReadOnly&&(this.schemaHideReadOnly.includes(this.method)||"true"===this.schemaHideReadOnly)),!(this.schemaHideWriteOnly&&(this.schemaHideWriteOnly.includes(this.method)||"true"===this.schemaHideWriteOnly)),"text",!1);return B`
      <div class="tab-panel row" style="min-height:220px; border-left: 6px solid var(--light-border-color); align-items: stretch;">
        <div style="width:24px; background-color:var(--light-border-color)">
          <div class="row" style="flex-direction:row-reverse; width:160px; height:24px; transform:rotate(270deg) translateX(-160px); transform-origin:top left; display:block;" @click="${e=>{if(e.target.classList.contains("v-tab-btn")){const{tab:t}=e.target.dataset;if(t){const r=e.target.closest(".tab-panel"),n=r.querySelector(`.v-tab-btn[data-tab="${t}"]`),o=[...r.querySelectorAll(`.v-tab-btn:not([data-tab="${t}"])`)],a=r.querySelector(`.tab-content[data-tab="${t}"]`),i=[...r.querySelectorAll(`.tab-content:not([data-tab="${t}"])`)];n.classList.add("active"),a.style.display="block",o.forEach((e=>{e.classList.remove("active")})),i.forEach((e=>{e.style.display="none"}))}}"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}">
          <button class="v-tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE</button>
          <button class="v-tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema'>SCHEMA</button>
        </div>
      </div>
      ${B`
        <div class="tab-content col" data-tab = 'example' style="display:${"example"===this.activeSchemaTab?"block":"none"}; padding-left:5px; width:100%"> 
          <textarea 
            class = "textarea"
            part = "textarea textarea-param"
            style = "width:100%; border:none; resize:vertical;" 
            data-array = "false" 
            data-ptype = "${r.includes("form-urlencode")?"form-urlencode":"form-data"}"
            data-pname = "${e}"
            data-example = "${(null===(n=a[0])||void 0===n?void 0:n.exampleValue)||""}"
            .textContent = "${"true"===this.fillRequestFieldsWithExample?a[0].exampleValue:""}"
            spellcheck = "false"
          ></textarea>
          <!-- This textarea(hidden) is to store the original example value, in focused mode on navbar change it is used to update the example text -->
          <textarea data-pname = "hidden-${e}" data-ptype = "${r.includes("form-urlencode")?"hidden-form-urlencode":"hidden-form-data"}" class="is-hidden" style="display:none">${a[0].exampleValue}</textarea>
        </div>`}
      ${B`
        <div class="tab-content col" data-tab = 'schema' style="display:${"example"!==this.activeSchemaTab?"block":"none"}; padding-left:5px; width:100%;"> 
          <schema-tree
            .data = '${o}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
          > </schema-tree>
        </div>`}
      </div>
    `}formDataTemplate(e,t,r=""){const n=[];if(e.properties){for(const r in e.properties){var o,a;const i=e.properties[r];if(i.readOnly)continue;const s=i.examples||i.example||"",l=i.type,c=QI(i),p="read focused".includes(this.renderStyle)?"200px":"160px",u=eP(c.examples||c.example,c.type);n.push(B`
        <tr title="${i.deprecated?"Deprecated":""}"> 
          <td style="width:${p}; min-width:100px;">
            <div class="param-name ${i.deprecated?"deprecated":""}">
              ${r}${null!==(o=e.required)&&void 0!==o&&o.includes(r)||i.required?B`<span style='color:var(--red);'>*</span>`:""}
            </div>
            <div class="param-type">${c.type}</div>
          </td>  
          <td 
            style="${"object"===l?"width:100%; padding:0;":"true"===this.allowTry?"":"display:none;"} min-width:100px;" 
            colspan="${"object"===l?2:1}">
            ${"array"===l?"binary"===(null===(a=i.items)||void 0===a?void 0:a.format)?B`
                <div class="file-input-container col" style='align-items:flex-end;' @click="${e=>this.onAddRemoveFileInput(e,r,t)}">
                  <div class='input-set row'>
                    <input 
                      type = "file"
                      part = "file-input"
                      style = "width:100%" 
                      data-pname = "${r}" 
                      data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                      data-array = "false" 
                      data-file-array = "true" 
                    />
                    <button class="file-input-remove-btn"> &#x2715; </button>
                  </div>  
                  <button class="m-btn primary file-input-add-btn" part="btn btn-fill" style="margin:2px 25px 0 0; padding:2px 6px;">ADD</button>
                </div>  
                `:B`
                  <tag-input
                    style = "width:100%" 
                    data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                    data-pname = "${r}"
                    data-example = "${Array.isArray(s)?s.join("~|~"):s}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(s)?Array.isArray(s[0])?s[0]:[s[0]]:[s]}"
                  >
                  </tag-input>
                `:B`
                ${"object"===l?this.formDataParamAsObjectTemplate.call(this,r,i,t):B`
                    ${"true"===this.allowTry?B`<input
                          .value = "${"true"===this.fillRequestFieldsWithExample?u.exampleVal:""}"
                          spellcheck = "false"
                          type = "${"binary"===i.format?"file":"password"===i.format?"password":"text"}"
                          part = "textbox textbox-param"
                          style = "width:100%"
                          data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                          data-pname = "${r}"
                          data-example = "${Array.isArray(s)?s[0]:s}"
                          data-array = "false"
                        />`:""}
                    `}`}
          </td>
          ${"object"===l?"":B`
              <td>
                ${c.default||c.constrain||c.allowedValues||c.pattern?B`
                    <div class="param-constraint">
                      ${c.default?B`<span style="font-weight:bold">Default: </span>${c.default}<br/>`:""}
                      ${c.pattern?B`<span style="font-weight:bold">Pattern: </span>${c.pattern}<br/>`:""}
                      ${c.constrain?B`${c.constrain}<br/>`:""}
                      ${c.allowedValues&&c.allowedValues.split("\u2503").map(((e,t)=>B`
                        ${t>0?"\u2503":B`<span style="font-weight:bold">Allowed: </span>`}
                        ${B`
                          <a part="anchor anchor-param-constraint" class = "${"true"===this.allowTry?"":"inactive-link"}"
                            data-type="${"array"===c.type?c.type:"string"}"
                            data-enum="${e.trim()}"
                            @click="${e=>{const t=e.target.closest("table").querySelector(`[data-pname="${r}"]`);t&&("array"===e.target.dataset.type?t.value=[e.target.dataset.enum]:t.value=e.target.dataset.enum)}}"
                          > 
                            ${e} 
                          </a>`}`))}
                    </div>`:""}
              </td>`}
        </tr>
        ${"object"===l?"":B`
            <tr>
              <td style="border:none"> </td>
              <td colspan="2" style="border:none; margin-top:0; padding:0 5px 8px 5px;"> 
                <span class="m-markdown-small">${TI(Ue(i.description||""))}</span>
                ${this.exampleListTemplate.call(this,r,c.type,u.exampleList)}
              </td>
            </tr>
          `}`)}return B`
        <table style="width:100%;" class="m-table">
          ${n}
        </table>
      `}return B`
      <textarea
        class = "textarea dynamic-form-param ${t}"
        part = "textarea textarea-param"
        spellcheck = "false"
        data-pname="dynamic-form" 
        data-ptype="${t}"
        .textContent = "${r}"
        style="width:100%"
      ></textarea>
      ${e.description?B`<span class="m-markdown-small">${TI(Ue(e.description))}</span>`:""}
    `}apiResponseTabTemplate(){const e=this.responseHeaders.includes("json")?"json":this.responseHeaders.includes("html")||this.responseHeaders.includes("xml")?"html":"";return B`
      <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
        <div class="response-message ${this.responseStatus}">Response Status: ${this.responseMessage}</div>
        <div style="flex:1"></div>
        <button class="m-btn" part="btn btn-outline btn-clear-response" @click="${this.clearResponseData}">CLEAR RESPONSE</button>
      </div>
      <div class="tab-panel col" style="border-width:0 0 1px 0;">
        <div id="tab_buttons" class="tab-buttons row" @click="${e=>{!1!==e.target.classList.contains("tab-btn")&&(this.activeResponseTab=e.target.dataset.tab)}}">
          <button class="tab-btn ${"response"===this.activeResponseTab?"active":""}" data-tab = 'response' > RESPONSE</button>
          <button class="tab-btn ${"headers"===this.activeResponseTab?"active":""}"  data-tab = 'headers' > RESPONSE HEADERS</button>
          <button class="tab-btn ${"curl"===this.activeResponseTab?"active":""}" data-tab = 'curl'>CURL</button>
        </div>
        ${this.responseIsBlob?B`
            <div class="tab-content col" style="flex:1; display:${"response"===this.activeResponseTab?"flex":"none"};">
              <button class="m-btn thin-border mar-top-8" style="width:135px" @click='${e=>{it(this.responseBlobUrl,this.respContentDisposition)}}' part="btn btn-outline">
                DOWNLOAD
              </button>
              ${"view"===this.responseBlobType?B`<button class="m-btn thin-border mar-top-8" style="width:135px"  @click='${e=>{st(this.responseBlobUrl)}}' part="btn btn-outline">VIEW (NEW TAB)</button>`:""}
            </div>`:B`
            <div class="tab-content col m-markdown" style="flex:1; display:${"response"===this.activeResponseTab?"flex":"none"};" >
              <button class="toolbar-btn" style="position:absolute; top:12px; right:8px" @click='${e=>{nt(this.responseText,e)}}' part="btn btn-fill"> Copy </button>
              <pre style="white-space:pre; min-height:50px; height:400px; resize:vertical; overflow:auto">${e?B`<code>${TI(Me().highlight(this.responseText,Me().languages[e],e))}</code>`:`${this.responseText}`}</pre>
            </div>`}
        <div class="tab-content col m-markdown" style="flex:1; display:${"headers"===this.activeResponseTab?"flex":"none"};" >
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e=>{nt(this.responseHeaders,e)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${TI(Me().highlight(this.responseHeaders,Me().languages.css,"css"))}</code></pre>
        </div>
        <div class="tab-content col m-markdown" style="flex:1; display:${"curl"===this.activeResponseTab?"flex":"none"};">
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e=>{nt(this.curlSyntax.replace(/\\$/,""),e)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${TI(Me().highlight(this.curlSyntax.trim().replace(/\\$/,""),Me().languages.shell,"shell"))}</code></pre>
        </div>
      </div>`}apiCallTemplate(){var e,t;let r="";this.servers&&this.servers.length>0&&(r=B`
        <select style="min-width:100px;" @change='${e=>{this.serverUrl=e.target.value}}'>
          ${this.servers.map((e=>B`<option value = "${e.url}"> ${e.url} - ${e.description} </option>`))}
        </select>
      `);const n=B`
      <div style="display:flex; flex-direction:column;">
        ${r}
        ${this.serverUrl?B`
            <div style="display:flex; align-items:baseline;font-size:140%">
              <div style="font-weight:bold; padding-right:5px;">API Server</div> 
              <span class = "gray-text"> ${this.serverUrl} </span>
            </div>
          `:""}
      </div>  
    `;return B`
    <div style="display:flex; align-items:flex-end;justify-content:center; margin:16px 0; font-size:var(--font-size-small);">
      <button id="try-btn" class="m-btn primary thin-border" part="btn btn-try" @click="${this.onTryClick}" style="margin-right:5px; align-self: center; ">TRY</button>
      ${this.parameters.length>0||this.request_body?B`
        <button class="m-btn thin-border" part="btn btn-outline btn-fill" style="margin-right:5px; align-self: center; " @click="${this.onFillRequestData}" title="Fills with example data (if provided)">
          FILL EXAMPLE
        </button>
        <button class="m-btn thin-border" part="btn btn-outline btn-clear" style="margin-right:5px; align-self: center; " @click="${this.onClearRequestData}">
          CLEAR
        </button>`:""}
      <div class="hide-in-small-screen" style="flex-direction:column; margin:0; width:calc(100% - 60px);">
        <div style="display:flex; flex-direction:row; align-items:center; overflow:hidden; justify-content: flex-end;"> 
          ${n}
        </div>
        <div style="display:flex; justify-content: flex-end;">
          <div style="font-weight:bold; padding-right:5px;">Authentication</div>
          ${(null===(e=this.security)||void 0===e?void 0:e.length)>0?B`
              ${this.api_keys.length>0?B`<div style="color:var(--blue); overflow:hidden;"> 
                    ${1===this.api_keys.length?`${null===(t=this.api_keys[0])||void 0===t?void 0:t.typeDisplay} in ${this.api_keys[0].in}`:`${this.api_keys.length} API keys applied`} 
                  </div>`:B`<div class="gray-text">Required  <span style="color:var(--red)">(None Applied)</span>`}`:B`<span class="gray-text"> Not Required </span>`}
        </div>
      </div>
    </div>
    ${""===this.responseMessage?"":this.apiResponseTabTemplate()}
    `}async onFillRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach((e=>{e.dataset.example&&("TAG-INPUT"===e.tagName.toUpperCase()?e.value=e.dataset.example.split("~|~"):e.value=e.dataset.example)}))}async onClearRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach((e=>{e.value=""}))}async onTryClick(e){var t;const r=e.target;let n,o,a="",i="",s="",l="";const c=null===(t=this.closest(".expanded-req-resp-container, .req-resp-container"))||void 0===t?void 0:t.getElementsByTagName("api-response")[0],p=null==c?void 0:c.selectedMimeType,u=e.target.closest(".request-panel"),d=[...u.querySelectorAll("[data-ptype='path']")],h=[...u.querySelectorAll("[data-ptype='query']")],f=[...u.querySelectorAll("[data-ptype='query-object']")],m=[...u.querySelectorAll("[data-ptype='header']")],y=u.querySelector(".request-body-container");n=this.path;const g={method:this.method.toUpperCase()};d.map((e=>{n=n.replace(`{${e.dataset.pname}}`,encodeURIComponent(e.value))}));const v=new Map,b=[];h.length>0&&h.forEach((e=>{const t=new URLSearchParams;if("true"===e.dataset.paramAllowReserved&&b.push(e.dataset.pname),"false"===e.dataset.array)""!==e.value&&t.append(e.dataset.pname,e.value);else{const{paramSerializeStyle:r,paramSerializeExplode:n}=e.dataset;let o=e.value&&Array.isArray(e.value)?e.value:[];o=Array.isArray(o)?o.filter((e=>""!==e)):[],o.length>0&&("spaceDelimited"===r?t.append(e.dataset.pname,o.join(" ").replace(/^\s|\s$/g,"")):"pipeDelimited"===r?t.append(e.dataset.pname,o.join("|").replace(/^\||\|$/g,"")):"true"===n?o.forEach((r=>{t.append(e.dataset.pname,r)})):t.append(e.dataset.pname,o.join(",").replace(/^,|,$/g,"")))}t.toString()&&v.set(e.dataset.pname,t)})),f.length>0&&f.map((e=>{const t=new URLSearchParams;try{let r={};const{paramSerializeStyle:n,paramSerializeExplode:o}=e.dataset;if(r=Object.assign(r,JSON.parse(e.value.replace(/\s+/g," "))),"true"===e.dataset.paramAllowReserved&&b.push(e.dataset.pname),"json xml".includes(n))"json"===n?t.append(e.dataset.pname,JSON.stringify(r)):"xml"===n&&t.append(e.dataset.pname,rP(r));else for(const e in r)"object"==typeof r[e]?Array.isArray(r[e])&&("spaceDelimited"===n?t.append(e,r[e].join(" ")):"pipeDelimited"===n?t.append(e,r[e].join("|")):"true"===o?r[e].forEach((r=>{t.append(e,r)})):t.append(e,r[e])):t.append(e,r[e])}catch(t){console.log("RapiDoc: unable to parse %s into object",e.value)}t.toString()&&v.set(e.dataset.pname,t)}));let x="";v.size&&(x="?",v.forEach(((e,t)=>{b.includes(t)?(x+=`${t}=`,x+=e.getAll(t).join(`&${t}=`),x+="&"):x+=`${e.toString()}&`})),x=x.slice(0,-1)),n=`${n}${x}`,this.api_keys.filter((e=>"query"===e.in)).forEach((e=>{n=`${n}${n.includes("?")?"&":"?"}${e.name}=${encodeURIComponent(e.finalKeyValue)}`})),n=`${this.serverUrl.replace(/\/$/,"")}${n}`,o=!1===n.startsWith("http")?new URL(n,window.location.href).href:n,a=`curl -X ${this.method.toUpperCase()} "${o}" \\\n`;const w=new Headers;if(p?(w.append("Accept",p),i+=` -H "Accept: ${p}" \\\n`):this.accept&&(w.append("Accept",this.accept),i+=` -H "Accept: ${this.accept}" \\\n`),this.api_keys.filter((e=>"header"===e.in)).forEach((e=>{w.append(e.name,e.finalKeyValue),i+=` -H "${e.name}: ${e.finalKeyValue}" \\\n`})),m.map((e=>{e.value&&(w.append(e.dataset.pname,e.value),i+=` -H "${e.dataset.pname}: ${e.value}" \\\n`)})),y){const t=y.dataset.selectedRequestBodyType;if(t.includes("form-urlencoded")){const t=u.querySelector("[data-ptype='dynamic-form']");if(t){const r=t.value,n=new URLSearchParams;let o,a=!0;if(r)try{o=JSON.parse(r)}catch(e){a=!1,console.warn("RapiDoc: Invalid JSON provided",e)}else a=!1;if(a){for(const e in o)n.append(e,JSON.stringify(o[e]));g.body=n,s=` -d ${n.toString()} \\\n`}}else{const e=[...u.querySelectorAll("[data-ptype='form-urlencode']")],t=new URLSearchParams;e.filter((e=>"file"!==e.type)).forEach((e=>{if("false"===e.dataset.array)e.value&&t.append(e.dataset.pname,e.value);else{const r=e.value&&Array.isArray(e.value)?e.value.join(","):"";t.append(e.dataset.pname,r)}})),g.body=t,s=` -d ${t.toString()} \\\n`}}else if(t.includes("form-data")){const e=new FormData;[...u.querySelectorAll("[data-ptype='form-data']")].forEach((t=>{"false"===t.dataset.array?"file"===t.type&&t.files[0]?(e.append(t.dataset.pname,t.files[0],t.files[0].name),l+=` -F "${t.dataset.pname}=@${t.files[0].name}" \\\n`):t.value&&(e.append(t.dataset.pname,t.value),l+=` -F "${t.dataset.pname}=${t.value}" \\\n`):t.value&&Array.isArray(t.value)&&(t.value.forEach((e=>{l=`${l} -F "${t.dataset.pname}[]=${e}" \\\n`})),e.append(t.dataset.pname,t.value.join(",")))})),g.body=e}else if(/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(t)){const e=u.querySelector(".request-body-param-file");null!=e&&e.files[0]&&(g.body=e.files[0],s=` --data-binary @${e.files[0].name} \\\n`)}else if(t.includes("json")||t.includes("xml")||t.includes("text")){const r=u.querySelector(".request-body-param-user-input");if(null!=r&&r.value){if(g.body=r.value,t.includes("json"))try{s=` -d '${JSON.stringify(JSON.parse(r.value))}' \\\n`}catch(e){}s||(s=` -d '${r.value.replace(/'/g,"'\"'\"'")}' \\\n`)}}t.includes("form-data")||w.append("Content-Type",t),i+=` -H "Content-Type: ${t}" \\\n`}this.responseUrl="",this.responseHeaders=[],this.curlSyntax="",this.responseStatus="success",this.responseIsBlob=!1,this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),this.curlSyntax=`${a}${i}${s}${l}`,this.fetchCredentials&&(g.credentials=this.fetchCredentials);const $=new AbortController,{signal:k}=$;g.headers=w;const S=new Request(n,g);let A,E;this.dispatchEvent(new CustomEvent("before-try",{bubbles:!0,composed:!0,detail:{request:S,controller:$}}));try{let e,t,n;r.disabled=!0;const o=performance.now();A=await fetch(S,{signal:k});const a=performance.now();E=A.clone(),r.disabled=!1,this.responseMessage=B`${A.statusText?`${A.statusText}:${A.status}`:A.status} <div style="color:var(--light-fg)"> Took ${Math.round(a-o)} milliseconds </div>`,this.responseUrl=A.url;const i={};A.headers.forEach(((e,t)=>{i[t]=e,this.responseHeaders=`${this.responseHeaders}${t}: ${e}\n`}));const s=A.headers.get("content-type");if(0===(await A.clone().text()).length)this.responseText="";else if(s){if(s.includes("json"))if(/charset=[^"']+/.test(s)){const e=s.split("charset=")[1],r=await A.arrayBuffer();try{n=new TextDecoder(e).decode(r)}catch{n=new TextDecoder("utf-8").decode(r)}try{t=JSON.parse(n),this.responseText=JSON.stringify(t,null,2)}catch{this.responseText=n}}else t=await A.json(),this.responseText=JSON.stringify(t,null,2);else/^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$|^application\/vnd\./.test(s)?(this.responseIsBlob=!0,this.responseBlobType="download"):/^audio|^image|^video/.test(s)?(this.responseIsBlob=!0,this.responseBlobType="view"):(n=await A.text(),s.includes("xml")&&(this.responseText=function(e){const t=(new DOMParser).parseFromString(e,"text/xml"),r=(new DOMParser).parseFromString(['<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">\n      <xsl:strip-space elements="*"/>\n        <xsl:template match="para[content-style][not(text())]">\n          <xsl:value-of select="normalize-space(.)"/>\n        </xsl:template>\n        <xsl:template match="node()|@*">\n          <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>\n        </xsl:template>\n        <xsl:output indent="yes"/>\n      </xsl:stylesheet>'].join("\n"),"application/xml"),n=new XSLTProcessor;n.importStylesheet(r);const o=n.transformToDocument(t);return(new XMLSerializer).serializeToString(o)}(n)),this.responseText=n);if(this.responseIsBlob){const t=A.headers.get("content-disposition");this.respContentDisposition=t?t.split("filename=")[1].replace(/"|'/g,""):"filename",e=await A.blob(),this.responseBlobUrl=URL.createObjectURL(e)}}else n=await A.text(),this.responseText=n;this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{request:S,response:E,responseHeaders:i,responseBody:t||n||e,responseStatus:E.ok}}))}catch(e){r.disabled=!1,"AbortError"===e.name?(this.dispatchEvent(new CustomEvent("request-aborted",{bubbles:!0,composed:!0,detail:{err:e,request:S}})),this.responseMessage="Request Aborted"):(this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{err:e,request:S}})),this.responseMessage=`${e.message} (CORS or Network Issue)`)}this.requestUpdate()}onAddRemoveFileInput(e,t,r){if("button"!==e.target.tagName.toLowerCase())return;if(e.target.classList.contains("file-input-remove-btn"))return void e.target.closest(".input-set").remove();const n=e.target.closest(".file-input-container"),o=document.createElement("div");o.setAttribute("class","input-set row");const a=document.createElement("input");a.type="file",a.style="width:200px; margin-top:2px;",a.setAttribute("data-pname",t),a.setAttribute("data-ptype",r.includes("form-urlencode")?"form-urlencode":"form-data"),a.setAttribute("data-array","false"),a.setAttribute("data-file-array","true");const i=document.createElement("button");i.setAttribute("class","file-input-remove-btn"),i.innerHTML="&#x2715;",o.appendChild(a),o.appendChild(i),n.insertBefore(o,e.target)}clearResponseData(){this.responseUrl="",this.responseHeaders="",this.responseText="",this.responseStatus="success",this.responseMessage="",this.responseIsBlob=!1,this.responseBlobType="",this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl="")}disconnectedCallback(){this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),super.disconnectedCallback()}}),customElements.define("schema-table",class extends ne{static get properties(){return{schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},data:{type:Object}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[He,hP,l`
      .table {
        font-size: var(--font-size-small);
        text-align: left;
        line-height: calc(var(--font-size-small) + 6px);
      }
      .table .tr {
        width: calc(100% - 5px);
        padding: 0 0 0 5px;
        border-bottom: 1px dotted var(--light-border-color);
      }
      .table .td {
        padding: 4px 0;
      }
      .table .key {
        width: 240px;
      }
      .key.deprecated .key-label {
        color: var(--red);
      }

      .table .key-type {
        white-space: normal;
        width: 150px;
      }
      .collapsed-descr .tr {
        max-height: calc(var(--font-size-small) + var(--font-size-small) + 4px);
      }

      .obj-toggle {
        padding: 0 2px;
        border-radius:2px;
        border: 1px solid transparent;
        display: inline-block;
        margin-left: -16px;
        color:var(--primary-color);
        cursor:pointer;
        font-size: calc(var(--font-size-small) + 4px);
        font-family: var(--font-mono);
        background-clip: border-box;
      }
      .obj-toggle:hover {
        border-color: var(--primary-color);
      }
      .tr.expanded + .object-body {
        display:block;
      }
      .tr.collapsed + .object-body {
        display:none;
      }`,Xe]}render(){var e,t,r;return B`
      <div class="table ${"true"===this.schemaDescriptionExpanded?"expanded-descr":"collapsed-descr"}">
        <div class='toolbar'>
          <div class="toolbar-item schema-root-type ${(null===(e=this.data)||void 0===e?void 0:e["::type"])||""} "> ${(null===(t=this.data)||void 0===t?void 0:t["::type"])||""} </div>
          ${"true"===this.allowSchemaDescriptionExpandToggle?B`
              <div style="flex:1"></div>
              <div part="schema-multiline-toggle" class='toolbar-item' @click='${()=>{this.schemaDescriptionExpanded="true"===this.schemaDescriptionExpanded?"false":"true"}}'> 
                ${"true"===this.schemaDescriptionExpanded?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        ${null!==(r=this.data)&&void 0!==r&&r["::description"]?B`<span part="schema-description" class='m-markdown'> ${TI(Ue(this.data["::description"]||""))}</span>`:""}
        <div style = 'border:1px solid var(--light-border-color)'>
          <div style='display:flex; background-color: var(--bg2); padding:8px 4px; border-bottom:1px solid var(--light-border-color);'>
            <div class='key' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Field </div>
            <div class='key-type' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Type </div>
            <div class='key-descr' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Description </div>
          </div>
          ${this.data?B`
              ${this.generateTree("array"===this.data["::type"]?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"])}`:""}  
        </div>
      </div>  
    `}generateTree(e,t="object",r="",n="",o="",a=0,i=0,s=""){var l,c;if("true"===this.schemaHideReadOnly){if("array"===t&&"readonly"===s)return;if(e&&"readonly"===e["::readwrite"])return}if("true"===this.schemaHideWriteOnly){if("array"===t&&"writeonly"===s)return;if(e&&"writeonly"===e["::readwrite"])return}if(!e)return B`<div class="null" style="display:inline;">
        <span style='margin-left:${16*(a+1)}px'> &nbsp; </span>
        <span class="key-label xxx-of-key"> ${n.replace("::OPTION~","")}</span>
        ${"array"===t?B`<span class='mono-font'> [ ] </span>`:"object"===t?B`<span class='mono-font'> { } </span>`:B`<span class='mono-font'> schema undefined </span>`}
      </div>`;const p=null!==(l=e["::type"])&&void 0!==l&&l.startsWith("xxx-of")?a:a+1,u="xxx-of-option"===t||"xxx-of-option"===e["::type"]||n.startsWith("::OPTION")?i:i+1,d=16*u;if(0===Object.keys(e).length)return B`<span class="td key object" style='padding-left:${d}px'>${n}</span>`;let h="",f="",m=!1;if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))h=n.replace("::","").replace("~"," "),m=!0;else if(n.startsWith("::OPTION")){const e=n.split("~");h=e[1],f=e[2]}else h=n;let y="";if("object"===e["::type"]?y="array"===t?"array of object":"object":"array"===e["::type"]&&(y="array"===t?"array of array "+("object"!==r?`of ${r}`:""):"array"),"object"==typeof e)return B`
        ${p>=0&&n?B`
            <div class='tr ${p<=this.schemaExpandLevel?"expanded":"collapsed"} ${e["::type"]}' data-obj='${h}' title="${e["::deprecated"]?"Deprecated":""}">
              <div class="td key ${e["::deprecated"]?"deprecated":""}" style='padding-left:${d}px'>
                ${h||f?B`
                    <span 
                      class='obj-toggle ${p<this.schemaExpandLevel?"expanded":"collapsed"}'
                      data-obj='${h}'
                      @click= ${e=>this.toggleObjectExpand(e,h)} 
                    >
                      ${a<this.schemaExpandLevel?"-":"+"}
                    </span>`:""}
                ${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]||n.startsWith("::OPTION")?B`<span class="xxx-of-key" style="margin-left:-6px">${h}</span><span class="${m?"xxx-of-key":"xxx-of-descr"}">${f}</span>`:h.endsWith("*")?B`<span class="key-label" style="display:inline-block; margin-left:-6px;">${e["::deprecated"]?"\u2717":""} ${h.substring(0,h.length-1)}</span><span style='color:var(--red);'>*</span>`:B`<span class="key-label" style="display:inline-block; margin-left:-6px;">${e["::deprecated"]?"\u2717":""} ${"::props"===h?"":h}</span>`}
                ${"xxx-of"===e["::type"]&&"array"===t?B`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
              </div>
              <div class='td key-type' title="${"readonly"===e["::readwrite"]?"Read-Only":"writeonly"===e["::readwrite"]?"Write-Only":""}">
                ${(e["::type"]||"").includes("xxx-of")?"":y}
                ${"readonly"===e["::readwrite"]?" \ud83c\udd81":"writeonly"===e["::readwrite"]?" \ud83c\udd86":""}
              </div>
              <div class='td key-descr m-markdown-small' style='line-height:1.7'>${TI(Ue(o||""))}</div>
            </div>`:B`
              ${"array"===e["::type"]&&"array"===t?B`
                  <div class='tr'> 
                    <div class='td key'></div> 
                    <div class='td key-type'>
                      ${r&&"object"!==r?`${t} of ${r}`:t}
                    </div> 
                    <div class='td key-descr'></div> 
                  </div>`:""}
          `}
        <div class='object-body'>
        ${Array.isArray(e)&&e[0]?B`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",p,u,"")}`:B`
            ${Object.keys(e).map((t=>B`
              ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite"].includes(t)?"array"===e[t]["::type"]||"object"===e[t]["::type"]?B`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],p,u,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`:"":B`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],p,u,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`}
            `))}
          `}
        <div>
      `;const[g,v,b,x,w,$,k,S,A]=e.split("~|~");if("\ud83c\udd81"===v&&"true"===this.schemaHideReadOnly)return;if("\ud83c\udd86"===v&&"true"===this.schemaHideWriteOnly)return;const E=g.replace(/\u2503.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase();let O="";return O="array"===t?B` 
        <div class='td key-type ${E}' title="${"readonly"===s?"Read-Only":"writeonly"===v?"Write-Only":""}">
          [${g}] ${"readonly"===s?"\ud83c\udd81":"writeonly"===s?"\ud83c\udd86":""}
        </div>`:B` 
        <div class='td key-type ${E}' title="${"\ud83c\udd81"===v?"Read-Only":"\ud83c\udd86"===v?"Write-Only":""}">
          ${g} ${v}
        </div>`,B`
      <div class = "tr primitive" title="${A?"Deprecated":""}">
        <div class="td key ${A}" style='padding-left:${d}px'>
          ${A?B`<span style='color:var(--red);'>✗</span>`:""}
          ${null!==(c=h)&&void 0!==c&&c.endsWith("*")?B`
              <span class="key-label">${h.substring(0,h.length-1)}</span>
              <span style='color:var(--red);'>*</span>`:n.startsWith("::OPTION")?B`<span class='xxx-of-key'>${h}</span><span class="xxx-of-descr">${f}</span>`:B`${h?B`<span class="key-label"> ${h}</span>`:B`<span class="xxx-of-descr">${S}</span>`}`}
        </div>
        ${O}
        <div class='td key-descr' @click="${()=>{this.schemaDescriptionExpanded="true"}}">
          ${"array"===t?B`<span class="m-markdown-small">${TI(Ue(o))}</span>`:""}
          ${k?B`<span class="m-markdown-small">
              ${TI(Ue(`${S?`**${S}:**`:""} ${k} ${b||x||w||$?'<span  class="more-content">\u2935</span>':""}`))}
              </span>`:S?B`${S} ${b||x||w||$?B`<span class="more-content">⤵</span>`:""}`:""}
          ${b?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Constraints: </span> ${b}</div>`:""}
          ${x?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Default: </span>${x}</div>`:""}
          ${w?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Allowed: </span>${w}</div>`:""}
          ${$?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Pattern: </span>${$}</div>`:""}
        </div>
      </div>
    `}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.add("collapsed"),t.classList.remove("expanded"),e.target.innerText="+"):(t.classList.remove("collapsed"),t.classList.add("expanded"),e.target.innerText="-")}}),customElements.define("api-response",class extends ne{constructor(){super(),this.selectedStatus="",this.headersForEachRespStatus={},this.mimeResponsesForEachStatus={},this.activeSchemaTab="schema"}static get properties(){return{callback:{type:String},responses:{type:Object},parser:{type:Object},schemaStyle:{type:String,attribute:"schema-style"},renderStyle:{type:String,attribute:"render-style"},selectedStatus:{type:String,attribute:"selected-status"},selectedMimeType:{type:String,attribute:"selected-mime-type"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}static get styles(){return[He,Ve,Ye,Ge,We,ZI,l`
      .resp-head{
        vertical-align: middle;
        padding:16px 0 8px;
      }
      .resp-head.divider{
        border-top: 1px solid var(--border-color);
        margin-top:10px;
      }
      .resp-status{ 
        font-weight:bold;
        font-size:calc(var(--font-size-small) + 1px);
      }
      .resp-descr{
        font-size:calc(var(--font-size-small) + 1px);
        color:var(--light-fg);
        text-align:left;
      }
      .top-gap{margin-top:16px;}
      .example-panel{
        font-size:var(--font-size-small);
        margin:0;
      }
      .focused-mode,
      .read-mode {
        padding-top:24px;
        margin-top:12px;
        border-top: 1px dashed var(--border-color);
      }`,Xe]}render(){return B`
    <div class="col regular-font response-panel ${this.renderStyle}-mode">
      <div class=" ${"true"===this.callback?"tiny-title":"req-res-title"} "> 
        ${"true"===this.callback?"CALLBACK RESPONSE":"RESPONSE"}
      </div>
      <div>
        ${this.responseTemplate()}
      <div>  
    </div>  
    `}resetSelection(){this.selectedStatus="",this.selectedMimeType=""}responseTemplate(){if(!this.responses)return"";for(const n in this.responses){this.selectedStatus||(this.selectedStatus=n);const o={};for(const r in null===(e=this.responses[n])||void 0===e?void 0:e.content){var e,t;const a=this.responses[n].content[r];this.selectedMimeType||(this.selectedMimeType=r);const i=cP(a.schema,{}),s=pP(a.schema,r,a.examples,a.example,!(this.schemaHideReadOnly&&(this.schemaHideReadOnly.includes(this.method)||"true"===this.schemaHideReadOnly)),!(this.schemaHideWriteOnly&&(this.schemaHideWriteOnly.includes(this.method)||"true"===this.schemaHideWriteOnly)),r.includes("json")?"json":"text");o[r]={description:this.responses[n].description,examples:s,selectedExample:(null===(t=s[0])||void 0===t?void 0:t.exampleId)||"",schemaTree:i}}const a=[];for(const e in null===(r=this.responses[n])||void 0===r?void 0:r.headers){var r;a.push({name:e,...this.responses[n].headers[e]})}this.headersForEachRespStatus[n]=a,this.mimeResponsesForEachStatus[n]=o}return B`
      ${Object.keys(this.responses).length>1?B`<div class='row' style='flex-wrap:wrap'>
          ${Object.keys(this.responses).map((e=>B`
            ${"$$ref"===e?"":B`
                <button 
                  @click="${()=>{this.selectedStatus=e,this.responses[e].content&&Object.keys(this.responses[e].content)[0]?this.selectedMimeType=Object.keys(this.responses[e].content)[0]:this.selectedMimeType=void 0}}"
                  class='m-btn small ${this.selectedStatus===e?"primary":""}'
                  part="btn ${this.selectedStatus===e?"btn-response-status btn-selected-response-status":" btn-response-status"}"
                  style='margin: 8px 4px 0 0'
                > 
                  ${e} 
                </button>`}`))}`:B`<span>${Object.keys(this.responses)[0]}</span>`}
      </div>

      ${Object.keys(this.responses).map((e=>{var t,r;return B`
        <div style = 'display: ${e===this.selectedStatus?"block":"none"}' >
          <div class="top-gap">
            <span class="resp-descr m-markdown ">${TI(Ue((null===(t=this.responses[e])||void 0===t?void 0:t.description)||""))}</span>
            ${this.headersForEachRespStatus[e]&&(null===(r=this.headersForEachRespStatus[e])||void 0===r?void 0:r.length)>0?B`${this.responseHeaderListTemplate(this.headersForEachRespStatus[e])}`:""}
          </div>
          ${0===Object.keys(this.mimeResponsesForEachStatus[e]).length?"":B`  
              <div class="tab-panel col">
                <div class="tab-buttons row" @click="${e=>{"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}" >
                  <button class="tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE </button>
                  <button class="tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema' >SCHEMA</button>
                  <div style="flex:1"></div>
                  ${1===Object.keys(this.mimeResponsesForEachStatus[e]).length?B`<span class='small-font-size gray-text' style='align-self:center; margin-top:8px;'> ${Object.keys(this.mimeResponsesForEachStatus[e])[0]} </span>`:B`${this.mimeTypeDropdownTemplate(Object.keys(this.mimeResponsesForEachStatus[e]))}`}
                </div>
                ${"example"===this.activeSchemaTab?B`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeExampleTemplate(this.mimeResponsesForEachStatus[e][this.selectedMimeType])}
                    </div>`:B`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeSchemaTemplate(this.mimeResponsesForEachStatus[e][this.selectedMimeType])}
                    </div>`}
              </div>
            `}`}))}
    `}responseHeaderListTemplate(e){return B`
      <div style="padding:16px 0 8px 0" class="resp-headers small-font-size bold-text">RESPONSE HEADERS</div> 
      <table style="border-collapse: collapse; margin-bottom:16px; border:1px solid var(--border-color); border-radius: var(--border-radius)" class="small-font-size mono-font">
        ${e.map((e=>B`
          <tr>
            <td style="padding:8px; vertical-align: baseline; min-width:120px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${e.name||""}
            </td> 
            <td style="padding:4px; vertical-align: baseline; padding:0 5px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${e.schema.type||""}
            </td> 
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color);text-overflow: ellipsis;">
              <div class="m-markdown-small regular-font" >${TI(Ue(e.description||""))}</div>
            </td>
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${e.schema.example||""}
            </td>
          </tr>
        `))}
    </table>`}mimeTypeDropdownTemplate(e){return B`
      <select @change="${e=>{this.selectedMimeType=e.target.value}}" style='margin-bottom: -1px; z-index:1'>
        ${e.map((e=>B`<option value='${e}' ?selected = '${e===this.selectedMimeType}'> ${e} </option>`))}
      </select>`}onSelectExample(e){[...e.target.closest(".example-panel").querySelectorAll(".example")].forEach((t=>{t.style.display=t.dataset.example===e.target.value?"block":"none"}))}mimeExampleTemplate(e){return e?B`
      ${1===e.examples.length?B`
          ${"json"===e.examples[0].exampleFormat?B`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?B`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?B`<div class="m-markdown-small" style="padding: 4px 0"> ${TI(Ue(e.examples[0].exampleDescription||""))} </div>`:""}
              <json-tree 
                render-style = '${this.renderStyle}'
                .data="${e.examples[0].exampleValue}"
                class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'
                exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
              ></json-tree>`:B`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?B`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?B`<div class="m-markdown-small" style="padding: 4px 0"> ${TI(Ue(e.examples[0].exampleDescription||""))} </div>`:""}
              <pre class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'>${e.examples[0].exampleValue}</pre>
            `}`:B`
          <span class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'>
            <select style="min-width:100px; max-width:100%" @change='${e=>this.onSelectExample(e)}'>
              ${e.examples.map((t=>B`<option value="${t.exampleId}" ?selected=${t.exampleId===e.selectedExample} > 
                ${t.exampleSummary.length>80?t.exampleId:t.exampleSummary} 
              </option>`))}
            </select>
            ${e.examples.map((t=>B`
              <div class="example" data-example = '${t.exampleId}' style = "display: ${t.exampleId===e.selectedExample?"block":"none"}">
                ${t.exampleSummary&&t.exampleSummary.length>80?B`<div style="padding: 4px 0"> ${t.exampleSummary} </div>`:""}
                ${t.exampleDescription?B`<div class="m-markdown-small"  style="padding: 4px 0"> ${TI(Ue(t.exampleDescription||""))} </div>`:""}
                ${"json"===t.exampleFormat?B`
                    <json-tree 
                      render-style = '${this.renderStyle}'
                      .data = '${t.exampleValue}'
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
                    ></json-tree>`:B`<pre>${t.exampleValue}</pre>`}
              </div>  
            `))}
          </span>  
        `}
    `:B`
        <pre style='color:var(--red)' class = '${"read"===this.renderStyle?"read example-panel border pad-8-16":"example-panel border-top"}'> No example provided </pre>
      `}mimeSchemaTemplate(e){return e?B`
      ${"table"===this.schemaStyle?B`
          <schema-table
            render-style = "${this.renderStyle}"
            .data = "${e.schemaTree}"
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
          > </schema-tree> `:B`
          <schema-tree
            render-style = "${this.renderStyle}"
            .data = '${e.schemaTree}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
          > </schema-tree>`}`:B`
        <pre style='color:var(--red)' class = '${"read"===this.renderStyle?"border pad-8-16":"border-top"}'> Schema not found</pre>
      `}});const zP=l`
  *, *:before, *:after { box-sizing: border-box; }

  .dialog-box-overlay {
    background-color: var(--overlay-bg);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: var(--dialog-z-index);
  }
  
  .dialog-box {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: var(--bg2);
    color: var(--fg2);
    border-radius: 4px;
    max-height: 500px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  .dialog-box-header {
    position: sticky;
    top: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    min-height: 60px;
    max-height: 60px;
    border-bottom: 1px solid var(--light-border-color);
    overflow: hidden;
  }
  
  .dialog-box-header button {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: var(--fg);
    border: none;
    outline: none;
    background-color: transparent;
    cursor:pointer;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: -8px;
  }
  .dialog-box-header button:hover {
    border-color: var(--primary-color);
  }

  .dialog-box-content {
    padding: 16px;
    display:block;
    overflow: auto;
    height: 100%;
  }

  .dialog-box-title {
    flex-grow: 1;
    font-size:24px;
  }
`;function UP(){var e;return document.addEventListener("close",(()=>{this.showAdvancedSearchDialog=!1})),document.addEventListener("open",this.onOpenSearchDialog),B`
    <dialog-box 
      heading="Search" 
      show="${!!this.showAdvancedSearchDialog}"
    >
      <span class="advanced-search-options">
        <input
          style="width:100%; padding-right:20px;"
          type="text"
          part="textbox textbox-search-dialog"
          placeholder="search text..."
          spellcheck="false"
          @keyup = "${e=>this.onAdvancedSearch(e,400)}"
        >
        <div style="display:flex; margin:8px 0 24px;">
          <div>
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-path" checked @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label for="search-api-path" style="cursor:pointer;"> API Path </label>
            </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-descr" checked @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-descr"> API Description </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-params" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-params"> API Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-request-body" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-request-body"> Request Body Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-resp-descr" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-resp-descr"> Response Description </label>
          </div>
        </div>
      </span>
      
      ${null===(e=this.advancedSearchMatches)||void 0===e?void 0:e.map((e=>B`
      <div
        class="mono-font small-font-size hover-bg"
        style='padding: 5px; cursor: pointer; border-bottom: 1px solid var(--light-border-color); ${e.deprecated?"filter:opacity(0.5);":""}' 
        data-content-id='${e.elementId}'
        tabindex = '0'
        @click="${e=>{this.matchPaths="",this.showAdvancedSearchDialog=!1,this.requestUpdate(),this.scrollToEventTarget(e,!0)}}"
      > 
        <span class="upper bold-text method-fg ${e.method}">${e.method}</span> 
        <span>${e.path}</span>
        <span class="regular-font gray-text">${e.summary}</span>
      </div>
    `))}
    </dialog-box>
  `}customElements.define("dialog-box",class extends ne{static get properties(){return{heading:{type:String,attribute:"heading"},show:{type:String,attribute:"show"}}}static get styles(){return[zP]}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",(e=>{"Escape"===e.code&&this.onClose()}))}attributeChangedCallback(e,t,r){t!==r&&("heading"===e&&(this.heading=r),"show"===e&&(this.show=r,"true"===r&&document.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0,detail:this})))),super.attributeChangedCallback(e,t,r)}render(){return B`
    ${"true"===this.show?B`
        <div class="dialog-box-overlay">
          <div class="dialog-box">
            <header class="dialog-box-header">
              <span class="dialog-box-title">${this.heading}</span>
              <button type="button" @click="${this.onClose}">&times;</button>
            </header>
            <div class="dialog-box-content">
              <slot></slot>
            </div>
          </div>
        </div>`:""}`}onClose(){document.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}});const qP={color:{inputReverseFg:"#fff",inputReverseBg:"#333",headerBg:"#444",getRgb(e){if(0===e.indexOf("#")&&(e=e.slice(1,7)),3!==e.length&&4!==e.length||(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}},luminanace(e){const t=this.getRgb(e);return.299*t.r+.587*t.g+.114*t.b},invert(e){return this.luminanace(e)>135?"#000":"#fff"},opacity(e,t){const r=this.getRgb(e);return`rgba(${r.r}, ${r.g}, ${r.b}, ${t})`},brightness(e,t){const r=this.getRgb(e);return r.r+=t,r.g+=t,r.b+=t,r.r>255?r.r=255:r.r<0&&(r.r=0),r.g>255?r.g=255:r.g<0&&(r.g=0),r.b>255?r.b=255:r.b<0&&(r.b=0),`#${r.r.toString(16).padStart(2,"0")}${r.g.toString(16).padStart(2,"0")}${r.b.toString(16).padStart(2,"0")}`},hasGoodContrast(e,t){return this.luminanace(e)-this.luminanace(t)}}};function MP(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/i.test(e)}function HP(e,t={}){let r={};const n=t.primaryColor?t.primaryColor:"dark"===e?"#f76b39":"#ff591e",o=qP.color.invert(n),a=qP.color.opacity(n,"0.8");if("dark"===e){const e=t.bg1?t.bg1:"#2a2b2c",i=t.fg1?t.fg1:"#bbb",s=t.bg2?t.bg2:qP.color.brightness(e,5),l=t.bg3?t.bg3:qP.color.brightness(e,17),c=t.bg3?t.bg3:qP.color.brightness(e,35),p=t.fg2?t.fg2:qP.color.brightness(i,-15),u=t.fg3?t.fg3:qP.color.brightness(i,-20),d=t.fg3?t.fg3:qP.color.brightness(i,-65),h=t.inlineCodeFg?t.inlineCodeFg:"#aaa",f="#bbb",m="#eee",y=t.headerColor?t.headerColor:qP.color.brightness(e,10),g=t.navBgColor?t.navBgColor:qP.color.brightness(e,10);r={bg1:e,bg2:s,bg3:l,lightBg:c,fg1:i,fg2:p,fg3:u,lightFg:d,inlineCodeFg:h,primaryColor:n,primaryColorTrans:a,primaryColorInvert:o,selectionBg:f,selectionFg:m,overlayBg:"rgba(80, 80, 80, 0.4)",navBgColor:g,navTextColor:t.navTextColor?t.navTextColor:qP.color.opacity(qP.color.invert(g),"0.50"),navHoverBgColor:t.navHoverBgColor?t.navHoverBgColor:qP.color.brightness(g,-15),navHoverTextColor:t.navHoverTextColor?t.navHoverTextColor:qP.color.invert(g),navAccentColor:t.navAccentColor?t.navAccentColor:qP.color.brightness(n,25),headerColor:y,headerColorInvert:qP.color.invert(y),headerColorDarker:qP.color.brightness(y,-20),headerColorBorder:qP.color.brightness(y,10),borderColor:t.borderColor||qP.color.brightness(e,20),lightBorderColor:t.lightBorderColor||qP.color.brightness(e,15),codeBorderColor:t.codeBorderColor||qP.color.brightness(e,30),inputBg:t.inputBg||qP.color.brightness(e,-5),placeHolder:t.placeHolder||qP.color.opacity(i,"0.3"),hoverColor:t.hoverColor||qP.color.brightness(e,-10),red:t.red?t.red:"#F06560",lightRed:t.lightRed?t.lightRed:qP.color.brightness(e,-10),pink:t.pink?t.pink:"#ffb2b2",lightPink:t.lightPink||qP.color.brightness(e,-10),green:t.green||"#7ec699",lightGreen:t.lightGreen||qP.color.brightness(e,-10),blue:t.blue||"#71b7ff",lightBlue:t.lightBlue||qP.color.brightness(e,-10),orange:t.orange?t.orange:"#f08d49",lightOrange:t.lightOrange||qP.color.brightness(e,-10),yellow:t.yellow||"#827717",lightYellow:t.lightYellow||qP.color.brightness(e,-10),purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||qP.color.opacity(qP.color.brightness(e,-15),.7),codeFg:t.codeFg||"#aaa",codePropertyColor:t.codePropertyColor||"#f8c555",codeKeywordColor:t.codeKeywordColor||"#cc99cd",codeOperatorColor:t.codeOperatorColor||"#67cdcc"}}else{const e=t.bg1?t.bg1:"#fafbfc",i=t.fg1?t.fg1:"#444444",s=t.bg2?t.bg2:qP.color.brightness(e,-5),l=t.bg3?t.bg3:qP.color.brightness(e,-15),c=t.bg3?t.bg3:qP.color.brightness(e,-45),p=t.fg2?t.fg2:qP.color.brightness(i,17),u=t.fg3?t.fg3:qP.color.brightness(i,30),d=t.fg3?t.fg3:qP.color.brightness(i,70),h=t.inlineCodeFg?t.inlineCodeFg:"brown",f="#444",m="#eee",y=t.headerColor?t.headerColor:qP.color.brightness(e,-180),g=t.navBgColor?t.navBgColor:qP.color.brightness(e,-200);r={bg1:e,bg2:s,bg3:l,lightBg:c,fg1:i,fg2:p,fg3:u,lightFg:d,inlineCodeFg:h,primaryColor:n,primaryColorTrans:a,primaryColorInvert:o,selectionBg:f,selectionFg:m,overlayBg:"rgba(0, 0, 0, 0.4)",navBgColor:g,navTextColor:t.navTextColor?t.navTextColor:qP.color.opacity(qP.color.invert(g),"0.65"),navHoverBgColor:t.navHoverBgColor?t.navHoverBgColor:qP.color.brightness(g,-15),navHoverTextColor:t.navHoverTextColor?t.navHoverTextColor:qP.color.invert(g),navAccentColor:t.navAccentColor?t.navAccentColor:qP.color.brightness(n,25),headerColor:y,headerColorInvert:qP.color.invert(y),headerColorDarker:qP.color.brightness(y,-20),headerColorBorder:qP.color.brightness(y,10),borderColor:t.borderColor||qP.color.brightness(e,-38),lightBorderColor:t.lightBorderColor||qP.color.brightness(e,-23),codeBorderColor:t.codeBorderColor||"transparent",inputBg:t.inputBg||qP.color.brightness(e,10),placeHolder:t.placeHolder||qP.color.brightness(d,20),hoverColor:t.hoverColor||qP.color.brightness(e,-5),red:t.red||"#F06560",lightRed:t.lightRed||"#fff0f0",pink:t.pink?t.pink:"#990055",lightPink:t.lightPink?t.lightPink:"#ffb2b2",green:t.green||"#690",lightGreen:t.lightGreen||"#fbfff0",blue:t.blue||"#47AFE8",lightBlue:t.lightBlue||"#eff8fd",orange:t.orange||"#FF9900",lightOrange:t.lightOrange||"#fff5e6",yellow:t.yellow||"#827717",lightYellow:t.lightYellow||"#fff5cc",purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||qP.color.opacity(qP.color.brightness(e,-15),.7),codeFg:t.codeFg||"#666",codePropertyColor:t.codePropertyColor||"#905",codeKeywordColor:t.codeKeywordColor||"#07a",codeOperatorColor:t.codeOperatorColor||"#9a6e3a"}}return B`
  <style>
  *, *:before, *:after { box-sizing: border-box; }
  
  :host {
    /* Common Styles - irrespective of themes */  
    --border-radius: 2px;
    --layout: ${this.layout||"row"};
    --font-mono: ${this.monoFont||'Monaco, "Andale Mono", "Roboto Mono", Consolas, monospace'};
    --font-regular: ${this.regularFont||'"Open Sans", Avenir, "Segoe UI", Arial, sans-serif'};
    --scroll-bar-width: 8px;
    --nav-item-padding: ${"relaxed"===this.navItemSpacing?"10px 16px 10px 10px":"compact"===this.navItemSpacing?"5px 16px 5px 10px":"7px 16px 7px 10px"};
    
    --resp-area-height: ${this.responseAreaHeight};
    --font-size-small:  ${"default"===this.fontSize?"12px":"large"===this.fontSize?"13px":"14px"};
    --font-size-mono:   ${"default"===this.fontSize?"13px":"large"===this.fontSize?"14px":"15px"};
    --font-size-regular: ${"default"===this.fontSize?"14px":"large"===this.fontSize?"15px":"16px"};
    --dialog-z-index: 1000;

    /* Theme specific styles */  
    --bg:${r.bg1};
    --bg2:${r.bg2};
    --bg3:${r.bg3};
    --light-bg:${r.lightBg};
    --fg:${r.fg1};
    --fg2:${r.fg2};
    --fg3:${r.fg3};
    --light-fg:${r.lightFg};
    --selection-bg:${r.selectionBg};
    --selection-fg:${r.selectionFg};
    --overlay-bg:${r.overlayBg};
    
    /* Border Colors */
    --border-color:${r.borderColor};
    --light-border-color:${r.lightBorderColor};
    --code-border-color:${r.codeBorderColor};

    --input-bg:${r.inputBg};
    --placeholder-color:${r.placeHolder};
    --hover-color:${r.hoverColor};
    --red:${r.red};
    --light-red:${r.lightRed};
    --pink:${r.pink};
    --light-pink:${r.lightPink};
    --green:${r.green};
    --light-green:${r.lightGreen};
    --blue:${r.blue};
    --light-blue:${r.lightBlue};
    --orange:${r.orange};
    --light-orange:${r.lightOrange};
    --yellow:${r.yellow};
    --light-yellow:${r.lightYellow};
    --purple:${r.purple};
    --brown:${r.brown};

    /* Header Color */
    --header-bg:${r.headerColor};
    --header-fg:${r.headerColorInvert};
    --header-color-darker:${r.headerColorDarker};
    --header-color-border:${r.headerColorBorder};

    /* Nav Colors */  
    --nav-bg-color:${r.navBgColor};
    --nav-text-color:${r.navTextColor};
    --nav-hover-bg-color:${r.navHoverBgColor};
    --nav-hover-text-color:${r.navHoverTextColor};
    --nav-accent-color:${r.navAccentColor};

    /* Nav API Method Colors*/
    --nav-get-color:${r.blue};
    --nav-put-color:${r.orange};
    --nav-post-color:${r.green};
    --nav-delete-color:${r.red};
    --nav-head-color:${r.yellow};

    /* Primary Colors */  
    --primary-color:${r.primaryColor};
    --primary-color-invert:${r.primaryColorInvert};
    --primary-color-trans:${r.primaryColorTrans};

    /*Code Syntax Color*/
    --code-bg:${r.codeBg};
    --code-fg:${r.codeFg};
    --inline-code-fg:${r.inlineCodeFg};
    --code-property-color:${r.codePropertyColor};
    --code-keyword-color:${r.codeKeywordColor};
    --code-operator-color:${r.codeOperatorColor};
  }
  </style>`}function WP(e=!1,t=!0,r=!0,n=!1){if(!this.resolvedSpec)return"";"true"===this.persistAuth&&RI.call(this);const o={bg1:MP(this.bgColor)?this.bgColor:"",fg1:MP(this.textColor)?this.textColor:"",headerColor:MP(this.headerColor)?this.headerColor:"",primaryColor:MP(this.primaryColor)?this.primaryColor:"",navBgColor:MP(this.navBgColor)?this.navBgColor:"",navTextColor:MP(this.navTextColor)?this.navTextColor:"",navHoverBgColor:MP(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:MP(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:MP(this.navAccentColor)?this.navAccentColor:""};return this.resolvedSpec.specLoadError?e?B`
        ${"dark"===this.theme?HP.call(this,"dark",o):HP.call(this,"light",o)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:B`
      ${"dark"===this.theme?HP.call(this,"dark",o):HP.call(this,"light",o)}
      <!-- Header -->
      ${NP.call(this)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?B`
      ${"dark"===this.theme?HP.call(this,"dark",o):HP.call(this,"light",o)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:B`
    ${"dark"===this.theme?HP.call(this,"dark",o):HP.call(this,"light",o)}

    <!-- Header -->
    ${"false"===this.showHeader?"":NP.call(this)}
    
    <!-- Advanced Search -->
    ${"false"===this.allowAdvancedSearch?"":UP.call(this)}

    <div id='the-main-body' class="body ${this.cssClasses}" dir= ${this.pageDirection} >
      <!-- Side Nav -->
      ${"read"!==this.renderStyle&&"focused"!==this.renderStyle||"true"!==this.showSideNav||!this.resolvedSpec?"":CP.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${!0===this.loading?B`<div class="loader"></div>`:B`
              ${!0===this.loadFailed?B`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:B`
                  <div class="operations-root" @click="${e=>{this.handleHref(e)}}">
                  ${"focused"===this.renderStyle?B`${RP.call(this)}`:B`
                      ${"true"===this.showInfo?wP.call(this):""}
                      ${"true"===this.allowServerSelection?AP.call(this):""}
                      ${"true"===this.allowAuthentication?qI.call(this):""}
                      <div id="operations-top" class="observe-me">
                        <slot name="operations-top"></slot>
                      </div>  
                      ${"read"===this.renderStyle?yP.call(this):FP.call(this,t,r,n)}
                    `}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `}customElements.define("rapi-doc",class extends ne{constructor(){super();const e={root:this.getRootNode().host,rootMargin:"-50px 0px -50px 0px",threshold:0};this.showSummaryWhenCollapsed=!0,this.isIntersectionObserverActive=!0,this.intersectionObserver=new IntersectionObserver((e=>{this.onIntersect(e)}),e)}static get properties(){return{headingText:{type:String,attribute:"heading-text"},gotoPath:{type:String,attribute:"goto-path"},updateRoute:{type:String,attribute:"update-route"},routePrefix:{type:String,attribute:"route-prefix"},specUrl:{type:String,attribute:"spec-url"},sortTags:{type:String,attribute:"sort-tags"},generateMissingTags:{type:String,attribute:"generate-missing-tags"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},specFile:{type:String,attribute:!1},layout:{type:String},renderStyle:{type:String,attribute:"render-style"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},useSummaryToListExamples:{type:String,attribute:"use-summary-to-list-example"},persistAuth:{type:String,attribute:"persist-auth"},onNavTagClick:{type:String,attribute:"on-nav-tag-click"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowAuthentication:{type:String,attribute:"allow-authentication"},allowTry:{type:String,attribute:"allow-try"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},allowAdvancedSearch:{type:String,attribute:"allow-advanced-search"},allowServerSelection:{type:String,attribute:"allow-server-selection"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showComponents:{type:String,attribute:"show-components"},pageDirection:{type:String,attribute:"page-direction"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},headerColor:{type:String,attribute:"header-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},cssFile:{type:String,attribute:"css-file"},cssClasses:{type:String,attribute:"css-classes"},navBgColor:{type:String,attribute:"nav-bg-color"},navTextColor:{type:String,attribute:"nav-text-color"},navHoverBgColor:{type:String,attribute:"nav-hover-bg-color"},navHoverTextColor:{type:String,attribute:"nav-hover-text-color"},navAccentColor:{type:String,attribute:"nav-accent-color"},navItemSpacing:{type:String,attribute:"nav-item-spacing"},showMethodInNavBar:{type:String,attribute:"show-method-in-nav-bar"},usePathInNavBar:{type:String,attribute:"use-path-in-nav-bar"},infoDescriptionHeadingsInNavBar:{type:String,attribute:"info-description-headings-in-navbar"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean},focusedElementId:{type:String},showAdvancedSearchDialog:{type:Boolean},advancedSearchMatches:{type:Object}}}static get styles(){return[He,We,Ve,Ge,Ke,Je,Ye,Ze,Qe,l`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }

      .main-content { 
        margin:0;
        padding: 0; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }

      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }

      .section-gap.section-tag {
        border-bottom:1px solid var(--border-color);
      }
      .section-gap,
      .section-gap--focused-mode,
      .section-gap--read-mode { 
        padding: 0px 4px; 
      }
      .section-tag-header {
        position:relative;
        cursor: n-resize;
        padding: 12px 0;
      }
      .collapsed .section-tag-header:hover{
        cursor: s-resize;
      }

      .section-tag-header:hover{
        background-image: linear-gradient(to right, rgba(0,0,0,0), var(--border-color), rgba(0,0,0,0));
      }

      .section-tag-header:hover::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color:var(--primary-color);
        content: '⬆'; 
      }

      .collapsed .section-tag-header::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color: var(--border-color);
        content: '⬇'; 
      }
      .collapsed .section-tag-header:hover::after {
        color:var(--primary-color);
      }

      .collapsed .section-tag-body {
        display:none;
      }

      .logo {
        height:36px;
        width:36px;
        margin-left:5px; 
      }
      .only-large-screen-flex,
      .only-large-screen{
        display:none;
      }
      .tag.title {
        text-transform: uppercase;
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      .expanded-endpoint-body{ 
        position: relative;
        padding: 6px 0px; 
      }
      .expanded-endpoint-body.deprecated{ filter:opacity(0.6); }
      .divider { 
        border-top: 2px solid var(--border-color);
        margin: 24px 0;
        width:100%;
      }

      .tooltip {
        cursor:pointer;
        border: 1px solid var(--border-color);
        border-left-width: 4px;
        margin-left:2px;
      }
      .tooltip a {
        color: var(--fg2);
        text-decoration: none;
      }
      .tooltip-text {
        color: var(--fg2);
        max-width: 400px;
        position: absolute;
        z-index:1;
        background-color: var(--bg2);
        visibility: hidden;

        overflow-wrap: break-word;
      }
      .tooltip:hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
      }
      .tooltip:hover a:hover {
        color: var(--primary-color);
      }

      .tooltip:hover .tooltip-text {
        visibility: visible;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .nav-method { font-weight: bold; margin-right: 4px; font-size: calc(var(--font-size-small) - 2px); white-space: nowrap; }
      .nav-method.false { display: none; }

      .nav-method.as-colored-text.get { color:var(--nav-get-color); }
      .nav-method.as-colored-text.put { color:var(--nav-put-color); }
      .nav-method.as-colored-text.post { color:var(--nav-post-color); }
      .nav-method.as-colored-text.delete { color:var(--nav-delete-color); }
      .nav-method.as-colored-text.head, .nav-method.as-colored-text.patch, .nav-method.as-colored-text.options { color:var(--nav-head-color); }
      
      .nav-method.as-colored-block {
        padding: 1px 4px;
        min-width: 30px;
        border-radius: 4px 0 0 4px;
        color: #000;
      }

      .nav-method.as-colored-block.get { background-color: var(--blue); }
      .nav-method.as-colored-block.put { background-color: var(--orange); }
      .nav-method.as-colored-block.post { background-color: var(--green); }
      .nav-method.as-colored-block.delete { background-color: var(--red); }
      .nav-method.as-colored-block.head, .nav-method.as-colored-block.patch , .nav-method.as-colored-block.options { 
        background-color: var(--yellow); 
      }

      @media only screen and (min-width: 768px) {
        .nav-bar {
          width: 260px;
          display:flex;
        }
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
        .section-gap { 
          padding: 0 0 0 24px; 
        }
        .section-gap--focused-mode {
          padding: 24px 8px; 
        }
        .section-gap--read-mode { 
          padding: 24px 8px; 
        }
        .endpoint-body {
          position: relative;
          padding:36px 0 48px 0;
        }
      }

      @media only screen and (min-width: 1024px) {
        .nav-bar {
          width: ${s("default"===this.fontSize?"300px":"large"===this.fontSize?"315px":"330px")};
          display:flex;
        }
        .section-gap--focused-mode { 
          padding: 12px 80px 12px 80px; 
        }
        .section-gap--read-mode { 
          padding: 24px 80px 12px 80px; 
        }
      }`,Xe]}connectedCallback(){super.connectedCallback();const e=this.parentElement;if(e&&(0===e.offsetWidth&&""===e.style.width&&(e.style.width="100vw"),0===e.offsetHeight&&""===e.style.height&&(e.style.height="100vh"),"BODY"===e.tagName&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0"))),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.renderStyle&&"read, view, focused,".includes(`${this.renderStyle},`)||(this.renderStyle="read"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?"model"===this.defaultSchemaTab&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false");const t=["post","put","patch"];this.schemaHideReadOnly?"never"!==this.schemaHideReadOnly&&(this.schemaHideReadOnly=t.filter((e=>this.schemaHideReadOnly.includes(e))),0===this.schemaHideReadOnly.length&&(this.schemaHideReadOnly=t)):this.schemaHideReadOnly=t,this.schemaHideReadOnly+=["get","head","delete","options"],this.schemaHideWriteOnly="never"!==this.schemaHideWriteOnly,this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.useSummaryToListExamples&&"true, false,".includes(`${this.useSummaryToListExamples},`)||(this.useSummaryToListExamples="false"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.onNavTagClick&&"expand-collapse, show-description,".includes(`${this.onNavTagClick},`)||(this.onNavTagClick="expand-collapse"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),this.allowAdvancedSearch&&"true, false,".includes(`${this.allowAdvancedSearch},`)||(this.allowAdvancedSearch="true"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.updateRoute&&"true, false,".includes(`${this.updateRoute},`)||(this.updateRoute="true"),this.routePrefix||(this.routePrefix="#"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.generateMissingTags&&"true, false,".includes(`${this.generateMissingTags},`)||(this.generateMissingTags="false"),this.sortEndpointsBy&&"method, path, summary, none,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.navItemSpacing&&"compact, relaxed, default,".includes(`${this.navItemSpacing},`)||(this.navItemSpacing="default"),this.showMethodInNavBar&&"false, as-plain-text, as-colored-text, as-colored-block,".includes(`${this.showMethodInNavBar},`)||(this.showMethodInNavBar="false"),this.usePathInNavBar&&"true, false,".includes(`${this.usePathInNavBar},`)||(this.usePathInNavBar="false"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.allowServerSelection&&"true, false,".includes(`${this.allowServerSelection},`)||(this.allowServerSelection="true"),this.allowAuthentication&&"true, false,".includes(`${this.allowAuthentication},`)||(this.allowAuthentication="true"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showComponents&&"true false".includes(this.showComponents)||(this.showComponents="false"),this.infoDescriptionHeadingsInNavBar&&"true, false,".includes(`${this.infoDescriptionHeadingsInNavBar},`)||(this.infoDescriptionHeadingsInNavBar="false"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.showAdvancedSearchDialog||(this.showAdvancedSearchDialog=!1),this.cssFile||(this.cssFile=null),this.cssClasses||(this.cssClasses=""),Ue.setOptions({highlight:(e,t)=>Me().languages[t]?Me().highlight(e,Me().languages[t],t):e}),window.addEventListener("hashchange",(()=>{const e=new RegExp(`^${this.routePrefix}`,"i"),t=window.location.hash.replace(e,"");this.scrollTo(t)}),!0)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}infoDescriptionHeadingRenderer(){const e=new Ue.Renderer;return e.heading=(e,t,r,n)=>`<h${t} class="observe-me" id="${n.slug(r)}">${e}</h${t}>`,e}render(){const e=document.querySelector(`link[href*="${this.cssFile}"]`);return e&&this.shadowRoot.appendChild(e.cloneNode()),WP.call(this)}observeExpandedContent(){this.shadowRoot.querySelectorAll(".observe-me").forEach((e=>{this.intersectionObserver.observe(e)}))}attributeChangedCallback(e,t,r){if("spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r),this.gotoPath&&!window.location.hash&&this.scrollTo(this.gotoPath)}),0),"render-style"===e&&("read"===r?window.setTimeout((()=>{this.observeExpandedContent()}),100):this.intersectionObserver.disconnect()),"api-key-name"===e||"api-key-location"===e||"api-key-value"===e){let t=!1,n="",o="",a="";if("api-key-name"===e?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(n=r,o=this.getAttribute("api-key-location"),a=this.getAttribute("api-key-value"),t=!0):"api-key-location"===e?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(o=r,n=this.getAttribute("api-key-name"),a=this.getAttribute("api-key-value"),t=!0):"api-key-value"===e&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(a=r,o=this.getAttribute("api-key-location"),n=this.getAttribute("api-key-name"),t=!0),t&&this.resolvedSpec){const e=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===tt));e?(e.name=n,e.in=o,e.value=a,e.finalKeyValue=a):this.resolvedSpec.securitySchemes.push({securitySchemeId:tt,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:n,in:o,value:a,finalKeyValue:a}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSepcFileChange(e){this.setAttribute("spec-file",this.shadowRoot.getElementById("spec-file").value);const t=e.target.files[0],r=new FileReader;r.onload=()=>{try{const e=JSON.parse(r.result);this.loadSpec(e),this.shadowRoot.getElementById("spec-url").value=""}catch(e){console.error("RapiDoc: Unable to read or parse json")}},r.readAsText(t)}onFileLoadClick(){this.shadowRoot.getElementById("spec-file").click()}onSearchChange(e){this.matchPaths=e.target.value,this.resolvedSpec.tags.forEach((e=>e.paths.filter((t=>{this.matchPaths&&ot(this.matchPaths,t,this.matchType)&&(e.expanded=!0)})))),this.resolvedSpec.components.forEach((e=>e.subComponents.filter((e=>{e.expanded=!1,this.matchPaths&&!function(e,t){return t.name.toLowerCase().includes(e.toLowerCase())}(this.matchPaths,e)||(e.expanded=!0)})))),this.requestUpdate()}onClearSearch(){this.shadowRoot.getElementById("nav-bar-search").value="",this.matchPaths="",this.resolvedSpec.components.forEach((e=>e.subComponents.filter((e=>{e.expanded=!0}))))}onShowSearchModalClicked(){this.showAdvancedSearchDialog=!0}async onOpenSearchDialog(e){const t=e.detail.querySelector("input");await rt(0),t&&t.focus()}async loadSpec(e){if(e){this.matchPaths="";try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1;const t=await kI.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}}async afterSpecParsedAndValidated(e){var t;for(this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find((e=>e.url===this.defaultApiServerUrl)))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const r=new CustomEvent("spec-loaded",{detail:e});if(this.dispatchEvent(r),this.intersectionObserver.disconnect(),"read"===this.renderStyle&&(await rt(100),this.observeExpandedContent()),null===(t=window.location.hash)||void 0===t?void 0:t.substring(1)){const e=new RegExp(`^${this.routePrefix}`,"i"),t=window.location.hash.replace(e,"");"view"===this.renderStyle?this.expandAndGotoOperation(t,!0,!0):this.scrollTo(t)}else if("focused"===this.renderStyle){var n;const e=this.showInfo?"overview":null===(n=this.resolvedSpec.tags[0])||void 0===n?void 0:n.paths[0];this.scrollTo(e)}}expandAndGotoOperation(e,t=!0){if(!this.resolvedSpec)return;let r=!0;const n=-1===e.indexOf("#")?e:e.substring(1);if(n.startsWith("overview")||"servers"===n||"auth"===n)r=!1;else for(let i=0;i<(null===(o=this.resolvedSpec.tags)||void 0===o?void 0:o.length);i++){var o,a;const t=this.resolvedSpec.tags[i],n=null===(a=t.paths)||void 0===a?void 0:a.find((t=>t.elementId===e));n&&(n.expanded&&t.expanded?r=!1:(n.expanded=!0,t.expanded=!0))}t&&(r&&this.requestUpdate(),window.setTimeout((()=>{const e=this.shadowRoot.getElementById(n);e&&(e.scrollIntoView({behavior:"auto",block:"start"}),"true"===this.updateRoute&&window.history.replaceState(null,null,`${this.routePrefix||"#"}${n}`))}),r?150:0))}isValidTopId(e){return e.startsWith("overview")||"servers"===e||"auth"===e}isValidPathId(e){var t,r,n,o;return!("overview"!==e||!this.showInfo)||!("servers"!==e||!this.allowServerSelection)||!("auth"!==e||!this.allowAuthentication)||(e.startsWith("tag--")?null===(n=this.resolvedSpec)||void 0===n||null===(o=n.tags)||void 0===o?void 0:o.find((t=>t.elementId===e)):null===(t=this.resolvedSpec)||void 0===t||null===(r=t.tags)||void 0===r?void 0:r.find((t=>t.paths.find((t=>t.elementId===e)))))}onIntersect(e){!1!==this.isIntersectionObserverActive&&e.forEach((e=>{if(e.isIntersecting&&e.intersectionRatio>0){const t=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active"),r=this.shadowRoot.getElementById(`link-${e.target.id}`);r&&("true"===this.updateRoute&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${this.routePrefix||"#"}${e.target.id}`),r.scrollIntoView({behavior:"auto",block:"center"}),r.classList.add("active")),t&&t.classList.remove("active")}}))}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}async scrollToEventTarget(e,t=!0){const r=e.currentTarget;r.dataset.contentId&&(this.isIntersectionObserverActive=!1,this.scrollTo(r.dataset.contentId,!0,t),setTimeout((()=>{this.isIntersectionObserverActive=!0}),300))}async scrollTo(e,t=!0,r=!0){if("focused"===this.renderStyle&&(this.focusedElementId=e,await rt(0)),"view"===this.renderStyle)this.expandAndGotoOperation(e,t,!0);else{let t=!1;const n=this.shadowRoot.getElementById(e);if(n?(t=!0,n.scrollIntoView({behavior:"auto",block:"start"})):t=!1,t){if("focused"===this.renderStyle){const e=this.shadowRoot.querySelector("api-request");e&&e.resetRequestBodySelection();const t=this.shadowRoot.querySelector("api-response");t&&t.resetSelection()}"true"===this.updateRoute&&window.history.replaceState(null,null,`${this.routePrefix||"#"}${e}`);const t=this.shadowRoot.getElementById(`link-${e}`);if(t){r&&t.scrollIntoView({behavior:"auto",block:"center"}),await rt(0);const e=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active");e&&e.classList.remove("active"),t.classList.add("active")}}}}setHttpUserNameAndPassword(e,t,r){return _I.call(this,e,t,r)}setApiKey(e,t){return _I.call(this,e,"","",t)}removeAllSecurityKeys(){return jI.call(this)}setApiServer(e){return $P.call(this,e)}onAdvancedSearch(e,t){const r=e.target;clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>{let e;e="text"===r.type?r:r.closest(".advanced-search-options").querySelector("input[type=text]");const t=[...r.closest(".advanced-search-options").querySelectorAll("input:checked")].map((e=>e.id));this.advancedSearchMatches=function(e,t,r=[]){if(!e.trim()||0===r.length)return;const n=[];return t.forEach((t=>{t.paths.forEach((t=>{let o="";var a;if(r.includes("search-api-path")&&(o=t.path),r.includes("search-api-descr")&&(o=`${o} ${t.summary||t.description||""}`),r.includes("search-api-params")&&(o=`${o} ${(null===(a=t.parameters)||void 0===a?void 0:a.map((e=>e.name)).join(" "))||""}`),r.includes("search-api-request-body")&&t.requestBody){let e=new Set;for(const r in null===(i=t.requestBody)||void 0===i?void 0:i.content){var i,s,l;null!==(s=t.requestBody.content[r].schema)&&void 0!==s&&s.properties&&(e=at(null===(l=t.requestBody.content[r].schema)||void 0===l?void 0:l.properties)),o=`${o} ${[...e].join(" ")}`}}r.includes("search-api-resp-descr")&&(o=`${o} ${Object.values(t.responses).map((e=>e.description||"")).join(" ")}`),o.toLowerCase().includes(e.trim().toLowerCase())&&n.push({elementId:t.elementId,method:t.method,path:t.path,summary:t.summary||t.description||"",deprecated:t.deprecated})}))})),n}(e.value,this.resolvedSpec.tags,t)}),t)}}),customElements.define("rapi-doc-mini",class extends ne{constructor(){super(),this.isMini=!0,this.updateRoute="false",this.renderStyle="view",this.showHeader="false",this.allowAdvancedSearch="false"}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},layout:{type:String},pathsExpanded:{type:String,attribute:"paths-expanded"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},showSummaryWhenCollapsed:{type:String,attribute:"show-summary-when-collapsed"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},useSummaryToListExamples:{type:String,attribute:"use-summary-to-list-example"},persistAuth:{type:String,attribute:"persist-auth"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},allowTry:{type:String,attribute:"allow-try"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean}}}static get styles(){return[He,We,Ve,Ge,Ke,Je,Ye,Ze,Qe,l`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }

      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){if(super.connectedCallback(),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.showSummaryWhenCollapsed&&"true, false,".includes(`${this.showSummaryWhenCollapsed},`)||(this.showSummaryWhenCollapsed="true"),this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?"model"===this.defaultSchemaTab&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",this.pathsExpanded="true"===this.pathsExpanded,(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.useSummaryToListExamples&&"true, false,".includes(`${this.useSummaryToListExamples},`)||(this.useSummaryToListExamples="false"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.sortEndpointsBy&&"method, path, summary,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),Ue.setOptions({highlight:(e,t)=>Me().languages[t]?Me().highlight(e,Me().languages[t],t):e})}render(){return WP.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){if("spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r)}),0),"api-key-name"===e||"api-key-location"===e||"api-key-value"===e){let t=!1,n="",o="",a="";if("api-key-name"===e?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(n=r,o=this.getAttribute("api-key-location"),a=this.getAttribute("api-key-value"),t=!0):"api-key-location"===e?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(o=r,n=this.getAttribute("api-key-name"),a=this.getAttribute("api-key-value"),t=!0):"api-key-value"===e&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(a=r,o=this.getAttribute("api-key-location"),n=this.getAttribute("api-key-name"),t=!0),t&&this.resolvedSpec){const e=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===tt));e?(e.name=n,e.in=o,e.value=a,e.finalKeyValue=a):this.resolvedSpec.securitySchemes.push({apiKeyId:tt,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:n,in:o,value:a,finalKeyValue:a}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await kI.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}setHttpUserNameAndPassword(e,t,r){return _I.call(this,e,t,r)}setApiKey(e,t){return _I.call(this,e,"","",t)}removeAllSecurityKeys(){return jI.call(this)}setApiServer(e){return $P.call(this,e)}async afterSpecParsedAndValidated(e){for(this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find((e=>e.url===this.defaultApiServerUrl)))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}});class VP extends HTMLElement{connectedCallback(){this.receiveAuthParms(),window.addEventListener("storage",(e=>this.receiveStorage(e)),!0)}receiveAuthParms(){let e={};if(document.location.search){const t=new URLSearchParams(document.location.search);e={code:t.get("code"),error:t.get("error"),state:t.get("state"),responseType:"code"}}else window.location.hash&&(e={token_type:this.parseQueryString(window.location.hash.substring(1),"token_type"),access_token:this.parseQueryString(window.location.hash.substring(1),"access_token"),responseType:"token"});window.opener?window.opener.postMessage(e,this.target):sessionStorage.setItem("rapidoc-oauth-data",JSON.stringify(e))}relayAuthParams(e){if(window.parent&&"rapidoc-oauth-data"===e.key){const t=JSON.parse(e.newValue);window.parent.postMessage(t,this.target)}}parseQueryString(e,t){const r=e.split("&");for(let n=0;n<r.length;n++){const e=r[n].split("=");if(decodeURIComponent(e[0])===t)return decodeURIComponent(e[1])}}}function GP(){return B`
  <nav class='nav-bar' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    <div style="display:flex;line-height:22px; padding:8px">
      <input id="nav-bar-search" 
        part = "textbox textbox-nav-filter"
        style = "width:100%; height: 26px; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
        type = "text"
        placeholder = "Filter" 
        @change = "${this.onSearchChange}"  
        spellcheck = "false" 
      >
      <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
    </div>
    <nav style="flex:1" class='nav-scroll' part="section-navbar-scroll">
      ${this.resolvedSpec.schemaAndExamples.map((e=>B`
        <div class='nav-bar-path' data-content-id='${e.elementId}' id='link-${e.elementId}'
          @click = '${e=>{this.scrollToEventTarget(e,!1)}}'
        > 
          ${e.name}
        </div>`))}
    </nav>  
  </nav>
  `}function KP(){return B`
    ${"true"===this.showInfo?wP.call(this):""}
    <div style="font-size:var(--font-size-regular);">
    ${this.resolvedSpec.schemaAndExamples.map((e=>{var t;const r=pP(e.schema,"json",e.examples,e.example,!0,!1,"json",!0);return e.selectedExample=null===(t=r[0])||void 0===t?void 0:t.exampleId,B`
        <section id='${e.elementId}' class='json-schema-and-example regular-font' style="display:flex; flex-direction: column; border:1px solid var(--border-color); margin-bottom:32px; border-top: 5px solid var(--border-color)">
          <div style="padding:16px; border-bottom: 1px solid var(--border-color)">
            <div style="font-size:var(--font-size-small); font-weight:bold">${e.name}</div>
            <span class="json-schema-description m-markdown ">${TI(Ue(e.description||""))}</span>
          </div>  
          <div style="display:flex; flex-direction: row; gap:16px;">
            <div class="json-schema-def" style="flex:1; padding:16px 0 16px 16px; ">
              <schema-tree
                .data = "${cP(e.schema,{})}"
                schema-expand-level = "${this.schemaExpandLevel}"
                schema-description-expanded = "${this.schemaDescriptionExpanded}"
                allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                schema-hide-read-only = "false"
                schema-hide-write-only = "false"
              > </schema-tree>
            </div>
            <div class="json-schema-example-panel" style="width:400px; background-color: var(--input-bg); padding:16px 0 16px 16px; border-left: 1px dashed var(--border-color);">
              ${r.length>1?B`<select style="min-width:100px; max-width:100%" @change='${t=>this.onSelectExample(t,e)}'>
                    ${r.map((t=>B`
                      <option value="${t.exampleId}" ?selected=${t.exampleId===e.selectedExample}> 
                        ${t.exampleSummary.length>80?t.exampleId:t.exampleSummary}
                      </option>`))}
                  </select>`:B`<div style="font-size: var(--font-size-small);font-weight:700; margin:5px 0"> ${r[0].exampleSummary}</div>`}
              ${r.map((t=>B`
                <json-tree 
                  .data = "${t.exampleValue}"
                  data-example = "${t.exampleId}"
                  class = "example"
                  style = "margin-top:16px; display: ${t.exampleId===e.selectedExample?"flex":"none"}"
                ></json-tree>`))}
            </div>
          </div>
        </section>`}))}
    </div>
  `}function JP(e=!1){if(!this.resolvedSpec)return"";const t={bg1:MP(this.bgColor)?this.bgColor:"",fg1:MP(this.textColor)?this.textColor:"",headerColor:MP(this.headerColor)?this.headerColor:"",primaryColor:MP(this.primaryColor)?this.primaryColor:"",navBgColor:MP(this.navBgColor)?this.navBgColor:"",navTextColor:MP(this.navTextColor)?this.navTextColor:"",navHoverBgColor:MP(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:MP(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:MP(this.navAccentColor)?this.navAccentColor:""};return this.resolvedSpec.specLoadError?e?B`
        ${"dark"===this.theme?HP.call(this,"dark",t):HP.call(this,"light",t)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:B`
      ${"dark"===this.theme?HP.call(this,"dark",t):HP.call(this,"light",t)}
      <!-- Header -->
      ${NP.call(this)}
      <h1> Header </h1>
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?B`
      ${"dark"===this.theme?HP.call(this,"dark",t):HP.call(this,"light",t)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:B`
    ${"dark"===this.theme?HP.call(this,"dark",t):HP.call(this,"light",t)}

    <!-- Header -->
    ${"false"===this.showHeader?"":NP.call(this)}
    
    <div id='the-main-body' class="body ${this.cssClasses}" dir= ${this.pageDirection}>

      <!-- Side Nav -->
      ${GP.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${!0===this.loading?B`<div class="loader"></div>`:B`
              ${!0===this.loadFailed?B`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:B`
                  <div class="operations-root" @click="${e=>{this.handleHref(e)}}">
                    ${KP.call(this)}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `}customElements.define("oauth-receiver",VP),customElements.define("json-schema-viewer",class extends ne{constructor(){super(),this.isMini=!1,this.updateRoute="false",this.renderStyle="focused",this.showHeader="true",this.allowAdvancedSearch="false",this.selectedExampleForEachSchema={}}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},loading:{type:Boolean}}}static get styles(){return[He,We,Ve,Ge,Ke,Je,Ye,Ze,Qe,l`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }
      .nav-bar {
        width: 230px;
        display:flex;
      }

      .main-content { 
        margin:0;
        padding: 16px; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }
      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){super.connectedCallback();const e=this.parentElement;if(e&&(0===e.offsetWidth&&""===e.style.width&&(e.style.width="100vw"),0===e.offsetHeight&&""===e.style.height&&(e.style.height="100vh"),"BODY"===e.tagName&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0"))),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.renderStyle="focused",this.pathsExpanded="true"===this.pathsExpanded,this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showHeader&&"true, false,".includes(`${this.showHeader},`)||(this.showHeader="true"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),Ue.setOptions({highlight:(e,t)=>Me().languages[t]?Me().highlight(e,Me().languages[t],t):e})}render(){return JP.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){"spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r)}),0),super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSearchChange(e){this.matchPaths=e.target.value}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await kI.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}async afterSpecParsedAndValidated(e){this.resolvedSpec=e;const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}onSelectExample(e){[...e.target.closest(".json-schema-example-panel").querySelectorAll(".example")].forEach((t=>{t.style.display=t.dataset.example===e.target.value?"flex":"none"}))}async scrollToEventTarget(e){const t=e.currentTarget;if(!t.dataset.contentId)return;const r=this.shadowRoot.getElementById(t.dataset.contentId);r&&r.scrollIntoView({behavior:"auto",block:"start"})}})},742:(e,t)=>{"use strict";t.byteLength=function(e){var t=s(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,a=s(e),i=a[0],l=a[1],c=new o(function(e,t,r){return 3*(t+r)/4-r}(0,i,l)),p=0,u=l>0?i-4:i;for(r=0;r<u;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[p++]=t>>16&255,c[p++]=t>>8&255,c[p++]=255&t;return 2===l&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[p++]=255&t),1===l&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[p++]=t>>8&255,c[p++]=255&t),c},t.fromByteArray=function(e){for(var t,n=e.length,o=n%3,a=[],i=16383,s=0,c=n-o;s<c;s+=i)a.push(l(e,s,s+i>c?c:s+i));return 1===o?(t=e[n-1],a.push(r[t>>2]+r[t<<4&63]+"==")):2===o&&(t=(e[n-2]<<8)+e[n-1],a.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"=")),a.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0;i<64;++i)r[i]=a[i],n[a.charCodeAt(i)]=i;function s(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function l(e,t,n){for(var o,a,i=[],s=t;s<n;s+=3)o=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),i.push(r[(a=o)>>18&63]+r[a>>12&63]+r[a>>6&63]+r[63&a]);return i.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},764:(e,t,r)=>{"use strict";const n=r(742),o=r(645),a="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=l,t.SlowBuffer=function(e){return+e!=e&&(e=0),l.alloc(+e)},t.INSPECT_MAX_BYTES=50;const i=2147483647;function s(e){if(e>i)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return u(e)}return c(e,t,r)}function c(e,t,r){if("string"==typeof e)return function(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!l.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|m(e,t);let n=s(r);const o=n.write(e,t);return o!==r&&(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(J(e,Uint8Array)){const t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(J(e,ArrayBuffer)||e&&J(e.buffer,ArrayBuffer))return h(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(J(e,SharedArrayBuffer)||e&&J(e.buffer,SharedArrayBuffer)))return h(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return l.from(n,t,r);const o=function(e){if(l.isBuffer(e)){const t=0|f(e.length),r=s(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||Y(e.length)?s(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function p(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return p(e),s(e<0?0:0|f(e))}function d(e){const t=e.length<0?0:0|f(e.length),r=s(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function h(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,l.prototype),n}function f(e){if(e>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return 0|e}function m(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||J(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return G(e).length;default:if(o)return n?-1:V(e).length;t=(""+t).toLowerCase(),o=!0}}function y(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return _(this,t,r);case"utf8":case"utf-8":return E(this,t,r);case"ascii":return T(this,t,r);case"latin1":case"binary":return C(this,t,r);case"base64":return A(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function g(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function v(e,t,r,n,o){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Y(r=+r)&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return-1;r=e.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:b(e,t,r,n,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):b(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function b(e,t,r,n,o){let a,i=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;i=2,s/=2,l/=2,r/=2}function c(e,t){return 1===i?e[t]:e.readUInt16BE(t*i)}if(o){let n=-1;for(a=r;a<s;a++)if(c(e,a)===c(t,-1===n?0:a-n)){if(-1===n&&(n=a),a-n+1===l)return n*i}else-1!==n&&(a-=a-n),n=-1}else for(r+l>s&&(r=s-l),a=r;a>=0;a--){let r=!0;for(let n=0;n<l;n++)if(c(e,a+n)!==c(t,n)){r=!1;break}if(r)return a}return-1}function x(e,t,r,n){r=Number(r)||0;const o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;const a=t.length;let i;for(n>a/2&&(n=a/2),i=0;i<n;++i){const n=parseInt(t.substr(2*i,2),16);if(Y(n))return i;e[r+i]=n}return i}function w(e,t,r,n){return K(V(t,e.length-r),e,r,n)}function $(e,t,r,n){return K(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function k(e,t,r,n){return K(G(t),e,r,n)}function S(e,t,r,n){return K(function(e,t){let r,n,o;const a=[];for(let i=0;i<e.length&&!((t-=2)<0);++i)r=e.charCodeAt(i),n=r>>8,o=r%256,a.push(o),a.push(n);return a}(t,e.length-r),e,r,n)}function A(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function E(e,t,r){r=Math.min(e.length,r);const n=[];let o=t;for(;o<r;){const t=e[o];let a=null,i=t>239?4:t>223?3:t>191?2:1;if(o+i<=r){let r,n,s,l;switch(i){case 1:t<128&&(a=t);break;case 2:r=e[o+1],128==(192&r)&&(l=(31&t)<<6|63&r,l>127&&(a=l));break;case 3:r=e[o+1],n=e[o+2],128==(192&r)&&128==(192&n)&&(l=(15&t)<<12|(63&r)<<6|63&n,l>2047&&(l<55296||l>57343)&&(a=l));break;case 4:r=e[o+1],n=e[o+2],s=e[o+3],128==(192&r)&&128==(192&n)&&128==(192&s)&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&s,l>65535&&l<1114112&&(a=l))}}null===a?(a=65533,i=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),o+=i}return function(e){const t=e.length;if(t<=O)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=O));return r}(n)}t.kMaxLength=i,l.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return c(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return function(e,t,r){return p(e),e<=0?s(e):void 0!==t?"string"==typeof r?s(e).fill(t,r):s(e).fill(t):s(e)}(e,t,r)},l.allocUnsafe=function(e){return u(e)},l.allocUnsafeSlow=function(e){return u(e)},l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(J(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),J(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let o=0,a=Math.min(r,n);o<a;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=l.allocUnsafe(t);let o=0;for(r=0;r<e.length;++r){let t=e[r];if(J(t,Uint8Array))o+t.length>n.length?(l.isBuffer(t)||(t=l.from(t)),t.copy(n,o)):Uint8Array.prototype.set.call(n,t,o);else{if(!l.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,o)}o+=t.length}return n},l.byteLength=m,l.prototype._isBuffer=!0,l.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)g(this,t,t+1);return this},l.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},l.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},l.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?E(this,0,e):y.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){let e="";const r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},a&&(l.prototype[a]=l.prototype.inspect),l.prototype.compare=function(e,t,r,n,o){if(J(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return-1;if(t>=r)return 1;if(this===e)return 0;let a=(o>>>=0)-(n>>>=0),i=(r>>>=0)-(t>>>=0);const s=Math.min(a,i),c=this.slice(n,o),p=e.slice(t,r);for(let l=0;l<s;++l)if(c[l]!==p[l]){a=c[l],i=p[l];break}return a<i?-1:i<a?1:0},l.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return v(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return v(this,e,t,r,!1)},l.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const o=this.length-t;if((void 0===r||r>o)&&(r=o),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let a=!1;for(;;)switch(n){case"hex":return x(this,e,t,r);case"utf8":case"utf-8":return w(this,e,t,r);case"ascii":case"latin1":case"binary":return $(this,e,t,r);case"base64":return k(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,t,r);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const O=4096;function T(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}function C(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}function _(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let o="";for(let a=t;a<r;++a)o+=Z[e[a]];return o}function j(e,t,r){const n=e.slice(t,r);let o="";for(let a=0;a<n.length-1;a+=2)o+=String.fromCharCode(n[a]+256*n[a+1]);return o}function I(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function P(e,t,r,n,o,a){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<a)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function R(e,t,r,n,o){q(t,n,o,e,r,7);let a=Number(t&BigInt(4294967295));e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a;let i=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,r}function L(e,t,r,n,o){q(t,n,o,e,r,7);let a=Number(t&BigInt(4294967295));e[r+7]=a,a>>=8,e[r+6]=a,a>>=8,e[r+5]=a,a>>=8,e[r+4]=a;let i=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=i,i>>=8,e[r+2]=i,i>>=8,e[r+1]=i,i>>=8,e[r]=i,r+8}function D(e,t,r,n,o,a){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function B(e,t,r,n,a){return t=+t,r>>>=0,a||D(e,0,r,4),o.write(e,t,r,n,23,4),r+4}function F(e,t,r,n,a){return t=+t,r>>>=0,a||D(e,0,r,8),o.write(e,t,r,n,52,8),r+8}l.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,l.prototype),n},l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=this[e],o=1,a=0;for(;++a<t&&(o*=256);)n+=this[e+a]*o;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=this[e+--t],o=1;for(;t>0&&(o*=256);)n+=this[e+--t]*o;return n},l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e>>>=0,t||I(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||I(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||I(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||I(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readBigUInt64LE=Q((function(e){M(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,o=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(o)<<BigInt(32))})),l.prototype.readBigUInt64BE=Q((function(e){M(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],o=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)})),l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=this[e],o=1,a=0;for(;++a<t&&(o*=256);)n+=this[e+a]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=t,o=1,a=this[e+--n];for(;n>0&&(o*=256);)a+=this[e+--n]*o;return o*=128,a>=o&&(a-=Math.pow(2,8*t)),a},l.prototype.readInt8=function(e,t){return e>>>=0,t||I(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||I(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||I(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readBigInt64LE=Q((function(e){M(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),l.prototype.readBigInt64BE=Q((function(e){M(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),l.prototype.readFloatLE=function(e,t){return e>>>=0,t||I(e,4,this.length),o.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||I(e,4,this.length),o.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||I(e,8,this.length),o.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||I(e,8,this.length),o.read(this,e,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||P(this,e,t,r,Math.pow(2,8*r)-1,0);let o=1,a=0;for(this[t]=255&e;++a<r&&(o*=256);)this[t+a]=e/o&255;return t+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||P(this,e,t,r,Math.pow(2,8*r)-1,0);let o=r-1,a=1;for(this[t+o]=255&e;--o>=0&&(a*=256);)this[t+o]=e/a&255;return t+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigUInt64LE=Q((function(e,t=0){return R(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeBigUInt64BE=Q((function(e,t=0){return L(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);P(this,e,t,r,n-1,-n)}let o=0,a=1,i=0;for(this[t]=255&e;++o<r&&(a*=256);)e<0&&0===i&&0!==this[t+o-1]&&(i=1),this[t+o]=(e/a|0)-i&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);P(this,e,t,r,n-1,-n)}let o=r-1,a=1,i=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===i&&0!==this[t+o+1]&&(i=1),this[t+o]=(e/a|0)-i&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigInt64LE=Q((function(e,t=0){return R(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeBigInt64BE=Q((function(e,t=0){return L(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeFloatLE=function(e,t,r){return B(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return B(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return F(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return F(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},l.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{const a=l.isBuffer(e)?e:l.from(e,n),i=a.length;if(0===i)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=a[o%i]}return this};const N={};function z(e,t,r){N[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function U(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function q(e,t,r,n,o,a){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let o;throw o=a>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(a+1)}${n}`:`>= -(2${n} ** ${8*(a+1)-1}${n}) and < 2 ** ${8*(a+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new N.ERR_OUT_OF_RANGE("value",o,e)}!function(e,t,r){M(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||H(t,e.length-(r+1))}(n,o,a)}function M(e,t){if("number"!=typeof e)throw new N.ERR_INVALID_ARG_TYPE(t,"number",e)}function H(e,t,r){if(Math.floor(e)!==e)throw M(e,r),new N.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new N.ERR_BUFFER_OUT_OF_BOUNDS;throw new N.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}z("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),z("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),z("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=U(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=U(o)),o+="n"),n+=` It must be ${t}. Received ${o}`,n}),RangeError);const W=/[^+/0-9A-Za-z-_]/g;function V(e,t){let r;t=t||1/0;const n=e.length;let o=null;const a=[];for(let i=0;i<n;++i){if(r=e.charCodeAt(i),r>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&a.push(239,191,189);continue}if(i+1===n){(t-=3)>-1&&a.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&a.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(t-=3)>-1&&a.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return a}function G(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(W,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function K(e,t,r,n){let o;for(o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}function J(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Y(e){return e!=e}const Z=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let o=0;o<16;++o)t[n+o]=e[r]+e[o]}return t}();function Q(e){return"undefined"==typeof BigInt?X:e}function X(){throw new Error("BigInt not supported")}},645:(e,t)=>{t.read=function(e,t,r,n,o){var a,i,s=8*o-n-1,l=(1<<s)-1,c=l>>1,p=-7,u=r?o-1:0,d=r?-1:1,h=e[t+u];for(u+=d,a=h&(1<<-p)-1,h>>=-p,p+=s;p>0;a=256*a+e[t+u],u+=d,p-=8);for(i=a&(1<<-p)-1,a>>=-p,p+=n;p>0;i=256*i+e[t+u],u+=d,p-=8);if(0===a)a=1-c;else{if(a===l)return i?NaN:1/0*(h?-1:1);i+=Math.pow(2,n),a-=c}return(h?-1:1)*i*Math.pow(2,a-n)},t.write=function(e,t,r,n,o,a){var i,s,l,c=8*a-o-1,p=(1<<c)-1,u=p>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:a-1,f=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,i=p):(i=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-i))<1&&(i--,l*=2),(t+=i+u>=1?d/l:d*Math.pow(2,1-u))*l>=2&&(i++,l/=2),i+u>=p?(s=0,i=p):i+u>=1?(s=(t*l-1)*Math.pow(2,o),i+=u):(s=t*Math.pow(2,u-1)*Math.pow(2,o),i=0));o>=8;e[r+h]=255&s,h+=f,s/=256,o-=8);for(i=i<<o|s,c+=o;c>0;e[r+h]=255&i,h+=f,i/=256,c-=8);e[r+h-f]|=128*m}},874:()=>{!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},n={bash:r,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:n.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=e.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],a=n.variable[1].inside,i=0;i<o.length;i++)a[o[i]]=e.languages.bash[o[i]];e.languages.shell=e.languages.bash}(Prism)},16:()=>{!function(e){function t(e,t){return e.replace(/<<(\d+)>>/g,(function(e,r){return"(?:"+t[+r]+")"}))}function r(e,r,n){return RegExp(t(e,r),n||"")}function n(e,t){for(var r=0;r<t;r++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var o="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",a="class enum interface record struct",i="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",s="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var c=l(a),p=RegExp(l(o+" "+a+" "+i+" "+s)),u=l(a+" "+i+" "+s),d=l(o+" "+a+" "+s),h=n(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),f=n(/\((?:[^()]|<<self>>)*\)/.source,2),m=/@?\b[A-Za-z_]\w*\b/.source,y=t(/<<0>>(?:\s*<<1>>)?/.source,[m,h]),g=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[u,y]),v=/\[\s*(?:,\s*)*\]/.source,b=t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[g,v]),x=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[h,f,v]),w=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[x]),$=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[w,g,v]),k={keyword:p,punctuation:/[<>()?,.:[\]]/},S=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,A=/"(?:\\.|[^\\"\r\n])*"/.source,E=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[E]),lookbehind:!0,greedy:!0},{pattern:r(/(^|[^@$\\])<<0>>/.source,[A]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[g]),lookbehind:!0,inside:k},{pattern:r(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[m,$]),lookbehind:!0,inside:k},{pattern:r(/(\busing\s+)<<0>>(?=\s*=)/.source,[m]),lookbehind:!0},{pattern:r(/(\b<<0>>\s+)<<1>>/.source,[c,y]),lookbehind:!0,inside:k},{pattern:r(/(\bcatch\s*\(\s*)<<0>>/.source,[g]),lookbehind:!0,inside:k},{pattern:r(/(\bwhere\s+)<<0>>/.source,[m]),lookbehind:!0},{pattern:r(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[b]),lookbehind:!0,inside:k},{pattern:r(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[$,d,m]),inside:k}],keyword:p,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:r(/([(,]\s*)<<0>>(?=\s*:)/.source,[m]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:r(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[m]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:r(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[f]),lookbehind:!0,alias:"class-name",inside:k},"return-type":{pattern:r(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[$,g]),inside:k,alias:"class-name"},"constructor-invocation":{pattern:r(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[$]),lookbehind:!0,inside:k,alias:"class-name"},"generic-method":{pattern:r(/<<0>>\s*<<1>>(?=\s*\()/.source,[m,h]),inside:{function:r(/^<<0>>/.source,[m]),generic:{pattern:RegExp(h),alias:"class-name",inside:k}}},"type-list":{pattern:r(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[c,y,m,$,p.source,f,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:r(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[y,f]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:p,"class-name":{pattern:RegExp($),greedy:!0,inside:k},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var O=A+"|"+S,T=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[O]),C=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[T]),2),_=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,j=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[g,C]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:r(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[_,j]),lookbehind:!0,greedy:!0,inside:{target:{pattern:r(/^<<0>>(?=\s*:)/.source,[_]),alias:"keyword"},"attribute-arguments":{pattern:r(/\(<<0>>*\)/.source,[C]),inside:e.languages.csharp},"class-name":{pattern:RegExp(g),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var I=/:[^}\r\n]+/.source,P=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[T]),2),R=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[P,I]),L=n(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[O]),2),D=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[L,I]);function B(t,n){return{interpolation:{pattern:r(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[t]),lookbehind:!0,inside:{"format-string":{pattern:r(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[n,I]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:r(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[R]),lookbehind:!0,greedy:!0,inside:B(R,P)},{pattern:r(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[D]),lookbehind:!0,greedy:!0,inside:B(D,L)}],char:{pattern:RegExp(S),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp}(Prism)},251:()=>{!function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(Prism)},46:()=>{Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete Prism.languages.go["class-name"]},57:()=>{!function(e){function t(e){return RegExp("(^(?:"+e+"):[ \t]*(?![ \t]))[^]+","i")}e.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:t(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:e.languages.csp},{pattern:t(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:e.languages.hpkp},{pattern:t(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:e.languages.hsts},{pattern:t(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var r,n=e.languages,o={"application/javascript":n.javascript,"application/json":n.json||n.javascript,"application/xml":n.xml,"text/xml":n.xml,"text/html":n.html,"text/css":n.css,"text/plain":n.plain},a={"application/json":!0,"application/xml":!0};function i(e){var t=e.replace(/^[a-z]+\//,"");return"(?:"+e+"|\\w+/(?:[\\w.-]+\\+)+"+t+"(?![+\\w.-]))"}for(var s in o)if(o[s]){r=r||{};var l=a[s]?i(s):s;r[s.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+l+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:o[s]}}r&&e.languages.insertBefore("http","header",r)}(Prism)},503:()=>{!function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,r=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,n={pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[n,{pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:n.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+r+/[A-Z]\w*\b/.source),lookbehind:!0,inside:n.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":n,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+r+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:n.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+r+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:n.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism)},277:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},366:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},358:()=>{!function(e){var t=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,n="(?:"+r.source+"(?:[ \t]+"+t.source+")?|"+t.source+"(?:[ \t]+"+r.source+")?)",o=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,(function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source})),a=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(e,t){t=(t||"").replace(/m/g,"")+"m";var r=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,(function(){return n})).replace(/<<value>>/g,(function(){return e}));return RegExp(r,t)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,(function(){return n}))),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,(function(){return n})).replace(/<<key>>/g,(function(){return"(?:"+o+"|"+a+")"}))),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(a),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(Prism)},660:(e,t,r)=>{var n=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,n={},o={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof a?new a(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++r}),e.__id},clone:function e(t,r){var n,a;switch(r=r||{},o.util.type(t)){case"Object":if(a=o.util.objId(t),r[a])return r[a];for(var i in n={},r[a]=n,t)t.hasOwnProperty(i)&&(n[i]=e(t[i],r));return n;case"Array":return a=o.util.objId(t),r[a]?r[a]:(n=[],r[a]=n,t.forEach((function(t,o){n[o]=e(t,r)})),n);default:return t}},getLanguage:function(e){for(;e;){var r=t.exec(e.className);if(r)return r[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,r){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+r)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==e)return t[r]}return null}},isActive:function(e,t,r){for(var n="no-"+t;e;){var o=e.classList;if(o.contains(t))return!0;if(o.contains(n))return!1;e=e.parentElement}return!!r}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(e,t){var r=o.util.clone(o.languages[e]);for(var n in t)r[n]=t[n];return r},insertBefore:function(e,t,r,n){var a=(n=n||o.languages)[e],i={};for(var s in a)if(a.hasOwnProperty(s)){if(s==t)for(var l in r)r.hasOwnProperty(l)&&(i[l]=r[l]);r.hasOwnProperty(s)||(i[s]=a[s])}var c=n[e];return n[e]=i,o.languages.DFS(o.languages,(function(t,r){r===c&&t!=e&&(this[t]=i)})),i},DFS:function e(t,r,n,a){a=a||{};var i=o.util.objId;for(var s in t)if(t.hasOwnProperty(s)){r.call(t,s,t[s],n||s);var l=t[s],c=o.util.type(l);"Object"!==c||a[i(l)]?"Array"!==c||a[i(l)]||(a[i(l)]=!0,e(l,r,s,a)):(a[i(l)]=!0,e(l,r,null,a))}}},plugins:{},highlightAll:function(e,t){o.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,r){var n={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),o.hooks.run("before-all-elements-highlight",n);for(var a,i=0;a=n.elements[i++];)o.highlightElement(a,!0===t,n.callback)},highlightElement:function(t,r,n){var a=o.util.getLanguage(t),i=o.languages[a];o.util.setLanguage(t,a);var s=t.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&o.util.setLanguage(s,a);var l={element:t,language:a,grammar:i,code:t.textContent};function c(e){l.highlightedCode=e,o.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,o.hooks.run("after-highlight",l),o.hooks.run("complete",l),n&&n.call(l.element)}if(o.hooks.run("before-sanity-check",l),(s=l.element.parentElement)&&"pre"===s.nodeName.toLowerCase()&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!l.code)return o.hooks.run("complete",l),void(n&&n.call(l.element));if(o.hooks.run("before-highlight",l),l.grammar)if(r&&e.Worker){var p=new Worker(o.filename);p.onmessage=function(e){c(e.data)},p.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else c(o.highlight(l.code,l.grammar,l.language));else c(o.util.encode(l.code))},highlight:function(e,t,r){var n={code:e,grammar:t,language:r};if(o.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=o.tokenize(n.code,n.grammar),o.hooks.run("after-tokenize",n),a.stringify(o.util.encode(n.tokens),n.language)},tokenize:function(e,t){var r=t.rest;if(r){for(var n in r)t[n]=r[n];delete t.rest}var o=new l;return c(o,o.head,e),s(e,o,t,o.head,0),function(e){for(var t=[],r=e.head.next;r!==e.tail;)t.push(r.value),r=r.next;return t}(o)},hooks:{all:{},add:function(e,t){var r=o.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=o.hooks.all[e];if(r&&r.length)for(var n,a=0;n=r[a++];)n(t)}},Token:a};function a(e,t,r,n){this.type=e,this.content=t,this.alias=r,this.length=0|(n||"").length}function i(e,t,r,n){e.lastIndex=t;var o=e.exec(r);if(o&&n&&o[1]){var a=o[1].length;o.index+=a,o[0]=o[0].slice(a)}return o}function s(e,t,r,n,l,u){for(var d in r)if(r.hasOwnProperty(d)&&r[d]){var h=r[d];h=Array.isArray(h)?h:[h];for(var f=0;f<h.length;++f){if(u&&u.cause==d+","+f)return;var m=h[f],y=m.inside,g=!!m.lookbehind,v=!!m.greedy,b=m.alias;if(v&&!m.pattern.global){var x=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,x+"g")}for(var w=m.pattern||m,$=n.next,k=l;$!==t.tail&&!(u&&k>=u.reach);k+=$.value.length,$=$.next){var S=$.value;if(t.length>e.length)return;if(!(S instanceof a)){var A,E=1;if(v){if(!(A=i(w,k,e,g))||A.index>=e.length)break;var O=A.index,T=A.index+A[0].length,C=k;for(C+=$.value.length;O>=C;)C+=($=$.next).value.length;if(k=C-=$.value.length,$.value instanceof a)continue;for(var _=$;_!==t.tail&&(C<T||"string"==typeof _.value);_=_.next)E++,C+=_.value.length;E--,S=e.slice(k,C),A.index-=k}else if(!(A=i(w,0,S,g)))continue;O=A.index;var j=A[0],I=S.slice(0,O),P=S.slice(O+j.length),R=k+S.length;u&&R>u.reach&&(u.reach=R);var L=$.prev;if(I&&(L=c(t,L,I),k+=I.length),p(t,L,E),$=c(t,L,new a(d,y?o.tokenize(j,y):j,b,j)),P&&c(t,$,P),E>1){var D={cause:d+","+f,reach:R};s(e,t,r,$.prev,k,D),u&&D.reach>u.reach&&(u.reach=D.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,r){var n=t.next,o={value:r,prev:t,next:n};return t.next=o,n.prev=o,e.length++,o}function p(e,t,r){for(var n=t.next,o=0;o<r&&n!==e.tail;o++)n=n.next;t.next=n,n.prev=t,e.length-=o}if(e.Prism=o,a.stringify=function e(t,r){if("string"==typeof t)return t;if(Array.isArray(t)){var n="";return t.forEach((function(t){n+=e(t,r)})),n}var a={type:t.type,content:e(t.content,r),tag:"span",classes:["token",t.type],attributes:{},language:r},i=t.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(a.classes,i):a.classes.push(i)),o.hooks.run("wrap",a);var s="";for(var l in a.attributes)s+=" "+l+'="'+(a.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+s+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(o.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var r=JSON.parse(t.data),n=r.language,a=r.code,i=r.immediateClose;e.postMessage(o.highlight(a,o.languages[n],n)),i&&e.close()}),!1),o):o;var u=o.util.currentScript();function d(){o.manual||o.highlightAll()}if(u&&(o.filename=u.src,u.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var h=document.readyState;"loading"===h||"interactive"===h&&u&&u.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return o}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==r.g&&(r.g.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var a={};a[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:o},n.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(e,t){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(void 0!==n&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",r='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';n.hooks.add("before-highlightall",(function(e){e.selector+=", "+r})),n.hooks.add("before-sanity-check",(function(o){var a=o.element;if(a.matches(r)){o.code="",a.setAttribute(t,"loading");var i=a.appendChild(document.createElement("CODE"));i.textContent="Loading\u2026";var s=a.getAttribute("data-src"),l=o.language;if("none"===l){var c=(/\.(\w+)$/.exec(s)||[,"none"])[1];l=e[c]||c}n.util.setLanguage(i,l),n.util.setLanguage(a,l);var p=n.plugins.autoloader;p&&p.loadLanguages(l),function(e,t,r){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){4==n.readyState&&(n.status<400&&n.responseText?t(n.responseText):n.status>=400?r("\u2716 Error "+n.status+" while fetching file: "+n.statusText):r("\u2716 Error: File does not exist or is empty"))},n.send(null)}(s,(function(e){a.setAttribute(t,"loaded");var r=function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var r=Number(t[1]),n=t[2],o=t[3];return n?o?[r,Number(o)]:[r,void 0]:[r,r]}}(a.getAttribute("data-range"));if(r){var o=e.split(/\r\n?|\n/g),s=r[0],l=null==r[1]?o.length:r[1];s<0&&(s+=o.length),s=Math.max(0,Math.min(s-1,o.length)),l<0&&(l+=o.length),l=Math.max(0,Math.min(l,o.length)),e=o.slice(s,l).join("\n"),a.hasAttribute("data-start")||a.setAttribute("data-start",String(s+1))}i.textContent=e,n.highlightElement(i)}),(function(e){a.setAttribute(t,"failed"),i.textContent=e}))}})),n.plugins.fileHighlight={highlight:function(e){for(var t,o=(e||document).querySelectorAll(r),a=0;t=o[a++];)n.highlightElement(t)}};var o=!1;n.fileHighlight=function(){o||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),o=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}}()}},n={};function o(e){var t=n[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var a=n[e]={exports:{}};try{var i={id:e,module:a,factory:r[e],require:o};o.i.forEach((function(e){e(i)})),a=i.module,i.factory.call(a.exports,a,a.exports,i.require)}catch(e){throw a.error=e,e}return a.exports}o.m=r,o.c=n,o.i=[],o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.hu=e=>e+"."+o.h()+".hot-update.js",o.hmrF=()=>"main."+o.h()+".hot-update.json",o.h=()=>"9cfd848bcce7d0ae5b1a",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="rapidoc:",o.l=(r,n,a,i)=>{if(e[r])e[r].push(n);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var u=c[p];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[n];var d=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}},(()=>{var e,t,r,n={},a=o.c,i=[],s=[],l="idle",c=0,p=[];function u(e){l=e;for(var t=[],r=0;r<s.length;r++)t[r]=s[r].call(null,e);return Promise.all(t)}function d(){0==--c&&u("ready").then((function(){if(0===c){var e=p;p=[];for(var t=0;t<e.length;t++)e[t]()}}))}function h(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return u("check").then(o.hmrM).then((function(r){return r?u("prepare").then((function(){var n=[];return t=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,a){return o.hmrC[a](r.c,r.r,r.m,e,t,n),e}),[])).then((function(){return t=function(){return e?m(e):u("ready").then((function(){return n}))},0===c?t():new Promise((function(e){p.push((function(){e(t())}))}));var t}))})):u(y()?"ready":"idle").then((function(){return null}))}))}function f(e){return"ready"!==l?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+l+")")})):m(e)}function m(e){e=e||{},y();var n=t.map((function(t){return t(e)}));t=void 0;var o=n.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var a=u("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var i,s=u("apply"),l=function(e){i||(i=e)},c=[];return n.forEach((function(e){if(e.apply){var t=e.apply(l);if(t)for(var r=0;r<t.length;r++)c.push(t[r])}})),Promise.all([a,s]).then((function(){return i?u("fail").then((function(){throw i})):r?m(e).then((function(e){return c.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):u("idle").then((function(){return c}))}))}function y(){if(r)return t||(t=[]),Object.keys(o.hmrI).forEach((function(e){r.forEach((function(r){o.hmrI[e](r,t)}))})),r=void 0,!0}o.hmrD=n,o.i.push((function(p){var m,y,g,v,b=p.module,x=function(t,r){var n=a[r];if(!n)return t;var o=function(o){if(n.hot.active){if(a[o]){var s=a[o].parents;-1===s.indexOf(r)&&s.push(r)}else i=[r],e=o;-1===n.children.indexOf(o)&&n.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+r),i=[];return t(o)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var p in t)Object.prototype.hasOwnProperty.call(t,p)&&"e"!==p&&Object.defineProperty(o,p,s(p));return o.e=function(e){return function(e){switch(l){case"ready":u("prepare");case"prepare":return c++,e.then(d,d),e;default:return e}}(t.e(e))},o}(p.require,p.id);b.hot=(m=p.id,y=b,v={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){i=y.parents.slice(),e=g?void 0:m,o(m)},active:!0,accept:function(e,t,r){if(void 0===e)v._selfAccepted=!0;else if("function"==typeof e)v._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)v._acceptedDependencies[e[n]]=t||function(){},v._acceptedErrorHandlers[e[n]]=r;else v._acceptedDependencies[e]=t||function(){},v._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)v._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)v._declinedDependencies[e[t]]=!0;else v._declinedDependencies[e]=!0},dispose:function(e){v._disposeHandlers.push(e)},addDisposeHandler:function(e){v._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=v._disposeHandlers.indexOf(e);t>=0&&v._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":t=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,t)})),u("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,t)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(m)}},check:h,apply:f,status:function(e){if(!e)return l;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var t=s.indexOf(e);t>=0&&s.splice(t,1)},data:n[m]},e=void 0,v),b.parents=i,b.children=[],i=[],p.require=x})),o.hmrC={},o.hmrI={}})(),o.p="",(()=>{var e,t,r,n,a,i=o.hmrS_jsonp=o.hmrS_jsonp||{179:0},s={};function l(t,r){return e=r,new Promise(((e,r)=>{s[t]=e;var n=o.p+o.hu(t),a=new Error;o.l(n,(e=>{if(s[t]){s[t]=void 0;var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;a.message="Loading hot update chunk "+t+" failed.\n("+n+": "+o+")",a.name="ChunkLoadError",a.type=n,a.request=o,r(a)}}))}))}function c(e){function s(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var a=n.pop(),i=a.id,s=a.chain,c=o.c[i];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var p=0;p<c.parents.length;p++){var u=c.parents[p],d=o.c[u];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(d.hot._acceptedDependencies[i]?(r[u]||(r[u]=[]),l(r[u],[i])):(delete r[u],t.push(u),n.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}o.f&&delete o.f.jsonpHmr,t=void 0;var c={},p=[],u={},d=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var h in r)if(o.o(r,h)){var f,m=r[h],y=!1,g=!1,v=!1,b="";switch((f=m?s(h):{type:"disposed",moduleId:h}).chain&&(b="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":e.onDeclined&&e.onDeclined(f),e.ignoreDeclined||(y=new Error("Aborted because of self decline: "+f.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(f),e.ignoreDeclined||(y=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(f),e.ignoreUnaccepted||(y=new Error("Aborted because "+h+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(f),g=!0;break;case"disposed":e.onDisposed&&e.onDisposed(f),v=!0;break;default:throw new Error("Unexception type "+f.type)}if(y)return{error:y};if(g)for(h in u[h]=m,l(p,f.outdatedModules),f.outdatedDependencies)o.o(f.outdatedDependencies,h)&&(c[h]||(c[h]=[]),l(c[h],f.outdatedDependencies[h]));v&&(l(p,[f.moduleId]),u[h]=d)}r=void 0;for(var x,w=[],$=0;$<p.length;$++){var k=p[$],S=o.c[k];S&&(S.hot._selfAccepted||S.hot._main)&&u[k]!==d&&!S.hot._selfInvalidated&&w.push({module:k,require:S.hot._requireSelf,errorHandler:S.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var t,r=p.slice();r.length>0;){var a=r.pop(),s=o.c[a];if(s){var l={},u=s.hot._disposeHandlers;for($=0;$<u.length;$++)u[$].call(null,l);for(o.hmrD[a]=l,s.hot.active=!1,delete o.c[a],delete c[a],$=0;$<s.children.length;$++){var d=o.c[s.children[$]];d&&(e=d.parents.indexOf(a))>=0&&d.parents.splice(e,1)}}}for(var h in c)if(o.o(c,h)&&(s=o.c[h]))for(x=c[h],$=0;$<x.length;$++)t=x[$],(e=s.children.indexOf(t))>=0&&s.children.splice(e,1)},apply:function(t){for(var r in u)o.o(u,r)&&(o.m[r]=u[r]);for(var n=0;n<a.length;n++)a[n](o);for(var i in c)if(o.o(c,i)){var s=o.c[i];if(s){x=c[i];for(var l=[],d=[],h=[],f=0;f<x.length;f++){var m=x[f],y=s.hot._acceptedDependencies[m],g=s.hot._acceptedErrorHandlers[m];if(y){if(-1!==l.indexOf(y))continue;l.push(y),d.push(g),h.push(m)}}for(var v=0;v<l.length;v++)try{l[v].call(null,x)}catch(r){if("function"==typeof d[v])try{d[v](r,{moduleId:i,dependencyId:h[v]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:h[v],error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:h[v],error:r}),e.ignoreErrored||t(r)}}}for(var b=0;b<w.length;b++){var $=w[b],k=$.module;try{$.require(k)}catch(r){if("function"==typeof $.errorHandler)try{$.errorHandler(r,{moduleId:k,module:o.c[k]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:k,error:r}),e.ignoreErrored||t(r)}}return p}}}self.webpackHotUpdaterapidoc=(t,n,i)=>{for(var l in n)o.o(n,l)&&(r[l]=n[l],e&&e.push(l));i&&a.push(i),s[t]&&(s[t](),s[t]=void 0)},o.hmrI.jsonp=function(e,t){r||(r={},a=[],n=[],t.push(c)),o.o(r,e)||(r[e]=o.m[e])},o.hmrC.jsonp=function(e,s,p,u,d,h){d.push(c),t={},n=s,r=p.reduce((function(e,t){return e[t]=!1,e}),{}),a=[],e.forEach((function(e){o.o(i,e)&&void 0!==i[e]?(u.push(l(e,h)),t[e]=!0):t[e]=!1})),o.f&&(o.f.jsonpHmr=function(e,r){t&&o.o(t,e)&&!t[e]&&(r.push(l(e)),t[e]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),o(448)})();