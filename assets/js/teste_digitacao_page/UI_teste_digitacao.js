export class UITesteDigitacao {
    constructor() {
        this.divTextoTeste = document.querySelector('.div-texto-teste')
        this.divInputTeste = document.querySelector('.div-input-teste')

        this.inputTeste = document.querySelector('.input-teste')
    }

    createSpan() {
        const span = document.createElement('span')
        return span
    }

    limparInput() {
        this.inputTeste.value = ""
    }
}