(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{mvdp:function(e,t,r){"use strict";r.r(t);var n=r("MVZn"),a=r.n(n),s=r("o0o1"),c=r.n(s),u=r("k9Yu");t["default"]={namespace:"system",state:{list:[],currentUser:{}},effects:{fetch:c.a.mark(function e(t,r){var n,a,s;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=r.call,a=r.put,e.next=3,n(u["h"]);case 3:return s=e.sent,e.next=6,a({type:"save",payload:s});case 6:case"end":return e.stop()}},e,this)}),fetchCurrent:c.a.mark(function e(t,r){var n,a,s;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=r.call,a=r.put,e.prev=1,e.next=4,n(u["i"]);case 4:return s=e.sent,e.next=7,a({type:"saveCurrentUser",payload:s.resultObject});case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e["catch"](1),e.next=13,a({type:"saveCurrentUser",error:e.t0});case 13:case"end":return e.stop()}},e,this,[[1,9]])})},reducers:{save:function(e,t){return a()({},e,{list:t.payload})},saveCurrentUser:function(e,t){return a()({},e,{currentUser:t.payload||{}})},changeNotifyCount:function(e,t){return a()({},e,{currentUser:a()({},e.currentUser,{notifyCount:t.payload})})}}}}}]);