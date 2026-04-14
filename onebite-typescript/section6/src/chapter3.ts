/*
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

//인터페이스는 무조건 public만 설정 가능함!!
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra?: string,
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}

const charater = new Character('영화1', 231, '엑스트라2');
const charater2 = new Character('영화2', 30);
console.log(charater);
