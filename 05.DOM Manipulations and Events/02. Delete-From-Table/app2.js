function deleteByEmail() {
    const searchedEmail = document.querySelector('input[name=email]');
    const mails = Array.from(document.querySelector('tbody').children);
    let removed = false;

    for (let email of mails) {
        if (email.children[1].textContent == searchedEmail.value){
            email.remove()
            document.getElementById('result').textContent = 'Success'
        }
    }
}

