let button = document.getElementById("btn");
let input = document.getElementById("input");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let detail = document.getElementById("detail");

let getWeather = async () => {};

let url = "https://api.openweathermap.org/data/2.5";
let keys = "bab24425cecfc87513d0fbbb6880dbbd";

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=bab24425cecfc87513d0fbbb6880dbbd&units=metric"
  )
    .then((response) => response.json())
    .then((data) => {
      let cityValue = data["name"];
      let tempValue = data["main"]["temp"];
      let detailValue = data["weather"][0]["description"];

      city.innerHTML = cityValue;
      temp.innerHTML = tempValue + " °C";
      detail.innerHTML = detailValue;
    });
});
