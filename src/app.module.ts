import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { Colaborador } from './colaborador/entities/colaborador.entity';
import { DivisionModule } from './division/division.module';
import { Division } from './division/entities/division.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_divisiones', //Nombre BD creada en XAMPP phpMyAdmin
      entities: [Division, Colaborador], //Entidades creadas
      synchronize: true, //Sincroniza los cambios con la BD
    }),
    DivisionModule,
    ColaboradorModule,
  ],
})
export class AppModule {}