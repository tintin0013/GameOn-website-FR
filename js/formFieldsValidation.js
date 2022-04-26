// FORM FIELDS VALIDATION

const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const firstName = document.getElementById('first');
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');


function checkFirstName() {
    if (firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.match(regex)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = '2px solid #e54858';
        return false;
    }
    first.parentElement.setAttribute('data-error-visible', 'false');
    first.style.border = 'solid #279e7a 0.19rem';
    return true;
}

