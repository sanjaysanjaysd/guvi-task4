// print odd numbers
// anonymous
let printOddNumbers = function (arr) {
    arr.forEach(function (num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  // IIFE
  (function (arr) {
    arr.forEach(function (num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  // Convert all the strings to title caps in a string array
  // Anonymous function
  let convertToTitleCaps = function (arr) {
    return arr.map(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  };
  
  // IIFE
  let titleCapsArray = (function (arr) {
    return arr.map(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  })(["hello", "world", "javascript"]);
  console.log(titleCapsArray);
  
  // Sum of all numbers in an array
  // Anonymous function
  let sumArray = function (arr) {
    return arr.reduce(function (acc, num) {
      return acc + num;
    }, 0);
  };
  console.log(sumArray([1, 2, 3, 4, 5]));
  
  // // IIFE
  let totalSum = (function (arr) {
    return arr.reduce(function (acc, num) {
      return acc + num;
    }, 0);
  })([1, 2, 3, 4, 5]);
  console.log(totalSum);
  
  // Return all the prime numbers in an array
  // Anonymous function
  let findPrimeNumbers = function (arr) {
    return arr.filter(function (num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    });
  };
  console.log(findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  
  // // IIFE
  let primeNumbers = (function (arr) {
    return arr.filter(function (num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    });
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(primeNumbers);
  
  // Return all the palindromes in an array
  // Anonymous function
  let findPalindromes = function (arr) {
    return arr.filter(function (word) {
      return word === word.split("").reverse().join("");
    });
  };
  console.log(findPalindromes(["level", "noon", "hello", "racecar", "world"]));
  
  // // IIFE
  let palindromes = (function (arr) {
    return arr.filter(function (word) {
      return word === word.split("").reverse().join("");
    });
  })(["level", "noon", "hello", "racecar", "world"]);
  console.log(palindromes);
  
  // Return median of two sorted arrays of the same size
  // Anonymous function
  let medianOfArrays = function (arr1, arr2) {
    let merged = arr1.concat(arr2);
    merged.sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
      return (merged[mid - 1] + merged[mid]) / 2;
    } else {
      return merged[mid];
    }
  };
  console.log(medianOfArrays([1, 3, 5], [2, 4, 6]));
  
  // // IIFE
  let median = (function (arr1, arr2) {
    let merged = arr1.concat(arr2);
    merged.sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
      return (merged[mid - 1] + merged[mid]) / 2;
    } else {
      return merged[mid];
    }
  })([1, 3, 5], [2, 4, 6]);
  console.log(median);
  
  // Remove duplicates from an array
  // Anonymous function
  let removeDuplicates = function (arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
  };
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  
  // // IIFE
  let uniqueArray = (function (arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
  })([1, 2, 2, 3, 4, 4, 5]);
  console.log(uniqueArray);
  
  // Rotate an array by k times
  // Anonymous function
  let rotateArray = function (arr, k) {
    let n = arr.length;
    k = k % n;
    let rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    return rotatedArray;
  };
  console.log(rotateArray([1, 2, 3, 4, 5], 2));
  
  // IIFE
  let rotated = (function (arr, k) {
    let n = arr.length;
    k = k % n;
    let rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    return rotatedArray;
  })([1, 2, 3, 4, 5], 2);
  console.log(rotated);