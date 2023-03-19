// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let meanOfNumbersInArray = (arr) => {
  let tmp = arr.filter(val => typeof val === 'number');
  return tmp.reduce((acc, val) => acc + val, 0) / tmp.length;
};

// Приклад
let testArray = [1, 2, 'asd', [1, 2], 'kla', 5, 7];
console.log(meanOfNumbersInArray(testArray));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let x = +prompt('Input first number', 1);
let znak;

do { znak = prompt('Input math sign (+, -, *, /, %, ^ are available):', '%') } while (
  znak !== '+' &&
  znak !== '-' &&
  znak !== '*' &&
  znak !== '/' &&
  znak !== '%' &&
  znak !== '^'
);

let y = +prompt('Input second number:', 2);

let doMath = (x, znak, y) => {
  switch (znak) {
    case '+':
      return `${x} + ${y} = ${x + y}`;
    case '-':
      return `${x} - ${y} = ${x - y}`;
    case '*':
      return `${x} * ${y} = ${x * y}`;
    case '/':
      return `${x} / ${y} = ${x / y}`;
    case '%':
      return `${x} % ${y} = ${x % y}`;
    case '^':
      return `${x} ^ ${y} = ${x ** y}`;
  };
};

alert(doMath(x, znak, y));

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

let twoDimensionalArray = () => {
  let firstDimensionCount = +prompt('Введіть розмірність першого виміру', 4);
  let userDataArray = [];

  for (let i = 0; i < firstDimensionCount; i++) {
    userDataArray.push([]);
    let secondDimensionCount = +prompt(`Введіть розмірність другого виміру ${i + 1}-го елементу першого виміру`, 4);

    for (let j = 0; j < secondDimensionCount; j++) {
      let userData = prompt(`Введіть данні для ${i + 1}-го елементу першого виміру ${j + 1}-го елементу другого виміру`);
      userDataArray[i].push(userData);
    };
  };
  return userDataArray;
};

let result = twoDimensionalArray();
console.log(result);

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let originString = prompt('Введіть строку:', 'hello world');
let characters = prompt('Введіть символи, які хочете видалити зі строки (через пробіл):', 'l d').trim().split(' ');

let charsGoneFromString = (string, chars) => {
  let tmp = string.split('');

  let result = tmp.filter(item => !chars.includes(item)).join('');;

  return result;
};

alert(charsGoneFromString(originString, characters));