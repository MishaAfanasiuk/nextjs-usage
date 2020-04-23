import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Manufacturer } from '../database/entities/manufacturer.entity';
import { ManufacturerDto } from './dto/manufacturer.dto';
import { ManufacturerUpdateDto } from './dto/manufacturerUpdate.dto';

@Injectable()
export class ManufacturerService {
  constructor(
    @InjectRepository(Manufacturer)
    private repository: Repository<Manufacturer>
  ){}

  getManufacturers() {
    return this.repository.find()
  }

  addManufacturer(manufacturer: ManufacturerDto) {
    return this.repository.save(manufacturer)
  }

  async updateManufacturer(id: number, manufacturer: ManufacturerUpdateDto) {
    await this.repository.update(id, manufacturer)
    return
  }

  deleteManufacturer(id: string) {
    return this.repository.delete(id)
  }
}
