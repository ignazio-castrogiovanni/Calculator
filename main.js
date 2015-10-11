var operationWaiting = false;
var operation = "";
var firstValue = true;
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
  alert("io--");
  return a - b;
}

function numberClicked(num) {
  var displayElem = document.getElementById("display");
  display.innerHTML = num;
  if(operationWaiting) {
    executeOperation(num); // TO WRITE
    operationWaiting = false;
  }
  if(firstValue) {
    alert("io");
    firstValue = false;
    currValue = Number(num);
  }
}

function operationClicked(operator) {
  //alert(operator);
  updateDisplay(); // To Write
  operationWaiting = true;
  operation = operator;
}

function dotClicked() {
  alert(".");
}
function equalClicked() {
  alert("=");
}

function executeOperation(num) {
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
    case '=': {
      updateDisplay();
    } break;
    default:
  }
}
function updateDisplay() {
  var displayElem = document.getElementById("display");
  display.innerHTML = currValue;
}
