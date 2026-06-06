const path = require("path");
const filepath = "C:/Users/palak/Downloads/nodejs-tutorial/files/sample.txt";
//console.log(path.dirname(filepath));
//console.log(__dirname);
//console.log(path.extname(filepath));
//console.log(path.basename(filepath));
//const samplefile="sample.txt";
//console.log(path.join(path.dirname(filepath), samplefile))
const fs = require("fs");
const fspromises = require("fs").promises;
//fs.readFile(filepath, "utf-8", (err, data) => {
  //  if (err) throw new Error("something went wrong");
    //console.log(data);
//});
//try{
  //  const data = fs.readFileSync(path.join(__dirname, "files", "sample.txt"), "utf-8");
    //console.log(data);
//}
//catch(err){
//console.log(err);
//}
const filereading = async () => {
try{
    const data = await fspromises.readFile(filepath,{encoding : "utf-8"});
    console.log(data);
}
catch(err){
    console.log(err);
} 
};
filereading();

const txtfile=path.join(__dirname, "files", "text.txt");
const content = "This is a text file created using fs module in nodejs";
//fs.writeFile(txtfile, content,"utf-8", (err) => {
  //  if (err) throw new Error("something went wrong");
    //console.log("write completed");
    //fs.readFile(txtfile, "utf-8", (err, data) => {
      //  if (err) throw new Error("something went wrong");
        //console.log(data);
    //});
//});

const wrintinginfile= async ()=>{
    try{
    await fs.promises.writeFile(txtfile, "\n renamed file","utf-8",{flag:"a+"});
    //await fs.promises.appendFile(txtfile, "\nThis is an appended text", "utf-8");
    await fs.promises.rename(txtfile, path.join(__dirname, "files", "text1.txt"));
    const data = await fs.promises.readFile(path.join(__dirname, "files", "text1.txt"), "utf-8");
    console.log(data.toString());
}
catch(err){
    console.log(err);
}};
wrintinginfile();