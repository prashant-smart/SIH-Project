let list1= document.getElementById("list-items-1");
let list2= document.getElementById("list-items-2");

// college 1
let college_1_known_as= document.getElementById("college_1_known_as");
let college_1_intstitute_type=document.getElementById("college_1_intstitute_type");
let college_1_year_established=document.getElementById("college_1_year_established");
let college_1_address=document.getElementById("college_1_address");
let college_1_location=document.getElementById("college_1_location");
let college_1_fees=document.getElementById("college_1_fees");

// College 2
let college_2_known_as= document.getElementById("college_2_known_as");
let college_2_intstitute_type=document.getElementById("college_2_intstitute_type");
let college_2_year_established=document.getElementById("college_2_year_established");
let college_2_address=document.getElementById("college_2_address");
let college_2_location=document.getElementById("college_2_location");
let college_2_fees=document.getElementById("college_2_fees");


college_data.forEach((elm)=>{
    let option1=document.createElement("option");
    option1.value=elm.name;
    let option2=document.createElement("option");
    option2.value=elm.name;
    list1.appendChild(option1);
    list2.appendChild(option2);
})

let input_first= document.getElementsByClassName('input')[0];
input_first.addEventListener('change',()=>{
    if(input_first.value!=''){
        college_data.forEach((elm)=>{
            if(elm.name===input_first.value){
                college_1_known_as.innerText=elm.known_as;
                college_1_intstitute_type.innerText=elm.intstitute_type;
                college_1_year_established.innerText=elm.year_established;
                college_1_address.innerText=elm.address;
                college_1_location.innerText=elm.location;
                college_1_fees.innerText=elm.fees;
            }
        })
    }else{
        college_1_known_as.innerText="NA";
                college_1_intstitute_type.innerText="NA";
                college_1_year_established.innerText="NA";
                college_1_address.innerText="NA";
                college_1_location.innerText="NA";
                college_1_fees.innerText="NA";
            }
})

let input_second= document.getElementsByClassName('input')[1];
input_second.addEventListener('change',()=>{
    if(input_second.value!=''){
        college_data.forEach((elm)=>{
            if(elm.name===input_second.value){
                college_2_known_as.innerText=elm.known_as;
                college_2_intstitute_type.innerText=elm.intstitute_type;
                college_2_year_established.innerText=elm.year_established;
                college_2_address.innerText=elm.address;
                college_2_location.innerText=elm.location;
                college_2_fees.innerText=elm.fees;
            }
        })
    }else{
                college_2_known_as.innerText="NA";
                college_2_intstitute_type.innerText="NA";
                college_2_year_established.innerText="NA";
                college_2_address.innerText="NA";
                college_2_location.innerText="NA";
                college_2_fees.innerText="NA";
    }
})






college_data.forEach((elm)=>{
    let k={
        id:elm.id,
        name: elm.name,
        address: elm.address,
        known_as: elm.known_as,
        institute_type: elm.institute_type,
        year_established: elm.year_established,
        location: elm.location,
        logo_url: elm.logo_url,
        fees: elm.fees,
        website_url: elm.website_url,
        image_url:img[elm.id].college_url
    };
    arr.push(k);
    })