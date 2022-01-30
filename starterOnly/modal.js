function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const formCloseBtn = document.querySelector(".close");

// Form Elements
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const date = document.getElementById("birthdate");
const nb = document.getElementById("quantity");
const tos = document.getElementById("checkbox1");
const checkbox = document.getElementsByName("location");
const btnsubmit = document.querySelector(".btn-submit");

disableSubmit();

// Form Listeners

first.addEventListener('input', (e) =>
{
  hideError(first);
  if(!isValidName(e.target.value))
  {
    showError(first);
  }
  enableSubmit();
})

last.addEventListener('input', (e) =>
{
  hideError(last);
  if(!isValidName(e.target.value))
  {
    showError(last);
  }
  enableSubmit();
})

email.addEventListener('input', (e) =>
{
  hideError(email);
  if(!isValidEmail(e.target.value))
  {
    showError(email);
  }
  enableSubmit();
})

date.addEventListener('input', (e) =>
{
  hideError(date);
  if(!isValidDate(e.target.value))
  {
    showError(date);
  }
  enableSubmit();
})

nb.addEventListener('input', (e) =>
{
  hideError(nb);
  if(!isValidNumber(e.target.value))
  {
    showError(nb);
  }
  enableSubmit();
})

tos.addEventListener('click', (e) =>
{
  console.log(tos);
})

checkbox.forEach((box) => box.addEventListener("click", (e) =>
{
  console.log(e.target.checked);
  hideError(checkbox);
  if(!isChecked(e.target.checked))
  {
    showError(checkbox);
  }

}))

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
formCloseBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Validate form
function validate() {

}

// Form Errors

function hideError(el) 
{
  el.closest('.formData').setAttribute('data-error-visible', false);
}

function showError(el) 
{
  el.closest('.formData').setAttribute('data-error-visible', true)
}

// isValid functions

function isValidName(name) 
{
  if(name.length > 2)
  {
    return true;
  }
  return false;
}

function isValidEmail(email)
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return true;
  }
  return false;
}

// Validates that the input string is a valid date format
function isValidDate(dateString)
{
  // First check for the pattern
  if(!/^\d{4}\/\d{2}\/\d{2}$/.test(dateString))
  {
    return true;
  }
  return false;
};

function isValidNumber(nb)
{
  let numbers = /^[0-9]+$/;
  if(nb.match(numbers))
  {
    return true;
  }
  return false;
}

function isChecked(checkbox) {
  hideError(checkbox);
  if(checkbox.checked)
  {
    return true;
  }
  return false;

}

function disableSubmit()
{
  btnsubmit.setAttribute('disabled', true);
}

function enableSubmit()
{
  btnsubmit.setAttribute('disabled', false);
}
