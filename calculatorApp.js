// Odin exercise: Build a calculator with basic functionality, without using the eval() function

// Variables from document
const allKeys = document.querySelectorAll('#allKeys button')


// let text = currentVal

// let c = document.getElementById("digits")
// let ctx = c.getContext("2d")
// console.log(ctx)

// Update the DOM, specifically the display value
const updateDisVal = (val) => {
    let valRound = Math.round(val * 10000) / 10000
    let commaVal = valRound.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    document.getElementById("digits").innerText = commaVal
}

// Calculator variables
let currentVal = "0"
let tempCalVal = ""
let currentOpr = ""
let oprJustAdded = false

// Operators
const add = () => {
    if (tempCalVal && currentOpr) { operate() }
    currentOpr = "add"
    oprJustAdded = true
}
const subtract = () => {
    if (tempCalVal && currentOpr) { operate() }
    currentOpr = "subtract"
    oprJustAdded = true
}
const multiply = () => {
    if (tempCalVal && currentOpr) { operate() }
    currentOpr = "multiply"
    oprJustAdded = true
}
const divide = () => {
    if (tempCalVal && currentOpr) { operate() }
    currentOpr = "divide"
    oprJustAdded = true
}
const equal = () => {
    if (tempCalVal && currentOpr) { operate() }
    currentOpr = "equal"
    oprJustAdded = false
}
const addDecimal = () => {
    if (!/[.]/g.test(String(currentVal))) { currentVal += "." }
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

        // add functionality to numerical keys, append the associated number to the display when pressed
        if (!isNaN(buttonVal)) {
            if (oprJustAdded) { tempCalVal = currentVal, currentVal = "", oprJustAdded = false }
            if (currentVal == "0") { currentVal = "" }
            if (currentOpr == "equal") { currentVal = "", currentOpr = "" }
            currentVal += buttonVal
            updateDisVal(currentVal)
        }

        // Instant operators, operating on currentVal
        if (this.innerHTML == "±") { currentVal *= -1, updateDisVal(currentVal) }
        if (this.innerHTML == "%") { currentVal /= 100, updateDisVal(currentVal) }
        if (this.innerHTML == ",") { addDecimal() }
        if (this.innerHTML === "AC") {
            currentVal = "0"
            tempCalVal = ""
            oprJustAdded = false
            currentOpr = ""
            updateDisVal(currentVal)
        }

        // Operators operating on both currentVal and tempCalVal
        if (this.innerHTML == "+") { add() }
        if (this.innerHTML == "-") { subtract() }
        if (this.innerHTML == "x") { multiply() }
        if (this.innerHTML == "/") { divide() }
        if (this.innerHTML == "=") { equal() }
    }
}