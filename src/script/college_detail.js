var index = localStorage.getItem("COLLEGE_INDEX");

let list = JSON.parse(localStorage.getItem("COLLEGE_DATA"));
let data = list[index];
console.log("LIST :" + list);
console.log("INDEX :" + index + "\nDATA : " + data);

let container = document.getElementsByClassName("college_detail_element_container")[0];

/* <div class="college_detail_element">
    <div class="college_detail_element_title"></div>
    <div class="college_detail_element_description"></div>
</div> */


document.getElementById("college_detail_header_name").innerHTML = data.name;
document.getElementById("college_detail_header_known_as").innerHTML = data.known_as;
document.getElementById("college_detail_header_address").innerHTML = data.address;
document.getElementById("college_detail_header_down_logo").src = data.logo_url;
document.getElementsByClassName("college_detail_header_top")[0].style.backgroundImage = `url(${data.image_url})`;


Object.keys(data).forEach(function(key) {
    console.log("KEY : ", key, "VALUE : ", data[key]);

    var div1 = document.createElement('div');
    div1.className = 'college_detail_element';

    var div2 = document.createElement('div');
    div2.className = 'college_detail_element_title';

    var div3 = document.createElement('div');
    div3.className = 'college_detail_element_description';

    switch (key) {
        case 'name':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.innerHTML = data[key];
            break;
        case 'address':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.innerHTML = data[key];
            break;
        case 'known_as':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.innerHTML = data[key];
            break;
        case 'institute_type':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.innerHTML = data[key];
            break;
        case 'year_established':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.innerHTML = data[key];
            break;
        case 'location':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.innerHTML = data[key];
            break;
        case 'logo_url':
            return;
        case 'image_url':
            return;
        case 'website_url':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.innerHTML = `<a href = ${data[key]} target = '_blank'>${data[key]}</a>`;
            break;
        case 'campus_tour_url':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.innerHTML = `<a href = ${data[key]} target = '_blank'>${data[key]}</a>`;
            break;
        case 'geocode':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.innerHTML = `  LATITUDE : ${data[key]['latitude']}<br>
                                LONGITUDE : ${data[key]['longitude']}`;
            break;
        case 'photo_album':
            return;
        case 'about_us':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.innerHTML = data[key];
            break;
        case 'vision_mission':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.innerHTML = data[key];
            break;
        case 'campus_life':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.innerHTML = data[key];
            break;
        case 'Campus Infrastructure':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.innerHTML = data[key];
            break;
        case 'cutoff':
            var table = document.createElement("TABLE");
            table.border = "1";
            var columnCount = data[key]['branches'].length;
            var row = table.insertRow(-1);
            var headerCell = document.createElement("TH");
            headerCell.style.textAlign = 'center';
            headerCell.innerHTML = 'Branches';
            row.appendChild(headerCell);
            for (var i = 0; i < columnCount; i++) {
                var headerCell = document.createElement("TH");
                headerCell.style.textAlign = 'center';
                headerCell.innerHTML = data[key]['branches'][i];
                row.appendChild(headerCell);
            }
            Object.keys(data[key]['Courses']).forEach(function(key1) {
                row = table.insertRow(-1);
                var cell1 = row.insertCell(-1);
                var cell2 = row.insertCell(-1);
                row = table.insertRow(-1);
                var cell = row.insertCell(-1);
                cell.style.padding = "1.5rem";
                cell.innerHTML = `<strong> ${key1.toUpperCase()} </strong`;
                for (var j = 0; j < data[key]['Courses'][key1].length; j++) {
                    var cell = row.insertCell(-1);
                    cell.style.padding = "1.5rem";
                    cell.innerHTML = data[key]['Courses'][key1][j];
                }
            });
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.appendChild(table);
            break;
        case 'connectivity':
            var table = document.createElement("TABLE");
            // table.border = "1";
            Object.keys(data[key]).forEach(function(key1) {
                row = table.insertRow(-1);
                var cell1 = row.insertCell(-1);
                var cell2 = row.insertCell(-1);
                cell1.style.padding = "0.5rem";
                cell2.style.padding = "0.5rem";
                cell1.innerHTML = `<strong> ${key1.toUpperCase()} </strong`;
                cell2.innerHTML = data[key][key1];
            });
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.appendChild(table);
            break;
        case 'rankings':
            var table = document.createElement("TABLE");
            table.border = "1";
            row = table.insertRow(-1);
            var headerCell = document.createElement("TH");
            headerCell.style.textAlign = 'center';
            headerCell.innerHTML = "RANKING SYSTEM";
            row.appendChild(headerCell);
            headerCell = document.createElement("TH");
            headerCell.style.textAlign = 'center';
            headerCell.innerHTML = "RANK";
            row.appendChild(headerCell);
            Object.keys(data[key]).forEach(function(key1) {
                row = table.insertRow(-1);
                var cell1 = row.insertCell(-1);
                var cell2 = row.insertCell(-1);
                cell1.style.padding = "0.5rem";
                cell2.style.padding = "0.5rem";
                cell1.innerHTML = `<strong> ${key1.toUpperCase()} </strong`;
                cell2.innerHTML = data[key][key1];
            });
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.appendChild(table);
            break;
        case 'mode_of_admission':
            var table = document.createElement("TABLE");
            // table.border = "1";
            Object.keys(data[key]).forEach(function(key1) {
                row = table.insertRow(-1);
                var cell1 = row.insertCell(-1);
                var cell2 = row.insertCell(-1);
                cell1.style.padding = "0.5rem";
                cell2.style.padding = "0.5rem";
                cell1.innerHTML = `<strong> ${Number(key1) + 1}) </strong`;
                cell2.innerHTML = data[key][key1];
            });
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.appendChild(table);
            break;
        case 'fees':
            var table = document.createElement("TABLE");
            // table.border = "1";
            Object.keys(data[key]).forEach(function(key1) {
                row = table.insertRow(-1);
                var cell1 = row.insertCell(-1);
                var cell2 = row.insertCell(-1);
                cell1.style.padding = "0.5rem";
                cell2.style.padding = "0.5rem";
                cell1.innerHTML = `<strong> ${key1.toUpperCase()} </strong`;
                cell2.innerHTML = data[key][key1];
            });
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            div3.appendChild(table);
            break;
        case 'scholarship':
            Object.keys(data[key]).forEach(function(key1) {
                var table = document.createElement("TABLE");
                // table.border = "1";
                table.style.marginBottom = "3rem";
                row = table.insertRow(-1);
                var cell1 = row.insertCell(-1);
                var cell2 = row.insertCell(-1);
                cell1.style.padding = "0.5rem";
                cell2.style.padding = "0.5rem";
                cell1.innerHTML = `<strong> ${Number(key1) + 1}) </strong`;
                cell2.innerHTML = data[key][key1];
                div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
                div3.appendChild(table);
            });
            break;
        case 'alumni':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            var parentDiv = document.createElement('div');
            parentDiv.className = 'alumni_card_container';
            data[key].forEach((element) => {
                var tempDiv = document.createElement('div');
                tempDiv.className = 'alumni_card'
                tempDiv.innerHTML =
                    `
                    <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                        <!-- Team Thumb-->
                        <div class="advisor_thumb"><img src="${element['picture']['large']}" alt="">
                        </div>
                        <!-- Team Details-->
                        <div class="single_advisor_details_info">
                            <h6>${element['name']['title'].toUpperCase() + " " + element['name']['first'].toUpperCase() + " " + element['name']['last'].toUpperCase()}</h6>
                            <p class="designation">${element['phone']}</p>
                            <p class="designation">${element['email']}</p>
                        </div>
                    </div>
                    `
                parentDiv.appendChild(tempDiv);
            });
            div3.appendChild(parentDiv);
            break;
        case 'faculty':
            div2.innerHTML = `<strong> ${key.toUpperCase()} </strong`;
            var parentDiv = document.createElement('div');
            parentDiv.className = 'alumni_card_container';
            data[key].forEach((element) => {
                var tempDiv = document.createElement('div');
                tempDiv.className = 'alumni_card'
                tempDiv.innerHTML =
                    `
                    <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                        <!-- Team Thumb-->
                        <div class="advisor_thumb"><img src="${element['picture']['large']}" alt="">
                        </div>
                        <!-- Team Details-->
                        <div class="single_advisor_details_info">
                            <h6>${element['name']['title'].toUpperCase() + " " + element['name']['first'].toUpperCase() + " " + element['name']['last'].toUpperCase()}</h6>
                            <p class="designation">${element['phone']}</p>
                            <p class="designation">${element['email']}</p>
                        </div>
                    </div>
                    `
                parentDiv.appendChild(tempDiv);
            });
            div3.appendChild(parentDiv);
            break;
        case 'id':
            return;
    }
    div1.id = key;
    div1.appendChild(div2);
    div1.appendChild(div3);
    container.appendChild(div1);
})




mapbtn = document.getElementsByClassName("mapbtn")[0];
if (data.geocode.latitude === "NULL" || data.geocode.latitude === 'NULL') {
    mapbtn.classList.add("disabled")
}
mapbtn.onclick = function() {
    localStorage.setItem("MAP_INDEX", data.id);
}

var image_gallery_container = document.getElementsByClassName("image_gallery_container")[0];

if (data.photo_album == null) {
    image_gallery_container.innerHTML = '<h3>No Images available</h3>';
} else {
    data.photo_album.forEach(element => {
        var div = document.createElement('div');
        div.className = "mySlides";
        div.innerHTML = `<img src="${element}">`;
        image_gallery_container.appendChild(div);
    });
}