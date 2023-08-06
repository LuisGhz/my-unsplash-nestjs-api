import {
  Controller,
  Get,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PhotoDto } from './dto/PhotoDto';

@Controller()
export class AppController {
  @Get()
  @UsePipes(new ValidationPipe())
  createPhoto(@Body() photoDto: PhotoDto): PhotoDto {
    return photoDto;
  }
}
