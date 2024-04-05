import { people, random } from './utils/data.js';
import getElement from './utils/getElement.js';
import showPeople from './utils/showPeople.js';

const container = getElement('.container');
const btn = getElement('.btn');

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});

console.log(random);
