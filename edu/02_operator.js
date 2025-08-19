// 산술연산자
let num1 = 5;
let num2 = 10;

console.log(num1 + num2); // 더하기
console.log(num1 - num2); // 빼기
console.log(num1 * num2); // 곱하기
console.log(num1 / num2); // 나누기
console.log(num1 % num2); // 나머지 구하기

// 문자열 연결 연산자
let firstName = '길동';
let lastName = '홍';

console.log(lastName + firstName);
console.log(lastName.concat(firstName));

// 산술대입연산자
let num3 = 0;
// num3 = num3 + num1;
num3 += num1; // 윗 라인 코드를 이렇게 쓸 수도 있다.
console.log(num3);
num3 -= num1;
console.log(num3);
num3 *= num1;
console.log(num3);
num3 /= num1;
console.log(num3);
num3 %= num1;
console.log(num3);

// (전위|후위)증감 연산자
let num4 = 0;
console.log(--num4); // 전위 연산자 우선 계산 후 값 도출
console.log(num4--); // 후위 연산자는 log 값 도출 후 계산

// 비교 연산자
let num5 = 1;
let num6 = 2;
console.log(num5 > num6);
console.log(num5 < num6);
console.log(num5 >= num6);
console.log(num5 <= num6);
// ==(데이터 타입 체크X), ===(데이터 타입 체크O)
console.log(1 == '1');
console.log(1 != '1'); // 불완전 비교 / 같지 않다.
console.log(1 === '1'); // <- 완전 비교인 === 코드를 사용하는 것을 추천
console.log(1 !== '1'); // 완전 비교 / 같지 않다.

// 논리 연산자
console.log((1 === 1) && (1 === 0)); // and 는 둘 다 맞아야 true
console.log((1 === 1) || (1 === 0)); // or 는 둘 중 하나만 맞아도 true
console.log(!(1 === 1)); // 앞에 !를 붙이면 값 반전 느낌이다. true는 flase로 flase는 true로.

// 삼항연산자(if 연산자의 축약 버전이라고 할 수도 있음)
// 조건식 ? 참일 경우 처리 : 거짓일 경우 처리
let rank = 3;
let result = rank <= 2 ? '통과' : '거부' // 앞의 연산 값이 true라면 '통과'를 flase라면 '거부'를 띄운다.
console.log(result); 