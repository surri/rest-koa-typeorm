import Koa from 'koa';
import Router from 'koa-router'
import logger from 'koa-logger'
import json from 'koa-json'

const app = new Koa();
const router = new Router();

router.get('/ping', function (ctx, next) {
    ctx.body = {
        status: 200,
        data: {
            foo: 'bar',
            ping: 'pong',
        }
    }
    return next();
});

app.use(logger())
app.use(json({ pretty: true }));
app.use(router.routes());

app.listen(3000, () => console.log('start server'))