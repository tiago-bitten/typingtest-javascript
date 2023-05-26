import Palavras from "./palavras"

ui.divhomebuttons.addEventListener('click', e => {
    const evento = e.target

    if (evento.classList.contains('button-pequeno')) {
        console.log('ola, mundo')
    }
})

