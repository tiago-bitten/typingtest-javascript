export class EventosInput {
  constructor(testeDigitacao, pontuacao, tempo, ui) {
    this.testeDigitacao = testeDigitacao
    this.pontuacao = pontuacao
    this.tempo = tempo
    this.ui = ui

    this.divInputTeste = this.ui.divInputTeste
    this.inputTeste = this.ui.inputTeste
  }


  eventoCarregarTeste() {
    window.document.addEventListener('DOMContentLoaded', e => {
      this.inputTeste.focus()
      this.testeDigitacao.underlinePalavra()
    })

    document.addEventListener('click', e => {
      this.inputTeste.focus()
    })
  }

  eventoChecarPalavra() {
    this.divInputTeste.addEventListener('keypress', e => {
      if (e.key === ' ' || e.key === 'Enter') {
        this.checarPalavra()
        this.ui.limparInput()
      }
    });
  }

  checarPalavra() {
    const inputTeste = this.inputTeste.value.trim()

    if (inputTeste === '') return
    if (inputTeste === this.testeDigitacao.palavrasRandomizadas[0]) {
      this.testeDigitacao.validarPalavra(true)

      this.pontuacao.acertos++

      this.testeDigitacao.palavrasRandomizadas.splice(0, 1)

      return

    } else {
        this.testeDigitacao.validarPalavra(false)
        this.pontuacao.erros++
        return
    }
  }
}