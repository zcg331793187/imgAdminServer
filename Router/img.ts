/**
 * Created by zhoucaiguang on 2017/3/24.
 */



export default class img{
    private static instance: img;



    public static getInstance() {
        if (!img.instance) {
            img.instance = new img();
        }
        return img.instance;
    }

    public index(ctx,next){

        ctx.body = 'img';
    }
}