/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { Request, Response, NextFunction } from 'express';
import { RootModule } from './root.module';

function globalMiddleweareOne(req: Request, res: Response, next: NextFunction) {
  console.log('this is the global middleWeare number 1');
  next();
}
function globalMiddleweareTwo(req: Request, res: Response, next: NextFunction) {
  console.log('this is the global middleWeare number 2');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleweareOne);
  app.use(globalMiddleweareTwo);
  await app.listen(4000);
}

bootstrap();
