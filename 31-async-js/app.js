//
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  //   displayColor().then((data) => console.log(data));
  const result = await displayColor();
  console.log(result);
});

async function displayColor() {
  try {
    await addColor(1000, heading1, 'purple');
    await addColor(1000, heading2, 'yellow');
    await addColor(1000, heading3, 'cyan');
  } catch (error) {
    console.log(error);
  }
  return 'hello';
}

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`error ${element}`));
    }
  });
}
