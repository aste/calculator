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
let operatorActive = false
let decimalAdded = false
let currentOpr = ""


// Operators
// const add = () => { operator("add") }
// const add = (currentVal, tempCalVal) => currentVal = Number(currentVal) + Number(tempCalVal)
// const subtract = (currentVal, tempCalVal) => currentVal = Number(currentVal) - Number(tempCalVal)
// const multiply = (currentVal, tempCalVal) => currentVal = Number(currentVal) * Number(tempCalVal)
// const divide = (currentVal, tempCalVal) => currentVal = Number(currentVal) / Number(tempCalVal)
// const equal = () => 

// const add = () => Number(currentVal) + Number(tempCalVal)
// const subtract = () => Number(currentVal) - Number(tempCalVal)
// const multiply = () => Number(currentVal) * Number(tempCalVal)
// const divide = () => Number(currentVal) / Number(tempCalVal)

// Operate function for all operators
const operate = (paramOperator) => {
    if (tempCalVal && currentVal != 0) {
        if (paramOperator == "add") {
            currentVal = `${Number(tempCalVal) + Number(currentVal)}`
            operatorActive = true
        }
        if (paramOperator == "subtract") {
            currentVal = `${Number(tempCalVal) - Number(currentVal)}`
            operatorActive = true
        }
        if (paramOperator == "multiply") {
            currentVal = `${Number(tempCalVal) * Number(currentVal)}`
            operatorActive = true
        }
        if (paramOperator == "divide") {
            currentVal = `${(Number(tempCalVal) / Number(currentVal))}`
            operatorActive = true
        }
        currentOpr = paramOperator
        console.log(currentOpr)
        updateDisVal(currentVal)
        tempCalVal = currentVal
        operatorActive = true

    } else {
        tempCalVal = currentVal
        currentOpr = paramOperator
        operatorActive = true
    }
    console.log(`tempCalVal is ${tempCalVal} of type ${(typeof tempCalVal)}`)
    console.log(`currentVal is ${currentVal} of type ${(typeof currentVal)}`)
    console.log(`operatorActive is ${operatorActive} of type ${(typeof operatorActive)}`)
    console.log(`currentOpr is ${currentOpr} of type ${(typeof currentOpr)}`)
    console.log("")
}

// console.log(currentVal = `${(Number("99") / Number("10"))}`)



// Loop through all keys
for (var i = 0; i < allKeys.length; i++) {
    //add onclick event to each key
    allKeys[i].onclick = function (e) {
        // Assign buttonVal from inner HTML value
        let buttonVal = this.innerHTML
        let buttonClass = this.className

        // add a number in string type to numerical keys
        if (!isNaN(buttonVal)) {
            if (operatorActive) {
                currentVal = ""
                console.log(currentVal)
                operatorActive = false
                console.log(operatorActive)
            }
            if (currentVal == "0") { currentVal = "" }
            currentVal += buttonVal
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


        if (this.innerHTML == "+") { operate("add") }
        if (this.innerHTML == "-") { operate("subtract") }
        if (this.innerHTML == "*") { operate("multiply") }
        if (this.innerHTML == "/") { operate("divide") }
        // Implement operator functions
        // if (this.innerHTML == "-") { subtract(1, 2) }
        // if (this.innerHTML == "x") { multiply(1, 2) }
        // if (this.innerHTML == "/") { divide(1, 2) }

        if (this.innerHTML == "=") { console.log(currentVal) }
    }
}