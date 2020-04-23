import { IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class CarDto {
  @IsNotEmpty()
  @IsNumber()
  manufacturerId: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsDateString()
  firstRegistrationDate: Date;
}
