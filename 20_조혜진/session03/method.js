// String
// length: 문자열의 길이를 반환
const str = "Hello, world!";
console.log(str.length); // 13

// indexOf: 문자열에서 특정 문자 또는 문자열의 인덱스를 반환 해당 문자열이 없으면 -1을 반환
const str2 = "The quick brown fox jumps over the lazy dog";
console.log(str2.indexOf("fox")); // 16

// includes: 문자열이 특정 문자 또는 문자열을 포함하는지 여부를 반환
const str3 = "The quick brown fox jumps over the lazy dog";
console.log(str3.includes("fox")); // true

// split: 문자열을 특정 구분자를 기준으로 나누어 배열로 반환
const str4 = "apple, banana, orange";
console.log(str4.split(", ")); // ["apple", "banana", "orange"]

// substring: 문자열에서 특정 구간의 문자열을 추출
const str5 = "Hello, world!";
console.log(str5.substring(0, 5)); // "Hello"

// substr: 문자열에서 시작 위치와 문자 수를 지정하여 문자열을 추출
const str6 = "Hello, world!";
console.log(str6.substr(0, 5)); // "Hello"

// trim: 문자열에서 양 끝의 공백을 제거
const str7 = " Hello, world! ";
console.log(str7.trim()); // "Hello, world!"

// toLowerCase: 문자열을 소문자로 변환
const str8 = "Hello, World!";
console.log(str8.toLowerCase()); // "hello, world!"

// toUpperCase: 문자열을 대문자로 변환
const str9 = "Hello, World!";
console.log(str9.toUpperCase()); // "HELLO, WORLD!"

// replace: 문자열에서 특정 문자 또는 문자열을 다른 문자 또는 문자열로 대체
const str10 = "Hello, world!";
console.log(str10.replace("world", "everyone")); // "Hello, everyone!"

// Number
// Number: 주어진 값을 숫자로 변환
const num = Number("3.14");
console.log(num); // 3.14

// parseInt: 문자열을 정수로 변환
const num2 = parseInt("123");
console.log(num2); // 123

// math
// max: 주어진 숫자 중 가장 큰 값을 반환
console.log(Math.max(1, 2, 3)); // 3

// min: 주어진 숫자 중 가장 작은 값을 반환
console.log(Math.min(1, 2, 3)); // 1

// floor: 숫자의 소수점 이하를 버립니다.
console.log(Math.floor(3.14)); // 3

// round: 숫자를 반올림
console.log(Math.round(3.5)); // 4

// random: 0 이상 1 미만의 난수를 반환
console.log(Math.random()); // 0 이상 1 미만의 임의의 숫자

// sqrt: 숫자의 제곱근을 반환
console.log(Math.sqrt(16)); // 4