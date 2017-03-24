/**
 * Created by zhoucaiguang on 2017/3/24.
 */





export  default class  Router{


        constructor(){

        }

      async init(offset){
           console.log('init');

           // await this.setTimeout(2);
          // console.log('init10');

          // return await    db.WeiboDb.find({'attributes': ['id', 'containerId', 'niceName'], 'limit': 1, offset: offset});


        }

    async setTimeout(m: number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(null);
            }, m * 1000);
        });
    }



    async index (ctx,next){

        await next();
        ctx.body =  ctx;
    }


    async configs(ctx){





    }

}




