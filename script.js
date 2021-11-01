const submitBtn = $("#submit-btn");
var city = $("#city-search");
var temp = $("#temperature");
var humidity = $("#humid");
var wind = $("#current-wind");
var uv = $("#uv-index");

submitBtn.on("click", function cityInfo() {
  cityInput = city.val();
  console.log(cityInput);

  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=efce59023ac17e5d9f64c63306a72223`;

  fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
