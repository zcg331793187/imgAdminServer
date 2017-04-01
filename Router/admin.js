/**
 * Created by zhoucaiguang on 2017/3/24.
 */
"use strict";
class admin {
    static getInstance() {
        if (!admin.instance) {
            admin.instance = new admin();
        }
        return admin.instance;
    }
    static index(ctx, next) {
        console.log('qweqweqwew');
        ctx.body = 'admin/index';
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = admin;
