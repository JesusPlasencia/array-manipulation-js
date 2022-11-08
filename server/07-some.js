const numbers = [1, 3];

// !CLASSIC
let rta = false;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}
// console.log('Rpta:', rta);

// !SOME
let rta2 = numbers.some(number => number % 2 === 0);
// console.log('Rpta Some:', rta2);

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

const isDeliveredOrders = orders.some(order => order.delivered);
// console.log("Is Delivered Orders:", isDeliveredOrders);

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30)
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate },
            { start: newDate.startDate, end: newDate.endDate },
        )
    })
}

console.log(isOverlap(newAppointment));