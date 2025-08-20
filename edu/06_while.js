
let cnt = 0;

while(true) {
  console.log(cnt);
  cnt++;
  // console.log('while문 시작');

  if(cnt >= 3) {
    break;
  }
  // console.log('while문 끝');
}


// 구구단 2단

let dan = 2;
let MultiPlier = 1;
let lastMultiPlier = 9;
while(true) {
  console.log(`${dan} X ${MultiPlier} = ${dan * MultiPlier}`);
  MultiPlier++;

  if(MultiPlier > lastMultiPlier) {
    break;
  }
}

// do-while문 (조건이 맞지 않더라도 딱 한번은 동작하고 멈추기)
do {
  console.log(`2 X ${MultiPlier} = ${2 * MultiPlier}`);

  MultiPlier++;
} while(MultiPlier < 1);