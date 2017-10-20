import * as router from 'koa-router'
import {UserModel} from '../model'

const user = new UserModel()


export const userRouter = new router()
userRouter.get('/search', async (ctx) => {
  ctx.response.body = await user.searchAll()
})
userRouter.get('/new', async ctx => {
  const users = await user.searchAll()
  if (users.filter(v => v['username'] === ctx.query.username)[0]) {
    ctx.success()
    return
  }
  ctx.response.body = await user.createUser(ctx.query)
})


