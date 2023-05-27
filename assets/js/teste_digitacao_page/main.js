import { TesteDigitacao } from "./texto_digitacao.js";
import { EventosInput } from "./eventos_input.js";

const testeDigitacao = new TesteDigitacao()
const eventosInput = new EventosInput(testeDigitacao)

testeDigitacao.criarTeste()
eventosInput.eventoChecarPalavra()
eventosInput.eventoApontarCursorInput()