//Importar Librerías
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradorController } from './colaborador.controller';
import { ColaboradorService } from './colaborador.service';

//Importar Entidades
import { Colaborador } from './entities/colaborador.entity';

//Configurar Módlos
@Module({
  imports: [TypeOrmModule.forFeature([Colaborador])],
  controllers: [ColaboradorController],
  providers: [ColaboradorService],
  exports: [TypeOrmModule] //DivisionService pueda consultar la entidad colaborador
})
export class ColaboradorModule {}
