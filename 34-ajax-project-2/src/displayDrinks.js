import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const section = get('.section-center');
const title = get('.title');
const loading = get('.loading');

const displayDrinks = ({ drinks }) => {
  hideLoading();
  if (!drinks) {
    title.textContent = 'no drinks found';
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<a href="drink.html">
        <article class="cocktail" data-id=${id}>
          <img src="${image}" alt="cocktail">
          <h3>${name}</h3>
        </article>
      </a>`;
    })
    .join('');
  title.textContent = '';
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
