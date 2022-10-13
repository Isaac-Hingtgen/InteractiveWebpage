import moveMountains from "./Beginning.js";
import dropdown, { changeColor, loadColors } from "./Customize.js";


const customizationButton = document.querySelector(".Customize");
const colorCustomization = document.querySelectorAll("[type=color]");
const begin = document.querySelector(".begin");

customizationButton.onclick = () => {dropdown()}

window.onload = () => {
    loadColors();
}
colorCustomization[0].oninput = () => {changeColor("color1")}
colorCustomization[1].oninput = () => {changeColor("color2")}
colorCustomization[2].oninput = () => {changeColor("color3")}

begin.onclick = () => {moveMountains(begin)}