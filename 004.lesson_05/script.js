let getAction = prompt('Яку математичну операцію, хочете виконати? (add, sub, mult, div)').toLowerCase().split(' ').join('');

switch (getAction) {
  case 'add':
  case 'sub':
  case 'mult':
  case 'div':
    let firstNumber = +prompt("Введіть перше число:");
    let secondNumber = +prompt("Введіть друге число:");
    switch (getAction) {
      case "add":
        alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
        break;
      case "sub":
        alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
        break;
      case "mult":
        alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
        break;
      case "div":
        alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
        break;
    };
    break;
  default:
    alert('Нажаль, я не знаю такої операції.\nСпробуйте ще раз із доступних: add, sub, mult, div.');
};
