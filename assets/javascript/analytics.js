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

var employees = {};
var employee_names = [];
var employee_rates = [];

database.ref().on("value", function(snapshot) {
    
    console.log(snapshot.val())
    snapshot.forEach(function(childSnapshot) {
        console.log(childSnapshot.val().name)
        employee_names.push(childSnapshot.val().name)
        employee_rates.push(childSnapshot.val().rate)
    });
    
    for (i = 0; i < employee_names.length; i++) {
        employees[employee_names[i]] = employee_rates[i];
    };
});

// each stevie key overrides the previous stevie
console.log(employees)
console.log(employees.length)
console.log(employee_names[2])
console.log(employee_rates)


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: employee_names,
        datasets: [{
            label: 'Employee Salary',
            data: employee_rates,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});