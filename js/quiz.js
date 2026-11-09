const botaoFinalizar = document.getElementById("botao-finalizar");
const formularioQuiz = document.getElementById("formulario-quiz");
const resultadoQuiz = document.getElementById("resultado-quiz");

botaoFinalizar.addEventListener("click", function () {
    let pontos = 0;

    if (document.getElementById("q1-b").checked) {
        pontos = pontos + 1;
    }

    if (document.getElementById("q2-b").checked) {
        pontos = pontos + 1;
    }

    if (document.getElementById("q3-c").checked) {
        pontos = pontos + 1;
    }

    if (document.getElementById("q4-a").checked) {
        pontos = pontos + 1;
    }

    if (document.getElementById("q5-d").checked) {
        pontos = pontos + 1;
    }

    resultadoQuiz.textContent = "Você acertou " + pontos + " de 5 perguntas.";
});

formularioQuiz.addEventListener("reset", function () {
    resultadoQuiz.textContent = "Sua pontuação aparecerá aqui ao finalizar o quiz.";
});
