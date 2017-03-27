/**
 * Created by zhoucaiguang on 2017/3/27.
 */
"use strict";
const admin_1 = require('../Router/admin');
const baseKeyWord_1 = require('../Router/baseKeyWord');
const img_1 = require('../Router/img');
const login_1 = require('../Router/login');
const title_1 = require('../Router/title');
const users_1 = require('../Router/users');
exports.config = [
    {
        method: "get",
        url: '/admin',
        fn: admin_1.default.getInstance().index
    },
    {
        method: "get",
        url: '/baseKeyWord',
        fn: baseKeyWord_1.default.getInstance().index
    },
    {
        method: "get",
        url: '/img',
        fn: img_1.default.getInstance().index
    },
    {
        method: "get",
        url: '/title',
        fn: title_1.default.getInstance().index
    },
    {
        method: "get",
        url: '/login',
        fn: login_1.default.getInstance().index
    },
    {
        method: "get",
        url: '/users',
        fn: users_1.default.getInstance().index
    },
    {
        method: 'get',
        url: '/baseKeyWord/getAll',
        fn: baseKeyWord_1.default.getInstance().getAll
    },
    {
        method: 'get',
        url: '/baseKeyWord/getValidAll',
        fn: baseKeyWord_1.default.getInstance().getValidAll
    },
    {
        method: 'post',
        url: '/baseKeyWord/addData',
        fn: baseKeyWord_1.default.getInstance().addData
    },
    {
        method: 'post',
        url: '/baseKeyWord/upDate',
        fn: baseKeyWord_1.default.getInstance().upDate
    },
    {
        method: 'post',
        url: '/baseKeyWord/deleteDate',
        fn: baseKeyWord_1.default.getInstance().deleteDate
    }
];
