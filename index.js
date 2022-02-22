setInterval(getTime, 1000);

function getTime() {

    var colons = document.querySelectorAll(".colon");
    colons.forEach(e => {
        e.classList.add("blink");
    });

    var date = new Date();

    var hour = date.getHours();
    document.getElementById("hr_1").innerText = parseInt(hour / 10);
    document.getElementById("hr_2").innerText = hour % 10;

    var minute = date.getMinutes();
    document.getElementById("min_1").innerText = parseInt(minute / 10);
    document.getElementById("min_2").innerText = minute % 10;

    var second = date.getSeconds();
    document.getElementById("sec_1").innerText = parseInt(second / 10);
    document.getElementById("sec_2").innerText = second % 10;
}