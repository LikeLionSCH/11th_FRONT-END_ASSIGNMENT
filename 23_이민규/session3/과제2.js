let a = prompt("Enter th Password")

if (a.length < 6 && a.includes ('') ){
alert('비밀번호가 너무 짧거나 공백이 있습니다.')
}
else {
alert('좋은 비밀번호 입니다.')
}