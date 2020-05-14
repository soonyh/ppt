  function getDataType(data) {
      var str = Object.prototype.toString.call(data);
      return str.split(' ')[1].substring(0, str.split(' ')[1].length - 1)
  }
  $(document).ajaxSuccess(function(event, jqXHR, ajaxOptions) {
      var data = ajaxOptions.data == undefined ? null : ajaxOptions.data
          // 只能打印出get类型的传参
      console.group('===================');
      console.info('请求地址：%s', ajaxOptions.url);
      console.log('提交数据 [%s]: %s', getDataType(data), decodeURIComponent(data));
      if (jqXHR.responseJSON) {
          console.log('返回数据 [%s]: %s', getDataType(jqXHR.responseJSON), JSON.stringify(jqXHR.responseJSON, null, '\t'))
      };
      console.groupEnd();
  });
  var Random = Mock.Random;
  Mock.mock(/api\/user\/login/, function(options) {
      var body = JSON.parse(options.body);
      var loginPwd = body.loginPwd;
      var loginName = body.loginName;
      var type = body.type;
      if (options.type == 'POST') {
          if (loginPwd === '123' && loginName === 'admin') {
              return Mock.mock({
                  resultCode: '0',
                  resultMsg: '处理成功',
                  resultData: {
                      adminUser: {
                          userId: '1',
                          loginName: 'admin',
                          statusCd: 1,
                          userName: '超级管理员',
                          remark: 'mkk',
                          userFounder: 1,
                          relType: null,
                          relNo: null,
                          lanId: null,
                          relCode: '150729432400038458',
                          curLoginTime: '2019-03-14 17:25:25',
                          lastLoginTime: '2019-03-14 17:01:46',
                          failLoginCnt: 0,
                          successLoginCnt: 18447,
                          phoneNo: '180****1111',
                          orgId: '07XX',
                          orgName: null,
                          email: '155@qq.com',
                          regionId: '430103',
                          createStaff: null,
                          createDate: '2018-12-14 11:13:36',
                          updateStaff: '1',
                          updateDate: '2018-12-14 11:14:33',
                          sysPostId: null,
                          sysPostName: null,
                      },
                      userOtherMsg: {
                          user: {
                              userId: '1',
                              loginName: 'admin',
                              statusCd: 1,
                              userName: '超级管理员',
                              remark: 'mkk',
                              userFounder: 1,
                              relType: null,
                              relNo: null,
                              lanId: null,
                              relCode: '150729432400038458',
                              curLoginTime: '2019-03-14 17:25:25',
                              lastLoginTime: '2019-03-14 17:01:46',
                              failLoginCnt: 0,
                              successLoginCnt: 18447,
                              phoneNo: '180****1111',
                              orgId: '07XX',
                              orgName: null,
                              email: '155@qq.com',
                              regionId: '430103',
                              createStaff: null,
                              createDate: '2018-12-14 11:13:36',
                              updateStaff: '1',
                              updateDate: '2018-12-14 11:14:33',
                              sysPostId: null,
                              sysPostName: null,
                          },
                          merchant: null,
                          partnerShop: null,
                          partner: null,
                          supplier: null,
                          businessEntity: null,
                          userRoleList: [{
                              id: '1085090655003877378',
                              userId: '1',
                              userName: '超级管理员',
                              roleId: '1068466946915516417',
                              roleName: '超级管理员角色',
                              createStaff: '1',
                              createDate: '2019-01-15 16:25:46',
                          }, ],
                      },
                      userMenu: [],
                      shopInfo: null,
                      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX',
                      loginStatusCode: '1',
                      loginStatusMsg: '已登陆',
                  },
              })
          } else {
              Mock.mock({
                  resultCode: '1',
                  resultMsg: '登录失败',
                  resultData: {
                      type:type,
                      currentAuthority: 'guest',
                  },
              })
          }
      }
  })
  Mock.setup({
      timeout: '600'
  });
  var platformMap = [{
      value: 1,
      label: '爱奇艺'
  }, {
      value: 2,
      label: '腾讯'
  }, {
      value: 3,
      label: '优酷'
  }, {
      value: 4,
      label: 'Boss'
  }, {
      value: 5,
      label: '权益中心'
  }, {
      value: 6,
      label: '京东'
  }, {
      value: 7,
      label: '盒马鲜生'
  }, ];
  Mock.mock(/audit\/queryList/, function(options) {
      var body = JSON.parse(options.body);
      var current = body.current;
      var pageSize = body.pageSize;
      var total = body.total;
      var rightName = body.rightName;
      var statusType = body.statusType;
      if (options.type == 'POST') {
          return Mock.mock({
              resultCode: '0',
              resultMsg: '操作成功!',
              resultObject: {
                  'list|10': [{
                      'id|+1': 1,
                      orderCode: '@natural(100000,100000000)',
                      rightName: rightName || '@cword(10,20)',
                      'resourceType|1': platformMap,
                      'statusType|1': ['开通成功', '开通失败：错误码券'],
                      createDate: '@datetime("yyyy-MM-dd HH:mm:ss")',
                  }, ],
                  pagination: {
                      current: current || 1,
                      pageSize: pageSize || 10,
                      total: total || '@natural(14,1000)',
                  },
              },
          })
      }
  })
  var resourceTypeMap = [{
      value: 'heBao',
      label: '和包券'
  }, {
      value: 'diYongJin',
      label: '合作商户抵用金'
  }, {
      value: 'tiYanKa',
      label: '服务体验卡'
  }, {
      value: 'huiYuan1',
      label: '互联网会员(固定期限)'
  }, {
      value: 'huiYuan2',
      label: '互联网会员(连续包月)'
  }, ];
  Mock.mock(/resourceManagement\/queryResourceInfo/, function(options) {
      var body = JSON.parse(options.body);
      var resourceType = body.resourceType;
      var id = body.id;
      var mktResName;
      switch (resourceType) {
          case 'heBao':
              mktResName = '和包券';
              break;
          case 'diYongJin':
              mktResName = '合作商户抵用金';
              break;
          case 'tiYanKa':
              mktResName = '服务体验卡';
              break;
          case 'huiYuan1':
              mktResName = '互联网会员(固定期限)';
              break;
          case 'huiYuan2':
              mktResName = '互联网会员(连续包月)';
              break;
      }
      if (options.type == 'POST') {
          return Mock.mock({
              resultCode: '0',
              resultMsg: '请求正常',
              resultObject: {
                  mktResName: function() {
                      return mktResName + ' - ' + Random.cword(10, 20);
                  },
                  mktResId: '3',
                  partnerId: '3',
                  MktResource: '3',
                  regionCd: '1',
                  createDateRange: ['2019-03-16', '2029-03-16'],
                  code: '@natural(10000,1000000)',
                  kuCun: '@natural(10000,1000000)',
                  invalidDate: '2029-03-16',
                  departmentCd: '1',
                  qiYongQuDao: true,
                  isMobileNumber: true,
                  usageMode: ['1'],
                  shiYongShiXiao: '1',
                  shiYongShiXiaoNumber: '',
                  shiYongCiShu: '1',
                  isNeedAppointment: '1',
                  appointmentLimit: '1',
                  website: '@url()',
                  jieSuanDanJia: '50',
                  jieSuanShiJian: '1',
                  shiYongHeXiao: '1',
              },
          })
      }
  });
  Mock.mock(/resourceManagement\/queryList/, function(options) {
      var body = JSON.parse(options.body);
      var current = body.current;
      var pageSize = body.pageSize;
      var total = body.total;
      var resourceName = body.resourceName;
      var statusType = body.statusType;
      if (options.type == 'POST') {
          return Mock.mock({
              resultCode: '0',
              resultMsg: '操作成功!',
              resultObject: {
                  'list|10': [{
                      'id|+1': 1,
                      resourceCode: '@natural(100000,100000000)',
                      resourceName: resourceName || '@cword(10,20)',
                      'resourceType|1': resourceTypeMap,
                      price: '@natural(10,1000)',
                      statusType: statusType != undefined ? statusType : '@natural(0,1)',
                      createDate: '@datetime("yyyy-MM-dd HH:mm:ss")',
                  }, ],
                  pagination: {
                      current: current || 1,
                      pageSize: pageSize || 10,
                      total: total || '@natural(14,1000)',
                  },
              },
          })
      }
  });

  var rightsStyle = [{
      value: 'heBao',
      label: '和包券权益'
  }, {
      value: 'diYongJin',
      label: '抵金券权益'
  }, {
      value: 'tiYanKa',
      label: '体验卡权益'
  }, {
      value: 'huiYuan1',
      label: '互联网会员权益'
  }, {
      value: 'rightsGroup',
      label: '权益包'
  }, ];
  var canal =[{
      value: 'heBao',
      label: '权益商城'
  }, {
      value: 'diYongJin',
      label: '和生活'
  }, {
      value: 'tiYanKa',
      label: 'BOSS'
  }];
  var couponScene =[{
      value: 'heBao',
      label: '影音会员'
  }, {
      value: 'diYongJin',
      label: '旅游出行'
  }, {
      value: 'tiYanKa',
      label: '支付优惠'
  }, {
      value: 'huiYuan1',
      label: '流量语音'
  }, {
      value: 'rightsGroup',
      label: '移动服务'
  }, ];
  var couponArea =[{
      value: 'heBao',
      label: '四川/成都'
  }, {
      value: 'diYongJin',
      label: '全国'
  } ];

  var salesState =[{
      value: 'heBao',
      label: '上架'
  }, {
      value: 'diYongJin',
      label: '再售'
  }, {
      value: 'tiYanKa',
      label: '缺货'
  }, {
      value: 'huiYuan1',
      label: '下架'
  } ];

  Mock.mock(/rightsManagement\/queryList/, function(options) {
      var body = JSON.parse(options.body);
      var current = body.current;
      var pageSize = body.pageSize;
      var total = body.total;
      var statusCd = body.statusCd;
      if (options.type == 'POST') {
          return Mock.mock({
              resultCode: '0',
              resultMsg: '操作成功!',
              resultObject: {
                  'list|10': [
                      {
                          'key|+1': current === 1 ? 0 : (current - 1) * 10,
                          couponNbr: '@natural(100000,100000000)',
                          couponName: '@cword(10,20)',
                          couponType: rightsStyle[Math.ceil(Math.random() * 4)].label,
                          couponScene: couponScene[Math.ceil(Math.random() * 4)].label,
                          statusCd: statusCd != undefined ? statusCd : '@natural(0,1)',
                          updateDate: '@datetime("yyyy-MM-dd HH:mm:ss")',
                      },
                  ],
                  pagination: {
                      current: current || 1,
                      pageSize: pageSize || 10,
                      total: total || '@natural(14,1000)'
                  }
              },
          })
      }
  });
  Mock.mock(/rightsManagement\/queryGroupList/, function(options) {
      var body = JSON.parse(options.body);
      var current = body.current;
      var pageSize = body.pageSize;
      var total = body.total;
      var statusCd = body.statusCd;
      if (options.type == 'POST') {
          return Mock.mock({
              resultCode: '0',
              resultMsg: '操作成功!',
              resultObject: {
                  'list|10': [
                      {
                          'key|+1': current === 1 ? 0 : (current - 1) * 10,
                          couponNbr:  '@natural(100000,100000000)',
                          couponName: '@cword(5,10)',
                          couponType: rightsStyle[Math.ceil(Math.random()*3)].label,
                          couponScene: couponScene[Math.ceil(Math.random()*3)].label,
                          salesState: salesState[Math.ceil(Math.random()*3)].label,
                          sum:'@natural(100,100000)',
                          canal: canal[Math.ceil(Math.random()*2)].label,
                          updateDate: '@datetime("yyyy-MM-dd HH:mm:ss")',
                      },
                  ],
                  pagination:{
                      current:current || 1,
                      pageSize:pageSize ||10,
                      total:total || '@natural(14,1000)'
                  }
              },
          })
      }
  });

  var resourceStyle = [{
      value: 'heBao',
      label: '资源类/和包券'
  }, {
      value: 'diYongJin',
      label: '资源类/抵金券'
  }, {
      value: 'tiYanKa',
      label: '资源类/体验卡'
  }, {
      value: 'huiYuan1',
      label: '资源类/互联网会员'
  } ];

  var timeStyle = [{
      value: 'heBao',
      label: '即时'
  }, {
      value: 'diYongJin',
      label: '365天'
  }, {
      value: 'tiYanKa',
      label: '包月'
  }];
  Mock.mock(/rightsManagement\/queryResourceList/, function(options) {
      var body = JSON.parse(options.body);
      var current = body.current;
      var pageSize = body.pageSize;
      var total = body.total;
      var statusCd = body.statusCd;
      if (options.type == 'POST') {
          return Mock.mock({
              resultCode: '0',
              resultMsg: '操作成功!',
              resultObject: {
                  'list|5': [
                      {
                          'key|+1': current === 1 ? 0 : (current - 1) * 5,
                          couponNbr:  '@natural(100000,100000000)',
                          couponName: '@cword(10,20)',
                          resourceStyle: resourceStyle[Math.ceil(Math.random()*3)].label,
                          timeStyle: timeStyle[Math.ceil(Math.random()*2)].label,
                          couponArea:couponArea[Math.ceil(Math.random())].label,
                      },
                  ],
                  pagination:{
                      current:current || 1,
                      pageSize:pageSize ||5,
                      total:total || '@natural(14,1000)'
                  }
              },
          })
      }
  });

