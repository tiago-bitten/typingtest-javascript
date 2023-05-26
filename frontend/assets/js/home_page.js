import UI from './UI.js'

const ui = new UI

export default class HomePage {
    constructor() {
        this.formTeste = ui.formTeste
    }

    eventoForm = this.formTeste.addEventListener('submit', e => {
        e.preventDefault()

        console.log('ola, mundo')
    })   
}