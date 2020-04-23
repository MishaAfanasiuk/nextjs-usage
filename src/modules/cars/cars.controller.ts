import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';
import { UpdateCarDto } from './dto/updateCar.dto';

@Controller('cars')
export class CarsController {
  constructor(
    private carsService: CarsService
  ){}

  @Get('')
  getCars() {
    return this.carsService.getCars()
  }

  @Post('')
  addCar(@Body() car: CarDto) {
    return this.carsService.addCar(car)
  }

  @Put(':id')
  updateCar(@Param('id') id: number, @Body() car: UpdateCarDto){
    return this.carsService.updateCar(id, car)
  }

  @Delete(':id')
  deleteCat(@Param('id') id: number) {
    return this.carsService.deleteCar(id)
  }

  @Get(':id/manufacturer')
  getCarManufacturer(@Param('id') carId: number) {
    return this.carsService.getCarManufacturer(carId)
  }
}
