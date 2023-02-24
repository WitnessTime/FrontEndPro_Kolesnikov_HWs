let getFirstNumber = +prompt("Введіть перше число:");
let getSecondNumber = +prompt("Введіть друге число:");
let getThirdNumber = +prompt("Введіть третє число:");

if (isNaN(getFirstNumber) || isNaN(getSecondNumber) || isNaN(getThirdNumber)) {
  alert('Одне з введених значень не є числом!');
} else {
  alert(`Середнє арифметичне цих чисел: ${(getFirstNumber + getSecondNumber + getThirdNumber) / 3}.`);
};