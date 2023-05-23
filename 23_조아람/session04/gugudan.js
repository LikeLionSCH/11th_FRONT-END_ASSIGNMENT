let output = '';
        for(let i = 1; i <= 9; i++) {
            output += `<p>${i}단</p>`;
            for (let j = 1; j <= 9; j++) {
                output += `<p>${i} * ${j} = ${i * j}</p>`;
            }
        }
        document.getElementById("gugudan").innerHTML = output;