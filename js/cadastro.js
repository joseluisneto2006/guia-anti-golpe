// Este código demonstra o cadastro no navegador atual.
document.getElementById("botao-cadastro").addEventListener("click", function () {
    const nome = document.getElementById("nome-cadastro").value;
    const email = document.getElementById("email-cadastro").value;
    const senha = document.getElementById("senha-cadastro").value;

    if (nome === "" || email === "" || senha === "") {
        alert("Preencha todos os campos.");
    } else {
        localStorage.setItem("guiaNome", nome);
        localStorage.setItem("guiaEmail", email);
        localStorage.setItem("guiaSenha", senha);

        alert("Cadastro realizado. Agora faça login.");
        window.location.href = "login.html";
    }
});
