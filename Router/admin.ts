/**
 * Created by zhoucaiguang on 2017/3/24.
 */

export default class admin{

    private static instance: admin;



    public static getInstance() {
        if (!admin.instance) {
            admin.instance = new admin();
        }
        return admin.instance;
    }

    public static index(ctx,next){

        console.log('qweqweqwew');
        ctx.body = 'admin/index';
    }

}