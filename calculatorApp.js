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
let tempCalVal = ""
let currentOpr = ""
let operatorActive = false
let decimalAdded = false


// Operators
const add = () => { tempCalVal = currentVal, operatorActive = true, currentOpr = "add" }
const subtract = () => { tempCalVal = currentVal, operatorActive = true, currentOpr = "subtract" }
const multiply = () => { tempCalVal = currentVal, operatorActive = true, currentOpr = "multiply" }
const divide = () => { tempCalVal = currentVal, operatorActive = true, currentOpr = "divide" }

// Operate function
const operate = () => {
    console.log(`tempCalVal is ${tempCalVal}, currentVal is ${currentVal}, currentOpr is ${currentOpr}`)
    if (currentVal && tempCalVal) {
        if (currentOpr == "add") { currentVal = String((Number(tempCalVal) + Number(currentVal))) }
        else if (currentOpr == "subtract") { currentVal = String((Number(tempCalVal) - Number(currentVal))) }
        else if (currentOpr == "multiply") { currentVal = String((Number(tempCalVal) * Number(currentVal))) }
        else if (currentOpr == "divide") { currentVal = String((Number(tempCalVal) / Number(currentVal))) }
    }
    updateDisVal(currentVal)
    tempCalVal = ""
    console.log(`tempCalVal is ${tempCalVal} currentVal is ${currentVal}, currentOpr is ${currentOpr}`)

}


// console.log(String((Number(52) - Number(33))))

// Loop through all keys
for (var i = 0; i < allKeys.length; i++) {
    //add onclick event to each key
    allKeys[i].onclick = function (e) {
        // Assign buttonVal from inner HTML value
        let buttonVal = this.innerHTML

        // add a number in type to numerical key
        if (!isNaN(buttonVal)) {
            if (operatorActive) {
                currentVal = ""
                operatorActive = false
            }
            if (currentVal == "0") { currentVal = "" }
            currentVal += buttonVal
            console.log(currentVal)
            updateDisVal(currentVal)
        }

        // Instant operators on current value
        if (this.innerHTML == "±") {
            currentVal *= -1
            updateDisVal(currentVal)
        }
        if (this.innerHTML === "AC") {
            currentVal = "0"
            tempCalVal = ""
            operatorActive = false
            decimalAdded = false
            currentOpr = ""
            updateDisVal(currentVal)
        }
        if (this.innerHTML == "%") {
            currentVal /= 100
            updateDisVal(currentVal)
        }

        // Operators with two inputs
        if (this.innerHTML == "+") { add() }
        if (this.innerHTML == "-") { subtract() }
        if (this.innerHTML == "x") { multiply() }
        if (this.innerHTML == "/") { divide() }
        if (this.innerHTML == "=") { operate() }

    }
}