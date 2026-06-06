
function asynctask(callback) {
    setTimeout(() => {
        callback(null,"this is the data");
    },0);
}

function makeapicall(callback){
    setTimeout(() => {
        console.log("API call is completed");
    },0);
}

makeapicall(() => {
    makeapicall(() => {
        asynctask(() => {
            asynctask(() => {
               asynctask(() => {
                    asynctask(() => {})
                })
            }) 
        })
    })
});