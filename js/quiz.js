const botaoFinalizar = document.getElementById("botao-finalizar");
const formularioQuiz = document.getElementById("formulario-quiz");
const resultadoQuiz = document.getElementById("resultado-quiz");

botaoFinalizar.addEventListener("click", function () {
    let respostasRespondidas = 0;
    let pontos = 0;

    if (document.getElementById("q1-a").checked || document.getElementById("q1-b").checked ||
        document.getElementById("q1-c").checked || document.getElementById("q1-d").checked) {
        respostasRespondidas = respostasRespondidas + 1;
    }

    if (document.getElementById("q2-a").checked || document.getElementById("q2-b").checked ||
        document.getElementById("q2-c").checked || document.getElementById("q2-d").checked) {
        respostasRespondidas = respostasRespondidas + 1;
    }

    if (document.getElementById("q3-a").checked || document.getElementById("q3-b").checked ||
        document.getElementById("q3-c").checked || document.getElementById("q3-d").checked) {
        respostasRespondidas = respostasRespondidas + 1;
    }

    if (document.getElementById("q4-a").checked || document.getElementById("q4-b").checked ||
        document.getElementById("q4-c").checked || document.getElementById("q4-d").checked) {
        respostasRespondidas = respostasRespondidas + 1;
    }

    if (document.getElementById("q5-a").checked || document.getElementById("q5-b").checked ||
        document.getElementById("q5-c").checked || document.getElementById("q5-d").checked) {
        respostasRespondidas = respostasRespondidas + 1;
    }

    if (respostasRespondidas < 5) {
        alert("Responda todas as cinco perguntas antes de finalizar o quiz.");
    } else {
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
    }
});

formularioQuiz.addEventListener("reset", function () {
    resultadoQuiz.textContent = "Sua pontuação aparecerá aqui ao finalizar o quiz.";
});
