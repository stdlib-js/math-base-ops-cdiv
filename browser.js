// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return Math.abs(e)}var r=Number.POSITIVE_INFINITY;function t(e){return e!=e}function i(e,i){return t(e)||t(i)?NaN:e===r||i===r?r:e===i&&0===e?function(e){return 0===e&&1/e===r}(e)?e:i:e>i?e:i}function n(e){return e.re}function a(e){return e.im}var o="function"==typeof Object.defineProperty?Object.defineProperty:null,c=Object.defineProperty;function s(e){return"number"==typeof e}function l(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function u(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+l(n):l(n)+e,i&&(e="-"+e)),e}var p=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function g(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!s(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=u(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=u(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):p.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var d=Math.abs,h=String.prototype.toLowerCase,b=String.prototype.toUpperCase,y=String.prototype.replace,m=/e\+(\d)$/,w=/e-(\d)$/,v=/^(\d+)$/,_=/^(\d+)e/,E=/\.0$/,S=/\.0*e/,T=/(\..*[^0])0*e/;function x(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!s(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":d(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=y.call(t,T,"$1e"),t=y.call(t,S,"e"),t=y.call(t,E,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=y.call(t,m,"e+0$1"),t=y.call(t,w,"e-0$1"),e.alternate&&(t=y.call(t,v,"$1."),t=y.call(t,_,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===b.call(e.specifier)?b.call(t):h.call(t)}function k(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,I=Array.isArray;function V(e){return e!=e}function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,t,i,n,a,o,c,s,l,p,f,d,h;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if("string"==typeof(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=O(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,V(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,V(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=g(i);break;case"s":i.maxWidth=r?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!V(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=V(a)?String(i.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=x(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=u(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(p=i.arg,f=i.width,d=i.padRight,h=void 0,(h=f-p.length)<0?p:p=d?p+k(h):k(h)+p)),o+=i.arg||"",c+=1}return o}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,n;for(t=[],n=0,i=N.exec(e);i;)(r=e.slice(n,N.lastIndex-i[0].length)).length&&t.push(r),t.push(P(i)),n=N.lastIndex,i=N.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function C(e){var r,t;if("string"!=typeof e)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return F.apply(null,r)}var R=Object.prototype,A=R.toString,L=R.__defineGetter__,Z=R.__defineSetter__,G=R.__lookupGetter__,M=R.__lookupSetter__,W=function(){try{return o({},"x",{}),!0}catch(e){return!1}}()?c:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(G.call(e,r)||M.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};function Y(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,J=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",H=X()?function(e){var r,t,i,n,a;if(null==e)return z.call(e);t=e[D],a=D,r=null!=(n=e)&&J.call(n,a);try{e[D]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[D]=t:delete e[D],i}:function(e){return z.call(e)},K=Number,Q=K.prototype.toString,ee=X();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function te(e){return B(e)||re(e)}function ie(e,r){if(!(this instanceof ie))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!B(e))throw new TypeError(C("invalid argument. Real component must be a number. Value: `%s`.",e));if(!B(r))throw new TypeError(C("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return W(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),W(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}function ne(e,r,t,i,n,a){var o;return 0===n?(e+i*(r/t))*a:0==(o=r*n)?e*a+r*a*n:(e+o)*a}function ae(e,r,t,i){var n,a,o;return o=1/(t+i*(a=i/t)),(n=[0,0])[0]=ne(e,r,t,i,a,o),n[1]=ne(r,-e,t,i,a,o),n}Y(te,"isPrimitive",B),Y(te,"isObject",re),Y(ie,"BYTES_PER_ELEMENT",8),Y(ie.prototype,"BYTES_PER_ELEMENT",8),Y(ie.prototype,"byteLength",16),Y(ie.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(ie.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var oe=8988465674311579e292,ce=2004168360008973e-307,se=2/4930380657631324e-47;return function(r,t){var o,c,s,l,u,p,f,g;return o=n(r),c=n(t),s=a(r),l=a(t),p=i(e(o),e(s)),f=i(e(c),e(l)),g=1,p>=oe?(o*=.5,s*=.5,g*=2):p<=ce&&(o*=se,s*=se,g/=se),f>=oe?(c*=.5,l*=.5,g*=.5):f<=ce&&(c*=se,l*=se,g*=se),e(l)<=e(c)?u=ae(o,s,c,l):(u=ae(s,o,l,c))[1]*=-1,u[0]*=g,u[1]*=g,new ie(u[0],u[1])}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).cdiv=r();
//# sourceMappingURL=browser.js.map
