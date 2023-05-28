function change() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

    var rgb = document.getElementById("rgb")
    rgb.innerText = `rgb(${r},${g},${b})`
}


