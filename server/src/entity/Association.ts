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
import Club from "./Club";

@Entity('associations')
export default class Association {

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
    association_name: string

    @Column()
    address: string
    @Column()
    address_detail: string

    @OneToMany(
        type => Club,
        club => club.association
    )
    clubs!: Club[];

}