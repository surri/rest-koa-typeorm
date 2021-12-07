import Router from 'koa-router'

const posts = new Router

posts.get('/', (ctx, next) => {
    ctx.body = [
        {
            id: 1,
            title: 'title1',
        },
        {
            id: 2,
            title: 'title2',
        }
    ]
    return next()
})

posts.get('/:id', (ctx, next) => {
    const { id } = ctx.params
    ctx.body = {
        id: id,
    }
    return next()
})

posts.post('/', (ctx, next) => {
    ctx.body = {
        status: 200,
        body: ctx.request.body
    }
    return next()
})



export default posts