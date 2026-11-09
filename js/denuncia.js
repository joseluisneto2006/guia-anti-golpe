const tipoRelato = document.getElementById("tipo-relato");
const relato = document.getElementById("relato");
const nomeRelato = document.getElementById("nome-relato");
const botaoEnviar = document.getElementById("enviar-relato");

botaoEnviar.addEventListener("click", function () {
    if (tipoRelato.value === "" || relato.value === "") {
        alert("Preencha o tipo e o relato antes de enviar.");
    } else {
        alert("Relato confirmado! Esta é apenas uma demonstração: nada foi enviado nem armazenado.");

        tipoRelato.value = "";
        relato.value = "";
        nomeRelato.value = "";
    }
});
