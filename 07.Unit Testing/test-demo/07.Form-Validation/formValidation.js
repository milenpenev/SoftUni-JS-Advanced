function validate() {
    const usernameRegex = /(^[A-Za-z0-9]{3,20}$)/;
    const passwordRegex = /(^[\w]{5,15}$)/;
    const emailRegex = /(^[\w]+@[\w]+.[\w]+$)/
    let isChecked = true;
    let isValidInput = true;


    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const usernameField = document.getElementById('username');
        if (!usernameRegex.test(usernameField.value)) {
            isValidInput = false;
            usernameField.style.borderColor = 'red';
        } else {
            isValidInput = true;
            usernameField.style.border = 'none';
        }
        const passwordField = document.getElementById('password');
        const confirmPasswordField = document.getElementById('confirm-password');
        if (!passwordRegex.test(passwordField.value)) {
            isValidInput = false;
            passwordField.style.borderColor = 'red';
        } else {
            isValidInput = true;
            passwordField.style.border = 'none';
        }
        if (passwordField.value != confirmPasswordField.value) {
            isValidInput = false;
            confirmPasswordField.style.borderColor = 'red';
        } 
        if (!confirmPasswordField.value){
            isValidInput = false;
            confirmPasswordField.style.borderColor = 'red';
        } else {
            isValidInput = true;
            confirmPasswordField.style.border = 'none';
        }
        const emailField = document.getElementById('email');
        if (!emailRegex.test(emailField.value)) {
            isValidInput = false;
            emailField.style.borderColor = 'red';
        } else {
            isValidInput = true;
            emailField.style.border = 'none';
        }
        const validDiv = document.getElementById('valid');
        if (isValidInput) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
        if (isChecked) {
            const companyNumber = document.getElementById('companyNumber');
            if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                companyNumber.style.borderColor = 'red';
            } else {
                companyNumber.style.border = 'none'
            }
        }
    })
    
    document.getElementById('company').addEventListener('change', (e) => {
        const companyField = document.getElementById('companyInfo');
        if (e.target.checked) {
            isChecked = true;   
            companyField.style.display = 'block';
        } else {
            isChecked = false
            companyField.style.display = 'none';
        }
    })
}
