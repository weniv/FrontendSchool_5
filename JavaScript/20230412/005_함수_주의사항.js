// 익명 즉시 실행 함수
(function () {
    let a = 1;
    let b = 2;
    return a + b;
}());

// 기명 즉시 실행 함수
(function foo() {
    let a = 3;
    let b = 5;
    return a * b;
}())


    (function foo() {
        let a = 3;
        let b = 5;
        return a * b;
    }())

foo() // 즉시 실행함수로 실행시켰을 경우 밖에서 호출할 수 없습니다.

// 이런 함수가 어디서 쓰일까요?
// 1. 메모리 효율적으로 관리하기 위해
// 2. 바로 실행해야 하는 것을 즉시 실행함수로 관리

// 모든 요소들이 로드된 이후에 실행, 함수는 1개만 실행 가능
// window.onload = function(){}
// $(document).ready() // 위와 같은 기능을 하는 jquery 문법

function $(s) {
    return document.querySelector(s)
}

$('.test')

// call by value, reference, sharing
// array와 같은 convension 자료형을 넘길 때에는 함수 안에서 값의 수정이 됩니다!
// call by value (다른 언어에서 값의 전달을 표현하기 위해 사용)
// call by reference (다른 언어에서 주소값의 전달을 표현하기 위해 사용)
// 면접질문 : javascript의 call by value, call by reference에 대해서 설명하세요
// 답변 : javascript는 call by value만 존재합니다.
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-Call-by-Value-Call-by-Reference

let test1 = [10, 20, 30]
let test2 = 100

// 많이 헷갈려 하시기 때문에 꼭 기억해주세요.
function 값변경1(arr) {
    arr[0] = 100
}
값변경1(test1)
console.log(test1)

function 값변경2(value) {
    value = 1000
}
값변경2(test2)
console.log(test2)

// call by ref가 없는 반례
// 반례
var a = {};
function test(b) {
    b = 1000;
}

test(a)
a // 다른 언어의 경우 call by ref로 동작하여 a의 값이 1000으로 바뀝니다.

/*
call by value
아규먼트에 값이 넘어올 때 복사한 값이 넘어온다!

call by reference
아규먼트에 값이 넘어올 때 주소값이 넘어온다! (주소값이 넘어왔으니 접근을 하면 원본이다!)

- javascript는 참조값을 넘길 때 참조한 주소값을 '복사'하여 넘깁니다. 그래서 call by reference가 아니라 call by value입니다. '복사한 값'인거죠. 주소값도 값이니까요.

4. 김
원시값보다 덩치가 큰 배열이나 객체도 인자로써 옮겨질 때 값이 복제되어 전달되면 실행시간이 길어질 수 도 있을까요?

답 : 주소값을 복사하니 실행시간이 길어지지 않습니다.

4. 서 — 오늘 오후 3:28
변수가 가리키고 있는 공간에 저장된 '값'이 전달된다...?

답 : 주소값이 복사됩니다.

4. 유 — 오늘 오후 3:29
지금 말씀하시는 부분이 원시값은 메모리에 값을 저장하고
object는 메모리에 참조주소를 저장해서 생기는 일 맞을까요?

답 : 이해하신 것이 맞습니다. 다만 이렇게 표현하는 것이 정확할 것 같아요. 원시값은 파라미터에 복사한 값을 저장하고 참조타입은 파라미터에 참조 주소를 복사하여 저장합니다.

4. 이 — 오늘 오후 3:30
함수 내부에서는 인자의 값을 가상 변수에 복제해서 로직을 수행하는데 참조값은 가상 변수에 주소값이 함께 담겨져서 값이 바뀌는 걸까요?

답 : 맞습니다. 주소값이 담겨져서 바뀌는 것입니다. 다만 주소값이 '복사'된 상태입니다.


4. 이 — 오늘 오후 3:31
메모리 주소를 복사해서 넘기기 때문에 새로운 주소가 할당된 경우에만 변경이 안된다는 거라고 이해해도 될까요?

답 : 정확합니다.
*/