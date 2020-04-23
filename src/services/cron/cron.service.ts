import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { OwnersService } from '../../modules/owners/owners.service';
import { CarsService } from '../../modules/cars/cars.service';

@Injectable()
export class CronService {
  constructor(
    private ownersService: OwnersService,
    private carsService: CarsService,
  ){}
  private readonly logger = new Logger(CronService.name);

  @Cron('0 1 0 * * *')
  handleMidnightCron() {
    this.ownersService.removeOldOwners()
      .catch(e => this.logger.error(e));

    this.carsService.applyDiscount()
      .catch(e => this.logger.error(e))
  }
}
