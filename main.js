console.log("hello javascript")
console.log(console)

// var, let, const

var name = "scalper" //과거 변수 선언, 글로벌하게 등록되기 때문에 현재는 잘 사용되지 않음.

for(var i=0; i<10; i++){
    var name = "scalper"
    var engName = "codeScalper"
}

console.log(name, engName) //어디서 호출되었는지 정확히 알기 힘들기 때문에 불편
console.log(window) //name 변수 확인가능

//let은 값이 빈번하게 변경되어야할때

let score = 0;
score = 2;

console.log(score)

//const 값이 변하지 않기 때문에 예측이 가능. 변화가 시도가 되면 에러가 발생.

const name = "scalper"
name = "codeScalper";
console.log(name)

//const와 let은 블럭단위임 {} 밖에서는 사용불가

//사용불가 예시

{
    let eng = "scalper"
}

console.log(eng);

//블럭 밖에서 사용된 것은 안으로 타고 내려올 수 있다.
console.log(eng);
{
    let eng = "scalper"
}


