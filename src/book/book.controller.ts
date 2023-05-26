/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Controller,
  Get,
  UseFilters,
} from '@nestjs/common';
import { BookCustomExceptionFilter } from './book.exception.filter';

@Controller('book')
export class BookController {
  @Get('')
  @UseFilters(BookCustomExceptionFilter)
  helloBookApi(): string {
    throw new BadRequestException();
  }
}
