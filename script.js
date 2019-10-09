const fs = require('fs');
const getDrivingInstructions = require('./directions_data')

fs.readFile('input.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
    
    let allLines = [];
    allLines = data.trim().split(/\n/);

    const combinedLinesInArray = [];
    for (let i = 0; i < allLines.length; i++){ 
        let individualLine = [];
        individualLine = allLines[i].replace(/\s+/g, ' ').split(' ');
        combinedLinesInArray.push(individualLine);
    };
    getDrivingInstructions(combinedLinesInArray);
});