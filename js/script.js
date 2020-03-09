
let getForm = document.getElementById('reg');
// FullName 
let getFullName = document.getElementById('fullName');
let getFullNameError = document.getElementById('fullNameError');
// Email
let getEmail = document.getElementById('email');
let getEmailError = document.getElementById('emailError');
// Phone
let getPhoneNumber = document.getElementById('phoneNumber');
let getPhoneNumberError = document.getElementById('phoneNumberError');
// Password
let getPassword = document.getElementById('password');
let getPasswordError = document.getElementById('passwordError');
// Confirm Password
let getConfirmPassword = document.getElementById('confirmPassword');
let getConfirmPasswordError = document.getElementById('confirmPasswordError');
const mssg = document.querySelector('.msg');
// Success Message
const success = document.querySelector('.successMsg');

// UL
let list = document.getElementById('list')

getForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    // App Logic
    if ((getPassword.value).length < 8) {
        getPasswordError.innerHTML = `<p style="color: red"> Your password must be greater than 8 characters </p>`
    }
    else {
        if (getPassword.value != getConfirmPassword.value || getPassword.value === '' && getConfirmPassword.value === '') {
            mssg.classList.add('error');
            mssg.innerHTML = '<h2>Please complete all fields</h2>'
        } else {

            if (getFullName.length < 5) {
                getFullNameError.innerHTML = `<p style="color: red"> Full name must be greater than 5 characters </p>`;
            } else {
                getFullNameError.innerHTML = '';
            }

            if (getEmail.length < 1) {
                getEmailError.innerHTML = `<p style="color: red"> Your email is not valid</p>`;
            } else {
                getEmailError.innerHTML = '';
            }

            if (getPhoneNumber.length < 10) {
                getPhoneNumberError.innerHTML = `<p style="color: red"> Your phone number is not complete </p>`;
            } else {
                getPhoneNumberError.innerHTML = '';
            }

            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${getFullName.value}: ${getEmail.value}: ${getPhoneNumber.value}`));
            list.appendChild(li);

            mssg.innerHTML = '';
            mssg.classList.remove('error');
            success.classList.add('success');
            success.innerHTML = '<p>User Successfully added</p>';
            getFullName.value = '';
            getEmail.value = '';
            getPhoneNumber.value = '';
            getPassword.value = '';
            getConfirmPassword.value = ''

        }
        getPasswordError.innerHTML = '';
    }
        
    
    // set time out for our success message
    setTimeout(() => {
        success.classList.remove('success');
        success.innerHTML = ''
    }, 3000);
});

let toggle = document.getElementById('button-addon2');
toggle.addEventListener('click', (e) => {
    let getPasswordField = document.getElementById('password');
    if (getPasswordField.type === 'password') {
        getPasswordField.setAttribute('type', 'text');
        toggle.innerText = 'Hide';
    } else {
        getPasswordField.setAttribute('type', 'password');
        toggle.innerText = 'Show';
    }
});
