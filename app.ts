/**
 * Created by zhoucaiguang on 2017/3/24.
 */
import * as koa from 'koa';
import * as koaRouter from 'koa-router';
import * as logger from 'koa-logger';
import  Router from './router/route';
import * as log4 from 'log4js';
import {log4Config} from './configs/log4';

const app = new koa();
const route = new Router();

log4.configure(log4Config);
const log = log4.getLogger();
let koaRoute = new koaRouter();




app.use(koaRoute.routes());


app.use(logger());









app.use(async (ctx, next) => {
    let start:any = new Date();
    await next();
    let end:any = new Date();
    let ms:number = end-start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    log.info(`${ctx.method} ${ctx.url} - 运行用时：${ms}ms`);
});









//路由

koaRoute.get('/',route.index);
koaRoute.post('/',route.index);









app.listen(3003);