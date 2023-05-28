export class HomePage {
    constructor(ui) {
        this.ui = ui

        this.divHomeButtons = this.ui.divHomeButtons

        this.tamanhoTeste = 0
    }

    eventoClickHome() {
        this.divHomeButtons.addEventListener('click', e => {
            const event = e.target

            if (event.classList.contains('button-grande')) {
                this.setTamanhoTeste = 30

            } else if (event.classList.contains('button-medio')) {
                this.setTamanhoTeste = 20

            } else if (event.classList.contains('button-pequeno')) {
                this.setTamanhoTeste = 10

            } else {
                throw new Error('ERRO HOME PAGE SELEÇÃO DE BUTOES')
            }

            window.location.href = '../teste_digitacao_page.html'
        })
    }

    get getTamanhoTeste() {
        return this.tamanhoTeste
    }

    set setTamanhoTeste(valor) {
        this.tamanhoTeste = valor
    }
}