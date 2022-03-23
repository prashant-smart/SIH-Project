var index = localStorage.getItem("COLLEGE_INDEX");
let data = college_data[index];

document.getElementsByClassName("college_detail_element_title")[0].innerHTML = "<strong>" + "Name : " + "</strong";
document.getElementsByClassName("college_detail_element_description")[0].innerHTML = data.name;


document.getElementsByClassName("college_detail_element_title")[1].innerHTML = "<strong>" + "Address : " + "</strong";
document.getElementsByClassName("college_detail_element_description")[1].innerHTML = data.address;


document.getElementsByClassName("college_detail_element_title")[2].innerHTML = "<strong>" + "Location : " + "</strong";
document.getElementsByClassName("college_detail_element_description")[2].innerHTML = data.location;


document.getElementsByClassName("college_detail_element_title")[3].innerHTML = "<strong>" + "Known As : " + "</strong";
document.getElementsByClassName("college_detail_element_description")[3].innerHTML = data.known_as;


document.getElementsByClassName("college_detail_element_title")[4].innerHTML = "<strong>" + "Institute Type : " + "</strong";
document.getElementsByClassName("college_detail_element_description")[4].innerHTML = data.institute_type;


document.getElementsByClassName("college_detail_element_title")[5].innerHTML = "<strong>" + "Year Established : " + "</strong";
document.getElementsByClassName("college_detail_element_description")[5].innerHTML = data.year_established;


document.getElementsByClassName("college_detail_element_title")[6].innerHTML = "<strong>" + "Fees : " + "</strong";
let f = data.fees;
if (f == '') {
    f = "No Data Available.";
}
document.getElementsByClassName("college_detail_element_description")[6].innerHTML = f == '' ? 'NA' : f;


document.getElementsByClassName("college_detail_element_title")[7].innerHTML = "<strong>" + "Longitude : " + "</strong";
document.getElementsByClassName("college_detail_element_description")[7].innerHTML = data.geocode.longitude;


document.getElementsByClassName("college_detail_element_title")[8].innerHTML = "<strong>" + "Latitude : " + "</strong";
document.getElementsByClassName("college_detail_element_description")[8].innerHTML = data.geocode.latitude;


document.getElementsByClassName("college_detail_element_title")[9].innerHTML = "<strong>" + "College Website : " + "</strong";
document.getElementsByClassName("college_detail_element_description")[9].innerHTML = `<a href =${data.website_url} target ='_blank'>${data.website_url}</a>`;


document.getElementById("college_detail_header_name").innerHTML = "<strong>" + data.name.toUpperCase(); + "</strong";
document.getElementById("college_detail_header_down_logo").src = data.logo_url;
document.getElementsByClassName("college_detail_header_top")[0].style.backgroundImage = `url(${data.image_url})`;




mapbtn = document.getElementsByClassName("mapbtn")[0];
if (data.geocode.latitude === "NULL" || data.geocode.latitude === 'NULL') {
    mapbtn.classList.add("disabled")
}
mapbtn.onclick = function() {
    localStorage.setItem("MAP_INDEX", data.id);
}
mapbtn.addEventListener("onclick", function() {})



var image_gallery_container = document.getElementsByClassName("image_gallery_container")[0];

if (data.photo_album == null) {
    image_gallery_container.innerHTML = '<h3>No Images available</h3>';
} else {

    data.photo_album.forEach(element => {
        var div = document.createElement('div');
        div.className = "mySlides";
        div.innerHTML =
            `
        <img src=${element} style = "width: 90%; aspect-ratio:2">
    `;
        image_gallery_container.appendChild(div);
    });

}