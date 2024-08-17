let mycars = {
    "name": "john",
    "age": 30,
    "cars": [
        {"name": "Ford", "model": ["Mustang", "Focus"]},
        {"name": "BMW", "model": ["520", "x5", "x6"]},
        {"name": "Fiat", "model": ["500", "panda"]}
    ]
};

for(let obj of mycars.cars){
    document.write("차량이름 : " + obj.name + "<br>");
    for(let index in obj.model){
        document.write("차량모델 : " + obj.model[index] + "<br>");
    }
    document.write("<hr>");
}