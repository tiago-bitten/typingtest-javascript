import { UIHomePage } from "./UI_home_page.js";
import { HomePage } from "./home_page.js";

const ui = new UIHomePage()
const homePage = new HomePage(ui)


try {
    homePage.eventoClickHome()

} catch(e) {
    console.log(e)
}