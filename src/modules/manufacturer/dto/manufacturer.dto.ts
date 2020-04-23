import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ManufacturerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsNumber()
  siret: number;
}
