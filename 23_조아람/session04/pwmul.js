while (true) {
    let str = prompt('Enter the Password');
    let ddd = /^\S*$/;
    if(ddd.test(str) == false || str.length < 6){
        alert('비밀번호가 너무 짧거나 공백이 있습니다.');
    }
    else {
        alert('좋은 비밀번호입니다.');
        break
    }
}
let output = '';
        for(let i = 1; i <= 9; i++) {
            output += `<p>${i}단</p>`;
            for (let j = 1; j <= 9; j++) {
                output += `<p>${i} * ${j} = ${i * j}</p>`;
            }
        }
        document.getElementById("gugudan").innerHTML = output;