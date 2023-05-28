function getElement(selector) {
    return document.querySelector(selector);
  }
  
  function changeColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    var rgbText = `RGB(${red}, ${green}, ${blue})`;
    getElement('h1').textContent = rgbText;
  }
  
  getElement('.color-btn').addEventListener('click', changeColor);