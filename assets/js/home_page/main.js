import { HomePage } from "./home_page.js";

const homePage = new HomePage()


try {
    homePage.eventoClickHome()

} catch(e) {
    console.log(e)
}