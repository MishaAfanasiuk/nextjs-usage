import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from '../database/entities/car.entity';
import { Repository } from 'typeorm';
import { CarDto } from './dto/car.dto';
import { UpdateCarDto } from './dto/updateCar.dto';
import { DateTime } from 'luxon';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>
  ){}

  getCars() {
    return this.carsRepository.find();
  }

  addCar(car: CarDto) {
    return this.carsRepository.save(car);
  }

  async updateCar(id: number, car: UpdateCarDto) {
    await this.carsRepository.update(id, car);
    return
  }

  deleteCar(carId: number) {
    return this.carsRepository.delete(carId)
  }

  async getCarManufacturer(carId: number) {
    return this.carsRepository
      .createQueryBuilder('car')
      .select(['manufacturer'])
      .where({id: carId})
      .innerJoin('', 'manufacturer', 'car.manufacturerId = manufacturer.id')
      .getRawOne();
  }

  applyDiscount() {
    const currentDate = DateTime.local();
    return this.carsRepository.createQueryBuilder()
      .update(Car)
      .set({price: () => 'price - (price * 0.2)'})
      .where('firstRegistrationDate > :after')
      .andWhere('firstRegistrationDate < :before')
      .setParameters({
        after: currentDate.minus({month: 12}).toISODate(),
        before: currentDate.minus({month: 18}).toISODate()
      })
      .execute()
  }
}
