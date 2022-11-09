const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
// console.log(months);

const numbers = [1, 30, 4, 21, 100000];

// !Descendente
numbers.sort((a, b) => b - a);
// console.log(numbers);

// !Ascendente
numbers.sort((a, b) => a - b);
// console.log(numbers);

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
// console.log(words.sort());

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

// !Descendente
orders.sort((a, b) => b.total - a.total);
console.log(orders);

// !Ascendente
orders.sort((a, b) => a.total - b.total);
console.log(orders);