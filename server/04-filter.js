const words = ['spray', 'limit', 'elite', 'exuberant'];

// !CLASSIC
// const newArray = [];
// for (let index = 0; index < words.length; index++) {
//     const element = words[index];
//     if (element.length >= 6) {
//         newArray.push(element);
//     }
// }
// console.log('newArray', newArray);
// console.log('original', words);


// !FILTER
// const newArray = words.filter(item => item.length >= 6 )
// console.log('newArray', newArray);
// console.log('original', words);

const orders = [
    {
        customerName: 'Jesus Pablo',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Gabriel',
        total: 30,
        delivered: false
    },
    {
        customerName: 'Maria',
        total: 140,
        delivered: true
    },
    {
        customerName: 'Valentino',
        total: 280,
        delivered: true
    },
    {
        customerName: 'Jesus Pajarito',
        total: 120,
        delivered: false
    },
]

const deliveredOrders = orders.filter(order => order.delivered && order.total >= 100);
// console.log('Delivered Orders:', deliveredOrders);
// console.log('Orders:', orders);

const search = (query) => {
    return orders.filter(order => order.customerName.includes(query));
}

console.log(search('r'))