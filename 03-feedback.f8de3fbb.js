!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),d?y(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?g(n,u-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?y(e):(r=i=void 0,a)}function T(){var e=p(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=S(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?a:w(p())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j,O=document.querySelector(".feedback-form"),h=document.querySelector("input"),w=document.querySelector("textarea"),T="feedback-form-state",x={email:h.value,message:w.value};O.addEventListener("submit",(function(e){if(e.preventDefault(),""===x.email||""===x.message)return alert("Заплните все поля");console.log("Form to send:",JSON.parse(localStorage.getItem(T))),O.reset(),localStorage.removeItem(T)})),O.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(x))}),500)),(j=JSON.parse(localStorage.getItem(T)))&&(h.value=j.email,w.value=j.message)}();
//# sourceMappingURL=03-feedback.f8de3fbb.js.map
