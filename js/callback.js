console.log("We learn callback functions");

/*
    what is call back function 
    --Callback functions are function inside function

    A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. In programming, callback functions allow for asynchronous execution, where certain tasks are carried out while waiting for another task to finish, and once the task is done, the callback function is called to proceed with the next steps.

    For example, in JavaScript, you might use a callback function in an event listener, where the callback is executed when an event occurs, or in asynchronous operations like fetching data from an API, where the callback function handles the data once it has been received.
*/


// const stdList = [
//     { name: "Amit Vishwakarma", subject: "English" },
//     { name: "Ankit Vishwakarma", subject: "Coding" }
// ]

// function enrollStudents(student,callback){
//     setTimeout(function() {
//         stdList.push(student);
//         console.log("Student has been enrolled");
//         callback()
//     }, 1000);
// };
// function getStudents(){
//     setTimeout(function() {
//         let str = "";
//         stdList.forEach(function(student) {
//             str +=  `<li>${student.name}</li>`;
//         });
//         document.getElementById("student").innerHTML = str;
//         console.log("Student has been Fetch");
//     }, 3000);
// };

// let newStudents = {name: "Sunny", Subject: "Python"};
// enrollStudents(newStudents, getStudents);    

const students = [
    {name: "Amit", subject: "Developer"},
    {name: "Ankit", subject: "Hacker"}
]

function enrollStudents(student, callback) {
    setTimeout(function() {
        students.push(student)
        console.log("Student can be enrolled");
        callback();
    }, 1000);
};
function getStudents() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`;
        });
        document.getElementById('student').innerHTML = str;
        console.log("Student can be fetched");
    }, 3000);
};

let newStudents = {name: "Madhu", subject: "Lover"};
enrollStudents(newStudents, getStudents)