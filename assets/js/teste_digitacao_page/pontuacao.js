export class Pontuacao {
    constructor() {
        this.acertos = 0
        this.erros = 0
    }

    get getAcertos() {
        return this.acertos
    }

    get getErros() {
        return this.erros
    }
}