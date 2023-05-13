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
        try {
            checkWord()
            changeColorWord()
            checkRes()

        } catch (e) {
            throw new Error()

        } finally {
            clsInput()
        }
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
        if (inputPalavra.value === '') break
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
    const maximo = Number.MAX_VALUE
    const span = document.querySelectorAll('span')

    if (resultado === 1) {
        for (let i = 0; i < maximo; i++) {
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
        for (let i = index; i < maximo; i++) {
            if (span[i].classList.contains('erro')) break
            if (!span[i].classList.contains('erro')) {
                span[i].classList.add('erro')
                console.log(span[i])
                break
            }
        }
    }
}

function resetClasses() {
    const span = document.querySelectorAll('span')

    for (let i = 0; i < palavraFrase.length; i++) {
        try {
            if (span[i].classList.contains('acerto')) {
                span[i].classList.remove('acerto')
            }

        } catch (e) {
            console.log(e)
        }
    }
}

function checkRes() {
    if (palavraFrase.length == 0) {
        palavraFrase = frasePrompt.split(' ')
        getAcurency()
        resetClasses()
    }
}

function getAcurency() {
    if (acertos > erros) {
        const acurency = ((acertos - erros) / palavraFrase.length) * 100
        alert(`Acertos: ${acertos} Erros: ${erros} Acc: ${acurency.toFixed(2)}`)
        acertos = 0
        erros = 0
    
    } else {
        acertos = 0.1
        const acurency = (acertos / palavraFrase.length) * 100
        alert(`Acertos: ${acertos + 0.9} Erros: ${erros} Acc: ${acurency.toFixed(2)}`)
        acertos = 0
        erros = 0
    }

}

function clsInput() {
    inputPalavra.value = ''
}