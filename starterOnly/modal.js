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

// Form validation

let fi, la, em, da, nu, ch, to = false;

disableSubmit();

// Form Listeners

first.addEventListener('input', (e) =>
{
  hideError(first);
  if(!isValidName(e.target.value))
  {
    fi = false;
    showError(first);
    disableSubmit();
  }else{
    fi = true;
    enableSubmit();
  }
})

last.addEventListener('input', (e) =>
{
  hideError(last);
  if(!isValidName(e.target.value))
  {
    la = false;
    showError(last);
    disableSubmit();
  }else{
    la = true;
    enableSubmit();
  }
})

email.addEventListener('input', (e) =>
{
  hideError(email);
  if(!isValidEmail(e.target.value))
  {
    em = false;
    showError(email);
  }else{
    em = true;
    enableSubmit();
  }
})

date.addEventListener('input', (e) =>
{
  hideError(date);
  if(!isValidDate(e.target.value))
  {
    da = false;
    showError(date);
    disableSubmit();
  }else{
    da = true;
    enableSubmit();
  }
})

nb.addEventListener('input', (e) =>
{
  hideError(nb);
  if(!isValidNumber(e.target.value))
  {
    nu = false;
    showError(nb);
    disableSubmit();
  }else{
    nu = true;
    enableSubmit();
  }
})

tos.addEventListener('click', (e) =>
{
  hideError(e.target);
  if(!isChecked(e.target))
  {
    to = false;
    showError(e.target);
    disableSubmit();
  }else{
    to = true;
    enableSubmit();
  }
})

checkbox.forEach((box) => box.addEventListener("click", (e) =>
{
  hideError(e.target);
  if(!isChecked(e.target))
  {
    ch = false;
    showError(e.target);
    disableSubmit();
  }else{
    ch = true;
    enableSubmit();
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

function closeModal() {
  modalbg.style.display = "none";
}

// Validate form
function validate() {
  document.querySelector(".modal-body").innerHTML = '<p>Merci de votre inscription !</p>';
  form.submit(function(e){
    e.preventDefault();
  })
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

// Submit interactions

function disableSubmit()
{
  btnsubmit.setAttribute('disabled', true);
}

function enableSubmit()
{
  if(fi & la & em & nu & da & to & ch == true)
  {
    btnsubmit.removeAttribute('disabled', true);
  }
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
  // Check for the pattern
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
  if(checkbox.checked)
  {
    return true;
  }
  return false;

}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}