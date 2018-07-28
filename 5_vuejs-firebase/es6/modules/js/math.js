// // export (a, b) { return a+b; } 로 선언도 가능. 다른 곳에서 import 할 때 임의의 함수명을 지정해줄 수 있음.
// export function sum (a, b) {
//     return a+b;
// }

// export function substract (a, b) {
//     return a-b;
// }

// export const pi = 3.14;

function sum (a, b) {
    return a+b;
}

function substract (a, b) {
    return a-b;
}

const pi = 3.14;

export default {
    sum,
    substract,
    pi
}