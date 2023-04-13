// 이름이 있는 함수 안에서 정의된 함수의 경우 this는 전역을 바라보게 됩니다.
// a함수는 object 안에 함수입니다.

const person = {
    name: 'hojun',
    age: 25,
    a() {
        console.log(this);
        console.log(this.name);
        function b() {
            console.log(this);
            console.log(this.name);
            function c() {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a()

/////////


// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
const person = {
    name: 'hojun',
    age: 25,
    a() {
        console.log(this);
        console.log(this.name);
        let b = () => {
            console.log(this);
            console.log(this.name);
            let c = () => {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a()


///////////
let a = () => {
    console.log(this);
    console.log(this.name);
    let b = () => {
        console.log(this);
        console.log(this.name);
        let c = () => {
            console.log(this);
            console.log(this.name);
        }
        c()
    }
    b()
}
a()

/////
// 메서드 콜백함수에서 this로 사용할 값을 제공할 수도 있다.
[1, 2, 3].forEach(function () { console.log(this) }) // window
[1, 2, 3].forEach(function () { console.log(this) }, [10, 20, 30]) // window

/////
let 인세규정 = {
    책: 10,
    영상콘텐츠: 50
}

function 인세계산함수책(e) {
    return e * (this.책 / 100)
}

function 인세계산함수영상(e) {
    return e * (this.영상콘텐츠 / 100)
}

[100, 200, 300].map(인세계산함수책, 인세규정)
[100, 200, 300].map(인세계산함수영상, 인세규정)

// [100, 200, 300].forEach(function (v) {
//     console.log(v)
//     console.log(this)
// })


///
// 1. 전역공간의 this는 window(node는 global) → 실제로는 window.globalThis, window.this 아닙니다. [자바스크립트에서 `globalThis`의 소름끼치는 폴리필](https://ui.toast.com/weekly-pick/ko_20190503)
// 2. 메서드로 호출한 경우 this는 멤버접근연산자 앞에 객체
// 3. 함수로 호출할 경우 this는 window(node는 global)
// 4. 화살표 함수의 경우 this는 상위스코프
// 5. 생성자 함수의 경우 this는 인스턴스
// 6. 콜백함수의 경우 this가 다르게 동작 할 수 있음


