const email_form = document.getElementById("email");
const submit_btn = document.getElementById("email-submit");
const err_msj = document.getElementById("err-message");

submit_btn.addEventListener("click", () => {
    let validEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email_form.value.match(validEmail)){
        err_msj.hidden = true;
        email_form.value = "";
        alert("Access requested")
    } else {
        err_msj.hidden = false;
    }
})