function updateTime() {

    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById("session");
    var morning = document.getElementById("morning");

    // AM & PM condition 
    if (hours < 12) {
        morning.innerHTML = "Good Morning";
    } else if (hours < 4) {
        morning.innerHTML = "Good Afternoon";
    } else {
        morning.innerHTML = "Good Evening";
    }
    // AM & PM condition 
    if (hours >= 12) {
        session.innerHTML = "PM";
    } else {
        session.innerHTML = "AM";
    }
    // 12 Hours Format Condition
    if (hours > 12) {
        hours = hours - 12;
    }
    // Time area ends

    var day = dateTime.getDay();

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = dateTime.getMonth();
    var year = dateTime.getFullYear();



    // Time print 
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("mint").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    // Date Print
    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = months[month];
    document.getElementById("year").innerHTML = year;

}
setInterval(updateTime, 1000);