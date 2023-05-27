import { TesteDigitacao } from "./texto_digitacao.js";
import { EventosInput } from "./eventos_input.js";
import { HomePage } from "../home_page/home_page.js";

const homePage = new HomePage()
const testeDigitacao = new TesteDigitacao(homePage)
const eventosInput = new EventosInput(testeDigitacao)


testeDigitacao.criarTeste()
eventosInput.eventoChecarPalavra()
eventosInput.eventoApontarCursorInput()
testeDigitacao.checarTerminoTeste()
