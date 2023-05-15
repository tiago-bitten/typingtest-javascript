import { Palavras } from "./palavras.js"

const container = document.querySelector('.container')
const inputPalavra = document.querySelector('.input-palavra')
const divParagrafo = document.querySelector('.div-paragraph')
const divWpm = document.querySelector('.div-wpm')
const divResults = document.querySelector('.div-results')
const divBtnReset = document.querySelector('.div-btn-reset')

// Variaveis presentes no metodo 'counter()'
let contadorIniciado = false        // Variavel para saber se o setInterval já foi iniciado
let segundos        // Variavel que adiciona os segundos

// Variaveis presentes nos metodos 'checkWord()' e 'getAcurency()'
let acertos = 0     // Contas os acertos
let erros = 0       // Conta os erros

// Variavel presente no metodo 'changeColorWord(resultado)'
let index = 0       // Recebe o indice do 'for' caso 'resultado' receber '1'

const tamanhoTeste = window.prompt('Quantas palavras você deseja no teste?')        // Quantidade de palavras

const frase = new Palavras()        // Criando uma nova instancia de 'Palavras'
const palavrasRandomizadas = frase.randomizarPalavras(tamanhoTeste)     // Chamando o metodo 'randomizarPalavras()' a partir da instancia 'frase'
const lengthPalavrasRandomizadas = palavrasRandomizadas.slice().length      // Atribuindo o tamanho do array a 'lengthPalavrasRandomizadas'

// Evento das teclas pressionadas no documento
document.addEventListener('keypress', function(e) {
    counter()       // Quando qualquer tecla pressionada o contator de tempo inicia

    if (e.key === ' ') {        // Se a tecla espaço pressionada executa os metodos
        try {
            checkWord()
            changeColorWord()
            
            if (checkRes()) {
                printWpm()
                printAcc()
                printHits()
                printMistakes()
                //resetClasses()
                removeInput()
                addBtn()
            }

        } catch(e) {
            console.log(e.message)        // Caso ocorra alguma exceção em um dos metodos o alert informa
            console.log(e.stack)

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
window.addEventListener('load', function() {
    createTextTest()       // Quando a pagina é carregada executa o metodo 'createLabel()'
    inputPalavra.focus()        // Quando a pagina é carregada o ponteiro é redirecionado para o 'input'
})

divBtnReset.addEventListener('click', function() {
    location.reload()
})

// Metodo para contar tempo do teste
function counter() {
    if (!contadorIniciado) {        // 'contadorIniciado' é usado para saber se o metodo já foi exectuado antes
        contadorIniciado = true     // Se for a primeira vez do metodo sendo executado a variavel booleana 'contadorIniciado' recebe 'true'
        
        segundos = 0        // Variavel iniciada com o valor '0'

        // Variavel contador recebe o metodo 'setInterval()' que é executado a cada 1 segundo
        let contador = setInterval(function () {
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
    const tamanho = lengthPalavrasRandomizadas       // 'tamanho' recebe a quantidade de palavras no texto
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

    span.textContent = `Acuracia: ${acc}%`
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

    span.textContent = `Acertos: ${acertos}`
    divResults.appendChild(span)
}

// Imprime quantidade de erros
function printMistakes() {
    if (erros === 0) return     // Se não houver erros não é impresso os erros
    const span = createSpan()

    span.textContent = `Erros: ${erros}`
    divResults.appendChild(span)
}

// Adiciona o botão no documento
function addBtn() {
    const btn = createButton()
    btn.classList.add('btn-reset')
    btn.textContent = 'Resetar'

    divBtnReset.appendChild(btn)
}

// Remove o input de digitação
function removeInput() {
    inputPalavra.remove()
}