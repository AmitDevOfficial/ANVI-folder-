console.log("Welcome to the JS Promise");

// Promise
// Pending
// Reject

// function func1() {
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             const error = true;
//             if(!error){
//                 console.log("Your Promise has been resolved");
//                 resolve();
//             }
//             else{
//                 console.log("Not Resolve");
//                 reject("Not Done");
//             }
//         }, 3000);
//     })
// }

// func1().then(function(){
//     console.log("Amit I Promise");
// }).catch(function(error){
//     console.log("Amit Not Promise", error)
// })

function func1() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log("Your promise has been resolved");
                resolve();
            }else{
                console.log("Your promise has not been resolved");
                reject("Sorry");
            }
        }, 2000);
    })
}

func1().then(function() {
    console.log("Amit: Promise Done");
}).catch(function (error) {
    console.log("Amit: Bad",error);

})