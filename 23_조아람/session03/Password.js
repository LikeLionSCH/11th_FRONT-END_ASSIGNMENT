let str = prompt('Enter the Password');
let ddd = /^\S*$/;
if(ddd.test(str) == false || str.length < 6){
    alert('비밀번호가 너무 짧거나 공백이 있습니다.');
}
else {
    alert('좋은 비밀번호입니다.');
}