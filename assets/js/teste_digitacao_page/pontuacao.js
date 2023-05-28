export class Pontuacao {
    constructor(tempo, testeDigitacao, ui) {
        this.tempo = tempo // Objeto Tempo que será usado para calcular a pontuação
        this.testeDigitacao = testeDigitacao // Objeto de teste de digitação usado para obter o tamanho do teste
        this.ui = ui // Objeto de interface do usuário usado para criar elementos HTML

        this.acertos = 0 // Variável para armazenar o número de acertos
        this.erros = 0 // Variável para armazenar o número de erros

        this.ppm = 0 // Variável para armazenar os caracteres por minuto
        this.acc = 0 // Variável para armazenar a precisão (accuracy)
    }

    mostrarPontuacao() {
        const pontuacaoDiv = this.ui.criarDiv(this.ui.container, 'pontuacao', 'modal') // Cria uma div para exibir a pontuação
        const pontuacaoContentDiv = this.ui.criarDiv(pontuacaoDiv, 'modal-content') // Cria uma div para o conteúdo da pontuação
        const span = this.ui.criarSpan('close') // Cria um elemento <span> para fechar a pontuação
        const p = this.ui.criarP() // Cria um elemento <p> para exibir a pontuação

        span.innerHTML = '&times;' // Define o conteúdo do <span> como '&times;' para exibir um símbolo de fechar
        span.onclick = () => pontuacaoDiv.remove(); // Adiciona um evento de clique para remover a div de pontuação ao clicar no <span>

        p.innerHTML = `PPM: ${this.getPPM} </br>
                       ACC: ${this.getACC}%` // Define o conteúdo do <p> como a pontuação atual (PPM e ACC)

        pontuacaoContentDiv.appendChild(span) // Adiciona o <span> à div de conteúdo da pontuação
        pontuacaoContentDiv.appendChild(p) // Adiciona o <p> à div de conteúdo da pontuação
      
        pontuacaoDiv.style.display = "block" // Define o estilo da div de pontuação para exibi-la na tela
    }
      

    get getPPM() {
        const minutos = this.tempo.getSegundos / 60 // Calcula o número de minutos usando os segundos do objeto Tempo

        this.ppm = Math.round(this.testeDigitacao.tamanhoTeste / minutos) // Calcula os caracteres por minuto dividindo o tamanho do teste pelo número de minutos
        // A função Math.round() é usada para arredondar o valor para o número inteiro mais próximo

        return this.ppm // Retorna a pontuação de caracteres por minuto
    }

    get getACC() {
        this.acc = Math.round(((this.getAcertos - this.getErros) / this.testeDigitacao.tamanhoTeste) * 100) // Calcula a precisão (accuracy) dividindo a diferença entre acertos e erros pelo tamanho do teste e multiplicando por 100
        // A função Math.round() é usada para arredondar o valor para o número inteiro mais próximo

        return this.acc // Retorna a pontuação de precisão
    }

    get getAcertos() {
        return this.acertos // Retorna o número de acertos
    }

    get getErros() {
        return this.erros // Retorna o número de erros
    }
}
