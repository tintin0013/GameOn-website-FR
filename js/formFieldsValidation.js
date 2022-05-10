// FORM FIELDS VALIDATION

const form = document.querySelector('#form');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const quantity = document.querySelector('#quantity');
const allLocations = document.querySelector('#allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.querySelector('#checkbox1');
const input = document.getElementsByClassName('text-control');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const validForm = document.getElementById("form-confirmation-submit");
const closeValidForm = document.getElementById("close-btn-confirmation");


function setAttributeDataError(element, value){
    element.setAttribute('data-error-visible', value);
}

// FIRSTNAME VALIDATION
function checkFirstName() {
    if (firstName.value === "" || firstName.value.length < 2 || !regex.test(firstName.value)) {
        firstName.style.border = "2px solid red";
        setAttributeDataError(firstName.parentElement, 'true');
        return false;
    } else {
        firstName.style.border = "2px solid green";
        setAttributeDataError(firstName.parentElement, 'false');
        return true;
    }
}

// LASTNAME VALIDATION
function checkLastName() {
    if (lastName.value === "" || lastName.value.length < 2 || !regex.test(lastName.value)) {
        lastName.style.border = "2px solid red";
        setAttributeDataError(lastName.parentElement, 'true');
        return false;
    } else {
        lastName.style.border = "2px solid green";
        setAttributeDataError(lastName.parentElement, 'false');
        return true;
    }
}

// EMAIL VALIDATION
function checkEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value === "" || !re.test(email.value)) {
        email.style.border = "2px solid red";
        setAttributeDataError(email.parentElement, 'true');
        return false;
    } else {
        email.style.border = "2px solid green";
        setAttributeDataError(email.parentElement, 'false');
        email.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    }
}

// BIRTHDATE VALIDATION
function checkBirthdate() {
    if (birthdate.value === "") {
        birthdate.style.border = "2px solid red";
        setAttributeDataError(birthdate.parentElement, 'true');
        return false;
    } else {
        birthdate.style.border = "2px solid green";
        setAttributeDataError(birthdate.parentElement, 'false');
        return true;
    }
}

// QUANTITY VALIDATION
function checkQuantity() {
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        quantity.style.border = "2px solid red";
        setAttributeDataError(quantity.parentElement, 'true');
        return false;
    } 
        quantity.style.border = "2px solid green";
        setAttributeDataError(quantity.parentElement, 'false');
        return true;
    
}

// LOCATION VALIDATION
function checkLocation() {
    allLocations.setAttribute('data-error-visible', 'true');
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked === true) {
            allLocations.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
    return false;
}

// TERMS OF USE  VALIDATION
function checkCheckbox() {
    if (!checkbox1.checked) {
        setAttributeDataError(checkbox1.parentElement, 'true');
        return false;
    } 
        checkbox1.style.border = "2px solid green";
        setAttributeDataError(checkbox1.parentElement, 'false');
        return true;
}
// FORM FIELDS VALIDATION
function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method);
}

formFieldsValidation(firstName, checkFirstName, 'focusout');
formFieldsValidation(lastName, checkLastName, 'focusout');
formFieldsValidation(email, checkEmail, 'focusout');
formFieldsValidation(birthdate, checkBirthdate, 'focusout');
formFieldsValidation(quantity, checkQuantity, 'focusout');
for  (let i = 0; i < locations.length; i++) {
    formFieldsValidation(locations[i], checkLocation, 'change');
}
formFieldsValidation(checkbox1, checkCheckbox, 'change');


function checkForm() {
    if (
        checkFirstName() === true &&
        checkLastName() === true &&
        checkEmail() === true &&
        checkQuantity() === true &&
        checkBirthdate() === true &&
        checkLocation() === true &&
        checkCheckbox() === true) {
        return true;
    } 
        return false;
    
}

form.addEventListener('submit',  (e) => {
    e.preventDefault();
    if (checkForm() ) {
        validForm.style.display = "block";
        modalbg.style.display = "none";
        form.reset();
    } 
});

closeValidForm.addEventListener("click", () => {
    validForm.style.display = "none";
  });

 

    
    








