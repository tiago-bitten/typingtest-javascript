import { UIHomePage } from "./UI_home_page.js";

export class HomePage {
    constructor() {
        this.ui = new UIHomePage()
        this.divHomeButtons = this.ui.divHomeButtons
    }

    eventoClickHome() {
        this.divHomeButtons.addEventListener('click', e => {
            const event = e.target

            if (event.classList.contains('button-grande')) {
                console.log('grande')

            } else if (event.classList.contains('button-medio')) {
                console.log('medio')

            } else if (event.classList.contains('button-pequeno')) {
                console.log('pequeno')

            } else {
                throw new Error('ERRO HOME PAGE SELEÇÃO DE BUTOES')
            }

        })
    }
}