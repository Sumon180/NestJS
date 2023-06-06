/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Controller,
  Get,
  UseFilters,
} from '@nestjs/common';


@Controller('book')
export class BookController {
  @Get('')
  @UseFilters()
  helloBookApi(): string {
    throw new BadRequestException();
  }
}
