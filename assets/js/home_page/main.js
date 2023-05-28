import { UIHomePage } from "./UI_home_page.js";
import { HomePage } from "./home_page.js";
import { TesteDigitacao } from "../teste_digitacao_page/texto_digitacao.js";

const ui = new UIHomePage()
const testeDigitacao = new TesteDigitacao()
const homePage = new HomePage(testeDigitacao, ui)


homePage.eventoClickHome()