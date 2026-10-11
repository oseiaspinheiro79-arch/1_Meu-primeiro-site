const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

let contador = 0;

botao.addEventListener("click", function () {
  contador = contador + 1;

  if (contador >= 25) {
    mensagem.textContent = "Uau! Você chegou a " + contador + " cliques! 🎉";
  } else {
    mensagem.textContent = "Cliques: " + contador;
  }
});

const botaoZerar = document.getElementById("botaoZerar");

botaoZerar.addEventListener("click", function () {
  contador = 0;
  mensagem.textContent = "Cliques: " + contador;
});