//length 문자열 길이
var a = '멋쟁이사자';
console.log(a.length);
//5

//indexOf 지정된요소 찾기
var a = ['멋', '쟁','이','시','자']
console.log(a.indexOf('이'));
//2

//includes 특정값 반환
const a = ['멋', '쟁','이','시','자'];
console.log(a.includes('이'));
//true

//split 하위 문자열을 배열에 넣고 배열을 반환
const str = '멋 쟁 이 사 자 화 이 팅';
const a= str.split(' ');
console.log(a[3]);
//사

//substring 인덱스에서 인덱스까지 반환
const a = '멋쟁이사자';
console.log(a.substring(1, 4));
//쟁이사

//trim 공백을 제거하고 원본 문자열은 수정하지 않고 문자열 반환
const a = '  멋쟁이사자  ';
console.log(a.trim());
//멋쟁이사자

//toLowewCase 문자열을 소문자로 반환
const a = 'LeeMinGyu';
console.log(a.toLowerCase());
//leemingyu

//toUpperCase 문자열을 대문자로 반환
const a = 'LeeMinGyu';
console.log(a.toUpperCase());
//LEEMINGYU

//replace 일부또는 모든 부분이 새로운 문자열로 반환
const p = 'Lee Gyu Gyu';
console.log(p.replace('Gyu', 'Min'));
//Lee Min Gyu

//Number 문자열을 숫자로 반환
var a =number("314");
console.log(a);
//314

//parselnt 문자열을 정수로 반환
var a =parseInt("3141592");
console.log(a);
//3141592

//max 가장 큰 값을 반환
console.log(Math.max(1, 3, 5, 7, 9));
//9

//min 가장 작은 값을 반환
console.log(Math.min(1, 3, 5, 7, 9));
//1

//floor 내림한 값으로 반환
console.log(Math.floor(3.141592));
//3

//round 반올림한 값으로 반환
console.log(Math.round(3.9876));
//4

//random 부동소수점 의사 난수를 반환
console.log(Math.random());
//0~1중 값

//sqrt 제곱근을 반환
console.log(Math.sqrt(9));
//3

