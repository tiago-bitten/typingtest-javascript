import { UITesteDigitacao } from "./UI_teste_digitacao.js"
import { TesteDigitacao } from "./texto_digitacao.js";
import { EventosInput } from "./eventos_input.js";
import { Pontuacao } from "./pontuacao.js"
import { Palavras } from "./palavras.js";
import { Tempo } from "./tempo.js";

const ui = new UITesteDigitacao()
const pontuacao = new Pontuacao()
const palavras = new Palavras()
const tempo = new Tempo()
const testeDigitacao = new TesteDigitacao(pontuacao, palavras, tempo, ui)
const eventosInput = new EventosInput(testeDigitacao, pontuacao, tempo, ui)


testeDigitacao.criarTeste()
eventosInput.eventoApontarCursorInput()
eventosInput.eventoChecarPalavra()
tempo.eventoIniciarContagem()
testeDigitacao.eventoChecarTerminoTeste()
