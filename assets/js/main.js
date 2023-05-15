import { Palavras } from "./palavras.js"

const container = document.querySelector('.container')
const inputPalavra = document.querySelector('.input-palavra')
const divParagrafo = document.querySelector('.div-paragraph')
const divResultado = document.querySelector('.resultado')

// Variaveis presentes no metodo 'counter()'
let contadorIniciado = false        // Variavel para saber se o setInterval já foi iniciado
let segundos        // Variavel que adiciona os segundos

// Variaveis presentes nos metodos 'checkWord()' e 'getAcurency()'
let acertos = 0     // Contas os acertos
let erros = 0       // Conta os erros

// Variavel presente no metodo 'changeColorWord(resultado)'
let index = 0       // Recebe o indice do 'for' caso 'resultado' receber '1'

const frase = new Palavras()
const palavrasRandomizadas = frase.randomizarPalavras()
console.log(palavrasRandomizadas)

// Evento das teclas pressionadas no documento
document.addEventListener('keypress', function(e) {
    counter()       // Quando qualquer tecla pressionada o contator de tempo inicia

    if (e.key === ' ') {        // Se a tecla espaço pressionada executa os metodos
        try {
            checkWord()
            changeColorWord()
            checkRes()

        } catch(e) {
            alert(e)        // Caso ocorra alguma exceção em um dos metodos o alert informa

        } finally {
            clsInput()
        }
    }
})

// Evento dos cliques do ponteiro no documento
document.addEventListener('click', function (e) {
    inputPalavra.focus()        // Quando ocorre o evento do clique em qualquer lugar do documento o ponteiro é automaticamente redirecionado para o 'input'
})

// Evento de carregamento da janela
window.addEventListener('load', function () {
    createTextTest()       // Quando a pagina é carregada executa o metodo 'createLabel()'
    inputPalavra.focus()        // Quando a pagina é carregada o ponteiro é redirecionado para o 'input'
})

// Metodo para contar tempo do teste
function counter() {
    if (!contadorIniciado) {        // 'contadorIniciado' é usado para saber se o metodo já foi exectuado antes
        contadorIniciado = true     // Se for a primeira vez do metodo sendo executado a variavel booleana 'contadorIniciado' recebe 'true'
        
        segundos = 0        // Variavel iniciada com o valor '0'

        // Variavel contador recebe o metodo 'setInterval()' que é executado a cada 1 segundo
        let contador = setInterval(function () {
            segundos++
            console.log(segundos)
            if (palavraFrase.length === 0) {        // Se o teste tiver terminado é chamado o metodo 'setTimeout()' que é executado instantaneamente
                setTimeout(function () {        // O metodo 'setTimeout()' chama o metodo 'clearInterval()' que recebe como argumento o 'contador'
                    clearInterval(contador)
                    segundos = segundos / 100
                    console.log(segundos)
                }, 0)
            }
        }, 10)
    }
}

// Metodo para criar <span>
function createSpan() {
    const span = document.createElement('span')
    return span
}

// Metodo que adiciona cada indice do array 'palavraFrase' em um <span>
function createTextTest() {
    for (let i in palavraFrase) {
        const span = createSpan()
        span.classList.add(`span-${i}`)
        span.textContent = palavraFrase[i]
        divParagrafo.appendChild(span)
    }
}

// Metodo para verificar se a palavra digita esta correta
function checkWord() {
    inputPalavra.value = inputPalavra.value.trim()      // Retira os espaços vazios do input

    for (let i in palavraFrase) {       // 'for' que percorre todos os indices do array 'palavraFrase'
        if (inputPalavra.value === '') break        // Se o valor do input for um espaço vazio a operação é interrompida
        if (inputPalavra.value === palavraFrase[i]) {       // Verifica se o valor do input é o mesmo do indice do array
            changeColorWord(1)
            acertos++       // Adiciona +1 a 'acertos'
            palavraFrase.splice(i, 1)       // Remove a palavra do indice atual do array 'palavraFrase'
            break

        } else {
            changeColorWord(2)
            erros++     // Adiciona +1 a 'erros'
            break
        }
    }
}

// Metodo para mudar a cor das palavras no texto
function changeColorWord(resultado) {
    const tamanho = frasePrompt.split(' ').length       // 'tamanho' recebe a quantidade de palavras no texto
    const span = document.querySelectorAll('span')      // 'span' recebe uma NodeList contendo todos os'<span>'

    if (resultado === 1) {      // 1 representa 'true'
        for (let i = 0; i < tamanho; i++) {
            if (!span[i].classList.contains('acerto')) {
                if (span[i].classList.contains('erro')) {      
                    span[i].classList.remove('erro')        // Se a palavra do indice atual contem a classe 'erro' a classe 'erro' é removida
                }
                span[i].classList.add('acerto')     // Se a palavra do indice não contem a classe 'acerto' então é adicionada a classe 'acerto'
                index = i + 1       // Variavel index recebe o indice atual
                break
            }
        }
    }

    if (resultado === 2) {      // 2 representa 'false'
        for (let i = index; i < tamanho; i++) {
            if (span[i].classList.contains('erro')) break       // Se a palavra do indice atual ja contem a classe 'erro' a operação é interrompida
            if (!span[i].classList.contains('erro')) {
                span[i].classList.add('erro')       // Se a palavra do indice atual não contem classe 'erro' é adicionada a classe 'erro'
                break
            }
        }
    }
}

// Metodo para retirar todas as classes do texto
function resetClasses() {
    const tamanho = frasePrompt.split(' ').length       // 'tamanho' recebe a quantidade de palavras no texto
    const span = document.querySelectorAll('span')      // 'span' recebe uma NodeList contendo todos os '<span>'
    
    for (let i = 0; i < tamanho; i++) {     // Percorre o texto removendo todas as classes 'acerto'
        if (span[i].classList.contains('acerto')) {
            span[i].classList.remove('acerto')

        } else {
            throw new Error('Erro ao resetar classes')      // Se ocorrer algum erro lança uma exceção
        }
    }
}

// Metodo para checar se o teste terminou
function checkRes() {
    if (palavraFrase.length === 0) {        // Se o array chegar a tamanho 0 é porque o teste terminou
        //palavraFrase = frasePrompt.split(' ')
        showResult()
        resetClasses()
    }
}

// Metodo para limpar o input
function clsInput() {
    inputPalavra.value = ''
}

// Metodo para calcular a acuracia
function calcAcurency() {
    const acc = ((acertos - erros) / frasePrompt.split(' ').length) * 100
    return acc.toFixed(2)
}

// Metodo para calcular palavras digitadas por minuto
function calcWpm() {
    const palavra = frasePrompt.split(' ').length
    const minuto = segundos / 60
    return Math.round(palavra / minuto)
}

// Metodo que mostra as pontuações
function showResult() {
    const acc = calcAcurency()
    const wpm = calcWpm()
    const span = createSpan()
    
}

