import Router from 'koa-router'
import users from './users'
import associations from './associations'
import clubs from './clubs'
import clubMember from './clubMember'

const v1 = new Router

v1.use('/users', users.routes())
v1.use('/associations', associations.routes())
v1.use('/clubs', clubs.routes())
v1.use('/clubMember', clubMember.routes())

export default v1


