setInterval(setClock,1000)
var hourHand=document.querySelector('[data-hour-hand]');
var minuteHand=document.querySelector('[data-minute-hand]');
var secondHand=document.querySelector('[data-second-hand]');
function setClock(){
    var currentDate=new Date();
    var secondRatio=currentDate.getSeconds()/60;
    var minutesRatio=(secondRatio+currentDate.getMinutes())/60;
    var hourRatio= (minutesRatio+currentDate.getHours())/12;
    setRotation(secondHand,secondRatio);
    setRotation(minuteHand,minutesRatio);
    setRotation(hourHand,hourRatio);
}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360);
}