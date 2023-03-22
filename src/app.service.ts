import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Hello World!</h1>';
  }

  getBye(): string {
    return '<h1>Bye Bye!</h1>';
  }
}
