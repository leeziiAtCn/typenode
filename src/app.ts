import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as Router from 'koa-router'
import * as staticServer from 'koa-static'
import routes from './routes'

const app = new Koa()
const route = new Router()
app.use(staticServer(__dirname + '/static'))
app.use(bodyParser())
app.use(route.routes())

interface rou {
  [key: string]: any;
}

for (const key  in routes) {
  if (routes.hasOwnProperty(key)) {
    route.use(`/${key.replace('Router', '')}`, routes[key].routes(),
        routes[key].allowedMethods())
  }
}
app.listen('3000')
