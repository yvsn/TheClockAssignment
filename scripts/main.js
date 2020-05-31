setInterval(clock, 1000);

var secondHand= document.querySelector('[second-hand]')
var minuteHand= document.querySelector('[minute-hand]')
var hourHand= document.querySelector('[hour-hand]')

function clock(){
var date = new Date()
var second = date.getSeconds() / 60
var minute = (second + date.getMinutes()) / 60
var hour = (minute + date.getHours()) / 12
setRotation(secondHand, second)
setRotation(minuteHand, minute)
setRotation(hourHand, hour)
}

function  setRotation(hands, rotationRatio) {
  hands.style.setProperty('--rotation', rotationRatio *360)
}

clock();
