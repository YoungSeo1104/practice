/*
import { an } from '../../section3/node_modules/@types/node/wasi.d';
* 사용자 정의 타입 가드
*/

type Dog = {
    name: string;
    isBark: boolean;
}

type Cat = {
    name: string;
    isScratch: boolean; 
}

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
    if (isDog(animal)) { // Dog 타입으로 좁혀짐
        animal;
    } else if (isCat(animal)) { // Cat 타입으로 좁혀짐
        animal;
    }
}