const container = document.querySelector('.container')
const inputPalavra = document.querySelector('.input-palavra')
const botao = document.querySelector('.btn-verificar')
const divParagrafo = document.querySelector('.div-paragraph')

let acertos = 0
let erros = 0

const frasePrompt = window.prompt('Escolha uma frase')

let palavraFrase = frasePrompt.split(' ')

document.addEventListener('keypress', function(e) {
    if (e.key === ' ') {
        checkWord()
        checkRes()
        clsInput()
    }
})

window.addEventListener('load', function(e) {
    createLabel()
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
            acertos++
            palavraFrase.splice(i, 1)  
            console.log('certo')
            break
        
        } else {
            console.log('errou')
            erros++
        } 
    }
}

function checkRes() {
    if (palavraFrase.length == 0) {
        palavraFrase = frasePrompt.split(' ')

        alert(`voce finalizou o teste! Acertos: ${acertos} Errados: ${erros}`)
        
        acertos = 0
        erros = 0
    }
}

function clsInput() {
    inputPalavra.value = ''
}
