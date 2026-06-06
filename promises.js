const makeapicall=(time)=>{
    return () => new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("this api executed in:"+ time);},time);
    });
};
const multiapicall=[makeapicall(1000),makeapicall(2000),makeapicall(500)];

//Promise.all(multiapicall).then((values)=>{
   // console.log(values);
//});

//Promise.race(multiapicall).then((value)=>{
  //  console.log(value);
//});
(async function(){
    for(let request of multiapicall){
        console.log(await request());
    }
})();