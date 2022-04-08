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
        while(college_data.size()){
            
        }
    });
});

function fetchCollegeData(link) {
    fetch(link)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        college_data=myJson;
        console.log(college_data);
    })
    .catch(function(error) {
        console.log('Looks like there was a problem: ', error);
    });
}