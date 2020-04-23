import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from '../cars/cars.module';
import { OwnersModule } from '../owners/owners.module';
import { ManufacturerModule } from '../manufacturer/manufacturer.module';
import { dbSettings } from '../database/dbSettings';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from '../../services/cron/cron.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbSettings),
    ScheduleModule.forRoot(),
    CarsModule,
    OwnersModule,
    ManufacturerModule,
  ],
  controllers: [AppController],
  providers: [AppService, CronService, CarsModule, OwnersModule]
})
export class AppModule {}
