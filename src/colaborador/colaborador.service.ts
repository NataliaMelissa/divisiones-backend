import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';


//Importar Clases/Relaciones
import { Colaborador } from './entities/colaborador.entity';

@Injectable()
export class ColaboradorService {
  //Consturctor Manejador de dependencias
  constructor(
    @InjectRepository(Colaborador)
    private colaboradorRepository: Repository<Colaborador>,
  ) {}

  //Crear nuevo Colaborador
  async create(createColaboradorDto: CreateColaboradorDto) {
    const nuevoColaborador = this.colaboradorRepository.create(createColaboradorDto); //DTO (nombre y divisionId)
    return await this.colaboradorRepository.save(nuevoColaborador); //Guardar en BD
  }

  //Encontrar todos los colaboradores
  async findAll() {
    return await this.colaboradorRepository.find({
      relations: ['division'], //Para saber a qué división pertenece cada uno
    });
  }

  //Encontrar un colaborador por su id
  async findOne(id: number) {
    return await this.colaboradorRepository.findOne({
      where: { id },
      relations: ['division']
    });
  }

  //Actualizar un Colaborador
  async update(id: number, updateColaboradorDto: UpdateColaboradorDto) {
    await this.colaboradorRepository.update(id, updateColaboradorDto);
    return this.findOne(id);
  }

  //Eliminar un colaborador
  async remove(id: number) {
    const colaborador = await this.findOne(id);

    //Validar si existe el ID
    if (colaborador) { //SI existe el ID => Borrar la división
      return await this.colaboradorRepository.remove(colaborador);
    }
  
    else { //NO existe el ID => Lanzar excepción
      throw new NotFoundException(`El colaborador con ID ${id} no existe`);
    }
  }
}
