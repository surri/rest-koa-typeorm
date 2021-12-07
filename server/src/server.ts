import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import logger from 'koa-logger'
import routes from './routes'


const app = new Koa()

app.use(bodyParser());
app.use(json({ pretty: true }))
app.use(logger())
app.use(routes.routes())

app.listen(3000, () => console.log('start server'))