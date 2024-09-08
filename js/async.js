console.log("Welcome to Async Function");

setTimeout(() => {
    for (let index = 0; index < 100; index++) {
        console.log(index);
    }
}, 3000);


console.log("Number Printing Done");