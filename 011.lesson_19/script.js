// Function itself.
let supSum = () => {
  let x = 0;

  return function (y) {
    return x = x + y;
  };
};

let sum = supSum();

// Examples
console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); // 28 