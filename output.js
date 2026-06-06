//const x="1";
//const y="2";
//console.log(x,y);
//console.log("i am %s and my age is %d ",'bhargav',21);
//console.clear();
//console.count("hi");
//console.countReset("hi");//
//

const progressbar = require("progress");
const bar = new progressbar("downloading [:bar] :rate/bps :percent :etas ",{
    total:20,
});
const timer = setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},100);
const chalk=require("chalk");
console.log(chalk.green("hi"));