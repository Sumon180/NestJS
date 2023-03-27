import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAllUsers(): string {
    return 'this api will return all users';
  }
  @Post()
  addUser(): string {
    return 'this api will User';
  }
}
