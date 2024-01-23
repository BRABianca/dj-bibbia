const personagens = document.querySelectorAll(".personagem")
const botoes = document.querySelectorAll(".botao")

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () =>{
        removerSelecaoBotao();      
        botao.classList.add("selecionado")

        removerSelecaoPersonagem();
        personagens[i].classList.add("selecionado")
    })
});

function removerSelecaoBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}