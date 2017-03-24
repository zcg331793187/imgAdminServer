"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
/**
 * Created by zhoucaiguang on 2017/3/24.
 */
const koa = require('koa');
const koaRouter = require('koa-router');
const logger = require('koa-logger');
const route_1 = require('./router/route');
const log4 = require('log4js');
const log4_1 = require('./configs/log4');
const app = new koa();
const route = new route_1.default();
log4.configure(log4_1.log4Config);
const log = log4.getLogger();
let koaRoute = new koaRouter();
app.use(koaRoute.routes());
app.use(logger());
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    let start = new Date();
    yield next();
    let end = new Date();
    let ms = end - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    log.info(`${ctx.method} ${ctx.url} - 运行用时：${ms}ms`);
}));
//路由
koaRoute.get('/', route.index);
koaRoute.post('/', route.index);
app.listen(3003);
