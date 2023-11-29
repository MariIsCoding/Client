const openModal = document.querySelector('#openModal');
const modal = document.querySelector('.modal');
const content = modal.querySelector('.content')

openModal.addEventListener('click', () => {
    modal.classList.add('open')
})


content.addEventListener('click',() => {
    modal.classList.remove('open')
})


