var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

var app = new Vue({
   el: '#weather_info',
   data: {
    weather_info:{},
    temp:{},
    pressure:{},
    humidity:{}
   },
   created(){
       axios.get('http://api.openweathermap.org/data/2.5/weather?q=Almaty&APPID=5126023b5bb19431792977530e800c60')
       .then(response=>{
        console.log(response.data);
        this.weather_info = response.data;
        console.log(this.weather_info.main.pressure);
        this.temp = (325 - parseInt(this.weather_info.main.temp));
        this.pressure = parseInt(this.weather_info.main.pressure );
        this.humidity = parseInt(this.weather_info.main.humidity);
      })
       .catch(e=>{
           console.log(e);
       })
   } 
})

var money = new Vue({
   el: '#money',
   data: {
    kzt:{}
   },
   created(){
       axios.get('https://openexchangerates.org/api/latest.json?app_id=13af58651fbb429f854a031f6f8e3bce')
       .then(response=>{
        console.log(response.data.rates.KZT);
        this.kzt = parseInt(response.data.rates.KZT);
      })
       .catch(e=>{
           console.log(e);
       })
   } 
})










