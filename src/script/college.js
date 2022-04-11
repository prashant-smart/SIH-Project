let college_card_container = document.getElementsByClassName('college_card_container')[0];
let search_bar_homepage = document.getElementsByClassName('search-bar-homepage')[0];
window.onload = function() {
    search_bar_homepage.value = '';
}

function fill_cards(array, container) {
    console.log(array);
    array.forEach((element) => {
        if (element.length == 0)
            return;
        console.log(element)
        let div = document.createElement('div');
        div.className = 'college_card'
        div.innerHTML =
            `<div class="college_card_body">
                <img class="college_card_photo_image" src="${element.image_url}" alt="Card image cap">
                <img class="college_card_logo_image" src="${element.logo_url}" alt="Card image cap">
                <h5 class="college_card_name">${element.known_as}</h5>
                <p class="college_card_location" >${element.location}</p>
                <a href="../component/college_detail.html" id = "${element.id}"class="btn btn-primary college_card_button" onclick="btnClicked(this.id)">Know more</a>
            </div>
          `;
        container.appendChild(div);
    })
}


function btnClicked(index) {
    localStorage.setItem("COLLEGE_INDEX", index);
}

let college_data = JSON.parse(localStorage.getItem("COLLEGE_DATA"));
fill_cards(college_data, college_card_container);