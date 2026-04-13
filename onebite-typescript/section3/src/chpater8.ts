/*
 * 서로소 유니온 타입
 * 교집합이 없는 타입으로만 만든 유니온 타입
 */

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case 'ADMIN':
      {
        console.log(
          `${user.name}님 현재까지 ${user.kickCount}회 강퇴 하셨습니다.`,
        );
      }
      break;
    case 'MEMBER':
      {
        console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
      }
      break;
    case 'GUEST':
      {
        console.log(
          `${user.name}님 현재까지 ${user.visitCount}회 방문하셨습니다.`,
        );
      }
      break;
  }

  //   if (user.tag === 'ADMIN') {
  //     console.log(`${user.name}님 현재까지 ${user.kickCount}회 강퇴 하셨습니다.`);
  //   } else if (user.tag === 'MEMBER') {
  //     console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
  //   } else if (user.tag === 'GUEST') {
  //     console.log(`${user.name}님 현재까지 ${user.visitCount}회 방문하셨습니다.`);
  //   }
}

//복습겸 한가지 사례
// 비동기 작업의 결과를 처리하는 객체

type LodingTask = {
  state: 'LOADING';
};

type FailedTask = {
  state: 'FAILED';
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: string;
  };
};

type AsyncTask = LodingTask | FailedTask | SuccessTask;

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 콘솔에 에러 메시지 출력
// 성공 -> 콘솔에 응답 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'LOADING':
      console.log('로딩중...');
      break;
    case 'FAILED':
      console.log(`에러 발생: ${task.error.message}`);
      break;
    case 'SUCCESS':
      console.log(`응답 데이터: ${task.response.data}`);
      break;
  }
}
const loding: AsyncTask = {
  state: 'LOADING',
};

const failed: AsyncTask = {
  state: 'FAILED',
  error: {
    message: '네트워크 오류',
  },
};

const success: AsyncTask = {
  state: 'SUCCESS',
  response: {
    data: '데이터~~~',
  },
};

console.log(processResult(loding)); // 로딩중...
console.log(processResult(failed)); // 에러 발생: 네트워크 오류
console.log(processResult(success)); // 응답 데이터: 데이터~~~
