function logar() {
    let input_senha = document.getElementById("input_password");
    let input_usuario = document.getElementById("input_username");
    let formulario = document.getElementById("form_cadastro");

    if(input_usuario.value == ""){
        input_usuario.focus()
    }
    else if(input_senha.value == ""){
        input_senha.focus()
    }
    else if(input_senha.value !== "" && input_usuario.value !== "") {
        formulario.submit();
    }
}

/*

                 GUARDAR REGEX EMAIL (PROTOTIPO)

[a-zA-Z0-9]{2,}+[@]{1}+(gmail|hotmail|yahoo){1}+[.]{1}+(com|br|gov) 

*/