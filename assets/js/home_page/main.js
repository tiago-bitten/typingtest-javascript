import { UIHomePage } from "./UI_home_page.js" // Importa a classe UIHomePage do arquivo "UI_home_page.js"
import { HomePage } from "./home_page.js" // Importa a classe HomePage do arquivo "home_page.js"
import { TesteDigitacao } from "../teste_digitacao_page/texto_digitacao.js" // Importa a classe TesteDigitacao do arquivo "../teste_digitacao_page/texto_digitacao.js"

const ui = new UIHomePage() // Cria uma instância da classe UIHomePage e atribui à variável "ui"
const testeDigitacao = new TesteDigitacao() // Cria uma instância da classe TesteDigitacao e atribui à variável "testeDigitacao"
const homePage = new HomePage(testeDigitacao, ui) // Cria uma instância da classe HomePage, passando "testeDigitacao" e "ui" como parâmetros, e atribui à variável "homePage"

homePage.eventoClickHome() // Chama o método "eventoClickHome" da instância de HomePage