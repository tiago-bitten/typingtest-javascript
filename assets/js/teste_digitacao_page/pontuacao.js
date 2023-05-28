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
        const pontuacaoDiv = this.ui.criarDiv('pontuacao', 'modal')

        pontuacaoDiv.innerHTML = `
          <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <p>PPM: ${this.getPPM}</p>
            <p>ACC: ${this.getACC}%</p>
          </div>
        `;  

        document.body.appendChild(pontuacaoDiv);
        pontuacaoDiv.style.display = "block";
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