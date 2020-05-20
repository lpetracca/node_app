const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function readAndReverse(dir) {
    let newDir = fs.readdirSync(dir); //reads and stores filesArray in newDir    
    console.log('Files: ', newDir);
    console.log('Reverse sort: ', newDir.reverse());
}
    
rl.question('Insert directory: ', (dir) => { 
    readAndReverse(dir);
    rl.close();
});