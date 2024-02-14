"use strict";var f=function(t,u){return function(){return u||t((u={exports:{}}).exports,u),u.exports}};var S=f(function(g,L){
function O(t,u,i,v,e,r){var a;return e===0?(t+v*(u/i))*r:(a=u*e,a===0?t*r+u*r*e:(t+a)*r)}L.exports=O
});var x=f(function(w,p){
var E=S();function G(t,u,i,v){var e,r,a;return e=[0,0],r=v/i,a=1/(i+v*r),e[0]=E(t,u,i,v,r,a),e[1]=E(u,-t,i,v,r,a),e}p.exports=G
});var I=f(function(B,H){
var s=require('@stdlib/math-base-special-abs/dist'),T=require('@stdlib/math-base-special-max/dist'),P=require('@stdlib/constants-float64-max/dist'),d=require('@stdlib/constants-float64-smallest-normal/dist'),c=require('@stdlib/constants-float64-eps/dist'),_=require('@stdlib/complex-real/dist'),b=require('@stdlib/complex-imag/dist'),m=require('@stdlib/complex-float64/dist'),A=x(),R=P*.5,C=d*(2/c),o=2/(c*c);function D(t,u){var i,v,e,r,a,l,q,n;return i=_(t),v=_(u),e=b(t),r=b(u),l=T(s(i),s(e)),q=T(s(v),s(r)),n=1,l>=R?(i*=.5,e*=.5,n*=2):l<=C&&(i*=o,e*=o,n/=o),q>=R?(v*=.5,r*=.5,n*=.5):q<=C&&(v*=o,r*=o,n*=o),s(r)<=s(v)?a=A(i,e,v,r):(a=A(e,i,r,v),a[1]*=-1),a[0]*=n,a[1]*=n,new m(a[0],a[1])}H.exports=D
});var F=I();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
