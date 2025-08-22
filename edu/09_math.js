// Math 객체
// 자바스크립트에 내장된 객체라서 선언 없이 사용 가능

// ceil(arg) : 올림
// round(arg) : 반올림
// floor(arg) : 버림
let double = 0.9;
Math.ceil(double); // 1
Math.round(double); // 1
Math.floor(double); // 0

// random() : 0이상 1미만의 랜덤한 수를 반환
// 보안적인 측면에서는 좋지 않다. 테스트용도로는 적합
let randomDouble = Math.random();
// 1~10 난수
console.log(Math.ceil(randomDouble * 10));

// 0. 저장용 배열 만들기(length: 11, 각 요소의 값은 0)
const arrSaveCnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// 1. 루프 100만번 돌려
for(let i = 0; i < 1_000_000; i++) {
//  1-1. 랜덤 수 획득 `Math.ceil(randomDouble * 10)`
  const randomNum = Math.ceil(Math.random() * 10);

//  1-2. 저장용 배열에 나온 숫자를 카운트해서 저장
  arrSaveCnt[randomNum]++;
}
// 2. 저장용 배열 확인
console.log(arrSaveCnt);

// abs(arg) : 절대값을 반환
Math.abs(1); // 1
Math.abs(-1); // 1