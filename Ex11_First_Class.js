const add = function() {};  //add라는 변수에 익명 함수를 할당합니다.

const cal = {add};
const cals = [];    //cal 객체의 속성으로 add 함수를 저장합니다.

function hello(){
    console.log("my call");
}

function greeting(message, name){
    message();
}
greeting(hello, "script");  //hello 함수를 greeting 함수에 매개변수로 전달하여 호출합니다.

function world() {
    return () => { console.log("function return"); }   //world 함수는 다른 함수를 반환합니다.
}