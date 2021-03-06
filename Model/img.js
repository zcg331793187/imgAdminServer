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
const db = require('../db/SequelizeDb');
function getAll(where) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.ImgDb.findAll(where);
    });
}
exports.getAll = getAll;
function getOne(where) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.ImgDb.findOne(where);
    });
}
exports.getOne = getOne;
function add(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.ImgDb.create(data);
    });
}
exports.add = add;
function update(where, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.ImgDb.update(data, where);
    });
}
exports.update = update;
