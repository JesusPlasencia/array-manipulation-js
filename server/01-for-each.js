// const letters = ['a', 'b', 'c'];

// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     console.log('For: ' + element);
// }

// letters.forEach(letter => { 'ForEach: ' + console.log(letter) })

let tasks = [
    {
        name: 'English Homework',
        state: 'Done'
    },
    {
        name: 'Math Homework',
        state: 'Pending'
    },
    {
        name: 'Science Homework',
        state: 'Progress'
    }
]

let taskContainer = document.querySelector('#taskContainer');
tasks.forEach(task => {
    taskContainer.innerHTML += `<li>${task.name} - ${task.state}</li>`
})