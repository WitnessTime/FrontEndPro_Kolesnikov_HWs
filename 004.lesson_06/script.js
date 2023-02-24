let getHours = +prompt("Введіть кількість годин, які Ви хочете перевести у секунди:");
let seconds = getHours * 3600;

if (isNaN(getHours)) {
  alert('Ви ввели не число.')
} else {
  alert(`У ${getHours} годині(-ах) ${seconds} секунд.`);
}
