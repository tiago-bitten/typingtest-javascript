const inputPalavra = document.querySelector('.input-palavra')
const botao = document.querySelector('.btn-verificar')
const pFrase = document.querySelector('.p-frase')
const frase = pFrase.textContent

let palavraFrase = frase.split(' ')
let acertos = 0
let erros = 0

document.addEventListener('keypress', function(e) {
    if (e.key === ' ') {
        checkWord()
        checkRes()
        clsInput()
    }
})

function checkWord() {
   inputPalavra.value = inputPalavra.value.trim()
    
    for (let i = 0; i < palavraFrase.length; i++) {
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
        palavraFrase = frase.split(' ')

        alert(`voce finalizou o teste! Acertos: ${acertos} Errados: ${erros}`)
        
        acertos = 0
        erros = 0
    }
}

function clsInput() {
    inputPalavra.value = ''
}
