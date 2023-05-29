import { UITesteDigitacao } from "./UI_teste_digitacao.js" // Importa a classe UITesteDigitacao do arquivo "UI_teste_digitacao.js"
import { TesteDigitacao } from "./texto_digitacao.js" // Importa a classe TesteDigitacao do arquivo "texto_digitacao.js"
import { EventosInput } from "./eventos_input.js" // Importa a classe EventosInput do arquivo "eventos_input.js"
import { Pontuacao } from "./pontuacao.js" // Importa a classe Pontuacao do arquivo "pontuacao.js"
import { Palavras } from "./palavras.js" // Importa a classe Palavras do arquivo "palavras.js"
import { Tempo } from "./tempo.js" // Importa a classe Tempo do arquivo "tempo.js"


const ui = new UITesteDigitacao() // Cria uma instância da classe UITesteDigitacao
const palavras = new Palavras() // Cria uma instância da classe Palavras
const tempo = new Tempo() // Cria uma instância da classe Tempo
const testeDigitacao = new TesteDigitacao(null, palavras, tempo, ui) // Cria uma instância da classe TesteDigitacao, passando null para o parâmetro pontuacao
const eventosInput = new EventosInput(testeDigitacao, null, tempo, ui) // Cria uma instância da classe EventosInput, passando as instâncias relevantes
const pontuacao = new Pontuacao(tempo, testeDigitacao, ui) // Cria uma instância da classe Pontuacao, passando as instâncias relevantes

eventosInput.pontuacao = pontuacao // Define a instância de pontuacao na propriedade pontuacao de eventosInput
testeDigitacao.pontuacao = pontuacao // Define a instância de pontuacao na propriedade pontuacao de testeDigitacao

testeDigitacao.criarTeste() // Chama o método criarTeste() da instância testeDigitacao
eventosInput.eventoCarregarTeste() // Chama o método eventoCarregarTeste() da instância eventosInput
eventosInput.eventoChecarPalavra() // Chama o método eventoChecarPalavra() da instância eventosInput
tempo.eventoIniciarContagem() // Chama o método eventoIniciarContagem() da instância tempo
testeDigitacao.eventoChecarTerminoTeste() // Chama o método eventoChecarTerminoTeste() da instância testeDigitacao
