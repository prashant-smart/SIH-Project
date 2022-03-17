var index = localStorage.getItem("COLLEGE_INDEX");
let data = college_data[index];

document.getElementById("college_name").innerHTML = data.name;
document.getElementById("college_address").innerHTML = data.address;
document.getElementById("college_location").innerHTML = data.location;
document.getElementById("college_known_as").innerHTML = data.known_as;
document.getElementById("college_type").innerHTML = data.institute_type;
document.getElementById("college_year_established").innerHTML = data.year_established;
var fees = data.fees;
if (fees == '') {
    fees = "Currently not available"
}
document.getElementById("college_fees").innerHTML = fees;


document.getElementById("college_detail_header_name").innerHTML = data.name;
document.getElementById("college_detail_header_address").innerHTML = data.address;
document.getElementById("college_detail_header_image").src = data.logo_url;