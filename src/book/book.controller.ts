/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { BookDto } from './dto/book.dto';

@Controller('book')
export class BookController {
  @Get('/:id')
  findBookById(@Param('id', ParseIntPipe) id: number): string {
    console.log(id, typeof id);
    return 'book by id';
  }

  @Post('/add')
  addBook(@Body(new ValidationPipe()) book: BookDto): string {
    return 'add book';
  }
}
