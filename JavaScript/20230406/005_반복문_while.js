let x = 0
while (x < 10) {
    console.log('start')
    console.log(x)
    x += 1
    console.log('end')
}

/////
// why? 10까지 출력이 되는가?
// 일반 JS에서는 출력되지 않습니다.
// 콘솔에서만 출력됩니다.
let x = 0
while (x < 10) {
    console.log(x)
    x += 1
}

let x = 0
while (x < 10) {
    console.log(x)
    x += 1
    console.log('')
}

let x = 1
x += 1
x += 1
x += 1 // 여러번 해보세요. x값이 출력되는데 개발자 편의를 위해 제공하는 기능입니다. 
/////

let input;

do {
    input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");

/////

let input;

do {
    input = confirm("다음에도 저희와 함께 하시겠습니까?")
} while (!input);

console.log("감사합니다.");


// 구구단
// 암기코드 1
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`)
    }
}

let i = 2;
while (i < 10) {
    let j = 1;
    while (j < 10) {
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }
    i++;
}

// 오답
let i = 2;
let j = 1;
while (i < 10) {
    // j = 1 // 이 코드를 넣으셔야 정답이 됩니다.
    while (j < 10) {
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }
    i++;
}

// 암기코드 2
let s = 'hello world'
let result = ''
for (let i = 0; i < s.length; i++) {
    // result = result + s[i]
    result = s[i] + result
}

console.log(result)

// s[0] + result => 'h' + '' => 'h'
// s[1] + result => 'e' + 'h' => 'eh'
// s[2] + result => 'l' + 'eh' => 'leh'
// ...

let s = 'hello world'
let result = ''
let count = 0
while (count < s.length) {
    result = s[count] + result
    count++;
}

console.log(result)

// 암기코드 3
// 팩토리얼
// 5! = 5 * 4 * 3 * 2 * 1
let s = 1;
for (let i = 1; i < 6; i++) {
    s *= i
}
console.log(s)

// s = s  *  i // 1 * 1
// s = 1  *  2
// s = 2  *  3
// s = 6  *  4
// s = 24 *  5

let s = 1;
i = 1;
while (i < 6) {
    s *= i
    i += 1
}

console.log(s)