import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Query,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { PhotoDto } from './dto/PhotoDto';

@Controller()
export class AppController {
  constructor(private _appService: AppService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createPhoto(@Body() photoDto: PhotoDto) {
    return this._appService.createPhoto(photoDto);
  }

  @Post('many')
  @UsePipes(new ValidationPipe())
  createManyPhotos(@Body() photoDto: PhotoDto[]) {
    return this._appService.createManyPhotos(photoDto);
  }

  @Get()
  findAll(@Query('query') query = '') {
    if (query !== '') return this._appService.findByLabel(query);
    return this._appService.findAll();
  }

  @Delete()
  delete(@Query('id') id: string) {
    this._appService.delete(id);
  }
}
