let input = [26, 99, 33, 17, "Nun", "num", "rotator", "noon"];
let palindrome = (input) => {
  let i = 0;
  let ans = "";
  while (i < input.length) {
    let temp = "";
    temp = temp + input[i];
    let flag = 0;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] == temp[temp.length - 1 - j]) {
        flag++;
      } else {
        break;
      }
    }
    if (flag === temp.length) {
      ans = ans + input[i] + " ";
    }
    i++;
  }
  if (ans.length > 0) {
    return ans.trimEnd();
  } else {
    return "No Palindrome found";
  }
};
console.log(palindrome(input));