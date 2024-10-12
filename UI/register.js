let empId = document.querySelector("#empId"); 
let firstName =document.querySelector("#firstName"); 
let lastName = document.querySelector("#lastName"); 
let  email = document.querySelector("#email"); 
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword"); 
let address = document.querySelector("#address"); 
let contact = document.querySelector("#contact"); 
let submit = document.querySelector("#submit"); 


function uniqueId(){
let time = new Date().getTime();
    let random = Math.floor(Math.random() * 1000000); return (time + random).toString().slice(-7);
}

empId.value = uniqueId(); 
let storage = []; 
let dataFromStorage = JSON.parse(localStorage.getItem("data")); 
if (dataFromStorage) { storage = dataFromStorage; }
submit.addEventListener("click", (e) => {
    let flag = true; 
    let i = 0; 
    if (firstName.value == "") 
        { 
            flag = false;
             i++; 
             firstName.style.borderColor = 'red'; 
             e.preventDefault();
             }
    if (lastName.value == "") {
        flag = false; i++; lastName.style.borderColor = 'red';
        e.preventDefault();
    } if (email.value == "") {
        flag = false; i++;
        email.style.borderColor = 'red'; e.preventDefault();
    } if (password.value == "") {
        flag =
        false; i++; password.style.borderColor = 'red'; e.preventDefault();
    }
    if (confirmPassword.value == "") {
        flag = false; i++;
        confirmPassword.style.borderColor = 'red'; e.preventDefault();
    } if (password.value !=
        confirmPassword.value) {
            flag = false; i++; confirmPassword.style.borderColor =
                'red'; e.preventDefault();
    } if (address.value == "") {
        flag = false; i++;
        address.style.borderColor = 'red'; e.preventDefault();
    } if (contact.value == "") {
        flag =
        false; i++; contact.style.borderColor = 'red'; e.preventDefault();
    } if (flag) {
        let obj = {
            empId: empId.value, firstName: firstName.value, lastName:
                lastName.value, email: email.value, password: password.value, address:
                address.value, contact: contact.value
        } 
        storage.push(obj);
        localStorage.setItem("register", JSON.stringify(storage));
        document.querySelector("#message").innerHTML = `<div style='color:green'>
<h3>RegistrationSuccessful</h3>
<h4>Employee Id: ${empId.value}</h4>
<h4>Employee Name: ${firstName.value + lastName.value}</h4>
 <h4>Employee Email: ${email.value}</h4>
 </div>` 
setTimeout((e) => {
                window.location.href = "../emplogin.html"; },5000); } else{ alert(`${i} field(s) empty!`); } });