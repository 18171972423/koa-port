import Router from 'koa-router'
import Index from '../controllers/index'
const router = Router()


// router.get('/',Index.saveIphone)

router.post('/callIphone',Index.callIphone)

router.post('/delIphone',Index.delIphone)

router.post('/getCode',Index.getCode)

router.post('/checkCode',Index.checkCode)

router.get('/',(ctx,next) => {
    // ctx.body = `<form method="POST" action="/file" enctype='multipart/form-data'> 请选择上传的文件：<input type="file" name="upfiles"> <input type="type" name="name" />  <input type="submit" value="OK"> </form>`
   if(ctx.session.view === undefined) { //统计访问次数
        ctx.session.view = 0 
        
    } else {
        ctx.session.view += 1   
    }
    
    ctx.body =  ctx.session.view
    
})
router.get('/files',(ctx,next) => {
        ctx.session.count = ctx.session.count + 1
        ctx.body = ctx.session
})


router.post('/file',Index.file)

export default router
