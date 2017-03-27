/**
 * Created by zhoucaiguang on 2017/3/24.
 */



export default class title{

    private static instance: title;



    public static getInstance() {
        if (!title.instance) {
            title.instance = new title();
        }
        return title.instance;
    }

    public index(ctx,next){

        ctx.body = 'title';
    }
}