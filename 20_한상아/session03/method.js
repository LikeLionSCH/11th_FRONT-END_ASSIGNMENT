//string:
const str = "Do You Want to Build a Snowman?";
const str2 = "apple banana orange"
const str3 = " Hello, World ";

//length - 문자열 길이 반환
var string = "abcde";
console.log(string.length); //5

// indexOf - 문자열에서 특정 문자열을 찾고, 검색된 문자열이 '첫번째'로 나타나는 위치를 리턴. 없으면 '-1'
console.log(str.indexOf("You")); //3

//includes - 문자열이 특정 문자열을 포함하는지 확인
console.log(str.includes("Snowman")); //true

//split - 문자열을 일정한 구분자로 잘라서 배열로 반환
console.log(str2.split(" ")); //(3) ['apple', 'banana', 'orange']

//substring - ("시작위치","종료위치") or ("시작위치")해서 특정구간의 문자열을 잘라서 반환
console.log(str.substring(2, 5)); //Yo

//substr - ("시작위치","길이") 시작 위치부터 해당 길이만큼 문자열을 잘라서 반환
console.log(str.substr(5, 5)); //u Wan

//trim - 문자열 양 끝의 공백을 제거
console.log(str3.trim()); //Hello, World

//toLowerCase - 문자열을 소문자로 변환
console.log(str.toLowerCase()); //do you want to build a snowman?

//toUpperCase - 문자열을 대문자로 변환
console.log(str3.toUpperCase()); // HELLO, WORLD

//replace - 특정 문자, 문자열을 다른 문자, 문자열로 치환
console.log(str2.replace("apple", "strawberry")); //strawberry banana orange

//number:
//Number - 문자열을 숫자로 변환, 변환할 수 없는 값인 경우 NaN 반환
// - 숫자가 먼저 오는 숫자와 텍스트 혼합 변수는 NaN 출력
// - 소수점의 결과를 다 나타내고 싶을 때 사용
// - 0이 먼저 시작한 숫자는 처음 0을 제외하고 출력
const num = Number("6.25");
console.log(num); //6.25

//parseInt - 문자열을 숫자로 변환, 숫자가 먼저 오는 숫자와 텍스트 혼합 변수는 숫자 출력
// - 0이 먼저 시작한 숫자는 처음 0을 제외하고 출력
const num2 = parseInt("123text");
console.log(num2); //123

//math:
//max - 가장 큰 값을 반환
console.log(Math.max(14, 25, 30, 5, 9)); //30

//min - 가장 작은 값을 반환
console.log(Math.min(14, 25, 30, 5, 9)); //5

//floor - 숫자의 소수점 이하를 버리고 반환
console.log(Math.floor(3.141592)); //3

//round - 숫자의 소수점 이하를 반올림하고 반환
console.log(Math.round(6.7582)); //7

//random - 0이상 1미만의 구간에서 난수 생성
console.log(Math.random());

//sqrt - 숫자의 루트 값을 반환, 음수이면 NaN 반환
console.log(Math.sqrt(100)); //10
