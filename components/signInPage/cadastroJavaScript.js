function register() {
    let input_confirm = document.getElementById("input-confirm"); let img_confirm = document.getElementById("check-img-confirm");
    let input_senha = document.getElementById("input-password"); let img_senha = document.getElementById("check-img-password");
    let input_email = document.getElementById("input-email"); let img_email = document.getElementById("check-img-email");
    let form = document.getElementById("form");

    const reEmail = /^[a-z0-9]{1,}@[a-z0-9]+\..{1,}$/;
    const rePassword = /^.{6,}$/;

    function isEmail(email){
        return (reEmail.test(email))
    }

    function isPValid(password){
        return (rePassword.test(password))
    }

   if(input_email.value == ""){
    input_email.focus()
   }

   else if(input_senha.value == ""){
    input_senha.focus()
   }

   else if(input_confirm.value == ""){
    input_confirm.focus()
   }

   else if(isEmail(input_email.value) == false){
    img_email.style.visibility = "visible"
    img_email.src = "midia/exclamation-icon.png"
   }

   else if(isPValid(input_senha.value) == false){
    img_senha.style.visibility = "visible"
    img_senha.src = "midia/exclamation-icon.png"
    input_senha.value = "";
    input_confirm.value = "";
   }

   else if(isEmail(input_email.value) == true && isPValid(input_senha.value) == true && input_senha.value != input_confirm.value){
    img_email.style.visibility = "visible"
    img_senha.style.visibility = "visible"
    img_confirm.style.visibility = "visible"
    img_email.src = "midia/check-icon.png"
    img_senha.src = "midia/check-icon.png"
    img_confirm.src = "midia/exclamation-icon.png"
    input_confirm.value = "";
   }

   else if(isEmail(input_email.value) == true && isPValid(input_senha.value) == true && input_senha.value == input_confirm.value){
    img_email.style.visibility = "visible"
    img_senha.style.visibility = "visible"
    img_confirm.style.visibility = "visible"
    img_email.src = "midia/check-icon.png"
    img_senha.src = "midia/check-icon.png"
    img_confirm.src = "midia/check-icon.png"
   }
}