let ourInputField = document.querySelector(".nameinputfield");
let ourBtn = document.querySelector(".weatherbtn");
let ourcityName = document.querySelector(".cityname");
let ourWeather = document.querySelector(".weather");
let ourTempTitle = document.querySelector(".temptitle");
let ourTemp = document.querySelector(".temp");
let ourError = document.querySelector(".error");
let ourResultDisplay = document.querySelector(".resultdisp");
let ourToogleBtn = document.querySelector(".tooglebtn");

function weatherDisplay(city) {
   city = ourInputField.value;
   
   fetch("http://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=c0312c2332102d7ad1142b4883c4c225", {
      mode: 'cors' })
   .then(function(Response) {
     return Response;
   })
   .then(function(res){
     return res.json();
   })
   .then(function(info){
     console.log(info);
     ourcityName.textContent = info.name;
     ourWeather.textContent = info.weather[0].main;
     ourTemp.textContent = info.main.temp;
     
     fetchGifFn(info.weather[0].main);
   })
   .catch(function (err) {
    console.error(err)
    ourError.textContent = "Something went wrong, try again with a valid city name";
    setTimeout(()=>{
     ourError.textContent = "";
    }, 5000)
   });
}

async function fetchGifFn(weather){

  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=qy7p8Oam4tNK3SLGgnZlsVLCbeRpfQy7&s=' + weather,{ mode: "cors"});
  const ourData = await response.json();
      
  ourResultDisplay.src = ourData.data.images.original.url;
      
}

function toogleTemp(e){
   let tempDisp = ourTemp;
   let tittleDisp = ourTempTitle;

   if(ourTempTitle.textContent == "Fahrenheit:" && tempDisp.textContent != ""){
     tempDisp.textContent = Math.round((Number(tempDisp.textContent) - 32) * 5.0/9.0);
     tittleDisp.textContent = "Celsius:"
     ourToogleBtn.textContent = "Fahrenheit";
   }else if(ourTempTitle.textContent == "Celsius:" && tempDisp.textContent != ""){
    tempDisp.textContent = Math.round((Number(tempDisp.textContent) * 9.0/5.0) + 32);
    tittleDisp.textContent = "Fahrenheit:"
    ourToogleBtn.textContent = "Celsius";
   }
}

ourToogleBtn.addEventListener("click", toogleTemp);
ourBtn.addEventListener("click", weatherDisplay)



