const user = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90,
  }
};

// 얕은 복사 : 최상위 계층의 요소만 독립적으로 복사,
// 그 외 계층은 참조형태로 복사
// const shallowCopy = {...user};
// shallowCopy.age = 100;

// console.log(user, shallowCopy);


// 딮카피 : 모든 계층의 요소를 독립적으로 복사
// JSON 방식 (단, 함수/심볼/undefined는 복사 불가)
const jsonCopy = JSON.parse(JSON.stringify(user));
jsonCopy.friends.id = 200;

// Node.js 17+ 또는 브라우저 최신 환경
const cloneCopy = structuredClone(user);
jsonCopy.friends.id = 200;

console.log(user);


// ------------------------
// Destructuring 문법
// ------------------------
const arr = ['hong', 20];

// const [name, age] = arr;
// const [name] = arr;
// const [, age] = arr;

console.log(age);

const user2 = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90,
  }
};

const {name, age, friends} = user2;
// const {name, friends} = user2;

console.log(name, friends);