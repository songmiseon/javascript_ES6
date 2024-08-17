//Grade라는 객체를 생성하고, list 속성에는 학생의 점수를 저장한 객체를 할당합니다. show 메서드는 list의 각 항목을 HTML 문서에 출력합니다.
const Grade = {
    "list": {"hong":10, "kim":20, "park":30},
    "show": function(){
        for(let key in this.list){
            document.write(key + " : " + this.list[key] + "<br>");
            console.log(this.list[key]);
        }
    }
}

Grade.show();   //show 메서드를 호출하여 Grade 객체의 list 항목을 HTML 문서에 출력합니다.