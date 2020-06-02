function background() {
var earth = document.getElementById('untoggled');
    if (earth.style.display === 'none') {
          earth.style.display = 'block'
    }
    else {
          earth.style.display = 'none';
     }
}

function date(){
  var currentDate = new Date();
    var month = currentDate.getMonth() +1;
      var day = currentDate.getDate();
        var year = currentDate. getFullYear();
          document.getElementById('currentdate').innerHTML = day + '.' + month + '.' + year;
}

date();

setInterval(clock, 1000);

var secondHand = document.querySelector('[second-hand]')
  var minuteHand = document.querySelector('[minute-hand]')
    var hourHand = document.querySelector('[hour-hand]')

function clock(){
  var time = new Date()
    var second = time.getSeconds() / 60
      var minute = (second + time.getMinutes()) / 60
        var hour = (minute + time.getHours()) / 12
          setRotation(secondHand, second)
            setRotation(minuteHand, minute)
              setRotation(hourHand, hour)
}

function  setRotation(hands, rotationRatio) {
  hands.style.setProperty('--rotation', rotationRatio *360)
    if(rotationRatio ===  0){
      hands.style.background = "red";
  }
  else{
      hands.style.background = "black";
  }
}

clock();
