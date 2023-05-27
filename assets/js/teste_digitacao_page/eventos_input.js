export class EventosInput {
  constructor(testeDigitacao, pontuacao, ui) {
    this.ui = ui
    this.testeDigitacao = testeDigitacao
    this.pontuacao = pontuacao

    this.divInputTeste = this.ui.divInputTeste
    this.inputTeste = this.ui.inputTeste
  }

  eventoApontarCursorInput() {
    window.document.addEventListener('DOMContentLoaded', e => {
      this.inputTeste.focus()

      this.testeDigitacao.underlinePalavraAtual()
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
      this.testeDigitacao.underlinePalavraAtual()
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
