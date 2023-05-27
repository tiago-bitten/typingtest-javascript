import { UITesteDigitacao } from "./UI_teste_digitacao.js"
import { TesteDigitacao } from "./texto_digitacao.js";
import { EventosInput } from "./eventos_input.js";
import { Pontuacao } from "./pontuacao.js"
import { Palavras } from "./palavras.js";

const ui = new UITesteDigitacao()
const pontuacao = new Pontuacao()
const palavras = new Palavras()
const testeDigitacao = new TesteDigitacao(pontuacao, palavras, ui)
const eventosInput = new EventosInput(testeDigitacao, pontuacao, ui)


testeDigitacao.criarTeste()
eventosInput.eventoApontarCursorInput()
eventosInput.eventoChecarPalavra()
testeDigitacao.eventoChecarTerminoTeste()
