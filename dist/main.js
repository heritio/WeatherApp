(()=>{let t=document.querySelector(".nameinputfield"),e=document.querySelector(".weatherbtn"),n=document.querySelector(".cityname"),o=document.querySelector(".weather"),r=document.querySelector(".temptitle"),c=document.querySelector(".temp"),a=document.querySelector(".error"),i=document.querySelector(".resultdisp"),u=document.querySelector(".tooglebtn");u.addEventListener("click",(function(t){let e=c,n=r;"Fahrenheit:"==r.textContent&&""!=e.textContent?(e.textContent=Math.round(5*(Number(e.textContent)-32)/9),n.textContent="Celsius:",u.textContent="Fahrenheit"):"Celsius:"==r.textContent&&""!=e.textContent&&(e.textContent=Math.round(9*Number(e.textContent)/5+32),n.textContent="Fahrenheit:",u.textContent="Celsius")})),e.addEventListener("click",(function(e){e=t.value,fetch("http://api.openweathermap.org/data/2.5/weather?q="+e+"&appid=c0312c2332102d7ad1142b4883c4c225",{mode:"cors"}).then((function(t){return t})).then((function(t){return t.json()})).then((function(t){console.log(t),n.textContent=t.name,o.textContent=t.weather[0].main,c.textContent=t.main.temp,async function(t){const e=await fetch("https://api.giphy.com/v1/gifs/translate?api_key=qy7p8Oam4tNK3SLGgnZlsVLCbeRpfQy7&s="+t,{mode:"cors"}),n=await e.json();i.src=n.data.images.original.url}(t.weather[0].main)})).catch((function(t){console.error(t),a.textContent="Something went wrong, try again with a valid city name",setTimeout((()=>{a.textContent=""}),5e3)}))}))})();