const btn = document.querySelector('button');
const span = document.querySelector('span');


btn.addEventListener('click', () => {
    const name = prompt('What is your name? ')
    span.textContent = name
})