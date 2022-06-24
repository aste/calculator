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
const updateDisVal = (val) => {
    let valRound = Math.round(val * 100) / 100
    document.getElementById("digits").innerText = valRound
    // console.log(document.getElementById("digits").innerText.measureText(text).width)
}

// Calculator variables
let currentVal = "0"
let tempCalVal = ""
let currentOpr = ""
let oprJustAdded = false
let decimalAdded = false


// Operators
const add = () => {
    if (tempCalVal && currentOpr) { operate() }
    currentOpr = "add"
    oprJustAdded = true
    console.log(`1 tempCalVal is ${tempCalVal} currentVal is ${currentVal}, currentOpr is ${currentOpr}`)
}
const subtract = () => {
    if (tempCalVal && currentOpr) { operate() }
    currentOpr = "subtract"
    oprJustAdded = true
    console.log(`2 tempCalVal is ${tempCalVal} currentVal is ${currentVal}, currentOpr is ${currentOpr}`)
}
const multiply = () => {
    if (tempCalVal && currentOpr) { operate() }
    currentOpr = "multiply"
    oprJustAdded = true
    console.log(`3 tempCalVal is ${tempCalVal} currentVal is ${currentVal}, currentOpr is ${currentOpr}`)
}
const divide = () => {
    if (tempCalVal && currentOpr) { operate() }
    currentOpr = "divide"
    oprJustAdded = true
    console.log(`4 tempCalVal is ${tempCalVal} currentVal is ${currentVal}, currentOpr is ${currentOpr}`)
}

const equal = () => {
    if (tempCalVal && currentOpr) { operate() }
    currentOpr = "equal"
    oprJustAdded = false
    console.log(`4 tempCalVal is ${tempCalVal} currentVal is ${currentVal}, currentOpr is ${currentOpr}`)
}

// Operate function
const operate = () => {
    if (currentOpr == "add") { currentVal = String((Number(tempCalVal) + Number(currentVal))) }
    if (currentOpr == "subtract") { currentVal = String((Number(tempCalVal) - Number(currentVal))) }
    if (currentOpr == "multiply") { currentVal = String((Number(tempCalVal) * Number(currentVal))) }
    if (currentOpr == "divide") { currentVal = String((Number(tempCalVal) / Number(currentVal))) }
    updateDisVal(currentVal)
    tempCalVal = ""
}


// Loop through all keys
for (var i = 0; i < allKeys.length; i++) {
    //add onclick event to each key
    allKeys[i].onclick = function (e) {
        // Assign buttonVal from inner HTML value
        let buttonVal = this.innerHTML

        // add a number in type to numerical key
        if (!isNaN(buttonVal)) {
            if (oprJustAdded) {
                tempCalVal = currentVal
                currentVal = ""
                oprJustAdded = false
            }
            if (currentVal == "0") { currentVal = "" }
            if (currentOpr == "equal") { currentVal = "", currentOpr = "" }
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
            oprJustAdded = false
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
        if (this.innerHTML == "=") { equal() }

    }
}