import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as Router from 'koa-router'
import * as staticServer from 'koa-static'
import routes from './routes'
import handleError from './middlewares/error'

const app = new Koa()
const route = new Router()
app.use(staticServer(__dirname + '/static'))
app.use(bodyParser())
app.use(handleError)

app.use(route.routes())

for (const key  in routes) {
  if (routes.hasOwnProperty(key)) {
    route.use(`/${key.replace('Router', '')}`, routes[key].routes(),
        routes[key].allowedMethods())
  }
}
app.listen('3000')
