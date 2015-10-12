var operationWaiting = false;
var operation = "";
var currNum = 0;
var firstValue = true;
var dotPressed = false;
var currValue = 0;

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function percent(a) {
  return a/100;
}

function numberClicked(num) {



  // Update internal value
  if(currNum == 0) {
    currNum = num;
  } else {

    // So check if it's already decimal
    var decimalNum = (currNum % 1 != 0);
    console.log("Decimal num? " + decimalNum);
    // Dot has just been pressed. For once we allowed the dot ;)
    if(!decimalNum && dotPressed) {
      currNum = currNum + ".";
      dotPressed = false;
    }
    currNum = Number(currNum.toString() + num.toString());
    console.log("current number: " + currNum);
  }

  // Show internal value
  console.log("currValue: " + currValue);
  console.log("currNum: " + currNum);

  // Display current number
  updateDisplay(currNum);
}

function operationClicked(operator) {

  if(currValue == 0) {
      currValue = currNum;
    }

  // If we already pressed the operation button for the first time, then we perform the previous operation.
  if(operationWaiting) {
    executeOperation(currNum);
  }
  currNum = 0;
  updateDisplay(currValue); // To Write
  operationWaiting = true;
  operation = operator;
}

function clearDisplay() {
  operationWaiting = false;
  operation = "";
  currNum = 0;
  firstValue = true;
  currValue = 0;
  updateDisplay(0);
}
function dotClicked() {
  if(currNum == 0) {
    return;
  }
  dotPressed = true;
  console.log(".");

  updateDisplay(currNum + ".");
}
function equalClicked() {
  alert("=");
}

function executeOperation(num) {
  console.log("operation: " + currValue + " " + operation + " " + num);

  switch(operation) {
    case '/': {
        currValue = divide(currValue, num);
      } break;
    case 'X': {
      currValue = multiply(currValue, num);
    } break;
    case '-': {
      currValue = subtract(currValue, num);
    } break;
    case '+': {
      currValue = add(currValue, num);
    } break;
    case '%': {
      currValue = percent(currValue);
    } break;
    case '=': {
      updateDisplay(currValue);
    } break;

    default:
  }
}
function updateDisplay(num) {
  var displayElem = document.getElementById("display");
  display.innerHTML = num;
}
