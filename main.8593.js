/*! 26ebe8b */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(n,t,e){},97:function(n,t,e){"use strict";e.r(t);var r=e(91),u=e.n(r),c=e(7),o=e(60),i=e.n(o),a=e(61),d=e.n(a),s=i.a.modify,f=function(n){return{increase:function(t){return n(function(n){return function(n){return s(d()({counter:function(n){return function(t){return n+t}}(n)}))}(t).execWith(n)})},decrease:function(t){return n(function(n){return function(n){return s(d()({counter:function(n){return function(t){return t-n}}(n)}))}(t).execWith(n)})}}},l=e(13),p=e.n(l),h=e(70),m=e.n(h),v=e(71),C=e.n(v),b=e(72),w=e.n(b),_=e(73),y=e.n(_),j=e(74),g=e.n(j),k=e(75),E=e.n(k);e(43);function S(){var n=p()(['\n  <div class="counter">\n    <div class="counter__content">\n      <h3 class="counter__title">\n        Counter\n      </h3>\n      <p class="counter__paragraph">\n        Count: ','\n      </p>\n    </div>\n    <div class="counter__action">\n      <button id="js-plus" @click=','>\n        <span>+</span>\n      </button>\n      <button id="js-minus" @click=',">\n        <span>-</span>\n      </button>\n    </div>\n  </div>\n"]);return S=function(){return n},n}var L=i.a.get,O=function(n,t,e){return C()(y()(e),m()(E()(t)),g()(n))}("counter",w.a,0),W=function(){var n=document.querySelector("#js-plus"),t=document.querySelector("#js-minus");e.e(4).then(e.bind(null,100)).then(function(e){for(var r=e.default,u=r.plus,c=r.minus;n.firstChild;)n.removeChild(n.firstChild);for(n.appendChild(u);t.firstChild;)t.removeChild(t.firstChild);t.appendChild(c)}).catch(function(n){console.error(n)})};"loading"!==document.readyState?W():document.addEventListener?document.addEventListener("DOMContentLoaded",W):document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&W()});var q=u.a.stream(),x=function(n){return{model:function(){return{counter:0}},view:function(n){return function(t){return Object(c.a)(S(),L(O).evalWith(t),function(){return n.increase(1)},function(){return n.decrease(1)})}}(f(n))}}(q),J=u.a.scan(function(n,t){return t(n)},x.model(),q),B=document.getElementById("app");J.map(function(n){return Object(c.b)(x.view(n),B)})}},[[97,2,1]]]);
//# sourceMappingURL=main.8593.js.map