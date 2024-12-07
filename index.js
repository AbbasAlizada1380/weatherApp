const apiKey='fa87e49c71137ffbac60bbd2327bc162';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?';

const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
var weatherIcon=document.querySelector('.weather_icon');


async function checkWeather(city){
    const response =await fetch(apiUrl+`&q=${city}`+`&appid=${apiKey}`);
    var data= await response.json();
    console.log(data)
    if(response.status==404){
        document.querySelector(".error").style.display='block';
        document.querySelector(".weather").style.display='none';
    }else{
        
       
    
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=((Math.round(data.main.temp))-273) +'°C';
        document.querySelector('.Humidity').innerHTML=data.main.humidity +'%';
        document.querySelector('.wind').innerHTML=data.wind.speed +' km/h';
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src='images/clouds.png'
        }else if(data.weather[0].main=="Rain"){
            weatherIcon.src='images/rain.png'
        }else if(data.weather[0].main=="Clear"){
            weatherIcon.src='images/clear.png'
        }else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src='images/drizzle.png'
        }else if(data.weather[0].main=="Mist"){
            weatherIcon.src='images/mist.png'
        }
        document.querySelector('.weather').style.display='block';
        document.querySelector(".error").style.display='none';
    }
   
}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value); 
    
})
