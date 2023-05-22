let pw = prompt("Enter the password")

if (pw.length < 6 || pw.includes(" ")) {
    alert("비밀번호가 너무 짧거나 공백이 있습니다.")
    console.log("fail")
}
else {
    alert("좋은 비밀번호입니다.")
    console.log("success")
}