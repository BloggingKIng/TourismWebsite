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
    alert("You have entered an invalid email address!")
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
