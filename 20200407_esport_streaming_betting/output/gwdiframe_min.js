(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var c="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},e;if("function"==typeof Object.setPrototypeOf)e=Object.setPrototypeOf;else{var f;a:{var g={h:!0},h={};try{h.__proto__=g;f=h.h;break a}catch(a){}f=!1}e=f?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var k=e,l=function(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");},m=l(this);var n=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},q=function(a){if(n(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&n(a))return a;return null};var r=function(a,b){var d=void 0===d?null:d;var p=document.createEvent("CustomEvent");p.initCustomEvent(a,!0,!0,d);b.dispatchEvent(p)};var t=Object.keys(HTMLIFrameElement.prototype),u=function(){var a=HTMLElement.call(this)||this;a.a=a.ownerDocument.createElement("iframe");a.c="";a.g=a.i.bind(a);a.b=!1;a.f=!1;return a},v=HTMLElement;u.prototype=c(v.prototype);u.prototype.constructor=u;if(k)k(u,v);else for(var w in v)if("prototype"!=w)if(Object.defineProperties){var x=Object.getOwnPropertyDescriptor(v,w);x&&Object.defineProperty(u,w,x)}else u[w]=v[w];
u.prototype.connectedCallback=function(){var a=this;if(!this.f){for(;this.firstChild;)this.removeChild(this.firstChild);this.c=this.getAttribute("source");this.a.setAttribute("allowtransparency",!0);this.a.setAttribute("border",0);this.a.setAttribute("frameborder",0);this.a.setAttribute("sandbox","allow-same-origin allow-forms allow-scripts");this.a.setAttribute("seamless","seamless");var b=this.ownerDocument.createElement("div");b.classList.add("intermediate-element");b.appendChild(this.a);this.appendChild(b);
setTimeout(function(){if(!a.gwdIsLoaded()){var d=q(a);d?d.gwdIsLoaded()&&a.gwdLoad():a.gwdLoad()}},0);this.f=!0}};u.prototype.attributeChangedCallback=function(a){var b=this.a;if(this.hasAttribute(a)){var d=this.getAttribute(a);b.setAttribute(a,d)}else b.removeAttribute(a)};u.prototype.i=function(){this.b=!0;this.a.removeEventListener("load",this.g,!1);r("iframeload",this);r("ready",this)};u.prototype.setUrl=function(a){a!=this.c&&(this.b=!1,this.c=a);this.gwdLoad()};
u.prototype.gwdLoad=function(){this.b||(this.a.addEventListener("load",this.g,!1),this.a.setAttribute("src",this.c))};u.prototype.gwdIsLoaded=function(){return this.b};
m.Object.defineProperties(u.prototype,{nativeElement:{configurable:!0,enumerable:!0,get:function(){return this.a}},src:{configurable:!0,enumerable:!0,get:function(){return this.a.getAttribute("src")},set:function(a){this.a.setAttribute("src",a)}},srcdoc:{configurable:!0,enumerable:!0,get:function(){return this.a.getAttribute("srcdoc")},set:function(a){this.a.setAttribute("srcdoc",a)}},scrolling:{configurable:!0,enumerable:!0,get:function(){return this.a.getAttribute("scrolling")},set:function(a){this.a.setAttribute("scrolling",
a)}},allowFullscreen:{configurable:!0,enumerable:!0,get:function(){return this.a.hasAttribute("allowFullscreen")},set:function(a){a?this.a.setAttribute("allowFullscreen",""):this.a.removeAttribute("allowFullscreen")}},name:{configurable:!0,enumerable:!0,get:function(){return this.a.getAttribute("name")},set:function(a){this.a.setAttribute("name",a)}}});m.Object.defineProperties(u,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return t}}});customElements.define("gwd-iframe",u);}).call(this);
