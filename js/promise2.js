// console.log("Hey welcome to promise2.js");

const students = [
    {name: "Amit", subject: "Developer"},
    {name: "Ankit", subject: "Hacker"}
]

// function enrollStudents(student) {

//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             students.push(student)
//             console.log("Student can be enrolled");
//             const error = false;
//             if (!error) {
//                 console.log("your promise has been resolved");
//                 resolve();
//             } else {
//                 console.log("your promise has been not resolved");
//                 reject();
//             }
//         }, 1000);

//     })
// }

// function getStudents() {
//     setTimeout(function() {
//         let str = "";
//         students.forEach(function(student) {
//             str += `<li>${student.name}</li>`;
//         });
//         document.getElementById('student').innerHTML = str;
//         console.log("Student can be fetched");
//     }, 3000);
// };

// let newStudents = {name: "Madhu", subject: "Lover"};
// enrollStudents(newStudents).then(getStudents).catch(function() {
//     console.log('Some error occured');
// })


function enrollStudents(student){
    return new Promise(function(resolve, reject){
        students.push(student);
        console.log("Student has been enrolled");
        const error = false;
        if(!error){
            console.log("your promise has been resolved");
            resolve();
        }else{
            console.log("your promise has been not resolved0");
            reject();
        }
    })
}

function getStudents(){
    setTimeout(() => {
        let str = '';
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`;
        });
        document.getElementById("student").innerHTML= str;
        console.log("Student has been fetched");
    }, 3000);
}

let newStudents = {name: "Madhu", subject: "Lover"};
enrollStudents(newStudents).then(getStudents).catch(function() {
    console.log("Some error occured");
})