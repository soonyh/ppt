(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"4wLU":function(e,t,a){"use strict";var l=a("3rQ3"),r=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("Sx57")),d=r(a("4zp0")),u=r(a("iVWQ")),o=r(a("lF+r")),i=r(a("PApH")),c=l(a("6cB7")),m=a("FXOc"),s=(a("L5c0"),r(a("UvLJ"))),f=(a("KTCi"),a("4R31")),p=r(a("CQFD")),E=function(e){var t=e.title,a=e.value,l=e.bordered;return c.default.createElement("div",{className:s.default.headerInfo},c.default.createElement("p",null,a),c.default.createElement("span",null,t),l&&c.default.createElement("em",null))},g=["\u63a7\u4ef6\u5927\u5c0f\u3002\u6ce8\uff1a\u6807\u51c6\u8868\u5355\u5185\u7684\u8f93\u5165\u6846\u5927\u5c0f\u9650\u5236\u4e3a large\u3002\u53ef\u9009 large default small",'\u58f0\u660e input \u7c7b\u578b\uff0c\u540c\u539f\u751f input \u6807\u7b7e\u7684 type \u5c5e\u6027\uff0c\u89c1\uff1aMDN(\u8bf7\u76f4\u63a5\u4f7f\u7528 Input.TextArea \u4ee3\u66ff type="textarea")\u3002',"\u81ea\u9002\u5e94\u5185\u5bb9\u9ad8\u5ea6\uff0c\u53ef\u8bbe\u7f6e\u4e3a true|false \u6216\u5bf9\u8c61\uff1a{ minRows: 2, maxRows: 6 }","\u8f93\u5165\u6846\u5185\u5bb9","Input \u7684\u5176\u4ed6\u5c5e\u6027\u548c React \u81ea\u5e26\u7684 input \u4e00\u81f4\u3002"],h=[{title:"\u5ba2\u6237\u540d\u79f0",dataIndex:"name",key:"name",width:"50%",render:function(e){return c.default.createElement("a",{href:"javascript:;"},c.default.createElement(m.Ellipsis,{length:50,tooltip:!0},e))}},{title:"\u5408\u540c\u540d\u79f0",dataIndex:"age",key:"age"}],k=[{name:"\u5b58\u91cf","Jan.":18.9,"Feb.":28.8,"Mar.":39.3,"Apr.":81.4,May:47,"Jun.":20.3,"Jul.":24,"Aug.":35.6},{name:"\u589e\u91cf","Jan.":12.4,"Feb.":23.2,"Mar.":34.5,"Apr.":99.7,May:52.6,"Jun.":35.5,"Jul.":37.4,"Aug.":42.4}],v=new p.default,y=v.createView().source(k);y.transform({type:"fold",fields:["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug."],key:"\u6708\u4efd",value:"\u6708\u5747\u964d\u96e8\u91cf"});var w=[{key:"1",name:"John BrownNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],b=function(e){function t(e){var a;return(0,n.default)(this,t),a=(0,u.default)(this,(0,o.default)(t).call(this,e)),a.handleChangeSalesType=function(e){a.setState({salesType:e.target.value})},a.state={salesType:"telephone"},a}return(0,i.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.state.salesType;return c.default.createElement("div",null,c.default.createElement(m.Row,{gutter:16},c.default.createElement(m.Col,{lg:12,md:24},c.default.createElement(m.Card,{bordered:!1,className:"margin-bottom"},c.default.createElement(m.Row,null,c.default.createElement(m.Col,{sm:8,xs:24},c.default.createElement(E,{title:"\u6211\u7684\u9884\u8b66",value:"278",bordered:!0})),c.default.createElement(m.Col,{sm:8,xs:24},c.default.createElement(E,{title:"\u6211\u7684\u5f85\u529e",value:"8278",bordered:!0})),c.default.createElement(m.Col,{sm:8,xs:24},c.default.createElement(E,{title:"\u6211\u7684\u5f85\u9605",value:"28"})))),c.default.createElement(m.Card,{bordered:!1,title:"\u6211\u7684\u5ba2\u6237",className:"margin-bottom",extra:c.default.createElement("a",{href:"##"},"\u66f4\u591a")},c.default.createElement(m.Ellipsis,{tooltip:!0,lines:1},c.default.createElement("p",null,"There were injuries alleged in three ",c.default.createElement("a",{href:"#cover"},"cases in 2015"),", and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.")),c.default.createElement(m.List,{bordered:!1,dataSource:g,renderItem:function(e){return c.default.createElement(m.List.Item,null,e)}})),c.default.createElement(m.Card,{bordered:!1,title:"\u6211\u7684\u5408\u540c",className:"margin-bottom",extra:c.default.createElement("a",{href:"##"},"\u66f4\u591a")},c.default.createElement(m.Table,{columns:h,dataSource:w,pagination:!1,size:"middle"}))),c.default.createElement(m.Col,{lg:12,md:24},c.default.createElement(m.Card,{bordered:!1,title:"\u6211\u7684\u6536\u5165",className:"margin-bottom",extra:c.default.createElement("div",null,c.default.createElement(m.Radio.Group,{value:e,onChange:this.handleChangeSalesType,buttonStyle:"solid"},c.default.createElement(m.Radio.Button,{value:"telephone"},"\u56fa\u8bdd"),c.default.createElement(m.Radio.Button,{value:"idc"},"IDC"),c.default.createElement(m.Radio.Button,{value:"networkElement"},"\u7f51\u5143\u51fa\u79df"),c.default.createElement(m.Radio.Button,{value:"circuit "},"\u7535\u8def\u51fa\u79df"),c.default.createElement(m.Radio.Button,{value:"internet"},"\u4e92\u8054\u7f51\u4e13\u7ebf")))},c.default.createElement(f.Chart,{height:300,data:y,forceFit:!0,padding:[40,30]},c.default.createElement(f.Axis,{name:"\u5b58\u91cf"}),c.default.createElement(f.Axis,{name:"\u589e\u91cf"}),c.default.createElement(f.Legend,{position:"top-right"}),c.default.createElement(f.Tooltip,{crosshairs:{type:"y"}}),c.default.createElement(f.Geom,{type:"interval",position:"\u6708\u4efd*\u6708\u5747\u964d\u96e8\u91cf",color:["name",["#fd7766","#7db8f9"]],adjust:[{type:"dodge",marginRatio:1/32}]}))))))}}]),t}(c.Component),N=b;t.default=N},UvLJ:function(e,t,a){e.exports={headerInfo:"headerInfo___MqxBO"}}}]);