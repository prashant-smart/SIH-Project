var i = 0;
var element = document.getElementsByClassName("type_writer")[0];
var txt = element.innerHTML;
var speed = 75;
element.innerHTML = '';

function typeWriter() {
    if (i < txt.length) {
        element.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();