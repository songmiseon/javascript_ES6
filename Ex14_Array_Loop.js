let arr = ['A', 'B', 'C'];  //배열 arr의 인덱스를 사용하여 for...in 루프를 돌며 각 요소를 콘솔에 출력합니다.
for(let index in arr){
    console.log(arr[index]);
}

for(let value of arr){  //for...of 루프를 사용하여 배열 arr의 각 요소를 직접 출력합니다. for...of는 배열의 값을 직접 접근할 때 유용합니다.
    console.log(value);
}