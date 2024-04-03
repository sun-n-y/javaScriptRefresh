//

const friends = Array.of('s', 's', 's');

console.log(friends);

const udemy = 'udemy';

console.log(Array.from(udemy));

const result = document.querySelector('#result');
const second = document.querySelector('#second');
const p = document.querySelectorAll('p');

let newText = Array.from(p)
  .map((item) => `<span>${item.textContent}</span>`)
  .join(' ');

result.innerHTML = newText;

second.innerHTML = [...p]
  .map((item) => `<span>${item.textContent}</span>`)
  .join(' ');
