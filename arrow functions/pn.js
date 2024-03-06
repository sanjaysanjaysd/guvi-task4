let input = [1, 2, 3, 4, 5, 26, 99, 71, 67, 33, 17, 27, 39];

let prime = (input) => {
  let i = 0;
  let arr = [];
  while (i < input.length) {
    let flag = 0;
    for (let j = 2; j <= input[i] / 2; j++) {
      if (input[i] % j === 0) {
        flag++;
        break;
      }
    }
    if (flag === 0) {
      arr.push(input[i]);
    }
    i++;
  }
  return arr.join();
};

console.log(prime(input));