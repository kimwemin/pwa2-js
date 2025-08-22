// String 객체
// 원래라면 new String(); 이라고 선언해야 하지만 자주 사용하는 것이기에 아래처럼 간소화해서 작성해도 사용이 가능하다
// 문자 열 안에 '"`를 사용하고 싶을 시 앞에 \를 사용하면 바로 뒤에 붙는 글자를 이스케이프 시킨다.
let str =  `문자"'\`열입니다.`;

// length : 문자열의 길이를 반환
console.log(str.length);

// charAt(idx) : idx의 요소의 값을 반환
console.log(str.charAt(3));

// indexOf(searchStr, idx) : 해당 문자열에서 searchStr을 찾아 최초의 인덱스를 반환
// 찾지 못하면 -1 반환
// idx는 start 지점 지정, 생략 가능
str = '문자열입니다. 문자열입니다.';
console.log(str.indexOf('열'));
console.log(str.indexOf('열', 3));
console.log(str.indexOf('입니다'));
console.log(str.indexOf('숫자'));
console.log(str.includes('숫자')); // 존재여부 체크 시에는 includes 이용하는 것이 가독성 면에서 좋다.

// replace(pattern, replacement) : pattern을 찾아서 첫번째 문자열을 replacement로 치환한 후 문자열로 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.replace('문자열', '숫자'));

// replaceAll(pattern, replacement) : pattern을 찾아서 모든 문자열을 replacement로 치환한 후 문자열로 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.replaceAll('문자열', ''));

// substring(startIdx, endIdx) : startIdx 부터 endIdx까지 자른 문자열을 반환
// endIdx 생략 가능, endIdx로 지정된 부분은 포함하지 않음
str = '문자열입니다. 문자열입니다.';
console.log(str.substring(2, 5));

// split(separator, limit) : 문자열에서 separator 기준으로 각 문자열을 잘라 배열 요소로 담은 배열을 반환
str = '탕수육,짜장면,짬뽕,크림새우';
let arr = str.split(',');

// trim() : 문자열의 시작과 끝에 있는 공백을 제거한 문자열을 반환
// 문자 중간의 공백은 제거하지 않는다
str = '    하  하   ';
console.log(str.trim());

// toUpperCase(), toLowerCase() : 영어 대/소문자로 변환해서 반환
str = 'AsSDwdsaSDwds';
console.log(str.toUpperCase());
console.log(str.toLowerCase());