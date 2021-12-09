import Router from 'koa-router'
import { Context } from "koa"
import { getRepository } from 'typeorm'
import Association from '../../../entity/Association'
import { camelToSnake } from '../../../utils'

const associations = new Router

associations.get('/', async (context: Context) => {
    const associationRepository = getRepository(Association)

    context.body = await associationRepository.find()
})

associations.get('/:id', async (context: Context) => {
    const associationRepository = getRepository(Association)

    const association = await associationRepository.findOne((context as any).params.id)

    if (!association) {
        context.status = 404
        return
    }

    context.body = association
})

associations.post('/', async (context: Context) => {
    const associationRepository = getRepository(Association)
    const newAssociation = associationRepository.create(camelToSnake(context.request.body))

    await associationRepository.save(newAssociation)

    context.body = newAssociation
})


associations.patch('/', async (context: Context) => {
    const associationRepository = getRepository(Association)
    const newAssociation = associationRepository.create(camelToSnake(context.request.body))

    await associationRepository.save(newAssociation)

    context.body = newAssociation
})


associations.delete('/:id', async (context: Context) => {
    const associationRepository = getRepository(Association)

    const association = await associationRepository.delete((context as any).params.id)

    context.body = association
})

export default associations