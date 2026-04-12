// object -> 구조적 타입 시스템 => Property Type 시스템
let user: {
  //객체 리터럴 타입
  id?: number; // 선택적 프로퍼티, 옵셔널 프로퍼티
  name: string;
} = {
  id: 1,
  name: '박영서',
};

user = {
  name: '홍길동',
};

let config: {
  readonly apiKey: string; //값이 바뀌면 안 될때
} = {
  apiKey: 'MY API KEY',
};


