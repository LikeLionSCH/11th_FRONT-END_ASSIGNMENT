document.getElementById('change-color').addEventListener('click', function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    const h1 = document.getElementById('rgb-value');
    h1.textContent = `rgb(${r},${g},${b})`;
    h1.style.color = 'black';
    h1.style.textShadow = '2px 2px white, -2px -2px white, 2px -2px white, -2px 2px white';
  });