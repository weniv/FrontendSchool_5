const human = {
    name: "hojun",
    age: 53,
    from: "korea",
    askingHim: function () {
        console.log("hello world!");
    },
    0: '01050442903'
};

console.log(human.name)
console.log(human.age)
console.log(human['name'])
console.log(human['age'])
// human.0 error // 그래서 arr.1 안되는 것입니다.
human['0']
// '01050442903'
human[0]
// '01050442903'

// 유사배열객체는 실무에서도 사용하지 않기 때문에 잊으셔도 됩니다.
const arr = {
    0: 10,
    1: 20,
    2: 30,
    length: 3
};

arr[0]
// 10
arr[1]
// 20
arr[2]
// 30
arr.length
// 3

// 배열이 아닙니다. 유사배열객체라고 합니다.
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠릅니다.

const human = {
    name: "hojun",
    age: 53,
    from: "korea",
    askingHim: function () {
        console.log("hello world!");
    },
};

human.name = 'jun'
human.name
human.askingHim()
delete human.job;

// 다른 언어와 동작방식이 달라 주의해주세요.
console.log('age' in human);
// console.log(20 in [10, 20, 30, 40]);
// console.log('length' in [10, 20, 30, 40]);


const aespa = {
    members: ['카리나', '윈터', '지젤', '닝닝'],
    from: '광야',
    sing: function () {
        return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
    }
};

// 별표(**)
console.log(aespa.hasOwnProperty('itzy'));
console.log(aespa.hasOwnProperty('sing'));

// 별표(***)
// 다른 언어는 aespa.keys()와 같은 방식으로 사용합니다.
console.log(Object.keys(aespa)) // 불편한 코드입니다.
console.log(Object.values(aespa)) // 불편한 코드입니다.

