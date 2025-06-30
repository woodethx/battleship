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
    placeShip(x,y,cells, hor){
        if (hor && y + cells > 10)  return false;
        if (!hor && x + cells > 10) return false;
        const ship = new Ship(cells);
        const visited = new Set();
        if(hor){
            for (let i = y; i < ship.cells+y; i++) {
                if(this.board[x][i] != "-") return false;
            }
            for (let i = y; i < ship.cells+y; i++) {
                this.board[x][i] = ship;
            }
        }
        else{
            for (let i = x; i < ship.cells+x; i++) {
                if(this.board[i][y] != "-") return false;
            }
            for (let i = x; i < ship.cells+x; i++) {
                this.board[i][y] = ship;
            }
        }
        this.ships.push(ship);
        return true;
    }
    randomPlacement(){
        this.ships = [];
        this.board = this.createBoard();
        for (let i = 1; i < 7; i++) {
            const gen = () => Math.floor(Math.random() * 10);
            let x = gen(), y = gen();
            let placed = this.placeShip(x,y,i, Math.random() < .5);
            while(!placed){
                x = gen(), y = gen();
                placed = this.placeShip(x,y,i, Math.random() < .5);
            }
        }
    }
    receiveAttack(x,y){
        if(this.board[x][y] == "O" || this.board[x][y] == "X") return false;
        if(this.board[x][y] == "-"){
            this.board[x][y] = "O";
        }
        else{
            this.board[x][y].hit();
            this.board[x][y] = "X";
        };
        return true;
    };
    allSunk(){
        let allSunk = true;
        this.ships.forEach(ship => {
            if(!ship.isSunk()) allSunk = false;
        });
        return allSunk;
    }
}