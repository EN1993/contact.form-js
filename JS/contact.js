
const form = document.querySelector("#contactForm");

const Name = document.querySelector("#name");
const nameError = document.querySelector(".nameError");

const Address = document.querySelector("#address");
const addressError = document.querySelector(".addressError");

const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");

const subject = document.querySelector("#subject");
const SubjectError = document.querySelector(".SubjectError");

const message = document.querySelector("#message");

const button = document.querySelector("button");

// if all input pass validation enable the button
function checkIfButtonIsDisabled() {
  if (checkLength(Name.value, 1) && checkLength(Address.value, 25) && validateEmail(email.value) && checkLength(subject.value, 10)) {
    button.disabled = false;
  } else {
    message.innerHtml="";
    button.disabled = true;
  }
}

Name.addEventListener("keyup", checkIfButtonIsDisabled);
Address.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);

function submitForm(event) {
  event.preventDefault();
  message.innerHTML = `<div class="message">Your message has been sent</div>`;
  form.reset();
}


// calling and styling the error message
function validateForm(event) {

  event.preventDefault();

  if (checkLength(Name.value, 1) === true ) {
    nameError.style.display ="none";
  } else {
    nameError.style.display ="block";
  }


  if (checkLength(Address.value, 25) === true) {
    addressError.style.display ="none";
  } else {
    addressError.style.display ="block";
  }


  if (validateEmail(email.value) === true) {
    emailError.style.display ="none";
  } else {
    emailError.style.display ="block";
  }


  if (checkLength(subject.value, 10) === true ) {
    SubjectError.style.display ="none";
  } else {
    SubjectError.style.display ="block";
  }

  // console.log(hello);
}

form.addEventListener("submit", validateForm, submitForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}





