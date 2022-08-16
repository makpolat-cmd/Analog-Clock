
//To get name form user
let name1 = prompt("İsminizi girin");
let myName = document.querySelector("#myName"); 
//To add name of user to html page
myName.innerHTML = `${name1}`;

//--------------- Let us try to make analog clock-------------


const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");

function getTime(){//getting current time

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    //time interval for minutes and seconds
    const timeInterval = 6;

    secondsHand.style.transform = "rotate("+(seconds * timeInterval)+"deg)";
    minutesHand.style.transform = "rotate("+(minutes * timeInterval + seconds / 10)+"deg)";
    hoursHand.style.transform = "rotate("+(hours * 30 + minutes / 2)+"deg)";
}

setInterval(getTime, 100);