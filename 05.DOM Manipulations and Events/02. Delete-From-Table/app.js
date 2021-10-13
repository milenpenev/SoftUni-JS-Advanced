function deleteByEmail() {
    const searchedEmail = document.querySelector('input[name="email"]');
    const rows = Array.from(document.querySelector('tbody').children);
    let removed = false;
    for (let row of rows) {
        if (row.children[1].textContent == searchedEmail.value) {
            row.remove();
            removed = true;
        }
    }
    if (removed){
        document.getElementById('result').textContent = 'Deleted.'
    } else {
        document.getElementById('result').textContent = 'Not found.'
    }
}