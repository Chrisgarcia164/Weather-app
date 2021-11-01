const submitBtn = $("#submit-btn");
var city = $("#city-search");
var temp = $("#temperature");
var humidity = $("#humid");
var wind = $("#current-wind");
var fiveDayForecast = $("#5-day")

submitBtn.on("click", function cityInfo() {
  cityInput = city.val();
  console.log(cityInput);

  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=efce59023ac17e5d9f64c63306a72223`;

  fetch(requestUrl)
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var temperature = data.main.temp;
      var windSpeed = data.wind.speed;
      var humid = data.main.humidity;
      temp.text(temperature + "°F");
      humidity.text(humid + " %");
      wind.text(windSpeed + " MPH");
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      console.log(lon);
      console.log(lat);
      fiveDay();
      function fiveDay() {
        var fiveDayUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=f58e0adad5d2bd441a1a32ca9f7c08a4`;
        fetch(fiveDayUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            console.log(data.daily);
            for (let i = 1; i < 6; i++) {
              var tempDay = data.daily[i].temp.day + "°F";
              var windDay = data.daily[i].wind_speed + " MPH";
              var humidDay = data.daily[i].humidity + " %";
              console.log(tempDay);
              console.log(windDay);
              console.log(humidDay);
              var dayInfo = document.createElement("h4");
              dayInfo.innerText ='Temp: ' + tempDay + 'Wind: ' + windDay + 'Humid:' + humidDay
              fiveDayForecast.append(dayInfo)
            }
          });
      }
    });
});
