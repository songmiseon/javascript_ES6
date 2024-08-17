let students = [];
students.push({"이름":"홍길동", "국어":80, "영어":90}); //students 배열을 생성하고, 학생 정보를 포함한 객체를 배열에 추가합니다.
students.push({"이름":"아무개", "국어":10, "영어":100});
students.push({"이름":"이순신", "국어":70, "영어":90});

for(let index in students){ //students 배열을 for...in 루프를 사용하여 순회하면서 각 학생 객체에 getSum과 getAvg 메서드를 추가합니다. getSum은 국어와 영어 점수의 합계를 반환하고, getAvg는 평균을 반환합니다.
    console.log(students[index].이름);
    students[index].getSum = function(){ return this.국어 + this.영어; }
    students[index].getAvg = function(){ return this.getSum() / 2; }
}

for (let index in students){  //학생 정보를 다시 순회하며 이름, 총점, 평균을 콘솔에 출력합니다.
    console.log(students[index].이름);
    console.log(students[index].getSum());
    console.log(students[index].getAvg());
}