/*! e111fd0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(n,t,e){},97:function(n,t,e){"use strict";e.r(t);var r=e(102),u=e(91),c=e.n(u),i=e(103),o=e(60),a=e.n(o),d=e(61),s=e.n(d),f=a.a.modify,l=function(n){return{increase:function(t){return n(function(n){return function(n){return f(s()({counter:function(n){return function(t){return n+t}}(n)}))}(t).execWith(n)})},decrease:function(t){return n(function(n){return function(n){return f(s()({counter:function(n){return function(t){return t-n}}(n)}))}(t).execWith(n)})}}},p=e(13),m=e.n(p),h=e(70),v=e.n(h),b=e(71),C=e.n(b),w=e(72),j=e.n(w),y=e(73),E=e.n(y),_=e(74),g=e.n(_),O=e(75),k=e.n(O);e(43);function x(){var n=m()(['\n  <div class="counter">\n    <div class="counter__content">\n      <h3 class="counter__title">\n        Counter\n      </h3>\n      <p class="counter__paragraph">\n        Count: ','\n      </p>\n    </div>\n    <div class="counter__action">\n      <button id="js-plus" @click=','>\n        +\n      </button>\n      <button id="js-minus" @click=',">\n        -\n      </button>\n    </div>\n  </div>\n"]);return x=function(){return n},n}var B=a.a.get,I=function(n,t,e){return C()(E()(e),v()(k()(t)),g()(n))}("counter",j.a,0),L=function(){var n=document.getElementById("js-plus"),t=document.getElementById("js-minus");e.e(4).then(e.bind(null,100)).then(function(e){for(var r=e.default,u=r.plus,c=r.minus;n.firstChild;)n.removeChild(n.firstChild);for(n.appendChild(u);t.firstChild;)t.removeChild(t.firstChild);t.appendChild(c)}).catch(function(n){Object(r.captureException)(new Error(n))})};"loading"!==document.readyState?L():document.addEventListener?document.addEventListener("DOMContentLoaded",L):document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&L()});Object(r.init)({dsn:"https://71a5184c8077401ca9390a122ee85966@sentry.io/1278165"});var W=c.a.stream(),J=function(n){return{model:function(){return{counter:0}},view:function(n){return function(t){return Object(i.a)(x(),B(I).evalWith(t),function(){return n.increase(1)},function(){return n.decrease(1)})}}(l(n))}}(W),S=c.a.scan(function(n,t){return t(n)},J.model(),W),D=document.getElementById("app");S.map(function(n){return Object(i.b)(J.view(n),D)})}},[[97,2,1]]]);
//# sourceMappingURL=main.79a8.js.map