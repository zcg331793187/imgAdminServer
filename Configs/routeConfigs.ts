/**
 * Created by zhoucaiguang on 2017/3/27.
 */


import admin from '../Router/admin';
import baseKeyWord from '../Router/baseKeyWord';
import img from '../Router/img';
import login from '../Router/login';
import title from '../Router/title';
import url from '../Router/url';
import users from '../Router/users';
interface IRouteConfigs {

    method: string
    url: string
    fn: any
}

export const config:IRouteConfigs[] =    [
    {
        method: "get",
        url: '/admin',
        fn: admin.getInstance().index
    },
    {
        method: "get",
        url: '/baseKeyWord',
        fn: baseKeyWord.getInstance().index
    },
    {
        method: "get",
        url: '/img',
        fn: img.getInstance().index
    },
    {
        method: "get",
        url: '/title',
        fn: title.getInstance().index
    },
    {
        method: "get",
        url: '/login',
        fn: login.getInstance().index
    },
    {
        method: "get",
        url: '/users',
        fn: users.getInstance().index
    },
    {
        method:'get',
        url:'/baseKeyWord/getAll',
        fn: baseKeyWord.getInstance().getAll
    },
    {
        method:'get',
        url:'/baseKeyWord/getValidAll',
        fn: baseKeyWord.getInstance().getValidAll
    },
    {
        method:'post',
        url:'/baseKeyWord/addData',
        fn: baseKeyWord.getInstance().addData
    },
    {
        method:'post',
        url:'/baseKeyWord/upDate',
        fn: baseKeyWord.getInstance().upDate
    },
    {
        method:'post',
        url:'/baseKeyWord/deleteDate',
        fn: baseKeyWord.getInstance().deleteDate
    }
];