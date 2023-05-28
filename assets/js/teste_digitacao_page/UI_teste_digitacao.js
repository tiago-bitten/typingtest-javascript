export class UITesteDigitacao {
    constructor() {
        this.container = document.querySelector('.container')
        this.divTextoTeste = document.querySelector('.div-texto-teste')
        this.divInputTeste = document.querySelector('.div-input-teste')

        this.inputTeste = document.querySelector('.input-teste')
    }

    criarP() {
        const p = document.createElement('p')
        return p
    }

    criarSpan(classe) {
        const span = document.createElement('span')
        span.classList.add(classe)

        return span
    }

    criarDiv(dom, classe1, classe2) {
        const div = document.createElement('div')
        div.classList.add(classe1)
        div.classList.add(classe2)

        dom.appendChild(div)

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