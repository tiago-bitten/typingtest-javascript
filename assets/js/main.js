const container = document.querySelector('.container')
const inputPalavra = document.querySelector('.input-palavra')
const botao = document.querySelector('.btn-verificar')
const divParagrafo = document.querySelector('.div-paragraph')

let acertos = 0
let erros = 0
let index = 0

const frasePrompt = window.prompt('Escolha uma frase')

let palavraFrase = frasePrompt.split(' ')

document.addEventListener('keypress', function (e) {
    if (e.key === ' ') {
        checkWord()
        changeColorWord()
        checkRes()
        clsInput()
    }
})

window.addEventListener('load', function () {
    createLabel()
    inputPalavra.focus()
})

function createSpan() {
    const span = document.createElement('span')
    return span
}

function createLabel() {
    for (let i in palavraFrase) {
        const span = createSpan()
        span.classList.add(`span-${i}`)
        span.textContent = palavraFrase[i]
        divParagrafo.appendChild(span)
    }
}

function checkWord() {
    inputPalavra.value = inputPalavra.value.trim()

    for (let i in palavraFrase) {
        if (inputPalavra.value === palavraFrase[i]) {
            changeColorWord(1)
            acertos++
            palavraFrase.splice(i, 1)
            console.log('certo')
            break

        } else {
            changeColorWord(2)
            erros++
            console.log('errou')
            break
        }
    }
}

function changeColorWord(resultado) {
    const span = document.querySelectorAll('span')

    if (resultado === 1) {
        for (let i = 0; i < 10000; i++) {
            if (!span[i].classList.contains('acerto')) {
                span[i].classList.remove('erro')
                span[i].classList.add('acerto')
                console.log(span[i])
                index = i + 1
                break
            }
        }
    }

    if (resultado === 2) {
        for (let i = index; i < 1000; i++) {
            if (span[i].classList.contains('erro')) break
            if (!span[i].classList.contains('erro')) {
                span[i].classList.add('erro')
                console.log(span[i])
                break
            }
        }
    }
}



function checkRes() {
    if (palavraFrase.length == 0) {
        palavraFrase = frasePrompt.split(' ')

        alert(`voce finalizou o teste! Acertos: ${acertos} Erros: ${erros}`)

        acertos = 0
        erros = 0
    }
}

function clsInput() {
    inputPalavra.value = ''
}
