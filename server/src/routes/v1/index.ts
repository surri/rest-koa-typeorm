import Router from 'koa-router'
import posts from './posts'
const v1 = new Router

v1.use('/posts', posts.routes())

export default v1


