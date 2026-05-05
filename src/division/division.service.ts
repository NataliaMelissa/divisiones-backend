//Importar librerías
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDivisionDto } from './dto/create-division.dto';
import { UpdateDivisionDto } from './dto/update-division.dto';

//Importar Clases/Relaciones
import { Division } from './entities/division.entity';


@Injectable()
export class DivisionService {
  //Consturctor Manejador de dependencias
  constructor(
    @InjectRepository(Division)
    private divisionRepository: Repository<Division>,
  ) {}

  //Crear Nueva División
  async create(createDivisionDto: CreateDivisionDto) {

    const { padre, ...datosDivision } = createDivisionDto; //DTO padre y datosDivision (embajador, nombre)
    const nuevaDivision = this.divisionRepository.create(datosDivision); //Var Básica con los datos

    //Validar el ID del Padre
    if (padre) { //Padre != null => Asignar id del padre a la nueva división
      nuevaDivision.padre = { id: padre } as Division;
    }

    return await this.divisionRepository.save(nuevaDivision);
  }

  //Obtener todas las divisiones
  async findAll() {
    const divisiones = await this.divisionRepository.find({
      relations: ['padre', 'subdivisiones', 'colaboradores'],
    }); //Consultar la BD para obtener todas las divisiones con sus relaciones (padres, subdivisiones)

    //Transformar registro para al frontend
    return divisiones.map((div) => ({
      ...div, //Copiar datos originales (id, nombre, etc.)

      //Obtener los atributos
      nivel: this.calcularNivel(div), //Obtener el Nivel
      totalSubdivisiones: div.subdivisiones ? div.subdivisiones.length : 0, //Subdivisiones, si no tiene devolver 0
      totalColaboradores: div.colaboradores ? div.colaboradores.length : 0, //Colaboradores, si no tiene devolver 0
    }));
  }

  //Encontrar 1 división según el ID
  async findOne(id: number) {
    return await this.divisionRepository.findOne({
      where: { id },
      relations: ['padre', 'subdivisiones'],
    });
  }

  //Obtener todos los empleados de una misma división
  async findAllColaboradores_SameDivision(id: number) { //Division Id
    return await this.divisionRepository.findOne({
      where: { id },
      relations: ['padre', 'subdivisiones', 'colaboradores'],
    });
  }

  //Actualizar una división
  async update(id: number, updateDivisionDto: UpdateDivisionDto) {
    const { padre, ...datosUpdate } = updateDivisionDto; //DTO padre y datosUpdate (id,nombre, embajador)
    const updateData: any = {
      id,
      ...datosUpdate,
    }; //Objeto con Datos a actualizar
    const existe = await this.divisionRepository.count({ where: { id } });
  
    //Validar si el ID de la división existe
    if (!existe) { //NO existe => Lanzar excepción
      throw new NotFoundException(`La división con ID ${id} no existe`);
    }

    //Validar si el ID es de una división superior (padre) o hija
    if (padre !== undefined) { // Padre NO es undefined => El usuario mandó datos a actualizar con el padre
      updateData.padre = padre ? { id: padre } : null; // Padre != null => Actualizar el idPadre con la variable Padre, sino se pone NULL
    }

    await this.divisionRepository.update(id, datosUpdate); //Actualizar los datos

    return this.findOne(id);
  }

  //Borrar una división
  async remove(id: number) {
    const division = await this.findOne(id);

    //Validar si existe el ID
    if (division) { //SI existe el ID => Borrar la división
      return await this.divisionRepository.remove(division);
    }

    else { //NO existe el ID => Lanzar excepción
      throw new NotFoundException(`La división con ID ${id} no existe`);
    }
  }

  //Calcular el Nivel: Distancia desde el "hijo" (subdivisiones) hasta el "padre" (división superior)
  private calcularNivel(division: Division): number {

    //Definir variables
    let nivel = 1;
    let actual: Division = division;

    //Calcular el nivel
    while (actual && actual.padre) { //actual != null && padre.actual != null => Sigue siendo "hijo"
    
      nivel++;
      actual = actual.padre;

      //Condición While
      /*
        - actual != null && actual.padre != null => Sigue siendo hijo
        - actual != null && actual.padre == null => Se encontró al padre
      */
    }

    return nivel;
  }
}
