//
const friends = ['john', 'sunny', 'sarah'];

localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));

console.log(values);
