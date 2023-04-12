// - Object의 키는 문자열 타입으로만 지정해야하지만, Map의 키는 모든 값을 가질 수 있습니다.
// - Object는 크기를 사용자가 직접 수동으로 알아내야 하지만, Map은 size를 통해 크기를 쉽게 얻을 수 있습니다.
// Map은 데이터를 추가하거나 제거하는 작업에서 Object 보다 더 나은 성능을 보입니다.
let m = new Map();

// Map에 값을 넣기
m.set('하나', 1)
m.set(1, '하나')
m.set(true, 1)
m.set(false, 0)

// Map에 값에 접근하기
m.get('하나')

// {[1, 2, 3]: 100, {'하나':1}: 10} // error
// m.set([1, 2, 3], '리얼리?')
// m.get([1, 2, 3])

let x = [1, 2, 3, 4]
m.set(x, '리얼리?')
m.get(x)

// Map의 값이 있는지 확인하기
m.has('하나')

// Map의 값을 제거하기
m.delete('하나')
m.has('하나')
m

// Map의 크기를 확인하기
m.size

///////////////////

const data = new Map()
    .set('name', 'hojun')
    .set('age', 10)
    .set('height', 180)

///////////////////

let data = new Map([['one', 1], ['two', 2]]) // O
let data = new Map(Object.entries({ 'one': 1, 'two': 2 })) // O
let data = new Map({ 'one': 1, 'two': 2 }) // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X

// 직접 순회가 가능하지 않은 Object!
let data = { 'one': 1, 'two': 2 }
for (const i of data) { // X 작동되지 않습니다!
    console.log(i)
}

let data = { 'one': 1, 'two': 2 }
for (const i of Object.entries(data)) {
    console.log(i)
}

// 직접 순회가 가능한 Map!
let m = new Map();

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for (const i of m) {
    console.log(i)
}

for (const [key, value] of m) {
    console.log(key, value)
}

// object의 단점
let test = { 'one': 1, 'two': 2 }
Object.keys(test)

// map은 메서드로 모두 호출 가능!
m.keys()
m.values()
m.entries()

// Map -> Object 간의 형변환
let 맵 = new Map(Object.entries({ 'one': 1, 'two': 2 }))
let 오브젝트 = Object.fromEntries(맵)

// 키 값의 중복이 안됩니다.
let map = new Map();
map.set('이호준', 1)
map.set('이호준', 2)
map.set('이호준', 3)