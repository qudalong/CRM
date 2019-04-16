var express = require('express');
var router = express.Router();
var ejs = require('ejs');

// 网站地图
router.get('/sitemap', function(req, res, next) {
    res.render('sitemap', {
        title: '网址地图'
    });
});


router.get('/pages/login/login', function(req, res, next) {
    res.render('pages/login/login', {
        title: '登录'
    });
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'crm后台系统'
    });
});
router.get('/pages/system/organization', function(req, res, next) {
    res.render('pages/system/organization', {
        title: '组织架构'
    });
});
router.get('/pages/system/organizationDesc', function(req, res, next) {
    res.render('pages/system/organizationDesc', {
        title: '组织详情'
    });
});
router.get('/pages/system/menuManage', function(req, res, next) {
    res.render('pages/system/menuManage', {
        title: '菜单管理'
    });
});
router.get('/pages/system/menuManageOper', function(req, res, next) {
    res.render('pages/system/menuManageOper', {
        title: '权限管理'
    });
});
router.get('/pages/system/menuManageLeveDesc', function(req, res, next) {
    res.render('pages/system/menuManageLeveDesc', {
        title: '直营店详情'
    });
});
router.get('/pages/system/myOrganization', function(req, res, next) {
    res.render('pages/system/myOrganization', {
        title: '我的组织'
    });
});
router.get('/pages/system/addOrganization', function(req, res, next) {
    res.render('pages/system/addOrganization', {
        title: '添加组织'
    });
});
router.get('/pages/system/jurisdiction', function(req, res, next) {
    res.render('pages/system/jurisdiction', {
        title: '权限管理'
    });
});
router.get('/pages/client/entering', function(req, res, next) {
    res.render('pages/client/entering', {
        title: '录入查看'
    });
});
router.get('/pages/client/myClient', function(req, res, next) {
    res.render('pages/client/myClient', {
        title: '我的客户'
    });
});
router.get('/pages/client/public', function(req, res, next) {
    res.render('pages/client/public', {
        title: '客户公海'
    });
});
router.get('/pages/client/createClient', function(req, res, next) {
    res.render('pages/client/createClient', {
        title: '新建客户'
    });
});
router.get('/pages/client/allotClient', function(req, res, next) {
    res.render('pages/client/allotClient', {
        title: '分配客户'
    });
});
router.get('/pages/client/clientFollow', function(req, res, next) {
    res.render('pages/client/clientFollow', {
        title: '客户跟进'
    });
});
router.get('/pages/client/clientFollowItemDesc', function(req, res, next) {
    res.render('pages/client/clientFollowItemDesc', {
        title: '客户跟进详情'
    });
});
router.get('/pages/marketMange/performance', function(req, res, next) {
    res.render('pages/marketMange/performance', {
        title: '销售员业绩'
    });
});
router.get('/pages/marketMange/myOrder', function(req, res, next) {
    res.render('pages/marketMange/myOrder', {
        title: '我的销售订单'
    });
});
router.get('/pages/marketMange/itemDesc', function(req, res, next) {
    res.render('pages/marketMange/itemDesc', {
        title: '订单详情'
    });
});
router.get('/pages/dataAnalysis/weekAdd', function(req, res, next) {
    res.render('pages/dataAnalysis/weekAdd', {
        title: '客户一周新增数据'
    });
});
router.get('/pages/dataAnalysis/weekAddItemDesc', function(req, res, next) {
    res.render('pages/dataAnalysis/weekAddItemDesc', {
        title: '客户一周新增数据详情'
    });
});
router.get('/pages/dataAnalysis/weekData', function(req, res, next) {
    res.render('pages/dataAnalysis/weekData', {
        title: '一周业绩统计'
    });
});
router.get('/pages/dataAnalysis/weekDataDesc', function(req, res, next) {
    res.render('pages/dataAnalysis/weekDataDesc', {
        title: '一周业绩统计详情'
    });
});
router.get('/pages/dataAnalysis/followCount', function(req, res, next) {
    res.render('pages/dataAnalysis/followCount', {
        title: '客户跟进次数'
    });
});
router.get('/pages/dataAnalysis/followItemDesc', function(req, res, next) {
    res.render('pages/dataAnalysis/followItemDesc', {
        title: '跟进次数详情'
    });
});

module.exports = router;