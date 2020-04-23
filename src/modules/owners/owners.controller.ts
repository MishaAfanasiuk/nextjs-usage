import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnerDto } from './dto/owner.dto';
import { UpdateOwnerDto } from './dto/updateOwner.dto';

@Controller('owners')
export class OwnersController {
  constructor(private ownersService: OwnersService){}

  @Get('')
  getOwners() {
    return this.ownersService.getOwners();
  }

  @Post('')
  addOwner(@Body() owner: OwnerDto) {
    return this.ownersService.addOwner(owner)
  }

  @Put(':id')
  updateOwner(@Body() owner: UpdateOwnerDto, @Param('id') ownerId: string) {
    return this.ownersService.updateOwner(ownerId, owner)
  }

  @Delete(':id')
  deleteOwner(@Param('id') id: string) {
    return this.ownersService.deleteOwner(id)
  }
}
