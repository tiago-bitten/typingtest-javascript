import { UITesteDigitacao } from "./UI_teste_digitacao.js";

export class EventosInput {
  constructor(testeDigitacao) {
    this.ui = new UITesteDigitacao();
    this.testeDigitacao = testeDigitacao;

    this.divInputTeste = this.ui.divInputTeste;
    this.inputTeste = this.ui.inputTeste;
  }

  eventoApontarCursorInput() {
    window.document.addEventListener('DOMContentLoaded', e => {
      this.inputTeste.focus()
    })

    document.addEventListener('click', e => {
      this.inputTeste.focus()
    })
  }

  eventoChecarPalavra() {
    this.divInputTeste.addEventListener('keypress', e => {
      if (e.key === ' ' || e.key === 'Enter') {
        this.checarPalavra();
        this.ui.limparInput()
      }
    });
  }

  checarPalavra() {
    const inputTeste = this.inputTeste.value.trim();

    if (inputTeste === '') return;
    if (inputTeste === this.testeDigitacao.palavrasRandomizadas[0]) {
      console.log('certo');

      this.testeDigitacao.palavrasRandomizadas.splice(0, 1);

      return;

    } else {
        console.log('erro');
    }
  }
}
