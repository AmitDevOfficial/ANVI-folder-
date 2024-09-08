console.log("hey welcome to js with closer's");

function closer(){
    let message = "Good Morning";
    {
        let message = "Good AfterNoon";
        console.log("Hello Msg - ", message);
    }
    console.log(message)
}
closer();