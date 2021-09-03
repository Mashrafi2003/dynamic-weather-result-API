const API_KEY = 'e353b4f4771b1d4854daab8ebd87aa2a';
const searchTemparature = () =>{
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    console.log(url)

    fetch(url)
    .then(res=> res.json())
    .then(data => displayTemp(data));
}

const setInnerText =(id,text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemp = temp => {
    setInnerText('city' , temp.name);
    setInnerText('temparature', temp.main.temp);
    setInnerText('condition', temp.weather[0].main);
    // Set Weather ICON

    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url)
}
