import { ConnectionOptions } from 'typeorm';
import { Owner } from './entities/owner.entity';
import { Manufacturer } from './entities/manufacturer.entity';
import { Car } from './entities/car.entity';

export const dbSettings: ConnectionOptions = {
  type: "sqlite",
  database: `../database.sql`,
  entities: [Car, Owner, Manufacturer],
  synchronize: true
};
