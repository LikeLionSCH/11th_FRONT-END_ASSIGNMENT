let password = prompt('Enter the Password')

if(password.length < 6 || password.includes(" ")){
    alert("비밀번호가 너무 짧거나 공백이 있습니다.")
    console.log("비밀번호가 너무 짧거나 공백이 있습니다.")
} else {
    alert("좋은 비밀번호입니다.")
    console.log("좋은 비밀번호입니다.")
}