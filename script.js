
const input=document.querySelector('.input')
const buton=document.querySelector('.buton')
buton.addEventListener('click',search)
function search() {
    let city=input.value
    console.log(city);
    second(city)
}
function second(city) {
    let gorod=(city)?city:'London'
const weatherUrl=`https://api.openweathermap.org/data/2.5/weather?q=${gorod}&appid=8da421ef4c4bb62ece382a5b22ab60c6`
let weatherData=new XMLHttpRequest()
weatherData.open('GET',weatherUrl)
weatherData.responseType='json'
weatherData.onload=function(){
console.log(weatherData.response);
    const allweather=document.querySelector('.allweather')
    const weather=weatherData.response
    let temp=Math.floor(weather.main.temp-273.15)
    let tempmax=Math.floor(weather.main.temp_max-273.15)
    let tempmin=Math.floor(weather.main.temp_min-273.15)
    let sunrise=new Date(weather.sys.sunrise*1000 )
    let sunset=new Date(weather.sys.sunset*1000 )
    console.log(new Date(weather.sys.sunset*1000 ));
    let windeg=(weather.wind.deg>=0&&weather.wind.deg<90)?"NE": 
    (weather.wind.deg>=90&&weather.wind.deg<180)?"SE":
    (weather.wind.deg>=180&&weather.wind.deg<270)?"SW":
    (weather.wind.deg>=270&&weather.wind.deg<360)?"NW":
    (weather.wind.deg=0)?"N":
    (weather.wind.deg=90)?"E":
    (weather.wind.deg=180)?"S":
    (weather.wind.deg=270)?"W":
    (weather.wind.deg=360)?"N":
    console.log(windeg);
     allweather.innerHTML=`
<div class="allweather">       
<div class="tiras">
<p>${weather.name}</p>
</div>
<div class="icons">
<img src="./gallery/${weather.weather[0].icon}.png" alt="${weather.weather[0].main}">
</div>
<div class="opis">
<p>${weather.weather[0].description}</p>
</div>
<div class="temp">
<p>${temp}°</p>
</div>
<div class="tempmax">
<p>${tempmax}°/${tempmin}°</p>
</div>
<div class="trio">
<div class="visib">
<p>Visibility: ${weather.visibility}</p>
<p>Humidity: ${weather.main.humidity}</p>
</div>
<div class="pres">
<p>Pressure: ${weather.main.pressure}</p>
<p>Wind speed: ${weather.wind.speed}</p>
<p>Direction: ${windeg}</p>
</div>
<div class="sun">
<p>Sunrise: ${sunrise}</p>
<p>Sunset: ${sunset}</p>
</div>
</div>
</div>
`
}
weatherData.send()
}
second()

