import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from "typeorm";

@Entity('users')
export default class User {
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
    user_name: string

    @Column()
    email: string
}