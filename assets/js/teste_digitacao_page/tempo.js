export class Tempo {
    constructor() {
        this.contador = null // Variável que armazenará o identificador do intervalo de contagem

        this.segundos  = 0 // Variável que armazenará o número de segundos
        this.contadorIniciado = false // Flag que indica se o contador foi iniciado
    }

    iniciarContagem() {
        if (!this.contadorIniciado) { // Verifica se o contador ainda não foi iniciado
            this.contadorIniciado = true // Define a flag como true, indicando que o contador está sendo iniciado

            this.contador = setInterval(() => { // Cria um intervalo que será executado a cada 1000 milissegundos (1 segundo)
                this.segundos++ // Incrementa a variável de segundos a cada intervalo
            }, 1000)
        }
    }

    pararContagem() {
        setTimeout(() => {
            clearInterval(this.contador) // Limpa o intervalo, interrompendo a contagem
        })
    }

    eventoIniciarContagem() {
        document.addEventListener('keypress', e => { // Adiciona um evento de teclado ao documento
            this.iniciarContagem() // Chama o método iniciarContagem() quando uma tecla for pressionada
        })
    }

    get getSegundos() {
        return this.segundos // Retorna o valor atual dos segundos
    }
}
