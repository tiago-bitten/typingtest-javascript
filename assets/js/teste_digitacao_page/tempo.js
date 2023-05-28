export class Tempo {
    constructor() {
        this.contador = null

        this.segundos  = 0
        this.contadorIniciado = false
    }

    iniciarContagem() {
        if (!this.contadorIniciado) {
            this.contadorIniciado = true

            this.contador = setInterval(() => {
                this.segundos++
                console.log(this.getSegundos)
            }, 1000)
        }
    }

    pararContagem() {
        setTimeout(() => {
            clearInterval(this.contador)
        })
    }

    eventoIniciarContagem() {
        document.addEventListener('keypress', e => {
            this.iniciarContagem()
        })
    }

    get getSegundos() {
        return this.segundos
    }
}