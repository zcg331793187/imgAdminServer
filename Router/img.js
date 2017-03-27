/**
 * Created by zhoucaiguang on 2017/3/24.
 */
"use strict";
class img {
    static getInstance() {
        if (!img.instance) {
            img.instance = new img();
        }
        return img.instance;
    }
    index(ctx, next) {
        ctx.body = 'img';
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = img;
