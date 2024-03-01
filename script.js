var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector("#cityoutput")
var description = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "abd2139615f01706754fbf5118a5bf0f"

function convertion(val) {
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data["name"];
            var descrip = data["weather"][0]["description"];
            var temperature = data["main"]["temp"];
            var wndspeed = data["wind"]["speed"];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature :-  <span>${convertion(temperature)} <sup>o</sup>C</span>`;
            description.innerHTML = `Sky Condition :- <span>${descrip}</span>`;
            wind.innerHTML = `Wind Speed :- <span>${wndspeed} KMPH</span>`;
        })
        .catch(err => alert('You Entered Wrong City Name'));
});
