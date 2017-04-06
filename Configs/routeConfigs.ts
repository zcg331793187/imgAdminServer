/**
 * Created by zhoucaiguang on 2017/3/27.
 */


import admin from '../Router/admin';
import baseKeyWord from '../Router/baseKeyWord';
import img from '../Router/img';
import login from '../Router/login';
import title from '../Router/title';
import  configs from '../Router/configs';
import url from '../Router/url';
import users from '../Router/users';
interface IRouteConfigs {

    method: string
    url: string
    fn: any
}

enum Methods {post,get}



export const config:IRouteConfigs[] =    [
    {
        method: Methods[Methods.get],
        url: '/admin',
        fn: admin.index
    },
    {
        method: Methods[Methods.post],
        url: '/admin/Login',
        fn: admin.login
    },
    {
        method: Methods[Methods.get],
        url: '/admin/loginOut',
        fn: admin.loginOut
    },

    {
        method: Methods[Methods.get],
        url: '/baseKeyWord/getValidAll',
        fn: baseKeyWord.getValidAll
    },
    {
        method: Methods[Methods.get],
        url: '/img',
        fn: img.index
    },
    {
        method: Methods[Methods.get],
        url: '/title',
        fn: title.index
    },
    {
        method: Methods[Methods.get],
        url: '/login',
        fn: login.index
    },
    {
        method: Methods[Methods.get],
        url: '/users',
        fn: users.index
    },
    {
        method:Methods[Methods.get],
        url:'/baseKeyWord/getAll',
        fn: baseKeyWord.getAll
    },
    {
        method:Methods[Methods.get],
        url:'/baseKeyWord/getValidAll',
        fn: baseKeyWord.getValidAll
    },
    {
        method:Methods[Methods.post],
        url:'/baseKeyWord/addData',
        fn: baseKeyWord.addData
    },
    {
        method:Methods[Methods.post],
        url:'/baseKeyWord/upDate',
        fn: baseKeyWord.upDate
    },
    {
        method:Methods[Methods.post],
        url:'/baseKeyWord/deleteDate',
        fn: baseKeyWord.deleteDate
    },
    {
        method:Methods[Methods.post],
        url:'/baseKeyWord/deleteDate',
        fn: baseKeyWord.deleteDate
    },
    {
        method:Methods[Methods.post],
        url:'/configs/addConfig',
        fn: configs.addConfig
    },
    {
        method:Methods[Methods.get],
        url:'/configs/getValidAll',
        fn: configs.getValidAll
    },
    {
        method:Methods[Methods.post],
        url:'/configs/settingIsUse',
        fn: configs.settingIsUse
    },
    {
        method:Methods[Methods.get],
        url:'/configs/searchWebName/:webName',
        fn: configs.searchWebName
    },
    {
        method:Methods[Methods.get],
        url:'/configs/configDetail/:id',
        fn:configs.configDetail
    },
    {
        method:Methods[Methods.post],
        url:'/configs/updateConfig',
        fn:configs.updateConfig
    },
    {
        method:Methods[Methods.get],
        url:'/configs/deleteConfig/:id',
        fn:configs.deleteConfig
    },
    {
        method: Methods[Methods.get],
        url: '/titles/getAllTitle/:limit',
        fn: title.getAllTitle
    },
    {
        method: Methods[Methods.get],
        url: '/titles/getTitleDetail/:id',
        fn: title.getTitleDetail
    },
    {
        method: Methods[Methods.get],
        url: '/titles/searchTitle/:title',
        fn: title.searchTitle
    }
];



