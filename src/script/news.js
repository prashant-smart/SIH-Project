var container = document.getElementsByClassName("news_card_container")[0];

news_data.forEach(element => {
    var div = document.createElement('div');
    div.className = 'news_card';
    var image_url = element.image_url;
    if (image_url == "") {
        image_url = '../utils/news_no_image.jpg';
    }
    div.innerHTML =
        `
        <div class="card__header">
            <img src=${image_url} class="card__image" width="600">
        </div>
        <div class="card__body">
            <span class="tag tag-blue">${element.date}</span>
            <h4>${element.title}</h4>
            <p>${element.description}</p>
        </div>
         `;
    container.appendChild(div);
});