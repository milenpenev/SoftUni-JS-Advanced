function addItem() {
    
    const text = document.createElement('li')
    text.textContent = document.getElementById('newItemText').value;
    const items = document.querySelector('ul')
    const button = document.createElement('a')
    button.href = '#'
    button.textContent = '[Delete]'
    text.appendChild(button)
    items.appendChild(text)
    button.addEventListener('click', deleteOnClick);

    function deleteOnClick(ev) {
        ev.target.parentNode.remove()
    }

}