const items = [1, 3, 2, 3];

// const rta = items.reduce((obj, item) => {
//     if (!obj[item]) {
//         obj[item] = 1;
//     } else {
//         obj[item]++
//     }
//     return obj;
// }, {});

// console.log('Reduce Reloaded:', rta);
// !Output
// {
//     1: 1,
//     2: 1,
//     3: 2
// }

// const datas = [
//     {
//         name: 'Nicolas',
//         level: 'high'
//     },
//     {
//         name: 'Ximena',
//         level: 'medium'
//     },
//     {
//         name: 'Jesus',
//         level: 'low'
//     },
//     {
//         name: 'Martin',
//         level: 'medium'
//     },
//     {
//         name: 'Gabriel',
//         level: 'medium'
//     }
// ];

// const resultData = datas
//     .map(item => item.level)
//     .reduce((obj, item) => {
//     if (!obj[item]) {
//         obj[item] = 1;
//     } else {
//         obj[item]++
//     }
//     return obj;
// }, {});

// console.log('Result Data:', resultData);

// !Generator Numbers
let list = [];
for (let i = 0; i < 10; i++) {
    list.push(Math.floor(Math.random() * 9 + 1));
}
console.log('Generated List:', list);
const rst = list.reduce((obj, element) => {
    if (element <= 5) obj["1-5"]++;
    else if (element < 9) obj["6-8"]++;
    else obj["9-10"]++;
    return obj;
},
{
    "1-5": 0,
    "6-8": 0,
    "9-10": 0
    });

console.log(rst);