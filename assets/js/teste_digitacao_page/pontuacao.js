export class Pontuacao {
    constructor(tempo, testeDigitacao) {
        this.tempo = tempo
        this.testeDigitacao = testeDigitacao
        
        this.acertos = 0
        this.erros = 0

        this.ppm = 0
    }

    get getPPM() {
        const minutos = this.tempo.getSegundos / 60

        this.ppm = Math.round(this.testeDigitacao.tamanhoTeste / minutos)
        
        return this.ppm
    }

    get getAcertos() {
        return this.acertos
    }

    get getErros() {
        return this.erros
    }
}