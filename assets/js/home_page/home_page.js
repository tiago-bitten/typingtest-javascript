import { UIHomePage } from "./UI_home_page.js";

export class HomePage {
    constructor() {
        this.ui = new UIHomePage()
        this.divHomeButtons = this.ui.divHomeButtons

        this.tamanhoTeste = 0
    }

    eventoClickHome() {
        this.divHomeButtons.addEventListener('click', e => {
            const event = e.target


            if (event.classList.contains('button-grande')) {
                this.tamanhoTeste = 30

            } else if (event.classList.contains('button-medio')) {
                this.tamanhoTeste = 20

            } else if (event.classList.contains('button-pequeno')) {
                this.tamanhoTeste = 10

            } else {
                throw new Error('ERRO HOME PAGE SELEÇÃO DE BUTOES')
            }

            if (event.tagName === 'BUTTON') {
                window.location.href = '../teste.html'
            }

        })
    }
}