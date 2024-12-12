function AddNumber(value) {
  if (document.getElementById("CalculatorValue").textContent == "?") {
    document.getElementById("CalculatorValue").textContent = ""
  }
  document.getElementById("CalculatorValue").textContent += String(value)
  document.getElementById("PreviousCalculatorValue").textContent = "???"
}

function Href(value) {
  location.href = value
}

function Clear() {
  document.getElementById("CalculatorValue").textContent = "?"
  document.getElementById("PreviousCalculatorValue").textContent = "???"
}

function Delete() {
  var CurrentText = document.getElementById("CalculatorValue").textContent
  document.getElementById("PreviousCalculatorValue").textContent = "???"
  document.getElementById("CalculatorValue").textContent = CurrentText.slice(0, -1)
  CurrentText = document.getElementById("CalculatorValue").textContent
  if (CurrentText == "") {
    document.getElementById("CalculatorValue").textContent = "?"
  }
}

function Result() {
  var CurrentString = String(document.getElementById("CalculatorValue").textContent)
  document.getElementById("PreviousCalculatorValue").textContent = CurrentString + "="
  document.getElementById("CalculatorValue").textContent = eval(CurrentString)
}

// KEY
document.addEventListener("keyup", function(key){
  if (key.key == "1" || key.key == "2" || key.key == "3" || key.key == "4" || key.key == "5" || key.key == "6" || key.key == "7" || key.key == "8" || key.key == "9" || key.key == "0" || key.key == "+" || key.key == "-" || key.key == "*" || key.key == "/" || key.key == "." || key.key == "%") {
    AddNumber(key.key)
  }
})
document.addEventListener("keyup", function(key){
  if (key.key == "Backspace") {
    Delete()
  }
})
document.addEventListener("keyup", function(key){
  if (key.key == "C" || key.key == "c") {
    Clear()
  }
})
document.addEventListener("keyup", function(key){
  if (key.key == "Enter" || key.key == "=") {
    Result()
  }
})
