const minimist = require("minimist");//console.log(process.argv.slice(2)[0]);
//process.argv.forEach((val,index) => {
   // console.log('${index}:${val}');
//});

const argnew = minimist(process.argv.slice(2));
console.log(argnew.name);