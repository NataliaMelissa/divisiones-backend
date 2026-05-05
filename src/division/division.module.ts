//Importar Librerías
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//Importar Entidades y archivos de entidades:
import { ColaboradorModule } from '../colaborador/colaborador.module';
import { DivisionController } from './division.controller';
import { DivisionService } from './division.service';
import { Division } from './entities/division.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Division]),
    ColaboradorModule,
  ],
  controllers: [DivisionController],
  providers: [DivisionService],

})
export class DivisionModule {}
