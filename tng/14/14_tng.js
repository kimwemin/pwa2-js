function eventAction() {
  const listContent = document.querySelector('#ToDoList');
  const listContentValue = listContent.value;

  if(listContent.value !== '') {
    const newlist = document.createElement('p')
    newlist.textContent = listContentValue;
    
    const formparent = document.querySelector('form');
    formparent.appendChild(newlist);
    
    listContent.value = '';
    
    newlist.classList.add('listStyle');


    newlist.addEventListener('click', () => {
      newlist.classList.toggle('cancellationLine');
    });
  };
};

const listCreateBtn = document.querySelector('#listCreateBtn');
listCreateBtn.addEventListener('click', eventAction);

const listContentEnter = document.querySelector('#ToDoList');
listContentEnter.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    eventAction();
  };
});