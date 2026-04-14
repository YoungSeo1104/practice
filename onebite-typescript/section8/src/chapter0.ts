/*
 * 인덱스드 엑세스 타입
 */

//객체 인터페이스
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

//배열 타입
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const key = 'author';

function printAuthorInfo(author: Post['author']) {
  //타입만 정의 가능! key를 넣는 경우 변수를 넣기에 오류가 남!
  console.log(`${author.id}-${author.name}`);
}

const post: Post = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '홍길동',
    age: 24,
  },
};

function printAuthorInfo2(author: PostList[number]['author']) {
  //타입만 정의 가능! key를 넣는 경우 변수를 넣기에 오류가 남!
  console.log(`${author.id}-${author.name}`);
}
const post2: PostList[0] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '홍길동',
    age: 24,
  },
};

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3];
type TupNum = Tup[number];
