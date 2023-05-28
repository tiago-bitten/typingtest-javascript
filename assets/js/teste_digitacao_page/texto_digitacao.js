export class TesteDigitacao {
    constructor(pontuacao, palavras, tempo, ui) {
        this.pontuacao = pontuacao
        this.palavra = palavras
        this.tempo = tempo
        this.ui = ui

        this.tamanhoTeste = 5

        this.palavrasRandomizadas = this.palavra.randomizarPalavras(this.tamanhoTeste)

        this.divTextoTeste = this.ui.divTextoTeste

        this.index = 0
    }

    // Criação do texto para o teste
    criarTeste() {
        const spans = this.palavrasRandomizadas.map(palavra => {
            const span = this.ui.criarSpan()
            span.textContent = palavra
            return span
        })

        this.divTextoTeste.append(...spans)
    }


    underlinePalavra() {
        const spans = document.querySelectorAll('span')

        for (let i = 0; i < spans.length; i++) {
            const span = spans[i]

            if (!span.classList.contains('underline-palavra-atual') && span.classList.length === 0) {
                span.classList.add('underline-palavra-atual')
                return // Interrompe o loop após aplicar a classe
            }
        }
    }


    validarPalavra(resultado) {
        const span = document.querySelectorAll('span')

        if (resultado) {
            for (let i = this.index; i < span.length; i++) {
                const currentSpan = span[i]

                if (!currentSpan.classList.contains('palavra-correta')) {
                    this.underlinePalavra()

                    currentSpan.classList.remove('underline-palavra-atual', 'palavra-incorreta')
                    currentSpan.classList.add('palavra-correta')

                    this.index = i + 1

                    return
                }
            }
        } else {
            const currentSpan = span[this.index]

            if (currentSpan && !currentSpan.classList.contains('palavra-incorreta')) {
                currentSpan.classList.remove('underline-palavra-atual')
                currentSpan.classList.add('palavra-incorreta')
            }

            return
        }
    }


    eventoChecarTerminoTeste() {
        document.addEventListener('keypress', e => {
            if (e.key === ' ' || e.key === 'Enter') {

                if (this.palavrasRandomizadas.length === 0) {
                    this.tempo.pararContagem()
                    this.pontuacao.mostrarPontuacao()
                }
            }
        })
    }
}