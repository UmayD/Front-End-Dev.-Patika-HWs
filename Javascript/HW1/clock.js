let username = prompt("Enter your name");

myName.innerHTML = `${username}`

function showTime() {
    let date = new Date();
    let current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById("myClock").innerHTML = current_time;
    setTimeout(showTime, 1000);
}


showTime();