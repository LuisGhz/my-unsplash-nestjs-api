import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Param,
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

  @Get()
  findAll() {
    return this._appService.findAll();
  }

  @Get('by-label/:label')
  findByLabel(@Param('label') label: string) {
    return this._appService.findByLabel(label);
  }
}
