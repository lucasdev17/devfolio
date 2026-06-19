document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('mensagemBtn');
  const mensagem = document.getElementById('mensagem');

  if (botao && mensagem) {
    botao.addEventListener('click', function () {
      mensagem.textContent = 'Obrigado por visitar meu portfólio!';
    });
  }
});
