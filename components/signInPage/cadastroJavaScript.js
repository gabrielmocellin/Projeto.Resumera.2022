var input_nome_telefone = document.getElementById("input-nome-telefone");

var input_senha = document.getElementById("input-senha");
var input_confirm = document.getElementById("input-confirmar");

var input_email = document.getElementById("input-email");

var form = document.getElementById("form-register");







function register() {

    const reName = /^[a-zA-Z]{1,150}$/;
    const reEmail = /^[a-z0-9]{1,}@[a-z0-9]+\..{1,}$/;
    const rePassword = /^.{6,}$/;

    function isName(name){
        return (reName.test(name))
    }

    function isEmail(email){
        return (reEmail.test(email))
    }

    function isPValid(password){
        return (rePassword.test(password))
    }


   if(input_nome_telefone.value == ""){
    input_nome_telefone.focus()
   }
   else if(input_email.value == ""){
    input_email.focus()
   }

   else if(input_senha.value == ""){
    input_senha.focus()
   }

   else if(input_confirm.value == ""){
    input_confirm.focus()
   }

   else if(isName(input_nome_telefone.value) == false){
    alert("Nome inválido! Apenas de 1 a 150 LETRAS </br> será aceito!")
    input_nome_telefone.value = "";
    input_nome_telefone.focus();
   }   

   else if(isEmail(input_email.value) == false){
    alert("E-mail inválido!")
    input_email.value = "";
    input_email.focus();
   }

   else if(isPValid(input_senha.value) == false){
    alert("Senha inválida!");
    input_senha.value = "";
    input_confirm.value = "";
   }

   else if(isName(input_nome_telefone.value) == true && isEmail(input_email.value) == true && isPValid(input_senha.value) == true && input_senha.value != input_confirm.value){
    alert("Senhas nao coincidem! Tente novamente...");
    input_confirm.value = "";
   }

   else if(isName(input_nome_telefone.value) == true && isEmail(input_email.value) == true && isPValid(input_senha.value) == true && input_senha.value == input_confirm.value){
    alert("Cadastrado!");
    prosseguir();
   }
}

function prosseguir(){
    var value_name = input_nome_telefone.value;
    var value_email = input_email.value;
    var value_password = input_senha;

    input_confirm.style.visibility = "hidden";
    input_email.style.visibility = "hidden";
    input_senha.style.visibility = "hidden";

    document.getElementById("labelNome").innerText = "Telefone";
    input_nome_telefone.placeholder = "(XX)XXXXX-XXXX";
    input_nome_telefone.value = "";

    document.getElementsByClassName("labelInput").style.visibility = "hidden";

}


function trocar_logo(){
    let img = document.getElementById("img-logo")
    img.src = "midia/ResumeraLogoPNG.png"
}