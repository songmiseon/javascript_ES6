let foo = function(){   //일반 함수 표현식입니다.
    console.log("foo함수 호출");
};
foo();

let bar = () => console.log("bar 함수 호출");   //화살표 함수로 간결하게 작성된 예제입니다.
bar();

let foo2 = x => x;  //매개변수가 1개인 경우, 중괄호와 return 키워드를 생략할 수 있습니다.
let data = foo2(100);  
console.log("data: " + data);

hello = val => "hello" + val;   //문자열을 반환하는 화살표 함수 hello를 정의하고, 그 값을 HTML 요소에 출력합니다.
const value = hello("world");
console.log(value);     
document.getElementById("demo").innerHTML = value;

let foo3 = (a, b) => a + b; //두 개의 매개변수를 받아서 합을 반환하는 화살표 함수입니다.
let value2 = foo3(10, 20);
console.log(value2);

let foo4 = (a, b) => {      //블록 {}을 사용하여 함수 내부에서 변수를 선언하고, return문으로 결과를 반환합니다.
    let c = 100;
    return a + b + c;
};
const value3 = foo4(111, 222);
console.log(value3);