const fs = require('fs');
var data = require('./specilaization.json');

let outJson = {};


for(let i of  data){
    // console.log(i.industry,i.degree);
    if(outJson[i.industry]===undefined){
        outJson[i.industry] = [];
    }
    outJson[i.industry].push(i.specialization);
}

fs.writeFile('specParse.json',JSON.stringify(outJson),function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!")});

//console.log(outJson);