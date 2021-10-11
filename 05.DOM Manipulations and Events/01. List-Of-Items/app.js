function addItem() {
    const liElement = document.createElement('li')
    liElement.textContent = document.getElementById('newItemText').value
    const ul = document.querySelector('ul')
    ul.appendChild(liElement)
}