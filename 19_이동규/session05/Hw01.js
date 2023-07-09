function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeBackgroundColor() {
  var color = getRandomColor();
  document.body.style.backgroundColor = color;
  document.getElementById("colorValue").textContent = color;
}

document
  .getElementById("colorButton")
  .addEventListener("click", changeBackgroundColor);
