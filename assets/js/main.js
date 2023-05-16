import { Palavras } from "./palavras.js"

const container = document.querySelector('.container')
let divParagrafo = null
let divWpm = null
let divResults = null
let inputPalavra = null

// Variaveis presentes no metodo 'counter()'
let contadorIniciado = false        // Variavel para saber se o setInterval já foi iniciado
let testeEncerrado = false      // Encerra o teste
let segundos = 0        // Variavel iniciada com '0' segundos

// Variaveis presentes nos metodos 'checkWord()' e 'getAcurency()'
let acertos = 0     // Contas os acertos
let erros = 0       // Conta os erros

// Variavel presente no metodo 'changeColorWord(resultado)'
let index = 0       // Recebe o indice do 'for' caso 'resultado' receber '1'

let tamanhoTeste = 0       // Quantidade de palavras

const frase = new Palavras()        // Criando uma nova instancia de 'Palavras'
let palavrasRandomizadas = null    // Chamando o metodo 'randomizarPalavras()' a partir da instancia 'frase'
let lengthPalavrasRandomizadas = null      // Atribuindo o tamanho do array a 'lengthPalavrasRandomizadas'

// Evento das teclas pressionadas no documento
document.addEventListener('keypress', function(e) {
    counter()       // Quando qualquer tecla pressionada o contator de tempo inicia

    if (e.key === ' ' || e.key === 'Enter') {        // Se a tecla espaço pressionada executa os metodos
        try {
            checkWord()
            changeColorWord()

            if (checkRes()) {
                if (!testeEncerrado) {
                    testeEncerrado = true

                    addDiv(container, 'div-wpm', 'show')
                    divWpm = document.querySelector('.div-wpm')
                    printWpm()

                    addDiv(container, 'div-results', 'show')
                    divResults = document.querySelector('.div-results')
                    printAcc()
                    printHits()
                    printMistakes()

                    removeInput()

                    addDiv(container, 'div-btn-reset', 'show')
                    const divBtnReset = document.querySelector('.div-btn-reset')

                    addBtn(divBtnReset, 'RESETAR', 'btn-reset')

                    divBtnReset.addEventListener('click', function () {
                        location.reload()
                    })
                }
            }

        } catch(e) {
            alert(e)        // Caso ocorra alguma exceção em um dos metodos o alert informa

        } finally {
            clsInput()
        }
    }
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        location.reload()
    }
})

// Evento de carregamento da janela
window.addEventListener('load', function() {
    addDiv(container, 'div-btn-begin')
    const divBtnBegin = document.querySelector('.div-btn-begin')

    const tamanho = 3

    for (let i = 1; i <= tamanho; i++) {
        addBtn(divBtnBegin, `${i}0 PALAVRAS`, `btn-choose-words`, `btn-${i}0-words`)

    }

    divBtnBegin.addEventListener('click', function(e) {
        const evento = e.target

        if (evento.classList.contains('btn-10-words')) {
            tamanhoTeste = 10
        }

        if (evento.classList.contains('btn-20-words')) {
            tamanhoTeste = 20
        }

        if (evento.classList.contains('btn-30-words')) {
            tamanhoTeste = 30
        }

        palavrasRandomizadas = frase.randomizarPalavras(tamanhoTeste)
        lengthPalavrasRandomizadas = palavrasRandomizadas.slice().length

        const btn = document.querySelectorAll('button')
        divBtnBegin.remove()
        for (let i = 0; i < tamanho; i++) {
            btn[i].remove()
        }

        addDiv(container, 'div-paragraph', 'show')
        divParagrafo = document.querySelector('.div-paragraph')
        createTextTest()

        addDiv(container, 'div-input')
        const divInput = document.querySelector('.div-input')
        addInput(divInput, 'input-palavra')
        inputPalavra = document.querySelector('.input-palavra')
        inputPalavra.focus()

        // Evento dos cliques do ponteiro no documento
        document.addEventListener('click', function (e) {
            inputPalavra.focus()        // Quando ocorre o evento do clique em qualquer lugar do documento o ponteiro é automaticamente redirecionado para o 'input'
        })

    })
})

