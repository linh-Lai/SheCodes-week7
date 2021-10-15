function displayTemperature(response) {
   //console.log(response.data.main.humidity)
    let location = document.querySelector("#city")
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    location.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity + "%";
    windElement.innerHTML = Math.round(response.data.wind.speed) + "km/h";
   
}

let apiKey = "d6ff37a4c170f249f41b8f3e7f2c9d0a";
let apiUrl = `https:/api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature)