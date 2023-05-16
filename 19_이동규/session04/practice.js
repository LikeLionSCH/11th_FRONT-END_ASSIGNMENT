// prctice of Array
const planets=['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter'];
planets.shift();    // 첫번째 요소인 The Moon 제거
planets.push('Saturn'); // 배열의 맨 끝에 Saturn 추가
planets.unshift('Mecury'); // 배열의 첫 번째 요소로 Mercury 추가
console.log(planets); // console 출력

// practice of Nested Array
const airplaneSeats =
[
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
]
airplaneSeats[3][1] = 'Hugo';
console.log(airplaneSeats);