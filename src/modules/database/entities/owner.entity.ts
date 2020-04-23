import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  purchaseDate: Date;

  @Column()
  carId: number;

  @ManyToOne(type => Car)
  @JoinColumn({name: 'carId'})
  car: Car
}
