var hrsDigit = document.querySelector('.hrs');
var minDigit = document.querySelector('.min');
var secDigit = document.querySelector('.sec');
var merid = document.querySelector('.merid');

function markTime(){
    
    var currentDate = new Date();
    var hrs = currentDate.getHours();
    var min = currentDate.getMinutes();
    var sec = currentDate.getSeconds();

    if (hrs > 12){
        hrs = hrs - 12;
        merid.innerHTML = 'Pm';
    }
    if (sec < 10){
        sec = '0' + sec;
    }
    if(min < 10){
        min = '0' + min;
    }
    
    hrsDigit.innerHTML = hrs;
    minDigit.innerHTML = min;
    secDigit.innerHTML = sec;
}

setInterval(markTime, 1000);