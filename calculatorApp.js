// Odin exercise: Build a calculator with basic functionality, without using the eval() function

// Declare variables from document
const allKeys = document.querySelectorAll('#allKeys button')
let displayVal = document.getElementById("display").value
let calVal = 0;


// Declare operators and operate functions
const add = (num1, num2) => console.log(num1 + num2)
const subtract = (num1, num2) => console.log(num1 - num2)
const multiply = (num1, num2) => console.log(num1 * num2)
const divide = (num1, num2) => console.log(num1 / num2)
const operate = (operator, num1, num2) => operator(num1, num2)

// Loop through all keys
for (var i = 0; i < allKeys.length; i++) {
    //add onclick event to each key
    allKeys[i].onclick = function (e) {
        // assign buttonVal from HTML value
        let buttonVal = this.innerHTML
        let buttonClass = this.className

        // add number value to numerical keys
        if (!isNaN(buttonVal)) {
            // display.setAttribute("value", display.getAttribute("value") + buttonVal)
            displayVal = displayVal + buttonVal
            console.log(displayVal);
        }

        // implement operator functions
        if (buttonClass == "operator") {
            if (this.innerHTML == "+") { add(1, 2) }
            if (this.innerHTML == "-") { subtract(1, 2) }
            if (this.innerHTML == "x") { multiply(1, 2) }
            if (this.innerHTML == "/") { divide(1, 2) }
            if (this.innerHTML == "AC") {
                console.log(displayVal.value)
                displayVal.value = "1"
                console.log(displayVal)
            }
            if (this.innerHTML == "±") { displayVal.value *= -1 }
            if (this.innerHTML == "=") { console.log(displayVal.value) }
            if (this.innerHTML == "%") {
                // displayVal.value /= 100
                displayVal.setAttribute("value", displayVal.getAttribute("value") + "1")
                console.log(displayVal.value)
            }
        }
    }
}