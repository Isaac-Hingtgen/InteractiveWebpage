

export function openCustomizationWindow() {
    const dropWindow = document.querySelector(".dropdown");
    if (dropWindow.style.display === "block") {
        dropWindow.style.display = "none";
    } else {
        dropWindow.style.display = "block";
    }
}

export function changeColor(color) {
    const thisColor = document.querySelector(`[name=${color}]`).value;
    const num = parseInt(color.charAt(5));
    localStorage.setItem(`storedColor[${num}]`, thisColor)
    document.querySelector(":root").style.setProperty(`--${color}`, localStorage.getItem(`storedColor[${num}]`));
}

export default function loadColors() {
    if (!localStorage.getItem('storedColor')) {
        return;
    }
    
    const color = [
    localStorage.getItem('storedColor[1]'),
    localStorage.getItem('storedColor[2]'),
    localStorage.getItem('storedColor[3]')
    ]
    const rootStyle = document.querySelector(":root").style;
        
    for (let i = 1; i <= color.length; i++) {
        rootStyle.setProperty(`--color${i}`, color[i-1]);                  // setting each :root color variable to the color in local storage
        document.querySelector(`[name=color${i}]`).value = color[i-1];
    }
}

export function resetColorsToDefault() {
    localStorage.removeItem('storedColor[1]');
    localStorage.removeItem('storedColor[2]');
    localStorage.removeItem('storedColor[3]');
}