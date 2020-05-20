const fs = require('fs');

    let counter = 0;
    let regex = /^[pP]/;
    let myDir = fs.readdirSync('/home/lucia/Documents') 

    myDir.forEach(element => 
        regex.test(element) ? counter++ : "" );

console.log('Amount of files starting with p: ', counter);