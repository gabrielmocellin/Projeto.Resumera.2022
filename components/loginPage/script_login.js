function logar() {
    let input_senha = document.getElementById("input_password");
    let input_usuario = document.getElementById("input_username");
    let formulario = document.getElementById("form_cadastro");

    const re = /^[a-z0-9]{3,}\@{1}(gmail|yahoo|hotmail|outlook|live){1}\.{1}(com|br){1}(\.+br)?$/;
    
    
    if(input_usuario.value == ""){
        input_usuario.focus()
    }

    else if(input_senha.value == ""){
        input_senha.focus()
    }
    else if(input_senha.value !== "" && re.test(input_usuario.value) == true) {
        formulario.submit();
        alert("Cadastro Concluido!")
    }
    else if(input_senha.value !== "" && re.test(input_usuario.value) == true) {
        formulario.submit();
        alert("Cadastro Concluido!")
    }
}

/*

                 GUARDAR REGEX EMAIL (PROTOTIPO)

[a-zA-Z0-9]{2,}+[@]{1}+(gmail|hotmail|yahoo){1}+[.]{1}+(com|br|gov) 

*/