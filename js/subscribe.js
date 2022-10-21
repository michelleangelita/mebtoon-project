function validateName() {
    let name = document.forms['formId']['nameId'].value;
    let length = name.length;
    let check = 0;
    
    if(name=="")
    {
        alert("Name must be filled")
        return false;
    }
    else
    {

    for (let index = 0; index < length; index++) {
        let flag = name.charAt(index);
        if (!isNaN(flag)) {
            check++;
        }
        else if(!name.match(/\S/)){
            check++;
        }
    }
    if(check == 0) {
         return true;
    }
    else if(check > 0) {
        alert("Name must only contains alphabet")
        return false;
    }
    }
}

function validateEmail(){
    let check = false;
    let email = document.getElementById('emailId').value;
    let arrEmail = email.split('@')

    if(email == ""){
        alert("Your email must be filled")
    }
    if(arrEmail.length !=2)
    {
        alert("Your email is invalid")
    }
    else if(arrEmail[0].length<=1)
    {
        alert("Your email is invalid")
    }
    else if(arrEmail[1]!='email.com')
    {
        alert('Please input your email ends with @email.com')
    }
    else
    {
        check = true;
    }
    return check;
}

function validatePhone() {
    let phone = document.forms['formId']['phoneId'].value;
    let length = phone.length;
    let check = 0;
    
    if(phone == ""){
        alert("Phone number must be filled")
        return false;
    }

    else{
        for (let index = 0; index < length; index++) {
            let flag = phone.charAt(index);
            if (isNaN(flag)) {
                check++;
            }
        }
        if(check == 0) {
            return true;
        }
        else if(check != 0) {
            alert("Phone number must be numeric")
            return false;
        }
    }
}

function validateCountry(){
    let check = false;
    let e = document.getElementById("countryId");
    let optionSelIndex = e.options[e.selectedIndex].value;
    let optionSelectedText = e.options[e.selectedIndex].text;

    if (optionSelIndex != 0) 
    {
      check = true;
    }
    else if (optionSelIndex == 0) 
    {
        alert("Please select your country");
    }
    else 
    {

    }
    return check;
}

function validateCheckBox(){
    let check = false;
    let terms = document.getElementById('termsId');

    if(!terms.checked)
    {
        alert("Please check to the terms and condition")
    }
    else
    {
        check = true;
    }
    return check;
}

let form = document.getElementById('formId')

form.addEventListener('submit', function(e){
    
    let isNameValid = validateName(),
        isEmailValid = validateEmail(),
        isPhoneValid = validatePhone(),
        isCountryValid = validateCountry(),
        isCheckBoxValid = validateCheckBox();

    if (true == isNameValid && true == isEmailValid && true == isPhoneValid
        && true == isCountryValid && true == isCheckBoxValid) {
            alert("Subscription Successful")
         $('#formId').attr('action','home.html');
    }
    else {
        e.preventDefault();
    }
})