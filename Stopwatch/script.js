// TimerValue
// PlayButton
// Play() / Reset()

let Playing = false
let Seconds = 0

function Play() {
  if (Playing == true) {
    Playing = false
    document.getElementById("PlayButton").textContent = "Play"
    document.getElementById("PlayButton").style.backgroundColor = "lightgreen"
  } else {
    Playing = true
    document.getElementById("PlayButton").textContent = "Pause"
    document.getElementById("PlayButton").style.backgroundColor = "lightblue"
  }
}

function Reset() {
  Playing = false
  Seconds = 0
  document.getElementById("PlayButton").textContent = "Play"
  document.getElementById("PlayButton").style.backgroundColor = "lightgreen"
}

function RemoveParent(element) {
  element.parentElement.remove()
}

// KEY 
addEventListener("keyup", function(key){
  if (key.key == "p") {
    Play()
  }
  if (key.key == "r") {
    Reset()
  }
})

// LOOP
Loop()
function Loop() {
  setTimeout(Loop, 10)
  document.getElementById("TimerValue").textContent = Seconds + "s"
  if (document.getElementById("TimerValue").textContent.length >= 13) {
    document.getElementById("TimerValue").textContent = document.getElementById("TimerValue").textContent.slice(0, -13)
  }
  if (Playing == true) {
    Seconds += 0.01
  }
}
