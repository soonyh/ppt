var Random = Mock.Random;
Mock.setup({
    timeout: '1000'
});
/**
 * 把"a=2&b=3&c=4" 字符串序列化成 {a:2,b:3,c:4}
 */
var serialize = function(str) {
    //修复 jquery.serialize() 会把空格转成'+'的坑
    var str = str.replace(/\+/g, " ");
    var obj = {};
    var params = str.split('&');
    for (var i = 0; i < params.length; i++) {
        var val = params[i].split("=");
        //多选的select，在jquery.serialize()的时候名称都是相同的，如右：rules=1&rules=3
        //这个时候需要把值以数组的形式保存，如右：rules：[1,3]
        if (obj[val[0]]) {
            var arr = [];
            arr.push(obj[val[0]]); //读取已存在的，保存到临时数组
            arr.push(unescape(val[1]));
            obj[val[0]] = arr;
        } else {
            obj[val[0]] = unescape(val[1])
        }
    }
    return obj
};
/**
 * 从 www.abc.com?id=1&name=soon 字符串中提取 对应key的值
 * @ paramName {String}
 * @ searchString {String}
 */
function getURLParameter(paramName, searchString) {
    var searchString = searchString.split('?')[1],
        i,
        val,
        params = searchString.split('&');
    for (i = 0; i < params.length; i++) {
        val = params[i].split('=');
        if (val[0] == paramName) {
            return decodeURIComponent(val[1]);
        }
    }
    return null;
};

function fakeList(count) {
    var list = [];
    for (var i = 0; i < count; i += 1) {
        list.push({
            id: 'fake-list-' + i,
            owner: user[i % 10],
            title: titles[i % 8],
            avatar: avatars[i % 8],
            cover: parseInt(i / 4, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
            status: ['active', 'exception', 'normal'][i % 3],
            percent: Math.ceil(Math.random() * 50) + 50,
            logo: avatars[i % 8],
            href: 'https://ant.design',
            updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            subDescription: desc[i % 5],
            description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
            activeUser: Math.ceil(Math.random() * 100000) + 100000,
            newUser: Math.ceil(Math.random() * 1000) + 1000,
            star: Math.ceil(Math.random() * 100) + 100,
            like: Math.ceil(Math.random() * 100) + 100,
            message: Math.ceil(Math.random() * 10) + 10,
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            members: [{
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
                name: '曲丽丽',
                id: 'member1',
            }, {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
                name: '王昭君',
                id: 'member2',
            }, {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
                name: '董娜娜',
                id: 'member3',
            }, ],
        });
    }
    return list;
}
var sourceData;

// function postFakeList(body) {
//     var result = sourceData;
//     switch (body.method) {
//         case 'delete':
//             result = result.filter(item => item.id !== body.id);
//             break;
//         case 'update':
//             result.forEach((item, i) => {
//                 if (item.id === id) {
//                     result[i] = Object.assign(item, body);
//                 }
//             });
//             break;
//         case 'post':
//             result.unshift({
//                 body,
//                 id: `fake-list-${result.length}`,
//                     createdAt: new Date().getTime(),
//             });
//             break;
//         default:
//             break;
//     }
//     return result;
// };
//登录
Mock.mock('/api/login/account', function(options) {
    var body = serialize(options.body);
    if (body.password === '123456' && body.jobNumber === 'admin') {
        return Mock.mock({
            resultCode: '0',
            resultMsg: '成功',
            resultObject: {
                type: 'post',
                currentAuthority: 'admin',
            },
        });
    }
    if (body.password === '123456' && body.jobNumber === 'user') {
        return Mock.mock({
            resultCode: '0',
            resultMsg: '成功',
            resultObject: {
                type: 'post',
                currentAuthority: 'user',
            },
        });
        return;
    }
    if (body.password === '123456' && body.jobNumber === 'test') {
        return Mock.mock({
            resultCode: '0',
            resultMsg: '成功',
            resultObject: {
                type: 'post',
                currentAuthority: 'test',
            },
        });
    }
    return Mock.mock({
        resultCode: '1',
        resultMsg: '账户或密码错误',
        resultObject: {
            type: 'post',
            currentAuthority: 'guest',
        },
    });
});
Mock.mock('/api/currentUser', function(options) {
    return Mock.mock({
        resultCode: '0',
        resultMsg: '成功',
        resultObject: {
            name: 'soon',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            userid: '00000001',
        },
    });
});
Mock.mock('/api/fake_list', function(options) {
    var body = serialize(options.body);
    if (options.type == 'GET') {
        var count = getURLParameter('count', options.url) * 1 || 20;
        var result = fakeList(count);
        sourceData = result;
        return Mock.mock({
            resultCode: '0',
            resultMsg: '操作成功!',
            resultObject: result,
        });
    } else if (options.type == 'POST') {
        return Mock.mock({
            resultCode: '0',
            resultMsg: '操作成功!',
            resultObject: sourceData,
        });
    }
});
