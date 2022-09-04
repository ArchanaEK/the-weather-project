

console.log("hi")


const citySearch= async ()=>{
    let cityName = document.getElementsByTagName('form')[0].childNodes[3].value;
    console.log(cityName);
    const data= await getWeatherData(cityName);  
    const div=document.createElement('div')
    div.className="outerDiv"
    document.body.appendChild(div);


     

    div.appendChild(document.createElement('h1')).innerText="Location   :"+data.location
    div.appendChild(document.createElement('h1')).innerText="Description  :"+data.description
    div.appendChild(document.createElement('h1')).innerText="temperature  :"+data.temp
    div.appendChild(document.createElement('h1')).innerText="feelsLike  :"+data.feelsLike
    div.appendChild(document.createElement('h1')).innerText="Wind  :"+data.wind
    div.appendChild(document.createElement('h1')).innerText= "Humidity  :"+data.humidity


    console.log(div)
    console.log(data);
}
const getWeatherData = async (userInput) => {
    console.log("hi")
    const cityArray = userInput.split(',');
    const city = cityArray[0];
    const url = 
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=7c19479f21a089bc2821f199dacb7a19&units=metric';
    const response = await fetch(url);
    const data = await response.json();
    const weather = {
        location: data.name,
      description: data.weather[0].main,
      temp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      wind: Math.round(data.wind.speed),
      humidity: data.main.humidity,
    };
    console.log(weather);
    return  weather;
  }
  ;
  
  