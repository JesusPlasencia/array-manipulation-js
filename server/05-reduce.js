const totals = [1, 2, 3, 4];

// !CLASSIC
// let sum = 0;
// for (let index = 0; index < totals.length; index++) {
//     const element = totals[index];
//     sum += element;
// }
// console.log('Total:', sum);

const rta = totals.reduce((sum, element) => sum + element, 10);
console.log('Total:', rta);