import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';
import { Owner } from '../database/entities/owner.entity';
import { OwnerDto } from './dto/owner.dto';
import { UpdateOwnerDto } from './dto/updateOwner.dto';
import { DateTime } from 'luxon';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>
  ){}

  getOwners() {
    return this.ownerRepository.find()
  }

  addOwner(owner: OwnerDto) {
    return this.ownerRepository.save(owner)
  }

  async updateOwner(ownerId: string, owner: UpdateOwnerDto) {
    await this.ownerRepository.update(ownerId, owner)
    return
  }

  deleteOwner(ownerId: string) {
    return this.ownerRepository.delete(ownerId)
  }

  removeOldOwners() {
    const currentDate = DateTime.local();
    return this.ownerRepository.delete({
      purchaseDate: LessThan(currentDate.minus({month: 18}).toISODate())
    })
  }
}
