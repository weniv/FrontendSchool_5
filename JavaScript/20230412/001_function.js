// 4월 4일 코드 + 맨 아래 4월 12일 코드가 있습니다.

// 함수

// 1. 재사용성이 높아집니다.
function one() {
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
}
one()
one()
one()
one()
one()

// 2. 유지보수가 용이합니다.
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄

// 3. 구조 파악이 용이합니다.
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄

// 함수의 일반적인 형태
// 함수 선언문
// 파선아실
function one(a, b) { // 1
    let z = a + b // 2
    return z ** 2 // 3
}

console.log(one(7, 3))
console.log(one(7, 3))

// 화살표 함수
const two = (a, b) => (a + b) ** 2
console.log(two(7, 3))
console.log(two(7, 3))

// 이름 없이 선언하는 함수
// 함수 표현식
const three = function (a, b) { // 1
    let z = a + b // 2
    return z ** 2 // 3
}

console.log(three(7, 3))
console.log(three(7, 3))

// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function four(a, b, c) {
    let z = c(a, b) + c(a, b)
    return z * 2
}

four(7, 3, one)

// 아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없습니다.
// 외부에서 직접 값을 가져오는 것을 지양해주세요.
function four(a, b, c) {
    let z = one(a, b) + one(a, b)
    return z * 2
}

four(7, 3, one)


// 함수
// 읽어볼만한 문헌 : https://ko.javascript.info/function-basics
// return, console.log를 헷갈려 하십니다.

function hello(para) {
    console.log(para)
    console.log('hello')
    return 100
}

console.log(hello(10))

let x = console.log('hello')
x // undefined

// 함수, 메서드(클래스 안에 들어간 함수)
// .을 찍어 접근할 수 있는 함수다? => 메서드
// 함수를 호출할 수 있는 이름은 결국 변수입니다.
let x = console.log
x('hello')

// 2번(아래 3개는 같은 코드입니다.)
function hello1() {
    console.log('hello');
}

function hello2() {
    console.log('hello');
    return
}

function hello3() {
    console.log('hello');
    return undefined
}

let a = hello1()
let b = hello2()
let c = hello3()

// return
function hello4() {
    console.log('hello')
    console.log('hello')
    console.log('hello')
    return
    console.log('hello')
    console.log('hello')
    console.log('hello')
}

hello4()

function hello5() {
    if (true) {
        if (false) { // 이 값을 바꿔보세요.
            if (true) {
                return
            }
        }
    }
    console.log('hello')
}

// return을 하더라도 1회 반복만 종료되는 것이지 전체 반복이 종료되는 것은 아닙니다.
const x = [10, 20, 30, 40];
x.forEach(function (el) {
    console.log(el)
    return
    console.log('world')
});


/////////////////////

function 함수1(a, b, c) {
    return a + b + c
}

함수1(10, 20, 30, 40) //error가 발생하지 않습니다.

함수1(10, 20) // error가 발생하지 않습니다.

function 함수1(a = 10, b = 20, c = 30) {
    return a + b + c
}
함수1(1, 1)

function 함수1(a = 10, b = 20, c = 30) {
    return a + b + c
}
// a와 c에 들어갈 것이라고 생각했지만 a와 b에 들어갑니다.
함수1(a = 1, c = 1)

// 아래와 같은 식별 이슈가 있을 경우 object로 넘깁니다. roro기법
function runPython(user, time, code, lv) {

}
runPython('leehojun', 100, 'function...', 3)


function runPython({ user, time, code, lv }) {

}

runPython({
    user: 'leehojun',
    time: 100,
    code: 'function...',
    lv: 3
})

// 기본값 설정
function runPython({
    user = '',
    time = 0,
    code = '',
    lv = 0 }) {
}


//////////////////

