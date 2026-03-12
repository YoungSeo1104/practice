//“에러도 하나의 객체로 만들고, 
// HTTP 상태코드까지 같이 들고 다니게 하자”는 
// 목적의 커스텀 에러 클래스

export class HttpException extends Error {
  statusCode;
  
  constructor(description, statusCode) {
    super(description);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}
