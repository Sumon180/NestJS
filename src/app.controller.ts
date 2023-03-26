/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('Book')
export class BookController {
  // add book
  @Post('/add')
  addbook(): string {
    return 'Book is added';
  }

  //delete book
  @Delete('/delete')
  deleteBook(): string {
    return 'Book is Deleted';
  }

  //update book
  @Put('/update')
  updateBook(): string {
    return 'Book is Updated';
  }

  //delete book
  @Get('/findall')
  findAllBooks(): string {
    return 'This will find All Books';
  }

  @Get('/findBookId/:bookId')
  findBookById(@Param() params): string {
    console.log(params.id);
    return `This will find a book of id #${params.bookId}`;
  }
}
