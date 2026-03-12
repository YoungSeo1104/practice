import express from 'express';

const app = express();
const PORT = 5001;

// JSON 파싱 미들웨어
app.use(express.json());

const users = [];
let nextId = 1;

// 기본 HTTP메서드
app.get('/users', (req, res) => {
  res.json({ users });
});

app.get('/users/:id', (req, res) => {
  res.json({ message: `userID ${req.params.id} 조회` });
});

// postman에서 변경 테스트 하려면
// Header -> Content-Type을 application/json 확인하기
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: nextId++, name, email }; // 새 유저 객체 생성
  users.push(newUser);
  res.json({ message: '사용자 생성됨', name, email });
});

app.put('/users/:id', (req, res) => {
  res.json({ message: `사용자 ${req.params.id} 업데이트` });
});

app.delete('/users/:id', (req, res) => {
  res.json({ message: `사용자 ${req.params.id} 삭제` });
});

// 쿼리 문자열 - /search?q=express&limit=10
app.get('/search', (req, res) => {
  const { q, limit = 10 } = req.query;
  res.json({ query: q, limit: Number(limit) });
});

// 여러 매개변수
app.get('/users/:userId/posts/:postId', (req, res) => {
  const { userId, postId } = req.params;
  res.json({ userId, postId });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
