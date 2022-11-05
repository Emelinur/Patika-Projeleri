let myname = document.querySelector("#myName");
myname.innerHTML = prompt("Adınız Nedir?")


function showTime() {
    let date = new Date();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = days[(date.getDay())];
    let hourse =date.getHours();
    var minutes=date.getMinutes();
    var seconds = date.getSeconds();
    setTimeout("showTime()", 1000);
    document.querySelector("#myClock").innerHTML = hourse + ":" + minutes + ":" + seconds+ " " + day ;
}
showTime();

