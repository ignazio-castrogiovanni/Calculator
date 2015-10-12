// onClick functions
var numberClicked;
var operationClicked;
var dotClicked;
var clearDisplay;

(function() {
  "use strict";
  var operationWaiting = false;
  var operation = "";
  var currNum = 0;
  var firstValue = true;
  var dotPressed = false;
  var currValue = 0;

  numberClicked = function(num) {
    // Update internal value
    if (currNum === 0) {
      currNum = num;
    } else {

      // So check if it's already decimal
      var decimalNum = (currNum % 1 !== 0);
      // Dot has just been pressed. For once we allowed the dot ;)
      if (!decimalNum && dotPressed) {
        currNum = currNum + ".";
        dotPressed = false;
      }
      currNum = Number(currNum.toString() + num.toString());
    }

    // Display current number
    updateDisplay(currNum);
  };

  operationClicked = function(operator) {

    if (currValue === 0) {
      currValue = currNum;
    }

    // If we already pressed the operation button for the first time, then we perform the previous operation.
    if (operationWaiting) {
      executeOperation(currNum);
    }
    currNum = 0;
    updateDisplay(currValue); // To Write
    operationWaiting = true;
    operation = operator;
  };

  clearDisplay = function() {
    operationWaiting = false;
    operation = "";
    currNum = 0;
    firstValue = true;
    currValue = 0;
    updateDisplay(0);
  };

  dotClicked = function() {
    if (currNum === 0) {
      return;
    }
    dotPressed = true;

    updateDisplay(currNum + ".");
  };

  function executeOperation(num) {
    switch (operation) {
      case '/':
        currValue = currValue / num;
        break;
      case 'X':
        currValue = currValue * num;
        break;
      case '-':
        currValue = currValue - num;
        break;
      case '+':
        currValue = currValue + num;
        break;
      case '%':
        currValue = currValue / 100;
        break;
      default:
    }
  }

  function updateDisplay(num) {
    var displayElem = document.getElementById("display");
    displayElem.innerHTML = num;
  }
})();
