import * as router from 'koa-router'
import {UserModel} from '../model'

export const userRouter = new router()
userRouter.get('/test', async (ctx) => {
  ctx.response.body = await new UserModel().searchAll()
})


