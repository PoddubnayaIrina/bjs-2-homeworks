function compareArrays(arr1, arr2) {
  return arr1.every((element, index) => element === arr2[index]) && arr1.length === arr2.length;
}

function getUsersNamesInAgeRange(users, gender) {
  return users
  .filter(user => user.gender === gender)
  .map(person => person.age)
  .reduce((acc, userAge, index, array) => {
    acc += userAge;
    if (index === array.length - 1) {
    return acc / array.length;
      } 
    return acc;
  }, 0);
}