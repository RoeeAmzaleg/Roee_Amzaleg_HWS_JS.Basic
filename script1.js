
var first = prompt("What is your first name ?");
var last = prompt("What is your last name ?");
var birthDay = prompt("what is your day of birth ?");
var birthMonth = prompt("what is your birth month ?");
var birthYear = prompt("what is your birth year ?");
var day = parseInt(birthDay);
var month = parseInt(birthMonth);
var year = parseInt(birthYear);

var countDownDate = new Date(year + 100, month - 1, day).getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24) + 1);
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("demo").innerHTML = "Hello" + " " + first + " " +  last + "<br />" + "<br />" +
        "You Have: " + "<br />" + days + " " + "Days" + "<br />" +
        " " + hours + " " + "Hours" + "<br />" + " " + minutes + " " + "Minutes" + "<br />" +
        " " + seconds + " " + "Seconds" + "<br />" + "<br />" + " " + "Until you reach the age of 100 !";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

