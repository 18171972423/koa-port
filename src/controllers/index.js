import Admin from '../prototype/admin';
import adminModel from '../models/iphone';
import {uploadFile} from '../config/uploadFile';
import path from 'path';

class SaveIphone extends Admin {
    constructor(){
        super()
        this.saveIphone = this.saveIphone.bind(this)
        this.login = this.login.bind(this)
    }
    
    async saveIphone(ctx,next){
        try{
            const {iphone} = ctx.query;
            const data = await adminModel.find({iphone});
                
            if(data.length == 0){
                const newTel = {
                    iphone
                }
                await adminModel.create(newTel)
                ctx.body = {
                    code:200,
                    message:'手机号添加成功'
                };
            }else{
                ctx.body = {
                    code:400,
                    message:'手机号已添加过'
                }
            }
            
        }catch(err){
            console.log(err)
        }
        
    }
    async callIphone(ctx,next){
        try{
            const data = await adminModel.find(ctx.query);
            if(data.length > 0){
                ctx.body = data;
            }else{
                ctx.body = {
                    code:400,
                    message:'无查询数据'
                }
            }

        }catch(err){
            console.log(err)
        }
        
    }
    async delIphone(ctx,next){
        try{
            const findData = await adminModel.find(ctx.query);
            if(findData.length == 0){
                ctx.body = {
                        code:300,
                        message:'删除失败'
                    }
                return;
            }
            const data = await adminModel.remove(ctx.query,(err,data) => {
                if(err){
                    ctx.body = {
                        code:400,
                        message:'异常',
                        data:err
                    }
                    return
                }else{
                    console.log(data)
                    ctx.body = {
                        code:200,
                        message:'删除成功'
                    }
                }
            });
        }catch(error){
            console.log(error)
        }
        
        
        
    }
}


export default new SaveIphone();

