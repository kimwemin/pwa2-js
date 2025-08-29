// html에서 들어갈 공간을 미리 지정해두는 것이 좋다.

const nowFormat = document.createElement('p');
// 딜레이 삭제를 위해 로컬에 한번 선언
formatCreate();

const intervalNowTime = setInterval(() => {
  formatCreate();
}, 1000);

const stopBtn = document.querySelector('#stop');
stopBtn.addEventListener('click', () => {
  clearInterval(intervalNowTime);
})

const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', () => {
  const restart = setInterval(() => {
    formatCreate();
  }, 500);
  
  stopBtn.addEventListener('click', () => {
    clearInterval(restart);
  })
})

document.body.insertBefore(nowFormat, stopBtn);

// 기록 버튼
const reportBtn = document.querySelector('#report');
reportBtn.addEventListener('click', () => {
  const newreport = document.createElement('p');
  newreport.textContent = formatMilcecond();
  const container = document.querySelector('.container');
  container.appendChild(newreport)
})

// 기록 초기화 버튼
const reportResetBtn = document.querySelector('#reset');
reportResetBtn.addEventListener('click', () => {
  document.querySelector('.container').textContent = '';
})

// ------------ 이하 함수 -------------
/**
 * 함수 설명
 * @param {string} selector 
 */
function formatCreate(selector) {
  const now = new Date();

  // const nowHours = now.getHours();
  // const nowMinutes = now.getMinutes();
  // const nowSeconds = now.getSeconds();

  // 오후가 되었을 때 13으로 표시되는 것이 아닌 1시로 표시되게 하기 위해 변경이 가능한 let으로 선언
  let nowHours = now.getHours();
  let nowMinutes = now.getMinutes();
  let nowSeconds = now.getSeconds();
  
  let ampm = '';

  if(nowHours < 12) {
    ampm = '오전';
  } else {
    ampm = '오후';
    // 12를 빼 숫자 1로 리셋
    nowHours -= 12;
  };

  nowFormat.textContent = `현재 시각 ${ampm} ${nowHours.toString().padStart(2, '0')}:${nowMinutes.toString().padStart(2, '0')}:${nowSeconds.toString().padStart(2, '0')}`;
};

/**
 * 함수 설명
 * @returns {string}
 */
function formatMilcecond() {
  const now = new Date();

  let nowHours = now.getHours();
  let nowMinutes = now.getMinutes();
  let nowSeconds = now.getSeconds();
  let nowMilliceconds = now.getMilliseconds();
  
  let ampm = '';

  if(nowHours < 12) {
    ampm = '오전';
  } else {
    ampm = '오후';
    // 12를 빼 숫자 1로 리셋
    nowHours -= 12;
  };

  return `${ampm} ${nowHours.toString().padStart(2, '0')}:${nowMinutes.toString().padStart(2, '0')}:${nowSeconds.toString().padStart(2, '0')}.${nowMilliceconds.toString().padStart(3, '0')}`
};