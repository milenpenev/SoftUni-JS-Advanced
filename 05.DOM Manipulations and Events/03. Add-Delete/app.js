function addItem() {
    const liElement = document.createElement('li')
    liElement.textContent = document.getElementById('newItemText').value
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';

    button.addEventListener('click', removeElement);

    liElement.appendChild(button)
    const ul = document.querySelector('ul')
    ul.appendChild(liElement)

    function removeElement(ev){
        ev.target.parentNode.remove()
    }
}