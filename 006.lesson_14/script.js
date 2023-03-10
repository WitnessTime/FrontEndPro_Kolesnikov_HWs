// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let numbers = [];
for (let i = 20; i <=30; i+=0.5) {
  numbers.push(i);
};
alert(`Числа від 20 до 30 через пропуск, використовуючи крок 0,5:\n${numbers.join(' ')}`);

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let hryvnyaToDollar = [];
const dollarPrice = 27;
for (let i = 10; i <= 100; i+=10) {
  hryvnyaToDollar.push(`${i} $ = ${i*dollarPrice} UAH`);
};
alert(`Дані з розрахунком вартості 10, 20, 30...100 доларів:\n${hryvnyaToDollar.join('\n')}`);

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const numberN = parseInt(prompt(`Виведу всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.\n\nВведіть ціле число:\n(Якщо введене дрібне, то візьме цілу частину)`, 50));
let squareLessThanN = [];

for (let i = 1; i**2 <= numberN; i++) {
  if (i === 101) {break};
  squareLessThanN.push(i);
};
alert(`Квадрат наступних чисел (від 1 до 100) не перевищує число ${numberN}:\n${squareLessThanN}`);

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1,
// які не мають інших дільників крім 1 і себе).
let isSimpleNumber = parseInt(prompt(`Чи є число простим?\n\nВведіть ціле число:\n(Якщо введене дрібне, то візьме цілу частину)`, 50));
let divider = 2;
let isSimpleAnswer = 'Це просте число.';

if (isNaN(isSimpleNumber) === true) {
  isSimpleAnswer =`Операцію скасовано.`;
} else if (isSimpleNumber <= 1) {
  isSimpleAnswer =`Це не просте число.`;
} else {
  for (; isSimpleNumber !== divider; divider++) {
    if (isSimpleNumber % divider === 0) {
      console.log(`in`)
      isSimpleAnswer =`Це не просте число.`;
      break;
    };
  };
};
alert(`${isSimpleNumber} - ${isSimpleAnswer}`);  

// Дане деяке число. Визначити, чи можна одержати це число шляхом піднесення числа 3 до деякого степеня.
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
let numberToExplore = BigInt(prompt(`Чи є число степіню трійки?\n\nВведіть ціле число:`, 50));
const theBase = 3n;
let isNumberPowerOfThree = `Число ${numberToExplore} не може бути отримано шляхом піднесення трійки до будь-якого степеня.`;;

for (let power = 0n; theBase**power <= numberToExplore; power++) {
  if (numberToExplore  === theBase**power) {
    isNumberPowerOfThree = `Число ${numberToExplore} може бути отримано, якщо піднести трійку до ${power} степені.`;
    break;
  };
};
alert(isNumberPowerOfThree);