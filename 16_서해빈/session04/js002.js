let pass = prompt('Enter the Password');
if(pass.length < 6 || pass.includes(' ')){
    alert('비밀번호가 너무 짧거나 공백이 있습니다.')
} else {
    window.location.href = "4.html";
};