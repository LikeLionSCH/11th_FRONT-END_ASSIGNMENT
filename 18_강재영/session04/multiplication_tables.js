let num=prompt("알고 싶은 구구단을 입력해주세요.");

if (num<2) {
    console.log("Fail");
    alert("입력하신 수가 너무 작습니다.");
}
else if (num>9) {
    console.log("Fail");
    alert("입력하신 수가 너무 큽니다.");
}
else {
    console.log("Success");
    for (var i=1; i<=9; i++) {
        document.write(num + " * " + i + " = " + num*i + "<br>");
    }

}