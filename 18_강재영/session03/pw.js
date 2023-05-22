let pw=prompt("Enter the Password");

if (pw.length<6) {
    console.log("Fail");
    alert("비밀번호가 너무 짧거나 공백이 있습니다.");
}
else if (pw.match(/\s/g)) {
    console.log("Fail");
    alert("비밀번호가 너무 짧거나 공백이 있습니다.");
}
else {
    console.log("Success");
    alert("좋은 비밀번호입니다.");
}