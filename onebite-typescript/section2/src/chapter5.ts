//enum 타입 -> 열거형 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  KOREAN = 'ko',
  ENGLISH = 'en',
  JAPANESE = 'ja',
}

const user1 = {
  name: 'kim',
  role: Role.ADMIN,
  language: Language.KOREAN,
};

const user2 = {
  name: 'park',
  role: Role.USER,
  Language: Language.ENGLISH,
};

const user3 = {
  name: 'lee',
  role: Role.GUEST,
  languae: Language.JAPANESE,
};

console.log(user1, user2, user3);
