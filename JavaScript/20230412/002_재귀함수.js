// 재귀함수의 중요도(*)
// 다이나믹 프로그래밍, 메모라이징 기법 등을 사용하는 순간이 오게 되면 재귀함수의 중요도가 (**)

// 재귀함수 => 내가 나를 호출하는 것
// 반복문으로 반복할 수 있는 것은 재귀함수로 만들 수 있습니다.
// 재귀함수로 만들 수 있는 것은 반복문으로도 만들 수 있습니다.
// 실무에서는 반복문 사용하시길 권해드립니다. 알고리즘 문제에서는 간혹 재귀를 호출해야 할 일이 있습니다.(팰린드롬, 오디오, 기러기, 우영우, 스위스, 토마토), (병합정렬, 퀵정렬)

// 1. factorial
// 5! == 5 * 4 * 3 * 2 * 1
result = 1
for (let i = 2; i < 6; i++) {
    result *= i
}
result

function factorial(n) {
    if (n <= 1) { // 종료조건 없으면 무한반복입니다.
        return n
    }
    return n * factorial(n - 1)
}

//                 return               최종값
factorial(5)    5 * factorial(4)    5 * 24 == 120
factorial(4)    4 * factorial(3)    4 * 6 == 24
factorial(3)    3 * factorial(2)    3 * 2 == 6
factorial(2)    2 * factorial(1)    2 * 1 == 2
factorial(1)    1

// 누적합(이렇게 일일이 순회하지 않고 구할 수 있는 값이기 때문에 2개다 비효율 적인 코드입니다. 특히 소수 구하는 문제 같은 곳에서 2중 for문 사용하는 것도 매우 비효율 적입니다.)
result = 0
for (let i = 1; i < 1001; i++) {
    result += i
}
result

function sigma(n) {
    if (n <= 1) { // 종료조건 없으면 무한반복입니다.
        return n
    }
    return n + sigma(n - 1)
}
sigma(1000)

// 아래처럼 수학 수식 사용하세요.
const n = 1000
console.log(n * (n + 1) / 2)

// 2. 문자열 뒤집는 것
result = ''
for (const i of 'hello world') {
    result = result + i
}
result

result = ''
for (const i of 'hello world') {
    result = i + result
}
result

// 'h' + '' // 1번째 순회
// 'e' + 'h' // 2번째 순회
// 'l' + 'eh' // 3번째 순회

function reverse(txt) {
    if (txt.length <= 1) {
        return txt
    }
    return txt[0] + reverse(txt.slice(1))
}
reverse('hello world')

function reverse(txt) {
    if (txt.length <= 1) {
        return txt
    }
    return reverse(txt.slice(1)) + txt[0]
}
reverse('hello world')

// 호출             return                  최종값
reverse('hello')    reverse('ello') + 'h'   'olle' + 'h' == 'olleh'
reverse('ello')     reverse('llo') + 'e'    'oll' + 'e' == 'olle'
reverse('llo')      reverse('lo') + 'l'     'ol' + 'l' == 'oll'
reverse('lo')       reverse('o') + 'l'      'o' + 'l' == 'ol'
reverse('o')        'o'


// 팰린드롬
// https://kk3june.tistory.com/83 포스팅된 코드입니다.
const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
input.shift();
let answer = '';

// 1. 주어진 문자열이 팰린드롬인지 확인하기 위한 isPalindrome 함수 생성
function isPalindrome(str, cur, cnt) {
    // 1-1. 팰린드롬 여부를 확인하기 위해서는 index의 역순에 위치한 문자열과 비교해야 하므로
    // 결과적으로 문자열의 절반까지만 확인을 하면 된다. => length 변수는 재귀함수를 실행될 마지막 index
    // 문자열이 홀수이면 중간에 숫자가 하나 비기 때문에 Math.floor 사용하여 소수점 버림
    const length = Math.floor(str.length / 2);
    if (cur >= length) {
        return answer += '1' + ' ' + cnt + '\n'
    } else {
        if (str[cur] === str[str.length - cur - 1]) isPalindrome(str, cur + 1, cnt + 1)
        else return answer += '0' + ' ' + cnt + '\n'
    }
}

// 2. 주어진 입력 값 문자열을 순차적으로 isPalindrome 함수의 인자로 넣어서 팰린드롬 여부 판단
input.forEach(el => isPalindrome(el, 0, 1));

// 3. 2번 코드에서 팰린드롬 여부에 따른 결과값을 answer 변수에 string 형태로 추가했으므로 console로 출력
console.log(answer);