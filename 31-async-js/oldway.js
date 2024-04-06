//
// const heading1 = document.querySelector('.one');
// const heading2 = document.querySelector('.two');
// const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');
const url = 'https://source.unsplash.com/random';

btn.addEventListener('click', () => {
  //   console.log(loadImage(url));
  loadImage(url)
    .then((data) => container.appendChild(data))
    .catch((err) => console.log(err));
});

// const promise = new Promise((resolve, reject) => {
//   let value = false;
//   if (value) {
//     resolve('value is true');
//   } else {
//     reject(`there was a error value is false`);
//   }
// });

// promise.then((data) => console.log(data)).catch((err) => console.log(err));

function loadImage(url) {
  const promise = new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error(`Failed to load image from source:${url}`));
    });
    img.src = url;
    console.log(img);
  });
  return promise;
}
