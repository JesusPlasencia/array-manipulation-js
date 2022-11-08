const elements = ['Fire', 'Air', 'Water', 'Wind']

//! CLASSIC
let rptaFinal = '';
let separator = '-';
for (let k = 0; k < elements.length; k++) {
    const element = elements[k];
    if (k === element.length - 1) {
        rptaFinal = rptaFinal + element;
        break;
    }
    rptaFinal = rptaFinal + element + separator;
}
// console.log(' Final For:', rptaFinal);

// !JOIN
let rptaJoin = elements.join('-');
// console.log('Final Join:', rptaJoin);

let title = 'Curso de Manipulacion de Arrays';
let url = title.split(' ').join('').toLowerCase();
let urlFinal = `https://www.platzi.com/curso/${url}`;
console.log('Url:', urlFinal);