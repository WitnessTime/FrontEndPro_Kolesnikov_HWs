// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let numbers = [];
for (let i = 10; i <= 20; i++) {
  numbers.push(i);
}
alert(`Числа від 10 до 20: ${numbers}.`);

// Вивести квадрати чисел від 10 до 20.
let squareNumbers = [];
for (let i = 10; i <= 20; i++) {
  squareNumbers.push(i**2);
}
alert(`Квадрати чисел від 10 до 20: ${squareNumbers}.`);

// Вивести таблицю множення на 7.
let multiplierSeven = [];
for (let i = 1; i <= 10; i++) {
  multiplierSeven.push(`${i} x 7 = ${i*7}`);
}
alert(`Таблиця множення на 7:\n${multiplierSeven.join('\n')}`);

// Знайти суму всіх цілих чисел від 1 до 15.
let sumNumbers = 0;
for (i = 1; i <= 15; i++) {
  sumNumbers+= i;
};
alert(`Сума всіх цілих чисел від 1 до 15: ${sumNumbers}`);

// Знайти добуток усіх цілих чисел від 15 до 35.
let mulNumbers = 1;
for (let i = 15; i <= 35; i++) {
  mulNumbers = mulNumbers * i;
}
alert(`Добуток усіх цілих чисел від 15 до 35: ${mulNumbers}`);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let meanNumbers = [];
for (let i = 1; i <= 500; i++) {
  meanNumbers.push(i);
}
meanNumbers = meanNumbers.reduce( (acc, val) => acc + val, 0)/meanNumbers.length;
alert(`Середнє арифметичне всіх цілих чисел від 1 до 500: ${meanNumbers}`);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sumEvenNumbers = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sumEvenNumbers += i;
  };
};
alert(`Сума лише парних чисел в діапазоні від 30 до 80: ${sumEvenNumbers}`);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let rangeOfNumbers = [];
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    rangeOfNumbers.push(i);
  };
};
alert(`Всі числа в діапазоні від 100 до 200 кратні 3: ${rangeOfNumbers}`);

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let naturalNumber;
do {
  naturalNumber = parseInt(prompt(`Введіть натуральне число:\n(Якщо дрібне, то візьме цілу частину)`, 16));
} while (naturalNumber <= 0);

let naturalNumberDividers = [];
for (let i = 1; i <= naturalNumber; i++) {
  if (naturalNumber % i === 0) {
    naturalNumberDividers.push(i);
  };
};
alert(`Усі дільники числа ${naturalNumber}:\n${naturalNumberDividers}.`);

// Визначити кількість його парних дільників.
let quantityEvenDividers = 0;
for (let i = 0; i < naturalNumberDividers.length; i++) {
  if (naturalNumberDividers[i] % 2 === 0) {
    quantityEvenDividers++;
  };
};
alert(`Кількість його парних дільників: ${quantityEvenDividers}`);

// Знайти суму його парних дільників.
let sumEvenDividers = [];
for (let i = 0; i < naturalNumberDividers.length; i++) {
  if (naturalNumberDividers[i] % 2 === 0) {
    sumEvenDividers.push(naturalNumberDividers[i]);
  };
};
sumEvenDividers = sumEvenDividers.reduce( (acc, val) => acc + val, 0);
alert(`Сума його парних дільників: ${sumEvenDividers}`);

// Надрукувати повну таблицю множення від 1 до 10.
let multiplicationTable = [];
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    multiplicationTable.push(`${i} x ${j} = ${i * j}`);
  };
};
alert(`Повна таблицю множення від 1 до 10:\n${multiplicationTable.join('\n')}`);