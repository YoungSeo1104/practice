import { HttpException } from './httpException.js';

export class UnauthorizedException extends HttpException {
  constructor(description = 'Unauthorized') {
    super(description, 401); //401은 “인증 필요”입니다. (로그인 안 됨, 토큰 없음/만료)
  }
}
