import { UITesteDigitacao } from "./UI_teste_digitacao.js"
import { TesteDigitacao } from "./texto_digitacao.js";
import { EventosInput } from "./eventos_input.js";
import { Pontuacao } from "./pontuacao.js"
import { Palavras } from "./palavras.js";
import { Tempo } from "./tempo.js";

const ui = new UITesteDigitacao()
const palavras = new Palavras()
const tempo = new Tempo()
const testeDigitacao = new TesteDigitacao(null, palavras, tempo, ui)
const eventosInput = new EventosInput(testeDigitacao, null, tempo, ui)
const pontuacao = new Pontuacao(tempo, testeDigitacao)

eventosInput.pontuacao = pontuacao
testeDigitacao.pontuacao = pontuacao


testeDigitacao.criarTeste()
eventosInput.eventoApontarCursorInput()
eventosInput.eventoChecarPalavra()
tempo.eventoIniciarContagem()
testeDigitacao.eventoChecarTerminoTeste()