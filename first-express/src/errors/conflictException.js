import { HttpException } from './httpException.js';

export class ConflictException extends HttpException {
  constructor(description = 'CONFLICT') {
    super(description, 409); //409는 “충돌”입니다. (예: 이미 존재하는 이메일로 회원가입 시도)
  }
}
