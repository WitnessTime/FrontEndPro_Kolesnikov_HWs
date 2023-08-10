let cast = new XMLHttpRequest();
cast.open("GET", 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19');

cast.addEventListener("readystatechange", (event) => {
  if (cast.readyState === +4) {
    const base = JSON.parse(cast.response);
    const showCast = document.getElementById('weatherCast');
    showCast.innerHTML = "Місто: " + base.name + '</br>' +
      "Температура: " + base.main.temp + "</br>" +
      "Тиск: " + base.main.pressure + "</br>" +
      "Влажність: " + base.main.humidity + "</br>" +
      "Швидкість: " + base.wind.speed + "</br>" +
      "Напрям (у градусах): " + base.wind.deg + "</br>" +
      "Іконка: " + '<img src="https://openweathermap.org/img/wn/' + base.weather[0].icon + '.png">';
  };
});

cast.send();