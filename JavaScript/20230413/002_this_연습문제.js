// 문제 1. console this
console.log(this) // window
// why?
// https://stackoverflow.com/questions/32705715/why-does-window-console-logthis-not-log-the-console-object
// window에 bind
// 우리가 배운 this의 원리에 의하면 console을 출력하는 것이 맞습니다.
// typeof console이 object이기 때문



// 문제 2. 함수 this
function f() {
    console.log(this)
}
f()

let human = {
    name: 'hojun',
    f() {
        console.log(this)
        function ff() {
            console.log(this)
        }
        ff()
    }
}

human.f()
// 기명함수 내부의 this는 상위 object를 가리키나, 함수 내부에서 정의된 함수는 this가 window를 가리킵니다.



// 문제 3. 화살표 함수 출력 결과는 왜 다른가?
let human = {
    name: 'hojun',
    f: () => {
        console.log(this)
        let ff = () => {
            console.log(this)
        }
        ff()
    }
}

human.f()


let human = {
    name: 'hojun',
    f() {
        console.log(this)
        let ff = () => {
            console.log(this)
        }
        ff()
    }
}

human.f()


// 문제3) constructor(생성자) 내부의 this
function 생성자() {
    this.이름 = 'Kim'
    this.성별 = '남'
}
const 오브젝트 = new 생성자()


    // 문제4 - 1) 이벤트리스너 내부 콜백함수에서의 this
    < button id = '버튼' > 버튼</ >

        document.getElementById('버튼').addEventListener('click', function (e) {
            console.log(this)
            console.log(e.currentTarget)
        })


// 문제 4 - 2) 이벤트리스너 안에서 콜백함수를 쓴다면 this는 ?
document.getElementById('버튼').addEventListener('click', function (e) {
    let arr = [1, 2, 3]
    arr.forEach(function () {
        console.log(this)
    })
})


// 문제 4 - 3) 오브젝트 내부 콜백함수에서의 this
var 오브젝트 = {
    이름: ['김', '이', '박'],
    함수: function () {
        console.log(this)
        오브젝트.이름.forEach(function () { console.log(this) })
    }
}
오브젝트.함수() // 어떤 결과가 나올까?


// 문제 4 - 4) arrow function 안에서의 this
const 오브젝트 = {
    이름: ['김', '이', '박'],
    함수: function () {
        console.log(this)
        오브젝트.이름.forEach(() => { console.log(this) })
    }
}
오브젝트.함수()