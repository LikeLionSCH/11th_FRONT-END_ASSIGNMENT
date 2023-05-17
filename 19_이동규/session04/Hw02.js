let pw = prompt("Enter the password");
let blank = " ";

if ((pw.length < 6) || (pw.includes(blank)))
{
    alert("비밀번호가 너무 짧거나 공백이 있습니다");
}

else
{
    alert("좋은 비밀번호 입니다.");
    window.location.href = 'Hw01.html';
}

