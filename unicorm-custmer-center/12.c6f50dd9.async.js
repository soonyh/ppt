(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"+akf":function(e,t,a){"use strict";var n=a("3rQ3"),l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=l(a("SeLb")),r=l(a("aG3W")),o=l(a("Sx57")),i=l(a("4zp0")),c=l(a("iVWQ")),u=l(a("lF+r")),f=l(a("PApH")),s=l(a("+S5U")),m=n(a("6cB7")),h=a("FXOc"),g=a("K0vg"),E=function(e){var t=e.onResize,a=e.width,n=(0,s.default)(e,["onResize","width"]);return a?m.default.createElement(g.Resizable,{width:a,height:0,onResize:t},m.default.createElement("th",n)):m.default.createElement("th",n)},p=function(e){function t(){var e,a;(0,o.default)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return a=(0,c.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(l))),a.state={columns:[{title:"Date",dataIndex:"date",width:200},{title:"Amount",dataIndex:"amount",width:100},{title:"Type",dataIndex:"type",width:100},{title:"Note",dataIndex:"note",width:100},{title:"Action",key:"action",render:function(){return m.default.createElement("a",{href:"javascript:;"},"Delete")}}]},a.components={header:{cell:E}},a.data=[{key:0,date:"2018-02-11",amount:120,type:"income",note:"transfer"},{key:1,date:"2018-03-11",amount:243,type:"income",note:"transfer"},{key:2,date:"2018-04-11",amount:98,type:"income",note:"transfer"}],a.handleResize=function(e){return function(t,n){var l=n.size;a.setState(function(t){var a=t.columns,n=(0,r.default)(a);return n[e]=(0,d.default)({},n[e],{width:l.width}),{columns:n}})}},a}return(0,f.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this,t=this.state.columns.map(function(t,a){return(0,d.default)({},t,{onHeaderCell:function(t){return{width:t.width,onResize:e.handleResize(a)}}})});return m.default.createElement(h.Table,{bordered:!0,components:this.components,columns:t,dataSource:this.data})}}]),t}(m.default.Component),v=p;t.default=v},"8cWB":function(e,t,a){"use strict";var n=a("3rQ3"),l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;for(var d=l(a("dnxz")),r=l(a("9bEj")),o=l(a("Sx57")),i=l(a("4zp0")),c=l(a("iVWQ")),u=l(a("lF+r")),f=l(a("PApH")),s=n(a("6cB7")),m=a("FXOc"),h=l(a("zHco")),g=l(a("D/dJ")),E=l(a("+akf")),p=s.default.createElement("div",null,s.default.createElement("div",{style:{marginBottom:16}},"\u66f4\u591a\u7528\u6cd5\u53c2\u8003",s.default.createElement("a",{href:"https://ant.design/components/table-cn/#API",target:"_blank"},"\u8fd9\u91cc"),s.default.createElement("div",null,s.default.createElement(g.default,{to:"/log/detail"},"\u670d\u52a1\u7aef\u5206\u9875\u5b9e\u4f8b")," ",s.default.createElement(m.Divider,{type:"vertical"}),s.default.createElement(g.default,{to:"/list/table-list"},"\u9ad8\u7ea7\u7528\u6cd5\u5b9e\u4f8b")))),v=[],k=1;k<=10;k++)v.push({key:k,name:"John Brown",age:"".concat(k,"2"),address:"New York No. ".concat(k," Lake Park"),description:"My name is John Brown, I am ".concat(k,"2 years old, living in New York No. ").concat(k," Lake Park.")});var w=function(e){return s.default.createElement("p",null,e.description)},y=function(){return"Here is title"},b=!0,C=function(){return"Here is footer"},S={y:240},x={position:"bottom"},I=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,c.default)(this,(0,u.default)(t).call(this,e)),a.handleToggle=function(e){return function(t){a.setState((0,r.default)({},e,t))}},a.handleSizeChange=function(e){a.setState({size:e.target.value})},a.handleExpandChange=function(e){a.setState({expandedRowRender:e?w:void 0})},a.handleTitleChange=function(e){a.setState({title:e?y:void 0})},a.handleHeaderChange=function(e){a.setState({showHeader:!!e&&b})},a.handleFooterChange=function(e){a.setState({footer:e?C:void 0})},a.handleRowSelectionChange=function(e){a.setState({rowSelection:e?{}:void 0})},a.handleScollChange=function(e){a.setState({scroll:e?S:void 0})},a.handleDataChange=function(e){a.setState({hasData:e})},a.handlePaginationChange=function(e){var t=e.target.value;a.setState({pagination:"none"!==t&&{position:t}})},a.state={bordered:!1,loading:!1,pagination:x,size:"default",expandedRowRender:w,title:void 0,showHeader:b,footer:C,rowSelection:{},scroll:void 0,hasData:!0},a}return(0,f.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.state;return s.default.createElement(h.default,{title:"\u5173\u4e8e\u8868\u683c",content:p},s.default.createElement(m.Row,{gutter:16},s.default.createElement(m.Col,{xs:24},s.default.createElement(m.Card,{title:"\u57fa\u7840\u7c7b\u578b",bordered:!1,style:{marginBottom:16}},s.default.createElement(m.Table,{columns:[{title:"Name",dataIndex:"name",key:"name",render:function(e){return s.default.createElement("a",{href:"javascript:;"},e)}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:function(e){return s.default.createElement("span",null,e.map(function(e){return s.default.createElement(m.Tag,{color:"blue",key:e},e)}))}},{title:"Action",key:"action",render:function(e,t){return s.default.createElement("span",null,s.default.createElement("a",{href:"javascript:;"},"Invite ",t.name),s.default.createElement(m.Divider,{type:"vertical"}),s.default.createElement("a",{href:"javascript:;"},"Delete"))}}],dataSource:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}]}))),s.default.createElement(m.Col,{xs:24},s.default.createElement(m.Card,{title:"\u5217\u5bbd\u53ef\u62d6\u62fd",bordered:!1,style:{marginBottom:16}},s.default.createElement(E.default,null))),s.default.createElement(m.Col,{xs:24},s.default.createElement(m.Card,{title:"\u9ad8\u7ea7\u8868\u683c - \u901a\u8fc7\u52a8\u6001\u5c5e\u6027\u5c55\u793atable\u80fd\u529b",bordered:!1,style:{marginBottom:16}},s.default.createElement("div",{className:"components-table-demo-control-bar"},s.default.createElement(m.Form,{layout:"inline"},s.default.createElement(m.Form.Item,{label:"Bordered"},s.default.createElement(m.Switch,{checked:e.bordered,onChange:this.handleToggle("bordered")})),s.default.createElement(m.Form.Item,{label:"loading"},s.default.createElement(m.Switch,{checked:e.loading,onChange:this.handleToggle("loading")})),s.default.createElement(m.Form.Item,{label:"Title"},s.default.createElement(m.Switch,{checked:!!e.title,onChange:this.handleTitleChange})),s.default.createElement(m.Form.Item,{label:"Column Header"},s.default.createElement(m.Switch,{checked:!!e.showHeader,onChange:this.handleHeaderChange})),s.default.createElement(m.Form.Item,{label:"Footer"},s.default.createElement(m.Switch,{checked:!!e.footer,onChange:this.handleFooterChange})),s.default.createElement(m.Form.Item,{label:"Expandable"},s.default.createElement(m.Switch,{checked:!!e.expandedRowRender,onChange:this.handleExpandChange})),s.default.createElement(m.Form.Item,{label:"Checkbox"},s.default.createElement(m.Switch,{checked:!!e.rowSelection,onChange:this.handleRowSelectionChange})),s.default.createElement(m.Form.Item,{label:"Fixed Header"},s.default.createElement(m.Switch,{checked:!!e.scroll,onChange:this.handleScollChange})),s.default.createElement(m.Form.Item,{label:"Has Data"},s.default.createElement(m.Switch,{checked:!!e.hasData,onChange:this.handleDataChange})),s.default.createElement(m.Form.Item,{label:"Size"},s.default.createElement(m.Radio.Group,{size:"default",value:e.size,onChange:this.handleSizeChange},s.default.createElement(m.Radio.Button,{value:"default"},"Default"),s.default.createElement(m.Radio.Button,{value:"middle"},"Middle"),s.default.createElement(m.Radio.Button,{value:"small"},"Small"))),s.default.createElement(m.Form.Item,{label:"Pagination"},s.default.createElement(m.Radio.Group,{value:e.pagination?e.pagination.position:"none",onChange:this.handlePaginationChange},s.default.createElement(m.Radio.Button,{value:"top"},"Top"),s.default.createElement(m.Radio.Button,{value:"bottom"},"Bottom"),s.default.createElement(m.Radio.Button,{value:"both"},"Both"),s.default.createElement(m.Radio.Button,{value:"none"},"None"))))),s.default.createElement(m.Table,(0,d.default)({},this.state,{columns:[{title:"Name",dataIndex:"name",key:"name",width:150,render:function(e){return s.default.createElement("a",{href:"javascript:;"},e)}},{title:"Age",dataIndex:"age",key:"age",width:70},{title:"Address",dataIndex:"address",key:"address"},{title:"Action",key:"action",width:360,render:function(e,t){return s.default.createElement("span",null,s.default.createElement("a",{href:"javascript:;"},"Action \u4e00 ",t.name),s.default.createElement(m.Divider,{type:"vertical"}),s.default.createElement("a",{href:"javascript:;"},"Delete"),s.default.createElement(m.Divider,{type:"vertical"}),s.default.createElement("a",{href:"javascript:;",className:"ant-dropdown-link"},"More actions ",s.default.createElement(m.Icon,{type:"down"})))}}],dataSource:e.hasData?v:null}))))))}}]),t}(s.Component),R=I;t.default=R}}]);