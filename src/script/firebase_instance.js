let parent_container=document.getElementsByClassName('parent_container')[0];
parent_container.style.display='none';

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
    snapshot.forEach((childSnapshot) => {
        //calling to fetch college data from api
        fetchCollegeData(childSnapshot.val());
    });
});

function fetchCollegeData(link) {
    let loader=document.getElementsByClassName('wrapper')[0];
    fetch(link)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        parent_container.style.display='block';
        loader.style.display='none';
        college_data=myJson;
    })
    .catch(function(error) {
        console.log('Looks like there was a problem: ', error);
    });
}