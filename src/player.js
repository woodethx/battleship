import { Gameboard } from "./gameboard";
export class Player{
    constructor(computer){
        this.board = new Gameboard();
        this.computer = computer;
    }
}