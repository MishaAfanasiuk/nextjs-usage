import { IsNotEmpty, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class UpdateCarDto {
  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  manufacturerId?: number;

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  price?: number;

  @IsNotEmpty()
  @IsDateString()
  @IsOptional()
  firstRegistrationDate?: Date;
}
