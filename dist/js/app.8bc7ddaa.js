(function(t){function e(e){for(var r,c,i=e[0],a=e[1],u=e[2],h=0,f=[];h<i.length;h++)c=i[h],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},s=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"411a":function(t,e,n){"use strict";n("8a44")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b");var r=n("7a23"),o=Object(r["f"])("h1",null,"Best Reaction Timer evuh",-1),s=Object(r["f"])("span",null,"Play",-1);function c(t,e,n,c,i,a){var u=Object(r["h"])("Block"),l=Object(r["h"])("Results"),h=Object(r["h"])("Highscore");return Object(r["g"])(),Object(r["c"])(r["a"],null,[o,Object(r["f"])("button",{class:"button fill",onClick:e[1]||(e[1]=function(){return a.start&&a.start.apply(a,arguments)}),disabled:i.isPlaying},[s],8,["disabled"]),i.isPlaying?(Object(r["g"])(),Object(r["c"])(u,{key:0,delay:i.delay,onEnd:a.endGame},null,8,["delay","onEnd"])):Object(r["d"])("",!0),i.showResults?(Object(r["g"])(),Object(r["c"])(l,{key:1,score:i.score},null,8,["score"])):Object(r["d"])("",!0),0!=i.score?(Object(r["g"])(),Object(r["c"])(h,{key:2,score:i.score},null,8,["score"])):Object(r["d"])("",!0)],64)}function i(t,e,n,o,s,c){return s.showBlock?(Object(r["g"])(),Object(r["c"])("div",{key:0,class:"block",onClick:e[1]||(e[1]=function(){return c.stopTimer&&c.stopTimer.apply(c,arguments)})},"click")):Object(r["d"])("",!0)}var a={props:["delay"],data:function(){return{showBlock:!1,timer:null,reactionTime:0}},mounted:function(){var t=this;setTimeout((function(){t.showBlock=!0,t.startTimer()}),this.delay)},methods:{startTimer:function(){var t=this;this.timer=setInterval((function(){t.reactionTime+=10}),10)},stopTimer:function(){clearInterval(this.timer),this.$emit("end",this.reactionTime)}}};n("5a00");a.render=i;var u=a,l=Object(r["e"])(" Reaction time : "),h=Object(r["e"])(" ms ");function f(t,e,n,o,s,c){return Object(r["g"])(),Object(r["c"])("p",null,[l,Object(r["f"])("strong",null,Object(r["i"])(n.score),1),h])}var d={props:["score"],data:function(){return{rank:0}},mounted:function(){this.score<250&&(this.rank="NInja Fingerss!"),this.score>250&&this.score<400&&(this.rank="Quite rapid Reflexes"),this.score>=400&&(this.rank="Snail Pace...")}};n("411a");d.render=f;var p=d,b={class:"hs"},m=Object(r["e"])(" Highscore: "),O={class:"hs"},j=Object(r["e"])(" ms ");function y(t,e,n,o,s,c){return Object(r["g"])(),Object(r["c"])("p",b,[m,Object(r["f"])("strong",O,Object(r["i"])(s.highscore),1),j])}var g={props:["score"],data:function(){return{highscore:null}},mounted:function(){this.highscore=this.score},updated:function(){this.score<this.highscore?this.highscore=this.score:this.highscore=this.highscore}};n("db1a");g.render=y;var v=g,k={name:"App",components:{Block:u,Results:p,Highscore:v},data:function(){return{isPlaying:!1,delay:null,score:0,showResults:!1,reactionTime:0}},methods:{start:function(){this.delay=2e3+5e3*Math.random(),this.isPlaying=!0,this.showResults=!1},endGame:function(t){this.score=t,this.isPlaying=!1,this.showResults=!0}}};n("a5b2");k.render=c;var w=k;Object(r["b"])(w).mount("#app");var x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return e.querySelectorAll(t)};x(".button").forEach((function(t){return t.addEventListener("mousemove",(function(t){var e=this.getBoundingClientRect(),n=t.clientX-e.left-e.width/2,r=t.clientY-e.top-e.height/2;this.style.transform="translate("+.15*n+"px, "+.3*r+"px)",this.style.transform+="rotate3d("+-.1*n+", "+-.3*r+", 0, 12deg)",this.children[0].style.transform="translate("+.025*n+"px, "+.075*r+"px)"}))})),x(".button").forEach((function(t){return t.addEventListener("mouseleave",(function(){this.style.transform="translate3d(0px, 0px, 0px)",this.style.transform+="rotate3d(0, 0, 0, 0deg)",this.children[0].style.transform="translate3d(0px, 0px, 0px)"}))}))},"5a00":function(t,e,n){"use strict";n("b140")},"8a44":function(t,e,n){},a4d9:function(t,e,n){},a5b2:function(t,e,n){"use strict";n("c831")},b140:function(t,e,n){},c831:function(t,e,n){},db1a:function(t,e,n){"use strict";n("a4d9")}});
//# sourceMappingURL=app.8bc7ddaa.js.map