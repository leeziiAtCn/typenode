import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as Router from 'koa-router'
import * as staticServer from 'koa-static'
import routes from './routes'

const app = new Koa()
const route = new Router()
app.use(staticServer(__dirname + '/template'))
app.use(bodyParser())
app.use(route.routes())

interface rou {
  [key: string]: any;
}

let r: rou = {
  ...routes
}
for (const key  in r) {
  if (routes.hasOwnProperty(key)) {
    route.use(`/${key.replace('Router', '')}`, r[key].routes(),
        r[key].allowedMethods())
  }
}
app.listen('3000')
