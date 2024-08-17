let Member = {};
console.log(Member);    //빈 객체 Member를 생성하고 콘솔에 출력합니다.

Member.name = "hong";
console.log(Member.name);   //Member 객체에 name 속성을 추가하고 값 "hong"을 할당합니다. 이 값을 콘솔에 출력합니다.

Member.age = 100;   //Member 객체에 age 속성을 추가하고 값 100을 할당합니다.

Member.print = function(){  //Member 객체에 print라는 메서드를 추가합니다. 이 메서드는 name과 age 속성 값을 HTML 문서에 출력합니다.
    document.write("<br>" + this.name + " / " + this.age + "<br>");
}

Member.print();     //print 메서드를 호출하여 Member 객체의 정보를 HTML 문서에 출력합니다.