/**
 * 플래그에 따라 로딩을 온(true일 경우)/오프(false일 경우)
 * @param {boolean} flg 
 */
function loadingToggle(flg) {
  const loading = document.querySelector('.loading');
  if(flg) {
    loading.classList.add('loading-on');
  } else {
    loading.classList.remove('loading-on');
  }
}

document.querySelector('.request-box > button').addEventListener('click', () => {
  loadingToggle(true);
  const url = document.querySelector('#apiUrl').value;
  const cardBox = document.querySelector('.card-box');
  cardBox.textContent = '';

  axios.get(url)
  .then(res => {
    res.data.forEach(item => {
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.style.backgroundImage = `url(${item.download_url})`;

      cardBox.appendChild(newCard);
    });
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    loadingToggle(false);
  })
});