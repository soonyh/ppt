(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{KSYo:function(e,t,a){},"V/5v":function(e,t,a){"use strict";var l=a("3rQ3"),n=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("Sx57")),d=n(a("4zp0")),s=n(a("iVWQ")),u=n(a("lF+r")),i=n(a("PApH")),c=a("FXOc"),o=l(a("6cB7")),m=(n(a("KSYo")),c.Steps.Step),f=[{title:"\u5ba1\u6838\u73af\u8282",dataIndex:"linkName",key:"linkName"},{title:"\u64cd\u4f5c\u4eba",dataIndex:"dealName",key:"dealName"},{title:"\u6267\u884c\u7ed3\u679c",dataIndex:"state",key:"state",render:function(e){return"success"===e?o.default.createElement(c.Badge,{status:"success",text:"\u6210\u529f"}):"process"===e?o.default.createElement(c.Badge,{status:"processing",text:"\u6b63\u5728\u5904\u7406"}):"error"===e?o.default.createElement(c.Badge,{status:"error",text:"\u9a73\u56de"}):o.default.createElement(c.Badge,{status:"default",text:"\u7b49\u5f85"})}},{title:"\u64cd\u4f5c\u65f6\u95f4",dataIndex:"data",key:"data"},{title:"\u5907\u6ce8",dataIndex:"note",key:"note"}],p=function(e){function t(e){var a;return(0,r.default)(this,t),a=(0,s.default)(this,(0,u.default)(t).call(this,e)),a.state={data:[{linkName:"\u9879\u76ee\u7ecf\u7406\u53d1\u8d77\u5956\u52b1\u7533\u8bf7",dealName:"Soon",state:"success",data:"2018-09-30 19:30:12",note:"nice"},{linkName:"\u4eba\u529b\u8d44\u6e90\u90e8\u5ba1\u6838\u4eba\u5ba1\u6838",dealName:"Kobe",state:"success",data:"2018-09-31 23:30:12",note:"\u5f88\u68d2"},{linkName:"\u7533\u8bf7\u90e8\u95e8\u8d1f\u8d23\u4eba\u5ba1\u6838",dealName:"Jane",state:"error",data:"2018-10-01 10:30:12",note:"\u4e0d\u901a\u8fc7"},{linkName:"\u4eba\u529b\u8d44\u6e90\u90e8\u5ba1\u6838\u4eba\u5ba1\u6838",dealName:"Kobe",state:"process"},{linkName:"\u7533\u8bf7\u90e8\u95e8\u8d1f\u8d23\u4eba\u5ba1\u6838",dealName:"Jane",state:"wait"},{linkName:"\u76f8\u5173\u90e8\u95e8\u8d1f\u8d23\u4eba\u5ba1\u6838",dealName:"Machael",state:"wait"},{linkName:"\u8d22\u52a1\u90e8\u8d1f\u8d23\u4eba\u5ba1\u6838",dealName:"Klay",state:"wait"}],current:"1"},a}return(0,i.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){for(var e=this.state,t=e.data,a=e.current,l=[],n=t,r=0;r<n.length;r++)"error"==n[r].state?l.splice(r-1,1):l.push(n[r]);var d=[];for(r=0;r<l.length;r++)if("success"==l[r].state||"wait"==l[r].state){var s=o.default.createElement("div",null,o.default.createElement("span",null,l[r].dealName),o.default.createElement(c.Icon,{type:"dingding-o",style:{marginLeft:8}}));d.push(o.default.createElement(m,{title:l[r].linkName,description:s}))}else if("process"==l[r].state){var u=o.default.createElement("div",null,o.default.createElement("span",null,l[r].dealName),o.default.createElement(c.Icon,{type:"dingding-o",style:{marginLeft:8,color:"#00A0E9"}}),o.default.createElement("a",null,"(\u50ac\u4e00\u4e0b)"));d.push(o.default.createElement(m,{title:l[r].linkName,description:u}))}return o.default.createElement("div",null,o.default.createElement(c.Card,{bordered:!1,style:{marginBottom:16}},o.default.createElement("p",{style:{fontSize:15}},o.default.createElement("span",{style:{marginRight:10}},"\u65b0\u589e\u5956\u52b1\u7acb\u9879\u7533\u8bf7"),o.default.createElement("span",null,"\u4efb\u52a1\u5355\u53f7\uff1a26770"),o.default.createElement(c.Button,{type:"primary",style:{float:"right"}},"\u8fd4\u56de"))),o.default.createElement(c.Card,{title:"\u5ba1\u6279\u6d41\u7a0b\u56fe",bordered:!1,style:{marginBottom:16}},o.default.createElement(c.Steps,{current:a,progressDot:!0},d)),o.default.createElement(c.Card,{title:"\u5de5\u5355\u6d41\u7a0b",bordered:!1,style:{marginBottom:16}},o.default.createElement(c.Table,{pagination:!1,dataSource:t,columns:f})),o.default.createElement(c.Card,{title:"\u4efb\u52a1\u5355\u8be6\u60c5",bordered:!1,style:{marginBottom:16}}))}}]),t}(o.default.Component),E=p;t.default=E}}]);