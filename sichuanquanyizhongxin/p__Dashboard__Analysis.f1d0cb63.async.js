(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{ZOrW:function(e,a,t){"use strict";t.r(a);t("14J3");var n,l,r,s=t("BMrR"),c=(t("jCWc"),t("kPKH")),i=(t("IzEo"),t("bx4M")),o=(t("FJo9"),t("L41K")),m=(t("qVdP"),t("jsC+")),_=(t("Pwec"),t("CtXQ")),u=(t("Telt"),t("Tckk")),p=(t("lUTK"),t("BvKs")),d=t("lwsE"),E=t.n(d),h=t("W8MJ"),g=t.n(h),f=t("a1gu"),v=t.n(f),y=t("Nsbk"),C=t.n(y),b=t("7W2i"),T=t.n(b),k=t("q1tI"),S=t.n(k),x=t("MuoO"),D=t("zHco"),N=t("v99g"),I=t("+n12"),P=t("lVjH"),j=t.n(P),w=t("xqX8"),R=t("ZhIB"),L=t.n(R),G=t("LNGj"),z=t.n(G),J=S.a.lazy(function(){return Promise.all([t.e(0),t.e(34)]).then(t.bind(null,"Y65U"))}),V=S.a.lazy(function(){return Promise.all([t.e(0),t.e(38)]).then(t.bind(null,"20K/"))}),W=S.a.lazy(function(){return Promise.all([t.e(0),t.e(35)]).then(t.bind(null,"noUa"))}),q=S.a.lazy(function(){return Promise.all([t.e(0),t.e(37)]).then(t.bind(null,"tLGd"))}),H=(S.a.lazy(function(){return Promise.all([t.e(0),t.e(36)]).then(t.bind(null,"Jqna"))}),n=Object(x["connect"])(function(e){var a=e.chart,t=e.loading;return{chart:a,loading:t.effects["chart/fetch"]}}),n((r=function(e){function a(){var e,t;E()(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=v()(this,(e=C()(a)).call.apply(e,[this].concat(l))),t.state={salesType:"all",currentTabKey:"",rangePickerValue:Object(I["b"])("year")},t.handleChangeSalesType=function(e){t.setState({salesType:e.target.value})},t.handleTabChange=function(e){t.setState({currentTabKey:e})},t.handleRangePickerChange=function(e){var a=t.props.dispatch;t.setState({rangePickerValue:e}),a({type:"chart/fetchSalesData"})},t.selectDate=function(e){var a=t.props.dispatch;t.setState({rangePickerValue:Object(I["b"])(e)}),a({type:"chart/fetchSalesData"})},t.isActive=function(e){var a=t.state.rangePickerValue,n=Object(I["b"])(e);return a[0]&&a[1]&&a[0].isSame(n[0],"day")&&a[1].isSame(n[1],"day")?j.a.currentDate:""},t}return T()(a,e),g()(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;this.reqRef=requestAnimationFrame(function(){e({type:"chart/fetch"})})}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"chart/clear"}),cancelAnimationFrame(this.reqRef)}},{key:"render",value:function(){var e,a=this.state,t=a.rangePickerValue,n=a.salesType,l=(a.currentTabKey,this.props),r=l.chart,d=l.loading,E=r.visitData,h=(r.visitData2,r.salesData),g=(r.searchData,r.offlineData,r.offlineChartData),f=r.salesTypeData,v=r.salesTypeDataOnline,y=r.salesTypeDataOffline;e="all"===n?f:"online"===n?v:y;var C=S.a.createElement(p["a"],null,S.a.createElement(p["a"].Item,null,"\u64cd\u4f5c\u4e00"),S.a.createElement(p["a"].Item,null,"\u64cd\u4f5c\u4e8c")),b=S.a.createElement("div",{className:j.a.pageHeaderContent},S.a.createElement("div",{className:j.a.avatar},S.a.createElement(u["a"],{size:"large",src:z.a})),S.a.createElement("div",{className:j.a.content},S.a.createElement("div",{className:j.a.contentTitle},"\u6b22\u8fceadmin \uff0c\u795d\u4f60\u5f00\u5fc3\u6bcf\u4e00\u5929\uff01"),S.a.createElement("div",null,"\u5de5\u53f7\uff1a10086 | \u4e2d\u56fd\u79fb\u52a8\u6709\u9650\u516c\u53f8 - \u5ba2\u6237\u670d\u52a1\u90e8"))),T=S.a.createElement("div",{className:j.a.extraContent},S.a.createElement("div",{className:j.a.statItem},S.a.createElement("p",null,"\u7f3a\u8d27\u9884\u8b66"),S.a.createElement("p",{className:j.a.warning},L()(18).format("0,0"))),S.a.createElement("div",{className:j.a.statItem},S.a.createElement("p",null,"\u5931\u6548\u9884\u8b66"),S.a.createElement("p",{className:j.a.danger},L()(34).format("0,0"))),S.a.createElement("div",{className:j.a.statItem},S.a.createElement("p",null,"\u6743\u76ca\u6570\u91cf"),S.a.createElement("p",null,L()(56).format("0,0"))),S.a.createElement("div",{className:j.a.statItem},S.a.createElement("p",null,"\u7528\u6237\u6570\u91cf"),S.a.createElement("p",null,L()(8846).format("0,0"))),S.a.createElement("div",{className:j.a.statItem},S.a.createElement("p",null,"\u5546\u6237\u6570\u91cf"),S.a.createElement("p",null,L()(2233).format("0,0")))),x=S.a.createElement("span",{className:j.a.iconGroup},S.a.createElement(m["a"],{overlay:C,placement:"bottomRight"},S.a.createElement(_["a"],{type:"ellipsis"})));return S.a.createElement(D["a"],{loading:d,content:b,extraContent:T},S.a.createElement(N["a"],null,S.a.createElement(k["Suspense"],null,S.a.createElement(i["a"],{title:"\u6743\u76ca\u6ce8\u518c\u7ba1\u7406\u6d41\u7a0b",bordered:!1,style:{marginBottom:24}},S.a.createElement(o["a"],{progressDot:!0,current:1},S.a.createElement(o["a"].Step,{title:"\u521b\u5efa\u5546\u6237"}),S.a.createElement(o["a"].Step,{title:"\u5f15\u5165\u8d44\u6e90"}),S.a.createElement(o["a"].Step,{title:"\u8d44\u6e90\u5165\u5e93"}),S.a.createElement(o["a"].Step,{title:"\u521b\u5efa\u5355\u6743\u76ca"}),S.a.createElement(o["a"].Step,{title:"\u521b\u5efa\u6743\u76ca\u5305"}),S.a.createElement(o["a"].Step,{title:"\u6743\u76ca\u5ba1\u6838"}),S.a.createElement(o["a"].Step,{title:"\u6743\u76ca\u4e0a\u4e0b\u67b6"})))),S.a.createElement(k["Suspense"],{fallback:S.a.createElement(w["default"],null)},S.a.createElement(J,{loading:d,visitData:E})),S.a.createElement(k["Suspense"],{fallback:null},S.a.createElement(V,{rangePickerValue:t,salesData:h,isActive:this.isActive,handleRangePickerChange:this.handleRangePickerChange,loading:d,selectDate:this.selectDate})),S.a.createElement("div",{className:j.a.twoColLayout},S.a.createElement(s["a"],{gutter:24},S.a.createElement(c["a"],{xl:12,lg:24,md:24,sm:24,xs:24},S.a.createElement(k["Suspense"],{fallback:null},S.a.createElement(W,{loading:d,offlineChartData:g,dropdownGroup:x}))),S.a.createElement(c["a"],{xl:12,lg:24,md:24,sm:24,xs:24},S.a.createElement(k["Suspense"],{fallback:null},S.a.createElement(q,{dropdownGroup:x,salesType:n,loading:d,salesPieData:e,handleChangeSalesType:this.handleChangeSalesType})))))))}}]),a}(k["Component"]),l=r))||l);a["default"]=H},lVjH:function(e,a,t){e.exports={iconGroup:"iconGroup___1aJZR",rankingList:"rankingList___3eFfU",rankingItemNumber:"rankingItemNumber___4sFHq",active:"active___sJx0I",rankingItemTitle:"rankingItemTitle___1QMsz",salesExtra:"salesExtra___3lmUQ",currentDate:"currentDate___37v_y",salesCard:"salesCard___3e3mP",salesBar:"salesBar___jte3z",salesRank:"salesRank___S1xpA",salesCardExtra:"salesCardExtra___2Tx5z",salesTypeRadio:"salesTypeRadio___gJ-xW",offlineCard:"offlineCard___3VS5A",twoColLayout:"twoColLayout___1Bh0Q",trendText:"trendText___1Y6yb",rankingTitle:"rankingTitle___lav3G",salesExtraWrap:"salesExtraWrap___2TZce",activitiesList:"activitiesList___ydgQe",username:"username___1-6oN",event:"event___-pxla",pageHeaderContent:"pageHeaderContent___2j5--",avatar:"avatar___2kHT8",content:"content___oGWoL",contentTitle:"contentTitle___2CBW8",extraContent:"extraContent____y2Ko",statItem:"statItem___2bNSg",members:"members___3ZJTZ",member:"member___27AKG",projectList:"projectList___2Jx61",cardTitle:"cardTitle___1YsRo",projectGrid:"projectGrid___2iEav",projectItemContent:"projectItemContent___1VCq1",datetime:"datetime___2tyfe",activeCard:"activeCard___1FjuY",danger:"danger___sWZRo",warning:"warning___1_oHq"}}}]);