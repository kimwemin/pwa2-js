const APIAdress = document.querySelector('#APIAdress');
let APIAdressValue = APIAdress.value;

APIAdress.addEventListener('keypress', (e) => {
  const container = document.querySelector('.container');
  if(e.key === 'Enter') {
    container.innerHTML = '';

    eventAction();
  }
});

const APIBtn = document.querySelector('#APIBtn');
APIBtn.addEventListener('click', () => {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  eventAction();
});

function eventAction() {
  // 매번 새로운 엘리멘트를 만드는 것은 리소스를 많이 잡아먹는다.
  // 따라서 html에 만들어뒀다가 display: none; 을 넣었다가 빼는 것이 더 낫다.
  const loading = document.createElement('p')
  loading.textContent = 'Loading';

  const container = document.querySelector('.container');
  container.appendChild(loading);
  container.classList.add('loadingBackground');
  axios.get(APIAdress.value)
  .then(response => {
    container.removeChild(loading);
    container.classList.remove('loadingBackground');
    response.data.forEach((item) => {
      const newImg = document.createElement('img');
      newImg.setAttribute('src', item.download_url);
  
      const container = document.querySelector('.container');
      container.appendChild(newImg);
    });
  })
  .catch(err => {

  });
};