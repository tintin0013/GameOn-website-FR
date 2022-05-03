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


function setAttributeDataError(element, value){
    element.setAttribute('data-error-visible', value);
}

// FIRSTNAME VALIDATION
function checkFirstName() {
    if (firstName.value === "" || firstName.value.length < 2 || !regex.test(firstName.value)) {
        firstName.style.border = "2px solid red";
        setAttributeDataError(firstName.parentElement, 'true');
        //firstName.parentElement.setAttribute('data-error-visible', 'true');
        //firstName.focus();
        return false;
    } else {
        firstName.style.border = "2px solid green";
        //firstName.parentElement.setAttribute('data-error-visible', 'false');
        setAttributeDataError(firstName.parentElement, 'false');
        return true;
    }
}

// LASTNAME VALIDATION
function checkLastName() {
    if (lastName.value === "" || lastName.value.length < 2 || !regex.test(lastName.value)) {
        lastName.style.border = "2px solid red";
        setAttributeDataError(lastName.parentElement, 'true');
        //lastName.parentElement.setAttribute('data-error-visible', 'true');
       // lastName.focus();
        return false;
    } else {
        lastName.style.border = "2px solid green";
        setAttributeDataError(lastName.parentElement, 'false');
        //lastName.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    }
}

// EMAIL VALIDATION
function checkEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value === "" || !re.test(email.value)) {
        email.style.border = "2px solid red";
        setAttributeDataError(email.parentElement, 'true');
        //email.parentElement.setAttribute('data-error-visible', 'true');
       // email.focus();
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
    // let fieldDate = birthdate.value.split('-');
    // let date = new Date();date.setFullYear(fieldDate[0]);date.setMonth(fieldDate[1]-1);date.setDate(fieldDate[2]);
    // console.log(date);
    if (birthdate.value === "") {
        birthdate.style.border = "2px solid red";
        setAttributeDataError(birthdate.parentElement, 'true');
       // birthdate.parentElement.setAttribute('data-error-visible', 'true');
        //birthdate.focus();
        return false;
    } else {
        birthdate.style.border = "2px solid green";
        setAttributeDataError(birthdate.parentElement, 'false');
       // birthdate.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    }
}

// QUANTITY VALIDATION
function checkQuantity() {
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        quantity.style.border = "2px solid red";
        setAttributeDataError(quantity.parentElement, 'true');
        //quantity.parentElement.setAttribute('data-error-visible', 'true');
        //quantity.focus();
        return false;
    } 
        quantity.style.border = "2px solid green";
        setAttributeDataError(quantity.parentElement, 'false');
       // quantity.parentElement.setAttribute('data-error-visible', 'false');
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
    //allLocations.focus();
    return false;
}

// TERMS OF USE  VALIDATION
function checkCheckbox() {
    if (checkbox1.checked === false) {
        setAttributeDataError(checkbox1.parentElement, 'true');
       // checkbox1.parentElement.setAttribute('data-error-visible', 'true');
       // checkbox1.focus();
        return false;
    } 
        checkbox1.style.border = "2px solid green";
        setAttributeDataError(checkbox1.parentElement, 'false');
       // checkbox1.parentElement.setAttribute('data-error-visible', 'false');
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


/* // ALL FORM VALIDATION
function allFieldsValidation() {
    checkFirstName();
    checkLastName();
    checkEmail();
    checkBirthdate();
    checkQuantity();
    checkLocation();
    checkCheckbox();
}
*/
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
    if (checkForm() === true) {
        alert('Votre formulaire est bien rempli !');
        document.querySelector('#form').reset();
        modalbg.style.display = "none";
    } else {
        alert('Veuillez remplir correctement tous les champs !');
    }
});

    
    










