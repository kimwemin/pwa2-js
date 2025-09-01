// 쌤 노션 HTTP Method 참조
// Get, Post, Put, Delete는 알고 있기
const url = 'https://picsum.photos/v2/list?page=1&limit=10';

axios.get(url)
.then(response => {
  response.data.forEach((item, idx) => {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', item.download_url);
    newImg.setAttribute('width', '300px');

    const container = document.querySelector('.container');
    container.appendChild(newImg);
  });
})
.catch(err => {
  console.log(err);
});