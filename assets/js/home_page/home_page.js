export class HomePage {
    constructor(testeDigitacao, ui) {
        this.testeDigitacao = testeDigitacao // Armazena o objeto de teste de digitação recebido como parâmetro
        this.ui = ui // Armazena o objeto de interface do usuário recebido como parâmetro

        this.divHomeButtons = this.ui.divHomeButtons // Seleciona o elemento HTML da div de botões da página inicial e armazena na propriedade 'divHomeButtons'
    }

    eventoClickHome() {
        const tamanhoTesteMap = {
            'button-grande': 30, // Mapeia a classe 'button-grande' para o tamanho de teste de 30 palavras
            'button-medio': 20, // Mapeia a classe 'button-medio' para o tamanho de teste de 20 palavras
            'button-pequeno': 10, // Mapeia a classe 'button-pequeno' para o tamanho de teste de 10 palavras
        }

        this.divHomeButtons.addEventListener('click', ({ target }) => {
            const tamanhoTeste = tamanhoTesteMap[target.classList.value] // Obtém o tamanho de teste com base na classe do elemento clicado

            if (tamanhoTeste) {
                this.testeDigitacao.setTamanhoTeste = tamanhoTeste // Define o tamanho do teste no objeto de teste de digitação
                window.location.href = '../teste_digitacao_page.html' // Redireciona para a página de teste de digitação
            } else {
                throw new Error('ERRO HOME PAGE SELEÇÃO DE BOTÕES') // Lança um erro caso a classe do elemento clicado não esteja mapeada
            }
        })
    }
}
