/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    getBook(): string {
    return '<h1>Take Book</h1>';
  } 
}
