//String

//length - 길이 반환 
var a = [1,2,3,4,5];
console.log(a.length); //5
//indexOf - 특정 문자 위치 찾기
var str2 = 'abab'
console.log(str.indexOf("a")); // 0
//includes - 배열에 특정 값이 포함되어 있는지 
var str3 = "This is my car."
console.log(str3.includes('car')); //true
//split - 문자열을 일정한 구분자로 잘라서 배열로 저장
var str4 = "apple banana orange"
console.log(str4.split(",")); //["apple","banana","orange"]
//substring - 시작 위치에서 종료 위치까지 문자열 자르기
var str5 = "Hello"
console.log(str5.substring(0,3)); //"Hel"
//substr - 시작 위치부터 해당 길이만큼 문자열 자르기 
var str6 = "Hello"
console.log(str6.substring(0,3)); //"Hel"
//trim - string 문자열의 양끝 공백 제거
var str7 = '  test  ';
console.log(str7.trim()); //"test"
//toLowerCase - string 문자열을 소문자로 변환
var ABC = "ABC"
console.log(ABC.toLowerCase()); //abc
//toUpperCase - string 문자열을 대문자로 변환
var abc = "abc" //ABC
console.log(abc.toUpperCase());
//replace - 문자열 치환하기
var str8 = 'apple, banana, orange, banana';
var str_rp = str8.replace(/banana/g,'tomato')
console.log(str_rp);


//Number

//number - 문자열을 숫자로 변환
var a2 = number("100");
console.log(a2); //100
//parselnt - 문자열을 정수로 변환 
var a3 = parseInt("10");
console.log(a3); //10

//math

//max - 배열의 최대값
console.log(Math.max(100,200,300)); //300
//min - 배열의 최소값
console.log(Math.min(100,200,300)); //100
//floor - 소수점 이하를 버림
console.log(Math.floor(3.14)); //3
//round - 소수점 이하를 반올림
console.log(Math.min(1.5)); //2 
//random - 난수 생성하기 (0~1구간)
console.log(Math.random());
//sqrt - 제곱근 
console.log(Math.sqrt(64)); //8