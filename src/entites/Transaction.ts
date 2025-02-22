import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

//Entidad que representa la tabla transactions en la base de datos
@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;

    @Column({
        type: 'varchar',
        length: 10,
        enum: ['deposit', 'withdrawal']
    })
    type: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @ManyToOne(() => User, user => user.transactions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;
}