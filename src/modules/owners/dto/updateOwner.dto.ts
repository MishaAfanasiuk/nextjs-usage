import { IsNotEmpty, IsDateString, IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateOwnerDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsDateString()
  purchaseDate?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  carId?: number;
}
