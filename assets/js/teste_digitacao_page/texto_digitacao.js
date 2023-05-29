export class TesteDigitacao {
    constructor(pontuacao, palavras, tempo, ui) {
        this.pontuacao = pontuacao // Objeto de pontuação
        this.palavra = palavras // Objeto de palavras
        this.tempo = tempo // Objeto de tempo
        this.ui = ui // Objeto de interface do usuário

        this.tamanhoTeste = 5 // Tamanho do teste de digitação

        this.palavrasRandomizadas = this.palavra.randomizarPalavras(this.tamanhoTeste) // Array de palavras randomizadas para o teste

        this.divTextoTeste = this.ui.divTextoTeste // Elemento HTML da div de texto do teste

        this.index = 0 // Índice da palavra atual no teste
    }

    criarTeste() {
        const spans = this.palavrasRandomizadas.map(palavra => {
            const span = this.ui.criarSpan() // Cria um elemento span
            span.textContent = palavra // Define o texto da palavra no span
            return span
        })

        this.divTextoTeste.append(...spans) // Adiciona os spans na div de texto do teste
    }

    underlinePalavra() {
        const spans = document.querySelectorAll('span')

        for (let i = 0; i < spans.length; i++) {
            const span = spans[i]

            if (!span.classList.contains('underline-palavra-atual') && span.classList.length === 0) {
                span.classList.add('underline-palavra-atual') // Adiciona a classe para sublinhar a palavra atual
                return // Interrompe o loop após aplicar a classe
            }
        }
    }

    validarPalavra(resultado) {
        const spans = document.querySelectorAll('span')

        if (resultado) {
            for (let i = this.index; i < spans.length; i++) {
                const currentSpan = spans[i]

                if (!currentSpan.classList.contains('palavra-correta')) {
                    this.underlinePalavra()

                    currentSpan.classList.remove('underline-palavra-atual', 'palavra-incorreta')
                    currentSpan.classList.add('palavra-correta') // Marca a palavra como correta

                    this.index = i + 1 // Atualiza o índice da próxima palavra

                    return
                }
            }
        } else {
            const currentSpan = spans[this.index]

            if (currentSpan && !currentSpan.classList.contains('palavra-incorreta')) {
                currentSpan.classList.remove('underline-palavra-atual')
                currentSpan.classList.add('palavra-incorreta') // Marca a palavra como incorreta
            }

            return
        }
    }

    eventoChecarTerminoTeste() {
        document.addEventListener('keypress', e => {
            if (e.key === ' ' || e.key === 'Enter') {
                if (this.palavrasRandomizadas.length === 0) { // Verifica se todas as palavras foram digitadas
                    this.tempo.pararContagem() // Para a contagem de tempo
                    this.pontuacao.mostrarPontuacao() // Mostra a pontuação final
                }
            }
        })
    }
}
