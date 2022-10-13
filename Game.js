export default class Game {
    constructor() {
        document.querySelector(".gameBorder").style.background = "white";
             new Character();
    }
};

class Character {
    constructor() {
        const board = document.querySelector(".game");
        makeExitButton();
        const character = document.createElement("img");
        character.className = "avatar";
        character.style.height = '150px';
        character.setAttribute("src", localStorage.getItem("profilePic"));
        board.appendChild(character);
    }

    function makeExitButton() {
        const exitButton = document.createElement('button');
        exitButton.onclick = () => {
        }
    }
};