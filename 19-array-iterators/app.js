const people = [
  { name: 'jim', age: 20, position: 'developer' },
  { name: 'tim', age: 50, position: 'intern' },
  { name: 'kim', age: 30, position: 'boss' },
];

//forEach

people.forEach(function (item) {
  console.log(item.age);
});
