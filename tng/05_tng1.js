// *****
// *****
// *****
// *****
// *****


// for(let i = 0; i < 5; i++) {
//   console.log('*****');
// }

let star = '*';

for(let i = 0; i < 5; i++) {
  let makedStar = '';

  for(let z = 0; z < 5; z++) {
    makedStar += star;
  }
  console.log(`${makedStar}`);
}

let makedStar = '';
for(let i = 0; i < 5; i++) {
  makedStar += star;
  console.log(`${makedStar}`);
}

let plusStar = '';
for(let lineCnt = 5; lineCnt > 0; lineCnt--) {
  plusStar += '*';
  let makedSpace = '';

  for(let spaceCut = 1; spaceCut < lineCnt; spaceCut++) {
    makedSpace += ' ';
  }
  console.log(makedSpace + plusStar);
}