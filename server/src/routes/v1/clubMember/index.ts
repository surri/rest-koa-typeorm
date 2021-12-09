import Router from 'koa-router'
import { Context } from "koa";
import { getRepository } from 'typeorm';
import ClubMember from '../../../entity/ClubMember';

const clubMember = new Router

clubMember.get('/', async (context: Context) => {
    const clubMemberRepository = getRepository(ClubMember);

    context.body = await clubMemberRepository.find();
})

clubMember.get('/:id', async (context: Context) => {
    const clubMemberRepository = getRepository(ClubMember);

    const clubMember = await clubMemberRepository.findOne((context as any).params.id);

    if (!clubMember) {
        context.status = 404;
        return;
    }

    context.body = clubMember;
})

clubMember.post('/', async (context: Context) => {
    const clubMemberRepository = getRepository(ClubMember);

    const newClubMember = clubMemberRepository.create(context.request.body);

    await clubMemberRepository.save(newClubMember);

    context.body = newClubMember;
})

export default clubMember;