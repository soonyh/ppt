(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[74],{"1zRF":function(e,a,t){"use strict";t.r(a);t("/zsF");var l=t("PArb"),n=(t("14J3"),t("BMrR")),r=(t("OaEy"),t("2fM7")),c=(t("jCWc"),t("kPKH")),m=t("pVnL"),i=t.n(m),s=(t("5NDa"),t("5rEg")),o=(t("2qtc"),t("kLXV")),u=(t("DZo9"),t("8z0m")),p=(t("Pwec"),t("CtXQ")),E=t("lwsE"),d=t.n(E),b=t("W8MJ"),h=t.n(b),g=t("a1gu"),v=t.n(g),f=t("Nsbk"),y=t.n(f),w=t("7W2i"),C=t.n(w),k=(t("y8nQ"),t("Vl3Y")),x=t("q1tI"),B=t.n(x),L=(t("WnAZ"),t("MuoO")),O=k["a"].Item,P={labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}},A=function(e){function a(e){var t;return d()(this,a),t=v()(this,y()(a).call(this,e)),t.handleCancel=function(){return t.setState({previewVisible:!1})},t.handlePreview=function(e){t.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})},t.handleChange=function(e){var a=e.fileList;return t.setState({fileList:a})},t.state={previewVisible:!1,previewImage:"",fileList:[]},t}return C()(a,e),h()(a,[{key:"render",value:function(){var e=this.state,a=e.previewVisible,t=e.previewImage,m=e.fileList,E=this.props.form.getFieldDecorator,d={rules:[{required:!0,message:"\u4e0d\u80fd\u4e3a\u7a7a"}]},b=[{value:"1",label:"\u7b2c\u4e00\u65b9"},{value:"2",label:"\u7b2c\u4e8c\u65b9"},{value:"3",label:"\u7b2c\u4e09\u65b9"}],h=B.a.createElement("div",null,B.a.createElement(p["a"],{type:"plus"}),B.a.createElement("div",{className:"ant-upload-text"},"\u56fe\u7247\u4e0a\u4f20")),g=B.a.createElement("div",null,B.a.createElement(u["a"],{action:"//jsonplaceholder.typicode.com/posts/",listType:"picture-card",fileList:m,onPreview:this.handlePreview,onChange:this.handleChange},m.length>=1?null:h),B.a.createElement(o["a"],{visible:a,footer:null,onCancel:this.handleCancel},B.a.createElement("img",{alt:"example",style:{width:"100%"},src:t}))),v=B.a.createElement("div",null,B.a.createElement(u["a"],{action:"//jsonplaceholder.typicode.com/posts/",listType:"picture-card",fileList:m,onPreview:this.handlePreview,onChange:this.handleChange},m.length>=1?null:h),B.a.createElement(o["a"],{visible:a,footer:null,onCancel:this.handleCancel},B.a.createElement("img",{alt:"example",style:{width:"100%"},src:t})));return B.a.createElement(k["a"],{onSubmit:this.handleSubmit,layout:"vertical"},B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u57fa\u672c\u4fe1\u606f"),B.a.createElement(n["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(c["a"],{span:8},B.a.createElement(O,i()({},P,{label:"\u5546\u6237\u540d\u79f0"}),E("businessName",d)(B.a.createElement(s["a"],null)))),B.a.createElement(c["a"],{span:8},B.a.createElement(O,i()({},P,{label:"\u5546\u6237\u7c7b\u578b"}),E("businessType",d)(B.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9"},b.map(function(e){return B.a.createElement(r["a"].Option,{key:e.value},e.label)}))))),B.a.createElement(c["a"],{span:8},B.a.createElement(O,i()({},P,{label:"\u5f15\u5165\u4eba\u5458"}),E("goPerson",d)(B.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9"},b.map(function(e){return B.a.createElement(r["a"].Option,{key:e.value},e.label)})))))),B.a.createElement(n["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(c["a"],{span:8},B.a.createElement(O,i()({},P,{label:"\u5546\u6237\u56fe\u6807\uff1alogo\uff08\u5efa\u8bae\u5c3a\u5bf8100*100\uff0cpng\u683c\u5f0f\uff09"}),E("businessLogo",d)(g))),B.a.createElement(c["a"],{span:8},B.a.createElement(O,i()({},P,{label:"\u5546\u6237\u56fe\u6807\uff1abanner\uff08\u5efa\u8bae\u5c3a\u5bf8100*100\uff0cpng\u683c\u5f0f\uff09"}),E("businessBanner",d)(v)))),B.a.createElement(l["a"],{style:{marginBottom:32}}),B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u7ed3\u7b97\u8d26\u6237"),B.a.createElement(n["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(c["a"],{span:8},B.a.createElement(O,i()({},P,{label:"\u94f6\u884c\u540d\u79f0"}),E("bankName",d)(B.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9"},b.map(function(e){return B.a.createElement(r["a"].Option,{key:e.value},e.label)}))))),B.a.createElement(c["a"],{span:8},B.a.createElement(O,i()({},P,{label:"\u5f00\u53d1\u7f51\u70b9"}),E("bankAdree",d)(B.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9"},b.map(function(e){return B.a.createElement(r["a"].Option,{key:e.value},e.label)}))))),B.a.createElement(c["a"],{span:8},B.a.createElement(O,i()({},P,{label:"\u8d26\u6237\u7c7b\u578b"}),E("AccountType",d)(B.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9"},b.map(function(e){return B.a.createElement(r["a"].Option,{key:e.value},e.label)})))))),B.a.createElement(n["a"],{gutter:{md:8,lg:24,xl:48}},B.a.createElement(c["a"],{span:8},B.a.createElement(O,i()({},P,{label:"\u8d26\u6237\u540d\u79f0"}),E("AccountName",d)(B.a.createElement(s["a"],null)))),B.a.createElement(c["a"],{span:8},B.a.createElement(O,i()({},P,{label:"\u8d26\u53f7"}),E("AccountNum",d)(B.a.createElement(s["a"],null)))),B.a.createElement(c["a"],{span:8},B.a.createElement(O,i()({},P,{label:"\u7ed3\u7b97\u63d0\u9192\u9891\u7387"}),E("settleFrequncy",d)(B.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9"},b.map(function(e){return B.a.createElement(r["a"].Option,{key:e.value},e.label)})))))),B.a.createElement(l["a"],{style:{marginBottom:32}}),B.a.createElement("div",{style:{marginBottom:32,fontSize:16}},"\u63a5\u53e3\u5730\u5740"),B.a.createElement(n["a"],{gutter:{md:8,lg:24,xl:48},style:{marginBottom:32}},B.a.createElement(c["a"],{span:8},B.a.createElement(O,i()({},P,{label:"\u63a5\u53e3\u5730\u5740"}),E("interfaceAddree",d)(B.a.createElement(s["a"],{addonBefore:"Http://",addonAfter:".com"}))))))}}]),a}(B.a.Component);a["default"]=Object(L["connect"])()(k["a"].create()(A))}}]);