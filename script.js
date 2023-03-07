let d1 = new Date();
let d2 = new Date();


document.getElementById("displayDate").innerHTML = d1.toDateString();
document.getElementById("displaySeconds").innerHTML = d2.getSeconds();

location.reload();

