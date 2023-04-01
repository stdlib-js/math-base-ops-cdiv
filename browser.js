// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";function e(e){return Math.abs(e)}var t=Number.POSITIVE_INFINITY;function r(e){return 0===e&&1/e===t}function n(e){return e!=e}var o=Number,i=o.NEGATIVE_INFINITY;function u(e,o){var u,a,l,c;if(2===(u=arguments.length))return n(e)||n(o)?NaN:e===t||o===t?t:e===o&&0===e?r(e)?e:o:e>o?e:o;for(a=i,c=0;c<u;c++){if(n(l=arguments[c])||l===t)return l;(l>a||l===a&&0===l&&r(l))&&(a=l)}return a}function a(e){return e.re}function l(e){return e.im}var c="function"==typeof Object.defineProperty?Object.defineProperty:null,f=Object.defineProperty,p=Object.prototype,b=p.toString,y=p.__defineGetter__,m=p.__defineSetter__,s=p.__lookupGetter__,v=p.__lookupSetter__,_=function(){try{return c({},"x",{}),!0}catch(e){return!1}}()?f:function(e,t,r){var n,o,i,u;if("object"!=typeof e||null===e||"[object Array]"===b.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===b.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(s.call(e,t)||v.call(e,t)?(n=e.__proto__,e.__proto__=p,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&y&&y.call(e,t,r.get),u&&m&&m.call(e,t,r.set),e};function d(e,t,r){_(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function h(e){return"number"==typeof e}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return g&&"symbol"==typeof Symbol.toStringTag}var E=Object.prototype.toString,S=Object.prototype.hasOwnProperty,T="function"==typeof Symbol?Symbol.toStringTag:"",j=w()?function(e){var t,r,n,o,i;if(null==e)return E.call(e);r=e[T],i=T,t=null!=(o=e)&&S.call(o,i);try{e[T]=void 0}catch(t){return E.call(e)}return n=E.call(e),t?e[T]=r:delete e[T],n}:function(e){return E.call(e)},N=o.prototype.toString,I=w();function O(e){return"object"==typeof e&&(e instanceof o||(I?function(e){try{return N.call(e),!0}catch(e){return!1}}(e):"[object Number]"===j(e)))}function P(e){return h(e)||O(e)}function V(e,t){if(!(this instanceof V))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!h(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!h(t))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+t+"`.");return _(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),_(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}function x(e,t,r,n,o,i){var u;return 0===o?(e+n*(t/r))*i:0==(u=t*o)?e*i+t*i*o:(e+u)*i}function Y(e,t,r,n){var o,i,u;return u=1/(r+n*(i=n/r)),(o=[0,0])[0]=x(e,t,r,n,i,u),o[1]=x(t,-e,r,n,i,u),o}d(P,"isPrimitive",h),d(P,"isObject",O),d(V,"BYTES_PER_ELEMENT",8),d(V.prototype,"BYTES_PER_ELEMENT",8),d(V.prototype,"byteLength",16),d(V.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),d(V.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var k=8988465674311579e292,A=2004168360008973e-307,C=2/4930380657631324e-47;return function(t,r){var n,o,i,c,f,p,b,y;return n=a(t),o=a(r),i=l(t),c=l(r),p=u(e(n),e(i)),b=u(e(o),e(c)),y=1,p>=k?(n*=.5,i*=.5,y*=2):p<=A&&(n*=C,i*=C,y/=C),b>=k?(o*=.5,c*=.5,y*=.5):b<=A&&(o*=C,c*=C,y*=C),e(c)<=e(o)?f=Y(n,i,o,c):(f=Y(i,n,c,o))[1]*=-1,f[0]*=y,f[1]*=y,new V(f[0],f[1])}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).cdiv=t();
//# sourceMappingURL=browser.js.map
