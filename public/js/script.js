import slides from "./function/slides.js";
import burger from "./function/burger.js";
import themedDark from "./function/theme.js";
themedDark();
const { forward, backward } = slides;

// Boutons "Next"
document.querySelector("#hero #right").addEventListener("click", forward);
document.querySelector("#compare #goma #right").addEventListener("click", forward);
document.querySelector("#compare #kinois #right").addEventListener("click", forward);

// Boutons "Prev"
document.querySelector("#hero #left").addEventListener("click", backward);
document.querySelector("#compare #goma #left").addEventListener("click", backward);
document.querySelector("#compare #kinois #left").addEventListener("click", backward);

burger();


