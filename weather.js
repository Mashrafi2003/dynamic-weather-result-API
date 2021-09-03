const API_KEY = 'e353b4f4771b1d4854daab8ebd87aa2a';
const searchTemparature = () =>{
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    console.log(url)

    fetch(url)
    .then(res=> res.json())
    .then(data => console.log(data));
}
