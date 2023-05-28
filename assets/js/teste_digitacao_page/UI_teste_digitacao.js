export class UITesteDigitacao {
    constructor() {
        this.container = document.querySelector('.container') // Seleciona o elemento HTML com a classe 'container' e armazena na propriedade 'container'
        this.divTextoTeste = document.querySelector('.div-texto-teste') // Seleciona o elemento HTML com a classe 'div-texto-teste' e armazena na propriedade 'divTextoTeste'
        this.divInputTeste = document.querySelector('.div-input-teste') // Seleciona o elemento HTML com a classe 'div-input-teste' e armazena na propriedade 'divInputTeste'

        this.inputTeste = document.querySelector('.input-teste') // Seleciona o elemento HTML com a classe 'input-teste' e armazena na propriedade 'inputTeste'
    }

    criarP() {
        const p = document.createElement('p') // Cria um elemento <p>
        return p // Retorna o elemento <p>
    }

    criarSpan(classe) {
        const span = document.createElement('span') // Cria um elemento <span>
        
        if (classe) {
            span.classList.add(classe) // Adiciona a classe fornecida ao elemento <span>
            return span // Retorna o elemento <span>

        } else {
            return span // Retorna o elemento <span>
        }
    }

    criarDiv(dom, classe1, classe2) {
        const div = document.createElement('div') // Cria um elemento <div>
        div.classList.add(classe1) // Adiciona a classe1 fornecida ao elemento <div>
        div.classList.add(classe2) // Adiciona a classe2 fornecida ao elemento <div>

        dom.appendChild(div) // Adiciona o elemento <div> ao elemento fornecido (dom)

        return div // Retorna o elemento <div>
    }

    criarBotao() {
        const botao = document.createElement('button') // Cria um elemento <button>
        return botao // Retorna o elemento <button>
    }

    limparInput() {
        this.inputTeste.value = "" // Limpa o valor do elemento de input
    }
}
