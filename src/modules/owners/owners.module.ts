import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersController } from './owners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from '../database/entities/owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  providers: [OwnersService],
  controllers: [OwnersController],
  exports: [OwnersService]
})
export class OwnersModule {}
