const fs = require('fs');
var data = require('./degreesParse.json');

let outJson = [];


for(let i in data){
    // console.log(i.industry,i.degree);
    let val = [];
    for(let j of data[i]){
        val.push({value :  j.toLowerCase(), label : j});
    }
    outJson.push({
        label : i,
        options : val
    });
}

fs.writeFile('degreesUI.json',JSON.stringify(outJson),function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!")});

//console.log(outJson);