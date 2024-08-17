const arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {  //배열 arr의 각 요소를 반복하여 HTML 문서에 출력합니다.
    document.write(arr[i] + "<br>");
}

let arr2 = [];  //배열 arr2에 요소를 추가하고, pop() 메서드를 사용하여 마지막 요소를 제거하고 그 값을 출력합니다.
arr2.push(11111);
arr2.push(22222);

const v = arr2.pop();
console.log(v);