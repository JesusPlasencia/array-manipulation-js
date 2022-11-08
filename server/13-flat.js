const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrizFinal = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        matrizFinal.push(element);
    }
}
console.log('Matriz For:', matrizFinal);

let matrizFlat = matriz.flat();
console.log('Matriz Flat:', matrizFlat);

let results = [
    {
        id: 1,
        bills: [
            {
                id: 'FA-04',
                price: 100
            },
            {
                id: 'FA-05',
                price: 200
            },
            {
                id: 'FA-06',
                price: 30
            }
        ]
    }
]

console.log(results.flat(2));