// json generator
// https://json-generator.com/
// json
let 회원정보 = [
    {
        "_id": "642a621f2445e5a2787864e4",
        "index": 0,
        "age": 36,
        "eyeColor": "green",
        "name": "Compton Landry",
        "gender": "male",
        "company": "AQUASURE"
    },
    {
        "_id": "642a621fc17e143f4b1d444f",
        "index": 1,
        "age": 33,
        "eyeColor": "brown",
        "name": "Maldonado Crosby",
        "gender": "male",
        "company": "INSURON"
    },
    {
        "_id": "642a621fe4fde914944aaa7e",
        "index": 2,
        "age": 27,
        "eyeColor": "blue",
        "name": "Lynnette House",
        "gender": "female",
        "company": "BUZZMAKER"
    },
    {
        "_id": "642a621f68c4e87bb043e14f",
        "index": 3,
        "age": 40,
        "eyeColor": "blue",
        "name": "Mitchell Hancock",
        "gender": "male",
        "company": "FIBEROX"
    },
    {
        "_id": "642a621f820fb16a23d61f07",
        "index": 4,
        "age": 35,
        "eyeColor": "blue",
        "name": "Audra Vance",
        "gender": "female",
        "company": "BRAINQUIL"
    },
    {
        "_id": "642a621fd7e886a78a2d2a6f",
        "index": 5,
        "age": 40,
        "eyeColor": "blue",
        "name": "Griffith Tanner",
        "gender": "male",
        "company": "ENERSAVE"
    }
]

회원정보[0]
회원정보[0]['name']
회원정보[1]['company']

// 모르셔도 됩니다.
let 나이평균 = (회원정보[0]['age'] + 회원정보[1]['age'] + 회원정보[2]['age'] + 회원정보[3]['age'] + 회원정보[4]['age'] + 회원정보[5]['age']) / 6
console.log(나이평균)