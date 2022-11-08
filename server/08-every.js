const numbers = [1, 30, 39, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false;
        break;
    }
}

console.log('For:', rta);

let rta2 = numbers.every(number => number < 40);
console.log('Every:', rta2);

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 14,
    },
];

let isLower15 = team.every(player => player.age < 15);
console.log('Every Age Player is Lower than 15:', isLower15);