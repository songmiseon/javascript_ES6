const dataObj = {
    language: "javascript",
    coding: function() {
        console.log('Hello World Coding');
    }
};

let language = 'java';
const dataObj2 = {
    language  // 속성 이름 축약 (language: language)
};
console.log(dataObj2); // { language: "java" }

const dataObj3 = {
    coding() {   // 축약된 메서드 문법
        console.log("hello world coding");
    }
};
dataObj3.coding(); // 호출 결과: "hello world coding"