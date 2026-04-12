//타입 별칭 -> 코드의 중복을 줄이기
type User = {
  id: number;
  name: string;
};

function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: '홍길동',
};

//인덱스 시그니처 -> key와 value에 규칙을 넣어주기!
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: Number;
  Korea: Number;
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
