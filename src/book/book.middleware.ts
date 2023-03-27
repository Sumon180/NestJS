/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BookMiddleWare {
  use(req: Request, res: Response, next: NextFunction) {
    const protocol = req.protocol;
    const host = req.get('host');
    const url = req.originalUrl;
    const method = req.method;
    const date = new Date().toDateString();

    console.log(protocol + '://' + host + url + ' ' + method + '  ' + date);

    next();
  }
}
