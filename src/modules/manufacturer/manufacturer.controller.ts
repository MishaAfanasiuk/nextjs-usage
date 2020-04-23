import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerDto } from './dto/manufacturer.dto';
import { ManufacturerUpdateDto } from './dto/manufacturerUpdate.dto';

@Controller('manufacturer')
export class ManufacturerController {
  constructor(
    private mService: ManufacturerService
  ){}

  @Get('')
  getManufacturers(){
    return this.mService.getManufacturers()
  }

  @Post('')
  addManufacturer(@Body() manufacturer: ManufacturerDto){
    return this.mService.addManufacturer(manufacturer)
  }

  @Put(':id')
  updateManufacturer(
    @Body() manufacturer: ManufacturerUpdateDto,
    @Param('id') id: number
  ){
    return this.mService.updateManufacturer(id, manufacturer)
  }

  @Delete(':id')
  deleteManufacturer(@Param('id') id: string) {
    return this.mService.deleteManufacturer(id)
  }
}
