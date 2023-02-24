let getYear = prompt("Введіть рік народження:");
let getCity = prompt('Введість місто проживання:');
let getSport = prompt('Введіть ваш улюблений вид спорту:');

let userYear, userCity;
let userSport = '';

let todayYear = new Date().getFullYear();

if (isNaN(+getYear)) {
  userYear = `То було не число!`
} else if (+getYear >= 1918 && (todayYear - 5) > +getYear) {
  userYear = todayYear - +getYear;
} else {
  userYear = 'Маячня якась, вводи дійсні данні.';
};

switch (getCity) {
  case 'Київ':
    userCity = `Ти живеш у столиці України - ${getCity}`;
    break;
  case 'Вашингтон':
    userCity = `Ти живеш у столиці США - ${getCity}`;
    break;
  case 'Лондон':
    userCity = `Ти живеш у столиці Великобританії - ${getCity}`;
    break;
  default:
    userCity = `Ти живеш у місті ${getCity}`;
};

switch (getSport) {
  case 'Шахи':
    userSport = "Круто! Хочеш стати як Магнус Карлсен?";
    break;
  case 'Формула-1':
    userSport = "Круто! Хочеш стати як Макс Ферстаппен?";
    break;
  case 'Бокс':
    userSport = "Круто! Хочеш стати як Олександр Усик?";
    break;
};

let canceledInputs = [];
if (getYear == null || getCity == null || getSport == null) {
  getYear ? '' : canceledInputs.push('рік народження');
  getCity ? '' : canceledInputs.push('своє місто');
  getSport ? '' : canceledInputs.push('улюблений вид спорту');
  alert(`Шкода, що Ви не захотіли ввести свій(ю) ${canceledInputs.join(', ')}.`);
};

if (canceledInputs.length == 0) {
  alert (`Твій вік - ${userYear}\n${userCity}\n${userSport}`);
}

