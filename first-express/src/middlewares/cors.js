//CORS 미들웨어 ⭐️⭐️⭐️

export const cors = (req, res, next) => {
  const origin = req.headers.origin;
  const isDev = process.env.NODE_ENV !== 'production';

  const whiteList = [
    'http://localhost:3000'
  ];

  const isAllowed = isDev || whiteList.includes(origin);
  if (isAllowed) {
    res.headers('Access-Contral-Allow-Origin', origin);
  }

  res.headers('Access-Contral-Allow-Origin', '*');

  //공통 헤더 설정
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  );
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  // Preflight(사전 요청) 처리
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
};
