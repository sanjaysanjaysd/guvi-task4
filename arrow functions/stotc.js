let arr = ["welcome", "to", "guvi"];
let titleCap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr;
};
console.log(titleCap(arr));