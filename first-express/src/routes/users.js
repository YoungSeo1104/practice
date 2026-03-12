import express from 'express';
import { validateUser } from './middlewares/validateUser.js';

export const userRouter = express.Router();

const users = [
  { id: 1, name: '김하늘', email: 'kim@example.com' },
  { id: 2, name: '이준호', email: 'lee@example.com' },
  { id: 3, name: '박서연', email: 'jin@example.com' },
  { id: 4, name: '최민준', email: 'boh@example.com' },
  { id: 5, name: '정다은', email: 'baek@example.com' },
  { id: 6, name: '한지우', email: 'han@example.com' },
  { id: 7, name: '오세훈', email: '5ohe@example.com' },
  { id: 8, name: '윤수빈', email: 'yun@example.com' },
  { id: 9, name: '강민지', email: 'minji@example.com' },
  { id: 10, name: '신현우', email: 'shin@example.com' },
  { id: 11, name: '서지훈', email: 'seo@example.com' },
  { id: 12, name: '홍예린', email: 'hong@example.com' },
  { id: 13, name: '조태현', email: 'joe@example.com' },
  { id: 14, name: '임나연', email: 'rim@example.com' },
  { id: 15, name: '배도윤', email: 'youn@example.com' },
];

// nextId는 ++로 증가시키기 때문에 const가 아니라 let이어야 합니다.
let nextId = 16;

// GET /users - 모든 사용자 조회
userRouter.get('/', (req, res) => {
  res.json({
    success: true,
    data: users,
    count: users.length,
  });
});

// GET /users/:id - 특정 사용자 조회
userRouter.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: '사용자를 찾을 수 없습니다',
    });
  }

  res.json({
    success: true,
    data: user,
  });
});

// POST /users - 새 사용자 생성
userRouter.post('/', validateUser, (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: '이름과 이메일은 필수입니다',
    });
  }

  const newUser = {
    id: nextId++,
    name,
    email,
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    data: newUser,
    message: '사용자가 생성되었습니다',
  });
});

//patch /users/:id - 사용자 수정
userRouter.patch('/:id', validateUser, (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: '사용자를 찾을 수 없습니다',
    });
  }

  users[userIndex] = {
    ...users[userIndex],
    ...(name !== undefined ? { name } : {}),
    ...(email !== undefined ? { email } : {}),
  };

  res.json({
    success: true,
    data: users[userIndex],
    message: '사용자가 수정되었습니다',
  });
});

// DELETE /users/:id - 사용자 삭제
userRouter.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: '사용자를 찾을 수 없습니다',
    });
  }

  users.splice(userIndex, 1);

  res.json({
    success: true,
    message: '사용자가 삭제되었습니다',
  });
});

// GET /users/:userId/posts/:postId - 중첩 리소스
userRouter.get('/:userId/posts/:postId', (req, res) => {
  const { userId, postId } = req.params;
  res.json({ userId, postId });
});
