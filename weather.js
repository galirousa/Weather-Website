var sunImg;
var cloudImg;
var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '';
var units='&units=metric';
var input;
function setup(){
  sunImg = loadImage("data/sun.png");
  cloudImg = loadImage("data/clouds.png");
  createCanvas(300,300);
  var button = select('#button');
  button.mousePressed(weatherAsk);
  input = select('#city');
}
function weatherAsk(){
  var url = api+input.value()+apiKey+units;
  loadJSON(url,gotData);
}
function gotData(data){
  weather = data;
}
function draw(){
  clear();
if(weather){
  if(weather.clouds.all>50){
    background(cloudImg);
  } else if(weather.clouds.all<50){
    background(sunImg);
  }
  noStroke();
  fill(0);
  text("Temperature: " +weather.main.temp+"C",10,230);
  text("Cloudyness %: "+weather.clouds.all,10,245);
  text("Humidity %: " + weather.main.humidity+"%",10,260)
  text("Minimun temp: " +weather.main.temp_min+"C",10,275);
  text("Maximum temp: " +weather.main.temp_max+"C",10,290);




  }
}
