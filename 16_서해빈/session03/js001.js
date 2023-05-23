console.log('hi');

//String
const str01 = 'This is String';
console.log(str01);
//문자열
//This is String


//length
console.log(str01.length);
//문자열 숫자 계산
//14


//indexOf
console.log(str01.indexOf('This'));
console.log(str01.indexOf('g'));
console.log(str01.indexOf('i'));
console.log(str01.indexOf('ya'));
//해당되는 문자열 어디에 위치하는지, 해당사항 없으면 -1, 가장 먼저 발견되는 위치 반환
//0
//13
//2
//-1


//includes
console.log(str01.includes('This'));
console.log(str01.includes('this'));
console.log(str01.includes('ng'));
console.log(str01.includes('kan'));
//문자열을 포함하는지 확인, 대문자 구분함, 단어의 일부 문자열도 포함. true, false로 반환
//true
//false
//true
//false


//split
console.log(str01.split(''));
console.log(str01.split(' '));
console.log(str01.split('i'));
console.log(str01.split('z'));
console.log(str01.split('is'));
//문자열을 무엇으로 구분할 것인지, ''일 경우 각각을 반환
//' ', 띄어쓰기일 경우 띄어쓰기로 구분하여 반환
//'i', 일부 문자가 포함되면 그 문자를 제외하고 이를 기준으로 각각 구분하여 반환
//'z', 없는 문자가 있다면 전체를 반환
//'is', 'i'의 경우와 같음.
// [
//     'T', 'h', 'i', 's',
//     ' ', 'i', 's', ' ',
//     'S', 't', 'r', 'i',
//     'n', 'g'
//   ]
//   [ 'This', 'is', 'String' ]
//   [ 'Th', 's ', 's Str', 'ng' ]
//   [ 'This is String' ]


//substring
console.log(str01.substring(3));
console.log(str01.substring(2, 9));
console.log(str01.substring(1, 4, 7));
//특정 위치부터(x), 특정 구간(x, y)의 문자열 반환
//(x, y, z)에서 z는 아무런 의미가 없다.
// s is String (3 -)
// is is S (2 - 9)
// his (1 - 4)


//substr
console.log(str01.substr(2, 4));
//(x, y)에서 x부터 y까지만큼 문자열 반환
//is i



//trim
const str02 = ' Trim ';
console.log(str02.trim());
//' Trim '에서 문자열 앞뒤의 공백 제거
//Trim


//toLowerCase
//toUpperCase
console.log(str02.toLowerCase());
console.log(str02.toUpperCase());
//toLowerCase는 소문자로, toUpperCase는 대문자로 만듦
//trim
//TRIM


//replace
console.log(str01.replace('String', 'Number'));
console.log(str01.replace('i', 'e'));
console.log(str01.replace('s', 'o', 's', 'z'));
//(x, y)에서 x의 문자열을 y로 변경,
//문자열에 다수의 x가 있을 경우 가장 앞에 있는 x만 변경
//(x, y, p, q)에서 x, y 뒤에 p, q가 있어도 적용 안 됨.
// This is Number
// Thes is String
// Thio is String


//Number
const num01 = Number(10);
const num02 = Number(3.1415926535);
console.log(num01);
console.log(num02);
//숫자
//10
//3.1415926535


//parseInt
const num03 = parseInt('4x');
const num04 = parseInt('010-3387-6209');
console.log(num03);
console.log(num04);
//문자열에 포함된 숫자를 반환
//0이 앞에 있으면 표시 안 함.
//문자열의 가장 앞에 있는 숫자만 반환, 사이에 문자열이 있으면 거기까지만 반환.
//4
//10


//Math
//max
const arr01 = [10, 52, 62, 30, 97, 2];
console.log(Math.max(...arr01));
//최대
// 97


//min
console.log(Math.min(...arr01));
//최소
//2


//floor
console.log(Math.floor(5.77));
//소수점 제외
//5


//round
console.log(Math.round(3.14));
//반올림
//3


//random
console.log(Math.random());
//RAND
//0.13010201593325244


//sqrt
console.log(Math.sqrt(num01));
//제곱근
//3.1622776601683795