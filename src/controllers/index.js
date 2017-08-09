import Admin from '../prototype/admin';
import adminModel from '../models/iphone';
import formidable from 'formidable';

class SaveIphone extends Admin {
    constructor(){
        super()
        this.saveIphone = this.saveIphone.bind(this)
    }
    //获取验证码
    async getCode(ctx,next){
        try{
            const {phone} = ctx.query;
            console.log(ctx.session)
            if(!phone){
                ctx.body = {
                    status:0,
                    message:'入参异常'
                }
                return true
            }
            const {_phoneCode} = ctx.session;
            const nowTime = Date.now();
            if(_phoneCode &&   nowTime - _phoneCode.time < 12000){
                ctx.body = {
                    status:0,
                    message:'12秒后重新发送'
                }
                return true
            }
            const _code = ('000000'+parseInt(Math.random()*1000000)).substr(-6);
            let key = `${Date.now()}${phone}`;
            ctx.session._phoneCode = {
                key,
                time:Date.now(),
                code:_code
            }

            ctx.body = {
                status:1,
                message:'发送成功',
                code:_code
            }

        }catch(err){
            console.log(err)
        }
    }
    //验证验证码
    async checkCode(ctx,next){
        try{
            const {code} = ctx.query
            const {_phoneCode} = ctx.session;
            if(_phoneCode){
                if(Date.now() - _phoneCode.time > 300000){//5分钟失效
                    ctx.body = {
                        status:0,
                        message:'验证码失效'
                    }
                    return true;
                }
                const sessionCode = _phoneCode.code;
                if(sessionCode == code){
                    // ctx.session._phoneCode = null;
                    ctx.body = {
                        status:1,
                        message:'验证成功'
                    }
                    return true;
                }
            }
            ctx.body = {
                status:0,
                message:'验证码不正确'
            }
        }catch(err){

        }
    }
    async file(ctx,next){
        try{
            const form = new formidable.IncomingForm();
            
            
        }catch(err){

        }
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

