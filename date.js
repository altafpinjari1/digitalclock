var time=document.getElementById('timing');

// var d= Date();
// console.log(d);



// var date=new Date();
// var month=date.getMonth();
// var year=date.getFullYear();
// var day=date.getDate();
// console.log(date);
// console.log(month);
// console.log(day);



function timer(){
    var date=new Date();
var month=date.getMonth();
var year=date.getFullYear();

var day=date.getDate();
var hr=date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();
var session="AM";

if(hr > 12){
    session="PM";
    hr=hr-12;
}
if(hr < 10){
    hr="0"+hr;
}
if(min < 10){
    min="0"+min;
}
if(sec < 10){
    sec="0"+sec;
}

result=`${hr}:${min}:${sec}:${session}`;
time.innerHTML=result;
setTimeout(timer,1000);
console.log(timer);

}
timer();



// function timer(){
//     var date=new Date();
// var hr=date.getHours();
// var min=date.getMinutes();
// var sec= date.getSeconds();

// result=`${hr}:${min}:${sec}`;

// time.innerHTML=result;
// setTimeout(timer,1000);
// }
// timer();