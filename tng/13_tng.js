const janggi = document.createElement('li');
janggi.textContent = '장기';

const liParent = document.querySelector('#ul');
const appleGame = document.querySelector('#apple');
liParent.insertBefore(janggi, appleGame);

const liListLastChild = document.querySelector('ul li:last-child')
liListLastChild.style.background = 'beige';

// const noneList = document.querySelectorAll('.none-li');
// const noneListLastChild = noneList[noneList.length - 1];
// noneListLastChild.style.background = 'beige';

const liList = document.querySelectorAll('li');
liList.forEach((liList, index) => {
  if(index % 2 === 0) {
    liList.style.color = 'red';
  } else {
    liList.style.color = 'blue';
  }
});

// 새로 요소가 추가된다면 위의 색을 지정하는 것은 적용되지 않는다.
// 따라서 쉽게 적용하기 위해선 함수를 이용해 함수화 한 뒤 이후 내가 필요할 때 함수만 선언해주면 된다.
// 보통 함수는 제일 아래 작성하거나 따로 파일을 관리한다. 
// function changeLiColor() {
//   (liList, index) => {
//   if(index % 2 === 0) {
//     liList.style.color = 'red';
//   } else {
//     liList.style.color = 'blue';
//   }
// };
// }
// const newLi = document.createElement('li');
// newLi.textContent = '새게임';
// liParent.insertBefore(newLi, appleGame);
// changeLiColor();

const newCard = document.createElement('div');
newCard.classList.add('card');

const newCardImg = document.createElement('div');
newCardImg.classList.add('card-img');

const newCardTitle = document.createElement('div');
newCardTitle.textContent = '카드 타이틀';

const newCardContent = document.createElement('p');
newCardContent.textContent = '내용내용내용내용내용내용';

newCard.appendChild(newCardImg);
newCard.appendChild(newCardTitle);
newCard.appendChild(newCardContent);

document.body.appendChild(newCard);

const result = {
  title: '타이틀',
  content: '내용내용',
  img: 'https://www.admin.com/img/posts/laksfjakls.png',
};
addCard(result);
function addCard(item) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newCardImg = document.createElement('div');
  newCardImg.classList.add('card-img');

  const newCardTitle = document.createElement('div');
  newCardTitle.textContent = item.title;

  const newCardContent = document.createElement('p');
  newCardContent.textContent = item.content;

  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardTitle);
  newCard.appendChild(newCardContent);

  document.body.appendChild(newCard);
}