/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('/getbook')
  getBook(): string {
    return this.bookService.getBook();
  } 
}
