import { Module } from '@nestjs/common';
import { BookController } from './app.controller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('App Module');
  }
}
