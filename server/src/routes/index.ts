import Router from 'koa-router'
import v1  from './v1'

const routes = new Router()

routes.use('/v1', v1.routes())

routes.get('/ping', (ctx, next) => {
    ctx.body = {
        status: 200,
        data: {
            foo: 'bar',
            ping: 'pfong',
        }
    }
    return next()
})

export default routes
