import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";

import Association from "./Association";
import ClubMember from "./ClubMember";

@Entity('clubs')
export default class Club {
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
    club_name: string

    @Column()
    si: string
    @Column()
    gu: string

    @ManyToOne(type => Association, { cascade: true, eager: true })
    @JoinColumn({ name: 'association_id' })
    association: Association;

    @Column()
    association_id: number;

    @OneToMany(
        type => ClubMember,
        club_member => club_member.club
    )
    club_members!: ClubMember[];
}