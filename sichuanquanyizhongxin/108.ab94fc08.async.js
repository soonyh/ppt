(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[108],{sKZY:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return W});t("IzEo");var n,l,r,c,o=t("bx4M"),s=(t("qVdP"),t("jsC+")),m=(t("lUTK"),t("BvKs")),i=(t("/zsF"),t("PArb")),d=(t("+BJd"),t("mr32")),u=(t("14J3"),t("BMrR")),p=(t("Pwec"),t("CtXQ")),h=(t("+L6B"),t("2/Rp")),E=(t("OaEy"),t("2fM7")),g=(t("jCWc"),t("kPKH")),f=t("pVnL"),y=t.n(f),b=(t("5NDa"),t("5rEg")),v=(t("miYZ"),t("tsqr")),k=t("MVZn"),C=t.n(k),w=t("lwsE"),S=t.n(w),F=t("W8MJ"),R=t.n(F),x=t("a1gu"),N=t.n(x),M=t("Nsbk"),O=t.n(M),V=t("7W2i"),I=t.n(V),D=(t("y8nQ"),t("Vl3Y")),q=t("q1tI"),L=t.n(q),P=t("MuoO"),T=t("CkN6"),z=t("FLAs"),A=t.n(z),B=t("dfpp"),K={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},J=D["a"].Item,W=(n=Object(P["connect"])(function(e){var a=e.rightsProduct,t=e.loading;return{index:a.index,listData:a.listData,loading:t.models.product}}),l=D["a"].create(),n(r=l((c=function(e){function a(e){var t;return S()(this,a),t=N()(this,O()(a).call(this,e)),t.state={modalVisible:!1,viewModalVisible:!1,expandSearchForm:!1,selectedRows:[],formValues:{}},t.queryRights=function(e){var a=t.props.listData;t.props.dispatch({type:"rightsProduct/queryRights",payload:C()({pageSize:a.pagination.pageSize||10,pageNo:a.pagination.pageNo||1},e)})},t.handleTableChange=function(e){t.queryRights({pageSize:e.pageSize,pageNo:e.current})},t.handleMenuClick=function(e){var a=t.props.dispatch,n=t.state.selectedRows;if(n)switch(e.key){case"remove":a({type:"rule/remove",payload:{key:n.map(function(e){return e.key})},callback:function(){t.setState({selectedRows:[]})}});break;default:break}},t.handleSelectRows=function(e){t.setState({selectedRows:e})},t.handleModalVisible=function(e,a){t.setState({modalVisible:!!e,formValues:a||{}})},t.handleDeleteModalVisible=function(e){Modelconfirm({title:'\u786e\u5b9a\u8981\u5220\u9664"'.concat(e.mktResName,'"\u5417?'),onOk:function(){v["a"].success("\u5220\u9664\u6743\u76ca\u8d44\u6e90\u529f\u80fd\u8fd8\u672a\u5b8c\u6210\uff0c\u656c\u8bf7\u671f\u5f85!")}})},t.handleAdd=function(e){t.handleModalVisible()},t.changeStatus=function(e,a,t){},t.handleSearch=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){e||t.queryRights(a)})},t.handleFormReset=function(){t.props.form.resetFields(),t.queryRights()},t.toggleForm=function(){var e=t.state.expandSearchForm;t.setState({expandSearchForm:!e})},t.renderSimpleForm=function(){var e=t.props.form.getFieldDecorator;return L.a.createElement(D["a"],{onSubmit:t.handleSearch},L.a.createElement(u["a"],{gutter:{md:8,lg:24,xl:48}},L.a.createElement(g["a"],{md:8,sm:24},L.a.createElement(J,y()({label:"\u6743\u76ca\u6863\u6848"},K),e("couponNameOrNbr")(L.a.createElement(b["a"],{placeholder:"\u8bf7\u8f93\u5165\u6743\u76ca\u540d\u79f0\u6216\u7f16\u7801"})))),L.a.createElement(g["a"],{md:8,sm:24},L.a.createElement(J,y()({label:"\u5ba1\u6838\u72b6\u6001"},K),e("statusCd")(L.a.createElement(E["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"}},L.a.createElement(Option,{value:"0"},"\u5f85\u5ba1\u6838"),L.a.createElement(Option,{value:"1"},"\u5ba1\u6838"))))),L.a.createElement(g["a"],{md:8,sm:24},L.a.createElement("span",{className:A.a.submitButtons},L.a.createElement(h["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),L.a.createElement(h["a"],{style:{marginLeft:8},onClick:t.handleFormReset},"\u91cd\u7f6e"),L.a.createElement("a",{style:{marginLeft:8},onClick:t.toggleForm},"\u5c55\u5f00 ",L.a.createElement(p["a"],{type:"down"}))))))},t.renderAdvancedForm=function(){var e=t.props.form.getFieldDecorator;return L.a.createElement(D["a"],{onSubmit:t.handleSearch},L.a.createElement(u["a"],{gutter:{md:8,lg:24,xl:48}},L.a.createElement(g["a"],{md:8,sm:24},L.a.createElement(J,y()({label:"\u6743\u76ca\u6863\u6848"},K),e("couponNameOrNbr")(L.a.createElement(b["a"],{placeholder:"\u8bf7\u8f93\u5165\u6743\u76ca\u540d\u79f0\u6216\u7f16\u7801"})))),L.a.createElement(g["a"],{md:8,sm:24},L.a.createElement(J,y()({label:"\u5ba1\u6838\u72b6\u6001"},K),e("statusCd")(L.a.createElement(E["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"}},L.a.createElement(Option,{value:"0"},"\u5f85\u5ba1\u6838"),L.a.createElement(Option,{value:"1"},"\u5ba1\u6838"))))),L.a.createElement(g["a"],{md:8,sm:24},L.a.createElement("span",{className:A.a.submitButtons},L.a.createElement(h["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),L.a.createElement(h["a"],{style:{marginLeft:8},onClick:t.handleFormReset},"\u91cd\u7f6e"),L.a.createElement("a",{style:{marginLeft:8},onClick:t.toggleForm},"\u6536\u8d77 ",L.a.createElement(p["a"],{type:"up"}))))),L.a.createElement(u["a"],{gutter:{md:8,lg:24,xl:48}},L.a.createElement(g["a"],{md:8,sm:24},L.a.createElement(J,y()({label:"\u6743\u76ca\u7c7b\u578b"},K),e("rightType")(L.a.createElement(E["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"}},L.a.createElement(Option,{value:"0"},"\u7c7b\u578b1"),L.a.createElement(Option,{value:"1"},"\u7c7b\u578b2"))))),L.a.createElement(g["a"],{md:8,sm:24},L.a.createElement(J,y()({label:"\u9002\u7528\u573a\u666f"},K),e("couponScene")(L.a.createElement(E["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"}},L.a.createElement(Option,{value:"0"},"\u573a\u666f1"),L.a.createElement(Option,{value:"1"},"\u573a\u666f2")))))),L.a.createElement(u["a"],{gutter:{md:8,lg:24,xl:48}},L.a.createElement(g["a"],{md:8,sm:24},L.a.createElement(J,y()({label:"\u6e20\u9053\u7c7b\u578b"},K),e("manageRegionId")(L.a.createElement(E["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"}},L.a.createElement(Option,{value:"0"},"\u6e20\u90531"),L.a.createElement(Option,{value:"1"},"\u6e20\u90531"))))),L.a.createElement(g["a"],{md:8,sm:24},L.a.createElement(J,y()({label:"\u6e20\u9053\u540d\u79f0"},K),e("manageRegionName")(L.a.createElement(b["a"],{placeholder:"\u8bf7\u8f93\u5165\u6e20\u9053\u540d\u79f0"}))))))},t.renderForm=function(){var e=t.state.expandSearchForm;return e?t.renderAdvancedForm():t.renderSimpleForm()},t.columns=[{title:"\u6743\u76ca\u7f16\u7801",dataIndex:"couponNbr"},{title:"\u6743\u76ca\u540d\u79f0",dataIndex:"couponName"},{title:"\u6743\u76ca\u7c7b\u578b",dataIndex:"couponType"},{title:"\u9002\u7528\u573a\u666f",dataIndex:"couponScene"},{title:"\u72b6\u6001",dataIndex:"statusCd",render:function(e){var a=B["a"].userStatusMap[e];switch(Number(e)){case 0:return L.a.createElement(d["a"],{color:"red"},a);case 1:return L.a.createElement(d["a"],{color:"geekblue"},a);case 2:return L.a.createElement(d["a"],null,a);case 3:return L.a.createElement(d["a"],{color:"purple"},a);default:return L.a.createElement(d["a"],null,a)}}},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updateDate"},{title:"\u64cd\u4f5c",dataIndex:"operation",render:function(e,a,n){return L.a.createElement("div",null,L.a.createElement(q["Fragment"],null,L.a.createElement("a",{onClick:function(){return t.handleModalVisible(!0,a)}},"\u4fee\u6539"),L.a.createElement(i["a"],{type:"vertical"}),L.a.createElement("a",{onClick:function(){return t.handleDeleteModalVisible(a)}},"\u5220\u9664")),0===a.statusCd?L.a.createElement("a",{onClick:function(){return t.changeStatus(n,a,1)}},"\u542f\u7528"):null,1===a.statusCd?L.a.createElement("a",{onClick:function(){return t.changeStatus(n,a,0)}},"\u7981\u7528"):null,3===a.statusCd?L.a.createElement("a",{onClick:function(){return t.changeStatus(n,a,1)}},"\u89e3\u9501"):null)}}],t}return I()(a,e),R()(a,[{key:"componentWillMount",value:function(){this.queryRights()}},{key:"render",value:function(){var e=this,a=this.state.selectedRows,t=this.props.listData,n=L.a.createElement(m["a"],{onClick:this.handleMenuClick,selectedKeys:[]},L.a.createElement(m["a"].Item,{key:"remove"},"\u5220\u9664"));this.handleAdd,this.handleModalVisible;return L.a.createElement(o["a"],{title:"\u6743\u76ca\u4ea7\u54c1\u914d\u7f6e",extra:L.a.createElement(h["a"],{icon:"plus",type:"primary",ghost:!0,onClick:function(){e.props.dispatch({type:"rightsProduct/skip",payload:{index:1,stepIndex:0,baseForm:{}}})}},"\u65b0\u5efa")},L.a.createElement("div",{className:A.a.tableListForm},this.renderForm()),L.a.createElement("div",{className:A.a.tableListOperator},a.length>0&&L.a.createElement("span",null,L.a.createElement(h["a"],null,"\u6279\u91cf\u64cd\u4f5c"),L.a.createElement(s["a"],{overlay:n},L.a.createElement(h["a"],null,"\u66f4\u591a\u64cd\u4f5c ",L.a.createElement(p["a"],{type:"down"}))))),L.a.createElement(T["a"],{rowKey:"mktResCouponId",columns:this.columns,selectedRows:a,onSelectRow:this.handleSelectRows,data:t,onChange:this.handleTableChange}))}}]),a}(q["PureComponent"]),r=c))||r)||r)}}]);