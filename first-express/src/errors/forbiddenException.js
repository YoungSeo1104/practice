import { HttpException } from './httpException.js';

export class ForbiddenException extends HttpException {
  constructor(description = 'FORBIDDEN') {
    super(description, 403); //403은 “권한 없음”입니다. (로그인은 했는데 접근 권한이 없음)
  }
}