import { Ship } from "./ship";
export class Gameboard{
    constructor(){
        this.board = this.createBoard();
        this.ships = [];
    }
    createBoard(){
        const board = [];
        for (let i = 0; i < 10; i++) {
            board[i] = [];
            for (let j = 0; j < 10; j++) {
                board[i][j] = ["-"]
            }
        }
        return board;
    }
    placeShip(x,y,length, vert){
        const ship = new Ship(length);
        this.ships.push(ship);
        if(vert){
            for (let i = y; i < ship.length+1; i++) {
                this.board[x][i] = ship;
            }
        }
        else{
            for (let i = x; i < ship.length+1; i++) {
                this.board[i][y] = ship;
            }
        }
    }
    receiveAttack(x,y){
        if(this.board[x][y] == "-"){
            this.board[x][y] = "O";
        }
        else{
            this.board[x][y].hit();
            this.board[x][y] = "X";
        }
    }
}