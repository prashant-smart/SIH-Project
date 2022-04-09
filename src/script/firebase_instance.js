

let parent_container = document.getElementsByClassName('parent_container')[0];
parent_container.style.display = 'none';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, onValue, ref } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCCVlq18Ijk-1tm4FeOUkxyXGxHHDSOkzg",
    authDomain: "hack-sih.firebaseapp.com",
    databaseURL: "https://hack-sih-default-rtdb.firebaseio.com",
    projectId: "hack-sih",
    storageBucket: "hack-sih.appspot.com",
    messagingSenderId: "1067640340751",
    appId: "1:1067640340751:web:df5c5a929477def6b27e7a",
    measurementId: "G-JVWJ9Q3K14"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const reference = ref(db, 'api');

onValue(reference, (snapshot) => {
    var totalApi = snapshot.size;
    var index = 0;
    snapshot.forEach((childSnapshot) => {
        fetchCollegeData(childSnapshot.val(), index, totalApi);
        index++;
    });
});


let college_data = [];

function fetchCollegeData(link, index, totalApi) {
    fetch(link)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log("INDEX : ", index, "Total : ", totalApi);
            college_data.push(myJson);
            if (index == totalApi - 1) {
                parent_container.style.display = 'block';
                let loader = document.getElementsByClassName('wrapper')[0];
                loader.style.display = 'none';
                let s1 = JSON.stringify(college_data)
                localStorage.setItem("college_data",s1 );
            } 
        })
        .catch(function(error) {
            console.log('Looks like there was a problem: ', error);
        });
}
