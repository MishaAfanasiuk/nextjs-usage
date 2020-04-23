import { IsNotEmpty, IsDateString, IsNumber, IsString } from 'class-validator';

export class OwnerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDateString()
  purchaseDate: number;

  @IsNotEmpty()
  @IsNumber()
  carId: number;
}
