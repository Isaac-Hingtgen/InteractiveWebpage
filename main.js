import loadMountains, { moveMountains } from "./Terrain.js";
import loadColors, { changeColor, openCustomizationWindow, resetColorsToDefault } from "./Customize.js";


const customizationButton = document.querySelector(".Customize");
const colorCustomizationSelector = document.querySelectorAll("[type=color]");
const beginButton = document.querySelector(".begin");
const resetButton = document.querySelector('.reset');
const defaultButton = document.querySelector('.default');

window.onload = () => {
    loadColors();
    loadMountains();
}

window.onresize = () => {
    loadMountains();
}

customizationButton.onclick = () => {openCustomizationWindow()}
colorCustomizationSelector[0].oninput = () => {changeColor("color1")}
colorCustomizationSelector[1].oninput = () => {changeColor("color2")}
colorCustomizationSelector[2].oninput = () => {changeColor("color3")}
defaultButton.onclick = () => {resetColorsToDefault(); loadColors()}

beginButton.onclick = () => {beginButton.style.display = 'none'; resetButton.style.display = 'block'; moveMountains(); raiseEarth()}  // FIXME add raiseEarth function
resetButton.onclick = () => {} // FIXME add reset function
