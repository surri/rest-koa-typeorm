import Router from 'koa-router'
import { Context } from "koa";
import { getRepository } from 'typeorm';
import Club from '../../../entity/Club';
import { camelToSnake } from '../../../utils'

const clubs = new Router

clubs.get('/', async (context: Context) => {
    const clubRepository = getRepository(Club);
    let [allClubs, clubCount] = await clubRepository.findAndCount();
    context.set('x-total-count', clubCount.toString());
    context.body = allClubs
})

clubs.get('/:id', async (context: Context) => {
    const clubRepository = getRepository(Club);

    const club = await clubRepository.findOne((context as any).params.id);

    if (!club) {
        context.status = 404;
        return;
    }

    context.body = club;
})

clubs.post('/', async (context: Context) => {
    const clubRepository = getRepository(Club);

    const newClub = clubRepository.create(camelToSnake(context.request.body));

    console.log(newClub)
    await clubRepository.save(newClub);

    context.body = newClub;
})

clubs.patch('/:id', async (context: Context) => {
    const clubsRepository = getRepository(Club)
    const newClub = clubsRepository.create(camelToSnake(context.request.body))

    await clubsRepository.save(newClub)

    context.body = newClub
})

clubs.delete('/:id', async (context: Context) => {
    const clubRepository = getRepository(Club);

    const club = await clubRepository.delete((context as any).params.id);

    context.body = club;
})
export default clubs;