const names = ['anna', 'jim', 'tim'];
const lastNames = ['one', 'two', 'three'];

let newArray = [];

for (let i = 0; i < names.length; i++) {
  newArray.push(`${names[i]} ${lastNames[i]}`);
}

console.log(newArray);
