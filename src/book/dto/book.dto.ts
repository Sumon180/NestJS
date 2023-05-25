/* eslint-disable prettier/prettier */
import { IsInt, IsString } from 'class-validator';

export class BookDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
