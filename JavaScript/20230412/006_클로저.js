// 클로저
// 폐쇠된 공간 안에 데이터에 접근하기 위한 테크닉
// 클로저는 외부함수(포함하고 있는)의 변수에 접근할 수 있는 내부 함수를 일컫습니다.
/*
4. 왕 — 오늘 오후 3:49
생존주기와도 연관이 되나요?

답 : 함수의 생명주기로 보았을 때 클로저는 마치 내부 함수가 외부 함수보다 오래 살아있는 것처럼 보입니다. 여기서 내부 함수가 외부함수의 변수를 참고하고 있을 경우 '외부 함수는 생명주기가 끝났지만(실행 컨텍스트 스택에서는 제거됨)' 외부 변수는 메모리에서 해지되지 않습니다.(가비지컬렉터가 메모리를 회수하지 않습니다.) 폐쇠된(Closer) 공간에 접근하게 되는거죠.
*/
function 제곱(x) {
    function 승수(y) {
        return y ** x
    }
    return 승수
}

let 제곱2 = 제곱(2) // 2 제곱해주는 함수
let 제곱3 = 제곱(3) // 3 제곱해주는 함수
let 제곱4 = 제곱(4) // 4 제곱해주는 함수

제곱2(2)
제곱2(3)
제곱2(4)

console.log(제곱(2)(4))

// 함수를 리턴해줄 수 있음을 나타내는 예제
function 리턴함수() {
    function sum(a, b) {
        return a + b
    }
    return sum
}

let 합 = 리턴함수()
합(2, 3)

/////
function makeAdder(x) {
    let y = 1;
    return function (z) {
        let y = 100;
        return x + y + z;
    };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);
// 클로저에 x와 y의 환경이 저장됨

console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
// 함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
// 지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
// 어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
// 함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능

function 승수제조기() {
    let value = 0;
    function 승수() {
        return ++value ** 2
    }
    return 승수
}

let 승 = 승수제조기();
승()
승()
승()
//value //출력할 수 없습니다. 은닉화가 된거죠.

/**
 *
 * 그것이 알고싶다. 클로저
 *
 */

var outer = function () {
    var a = 1;
    var inner = function () {
        var b = 5;
        var c = 6;
        a = a + b + c;
        console.log(a);
    };
    inner();
};
outer();

//------------------------------------//

var outer = function () {
    var a = 1;
    var inner = function () {
        var b = 5;
        var c = 6;
        a = a + b + c;
        console.log(a);
    };
    return inner;
};

var newInner = outer();
newInner();

//------------------------------------//

var person = (function () {
    var age = 15;

    return {
        name: "wade",

        getAge: function () {
            console.log(age);
            return age;
        },

        setAge: function (val) {
            age = val;
            console.log(age);
        }
    }
})();

person.getAge();
person.setAge(20);

person.age = 30;
person.getAge();


////

function 제곱(x) {
    function 승수(y) {
        return y ** x
    }
    return 승수
}

let 제곱2 = 제곱(2) // 2 제곱해주는 함수