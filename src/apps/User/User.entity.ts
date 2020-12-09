import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @Column()
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}
