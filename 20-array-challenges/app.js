//map
const updatedStudents = students.map(function (student) {
  student.role = 'student';
  return student;
});

console.log(updatedStudents);

//filter
const highScores = students.filter(function (student) {
  return student.score >= 80;
});

console.log(highScores);

//find
const specificId = students.find(function (student) {
  return student.id === 1;
});

console.log(specificId);

//reduce
const averageScore =
  students.reduce(function (acc, curr) {
    acc += curr.score;
    return acc;
  }, 0) / students.length;

console.log(averageScore);
