const shuffle = () => {
  const arr = ['moon', 'serenity', 'tuxedo', 'uranus', 'venus'];
  const newArr = [];

  while (arr.length > 0) {
    const random = Math.floor(Math.random() * arr.length);
    const newString = arr.splice(random, 1)[0];

    newArr.push(newString);
  }

  return newArr;
};

console.log(shuffle());
