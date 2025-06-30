import { Gameboard } from "./gameboard";

export function renderBoard(board, id, comp, onHumanMove = () => {}){
    const element = document.querySelector(id);
    element.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("button");
            if(!comp){
                cell.addEventListener("click", () => {
                const accepted = board.receiveAttack(i, j);
                if(accepted) onHumanMove(i,j);
                renderBoard(board, id, comp, onHumanMove);
                });
            }
            else{
                if(board.board[i][j].hits >= 0) cell.classList.add("ship");
            }
            if(board.board[i][j] == "X") cell.classList.add("hit");
            if(board.board[i][j] == "O"){ 
                cell.classList.add("miss");
                cell.innerText = "."
            }
            element.appendChild(cell);
        }
    }
}