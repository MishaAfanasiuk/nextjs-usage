import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ManufacturerUpdateDto {
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsOptional()
  @IsString()
  phone?: string;

  @IsNotEmpty()
  @IsOptional()
  @IsNumber()
  siret?: number;
}
