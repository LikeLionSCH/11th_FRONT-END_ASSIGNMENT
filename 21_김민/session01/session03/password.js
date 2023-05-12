let password  = prompt("Enter th Password")

if (password.lengh < 6 || password.search(/\s/)) {
    alert("비밀번호가 너무 짧거나 공백이 있습니다.")
    console.log("FAIL");
} else {
    alert("좋은 비밀번호입니다.")
    console.log("SUCCESS");
}