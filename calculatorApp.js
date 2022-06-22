// Odin exercise: Build a calculator with basic functionality, without using the eval() function

// Declare variables from document
const allKeys = document.querySelectorAll('#allKeys button')

let currentVal = document.getElementById("digits").innerText;
let operateVal = "";
let decimalAdded = false;


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
        // assign buttonVal from inner HTML value
        let buttonVal = this.innerHTML
        let buttonClass = this.className

        // add number value to numerical keys
        if (!isNaN(buttonVal)) {
            // display.setAttribute("value", display.getAttribute("value") + buttonVal)
            document.getElementById("digits").innerText += buttonVal
            currentVal = document.getElementById("digits").innerText
        }

        // implement operator functions
        if (buttonClass == "operator") {
            if (this.innerHTML == "+") { add(1, 2) }
            if (this.innerHTML == "-") { subtract(1, 2) }
            if (this.innerHTML == "x") { multiply(1, 2) }
            if (this.innerHTML == "/") { divide(1, 2) }
            if (this.innerHTML == "AC") {
                console.log(currentVal.value)
                currentVal.value = "1"
                console.log(currentVal)
            }
            if (this.innerHTML == "±") { currentVal.value *= -1 }
            if (this.innerHTML == "=") { console.log(currentVal.value) }
            if (this.innerHTML == "%") {
                // currentVal.value /= 100
                currentVal.setAttribute("value", currentVal.getAttribute("value") + "1")
                console.log(currentVal.value)
            }
        }
    }
}

// let currentVal = currentVal.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });