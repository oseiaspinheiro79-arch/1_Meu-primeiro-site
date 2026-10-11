const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

let contador = 0;

botao.addEventListener("click", function () {
  contador = contador + 1;
  mensagem.textContent = "Cliques: " + contador;
});

const botaoZerar = document.getElementById("botaoZerar");

botaoZerar.addEventListener("click", function () {
  contador = 0;
  mensagem.textContent = "Cliques: " + contador;
});