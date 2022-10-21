<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="cadastroStyles.css">
    <title>Resumera | Registrar-se</title>
</head>
<body onload="setTimeout(trocar_logo, 5000)">

    <div id="container">
        <div id= "esquerda_div">
            <img id= "logo_img" src="midia/ResumeraLogoGif.gif">
        </div>

        <div id="direita_div">
            <form id= "form-register" name= "form-register" method= "POST" action= 'cadastro2.php'>
                
                <!-- Nome -->
                <label class= "form_label">Nome:</label>
                <input name= "input-nome" id= "input-nome" class="form_input" type="text" placeholder="Digite seu nome">

                <!-- E-Mail -->
                <label class= "form_label">E-mail:</label>
                <input name= "input-email" id= "input-email" class="form_input" type="text" placeholder="Digite o seu E-mail..."/>

                <!-- Senha -->
                <label class= "form_label">Senha:</label>
                <input name= "input-senha" id= "input-senha" class="form_input" type="password" placeholder="Digite a sua senha..."/>

                <!-- Confirmar Senha -->
                <label class= "form_label">Confirme sua senha:</label>
                <input id= "input-confirmar" class="form_input" type="password" placeholder="Digite de novo a sua senha..."/>
                
                <!-- Botão -->
                <input id= "input-prosseguir" type="button" value="Prosseguir" onclick="register_first_part()">
                
                
            </form>
        </div>
    </div>
</body>


<script language= "JavaScript" src="cadastroJavaScript.js"></script>
</html>