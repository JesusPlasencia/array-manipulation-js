const numbers = [1, 30, 49, 29, 10, 13];

// !CLASSIC
let rta = undefined;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element == 303) {
        rta = element;
        break;
    }
}
// console.log('For:', rta);

// !FIND
let rta2 = numbers.find(number => number === 303);
// console.log('Find:', rta2);

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const searchProduct = (idProduct) => {
    return products.find(product => product.id == idProduct);
}

console.log('Buscar Hot Cake:', searchProduct('🥞'));

const searchProductIndex = (idProduct) => products.findIndex(product => product.id === idProduct);

console.log('Buscar Indice de Hot Cake:', searchProductIndex('🥞'))