!function(t){function e(e){for(var n,r,i=e[0],u=e[1],l=0,a=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&a.push(o[r][0]),o[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(c&&c(e);a.length;)a.shift()()}function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={1:0};n.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.src=function(t){return n.p+""+({0:"vendors~route-analysis~route-deduction~route-income~route-taxcredit",3:"route-analysis",4:"route-basic",5:"route-deduction",6:"route-home",7:"route-income",8:"route-taxcredit"}[t]||t)+".chunk."+{0:"58833",3:"5fa2a",4:"df0ae",5:"c3018",6:"f6d53",7:"62079",8:"83c86"}[t]+".js"}(t);var c=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(a);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,n[1](c)}o[t]=void 0}};var a=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;n(n.s="mdyV")}({Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var s=c[a].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var f=Math.max(t.length,e.length),_=0;_<f;_++)if(e[_]&&":"===e[_].charAt(0)){var p=e[_].replace(/(^:|[+*?]+$)/g,""),h=(e[_].match(/[+*?]+$/)||y)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),m=t[_]||"";if(!m&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(u[p]=decodeURIComponent(m),d||v){u[p]=t.slice(_).map(decodeURIComponent).join("/");break}}else if(e[_]!==t[_]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(c).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function c(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function a(){var t;return""+((t=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(t.search||"")}function s(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=b.length;e--;)if(b[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),m&&m[e]?m[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),f(t)}function f(t){for(var e=!1,n=0;n<b.length;n++)!0===b[n].routeTo(t)&&(e=!0);for(var r=g.length;r--;)g[r](t);return e}function _(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return s(e)}}function p(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return _(t.currentTarget||t.target||this),h(t)}function h(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function d(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(_(e))return h(t)}}while(e=e.parentNode)}}n.r(e),n.d(e,"subscribers",(function(){return g})),n.d(e,"getCurrentUrl",(function(){return a})),n.d(e,"route",(function(){return s})),n.d(e,"Router",(function(){return O})),n.d(e,"Route",(function(){return j})),n.d(e,"Link",(function(){return x})),n.d(e,"exec",(function(){return o}));var v=n("hosL"),y={},m=null,b=[],g=[],k={},C=!1,O=function(t){function e(e){t.call(this,e),e.history&&(m=e.history),this.state={url:e.url||a()},C||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){f(a())})),addEventListener("click",d)),C=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){b.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;m&&(this.unlisten=m.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),b.splice(b.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},e}(v.Component),x=function(t){return Object(v.createElement)("a",r({onClick:p},t))},j=function(t){return Object(v.createElement)(t.component,t)};O.subscribers=g,O.getCurrentUrl=a,O.route=s,O.Router=O,O.Route=j,O.Link=x,O.exec=o,e.default=O},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?M.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===l[i]&&(l[i]=t.defaultProps[i]);return u(t,l,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++E:o};return null==o&&null!=T.vnode&&T.vnode(i),i}function l(){return{current:null}}function c(t){return t.children}function a(t,e){this.props=t,this.context=e}function s(t,e){if(null==e)return t.__?s(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?s(t):null}function f(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return f(t)}}function _(t){(!t.__d&&(t.__d=!0)&&D.push(t)&&!p.__r++||N!==T.debounceRendering)&&((N=T.debounceRendering)||setTimeout)(p)}function p(){for(var t;p.__r=D.length;)t=D.sort((function(t,e){return t.__v.__b-e.__v.__b})),D=[],t.some((function(t){var e,n,o,i,u,l;t.__d&&(u=(i=(e=t).__v).__e,(l=e.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,C(l,i,o,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?s(i):u,i.__h),O(n,i),i.__e!=u&&f(i)))}))}function h(t,e,n,r,o,i,l,a,f,_){var p,h,v,m,b,g,k,O=r&&r.__k||F,x=O.length;for(n.__k=[],p=0;p<e.length;p++)if(null!=(m=n.__k[p]=null==(m=e[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(c,{children:m},null,null,null):m.__b>0?u(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=O[p])||v&&m.key==v.key&&m.type===v.type)O[p]=void 0;else for(h=0;h<x;h++){if((v=O[h])&&m.key==v.key&&m.type===v.type){O[h]=void 0;break}v=null}C(t,m,v=v||W,o,i,l,a,f,_),b=m.__e,(h=m.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(h,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&m.__k===v.__k?m.__d=f=d(m,f,t):f=y(t,m,v,O,b,f),"function"==typeof n.type&&(n.__d=f)):f&&v.__e==f&&f.parentNode!=t&&(f=s(v))}for(n.__e=g,p=x;p--;)null!=O[p]&&w(O[p],O[p]);if(k)for(p=0;p<k.length;p++)j(k[p],k[++p],k[++p])}function d(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e="function"==typeof r.type?d(r,e,n):y(n,r,r,o,r.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function y(t,e,n,r,o,i){var u,l,c;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(l=i,c=0;(l=l.nextSibling)&&c<r.length;c+=1)if(l==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||H.test(e)?n:n+"px"}function b(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||m(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||m(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?k:g,i):t.removeEventListener(e,i?k:g,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null==n||!1===n&&-1==e.indexOf("-")?t.removeAttribute(e):t.setAttribute(e,n))}}function g(t){this.l[t.type+!1](T.event?T.event(t):t)}function k(t){this.l[t.type+!0](T.event?T.event(t):t)}function C(t,e,n,o,i,u,l,s,f){var _,p,d,v,y,m,b,g,k,C,O,j,w,S,L,A=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(f=n.__h,s=e.__e=n.__e,e.__h=null,u=[s]),(_=T.__b)&&_(e);try{t:if("function"==typeof A){if(g=e.props,k=(_=A.contextType)&&o[_.__c],C=_?k?k.props.value:_.__:o,n.__c?b=(p=e.__c=n.__c).__=p.__E:("prototype"in A&&A.prototype.render?e.__c=p=new A(g,C):(e.__c=p=new a(g,C),p.constructor=A,p.render=P),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=C,p.__n=o,d=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,A.getDerivedStateFromProps(g,p.__s))),v=p.props,y=p.state,d)null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==A.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,C)||e.__v===n.__v){for(p.props=g,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),O=0;O<p._sb.length;O++)p.__h.push(p._sb[O]);p._sb=[],p.__h.length&&l.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}if(p.context=C,p.props=g,p.__v=e,p.__P=t,j=T.__r,w=0,"prototype"in A&&A.prototype.render){for(p.state=p.__s,p.__d=!1,j&&j(e),_=p.render(p.props,p.state,p.context),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[]}else do{p.__d=!1,j&&j(e),_=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++w<25);p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),L=null!=_&&_.type===c&&null==_.key?_.props.children:_,h(t,Array.isArray(L)?L:[L],e,n,o,i,u,l,s,f),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=x(n.__e,e,n,o,i,u,l,f);(_=T.diffed)&&_(e)}catch(t){e.__v=null,(f||null!=u)&&(e.__e=s,e.__h=!!f,u[u.indexOf(s)]=null),T.__e(t,e,n)}}function O(t,e){T.__c&&T.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){T.__e(t,e.__v)}}))}function x(t,e,n,r,i,u,l,c){var a,f,_,p=n.props,d=e.props,v=e.type,y=0;if("svg"===v&&(i=!0),null!=u)for(;y<u.length;y++)if((a=u[y])&&"setAttribute"in a==!!v&&(v?a.localName===v:3===a.nodeType)){t=a,u[y]=null;break}if(null==t){if(null===v)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),u=null,c=!1}if(null===v)p===d||c&&t.data===d||(t.data=d);else{if(u=u&&M.call(t.childNodes),f=(p=n.props||W).dangerouslySetInnerHTML,_=d.dangerouslySetInnerHTML,!c){if(null!=u)for(p={},y=0;y<t.attributes.length;y++)p[t.attributes[y].name]=t.attributes[y].value;(_||f)&&(_&&(f&&_.__html==f.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||b(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||b(t,i,e[i],n[i],r)}(t,d,p,i,c),_)e.__k=[];else if(y=e.props.children,h(t,Array.isArray(y)?y:[y],e,n,r,i&&"foreignObject"!==v,u,l,u?u[0]:n.__k&&s(n,0),c),null!=u)for(y=u.length;y--;)null!=u[y]&&o(u[y]);c||("value"in d&&void 0!==(y=d.value)&&(y!==t.value||"progress"===v&&!y||"option"===v&&y!==p.value)&&b(t,"value",y,p.value,!1),"checked"in d&&void 0!==(y=d.checked)&&y!==t.checked&&b(t,"checked",y,p.checked,!1))}return t}function j(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){T.__e(t,n)}}function w(t,e,n){var r,i;if(T.unmount&&T.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||j(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){T.__e(t,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&w(r[i],e,n||"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__=t.__e=t.__d=void 0}function P(t,e,n){return this.constructor(t,n)}function S(t,e,n){var r,o,u;T.__&&T.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,u=[],C(e,t=(!r&&n||e).__k=i(c,null,[t]),o||W,W,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?M.call(e.childNodes):null,u,!r&&n?n:o?o.__e:e.firstChild,r),O(u,t)}function L(t,e){S(t,e,L)}function A(t,e,n){var o,i,l,c=r({},t.props);for(l in e)"key"==l?o=e[l]:"ref"==l?i=e[l]:c[l]=e[l];return arguments.length>2&&(c.children=arguments.length>3?M.call(arguments,2):n),u(t.type,c,o||t.key,i||t.ref,null)}function U(t,e){var n={__c:e="__cC"+I++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(_)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"Component",(function(){return a})),n.d(e,"Fragment",(function(){return c})),n.d(e,"cloneElement",(function(){return A})),n.d(e,"createContext",(function(){return U})),n.d(e,"createElement",(function(){return i})),n.d(e,"createRef",(function(){return l})),n.d(e,"h",(function(){return i})),n.d(e,"hydrate",(function(){return L})),n.d(e,"isValidElement",(function(){return R})),n.d(e,"options",(function(){return T})),n.d(e,"render",(function(){return S})),n.d(e,"toChildArray",(function(){return v}));var M,T,E,R,D,N,I,W={},F=[],H=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;M=F.slice,T={__e:function(t,e,n,r){for(var o,i,u;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),u=o.__d),u)return o.__E=o}catch(e){t=e}throw t}},E=0,R=function(t){return null!=t&&void 0===t.constructor},a.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this._sb.push(e),_(this))},a.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_(this))},a.prototype.render=c,D=[],p.__r=0,I=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.h,i=r.render,u=r.hydrate,l=function(t){return t&&t.default?t.default:t},c=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(c(n.p)+"sw.js"),"function"==typeof l(n("qVkA"))){var a=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=l(n("qVkA")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var s={preRenderData:e},f=e.url?c(e.url):"";(u&&f===c(location.pathname)?u:i)(o(t,{CLI_DATA:s}),document.body,a)}()}},"ox/y":function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==r(e)&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=n("hosL"),l=n("Y3FI"),c=e.Match=function(t){function e(){for(var e,n,r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return e=n=o(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},o(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+r(e));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){l.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){l.subscribers.splice(l.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,l.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,l.exec)(n,t.path,{})})},e}(u.Component),a=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,u.h)(c,{path:n||r.href},(function(t){return(0,u.h)(l.Link,i({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=a,e.default=c,c.Link=a},qVkA:function(t,e,n){"use strict";function r(t,e){if("string"==typeof t.type)return null;var n=t.__;if(n){var o=n.__k;if(o){Array.isArray(o)||(o=[o]);var i=o.indexOf(t);-1===i&&(i=o.length);for(var u=i;u--;){var l=o[u],c=l&&l.__e||r(l,!0);if(c)return c}}return e?void 0:r(n)}}function o(t){function e(){var e=this;i.Component.call(this),n||(this.componentWillMount=function(){t((function(t){n=t&&t.default||t,e.setState({})}))},this.shouldComponentUpdate=function(){return null!=n}),this.render=function(t){if(n)return Object(i.h)(n,t);var o=r(e.__v),u=o&&o.nextSibling||(e.__P||e._parentDom).firstChild;return u&&Object(i.h)(u.localName,{dangerouslySetInnerHTML:f})}}var n;return e.preload=t,(e.prototype=new i.Component).constructor=e,e}n.r(e);var i=n("hosL"),u=n("Y3FI"),l=n("ox/y"),c="header__OVZyn",a="active__r+Z6z",s=function(){return Object(i.h)("header",{class:c},Object(i.h)("h1",null,Object(i.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-rocket-takeoff",viewBox:"0 0 16 16"},Object(i.h)("path",{d:"M9.752 6.193c.599.6 1.73.437 2.528-.362.798-.799.96-1.932.362-2.531-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532Z"}),Object(i.h)("path",{d:"M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9.42 9.42 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a9.556 9.556 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093.067.017.12.033.16.045.184.06.279.13.351.295l.029.073a3.475 3.475 0 0 1 .157.721c.055.485.051 1.178-.159 2.065Zm-4.828 7.475.04-.04-.107 1.081a1.536 1.536 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a8.548 8.548 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006ZM5.205 5c-.625.626-.94 1.351-1.004 2.09a8.497 8.497 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107-.04.039Zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a2.835 2.835 0 0 0-.045-.283 3.078 3.078 0 0 0-.3-.041Z"}),Object(i.h)("path",{d:"M7.009 12.139a7.632 7.632 0 0 1-1.804-1.352A7.568 7.568 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z"}))," "),Object(i.h)("nav",null,Object(i.h)(l.Link,{activeClassName:a,href:"/"},"Home"),Object(i.h)(l.Link,{activeClassName:a,href:"/basic"},"Basic Info"),Object(i.h)(l.Link,{activeClassName:a,href:"/income"},"Income"),Object(i.h)(l.Link,{activeClassName:a,href:"/deduction"},"Deduction"),Object(i.h)(l.Link,{activeClassName:a,href:"/taxcredit"},"Tax Credit")))},f={},_=o((function(t){n.e(6).then(function(){var e=n("FDtd");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),p=o((function(t){n.e(4).then(function(){var e=n("TsYS");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),h=o((function(t){Promise.all([n.e(0),n.e(7)]).then(function(){var e=n("LveT");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),d=o((function(t){Promise.all([n.e(0),n.e(5)]).then(function(){var e=n("UPth");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),v=o((function(t){Promise.all([n.e(0),n.e(8)]).then(function(){var e=n("s/9+");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),y=o((function(t){Promise.all([n.e(0),n.e(3)]).then(function(){var e=n("UrTa");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}));e.default=function(){return Object(i.h)("div",{id:"app"},Object(i.h)(s,null),Object(i.h)(u.Router,null,Object(i.h)(u.Route,{path:"/",component:_}),Object(i.h)(u.Route,{path:"/basic/",component:p}),Object(i.h)(u.Route,{path:"/income/",component:h}),Object(i.h)(u.Route,{path:"/deduction/",component:d}),Object(i.h)(u.Route,{path:"/taxcredit/",component:v}),Object(i.h)(u.Route,{path:"/analysis/",component:y})))}}});
//# sourceMappingURL=bundle.d5100.js.map