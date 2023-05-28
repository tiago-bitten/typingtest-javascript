export class Pontuacao {
    constructor(tempo, testeDigitacao, ui) {
        this.tempo = tempo
        this.testeDigitacao = testeDigitacao
        this.ui = ui

        this.acertos = 0
        this.erros = 0

        this.ppm = 0
        this.acc = 0
    }

    mostrarPontuacao() {
        const pontuacaoDiv = this.ui.criarDiv(this.ui.container, 'pontuacao', 'modal')
        const pontuacaoContentDiv = this.ui.criarDiv(pontuacaoDiv, 'modal-content')
        const span = this.ui.criarSpan('close')
        const p = this.ui.criarP()

        span.innerHTML = '&times;'
        span.onclick = () => pontuacaoDiv.remove();

        p.innerHTML = `PPM: ${this.getPPM} </br>
                       ACC: ${this.getACC}%`
        

        pontuacaoContentDiv.appendChild(span)
        pontuacaoContentDiv.appendChild(p)
      
        pontuacaoDiv.style.display = "block"
      }
      

    get getPPM() {
        const minutos = this.tempo.getSegundos / 60

        this.ppm = Math.round(this.testeDigitacao.tamanhoTeste / minutos)

        return this.ppm
    }

    get getACC() {
        this.acc = Math.round(((this.acertos - this.erros) / this.testeDigitacao.tamanhoTeste) * 100)

        return this.acc
    }

    get getAcertos() {
        return this.acertos
    }

    get getErros() {
        return this.erros
    }
}