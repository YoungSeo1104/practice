import { HttpException } from './httpException.js';

export class BadRequestException extends HttpException {
  constructor(description = 'BAD_REQUEST') {
    super(description, 400); //400은 “요청이 잘못됐다”입니다. (필수값 누락, 형식 오류 등)
  }
}
