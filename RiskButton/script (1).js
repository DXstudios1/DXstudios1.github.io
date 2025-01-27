let MaxClicks = localStorage.getItem("MaxClicks")
if (MaxClicks == null) {
  MaxClicks = 0
  localStorage.setItem("MaxClicks", 0)
}

let Clicks = 0
let RandomNumber = 1
let Percentage = 0

function Risk() {
  RandomNumber = Math.random()
  if (RandomNumber >= Percentage) {
    Clicks += 1
    Percentage = Clicks / 100
  } else {
    Clicks = 0
    Percentage = Clicks / 100
  }
  
  if (Clicks >= MaxClicks) {
    MaxClicks = Clicks
    localStorage.setItem("MaxClicks", MaxClicks)
  }
  
  if (Percentage >= 0.10 && Percentage < 0.25) {
    document.getElementById("LoseChance").style.color = "#BA4801"
  } else if (Percentage >= 0.25) {
    document.getElementById("LoseChance").style.color = "red"
  } else {
    document.getElementById("LoseChance").style.color = "black"
  }
  
  document.getElementById("MaxClicks").textContent = "Max: " + MaxClicks
  document.getElementById("LoseChance").textContent = "Chance of losing all: " + Percentage * 100 + "%"
  document.getElementById("RiskButton").textContent = Clicks
}