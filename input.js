const prompt = require("prompt-sync")();
const readline = require("readline");
const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
rl.question(`what is your name?`,(name) => {
    console.log(`HI ${name}`);
    rl.close();
});
const name1=prompt("what is your name?");
console.log(`hi ${name1}`);