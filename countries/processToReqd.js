const fs = require('fs');
const rawCountry = require('./rawArray.json');

let reqdOut = [];

rawCountry.forEach((name) => {
    reqdOut.push({value: name.toLowerCase(), label: name});
})

fs.writeFile("reqd.json",JSON.stringify(reqdOut),(e) => {
    console.log("Success");
});
