"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[367],{367:function(e,t,n){n.r(t),n.d(t,{default:function(){return ue}});var A=n(439),r=n(791),o=n(87),a=n(689),i=n(335),s=n(142);function c(e,t,n){return(t=(0,s.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,A,r=function(e,t){if(null==e)return{};var n,A,r={},o=Object.keys(e);for(A=0;A<o.length;A++)n=o[A],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(A=0;A<o.length;A++)n=o[A],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=n(433);function f(e){var t,n,A="";if("string"==typeof e||"number"==typeof e)A+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=f(e[t]))&&(A&&(A+=" "),A+=n);else for(t in e)e[t]&&(A&&(A+=" "),A+=t);return A}var v=function(){for(var e,t,n=0,A="";n<arguments.length;)(e=arguments[n++])&&(t=f(e))&&(A&&(A+=" "),A+=t);return A},m=["theme","type"],g=["delay","staleId"],h=function(e){return"number"==typeof e&&!isNaN(e)},y=function(e){return"string"==typeof e},b=function(e){return"function"==typeof e},T=function(e){return y(e)||b(e)?e:null},E=function(e){return(0,r.isValidElement)(e)||y(e)||b(e)||h(e)};function x(e){var t=e.enter,n=e.exit,A=e.appendPosition,o=void 0!==A&&A,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var A=e.children,a=e.position,s=e.preventExitTransition,u=e.done,l=e.nodeRef,d=e.isIn,f=o?"".concat(t,"--").concat(a):t,v=o?"".concat(n,"--").concat(a):n,m=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e,t=l.current,n=f.split(" "),A=function e(A){var r;A.target===l.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===m.current&&"animationcancel"!==A.type&&(r=t.classList).remove.apply(r,(0,p.Z)(n)))};(e=t.classList).add.apply(e,(0,p.Z)(n)),t.addEventListener("animationend",A),t.addEventListener("animationcancel",A)}),[]),(0,r.useEffect)((function(){var e=l.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var A=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=A+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()};d||(s?t():(m.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[d]),r.createElement(r.Fragment,null,A)}}function C(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var O={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(A){var r=setTimeout((function(){A.apply(void 0,(0,p.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},I=function(e){var t=e.theme,n=e.type,A=d(e,m);return r.createElement("svg",l({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},A))},w={info:function(e){return r.createElement(I,l({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(I,l({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(I,l({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(I,l({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function P(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,A.Z)(t,2)[1],o=(0,r.useState)([]),a=(0,A.Z)(o,2),i=a[0],s=a[1],c=(0,r.useRef)(null),u=(0,r.useRef)(new Map).current,f=function(e){return-1!==i.indexOf(e)},v=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:function(e){return u.get(e)}}).current;function m(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function x(e){s((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function I(){var e=v.queue.shift();N(e.toastContent,e.toastProps,e.staleId)}function P(e,t){var A=t.delay,o=t.staleId,a=d(t,g);if(E(e)&&!function(e){return!c.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||u.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,s=a.updateId,p=a.data,f=v.props,m=function(){return x(i)},P=null==s;P&&v.count++;var Z,R,L=l(l(l({},f),{},{style:f.toastStyle,key:v.toastKey++},a),{},{toastId:i,updateId:s,data:p,closeToast:m,isIn:!1,className:T(a.className||f.toastClassName),bodyClassName:T(a.bodyClassName||f.bodyClassName),progressClassName:T(a.progressClassName||f.progressClassName),autoClose:!a.isLoading&&(Z=a.autoClose,R=f.autoClose,!1===Z||h(Z)&&Z>0?Z:R),deleteToast:function(){var e=C(u.get(i),"removed");u.delete(i),O.emit(4,e);var t=v.queue.length;if(v.count=null==i?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var A=null==i?v.props.limit:1;if(1===t||1===A)v.displayedToast++,I();else{var r=A>t?t:A;v.displayedToast=r;for(var o=0;o<r;o++)I()}}else n()}});L.iconOut=function(e){var t=e.theme,n=e.type,A=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(b(o)?a=o(i):(0,r.isValidElement)(o)?a=(0,r.cloneElement)(o,i):y(o)||h(o)?a=o:A?a=w.spinner():function(e){return e in w}(n)&&(a=w[n](i))),a}(L),b(a.onOpen)&&(L.onOpen=a.onOpen),b(a.onClose)&&(L.onClose=a.onClose),L.closeButton=f.closeButton,!1===a.closeButton||E(a.closeButton)?L.closeButton=a.closeButton:!0===a.closeButton&&(L.closeButton=!E(f.closeButton)||f.closeButton);var z=e;(0,r.isValidElement)(e)&&!y(e.type)?z=(0,r.cloneElement)(e,{closeToast:m,toastProps:L,data:p}):b(e)&&(z=e({closeToast:m,toastProps:L,data:p})),f.limit&&f.limit>0&&v.count>f.limit&&P?v.queue.push({toastContent:z,toastProps:L,staleId:o}):h(A)?setTimeout((function(){N(z,L,o)}),A):N(z,L,o)}}function N(e,t,n){var A=t.toastId;n&&u.delete(n);var r={content:e,props:t};u.set(A,r),s((function(e){return[].concat((0,p.Z)(e),[A]).filter((function(e){return e!==n}))})),O.emit(4,C(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return v.containerId=e.containerId,O.cancelEmit(3).on(0,P).on(1,(function(e){return c.current&&x(e)})).on(5,m).emit(2,v),function(){u.clear(),O.emit(3,v)}}),[]),(0,r.useEffect)((function(){v.props=e,v.isToastActive=f,v.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,A=Array.from(u.values());return e.newestOnTop&&A.reverse(),A.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:c,isToastActive:f}}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Z(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function R(e){var t=(0,r.useState)(!1),n=(0,A.Z)(t,2),o=n[0],a=n[1],i=(0,r.useState)(!1),s=(0,A.Z)(i,2),c=s[0],u=s[1],l=(0,r.useRef)(null),d=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(e),f=e.autoClose,v=e.pauseOnHover,m=e.closeToast,g=e.onClick,h=e.closeOnClick;function y(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",O),document.addEventListener("touchmove",C),document.addEventListener("touchend",O);var n=l.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=N(t.nativeEvent),d.y=Z(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(d.boundingRect){var n=d.boundingRect,A=n.top,r=n.bottom,o=n.left,a=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=o&&d.x<=a&&d.y>=A&&d.y<=r?x():E()}}function E(){a(!0)}function x(){a(!1)}function C(t){var n=l.current;d.canDrag&&n&&(d.didMove=!0,o&&x(),d.x=N(t),d.y=Z(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function O(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",O);var t=l.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,r.useEffect)((function(){p.current=e})),(0,r.useEffect)((function(){return l.current&&l.current.addEventListener("d",E,{once:!0}),b(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;b(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",E),window.addEventListener("blur",x)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",x))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:y,onTouchStart:y,onMouseUp:T,onTouchEnd:T};return f&&v&&(I.onMouseEnter=x,I.onMouseLeave=E),h&&(I.onClick=function(e){g&&g(e),d.canCloseOnClick&&m()}),{playToast:E,pauseToast:x,isRunning:o,preventExitTransition:c,toastRef:l,eventHandlers:I}}function L(e){var t=e.closeToast,n=e.theme,A=e.ariaLabel,o=void 0===A?"close":A;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function z(e){var t=e.delay,n=e.isRunning,A=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,s=e.className,u=e.style,d=e.controlledProgress,p=e.progress,f=e.rtl,m=e.isIn,g=e.theme,h=i||d&&0===p,y=l(l({},u),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:h?0:1});d&&(y.transform="scaleX(".concat(p,")"));var T=v("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":f}),E=b(s)?s({rtl:f,type:a,defaultClassName:T}):v(T,s);return r.createElement("div",c({role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:E,style:y},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){m&&A()}))}var j=function(e){var t=R(e),n=t.isRunning,A=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,c=e.autoClose,u=e.onClick,d=e.type,p=e.hideProgressBar,f=e.closeToast,m=e.transition,g=e.position,h=e.className,y=e.style,T=e.bodyClassName,E=e.bodyStyle,x=e.progressClassName,C=e.progressStyle,O=e.updateId,I=e.role,w=e.progress,P=e.rtl,N=e.toastId,Z=e.deleteToast,j=e.isIn,k=e.isLoading,V=e.iconOut,S=e.closeOnClick,M=e.theme,q=v("Toastify__toast","Toastify__toast-theme--".concat(M),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":S}),U=b(h)?h({rtl:P,position:g,type:d,defaultClassName:q}):v(q,h),W=!!w||!c,H={closeToast:f,type:d,theme:M},K=null;return!1===i||(K=b(i)?i(H):(0,r.isValidElement)(i)?(0,r.cloneElement)(i,H):L(H)),r.createElement(m,{isIn:j,done:Z,position:g,preventExitTransition:A,nodeRef:o},r.createElement("div",l(l({id:N,onClick:u,className:U},a),{},{style:y,ref:o}),r.createElement("div",l(l({},j&&{role:I}),{},{className:b(T)?T({type:d}):v("Toastify__toast-body",T),style:E}),null!=V&&r.createElement("div",{className:v("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!k})},V),r.createElement("div",null,s)),K,r.createElement(z,l(l({},O&&!W?{key:"pb-".concat(O)}:{}),{},{rtl:P,theme:M,delay:c,isRunning:n,isIn:j,closeToast:f,hide:p,type:d,style:C,className:x,controlledProgress:W,progress:w||0}))))},k=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},V=x(k("bounce",!0)),S=(x(k("slide",!0)),x(k("zoom")),x(k("flip")),(0,r.forwardRef)((function(e,t){var n=P(e),A=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,c=e.rtl,u=e.containerId;function d(e){var t=v("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":c});return b(i)?i({position:e,rtl:c,defaultClassName:t}):v(t,T(i))}return(0,r.useEffect)((function(){t&&(t.current=o.current)}),[]),r.createElement("div",{ref:o,className:"Toastify",id:u},A((function(e,t){var n=t.length?l({},s):l(l({},s),{},{pointerEvents:"none"});return r.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var A=e.content,o=e.props;return r.createElement(j,l(l({},o),{},{isIn:a(o.toastId),style:l(l({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),A)})))})))})));S.displayName="ToastContainer",S.defaultProps={position:"top-right",transition:V,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,q=new Map,U=[],W=1;function H(){return""+W++}function K(e){return e&&(y(e.toastId)||h(e.toastId))?e.toastId:H()}function X(e,t){return q.size>0?O.emit(0,e,t):U.push({content:e,options:t}),t.toastId}function B(e,t){return l(l({},t),{},{type:t&&t.type||e,toastId:K(t)})}function D(e){return function(t,n){return X(t,B(e,n))}}function J(e,t){return X(e,B("default",t))}J.loading=function(e,t){return X(e,B("default",l({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},J.promise=function(e,t,n){var A,r=t.pending,o=t.error,a=t.success;r&&(A=y(r)?J.loading(r,n):J.loading(r.render,l(l({},n),r)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},s=function(e,t,r){if(null!=t){var o=l(l(l({type:e},i),n),{},{data:r}),a=y(t)?{render:t}:t;return A?J.update(A,l(l({},o),a)):J(a.render,l(l({},o),a)),r}J.dismiss(A)},c=b(e)?e():e;return c.then((function(e){return s("success",a,e)})).catch((function(e){return s("error",o,e)})),c},J.success=D("success"),J.info=D("info"),J.error=D("error"),J.warning=D("warning"),J.warn=J.warning,J.dark=function(e,t){return X(e,B("default",l({theme:"dark"},t)))},J.dismiss=function(e){q.size>0?O.emit(1,e):U=U.filter((function(t){return null!=e&&t.options.toastId!==e}))},J.clearWaitingQueue=function(e){return void 0===e&&(e={}),O.emit(5,e)},J.isActive=function(e){var t=!1;return q.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},J.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,A=q.get(n||M);return A&&A.getToast(e)}(e,t);if(n){var A=n.props,r=n.content,o=l(l(l({},A),t),{},{toastId:t.toastId||e,updateId:H()});o.toastId!==e&&(o.staleId=e);var a=o.render||r;delete o.render,X(a,o)}}),0)},J.done=function(e){J.update(e,{progress:1})},J.onChange=function(e){return O.on(4,e),function(){O.off(4,e)}},J.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},J.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},O.on(2,(function(e){M=e.containerId||e,q.set(M,e),U.forEach((function(e){O.emit(0,e.content,e.options)})),U=[]})).on(3,(function(e){q.delete(e.containerId||e),0===q.size&&O.off(0).off(1).off(5)}));var Y,F,Q,_,G,$,ee=n(168),te=n(934),ne=te.Z.form(Y||(Y=(0,ee.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),Ae=te.Z.label(F||(F=(0,ee.Z)(["\n  position: relative;\n  display: flex;\n"]))),re=te.Z.input(Q||(Q=(0,ee.Z)(["\n  background: transparent;\n  width: 200px;\n  border: none;\n  outline: none;\n  border-bottom: 1px solid white;\n  color: white;\n  margin-right: 10px;\n\n  & + span {\n    position: absolute;\n    top: 10px;\n    left: 0;\n    color: white;\n    transition: all 0.5s ease;\n  }\n\n  &:focus-within + span {\n    transform: translateX(-140%);\n    color: tomato;\n  }\n  &:not(:placeholder-shown) + span {\n    transform: translateX(-140%);\n    color: tomato;\n  }\n"]))),oe=te.Z.button(_||(_=(0,ee.Z)(["\n  border: 1px solid white;\n  background: transparent;\n  padding: 10px;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.5s ease;\n\n  &:hover {\n    border: 1px solid tomato;\n    color: tomato;\n  }\n"]))),ae=te.Z.ul(G||(G=(0,ee.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 30px;\n  list-style: none;\n  padding: 0;\n"]))),ie=te.Z.li($||($=(0,ee.Z)(["\n  width: calc((100% - 30px) / 5);\n  height: 300px;\n\n  border-radius: 15px;\n  object-fit: cover;\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 15px;\n    object-fit: cover;\n\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  &:hover {\n    transform: scale(1.03);\n    box-shadow: inset 0px 1px 7px 1px rgb(0 0 0 / 82%),\n      0px 1px 6px 0px rgb(255 255 255 / 74%),\n      0px 2px 3px 0px rgb(255 255 255 / 74%);\n  }\n"]))),se=n(665),ce=n(184);function ue(){var e=(0,o.lr)(),t=(0,A.Z)(e,2),n=t[0],s=t[1],c=n.get("query"),u=(0,r.useState)(null!==c&&void 0!==c?c:""),l=(0,A.Z)(u,2),d=l[0],p=l[1],f=(0,r.useState)([]),v=(0,A.Z)(f,2),m=v[0],g=v[1],h=function(){var e=(0,r.useRef)(!0);return[e.current,function(){e.current=!1}]}(),y=(0,A.Z)(h,2),b=y[0],T=y[1];console.log("qeryMovie =>",m);var E=(0,a.TH)();(0,r.useEffect)((function(){!b||d?(console.log(b),(0,i.oH)(c).then((function(e){return g(e.results)}))):T()}),[c]),(0,r.useEffect)((function(){0!==m.length||!d||b||J("There is nothing to movies, please choose another value")}),[m]);return(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)(S,{}),(0,ce.jsxs)(ne,{onSubmit:function(e){e.preventDefault(),d.trim()?s(""!==d?{query:d}:{}):J("There is nothing to search, please write some value")},children:[(0,ce.jsxs)(Ae,{children:[(0,ce.jsx)(re,{type:"text",value:d,onChange:function(e){return p(e.target.value)},placeholder:" "}),(0,ce.jsx)("span",{children:"Movie"})]}),(0,ce.jsx)(oe,{type:"submit",children:"Seacrh"})]}),(0,ce.jsx)(ae,{children:m.map((function(e){return(0,ce.jsx)(ie,{children:(0,ce.jsx)(o.rU,{to:"".concat(e.id),state:{from:E},children:(0,ce.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):se,alt:""})})},e.id)}))})]})}},335:function(e,t,n){n.d(t,{Mc:function(){return l},Uw:function(){return p},hy:function(){return i},iC:function(){return v},oH:function(){return c}});var A=n(861),r=n(687),o=n.n(r),a=n(263);function i(){return s.apply(this,arguments)}function s(){return(s=(0,A.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=b352bff27d13f879cd11233ba2656e5c&language=en-US&page=1");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function c(e){return u.apply(this,arguments)}function u(){return(u=(0,A.Z)(o().mark((function e(t){var n,A;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=b352bff27d13f879cd11233ba2656e5c&language=en-US&page=1&include_adult=false"));case 3:return n=e.sent,A=n.data,e.abrupt("return",A);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,A.Z)(o().mark((function e(t){var n,A;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=b352bff27d13f879cd11233ba2656e5c&language=en-US"));case 3:return n=e.sent,A=n.data,e.abrupt("return",A);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,A.Z)(o().mark((function e(t){var n,A;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"}/credits?api_key=b352bff27d13f879cd11233ba2656e5c&language=en-US"));case 3:return n=e.sent,A=n.data,e.abrupt("return",A);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,A.Z)(o().mark((function e(t){var n,A;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=b352bff27d13f879cd11233ba2656e5c&language=en-US&page=1"));case 3:return n=e.sent,A=n.data,e.abrupt("return",A);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},665:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=367.795b5d44.chunk.js.map