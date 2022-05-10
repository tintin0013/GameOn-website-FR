const form = document.querySelector("#form");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const allLocations = document.querySelector("#allLocations");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const checkbox1 = document.querySelector("#checkbox1");
const input = document.getElementsByClassName("text-control");
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const validForm = document.getElementById("form-confirmation-submit");
const closeValidForm = document.getElementById("close-btn-confirmation");

const checkFormValid = (value, type, errorId) => {
  let isValid = true;
  switch (type) {
    case "inputFirstName":
       // console.log("in firstname")

        // console.log(value);
        // console.log(value.length);
        // console.log(value.length > 1);
        // console.log(value && value.length && value.length >= 2);
      isValid = value && value.length && value.length >= 2;
      let eltInputFirstName = document.getElementById(`${errorId}`);
      if (!isValid) {
        // let messageError
        // console.log(typeof value)
        // console.log(value.length)
        //   if( value.length < 1 || typeof value.length === "undefined"){    
        //     messageError = "La valeur ne peut pas être vide";
        //     }else{
        //         messageError = `${value} n'est pas valide`;
        //     }
        let messageError =
          value.length == 0
            ? "Le champ ne peut pas être vide"
            : `${value} n'est pas valide`;
           // console.log(messageError);
            //console.log(firstName.getAttributeNames);
            eltInputFirstName.setAttribute("data-error", `${messageError}`);
            return false;
      } else {
        eltInputFirstName.setAttribute("data-error", "");
      }
      break;
    case "inputLastName":
        //console.log("in lastname")

      isValid = value && value.length && value.length >= 2;
       let eltInputLastName = document.getElementById(`${errorId}`);
      if (!isValid) {
        let messageError =
          value.length == 0
            ? "Le champ ne peut pas être vide"
            : `${value} n'est pas valide`;
            eltInputLastName.setAttribute("data-error", `${messageError}`);
            return false;
      } else {
        eltInputLastName.setAttribute("data-error", ``);
      }
      break;
    case "inputEmail":
        //console.log("in email")
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isValid = value && value.length && re.test(value.trim().toLowerCase());
       let eltInputEmail = document.getElementById(`${errorId}`);
      if (!isValid) {
        let messageError =
          value.length == 0
            ? "L'Email est obligatoire"
            : `${value} n'est pas valide`;
            eltInputEmail.setAttribute("data-error", `${messageError}`);
            return false;
      } else {
        eltInputEmail.setAttribute("data-error", ``);
      }
      break;
    case "inputBirthdate":
       // console.log("in BD")

      const date = new Date(value);
      const currentDate = new Date();
      isValid =
        value &&
        value.length &&
        date &&
        date.getTime() &&
        date.getTime() < currentDate.getTime();
       let eltInputBirthdate = document.getElementById(`${errorId}`);
      if (!isValid) {
        let messageError =
          value.length == 0
            ? "La date de naissance est obligatoire"
            : `${value} n'est pas valide`;
            eltInputBirthdate.setAttribute("data-error", `${messageError}`);
        return false;
      } else {
        eltInputBirthdate.setAttribute("data-error", ``);
      }
      break;
    case "inputQuantity":
       // console.log("in quantity")

      const nb = parseInt(value);
      isValid = value && nb !== NaN && Number.isInteger(nb) && nb >= 0;
       let eltInputQuantity = document.getElementById(`${errorId}`);
      if (!isValid) {
        let messageError =
          value == 0
            ? "Le nombre de participation est obligatoire"
            : ``;
            eltInputQuantity.setAttribute("data-error", `${messageError}`);
            return false;
      } 
      else if (!isValid) {
        let messageError =
            value < 0 
                ? `${value} n'est pas valide`
                : "";
                eltInputQuantity.setAttribute("data-error", `${messageError}`);
            return false;
      }
      else {
        eltInputQuantity.setAttribute("data-error", ``);
      }
      break;
    case "allLocations":
      isValid = value && value.length;
       let eltInputAllLocations = document.getElementById(`${errorId}`);
      if (!isValid) {
        let messageError = "Veuillez sélectionner une ville" 
        eltInputAllLocations.setAttribute("data-error", `${messageError}`);
      } else {
        eltInputAllLocations.setAttribute("data-error", ``);
      }
      break;
    case "checkbox1":
       // console.log("in checkbox")
      isValid = value ;
      let eltInputCheckbox = document.getElementById(`${errorId}`);
      if (!isValid) {
        let messageError = "Vous devez accepter les conditions d'utilisation.";
             eltInputCheckbox.setAttribute("data-error", `${messageError}`);
            return false;
      } else {
        eltInputCheckbox.setAttribute("data-error", ``);
      }
      break;
    default:
      break;
  }
  //console.log("le champ " + type +  " est valide");
  return isValid;
};

const validationForm = () => {
  const reserveForm = {
    firstName: document.querySelector("#first").value,
    lastName: document.querySelector("#last").value,
    email: document.querySelector("#email").value,
    birthdate: document.querySelector("#birthdate").value,
    quantity: document.querySelector("#quantity").value,
    location: document.querySelector('input[name="location"]:checked')?.value,
    checkbox1: document.querySelector("#checkbox1").checked,
  };

  let isFormValid = true;
  isFormValid =
    checkFormValid(reserveForm.firstName, "inputFirstName", "firstError") &&
    isFormValid;
  isFormValid =
    checkFormValid(reserveForm.lastName, "inputLastName", "lastError") &&
    isFormValid;
  isFormValid =
    checkFormValid(reserveForm.email, "inputEmail", "emailError") && isFormValid;
  isFormValid =
    checkFormValid(reserveForm.birthdate, "inputBirthdate", "birthdateError") &&
    isFormValid;
  isFormValid =
    checkFormValid(reserveForm.quantity, "inputQuantity", "quantityError") &&
    isFormValid;
  isFormValid =
    checkFormValid(reserveForm.location, "allLocations", "allLocationsError") &&
    isFormValid;
  isFormValid =
    checkFormValid(reserveForm.checkbox1, "checkbox1", "checkboxError") &&
    isFormValid;
    

    return isFormValid;

};

// checkFormValid();
// validationForm();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validationForm()) {
        validForm.style.display = "block";
        modalbg.style.display = "none";
        form.reset();
    } else {
        // alert("Veuillez remplir correctement tous les champs !");
    }
    
});


closeValidForm.addEventListener("click", () => {
  validForm.style.display = "none";
});