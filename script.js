//DOM elements 
const secondEl = document.querySelector(".second"),
minuteEl = document.querySelector(".minute"),
hourEl = document.querySelector(".hour"),
timeEl = document.querySelector(".time"),
dateEl = document.querySelector(".date"),
btnEl = document.querySelector(".btn"),
containerEl = document.querySelector(".container")
const monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "NOV", "DEC"];
const weekArr = ["sunday","Monday", "Tuesday", "wednessday", "Thursday", "Friday", "Saturday"]
//defing setTime
function setTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDay();
    const date1 = date.getDate();
    const month = date.getMonth();
    console.log(day, month);
    console.log(hour, minute, seconds);
    secondEl.style.transform = `rotate(${seconds*6}deg)`;
    minuteEl.style.transform = `rotate(${minute*6 - 90}deg)`;
    hourEl.style.transform = `rotate(${hour*30 - 90}deg)`;
    timeEl.textContent = `${hour}:${minute} PM`;
    dateEl.innerHTML = `${weekArr[day]} ${monthArr[month-1]} <span class = "circle">${date1}</span>`
}
//updating time in 100ms
setInterval(setTime,1000)
//adding functionality to btn
btnEl.addEventListener("click", ()=>{
    if(containerEl.classList.contains("active")){
        containerEl.classList.remove("active");
        btnEl.textContent = "Dark Mode"
    }else{
        containerEl.classList.add("active");
        btnEl.textContent = "Light Mode"
    }
})