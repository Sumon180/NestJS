/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common/decorators';

/* eslint-disable prettier/prettier */
@Injectable()
export class BookService {
  addBook(): string {
    return 'This will add Book';
  }
  updateBook(): string {
    return 'This will update Book';
  }
  deleteBook(): string {
    return 'This will delete Book';
  }
  findAllBooks(): string {
    return 'This will all Book';
  }
}
