var rawData = require('./allCities.json');
const fs = require('fs');

let output = {};

for(let states in rawData){
    let cities = [];
    for(let city in rawData[states]){
        cities.push(city);
    }
    output[states] = cities;
}

//console.log(output);

fs.writeFile("indiaStatesCities.json",JSON.stringify(output),(e) => {
    console.log("Success");
});
// for(let place of rawData.Bihar.PATNA){
//     if(regPur.test(place)){
//         console.log(place);
//         count++;
//     }
// }
// console.log("Total Pur :", count);