import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manufacturer } from '../database/entities/manufacturer.entity';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerController } from './manufacturer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Manufacturer])],
  providers: [ManufacturerService],
  controllers: [ManufacturerController]
})
export class ManufacturerModule {}
