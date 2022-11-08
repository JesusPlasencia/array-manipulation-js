const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

// const newArray = [...elements];
const newArray = elements;
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}
newArray.push(10);
newArray.push(20);
console.log('For:', newArray);

const concatSolve = elements.concat(otherElements);
console.log('Concat:', concatSolve);