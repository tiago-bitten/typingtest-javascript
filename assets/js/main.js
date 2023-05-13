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

window.addEventListener('load', function() {
    createLabel()
    inputPalavra.focus()
})

function createParagraph() {
    const p = document.createElement('p')
    return p
}

function createLabel() {
    for (let i in palavraFrase) {
        const p = createParagraph()
        p.classList.add(`p-${i}`)
        p.textContent = palavraFrase[i]
        divParagrafo.appendChild(p)
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
    const p = document.querySelectorAll('p')

    if (resultado === 1) {
        for (let i = 0; i < 10000; i++) {
            if (!p[i].classList.contains('acerto')) {
                p[i].classList.remove('erro')
                p[i].classList.add('acerto')
                console.log(p[i])
                index = i
                break
            }
        }

    } else if (resultado === 2) {
        for (let i = index + 1; i < 10000; i++) {
            if (!p[i].classList.contains('erro')) {
                p[i].classList.add('erro')
                console.log(p[i])
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
