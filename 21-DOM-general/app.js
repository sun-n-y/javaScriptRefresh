//
document.body.style.backgroundColor = 'blue';

const title = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
  title.style.color = 'yellow';
});

console.log(window);
