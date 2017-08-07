import Router from 'koa-router'
import Index from '../controllers/index'
const router = Router()

router.get('/',Index.saveIphone)

router.post('/callIphone',Index.callIphone)

router.post('/delIphone',Index.delIphone)


export default router
