const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}

// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const productIndex2 = productsV2.findIndex(item => item.id === '🍔');
console.log('Original:', productsV2);
console.log("Eliminando un elemento del array sin mutar el array original:",);
const copyProducts = [...productsV2];
copyProducts.splice(productIndex2, 1)
console.log("Array 'actualizado':", copyProducts);
console.log('Original:', productsV2);

// const update = {
//     id: '🥞',
//     changes: {
//         title: 'Chicken',
//         price: 45,
//     }
// }

// const indexChanged = productsV2.findIndex(item => item.id === update.id);
// productsV2[indexChanged] = {
//     ...productsV2[indexChanged],
//     ...update.changes
// }

// console.log("products", products);
// console.log("myProducts", productsV2);
// console.log("-".repeat(10));