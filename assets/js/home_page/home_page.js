import { UIHomePage } from "./UI_home_page.js";
import { TesteDigitacao } from "../teste_digitacao_page/teste_digitacao.js"

export class HomePage {
    constructor() {
        this.ui = new UIHomePage()
        this.teste = new TesteDigitacao()

        this.divHomeButtons = this.ui.divHomeButtons
    }

    eventoClickHome() {
        this.divHomeButtons.addEventListener('click', e => {
            const event = e.target

            if (event.classList.contains('button-grande')) {
                this.teste.setTamanhoTeste = 30

            } else if (event.classList.contains('button-medio')) {
                this.teste.setTamanhoTeste = 20

            } else if (event.classList.contains('button-pequeno')) {
                this.teste.setTamanhoTeste = 10

            } else {
                throw new Error('ERRO HOME PAGE SELEÇÃO DE BUTOES')
            }

            window.location.href = '../teste_digitacao_page.html'
        })
    }
}