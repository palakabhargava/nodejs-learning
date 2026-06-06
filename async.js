const { set } = require("lodash");

console.log("start operation");
function sleep(ms) {
    console.log("operation is running");
    setTimeout(() => {
    console.log("operation is completed");
    }, ms);
    
}

sleep(1000);

console.log("end operation");