!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=332)}({332:function(e,t){$(function(){"use strict";var e=function(){var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(i,a){try{var c=t[i](a),o=c.value}catch(e){return void n(e)}if(!c.done)return Promise.resolve(o).then(function(e){r("next",e)},function(e){r("throw",e)});e(o)}return r("next")})}}(regeneratorRuntime.mark(function e(){var a,c,o,s,l,u,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=void 0,c=void 0,o=void 0,s=void 0,l=void 0,$("#live-recent-list").length&&!$("#live-recent-list").is(":hidden")){e.next=3;break}return e.abrupt("return");case 3:return a={action:"query",list:"recentchanges",rcprop:"title|timestamp",rcshow:"!bot|!redirect",rctype:"edit|new",rclimit:r,format:"json",rcnamespace:i?t:n,rctoponly:!0},e.next=6,$.ajax({url:mw.util.wikiScript("api"),data:a,xhrFields:{withCredentials:!0},dataType:"json"});case 6:u=e.sent,p=u.query.recentchanges,l=p.map(function(e){return c=new Date(e.timestamp),o='<li><a class="recent-item" href = "'+mw.config.get("wgArticlePath").replace("$1",encodeURIComponent(e.title))+'" title="'+e.title+'">['+function(e){var t=void 0,n=void 0,r=void 0,i=void 0;return(t=new Date).setDate(t.getDate()-1),e<t?e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate():(n=e.getHours(),r=e.getMinutes(),i=e.getSeconds(),n<10&&(n="0"+n),r<10&&(r="0"+r),i<10&&(i="0"+i),n+":"+r+":"+i)}(c)+"] ",s="","new"===e.type&&(s+="[New]"),(s+=e.title).length>13&&(s=s.substr(0,13),s+="..."),s=s.replace("[New]",'<span class="new">[New] </span>'),o+=s,o+="</a></li>"}).join("\n"),$("#live-recent-list").html(l);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();mw.loader.load("mw.util");var t="0|4|10|12|14|1600",n="1|3|5|7|9|11|13|15|2600|1601|1063",r=$("#live-recent-list")[0].childElementCount,i=!0;$("#liberty-recent-tab1").click(function(){$(this).addClass("active"),$("#liberty-recent-tab2").removeClass("active"),i=!0,e()}),$("#liberty-recent-tab2").click(function(){$(this).addClass("active"),$("#liberty-recent-tab1").removeClass("active"),i=!1,e()}),setInterval(e,3e5),e()})}});