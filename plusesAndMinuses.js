// When a user clicks the + element, the count should increase by 1 on screen.

// When a user clicks the – element, the count should decrease by 1 on screen.
let counter = 0;

const incrementer = document.getElementById('increment');
const decrementer = document.getElementById('decrement');

incrementer.addEventListener('click', () => {
    counter++;
    document.getElementById('counter').textContent = `${counter}`
})

decrementer.addEventListener('click', () => {
    counter--;
    document.getElementById('counter').textContent = `${counter}`
})