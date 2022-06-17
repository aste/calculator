// Declare variables from document
const allKeys = document.querySelectorAll('#allKeys button')
let displayAttribute = document.getElementsByClassName("display")[0]
console.log(displayAttribute)

const add = (num1, num2) => (num1 + num2)
const subtract = (num1, num2) => (num1 - num2)
const multiply = (num1, num2) => (num1 * num2)
const divide = (num1, num2) => (num1 / num2)
const operate = (operator, num1, num2) => operator(num1, num2)

// Loop through all keys
for (var i = 0; i < allKeys.length; i++) {
    //add onclick event to each key
    allKeys[i].onclick = function (e) {
        // assign buttonValue from HTML value
        let buttonValue = this.innerHTML

        // add number value to numerical keys
        if (!isNaN(buttonValue)) {
            displayAttribute.setAttribute("value", displayAttribute.getAttribute("value") + buttonValue)
        }

    }

}