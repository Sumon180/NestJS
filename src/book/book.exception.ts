/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus } from "@nestjs/common";



export class BookException extends HttpException{
    constructor(){
        super("This is Custom Book Exception", HttpStatus.BAD_REQUEST)
    }
}