import { Module } from '@nestjs/common';
import { ChatModule } from './chat.module';
import { OrdersModule } from './orders.module';
import { UsersModule } from './users.module';

@Module({
  imports: [UsersModule, OrdersModule, ChatModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('App Module');
  }
}
