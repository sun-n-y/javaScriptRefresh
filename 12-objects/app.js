//

const person = {
  name: 'john',
  lastName: 'peters',
  age: 40,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'peter'],
  greeting: function (name) {
    console.log('Hi ' + name);
  },
};

console.log(person);
console.log(person.lastName);
person.name = 'joe';

console.log(person.siblings[2]);

person.greeting('tim');

console.log(person);
