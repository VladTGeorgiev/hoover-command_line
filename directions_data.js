const hooverTravel = require('./hoover_data.js')

const transformCardinalsIntoNumbers = (directions, cardinal, number) => {
    while(directions.indexOf(cardinal) !== -1){
        const index = directions.indexOf(cardinal);
        directions[index] = number
    };
};

const getDrivingInstructions = (combinedLinesInArray) => {
    const directionsLineArray = combinedLinesInArray.slice(-1)[0]
    const directionsString = directionsLineArray[0].toUpperCase()
    const directionsArray = directionsString.replace(/\s+/g, ' ').split('')
    const n = 'N';
    transformCardinalsIntoNumbers(directionsArray, n, 1);
    const s = "S";
    transformCardinalsIntoNumbers(directionsArray, s, 2);
    const e = "E";
    transformCardinalsIntoNumbers(directionsArray, e, 3);
    const w = "W";
    transformCardinalsIntoNumbers(directionsArray, w, 4);
    hooverTravel(directionsArray, combinedLinesInArray);
};

module.exports = getDrivingInstructions;