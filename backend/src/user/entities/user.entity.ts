import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/*import { from } from "rxjs";*/

@Entity('users')
export class User {
   @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column({unique: true})
    email!: string;

    @Column()
    password!: string;

    @Column({nullable: true})
    telefone!: string;


}