/*
const checkInputs = (value,type) => {
    let reponse = true;
    switch (type){
        case 'firstName':
            reponse = value && value.length >= 3 || !regex.test(value);
            if (!reponse) {
                firstName.parentElement.setAttribute('data-error-visible', 'true');
            }
            break;
        case 'lastName':
            reponse = value && value.length >= 3 || !regex.test(value);
            if (!reponse) {
                lastName.parentElement.setAttribute('data-error-visible', 'true');
            }
            break;
        case 'email':
            reponse = email.value.trim().match(re);
            break;
        case 'quantity':
            reponse = quantity.value > 0;
            break;
        case 'birthdate':
            reponse = birthdate.value.trim() === '';
            break;
        case 'locations':
            reponse = locations.length > 0;
            break;
        case 'checkbox1':
            reponse = checkbox1.checked;
            break;
        default: let reponse = document.querySelector('#form').checkValidity();
        }
    }


const checkForm = () => {
    let reponse = true;
    if (firstName.value.trim() === '' || !regex.test(firstName.value)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        reponse = false;
    }
    if (lastName.value.trim() === '' || !regex.test(lastName.value)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        reponse = false;
    }
    if (email.value.trim() === '' || !re.test(email.value)) {
        email.parentElement.setAttribute('data-error-visible', 'true');
        reponse = false;
    }
    if (quantity.value < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        reponse = false;
    }
    if (birthdate.value.trim() === '') {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        reponse = false;
    }
    if (locations.length === 0) {
        locations.parentElement.setAttribute('data-error-visible', 'true');
        reponse = false;
    }
    if (!checkbox1.checked) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        reponse = false;
    }
    return reponse;
}
/*

const checkInputs = (value,type) => {
    let reponse = true;
    switch (type) {
        case 'firstName':
            if(firstName.value.trim().length < 2 || first.value.trim() === ''|| !firstName.value.match(regex)){
                firstName.parentElement.setAttribute('data-error-visible', 'true');
            } ;
            break;
        case 'lastName':
            if(lastName.value.trim().length < 2 || last.value.trim() === '' || !lastName.value.match(regex)){
                lastName.parentElement.setAttribute('data-error-visible', 'true');
            };
            break;
        case 'email':
            if ( !email.value.trim().match(re)){
                email.parentElement.setAttribute('data-error-visible', 'true');
            }
            break;
        case 'quantity':
            if ( quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0){
                quantity.parentElement.setAttribute('data-error-visible', 'true');
            }
            break;
        case 'birthdate':
            if ( birthdate.value.trim() === ''){
                birthdate.parentElement.setAttribute('data-error-visible', 'true');
            }
            break;
        case 'locations':
            if ( locations.length < 0){
                locations.parentElement.setAttribute('data-error-visible', 'true');
            }
            break;
        case 'checkbox1':
            if ( !checkbox1.checked){
                checkbox1.parentElement.setAttribute('data-error-visible', 'true');
            }
            break;
        default: let reponse = document.querySelector('#form');
    
    }
   return reponse;
   
}
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formdata = new FormData(document.querySelector('#form'));
        checkForm(firstName.value, 'firstName');
        checkForm(lastName.value, 'lastName');
        checkForm(email.value, 'email');
        checkForm(quantity.value, 'quantity');
        checkForm(birthdate.value, 'birthdate');
        checkForm(locations, 'locations');
        checkForm(checkbox1, 'checkbox1');
        //if (valid) {
          //  form.submit();
       // }
    });



/*

const checkInputs = (value, type) => {
let valid = true;
switch (type) {
    case 'firstName':
        valid = firstName.value.trim().length > 2 || first.value.trim() !== ''|| !firstName.value.match(regex);
        if (valid = false) {
            firstName.parentElement.setAttribute('data-error-visible', 'true');
        }
        break;
    case 'lastName':
        valid = lastName.value.trim().length > 2 || last.value.trim() !== ''|| !lastName.value.match(regex);
        if (valid = false) {
            lastName.parentElement.setAttribute('data-error-visible', 'true');
        }
        break;
    case 'email':
        valid = email.value.trim().match(re);
        if (valid = false) {
            email.parentElement.setAttribute('data-error-visible', 'true');
        }
        break;
    case 'quantity':
        valid = quantity.value.trim() !== '' && quantity.value.trim() > 0;
        if (valid = false) {
            quantity.parentElement.setAttribute('data-error-visible', 'true');
        }
        break;
    case 'birthdate':
        valid = birthdate.value.trim() !== '';
        if (valid = false) {
            birthdate.parentElement.setAttribute('data-error-visible', 'true');
        }
        break;
    case 'locations':
        valid = locations.length > 0;
        if (valid = false) {
            locations.parentElement.setAttribute('data-error-visible', 'true');
        }
        break;
    case 'checkbox1':
        valid = checkbox1.checked;
        if (valid = false) {
            checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        }
        break;
    default: let valid = document.querySelector('#form').checkValidity();

}
}
checkInputs();





form.addEventListener('submit', (e) => {
    e.preventDefault();


    if (firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.match(regex)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
    }

    if (lastName.value.trim().length < 2 || last.value.trim() === '' || !lastName.value.match(regex)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
    }

    if (!email.value.trim().match(re)) {
        email.parentElement.setAttribute('data-error-visible', 'true');
    }

    if (quantity.value.trim().length < 0 || quantity.value.trim() === '') {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
    }

    if (birthdate.value.trim().length !== 10) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
    }

    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
    }

    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
    }
    
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked === true) {
            checked = true;
        }
    }

    else {
        
    }
})

        else {
            first.parentElement.setAttribute('data-error-visible', 'false');
            first.style.border = 'solid #279e7a 0.19rem';
            return true;
        }


      
    */