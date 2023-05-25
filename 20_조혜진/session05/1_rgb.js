function changeColor() {
    // 랜덤한 RGB 값 생성
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // 배경색 변경
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    // h1 태그의 텍스트 업데이트
    var rgb = document.getElementById("rgb");
    rgb.innerText = "rgb(" + r + "," + g + "," + b + ")";
}