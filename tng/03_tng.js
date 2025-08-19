// IF로 만들어주세요.
// 성적
// 범위 :
//    100   : D+
//    90이상 100미만 : D
//    80이상 90미만 : B
//    70이상 80미만 : C
//    60이상 70미만 : D
//    60미만: F
//출력 문구 : "당신의 점수는 XXX점 입니다. <등급>"
let score = 76;



// if(score === 100) {
//   console.log('당신의 점수는 ' + score + '점 입니다. < A+ >');
// } else if(score >= 90) {
//   console.log('당신의 점수는 ' + score + '점 입니다. < A >');
// } else if(score >= 80) {
//   console.log('당신의 점수는 ' + score + '점 입니다. < B >');
// } else if(score >= 70) {
//   console.log('당신의 점수는 ' + score + '점 입니다. < C >');
// } else if(score >= 60) {
//   console.log('당신의 점수는 ' + score + '점 입니다. < D >');
// } else if(score < 60) {
//   console.log('당신의 점수는 ' + score + '점 입니다. < F >');
// }

let grade = 'F';


if(score > 100 || score < 0) {
  console.log('잘못된 값입니다.');
} else {
  if(score === 100) {
    grade = 'A+';
  } else if(score >= 90) {
    grade = 'A';
  } else if(score >= 80) {
    grade = 'B';
  } else if(score >= 70) {
    grade = 'C';
  } else if(score >= 60) {
    grade = 'D';
  }
  
  console.log('당신의 점수는 ' + score + '점 입니다. < ' + grade + ' >');
  console.log(`당신의 점수는 ${score}점 입니다. < ${grade} >`);
}
