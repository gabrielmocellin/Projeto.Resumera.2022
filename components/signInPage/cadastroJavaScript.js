function register() {
    let input_confirm = document.getElementById("input-confirm")
    let input_senha = document.getElementById("input-password");
    let input_email = document.getElementById("input-email");
    let form = document.getElementById("form");

    const reEmail = /^[a-z0-9]{1,}@.{1,}\..{1,}$/;
    const rePassword = /^.{6,16}$/;

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

   else if(isEmail(input_email.value) == true && isPValid(input_senha.value) && input_senha.value == input_confirm.value){
    alert("Tudo certo :)!")
   }
}