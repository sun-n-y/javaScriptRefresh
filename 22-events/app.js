//click event

const btn = document.querySelector('.btn');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function (e) {
  console.log('you clicked button');
  console.log(e.currentTarget);
});

h1.addEventListener('click', function (e) {
  console.log(e.currentTarget);
});
