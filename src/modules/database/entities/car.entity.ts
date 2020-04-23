import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable, ManyToOne,
} from 'typeorm';
import { Owner } from './owner.entity';
import { Manufacturer } from './manufacturer.entity';
import { manufacturer } from '../../../../test/response.mock';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(
    type => Manufacturer,
    manufacturer => manufacturer.id,
    {eager: true, onDelete: 'CASCADE'}
    )
  @JoinColumn({name: 'manufacturerId'})
  manufacturer: Manufacturer;

  @Column()
  manufacturerId: number;

  @Column()
  price: number;

  @Column()
  firstRegistrationDate: Date;

  @OneToMany(type => Owner, owner => owner.car, {eager: true})
  owners: Owner[];
}
