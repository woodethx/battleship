import { Gameboard } from "./gameboard";
export class Player{
    constructor(name, computer){
        this.board = new Gameboard();
        this.name = name;
        this.computer = computer;
        this.used = new Set();
    }
    pickSpace() {
    const gen = () => Math.floor(Math.random() * 10);
    let x = gen(), y = gen();

    while (this.used.has(`${x},${y}`)) {
        x = gen();
        y = gen();
    }

    this.used.add(`${x},${y}`);
    return [x, y];
    }

}