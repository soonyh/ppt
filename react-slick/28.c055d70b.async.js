(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{HYIl:function(e,a,t){"use strict";t.r(a);t("/zsF");var l,n,r,c=t("PArb"),m=(t("+L6B"),t("2/Rp")),i=(t("5NDa"),t("5rEg")),p=t("jehZ"),s=t.n(p),o=t("p0pE"),u=t.n(o),d=t("2Taf"),E=t.n(d),f=t("vZ4D"),h=t.n(f),y=t("l4Ni"),v=t.n(y),g=t("ujKo"),b=t.n(g),w=t("MhPg"),k=t.n(w),x=(t("y8nQ"),t("Vl3Y")),C=(t("OaEy"),t("2fM7")),I=t("q1tI"),q=t.n(I),F=t("MuoO"),N=t("kvWL"),V=t.n(N),A=C["a"].Option,D={labelCol:{span:5},wrapperCol:{span:19}},M=(l=Object(F["connect"])(function(e){var a=e.form;return{data:a.step}}),n=x["a"].create(),l(r=n(r=function(e){function a(){return E()(this,a),v()(this,b()(a).apply(this,arguments))}return k()(a,e),h()(a,[{key:"render",value:function(){var e=this.props,a=e.form,t=e.dispatch,l=e.data,n=a.getFieldDecorator,r=a.validateFields,p=function(){r(function(e,a){e||t({type:"form/saveStepFormData",payload:u()({},a,{currentStep:1})})})};return q.a.createElement(I["Fragment"],null,q.a.createElement(x["a"],{layout:"horizontal",className:V.a.stepForm,hideRequiredMark:!0},q.a.createElement(x["a"].Item,s()({},D,{label:"\u4ed8\u6b3e\u8d26\u6237"}),n("payAccount",{initialValue:l.payAccount,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4ed8\u6b3e\u8d26\u6237"}]})(q.a.createElement(C["a"],{placeholder:"test@example.com"},q.a.createElement(A,{value:"ant-design@alipay.com"},"ant-design@alipay.com")))),q.a.createElement(x["a"].Item,s()({},D,{label:"\u6536\u6b3e\u8d26\u6237"}),q.a.createElement(i["a"].Group,{compact:!0},q.a.createElement(C["a"],{defaultValue:"alipay",style:{width:100}},q.a.createElement(A,{value:"alipay"},"\u652f\u4ed8\u5b9d"),q.a.createElement(A,{value:"bank"},"\u94f6\u884c\u8d26\u6237")),n("receiverAccount",{initialValue:l.receiverAccount,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u8d26\u6237"},{type:"email",message:"\u8d26\u6237\u540d\u5e94\u4e3a\u90ae\u7bb1\u683c\u5f0f"}]})(q.a.createElement(i["a"],{style:{width:"calc(100% - 100px)"},placeholder:"test@example.com"})))),q.a.createElement(x["a"].Item,s()({},D,{label:"\u6536\u6b3e\u4eba\u59d3\u540d"}),n("receiverName",{initialValue:l.receiverName,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u59d3\u540d"}]})(q.a.createElement(i["a"],{placeholder:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u59d3\u540d"}))),q.a.createElement(x["a"].Item,s()({},D,{label:"\u8f6c\u8d26\u91d1\u989d"}),n("amount",{initialValue:l.amount,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8f6c\u8d26\u91d1\u989d"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"\u8bf7\u8f93\u5165\u5408\u6cd5\u91d1\u989d\u6570\u5b57"}]})(q.a.createElement(i["a"],{prefix:"\uffe5",placeholder:"\u8bf7\u8f93\u5165\u91d1\u989d"}))),q.a.createElement(x["a"].Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:D.wrapperCol.span,offset:D.labelCol.span}},label:""},q.a.createElement(m["a"],{type:"primary",onClick:p},"\u4e0b\u4e00\u6b65"))),q.a.createElement(c["a"],{style:{margin:"40px 0 24px"}}),q.a.createElement("div",{className:V.a.desc},q.a.createElement("h3",null,"\u8bf4\u660e"),q.a.createElement("h4",null,"\u8f6c\u8d26\u5230\u652f\u4ed8\u5b9d\u8d26\u6237"),q.a.createElement("p",null,"\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002"),q.a.createElement("h4",null,"\u8f6c\u8d26\u5230\u94f6\u884c\u5361"),q.a.createElement("p",null,"\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002")))}}]),a}(q.a.PureComponent))||r)||r);a["default"]=M}}]);