export class UITesteDigitacao {
    constructor() {
        this.divTextoTeste = document.querySelector('.div-texto-teste')
        this.divInputTeste = document.querySelector('.div-input-teste')

        this.inputTeste = document.querySelector('.input-teste')
    }

    criarSpan() {
        const span = document.createElement('span')
        return span
    }

    criarDiv(classe1, classe2, classe3) {
        const div = document.createElement('div')
        div.classList.add(classe1)
        div.classList.add(classe2)
        div.classList.add(classe3)
        
        return div
    }

    criarBotao() {
        const botao = document.createElement('button')
        return botao
    }

    limparInput() {
        this.inputTeste.value = ""
    }
}