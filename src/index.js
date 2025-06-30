import "./styles.css";
import { renderBoard } from "./dom";
import { Gameboard } from "./gameboard";
import { Player } from "./player";

const human = new Player("Ethan", false);
const comp = new Player("Computer", true);

human.board.randomPlacement();
comp.board.randomPlacement();

function playRound(x,y){
    human.board.receiveAttack(x,y);
    const [cx, cy] = comp.pickSpace();
    comp.board.receiveAttack(cx,cy);
    renderBoard(comp.board, ".leftBoard", true);
    if(human.board.allSunk()){
        console.log(human.name+" Wins!")
    };
    if(comp.board.allSunk()){
        console.log(comp.name+" Wins!")
    };
}

renderBoard(human.board, ".rightBoard", false, playRound);
renderBoard(comp.board, ".leftBoard", true);
