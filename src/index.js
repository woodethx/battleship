import "./styles.css";
import { renderBoard } from "./dom";
import { Gameboard } from "./gameboard";
import { Player } from "./player";

const human = new Player("Player", false);
const comp = new Player("Computer", true);

human.board.randomPlacement();
comp.board.randomPlacement();

const reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    console.log("test");
    human.board.randomPlacement();
    comp.board.randomPlacement();
    renderBoard(human.board, ".rightBoard", false, playRound);
    renderBoard(comp.board, ".leftBoard", true);
})

function playRound(x,y){
    human.board.receiveAttack(x,y);
    const [cx, cy] = comp.pickSpace();
    comp.board.receiveAttack(cx,cy);
    renderBoard(comp.board, ".leftBoard", true);
    if(human.board.allSunk()){
        const message = document.getElementById("message");
        message.innerText =  human.name+" Wins!";
    };
    if(comp.board.allSunk()){
        const message = document.getElementById("message");
        message.innerText = comp.name+" Wins!";
    };
}

renderBoard(human.board, ".rightBoard", false, playRound);
renderBoard(comp.board, ".leftBoard", true);
