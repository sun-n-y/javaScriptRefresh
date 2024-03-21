function fullName({ lastName, firstName }) {
  const joinText = `${firstName} ${lastName}`.toUpperCase();
  return joinText;
}

console.log(fullName({ firstName: 'sunny', lastName: 'bunny' }));
