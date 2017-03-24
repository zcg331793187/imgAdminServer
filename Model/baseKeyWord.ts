/**
 * Created by zhoucaiguang on 2017/3/24.
 */
import * as db from '../db/SequelizeDb';


interface IBaseKeyWord {
    id?:number
    keyName?: string
    isUse?: string
    tips?: number
    times: Date
}


export async function getAll(where:IBaseKeyWord) {

    return await db.BaseKeyWordDb.findAll(where);

}

export async function getOne(where:IBaseKeyWord) {


    return await db.BaseKeyWordDb.findOne(where);
}

export async function add(data: IBaseKeyWord) {


    return await db.BaseKeyWordDb.create(data);
}

export async function update(where,data:IBaseKeyWord){


    return await db.BaseKeyWordDb.update(data,where);



}