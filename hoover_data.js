const dirtPatches = require('./dirt_data.js')

const hooverTravel = (directionsArray, combinedLinesInArray) => {
    let roomXDimention = parseInt(combinedLinesInArray[0][0]);
    let roomYDimention = parseInt(combinedLinesInArray[0][1]);
    let hooverXPosition = parseInt(combinedLinesInArray[1][0]);
    let hooverYPosition = parseInt(combinedLinesInArray[1][1]);
    let allHooverPositionsArray = [];

    directionsArray.forEach(element => {
        let currentHooverPosition = [];

        const pushToAllHooverPositions = (hooverXPosition, hooverYPosition) => {
            currentHooverPosition.push(hooverXPosition, hooverYPosition)
            allHooverPositionsArray.push(currentHooverPosition)
            return currentHooverPosition
        }

        const checkDirection = element => {
            const movement = {
              1: function () {
                if(roomYDimention > hooverYPosition) {
                    hooverYPosition = hooverYPosition + 1
                    pushToAllHooverPositions(hooverXPosition, hooverYPosition);
                } else {
                    pushToAllHooverPositions(hooverXPosition, hooverYPosition);
                }
              },
              2: function () {
                if(hooverYPosition !== 0) {
                    hooverYPosition = hooverYPosition - 1
                    pushToAllHooverPositions(hooverXPosition, hooverYPosition);
                    }
              },
              3: function () {
                if(roomXDimention > hooverXPosition) {
                    hooverXPosition = hooverXPosition + 1
                    pushToAllHooverPositions(hooverXPosition, hooverYPosition);
                } else {
                    pushToAllHooverPositions(hooverXPosition, hooverYPosition);
                }
              },
              4: function () {
                if(hooverXPosition !== 0) {
                    hooverXPosition = hooverXPosition - 1
                    pushToAllHooverPositions(hooverXPosition, hooverYPosition);
                    }
              }
            };
            return movement[element]();
          }
        checkDirection(element);
        allHooverPositionsArray.push(currentHooverPosition);
    });
    uniqueHooverPositions(allHooverPositionsArray, combinedLinesInArray);
}

const uniqueHooverPositions = (allHooverPositionsArray, combinedLinesInArray) => {
    const lastHooverPosition = allHooverPositionsArray.slice(-1)[0]
    const cache = [];
    const uniqueHooverPositions = [];
    for( let i = 0; i < allHooverPositionsArray.length; i++ ) {
        const item = allHooverPositionsArray[i];
        const rep = item.toString();
        if (!cache[rep]) {
            cache[rep] = true;
            uniqueHooverPositions.push(item);
        }
    }
    dirtPatches(uniqueHooverPositions, combinedLinesInArray, lastHooverPosition);
}
module.exports = hooverTravel;