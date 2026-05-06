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
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'db_divisiones',
      entities: [Division, Colaborador],
      synchronize: true,
      ssl: process.env.DB_HOST ? { rejectUnauthorized: false } : false,
    }),
    DivisionModule,
    ColaboradorModule,
  ],
})
export class AppModule {}