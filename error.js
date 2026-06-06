//
//process.on('uncaughtException', (error) => {
  //  console.log("An uncaught exception occurred:", error);
    //process.exit(1); // Exit the process with a non-zero status code
//});
function dosomething() {
    const data = fetch("localhost:3000/api");
    console.log("i am doing something ");
    return data;
}   

//
const somefunction = async () => {
    try {
        await dosomething();
    }catch (error) {
        throw new CustomError(error.message);
    } 
};

somefunction(); 