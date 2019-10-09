const compareDirtPatchesWithHooverTravel = (dirtPatchesArray, uniqueHooverPositions, lastHooverPosition) => {
    let numberOfDirtPatchesCleaned = 0;
    for(let i = 0; i < uniqueHooverPositions.length; i++){
        for(let y = 0; y < dirtPatchesArray.length; y++){
          if(uniqueHooverPositions[i][0] === dirtPatchesArray[y][0] && uniqueHooverPositions[i][1] === dirtPatchesArray[y][1]){
            numberOfDirtPatchesCleaned = numberOfDirtPatchesCleaned + 1
          }
        }
    }
    output(lastHooverPosition, numberOfDirtPatchesCleaned)
};

const output = (lastHooverPosition, numberOfDirtPatchesCleaned) => {
    console.log(lastHooverPosition.toString().replace(/,/g, ' '))
    console.log(numberOfDirtPatchesCleaned.toString())
};

module.exports = compareDirtPatchesWithHooverTravel;