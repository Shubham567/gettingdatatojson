var rawData = require('./allCities.json');

let count = 0;
let regPur = /^.*(pur|PUR)$/;


for(let states in rawData){
    console.log(states);
    if(regPur.test(states)){
        count++;
    }
    for(let cities in rawData[states]){
        if(regPur.test(cities)){
            console.log("  ",cities);
            count++;
        }
        for(let places of rawData[states][cities]){
            if(regPur.test(places)){
                //console.log(places);
                count++;
            }
        }
    }
}

console.log("Total Pur :", count);