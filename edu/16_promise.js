// Callback Hell
// setTimeout(() => {
//   console.log('A');

//   setTimeout(() => {
//     console.log('B');

//     setTimeout(() => {
//       console.log('C');
//     }, 1000);
//   }, 2000);
// }, 3000);

// Promise 객체
// 비동기 처리의 결과를 제공하겠다는 약속을 반환
// 단, 비동기 처리가 끝날 때까지 결과를 기다리는 것은 아니다.
function pro1(str, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(str === 'A' || str === 'B' || str === 'C') {
        console.log(str);
        resolve();
      } else {
        reject();
      }
    }, ms);
  });
}

// 체인기법
// 본 형태
// pro1('A', 3000).then().catch().finally();
// 단일 비동기 처리엔 유용하지만 여러 비동기처리를 할 때는 그리 유용하지 않다.
// 가독성을 위해 아래형식처럼 작성 가능
pro1('A', 3000)
.then(() => {
  console.log('THEN');
}) // 작업이 성공했을 때, then() 실행
.catch(() => {
  console.log('Catch');
}) // 작업이 실패했을 때, cathch() 실행
.finally(() => {
  console.log('Finally');
}); // 성공 실패 여부 상관없이 무조건 실행,  따라서 제일 마지막에 작성


pro1('A', 3000)
.then(() => {
  pro1('B', 2000)
  .then(() => {
    pro1('C', 1000)
    .then()
    .catch();
  })
  .catch();
})
.catch();

// 개선안
// return을 이용해 프로미스 객체를 선언한 것으로 만드는 것을 이용
// 하지만 오류가 발생할 시 찾기 어렵다
pro1('A', 3000)
.then(() => {
  return pro1('B', 2000);
})
.then(() => {
  return pro1('C', 1000);
})
.catch();