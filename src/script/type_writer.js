var i = 0;
var element = document.getElementsByClassName("type_writer")[0];
var txt = element.innerHTML;
var speed = 50;
var speed2 = 3000;
element.innerHTML = '';

b = true;

function typeWriter() {
    if (i < txt.length) {
        element.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(typeWriter2, speed2);
    }
}

function typeWriter2() {
    if (i >= 0) {
        element.innerHTML = txt.substring(0, i - 1);
        i--;
        setTimeout(typeWriter2, speed);
    } else {
        setTimeout(typeWriter, speed2);
    }
}
typeWriter();