function AddNumber(value) {
  if (document.getElementById("CalculatorValue").textContent == "?") {
    document.getElementById("CalculatorValue").textContent = ""
  }
  document.getElementById("CalculatorValue").textContent += String(value)
  document.getElementById("PreviousCalculatorValue").textContent = "???"
  document.getElementById("CalculatorValue").classList.add("TypingAnimationClass")
  setTimeout(function() {
      document.getElementById("CalculatorValue").classList.remove("TypingAnimationClass")
  }, 100);
}

function Href(value) {
  location.href = value
}

function RemoveParent(element) {
  element.parentElement.remove()
}

function Clear() {
  document.getElementById("CalculatorValue").textContent = "?"
  document.getElementById("PreviousCalculatorValue").textContent = "???"
  document.getElementById("CalculatorValue").classList.add("TypingAnimationClass")
  setTimeout(function() {
      document.getElementById("CalculatorValue").classList.remove("TypingAnimationClass")
  }, 100);
}

function Delete() {
  var CurrentText = document.getElementById("CalculatorValue").textContent
  document.getElementById("PreviousCalculatorValue").textContent = "???"
  document.getElementById("CalculatorValue").textContent = CurrentText.slice(0, -1)
  CurrentText = document.getElementById("CalculatorValue").textContent
  if (CurrentText == "") {
    document.getElementById("CalculatorValue").textContent = "?"
  }
  document.getElementById("CalculatorValue").classList.add("TypingAnimationClass")
  setTimeout(function() {
      document.getElementById("CalculatorValue").classList.remove("TypingAnimationClass")
  }, 100);
}

function Result() {
  var CurrentString = String(document.getElementById("CalculatorValue").textContent)
  document.getElementById("PreviousCalculatorValue").textContent = CurrentString + "="
  document.getElementById("CalculatorValue").textContent = eval(CurrentString)
  if (document.getElementById("CalculatorValue").textContent == "NaN") {
    document.getElementById("CalculatorValue").textContent = "Unknown number :("
  }
  document.getElementById("CalculatorValue").classList.add("TypingAnimationClass")
  setTimeout(function() {
      document.getElementById("CalculatorValue").classList.remove("TypingAnimationClass")
  }, 100);
}

// KEY
document.addEventListener("keyup", function(key){
  if (key.key == "1" || key.key == "2" || key.key == "3" || key.key == "4" || key.key == "5" || key.key == "6" || key.key == "7" || key.key == "8" || key.key == "9" || key.key == "0" || key.key == "+" || key.key == "-" || key.key == "*" || key.key == "/" || key.key == "." || key.key == "(" || key.key == ")") {
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
document.addEventListener("keyup", function(key){
  if (key.key == "P") {
    AddNumber("3.14")
  }
  if (key.key == "I") {
    AddNumber("Infinity")
  }
})

// VERSION FEEDBACK
function LikeVersion() {
  document.getElementById("VersionFeedbackAnswer").textContent = "That's good! 🎉"
  document.getElementById("VersionFeedbackAnswer").style.transitionDuration = "0.25s"
  document.getElementById("VersionFeedbackAnswer").style.fontSize = "20px"
}
function DislikeVersion() {
  document.getElementById("VersionFeedbackAnswer").textContent = "That isn't good! Can you tell me what you didn't like on my Patreon page?"
  document.getElementById("VersionFeedbackAnswer").style.transitionDuration = "0.25s"
  document.getElementById("VersionFeedbackAnswer").style.fontSize = "20px"
}
