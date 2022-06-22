// Odin exercise: Build a calculator with basic functionality, without using the eval() function

// Variables from document
const allKeys = document.querySelectorAll('#allKeys button')


// Calculate displaywidth for sizing text later
// let docuStyle = getComputedStyle(document.body)
// let calWidth = docuStyle.getPropertyValue('--cal-width').split("px")[0]
// let displayMargin = docuStyle.getPropertyValue('--display-margin').split("px")[0]
// let displayWidth = calWidth - (2 * displayMargin)
// let fontSize = "45"
// let pixelFontSize = (fontSize) => { `${fontSize}px` }


// Update DOM
const updateDisVal = (val) => { document.getElementById("digits").innerText = val }

// Calculator variables
let currentVal = "0"
let operateVal = ""
let decimalAdded = false
let operatorActive = false

// Calculator operators

const add = (num1, num2) => console.log(num1 + num2)
const subtract = (num1, num2) => console.log(num1 - num2)
const multiply = (num1, num2) => console.log(num1 * num2)
const divide = (num1, num2) => console.log(num1 / num2)

// Operate function for all operators
const operate = (operator, num1, num2) => operator(num1, num2)



// Loop through all keys
for (var i = 0; i < allKeys.length; i++) {
    //add onclick event to each key
    allKeys[i].onclick = function (e) {
        // Assign buttonVal from inner HTML value
        let buttonVal = this.innerHTML
        let buttonClass = this.className

        // add number value to numerical keys
        if (!isNaN(buttonVal)) {
            // display.setAttribute("value", display.getAttribute("value") + buttonVal)
            if (currentVal == "0") { currentVal = "" }
            currentVal += buttonVal
            updateDisVal(currentVal)
        }
        
        // Special operators on current value
        if (this.innerHTML == "±") {
            currentVal *= -1
            updateDisVal(currentVal)
        }
        if (this.innerHTML === "AC") {
            currentVal = "0"
            operateVal = ""
            updateDisVal("0")
        }
        if (this.innerHTML == "%") {
            currentVal /= 100
            updateDisVal(currentVal)
        }


        // Implement operator functions
        // if (this.innerHTML == "+") { add(1, 2) }
        // if (this.innerHTML == "-") { subtract(1, 2) }
        // if (this.innerHTML == "x") { multiply(1, 2) }
        // if (this.innerHTML == "/") { divide(1, 2) }

        if (this.innerHTML == "=") { console.log(currentVal) }
    }
}