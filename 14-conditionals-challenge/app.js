const person1 = {
  name: 'tim',
  age: 24,
  status: 'resident',
};

const person2 = {
  name: 'jim',
  age: 18,
  status: 'tourist',
};

if (person1.age >= 18 && person1.status == 'resident') {
  console.log(true);
} else {
  console.log(false);
}

if (person2.age >= 18 && person2.status == 'resident') {
  console.log('true');
} else {
  console.log(false);
}
