/**
 * Created by zhoucaiguang on 2017/3/24.
 */
import * as baseKeyWordModel from '../Model/baseKeyWord';


export default class baseKeyWord{

    private static instance: baseKeyWord;



    public static getInstance() {
        if (!baseKeyWord.instance) {
            baseKeyWord.instance = new baseKeyWord();
        }
        return baseKeyWord.instance;
    }

    public index(ctx,next){

        ctx.body = 'baseKeyWord';
    }

    /**
     * 获取
     * @param ctx
     * @param next
     * @returns {Promise<void>}
     */
    public async getAll(ctx,next){



        ctx.body =    await baseKeyWordModel.getAll();

    }


    public async getValidAll(ctx,next){

        let  where  ={
            where:{
                isUse:1,
            },
            attributes: ['id', 'keyName','tips']
        };
            await next();
        ctx.body =    await baseKeyWordModel.getAll(where);

    }
    /**
     * 传{keyName,tips}
     * 新增
     * @param ctx
     * @param next
     * @returns {Promise<void>}
     */
    public async addData(ctx,next){

        let postData = ctx.request.body;
        let addData = {
            keyName:postData['keyName'],
            tips:postData['tips'],
        };
        ctx.body =    await baseKeyWordModel.add(addData);

    }


    /**
     * 传{id,keyName,tips,isUse,times}
     * 更新数据
     * @param ctx
     * @param next
     * @returns {Promise<void>}
     */
    public async upDate(ctx,next){

        let postData = ctx.request.body;


        let where = {where:{
            id:postData.id
        }};

        ctx.body =    await baseKeyWordModel.update(postData,where);
    }

    /**
     * 传id
     * @param ctx
     * @param next
     * @returns {Promise<void>}
     */
    public async deleteDate(ctx,next){

        let postData = ctx.request.body;

        let where = {where:{
            id:postData.id
        }};

        ctx.body =    await baseKeyWordModel.deleteData(where);
    }

}