function addItem() {
    const liElement = document.createElement('li')
    liElement.textContent = document.getElementById('newItemText').value
    const listOfItems = document.querySelector('ul')
    const button = document.createElement('a')
    listOfItems.appendChild(liElement)
}