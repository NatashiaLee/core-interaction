console.log('Hello World')

fetch('http://api.openweathermap.org/data/2.5/weather?zip=11206&APPID=ab81c5023ce1c29054b45788e4532bae&units=imperial')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render(jsonData);
    });

//RENDER FUNCTION SETUP
var tempSpan = document.querySelector('.temp')
var windSpeedSpan = document.querySelector('.wind-speed')
var windDirSpan = document.querySelector('.wind-dir')
var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')
var weatherVane = document.querySelector('.weather-vane')

function render(data) {
  console.log('render');
  //log the data in its entirety
  console.log(data);

  //log the current temperature
  console.log(data.main.temp);

  //insert the temperature
  tempSpan.innerText = data.main.temp

  //log the wind wind speed
  console.log(data.wind.speed)

//insert the wind speed
  windSpeedSpan.innerText = data.wind.speed

//log and insert the wind direction
  console.log(data.wind.deg)
  windDirSpan.innerText = data.wind.deg

//set bg color based on temp
  document.body.style.backgroundColor = 'hsl(' + data.wind.deg +', 50%,50%)'

  //rotate westher vane based on wind direction
  weatherVaneWrapper.style.transform = 'rotate(' + data.wind.deg + 'deg)'

  weatherVane.style.animationDuration = 5 / data.wind.speed + 's'

}
