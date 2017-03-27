/**
 * Created by zhoucaiguang on 2017/3/24.
 */
"use strict";
class title {
    static getInstance() {
        if (!title.instance) {
            title.instance = new title();
        }
        return title.instance;
    }
    index(ctx, next) {
        ctx.body = 'title';
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = title;
