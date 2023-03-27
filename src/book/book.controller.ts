/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get()
  findAllBooks(): string {
    return 'this api will return all books';
  }
  @Post()
  addBook(): string {
    return 'this api will add a book';
  }
}
