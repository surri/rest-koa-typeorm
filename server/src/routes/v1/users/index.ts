import Router from 'koa-router'
import { Context } from "koa"
import { getRepository, createQueryBuilder } from 'typeorm'
import User from '../../../entity/User'
import { camelToSnake } from '../../../utils'

const users = new Router

users.get('/', async (context: Context) => {

    const { association_id } = context.request.query

    const clubRepository = await getRepository(User)
        .createQueryBuilder('users')
        .select(['users.id', 'user', 'users.url_slug', 'users.updated_at', ])
        .leftJoin('club_member.user_id', 'user')
        .where('is_temp = false')
        .andWhere('is_private = false')
        .andWhere('associations.id = :association_id', { association_id })
        .getMany();

    if (association_id) {
        return getUsersAssociation(association_id);
    }

    // const club = await clubRepository.findOne((context as any).params.id);

})

const getUsersAssociation = association_id => {

}

users.get('/:id', (ctx, next) => {
    const { id } = ctx.params
    ctx.body = {
        id: id,
    }
    return next()
})

users.post('/', (ctx, next) => {
    ctx.body = {
        status: 200,
        body: ctx.request.body
    }
    return next()
})



export default users