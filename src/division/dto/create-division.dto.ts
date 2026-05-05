import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateDivisionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(45, { message: 'El nombre de la división no puede superar los 45 caracteres' })
  nombre!: string;

  @IsString()
  @IsOptional()
  embajador?: string;

  @IsInt() // Es mejor validar que el ID del padre sea un entero
  @IsOptional()
  padre?: number;
}