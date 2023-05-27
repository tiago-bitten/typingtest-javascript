export class TesteDigitacao {
    constructor(pontuacao, palavras, ui) {
        this.palavra = palavras
        this.ui = ui
        this.pontuacao = pontuacao

        this.palavrasRandomizadas = this.palavra.randomizarPalavras(10)

        this.divTextoTeste = this.ui.divTextoTeste

        this.index = 0
    }

    // Criação do texto para o teste
    criarTeste() {
        for (let i in this.palavrasRandomizadas) {
            const span = this.ui.createSpan()
            span.textContent = this.palavrasRandomizadas[i]
            this.divTextoTeste.appendChild(span)  
        }
    }

    underlinePalavraAtual() {
        const span = document.querySelectorAll('span')

        for (let i = 0; i < span.length; i++) {

            if (!span[i].classList.contains('underline-palavra-atual') && 
                !span[i].classList.contains('palavra-correta')) {

                span[i].classList.add('underline-palavra-atual')
                return
            }
        }

    }

    validarPalavra(resultado) {
        const span = document.querySelectorAll('span')

        if (resultado) {
            for (let i = 0; i < span.length; i++) {
                if (!span[i].classList.contains('palavra-correta')) {
                    span[i].classList.remove('underline-palavra-atual')
                    span[i].classList.remove('palavra-incorreta')
                    span[i].classList.add('palavra-correta')

                    this.index = i + 1

                    return
                }
            }

        } else if (!resultado) {
            for (let i = this.index; i < span.length; i++) {
                if (span[i].classList.contains('palavra-incorreta')) return
                if (!span[i].classList.contains('palavra-incorreta')) {
                    span[i].classList.add('palavra-incorreta')
                    return
                }
            }
        }
    }

    eventoChecarTerminoTeste() {
        document.addEventListener('keypress', e => {
            if (e.key === ' ' || e.key === 'Enter') {

                if (this.palavrasRandomizadas.length === 0) {
                    alert(`Teste encerrado Acertos: ${this.pontuacao.getAcertos}
                           Erros: ${this.pontuacao.getErros}`)
                
                } else {
                    console.log(`faltam ${this.palavrasRandomizadas.length} palavras`)
                }
            }
        })
    }
}