const letters = ['a', 'b', 'c'];

// !Sin Map
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
    //     const element = letters[index];
    //     newArray.push(element + '++');
    // }
    
const newArray = letters.map(letter => letter + '++');

console.log("Original:", letters);
console.log("Nuevo:", newArray);