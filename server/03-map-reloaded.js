const orders = [
    {
        customerName: 'Jesus',
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
        total: 90,
        delivered: true
    },
    {
        customerName: 'Valentino',
        total: 280,
        delivered: true
    }
]

// console.log("Original:", orders);
// console.log(orders.map(item => item.total));

const rtrn2 = orders.map(order => {
    return {
        ...order,
        tax: .19
    }
})

console.log("Original:", orders);
console.log("Add Property:", rtrn2);