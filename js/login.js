// Este código compara os dados com o cadastro salvo neste navegador.
document.getElementById("botao-login").addEventListener("click", function () {
    const emailDigitado = document.getElementById("email-login").value;
    const senhaDigitada = document.getElementById("senha-login").value;
    const emailSalvo = localStorage.getItem("guiaEmail");
    const senhaSalva = localStorage.getItem("guiaSenha");

    if (emailDigitado === emailSalvo && senhaDigitada === senhaSalva) {
        const nomeSalvo = localStorage.getItem("guiaNome");
        alert("Login realizado. Bem-vindo, " + nomeSalvo + "!");
        window.location.href = "inicio.html";
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
    }
});
