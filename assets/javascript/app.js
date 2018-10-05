var name;
var rate;
var role;
var start;

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

$("#submitButton").on("click", function(event) {

    event.preventDefault();

    name = $("#nameInput").val().trim();
    rate = $("#rateInput").val().trim();
    role = $("#roleInput").val().trim();
    start = new Date($("#dateInput").val());
    var startValue = $("#dateInput").val();

    var startYear = start.getFullYear();
    var startMonth = start.getMonth();
    var today = new Date();
    var todaysYear = today.getFullYear();
    var todaysMonth = today.getMonth();
    var months = (todaysYear - startYear) * 12 + (todaysMonth - startMonth);
    var earnings = months * rate;

    database.ref().push({
        name: name,
        role: role,
        start: startValue,
        months: months,
        rate: rate,
        earnings: earnings
    });

    var tr = $("<tr>");
    var tdName = $("<td>");
    var tdRole = $("<td>");
    var tdStart = $("<td>");
    var tdMonths = $("<td>");
    var tdRate = $("<td>");
    var tdEarnings = $("<td>");

    tdName.text(name);
    tdRole.text(role);
    tdStart.text(startValue);
    tdMonths.text(months);
    tdRate.text(rate);
    tdEarnings.text(earnings);

    tr.append(tdName);
    tr.append(tdRole);
    tr.append(tdStart);
    tr.append(tdMonths);
    tr.append(tdRate);
    tr.append(tdEarnings);

    $(".table").append(tr);



    

})