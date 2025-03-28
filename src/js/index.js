const personagens = document.querySelectorAll(".personagem");
const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao, i) => {
  botao.addEventListener("click", () => {
    removerSelecaoBotao();
    botao.classList.add("selecionado");

    removerSelecaoPersonagem();
    personagens[i].classList.add("selecionado");

    // Lazy load do iframe (YouTube, SoundCloud, etc)
    const personagemAtivo = personagens[i];
    const iframe = personagemAtivo.querySelector("iframe");

    if (iframe && iframe.dataset.src && !iframe.src) {
      iframe.src = iframe.dataset.src;
    }
  });
});

function removerSelecaoBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
  }
}

function removerSelecaoPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  if (personagemSelecionado) {
    personagemSelecionado.classList.remove("selecionado");
  }
}
