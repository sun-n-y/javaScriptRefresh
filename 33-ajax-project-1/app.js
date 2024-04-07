const url = 'https://icanhazdadjoke.com/sdcsd';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', async () => {
  getJoke();
});

getJoke();

async function getJoke() {
  result.textContent = 'loading...';
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });
    if (response.status == 404) {
      throw Error(`There was an: ${response.status} error`);
    }
    const data = await response.json();
    // console.log(data);
    result.textContent = data.joke;
  } catch (error) {
    console.log(error);
    result.textContent = 'there was an error...';
  }
}