// ly
    Mock.mock(/cust\/queryRightsIssue\/data.do/, function(options) {
        var body = JSON.parse(options.body);
        var pageNum = body.pageNum;
        var pageSize = body.pageSize;
        if (options.type == 'POST') {
            return Mock.mock({
            resultCode: '0',
            resultMsg: '操作成功!',
            resultObject: {
                pageNum: pageNum,
                pageSize: pageSize,
                size: 10,
                startRow: 1,
                endRow: 10,
                total: '@natural(1,500)',
                pages: 2,
                'list|10': [
                    {
                        resource: '@csentence(5)',
                        'curNum|0-3': 0,
                        id: '@ip',
                        name:'@csentence(3,5)',
                        date: '@datetime("yyyy-MM-dd HH:mm:ss")',
                        "phone|1-10000000000000000":100000000000,
                    },
                ],
                prePage: 0,
                nextPage: 2,
                isFirstPage: true,
                isLastPage: false,
                hasPreviousPage: false,
                hasNextPage: true,
                navigatePages: 8,
                navigatepageNums: [1, 2],
                navigateFirstPage: 1,
                navigateLastPage: 2,
                lastPage: 2,
                firstPage: 1,
            },
            })
        }
    });

    Mock.mock(/cust\/queryDetailInfo\/detail.do/, function(options) {
    var body = JSON.parse(options.body);
    var pageNum = body.pageNum;
    var pageSize = body.pageSize;
    if (options.type == 'POST') {
        return Mock.mock({
            resultCode: '0',
            resultMsg: '操作成功!',
            resultObject: {
                baseInfo:{
                    titleName:'@csentence(5,7)',
                    applyReason:'@csentence(3,5)',
                    note:'@csentence(3,5)',
                    preeMemory:1000
                },
                rightsSendDate:{
                    'sendDateStates|1-2':1,
                    sendDate:'@datetime("yyyy-MM-dd HH:mm:ss")',
                },
                'logList|4':[
                    {
                        'id|+1':1,
                        'link|+1':0,
                        dealPerson:'@cname',
                        'dealStates|0-2':0,
                        dealDate:'@datetime("yyyy-MM-dd HH:mm:ss")',
                        'dealResult|0-1':0,
                        dealIdea:'尽快启用'
                    }
                ],
                'rightsContentList|3': [
                    {
                        'everySendNum|0-3': 0,
                        rightsType: '资源权益',
                        rightsId: '@ip',
                        rightsName:'@csentence(3,5)',
                        date:'365天',
                        address:'四川省/成都市'
                    },
                ],
                
            },
        })
    }
    });

    Mock.mock(/cust\/queryData\/data.do/, function(options) {
    var body = JSON.parse(options.body);
    var pageNum = body.pageNum;
    var pageSize = body.pageSize;
    if (options.type == 'POST') {
        return Mock.mock({
            resultCode: '0',
            resultMsg: '操作成功!',
            resultObject: {
                pageNum: pageNum,
                pageSize: pageSize,
                size: 10,
                startRow: 1,
                endRow: 10,
                total: '@natural(1,500)',
                pages: 2,
                'list|10': [
                    {
                        type: '@cname',
                        number:500,
                        id: '@ip',
                        name:'@cname',
                        date: '@datetime("yyyy-MM-dd HH:mm:ss")',
                    },
                ],
                prePage: 0,
                nextPage: 2,
                isFirstPage: true,
                isLastPage: false,
                hasPreviousPage: false,
                hasNextPage: true,
                navigatePages: 8,
                navigatepageNums: [1, 2],
                navigateFirstPage: 1,
                navigateLastPage: 2,
                lastPage: 2,
                firstPage: 1,
            },
        })
    }
    });

    Mock.mock(/cust\/queryToRuleManage\/data.do/, function(options) {
    var body = JSON.parse(options.body);
    var pageNum = body.pageNum;
    var pageSize = body.pageSize;
    if (options.type == 'POST') {
        return Mock.mock({
            resultCode: '0',
            resultMsg: '操作成功!',
            resultObject: {
                pageNum: pageNum,
                pageSize: pageSize,
                size: 10,
                startRow: 1,
                endRow: 10,
                total: '@natural(1,500)',
                pages: 2,
                'list|10': [
                    {
                        rightsType: '@csentence(5)',
                        'states|0-4': 0,
                        id: '@ip',
                        name:'@csentence(3,5)',
                        date: '@datetime("yyyy-MM-dd HH:mm:ss")',
                    },
                ],
                prePage: 0,
                nextPage: 2,
                isFirstPage: true,
                isLastPage: false,
                hasPreviousPage: false,
                hasNextPage: true,
                navigatePages: 8,
                navigatepageNums: [1, 2],
                navigateFirstPage: 1,
                navigateLastPage: 2,
                lastPage: 2,
                firstPage: 1,
            },
        })
    }
    });

    Mock.mock(/cust\/queryToRuleManageDetailInfo\/detail.do/, function(options) {
    var body = JSON.parse(options.body);
    var pageNum = body.pageNum;
    var pageSize = body.pageSize;
    if (options.type == 'POST') {
        return Mock.mock({
            resultCode: '0',
            resultMsg: '操作成功!',
            resultObject: {
                baseInfo:{
                    titleName:'@csentence(5,7)',
                    applyReason:'@csentence(3,5)',
                    note:'@csentence(3,5)',
                    preeMemory:1000
                },
                rightsSendDate:{
                    'sendDateStates|1-2':1,
                    sendDate:'@datetime("yyyy-MM-dd HH:mm:ss")',
                },
                'logList|4':[
                    {
                        'id|+1':1,
                        'link|+1':0,
                        dealPerson:'@cname',
                        'dealStates|0-2':0,
                        dealDate:'@datetime("yyyy-MM-dd HH:mm:ss")',
                        'dealResult|0-1':0,
                        dealIdea:'尽快启用'
                    }
                ],
                'rightsContentList|3': [
                    {
                        'everySendNum|0-3': 0,
                        rightsType: '资源权益',
                        rightsId: '@ip',
                        rightsName:'@csentence(3,5)',
                        date:'365天',
                        address:'四川省/成都市'
                    },
                ],
                
            },
        })
    }
    });

