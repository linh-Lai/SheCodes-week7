function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes =`0${minutes}`;
    }
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}` ;
}



function displayTemperature(response) {
   //console.log(response.data.main.humidity)
    let location = document.querySelector("#city")
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    location.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity + "%";
    windElement.innerHTML = Math.round(response.data.wind.speed) + "km/h";
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
   
}

let apiKey = "d6ff37a4c170f249f41b8f3e7f2c9d0a";
let apiUrl = `https:/api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature)