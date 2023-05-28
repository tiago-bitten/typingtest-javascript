export class HomePage {
    constructor(testeDigitacao, ui) {
        this.testeDigitacao = testeDigitacao
        this.ui = ui

        this.divHomeButtons = this.ui.divHomeButtons
    }

    eventoClickHome() {
        const tamanhoTesteMap = {
            'button-grande': 30,
            'button-medio': 20,
            'button-pequeno': 10,
        };

        this.divHomeButtons.addEventListener('click', ({ target }) => {
            const tamanhoTeste = tamanhoTesteMap[target.classList.value]

            if (tamanhoTeste) {
                this.testeDigitacao.setTamanhoTeste = tamanhoTeste;
                window.location.href = '../teste_digitacao_page.html'
            } else {
                throw new Error('ERRO HOME PAGE SELEÇÃO DE BOTÕES')
            }
        })
    }
}  