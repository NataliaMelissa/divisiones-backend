import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Division } from '../../division/entities/division.entity';

@Entity('colaborador')
export class Colaborador {
  @PrimaryGeneratedColumn()
  id!: number; //Primary Key auto generado (como sequence de sql)

  @Column()
  nombre!: string;

  // Muchos colaboradores pertenecen a una sola división
  @ManyToOne(() => Division, (division) => division.colaboradores, {
    onDelete: 'CASCADE' //Borrado Cascada: Si borras la división, sus empleados se borran automáticamente
  })
  division!: Division;
}