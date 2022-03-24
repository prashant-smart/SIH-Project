var i = 0;
var txt = 'Get All Indian Universites Information, News and Cutoff';
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