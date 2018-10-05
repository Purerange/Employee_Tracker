var name;
var rate;
var role;

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCk-rZaCachMxJecTttRfbZMPHC1Z0EWQA",
    authDomain: "employeetracker-3a59d.firebaseapp.com",
    databaseURL: "https://employeetracker-3a59d.firebaseio.com",
    projectId: "employeetracker-3a59d",
    storageBucket: "",
    messagingSenderId: "809093610593"
  };
firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function(event) {

    event.preventDefault();

    name = $("#nameInput").val().trim();

})