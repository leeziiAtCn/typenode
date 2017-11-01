import * as router from 'koa-router'
import {UserModel} from '../model'
import {CtrlRes} from '../utils/ctrl.res.class'

const user = new UserModel()
const ctrl = new CtrlRes()
export const userRouter = new router()
userRouter.get('/search', async (ctx) => {
  ctx.response.body = await user.searchAll()
})
userRouter.post('/new', async (ctx, next) => {
  ctrl.validate(ctx, ['username', 'password'])
  if ((await user.createUser(ctx.request.body))[1]) {
    ctrl.success(ctx, '创建成功')
  } else {
    ctrl.error(ctx, 2, '用户名已存在')
  }
})


