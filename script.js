
const newyear = "1 January 2023";

const daysdiv = document.getElementById("days");
const hoursdiv = document.getElementById("hours");
const minutesdiv = document.getElementById("minutes");
const secondsdiv = document.getElementById("seconds");

function countDown(){
    const firstday = new Date(newyear);
    const currentday = new Date();

    const totaltime = (firstday - currentday)/1000;

    const days = Math.floor(totaltime / 3600 /24);
    const hours = Math.floor((totaltime / 3600) % 24);
    const minutes = Math.floor((totaltime / 60) % 60);
    const seconds = Math.floor((totaltime) % 60);

    //console.log(days, hours, minutes,seconds);
    daysdiv.innerHTML = days;
    hoursdiv.innerHTML = hours;
    minutesdiv.innerHTML = minutes;
    secondsdiv.innerHTML = seconds;
}
countDown();
setInterval(countDown, 1000);