const inputPalavra = document.querySelector('.input-palavra')
const botao = document.querySelector('.btn-verificar')
const pFrase = document.querySelector('.p-frase')
const frase = pFrase.textContent

const palavraFrase = frase.split(' ')

document.addEventListener('click', function(e) {
    const evento = e.target

    if (evento.classList.contains('btn-verificar')) {
        checkWord()
        clsInput()
    }
})

function checkWord() { 
    for (let i = 0; i < palavraFrase.length; i++) {
        if (inputPalavra.value === palavraFrase[i]) {
            palavraFrase.splice(0, 1)
            return console.log('certo')

        } else {
            return console.log('errado')
        }
    }
}

function clsInput() {
    inputPalavra.value = ''
}
