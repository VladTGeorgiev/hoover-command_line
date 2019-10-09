const compareDirtPatchesWithHooverTravel = require('./output.js')

const dirtPatches = (uniqueHooverPositions, combinedLinesInArray, lastHooverPosition) => {
    const dirtPatchesString = combinedLinesInArray.slice(2,-1);
    transformDirtPatchesStringIntoArray(dirtPatchesString, uniqueHooverPositions, lastHooverPosition);
}

const transformDirtPatchesStringIntoArray = (dirtPatchesString, uniqueHooverPositions, lastHooverPosition) => {
    const dirtPatchesArray = [];
    for (let i = 0; i < dirtPatchesString.length; i++){ 
        const dirtPatchPosition = []
        dirtPatchesString[i].forEach(element => {
            const elementNumbers = parseInt(element);
            dirtPatchPosition.push(elementNumbers);
        })
        dirtPatchesArray.push(dirtPatchPosition);
    }
    compareDirtPatchesWithHooverTravel(dirtPatchesArray, uniqueHooverPositions, lastHooverPosition);
};

module.exports = dirtPatches;