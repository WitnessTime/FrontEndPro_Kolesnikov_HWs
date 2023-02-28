let getArrayLength = +prompt('Введіть довжину масиву (число):', 6);
let getArrayElements = prompt('Введіть елементи масиву через пробіл:', '9 5 10 7 2 55');

let userArray = getArrayElements.split(' ', getArrayLength);
alert(`Твій масив:\n${userArray}`);

userArray.sort( (a, b) => a - b );
alert(`Відсортований масив за зростанням:\n${userArray}`);

userArray.splice(1, 3);
alert(`Масив з видаленими елементами з 2 по 4 (включно):\n${userArray}`);