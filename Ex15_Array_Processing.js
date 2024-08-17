function myFunc() {
    const data = ["A", "B", "C", "D"];
    let x = document.getElementById("demo");
    x.innerHTML = Array.isArray(data); // data가 배열인지 확인
}
myFunc();

const numbers = [45, 5, 8, 16, 25];
function myFunc2(value, index, array) {
    console.log(value + " / " + index + " / " + array);
}
numbers.forEach(myFunc2);   // numbers 배열의 각 요소에 대해 myFunc2 함수를 호출


const numbers2 = [65, 44, 12, 4];
const newarray = numbers2.map(function(value, index, array) {
    return value * 10 + index;
});
console.log(newarray); // [650, 440, 120, 40]


let evens = [2, 4, 6, 8];
// 화살표 함수 사용
let odds = evens.map(value => value + 1); // 기존 배열의 각 요소에 1을 더함
console.log(odds); // [3, 5, 7, 9]


let arr = [];
evens.forEach(value => {
    if (value % 2 === 0) {
        arr.push(value); // 2로 나눈 나머지가 0인 경우만 배열에 추가
    }
});
console.log(arr); // [2, 4, 6, 8]


let evens2 = [2, 4, 6, 8];
let filteredEvens = evens2.filter(number => number % 2 === 0);
console.log(filteredEvens); // [2, 4, 6, 8]


const users = [
    { name: "홍길동", age: 25 },
    { name: "김유신", age: 30 },
    { name: "아무개", age: 10 }
];
// 이름만 추출하여 새로운 배열 생성
const namesarray = users.map(user => user.name);
console.log(namesarray); // ["홍길동", "김유신", "아무개"]


const numbers3 = [1, 2, 3, 4, 5];
const evenoddarray = numbers3.map(number => number % 2 === 0 ? 'even' : 'odd');
console.log(evenoddarray); // ["odd", "even", "odd", "even", "odd"]