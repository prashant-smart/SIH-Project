let list1 = document.getElementById("list-items-1");
let list2 = document.getElementById("list-items-2");

// college 1
let college_1_name = document.getElementById("college_1");
let college_1_known_as = document.getElementById("college_1_known_as");
let college_1_institute_type = document.getElementById(
    "college_1_institute_type"
);
let college_1_year_established = document.getElementById(
    "college_1_year_established"
);
let college_1_address = document.getElementById("college_1_address");
let college_1_location = document.getElementById("college_1_location");
let college_1_fees = document.getElementById("college_1_fees");

// College 2
let college_2_name = document.getElementById("college_2");
let college_2_known_as = document.getElementById("college_2_known_as");
let college_2_institute_type = document.getElementById(
    "college_2_institute_type"
);
let college_2_year_established = document.getElementById(
    "college_2_year_established"
);
let college_2_address = document.getElementById("college_2_address");
let college_2_location = document.getElementById("college_2_location");
let college_2_fees = document.getElementById("college_2_fees");

college_data.forEach((elm) => {
    let option1 = document.createElement("option");
    option1.value = elm.name;
    let option2 = document.createElement("option");
    option2.value = elm.name;
    list1.appendChild(option1);
    list2.appendChild(option2);
});

function college_1_helper(data1) {
    if (data1 !== "NA") {

        // college 1----------------------------
        document.getElementsByClassName("college_detail_element_title")[0].innerHTML = "<strong>" + "Name : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[0].innerHTML = data1.name;


        document.getElementsByClassName("college_detail_element_title")[1].innerHTML = "<strong>" + "Address : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[1].innerHTML = data1.address;


        document.getElementsByClassName("college_detail_element_title")[2].innerHTML = "<strong>" + "Location : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[2].innerHTML = data1.location;


        document.getElementsByClassName("college_detail_element_title")[3].innerHTML = "<strong>" + "Known As : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[3].innerHTML = data1.known_as;


        document.getElementsByClassName("college_detail_element_title")[4].innerHTML = "<strong>" + "Institute Type : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[4].innerHTML = data1.institute_type;


        document.getElementsByClassName("college_detail_element_title")[5].innerHTML = "<strong>" + "Year Established : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[5].innerHTML = data1.year_established;


        document.getElementsByClassName("college_detail_element_title")[6].innerHTML = "<strong>" + "Fees : " + "</strong";
        let f1 = data1.fees;
        if (f1 == '') {
            f1 = "NA";
        }
        document.getElementsByClassName("college_detail_element_description")[6].innerHTML = f1;


        document.getElementsByClassName("college_detail_element_title")[7].innerHTML = "<strong>" + "Longitude : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[7].innerHTML = data1.geocode.longitude;


        document.getElementsByClassName("college_detail_element_title")[8].innerHTML = "<strong>" + "Latitude : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[8].innerHTML = data1.geocode.latitude;


        document.getElementsByClassName("college_detail_element_title")[9].innerHTML = "<strong>" + "College Website : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[9].innerHTML = `<a href =${data1.website_url} target ='_blank'>${data1.website_url}</a>`;

    } else {
        // college 1----------------------------
        document.getElementsByClassName("college_detail_element_title")[0].innerHTML = "<strong>" + "Name : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[0].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[1].innerHTML = "<strong>" + "Address : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[1].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[2].innerHTML = "<strong>" + "Location : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[2].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[3].innerHTML = "<strong>" + "Known As : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[3].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[4].innerHTML = "<strong>" + "Institute Type : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[4].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[5].innerHTML = "<strong>" + "Year Established : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[5].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[6].innerHTML = "<strong>" + "Fees : " + "</strong";
        let f1 = data1.fees;
        if (f1 == '') {
            f1 = "NA";
        }
        document.getElementsByClassName("college_detail_element_description")[6].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[7].innerHTML = "<strong>" + "Longitude : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[7].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[8].innerHTML = "<strong>" + "Latitude : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[8].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[9].innerHTML = "<strong>" + "College Website : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[9].innerHTML = "NA";

    }
}

