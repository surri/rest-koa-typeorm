import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import Club from './Club';

@Entity('club_members')
export default class ClubMember {
    @PrimaryGeneratedColumn()
    id: number

    @Column('timestampz')
    @CreateDateColumn()
    created_at: Date
    @Column('timestampz')
    @UpdateDateColumn()
    updated_at: Date
    @Column('timestampz')
    @DeleteDateColumn()
    deleted_at: Date

    @Column()
    club_member_name: string

    @ManyToOne((type) => Club, (club) => club.club_members)
    @JoinColumn({ name: 'club_id' })
    club!: Club;

    // @Column()
    // club_id: number;
    // @ManyToOne(
    //     type => Club,
    //     club => club.club_members
    // )
    // @JoinColumn({ name: 'club_id' })
    // club!: Club;
}