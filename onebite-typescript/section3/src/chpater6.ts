/*
* 타입 단언 (Type Assertion)
 -> 컴파일러에게 특정 값이 특정 타입임을 명시적으로 알려주는 방법입니다.
    -> 타입 단언은 런타임에 영향을 미치지 않으며, 컴파일러에게만 정보를 제공합니다.
    -> 타입 단언은 두 가지 구문으로 사용할 수 있습니다
*/

type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // 타입 단언을 사용하여 빈 객체를 Person 타입으로 간주하도록 함
person.name = 'Alice';
person.age = 30;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: 'Buddy',
  color: 'Brown',
  breed: '진도',
} as Dog; // 타입 단언을 사용하여 dog 객체를 Dog 타입으로 간주하도록 함;

/*
* 타입 단언의 규칙
1. 값 as 단언 (단언식)
2. A as B;
3. A가 B의 슈퍼타입이거나 서브타입이어야 함.
*/ 

let num1 = 10 as never;
let num2 = 20 as unknown;
let num3 = 10 as unknown as string; // 다중 단언 (double assertion) - 권장되지 않음

/*
* const 단언
-> 객체 리터럴에 const 단언을 사용하면, 해당 객체의 모든 프로퍼티가 읽기 전용이 됩니다.
-> const 단언은 객체 리터럴에만 적용되며, 변수 선언에는 적용되지 않습니다.
*/ 

let num4 = 10 as const;

let cat = {
    name: 'Kitty',
    color: 'White',
} as const

// cat.name = 'Tom'; // 오류: 읽기 전용 프로퍼티이므로 값을 변경할 수 없음

/* 
* Non-null 단언 (Non-null Assertion)
-> 값이 null 또는 undefined가 아님을 컴파일러에게 명시적으로 알려주는 방법입니다.
-> Non-null 단언은 값 뒤에 느낌표(!)를 붙여서 사용합니다.
-> Non-null 단언은 런타임에 영향을 미치지 않으며, 컴파일러에게만 정보를 제공합니다.
*/

type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: '게시글1',
    author: '작성자1',
}

const len : number = post.author!.length; // Non-null 단언을 사용하여 author가 null 또는 undefined가 아님을 컴파일러에게 알려줌

