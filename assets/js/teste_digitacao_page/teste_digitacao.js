import { Palavras } from "./palavras.js";
import { UITesteDigitacao } from "./UI_teste_digitacao.js";

export class TesteDigitacao {
    constructor() {
        this.palavra = new Palavras()
        this.ui = new UITesteDigitacao()

        this.tamanhoTeste = 10

        this.palavrasRandomizadas = this.palavra.randomizarPalavras(this.tamanhoTeste)

        this.divTextoTeste = this.ui.divTextoTeste
    }

    // Criação do texto para o teste
    criarTeste() {
        for (let i in this.palavrasRandomizadas) {
            const span = this.ui.createSpan()
            span.textContent = this.palavrasRandomizadas[i]
            this.divTextoTeste.appendChild(span)
        }
    }

     

    set setTamanhoTeste(valor) {
        this.tamanhoTeste = valor
    }
}