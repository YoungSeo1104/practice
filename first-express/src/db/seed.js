import { connectDB, disconnectDB } from './index.js';
import { User } from '../models/user.js';

const seed = async () => {
  await connectDB();

  // 기존 데이터 초기화 (선택사항)
  await User.deleteMany({});
  console.log('기존 데이터 삭제 완료');

  // 데이터 삽입
  await User.insertMany([
    { name: '홍길동', email: 'hong@gmail.com', age: 25 },
    { name: '김철수', email: 'kim@gmail.com', age: 30 },
    { name: '이영희', email: 'lee@gmail.com', age: 28 },
  ]);
  console.log('시드 데이터 삽입 완료!');

  await disconnectDB();
  process.exit(0);
};

seed();