// Metodo para contar tempo do teste
function counter() {
    if (!contadorIniciado) {        // 'contadorIniciado' é usado para saber se o metodo já foi exectuado antes
        contadorIniciado = true     // Se for a primeira vez do metodo sendo executado a variavel booleana 'contadorIniciado' recebe 'true'

        // Variavel contador recebe o metodo 'setInterval()' que é executado a cada 1 segundo
        let contador = setInterval(() => {
            segundos++
            if (palavrasRandomizadas.length === 0) {        // Se o teste tiver terminado é chamado o metodo 'setTimeout()' que é executado instantaneamente
                setTimeout(() => {        // O metodo 'setTimeout()' chama o metodo 'clearInterval()' que recebe como argumento o 'contador'
                    clearInterval(contador)
                    // segundos = segundos / 100
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

function createButton() {
    const btn = document.createElement('button')
    return btn
}

function createInput() {
    const input = document.createElement('input')
    return input
}

function createDiv() {
    const div = document.createElement('div')
    return div
}

// Metodo que adiciona cada indice do array 'palavrasRandomizadas' em um <span>
function createTextTest() {
    for (let i in palavrasRandomizadas) {
        const span = createSpan()
        span.classList.add(`span-${i}`)
        span.textContent = palavrasRandomizadas[i]
        divParagrafo.appendChild(span)
    }
}

// Metodo para verificar se a palavra digita esta correta
function checkWord() {
    inputPalavra.value = inputPalavra.value.trim()      // Retira os espaços vazios do input

    for (let i in palavrasRandomizadas) {       // 'for' que percorre todos os indices do array 'palavraFrase'
        if (inputPalavra.value === '') break        // Se o valor do input for um espaço vazio a operação é interrompida
        if (inputPalavra.value === palavrasRandomizadas[i]) {       // Verifica se o valor do input é o mesmo do indice do array
            changeColorWord(1)
            acertos++       // Adiciona +1 a 'acertos'
            palavrasRandomizadas.splice(i, 1)       // Remove a palavra do indice atual do array 'palavraFrase'
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
    const tamanho = lengthPalavrasRandomizadas       // 'tamanho' recebe a quantidade de palavras no texto
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
            if (span[i].classList.contains('erro')) {
                span[i].classList.remove('erro')
                setTimeout(() => {
                    span[i].classList.add('erro')    
                }, 1)
                break
            }       
            if (!span[i].classList.contains('erro')) {
                span[i].classList.add('erro')       // Se a palavra do indice atual não contem classe 'erro' é adicionada a classe 'erro'
                break
            }
        }
    }
}

// Metodo para checar se o teste terminou
function checkRes() {
    if (palavrasRandomizadas.length === 0) {        // Se o array chegar a tamanho 0 é porque o teste terminou
        return true

    } else {
        return false
    }
}

// Metodo para limpar o input
function clsInput() {
    inputPalavra.value = ''
}

// Metodo para calcular a acuracia
function calcAcurency() {
    const palavra = lengthPalavrasRandomizadas      // palavra recebe a quantiade total de palavras
    const acc = ((acertos - erros) / palavra) * 100     // Obtendo a acuracia
    return Math.round(acc)
}

// Imprime o resultado do metodo 'calcAcurency()'
function printAcc() {
    const acc = calcAcurency()
    const span = createSpan()

    span.textContent = `ACURACIA: ${acc}%`
    divResults.appendChild(span)
}

// Metodo para calcular palavras digitadas por minuto
function calcWpm() {
    const palavra = lengthPalavrasRandomizadas; // Número total de palavras
    const segundosTotais = segundos / 100; // Tempo decorrido em segundos

    const minutos = segundosTotais / 60; // Tempo decorrido em minutos
    const wpm = Math.round(palavra / minutos); // Cálculo do WPM

    return wpm;
}

// Imprime o resultado do metodo 'calcWpm()'
function printWpm() {
    const wpm = calcWpm()
    const span = createSpan()

    span.innerHTML = `PPM: ${wpm}`
    divWpm.classList.add('background-div-wpm')
    divWpm.appendChild(span)
}

// Imprime quantidade de acertos
function printHits() {
    if (erros === 0) return     // Se não houver erros não é impresso os acertos
    const span = createSpan()

    span.textContent = `ACERTOS: ${acertos}`
    divResults.appendChild(span)
}

// Imprime quantidade de erros
function printMistakes() {
    if (erros === 0) return     // Se não houver erros não é impresso os erros
    const span = createSpan()

    span.textContent = `ERROS: ${erros}`
    divResults.appendChild(span)
}

function addDiv(dom, classe, classe2) {
    const div = createDiv()
    div.classList.add(classe)
    div.classList.add(classe2)
    dom.appendChild(div)
}

// Adiciona o botão no documento
function addBtn(div, placeholder, classe, classe2) {
    const btn = createButton()
    btn.classList.add(classe)
    btn.classList.add(classe2)
    btn.textContent = placeholder

    div.appendChild(btn)
}

function addInput(dom, classe) {
    const input = createInput()
    input.classList.add(classe)
    dom.appendChild(input)
}

// Remove o input de digitação
function removeInput() {
    inputPalavra.remove()
}

// ||