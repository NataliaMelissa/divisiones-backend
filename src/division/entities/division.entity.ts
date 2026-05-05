import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Colaborador } from '../../colaborador/entities/colaborador.entity';

@Entity()
export class Division {
  @PrimaryGeneratedColumn()
  id!: number; //Primary Key auto generado (como sequence de sql)

  @Column({
    type: 'varchar',
    length: 45, //Restricción del Tamaño
    unique: true //Constraint para validar que el nombre sea único
  })
  nombre!: string;

  @Column({ nullable: true })
  embajador!: string;

  // ------------------- RELACIONES ----------------
  // Representa la "División Superior":
  @ManyToOne(() => Division, (division) => division.subdivisiones, { nullable: true, onDelete: 'CASCADE' })
  padre!: Division;

  //Representa la lista de "Subdivisiones" que dependen de esta: Puede o no tener subdivisiones
  @OneToMany(() => Division, (division) => division.padre)
  subdivisiones!: Division[];

  // -------------------------------- RELACIONES ------------------------------
    //Colaborador
    @OneToMany(() => Colaborador, (colaborador) => colaborador.division)
    colaboradores!: Colaborador[];
}