function college_2_helper(data2) {
    if (data2 !== "NA") {

        // college 2----------------------------
        document.getElementsByClassName("college_detail_element_title")[10].innerHTML = "<strong>" + "Name : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[10].innerHTML = data2.name;


        document.getElementsByClassName("college_detail_element_title")[11].innerHTML = "<strong>" + "Address : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[11].innerHTML = data2.address;


        document.getElementsByClassName("college_detail_element_title")[12].innerHTML = "<strong>" + "Location : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[12].innerHTML = data2.location;


        document.getElementsByClassName("college_detail_element_title")[13].innerHTML = "<strong>" + "Known As : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[13].innerHTML = data2.known_as;


        document.getElementsByClassName("college_detail_element_title")[14].innerHTML = "<strong>" + "Institute Type : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[14].innerHTML = data2.institute_type;


        document.getElementsByClassName("college_detail_element_title")[15].innerHTML = "<strong>" + "Year Established : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[15].innerHTML = data2.year_established;


        document.getElementsByClassName("college_detail_element_title")[16].innerHTML = "<strong>" + "Fees : " + "</strong";
        let f2 = data2.fees;
        if (f2 == '') {
            f2 = "NA";
        }
        document.getElementsByClassName("college_detail_element_description")[16].innerHTML = f2;


        document.getElementsByClassName("college_detail_element_title")[17].innerHTML = "<strong>" + "Longitude : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[17].innerHTML = data2.geocode.longitude;


        document.getElementsByClassName("college_detail_element_title")[18].innerHTML = "<strong>" + "Latitude : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[18].innerHTML = data2.geocode.latitude;


        document.getElementsByClassName("college_detail_element_title")[19].innerHTML = "<strong>" + "College Website : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[19].innerHTML = `<a href =${data2.website_url} target ='_blank'>${data2.website_url}</a>`;

    } else {
        // college 2----------------------------
        document.getElementsByClassName("college_detail_element_title")[10].innerHTML = "<strong>" + "Name : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[10].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[11].innerHTML = "<strong>" + "Address : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[11].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[12].innerHTML = "<strong>" + "Location : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[12].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[13].innerHTML = "<strong>" + "Known As : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[13].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[14].innerHTML = "<strong>" + "Institute Type : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[14].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[15].innerHTML = "<strong>" + "Year Established : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[15].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[16].innerHTML = "<strong>" + "Fees : " + "</strong";
        let f2 = data2.fees;
        if (f2 == '') {
            f2 = "NA";
        }
        document.getElementsByClassName("college_detail_element_description")[16].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[17].innerHTML = "<strong>" + "Longitude : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[17].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[18].innerHTML = "<strong>" + "Latitude : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[18].innerHTML = "NA";


        document.getElementsByClassName("college_detail_element_title")[19].innerHTML = "<strong>" + "College Website : " + "</strong";
        document.getElementsByClassName("college_detail_element_description")[19].innerHTML = "NA";

    }
}


let input_first = document.getElementsByClassName("input")[0];
input_first.addEventListener("input", () => {
    var isvalid = 0;

    college_data.forEach((elm) => {
        if (elm.name === input_first.value) {
            isvalid = 1;
            college_1_helper(elm);
        }
    });
    if (!isvalid) {
        college_1_helper("NA");
    }
});

let input_second = document.getElementsByClassName("input")[1];
input_second.addEventListener("input", () => {
    var isvalid = 0;

    college_data.forEach((elm) => {
        if (elm.name === input_second.value) {
            isvalid = 1;
            college_2_helper(elm);
        }
    });
    if (!isvalid) {
        college_2_helper("NA");
    }
});


college_1_helper("NA");
college_2_helper("NA");