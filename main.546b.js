/*! For license information please see main.546b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{97:function(n,t,e){},98:function(n,t,e){"use strict";e.r(t);var r=e(91),u=e.n(r),c=e(7),o=e(60),i=e.n(o),a=e(61),d=e.n(a),s=i.a.modify,f=function(n){return function(t){return n+t}},l=function(n){return function(t){return t-n>0?t-n:0}},m=function(n){return{increase:function(t){return n((function(n){return(e=t,s(d()({counter:f(e)}))).execWith(n);var e}))},decrease:function(t){return n((function(n){return(e=t,s(d()({counter:l(e)}))).execWith(n);var e}))}}},v=e(13),h=e.n(v),p=e(70),C=e.n(p),b=e(71),w=e.n(b),_=e(72),g=e.n(_),y=e(73),j=e.n(y),E=e(74),k=e.n(E),B=e(75),I=e.n(B);e(97);function L(){var n=h()(['\n  <div class="counter">\n    <div class="counter__content">\n      <h3 class="counter__title">\n        Counter\n      </h3>\n      <p class="counter__paragraph">\n        Count: ','\n      </p>\n    </div>\n    <div class="counter__action">\n      <button id="js-plus" @click=','>\n        +\n      </button>\n      <button id="js-minus" @click=',">\n        -\n      </button>\n    </div>\n  </div>\n"]);return L=function(){return n},n}var O,W,x,J=i.a.get,S=(O="counter",W=g.a,x=0,w()(j()(x),C()(I()(W)),k()(O))),D=function(){var n=document.getElementById("js-plus"),t=document.getElementById("js-minus");e.e(4).then(e.bind(null,102)).then((function(e){for(var r=e.default,u=r.plus,c=r.minus;n.firstChild;)n.removeChild(n.firstChild);for(n.appendChild(u);t.firstChild;)t.removeChild(t.firstChild);t.appendChild(c)})).catch((function(n){console.error(n)}))};"loading"!==document.readyState?D():document.addEventListener?document.addEventListener("DOMContentLoaded",D):document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&D()}));var M,q=u.a.stream(),z={model:function(){return{counter:0}},view:(M=m(q),function(n){return Object(c.a)(L(),J(S).evalWith(n),(function(){return M.increase(1)}),(function(){return M.decrease(1)}))})},A=u.a.scan((function(n,t){return t(n)}),z.model(),q),F=document.getElementById("app");A.map((function(n){return Object(c.b)(z.view(n),F)}))}},[[98,2,1]]]);
//# sourceMappingURL=main.546b.js.map