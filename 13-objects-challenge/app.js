const car = {
  make: 'Toyota',
  model: 'Tacoma',
  year: 2006,
  colors: ['silver', 'black'],
  drive() {
    console.log('driving');
  },
  stop: function () {
    console.log('stopping');
  },
};

console.log(car.make);
console.log(car.colors[0]);

car.drive();
car.stop();