// 화살표 함수에 다양한 예제(****)
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function 함수1(x, y) {
    return x + y
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = x => {
    if (true) {
        console.log('hello world')
    }
    return x + 10
}

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = x => x + 10

let 결과 = 함수3(2);

console.log(결과);

// 즉시 실행 함수
(function () {
    console.log('이 함수는 만들어지자마자 바로 실행됩니다!');
})();

function 함수() {
}

함수()


// 4월 12일 코드
// 1. object처럼 사용되는 함수의 특성
function 함수(a, b) {
    return a + b
}

function 함수2(a, b, c) {
    const z = a + b + c
    return z
}

function 함수3(a, b, c, d, e, f) {
    return a
}

console.dir(함수1)
console.dir(함수2)
console.dir(함수3)

// length가 파라미터의 수인 것을 확인했습니다.

// array, object, function가 모두 같은 방식으로 접근하거나 값을 변경할 수 있네?
함수['location'] = 'jeju'
console.dir(함수)


함수['name'] = 'jejufunction'
console.dir(함수)
// console.dir(jejufunction) // 이렇게 호출이 안됩니다.

함수['length'] = 5
console.dir(함수) // 변경이 되지 않습니다.

// 2. 아규먼트가 순서대로 들어가는 함수의 특성
function 함수(a = 10, b = 20, c = 30) {
    return a + b + c
}
함수()
함수(100)
함수(100, 200)
함수(100, 200, 300)
함수(c = 300) // 330이 아니고 350입니다. 순서대로 들어갑니다.
함수(a = 100, c = 300)
함수(a = 100, b = 300, c = 200) // 순서가 뒤바뀌면 hell
함수(a = 100, c = 200, b = 300) // hell입니다.

// 3. roro기법 원리 설명
// roro 기법은 무엇인가요? 입력되는 아규먼트가 매우 많은 아래 함수의 경우 호출 하는 쪽에서 어떤 값이 들어가는지 명확히 알기 어렵고 읽기도 어렵다.
window.addNewControl("Title", 20, 50, 100, 50, true);
// 여러분들이 코드를 쭉 읽어 내려가다가 저 함수를 만났습니다. 기분이 어떨 것 같으신가요?

// python 형식입니다.
window.addNewControl(
    title = "Title",
    xPosition = 20,
    yPosition = 50,
    width = 100,
    height = 50,
    drawingNow = true
);

// roro 기법을 모든 함수에서 사용하나요?
function sum(a, b) { }

// 어떻게 사용하고 원리는 무엇인가요?
function 로그인정보({
    회원등급 = 'Gold',
    글쓰기 = true,
    글읽기 = true,
    채널관리 = true,
    백업 = '1주일 이내 가능',
    소셜로그인여부 = true
}) {
    console.log('...함수 기능...')
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
}

로그인정보({
    회원등급: 'Silver',
    소셜로그인여부: false, // 순서까지 바뀌었습니다.
    백업: '3일 이내 가능' // 중간에 생략된 값도 있고
})

// 원리(모르셔도 코딩하는데 지장있진 않습니다.)
let one
let two
let three

let four = { one, two, three }
// {one: undefined, two: undefined, three: undefined}
// 이렇게 사용할 수 있게 된 것이 최근입니다.
// '이렇게'는 변수 값을 object안에 넣으면 변수명이 key가되고 변수의 값이 object의 value가 되는 문법을 얘기합니다.

let { one, two, three } = { one: 10, two: 20, three: 30 }
let { one, two, three } = { two: 20, one: 10, three: 30 }
// 왼쪽에서 one과 two, three는 변수
let { one:10, two, three } = { two: 20, one: 10, three: 30 } // error
let { one = 100, two, three } = { two: 20, three: 30 }

// 살짝 심화
// 위 코드에서 로그인정보({}) 호출 했을 때에는 error가 안나지만 로그인정보()호출했을 경우에는 error가 납니다.
function 함수({
    a = 1,
    b = 2,
    c = 3
} = {}) {
    console.log(a, b, c)
    return a + b + c
}

함수()
함수({})
함수({ b: 100 })

// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined


// early-return
https://www.howdy-mj.me/javascript/early-return