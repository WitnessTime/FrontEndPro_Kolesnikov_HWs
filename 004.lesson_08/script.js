let getYear = +prompt("Введіть рік народження:");
let getCity = prompt('Введість місто проживання:', 'Лондон');
let getSport = prompt('Введіть ваш улюблений вид спорту:', 'Формула-1');

let canceledInputs = [];
if (getYear == null || getCity == null || getSport == null) {
  getYear ? '' : canceledInputs.push('рік народження');
  getCity ? '' : canceledInputs.push('своє місто');
  getSport ? '' : canceledInputs.push('улюблений вид спорту');
  alert(`Шкода, що Ви не захотіли ввести свій(ю) ${canceledInputs.join(', ')}.`);
};

if (canceledInputs.length == 0) {
  let userYear, userCity;
  let userSport = '';

  let todayYear = new Date().getFullYear();

  if (isNaN(getYear)) {
    userYear = `То було не число!`
  } else if (getYear >= 1918 && (todayYear - 5) > getYear) {
    userYear = todayYear - getYear;
  } else {
    userYear = 'Маячня якась, вводи дійсні данні.';
  };

  switch (getCity.toLowerCase()) {
    case 'київ':
      userCity = `Ти живеш у столиці України!`;
      break;
    case 'вашингтон':
      userCity = `Ти живеш у столиці США!`;
      break;
    case 'лондон':
      userCity = `Ти живеш у столиці Великобританії!`;
      break;
    default:
      userCity = `Ти живеш у місті ${getCity}`;
  };

  switch (getSport.toLowerCase()) {
    case 'шахи':
      userSport = "Круто! Хочеш стати як Магнус Карлсен?";
      break;
    case 'формула-1':
      userSport = "Круто! Хочеш стати як Макс Ферстаппен?";
      break;
    case 'бокс':
      userSport = "Круто! Хочеш стати як Олександр Усик?";
      break;
  };
  
  alert(`Твій вік - ${userYear}\n${userCity}\n${userSport}`);
}

