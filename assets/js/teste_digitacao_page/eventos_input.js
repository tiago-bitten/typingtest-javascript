export class EventosInput {
  constructor(testeDigitacao, pontuacao, tempo, ui) {
    this.testeDigitacao = testeDigitacao // Objeto do teste de digitação
    this.pontuacao = pontuacao // Objeto de pontuação
    this.tempo = tempo // Objeto de tempo
    this.ui = ui // Objeto de interface do usuário

    this.divInputTeste = this.ui.divInputTeste // Elemento HTML da div de input do teste
    this.inputTeste = this.ui.inputTeste // Elemento HTML de input do teste
  }

  eventoCarregarTeste() {
    window.document.addEventListener('DOMContentLoaded', e => {
      this.inputTeste.focus() // Foca no elemento de input do teste ao carregar a página
      this.testeDigitacao.underlinePalavra() // Sublinha a primeira palavra do teste
    })

    document.addEventListener('click', e => {
      this.inputTeste.focus() // Foca no elemento de input do teste ao clicar em qualquer lugar da página
    })
  }

  eventoChecarPalavra() {
    this.divInputTeste.addEventListener('keypress', e => {
      if (e.key === ' ' || e.key === 'Enter') { // Verifica se a tecla pressionada é espaço ou Enter
        this.checarPalavra() // Chama o método para checar a palavra digitada
        this.ui.limparInput() // Limpa o valor do input do teste
      }
    });
  }

  checarPalavra() {
    const inputTeste = this.inputTeste.value.trim() // Obtém o valor do input do teste e remove os espaços em branco no início e no fim
    const palavraCorreta = this.testeDigitacao.palavrasRandomizadas[0] // Obtém a primeira palavra do array de palavras randomizadas

    if (inputTeste === '') return // Se o input estiver vazio, retorna sem fazer nada

    if (inputTeste === palavraCorreta) { // Se o input for igual à palavra correta
      this.testeDigitacao.validarPalavra(true) // Marca a palavra como correta no teste de digitação
      this.pontuacao.acertos++ // Incrementa o número de acertos na pontuação
      this.testeDigitacao.palavrasRandomizadas.splice(0, 1) // Remove a palavra correta do array de palavras randomizadas

    } else { // Se o input for diferente da palavra correta
      this.testeDigitacao.validarPalavra(false) // Marca a palavra como incorreta no teste de digitação
      this.pontuacao.erros++ // Incrementa o número de erros na pontuação
    }
  }
}
