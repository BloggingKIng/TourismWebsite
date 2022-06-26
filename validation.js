function containsNumber(str) {
    return /\d/.test(str);
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ]/;
    return specialChars.test(str);
  }

function check_name (name){
    if (!containsNumber(name) && !containsSpecialChars(name)) {
        document.getElementById('name-valid').classList.add('is-valid');
        document.getElementById('name-valid').classList.remove('is-invalid');
    }

    else {

        document.getElementById('name-valid').classList.add('is-invalid');
        document.getElementById('name-valid').classList.remove('is-valid');
    }
}

function check_Lastname (name){
    if (!containsNumber(name) && !containsSpecialChars(name)) {
        document.getElementById('Lastname-valid').classList.add('is-valid');
        document.getElementById('Lastname-valid').classList.remove('is-invalid');
    }

    else {

        document.getElementById('Lastname-valid').classList.add('is-invalid');
        document.getElementById('Lastname-valid').classList.remove('is-valid');
    }
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    document.getElementById('email-valid').classList.add('is-valid');
    document.getElementById('email-valid').classList.remove('is-invalid');
    return (true)
  }
  else {
    document.getElementById('email-valid').classList.add('is-invalid');
    document.getElementById('email-valid').classList.remove('is-valid');
    return (false)
}  
}

function agreeto(checkbox){
    checkbox = document.getElementById(checkbox)
    if (checkbox.checked){
        console.log('woohooo')
        checkbox.classList.add('is-valid');
        checkbox.classList.remove('is-invalid');
    }

    else {
        checkbox.classList.add('is-invalid')
        checkbox.classList.remove('is-valid')
        
    }
}


const alertPlaceholder = document.getElementById('AlertPlaceHolder')
var danger = document.getElementById('alert-place')
const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

var true_false = []
function finalvalidation (){

    var isName = document.getElementById('name-valid')
    if (isName.classList.contains('is-valid')&& isName.value!=''){
        console.log('validName')
        true_false.push(true)
    }

    else {
        danger.classList.remove('d-none')
        alert('The First Name entered is Invalid or is empty')
        true_false.push(false)
    }

    var isLastName = document.getElementById('Lastname-valid')
    if (isLastName.classList.contains('is-valid')&& isLastName.value!=''){
        console.log('validLastName')
        true_false.push(true)
    }

    else {
        danger.classList.remove('d-none')
        alert('The Last Name entered is Invalid or is empty')
        true_false.push(false)
    }

    var isEmail = document.getElementById('email-valid')
    if (isEmail.classList.contains('is-valid')&& isLastName.value!=''){
        console.log('ValidEmail')
        true_false.push(true)
    }
    else {
        danger.classList.remove('d-none')
        alert('You have entered an invalid email!')
        true_false.push(false)
    }

    if (true_false.includes(false)){
        return false
    }

    else {
        return true
    }
}