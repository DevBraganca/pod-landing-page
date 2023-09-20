function validarEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email === "") {
        emailInput.classList.add("error");
        alert("Por favor, preencha o campo de email.");
        document.getElementById("email").style = "border = 1px, solid, #ff9393";
        document.getElementById("label").style = "display: block";
        

    } else if (!emailPattern.test(email)) {
        emailInput.classList.add("error");
        alert("Por favor, insira um email válido.");
        document.getElementById("label").style = "display: block";
    } else {
        emailInput.classList.remove("error");
        alert("Parabens tudo certo") ;
        document.getElementById("label").style = "display: none";
    }
}


    document.getElementById("email").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.getElementById("button").click();
        }
    });