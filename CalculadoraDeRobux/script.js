let RobuxValue = 29.90 / 400

function RobuxToBRL() {
  document.getElementById("RobuxToBRL").textContent = "R$" + document.getElementById("RobuxInput").value * RobuxValue 
}

function BRLToRobux() {
  document.getElementById("BRLToRobux").textContent = document.getElementById("BRLInput").value / RobuxValue + " robux"
}