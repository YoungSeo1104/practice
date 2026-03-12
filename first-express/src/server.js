import express from 'express';
import { router } from './routes/index.js';
import { logger } from './middlewares/logger.js';
import { requestTimer } from './middlewares/requestTimer.js';
import { cors } from './middlewares/cors.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { config, isDevelopment } from './config/config.js';
import { connectDB, disconnectDB } from './db/index.js';

const app = express();
await connectDB();

// JSON 파싱 미들웨어
app.use(express.json());

// URL 인코딩 파싱
app.use(express.urlencoded({ extended: true })); // qs 사용

//CORS
app.use(cors);

// 범용 미들웨어
if (isDevelopment) {
  app.use(logger);
  app.use(requestTimer);
}

// 정적 파일 제공
app.use(express.static('public')); // public 폴더 안 파일을 URL로 그대로 제공하는 기능

// 모든 라우트 등록
app.use('/', router);

// 에러 핸들링, 항상 마지막에 등록!
app.use(errorHandler);

// 서버 시작
const server = app.listen(config.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${config.PORT}`);
});

// 안전한 종료 (Graceful Shutdown)
const shutdown = (signal) => {
  console.log(`\n${signal} received. Shutting down gracefully...`);
  // 새로운 요청을 더 이상 받지 않도록 서버를 닫기.
  server.close(async () => {
    console.log('HTTP server closed.');
    await disconnectDB(); // 서버가 닫히면, DB 연결 해제
  });
};

// SIGINT, SIGTERM 신호를 감지하여 shutdown 함수를 실행
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
