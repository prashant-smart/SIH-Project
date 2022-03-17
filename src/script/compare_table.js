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

function college_1_helper(elm) {
    if (elm !== "NA") {
        console.log(elm.institute_type);
        college_1_name.innerText = elm.name;
        college_1_known_as.innerText = elm.known_as;
        college_1_institute_type.innerText = elm.institute_type;
        college_1_year_established.innerText = elm.year_established;
        college_1_address.innerText = elm.address;
        college_1_location.innerText = elm.location;
        college_1_fees.innerText = elm.fees;
    } else {
        college_1_name.innerText = "College 1";
        college_1_known_as.innerText = "NA";
        college_1_institute_type.innerText = "NA";
        college_1_year_established.innerText = "NA";
        college_1_address.innerText = "NA";
        college_1_location.innerText = "NA";
        college_1_fees.innerText = "NA";
    }
}

function college_2_helper(elm) {
    if (elm !== "NA") {
        college_2_name.innerText = elm.name;
        college_2_known_as.innerText = elm.known_as;
        college_2_institute_type.innerText = elm.institute_type;
        college_2_year_established.innerText = elm.year_established;
        college_2_address.innerText = elm.address;
        college_2_location.innerText = elm.location;
        college_2_fees.innerText = elm.fees;
    } else {
        college_2_name.innerText = "College 2";
        college_2_known_as.innerText = "NA";
        college_2_institute_type.innerText = "NA";
        college_2_year_established.innerText = "NA";
        college_2_address.innerText = "NA";
        college_2_location.innerText = "NA";
        college_2_fees.innerText = "NA";
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