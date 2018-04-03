var $gameTable = ["0","2","0","4", "2","2","4","16", "2","4","8","4", "0","0","0","0"]; // ToDo -> connect with html objects
var tableSize = 4;

var moveToLeft = 0;
var moveToUp = 1;
var moveToRight = 2;
var moveToDown = 3;

var currentMove = moveToLeft;

var movePossible = true;
var moveNotPossible = false;


function gameTableRow(rowIndex) { // index from 0 to 3
  let tableRow = [];
  for (let col = 0; col < tableSize; col++) {
    tableRow.push(Number($gameTable[rowIndex*tableSize + col]));
  }
  return tableRow;
}

function gameTableCol(colIndex) { // index from 0 to 3
  let tableCol = [];
  for (let row = 0; row < tableSize; row++) {
    tableCol.push(Number($gameTable[colIndex + row*tableSize]));
  }
  return tableCol;
}

function checkMoveRow(rowIndex, direction) {
  let result = moveNotPossible;
  let row = gameTableRow(rowIndex);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  if (row.reduce(reducer) > 0) {

    let lastElement = -1;
    for (let col = 0; (col < tableSize) && (result === movePossible); col++) {
      if (row[col] === 0 || row[col] === lastElement) {
        result = movePossible;
      }
      lastElement = row[col];
    }
    
  }
  return result;
}



// test zone starts here
function getRandomMove() {  // get a random move for testing purpose
  let numberOfDirectios = 4;
  return Math.floor(Math.random() * numberOfDirectios);
}

currentMove = getRandomMove();


// console.log($gameTable);
console.log(currentMove);
for (let i = 0; i < 4; i++) console.log(gameTableRow(i) + " possible move: " + checkMoveRow(i));
// for (let i = 0; i < 4; i++) console.log(gameTableCol(i));