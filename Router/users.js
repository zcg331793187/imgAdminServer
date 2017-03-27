/**
 * Created by zhoucaiguang on 2017/3/24.
 */
"use strict";
class users {
    static getInstance() {
        if (!users.instance) {
            users.instance = new users();
        }
        return users.instance;
    }
    index(ctx, next) {
        ctx.body = 'users';
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = users;
