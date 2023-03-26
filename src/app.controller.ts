/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('Book')
export class BookController {
  //Nest Js Has provided me with the object
  constructor(private bookService: BookService) {}

  // add book
  @Post('/add')
  addbook(): string {
    return this.bookService.addBook();
  }

  //delete book
  @Delete('/delete')
  deleteBook(): string {
    return this.bookService.deleteBook();
  }

  //update book
  @Put('/update')
  updateBook(): string {
    return this.bookService.updateBook();
  }

  //delete book
  @Get('/findall')
  findAllBooks(): string {
    return this.bookService.findAllBooks();
  }
}
