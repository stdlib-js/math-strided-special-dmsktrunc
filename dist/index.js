"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=s(function(C,c){
var l=require('@stdlib/strided-base-dmskmap/dist'),R=require('@stdlib/math-base-special-trunc/dist');function _(e,r,a,t,i,u,n){return l(e,r,a,t,i,u,n,R)}c.exports=_
});var m=s(function(D,d){
var E=require('@stdlib/strided-base-dmskmap/dist').ndarray,O=require('@stdlib/math-base-special-trunc/dist');function b(e,r,a,t,i,u,n,f,j,x){return E(e,r,a,t,i,u,n,f,j,x,O)}d.exports=b
});var k=s(function(F,p){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=q(),h=m();g(o,"ndarray",h);p.exports=o
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=k(),v,y=z(w(__dirname,"./native.js"));y instanceof Error?v=A:v=y;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
