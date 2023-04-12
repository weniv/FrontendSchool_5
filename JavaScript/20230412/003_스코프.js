// let과 const는 블록레벨 스코프를 가지고 있습니다.
// 스코프 : 변수에 접근할 수 있는 유효범위
// 전역 스코프
// 함수 스코프
// 블록 스코프 (ES6)
{
    var a = 100
    let b = 10
    const c = 20
}

console.log(a)
console.log(b)
console.log(c)

// 지역변수와 전역변수
let x = 100
function 함수() {
    let y = 20
    console.log(x)
}
함수()

// 1
let x = 10
function 함수1() {
    let x = 20
    function 함수2() {
        function 함수3() {
            console.log(x)
        }
    }
}

함수1()

// 2
let x = 10
function 함수1() {
    let x = 20
    function 함수2() {
        function 함수3() {
            let x = 30
            console.log(x)
        }
        함수3()
    }
    함수2()
}

함수1()

// 3
let x = 10
function 함수1() {
    let x = 20
    function 함수2() {
        function 함수3() {
            console.log(x) // 20
        }
        함수3()
    }
    함수2()
}

함수1()
console.log(x) // 10

// 
let a = 10
let b = 10
function 함수1() {
    let a = 20
    let b = 20
    function 함수2() {
        let a = 30
        console.log(a, b)
    }
    함수2()
}
함수1()

// 함수의 호이스팅
// (함수나 변수를 끌어올려 주는 것 처럼 보임)
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
// error 없이 실행 됩니다.

함수(10)

function 함수(x) {
    return x + 100
}

// error가 생깁니다.
함수(10)

let 함수 = x => x + 100

// error가 생깁니다.
함수(10)

const 함수 = function (x) {
    return x + 100
}