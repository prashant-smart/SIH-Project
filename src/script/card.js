let college_card_container = document.getElementsByClassName('college_card_container')[0];
college_data.forEach((element, index) => {
    let div = document.createElement('div');
    div.className = 'college_card'
    div.innerHTML =
        `<div class="college_card_body">
    <img class="college_card_logo_image" src="${element.logo_url}" alt="Card image cap">
      <h5 class="college_card_name" >${element.name}</h5>
      <p class="college_card_location" >${element.location}</p>
      <a href="college_detail.html" id = "${index}"class="btn btn-primary college_card_button"  onclick="btnClicked(this.id)">Go somewhere</a>
      </div>`;
    college_card_container.appendChild(div);
})

function btnClicked(index) {
    localStorage.setItem("COLLEGE_INDEX", index);
    return;
}