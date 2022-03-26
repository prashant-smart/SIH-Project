var i = 0;
var txt = document.getElementById("header_title").innerHTML;
var speed = 50;
document.getElementById("header_title").innerHTML = '';

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("header_title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();